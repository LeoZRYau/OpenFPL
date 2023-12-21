import Result "mo:base/Result";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Timer "mo:base/Timer";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import List "mo:base/List";
import SeasonManager "season-manager";
import T "types";
import DTOs "DTOs";
import Countries "Countries";

actor Self {

  let seasonManager = SeasonManager.SeasonManager(); 

  //Functions containing inter canister calls that cannot be query functions:
  public shared func getWeeklyLeaderboard(seasonId: T.SeasonId, gameweek: T.GameweekNumber) : async Result.Result<DTOs.WeeklyLeaderboardDTO, T.Error>  {
    return await seasonManager.getWeeklyLeaderboard(seasonId, gameweek);
  };

  public shared func getMonthlyLeaderboard(seasonId: T.SeasonId, clubId: T.ClubId, month: T.CalendarMonth) : async Result.Result<DTOs.MonthlyLeaderboardDTO, T.Error>  {
    return await seasonManager.getMonthlyLeaderboard(seasonId, month, clubId);
  };

  public shared func getSeasonLeaderboard(seasonId: T.SeasonId) : async Result.Result<DTOs.SeasonLeaderboardDTO, T.Error>  {
    return await seasonManager.getSeasonLeaderboard(seasonId);
  };

  public shared ({ caller }) func getProfile() : async Result.Result<DTOs.ProfileDTO, T.Error>  {
    assert not Principal.isAnonymous(caller);
    return await seasonManager.getProfile(Principal.toText(caller));
  }; 

  //Query functions:
  public shared query func getDataHashes() : async Result.Result<[DTOs.DataCacheDTO], T.Error> {
    return #ok(seasonManager.getDataHashes());
  };

  public shared query func getFixtures(seasonId: T.SeasonId) : async Result.Result<[DTOs.FixtureDTO], T.Error>  {
    return #ok(seasonManager.getFixtures(seasonId));
  };

  public shared func getManager(principalId: Text) : async Result.Result<DTOs.ProfileDTO, T.Error>  {
    return await seasonManager.getProfile(principalId);
  };

  public shared query func getTotalManagers() : async Result.Result<Nat, T.Error>  {
    return #ok(seasonManager.getTotalManagers());
  };

  public shared query func getSystemState() : async Result.Result<DTOs.SystemStateDTO, T.Error>  {
    return #ok(seasonManager.getSystemState());
  };

  public shared query func getPlayers() : async Result.Result<[DTOs.PlayerDTO], T.Error>  {
    return #ok(seasonManager.getPlayers());
  };

  public shared query func getDetailedPlayers(seasonId: T.SeasonId, gameweek: T.GameweekNumber) : async Result.Result<[DTOs.PlayerDTO], T.Error>  {
    return #ok(seasonManager.getDetailedPlayers(seasonId, gameweek));
  };

  public shared query func getCountries() : async Result.Result<[DTOs.CountryDTO], T.Error>  {
    return #ok(Countries.countries);
  };

  public shared query ({ caller }) func isUsernameAvailable(username : Text) : async Bool {
    assert not Principal.isAnonymous(caller);
    return seasonManager.isUsernameAvailable(username);
  };

  //Update functions:
  public shared ({ caller }) func createProfile(profileDTO: DTOs.ProfileDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return await seasonManager.createProfile(principalId, profileDTO);
  };

  public shared ({ caller }) func updateUsername(username : Text) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return await seasonManager.updateUsername(principalId, username);
  };

  public shared ({ caller }) func updateFavouriteClub(favouriteClubId : T.ClubId) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return await seasonManager.updateFavouriteClub(principalId, favouriteClubId);
  };

  public shared ({ caller }) func updateProfilePicture(profilePicture : Blob) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return await seasonManager.updateProfilePicture(principalId, profilePicture);
  };

  public shared ({ caller }) func saveFantasyTeam(fantasyTeam: DTOs.UpdateFantasyTeamDTO) : async Result.Result<(), T.Error> {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    return await seasonManager.saveFantasyTeam(principalId, fantasyTeam);
  };
    
  //Governance canister validation and execution functions:
  public shared func validateRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateRevaluePlayerUp(revaluePlayerUpDTO);
  };

  public shared func executeRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeRevaluePlayerUp(revaluePlayerUpDTO);
  };

  public shared func validateRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateRevaluePlayerDown(revaluePlayerDownDTO);
  };

  public shared func executeRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeRevaluePlayerDown(revaluePlayerDownDTO);
  };

  public shared func validateSubmitFixtureData(submitFixtureData: DTOs.SubmitFixtureDataDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateSubmitFixtureData(submitFixtureData);
  };

  public shared func executeSubmitFixtureData(submitFixtureData: DTOs.SubmitFixtureDataDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeSubmitFixtureData(submitFixtureData);
  };

  public shared func validateAddInitialFixtures(addInitialFixturesDTO: DTOs.AddInitialFixturesDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateAddInitialFixtures(addInitialFixturesDTO);
  };

  public shared func executeAddInitialFixtures(addInitialFixturesDTO: DTOs.AddInitialFixturesDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeAddInitialFixtures(addInitialFixturesDTO); 
  };

  public shared func validateRescheduleFixture(rescheduleFixtureDTO: DTOs.RescheduleFixtureDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateRescheduleFixture(rescheduleFixtureDTO);
  };

  public shared func executeRescheduleFixture(rescheduleFixtureDTO: DTOs.RescheduleFixtureDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeRescheduleFixture(rescheduleFixtureDTO);
  };

  public shared func validateLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateLoanPlayer(loanPlayerDTO);
  };

  public shared func executeLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeLoanPlayer(loanPlayerDTO);
  };

  public shared func validateTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateTransferPlayer(transferPlayerDTO);
  };

  public shared func executeTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeTransferPlayer(transferPlayerDTO);
  };

  public shared func validateRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateRecallPlayer(recallPlayerDTO);
  };

  public shared func executeRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeRecallPlayer(recallPlayerDTO);
  };

  public shared func validateCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateCreatePlayer(createPlayerDTO);
  };

  public shared func executeCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeCreatePlayer(createPlayerDTO);
  };

  public shared func validateUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateUpdatePlayer(updatePlayerDTO);
  };

  public shared func executeUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeUpdatePlayer(updatePlayerDTO);
  };

  public shared func validateSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateSetPlayerInjury(setPlayerInjuryDTO);
  };

  public shared func executeSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeSetPlayerInjury(setPlayerInjuryDTO);
  };
  
  public shared func validateRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateRetirePlayer(retirePlayerDTO);
  };

  public shared func executeRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeRetirePlayer(retirePlayerDTO);
  };

  public shared func validateUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateUnretirePlayer(unretirePlayerDTO);
  };
  
  public shared func executeUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeUnretirePlayer(unretirePlayerDTO);
  };

  public shared func validatePromoteFormerClub(promoteFormerClubDTO: DTOs.PromoteFormerClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validatePromoteFormerClub(promoteFormerClubDTO);
  };

  public shared func executePromoteFormerClub(promoteFormerClubDTO: DTOs.PromoteFormerClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executePromoteFormerClub(promoteFormerClubDTO);
  };

  public shared func validatePromoteNewClub(promoteNewClubDTO: DTOs.PromoteNewClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validatePromoteNewClub(promoteNewClubDTO);
  };

  public shared func executePromoteNewClub(promoteNewClubDTO: DTOs.PromoteNewClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executePromoteNewClub(promoteNewClubDTO);
  };

  public shared func validateUpdateClub(updateClubDTO: DTOs.UpdateClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.validateUpdateClub(updateClubDTO);
  };

  public shared func executeUpdateClub(updateClubDTO: DTOs.UpdateClubDTO) : async Result.Result<(), T.Error> {
    return seasonManager.executeUpdateClub(updateClubDTO);
  };

  //Stable backup:
  private stable var stable_timers : [T.TimerInfo] = [];
  private stable var stable_managers : [(Text, T.Manager)] = [];
  private stable var stable_profile_picture_canister_ids : [(T.PrincipalId, Text)] = [];
  private stable var stable_season_leaderboard_canister_ids : [(T.SeasonId, Text)] = [];
  private stable var stable_monthly_leaderboard_canister_ids : [(T.MonthlyLeaderboardKey, Text)] = [];
  private stable var stable_weekly_leaderboard_canister_ids : [(T.WeeklyLeaderboardKey, Text)] = [];


  //DO SEASON MANAGER SO I KNOW THE DATA THAT NEEDS BACKING UP!

  //stable variable backup
  /*
  private stable var stable_fantasy_teams : [(Text, T.UserFantasyTeam)] = [];

  private stable var stable_active_season_id : Nat16 = 0;
  private stable var stable_active_gameweek : Nat8 = 0;
  private stable var stable_interesting_gameweek : Nat8 = 0;
  
  private stable var stable_next_fixture_id : Nat32 = 0;
  private stable var stable_next_season_id : Nat16 = 0;

  private stable var stable_seasons : [T.Season] = [];
  private stable var stable_clubs : [T.Club] = [];
  private stable var stable_relegated_clubs : [T.Team] = [];

  private stable var stable_next_team_id : Nat16 = 0;
  private stable var stable_max_votes_per_user : Nat64 = 0;
  private stable var stable_data_cache_hashes : [T.DataCache] = [];
*/

  system func preupgrade() {
    stable_timers := seasonManager.getTimers();
    /*
    stable_fantasy_teams := fantasyTeamsInstance.getFantasyTeams();
    stable_profiles := profilesInstance.getProfiles();
    stable_active_season_id := seasonManager.getActiveSeasonId();
    stable_active_gameweek := seasonManager.getActiveGameweek();
    stable_interesting_gameweek := seasonManager.getInterestingGameweek();
    stable_next_fixture_id := seasonManager.getNextFixtureId();
    stable_next_season_id := seasonManager.getNextSeasonId();
    stable_seasons := seasonManager.getSeasons();
    stable_clubs := teamsInstance.getTeams();
    stable_relegated_clubs := teamsInstance.getRelegatedTeams();
    stable_next_club_id := teamsInstance.getNextTeamId();
    stable_season_leaderboards := fantasyTeamsInstance.getSeasonLeaderboards();
    stable_monthly_leaderboards := fantasyTeamsInstance.getMonthlyLeaderboards();
    stable_data_cache_hashes := List.toArray(dataCacheHashes);
    */
  };

  system func postupgrade() {
    /*
    profilesInstance.setData(stable_profiles);
    fantasyTeamsInstance.setData(stable_fantasy_teams);
    seasonManager.setData(stable_seasons, stable_active_season_id, stable_active_gameweek, stable_active_fixtures, stable_next_fixture_id, stable_next_season_id, stable_interesting_gameweek);
    teamsInstance.setData(stable_teams, stable_next_team_id, stable_relegated_teams);
    fantasyTeamsInstance.setDataForSeasonLeaderboards(stable_season_leaderboards);
    fantasyTeamsInstance.setDataForMonthlyLeaderboards(stable_monthly_leaderboards);
    dataCacheHashes := List.fromArray(stable_data_cache_hashes);
    */
    seasonManager.recreateTimers();
  };

};
