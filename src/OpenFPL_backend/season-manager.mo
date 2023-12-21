import T "types";
import DTOs "DTOs";
import List "mo:base/List";
import Option "mo:base/Option";
import Nat8 "mo:base/Nat8";
import Debug "mo:base/Debug";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Blob "mo:base/Blob";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";
import SHA224 "./lib/SHA224";
import SnapshotFactory "patterns/snapshot-factory";
import StrategyManager "patterns/strategy-manager";
import SeasonComposite "patterns/composites/season-composite";
import PlayerComposite "patterns/composites/player-composite";
import ClubComposite "patterns/composites/club-composite";
import ManagerComposite "patterns/composites/manager-composite";
import LeaderboardComposite "patterns/composites/leaderboard-composite";
import TimerComposite "patterns/composites/timer-composite";
import Utilities "utilities";
import CanisterIds "CanisterIds";

module {

  public class SeasonManager() {

    let strategyManager = StrategyManager.StrategyManager();
    let managerComposite = ManagerComposite.ManagerComposite();
    let playerComposite = PlayerComposite.PlayerComposite();
    let clubComposite = ClubComposite.ClubComposite();
    let seasonComposite = SeasonComposite.SeasonComposite();
    let leaderboardComposite = LeaderboardComposite.LeaderboardComposite();
    
    private var systemState: T.SystemState = {
      calculationGameweek = 1;
      calculationMonth = 8;
      calculationSeason = 1;
      pickTeamGameweek = 1;
      homepageFixturesGameweek = 1;
      homepageManagerGameweek = 0;
      transferWindowActive = false;
    };

    private var dataCacheHashes : List.List<T.DataCache> = List.fromArray([
      { category = "clubs"; hash = "DEFAULT_VALUE" },
      { category = "fixtures"; hash = "DEFAULT_VALUE" },
      { category = "weekly_leaderboard"; hash = "DEFAULT_VALUE" },
      { category = "monthly_leaderboards"; hash = "DEFAULT_VALUE" },
      { category = "season_leaderboard"; hash = "DEFAULT_VALUE" },
      { category = "players"; hash = "DEFAULT_VALUE" },
      { category = "player_events"; hash = "DEFAULT_VALUE" }
    ]);
   
    public func setStableData(
      stable_system_state : T.SystemState,
      stable_timers: [T.TimerInfo],
      stable_data_cache_hashes: [T.DataCache],
      stable_next_club_id: T.ClubId,
      stable_next_player_id: T.PlayerId,
      stable_next_season_id: T.SeasonId,
      stable_next_fixture_id: T.FixtureId,
      stable_managers: [(T.PrincipalId, T.Manager)],
      stable_clubs: [T.Club],
      stable_players: [T.Player],
      stable_seasons: [T.Season],
      stable_profile_picture_canister_ids:  [(T.PrincipalId, Text)],
      stable_season_leaderboard_canister_ids:  [(T.SeasonId, Text)],
      stable_monthly_leaderboard_canister_ids:  [(T.MonthlyLeaderboardKey, Text)],
      stable_weekly_leaderboard_canister_ids:  [(T.WeeklyLeaderboardKey, Text)]) {

      systemState := stable_system_state;
      timerComposite.setStableData(stable_timers);
      dataCacheHashes := List.fromArray(stable_data_cache_hashes);
      clubComposite.setStableData(stable_next_club_id, stable_clubs);
      playerComposite.setStableData(stable_next_player_id, stable_players);
      seasonComposite.setStableData(stable_next_season_id, stable_next_fixture_id, stable_seasons);
      managerComposite.setStableData(stable_managers, stable_profile_picture_canister_ids);
      leaderboardComposite.setStableData(
        stable_season_leaderboard_canister_ids,
        stable_monthly_leaderboard_canister_ids,
        stable_weekly_leaderboard_canister_ids);      
    };

    private func gameweekBeginExpiredCallback() : async () {

      managerComposite.snapshotFantasyTeams();
      managerComposite.resetTransfers();  

      let uniqueKickOffTimes = seasonComposite.getGameweekKickOffTimes(systemState.calculationSeason, systemState.calculationGameweek);
      for(kickOffTime in Iter.fromArray(uniqueKickOffTimes)){
        timerComposite.setTimer(kickOffTime, "gameKickOffExpired");
      };
        
      let updatedSystemState: T.SystemState = {
        pickTeamGameweek = systemState.pickTeamGameweek + 1;
        homepageFixturesGameweek = systemState.homepageFixturesGameweek;
        homepageManagerGameweek = systemState.homepageManagerGameweek;
        calculationGameweek = systemState.calculationGameweek;
        calculationMonth = systemState.calculationMonth;
        calculationSeason = systemState.calculationSeason;        
        transferWindowActive = systemState.transferWindowActive;
      };
      systemState := updatedSystemState;
      
      timerComposite.removeExpiredTimers();
    };

    private func gameKickOffExpiredCallback() : async () {
      let activatedFixtures: [T.Fixture] = seasonComposite.setFixturesToActive(systemState.calculationSeason, systemState.calculationGameweek);
      for(fixture in Iter.fromArray(activatedFixtures)){
        timerComposite.setTimer(fixture.kickOff + (Utilities.getHour() * 2), "gameCompletedExpired");
      };
      await updateCacheHash("fixtures");
      timerComposite.removeExpiredTimers();
    };

    private func gameCompletedExpiredCallback() : async () {
      seasonComposite.setFixturesToCompleted(systemState.calculationSeason, systemState.calculationGameweek);
      await updateCacheHash("fixtures");
      timerComposite.removeExpiredTimers();
    };

    private func loanExpiredCallback() : async () {
      playerComposite.loanExpired();
      await updateCacheHash("players"); 
      timerComposite.removeExpiredTimers();    
    };

    private func transferWindowStartCallback() : async () {
      let updatedSystemState: T.SystemState = {
        pickTeamGameweek = systemState.pickTeamGameweek + 1;
        homepageFixturesGameweek = systemState.homepageFixturesGameweek;
        homepageManagerGameweek = systemState.homepageManagerGameweek;
        calculationGameweek = systemState.calculationGameweek;
        calculationMonth = systemState.calculationMonth;
        calculationSeason = systemState.calculationSeason;        
        transferWindowActive = true;
      };
      systemState := updatedSystemState;
      
      let nextJan31stTime = Utilities.nextJanuary31stUnixTime();
      timerComposite.setTimer(nextJan31stTime, "transferWindowEnd");
      timerComposite.removeExpiredTimers();
    };

    private func transferWindowEndCallback() : async () {
      let updatedSystemState: T.SystemState = {
        pickTeamGameweek = systemState.pickTeamGameweek + 1;
        homepageFixturesGameweek = systemState.homepageFixturesGameweek;
        homepageManagerGameweek = systemState.homepageManagerGameweek;
        calculationGameweek = systemState.calculationGameweek;
        calculationMonth = systemState.calculationMonth;
        calculationSeason = systemState.calculationSeason;        
        transferWindowActive = false;
      };
      systemState := updatedSystemState;

      timerComposite.removeExpiredTimers();
    };

    let timerComposite = TimerComposite.TimerComposite(
      gameweekBeginExpiredCallback,
      gameKickOffExpiredCallback,
      gameCompletedExpiredCallback,
      loanExpiredCallback,
      transferWindowStartCallback,
      transferWindowEndCallback
    );
      
    private func updateCacheHash(category : Text) : async () {
      let hashBuffer = Buffer.fromArray<T.DataCache>([]);

      for (hashObj in Iter.fromList(dataCacheHashes)) {
        if (hashObj.category == category) {
          let randomHash = await SHA224.getRandomHash();
          hashBuffer.add({ category = hashObj.category; hash = randomHash });
        } else { hashBuffer.add(hashObj) };
      };

      dataCacheHashes := List.fromArray(Buffer.toArray<T.DataCache>(hashBuffer));
    };
    
    public func getSystemState() : DTOs.SystemStateDTO {
      return systemState;
    };
    
    public func getDataHashes() : [DTOs.DataCacheDTO] {
      return List.toArray(dataCacheHashes);
    };
    
    public func getFixtures(seasonId: T.SeasonId) : [DTOs.FixtureDTO] {
      return seasonComposite.getFixtures(seasonId);
    };
    
    public func getPlayers() : [DTOs.PlayerDTO] {
      return playerComposite.getPlayers(systemState.calculationSeason);
    };

    public func getPlayerDetailsForGameweek(seasonId: T.SeasonId, gameweek: T.GameweekNumber) : [DTOs.PlayerPointsDTO] {
      return playerComposite.getPlayerDetailsForGameweek(seasonId, gameweek);
    };

    public func getWeeklyLeaderboard(seasonId: T.SeasonId, gameweek: T.GameweekNumber, limit : Nat, offset : Nat) : async Result.Result<DTOs.WeeklyLeaderboardDTO, T.Error> {
      return await leaderboardComposite.getWeeklyLeaderboard(seasonId, gameweek, limit, offset);
    };
    
    public func getMonthlyLeaderboard(seasonId: T.SeasonId, month: T.CalendarMonth, clubId: T.ClubId, limit : Nat, offset : Nat) : async Result.Result<DTOs.MonthlyLeaderboardDTO, T.Error>{
      return await leaderboardComposite.getMonthlyLeaderboard(seasonId, month, clubId, limit, offset);
    };

    public func getSeasonLeaderboard(seasonId: T.SeasonId, limit : Nat, offset : Nat) : async Result.Result<DTOs.SeasonLeaderboardDTO, T.Error>{
      return await leaderboardComposite.getSeasonLeaderboard(seasonId, limit, offset);
    };
    
    public func getProfile(principalId: Text) : async Result.Result<DTOs.ProfileDTO, T.Error> {
      let manager = managers.get(principalId);
      return await managerProfileManager.getProfile(manager);
    };
    
    /* Will need when profile DTO isn't enough
    public func getManager(principalId: Text){
      
    };
    */
    
    public func getTotalManagers() : Nat{
      let managersWithTeams = Iter.filter<T.Manager>(managers.vals(), func (manager : T.Manager) : Bool { Array.size(manager.playerIds) == 11 });
      return Iter.size(managersWithTeams);
    };

    public func createProfile(principalId: Text, createProfileDTO: DTOs.ProfileDTO) : async Result.Result<(), T.Error> {
      
      var profilePictureCanisterId = "";
      if(createProfileDTO.profilePicture.size() > 0){
        profilePictureCanisterId := managerProfileManager.updateProfilePicture(principalId, createProfileDTO.profilePicture);
      };

      let newManager = managerProfileManager.buildNewManager(principalId, createProfileDTO, profilePictureCanisterId);
      managers.put(principalId, newManager);
      return #ok();
    };

    public func saveFantasyTeam(principalId: Text, updatedFantasyTeam: DTOs.UpdateFantasyTeamDTO) : async Result.Result<(), T.Error>{
      
      if(not strategyManager.isFantasyTeamValid(updatedFantasyTeam)){
        return #err(#InvalidTeamError);
      };

      let updatedManager = managerProfileManager.updateManager(principalId, managers.get(principalId), updatedFantasyTeam);
      managers.put(principalId, updatedManager);

      return #ok();
    };

    public func updateUsername(principalId: Text, updatedUsername: Text) : async Result.Result<(), T.Error>{
      
      if(not managerProfileManager.isUsernameValid(updatedUsername)){
        return #err(#InvalidData);
      };

      if(not managerProfileManager.isUsernameAvailable(updatedUsername)){
        return #err(#NotAllowed);
      };

      let updatedManager = managerProfileManager.updateUsername(principalId, managers.get(principalId), updatedUsername);
      switch(updatedManager){
        case (null){
          return #err(#NotFound);
        };
        case(?foundUpdatedManager){
          managers.put(principalId, foundUpdatedManager);
          return #ok();
        };
      }
    };
    
    public func isUsernameAvailable(username: Text) : Bool{
      return managerProfileManager.isUsernameAvailable(username);
    };







    //Governance validation and execution functions
    public func validateSubmitFixtureData(submitFixtureDataDTO: DTOs.SubmitFixtureDataDTO) : Bool {
      return seasonComposite.validateSubmitFixtureData(submitFixtureDataDTO);
    };

    public func executeSubmitFixtureData(submitFixtureData: DTOs.SubmitFixtureDataDTO) : async Result.Result<(), T.Error> {
      return seasonComposite.executeSubmitFixtureData(submitFixtureData);
    };
     
    public func validateAddInitialFixtures(addInitialFixturesDTO: DTOs.AddInitialFixturesDTO) : Bool {
      return seasonComposite.validateAddInitialFixtures(addInitialFixturesDTO);
    };

    public func executeAddInitialFixtures(addInitialFixturesDTO: DTOs.AddInitialFixturesDTO) : async Result.Result<(), T.Error> { 
      return seasonComposite.executeAddInitialFixtures(addInitialFixturesDTO);
    };

    public func validateRescheduleFixture(rescheduleFixtureDTO: DTOs.RescheduleFixtureDTO) : Bool {
      return seasonComposite.validateRescheduleFixture(rescheduleFixtureDTO);
    };

    public func executeRescheduleFixture(rescheduleFixtureDTO: DTOs.RescheduleFixtureDTO) : async Result.Result<(), T.Error> {
      return seasonComposite.executeRescheduleFixture(rescheduleFixtureDTO);
    };

    public func validateRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : Bool {
      return playerComposite.validateRevaluePlayerUp(revaluePlayerUpDTO);
    };

    public func executeRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async Result.Result<(), T.Error> {
       return playerComposite.executeRevaluePlayerUp(revaluePlayerUpDTO);
    };

    public func validateRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : Bool {
      return playerComposite.validateRevaluePlayerDown(revaluePlayerDownDTO);
    };

    public func executeRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeRevaluePlayerDown(revaluePlayerDownDTO);
    };

    public func validateLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : Bool {
      return playerComposite.validateLoanPlayer(loanPlayerDTO);
    };

    public func executeLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeLoanPlayer(loanPlayerDTO);
    };

    public func validateTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : Bool {
      return playerComposite.validateTransferPlayer(transferPlayerDTO);
    };

    public func executeTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeTransferPlayer(transferPlayerDTO);
    };

    public func validateRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : Bool {
      return playerComposite.validateRecallPlayer(recallPlayerDTO);
    };

    public func executeRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeRecallPlayer(recallPlayerDTO);
    };

    public func validateCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : Bool {
      return playerComposite.validateCreatePlayer(createPlayerDTO);
    };

    public func executeCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeCreatePlayer(createPlayerDTO);
    };

    public func validateUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : Bool {
      return playerComposite.validateUpdatePlayer(updatePlayerDTO);
    };

    public func executeUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeUpdatePlayer(updatePlayerDTO);
    };

    public func validateSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : Bool {
      return playerComposite.validateSetPlayerInjury(setPlayerInjuryDTO);
    };

    public func executeSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeSetPlayerInjury(setPlayerInjuryDTO);
    };
    
    public func validateRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : Bool {
      return playerComposite.validateRetirePlayer(retirePlayerDTO);
    };

    public func executeRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeRetirePlayer(retirePlayerDTO);
    };

    public func validateUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : Bool {
      return playerComposite.validateUnretirePlayer(unretirePlayerDTO);
    };
    
    public func executeUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<(), T.Error> {
      return playerComposite.executeUnretirePlayer(unretirePlayerDTO);
    };

    public func validatePromoteFormerClub(promoteFormerClubDTO: DTOs.PromoteFormerClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.validatePromoteFormerClub(promoteFormerClubDTO);
    };

    public func executePromoteFormerClub(promoteFormerClubDTO: DTOs.PromoteFormerClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.executePromoteFormerClub(promoteFormerClubDTO);
    };

    public func validatePromoteNewClub(promoteNewClubDTO: DTOs.PromoteNewClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.validatePromoteNewClub(promoteNewClubDTO);
    };

    public func executePromoteNewClub(promoteNewClubDTO: DTOs.PromoteNewClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.executePromoteNewClub(promoteNewClubDTO);
    };

    public func validateUpdateClub(updateClubDTO: DTOs.UpdateClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.validateUpdateClub(updateClubDTO);
    };

    public func executeUpdateClub(updateClubDTO: DTOs.UpdateClubDTO) : async Result.Result<(), T.Error> {
      return clubComposite.executeUpdateClub(updateClubDTO);
    };
  };
};
