import T "../types";
import DTOs "../DTOs";
import Result "mo:base/Result";
import TrieMap "mo:base/TrieMap";

module {

  public class PrivateLeagueComposite() {

    private var privateLeagueCanisterIds : TrieMap.TrieMap<T.PrincipalId, T.CanisterId> = TrieMap.TrieMap<T.PrincipalId, T.CanisterId>(Text.equal, Text.hash);
    private var privateLeagueNames : TrieMap.TrieMap<T.PrincipalId, Text> = TrieMap.TrieMap<T.PrincipalId, Text>(Text.equal, Text.hash);
    
    public func getPrivateLeague(privateLeagueId: T.CanisterId) : async Result.Result<DTOs.PrivateLeagueDTO, T.Error> {
      return #err(#NotFound);
    };

    public func createPrivateLeague(createPrivateLeagueDTO : DTOs.CreatePrivateLeagueDTO) : async Result.Result<(), T.Error> {
      if (not isLeagueNameValid(updatedUsername)) {
        return #err(#InvalidData);
      };

      if(isLeagueNameTaken(createPrivateLeagueDTO.leagueName)){
        return #err(#LeagueNameTakenError);
      };

      if (invalidLeagueSetup(createPrivateLeagueDTO)) {
        return #err(#InvalidLeagueError);
      };
      
      let newLeague: T.PrivateLeague = {
        
      };
    };

    public func updateLeagueName(leagueId : T.CanisterId, updatedLeagueName : Text) : async Result.Result<(), T.Error> {
      if (not isLeagueNameValid(updatedUsername)) {
        return #err(#InvalidData);
      };

      if (isLeagueNameTaken(updatedUsername, principalId)) {
        return #err(#InvalidData);
      };

      let managerCanisterId = managerCanisterIds.get(principalId);

      var result : Result.Result<(), T.Error> = #err(#NotFound);

      switch (managerCanisterId) {
        case (null) {

          let newManager : T.Manager = {
            principalId = principalId;
            username = updatedUsername;
            favouriteClubId = 0;
            createDate = Time.now();
            termsAccepted = false;
            profilePicture = null;
            profilePictureType = "";
            transfersAvailable = 0;
            monthlyBonusesAvailable = 0;
            bankQuarterMillions = 1200;
            playerIds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            captainId = 0;
            goalGetterGameweek = 0;
            goalGetterPlayerId = 0;
            passMasterGameweek = 0;
            passMasterPlayerId = 0;
            noEntryGameweek = 0;
            noEntryPlayerId = 0;
            teamBoostGameweek = 0;
            teamBoostClubId = 0;
            safeHandsGameweek = 0;
            safeHandsPlayerId = 0;
            captainFantasticGameweek = 0;
            captainFantasticPlayerId = 0;
            countrymenGameweek = 0;
            countrymenCountryId = 0;
            prospectsGameweek = 0;
            braceBonusGameweek = 0;
            hatTrickHeroGameweek = 0;
            transferWindowGameweek = 0;
            history = List.nil();

          };

          let manager_canister = actor (activeManagerCanisterId) : actor {
            addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            getTotalManagers : () -> async Nat;
          };

          let canisterManagerCount = await manager_canister.getTotalManagers();

          if (canisterManagerCount >= 12000) {
            let newManagerCanisterId = await createManagerCanister();

            let new_manager_canister = actor (newManagerCanisterId) : actor {
              addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            };
            result := await new_manager_canister.addNewManager(newManager);
            totalManagers := totalManagers + 1;
            activeManagerCanisterId := newManagerCanisterId;
            managerCanisterIds.put(newManager.principalId, newManagerCanisterId);
            return result;
          } else {
            totalManagers := totalManagers + 1;
            result := await manager_canister.addNewManager(newManager);
            managerCanisterIds.put(newManager.principalId, activeManagerCanisterId);
            managerUsernames.put(principalId, updatedUsername);
            return result;
          };
        };
        case (?foundCanisterId) {

          let manager_canister = actor (foundCanisterId) : actor {
            updateUsername : (dto : DTOs.UpdateUsernameDTO) -> async Result.Result<(), T.Error>;
          };
          let dto : DTOs.UpdateUsernameDTO = {
            principalId = principalId;
            username = updatedUsername;
          };
          result := await manager_canister.updateUsername(dto);
          managerUsernames.put(principalId, updatedUsername);
          return result;
        };
      };
      return #err(#NotFound);
    };

    public func updateFavouriteClub(principalId : T.PrincipalId, favouriteClubId : T.ClubId, systemState : T.SystemState, activeClubs : [T.Club]) : async Result.Result<(), T.Error> {

      let isClubActive = Array.find(
        activeClubs,
        func(club : T.Club) : Bool {
          return club.id == favouriteClubId;
        },
      );
      if (not Option.isSome(isClubActive)) {
        return #err(#NotFound);
      };

      if (favouriteClubId <= 0) {
        return #err(#InvalidData);
      };

      let managerCanisterId = managerCanisterIds.get(principalId);

      var result : Result.Result<(), T.Error> = #err(#NotFound);

      switch (managerCanisterId) {
        case (null) {

          let newManager : T.Manager = {
            principalId = principalId;
            username = "";
            favouriteClubId = favouriteClubId;
            createDate = Time.now();
            termsAccepted = false;
            profilePicture = null;
            profilePictureType = "";
            transfersAvailable = 0;
            monthlyBonusesAvailable = 0;
            bankQuarterMillions = 1200;
            playerIds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            captainId = 0;
            goalGetterGameweek = 0;
            goalGetterPlayerId = 0;
            passMasterGameweek = 0;
            passMasterPlayerId = 0;
            noEntryGameweek = 0;
            noEntryPlayerId = 0;
            teamBoostGameweek = 0;
            teamBoostClubId = 0;
            safeHandsGameweek = 0;
            safeHandsPlayerId = 0;
            captainFantasticGameweek = 0;
            captainFantasticPlayerId = 0;
            countrymenGameweek = 0;
            countrymenCountryId = 0;
            prospectsGameweek = 0;
            braceBonusGameweek = 0;
            hatTrickHeroGameweek = 0;
            transferWindowGameweek = 0;
            history = List.nil();

          };

          let manager_canister = actor (activeManagerCanisterId) : actor {
            addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            getTotalManagers : () -> async Nat;
          };

          let canisterManagerCount = await manager_canister.getTotalManagers();

          if (canisterManagerCount >= 12000) {
            let newManagerCanisterId = await createManagerCanister();

            let new_manager_canister = actor (newManagerCanisterId) : actor {
              addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            };
            result := await new_manager_canister.addNewManager(newManager);
            totalManagers := totalManagers + 1;
            activeManagerCanisterId := newManagerCanisterId;
            managerCanisterIds.put(newManager.principalId, newManagerCanisterId);
            return result;
          } else {
            totalManagers := totalManagers + 1;
            result := await manager_canister.addNewManager(newManager);
            managerCanisterIds.put(newManager.principalId, activeManagerCanisterId);
            return result;
          };
        };
        case (?foundCanisterId) {

          let manager_canister = actor (foundCanisterId) : actor {
            getManager : T.PrincipalId -> async ?T.Manager;
            updateFavouriteClub : (dto : DTOs.UpdateFavouriteClubDTO) -> async Result.Result<(), T.Error>;
          };

          if (systemState.pickTeamGameweek > 1) {
            let manager = await manager_canister.getManager(principalId);
            switch (manager) {
              case (null) {
                return #err(#NotFound);

              };
              case (?foundManager) {
                if (foundManager.favouriteClubId > 0) {
                  return #err(#InvalidData);
                };
              };
            };
          };

          let dto : DTOs.UpdateFavouriteClubDTO = {
            principalId = principalId;
            favouriteClubId = favouriteClubId;
          };

          result := await manager_canister.updateFavouriteClub(dto);
          return result;
        };
      };

      return #err(#NotFound);
    };

    public func updateProfilePicture(principalId : T.PrincipalId, profilePicture : Blob, profilePictureType : Text) : async Result.Result<(), T.Error> {

      if (invalidProfilePicture(profilePicture)) {

        return #err(#InvalidData);
      };

      let managerCanisterId = managerCanisterIds.get(principalId);
      var result : Result.Result<(), T.Error> = #err(#NotFound);

      switch (managerCanisterId) {
        case (null) {
          let newManager : T.Manager = {
            principalId = principalId;
            username = "";
            favouriteClubId = 0;
            createDate = Time.now();
            termsAccepted = false;
            profilePicture = ?profilePicture;
            profilePictureType = profilePictureType;
            transfersAvailable = 0;
            monthlyBonusesAvailable = 0;
            bankQuarterMillions = 1200;
            playerIds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            captainId = 0;
            goalGetterGameweek = 0;
            goalGetterPlayerId = 0;
            passMasterGameweek = 0;
            passMasterPlayerId = 0;
            noEntryGameweek = 0;
            noEntryPlayerId = 0;
            teamBoostGameweek = 0;
            teamBoostClubId = 0;
            safeHandsGameweek = 0;
            safeHandsPlayerId = 0;
            captainFantasticGameweek = 0;
            captainFantasticPlayerId = 0;
            countrymenGameweek = 0;
            countrymenCountryId = 0;
            prospectsGameweek = 0;
            braceBonusGameweek = 0;
            hatTrickHeroGameweek = 0;
            transferWindowGameweek = 0;
            history = List.nil();

          };

          let manager_canister = actor (activeManagerCanisterId) : actor {
            addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            getTotalManagers : () -> async Nat;
          };

          let canisterManagerCount = await manager_canister.getTotalManagers();

          if (canisterManagerCount >= 12000) {
            let newManagerCanisterId = await createManagerCanister();

            let new_manager_canister = actor (newManagerCanisterId) : actor {
              addNewManager : (manager : T.Manager) -> async Result.Result<(), T.Error>;
            };
            result := await new_manager_canister.addNewManager(newManager);
            totalManagers := totalManagers + 1;
            activeManagerCanisterId := newManagerCanisterId;
            managerCanisterIds.put(newManager.principalId, newManagerCanisterId);
            return result;
          } else {
            totalManagers := totalManagers + 1;
            result := await manager_canister.addNewManager(newManager);
            managerCanisterIds.put(newManager.principalId, activeManagerCanisterId);
            return result;
          };
        };
        case (?foundCanisterId) {

          let manager_canister = actor (foundCanisterId) : actor {
            getManager : T.PrincipalId -> async ?T.Manager;
            updateProfilePicture : (dto : DTOs.UpdateProfilePictureDTO) -> async Result.Result<(), T.Error>;
          };

          let dto : DTOs.UpdateProfilePictureDTO = {
            principalId = principalId;
            profilePicture = ?profilePicture;
            extension = profilePictureType;
          };

          result := await manager_canister.updateProfilePicture(dto);
          return result;
        };
      };

      return #err(#NotFound);
    };

    public func isLeagueNameTaken(leagueName : Text, leagueId : Text) : Bool {
      for (managerUsername in managerUsernames.entries()) {
        if (managerUsername.1 == username and managerUsername.0 != principalId) {
          return true;
        };
      };

      return false;
    };

    private func invalidLeaguePicture(leaguePicture : Blob) : Bool {
      let sizeInKB = Array.size(Blob.toArray(profilePicture)) / 1024;
      return (sizeInKB <= 0 or sizeInKB > 500);
    };

    public func payWeeklyRewards(rewardPool : T.RewardPool, weeklyLeaderboard : DTOs.WeeklyLeaderboardDTO, fixtures : List.List<DTOs.FixtureDTO>) : async () {
      await distributeWeeklyRewards(rewardPool.weeklyLeaderboardPool, weeklyLeaderboard);
      await distributeHighestScoringPlayerRewards(weeklyLeaderboard.seasonId, weeklyLeaderboard.gameweek, rewardPool.highestScoringMatchPlayerPool, fixtures, uniqueManagerCanisterIds);
      await distributeWeeklyATHScoreRewards(rewardPool.allTimeWeeklyHighScorePool, weeklyLeaderboard);
    };

    public func payMonthlyRewards(rewardPool : T.RewardPool, monthlyLeaderboard : DTOs.MonthlyLeaderboardDTO) : async () {
      await distributeMonthlyRewards(rewardPool, monthlyLeaderboard, uniqueManagerCanisterIds);
    };

    public func payATHMonthlyRewards(rewardPool : T.RewardPool, monthlyLeaderboards : [DTOs.MonthlyLeaderboardDTO]) : async () {
      await distributeMonthlyATHScoreRewards(rewardPool.allTimeMonthlyHighScorePool, monthlyLeaderboards);
    };

    public func paySeasonRewards(rewardPool : T.RewardPool, seasonLeaderboard : DTOs.SeasonLeaderboardDTO, players : [DTOs.PlayerDTO], seasonId : T.SeasonId) : async () {
      await distributeSeasonRewards(rewardPool.seasonLeaderboardPool, seasonLeaderboard, uniqueManagerCanisterIds);
      await distributeSeasonATHScoreRewards(rewardPool.allTimeSeasonHighScorePool, seasonLeaderboard);
      await distributeMostValuableTeamRewards(rewardPool.mostValuableTeamPool, players, seasonId, uniqueManagerCanisterIds);
    };

    public func distributeWeeklyRewards(weeklyRewardPool : Nat64, weeklyLeaderboard : DTOs.WeeklyLeaderboardDTO) : async () {

      await rewards.distributeWeeklyRewards(weeklyRewardPool, weeklyLeaderboard);

    };

    public func distributeMonthlyRewards(rewardPool : T.RewardPool, monthlyLeaderboard : DTOs.MonthlyLeaderboardDTO, uniqueManagerCanisterIds : List.List<T.CanisterId>) : async () {
      await rewards.distributeMonthlyRewards(rewardPool, monthlyLeaderboard, uniqueManagerCanisterIds);
    };

    public func distributeSeasonRewards(seasonRewardPool : Nat64, seasonLeaderboard : DTOs.SeasonLeaderboardDTO, uniqueManagerCanisterIds : List.List<T.CanisterId>) : async () {
      await rewards.distributeSeasonRewards(seasonRewardPool, seasonLeaderboard);
    };

    public func distributeMostValuableTeamRewards(mostValuableTeamPool : Nat64, players : [DTOs.PlayerDTO], currentSeason : T.SeasonId, uniqueManagerCanisterIds : List.List<T.CanisterId>) : async () {
      await rewards.distributeMostValuableTeamRewards(mostValuableTeamPool, players, currentSeason, uniqueManagerCanisterIds);
    };

    public func distributeHighestScoringPlayerRewards(seasonId : T.SeasonId, gameweek : T.GameweekNumber, highestScoringPlayerRewardPool : Nat64, fixtures : List.List<DTOs.FixtureDTO>, uniqueManagerCanisterIds : List.List<T.CanisterId>) : async () {
      await rewards.distributeHighestScoringPlayerRewards(seasonId, gameweek, highestScoringPlayerRewardPool, fixtures, uniqueManagerCanisterIds);
    };

    public func distributeWeeklyATHScoreRewards(weeklyRewardPool : Nat64, weeklyLeaderboard : DTOs.WeeklyLeaderboardDTO) : async () {
      await rewards.distributeWeeklyATHScoreRewards(weeklyRewardPool, weeklyLeaderboard);
    };

    public func distributeMonthlyATHScoreRewards(monthlyRewardPool : Nat64, monthlyLeaderboards : [DTOs.MonthlyLeaderboardDTO]) : async () {
      await rewards.distributeMonthlyATHScoreRewards(monthlyRewardPool, monthlyLeaderboards);
    };

    public func distributeSeasonATHScoreRewards(seasonRewardPool : Nat64, seasonLeaderboard : DTOs.SeasonLeaderboardDTO) : async () {
      await rewards.distributeSeasonATHScoreRewards(seasonRewardPool, seasonLeaderboard);
    };

    public func getStableManagerCanisterIds() : [(T.PrincipalId, T.CanisterId)] {
      return Iter.toArray(managerCanisterIds.entries());
    };

    public func setStableManagerCanisterIds(stable_manager_canister_ids : [(T.PrincipalId, T.CanisterId)]) : () {
      let canisterIds : TrieMap.TrieMap<T.PrincipalId, T.CanisterId> = TrieMap.TrieMap<T.PrincipalId, T.CanisterId>(Text.equal, Text.hash);

      for (canisterId in Iter.fromArray(stable_manager_canister_ids)) {
        canisterIds.put(canisterId);
      };
      managerCanisterIds := canisterIds;
    };

    public func getStableManagerUsernames() : [(T.PrincipalId, Text)] {
      return Iter.toArray(managerUsernames.entries());
    };

    public func setStableManagerUsernames(stable_manager_usernames : [(T.PrincipalId, Text)]) : () {
      let usernames : TrieMap.TrieMap<T.PrincipalId, T.CanisterId> = TrieMap.TrieMap<T.PrincipalId, T.CanisterId>(Text.equal, Text.hash);

      for (username in Iter.fromArray(stable_manager_usernames)) {
        usernames.put(username);
      };
      managerUsernames := usernames;
    };

    public func getStableUniqueManagerCanisterIds() : [T.CanisterId] {
      return List.toArray(uniqueManagerCanisterIds);
    };

    public func setStableUniqueManagerCanisterIds(stable_unique_manager_canister_ids : [T.CanisterId]) : () {
      let canisterIdBuffer = Buffer.fromArray<T.CanisterId>([]);

      for (canisterId in Iter.fromArray(stable_unique_manager_canister_ids)) {
        canisterIdBuffer.add(canisterId);
      };
      uniqueManagerCanisterIds := List.fromArray(Buffer.toArray(canisterIdBuffer));
    };

    public func getStableTotalManagers() : Nat {
      return totalManagers;
    };

    public func setStableTotalManagers(stable_total_managers : Nat) : () {
      totalManagers := stable_total_managers;
    };

    public func getStableActiveManagerCanisterId() : Text {
      return activeManagerCanisterId;
    };

    public func setStableActiveManagerCanisterId(stable_active_manager_canister_id : T.CanisterId) : () {
      activeManagerCanisterId := stable_active_manager_canister_id;
    };

    public func getStableTeamValueLeaderboards() : [(T.SeasonId, T.TeamValueLeaderboard)] {
      return rewards.getStableTeamValueLeaderboards();
    };

    public func setStableTeamValueLeaderboards(stable_team_value_leaderboards : [(T.SeasonId, T.TeamValueLeaderboard)]) {
      return rewards.setStableTeamValueLeaderboards(stable_team_value_leaderboards);
    };

    public func getStableSeasonRewards() : [T.SeasonRewards] {
      return rewards.getStableSeasonRewards();
    };

    public func setStableSeasonRewards(stable_season_rewards : [T.SeasonRewards]) {
      return rewards.setStableSeasonRewards(stable_season_rewards);
    };

    public func getStableMonthlyRewards() : [T.MonthlyRewards] {
      return rewards.getStableMonthlyRewards();
    };

    public func setStableMonthlyRewards(stable_monthly_rewards : [T.MonthlyRewards]) {
      return rewards.setStableMonthlyRewards(stable_monthly_rewards);
    };

    public func getStableWeeklyRewards() : [T.WeeklyRewards] {
      return rewards.getStableWeeklyRewards();
    };

    public func setStableWeeklyRewards(stable_weekly_rewards : [T.WeeklyRewards]) {
      return rewards.setStableWeeklyRewards(stable_weekly_rewards);
    };

    public func getStableMostValuableTeamRewards() : [T.RewardsList] {
      return rewards.getStableMostValuableTeamRewards();
    };

    public func setStableMostValuableTeamRewards(stable_most_valuable_team_rewards : [T.RewardsList]) {
      return rewards.setStableMostValuableTeamRewards(stable_most_valuable_team_rewards);
    };

    public func getStableHighestScoringPlayerRewards() : [T.RewardsList] {
      return rewards.getStableHighestScoringPlayerRewards();
    };

    public func setStableHighestScoringPlayerRewards(stable_highest_scoring_player_rewards : [T.RewardsList]) {
      return rewards.setStableHighestScoringPlayerRewards(stable_highest_scoring_player_rewards);
    };

    public func getStableWeeklyATHScores() : [T.HighScoreRecord] {
      return rewards.getStableWeeklyATHScores();
    };

    public func setStableWeeklyATHScores(stable_weekly_ath_scores : [T.HighScoreRecord]) {
      return rewards.setStableWeeklyATHScores(stable_weekly_ath_scores);
    };

    public func getStableMonthlyATHScores() : [T.HighScoreRecord] {
      return rewards.getStableMonthlyATHScores();
    };

    public func setStableMonthlyATHScores(stable_monthly_ath_scores : [T.HighScoreRecord]) {
      return rewards.setStableMonthlyATHScores(stable_monthly_ath_scores);
    };

    public func getStableSeasonATHScores() : [T.HighScoreRecord] {
      return rewards.getStableSeasonATHScores();
    };

    public func setStableSeasonATHScores(stable_season_ath_scores : [T.HighScoreRecord]) {
      return rewards.setStableMonthlyATHScores(stable_season_ath_scores);
    };

    public func getStableWeeklyATHPrizePool() : Nat64 {
      return rewards.getStableWeeklyATHPrizePool();
    };

    public func setStableWeeklyATHPrizePool(stable_weekly_ath_prize_pool : Nat64) {
      return rewards.setStableWeeklyATHPrizePool(stable_weekly_ath_prize_pool);
    };

    public func getStableMonthlyATHPrizePool() : Nat64 {
      return rewards.getStableMonthlyATHPrizePool();
    };

    public func setStableMonthlyATHPrizePool(stable_monthly_ath_prize_pool : Nat64) {
      return rewards.setStableMonthlyATHPrizePool(stable_monthly_ath_prize_pool);
    };

    public func getStableSeasonATHPrizePool() : Nat64 {
      return rewards.getSeasonATHPrizePool();
    };

    public func setStableSeasonATHPrizePool(stable_season_ath_prize_pool : Nat64) {
      return rewards.setSeasonATHPrizePool(stable_season_ath_prize_pool);
    };

    private func createManagerCanister() : async Text {

      Cycles.add<system>(2_000_000_000_000);
      let canister = await ManagerCanister._ManagerCanister();
      let IC : Management.Management = actor (ENV.Default);
      var principal : ?Principal = null;
      if (Environment.DFX_NETWORK == "local") {
        principal := ?Principal.fromText(CanisterIds.MAIN_CANISTER_LOCAL_ID);
        let _ = await Utilities.updateCanister_(canister, principal, IC);
      };
      if (Environment.DFX_NETWORK == "ic") {
        principal := ?Principal.fromText(CanisterIds.MAIN_CANISTER_IC_ID);
        let _ = await Utilities.updateCanister_(canister, principal, IC);
      };

      let canister_principal = Principal.fromActor(canister);
      let canisterId = Principal.toText(canister_principal);

      if (canisterId == "") {
        return canisterId;
      };

      let uniqueCanisterIdBuffer = Buffer.fromArray<T.CanisterId>(List.toArray(uniqueManagerCanisterIds));
      uniqueCanisterIdBuffer.add(canisterId);
      uniqueManagerCanisterIds := List.fromArray(Buffer.toArray(uniqueCanisterIdBuffer));
      activeManagerCanisterId := canisterId;
      return canisterId;
    };

    public func init() : async () {
      let result = await createManagerCanister();
      activeManagerCanisterId := result;
    };
  };
};
