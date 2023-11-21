import T "types";
import DTOs "DTOs";
import Timer "mo:base/Timer";
import { now } = "mo:base/Time";
import Int "mo:base/Int";
import FantasyTeams "fantasy-teams";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import List "mo:base/List";
import Seasons "seasons";
import Buffer "mo:base/Buffer";
import Option "mo:base/Option";
import Nat8 "mo:base/Nat8";
import Time "mo:base/Time";
import Debug "mo:base/Debug";

module {

  public class SeasonManager(
    resetTransfers : () -> async (),
    calculatePlayerScores : (activeSeason : T.SeasonId, activeGameweek : T.GameweekNumber, fixture : T.Fixture) -> async T.Fixture,
    distributeRewards : () -> async (),
    settleUserBets : () -> async (),
    snapshotGameweek : (seasonId : Nat16, gameweek : Nat8) -> async (),
    calculateFantasyTeamScores : (Nat16, Nat8) -> async (),
    getAllPlayersMap : (Nat16, Nat8) -> async [(Nat16, DTOs.PlayerScoreDTO)],
    resetFantasyTeams : () -> async (),
    updateCacheHash : (category : Text) -> async (),
    stable_timers : [T.TimerInfo],
    updatePlayerEventDataCache : () -> async (),
  ) {

    private var activeSeasonId : T.SeasonId = 1;
    private var activeGameweek : T.GameweekNumber = 1;
    private var interestingGameweek : T.GameweekNumber = 1;

    //timer data
    private var activeFixtures : [T.Fixture] = [];

    //child modules
    private let seasonsInstance = Seasons.Seasons();

    //definitions
    private let oneHour = 1_000_000_000 * 60 * 60;

    private var setAndBackupTimer : ?((duration : Timer.Duration, callbackName : Text, fixtureId : T.FixtureId) -> async ()) = null;

    public func setData(stable_seasons : [T.Season], stable_active_season_id : Nat16, stable_active_gameweek : Nat8, stable_active_fixtures : [T.Fixture], stable_next_fixture_id : Nat32, stable_next_season_id : Nat16, stable_interesting_gameweek : Nat8) {
      activeSeasonId := stable_active_season_id;
      activeGameweek := stable_active_gameweek;
      interestingGameweek := stable_interesting_gameweek;
      activeFixtures := stable_active_fixtures;
      seasonsInstance.setSeasons(stable_seasons);
      seasonsInstance.setNextFixtureId(stable_next_fixture_id);
      seasonsInstance.setNextSeasonId(stable_next_season_id);
    };

    public func seasonActive() : Bool {

      if (activeGameweek > 1) {
        return true;
      };

      if (List.some(List.fromArray(activeFixtures), func(fixture : T.Fixture) : Bool { return fixture.status > 0 })) {
        return true;
      };

      return false;
    };

    public func getActiveFixtures() : [T.Fixture] {
      return activeFixtures;
    };

    public func getNextFixtureId() : Nat32 {
      return seasonsInstance.getNextFixtureId();
    };

    public func getNextSeasonId() : Nat16 {
      return seasonsInstance.getNextSeasonId();
    };

    public func gameweekBegin() : async () {

      await snapshotGameweek(activeSeasonId, activeGameweek);

      await resetTransfers();

      activeFixtures := seasonsInstance.getGameweekFixtures(activeSeasonId, activeGameweek);
      var gameKickOffTimers = List.nil<T.TimerInfo>();
      for (i in Iter.range(0, Array.size(activeFixtures) - 1)) {
        let gameKickOffDuration : Timer.Duration = #nanoseconds(Int.abs(activeFixtures[i].kickOff - Time.now()));
        switch (setAndBackupTimer) {
          case (null) {};
          case (?actualFunction) {
            await actualFunction(gameKickOffDuration, "gameKickOffExpired", activeFixtures[i].id);
          };
        };
      };
    };

    public func gameKickOff() : async () {

      let activeFixturesBuffer = Buffer.fromArray<T.Fixture>([]);

      for (i in Iter.range(0, Array.size(activeFixtures) -1)) {
        if (activeFixtures[i].kickOff <= Time.now() and activeFixtures[i].status == 0) {

          let updatedFixture = await seasonsInstance.updateStatus(activeSeasonId, activeGameweek, activeFixtures[i].id, 1);
          activeFixturesBuffer.add(updatedFixture);

          let gameCompletedDuration : Timer.Duration = #nanoseconds(Int.abs((Time.now() + (oneHour * 2)) - Time.now()));
          switch (setAndBackupTimer) {
            case (null) {};
            case (?actualFunction) {
              await actualFunction(gameCompletedDuration, "gameCompletedExpired", activeFixtures[i].id);
            };
          };
        } else {
          activeFixturesBuffer.add(activeFixtures[i]);
        };
      };
      activeFixtures := Buffer.toArray<T.Fixture>(activeFixturesBuffer);
      await updateCacheHash("fixtures");
    };

    public func gameCompleted() : async () {
      let EventData_VotingPeriod = 0; // NEED TO SET THIS FROM THE GOVERNANCE CANISTER BUT IT NEEDS TO BE THE TIME SPECIFIC TO FIXTURE DATA COLLECTION
      let activeFixturesBuffer = Buffer.fromArray<T.Fixture>([]);

      let timerCreatedTimes = Buffer.fromArray<Int>([]);

      for (i in Iter.range(0, Array.size(activeFixtures) -1)) {
        if ((activeFixtures[i].kickOff + (oneHour * 2)) <= Time.now() and activeFixtures[i].status == 1) {

          let updatedFixture = await seasonsInstance.updateStatus(activeSeasonId, activeGameweek, activeFixtures[i].id, 2);
          activeFixturesBuffer.add(updatedFixture);

          let votingPeriodOverDuration : Timer.Duration = #nanoseconds(Int.abs((Time.now() + EventData_VotingPeriod) - Time.now()));

          if (not Buffer.contains<Int>(timerCreatedTimes, updatedFixture.kickOff, Int.equal)) {
            switch (setAndBackupTimer) {
              case (null) {};
              case (?actualFunction) {
                await actualFunction(votingPeriodOverDuration, "votingPeriodOverExpired", activeFixtures[i].id);
                timerCreatedTimes.add(updatedFixture.kickOff);
              };
            };
          };
        } else {
          activeFixturesBuffer.add(activeFixtures[i]);
        };
      };

      activeFixtures := Buffer.toArray<T.Fixture>(activeFixturesBuffer);
      await updateCacheHash("fixtures");
    };

    public func fixtureConsensusReached(seasonId : T.SeasonId, gameweekNumber : T.GameweekNumber, fixtureId : T.FixtureId, consensusPlayerEventData : [T.PlayerEventData]) : async () {
      var getSeasonId = seasonId;
      if (getSeasonId == 0) {
        getSeasonId := activeSeasonId;
      };

      var getGameweekNumber = gameweekNumber;
      if (getGameweekNumber == 0) {
        getGameweekNumber := activeGameweek;
      };

      if (interestingGameweek < activeGameweek) {
        interestingGameweek := activeGameweek;
      };

      let activeFixturesBuffer = Buffer.fromArray<T.Fixture>([]);

      for (i in Iter.range(0, Array.size(activeFixtures) -1)) {
        let fixture = activeFixtures[i];
        if (fixture.id == fixtureId and fixture.status == 2) {

          Debug.print(debug_show "found fixture");
          Debug.print(debug_show fixture);
          let updatedFixture = await seasonsInstance.savePlayerEventData(getSeasonId, getGameweekNumber, activeFixtures[i].id, List.fromArray(consensusPlayerEventData));
          activeFixturesBuffer.add(updatedFixture);
          await finaliseFixture(updatedFixture);
        } else {
          activeFixturesBuffer.add(fixture);
        };
      };

      activeFixtures := Buffer.toArray<T.Fixture>(activeFixturesBuffer);
      await checkGameweekFinished();
      await updateCacheHash("fixtures");
      await updateCacheHash("weekly_leaderboard");
      await updateCacheHash("monthly_leaderboards");
      await updateCacheHash("season_leaderboard");
      await updateCacheHash("system_state");
      await updatePlayerEventDataCache();
    };

    public func finaliseFixture(fixture : T.Fixture) : async () {
      let fixtureWithHighestPlayerId = await calculatePlayerScores(activeSeasonId, activeGameweek, fixture);
      await seasonsInstance.updateHighestPlayerId(activeSeasonId, activeGameweek, fixtureWithHighestPlayerId);
      await calculateFantasyTeamScores(activeSeasonId, activeGameweek);
    };

    private func checkGameweekFinished() : async () {
      let remainingFixtures = Array.find(
        activeFixtures,
        func(fixture : T.Fixture) : Bool {
          return fixture.status < 3;
        },
      );

      if (Option.isNull(remainingFixtures)) {
        await gameweekVerified();
        await setNextGameweek();
      };
    };

    private func gameweekVerified() : async () {
      //await distributeRewards(); //IMPLEMENT POST SNS
    };

    public func setNextGameweek() : async () {
      if (activeGameweek == 38) {
        await seasonsInstance.createNewSeason(activeSeasonId);
        await resetFantasyTeams();
        await updateCacheHash("system_state");
        await updateCacheHash("weekly_leaderboard");
        await updateCacheHash("monthly_leaderboards");
        await updateCacheHash("season_leaderboard");
        return;
      };

      activeGameweek += 1;
      activeFixtures := seasonsInstance.getGameweekFixtures(activeSeasonId, activeGameweek);

      let gameweekBeginDuration : Timer.Duration = #nanoseconds(Int.abs(activeFixtures[0].kickOff - Time.now() - oneHour));
      switch (setAndBackupTimer) {
        case (null) {};
        case (?actualFunction) {
          await actualFunction(gameweekBeginDuration, "gameweekBeginExpired", 0);
        };
      };
    };

    public func intialFixturesConfirmed() : async () {
      activeGameweek := 1;
      activeFixtures := seasonsInstance.getGameweekFixtures(activeSeasonId, activeGameweek);

      let initialGameweekBeginDuration : Timer.Duration = #nanoseconds(Int.abs(activeFixtures[0].kickOff - Time.now() - oneHour));
      switch (setAndBackupTimer) {
        case (null) {};
        case (?actualFunction) {
          await actualFunction(initialGameweekBeginDuration, "gameweekBeginExpired", 0);
        };
      };
    };

    public func getSeason(seasonId : T.SeasonId) : T.Season {
      return seasonsInstance.getSeason(seasonId);
    };

    public func getActiveSeason() : T.Season {
      return seasonsInstance.getSeason(activeSeasonId);
    };

    public func getActiveSeasonId() : Nat16 {
      return activeSeasonId;
    };

    public func getActiveGameweek() : Nat8 {
      return activeGameweek;
    };

    public func getInterestingGameweek() : Nat8 {
      return interestingGameweek;
    };

    public func getFixtures() : [T.Fixture] {
      return seasonsInstance.getSeasonFixtures(activeSeasonId);
    };

    public func getFixturesForSeason(seasonId : T.SeasonId) : [T.Fixture] {
      return seasonsInstance.getSeasonFixtures(seasonId);
    };

    public func getGameweekFixtures(seasonId : T.SeasonId, gameweek : T.GameweekNumber) : [T.Fixture] {
      return seasonsInstance.getGameweekFixtures(seasonId, gameweek);
    };

    public func getActiveGameweekFixtures() : [T.Fixture] {
      return seasonsInstance.getGameweekFixtures(activeSeasonId, activeGameweek);
    };

    public func getSeasons() : [T.Season] {
      return seasonsInstance.getSeasons();
    };

    public func addInitialFixtures(seasonId : T.SeasonId, fixtures : [T.Fixture]) : async () {
      seasonsInstance.addInitialFixtures(seasonId, fixtures);
    };

    public func rescheduleFixture(fixtureId : T.FixtureId, currentFixtureGameweek : T.GameweekNumber, updatedFixtureGameweek : T.GameweekNumber, updatedFixtureDate : Int) : async () {

      var allSeasons = List.fromArray(seasonsInstance.getSeasons());
      allSeasons := List.map<T.Season, T.Season>(
        allSeasons,
        func(currentSeason : T.Season) : T.Season {
          if (currentSeason.id == activeSeasonId) {
            var updatedGameweeks : List.List<T.Gameweek> = List.nil();
            var postponedFixtures : List.List<T.Fixture> = List.nil();

            for (gameweek in Iter.fromList(currentSeason.gameweeks)) {
              let postponedFixture = List.find<T.Fixture>(
                gameweek.fixtures,
                func(fixture : T.Fixture) : Bool {
                  return fixture.id == fixtureId;
                },
              );

              switch (postponedFixture) {
                case (null) {};
                case (?foundPostponedFixture) {
                  postponedFixtures := List.push(foundPostponedFixture, currentSeason.postponedFixtures);
                };
              };
            };

            updatedGameweeks := List.map<T.Gameweek, T.Gameweek>(
              currentSeason.gameweeks,
              func(gw : T.Gameweek) : T.Gameweek {
                if (gw.number == currentFixtureGameweek) {
                  return {
                    canisterId = gw.canisterId;
                    number = gw.number;
                    fixtures = List.filter<T.Fixture>(
                      gw.fixtures,
                      func(fixture : T.Fixture) : Bool {
                        return fixture.id != fixtureId;
                      },
                    );
                  };
                } else { return gw };
              },
            );

            let updatedSeason : T.Season = {
              id = currentSeason.id;
              name = currentSeason.name;
              year = currentSeason.year;
              gameweeks = updatedGameweeks;
              postponedFixtures = postponedFixtures;
            };

            return updatedSeason;
          } else {
            return currentSeason;
          };
        },
      );
      seasonsInstance.setSeasons(List.toArray(allSeasons));
    };

    public func setTimerBackupFunction(_setAndBackupTimer : (duration : Timer.Duration, callbackName : Text, fixtureId : T.FixtureId) -> async ()) {
      setAndBackupTimer := ?_setAndBackupTimer;
    };

    public func getFixture(seasonId : T.SeasonId, gameweekNumber : T.GameweekNumber, fixtureId : T.FixtureId) : async T.Fixture {

      var getSeasonId = seasonId;
      if (getSeasonId == 0) {
        getSeasonId := activeSeasonId;
      };

      var getGameweekNumber = gameweekNumber;
      if (getGameweekNumber == 0) {
        getGameweekNumber := activeGameweek;
      };

      return await seasonsInstance.getFixture(getSeasonId, getGameweekNumber, fixtureId);
    };

    /*Remove these functions post sns*/
    public func getValidatableFixtures() : [T.Fixture] {
      return seasonsInstance.getValidatableFixtures(activeSeasonId, activeGameweek);
    };

    public func updateFixtureStatus(fixtureId : T.FixtureId, status : Nat8) : async () {
      let updatedFixture = await seasonsInstance.updateStatus(activeSeasonId, activeGameweek, fixtureId, status);
    };

    public func setGameweekFixtures() : async () {
      let gameweekFixtures = seasonsInstance.getGameweekFixtures(activeSeasonId, activeGameweek);
      activeFixtures := gameweekFixtures;
    };

  };
};
