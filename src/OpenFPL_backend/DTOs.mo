import T "types";
import Nat "mo:base/Nat";

module DTOs {

  public type SystemStateDTO = {
    calculationGameweek : T.GameweekNumber;
    calculationMonth : T.CalendarMonth;
    calculationSeasonId : T.SeasonId;
    pickTeamGameweek : T.GameweekNumber;
    pickTeamSeasonId : T.SeasonId;
    pickTeamSeasonName : Text;
    calculationSeasonName : Text;
    transferWindowActive : Bool;
    onHold : Bool;
  };

  public type RevaluePlayerUpDTO = {
    playerId : T.PlayerId;
  };

  public type RevaluePlayerDownDTO = {
    playerId : T.PlayerId;
  };

  public type SubmitFixtureDataDTO = {
    seasonId : T.SeasonId;
    gameweek : T.GameweekNumber;
    fixtureId : T.FixtureId;
    playerEventData : [T.PlayerEventData];
  };

  public type AddInitialFixturesDTO = {
    seasonId : T.SeasonId;
    seasonFixtures : [DTOs.FixtureDTO];
  };

  public type MoveFixtureDTO = {
    fixtureId : T.FixtureId;
    updatedFixtureGameweek : T.GameweekNumber;
    updatedFixtureDate : Int;
  };

  public type PostponeFixtureDTO = {
    fixtureId : T.FixtureId;
  };

  public type RescheduleFixtureDTO = {
    postponedFixtureId : T.FixtureId;
    updatedFixtureGameweek : T.GameweekNumber;
    updatedFixtureDate : Int;
  };

  public type LoanPlayerDTO = {
    playerId : T.PlayerId;
    loanClubId : T.ClubId;
    loanEndDate : Int;
  };

  public type TransferPlayerDTO = {
    playerId : T.PlayerId;
    newClubId : T.ClubId;
  };

  public type RecallPlayerDTO = {
    playerId : T.PlayerId;
  };

  public type CreatePlayerDTO = {
    clubId : T.ClubId;
    position : T.PlayerPosition;
    firstName : Text;
    lastName : Text;
    shirtNumber : Nat8;
    valueQuarterMillions : Nat16;
    dateOfBirth : Int;
    nationality : T.CountryId;
  };

  public type UpdatePlayerDTO = {
    playerId : T.PlayerId;
    position : T.PlayerPosition;
    firstName : Text;
    lastName : Text;
    shirtNumber : Nat8;
    dateOfBirth : Int;
    nationality : T.CountryId;
  };

  public type SetPlayerInjuryDTO = {
    playerId : T.PlayerId;
    description : Text;
    expectedEndDate : Int;
  };

  public type RetirePlayerDTO = {
    playerId : T.PlayerId;
    retirementDate : Int;
  };

  public type UnretirePlayerDTO = {
    playerId : T.PlayerId;
  };

  public type UpdateClubDTO = {
    clubId : T.ClubId;
    name : Text;
    friendlyName : Text;
    primaryColourHex : Text;
    secondaryColourHex : Text;
    thirdColourHex : Text;
    abbreviatedName : Text;
    shirtType : T.ShirtType;
  };

  public type PromoteFormerClubDTO = {
    clubId : T.ClubId;
  };

  public type PromoteNewClubDTO = {
    name : Text;
    friendlyName : Text;
    primaryColourHex : Text;
    secondaryColourHex : Text;
    thirdColourHex : Text;
    abbreviatedName : Text;
    shirtType : T.ShirtType;
  };

  public type ProfileDTO = {
    principalId : Text;
    username : Text;
    termsAccepted : Bool;
    profilePicture : ?Blob;
    profilePictureType : Text;
    favouriteClubId : T.ClubId;
    createDate : Int;
  };

  public type PickTeamDTO = {
    principalId : Text;
    username : Text;
    transfersAvailable : Nat8;
    monthlyBonusesAvailable : Nat8;
    bankQuarterMillions : Nat16;
    playerIds : [T.PlayerId];
    captainId : T.PlayerId;
    goalGetterGameweek : T.GameweekNumber;
    goalGetterPlayerId : T.PlayerId;
    passMasterGameweek : T.GameweekNumber;
    passMasterPlayerId : T.PlayerId;
    noEntryGameweek : T.GameweekNumber;
    noEntryPlayerId : T.PlayerId;
    teamBoostGameweek : T.GameweekNumber;
    teamBoostClubId : T.ClubId;
    safeHandsGameweek : T.GameweekNumber;
    safeHandsPlayerId : T.PlayerId;
    captainFantasticGameweek : T.GameweekNumber;
    captainFantasticPlayerId : T.PlayerId;
    countrymenGameweek : T.GameweekNumber;
    countrymenCountryId : T.CountryId;
    prospectsGameweek : T.GameweekNumber;
    braceBonusGameweek : T.GameweekNumber;
    hatTrickHeroGameweek : T.GameweekNumber;
    transferWindowGameweek : T.GameweekNumber;
  };

  public type ManagerDTO = {
    principalId : Text;
    username : Text;
    profilePicture : ?Blob;
    favouriteClubId : T.ClubId;
    createDate : Int;
    gameweeks : [T.FantasyTeamSnapshot];
    weeklyPosition : Int;
    monthlyPosition : Int;
    seasonPosition : Int;
    weeklyPositionText : Text;
    monthlyPositionText : Text;
    seasonPositionText : Text;
    weeklyPoints : Int16;
    monthlyPoints : Int16;
    seasonPoints : Int16;
  };

  public type PlayerRatingsDTO = {
    players : [T.Player];
    totalEntries : Nat16;
  };

  public type PlayerDTO = {
    id : Nat16;
    clubId : T.ClubId;
    position : T.PlayerPosition;
    firstName : Text;
    lastName : Text;
    shirtNumber : Nat8;
    valueQuarterMillions : Nat16;
    dateOfBirth : Int;
    nationality : T.CountryId;
    totalPoints : Int16;
    status : T.PlayerStatus;
  };

  public type PlayerScoreDTO = {
    id : Nat16;
    points : Int16;
    clubId : T.ClubId;
    goalsScored : Int16;
    goalsConceded : Int16;
    position : T.PlayerPosition;
    nationality : T.CountryId;
    dateOfBirth : Int;
    saves : Int16;
    assists : Int16;
    events : [T.PlayerEventData];
  };

  public type PlayerPointsDTO = {
    id : Nat16;
    gameweek : T.GameweekNumber;
    points : Int16;
    clubId : T.ClubId;
    position : T.PlayerPosition;
    events : [T.PlayerEventData];
  };

  public type PlayerDetailDTO = {
    id : T.PlayerId;
    clubId : T.ClubId;
    position : T.PlayerPosition;
    firstName : Text;
    lastName : Text;
    shirtNumber : Nat8;
    valueQuarterMillions : Nat16;
    dateOfBirth : Int;
    nationality : T.CountryId;
    seasonId : T.SeasonId;
    gameweeks : [PlayerGameweekDTO];
    valueHistory : [T.ValueHistory];
    status : T.PlayerStatus;
    parentClubId : T.ClubId;
    latestInjuryEndDate : Int;
    injuryHistory : [T.InjuryHistory];
    retirementDate : Int;
  };

  public type PlayerGameweekDTO = {
    number : Nat8;
    events : [T.PlayerEventData];
    points : Int16;
    fixtureId : T.FixtureId;
  };

  public type LeaderboardEntryDTO = {
    position : Int;
    positionText : Text;
    username : Text;
    principalId : Text;
    points : Int16;
  };

  public type SeasonDTO = {
    id : T.SeasonId;
    name : Text;
    year : Nat16;
  };

  public type FixtureDTO = {
    id : Nat32;
    seasonId : T.SeasonId;
    gameweek : T.GameweekNumber;
    kickOff : Int;
    homeClubId : T.ClubId;
    awayClubId : T.ClubId;
    homeGoals : Nat8;
    awayGoals : Nat8;
    status : T.FixtureStatusType;
    highestScoringPlayerId : Nat16;
    events : [T.PlayerEventData];
  };

  public type UpdateSystemStateDTO = {
    pickTeamSeasonId : T.SeasonId;
    pickTeamGameweek : T.GameweekNumber;
    calculationGameweek : T.GameweekNumber;
    calculationMonth : T.CalendarMonth;
    calculationSeasonId : T.SeasonId;
    transferWindowActive : Bool;
    onHold : Bool;
  };

  public type UpdateFixtureDTO = {
    seasonId : T.SeasonId;
    fixtureId : T.FixtureId;
    gameweek : T.GameweekNumber;
    kickOff : Int;
    status : T.FixtureStatusType;
  };

  public type ClubDTO = {
    id : T.ClubId;
    name : Text;
    friendlyName : Text;
    primaryColourHex : Text;
    secondaryColourHex : Text;
    thirdColourHex : Text;
    abbreviatedName : Text;
    shirtType : T.ShirtType;
  };

  public type CountryDTO = {
    id : T.CountryId;
    name : Text;
    code : Text;
  };

  public type DataCacheDTO = {
    category : Text;
    hash : Text;
  };

  public type WeeklyLeaderboardDTO = {
    seasonId : T.SeasonId;
    gameweek : T.GameweekNumber;
    entries : [T.LeaderboardEntry];
    totalEntries : Nat;
  };

  public type MonthlyLeaderboardDTO = {
    seasonId : T.SeasonId;
    month : Nat8;
    clubId : T.ClubId;
    entries : [T.LeaderboardEntry];
    totalEntries : Nat;
  };

  public type SeasonLeaderboardDTO = {
    seasonId : T.SeasonId;
    entries : [T.LeaderboardEntry];
    totalEntries : Nat;
  };

  public type TeamValueLeaderboard = {
    seasonId : T.SeasonId;
    entries : [T.LeaderboardEntry];
    totalEntries : Nat;
  };

  public type UpdateTeamSelectionDTO = {
    playerIds : [T.PlayerId];
    captainId : T.PlayerId;
    goalGetterGameweek : T.GameweekNumber;
    goalGetterPlayerId : T.PlayerId;
    passMasterGameweek : T.GameweekNumber;
    passMasterPlayerId : T.PlayerId;
    noEntryGameweek : T.GameweekNumber;
    noEntryPlayerId : T.PlayerId;
    teamBoostGameweek : T.GameweekNumber;
    teamBoostClubId : T.ClubId;
    safeHandsGameweek : T.GameweekNumber;
    safeHandsPlayerId : T.PlayerId;
    captainFantasticGameweek : T.GameweekNumber;
    captainFantasticPlayerId : T.PlayerId;
    countrymenGameweek : T.GameweekNumber;
    countrymenCountryId : T.CountryId;
    prospectsGameweek : T.GameweekNumber;
    braceBonusGameweek : T.GameweekNumber;
    hatTrickHeroGameweek : T.GameweekNumber;
    transferWindowGameweek : T.GameweekNumber;
    principalId : Text;
  };

  public type UpdateUsernameDTO = {
    principalId : Text;
    username : Text;
  };

  public type UpdateFavouriteClubDTO = {
    principalId : Text;
    favouriteClubId : T.ClubId;
  };

  public type UpdateProfilePictureDTO = {
    principalId : Text;
    profilePicture : ?Blob;
    extension : Text;
  };

  public type AddNewManagerDTO = {
    playerIds : [T.PlayerId];
    captainId : T.PlayerId;
    goalGetterGameweek : T.GameweekNumber;
    goalGetterPlayerId : T.PlayerId;
    passMasterGameweek : T.GameweekNumber;
    passMasterPlayerId : T.PlayerId;
    noEntryGameweek : T.GameweekNumber;
    noEntryPlayerId : T.PlayerId;
    teamBoostGameweek : T.GameweekNumber;
    teamBoostClubId : T.ClubId;
    safeHandsGameweek : T.GameweekNumber;
    safeHandsPlayerId : T.PlayerId;
    captainFantasticGameweek : T.GameweekNumber;
    captainFantasticPlayerId : T.PlayerId;
    countrymenGameweek : T.GameweekNumber;
    countrymenCountryId : T.CountryId;
    prospectsGameweek : T.GameweekNumber;
    braceBonusGameweek : T.GameweekNumber;
    hatTrickHeroGameweek : T.GameweekNumber;
    transferWindowGameweek : T.GameweekNumber;
    principalId : Text;
    username : Text;
    favouriteClubId : T.ClubId;
    profilePicture : ?Blob;
  };

  public type WeeklyCanisterDTO = {
    canister : T.WeeklyLeaderboardCanister;
    cycles : Nat;
  };

  public type MonthlyCanisterDTO = {
    canister : T.MonthlyLeaderboardCanister;
    cycles : Nat;
  };

  public type SeasonCanisterDTO = {
    canister : T.SeasonLeaderboardCanister;
    cycles : Nat;
  };

  public type ManagerCanisterDTO = {
    canisterId : Text;
    cycles : Nat;
  };

  public type TimerDTO = {
    id : Int;
    triggerTime : Int;
    callbackName : Text;
  };

};
