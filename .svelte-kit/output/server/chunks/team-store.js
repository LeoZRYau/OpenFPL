import { Actor, HttpAgent } from "@dfinity/agent";
import { w as writable } from "./index.js";
import {
  c as create_ssr_component,
  h as compute_rest_props,
  i as getContext,
  j as spread,
  k as escape_attribute_value,
  l as escape_object,
} from "./index2.js";
const idlFactory$1 = ({ IDL }) => {
  const List = IDL.Rec();
  const List_1 = IDL.Rec();
  const List_2 = IDL.Rec();
  const SeasonId = IDL.Nat16;
  const TeamId = IDL.Nat16;
  const FixtureId = IDL.Nat32;
  const PlayerEventData = IDL.Record({
    fixtureId: FixtureId,
    playerId: IDL.Nat16,
    eventStartMinute: IDL.Nat8,
    eventEndMinute: IDL.Nat8,
    teamId: TeamId,
    eventType: IDL.Nat8,
  });
  List.fill(IDL.Opt(IDL.Tuple(PlayerEventData, List)));
  const GameweekNumber = IDL.Nat8;
  const Fixture = IDL.Record({
    id: IDL.Nat32,
    status: IDL.Nat8,
    awayTeamId: TeamId,
    highestScoringPlayerId: IDL.Nat16,
    homeTeamId: TeamId,
    seasonId: SeasonId,
    events: List,
    kickOff: IDL.Int,
    homeGoals: IDL.Nat8,
    gameweek: GameweekNumber,
    awayGoals: IDL.Nat8,
  });
  const Error = IDL.Variant({
    DecodeError: IDL.Null,
    NotAllowed: IDL.Null,
    NotFound: IDL.Null,
    NotAuthorized: IDL.Null,
    InvalidData: IDL.Null,
    AlreadyExists: IDL.Null,
    InvalidTeamError: IDL.Null,
  });
  const Result = IDL.Variant({ ok: IDL.Null, err: Error });
  const PlayerId = IDL.Nat16;
  const AccountBalanceDTO = IDL.Record({
    icpBalance: IDL.Nat64,
    fplBalance: IDL.Nat64,
  });
  const LeaderboardEntry = IDL.Record({
    username: IDL.Text,
    positionText: IDL.Text,
    position: IDL.Int,
    principalId: IDL.Text,
    points: IDL.Int16,
  });
  const PaginatedClubLeaderboard = IDL.Record({
    month: IDL.Nat8,
    clubId: TeamId,
    totalEntries: IDL.Nat,
    seasonId: SeasonId,
    entries: IDL.Vec(LeaderboardEntry),
  });
  const DataCache = IDL.Record({ hash: IDL.Text, category: IDL.Text });
  const FantasyTeam = IDL.Record({
    playerIds: IDL.Vec(PlayerId),
    teamName: IDL.Text,
    goalGetterPlayerId: PlayerId,
    favouriteTeamId: TeamId,
    hatTrickHeroGameweek: GameweekNumber,
    transfersAvailable: IDL.Nat8,
    teamBoostGameweek: GameweekNumber,
    captainFantasticGameweek: GameweekNumber,
    teamBoostTeamId: TeamId,
    noEntryPlayerId: PlayerId,
    safeHandsPlayerId: PlayerId,
    braceBonusGameweek: GameweekNumber,
    passMasterGameweek: GameweekNumber,
    goalGetterGameweek: GameweekNumber,
    bankBalance: IDL.Nat,
    captainFantasticPlayerId: PlayerId,
    noEntryGameweek: GameweekNumber,
    safeHandsGameweek: GameweekNumber,
    principalId: IDL.Text,
    passMasterPlayerId: PlayerId,
    captainId: PlayerId,
  });
  const FantasyTeamSnapshot = IDL.Record({
    playerIds: IDL.Vec(PlayerId),
    teamName: IDL.Text,
    goalGetterPlayerId: PlayerId,
    favouriteTeamId: TeamId,
    hatTrickHeroGameweek: GameweekNumber,
    transfersAvailable: IDL.Nat8,
    teamBoostGameweek: GameweekNumber,
    captainFantasticGameweek: GameweekNumber,
    teamBoostTeamId: TeamId,
    noEntryPlayerId: PlayerId,
    safeHandsPlayerId: PlayerId,
    braceBonusGameweek: GameweekNumber,
    passMasterGameweek: GameweekNumber,
    goalGetterGameweek: GameweekNumber,
    bankBalance: IDL.Nat,
    captainFantasticPlayerId: PlayerId,
    gameweek: GameweekNumber,
    noEntryGameweek: GameweekNumber,
    safeHandsGameweek: GameweekNumber,
    principalId: IDL.Text,
    passMasterPlayerId: PlayerId,
    captainId: IDL.Nat16,
    points: IDL.Int16,
  });
  const FixtureDTO = IDL.Record({
    id: IDL.Nat32,
    status: IDL.Nat8,
    awayTeamId: TeamId,
    highestScoringPlayerId: IDL.Nat16,
    homeTeamId: TeamId,
    seasonId: SeasonId,
    events: IDL.Vec(PlayerEventData),
    kickOff: IDL.Int,
    homeGoals: IDL.Nat8,
    gameweek: GameweekNumber,
    awayGoals: IDL.Nat8,
  });
  const ManagerDTO = IDL.Record({
    favouriteTeamId: TeamId,
    displayName: IDL.Text,
    weeklyPosition: IDL.Int,
    createDate: IDL.Int,
    monthlyPoints: IDL.Int16,
    weeklyPoints: IDL.Int16,
    weeklyPositionText: IDL.Text,
    gameweeks: IDL.Vec(FantasyTeamSnapshot),
    monthlyPosition: IDL.Int,
    seasonPosition: IDL.Int,
    monthlyPositionText: IDL.Text,
    profilePicture: IDL.Vec(IDL.Nat8),
    seasonPoints: IDL.Int16,
    principalId: IDL.Text,
    seasonPositionText: IDL.Text,
  });
  const ProfileDTO = IDL.Record({
    icpDepositAddress: IDL.Vec(IDL.Nat8),
    favouriteTeamId: IDL.Nat16,
    displayName: IDL.Text,
    fplDepositAddress: IDL.Vec(IDL.Nat8),
    createDate: IDL.Int,
    canUpdateFavouriteTeam: IDL.Bool,
    reputation: IDL.Nat32,
    principalName: IDL.Text,
    profilePicture: IDL.Vec(IDL.Nat8),
    membershipType: IDL.Nat8,
  });
  const PaginatedLeaderboard = IDL.Record({
    totalEntries: IDL.Nat,
    seasonId: SeasonId,
    entries: IDL.Vec(LeaderboardEntry),
    gameweek: GameweekNumber,
  });
  const SeasonDTO = IDL.Record({
    id: SeasonId,
    name: IDL.Text,
    year: IDL.Nat16,
  });
  List_2.fill(IDL.Opt(IDL.Tuple(Fixture, List_2)));
  const Gameweek = IDL.Record({
    number: GameweekNumber,
    fixtures: List_2,
    canisterId: IDL.Text,
  });
  List_1.fill(IDL.Opt(IDL.Tuple(Gameweek, List_1)));
  const Season = IDL.Record({
    id: IDL.Nat16,
    postponedFixtures: List_2,
    name: IDL.Text,
    year: IDL.Nat16,
    gameweeks: List_1,
  });
  const SystemState = IDL.Record({
    activeMonth: IDL.Nat8,
    focusGameweek: GameweekNumber,
    activeSeason: Season,
    activeGameweek: GameweekNumber,
  });
  const Team = IDL.Record({
    id: IDL.Nat16,
    secondaryColourHex: IDL.Text,
    name: IDL.Text,
    friendlyName: IDL.Text,
    thirdColourHex: IDL.Text,
    abbreviatedName: IDL.Text,
    shirtType: IDL.Nat8,
    primaryColourHex: IDL.Text,
  });
  const TimerInfo = IDL.Record({
    id: IDL.Int,
    fixtureId: FixtureId,
    playerId: PlayerId,
    callbackName: IDL.Text,
    triggerTime: IDL.Int,
  });
  return IDL.Service({
    executeAddInitialFixtures: IDL.Func(
      [SeasonId, IDL.Vec(Fixture)],
      [Result],
      []
    ),
    executeCreatePlayer: IDL.Func(
      [
        TeamId,
        IDL.Nat8,
        IDL.Text,
        IDL.Text,
        IDL.Nat8,
        IDL.Nat,
        IDL.Int,
        IDL.Text,
      ],
      [Result],
      []
    ),
    executeLoanPlayer: IDL.Func([PlayerId, TeamId, IDL.Int], [Result], []),
    executePromoteFormerTeam: IDL.Func([TeamId], [Result], []),
    executePromoteNewTeam: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Nat8],
      [Result],
      []
    ),
    executeRecallPlayer: IDL.Func([PlayerId], [Result], []),
    executeRescheduleFixture: IDL.Func(
      [FixtureId, GameweekNumber, GameweekNumber, IDL.Int],
      [Result],
      []
    ),
    executeRetirePlayer: IDL.Func([PlayerId, IDL.Int], [Result], []),
    executeRevaluePlayerDown: IDL.Func(
      [SeasonId, GameweekNumber, PlayerId],
      [Result],
      []
    ),
    executeRevaluePlayerUp: IDL.Func([PlayerId], [Result], []),
    executeSetPlayerInjury: IDL.Func(
      [PlayerId, IDL.Text, IDL.Int],
      [Result],
      []
    ),
    executeSubmitFixtureData: IDL.Func(
      [FixtureId, IDL.Vec(PlayerEventData)],
      [Result],
      []
    ),
    executeTransferPlayer: IDL.Func([PlayerId, TeamId], [Result], []),
    executeUnretirePlayer: IDL.Func([PlayerId], [Result], []),
    executeUpdatePlayer: IDL.Func(
      [PlayerId, IDL.Nat8, IDL.Text, IDL.Text, IDL.Nat8, IDL.Int, IDL.Text],
      [Result],
      []
    ),
    executeUpdateTeam: IDL.Func(
      [
        TeamId,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Nat8,
      ],
      [Result],
      []
    ),
    getAccountBalanceDTO: IDL.Func([], [AccountBalanceDTO], []),
    getActiveFixtures: IDL.Func([], [IDL.Vec(Fixture)], ["query"]),
    getAddTeamsFunction: IDL.Func([], [IDL.Text], []),
    getClubLeaderboard: IDL.Func(
      [IDL.Nat16, IDL.Nat8, TeamId, IDL.Nat, IDL.Nat],
      [PaginatedClubLeaderboard],
      ["query"]
    ),
    getClubLeaderboardsCache: IDL.Func(
      [IDL.Nat16, IDL.Nat8],
      [IDL.Vec(PaginatedClubLeaderboard)],
      ["query"]
    ),
    getDataHashes: IDL.Func([], [IDL.Vec(DataCache)], ["query"]),
    getFantasyTeam: IDL.Func([], [FantasyTeam], ["query"]),
    getFantasyTeamForGameweek: IDL.Func(
      [IDL.Text, IDL.Nat16, IDL.Nat8],
      [FantasyTeamSnapshot],
      ["query"]
    ),
    getFixture: IDL.Func([SeasonId, GameweekNumber, FixtureId], [Fixture], []),
    getFixtureDTOs: IDL.Func([], [IDL.Vec(FixtureDTO)], ["query"]),
    getFixtures: IDL.Func([], [IDL.Vec(Fixture)], ["query"]),
    getFixturesForSeason: IDL.Func([SeasonId], [IDL.Vec(Fixture)], ["query"]),
    getManager: IDL.Func(
      [IDL.Text, SeasonId, GameweekNumber],
      [ManagerDTO],
      ["query"]
    ),
    getProfileDTO: IDL.Func([], [ProfileDTO], []),
    getPublicProfileDTO: IDL.Func([IDL.Text], [ProfileDTO], ["query"]),
    getSeasonLeaderboard: IDL.Func(
      [IDL.Nat16, IDL.Nat, IDL.Nat],
      [PaginatedLeaderboard],
      ["query"]
    ),
    getSeasonLeaderboardCache: IDL.Func(
      [IDL.Nat16],
      [PaginatedLeaderboard],
      ["query"]
    ),
    getSeasons: IDL.Func([], [IDL.Vec(SeasonDTO)], ["query"]),
    getSystemState: IDL.Func([], [SystemState], ["query"]),
    getTeamValueInfo: IDL.Func([], [IDL.Vec(IDL.Text)], []),
    getTeams: IDL.Func([], [IDL.Vec(Team)], ["query"]),
    getTimers: IDL.Func([], [IDL.Vec(TimerInfo)], []),
    getTotalManagers: IDL.Func([], [IDL.Nat], ["query"]),
    getValidatableFixtures: IDL.Func([], [IDL.Vec(Fixture)], ["query"]),
    getWeeklyLeaderboard: IDL.Func(
      [IDL.Nat16, IDL.Nat8, IDL.Nat, IDL.Nat],
      [PaginatedLeaderboard],
      ["query"]
    ),
    getWeeklyLeaderboardCache: IDL.Func(
      [IDL.Nat16, IDL.Nat8],
      [PaginatedLeaderboard],
      ["query"]
    ),
    isDisplayNameValid: IDL.Func([IDL.Text], [IDL.Bool], ["query"]),
    rescheduleFixture: IDL.Func([], [], []),
    saveFantasyTeam: IDL.Func(
      [IDL.Vec(IDL.Nat16), IDL.Nat16, IDL.Nat8, IDL.Nat16, IDL.Nat16],
      [Result],
      []
    ),
    savePlayerEvents: IDL.Func([FixtureId, IDL.Vec(PlayerEventData)], [], []),
    setGameweekFixtures: IDL.Func([], [], []),
    updateDisplayName: IDL.Func([IDL.Text], [Result], []),
    updateFavouriteTeam: IDL.Func([IDL.Nat16], [Result], []),
    updateProfilePicture: IDL.Func([IDL.Vec(IDL.Nat8)], [Result], []),
    updateTeamValueInfo: IDL.Func([], [], []),
    validateAddInitialFixtures: IDL.Func(
      [SeasonId, IDL.Vec(Fixture)],
      [Result],
      []
    ),
    validateCreatePlayer: IDL.Func(
      [
        TeamId,
        IDL.Nat8,
        IDL.Text,
        IDL.Text,
        IDL.Nat8,
        IDL.Nat,
        IDL.Int,
        IDL.Text,
      ],
      [Result],
      []
    ),
    validateLoanPlayer: IDL.Func([PlayerId, TeamId, IDL.Int], [Result], []),
    validatePromoteFormerTeam: IDL.Func([TeamId], [Result], []),
    validatePromoteNewTeam: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
      [Result],
      []
    ),
    validateRecallPlayer: IDL.Func([PlayerId], [Result], []),
    validateRescheduleFixtures: IDL.Func(
      [FixtureId, GameweekNumber, GameweekNumber, IDL.Int],
      [Result],
      []
    ),
    validateRetirePlayer: IDL.Func([PlayerId, IDL.Int], [Result], []),
    validateRevaluePlayerDown: IDL.Func([PlayerId], [Result], []),
    validateRevaluePlayerUp: IDL.Func([PlayerId], [Result], []),
    validateSetPlayerInjury: IDL.Func(
      [PlayerId, IDL.Text, IDL.Int],
      [Result],
      []
    ),
    validateSubmitFixtureData: IDL.Func(
      [FixtureId, IDL.Vec(PlayerEventData)],
      [Result],
      []
    ),
    validateTransferPlayer: IDL.Func([PlayerId, TeamId], [Result], []),
    validateUnretirePlayer: IDL.Func([PlayerId], [Result], []),
    validateUpdatePlayer: IDL.Func(
      [PlayerId, IDL.Nat8, IDL.Text, IDL.Text, IDL.Nat8, IDL.Int, IDL.Text],
      [Result],
      []
    ),
    validateUpdateTeam: IDL.Func(
      [TeamId, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
      [Result],
      []
    ),
    withdrawICP: IDL.Func([IDL.Float64, IDL.Text], [Result], []),
  });
};
const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  const List_1 = IDL.Rec();
  const List_2 = IDL.Rec();
  const List_3 = IDL.Rec();
  const List_4 = IDL.Rec();
  const List_5 = IDL.Rec();
  const TeamId = IDL.Nat16;
  const SeasonId = IDL.Nat16;
  const FixtureId = IDL.Nat32;
  const PlayerEventData = IDL.Record({
    fixtureId: FixtureId,
    playerId: IDL.Nat16,
    eventStartMinute: IDL.Nat8,
    eventEndMinute: IDL.Nat8,
    teamId: TeamId,
    eventType: IDL.Nat8,
  });
  List_3.fill(IDL.Opt(IDL.Tuple(PlayerEventData, List_3)));
  const GameweekNumber = IDL.Nat8;
  const Fixture = IDL.Record({
    id: IDL.Nat32,
    status: IDL.Nat8,
    awayTeamId: TeamId,
    highestScoringPlayerId: IDL.Nat16,
    homeTeamId: TeamId,
    seasonId: SeasonId,
    events: List_3,
    kickOff: IDL.Int,
    homeGoals: IDL.Nat8,
    gameweek: GameweekNumber,
    awayGoals: IDL.Nat8,
  });
  const PlayerDTO = IDL.Record({
    id: IDL.Nat16,
    value: IDL.Nat,
    dateOfBirth: IDL.Int,
    nationality: IDL.Text,
    shirtNumber: IDL.Nat8,
    totalPoints: IDL.Int16,
    teamId: IDL.Nat16,
    position: IDL.Nat8,
    lastName: IDL.Text,
    firstName: IDL.Text,
  });
  const PlayerScoreDTO = IDL.Record({
    id: IDL.Nat16,
    assists: IDL.Int16,
    goalsScored: IDL.Int16,
    saves: IDL.Int16,
    goalsConceded: IDL.Int16,
    events: List_3,
    teamId: IDL.Nat16,
    position: IDL.Nat8,
    points: IDL.Int16,
  });
  const DataCache = IDL.Record({ hash: IDL.Text, category: IDL.Text });
  const PlayerId = IDL.Nat16;
  const PlayerGameweek = IDL.Record({
    events: List_3,
    number: IDL.Nat8,
    points: IDL.Int16,
  });
  List_2.fill(IDL.Opt(IDL.Tuple(PlayerGameweek, List_2)));
  const PlayerSeason = IDL.Record({ id: IDL.Nat16, gameweeks: List_2 });
  List_1.fill(IDL.Opt(IDL.Tuple(PlayerSeason, List_1)));
  const InjuryHistory = IDL.Record({
    description: IDL.Text,
    injuryStartDate: IDL.Int,
    expectedEndDate: IDL.Int,
  });
  List.fill(IDL.Opt(IDL.Tuple(InjuryHistory, List)));
  const TransferHistory = IDL.Record({
    transferDate: IDL.Int,
    loanEndDate: IDL.Int,
    toTeam: TeamId,
    transferSeason: SeasonId,
    fromTeam: TeamId,
    transferGameweek: GameweekNumber,
  });
  List_4.fill(IDL.Opt(IDL.Tuple(TransferHistory, List_4)));
  const ValueHistory = IDL.Record({
    oldValue: IDL.Nat,
    newValue: IDL.Nat,
    seasonId: IDL.Nat16,
    gameweek: IDL.Nat8,
  });
  List_5.fill(IDL.Opt(IDL.Tuple(ValueHistory, List_5)));
  const Player = IDL.Record({
    id: PlayerId,
    value: IDL.Nat,
    seasons: List_1,
    dateOfBirth: IDL.Int,
    injuryHistory: List,
    transferHistory: List_4,
    isInjured: IDL.Bool,
    nationality: IDL.Text,
    retirementDate: IDL.Int,
    valueHistory: List_5,
    shirtNumber: IDL.Nat8,
    teamId: TeamId,
    position: IDL.Nat8,
    parentTeamId: IDL.Nat16,
    lastName: IDL.Text,
    onLoan: IDL.Bool,
    firstName: IDL.Text,
  });
  const PlayerGameweekDTO = IDL.Record({
    fixtureId: FixtureId,
    events: IDL.Vec(PlayerEventData),
    number: IDL.Nat8,
    points: IDL.Int16,
  });
  const PlayerDetailDTO = IDL.Record({
    id: PlayerId,
    value: IDL.Nat,
    dateOfBirth: IDL.Int,
    injuryHistory: IDL.Vec(InjuryHistory),
    seasonId: SeasonId,
    isInjured: IDL.Bool,
    gameweeks: IDL.Vec(PlayerGameweekDTO),
    nationality: IDL.Text,
    retirementDate: IDL.Int,
    valueHistory: IDL.Vec(ValueHistory),
    shirtNumber: IDL.Nat8,
    teamId: TeamId,
    position: IDL.Nat8,
    parentTeamId: IDL.Nat16,
    lastName: IDL.Text,
    onLoan: IDL.Bool,
    firstName: IDL.Text,
  });
  const PlayerPointsDTO = IDL.Record({
    id: IDL.Nat16,
    events: IDL.Vec(PlayerEventData),
    teamId: IDL.Nat16,
    position: IDL.Nat8,
    gameweek: GameweekNumber,
    points: IDL.Int16,
  });
  return IDL.Service({
    calculatePlayerScores: IDL.Func(
      [IDL.Nat16, IDL.Nat8, Fixture],
      [Fixture],
      []
    ),
    createPlayer: IDL.Func(
      [
        TeamId,
        IDL.Nat8,
        IDL.Text,
        IDL.Text,
        IDL.Nat8,
        IDL.Nat,
        IDL.Int,
        IDL.Text,
      ],
      [],
      []
    ),
    getActivePlayers: IDL.Func([], [IDL.Vec(PlayerDTO)], ["query"]),
    getAllPlayers: IDL.Func([], [IDL.Vec(PlayerDTO)], ["query"]),
    getAllPlayersMap: IDL.Func(
      [IDL.Nat16, IDL.Nat8],
      [IDL.Vec(IDL.Tuple(IDL.Nat16, PlayerScoreDTO))],
      ["query"]
    ),
    getDataHashes: IDL.Func([], [IDL.Vec(DataCache)], ["query"]),
    getPlayer: IDL.Func([IDL.Nat16], [Player], ["query"]),
    getPlayerDetails: IDL.Func(
      [IDL.Nat16, SeasonId],
      [PlayerDetailDTO],
      ["query"]
    ),
    getPlayerDetailsForGameweek: IDL.Func(
      [IDL.Nat16, IDL.Nat8],
      [IDL.Vec(PlayerPointsDTO)],
      ["query"]
    ),
    getPlayersDetailsForGameweek: IDL.Func(
      [IDL.Vec(PlayerId), IDL.Nat16, IDL.Nat8],
      [IDL.Vec(PlayerPointsDTO)],
      ["query"]
    ),
    getRetiredPlayer: IDL.Func([IDL.Text], [IDL.Vec(Player)], ["query"]),
    loanPlayer: IDL.Func(
      [PlayerId, TeamId, IDL.Int, SeasonId, GameweekNumber],
      [],
      []
    ),
    recallPlayer: IDL.Func([PlayerId], [], []),
    retirePlayer: IDL.Func([PlayerId, IDL.Int], [], []),
    revaluePlayerDown: IDL.Func(
      [PlayerId, SeasonId, GameweekNumber],
      [],
      ["oneway"]
    ),
    revaluePlayerUp: IDL.Func([PlayerId, SeasonId, GameweekNumber], [], []),
    setDefaultHashes: IDL.Func([], [], []),
    setPlayerInjury: IDL.Func([PlayerId, IDL.Text, IDL.Int], [], []),
    transferPlayer: IDL.Func(
      [PlayerId, TeamId, SeasonId, GameweekNumber],
      [],
      []
    ),
    unretirePlayer: IDL.Func([PlayerId], [], []),
    updateHashForCategory: IDL.Func([IDL.Text], [], []),
    updatePlayer: IDL.Func(
      [PlayerId, IDL.Nat8, IDL.Text, IDL.Text, IDL.Nat8, IDL.Int, IDL.Text],
      [],
      []
    ),
    updatePlayerEventDataCache: IDL.Func([], [], []),
  });
};
class ActorFactory {
  static createActor(
    idlFactory2,
    canisterId = "",
    identity = null,
    options = null
  ) {
    const hostOptions = {
      host: `https://${canisterId}.ic0.app`,
      identity,
    };
    if (!options) {
      options = {
        agentOptions: hostOptions,
      };
    } else if (!options.agentOptions) {
      options.agentOptions = hostOptions;
    } else {
      options.agentOptions.host = hostOptions.host;
    }
    const agent = new HttpAgent({ ...options.agentOptions });
    return Actor.createActor(idlFactory2, {
      agent,
      canisterId,
      ...options?.actorOptions,
    });
  }
  static createIdentityActor(authStore, canisterId) {
    let unsubscribe;
    return new Promise((resolve, reject) => {
      unsubscribe = authStore.subscribe((store) => {
        if (store.identity) {
          resolve(store.identity);
        }
      });
    }).then((identity) => {
      unsubscribe();
      return ActorFactory.createActor(
        canisterId ===
          {
            DFX_VERSION: "0.14.4",
            DFX_NETWORK: "ic",
            CANISTER_CANDID_PATH_OpenFPL_backend:
              "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did",
            CANISTER_CANDID_PATH_OPENFPL_BACKEND:
              "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did",
            CANISTER_CANDID_PATH_player_canister:
              "/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did",
            CANISTER_CANDID_PATH_PLAYER_CANISTER:
              "/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did",
            TOKEN_CANISTER_CANISTER_ID: "hwd4h-eyaaa-aaaal-qb6ra-cai",
            CANISTER_ID_TOKEN_CANISTER: "hwd4h-eyaaa-aaaal-qb6ra-cai",
            CANISTER_ID_token_canister: "hwd4h-eyaaa-aaaal-qb6ra-cai",
            PLAYER_CANISTER_CANISTER_ID: "pec6o-uqaaa-aaaal-qb7eq-cai",
            CANISTER_ID_PLAYER_CANISTER: "pec6o-uqaaa-aaaal-qb7eq-cai",
            CANISTER_ID_player_canister: "pec6o-uqaaa-aaaal-qb7eq-cai",
            NNS_SNS_WASM_CANISTER_ID: "qaa6y-5yaaa-aaaaa-aaafa-cai",
            CANISTER_ID_NNS_SNS_WASM: "qaa6y-5yaaa-aaaaa-aaafa-cai",
            CANISTER_ID_nns_sns_wasm: "qaa6y-5yaaa-aaaaa-aaafa-cai",
            NNS_ROOT_CANISTER_ID: "r7inp-6aaaa-aaaaa-aaabq-cai",
            CANISTER_ID_NNS_ROOT: "r7inp-6aaaa-aaaaa-aaabq-cai",
            CANISTER_ID_nns_root: "r7inp-6aaaa-aaaaa-aaabq-cai",
            NNS_REGISTRY_CANISTER_ID: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
            CANISTER_ID_NNS_REGISTRY: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
            CANISTER_ID_nns_registry: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
            NNS_LIFELINE_CANISTER_ID: "rno2w-sqaaa-aaaaa-aaacq-cai",
            CANISTER_ID_NNS_LIFELINE: "rno2w-sqaaa-aaaaa-aaacq-cai",
            CANISTER_ID_nns_lifeline: "rno2w-sqaaa-aaaaa-aaacq-cai",
            NNS_LEDGER_CANISTER_ID: "ryjl3-tyaaa-aaaaa-aaaba-cai",
            CANISTER_ID_NNS_LEDGER: "ryjl3-tyaaa-aaaaa-aaaba-cai",
            CANISTER_ID_nns_ledger: "ryjl3-tyaaa-aaaaa-aaaba-cai",
            NNS_GOVERNANCE_CANISTER_ID: "rrkah-fqaaa-aaaaa-aaaaq-cai",
            CANISTER_ID_NNS_GOVERNANCE: "rrkah-fqaaa-aaaaa-aaaaq-cai",
            CANISTER_ID_nns_governance: "rrkah-fqaaa-aaaaa-aaaaq-cai",
            NNS_GENESIS_TOKEN_CANISTER_ID: "renrk-eyaaa-aaaaa-aaada-cai",
            CANISTER_ID_NNS_GENESIS_TOKEN: "renrk-eyaaa-aaaaa-aaada-cai",
            CANISTER_ID_nns_genesis_token: "renrk-eyaaa-aaaaa-aaada-cai",
            NNS_CYCLES_MINTING_CANISTER_ID: "rkp4c-7iaaa-aaaaa-aaaca-cai",
            CANISTER_ID_NNS_CYCLES_MINTING: "rkp4c-7iaaa-aaaaa-aaaca-cai",
            CANISTER_ID_nns_cycles_minting: "rkp4c-7iaaa-aaaaa-aaaca-cai",
            INTERNET_IDENTITY_CANISTER_ID: "rdmx6-jaaaa-aaaaa-aaadq-cai",
            CANISTER_ID_INTERNET_IDENTITY: "rdmx6-jaaaa-aaaaa-aaadq-cai",
            CANISTER_ID_internet_identity: "rdmx6-jaaaa-aaaaa-aaadq-cai",
            OPENFPL_FRONTEND_CANISTER_ID: "bgpwv-eqaaa-aaaal-qb6eq-cai",
            CANISTER_ID_OPENFPL_FRONTEND: "bgpwv-eqaaa-aaaal-qb6eq-cai",
            CANISTER_ID_OpenFPL_frontend: "bgpwv-eqaaa-aaaal-qb6eq-cai",
            OPENFPL_BACKEND_CANISTER_ID: "bboqb-jiaaa-aaaal-qb6ea-cai",
            CANISTER_ID_OPENFPL_BACKEND: "bboqb-jiaaa-aaaal-qb6ea-cai",
            CANISTER_ID_OpenFPL_backend: "bboqb-jiaaa-aaaal-qb6ea-cai",
            CANISTER_ID: "bgpwv-eqaaa-aaaal-qb6eq-cai",
            CANISTER_CANDID_PATH:
              "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_frontend/assetstorage.did",
            VITE_AUTH_PROVIDER_URL: "https://identity.ic0.app",
            LESSOPEN: "| /usr/bin/lesspipe %s",
            USER: "james",
            npm_config_user_agent:
              "npm/9.5.0 node/v18.15.0 linux x64 workspaces/false",
            GIT_ASKPASS:
              "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass.sh",
            npm_node_execpath:
              "/home/james/.nvm/versions/node/v18.15.0/bin/node",
            SHLVL: "1",
            npm_config_noproxy: "",
            MOTD_SHOWN: "update-motd",
            HOME: "/home/james",
            TERM_PROGRAM_VERSION: "1.84.2",
            NVM_BIN: "/home/james/.nvm/versions/node/v18.15.0/bin",
            VSCODE_IPC_HOOK_CLI:
              "/tmp/vscode-ipc-55e74069-e243-4d5e-85c2-180e79128070.sock",
            npm_package_json: "/home/james/OpenFPL/package.json",
            NVM_INC: "/home/james/.nvm/versions/node/v18.15.0/include/node",
            VSCODE_GIT_ASKPASS_MAIN:
              "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass-main.js",
            VSCODE_GIT_ASKPASS_NODE:
              "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/node",
            npm_config_userconfig: "/home/james/.npmrc",
            npm_config_local_prefix: "/home/james/OpenFPL",
            COLORTERM: "truecolor",
            WSL_DISTRO_NAME: "Ubuntu",
            COLOR: "1",
            NVM_DIR: "/home/james/.nvm",
            npm_config_metrics_registry: "https://registry.npmjs.org/",
            LOGNAME: "james",
            NAME: "DESKTOP-UV8C3VI",
            WSL_INTEROP: "/run/WSL/12_interop",
            _: "/home/james/.nvm/versions/node/v18.15.0/bin/npm",
            npm_config_prefix: "/home/james/.nvm/versions/node/v18.15.0",
            TERM: "xterm-256color",
            npm_config_cache: "/home/james/.npm",
            npm_config_node_gyp:
              "/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
            PATH: "/home/james/OpenFPL/node_modules/.bin:/home/james/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:/home/james/bin:/home/james/.nvm/versions/node/v18.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/Microsoft/jdk-11.0.16.101-hotspot/bin:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft SDKs/Azure/CLI2/wbin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/bin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/libnvvp:/mnt/c/Program Files (x86)/Common Files/Intel/Shared Libraries/redist/intel64/compiler:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Microsoft SQL Server/130/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/Client SDK/ODBC/170/Tools/Binn/:/mnt/c/Program Files/NVIDIA Corporation/Nsight Compute 2020.1.2/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files/Git LFS:/mnt/c/Program Files/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/ZED SDK/dependencies/freeglut_2.8/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/glew-1.12.0/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/opencv_3.1.0/x64:/mnt/c/Program Files (x86)/ZED SDK/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/dotnet/:/mnt/c/Program Files/Git/cmd:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/Scripts/:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/james/.dotnet/tools:/mnt/c/Users/james/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Program Files/heroku/bin:/mnt/c/Users/james/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Program Files/MongoDB/Server/4.4/bin/:/mnt/c/Users/james/AppData/Roaming/npm:/mnt/c/Users/james/.dotnet/tools:/snap/bin",
            NODE: "/home/james/.nvm/versions/node/v18.15.0/bin/node",
            npm_package_name: "open_fpl_frontend",
            LANG: "C.UTF-8",
            LS_COLORS:
              "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",
            VSCODE_GIT_IPC_HANDLE: "/tmp/vscode-git-ec8aec957c.sock",
            TERM_PROGRAM: "vscode",
            npm_lifecycle_script: "vite build",
            SHELL: "/bin/bash",
            npm_package_version: "0.1.0",
            npm_lifecycle_event: "build",
            LESSCLOSE: "/usr/bin/lesspipe %s %s",
            VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
            npm_config_globalconfig:
              "/home/james/.nvm/versions/node/v18.15.0/etc/npmrc",
            npm_config_init_module: "/home/james/.npm-init.js",
            PWD: "/home/james/OpenFPL",
            npm_execpath:
              "/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/bin/npm-cli.js",
            NVM_CD_FLAGS: "",
            XDG_DATA_DIRS: "/usr/local/share:/usr/share:/var/lib/snapd/desktop",
            npm_config_global_prefix: "/home/james/.nvm/versions/node/v18.15.0",
            npm_command: "run-script",
            HOSTTYPE: "x86_64",
            WSLENV: "VSCODE_WSL_EXT_LOCATION/up",
            INIT_CWD: "/home/james/OpenFPL",
            EDITOR: "vi",
            NODE_ENV: "production",
            VITE_OPENFPL_BACKEND_CANISTER_ID: "bkyz2-fmaaa-aaaaa-qaaaq-cai",
            VITE_OPENFPL_FRONTEND_CANISTER_ID: "bd3sg-teaaa-aaaaa-qaaba-cai",
            VITE___CANDID_UI_CANISTER_ID: "bw4dl-smaaa-aaaaa-qaacq-cai",
            VITE_PLAYER_CANISTER_CANISTER_ID: "be2us-64aaa-aaaaa-qaabq-cai",
            VITE_TOKEN_CANISTER_CANISTER_ID: "br5f7-7uaaa-aaaaa-qaaca-cai",
            VITE_DFX_NETWORK: "local",
            VITE_HOST: "http://localhost:8000",
          }.OPENFPL_BACKEND_CANISTER_ID
          ? idlFactory$1
          : idlFactory,
        canisterId,
        identity
      );
    });
  }
}
var Position = /* @__PURE__ */ ((Position2) => {
  Position2[(Position2["GOALKEEPER"] = 0)] = "GOALKEEPER";
  Position2[(Position2["DEFENDER"] = 1)] = "DEFENDER";
  Position2[(Position2["MIDFIELDER"] = 2)] = "MIDFIELDER";
  Position2[(Position2["FORWARD"] = 3)] = "FORWARD";
  return Position2;
})(Position || {});
const Al = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of al" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-al" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="red" d="M0 0h640v480H0z"></path><path id="al-a" d="M272 93.3c-4.6 0-12.3 1.5-12.2 5-13-2.1-14.3 3.2-13.5 8 1.2-1.9 2.7-3 3.9-3.1 1.7-.3 3.5.3 5.4 1.4a21.6 21.6 0 0 1 4.8 4.1c-4.6 1.1-8.2.4-11.8-.2a16.5 16.5 0 0 1-5.7-2.4c-1.5-1-2-2-4.3-4.3-2.7-2.8-5.6-2-4.7 2.3 2.1 4 5.6 5.8 10 6.6 2.1.3 5.3 1 8.9 1 3.6 0 7.6-.5 9.8 0-1.3.8-2.8 2.3-5.8 2.8-3 .6-7.5-1.8-10.3-2.4.3 2.3 3.3 4.5 9.1 5.7 9.6 2 17.5 3.6 22.8 6.5a37.3 37.3 0 0 1 10.9 9.2c4.7 5.5 5 9.8 5.2 10.8 1 8.8-2.1 13.8-7.9 15.4-2.8.7-8-.7-9.8-2.9-2-2.2-3.7-6-3.2-12 .5-2.2 3.1-8.3.9-9.5a273.7 273.7 0 0 0-32.3-15.1c-2.5-1-4.5 2.4-5.3 3.8a50.2 50.2 0 0 1-36-23.7c-4.2-7.6-11.3 0-10.1 7.3 1.9 8 8 13.8 15.4 18 7.5 4.1 17 8.2 26.5 8 5.2 1 5.1 7.6-1 8.9-12.1 0-21.8-.2-30.9-9-6.9-6.3-10.7 1.2-8.8 5.4 3.4 13.1 22.1 16.8 41 12.6 7.4-1.2 3 6.6 1 6.7-8 5.7-22.1 11.2-34.6 0-5.7-4.4-9.6-.8-7.4 5.5 5.5 16.5 26.7 13 41.2 5 3.7-2.1 7.1 2.7 2.6 6.4-18.1 12.6-27.1 12.8-35.3 8-10.2-4.1-11 7.2-5 11 6.7 4 23.8 1 36.4-7 5.4-4 5.6 2.3 2.2 4.8-14.9 12.9-20.8 16.3-36.3 14.2-7.7-.6-7.6 8.9-1.6 12.6 8.3 5.1 24.5-3.3 37-13.8 5.3-2.8 6.2 1.8 3.6 7.3a53.9 53.9 0 0 1-21.8 18c-7 2.7-13.6 2.3-18.3.7-5.8-2-6.5 4-3.3 9.4 1.9 3.3 9.8 4.3 18.4 1.3 8.6-3 17.8-10.2 24.1-18.5 5.5-4.9 4.9 1.6 2.3 6.2-12.6 20-24.2 27.4-39.5 26.2-6.7-1.2-8.3 4-4 9 7.6 6.2 17 6 25.4-.2 7.3-7 21.4-22.4 28.8-30.6 5.2-4.1 6.9 0 5.3 8.4-1.4 4.8-4.8 10-14.3 13.6-6.5 3.7-1.6 8.8 3.2 9 2.7 0 8.1-3.2 12.3-7.8 5.4-6.2 5.8-10.3 8.8-19.9 2.8-4.6 7.9-2.4 7.9 2.4-2.5 9.6-4.5 11.3-9.5 15.2-4.7 4.5 3.3 6 6 4.1 7.8-5.2 10.6-12 13.2-18.2 2-4.4 7.4-2.3 4.8 5-6 17.4-16 24.2-33.3 27.8-1.7.3-2.8 1.3-2.2 3.3l7 7c-10.7 3.2-19.4 5-30.2 8l-14.8-9.8c-1.3-3.2-2-8.2-9.8-4.7-5.2-2.4-7.7-1.5-10.6 1 4.2 0 6 1.2 7.7 3.1 2.2 5.7 7.2 6.3 12.3 4.7 3.3 2.7 5 4.9 8.4 7.7l-16.7-.5c-6-6.3-10.6-6-14.8-1-3.3.5-4.6.5-6.8 4.4 3.4-1.4 5.6-1.8 7.1-.3 6.3 3.7 10.4 2.9 13.5 0l17.5 1.1c-2.2 2-5.2 3-7.5 4.8-9-2.6-13.8 1-15.4 8.3a17 17 0 0 0-1.2 9.3c.8-3 2.3-5.5 4.9-7 8 2 11-1.3 11.5-6.1 4-3.2 9.8-3.9 13.7-7.1 4.6 1.4 6.8 2.3 11.4 3.8 1.6 5 5.3 6.9 11.3 5.6 7 .2 5.8 3.2 6.4 5.5 2-3.3 1.9-6.6-2.5-9.6-1.6-4.3-5.2-6.3-9.8-3.8-4.4-1.2-5.5-3-9.9-4.3 11-3.5 18.8-4.3 29.8-7.8l7.7 6.8c1.5.9 2.9 1.1 3.8 0 6.9-10 10-18.7 16.3-25.3 2.5-2.8 5.6-6.4 9-7.3 1.7-.5 3.8-.2 5.2 1.3 1.3 1.4 2.4 4.1 2 8.2-.7 5.7-2.1 7.6-3.7 11-1.7 3.5-3.6 5.6-5.7 8.3-4 5.3-9.4 8.4-12.6 10.5-6.4 4.1-9 2.3-14 2-6.4.7-8 3.8-2.8 8.1 4.8 2.6 9.2 2.9 12.8 2.2 3-.6 6.6-4.5 9.2-6.6 2.8-3.3 7.6.6 4.3 4.5-5.9 7-11.7 11.6-19 11.5-7.7 1-6.2 5.3-1.2 7.4 9.2 3.7 17.4-3.3 21.6-8 3.2-3.5 5.5-3.6 5 1.9-3.3 9.9-7.6 13.7-14.8 14.2-5.8-.6-5.9 4-1.6 7 9.6 6.6 16.6-4.8 19.9-11.6 2.3-6.2 5.9-3.3 6.3 1.8 0 6.9-3 12.4-11.3 19.4 6.3 10.1 13.7 20.4 20 30.5l19.2-214L320 139c-2-1.8-8.8-9.8-10.5-11-.7-.6-1-1-.1-1.4.9-.4 3-.8 4.5-1-4-4.1-7.6-5.4-15.3-7.6 1.9-.8 3.7-.4 9.3-.6a30.2 30.2 0 0 0-13.5-10.2c4.2-3 5-3.2 9.2-6.7a86.3 86.3 0 0 1-19.5-3.8 37.4 37.4 0 0 0-12-3.4zm.8 8.4c3.8 0 6.1 1.3 6.1 2.9 0 1.6-2.3 2.9-6.1 2.9s-6.2-1.5-6.2-3c0-1.6 2.4-2.8 6.2-2.8z"></path><use xlink:href="#al-a" width="100%" height="100%" transform="matrix(-1 0 0 1 640 0)"></use></svg>

`;
});
const Ar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ar" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-ar" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#74acdf" d="M0 0h640v480H0z"></path><path fill="#fff" d="M0 160h640v160H0z"></path><g id="ar-c" transform="translate(-64) scale(.96)"><path id="ar-a" fill="#f6b40e" stroke="#85340a" stroke-width="1.1" d="m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23-.8 8.5 3.8 13.2 5 16.5 1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8-.7-4.6-4.2-6-3.4-16.3.8-10.3-4.2-12.7-3-22"></path><use xlink:href="#ar-a" width="100%" height="100%" transform="rotate(22.5 400 250)"></use><use xlink:href="#ar-a" width="100%" height="100%" transform="rotate(45 400 250)"></use><use xlink:href="#ar-a" width="100%" height="100%" transform="rotate(67.5 400 250)"></use><path id="ar-b" fill="#85340a" d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"></path><use xlink:href="#ar-b" width="100%" height="100%" transform="rotate(22.5 400 250)"></use><use xlink:href="#ar-b" width="100%" height="100%" transform="rotate(45 400 250)"></use><use xlink:href="#ar-b" width="100%" height="100%" transform="rotate(67.5 400 250)"></use></g><use xlink:href="#ar-c" width="100%" height="100%" transform="rotate(90 320 240)"></use><use xlink:href="#ar-c" width="100%" height="100%" transform="rotate(180 320 240)"></use><use xlink:href="#ar-c" width="100%" height="100%" transform="rotate(-90 320 240)"></use><circle cx="320" cy="240" r="26.7" fill="#f6b40e" stroke="#85340a" stroke-width="1.4"></circle><path id="ar-h" fill="#843511" stroke-width="1" d="M329 234.3c-1.7 0-3.5.8-4.5 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 0 0-5.1-2.2zm0 .4c1.8 0 3.5.8 3.7 1.6-2 2.3-5.3 2-7.4.4 1-1.4 2.4-2 3.8-2z"></path><use xlink:href="#ar-d" width="100%" height="100%" transform="matrix(-1 0 0 1 640.2 0)"></use><use xlink:href="#ar-e" width="100%" height="100%" transform="matrix(-1 0 0 1 640.2 0)"></use><use xlink:href="#ar-f" width="100%" height="100%" transform="translate(18.1)"></use><use xlink:href="#ar-g" width="100%" height="100%" transform="matrix(-1 0 0 1 640.2 0)"></use><path fill="#85340a" d="M316 243.7a1.8 1.8 0 1 0 1.8 2.9 4 4 0 0 0 2.2.6h.2c.6 0 1.6-.1 2.3-.6.3.5.9.7 1.5.7a1.8 1.8 0 0 0 .3-3.6c.5.2.8.6.8 1.2a1.2 1.2 0 0 1-2.4 0 3 3 0 0 1-2.6 1.7 3 3 0 0 1-2.5-1.7c0 .7-.6 1.2-1.3 1.2-.6 0-1.2-.6-1.2-1.2s.3-1 .8-1.2zm2 5.4c-2.1 0-3 2-4.8 3.1 1-.4 1.8-1.2 3.3-2 1.4-.8 2.6.2 3.5.2.8 0 2-1 3.5-.2 1.4.8 2.3 1.6 3.3 2-1.9-1.2-2.7-3-4.8-3-.4 0-1.2.2-2 .6l-2-.7z"></path><path fill="#85340a" d="M317.2 251.6c-.8 0-1.8.2-3.4.6 3.7-.8 4.5.5 6.2.5 1.6 0 2.5-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2z"></path><path fill="#85340a" d="M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3z"></path><path fill="#85340a" d="M323.7 258.9a3.7 3.7 0 0 0-7.4 0 3.8 3.8 0 0 1 7.4 0z"></path><path id="ar-e" fill="#85340a" stroke-width="1" d="M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 0 1 1.5 3.4c.4 2.4-.3 4.9-2.1 7.5l.8.4c1.6-3.1 2.2-6.3 1.6-9.4l-.6-2.3c-4.5-3.7-10.7-4-15.2 2z"></path><path id="ar-d" fill="#85340a" stroke-width="1" d="M310.8 233c2.7 0 3.3.6 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6-.5-.2-1.3-.6-2.5-1.6s-2.5-1-3.7-1c-3.7 0-5.7 3-6.1 2.8-.5-.2 2-3.5 6.1-3.5z"></path><use xlink:href="#ar-h" width="100%" height="100%" transform="translate(-18.4)"></use><circle id="ar-f" cx="310.9" cy="236.3" r="1.8" fill="#85340a" stroke-width="1"></circle><path id="ar-g" fill="#85340a" stroke-width="1" d="M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7-.4 0-.8.4-2.4 1.3-1.7.8-4.1.8-8.2-.9z"></path></svg>

`;
});
const At = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of at" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-at" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"></path><path fill="#c8102e" d="M640 480H0V320h640zm0-319.9H0V.1h640z"></path></g></svg>

`;
});
const Au = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of au" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-au" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#00008B" d="M0 0h640v480H0z"></path><path fill="#fff" d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"></path><path fill="red" d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"></path><path fill="#fff" d="M120.5 0v240h80V0h-80ZM0 80v80h320V80H0Z"></path><path fill="red" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"></path><path fill="#fff" d="m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6 17.4 11.1Zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6-11.6 6.6Zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18 17.8 11.3Zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6 17.4 11.5ZM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z"></path></svg>

`;
});
const Ba = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ba" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ba" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="ba-a"><path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"></path></clipPath></defs><g fill-rule="evenodd" clip-path="url(#ba-a)" transform="translate(80) scale(.9375)"><path fill="#009" d="M-85.3 0h682.6v512H-85.3V0z"></path><path fill="#FC0" d="m56.5 0 511 512.3V.3L56.5 0z"></path><path fill="#FFF" d="M439.9 481.5 412 461.2l-28.6 20.2 10.8-33.2-28.2-20.5h35l10.8-33.2 10.7 33.3h35l-28 20.7 10.4 33zm81.3 10.4-35-.1-10.7-33.3-10.8 33.2h-35l28.2 20.5-10.8 33.2 28.6-20.2 28 20.3-10.5-33 28-20.6zM365.6 384.7l28-20.7-35-.1-10.7-33.2-10.8 33.2-35-.1 28.2 20.5-10.8 33.3 28.6-20.3 28 20.4-10.5-33zm-64.3-64.5 28-20.6-35-.1-10.7-33.3-10.9 33.2h-34.9l28.2 20.5-10.8 33.2 28.6-20.2 27.9 20.3-10.4-33zm-63.7-63.6 28-20.7h-35L220 202.5l-10.8 33.2h-35l28.2 20.4-10.8 33.3 28.6-20.3 28 20.4-10.5-33zm-64.4-64.3 28-20.6-35-.1-10.7-33.3-10.9 33.2h-34.9L138 192l-10.8 33.2 28.6-20.2 27.9 20.3-10.4-33zm-63.6-63.9 27.9-20.7h-35L91.9 74.3 81 107.6H46L74.4 128l-10.9 33.2L92.1 141l27.8 20.4-10.3-33zm-64-64 27.9-20.7h-35L27.9 10.3 17 43.6h-35L10.4 64l-11 33.3L28.1 77l27.8 20.4-10.3-33zm-64-64L9.4-20.3h-35l-10.7-33.3L-47-20.4h-35L-53.7 0l-10.8 33.2L-35.9 13l27.8 20.4-10.3-33z"></path></g></svg>

`;
});
const Be = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of be" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-be" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path d="M0 0h213.3v480H0z"></path><path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z"></path><path fill="#f31830" d="M426.7 0H640v480H426.7z"></path></g></svg>

`;
});
const Bf = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of bf" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-bf" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#de0000" d="M640 479.6H.4V0H640z"></path><path fill="#35a100" d="M639.6 480H0V240.2h639.6z"></path><path fill="#fff300" d="m254.6 276.2-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"></path></g></svg>

`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of br" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-br" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g stroke-width="1pt"><path fill="#229e45" fill-rule="evenodd" d="M0 0h640v480H0z"></path><path fill="#f8e509" fill-rule="evenodd" d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7 321.4 436z"></path><path fill="#2b49a3" fill-rule="evenodd" d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240z"></path><path fill="#ffffef" fill-rule="evenodd" d="m283.3 316.3-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3m86 26.3-3.9-2.3-4 2 .8-4.5-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.1m-36.2-30-3.4-2-3.5 1.8.8-3.9-2.8-2.9 4-.4 1.8-3.6 1.6 3.7 3.9.7-3 2.7m87-8.5-3.4-2-3.5 1.8.8-3.9-2.7-2.8 3.9-.4 1.8-3.5 1.6 3.6 3.8.7-2.9 2.6m-87.3-22-4-2.2-4 2 .8-4.6-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.2m-104.6-35-4-2.2-4 2 1-4.6-3.3-3.3 4.6-.5 2-4.1 2 4.2 4.4.8-3.3 3.1m13.3 57.2-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.1-4 2 4.2 4.4.8-3.3 3.1m132-67.3-3.6-2-3.6 1.8.8-4-2.8-3 4-.5 1.9-3.6 1.7 3.8 4 .7-3 2.7m-6.7 38.3-2.7-1.6-2.9 1.4.6-3.2-2.2-2.3 3.2-.4 1.5-2.8 1.3 3 3 .5-2.2 2.2m-142.2 50.4-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2M419 299.8l-2.2-1.1-2.2 1 .5-2.3-1.7-1.6 2.4-.3 1.2-2 1 2 2.5.5-1.9 1.5"></path><path fill="#ffffef" fill-rule="evenodd" d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2"></path><path fill="#ffffef" fill-rule="evenodd" d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m42.3 3-2.6-1.4-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .5-2.3 2.1m-4.8 17-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m87.4-22.2-2.6-1.6-2.8 1.4.6-3-2-2.3 3-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2.1m-25.1 3-2.7-1.5-2.7 1.4.6-3-2-2.3 3-.3 1.4-2.8 1.2 2.9 3 .5-2.2 2.1m-68.8-5.8-1.7-1-1.7.8.4-1.9-1.3-1.4 1.9-.2.8-1.7.8 1.8 1.9.3-1.4 1.3m167.8 45.4-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m-20.8 6-2.2-1.4-2.3 1.2.5-2.6-1.7-1.8 2.5-.3 1.2-2.3 1 2.4 2.5.4-1.9 1.8m10.4 2.3-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.3 1.1-2 1 2 2.3.5-1.7 1.6m29.1-22.8-2-1-2 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2.1 2.1.4-1.6 1.6m-38.8 41.8-2.5-1.4-2.7 1.2.6-2.8-2-2 3-.3 1.3-2.5 1.2 2.6 3 .5-2.3 1.9m.6 14.2-2.4-1.4-2.4 1.3.6-2.8-1.9-2 2.7-.4 1.2-2.5 1.1 2.6 2.7.5-2 2m-19-23.1-1.9-1.2-2 1 .4-2.2-1.5-1.7 2.2-.2 1-2 1 2 2.2.4-1.6 1.6m-17.8 2.3-2-1.2-2 1 .5-2.2-1.6-1.7 2.3-.2 1-2 1 2 2.1.4-1.6 1.6m-30.4-24.6-2-1.1-2 1 .5-2.3-1.6-1.6 2.2-.3 1-2 1 2 2.2.5-1.6 1.5m3.7 57-1.6-.9-1.8.9.4-2-1.3-1.4 1.9-.2.9-1.7.8 1.8 1.9.3-1.4 1.3m-46.2-86.6-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.2-4 1.9 4.2 4.4.8-3.3 3.1"></path><path fill="#fff" fill-rule="evenodd" d="M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6z"></path><path fill="#309e3a" d="m414 252.4 2.3 1.3a3.4 3.4 0 0 0-.3 2.2 3 3 0 0 0 1.4 1.7c.7.5 1.4.8 2 .7.6 0 1-.3 1.3-.7a1.3 1.3 0 0 0 .2-.9 2.3 2.3 0 0 0-.5-1c-.2-.3-.7-1-1.5-1.8a7.7 7.7 0 0 1-1.8-3 3.7 3.7 0 0 1 2-4.4 3.8 3.8 0 0 1 2.3-.2 7 7 0 0 1 2.6 1.2c1.4 1 2.3 2 2.6 3.2a4.1 4.1 0 0 1-.6 3.3l-2.4-1.5c.3-.6.4-1.2.2-1.7-.1-.5-.5-1-1.2-1.4a3.2 3.2 0 0 0-1.8-.7 1 1 0 0 0-.9.5c-.2.3-.2.6-.1 1s.6 1.2 1.6 2.2c1 1 1.6 1.9 2 2.5a3.9 3.9 0 0 1-.3 4.2 4.1 4.1 0 0 1-1.9 1.5 4 4 0 0 1-2.4.3c-.9-.2-1.8-.6-2.8-1.3-1.5-1-2.4-2.1-2.7-3.3a5.4 5.4 0 0 1 .6-4zm-11.6-7.6 2.5 1.3a3.4 3.4 0 0 0-.2 2.2 3 3 0 0 0 1.4 1.6c.8.5 1.4.7 2 .6.6 0 1-.3 1.3-.8a1.3 1.3 0 0 0 .2-.8c0-.3-.2-.7-.5-1a34.6 34.6 0 0 0-1.6-1.8c-1.1-1.1-1.8-2-2-2.8a3.7 3.7 0 0 1 .4-3.1 3.6 3.6 0 0 1 1.6-1.4 3.8 3.8 0 0 1 2.2-.3 7 7 0 0 1 2.6 1c1.5 1 2.4 2 2.7 3.1a4.1 4.1 0 0 1-.4 3.4l-2.5-1.4c.3-.7.4-1.2.2-1.7s-.6-1-1.3-1.4a3.2 3.2 0 0 0-1.9-.6 1 1 0 0 0-.8.5c-.2.3-.2.6-.1 1s.7 1.2 1.7 2.2c1 1 1.7 1.8 2 2.4a3.9 3.9 0 0 1 0 4.2 4.2 4.2 0 0 1-1.8 1.6 4 4 0 0 1-2.4.3 8 8 0 0 1-2.9-1.1 6 6 0 0 1-2.8-3.2 5.4 5.4 0 0 1 .4-4zm-14.2-3.8 7.3-12 8.8 5.5-1.2 2-6.4-4-1.6 2.7 6 3.7-1.3 2-6-3.7-2 3.3 6.7 4-1.2 2-9-5.5zm-20.7-17 1.1-2 5.4 2.7-2.5 5c-.8.2-1.8.3-3 .2a9.4 9.4 0 0 1-3.3-1 7.7 7.7 0 0 1-3-2.6 6 6 0 0 1-1-3.5 8.6 8.6 0 0 1 1-3.7 8 8 0 0 1 2.6-3 6.2 6.2 0 0 1 3.6-1.1c1 0 2 .3 3.2 1 1.6.7 2.6 1.7 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2c-.3-.6-.8-1-1.6-1.4a3.8 3.8 0 0 0-3.1-.3c-1 .3-1.9 1.2-2.6 2.6-.7 1.4-1 2.7-.7 3.8a3.7 3.7 0 0 0 2 2.4c.5.3 1.1.5 1.7.5a6 6 0 0 0 1.8 0l.8-1.6-2.9-1.5zm-90.2-22.3 2-14 4.2.7 1.1 9.8 3.9-9 4.2.6-2 13.8-2.7-.4 1.7-10.9-4.4 10.5-2.7-.4-1.1-11.3-1.6 11-2.6-.4zm-14.1-1.7 1.3-14 10.3 1-.2 2.4-7.5-.7-.3 3 7 .7-.3 2.4-7-.7-.3 3.8 7.8.7-.2 2.4-10.6-1z"></path><g stroke-opacity=".5"><path fill="#309e3a" d="M216.5 191.3c0-1.5.3-2.6.7-3.6a6.7 6.7 0 0 1 1.4-1.9 5.4 5.4 0 0 1 1.8-1.2c1-.3 2-.5 3-.5 2.1 0 3.7.8 5 2a7.4 7.4 0 0 1 1.6 5.5c0 2.2-.7 4-2 5.3a6.5 6.5 0 0 1-5 1.7 6.6 6.6 0 0 1-4.8-2 7.3 7.3 0 0 1-1.7-5.3z"></path><path fill="#f7ffff" d="M219.4 191.3c0 1.5.3 2.7 1 3.6.7.8 1.6 1.3 2.8 1.3a3.5 3.5 0 0 0 2.8-1.1c.7-.8 1-2 1.1-3.7 0-1.6-.2-2.8-1-3.6a3.5 3.5 0 0 0-2.7-1.3 3.6 3.6 0 0 0-2.8 1.2c-.8.8-1.1 2-1.2 3.6z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="m233 198.5.2-14h6c1.5 0 2.5.2 3.2.5.7.2 1.2.7 1.6 1.3s.6 1.4.6 2.3a3.8 3.8 0 0 1-1 2.6 4.5 4.5 0 0 1-2.7 1.2l1.5 1.2c.4.4.9 1.2 1.5 2.3l1.7 2.8h-3.4l-2-3.2-1.4-2a2.1 2.1 0 0 0-.9-.6 5 5 0 0 0-1.4-.2h-.6v5.8H233z"></path><path fill="#fff" d="M236 190.5h2c1.4 0 2.3 0 2.6-.2.3 0 .6-.3.8-.5s.3-.7.3-1c0-.6-.1-1-.4-1.2-.2-.3-.6-.5-1-.6h-2l-2.3-.1v3.5z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="m249 185.2 5.2.3c1.1 0 2 .1 2.6.3a4.7 4.7 0 0 1 2 1.4 6 6 0 0 1 1.2 2.4c.3.9.4 2 .3 3.3a9.3 9.3 0 0 1-.5 3c-.4 1-1 1.8-1.7 2.4a5 5 0 0 1-2 1c-.6.2-1.5.2-2.5.2l-5.3-.3.7-14z"></path><path fill="#fff" d="m251.7 187.7-.5 9.3h3.8c.5 0 .9-.2 1.2-.5.3-.3.6-.7.8-1.3.2-.6.4-1.5.4-2.6l-.1-2.5a3.2 3.2 0 0 0-.8-1.4 2.7 2.7 0 0 0-1.2-.7 13 13 0 0 0-2.3-.3h-1.3z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="m317.6 210.2 3.3-13.6 4.4 1 3.2 1c.7.4 1.3 1 1.6 1.9.4.8.4 1.7.2 2.8-.2.8-.5 1.5-1 2a3.9 3.9 0 0 1-3 1.4c-.7 0-1.7-.2-3-.5l-1.7-.5-1.2 5.2-2.8-.7z"></path><path fill="#fff" d="m323 199.6-.8 3.8 1.5.4c1 .2 1.8.4 2.2.3a1.9 1.9 0 0 0 1.6-1.5c0-.5 0-.9-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5-1.3-.3z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="m330.6 214.1 4.7-13.2 5.5 2c1.5.5 2.4 1 3 1.4.5.5.9 1 1 1.8s.2 1.5 0 2.3c-.4 1-1 1.7-1.8 2.2-.8.4-1.8.5-3 .3.4.5.8 1 1 1.6l.8 2.7.6 3.1-3.1-1.1-1-3.6a19.5 19.5 0 0 0-.7-2.4 2.1 2.1 0 0 0-.6-.8c-.2-.3-.6-.5-1.3-.7l-.5-.2-2 5.6-2.6-1z"></path><path fill="#fff" d="m336 207.4 1.9.7c1.3.5 2.1.7 2.5.7.3 0 .6 0 .9-.3.3-.2.5-.5.6-.9.2-.4.2-.8 0-1.2a1.7 1.7 0 0 0-.8-.9l-2-.7-2-.7-1.2 3.3z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="M347 213.6a9 9 0 0 1 1.7-3.2 6.6 6.6 0 0 1 1.8-1.5 6 6 0 0 1 2-.7c1 0 2 0 3.1.4a6.5 6.5 0 0 1 4.2 3.3c.8 1.6.8 3.5.2 5.7a7.4 7.4 0 0 1-3.4 4.5c-1.5.9-3.3 1-5.2.4a6.6 6.6 0 0 1-4.2-3.3 7.3 7.3 0 0 1-.2-5.6z"></path><path fill="#fff" d="M349.8 214.4c-.4 1.5-.5 2.8 0 3.8s1.2 1.6 2.3 2c1 .3 2 .2 3-.4 1-.5 1.6-1.6 2.1-3.2.5-1.5.5-2.7 0-3.7a3.5 3.5 0 0 0-2.2-2 3.6 3.6 0 0 0-3 .3c-1 .6-1.7 1.6-2.2 3.2z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="m374.3 233.1 6.4-12.4 5.3 2.7a10 10 0 0 1 2.7 1.9c.5.5.8 1.1.8 1.9s0 1.5-.4 2.2a3.8 3.8 0 0 1-2 2c-1 .2-2 .2-3.1-.2.4.6.6 1.2.8 1.7.2.6.3 1.5.4 2.8l.2 3.2-3-1.5-.4-3.7a20 20 0 0 0-.3-2.5 2 2 0 0 0-.5-1l-1.2-.7-.5-.3-2.7 5.2-2.5-1.3z"></path><path fill="#fff" d="m380.5 227.2 1.9 1c1.2.6 2 1 2.3 1 .3 0 .7 0 1-.2.3-.1.5-.4.7-.8.2-.4.3-.8.2-1.2a2 2 0 0 0-.7-1 23.7 23.7 0 0 0-1.8-1l-2-1-1.6 3.2z"></path></g><g stroke-opacity=".5"><path fill="#309e3a" d="M426.1 258.7a8.9 8.9 0 0 1 2.5-2.6 6.6 6.6 0 0 1 2.2-.9 5.5 5.5 0 0 1 2.2 0c1 .2 1.9.6 2.8 1.2a6.6 6.6 0 0 1 3 4.4c.3 1.7-.2 3.6-1.4 5.5a7.3 7.3 0 0 1-4.5 3.3 6.5 6.5 0 0 1-5.2-1.1 6.6 6.6 0 0 1-3-4.4c-.3-1.8.2-3.6 1.4-5.4z"></path><path fill="#fff" d="M428.6 260.3c-1 1.3-1.3 2.5-1.1 3.6a3.6 3.6 0 0 0 1.6 2.5c1 .7 2 .9 3 .6 1-.3 2-1 2.9-2.4.9-1.4 1.3-2.6 1.1-3.6-.1-1-.7-1.9-1.6-2.6s-2-.8-3-.5c-1 .2-2 1-3 2.4z"></path></g><path fill="#309e3a" d="m301.8 204.5 2.3-9.8 7.2 1.7-.3 1.6-5.3-1.2-.5 2.2 4.9 1.1-.4 1.7-4.9-1.2-.6 2.7 5.5 1.3-.4 1.6-7.5-1.7z"></path></g></svg>

`;
});
const Ca = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ca" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ca" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M150.1 0h339.7v480H150z"></path><path fill="#d52b1e" d="M-19.7 0h169.8v480H-19.7zm509.5 0h169.8v480H489.9zM201 232l-13.3 4.4 61.4 54c4.7 13.7-1.6 17.8-5.6 25l66.6-8.4-1.6 67 13.9-.3-3.1-66.6 66.7 8c-4.1-8.7-7.8-13.3-4-27.2l61.3-51-10.7-4c-8.8-6.8 3.8-32.6 5.6-48.9 0 0-35.7 12.3-38 5.8l-9.2-17.5-32.6 35.8c-3.5.9-5-.5-5.9-3.5l15-74.8-23.8 13.4c-2 .9-4 .1-5.2-2.2l-23-46-23.6 47.8c-1.8 1.7-3.6 1.9-5 .7L264 130.8l13.7 74.1c-1.1 3-3.7 3.8-6.7 2.2l-31.2-35.3c-4 6.5-6.8 17.1-12.2 19.5-5.4 2.3-23.5-4.5-35.6-7 4.2 14.8 17 39.6 9 47.7z"></path></svg>

`;
});
const Cg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of cg" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-cg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="cg-a"><path fill-opacity=".7" d="M-79.5 32h640v480h-640z"></path></clipPath></defs><g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#cg-a)" transform="translate(79.5 -32)"><path fill="#ff0" d="M-119.5 32h720v480h-720z"></path><path fill="#00ca00" d="M-119.5 32v480l480-480h-480z"></path><path fill="red" d="M120.5 512h480V32l-480 480z"></path></g></svg>

`;
});
const Ch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ch" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ch" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="red" d="M0 0h640v480H0z"></path><g fill="#fff"><path d="M170 195h300v90H170z"></path><path d="M275 90h90v300h-90z"></path></g></g></svg>

`;
});
const Ci = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ci" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ci" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#00cd00" d="M426.8 0H640v480H426.8z"></path><path fill="#ff9a00" d="M0 0h212.9v480H0z"></path><path fill="#fff" d="M212.9 0h214v480h-214z"></path></g></svg>

`;
});
const Cm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of cm" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-cm" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#007a5e" d="M0 0h213.3v480H0z"></path><path fill="#ce1126" d="M213.3 0h213.4v480H213.3z"></path><path fill="#fcd116" d="M426.7 0H640v480H426.7z"></path><g fill="#fcd116" transform="translate(320 240) scale(7.1111)"><g id="cm-b"><path id="cm-a" d="M0-8-2.5-.4 1.3.9z"></path><use xlink:href="#cm-a" width="100%" height="100%" transform="scale(-1 1)"></use></g><use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(72)"></use><use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(144)"></use><use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(-144)"></use><use xlink:href="#cm-b" width="100%" height="100%" transform="rotate(-72)"></use></g></svg>

`;
});
const Co = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of co" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-co" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#ffe800" d="M0 0h640v480H0z"></path><path fill="#00148e" d="M0 240h640v240H0z"></path><path fill="#da0010" d="M0 360h640v120H0z"></path></g></svg>

`;
});
const Cr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of cr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-cr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#0000b4" d="M0 0h640v480H0z"></path><path fill="#fff" d="M0 75.4h640v322.3H0z"></path><path fill="#d90000" d="M0 157.7h640v157.7H0z"></path></g></svg>

`;
});
const Cz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of cz" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-cz" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M0 0h640v240H0z"></path><path fill="#d7141a" d="M0 240h640v240H0z"></path><path fill="#11457e" d="M360 240 0 0v480z"></path></svg>

`;
});
const De = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of de" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-de" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#ffce00" d="M0 320h640v160H0z"></path><path d="M0 0h640v160H0z"></path><path fill="#d00" d="M0 160h640v160H0z"></path></svg>

`;
});
const Dk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of dk" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-dk" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#c8102e" d="M0 0h640.1v480H0z"></path><path fill="#fff" d="M205.7 0h68.6v480h-68.6z"></path><path fill="#fff" d="M0 205.7h640.1v68.6H0z"></path></svg>

`;
});
const Dz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of dz" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-dz" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M320 0h320v480H320z"></path><path fill="#006233" d="M0 0h320v480H0z"></path><path fill="#d21034" d="M424 180a120 120 0 1 0 0 120 96 96 0 1 1 0-120m4 60-108-35.2 67.2 92V183.2l-67.2 92z"></path></svg>

`;
});
const Ec = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ec" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ec" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#ffe800" d="M0 0h640v480H0z"></path><path fill="#00148e" d="M0 240h640v240H0z"></path><path fill="#da0010" d="M0 360h640v120H0z"></path></g><g fill-rule="evenodd"><path d="M269.6 290.8 197 367.3l-1.2-1.6 72.4-76.5 1.2 1.6zm50.4 12.5-94.8 100-1.6-1.6 94.7-100 1.7 1.6z"></path><path fill="gray" stroke="#000" stroke-width="4.1" d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z" transform="matrix(-.07 -.07 -.1 .1 265 429.6)"></path><path fill="gray" stroke="#000" stroke-width="4.1" d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z" transform="matrix(-.07 -.07 -.1 .1 240.6 390.5)"></path></g><path fill="#ffdf00" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M301.2 272.8s-17.7 336.6 53.1 336.6S460.6 574 460.6 574l-.8-185-158.6-116.2z" transform="matrix(.45 0 0 .64 72.4 -59.8)"></path><path fill="#0000c4" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M344.5 304.2c0 17.7-7.9 269.8 27.5 269.8s88.6-17.7 88.6-17.7l-.8-167.3-115.3-84.8z" transform="matrix(.45 0 0 .64 72.4 -59.8)"></path><path fill="#e10000" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M367.5 321.2c0 17.7 4.5 217.4 40 217.4h53.1l-.8-149.6-92.3-67.8z" transform="matrix(.45 0 0 .64 72.4 -59.8)"></path><path fill-rule="evenodd" d="m206.2 116 72.4 76.5 1.3-1.6-72.4-76.5-1.3 1.6z"></path><path fill="#ffdf00" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M301.2 272.8S265.8 609.4 372 609.4c88.5 0 88.5-53.1 106.2-53.1l-17.7-124-159.4-159.5z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><g stroke="#000"><path fill="none" stroke-width="2.3" d="M269.6 155.2c1.1 0 28.3-94 119-147.2" transform="matrix(.4 -.03 -.05 .35 135.1 147.4)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.14 -.22 .3 .14 175.9 257.4)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.18 -.1 .1 .17 177.6 256.7)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.18 .12 -.13 .33 181 96.4)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.17 -.03 -.03 .33 179.3 159.3)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.06 .25 -.17 .2 228 45.5)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.2 -.2 .2 .24 150.3 241)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.22 -.22 .25 .2 135.6 282.1)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.26 .1 -.2 .32 130.8 147.7)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.15 .2 -.32 .22 178.5 103.3)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.08 .1 -.14 .16 250.7 102.6)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.1 0 -.08 .17 238 136.4)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(0 .14 -.14 .08 287.4 81.1)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.07 .1 -.25 .15 220.7 115.6)"></path><path fill="#005b00" fill-rule="evenodd" stroke-width="1pt" d="M421.4-20.3c0 18.1-4.6 31.7-11.4 45.3-5.6-18.1-9-27.2-9-45.3s6.8-35.1 12.4-48.7c2.3 12.4 8 30.5 8 48.7z" transform="matrix(.13 .22 -.33 .2 207 70.1)"></path><path fill="none" stroke-width="2.4" d="M269.6 155.2c1.1 0 28.3-94 119-147.2" transform="matrix(.35 -.2 .14 .28 111.8 227.8)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.18 -.1 .1 .17 200.3 224.6)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.18 -.1 .1 .17 211.1 218.3)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.2 -.1 .07 .13 166.8 232.7)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.2 -.1 .07 .13 170 231.3)"></path><path fill="red" fill-rule="evenodd" stroke-width="1pt" d="M454.2-169.3c0 4-3.8 7.4-8.5 7.4s-8.5-3.3-8.5-7.4 3.8-7.3 8.5-7.3 8.5 3.3 8.5 7.3z" transform="matrix(.2 -.1 .07 .13 168.1 234.3)"></path><path fill="red" fill-rule="evenodd" stroke-width=".3" d="M252.7 167.3c.4.8 0 1.8-1 2.3s-2 .2-2.4-.7 0-1.8 1-2.3 2-.2 2.3.7z"></path><path fill="red" fill-rule="evenodd" stroke-width=".3" d="M255 164.9c.3.8 0 1.8-1 2.3s-2 .2-2.5-.6 0-1.9 1-2.4 2-.1 2.4.7z"></path><path fill="red" fill-rule="evenodd" stroke-width=".3" d="M255.5 166c.4.8 0 1.9-1 2.3s-2 .2-2.4-.6 0-1.8 1-2.3 2-.2 2.4.6z"></path></g><path fill="#0000c4" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M336.6 308.3c0 17.7-35.4 212.6 53.2 265.7 35.4 17.7 88.5-17.7 88.5 0l-17.7-141.7-124-124z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill="#e10000" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M372 343.7c0 17.7-17.7 159.4 35.5 194.9 35.4 35.4 124 25.8 124 25.8l-70.9-132.1-88.6-88.6z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill-rule="evenodd" d="m183.8 158 94.8 100 1.7-1.6-94.8-99.9-1.6 1.6z"></path><path fill="#cececc" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="m460.6 184.3 17.7 35.4v17.7c-.8-1.3 0 17.7-17.7 17.7S443 219.7 443 219.7s-17.7 35.4-17.7 70.9 17.7 53.1 17.7 53.1-2.6-36.7 17.7-35.4c20.4 1.2 17.7 17.7 17.7 17.7v35.4h17.8V219.7l17.7-35.4-27.2-53.2-26 53.1z" transform="matrix(.14 -.14 .1 .1 86.3 192.2)"></path><path fill="#cececc" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="m557.8 95.7-26.3 70.8 17.7 53.2-35.4-17.7 35.4 53.1v35.5H567V255l35.5-53.1-35.5 17.7 17.8-53.2-26.9-70.8z" transform="matrix(.1 -.16 .14 .1 114 183.8)"></path><path fill="#e10000" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c0 35.8 20.9 187.8 22.6 191.5.1 4.5-4.8 6.4-7.1.9-6.6-17.4-20.8-160-21.3-193.3-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(.4 0 0 .3 43.8 69.8)"></path><path fill="#0000c4" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(.38 .1 -.15 .3 76 38.2)"></path><path fill="#e10000" fill-rule="evenodd" stroke="#000" stroke-width=".7" d="M186.7 151.5c0 1-1 2-2.2 2-1.2 0-2.2-1-2.2-2s1-1.8 2.2-1.8c1.2 0 2.1.8 2.1 1.8zm-3.2 4c0 17.9 10.5 93.9 11.3 95.8 0 2.2-2.3 3.2-3.5.4-3.3-8.7-10.4-80-10.7-96.6-.1-6.9 1.9-7.4 4.2-7.3 1.9.1 4.1 1.9 4.1 4 0 2.4-2.9 4.3-5.4 3.7z"></path><path fill="#0000c4" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(.48 .15 -.2 .48 16.7 31.6)"></path><g fill-rule="evenodd"><path d="m370.4 290.8 72.5 76.5 1.3-1.6-72.5-76.5-1.3 1.6zM320 303.3l94.8 100 1.6-1.6-94.7-100-1.7 1.6z"></path><path fill="gray" stroke="#000" stroke-width="4.1" d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z" transform="matrix(.07 -.07 .1 .1 375 429.6)"></path><path fill="gray" stroke="#000" stroke-width="4.1" d="M478.4 60.2v88.6l17.7 88.6 17.7-88.6V60.2h-35.4z" transform="matrix(.07 -.07 .1 .1 399.4 390.5)"></path></g><g fill-rule="evenodd" stroke-width="1pt"><path fill="#ffdf00" stroke="#000" d="M301.2 272.8s-17.7 336.6 53.1 336.6S460.6 574 460.6 574l-.8-185-158.6-116.2z" transform="matrix(-.45 0 0 .64 567.6 -59.8)"></path><path fill="#0000c4" stroke="#000" d="M344.5 304.2c0 17.7-7.9 269.8 27.5 269.8s88.6-17.7 88.6-17.7l-.8-167.3-115.3-84.8z" transform="matrix(-.45 0 0 .64 567.6 -59.8)"></path><path fill="#e10000" stroke="#000" d="M367.5 321.2c0 17.7 4.5 217.4 40 217.4h53.1l-.8-149.6-92.3-67.8z" transform="matrix(-.45 0 0 .64 567.6 -59.8)"></path><path d="m433.8 116-72.4 76.5-1.3-1.6 72.4-76.5 1.3 1.6z"></path><g fill="#005b00" stroke="#000"><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.16 -.07 .08 .35 309.5 211)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.2 -.05 .07 .4 291.5 182.6)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.23 .14 -.03 .4 296.5 69.4)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.25 .03 .02 .44 274.4 115)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.18 .17 -.04 .35 330 67)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.23 0 .03 .4 280.6 141.9)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.2 -.07 .07 .38 290.1 196.8)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.2 -.03 .05 .4 292.7 166.8)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.22 .15 -.05 .38 305 65.5)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.24 .05 0 .44 278.9 97.7)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.17 .17 -.06 .33 339 70)"></path><path d="M428.2-17s81.5 90.7 111 154.1c29.4 63.5 54.4 156.3 54.4 156.3s2.2-86-36.3-163C505.2 32.8 425.9-12.5 428.2-17z" transform="matrix(.24 .02 0 .4 276.4 128)"></path></g><path fill="#ffdf00" stroke="#000" d="M301.2 272.8S265.8 609.4 372 609.4c88.5 0 88.5-53.1 106.2-53.1l-17.7-124-159.4-159.5z" transform="matrix(-.58 0 0 .62 630.4 -10.2)"></path><path fill="#0000c4" stroke="#000" d="M336.6 308.3c0 17.7-35.4 212.6 53.2 265.7 35.4 17.7 88.5-17.7 88.5 0l-17.7-141.7-124-124z" transform="matrix(-.58 0 0 .62 630.4 -10.2)"></path><path fill="#e10000" stroke="#000" d="M372 343.7c0 17.7-17.7 159.4 35.5 194.9 35.4 35.4 124 25.8 124 25.8l-70.9-132.1-88.6-88.6z" transform="matrix(-.58 0 0 .62 630.4 -10.2)"></path><path d="m456.2 158-94.8 100-1.7-1.6 94.8-99.9 1.7 1.6z"></path><path fill="#cececc" stroke="#000" d="m460.6 184.3 17.7 35.4v17.7c-.8-1.3 0 17.7-17.7 17.7S443 219.7 443 219.7s-17.7 35.4-17.7 70.9 17.7 53.1 17.7 53.1-2.6-36.7 17.7-35.4c20.4 1.2 17.7 17.7 17.7 17.7v35.4h17.8V219.7l17.7-35.4-27.2-53.2-26 53.1z" transform="matrix(-.14 -.14 -.1 .1 553.7 192.2)"></path><path fill="#cececc" stroke="#000" d="m557.8 95.7-26.3 70.8 17.7 53.2-35.4-17.7 35.4 53.1v35.5H567V255l35.5-53.1-35.5 17.7 17.8-53.2-26.9-70.8z" transform="matrix(-.1 -.16 -.14 .1 526 183.8)"></path><path fill="#e10000" stroke="#000" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c0 35.8 20.9 187.8 22.6 191.5.1 4.5-4.8 6.4-7.1.9-6.6-17.4-20.8-160-21.3-193.3-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(-.4 0 0 .3 596.3 69.8)"></path><path fill="#0000c4" stroke="#000" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(-.38 .1 .15 .3 564 38.2)"></path><path fill="#e10000" stroke="#000" stroke-width=".7" d="M453.4 151.5c0 1 1 2 2.1 2 1.2 0 2.2-1 2.2-2s-1-1.8-2.2-1.8c-1.2 0-2.1.8-2.1 1.8zm3 4a1152 1152 0 0 1-11.2 95.8c0 2.2 2.3 3.2 3.5.4 3.3-8.7 10.4-80 10.7-96.6.1-6.9-1.9-7.4-4.2-7.3-1.9.1-4.1 1.9-4.1 4 0 2.4 2.9 4.3 5.4 3.7z"></path><path fill="#0000c4" stroke="#000" d="M422.5 137c0 2-2 3.7-4.3 3.7s-4.4-1.7-4.4-3.7 2-3.8 4.4-3.8 4.3 1.7 4.3 3.8zm-6.2 7.9c31.5 61.4 48.7 166.7 50.4 170.5.1 4.4-4.8 6.4-7.1.8-2.5-3.3-12.7-100.2-49.1-172.2-.3-13.7 3.7-14.8 8.3-14.5 3.7.2 8.3 3.7 8.3 7.9 0 5-5.8 8.7-10.8 7.5z" transform="matrix(-.48 .15 .2 .48 623.3 31.6)"></path></g><g fill-rule="evenodd" stroke="#000" stroke-width="1pt"><path fill="#e10000" d="M478.4 698a53.3 53.3 0 0 0 53.1 0V556.3h-35.4c17.7 53.1 17.7 106.3-17.8 141.7z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill="#0000c4" d="M513.8 609.5c0 88.5-42.5 108.2-42.5 126 17.7 0 29.5-8.3 42.5-19.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z" transform="matrix(.35 0 0 .7 123.5 -90)"></path><path fill="#0000c4" d="M478.4 609.5c-.9 51.7-44.8 99.6-36.5 110.2 9.4 9.5 36.5-21.7 71.9-4 17.7-17.7 19.4-107.6 17.7-106.3h-53.1z" transform="matrix(.35 0 0 .7 123.5 -90)"></path><path fill="#ffdf00" d="M513.8 609.5c0 88.5-40.7 94.4-40.7 118 17.7 0 40.6-12.9 40.7-11.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z" transform="matrix(.35 0 0 .46 112.5 51)"></path><path fill="#ffdf00" d="M478.4 609.5c-.9 51.7-43.8 95.7-35.5 106.3 9.5 9.4 35.5-17.8 70.9 0 17.7-17.8 19.4-107.7 17.7-106.3h-53.1z" transform="matrix(.35 0 0 .46 112.5 51)"></path><path fill="#e10000" d="M478.4 698a53.3 53.3 0 0 0 53.1 0V556.3h-35.4c17.7 53.1 17.7 106.3-17.8 141.7z" transform="matrix(-.58 0 0 .62 630.4 -10.2)"></path><path fill="#0000c4" d="M513.8 609.5c0 88.5-42.5 108.2-42.5 126 17.7 0 29.5-8.3 42.5-19.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z" transform="matrix(-.35 0 0 .7 516.5 -90)"></path><path fill="#0000c4" d="M478.4 609.5c-.9 51.7-44.8 99.6-36.5 110.2 9.4 9.5 36.5-21.7 71.9-4 17.7-17.7 19.4-107.6 17.7-106.3h-53.1z" transform="matrix(-.35 0 0 .7 516.5 -90)"></path><path fill="#ffdf00" d="M513.8 609.5c0 88.5-40.7 94.4-40.7 118 17.7 0 40.6-12.9 40.7-11.7 17.7-17.8 19.4-107.7 17.7-106.3h-17.7z" transform="matrix(-.35 0 0 .46 527.5 51)"></path><path fill="#ffdf00" d="M478.4 609.5c-.9 51.7-43.8 95.7-35.5 106.3 9.5 9.4 35.5-17.8 70.9 0 17.7-17.8 19.4-107.7 17.7-106.3h-53.1z" transform="matrix(-.35 0 0 .46 527.5 51)"></path></g><g fill-rule="evenodd" stroke="#000"><path fill="#908f8a" stroke-width="4.5" d="m198.6 78-89.7 35.4 89.7 35.4 44.8-17.7 22.4 17.7 22.4 35.4 22.5-35.4 22.4-17.7H1535V95.7H333l-22.4-17.8c0-17.7 4.7-35.4 22.5-35.4h89.6c0-17.7-44.8-53.1-134.5-53.1-89.6 0-134.5 35.4-134.5 53.1h89.7c17.7 0 22.4 17.7 22.4 35.5l-22.4 17.7-44.9-17.8z" transform="matrix(.12 0 0 .22 217.8 324.4)"></path><path fill="#b74d00" stroke-width="1.8" d="M204.3 95.7H541v17.7H204.4zm0-17.8H541v17.8H204.4zm0-17.7H541V78H204.4zm0-17.7H541v17.7H204.4zm0-17.7H541v17.7H204.4zm0-17.8H541v17.8H204.4zm0-17.6H541V7H204.4z" transform="matrix(.28 0 0 .27 216 334.6)"></path><path fill="#908f8a" stroke-width="3.3" d="m423.2 60.2 137.8 124h19.7L443 60.3h-19.7z" transform="matrix(.25 0 0 .27 171.9 315.2)"></path><path fill="#908f8a" stroke-width="3.3" d="m423.2 60.2 137.8 124h19.7L443 60.3h-19.7z" transform="matrix(.25 0 0 -.27 171.9 382.2)"></path><path fill="#908f8a" stroke-width="3.1" d="M425.2 60.2v124h17.7v-124h-17.7z" transform="matrix(.28 0 0 .27 159.6 315.2)"></path><path fill="#908f8a" stroke-width="3.3" d="m423.2 60.2 137.8 124h19.7L443 60.3h-19.7z" transform="matrix(.25 0 0 .27 216.2 315.2)"></path><path fill="#908f8a" stroke-width="3.3" d="m423.2 60.2 137.8 124h19.7L443 60.3h-19.7z" transform="matrix(.25 0 0 -.27 216.2 382.2)"></path><path fill="#908f8a" stroke-width="3.1" d="M425.2 60.2v124h17.7v-124h-17.7z" transform="matrix(.28 0 0 .27 238.4 315.2)"></path><path fill="#908f8a" stroke-width="3.1" d="M425.2 60.2v124h17.7v-124h-17.7z" transform="matrix(.28 0 0 .27 204 315.2)"></path><path fill="#908f8a" stroke-width="3.1" d="M425.2 60.2v124h17.7v-124h-17.7z" transform="matrix(.28 0 0 .27 194 315.2)"></path></g><g fill="#ffdf00" fill-rule="evenodd" stroke="#000" stroke-width="1pt"><path d="M655.5 396.9c0 88-55.6 159.4-124 159.4s-124-71.4-124-159.4 55.5-159.5 124-159.5 124 71.4 124 159.4zm-17.7 0c0 78.2-47.6 141.7-106.3 141.7-58.7 0-106.3-63.5-106.3-141.7 0-78.3 47.6-141.8 106.3-141.8 58.7 0 106.3 63.5 106.3 141.8z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path d="M579.8 250c-14.9-8.1-31.2-12.6-48.3-12.6s-33.4 4.5-48.3 12.5l7 16.4a82.8 82.8 0 0 1 82.7 0l6.9-16.4z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path d="M579.8 250c-14.9-8.1-31.2-12.6-48.3-12.6s-33.4 4.5-48.3 12.5l7 16.4a82.8 82.8 0 0 1 82.7 0l6.9-16.4z" transform="matrix(.58 0 0 -.62 9.8 479.3)"></path></g><path fill="#a7cfff" fill-rule="evenodd" d="M379.6 235.9c0 48.5-27.7 87.8-61.7 87.8s-61.6-39.3-61.6-87.8 27.6-88 61.6-88 61.7 39.4 61.7 88z"></path><path fill="#afff7b" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M637.8 396.9c1.1 26.6-4.6 39.6-11.9 67.3-1.9 3-11-6.5-16.4-11.2s-7.8 4.2-14.6-3c-6.7-7.4-11 2-16-4.2s-51.3-7-51.3-7.6c4.6-2.2 28.2.2 24.4-11.1-4.3-11.8-31-.4-34.6-15.4-2.5-15-53.6-15.6-57.3-19.2 1.5 5.6 39.8 8 38.9 22.5-.9 6-37.7 7.7-41.3 12.7-3 6.3 29-1.7 30.1 6 0 3.2-4.7 0-21.3 5-8.4 2.5 15.4 10.3 6.4 14.6-9 4.3-28.3 6.2-27.5 8 3 9 44.7 19.6 40.6 21.1-14.8 6.6-22.6 10.9-29.7 14.7a167.9 167.9 0 0 1-31.1-100.2c31.7-11.4 25-13.8 83.6-13.8s78 2.3 129 13.8z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M637.8 396.9c-8 0-16.4 3.4-25 3.4-8.7 0-17.5-3.5-26.5-3.5s-19.3 4.6-28.5 4.6c-9.3 0-17.4-4.5-26.7-4.5s-18.6 3.4-27.8 3.4-18.3-3.5-27.2-3.5-17.7 3.5-26.2 3.5-16.8-3.5-24.7-3.5c0-19.5 3-38.1 8.4-55.1 27 2 11-15.7 27-15.7a33 33 0 0 1 25.3 9.8c2.4 0 14.4-11.4 27.9-9.8 13.4 1.6 8.5 27.3 26.4 28.6 9 6.8 14.3 11.1 26.7 13.9 17.7 1.6 68.4-2.5 68.7-.2a188.2 188.2 0 0 1 2.2 28.6z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M549.9 474c0-5.7 13.5-9.5 13.5-18.6s-12-9.3-12.4-17.8c-.2-3.5 10.3-7 14.9-7.4s8.5 7.4 8.5 9.1-4.7-4.2-8.6-4.3-12.3.6-12.3 2.3c0 3.4 14.8 7.6 13.7 19-1.1 11.2-12.7 14.6-12.7 18s5 12.8 5 12.8-9.7-7.5-9.7-13.2z" transform="matrix(.2 0 0 .48 217.2 59.5)"></path><path fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M549.9 474c0-5.7 13.5-9.5 13.5-18.6s-12-9.3-12.4-17.8c-1-4 11.8-6.6 16.4-6.9s10 8 10 9.6-5.4-5.2-9.3-5.3-14.6.6-14.6 2.3c0 3.4 14.8 7.6 13.7 19-1.1 11.2-12.7 14.6-12.7 18s5 12.8 5 12.8-9.7-7.5-9.7-13.2z" transform="matrix(-.2 0 0 .48 445.8 59.1)"></path><path fill-rule="evenodd" d="M333 264.9c0 1.3-.7 2.4-1.5 2.4s-1.4-1.1-1.4-2.5.6-2.4 1.4-2.4c.8 0 1.5 1.1 1.5 2.5zm17 9h.4v19.5h-.5zm4.1-1.6h.5V292h-.5z"></path><path fill-rule="evenodd" d="M352.6 281.2v-.5l4 .7v.5z"></path><path fill="#b74d00" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M497.3 478s26 11.4 31.7 18.2c5.6 6.8 3.4 6.8 3.4 6.8l57.7 2.3c0-3.4 10.2-3.4 12.5-11.4 2.3-7.9 2.3-10.2 2.3-10.2l-18.1 5.7 1-10.2H572l-2.3 10.2-34-1.1L538 461l-6.8 1.1-1 26c-1.2 0-31.8-7.9-33-10.1z" transform="matrix(.58 0 0 .62 7 -9.5)"></path><path fill="#fede00" fill-rule="evenodd" stroke="#fede00" stroke-width="1pt" d="M440.5 316.3s37.7-11.2 92.1-10.4 92.1 12.8 91.3 12.8-10.4-18.4-10.4-18.4-38.4-10.5-81.7-11.3c-43.2-.8-80.9 8-80 8.8l-11.3 18.5z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill="#38a9f9" fill-rule="evenodd" d="m306 169.8 13.6-.2.2 7.9-13.6.3zm-31.2 4.3L270 182l16.2-2-1.3-7.7-10.1 2zm13.7-3 13.6-1.1.6 7.8-13.5 1.2zm48.9-.7-13.5-1-.5 8 13.5.8zm29.2 5 4.9 9.6-14.6-3.6 1.6-7.7 8 1.6zm-11.8-3-13.4-1.7-1 7.8 13.5 1.8z"></path><path fill="#ffdf00" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="m532.6 323.5-2.5-13.5-7.6 11.5 2.8-13.5-11.3 7.7 7.6-11.3-13.4 2.8 11.5-7.6-13.5-2.5 13.5-2.6-11.5-7.6 13.4 2.8-7.7-11.3 11.4 7.7-2.8-13.5 7.6 11.5 2.5-13.5 2.6 13.5 7.5-11.5-2.7 13.5 11.3-7.7-7.7 11.3 13.5-2.8-11.5 7.6 13.5 2.6-13.5 2.5 11.5 7.6-13.5-2.8 7.7 11.3L540 308l2.8 13.5-7.6-11.5z" transform="matrix(.58 0 0 .62 9.6 -10.2)"></path><path fill="#ffdf00" fill-rule="evenodd" stroke="#000" stroke-width="1pt" d="M547 293.9c0 9.3-6.6 16.8-14.8 16.8s-14.8-7.5-14.8-16.8S524 277 532.2 277s14.8 7.6 14.8 17z" transform="matrix(.57 0 0 .5 18.3 21.8)"></path><path fill-rule="evenodd" d="M320.7 170.6c0 .5-1.3 1-2.8 1s-2.8-.5-2.8-1 1.2-1 2.8-1 2.8.4 2.8 1zm6 0c0 .5-.9 1-2 1s-2.2-.5-2.2-1c0-.6 1-1 2.1-1s2.1.4 2.1 1z"></path><path fill="none" stroke="#000" stroke-width="1pt" d="m529.4 297.9.8.8c-1.9-2-1-1.2 1.6 3.2 2.4-.5 3.1-1.4 4.8-2.4" transform="matrix(.56 -.18 .17 .6 -26.7 90.6)"></path><path fill="none" stroke="#000" stroke-width="1pt" d="m527.8 304.3.8.8c-1.9-2-1-1 3.2 1.6 4 .5 8.1-1.2 10.5-4" transform="matrix(.58 0 0 .62 8.7 -10.2)"></path><path fill="#b7e1ff" fill-rule="evenodd" d="M281.4 194.8s1 8-5.1 18c-6 9.9-5.1 6.4-5.1 6.4s2.8 5.5 2.3 5.5-4.7-5-4.7-5l-5 5.5s4.6-8.5 4.1-8.5-1.4-3-1.4-3l3.7-1.5s5.6-10.4 5.6-9.9-16.7 11.4-16.7 11.4l22.3-18.8zm3.7 3c-.5 0 2.3 8 4.7 12 2.3 4 2.3 8.9 2.3 8.9l7.9 4-10.2-15.4 6.5 2.4-11.2-11.9zm0 20.9s5.6 6 6 8 .5 6.4.5 6.4l-2.3-5-3.3 4.5s2.4-7 1.9-7.5-3.7 2.5-3.7 2.5 1.4-4 1.4-4.4 0-3-.5-4.5zm-27.9 13.9c1.9-1.5 5.6-2.5 5.6-2.5s-2.3 4-2.8 4-1.8 0-2.8-1.5zm64.1-21.8s12.1 7.4 12.1 7.9-7.9-3.5-7.9-3.5l-4.2-4.4zm-21.8-15.5c1 .5 17.7 14.4 17.2 14.4s-7.4-4-7.4-3.4v3.4l-3.8-7.9-.9 3-5-9.5zm4.2 22.4 4.6 9.4 4.7-1s-8.8-8.4-9.3-8.4zm14.4-6 .5 9s2.7 2.5 2.7 2-2.7-10.5-3.2-11z"></path><path fill="#984000" fill-rule="evenodd" d="M182.6 89.5s21-11.6 44.9-20.2a303.8 303.8 0 0 1 54.2-14.4c7 0 19.2 17.8 21.2 17.8s10.1-5 20.3-5 16.1 8 18.2 8h18.2c2 0-6.1-19.8 0-18.8 3 .5 28.8 4.5 52.8 12.2 24 7.8 58 21.6 58 21.6S414.9 98 400 95.9c-2 1 0 13-3 7.7-4.6-1-21.7-3.7-24.7-3.7s-8.7 3.4-16.8 5.4c-8 2-18.2 5-18.2 5l13.2 20.7-16.2 8s-10.1-23.8-14.2-23.8-6 16.8-11.1 15.8c-5-1-7-15.8-11.1-19.8-4-3.9-25.4-5.4-33.5-7.3-8-2-21.1-3.5-28.2-5.5-7-2-14.2 5-17.2 5s4-6 1-7-5 3-7 3-23.3-4-25.3-5 5-4.9 3-4.9h-8.1z"></path><path fill="gray" fill-rule="evenodd" stroke="#772600" stroke-width="3.7" d="M463-65c0 21.2-20.6 38.4-45.9 38.4S371.3-43.8 371.3-65s20.5-38.3 45.8-38.3S463-86.1 463-65z" transform="matrix(.22 0 0 .26 231.6 96.5)"></path><path fill="#984000" fill-rule="evenodd" stroke="#772600" stroke-width="5.3" d="M284.7-60c6.7-6.6 15-16.6 36.7-16.6 5-1.7 5-11.7 16.6-11.7 11.7 0 8.3 10 16.7 13.4 8.3 3.3 76.6-3.4 76.6-3.4s6.6 5 6.6 11.7-5 11.6-6.6 11.6-68.3-5-73.3-3.3c-5 1.7-8.3 3.3-20 3.3-11.6 0-15-11.6-23.3-11.6s-16.6-1.7-30 6.7z" transform="matrix(.27 0 0 .32 205.4 100.7)"></path><path fill="none" stroke="#772600" stroke-width="3.5" d="M487.9-76.6h26.6c9.6.1 12.9 3 21.7 3.3h23.3c8.5-.3 13-2.3 21.6-3.3 14.5-.2 9.6-1.3 6.7-10-2.6-6.5-3-9.6-6.7-13.3-1.4-8-4.6-10.8-5-20-1.5-7-4.3-11.7-1.6-20 3.8 5.7 5.3 8 15 8.4 10 0 13.9-.3 20 3.3 4.6 4.9 10.8 3.3 20 3.3 7.6 1.4 8.9 5.3 14.9 8.3 7.1 4 11.7 5 21.6 5 8 1.5 15 2.6 20 5 4.3 5.1 11 6.4 20 6.7 5 0 9-.5 13.3-1.7 7.7.4 15.5 0 25 0 6.2 7.2 7.6 9.9 18.3 10 7.4 5.2 13.6 6 20 8.3h25c9 .7 11.8 4.4 20 6.7a200.9 200.9 0 0 0 21.6 8.3 108 108 0 0 0 21.7 1.7c6.1 3.2 13.6 3.4 18.3 6.6 6.9 1.5 16.3 3.3 21.6 5 8.8 1.2 12.2 4 20 5 6.7 2-2.2 3.6-6.7 5-9.8-.3-10.5-4-20-5-5-2.9-12.6-2.5-20-5h-1.6c6.6 4 13 6.5 10 13.4-8.5 0-15.4-1.1-23.3-1.7-8.4-1.6-12.2-3.3-21.6-3.3 9.4-2.3 11.8.2 18.3 3.3 2.4 8-2.8 5-11.7 5-7.6-2.7-12.2-6-21.6-6.7h-20c9.9.4 12 4.1 18.3 8.4.5 2.6-.1 2.4-5 3.3-5.2-4.5-11.9-6-20-8.3-7.9-.3-16.2-1-23.3-3.4-4.9-.3-4.1-6.1 6.7 3.4 6.5 3.8 8.8 7 8.3 10-8.6-2.2-12.8-5.6-18.3-8.4a61.3 61.3 0 0 0-23.3-3.3c-8.6-2.3.9-3.6 6.6 5 12.4 8.8-1.6 5-6.6 3.3-7.5-2.1-15.3-5.2-21.7-6.6-5-1.5-9.4-2.9-15-3.4 8.7.8 11.6 3.9 15 10 8.8 6-.4 3.1-8.3 1.7-5-4.4-11.5-6.7-15-11.7-8.3-4.1-8.6-9-3.3 1.7 1.3 3.4 1 10.8 1.6 11.7-6.1-6.7-4.8-8.4-11.6-8.4-4.7-3.2-11.5-5.7-15-10-6.4-.6-6.8-2.9-13.3-5 5.3 6.3 12.4 12.5 16.6 18.4 7.6 4.2 9.7 8 15 11.6 2.1 3.7 8 6.7 1.7 1.7-7.2-7-12.5-8.7-23.3-13.3-6.2-5-8.4-7-15-11.7-9-2.9-5.5-4.5 0 5 6.3 5.8 11.1 12.2 16.6 16.7a67.8 67.8 0 0 0 15 13.3c1.5 2.2 6 2.6 0 3.3-5-4.6-12.4-7.5-18.3-11.7-8.3-2.3-12.2-6.6-18.3-11.6-4-5.9-10.4-10.4-15-15-9.6-3.8 1.9 3.6 5 8.3 2.1 6.1 4.8 11 6.6 16.7 2.8 5.5-8.4-1.3-11.6-3.3a57 57 0 0 0-21.7-8.4 298 298 0 0 0-20-3.3c-7.5-2 4.1 4.8 8.4 11.7 8.4 7.9-8.3 1.4-13.3 0a125 125 0 0 0-25-1.7c-10.7.6-3 2 0 6.6 3.3 2.6 5.6 8 5 10-7-1-13-3-21.7-3.3-7 2.3-15.3 1.7-23.3 1.7-.3 4.2 1.5.6 5 5 5.8 2.3 9.6 5.1 8.4 8.3h-48.3c-5.3 1.4 1.1.7 5 6.7-2.2 5.4-5 3.3-11.7 3.3-4.5-1.8-13.6-2.6-18.3-5-4.7 0-4.3-1.2-8.3-1.7 14 10 7 7.5 15 15 1.3.5 4.5 1.7 1.6 1.7M371.3 73.3c-1 0-3.2-5.4-6.6-10-2.4-6-5.4-2.6-8.4-11.7.4-9.4.7-11 0-20-6.8-4.8-9.7-6.2-15-15-8.4-7 1.3-19 2.9-27.8-7.4-1.6-11 11.5-22.3 16.2-8.2 5.5-1-11.4-5-21.2-2.7-13.9-10.8 7-13.8 12.9-5.5 3.7-7.2 8.5-15 1.6 0-5.1 4.9-19.5 2.8-22.3-7.8 3.9-18 15.5-26.1 17.3-8.2-1.7 1.7-14.8 1.7-24.5-3-1-14.7 25.8-19.5 26s-2.7-26-5-25.4c-3.5 5-10.6 15.4-15.5 19-9.5-1.3 1.4-17.5 2.8-23.5 1.6-7.2-8.9 13.8-14.5 15.1-4.1 3.6-12.2 6-15 6.7 3.2-6.2 19-18.7 18-22.3-9.3.3-23.4 12.5-31.3 14-5.2 0-12.4 1.7-13.3 1.6.4-8 19.4-14.6 22.4-19.5-9.3 1.5-27.2 9.7-32.4 16.2-6.2 1.3-14 3-20 0 .9-7.5 14.9-22 18-26.8-8.5 3.7-12.7 6.6-21.7 8.3-1.7 1.7-6.5 5.3-5 1.7 2.7-7 6.7-10 10-15-7.5 1.4-10.3 5.7-18.3 10-5.1.2-19.7 14.9-24.6 15.1a69.1 69.1 0 0 1-28.3 13.3c-7.6 1.4-11.3 3-15 6.7 3.8-6.7 9.6-13 15-16.6a29.8 29.8 0 0 1 15-13.4c1.9-2.3 7.1-2.9 1.6-3.3-4.7 4.2-12.7 9-16.6 11.7-5.1 3.2-11 6.4-13.4 5 2.7-7.2 7.5-9 11.7-15 8.8-5.6 0-2-6.7 0-4.3 3.8-12 6.7-18.3 10-7 1.8-11.7 6-20 8.3 0 2.4 2.4-4.3 3.4-6.7 6.8-7.4 8.6-9.5 16.6-11.6 2-2.9 4.4-1.7-1.6-1.7-4.6 4-10.8 6.2-16.7 10-5.9 1.3-13.6 1.7-21.6 1.7-10.4 1.2-9.5 2 0-3.4 5.3-5 9.7-3.7 10-10-6.3 4.6-14 8-21.7 11.7-6.4.2-8.1 1.7-15 1.7 3.3-3.4 5.3-7.7 10-10 7-7.7-4.4-1.5-6.7 0h-25c-4.4 5.6-.2 0 3.4-3.4 4.3-2.2 8.8-5.1 8.3-6.6-5 4.3-10.7 6.3-15 10-4.6 1.4-10 2-10 3.3 3.7-5.3 9.6-8.6 13.4-13.3 5.6-1.2 10.4-3 11.6-5h-23.3 16.6c8.5 0 15.7-.8 23.4-1.7 13.2-2.2-1.2-3.3-8.4-3.3-1.3-2.6 4.2-4 10-5C-6.7-69-.4-71.1 5-73.3a45.2 45.2 0 0 0 13.3-6.6c-5 .2-5 1.4-10 1.6 7.5-.5 12.8-1.6 21.7-1.6a239 239 0 0 0 21.6-8.3c3-3.6 4.2-3.4-3.3-3.4 6.7-2.1 16.2-3.2 21.6-5a94 94 0 0 0 20-6.6c4.9-3.3 7.7-7.2 13.3-10 6.5 4.4 6.6 5 18.3 5 9.4-.1 15.2-2.4 20-6.7 7.2-2 8.5-5.4 16.7-6.6a134 134 0 0 0 23.3 1.6c8-2.1 15.7-6 21.6-10 5.1-2.5 11.2-6.1 16.7-8.3 6 3.1 10.8 5.6 18.3 6.7 7.7-1.2 11.8-5 18.3-6.7a28 28 0 0 1 15-8.3c9.7-4.8 9 1.5 13.3 6.6 5 5.2 11.4 2.7 18.3 5 3.9 6 6.7 10 11.7 13.3 3.9 4.8 8.5 6 16.7 6.7 3 4 .6 6.8 6.6 8.3 2.4 2.6 6.5 3.6 10 5" transform="matrix(.27 0 0 .32 205.4 104.9)"></path><path fill="none" stroke="#782600" stroke-width="3.1" d="M468.7 30.8v.8c0-2.3 0-1 1.7 3.4.6 3.6-.8 3.2-2.5 5.8-.3 3.7-.8 6.4-.8 10.8-.6 3.6-2.6 7-4.2 10-1.6 3.1-8.5 4.9-8.3 9.2-4 1.1-4.1-1.5-4.2-5.9-2.4-2.7-3.2-6.4-5-10-1-3.4-3.4-6-5-10-2.4-3.7-4.5-4.8-6.6-9.1-.9-2-.7-4.6-2.5-5.8-2.7-3.5-4.5-4-9.2-4.2-3.6.8-5 2.4-8.3 3.3-2.6.9-7.6.6-10.8 1.7-.8 1.3 1.6 2 2.5 5-2.2 1.8-3 4.9-4.2 7.5-2 2.5-3.3 3.7-4.2 7.5 1.4 2.3.2 5.4-1.6 7.5-.6 3.8-2.5 5.9-3.4 9.1-2.6 1.9-3.6 3.6-5.8 6.7-1.9 2.7-3.6 2.5-8.3 2.5-3.7-1-4.2-3-7.5-4.2-.3-1-.6-1.3-1.7-1.6" transform="matrix(.27 0 0 .32 205.4 104.9)"></path><path fill="#812e00" fill-rule="evenodd" d="M307.6 125.5s-.4 5-3.6 8.3-9.8 7.1-9.8 7.1 8.9-4.2 9.8-3.3c1 1-5.7 8.3-5.7 8.3s8.7-7.7 9.8-7.7 3.6 7.5 4.6 7.3c.9-.2-2-9.5-1.6-11 .4-1.4 0-9.3 0-9.3l-3.4.3zm20.5-.6s-.4 5.3-3.6 8.8-9.8 7.6-9.8 7.6 8.9-4.5 9.8-3.5c1 1-5.7 8.8-5.7 8.8s8.7-8.2 9.8-8.2 3.6 8 4.6 7.8c.9-.2-2-10.2-1.6-11.7.4-1.6 0-10 0-10l-3.5.4zm-28.7-48c0 .9-1 1.7-2.1 1.7s-2.2-.8-2.2-1.8 1-1.8 2.2-1.8 2.1.8 2.1 1.8z"></path></svg>

`;
});
const Ee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ee" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ee" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><rect width="640" height="477.9" rx="0" ry="0"></rect><rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0"></rect><path fill="#1791ff" d="M0 0h640v159.3H0z"></path></g></svg>

`;
});
const Eg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of eg" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-eg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path d="M0 320h640v160H0z"></path><path fill="#fff" d="M0 160h640v160H0z"></path><path fill="#ce1126" d="M0 0h640v160H0z"></path><g fill="#fff" stroke="#c09300" transform="matrix(.8 0 0 .8 -40 0)"><path stroke-linejoin="round" stroke-width="1.3" d="m450.8 302.4 68.5 63.6-4.9-115.5c-.7-17.5-15.9-13.5-27-7.2-11.1 7.2-24 7.2-37.4 2.5-13.5 4.7-26.3 4.7-37.4-2.5-11-6.3-26.3-10.3-27 7.2L380.7 366l70.1-63.6z"></path><path id="eg-a" fill="#c09300" stroke="none" d="m393.5 246.5-4.8 112.3-8 7.2 4.9-115.5a24 24 0 0 1 7.9-4zm9.6 8-4 94-8 8.2 4.8-108.5c1.6 1.6 6.3 5.5 7.2 6.3zm8.7 7.2-3.1 78.4-6.5 6.3 4-89.4c1.6 1.5 4.8 3.8 5.6 4.7zm9.5 4-3.1 66.8-6.3 5.1 3.1-74.3c1.6.7 4.7 2.4 6.3 2.4zm8.8 0-2.3 55.7-6.5 6.3 2.5-61.3c1.5 0 5.6 0 6.3-.7z"></path><use xlink:href="#eg-a" width="100%" height="100%" transform="matrix(-1 0 0 1 900 0)"></use><path fill="#c09300" stroke-width="1.1" d="m453.2 315 9.6 43.8-3.2 3.2-3.3-2.5-5.4-39 2.3 39-3.2 4-3.1-4 2.3-39-5.5 39-3.3 2.5-3.2-3.2 9.6-43.7h6.4z"></path><g id="eg-b" fill="none" stroke-linejoin="round" stroke-width="1.3"><path fill="#fff" stroke-width="1.2" d="m428.5 295.8-19.1 67.7 26.3 4 11.1-50.9-18.3-20.8z"></path><path d="m422.2 319 2.3 5.5 12.4-11.8"></path><path d="m430.8 305 2.6 24.3 7.9-10.4m-3.2 4 4.3 15m1.7-5.5-8.7 13.2m2.7 13.2-2.8-13.2-2.4-13.4-5.9 7.9-2.5-9.1-8.2 8.4 4.1 15.2 5.8-9.4 3.1 9.6 6-9.2"></path><path d="m415 362 5.3-7.5 3.4 11.5 4.8-8 3.1 9.6"></path></g><use xlink:href="#eg-b" width="100%" height="100%" transform="matrix(-1 0 0 1 900 0)"></use><g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path stroke-width="2.4" d="M450 393.8c20 0 39-1.6 50.2-4.7 4.7-.9 4.7-3.3 4.7-6.5 4.8-1.6 2.4-7.2 5.7-7.2-3.4 1-4-5.5-8-4.7 0-5.6-5.7-6.3-10.4-4.7-9.5 3.1-26.3 3.9-42.2 3.9-16-.8-32.6-.8-42.2-4-4.7-1.5-10.3-.8-10.3 4.8-4-.8-4.7 5.6-8 4.7 3.3 0 .8 5.7 5.6 7.2 0 3.2 0 5.6 4.8 6.5 11 3.1 30.2 4.7 50.1 4.7z"></path><path d="M422.9 363.5c6.4.9 13.6 1.6 19.2.9 3.2 0 5.5 5.5-.9 6.3-5.5.7-14.3 0-19-.8a231 231 0 0 1-18.4-4c-5.6-2.4-1.6-7 1.6-6.4a105.3 105.3 0 0 0 17.5 4zm54.2 0c-6.4.9-13.6 1.6-19 .9-3.4 0-5.7 5.5.7 6.3 5.6.7 14.3 0 19-.8 4-.8 12.8-2.3 18.4-4 5.6-2.4 1.6-7-1.6-6.4a105.2 105.2 0 0 1-17.5 4z"></path><path d="M403 360.4c-4.8-.9-7 4.7-5.5 7.9.7-1.6 4-1.6 4.7-3.2.9-2.4-.7-2.4.9-4.7zm19.2 14.7c0-3.2 3.1-2.8 3.1-6 0-1.5-.8-4-2.4-4a3.4 3.4 0 0 0-3.2 3.2c-.7 3.1 2.5 3.6 2.5 6.8zm22.7-9.1c4.7 0 4.2 6.3 2 9.5 0-2.3-4-3.2-4-4.8 0-2.4 3.6-2.4 2-4.7zm52-5.6c4.9-.9 7.2 4.7 5.6 7.9-.7-1.6-4-1.6-4.7-3.2-.9-2.4.7-2.4-.9-4.7zM478 375c0-3.2-3.2-2.8-3.2-6 0-1.5.8-4 2.4-4a3.4 3.4 0 0 1 3.2 3.2c.7 3.1-2.5 3.6-2.5 6.8zm-23-9c-4.7 0-4.2 6.3-2 9.5 0-2.3 4-3.2 4-4.8 0-2.4-3.6-2.4-2-4.7z"></path><path stroke-width=".9" d="M404.7 362c1.6 0 4 .7 4.7 1.6l-4.7-1.6zm7.9 2.4c.8 0 4 .7 5.5 1.6l-5.5-1.6zm28.6 3.2c-1.5 0-4.7 0-5.5.7l5.5-.8zm-8.7 0c-.9-.9-4-.9-5.6 0h5.6zm62.8-5.6a8 8 0 0 0-4.7 1.6l4.7-1.6zm-7.8 2.4c-1 0-4 .7-5.6 1.6l5.6-1.6zm-28.7 3.2c1.5 0 4.7 0 5.6.7l-5.6-.8zm8.7 0c.9-.9 4-.9 5.6 0h-5.6z"></path><g fill="#c09300" stroke="none"><path d="M403.3 374.6c-.5-.1-.8-.6-.6-1 .1-.7.6-1 1-.8.4 0 .9.6.9.8l-.4.7-.2.1c0 .2-.4.2-.7.2zm55 3.9c-.2 0-.6-.5-.6-.7 0-.4.6-1 1-1l.8.4c.3.3.3.9-.1 1.2-.2.2-.8.2-1.1 0zm.3 2.5c-.4-.2-.5-.4-.6-.8 0-.5 0-.6.5-.9l.4-.2.4.2c.4.2.7.4.7.8 0 .3-.3.6-.7.8-.3.2-.4.2-.7 0z"></path><path d="M407.8 370c-.4 0-.9.4-1.2.6-.6.1-1.4.5-2 0-.6-.1-1.4 0-1.5.8.1.7 1 1 1.6.6.4-.5 1.5-.9 1.7 0-.5.8-.4 1.7-.8 2.4 0 .5-.3.9-.5 1.3-.5 0-1 0-1.4.3a2 2 0 0 0-1.6.8c-.4.6-.8 1.2-.9 2 .1.6 1 .8 1.6.9l2 .6 3.2.9c1.6.5 3.2.7 4.8 1.1l.5.1c.7.2 1-.5 1-1l1-3.6c.2-.5.5-1.5-.4-1.3-.5.3-1 .8-1.6.8-.9 0-.4 1 0 1.3 0 .6-.2 1.3-.5 1.8-.6.3-1.2 0-1.8-.2-.5 0-1.7-.3-1.2-1l.5-1.8c.3-.6.3-1.3.5-2-.4-.7-1 .3-1.5.4-.4.2-1.6.3-1 1 .6.4.2 1.1 0 1.7 0 .7-.8 1-1.4.7-.6 0-1.5-.5-1-1.1l.5-1.8.7-2c0-.7.3-1.2.6-1.8 0-.7.5-1.3.5-2 0-.3-.2-.4-.4-.4zm-3.7 7.3a.3.3 0 0 1 .3 0c.2.2.2.4 0 .6l-.3.2c-.5 0-.6-.1-.6-.3 0-.1 0-.2.3-.3a1.4 1.4 0 0 1 .4-.2zm-1 5c-.5-.4-.4-.7.3-1.3.4-.2.5-.2.9.1.6.5.6.8 0 1.3-.2.2-.3.2-.5.2-.3 0-.4 0-.7-.2zm3 1a.9.9 0 0 1-.6-1.1c.2-.4.3-.5.9-.5.7 0 .8.1.9.7 0 .4 0 .5-.3.7a1 1 0 0 1-.8.2zm89.2 0c-.2-.1-.3-.2-.3-.5 0-.4.2-.7.8-.9.6-.3 1-.3 1.2.2.3.6.3.8-.1 1.2-.2.3-.3.3-.8.3s-.6 0-.8-.2zm-85 1.2c-.4 0-.6-.4-.6-.8 0-.3 0-.4.2-.6l.6-.2.6.1c.5.4.6.8.3 1.2-.3.4-.6.4-1.2.3zm21.8 1-.2-.3c0-.6 0-1.1.2-1.7.1-.5 0-1 .2-1.5l.4-2.8c0-.5 0-1 .2-1.4.1-.8 0-1.5.2-2.2 0-.3.3-1 .6-.6.4.6.9 1 1.4 1.5.4.3 0 .7-.3.8-.4.1-.5.6-.5 1l-.2 1.2c0 .7 0 1.3-.2 2l-.1 1.8-.2 1.2c0 .4 0 .9-.4 1.1-.3.2-.8.2-1-.1zm29.7-9.8-1.3 1.2c-.6.5.5.7.6 1.1.2.6.2 1.2.2 1.8.2.6.3 1.1.2 1.7 0 .7-.8.5-1.2.9-.5.2-.7.7-1 1a4.2 4.2 0 0 0-.4 1.6c0 .5-.3 1 0 1.4l.1.2h.5l1.5-.1c1.2-.2 2.5-.2 3.7-.3l2.2-.2c.6.1.9-.5.9-1-.4-.7-.1-1.4-.4-2-.2-.8-.1-1.5-.2-2.2 0-.6-.7-.8-1-.4-.4.4-1 .5-1.2.9-.3.6.6.6.8 1l.1 1.5c.1.6-.5.6-1 .7-.5.2-1.2.3-1.5-.3-.2-.5-.2-1-.2-1.5 0-1-.3-1.8-.3-2.7 0-1-.3-2.1-.3-3.2 0-.5-.1-1.2-.8-1.1zm-.6 8.2h.3v.8l-.3.1a3.3 3.3 0 0 1-.4.1 2.5 2.5 0 0 1-.2 0c-.2-.2-.2-.5.1-.8l.5-.2zm-30-9.2c-.3 0-.8.7-1.2.6-.9.1-.8 1-.1 1.3v.8c.1.8-.4 1.5-.3 2.3 0 .8-.3 1.7-.3 2.6-.3.9-.3 1.8-.4 2.7-.1.8-.7.5-1.2.3v-1c.1-.9-.5-1.1-1.2-1.2-.7 0-1-.5-.8-1.1.3-.4 1-.3 1.5-.3 1 .2.9-1.1.4-1.6-.4-.6-1.2-1-1.4-1.6 0-.8-.5-1.7-1.2-2.1-1.1-.1-2 .8-2.3 1.8-.5 0-1 .2-1.4.4-.7.2-1.7 1.4-.7 1.9.5.1 2.2.5 1.4 1.2-.4.8-1.2.8-1.9.6-.7 0-1.5-.4-1.5-1.2-.1-.8-.1-1.6-.4-2.3-.2-.8-1.1-.6-1.2.2-.7.5-.6 1.4-.1 2 .3.7 0 1.6-.3 2.2-.2 1-1.2 1-1.9 1.2-.3.2-1.6 0-1.1.7a4 4 0 0 0 2.4.3c.8 0 1.5-.7 2-1.4.5-.5 1.4-.2 2.2-.2.7 0 1.5.5 2.3.1.2-.5 1.2-1.5 1.5-.5 0 .9.7 1.3 1.5 1.2.9 0 .5.6.5 1.2 0 .9.7 1.4 1.5 1.8h.8c.7-.3 1.5-.6 1.8-1.4.3-.7.3-1.5.5-2.2.2-1.1.4-2.3.4-3.4.3-1 .2-2.1.4-3.2l.3-2.3c0-.5-.2-.5-.5-.4zm-6.7 4.1c.1 0 .2.2.2.5 0 .4.2.7.5.8v.3l-.8.2c-.5 0-.9-.2-1.2-.5l-.2-.2.3-.2.5-.5c.3-.3.5-.4.7-.4zm66-7.9a8.4 8.4 0 0 0-1.7.3c-1 0-1.5 1-.5 1.6.6 1.5 1.5-.4 2.5-.2 1.4.2 1.5 1.8 1.8 3 0 1.1.4 2.2.7 3.3 1 1.1-.7 1.8-1.4 1-.6-.7-2-1.5-2.7-.6-.9.4-1 1.6-1.7 2-1.2.3-1.3-1.2-2-1.8-.6-.9-1.7-1-2.6-1.2-.4-.9-.2-2.4-1-3-.8.3-2.2 1.7-1 2.4 1 1-.5 1.4-1 2-.8.9-1 2-1 3-1.3.7-1.5-.8-1.7-1.7 0-1.1-1-.8-1.7-.4-1 .4-1.4 1.3-2 2v2c.2.9 1.2.5 1.8.4 1-.4 1.4.7.6 1.3-.6.6-2.2.3-2 1.4h1.6c1-.3 2.2-1.1 2.3-2.3.2-1 1.7-.9 2.5-1.1 1-.3 2.3-.4 2.6 1 .7.7 2.2 1.5 3 .5a2.4 2.4 0 0 0 1.1-2.3c-.1-.8 1.3-.8 1.7-.3.5.8 2.1.6 2.9 0 .8-.5 1-1.6 2.2-1.6l5.4-1.5c1.4-.3-.2-1.2-.6-1.8-1-.5-2 1.7-3.2.6-1-.7-.9-2-1.2-3.1-.3-1.4-.2-3-1.2-4-.6-.7-1.6-.9-2.5-.9zm-6.8 9.5c.1 0 .3 0 .5.2.4.2.7.6.7 1 0 .2 0 .2-.3.3l-.5.2c-.2 0-.7-.3-.7-.5v-.4c-.2-.4-.2-.4 0-.6l.3-.2zm6.5.4c.4 0 .6 0 .8.3.1.4 0 .6-.4.8l-.5.2-.4-.3c-.2-.1-.3-.2-.3-.4 0-.3.4-.6.8-.7zm-9 0c.2 0 .3 0 .4.2.2.2.3.3.3.6v.6c0 .3 0 .2-.6.2s-.7 0-.7-.6c0-.4 0-.5.3-.7.1-.2.3-.2.4-.2zm-5.4 1.5a.6.6 0 0 1 .4.4c0 .3 0 .5-.2.6-.3.1-.8.2-1 0a.6.6 0 0 1 0-.1c-.2-.1-.2-.2 0-.3v-.1l.2-.3a.5.5 0 0 1 .6-.2zm9.2 1.2.5.1v.6h-1.2l-.1-.2c0-.2 0-.3.2-.4l.6-.1zm-17.1 4.8c-.1 0-.3-.1-.1-.2.1-.3.5-.4.8-.6a3.4 3.4 0 0 0 1.4-1c0-.4.4-.6.4-1l-.1-1.4a1.8 1.8 0 0 0-.8-1c-.3-.1-.7-.2-.8-.6 0-.3.3-.6.4-.9l.6-1.2c.3-.3.7 0 .8.2l.5 1c.3.3.5.6.6 1 .2.4.4.7.4 1l.2 1.3c0 .5 0 1.1-.2 1.6l-.6.8c-.3.3-.6.6-1 .7-.3.1-.5.4-.9.4H468l-.1-.1zm-6.9.4c-.2-.2-.3-.3-.3-.6s0-.3.3-.6c.4-.4.6-.4 1.4 0 .7.4 1 .4 1 .1.1-.2.5-.5 1-.5a.8.8 0 0 1 .5.2c.2.2.3.3.3.7 0 .5 0 .5-.3.8-.3.2-.3.2-.7.2a.9.9 0 0 1-.8-.6c0-.2 0-.3-.2-.1l-.2.1c-.2 0-.6.3-.8.5l-.5.1c-.4 0-.4 0-.7-.3zm-19.8-8.9c-.7 0-1.4.6-1.5 1.3.2.7.8 1.5.4 2.2.3 1-.8 1.4-1.5.9-.4-1-.6-2-1.3-3-.8-.2-1.1 1.1-1.7 1.6.3.7 1.1 1.4 1.2 2.3.2 1-.4 2-1.1 2.4-.7.7-1.7.5-2.5.6-1 .6.7.8 1.2.8 1 .1 2.1 0 3-.8.7-.3.6-1.7 1.5-1.8l4.8.3c.8.2 2.1-.1 2.7.5 0 1 1 1.8 1.9 2.2.5.2 1-.5 1.5-.6 1-.3.7-1.5 1.3-2h5c.2 0 .3-.5.6-.7l-.2-1.9c-.3-.8 0-1.8-.5-2.5-.9-.2-1.6.5-2.4.6-1 .4-1.7 1.3-1.8 2.3-.5.9-1.4-.2-1-1l-.1-1c-.5-.5-1.4-.3-2.1-.4l-3-.2c-1 0-1.9.1-2.7-.1-1 0-1-1-1-1.8a1 1 0 0 0-.7-.2zm2 3.7 1 .1h1.3c1 .2 2 .2 3 .2.2 0 .4.2.6.4v2c0 .3 0 .7-.2.8a.7.7 0 0 1-.2.2 1 1 0 0 1-.7-.5v-1.4a1.3 1.3 0 0 0-.7-.3l-2.6-.1-2-.1c-.3-.1-.7 0-.9-.4-.2-.2.1-.6.4-.7a2.3 2.3 0 0 1 1-.2zm11.3.3c.1 0 .2 0 .2.3l.2.5c0 .1 0 .2-.2.2-.5.2-1 .2-1.2 0 0-.1 0-.5.2-.6l.8-.4z"></path></g></g><path stroke-width="1.1" d="M450 327.2c32.6-25 29.8-61.8 29.8-61.8l-2.5.2c-6.9 0-23.2-4-27-8.9-4 4.5-20.8 9-27.6 9l-2.5-.3s-2.9 36.7 29.8 61.8z"></path><path stroke-width=".9" d="M477.2 268h-.8c-6.2 0-20.6-3.1-26.2-7.9-5.8 4.4-20.5 8-26.6 8a4.7 4.7 0 0 1-.8-.1 73.1 73.1 0 0 0 2.6 18.7 71 71 0 0 0 24.6 37.1 71.2 71.2 0 0 0 24.6-37.2 73.1 73.1 0 0 0 2.6-18.6z"></path><path fill="#c09300" stroke="none" d="M439.4 265a62.2 62.2 0 0 1-16.6 3l.1 4.1a72.8 72.8 0 0 0 2.5 14.5 71 71 0 0 0 14 26.8V265zm20.6 0v49.2a71.1 71.1 0 0 0 14.6-27.6 73 73 0 0 0 2.5-14.5l.1-4h-.8c-3.8 0-10.4-1.2-16.4-3.2z"></path><g stroke-width="1.3"><path stroke-width="1.2" d="M462.3 253c.7.1-.9-3.5-.9-3.5 1.8 1.8 8.4 2.3 8.4 2.3-4-1.8-8-15.1-7.5-25.8.4-10.6-1.5-14.8-3-16.4-2-2-8.5-3.8-12.7-4-2.5-.1-2 1.8-2 1.8-4.5-1.1-9-1.6-11-.2-1.8 1.2-2.2 7.5-.8 6.4 3.3-2.7 6.2-.2 8.2 2.7 1.8 2.5 1.7 9.7-.9 18.2a60 60 0 0 1-10 17.7c4 0 9.6-3.5 9.6-3.5l-1.3 5.5c4.2-2 7.5-5.1 7.5-5.1l4 4.2c1.3-1.8 4-4.2 4-4.2s3.3 3.5 8.4 4z"></path><path fill="none" d="M446.1 227.6s-2.2 16.4-6.4 21m10-21.5s-1 16.7-3.8 22m6.9-21.3s0 18.2 1 21.3m3-20.4s.8 15.3 4.6 20.8"></path><path fill="#c09300" stroke-width=".3" d="M442 219.6a8 8 0 0 0-1-3.3c-2-3-4.9-5.4-8.2-2.7 0 0 1.1-3.5 3.6-3.6 1.8-.1 6.1 1.4 9.9 7.8 0 0-2.8-.6-3.5 0-1.2 1-.7 1.8-.7 1.8z"></path><path fill="#c09300" stroke-width=".3" d="M432.4 209.3c.3-1 .7-1.8 1.3-2.1 2-1.4 6.4-1 10.9.2 0 0-.4-1.9 2-1.8 4.2.2 10.6 2 12.6 4a7.9 7.9 0 0 1 1.5 2.4c-1-1.4-3.8-1.3-4.5-1.2-1 .1-1.7 0-3.1.4-.7.2-1.7.4-2.3.8-.4.4-.8 1.6-1.4 1.6-1 0-1-.2-1.3-.5-.3-.5-.5-1.1-.9-1-1 .1-2.8-.7-5-2.5-2.3-1.8-3.2-2.2-6-2-3 .2-3.8 1.9-3.8 1.9v-.2z"></path><circle cx="448.8" cy="210.7" r="1.2" stroke="none"></circle></g></g></svg>

`;
});
const Es = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of es" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-es" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#AA151B" d="M0 0h640v480H0z"></path><path fill="#F1BF00" d="M0 120h640v240H0z"></path><path fill="#ad1519" d="m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"></path><path fill="#c8b100" d="M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"></path><path fill="#c8b100" d="M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"></path><path fill="#c8b100" d="M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"></path><path fill="#c8b100" d="M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"></path><path fill="#c8b100" d="M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"></path><path fill="#c8b100" d="M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"></path><path fill="none" stroke="#000" stroke-width=".3" d="M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"></path><path fill="#c8b100" d="m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"></path><path fill="#c8b100" d="M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"></path><path fill="#c8b100" d="m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6z"></path><path fill="#c8b100" d="M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3z"></path><path fill="#c8b100" d="M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1z"></path><path fill="#fff" d="M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"></path><path fill="#ad1519" d="M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"></path><path fill="#058e6e" d="M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"></path><path fill="#ad1519" d="m127.3 215.3.3-.4h.7l-.4.6-.6-.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="m127.3 215.3.3-.4h.7l-.4.6-.6-.2"></path><path fill="#fff" d="M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4z"></path><path fill="#058e6e" d="M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"></path><path fill="#ad1519" d="m142 215.4-.3-.5h-.7l.3.6.6-.1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m142 215.4-.3-.5h-.7l.3.6.6-.1"></path><path fill="#ad1519" d="M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6z"></path><path fill="#c8b100" d="m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"></path><path fill="#c8b100" d="M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"></path><path fill="#c8b100" d="m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"></path><path fill="#c8b100" d="m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"></path><path fill="#c8b100" d="m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"></path><path fill="#c8b100" d="m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"></path><path fill="#c8b100" d="m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"></path><path fill="#c8b100" d="m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"></path><path fill="#c8b100" d="m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"></path><path fill="#c8b100" d="m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"></path><path fill="#c8b100" d="M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"></path><path fill="#c8b100" d="M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"></path><path fill="#c8b100" d="m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"></path><path fill="#c8b100" d="m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"></path><path fill="#c8b100" d="m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"></path><path fill="#c8b100" d="m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"></path><path fill="#c8b100" d="M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5z"></path><path fill="#c8b100" d="M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"></path><path fill="#c8b100" d="m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1z"></path><path fill="#c8b100" d="M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"></path><path fill="#c8b100" d="m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"></path><path fill="#c8b100" d="M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"></path><path fill="#c8b100" d="M124 223h21.4v-5.5H124v5.6z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M124 223h21.4v-5.5H124v5.6z"></path><path fill="#c8b100" d="M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2z"></path><path fill="#c8b100" d="M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"></path><path fill="#c8b100" d="M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"></path><path fill="#005bbf" d="M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"></path><path fill="#ccc" d="M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"></path><path fill="#005bbf" d="M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"></path><path fill="none" stroke="#000" stroke-width=".4" d="M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"></path><path fill="#ccc" d="M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"></path><path fill="#005bbf" d="M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"></path><path fill="#c8b100" d="m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0z"></path><path fill="#c8b100" d="M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"></path><path fill="none" stroke="#000" stroke-width=".4" d="M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"></path><path fill="#c8b100" d="M123.7 316.7h22V311h-22v5.6z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M123.7 316.7h22V311h-22v5.6z"></path><path fill="#ad1519" d="M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8z"></path><path fill="#ccc" d="M126.8 305.6h15.6V229h-15.6v76.5z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"></path><path fill="#ad1519" d="M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"></path><path fill="#ad1519" d="M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"></path><path fill="#ad1519" d="M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"></path><path fill="none" stroke="#000" stroke-width=".4" d="M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"></path><path fill="#ad1519" d="M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"></path><path fill="#c8b100" d="M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 0 1-.6.3l-1-2.3m7.3-2.5-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 0 1-1 0 54.8 54.8 0 0 1-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 0 1 3.5 6h1m8.8-4.7.4-.9a3.4 3.4 0 0 0-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 0 1-.4 1.1 4 4 0 0 0 1.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"></path><path fill="#ad1519" d="M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"></path><path fill="#c8b100" d="M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"></path><path fill="none" stroke="#000" stroke-width=".3" d="M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"></path><path fill="#c8b100" d="M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"></path><path fill="#c8b100" d="M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"></path><path fill="#c8b100" d="M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"></path><path fill="#fff" d="M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4"></path><path fill="none" stroke="#000" stroke-width=".2" d="M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm-.2-1.4a.4.4 0 0 1 .4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 0 1-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-width=".3" d="m287.8 211.2.2-1a2.7 2.7 0 0 0-2.7-2.8c-.5 0-1 .1-1.3.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m283 209.2.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"></path><path fill="none" stroke="#000" stroke-width=".2" d="M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 0 1 .5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 0 1 .5-.4c.2 0 .4.1.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"></path><path fill="#c8b100" d="m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"></path><path fill="#fff" d="M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4"></path><path fill="none" stroke="#000" stroke-width=".2" d="M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-width=".3" d="M267.8 211.2a2.8 2.8 0 0 1-.2-1 2.7 2.7 0 0 1 2.7-2.8c.5 0 1 .1 1.4.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M272.7 209.2a1.7 1.7 0 0 1-.3-.8c0-1 1.2-2 2.6-2a3 3 0 0 1 1.5.4"></path><path fill="none" stroke="#000" stroke-width=".2" d="M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 0 1-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"></path><path fill="#c8b100" d="M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2z"></path><path fill="#c8b100" d="M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1z"></path><path fill="#fff" d="M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"></path><path fill="#ad1519" d="M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"></path><path fill="#058e6e" d="M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"></path><path fill="#ad1519" d="m270.5 215.3.3-.4h.7l-.4.6-.6-.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="m270.5 215.3.3-.4h.7l-.4.6-.6-.2"></path><path fill="#fff" d="M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4z"></path><path fill="#058e6e" d="M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"></path><path fill="#ad1519" d="m285.1 215.4-.2-.5h-.7l.3.6.6-.1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m285.1 215.4-.2-.5h-.7l.3.6.6-.1"></path><path fill="#ad1519" d="M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"></path><path fill="#c8b100" d="m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"></path><path fill="#c8b100" d="M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"></path><path fill="#c8b100" d="M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"></path><path fill="#c8b100" d="m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"></path><path fill="#c8b100" d="m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"></path><path fill="#c8b100" d="m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"></path><path fill="#c8b100" d="m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"></path><path fill="#c8b100" d="m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"></path><path fill="#c8b100" d="m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"></path><path fill="#c8b100" d="m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"></path><path fill="#c8b100" d="M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"></path><path fill="#c8b100" d="M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"></path><path fill="#c8b100" d="m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"></path><path fill="#c8b100" d="m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"></path><path fill="#c8b100" d="m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"></path><path fill="#c8b100" d="M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"></path><path fill="#c8b100" d="M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5z"></path><path fill="#c8b100" d="M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4z"></path><path fill="#c8b100" d="M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 0 1-.8-.8"></path><path fill="#c8b100" d="M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"></path><path fill="#c8b100" d="M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"></path><path fill="none" stroke="#000" stroke-width=".3" d="M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 0 1-.8-.8c0-.4.2-.7.6-.8"></path><path fill="#c8b100" d="m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"></path><path fill="#c8b100" d="M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"></path><path fill="#c8b100" d="m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"></path><path fill="#c8b100" d="M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"></path><path fill="#c8b100" d="M267.2 223h21.4v-5.5h-21.4v5.6z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M267.2 223h21.4v-5.5h-21.4v5.6z"></path><path fill="#c8b100" d="M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"></path><path fill="#c8b100" d="M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"></path><path fill="#c8b100" d="M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"></path><path fill="#005bbf" d="M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"></path><path fill="#ccc" d="M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"></path><path fill="#005bbf" d="M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"></path><path fill="none" stroke="#000" stroke-width=".4" d="M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"></path><path fill="#ccc" d="M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"></path><path fill="#005bbf" d="M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"></path><path fill="#c8b100" d="m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"></path><path fill="#c8b100" d="M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"></path><path fill="none" stroke="#000" stroke-width=".4" d="M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"></path><path fill="#c8b100" d="M266.9 316.7h22V311h-22v5.6z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M266.9 316.7h22V311h-22v5.6z"></path><path fill="#ad1519" d="M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8z"></path><path fill="#ccc" d="M270.1 305.6h15.6V229h-15.6v76.5z"></path><path fill="none" stroke="#000" stroke-width=".4" d="M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"></path><path fill="#ad1519" d="M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"></path><path fill="#ad1519" d="M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"></path><path fill="#ad1519" d="M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"></path><path fill="none" stroke="#000" stroke-width=".4" d="M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"></path><path fill="#ad1519" d="M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"></path><path fill="#c8b100" d="M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 0 1-.5.1 52.8 52.8 0 0 1-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 0 1 4 5.7h.5l.5-.1m6-6.6h-1a8 8 0 0 1-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1 2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 0 1 2 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7-.2 2 .8.5.9.5.5-7a3.4 3.4 0 0 1-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5 2-1.4-.2 2.3-1.8-1"></path><path fill="none" stroke="#000" stroke-width=".1" d="M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2z"></path><path fill="#ad1519" stroke="#000" stroke-width=".3" d="M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0 0 14.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 0 1 7.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 0 1 7.5-4.7 26 26 0 0 1 10.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 0 0 8-2c3.7-1.5 9-2.5 15.5-2.5z"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 0 1-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0 1 29.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 0 1 0 2.4c-7.5 2.2-18 3.6-29.8 3.6"></path><path fill="#ad1519" d="M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="M206.9 215.7v-6.3m-1.7 6.3v-6.3"></path><path fill="none" stroke="#000" stroke-width=".2" d="M203.6 215.7v-6.3m-1.6 6.3v-6.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"></path><path fill="none" stroke="#000" stroke-width=".5" d="M189.7 214.5v-4.2m-1.2 4.1v-4"></path><path fill="none" stroke="#000" stroke-width=".6" d="M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"></path><path fill="none" stroke="#000" stroke-width=".7" d="M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"></path><path fill="none" stroke="#000" stroke-width=".9" d="M179.8 212.8v-.7"></path><path fill="none" stroke="#000" stroke-width=".1" d="M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M206 207.4a108 108 0 0 0-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0 1 33 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 0 1-1.3-.6 1 1 0 0 1 .7-1.3 121 121 0 0 1 33.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".4" d="M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2z"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="M206.1 205.6H203a1 1 0 0 1 0-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"></path><path fill="#058e6e" stroke="#000" stroke-width=".4" d="m190.3 206.5-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 0 1 1-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="m174 208.5 1.2-1.6 3.3.4-2.6 2-1.8-.8"></path><path fill="#058e6e" stroke="#000" stroke-width=".4" d="m222 206.5 2.3.2c.5.1 1-.3 1.1-.8a1 1 0 0 0-.9-1.1l-2.2-.3-2.4-.3a1 1 0 0 0-1.1.9c-.1.5.3 1 .9 1l2.3.4"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="m238.2 208.5-1.1-1.6-3.3.4 2.6 2 1.8-.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"></path><path fill="#c8b100" d="m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"></path><path fill="#c8b100" d="M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"></path><path fill="#c8b100" d="M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"></path><path fill="#c8b100" d="M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"></path><path fill="#c8b100" d="M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"></path><path fill="#c8b100" d="M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4z"></path><path fill="#c8b100" d="m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"></path><path fill="#c8b100" d="M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"></path><path fill="#c8b100" d="M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"></path><path fill="#c8b100" d="M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8z"></path><path fill="#fff" d="M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7"></path><path fill="none" stroke="#000" stroke-width=".4" d="M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7z"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 0 1-.8-.8"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="m206.2 191.8 1.2.2a4.6 4.6 0 0 0 4.5 6 4.7 4.7 0 0 0 4.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 0 0 4.7-5l1.5-1.5.7 2a4 4 0 0 0-.4 1.9 4.4 4.4 0 0 0 4.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 0 1-3.3 1 6.5 6.5 0 0 1-6.1-3.7 7 7 0 0 1-10.4-.3 7 7 0 0 1-4.6 1.8 6.9 6.9 0 0 1-5.7-3 6.9 6.9 0 0 1-5.7 3 7 7 0 0 1-4.7-1.8 7 7 0 0 1-10.4.3 6.5 6.5 0 0 1-6 3.7 6.7 6.7 0 0 1-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 0 0 3.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 0 0-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 0 0 0 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 0 0 4.5 3.1 4.6 4.6 0 0 0 4.5-6l1.2-.2"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M182.7 184a5.1 5.1 0 0 1 2.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 0 1-.7 1.6 1.9 1.9 0 0 0-1.5-.4 1.8 1.8 0 0 0-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 0 1 1-3.4m.4 9.8a1.8 1.8 0 0 1-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 0 0-3 2 5.3 5.3 0 0 0 3.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 0 0 .2-1.1 1.7 1.7 0 0 0-.6-1l1.4-1.3a10 10 0 0 1 2-.9l1.1-.4v.6a5.7 5.7 0 0 1-.2.8 5 5 0 0 1 3.4 1 5 5 0 0 1-2.9 2 6.4 6.4 0 0 0 .7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 0 1-1.8-.7"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M206.1 180.8a5.7 5.7 0 0 1 1.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 0 1-1 1.7 2.1 2.1 0 0 0-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M204.6 191.8a2 2 0 0 1-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 0 0-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 0 0 .1-2.6s.9-.7 1.8-1a8 8 0 0 1 2.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 0 1-3.6 1.6 6.9 6.9 0 0 0 .5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 0 0-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 0 1 1.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 0 0-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 0 0-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 0 1-.4.7 5 5 0 0 1 2.9 2 5.3 5.3 0 0 1-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 0 1-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 0 1-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 0 0-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 0 0 1.8-.7"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 0 1-2 2 2 2 0 0 1-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="m246.3 198 .7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 0 0-2.9-2.8 3 3 0 0 0-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 0 0-2.4-1.6l-1.3-.7-.1.5a5 5 0 0 0 0 .8 7.9 7.9 0 0 0-3.7.5 4.7 4.7 0 0 0 2.5 2.2l-.8.7a4 4 0 0 0-.4.5l1.3.2 2.5.2a14.5 14.5 0 0 0 1.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 0 1 2.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 0 1 2.4-1.6l1.3-.7v1.3a7.9 7.9 0 0 1 3.7.5 4.7 4.7 0 0 1-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 0 1-1.7-.2"></path><path fill="#ad1519" stroke="#000" stroke-width=".4" d="M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 0 1-2.1-2"></path><path fill="#005bbf" stroke="#000" stroke-width=".3" d="M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 0 1-4.2-4"></path><path fill="#c8b100" stroke="#000" stroke-width=".3" d="M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"></path><path fill="#ccc" d="M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2"></path><path fill="none" stroke="#000" stroke-width=".5" d="M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2z"></path><path fill="#ccc" d="M206.3 270h48.3v-53.5h-48.3V270z"></path><path fill="none" stroke="#000" stroke-width=".5" d="M206.3 270h48.3v-53.5h-48.3V270z"></path><path fill="#ad1519" d="M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"></path><path fill="#c8b100" stroke="#000" stroke-width=".5" d="M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"></path><path fill="#c8b100" stroke="#000" stroke-linejoin="round" stroke-width=".5" d="M158 301.6a24.4 24.4 0 0 0 5.5 15v-47.5h-5.4v32.5z"></path><path fill="#c7b500" stroke="#000" stroke-width=".5" d="M179.4 324.7a26.6 26.6 0 0 0 5.6 0v-55.9h-5.6v56z"></path><path fill="#c8b100" stroke="#000" stroke-width=".5" d="M190 323.5a19 19 0 0 0 5.8-2.5v-52.2H190l-.1 54.7z"></path><path fill="#ad1519" d="M158.1 270h48.2v-53.5H158V270z"></path><path fill="none" stroke="#000" stroke-width=".5" d="M158.1 270h48.2v-53.5H158V270z"></path><path fill="#c8b100" stroke="#000" stroke-width=".5" d="M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"></path><path fill="none" stroke="#000" stroke-width=".5" d="M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"></path><path fill="#ad1519" d="M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"></path><path fill="none" stroke="#000" stroke-width=".5" d="M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"></path><path fill="#c8b100" d="m215.1 294.1.1.5c0 .6-.5 1-1.1 1a1 1 0 0 1-1.1-1v-.5h-1.5a2.5 2.5 0 0 0 1.8 2.9v3.9h1.6V297a2.6 2.6 0 0 0 1.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 0 1-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 0 1-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 0 0 1.8-2.4 2 2 0 0 0 0-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 0 1 .1-.5h-5.9m-6.7 22.1a15.6 15.6 0 0 0 3.7-1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.3-4.8h1.7a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2.2-4.5-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3 1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 0 1-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7m2.2-9.4 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 0 0 .3-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3.1 2.6zm6-4.8a1.2 1.2 0 0 0-1.5 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2.2-4.5 1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.6 18.6 0 0 0 4-2l-.4-1.7m-2.2-9.4-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7.5 1.6h4.5l.5-1.6h-5.5m21.1 0-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2"></path><path fill="#c8b100" d="M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 0 0-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 0 1 .2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 0 1 1-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.7 2.5 2.5 2.5 0 0 0 1.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 0 1-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 0 1 2.4-1.7 2.6 2.6 0 0 1 2.7 2.5 2.5 2.5 0 0 1-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4a2.6 2.6 0 0 1 2.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm-17.8 4-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m30.6 0-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m-25.5.8 1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 0 1 1 1c0 .6-.4 1-1 1a1.1 1.1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 0 1-1.1-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.6m0-1.6.5-1.6h4.6l.5 1.6h-5.6m-5.9 5-1.7.5v4.3l1.7.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"></path><path fill="none" stroke="#c8b100" stroke-width=".3" d="M232.7 316.3a15.6 15.6 0 0 0 3.7-1.1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 0 1-.2-.5h-4V294h4a2.6 2.6 0 0 1 .2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 0 1 .2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.6 2.5 2.5 2.5 0 0 0 1.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.2-4.8h1.6a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-8.4-13.1V297a2.5 2.5 0 0 1-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 0 1-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2-4.5-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3 1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7"></path><path fill="none" stroke="#c8b100" stroke-width=".3" d="m221.9 305.1 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 0 1-1.1-1zm25.7 19.4.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 0 0 .2-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3 2.6zm8.4-13.1V297a2.5 2.5 0 0 0 1.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 0 0-1.6 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2-4.5 1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 0 1-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 0 1 2.5-1.7 2.6 2.6 0 0 1 2.6 2.5 2.5 2.5 0 0 1-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm8.8 33.8a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.7 18.7 0 0 0 4-2l-.4-1.7m-27.4-31.4-1.7.5v4.3l1.7.5v-5.2m1.7 0 1.6.4v4.3l-1.6.5V283m30.5 0-1.7.5v4.3l1.7.5V283"></path><path fill="none" stroke="#c8b100" stroke-width=".3" d="m247.1 283.1 1.7.5v4.3l-1.7.5V283m-8.6 22-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20 1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m0 1.5.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 0 1-1.2-1zm-4.4-.7-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.5m0-1.6.4-1.6h4.6l.5 1.6h-5.5m-6 5-1.6.5v4.3l1.6.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"></path><path fill="#058e6e" d="M227.7 294.7a2.6 2.6 0 0 1 2.6-2.5 2.6 2.6 0 0 1 2.6 2.5 2.6 2.6 0 0 1-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"></path><path fill="#db4446" d="M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"></path><path fill="none" stroke="#000" stroke-width=".4" d="M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"></path><path fill="#ed72aa" stroke="#000" stroke-width=".4" d="M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 0 1-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 0 1 .2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 0 1-1-1l-.4-1.4a4.2 4.2 0 0 1 0-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 0 1-.7.8h-.9a2.5 2.5 0 0 0-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 0 0-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 0 1-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 0 0-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 0 0 2-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 0 0-1.8-.6 9 9 0 0 1-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 0 1 2.2 2.1"></path><path d="m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"></path><path d="M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"></path><path fill="none" stroke="#000" stroke-width=".1" d="M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"></path><path fill="none" stroke="#000" stroke-width=".3" d="m237.3 231.3-.4-.7a8 8 0 0 1-.3-.4"></path><path fill="#db4446" d="M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8z"></path><path fill="#db4446" d="M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6z"></path><path fill="#db4446" d="M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"></path><path d="m228.2 230.5.3-.5.3.5h-.7"></path><path fill="none" stroke="#000" stroke-width=".3" d="m228.2 230.5.3-.5.3.5h-.7"></path><path d="m229 230.5.3-.5.4.5h-.8"></path><path fill="none" stroke="#000" stroke-width=".3" d="m229 230.5.3-.5.4.5h-.8"></path><path d="m228.6 227.3.8.3-.7.4-.1-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m228.6 227.3.8.3-.7.4-.1-.6"></path><path d="m229.5 227.6.7.2-.5.4-.2-.6"></path><path fill="none" stroke="#000" stroke-width=".3" d="m229.5 227.6.7.2-.5.4-.2-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 0 0 1.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 0 0-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5 1.3-.8a4 4 0 0 0 1-1"></path><path fill="#db4446" d="M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"></path><path fill="#db4446" d="M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"></path><path fill="none" stroke="#000" stroke-width=".4" d="M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"></path><path fill="#db4446" d="M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"></path><path fill="none" stroke="#000" stroke-width=".4" d="M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"></path><path fill="#db4446" d="M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"></path><path fill="none" stroke="#000" stroke-width=".4" d="M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"></path><path fill="#db4446" d="M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"></path><path fill="none" stroke="#000" stroke-width=".4" d="M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"></path><path fill="#db4446" d="M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"></path><path fill="none" stroke="#000" stroke-width=".4" d="M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"></path><path fill="#db4446" d="M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"></path><path fill="none" stroke="#000" stroke-width=".4" d="M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"></path><path fill="#db4446" d="M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3z"></path><path fill="#db4446" d="M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"></path><path fill="none" stroke="#000" stroke-width=".4" d="M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"></path><path fill="#ffd691" stroke="#000" stroke-width=".5" d="M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"></path><path fill="#058e6e" stroke="#000" stroke-width=".5" d="M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"></path><path fill="#ad1519" stroke="#000" stroke-width=".5" d="M206.7 323.8a4.8 4.8 0 0 1 0-7.1 4.8 4.8 0 0 1 1.5 3.5 4.9 4.9 0 0 1-1.5 3.6"></path><path fill="#058e6e" stroke="#000" stroke-width=".5" d="M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"></path><path fill="#fff" d="M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"></path><path fill="#fff" d="M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"></path><path fill="#fff" d="M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"></path><path fill="#fff" d="M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 0 1-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"></path><path fill="#fff" d="M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"></path><path fill="#fff" d="M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"></path><path fill="#fff" d="M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"></path><path fill="#fff" d="M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"></path><path fill="#fff" d="M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"></path><path fill="#fff" d="M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"></path><path fill="#fff" d="M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"></path><path fill="#fff" d="M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" stroke="#000" stroke-width=".4" d="M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"></path><path fill="#fff" d="M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"></path><path fill="#fff" d="M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"></path><path fill="#fff" d="M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#fff" d="M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"></path><path fill="none" stroke="#000" stroke-width=".4" d="M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"></path><path fill="#c8b100" stroke="#000" stroke-width=".4" d="m179.3 258.2-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0 2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3 1-2a5.3 5.3 0 0 0-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12 .4-4.4h-4.2l.2 4.4h3.6zm3.3 0-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0 .2-4.4h-4.2l.5 4.4h3.5z"></path><path fill="#0039f0" d="M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"></path><path fill="#ad1519" d="M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"></path><path fill="none" stroke="#000" stroke-width=".6" d="M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"></path><path fill="#005bbf" d="M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"></path><path fill="none" stroke="#000" stroke-width=".6" d="M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"></path><path fill="#c8b100" d="M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"></path><path fill="#c8b100" d="M199.2 269.9h4.1v-1h-4.1v1z"></path><path fill="none" stroke="#000" stroke-width=".3" d="M199.2 269.9h4.1v-1h-4.1v1z"></path><path fill="#c8b100" d="M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"></path><path fill="#c8b100" d="M209.4 269.9h4.1v-1h-4.1v1z"></path><path fill="none" stroke="#000" stroke-width=".3" d="M209.4 269.9h4.1v-1h-4.1v1z"></path><path fill="#c8b100" d="M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".3" d="M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"></path><path fill="#c8b100" d="M204.3 278.6h4.1v-1h-4.1v1z"></path><path fill="none" stroke="#000" stroke-width=".3" d="M204.3 278.6h4.1v-1h-4.1v1z"></path><path fill="#c8b100" d="M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"></path><path d="M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"></path><path d="m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"></path><path fill="none" stroke="#000" stroke-width=".1" d="m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"></path><path d="m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"></path><path fill="none" stroke="#000" stroke-width=".1" d="m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"></path><path d="M233.7 223h.2v.2h-.2s-.1-.1 0-.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"></path><path d="M237.3 225.5v-.2h-.3l.1.2h.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="M237.3 225.5v-.2h-.3l.1.2h.2z"></path><path d="m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"></path><path d="M238.8 227v-.3h-.3v.2h.3"></path><path fill="none" stroke="#000" stroke-width=".1" d="M238.8 227v-.3h-.3v.2h.3z"></path><path fill="#c8b100" d="M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"></path><path fill="#c8b100" d="M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"></path><path fill="#c8b100" d="m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5"></path><path fill="#c8b100" d="M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3z"></path><path fill="#c8b100" d="m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"></path><path fill="#c8b100" d="m234.2 221.4-.4.4-.6-.6v-.2h1v.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="m234.2 221.4-.4.4-.6-.6v-.2h1v.4"></path><path fill="#c8b100" d="m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"></path><path fill="#c8b100" d="M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"></path><path fill="#c8b100" d="M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"></path><path fill="#c8b100" d="m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5"></path><path fill="#c8b100" d="M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4"></path><path fill="none" stroke="#000" stroke-width=".3" d="M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4z"></path><path fill="#c8b100" d="m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2"></path><path fill="#c8b100" d="m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5"></path><path fill="none" stroke="#000" stroke-width=".3" d="m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5"></path><path fill="#c8b100" d="m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1"></path><path fill="#c8b100" d="M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0"></path><path fill="none" stroke="#000" stroke-width=".3" d="M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0z"></path><path fill="#c8b100" d="M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"></path><path fill="none" stroke="#000" stroke-width=".3" d="M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"></path><path fill="#c8b100" d="m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1"></path><path fill="none" stroke="#000" stroke-width=".3" d="m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1"></path><path fill="#c8b100" d="M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"></path><path fill="none" stroke="#000" stroke-width=".3" d="M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"></path><path fill="none" d="M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"></path><path fill="none" stroke="#000" stroke-width=".1" d="M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"></path><path fill="none" stroke="#000" stroke-width=".2" d="M129.2 216.6v-.2"></path><path fill="none" d="M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"></path><path fill="none" stroke="#000" stroke-width=".1" d="M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"></path><path fill="none" stroke="#000" stroke-width=".2" d="M272.6 216.6v-.2"></path><path fill="none" d="M279.1 217v-1m-.6 1v-1m-.4 1.1V216"></path></svg>

`;
});
const Fi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of fi" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-fi" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#002f6c" d="M0 174.5h640v131H0z"></path><path fill="#002f6c" d="M175.5 0h130.9v480h-131z"></path></svg>

`;
});
const Fr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of fr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-fr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#002654" d="M0 0h213.3v480H0z"></path><path fill="#ce1126" d="M426.7 0H640v480H426.7z"></path></svg>

`;
});
const Ga = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ga" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ga" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#ffe700" d="M640 480H0V0h640z"></path><path fill="#36a100" d="M640 160H0V0h640z"></path><path fill="#006dbc" d="M640 480H0V320h640z"></path></g></svg>

`;
});
const Gb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of gb" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-gb" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#012169" d="M0 0h640v480H0z"></path><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"></path><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"></path><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"></path><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"></path></svg>

`;
});
const Gd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of gd" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-gd" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><g id="gd-c"><g id="gd-b"><path id="gd-a" fill="#fcd116" d="M0-1v1h.5" transform="rotate(18 0 -1)"></path><use xlink:href="#gd-a" transform="scale(-1 1)"></use></g><use xlink:href="#gd-b" transform="rotate(72)"></use><use xlink:href="#gd-b" transform="rotate(144)"></use><use xlink:href="#gd-b" transform="rotate(216)"></use><use xlink:href="#gd-b" transform="rotate(288)"></use></g></defs><path fill="#ce1126" d="M0 0h640v480H0z"></path><path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z"></path><path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z"></path><circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126"></circle><use xlink:href="#gd-c" width="100%" height="100%" transform="matrix(52.8 0 0 52.8 320 240)"></use><use xlink:href="#gd-d" width="100%" height="100%" x="-100" transform="translate(-30.3)"></use><use xlink:href="#gd-c" id="gd-d" width="100%" height="100%" transform="matrix(31.2 0 0 31.2 320 33.6)"></use><use xlink:href="#gd-d" width="100%" height="100%" x="100" transform="translate(30.3)"></use><path fill="#ce1126" d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"></path><path fill="#fcd116" d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"></path><use xlink:href="#gd-d" width="100%" height="100%" x="-100" transform="translate(-30.3 414.6)"></use><use xlink:href="#gd-c" width="100%" height="100%" transform="matrix(31.2 0 0 31.2 320 448.2)"></use><use xlink:href="#gd-d" width="100%" height="100%" x="100" transform="translate(30.3 414.6)"></use></svg>

`;
});
const Gh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of gh" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-gh" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#006b3f" d="M0 0h640v480H0z"></path><path fill="#fcd116" d="M0 0h640v320H0z"></path><path fill="#ce1126" d="M0 0h640v160H0z"></path><path d="m320 160 52 160-136.1-98.9H404L268 320z"></path></svg>

`;
});
const Gn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of gn" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-gn" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="red" d="M0 0h213.3v480H0z"></path><path fill="#ff0" d="M213.3 0h213.4v480H213.3z"></path><path fill="#090" d="M426.7 0H640v480H426.7z"></path></g></svg>

`;
});
const Gr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of gr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-gr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z"></path><path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z"></path><path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z"></path><path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z"></path><path fill="#0d5eaf" d="M0 0h266.7v266.7H0z"></path><path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z"></path><path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z"></path><path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z"></path><path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z"></path><g fill="#fff" fill-rule="evenodd" stroke-width="1.3"><path d="M106.7 0H160v266.7h-53.3z"></path><path d="M0 106.7h266.7V160H0z"></path></g><path fill="#0d5eaf" d="M0 426.7h640V480H0z"></path></svg>

`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of hr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-hr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#171796" d="M0 0h640v480H0z"></path><path fill="#fff" d="M0 0h640v320H0z"></path><path fill="red" d="M0 0h640v160H0zm320 364.1c51.3 0 93.3-42 93.3-93.3V160H226.7v110.8c0 51.4 42 93.4 93.3 93.4z"></path><path fill="#fff" d="M320 362.6a91.8 91.8 0 0 0 91.6-91.5V161.8H228.5V271a91.8 91.8 0 0 0 91.5 91.5z"></path><g fill="red"><path d="M267.1 165.2H232v38.7h35.2zm0 77.4h35.3v-38.7H267zM232 270.9c0 3.5.2 7 .6 10.4h34.6v-38.7H232v28.3zm105.7-28.3h-35.2v38.7h35.2zm0 77.4h35.2v-38.7h-35.2zm35.2 21.2A89.2 89.2 0 0 0 393 320h-20v21.2zM267.1 320h35.3v-38.7H267zm-20.1 0a89.2 89.2 0 0 0 20.1 21.2V320H247zm79.1 38.7c4-.3 7.7-.8 11.5-1.6V320h-35.2v37.1a87 87 0 0 0 11.4 1.6c4.1.3 8.2.2 12.3 0z"></path><path d="M407.4 281.3c.4-3.4.6-6.9.6-10.4v-28.3h-35.2v38.7h34.6zm-69.8-38.7h35.2v-38.7h-35.2zm0-77.4h-35.2v38.7h35.2zm70.4 38.7v-38.7h-35.2v38.7z"></path></g><path fill="#fff" d="m410 158.8 21.8-49.5-16.6-26.8-27.6 10.2-19.4-22.2-25.4 14.7L320 66.5l-22.7 18.6-25.5-14.6-19.4 22.2-27.6-10.3-16.6 27 21.8 49.4a217.8 217.8 0 0 1 90-19.3c32 0 62.5 6.9 90 19.3z"></path><path fill="#0093dd" d="m253 94.8-27.4-10-15.3 24.7 5.9 13.3 14.8 33.7a219.7 219.7 0 0 1 34.6-12L253 94.8z"></path><path fill="#fff" stroke="#000" stroke-width=".3" d="M251.4 119.3a13.3 13.3 0 0 1 1.6 6.2c0 7.3-6 13.3-13.4 13.3a13.4 13.4 0 0 1-13.1-10.8 13.4 13.4 0 0 0 11.7 6.9 13.4 13.4 0 0 0 13.2-15.6z"></path><path d="m227.6 114 1-4.9-3.8-3.2-.1-.1.2-.1 4.6-1.6 1-4.8v-.2l.2.1 3.7 3.2 4.6-1.6h.2v.2l-1 4.8 3.7 3.2.2.2h-.3l-4.6 1.6-1 4.8v.2l-.1-.1-3.7-3.2-4.6 1.6h-.3z"></path><path fill="#f7db17" d="m233.6 107.6 3.5 3 4.3-1.5zm0-.2 7.8 1.6-3.4-3zm-8.3-1.6 7.8 1.5-3.5-3zm7.8 1.7-7.8-1.5 3.4 3zm.4-.3 5.2-6-4.3 1.5zm-5.6 6.4 5.2-6-4.3 1.5zm5.3-5.9-5.2 6 4.3-1.5zm5.6-6.4-5.2 6 4.3-1.5zm-5.6 6-2.6-7.6-.9 4.5zm2.7 8-2.5-7.5-.9 4.5zm-2.4-7.6 2.6 7.5.9-4.5zm-2.7-8 2.5 7.5 1-4.5z"></path><path fill="#171796" d="M297.5 87.4 272.1 73 253 94.9l12.6 49.6a219.8 219.8 0 0 1 36.1-6l-4.2-51.1z"></path><path fill="red" d="M262.5 132.2a232.3 232.3 0 0 1 38.2-6.4l-1-12.9a245.6 245.6 0 0 0-40.4 6.7l3.2 12.6zm-6.3-25a258 258 0 0 1 42.4-7l-1.1-12.7a270.7 270.7 0 0 0-44.5 7.4l3.2 12.3z"></path><g transform="translate(-160) scale(.00237)"><path fill="#0093dd" d="m212105 36890-23 13-9517-7794-9497 7778 1788 21560c2543-210 5113-322 7709-322 2608 0 5190 113 7744 325l1795-21560z"></path><g id="hr-a"><path d="M202545 46585c-18-2-44 10-69 45-186 250-359 469-545 720-195 61-242 180-167 348-261-26-291 193-302 432-250-379-522-482-814-307-11-230-187-338-439-392-180-10-319-65-436-145-60-42-110-64-170-106-126-88-226-5-172 74 267 434 535 868 802 1302-14 80 6 151 88 204 47 133 93 265 140 397-11 38-21 75-32 113-221-105-443-118-664-133-170-8-287-50-361-137-54-63-91-26-92 82-3 534 162 1014 599 1492-231 4-462 11-694 21-79 6-95 39-73 104 126 304 339 579 822 766-208 112-327 285-357 520-9 224-75 382-212 455-60 32-81 65-24 106 253 185 565 193 895 112-157 270-226 553-198 850 208 56 412 15 614-52-29 61-44 175-52 309-7 115-41 229-104 343-32 33-65 84 4 102 336 91 648 52 915-47 0 243 2 487 76 727 18 58 70 102 125 26 155-214 322-396 527-517 31 90 75 168 156 215 96 55 147 170 153 343 0 30-2 60 35 90 149 7 514-380 589-597 206 121 284 246 439 461 55 76 99 29 128-25 62-243 67-481 66-724 267 99 579 138 915 47 69-19 36-70 4-102-62-114-105-250-113-365-9-133-14-226-43-287 202 68 405 108 614 52 29-297-53-579-211-850 330 80 655 73 908-112 57-41 35-74-24-106-136-73-203-231-212-455-30-235-149-409-357-520 483-187 696-463 822-766 22-66 6-99-73-104-231-10-480-24-711-27 437-478 606-961 604-1495-1-108-38-146-92-82-74 87-179 137-348 146-222 15-435 24-656 128-11-38-21-75-32-113 46-132 106-260 153-393 82-53 102-123 88-204 267-434 513-868 781-1302 54-79-46-162-171-74-60 42-110 64-170 106-117 80-257 134-437 145-251 54-417 167-428 397-293-175-564-73-814 307-11-239-41-457-302-432 75-168 17-291-178-352-186-250-458-470-644-720-31-35-51-47-69-45z"></path><g fill="#f7db17"><path d="M205075 47978c-51-26-124 17-162 95s-33 170 19 196c40 20 84-6 119-56l22-36c2-3 4-6 5-9 38-78 49-163-2-188zm-5008 0c52-26 124 17 162 95s39 165-13 191-103-24-141-102-60-158-9-184zm4539 905c-32 0-59 27-59 59s26 59 59 59 59-26 59-59c0-32-26-59-59-59zm-4032 0a59.1 59.1 0 1 0 .2 118.2 59.1 59.1 0 0 0-.2-118.2zm4294-304c-754-91-1506-133-2260-133s-1509 41-2269 115c-26 8-21 90 14 86 756-73 1507-113 2256-113 743 0 1485 40 2228 129 39 4 54-80 32-84z"></path><path d="M200319 48495c768-75 1530-117 2289-116 754 0 1507 42 2261 133l111-184c-32 10-62 9-90-5-76-38-92-161-36-274 56-114 164-175 240-138 39 19 62 62 68 114l446-739c-204 130-328 214-581 252-281 41-409 139-368 307 38 156-57 133-201 54-314-171-541 71-652 353-73 186-159 181-168-13-4-70 0-131-7-200-21-223-89-286-216-224-161 78-175 25-137-58 28-60 86-128 66-221-9-67-66-92-151-98-182-244-467-483-649-727-182 244-374 483-556 727-86 5-142 30-152 98-20 93 52 157 80 217 38 82 23 135-137 57-127-61-186-3-207 220-7 69-10 139-13 209-9 194-95 199-168 13-111-282-352-524-667-353-145 79-203 102-182-54 23-172-107-266-388-307-253-37-377-122-581-252l419 682c12-25 29-45 53-57 76-38 184 24 240 138 56 113 40 237-36 274-10 5-21 8-32 10l100 163zm4389 911c-7 3-7 4-24 11-46 19-80 66-134 124-57 60-128 125-211 188-12 10-25 19-44-6s-7-35 6-44c80-62 149-124 204-182 30-32 56-63 77-92-95-11-190-21-284-30-79 24-157 55-222 95-59 35-107 77-137 125-8 14-16 27-44 11-27-16-19-30-11-44 35-58 91-107 158-147 33-20 69-38 106-54-107-9-214-18-321-25-22 13-42 29-61 47-20 19-39 42-56 67-9 13-18 26-44 8s-18-31-8-44c19-29 41-54 64-77l9-9c-80-5-161-10-241-14-2 2-5 5-8 7a340.4 340.4 0 0 0-93 126c-6 15-12 29-41 18-29-12-23-26-17-41 12-29 27-55 45-81 8-11 18-22 27-33-115-5-230-9-344-12-4 5-9 8-14 11-25 15-47 32-66 51s-35 40-48 63c-8 14-16 28-43 12-28-16-20-29-12-43 16-28 35-54 59-77 7-7 14-13 21-19-122-2-244-4-365-4-120 0-240 1-360 3 8 7 15 13 22 20 23 23 42 49 59 77 8 14 16 27-12 43s-35 2-44-12c-13-23-29-44-48-63s-41-36-66-51c-6-3-12-7-15-12-115 2-230 6-345 11 11 11 20 23 29 35 19 25 33 52 45 81 6 15 12 29-17 41s-35-3-41-18c-9-24-22-46-38-67-15-21-34-41-55-59-4-3-7-6-10-10-81 4-162 8-243 13 4 4 9 8 13 12 24 23 45 48 64 77 9 13 18 26-8 44s-35 5-44-8c-18-26-36-48-56-67s-41-35-64-49c-1-1-3-2-5-3-110 7-220 14-330 23 43 18 85 38 122 61 67 40 124 89 158 147 8 14 16 27-11 44-27 16-35 3-44-11-29-48-78-90-137-125-72-44-159-77-246-102h-2c-90 7-179 15-268 24 22 33 51 68 86 106 55 58 124 120 204 182 13 9 25 19 6 44s-32 15-44 6c-83-64-155-128-211-188-37-38-99-111-135-140-196-90-354-127-575-147-153-14-318-9-458-79 36 85 75 164 126 229 53 68 120 121 209 147 8 2 21 16 22 25 28 157 84 286 169 386 52 60 114 110 188 149-75-81-132-166-172-251-67-142-90-286-77-420 1-16 3-32 34-29 32 3 30 19 29 35-11 123 9 256 72 387 56 118 159 237 291 346 24 19 0 63-29 55-154-44-290-123-383-231-89-104-149-237-180-397-94-32-165-90-222-164-47-60-85-131-118-205 28 428 182 801 456 1137 61 75 165 182 255 216 92 35 95 100-20 101-34 1-69 1-105 1 84 31 164 66 233 105 127 73 217 162 224 273 1 16 2 32-29 34-32 2-33-14-34-29-6-86-82-160-192-223-113-65-259-117-402-160-154 0-312-1-459 3 39 28 80 57 131 84 82 44 188 86 343 122 89 21 166 52 233 91 71 42 130 93 177 150 10 12 20 25-5 45s-34 8-45-5c-42-52-95-98-159-135-61-36-133-64-216-84-161-38-272-81-358-128-75-40-131-82-184-123 180 393 450 573 835 689 23 7 43 13 61 19 3 1 6 1 9 2 86 21 175 40 266 55 92 15 166 28 261 37 16 1 32 3 29 34-3 32-19 30-34 29-99-9-174-22-266-38-58-10-115-21-171-33-26 6-64 9-107 12-232 14-420 225-435 494 0 5 0 11-1 16 88-80 179-157 273-212 117-68 239-103 364-69 15 4 31 8 22 39-8 31-23 27-39 22-106-28-212 3-316 63-108 63-213 158-315 253-24 147-82 285-205 377 61 34 104 65 163 45 86-39 172-78 261-108 91-31 184-52 282-57 16-1 32-1 33 31s-14 32-31 33c-91 4-179 24-264 53-75 26-149 58-222 91 221 47 460-1 667-79 60-22 105-42 133-41 51-30 112-53 172-79 66-28 132-51 182-57 16-2 32-4 35 28 4 32-12 33-28 35-112 13-127 21-222 79 0 21-66 57-126 96-36 24-70 52-87 67-95 86-144 181-188 287-29 70-52 145-68 224 55-108 121-211 201-303 94-108 208-201 345-265 14-7 29-13 42 15 13 29-1 35-15 42-129 60-236 147-324 250-90 103-161 222-219 345-31 64-8 1-42 86 110-122 212-224 323-307 132-100 283-157 418-133 15 3 31 6 26 37s-21 28-37 26c-116-21-250 32-369 121-121 92-244 223-366 361 184 26 366-26 542-85 91-30 183-135 239-152 19-24 38-46 57-67 33-37 67-71 102-100 12-10 24-20 45 4s8 34-4 45c-33 28-65 60-96 94-32 35-62 73-92 113-6 8-13 17-24 16-60 70-151 162-172 240-57 210-25 370-122 576 71-38 128-81 175-134 53-60 94-135 128-230 37-104 95-195 167-270 75-77 165-136 261-172 15-5 30-11 41 19s-4 35-19 41c-87 32-169 86-238 157-66 68-119 151-153 247-37 102-81 183-141 250-44 50-95 91-156 127 52-3 78-10 121-7 79-6 211-66 279-119 66-51 116-120 154-206 6-15 13-29 42-16s23 27 16 42c-42 96-99 174-173 231-56 43-121 75-196 93 161-5 311-42 467-100 65-24 87-168 127-208 32-58 66-112 105-158 47-56 101-101 164-127 15-6 29-12 41 18 12 29-3 35-17 41-52 21-98 60-139 108-36 42-68 93-98 147 10 73-51 228-53 305-7 205-2 409 53 612 53-71 107-134 162-192 0-5 0-10 1-15 18-106 33-219 40-332 7-112 7-223-6-329-2-16-4-32 27-35 32-4 34 12 35 28 14 111 14 226 7 340-6 90-16 180-30 269 54-51 53-51 77-103 37-80 59-159 67-237 9-80 5-157-13-230-4-15-7-31 24-38s35 8 38 24c19 80 25 165 14 252-8 65-24 132-49 199 56-42 114-82 178-122-4-75-5-153-3-227 2-68 7-134 18-190 4-20 7-40 47-33s37 27 33 48c-9 50-14 111-16 177-2 78 0 162 4 243 5 82 49 185 125 230 103 62 158 163 186 274 16-145 17-280 3-400-17-143-55-267-114-368-8-14-16-27 12-44 27-16 35-2 43 12 63 110 104 241 122 393 17 146 13 310-13 488 102-82 381-258 352-594-7-27-16-52-28-75-7-14-14-28 14-42s35 0 42 14c17 33 30 69 39 110 5 24 8 49 11 76 13-7 45-43 51-39 24 16 58 38 80 54-21-60-35-120-42-178-10-87-5-172 14-252 4-15 7-31 38-24s27 23 24 38c-18 73-22 151-13 230 9 77 31 157 67 237 4 8 8 16 5 25 24 21 47 42 70 65-13-84-22-170-28-255-8-115-7-230 7-341 2-16 4-32 35-28s29 20 27 35c-13 106-13 217-6 329 7 113 22 225 40 332 1 2 1 5 1 7 54 59 95 120 152 196 55-203 73-407 66-612-2-76-69-227-65-302-30-55-63-107-100-151-41-49-87-87-139-108-15-6-29-12-18-41 12-29 27-24 41-18 62 26 117 71 164 127 38 45 72 98 103 154 57 7 78 179 143 212 154 57 298 94 453 100-75-19-140-50-195-93-74-57-131-135-173-231-6-15-13-29 16-42s35 2 42 16c38 86 88 156 154 206 85 66 289 124 400 127-61-37-113-78-157-128-59-67-104-148-141-250-34-95-87-179-153-247a642 642 0 0 0-238-157c-15-6-29-11-19-41 11-29 26-24 41-19 96 36 186 94 261 172 72 74 130 166 167 270 34 95 75 169 128 230 47 54 105 98 177 135-98-207-66-367-122-577-35-129-232-277-193-320 45-51 133 88 248 127 175 59 357 111 540 85-122-138-244-269-366-361-119-90-237-140-352-120-16 3-31 6-37-26-5-31 10-34 26-37 135-24 269 32 401 132 111 84 201 175 311 298-18-47 0-14-30-77-59-123-130-241-220-345-89-102-196-189-324-250-14-7-28-13-15-42 13-28 28-22 42-15 137 65 251 157 345 265 81 93 147 198 203 307-15-81-39-157-68-227-44-106-93-201-188-287-62-56-209-140-208-179-29-15-33-11-63-24-61-26-121-46-164-52-16-2-32-4-28-35 4-32 19-30 35-28 50 6 115 28 182 56 33 14 66 43 98 60 53 4 139 47 208 74 206 78 446 126 666 79-73-33-147-65-223-91-85-29-172-49-264-53-16-1-32-1-31-33s17-31 33-31c98 4 191 26 282 57 89 30 175 69 261 108 59 27 101-7 163-45-123-92-181-230-205-376l-2-2c-102-95-207-190-315-253-104-60-210-91-316-63-15 4-31 8-39-22-8-31 7-35 22-39 125-33 247 1 364 69 94 55 186 132 274 213 0-6-1-11-1-17-15-270-203-480-435-494-78-5-189 21-186-32 4-59 97-44 234-86 385-116 655-296 836-690-54 41-110 83-186 124-86 47-198 91-358 128-82 19-154 48-216 84-64 38-117 84-159 135-10 12-20 25-45 5s-14-32-5-45c47-57 106-108 177-150 67-39 145-70 233-91 155-36 261-78 343-122 51-27 92-55 131-84-148-4-305-3-459-3-143 44-289 96-402 160-110 63-186 136-192 223-1 16-2 32-34 29-32-2-31-18-29-34 8-111 97-200 224-273 69-39 149-74 233-105-35 0-70 0-104-1-116-2-112-66-20-101 90-34 190-141 251-216 271-334 412-714 456-1130-33 72-69 140-115 198-57 73-128 131-222 164-31 160-91 293-180 397-92 108-216 185-369 230-29 8-52-35-29-55 132-109 221-226 278-344 62-131 83-264 72-387-1-16-3-32 29-35 31-3 33 13 34 29 12 134-10 278-78 420-40 85-97 170-172 251 73-39 136-89 187-149 85-100 141-229 170-386 1-8 14-22 22-25 89-27 155-79 209-147 51-65 90-143 126-228-140 69-304 64-457 78-213 19-369 68-554 152z"></path><path d="M204649 49231c-680-88-1359-113-2041-114-684 0-1369 40-2058 112-20 6-15 33-14 46 2 28 37 35 121 27 643-60 1285-93 1932-93 674 0 1351 21 2038 102 33 9 77-85 22-81z"></path><path fill-rule="evenodd" d="M200570 49160c683-71 1362-110 2038-110 675 0 1349 40 2025 127l31-127c-17 9-37 15-58 15a123 123 0 1 1 113-171l60-170c-724-84-1446-122-2171-122-729 0-1459 38-2193 107l58 164c22-32 59-54 101-54a123 123 0 1 1 0 246c-12 0-25-2-36-6l33 94-2 7zm3067-416a123 123 0 1 0 0 246 123 123 0 1 0 0-246zm0 64a59.1 59.1 0 0 0 0 118c32 0 59-27 59-59s-26-59-59-59zm-1082-91a123 123 0 1 0 123 123c0-68-55-123-123-123zm0 64a59.1 59.1 0 1 0 .2 118.2 59.1 59.1 0 0 0-.2-118.2zm-1064-40a123 123 0 1 0-.2 245.8 123 123 0 0 0 .2-245.8zm0 64c-33 0-59 26-59 59s26 59 59 59a59.1 59.1 0 0 0 0-118z"></path></g><path d="M202601 47974c-14-68-49-129-100-175-51-47-116-78-187-88-33-4-39-58-7-68 60-20 114-67 157-133 45-69 79-157 95-256 5-34 64-35 69-1 15 84 51 153 97 208 55 66 125 112 193 138 31 12 25 63-8 68-59 9-105 42-141 87-50 62-81 145-100 221-8 33-62 31-69-2zm33-118c20-52 47-103 81-146 28-34 60-64 99-84-51-30-100-70-143-120-28-34-53-73-73-116-19 59-45 112-75 158-31 47-67 86-108 116 50 19 95 47 134 82 34 31 63 68 85 110zm799 5115-515 206c-17 7-35 14-48-21-14-34 4-41 21-48l515-206c17-7 35-14 48 21 14 34-4 41-21 48zm59-326-604 328c-16 9-33 18-51-15s-1-42 15-51l604-328c16-9 33-18 51 15s1 42-15 51zm-1826-65 604 328c16 9 33 18 15 51s-34 24-51 15l-604-328c-16-9-33-18-15-51s34-24 51-15zm51 322 515 206c18 7 35 14 21 48-14 35-31 28-49 21l-515-206c-17-7-34-14-21-48 14-35 31-28 48-21zm224 434c137 33 261 48 358 31 88-16 155-60 191-146v-493c-107-1-212-15-303-41-109-31-170-98-201-178-41-107-27-235-4-329 5-18 9-36 45-27s32 27 27 45c-20 82-33 194 1 284 23 60 69 110 152 133 91 25 198 38 307 38 107 0 214-13 304-40 82-24 148-69 192-123s65-117 57-176c-5-36-24-62-49-80-34-24-82-35-128-37-47-2-94 7-142 16-25 5-50 9-77 13-19 2-37 5-42-32s14-40 32-42c23-3 48-8 73-12 52-10 105-20 159-18 60 2 121 18 168 51 42 29 72 72 80 131 11 80-16 163-73 233-53 65-131 119-229 147-83 24-178 38-274 42v483c3 5 3 11 2 16 37 82 102 125 188 141 97 18 221 2 358-31 18-5 36-9 45 27 8 37-9 41-28 45-146 35-279 51-388 32-92-17-165-58-215-132-49 74-124 115-215 132-109 20-242 4-388-32-18-4-37-8-28-45 8-36 27-32 45-27zm356 210 402-9c19 0 38-1 38 37 1 38-18 38-37 38l-402 9c-19 0-37 1-38-37s18-38 37-38zm593-3082c151-125 293-227 423-297 133-72 254-111 359-106 19 1 37 1 36 39-1 37-20 37-39 36-92-4-200 32-322 97-125 67-263 166-410 289-14 12-29 24-53-5s-9-41 5-53zm-605 56c-141-130-298-240-445-314-139-71-268-108-363-100-19 2-37 4-40-34-4-37 15-39 34-40 110-10 252 31 404 107 152 77 315 191 461 325 14 13 28 25 2 53-25 27-39 15-53 2zm-213 1004c37-83 83-155 136-219 53-63 112-119 174-170 14-12 29-24 52 5 24 29 9 41-5 53-59 48-114 101-164 160-49 59-91 125-125 201-8 17-15 34-49 19s-27-32-19-49zm371-1734c49 66 88 139 114 223 26 82 40 175 39 279 5 80 6 165-7 249-13 86-42 170-97 246-43 60-101 97-165 113-53 13-109 10-164-7 29 100 51 208 6 308-8 18-33 27-51 18-43-22-86-43-128-62s-84-36-127-51l-1-1c-95-37-173-73-236-112-65-39-115-80-150-124l1 2c-44-49-72-106-88-170-14-55-20-114-22-174-72-39-138-78-194-116-64-43-118-87-161-131-13-14-26-27 1-53s40-12 53 1c39 40 89 80 150 121 60 40 128 81 204 121 124 13 247 51 370 109 106 50 211 115 317 192 13 7 19 16 27 20 8 6 16 13 25 19 51 22 104 28 152 16 47-11 90-39 122-84 48-66 72-139 84-214 12-77 11-157 6-234v-2c1-97-12-183-35-258-24-76-58-142-102-201-11-15-22-30 7-52s41-7 52 7zm-375 1047c-104-77-207-141-311-190-105-49-210-83-314-98 2 48 8 93 18 135 13 52 35 99 71 138l1 1c30 37 73 72 130 107 60 36 134 71 225 106l-1-1c45 16 89 34 133 54 31 14 61 28 93 44 19-83-10-179-37-267-2-8-5-15-9-29zm776-1003c-44 59-79 125-102 201-24 76-36 161-35 258v2c-5 77-6 158 6 234 12 75 37 148 84 214 32 45 75 72 122 84 48 12 101 6 152-16l25-19c6-4 13-12 27-20 105-77 211-143 317-192 123-58 246-95 370-109 75-40 144-80 204-121s111-81 149-121c13-13 26-27 53-1s14 39 0 53c-43 44-97 88-161 131-57 38-122 77-194 116-2 61-8 119-22 174-16 63-44 121-88 170l1-2c-35 44-85 85-150 124-63 38-141 75-237 112l-1 1c-43 15-85 32-127 51-43 19-85 40-128 62-18 9-43 0-51-18-45-100-23-208 6-308-55 18-111 20-164 7-64-15-122-53-165-113-55-76-84-160-97-246-13-85-12-169-7-249-1-104 13-196 39-279 26-84 65-158 114-223 11-15 22-30 52-7 30 22 19 37 7 52zm940 715c-105 15-209 49-314 98-104 49-207 113-311 190-4 13-6 21-8 29-27 88-56 184-37 267 31-15 62-30 93-44 44-20 87-38 133-54l-1 1c91-35 165-70 225-106 58-34 100-70 131-107l1-1c35-39 57-86 71-138 11-42 16-87 19-135z"></path><path fill-rule="evenodd" d="M203459 50602a216.4 216.4 0 0 0 0 433 216.6 216.6 0 0 0 0-433zm0 69c-81 0-147 66-147 147s66 147 147 147 147-66 147-147-66-147-147-147zm0 60a87 87 0 1 0 .1 174.1 87 87 0 0 0-.1-174.1zm-1697-124c119 0 217 97 217 216s-97 217-217 217a216.6 216.6 0 0 1 0-433zm0 69c81 0 147 66 147 147s-66 147-147 147-147-66-147-147 66-147 147-147zm0 60a87 87 0 1 1-.1 174.1 87 87 0 0 1 .1-174.1z"></path></g><use xlink:href="#hr-a" width="100%" height="100%" transform="rotate(-2.2 -55532.8 156275.8)"></use><use xlink:href="#hr-a" width="100%" height="100%" transform="rotate(2.2 459865.8 156275.8)"></use></g><path fill="#171796" d="m387.2 94.9-19.3-22-25.2 14.5-4.3 51.1a219.7 219.7 0 0 1 36.2 6L387.2 95z"></path><path d="M347.7 98c.8-.2 1.7-.2 2.6.3.3.1.6.3.8.6.4-.3.7-.6 1.2-.8a4 4 0 0 1 1.8-1c.9-.5 1.8-.8 2.7-.9h2.8c.8 0 1.6.2 2.3.6l2 1c.8.4 1.5.8 2.2 1a9.1 9.1 0 0 0 4.5.5c.4-.2.7.1.2.4-3.3 2-5.9.2-8.1-.6a16.2 16.2 0 0 1 2.1 1.7c.8.8 1.8 1.6 3.5 2.4a8.4 8.4 0 0 0 5 .7l.4.1-.1.5a4.8 4.8 0 0 1-2.6.7 10 10 0 0 1-5.2-1.3c-1.4-.7-2.3-1.6-3.3-2.4a7.5 7.5 0 0 0-3-1.4 6 6 0 0 0-2.9 0c.3.1.5.2.6.4.5.3 1 .4 2 .5.4 0 .2.3-.5.7a2 2 0 0 1-1.6.8c-1 .6-1.3.2-1.7-.2 0 .3 0 .5-.2.8a.6.6 0 0 1 0 .4l.2.7c0 .2 0 .3.2.4.2.2.3.4.3.7 0 .2.1.3.3.4l.6.6c.6.2.8.7 1 1.2.4.2.6.5.7.9.2 0 .4.2.6.4l2.6.1c.8.1 1.4.6 2 1.2h1.2a4 4 0 0 1 1.3-.3h2.3c.5.2.9.4 1.2.8.5.5 1.2.4 1.8.2a2.7 2.7 0 0 1 2.4 0 2.3 2.3 0 0 1 1-.2c.4-.3.7-.4 1-.4.6 0 1 0 .9.8 0 .2-.2.4-.3.4-.3.6-.7.7-1.3.7-.1.4-.3.7-.5.8.3.9 0 1.3-.7 1.2 0 .3-.3.4-.6.4a1.4 1.4 0 0 1-1 .5l.4.6c.4.7-.2 1-.8 1v1.2c.7.4.8.8.2 1.2.4.7.3 1.3-.5 1.6 0 .4 0 .8-.3 1-.2.2-.5.3-.3.6.3.5.2 1.1-.2 1.2l-.2.1-.2.2a9.6 9.6 0 0 0-1.5 1c-.1 0-.2.1-.2 0a9.6 9.6 0 0 1-1.8 2.4c0 .5-.4 1-1 1.1a.4.4 0 0 1-.3.4c.3.3.5.6.2 1a3 3 0 0 1-1.3.8c-1 .3-1.7.2-2-.2-.4-.3-.3-.6 0-.7-.7 0-.8-.2-.8-.7 0-.2.1-.2.3-.1.4 0 .7-.2 1-.3l.5-.6c0-.7.5-1 1.1-1.3.5-.2 1-.6 1.4-1.2l.9-1.5a1.2 1.2 0 0 1-.3-.7 1.5 1.5 0 0 1-.5-.6c-.5 0-.7-.2-.7-.5a1.1 1.1 0 0 1-.3 0c-.3.1-.5.3-.7.2a6.9 6.9 0 0 1-1.1 1c-.2.3-.4.5-.7.5-1 .1-1.5 1.2-2 1.7-.2.1-.3.4-.4.7 0 .6-.1 1-.4 1h-.4a1.2 1.2 0 0 0-.4 0c.3.3.3.6 0 .9-.1.3-.4.4-.8.4a3.6 3.6 0 0 1-1.6-.2c-.4-.2-.5-.5-.5-.7-.3-.2-.4-.3-.3-.5 0-.2.2-.3.4-.2l.6-.2a5.2 5.2 0 0 1 1.8-1.4 3 3 0 0 1 .7-.7c0-.5.5-1 1-1.4l.1-.6v-.3c-.2-.3-.3-.7-.1-1a1.3 1.3 0 0 1 0-.6c-1.1.6-1.5.4-1.6-.1-.4.3-.8.5-1 0-.4.1-.8.3-1.2.1l-.8.2-.4.7c0 .5-.2 1-.5 1.5a9.3 9.3 0 0 1-.7 1.5 1 1 0 0 1-.1.5c0 .6-.2.9-.5 1a2.4 2.4 0 0 1-.4.8v.2c.1.3.1.7-.2 1l-1 .6h-1c-.4-.3-.4-.4-.3-.6a.6.6 0 0 1-.5 0l-.4-.3c-.1-.2-.1-.4.1-.5l.9-.6c0-.2.2-.3.4-.4.2-.4.4-.6.6-.7l.7-1.5c.1-.1.2-.3.1-.4l.1-.3s.2-.1 0-.2a1.4 1.4 0 0 1 .2-1.2c.3-.4.6-1.4.3-2v-.8h-.3c-.2-.2-.4 0-.6.2l-.4.6c-.1.8-.5 1.5-1 1.6v1.2c0 .4 0 .7-.2.7s-.4.2-.5.5a1 1 0 0 0-.1.3c.3.3.2.7-.1 1-.6.6-1.4.5-2.2.3-.6-.3-.8-.5-.7-.8-.8 0-.7-.7 0-.9.8-.2 1.4-.7 1.9-1.4 0-.8.2-1.3.7-1.4 0-.5.2-1 .4-1.4.2-.4.3-.8.2-1.3-.4-.3-.4-.6 0-1 .1 0 .1 0 0-.2-.3 0-.3-.3-.3-.5s0-.2-.2-.2c-.6-.1-.5-.4-.2-.7.1 0 .2-.3 0-.4l-.1-.4c-.4-.3-.2-.6 0-.9l-.4-.8c-.7 0-1-.4-.6-.9a3.4 3.4 0 0 1 .7-.6c.1-.3.3-.6.2-.8-.2-.6.5-1 1-1.4a.9.9 0 0 1-.1-.4c-.3-.3-.2-.6.1-.8a1 1 0 0 1-.1-.5c-.8.2-.8-.3-.4-1-.5-.3-.4-.8.5-1.5a1 1 0 0 1 0-.4 2 2 0 0 0-1 .3c-.3.3-.6.2-.9.1a1.5 1.5 0 0 0-.4-.4.6.6 0 0 1-.2-.6c-1 0-1.1-.7-.6-1 .3-.3.6-.6.7-.9.2-.6.7-1 1.3-1.5v-.5a1.6 1.6 0 0 0-.7-.3 1.2 1.2 0 0 0-.6-.7c-.1 0-.2-.2 0-.4-.6-.4-.5-.7-.3-1z"></path><g fill="#f7db17"><path d="M364.5 122a1.4 1.4 0 0 1-.2 0 8.4 8.4 0 0 1-.8.7c-.2-.3-.5 0-.2.1l-.2.2c0 .3-.2.4-.5.4h-.1a3 3 0 0 1 0-.3 3.5 3.5 0 0 1 0-.4 3.9 3.9 0 0 0-.1.4 2.8 2.8 0 0 0 0 .4c-.8.3-1.3 1.1-1.9 1.7l-.4.8c0 .2 0 .9-.3.9h-.2c0-.1-.2-.1-.4 0h-1c-.2.2.4.2.7.3.1.1.2.3.1.5-.2.7-1.8.5-2.3.2-.2-.1-.2-.3-.2-.5h.3c.2 0 .4 0 .5-.2 0 0 .1 0 0-.1 0-.1 0-.1 0 0a1.3 1.3 0 0 1-.5 0 2.6 2.6 0 0 1-.5 0h-.2c0-.1.2 0 .2 0l.7-.3a5.3 5.3 0 0 1 1.9-1.4l.8-.7c0-.7.4-1 .8-1.5l.3-.7v-.3c-.2-.4-.3-.7-.1-1a1.5 1.5 0 0 1 0-.8.3.3 0 0 0 0-.1 6.2 6.2 0 0 1 .8-.6v.8a1.3 1.3 0 0 0-.2.3.5.5 0 0 0 0 .2v.1a.4.4 0 0 1 0-.3l.3-.2.7-.4.7-.6v1l-.6.7v.1h.1a2.3 2.3 0 0 1 .5-.7 3.2 3.2 0 0 1 1-.6v1a1.5 1.5 0 0 0 .5.9z"></path><path d="m349 113 .2-.2.4-.6a4 4 0 0 1 .5-.6 4 4 0 0 0-.4.7 5.8 5.8 0 0 0-.4.5v.2c.1.3.1.5.3.7l.3-.4a1.6 1.6 0 0 1 .4-.4 1.8 1.8 0 0 0 .5-.6h.1l-.2.4a2 2 0 0 1-.3.3l-.4.3a1.3 1.3 0 0 0-.2.4v.3c-.2.3-.5.5 0 .7a.6.6 0 0 0 .1.5l-.1.7c-.3.2 0 .2.1.2l.4-.4a4.3 4.3 0 0 1 .3-.4l.4-.5.1-.5h.1a1.4 1.4 0 0 1-.1.6 2 2 0 0 1-.5.5 3.8 3.8 0 0 0-.2.4 2.6 2.6 0 0 0-.3.4c.2.1.2.4.2.7h.1l.2-.2.2-.4h.1l-.2.4-.2.3c.2.1.2.3 0 .5-.4.3-.3.4 0 .7v1.2l.1.3h-.1v-.3c-.4.7-.6 1.1-.7 1.8-.6.1-.5.8-.6 1.3a3.9 3.9 0 0 1-1.9 1.5c-.1 0-.5.1-.5.3 0 .1.2.3.4.2.4-.5.7-.2.2.2v.3c.5.4 1.6.5 2.2.2.3-.3.5-.5.2-.9 0-.5.2-1 .8-1.2v-.4l.1-1.3.2-.1c.2 0 .6-.7.7-1.3v-.4c.1-.2.2-.2.3 0 0-.2 0-.3.2-.4.2-.3.5-.6.8-.4a3 3 0 0 1-.1-.8 2.7 2.7 0 0 1 0-1l.2-.2.3-.7.3-.7h.1l-.3.7-.3.8v.1a2.5 2.5 0 0 0-.1 1l.2.9.2.4v.6c.4.6 0 1.7-.3 2.2a1 1 0 0 0-.1.8c.2.2 0 .4-.1.6v.1c0 .2 0 .4-.2.5l-.7 1.6c-.4.1-.5.3-.6.7-.3.1-.3.2-.4.4a2.7 2.7 0 0 1-.9.6c-.3.1 0 .2.2.4.2.1.4-.2.6-.4.2-.3.3-.2.2 0a2 2 0 0 0-.2.7l.7.3c.4 0 .9-.4 1.2-.6.3-.2.2-.5.1-.8a2 2 0 0 1-.5 0 3.4 3.4 0 0 1-.5-.3 2.8 2.8 0 0 0 1 .2v-.3a2.7 2.7 0 0 0 .5-.8c.4-.2.4-.4.4-.9l.1-.5a10 10 0 0 0 .7-1.6c.4-.4.5-.9.5-1.4 0-.2.1-.3.3-.3a3.8 3.8 0 0 0 .3-.5l.1-.4a.8.8 0 0 1 .2-.2 1 1 0 0 0 0-.5 1.1 1.1 0 0 0-.1-.4.5.5 0 0 1-.1-.2v-.2h.1c.1 0 0 0 0 0v.1a.5.5 0 0 0 0 .2c.2.2.2.3.2.5a1 1 0 0 1 0 .5.7.7 0 0 0-.2.2 1.7 1.7 0 0 0 0 .3l.6-.1.4-.5.2-.6c.1 0 0 0 0 0a2 2 0 0 1-.1.7l-.3.3c.4.2.7 0 1 0V119l.4-.7c.1 0 .1 0 0 0l-.2.8v1c.1.4.2.5.5.3l.4-.2v-.1a18.2 18.2 0 0 1 1.8-1.6c.1.1 0 .1 0 .1a6.5 6.5 0 0 0-.8.7l-.8.7v.3c0 .3.1.5.6.3l.6-.2a1.3 1.3 0 0 1 .3-.2 8 8 0 0 1 .5-.3l.5-.3a3 3 0 0 1 .1-.6l.7-1.3a2.3 2.3 0 0 0 1.1-1.1h.1l-.4.7a2.5 2.5 0 0 1-.7.5l-.7 1.2a2.7 2.7 0 0 0-.1.5v.1a2.8 2.8 0 0 0 0 .8c.2 0 .4 0 .7-.3l.7-.7a1.7 1.7 0 0 1 .2-.5 1 1 0 0 1 .4-.4h.1v.1a.9.9 0 0 0-.4.3 1.7 1.7 0 0 0-.2.5v1.1l1-.5v1c0 .3.2.6.4.8a2.8 2.8 0 0 1 .5-.6l.3-.3.2-.2.3-.2-.2.3-.2.2-.3.2v.5h.6c0 .5 0 .6.5.6a3.2 3.2 0 0 1 0-.5l.1-.5h.1a1.9 1.9 0 0 0-.1.5 3.1 3.1 0 0 0 0 .5c.2.3.3.4.7.6l.2-.5a1.4 1.4 0 0 0 0-.4h.1v.5l-.3.5v.5a3 3 0 0 1 .2-.3l.3-.4c.1 0 .1 0 0 0 0 .2 0 .3-.2.4a4 4 0 0 0-.2.4l.2.2c-.6 1-1.3 2.5-2.5 3-.6.2-.9.5-1 1.2a1 1 0 0 0-.5.6l-1.2.3c0 .3 0 .4.3.4l.7-.3c.1 0 0 .5-.5.8v.1c.4.6 1.4.4 1.9.2.4 0 1-.5 1.2-.9.1-.2 0-.4-.2-.6-.8.1-.6-.6 0-.3.2 0 .3 0 .3-.3.6-.2.9-.5 1-1 .6-.7 1.2-1.4 1.6-2.1.1-.2.2-.4.1-.5a1 1 0 0 0 .2-.5l.1-.4h.1v.5a4.5 4.5 0 0 1-.2.3c0 .1 0 .2.2.2l1.5-1c0-.3.2-.4.4-.4l.2-.1c.1-.4 0-.6-.2-.8-.1-.4.1-.5.4-.7.2-.2.2-.7.2-1v-.2a2.6 2.6 0 0 0 0-.3l.1.3v.1c.3-.1.6-.3.7-.6 0-.3-.1-.6-.3-.8a9.6 9.6 0 0 1-.6.2 10.2 10.2 0 0 0 .7-.4 1.3 1.3 0 0 0 .3-.2c.2-.3-.3-.5-.5-.6l-.7-.7v-.1l.7.6v-1.1l-.2-.4a1.1 1.1 0 0 1-.5-.4 1 1 0 0 1-.1-.5l.2.4.4.4h1c.3-.3-.2-.7-.3-.9l-.1-.5h.1a1 1 0 0 0-.2-.2.6.6 0 0 0-.1 0v-.2a.7.7 0 0 1 .2.1l.2.2a.9.9 0 0 0 .1 0c.3 0 .5-.2.7-.5a3.6 3.6 0 0 0-.3-.4 10 10 0 0 0-.5-.3v-.1h.1a4 4 0 0 1 .8.8c.4 0 .4 0 .6-.3a1.5 1.5 0 0 0-.2-.4 2.5 2.5 0 0 0-.3-.4c0-.1 0 0 0 0 .2 0 .3.2.4.3l.2.5.4-.1c.3-.2 0-.8 0-1a2.8 2.8 0 0 0-.1 0l-.2-.2c0-.1 0 0 0 0h.2l.2.1.4-.6c0-.4 0-.2.5-.3.4 0 .6 0 .9-.6.1 0 .2 0 .2-.3s0-.4-.3-.4c-.5 0-.8 0-1 .3v.3c0 .1 0 0 0 0l-.2-.2c-.4 0-.7 0-1.1.2h-.2l.2.3.1.4a1 1 0 0 0-.2-.4 1.8 1.8 0 0 0-.3-.4 2.6 2.6 0 0 0-1-.2l.2.1.2.2v.1a7.7 7.7 0 0 1-.2-.2 6.5 6.5 0 0 1-.2-.2 2.7 2.7 0 0 0-.9.2l-.6.2.4.5.2.6a2.1 2.1 0 0 0-.3-.6 1.9 1.9 0 0 0-.4-.4 1.8 1.8 0 0 1-.5 0l.2.3-.3-.4a1.4 1.4 0 0 1-.5-.2 8.3 8.3 0 0 1 .2 1.5 7.8 7.8 0 0 0-.2-.9 4.7 4.7 0 0 0-.1-.7 1.7 1.7 0 0 1-.2-.2 2.1 2.1 0 0 0-.6-.4 1 1 0 0 1-.2.7c-.1 0 0 0 0 0a.8.8 0 0 0 .1-.8 3.1 3.1 0 0 0-1-.2 5.3 5.3 0 0 1 .5.8l.3.5v.5a2 2 0 0 0-.1-.5.7.7 0 0 0-.3-.4 5.6 5.6 0 0 0-.3-.5 4.6 4.6 0 0 0-.3-.4h-.4.1a.6.6 0 0 1 0 .3.5.5 0 0 0 0-.2.7.7 0 0 0-.2-.1h-.8a5 5 0 0 1 1 2.3 4.8 4.8 0 0 0-.4-1.2 5.1 5.1 0 0 0-.7-1h-.6a1.7 1.7 0 0 1 .4.4c0 .1 0 .1 0 0a1.6 1.6 0 0 0-.3-.1 2.4 2.4 0 0 0-.3-.2 5 5 0 0 0-.3 0l-.1.1a4.7 4.7 0 0 1 1 1.1c0 .1 0 0 0 0a3.8 3.8 0 0 0-.6-.6 4.7 4.7 0 0 0-.6-.4h-.6a5 5 0 0 1 .5 1.7h-.1a3.5 3.5 0 0 0-.2-.8 6.2 6.2 0 0 0-.3-.9 8 8 0 0 1-.4 0 9.1 9.1 0 0 1 .3 1.6v.1a9.3 9.3 0 0 0-.2-1 9.3 9.3 0 0 0-.3-.8 3.9 3.9 0 0 0-1.3-1 1.7 1.7 0 0 1 .4 1.1v.1a1.6 1.6 0 0 0-.2-.7 1.7 1.7 0 0 0-.4-.6 2 2 0 0 0-.3 0 15.6 15.6 0 0 0-1 0c.2.1.4.4.4.6 0-.2-.3-.5-.6-.7h-.6l.3.3.2.5.2.6.4.4s.1 0 0 0c0 .1 0 .1 0 0a1.1 1.1 0 0 1-.5-.3 1.5 1.5 0 0 1-.2-.7 1.3 1.3 0 0 0-.2-.4 2.7 2.7 0 0 0-.3-.4h-.7l.2.8.1 1h-.1a7.1 7.1 0 0 0 0-1 4.5 4.5 0 0 0-.3-.8 1 1 0 0 0-.6-.5.6.6 0 0 1 0 .3h-.1a.5.5 0 0 0 0-.3c-.2-.5-.3-.7-.6-.8v.4l-.2.4h-.1l.1-.5v-.4c0-.6-.2-1-.8-1.2v.2l-.1.5h-.1v-.5a1.9 1.9 0 0 0 0-.3l-.5-.5a2.3 2.3 0 0 1 0 .7 3 3 0 0 1-.4.8h-.1a3 3 0 0 0 .3-.8 2.2 2.2 0 0 0 .1-.8 1 1 0 0 1-.2-.3v.2h-.1v-.2l.1-.1v-.1a.7.7 0 0 0-.3-.5 1.5 1.5 0 0 1-.2.5h-.1c-.1 0 0 0 0 0l.1-.3.1-.3a1 1 0 0 1-.1-.2.8.8 0 0 1-.1.2 1.2 1.2 0 0 1-.2.2c-.1-.1 0-.1 0-.1l.1-.2a.7.7 0 0 0 .1-.2v-.2c0-.3 0-.4-.2-.7a.9.9 0 0 0-.3 0 2.8 2.8 0 0 0-.5.4v-.1a3.2 3.2 0 0 1 .4-.3.9.9 0 0 1 .4-.1.4.4 0 0 0 0-.2l-1 .3a1.6 1.6 0 0 1-.9-.2h.8c.3 0 .7 0 1.1-.2l.2-.6a1.7 1.7 0 0 1-.5 0l.6-.1v-.2c0-.2.3-.2.4 0 .2 0 .3.2.4.3.3.2.6 0 .9-.2h-.2v-.1h.3c.6 0 1 0 1.4-.5a7 7 0 0 1-1 0c-.2 0-.4 0-.6-.2l.7.1h1l.5-.3a5.4 5.4 0 0 1-2-.6 1.4 1.4 0 0 0-.6-.3c-.5 0-1 0-1.4.3l-.3-.3-.4-.2h-.6s-.1 0 0 0h1.2a4.5 4.5 0 0 1 1.7-.3 5.7 5.7 0 0 1 1.7-.2v-.2c.3-.3.4-.6.3-.9-.1-.2-.4-.5-.8-.7h-1.3a4 4 0 0 0-.8.1l.6.4.4 1v.1h-.2a2 2 0 0 0-.4-1c-.1-.2-.6-.3-.7-.4l-1.3.2-.7.4c.3-.1.6 0 .8 0 .3.2.5.4.6.8v.1h-.2a1 1 0 0 0-.5-.7c-.4-.2-1.2 0-1.6.3a4.2 4.2 0 0 0-.6.6h-.2v-.2l.7-.6.7-.4a2 2 0 0 1 1-.5l1.3-.2a1 1 0 0 0-.5-.5 1.4 1.4 0 0 0-.8 0c-.5.1-1 .4-1.5.7h.5l.1.2h-.5a1.4 1.4 0 0 0-.4 0l-1.5 1.2c-.5 0-.8 0-1 .2l-.1.6-.2.7c-.5.5-1 .9-1.3 1.5a1.4 1.4 0 0 1-.3.5.5.5 0 0 1 .3.1v-.2l.2-.4h.1a1.2 1.2 0 0 0-.1.4v.5h-.2a.3.3 0 0 0-.1-.2.5.5 0 0 0-.3 0l-.3.2-.2.3c0 .3.2.3.5.3.6 0 .1.4.4.7l.5.4h.5c0-.4 0-.6.2-.6a.8.8 0 0 1 .2-.4.8.8 0 0 0 0 .2.8.8 0 0 0-.1.2v.4a2.4 2.4 0 0 1 1-.2c.7-.8 1-.6.4 0l-.1.2a1.4 1.4 0 0 0-.2.6c-.2.1-1 .8-.7 1 .2 0 .4 0 .3.2-.1.2-.4.6-.3.9h.3a6.2 6.2 0 0 0 .7-.6 3.8 3.8 0 0 0 .5-.8h.1a9 9 0 0 1 .3-.8c0-.2.1-.5.3-.7l.3.3a.4.4 0 0 0 .2 0 .4.4 0 0 0 .3 0l.2-.3h.1a1.2 1.2 0 0 1-.3.4.5.5 0 0 1-.3 0 .5.5 0 0 1-.2 0 1.1 1.1 0 0 1-.3-.3 12 12 0 0 0-.5 1.4v.1a5.6 5.6 0 0 1-1.2 1.4l.2.5 1-1 .8-1a6 6 0 0 1-.3.6v1.1h-.1v-.9l-.3.3a11.6 11.6 0 0 1-1 1c-.3.3-.6.3-.2.7l.3-.3.4-.3h.1v.1l-.4.3-.4.3a.6.6 0 0 0 .1.3.5.5 0 0 1 .1 0l.8-.6c.1 0 0 .1 0 .1l-.7.6a.7.7 0 0 1-.1 0c-.3.3-1.2.8-1 1.2l.6-.2.6-.5c.1 0 0 0 0 .1a2.5 2.5 0 0 1-.6.5v.2-.1a3.6 3.6 0 0 1-.7.1c.1.4 0 .7-.3 1 0 .1-1 .9-.6 1a1 1 0 0 0 .3.2z"></path><path d="M349.4 100.1a2.2 2.2 0 0 0-.6-.3 1.4 1.4 0 0 0-.5-.5c-.2-.2-.2-.1-.1-.3l.2-.1a.9.9 0 0 1 .3 0 .4.4 0 0 1 .2.2h.1c.1 0 0 0 0 0a.5.5 0 0 0-.2-.2 1 1 0 0 0-.4-.1.7.7 0 0 0-.4 0l-.2-.5.4.1.2.1a.7.7 0 0 0-.2-.2 2 2 0 0 0-.2 0 2.9 2.9 0 0 1 2.1.2c.4.1.6.3.8.6l-.2.2c-.5 0-.8 0-1 .2-.2.1-.2.4-.2.6z"></path></g><path d="m365 121.8-.4.2c0-.3.2-.4.3-.6v.2l.1.2zm2 4.2a2.3 2.3 0 0 1-.4.4 4 4 0 0 1-.5.4v-.1l.4-.4.4-.4zm1.3-1.6-.2.3h-.1l.2-.3zm-.7 0a1.1 1.1 0 0 1-.2.3 1 1 0 0 1-.5.4v-.1a1 1 0 0 0 .4-.3 1 1 0 0 0 .1-.4h.1zm1.2-1.6a1 1 0 0 0-.1.2 1.1 1.1 0 0 0-.1.2h-.1a1.1 1.1 0 0 1 .3-.5zm1 0v.5l-.3.5c-.1 0 0 0 0 0l.1-.5.2-.5zm-.4-6c.3.5.4 1 .4 1.5a7.3 7.3 0 0 1 .1-.6 1.4 1.4 0 0 0 .3-1.1c0-.1.1 0 .1 0v.6a1.7 1.7 0 0 1-.3.6l-.2 1h-.1v-.1c0-.6 0-1.2-.4-1.8v-.1zm-.8 1v.3h-.1v-.4h.1zm-.2 1.4a6.2 6.2 0 0 1 .2 1.4 1 1 0 0 1 .1-.1l.3-.3h.1a1 1 0 0 0-.3.3.7.7 0 0 0-.2.4 5 5 0 0 0-.1-.9 5.9 5.9 0 0 0-.2-.8zm1 .5a3.6 3.6 0 0 1 .1 1.2v-.6a3.6 3.6 0 0 0-.1-.6zm1-.2v.6a1.5 1.5 0 0 1 0 .5 1.2 1.2 0 0 0 0 .6l.1.6a2.5 2.5 0 0 1-.3-.6 1.3 1.3 0 0 1 0-.6 1.4 1.4 0 0 0 .2-.5 2.3 2.3 0 0 0 0-.6zm.5-1.5-.1.3v.2h-.1v-.6h.1zm-.5-2.6v.2c.1 0 .1 0 0 0 0 .1 0 0 0 0v-.2s-.1 0 0 0c0-.1 0 0 0 0zm.2-2v.8a.8.8 0 0 0-.2.3 1.4 1.4 0 0 0 0 .6h-.1a1.4 1.4 0 0 1 0-.6.9.9 0 0 1 .3-.4v-.7zm-2-.7c.4.2.6.4.8.7.2.2.3.5.3.9l-.6-.2v1.8c-.2.5-.5.8-1 1a3.8 3.8 0 0 0 0-1.8h.1a3.6 3.6 0 0 1 0 1.6 1.5 1.5 0 0 0 .7-.8 3.7 3.7 0 0 0 .1-1.9l.6.2c0-.3-.1-.5-.3-.8a2.5 2.5 0 0 0-.7-.6v-.1zm5.2-1v.2h-.1v-.2s0-.1 0 0h.1zm-1.2 0 .3.1a.8.8 0 0 1 .1.2v.1a.8.8 0 0 0-.2-.2.6.6 0 0 0-.2-.2zm-1.8.5.3.5v.6c-.1 0-.1 0 0 0l-.1-.6a1 1 0 0 0-.3-.5h.1zm-6 .5v.4l-.1.1v-.5zm1-.6.2.4v.1h-.1v-.1l-.1-.3zm2.4 1.6v.1a1.1 1.1 0 0 1 0 .2.8.8 0 0 0 0-.2.6.6 0 0 0-.1 0v-.1zm.8-1.8v.2a.2.2 0 0 1 0 .2.1.1 0 0 0 0-.2c-.1-.1-.1-.1 0-.1zm-5.5.3a1 1 0 0 0 .2.7c.2.1.2.3.3.4v.4h-.1v-.4a.9.9 0 0 0-.2-.3 1 1 0 0 1-.2-.4 1.1 1.1 0 0 1-.1-.4zm2.2 1.5.2.7v.7c0 .3 0 .6.2.8l.6.7a2.9 2.9 0 0 1-.1-1l.3-1c.2 0 .2-.2.3-.3v-.4h.1v.4a1.5 1.5 0 0 1-.3.5 1.6 1.6 0 0 0-.3.9c0 .3 0 .6.2 1h-.1c-.4-.2-.6-.5-.8-.8a1.3 1.3 0 0 1-.2-.8v-.7a1.8 1.8 0 0 0-.2-.6c0-.1.1 0 .1 0zm-.9 1.4c0 .2 0 .5-.2.7a3.4 3.4 0 0 1-.4.6h.3a2.2 2.2 0 0 0 .7-.6l.3-.3c.1 0 0 0 0 0a3.6 3.6 0 0 1-.2.4 2.5 2.5 0 0 1-.3.2 24.5 24.5 0 0 1 0 .4v-.2a1.5 1.5 0 0 0-.1-.1 2.2 2.2 0 0 1-.4.2l-.4.2v-.1l.4-.7.2-.7h.1zm-1 0v.1h-.1c-.1 0 0 0 0 0v-.2z"></path><path d="M363 113.7c.2.3.2.6.2 1a1.9 1.9 0 0 1-.4.8 1.9 1.9 0 0 0-.5.6 2.6 2.6 0 0 0-.2.6l.2-.3.5-.3a4.6 4.6 0 0 0 1.1-.9h.1c.1 0 0 0 0 0a4 4 0 0 1-1.2 1 1 1 0 0 0-.4.3 2.3 2.3 0 0 0-.4.5c0-.4 0-.7.2-1l.5-.6.4-.8c0-.3 0-.6-.2-.9h.1zm2.3 3.5.1.4.1.1c.2.3.3.5.3.8l-.1 1h-.1a1.8 1.8 0 0 0-.4-1 3.4 3.4 0 0 0-.8-.6v-.1c.4.2.7.4.9.7l.3.6a3.4 3.4 0 0 0 0-.6 1.3 1.3 0 0 0-.1-.7l-.1-.2c-.2-.2-.3-.3-.2-.4zm1 0 .1.2c0 .1 0 0 0 0h-.1l-.2-.2h.1zm1 .3-.2.7-.2.7.2-.7.2-.7zm.7 4v.1a.3.3 0 0 1 0-.2zm-.7-1.2v.3l-.2.4v-.4l.1-.4h.1zm-1 0h.1v.1h-.1v-.1zm-1.1-.6a7.3 7.3 0 0 1-.1.2v.2h-.1a5 5 0 0 1 0-.2 5 5 0 0 1 0-.2h.1c.1 0 0 0 0 0zm-1.7 1.8a.7.7 0 0 0-.1.2 1.3 1.3 0 0 0 0 .2s-.1.1-.2 0v-.2a.8.8 0 0 1 .2-.3h.1zm-4.8 4.6a.7.7 0 0 1 0 .2 1.1 1.1 0 0 1-.2.1c-.1 0-.1 0 0 0a.8.8 0 0 0 .1-.3h.1zm.8-.4a.3.3 0 0 1-.1.2.6.6 0 0 1-.2 0 .4.4 0 0 0 .1-.1.3.3 0 0 0 0-.1h.2zm1-.6a.5.5 0 0 1 0 .1.5.5 0 0 1-.2.1.4.4 0 0 0 0-.2h.2zm1.5-3.8-.1.4a1.4 1.4 0 0 0 0 .4h-.1a1.4 1.4 0 0 1 0-.4v-.5h.1zm1-10.3a.9.9 0 0 1-.1.3 1.4 1.4 0 0 1-.2.3h-.1l.2-.3a.8.8 0 0 0 0-.3l.1-.1zm-1-1a1.9 1.9 0 0 1 .1 1 1.8 1.8 0 0 0 0-.5 1.5 1.5 0 0 0-.2-.4c0-.1 0 0 0 0zm-1.4 1.7a1.5 1.5 0 0 1-.4-.4.7.7 0 0 1-.1-.4l.2.4.3.4zm1.5 2.6v.2h-.1v-.2zm-2-2 .6 1 .1.8c.2 0 .3-.1.4-.3v-.9a1.9 1.9 0 0 0 .3-.6 3.5 3.5 0 0 0 .1-.5h.1l.4.8.3.9h-.1a2.9 2.9 0 0 0-.3-.9 3.9 3.9 0 0 0-.3-.6 2.9 2.9 0 0 1 0 .4 2 2 0 0 1-.3.5l-.1 1-.4.3v.4h-.1c0-.4 0-.8-.2-1.2a2 2 0 0 0-.5-1zm1.2 5v.3l-.1.4h-.1v-.8h.1c.1 0 .1 0 0 0zm-2.2.9v.3l-.1-.3c0-.1.1 0 .1 0zm1.9-2.5a2.3 2.3 0 0 1-.2.6l-.3.5a1.1 1.1 0 0 0-.3.6 1.8 1.8 0 0 0 0 .7c0 .1 0 0 0 0a1.9 1.9 0 0 1-.1-.7c0-.2.1-.5.3-.7a2.1 2.1 0 0 0 .3-.5 2.1 2.1 0 0 0 .2-.6c.1 0 0 0 0 0zm-.5-.8v.6a2.2 2.2 0 0 1-.5.6 1.8 1.8 0 0 0-.4.5l-.2.5h-.1l.2-.6.5-.5a2 2 0 0 0 .3-.5 1 1 0 0 0 .1-.6h.1zm-2.4 1.2c0 .4 0 .7-.2 1-.1.3-.3.6-.6.8h-.1v-.1c.3-.2.5-.5.6-.8.2-.2.2-.6.2-1zm-3 1.7v.2l.1.1v.1h-.1l-.1-.2v-.2s-.1 0 0 0zm-1.3 0a2.7 2.7 0 0 0 0 .7l.4.6.1.5v.4l.4-.5a1.4 1.4 0 0 0 .2-.6 1.6 1.6 0 0 1 0 .6l-.5.6h-.1a3.3 3.3 0 0 0 0-.5 1.8 1.8 0 0 0-.2-.4 2 2 0 0 1-.3-.7 2.7 2.7 0 0 1-.1-.7zm.2 4.2a2.6 2.6 0 0 1 .1-.8h.1a2.5 2.5 0 0 0-.1.8h-.1zm-.2 1.1v-.4s0-.1.1 0v.4zm-.8 2 .2-.3.2-.3h.1a4 4 0 0 1-.2.4l-.2.2c-.1 0-.1 0 0 0zm-1.1-6.6v.2h-.1v-.2zm-2 4.5a2.9 2.9 0 0 0 0-.1v-.2h.1v.3zm5-8-.3 1c0 .3.1.6.3.7.3.2.4.4.5.7v-.4c.1-.1.1-.3 0-.4h.1a2.7 2.7 0 0 1 0 1h-.1a6 6 0 0 1 0-.2l-.5-.6c-.3-.2-.4-.4-.4-.8l.2-1h.1zm-.4-1.3a2.5 2.5 0 0 1 0 .8 4 4 0 0 1-.3.7 2.4 2.4 0 0 0-.2 1c0 .4.1.7.3 1v.1a2.5 2.5 0 0 1-.2-2.1 3.8 3.8 0 0 0 .2-.7c0-.3.1-.5 0-.8h.1c.1 0 0 0 0 0zm-2.3 3.3a.8.8 0 0 0 0 .4l.1.5c0 .1 0 0 0 0a1.5 1.5 0 0 1-.3-.5.9.9 0 0 1 .1-.5h.1zm-1-.4v.3a.9.9 0 0 1 0 .3.4.4 0 0 0-.1.3l.1.2v.1a.8.8 0 0 1-.2-.3.5.5 0 0 1 0-.4.8.8 0 0 0 .1-.2v-.3h.1zm5.8-8.6a2.3 2.3 0 0 0 .3 1.5 2.6 2.6 0 0 1-.4-.7 2.3 2.3 0 0 1 0-.8h.1zm-.7.7a4 4 0 0 1 .5 1.7h-.1a3.8 3.8 0 0 0-.5-1.6v-.1zm-3.6.1c-.4.5-.5 1-.6 1.3l.2.9.2.8a2.6 2.6 0 0 1-.2.8c-.1 0 0 0 0 0v-.8a2.3 2.3 0 0 0 0-.8 1.7 1.7 0 0 1-.3-1c0-.3.2-.7.6-1.2.1 0 0 0 0 0zm3.3-1.4v.5l-.4.4a.8.8 0 0 0-.3.4v.7c0 .1 0 0 0 0a1.9 1.9 0 0 1 0-.7 1 1 0 0 1 .3-.5 1 1 0 0 0 .3-.4.6.6 0 0 0 0-.4h.1zm-3.5.3v.7c0 .2-.2.4-.4.6a1.2 1.2 0 0 0-.4.6 2.9 2.9 0 0 0-.1.7h-.1a3 3 0 0 1 .1-.8c0-.2.2-.4.4-.6l.4-.6a1 1 0 0 0 0-.6zm2 .1a.8.8 0 0 0 0 .2.5.5 0 0 0 .1.3.6.6 0 0 1-.2-.2.8.8 0 0 1 0-.3h.1zm0-.5a.8.8 0 0 0-.5.4l-.2.7.2.5v.7a2.4 2.4 0 0 0 0-.7l-.3-.4a2 2 0 0 0-.5 1.2c0 .5.1 1 .5 1.5h-.1a2.7 2.7 0 0 1-.5-1.5c0-.5.2-.9.6-1.3 0-.3 0-.6.2-.8a1 1 0 0 1 .5-.4zm-.7-.8v.1c0 .3 0 .6-.2.7a.8.8 0 0 0-.2.3 1.6 1.6 0 0 0-.1.4h-.1a1.7 1.7 0 0 1 0-.4 1 1 0 0 1 .3-.4c.2-.1.2-.4.2-.6a2.7 2.7 0 0 0 0-.1h.1zm5.7 6 .1.5v.4a1.4 1.4 0 0 0 0-.4 1.9 1.9 0 0 0-.2-.4h.1zm0 2v.6l-.2.6-.3.6.2-.6a2.1 2.1 0 0 0 .2-.6 1.6 1.6 0 0 0 0-.7h.1zm-1.2-1.8a2.5 2.5 0 0 1 .7 2.5h-.1a2.4 2.4 0 0 0-.6-2.4v-.1c0-.1 0 0 0 0zm0 2a5.3 5.3 0 0 1-1 1.4 2.5 2.5 0 0 0-.5 1 1.4 1.4 0 0 0-.1-.6 1.9 1.9 0 0 0-.2-.4 1.4 1.4 0 0 1-.3-.9l.3-.8.3-.6a2.4 2.4 0 0 0 0-.6h.1c.1 0 0 0 0 0a2.6 2.6 0 0 1-.3 1.3 1 1 0 0 0-.3.7c0 .3 0 .6.2.8a2 2 0 0 1 .3.8 2.6 2.6 0 0 1 .5-.8 5 5 0 0 0 .5-.6l.3-.7h.1zm-3.2-1a2.8 2.8 0 0 0 .4 1.4v.1h-.1a2.3 2.3 0 0 1-.3-.7 3 3 0 0 1 0-.7zm-1.7 1v.3h-.1v-.3zm.6-1.6-.1.5a1.4 1.4 0 0 1-.3.5c-.1 0 0 0 0 0l.2-.5a1.4 1.4 0 0 0 0-.5h.1zm-1.6 3.1a3.3 3.3 0 0 1-.3-1.7c0-.5.3-.8.6-1l.4-.7c.1-.2.2-.5.1-1s.1 0 .1 0v1l-.6.7a1.9 1.9 0 0 0-.5 1c0 .5 0 1 .3 1.7h-.1zm-1-1.1a.7.7 0 0 0 0 .3l.1.4a1 1 0 0 1-.2-.4.8.8 0 0 1 0-.4h.1zm4.6-3.2c.1.2.3.5.3.8 0 .3 0 .6-.2.9h-.1c-.1 0 0 0 0 0l.2-.9a1.5 1.5 0 0 0-.3-.8zm1.4-1.1a2.4 2.4 0 0 1 0 1.7 1.8 1.8 0 0 0-.2-.8 1.5 1.5 0 0 0-.5-.5c0-.1 0-.1.1 0a1.6 1.6 0 0 1 .6 1v-.6a2.3 2.3 0 0 0-.1-.8zm.8-1.2.4.8v1a2 2 0 0 0 0 .5 1 1 0 0 0 .2.4 1 1 0 0 1-.2-.4 2.3 2.3 0 0 1 0-.5 3.5 3.5 0 0 0-.1-1 1.5 1.5 0 0 0-.4-.7c0-.1 0 0 .1 0zm-2.2-.2a1 1 0 0 0-.3.5v.7a2 2 0 0 1 0-.7c0-.2 0-.4.2-.5.1 0 .1 0 0 0zm-4.4 3a2 2 0 0 1-.3 1 2.5 2.5 0 0 1-.8.7c-.1 0 0 0 0 0l.7-.7c.2-.3.3-.6.3-1l.1-.1zm0-1.6v.5a2.2 2.2 0 0 1-.3.5l.1-.5v-.5h.1zm2.9-.2v1h-.1v-1zm.7-1.3c-.2.3-.3.5-.3.8l.2.7.3 1.2c0 .4-.2.7-.4 1.1l.3-1.1a1.9 1.9 0 0 0-.3-1.2l-.2-.7c0-.3 0-.6.3-.8.1 0 0 0 0 0zm-4.6-8.1a2 2 0 0 1 1-.5c.4 0 .8 0 1.2.3h.8-.8c-.4.5-.8.7-1.1.7a1 1 0 0 1-.9-.2c0-.1 0-.1 0 0a1 1 0 0 0 .9 0c.2 0 .6-.1 1-.5a1.9 1.9 0 0 0-1-.1 2 2 0 0 0-1 .4c-.1 0 0 0 0-.1z"></path><path d="M351.6 101a.3.3 0 0 1 .3.3.3.3 0 0 1-.3.2.3.3 0 0 1-.2-.2.3.3 0 0 1 .2-.3zm1.8 1.6a2.2 2.2 0 0 0 .8-.7c.1 0 0 0 0 .1a2.3 2.3 0 0 1-.2.3l-.5.4c-.1-.1 0-.1 0-.1zm3.7-1.6a.5.5 0 0 1 .3 0 .8.8 0 0 1 .3.2.7.7 0 0 0-.3 0 .5.5 0 0 0-.2 0l-.1-.1zm-2 .1a.8.8 0 0 1 .3-.4l.7-.1v.1a1 1 0 0 0-.7 0 .7.7 0 0 0-.3.5c-.1 0-.1 0 0 0zm.2.4a.4.4 0 0 1 0-.3.6.6 0 0 1 .3-.1h.1a.5.5 0 0 0-.3.2.3.3 0 0 0 0 .2h-.1zm-3.6 1.1-.1.3a.8.8 0 0 0 0 .3l-.1.1a1 1 0 0 1 0-.4c0-.1 0-.2.2-.3zm1 .5v.2-.2zm-.6-1.1a1 1 0 0 0 .3 0h.3a1.4 1.4 0 0 1-.3.1 1 1 0 0 1-.3 0s-.1 0 0-.1zm.6-2a.3.3 0 0 0-.2.1.4.4 0 0 0-.1.2h-.1a.5.5 0 0 1 .2-.3.4.4 0 0 1 .2 0h.1zm-1 .2a.8.8 0 0 0-.2 0 .3.3 0 0 0 0 .2h-.1c-.1 0 0 0 0 0a.4.4 0 0 1 0-.2.9.9 0 0 1 .3-.1zm-.7 0a.8.8 0 0 0-.1.1.7.7 0 0 0-.1.2h-.1a.7.7 0 0 1 .1-.2.9.9 0 0 1 .2-.2v.1zm-.8.7a1.7 1.7 0 0 0-.4.4v-.1a2 2 0 0 1 .4-.4zm0 .9v.1l-.2.2c-.1 0-.1 0 0 0v-.2l.2-.2c.1 0 .1 0 0 0zm-.7.2v.3l-.1.1c-.1 0 0 0 0 0v-.4zm1 1.4v.6h-.1v-.6h.1zm-.6-.4v.3h-.1v-.3h.1zm-.6-4.5a.7.7 0 0 1 .5.4v.1h-.1a.7.7 0 0 0-.2-.3.7.7 0 0 0-.2-.1v-.1zm5.2 6.7a1.6 1.6 0 0 1 0 1.4h-.1a1.6 1.6 0 0 0 0-1.3v-.1zm-1.7 2c0-.3.2-.5.3-.7l.4-.6c.2-.2.3-.4.3-.7a1.8 1.8 0 0 0 0-.7h.1a2 2 0 0 1-.3 1.5 6.3 6.3 0 0 0-.4.5l-.3.7h-.1zm-2.2-.6a.7.7 0 0 1 .2-.3.9.9 0 0 1 .3-.1.8.8 0 0 0-.2.2.6.6 0 0 0-.2.2zm-.4-.2.3-.3.3-.2v.1a1 1 0 0 0-.3.2 2 2 0 0 0-.2.3c-.1 0-.1 0 0 0zm2.3-2.2h.2a.8.8 0 0 0 .3 0v.1a.8.8 0 0 1-.6 0c0-.1 0-.1 0 0zm-1.2-.1.1-.1c.1 0 .1 0 0 0v.1c-.1 0 0 0 0 0zm24.2 7a1.1 1.1 0 0 1 .2.3h-.1a.8.8 0 0 0 0-.1.8.8 0 0 0-.2-.2c0-.1 0 0 0 0zm-26.8 12.5.3.3a1 1 0 0 0 .5 0v.1a1 1 0 0 1-.5 0 1.7 1.7 0 0 1-.4-.3c0-.1 0-.1 0 0z"></path><g fill="red"><path d="M368.9 99.6a8.2 8.2 0 0 0 1.7 0c-.6.3-1.2.6-2 .7a.8.8 0 0 0 .3-.4.4.4 0 0 0 0-.3zm-1.4-.1h1.2v.4s0 .2-.2.3c0 0-.1 0 0 .1a5.6 5.6 0 0 1-1.3 0 1 1 0 0 0 .3-.5.6.6 0 0 0 0-.4zm-10.5-3c.7-.2 1.3-.2 2-.2a1 1 0 0 1 .5.4c.1.2.2.5.1.8l.1.1h.1l-.1-1a1 1 0 0 0-.3-.2h.2a5 5 0 0 1 2.1.6c.2.2.3.3.2.5l-.3.5v.2h.2l.3-.7a.7.7 0 0 0 0-.3l1.7.8a.5.5 0 0 1 0 .5 1 1 0 0 1-.5.3v.1l.1.1c.3 0 .5-.2.6-.4a.6.6 0 0 0 0-.4l1.2.6v.3c0 .2-.1.3-.3.4 0 0-.1 0 0 .1 0 .1 0 0 0 0 .3 0 .5-.2.6-.4a.5.5 0 0 0 0-.3l.4.1a8.1 8.1 0 0 0 1.3.4.5.5 0 0 1 .1.4.7.7 0 0 1-.2.3v.2c-1.4-.1-2.7-.9-4.1-1.4l-.5-.2-1.6-.6-.1-.1a8.5 8.5 0 0 0-1.5-.4 6.1 6.1 0 0 0-1.6 0h-.1l-.1-.8a1.3 1.3 0 0 0-.5-.4z"></path><path d="M354.6 97a8.7 8.7 0 0 1 2-.5c.4.1.6.3.7.5v.6a4.2 4.2 0 0 0-1.7.2 1.2 1.2 0 0 0-.7-.6 1.2 1.2 0 0 0-.3-.1zm7.4 3.9a9.4 9.4 0 0 0-.5-.4 7 7 0 0 0-3-.8c.3-.4.4-.8.3-1.1a1.7 1.7 0 0 0-.7-.8h1a8 8 0 0 1 2 .6c0 .3.1.6 0 .8 0 .3-.2.5-.5.7 0 0-.1 0 0 .1 0 .1 0 .1 0 0 .4-.1.6-.4.7-.7v-.8l1 .6 1 .8c0 .4 0 .6-.3.8h-.9v.2z"></path><path d="m364 102.4-1.8-1.4c.4 0 .7 0 1-.2.1-.1.3-.4.3-.8l1.1 1 .6.5v.4a.5.5 0 0 1 0 .2.6.6 0 0 1-.4.2h-.7z"></path><path d="M366.2 103.8a11.8 11.8 0 0 1-2-1.3h.7a.8.8 0 0 0 .4-.2l.1-.4a1 1 0 0 0 0-.2 10.5 10.5 0 0 0 2.1 1.4c0 .3 0 .4-.3.5a3 3 0 0 1-1 .1z"></path><path d="M368.4 104.7a11.9 11.9 0 0 1-2-.8c.4 0 .7 0 1-.2.2 0 .3-.2.3-.5a10.8 10.8 0 0 0 1.3.6v.4l-.5.4s-.1 0 0 0z"></path><path d="M373.2 104.2s.4-.1.2 0c-1.4 1-3.1 1-4.8.5.3-.1.5-.2.6-.4a.6.6 0 0 0 0-.5l1.7.4a.4.4 0 0 1-.1.3l-.5.3s-.1 0 0 .1c0 .1 0 0 0 0 .3 0 .5-.2.6-.3a.6.6 0 0 0 .2-.4 9 9 0 0 0 2 0zm-9.7 24-.2.4-1.2.3c0 .3 0 .4.3.4l.7-.3c.1 0 0 .5-.5.8v.1c.4.6 1.4.4 1.9.3a3 3 0 0 0 1.3-1l-.3-.6c-.4.1-.6 0-.5-.2a3.9 3.9 0 0 0-1.5-.2zm-15.1-4.8c-.3.3-.7.5-1 .6-.2 0-.6.1-.6.3 0 .1.2.3.4.2.4-.5.7-.2.2.2v.3c.5.4 1.6.5 2.2.2.3-.2.6-.5.2-.9a1.7 1.7 0 0 1 0-.2h-.6l-.4-.3-.4-.4zm10 3.5h-.1c-.2.2.3.2.6.3.2.1.2.3.2.5-.3.7-1.9.5-2.4.2-.2-.1-.2-.3-.2-.5h.3c.2 0 .4 0 .6-.2v-.2h-.2a1.3 1.3 0 0 1-.4.2 2.6 2.6 0 0 1-.5 0l-.2-.2h.2l.7-.2.1-.1c.5 0 1 0 1.3.2zm-7.2-.4-.2.3a2.7 2.7 0 0 1-.9.6c-.2.1 0 .2.2.4.2.1.5-.2.6-.4.2-.3.3-.2.2 0l-.2.7.7.3c.4 0 1-.4 1.2-.6.3-.2.2-.5.1-.8a2 2 0 0 1-.5 0 3.4 3.4 0 0 1-.5-.3l-.7-.2zm2.8-26.4h.3l.6.1a4.5 4.5 0 0 1 1.7-.3 5.7 5.7 0 0 1 1.7-.2v-.2c.3-.3.4-.6.3-.9-.1-.2-.4-.5-.8-.7h-1.3a4 4 0 0 0-.8.1l.6.4.4 1c-.2.1-.2 0-.2 0 0-.4-.2-.6-.3-.9l-.8-.4a9 9 0 0 0-1.3.2c-.3 0-.5.2-.7.3l.8.1c.3.1.5.4.6.8-.1.1-.1 0-.1 0a1 1 0 0 0-.5-.6c-.4-.2-1.3 0-1.7.2a4.2 4.2 0 0 0-.6.6l2 .4zm-2.3-.4v-.1l.7-.6.7-.4a2 2 0 0 1 1-.5l1.3-.2a1 1 0 0 0-.5-.5l-.8-.1-1.5.8h.5l.1.2h-.4a1.4 1.4 0 0 0-.4 0h-.1l-1.3 1c.3.1.6.2.7.4z"></path></g><path fill="#0093dd" d="m409 156.5 20.8-47-15.3-24.7-27.3 10-12.7 49.8a219.4 219.4 0 0 1 34.5 11.9z"></path><path fill="#fff" d="M382.6 113a251.7 251.7 0 0 1 39.6 13.7l-8 18.2a232 232 0 0 0-36.5-12.7z"></path><path fill="red" d="m415.4 142 5.4-12.2a248.6 248.6 0 0 0-39-13.5l-3.2 12.4a235.9 235.9 0 0 1 37 12.8l-.1.4z"></path><path d="M385.6 125.8c.3-.3.7-.2 1.1-.1.3-.2.7-.2 1-.2l.6-.2c.2 0 .2-.2 0-.3a.6.6 0 0 1 0-.3c-.7-.4-1-1-1.2-1.5-.3 0-.5-.2-.5-.3h-.5c-.8 0-1-.3-1.3-.5a1 1 0 0 1-.6-.4l-.3-.3c-.2-.3-.1-.7.2-.7h.7a2 2 0 0 1 .9-.1c.3 0 .5-.3.9-.6v-.4s0-.2.2-.1a1 1 0 0 1 .8.5c.5 0 1 .3 1.2.7.7 0 1.1.3 1.2.5 0 .2-.2.4-.5.6v.2l.4.4 1 .7c1-.1 2.6.6 4.8 2a18.6 18.6 0 0 1 4.1 1.2h.9c2.4-.4 4.7 0 6.8 1.5.8.1 1.5.4 2.2.7.5.2 1 .3 1.6.3a8 8 0 0 1 2.6.7c1 .2 1.9.6 2.4 1.2.4.5.3 1-.2 1.2-.3.6-.9.6-1.8.3-.6.1-1.3-.4-2-.9-.8-.2-1.6-.8-2.4-1.3l-1.3-.6h-.8v.2c.2.2.4.4.4.8v1c0 .4.3.6.7.9l1 .4c.2 0 .3.1.3.3l.4 1.7.4.3c.6.5.2 1-.3 1a3.1 3.1 0 0 1-1.3.8c-.4.2-.6 0-.7-.2a.5.5 0 0 1-.4-.2c-.5-.4-.1-1 1-.7l.2-.2a1.5 1.5 0 0 1 0-.9l-.3-.2a2.8 2.8 0 0 1-1-.6c-.6-.5-1.5-1-2.4-1.4-.7 0-1.2-.4-1.8-.7h-.8c-.2 0-.4 0-.5.2-.2.3-.5.2-.8.2h-1.6c-.4 0-.7 0-1 .3-.2.2-.4.2-.7 0a1 1 0 0 1-.3-.2c-.3 0-.5 0-.5-.2-.5-.1-.6-.2-.6-.4-.6-.1-.3-.6 0-.6l1.4.1c.4.1 1 0 1.2-.2l.5-.5a4 4 0 0 1-1.8-.5c-1.1-.7-2-.9-2.8-.3-.2.2-.3.2-.6.1a1 1 0 0 0-.5 0c-.5.1-.9 0-1.3-.1a4 4 0 0 1-1.8 0c-.6.3-1 .4-1.2.2a8.6 8.6 0 0 1-.6-.4c-.4-.1-.5-.2-.5-.3-.4 0-.5-.2-.5-.4-.2-.2 0-.3 0-.4.4-.2.7-.2 1 0 .3 0 .5.2.6.3h.6c.1-.2.5-.2 1-.2l.7-.2v-.2c-.4 0-.6-.4-.9-.7a3 3 0 0 1-1.5-.5c-.4 0-.7-.1-1-.3h-.7a2.5 2.5 0 0 1-1.4 0h-.8a1 1 0 0 1-1 .2 1.5 1.5 0 0 0-.8-.5c-.3-.1-.4-.2-.4-.4-.4-.2-.3-.4 0-.5.3-.1.5-.2 1 0l.5.2z"></path><path fill="#fff" d="M401.2 130.5s0-.2-.3 0c-.8 0-1.6 0-2.2-.4-.7-.4-1.3-.8-2-.8l.7-.4h1.5c.7 0 1.4.2 2 .4.4.2.8.5 1 .8a3.4 3.4 0 0 1 .8.7 2.5 2.5 0 0 1-.7 0 2.9 2.9 0 0 1-.8-.3z"></path><path d="M403 94.7v.2l.9 4.9-3.7 3.2-.2.1.2.1 4.7 1.6 1 4.9v.2l.2-.1 3.7-3.3 4.6 1.6h.3v-.1l-1-4.9 3.7-3.2.2-.2h-.3l-4.6-1.6-1-4.9V93l-.2.1-3.7 3.3-4.7-1.6z"></path><path fill="#f7db17" d="m400.6 103 3.5-3 4.4 1.4zm8.5-1.7 3.4-3 4.4 1.5zm7.8-1.3-3.4 3-4.4-1.5zm-8.4 1.6-3.5 3-4.3-1.5zm-5-6.4 4.3 1.4.8 4.6zm5.5 6.4 4.4 1.5.9 4.5zm5.1 6.1-4.3-1.5-.9-4.5zm-5.6-6.4-4.3-1.5-.9-4.5zm3-7.7 1 4.6-3.5 3zm-2.7 8.1.8 4.6-3.4 3zm-2.8 7.5-.9-4.5 3.5-3zm2.8-8-.9-4.6 3.5-3z"></path></svg>

`;
});
const Ie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ie" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ie" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#009A49" d="M0 0h213.3v480H0z"></path><path fill="#FF7900" d="M426.7 0H640v480H426.7z"></path></g></svg>

`;
});
const Il = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of il" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-il" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="il-a"><path fill-opacity=".7" d="M-87.6 0H595v512H-87.6z"></path></clipPath></defs><g fill-rule="evenodd" clip-path="url(#il-a)" transform="translate(82.1) scale(.94)"><path fill="#fff" d="M619.4 512H-112V0h731.4z"></path><path fill="#0038b8" d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275 110.1 191.6L359 191.6l-222.6-.8z"></path><path fill="#fff" d="m225.8 317.8 20.9 35.5 21.4-35.3-42.4-.2z"></path><path fill="#0038b8" d="M136 320.6 246.2 129l112.4 190.8-222.6.8z"></path><path fill="#fff" d="m225.8 191.6 20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5 41.2.3-19.8 36.3-21.4-36.6zm151.2 67 20.9 35.5-41.7-.5 20.8-35zm20.5-67-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"></path></g></svg>

`;
});
const Ir = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ir" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ir" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="ir-a"><path fill-opacity=".7" d="M-85.3 0h682.7v512H-85.3z"></path></clipPath></defs><g fill-rule="evenodd" clip-path="url(#ir-a)" transform="translate(80) scale(.9375)"><path fill="#fff" d="M-192 0h896v512h-896z"></path><path fill="#da0000" d="M-192 343.8h896V512h-896z"></path><g fill="#fff" stroke-width="1pt"><path d="M-21.6 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M52.4 367.7v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z"></path><path d="M49.6 351H53v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M17.8 359.9H21V371h-3.3z"></path><path d="M17.8 359.9H21V371h-3.3z"></path><path d="M17.8 359.9H21V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371H7.3zm-14.3 0h3.4V371H-7z"></path><path d="M9.6 367.7v3.4H-5.5v-3.4zm1-8.7v3.4H1V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M-102.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3H-95zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M-28.2 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"></path><path d="M-31 351h3.4v20H-31zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M-62.8 359.9h3.3V371h-3.3z"></path><path d="M-62.8 359.9h3.3V371h-3.3z"></path><path d="M-62.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"></path><path d="M-71 367.7v3.4h-15v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M58.3 351h49v3.3h-49zm7.3 16.8H69v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"></path><path d="M132.3 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M129.5 351h3.4v20h-3.4zm-8.4 0h3.4v20H121zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M97.7 359.9h3.4V371h-3.4z"></path><path d="M97.7 359.9h3.4V371h-3.4z"></path><path d="M97.7 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"></path><path d="M89.6 367.7v3.4H74.4v-3.4zm1-8.7v3.4H81V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M622.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H630zm41.9 0v3.3H662v-3.4zm5.3-16.8h3.3v20h-3.4z"></path><path d="M696.7 367.7v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z"></path><path d="M694 351h3.3v20h-3.4zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M662 359.9h3.5V371H662z"></path><path d="M662 359.9h3.5V371H662z"></path><path d="M662 359.9h3.5V371H662zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"></path><path d="M654 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M138.7 351h49.1v3.3h-49zm7.4 16.8h3.3v3.3h-3.3zm41.8 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"></path><path d="M212.8 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"></path><path d="M210 351h3.4v20H210zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"></path><path d="M178.1 359.9h3.4V371h-3.4z"></path><path d="M178.1 359.9h3.4V371h-3.4z"></path><path d="M178.1 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.2 0h3.3V371h-3.3z"></path><path d="M170 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M219.5 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zM274 351h3.3v20H274z"></path><path d="M293.5 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M290.7 351h3.4v20h-3.4zm-8.4 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M258.9 359.9h3.4V371h-3.4z"></path><path d="M258.9 359.9h3.4V371h-3.4z"></path><path d="M258.9 359.9h3.4V371h-3.4zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H234z"></path><path d="M250.8 367.7v3.4h-15.2v-3.4zm1-8.7v3.4H242V359z"></path></g><path fill="#239f40" d="M-192 0h896v168.2h-896z"></path><g fill="#fff" stroke-width="1pt"><path d="M300.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H308zm41.9 0v3.3H340v-3.4zm5.3-16.8h3.3v20h-3.3z"></path><path d="M374.7 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z"></path><path d="M372 351h3.3v20H372zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M340 359.9h3.5V371H340z"></path><path d="M340 359.9h3.5V371H340z"></path><path d="M340 359.9h3.5V371H340zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"></path><path d="M332 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M381.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M455.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M452.7 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"></path><path d="M420.8 359.9h3.4V371h-3.4z"></path><path d="M420.8 359.9h3.4V371h-3.4z"></path><path d="M420.8 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.3z"></path><path d="M412.7 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H404V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M462.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M536.2 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"></path><path d="M533.4 351h3.4v20h-3.4zm-8.4 0h3.3v20H525zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M501.6 359.9h3.3V371h-3.3z"></path><path d="M501.6 359.9h3.3V371h-3.3z"></path><path d="M501.6 359.9h3.3V371h-3.3zm-39.4 0h3.4V371h-3.4zm28.9 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"></path><path d="M493.4 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M543.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M617.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"></path><path d="M614.6 351h3.4v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"></path><path d="M582.8 359.9h3.3V371h-3.3z"></path><path d="M582.8 359.9h3.3V371h-3.3z"></path><path d="M582.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H558z"></path><path d="M574.6 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H566V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M-183.8 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"></path><path d="M-109.8 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M-112.5 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"></path><path d="M-144.4 359.9h3.4V371h-3.4z"></path><path d="M-144.4 359.9h3.4V371h-3.4z"></path><path d="M-144.4 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"></path><path d="M-152.5 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M-21.6 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M52.4 160.2v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z"></path><path d="M49.6 143.4H53v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M17.8 152.3H21v11.3h-3.3z"></path><path d="M17.8 152.3H21v11.3h-3.3z"></path><path d="M17.8 152.3H21v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3H7.3zm-14.3 0h3.4v11.3H-7z"></path><path d="M9.6 160.2v3.4H-5.5v-3.4zm1-8.7v3.3H1v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M-102.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2H-95zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M-28.2 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"></path><path d="M-31 143.4h3.4v20.2H-31zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M-62.8 152.3h3.3v11.3h-3.3z"></path><path d="M-62.8 152.3h3.3v11.3h-3.3z"></path><path d="M-62.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M-71 160.2v3.4h-15v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M58.3 143.4h49v3.4h-49zm7.3 17H69v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"></path><path d="M132.3 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M129.5 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2H121zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M97.7 152.3h3.4v11.3h-3.4z"></path><path d="M97.7 152.3h3.4v11.3h-3.4z"></path><path d="M97.7 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M89.6 160.2v3.4H74.4v-3.4zm1-8.7v3.3H81v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M622.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H630zm41.9-.2v3.4H662v-3.4zm5.3-16.8h3.3v20.2h-3.4z"></path><path d="M696.7 160.2v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z"></path><path d="M694 143.4h3.3v20.2h-3.4zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M662 152.3h3.5v11.3H662z"></path><path d="M662 152.3h3.5v11.3H662z"></path><path d="M662 152.3h3.5v11.3H662zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M654 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M138.7 143.4h49.1v3.4h-49zm7.4 17h3.3v3.2h-3.3zm41.8-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"></path><path d="M212.8 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"></path><path d="M210 143.4h3.4v20.2H210zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"></path><path d="M178.1 152.3h3.4v11.3h-3.4z"></path><path d="M178.1 152.3h3.4v11.3h-3.4z"></path><path d="M178.1 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.2 0h3.3v11.3h-3.3z"></path><path d="M170 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M219.5 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.3v20.2H274z"></path><path d="M293.5 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M290.7 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M258.9 152.3h3.4v11.3h-3.4z"></path><path d="M258.9 152.3h3.4v11.3h-3.4z"></path><path d="M258.9 152.3h3.4v11.3h-3.4zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H234z"></path><path d="M250.8 160.2v3.4h-15.2v-3.4zm1-8.7v3.3H242v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M300.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H308zm41.9-.2v3.4H340v-3.4zm5.3-16.8h3.3v20.2h-3.3z"></path><path d="M374.7 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z"></path><path d="M372 143.4h3.3v20.2H372zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M340 152.3h3.5v11.3H340z"></path><path d="M340 152.3h3.5v11.3H340z"></path><path d="M340 152.3h3.5v11.3H340zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M332 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M381.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M455.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M452.7 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"></path><path d="M420.8 152.3h3.4v11.3h-3.4z"></path><path d="M420.8 152.3h3.4v11.3h-3.4z"></path><path d="M420.8 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.3z"></path><path d="M412.7 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H404v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M462.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M536.2 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"></path><path d="M533.4 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2H525zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M501.6 152.3h3.3v11.3h-3.3z"></path><path d="M501.6 152.3h3.3v11.3h-3.3z"></path><path d="M501.6 152.3h3.3v11.3h-3.3zm-39.4 0h3.4v11.3h-3.4zm28.9 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M493.4 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M543.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M617.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"></path><path d="M614.6 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"></path><path d="M582.8 152.3h3.3v11.3h-3.3z"></path><path d="M582.8 152.3h3.3v11.3h-3.3z"></path><path d="M582.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H558z"></path><path d="M574.6 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H566v-3.3z"></path></g><g fill="#fff" stroke-width="1pt"><path d="M-183.8 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"></path><path d="M-109.8 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"></path><path d="M-112.5 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"></path><path d="M-144.4 152.3h3.4v11.3h-3.4z"></path><path d="M-144.4 152.3h3.4v11.3h-3.4z"></path><path d="M-144.4 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"></path><path d="M-152.5 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"></path></g><path fill="#d90000" d="M-68.8 339.5h6V350h-6zm160.5 0h6V350h-6zm-283.7 0h6V350h-6zm81.5 0h6V350h-6zm80.9 0h6V350h-6zm40 0h6V350h-6zm40.9 0h6V350h-6zm80.4 0h6V350h-6zm203 0h6.1V350h-6zm-162.1 0h6V350h-6zm40 0h6V350h-6zm40.5 0h6V350h-6zm40.4 0h6V350h-6zm323.2 0h6V350h-6zm-242.7 0h6V350h-6zm40.8 0h6V350h-6zm41.3 0h6V350h-6zm38.8 0h6V350h-6zm41.3 0h6V350h-6zm40.4 0h6V350h-6zm119.7 0h6V350h-6zm-38.8 0h6V350h-6zm-808.9 0h6V350h-6z"></path><path fill="#239e3f" d="M-68.8 162.6h6v10.5h-6zm160.5 0h6v10.5h-6zm-283.7 0h6v10.5h-6zm81.5 0h6v10.5h-6zm80.9 0h6v10.5h-6zm40 0h6v10.5h-6zm40.9 0h6v10.5h-6zm80.4 0h6v10.5h-6zm203 0h6.1v10.5h-6zm-162.1 0h6v10.5h-6zm40 0h6v10.5h-6zm40.5 0h6v10.5h-6zm40.4 0h6v10.5h-6zm323.2 0h6v10.5h-6zm-242.7 0h6v10.5h-6zm40.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm38.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm40.4 0h6v10.5h-6zm119.7 0h6v10.5h-6zm-38.8 0h6v10.5h-6zm-808.9 0h6v10.5h-6z"></path><g fill="#da0000"><path d="M279.8 197.5c8.4 10.4 34.5 67.6-15.7 105.2-23.7 17.8-9 18.6-8.3 21.6 38-20.1 50.3-47.5 50-72-.2-24.4-13.2-46-26-54.8z"></path><path d="M284.8 194.8a73.3 73.3 0 0 1 15.7 112.4c27.2-6 62-86.4-15.7-112.4zm-57.6 0a73.3 73.3 0 0 0-15.6 112.4c-27.3-6-62-86.4 15.6-112.4z"></path><path d="M232.2 197.5c-8.4 10.4-34.5 67.6 15.7 105.2 23.6 17.8 9 18.6 8.3 21.6-38-20.1-50.3-47.5-50-72 .2-24.4 13.2-46 26-54.8z"></path><path d="M304.2 319.1c-14.9.2-33.6-2-47.5-9.3 2.3 4.5 4.2 7.3 6.5 11.7 13.2 1.3 31.5 2.8 41-2.4zm-95 0c14.9.2 33.6-2 47.5-9.3-2.3 4.5-4.2 7.3-6.5 11.7-13.2 1.3-31.5 2.8-41-2.4zm27.3-138.7c3 8 10.9 9.2 19.3 4.5 6.2 3.6 15.7 3.9 19-4.1 2.5 19.8-18.3 15-19 11.2-7.8 7.5-22.2 3.2-19.3-11.6z"></path><path d="m256.4 331.6 7.8-9 1.1-120.1-9.3-8.2-9.3 7.8 1.9 121 7.8 8.5z"></path></g></g></svg>

`;
});
const Is = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of is" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-is" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="is-a"><path fill-opacity=".7" d="M0 0h640v480H0z"></path></clipPath></defs><g fill-rule="evenodd" stroke-width="0" clip-path="url(#is-a)"><path fill="#003897" d="M0 0h666.7v480H0z"></path><path fill="#fff" d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7z"></path><path fill="#d72828" d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4z"></path></g></svg>

`;
});
const It = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of it" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-it" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#009246" d="M0 0h213.3v480H0z"></path><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"></path></g></svg>

`;
});
const Jm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of jm" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-jm" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path d="m0 0 320 240L0 480zm640 0L320 240l320 240z"></path><path fill="#090" d="m0 0 320 240L640 0zm0 480 320-240 320 240z"></path><path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z"></path><path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z"></path></g></svg>

`;
});
const Jp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of jp" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-jp" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="jp-a"><path fill-opacity=".7" d="M-88 32h640v480H-88z"></path></clipPath></defs><g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#jp-a)" transform="translate(88 -32)"><path fill="#fff" d="M-128 32h720v480h-720z"></path><circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-168.4 8.6) scale(.76554)"></circle></g></svg>

`;
});
const Kr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of kr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-kr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="kr-a"><path fill-opacity=".7" d="M-95.8-.4h682.7v512H-95.8z"></path></clipPath></defs><g fill-rule="evenodd" clip-path="url(#kr-a)" transform="translate(89.8 .4) scale(.9375)"><path fill="#fff" d="M-95.8-.4H587v512H-95.8Z"></path><g transform="rotate(-56.3 361.6 -101.3) scale(10.66667)"><g id="kr-c"><path id="kr-b" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"></path><use xlink:href="#kr-b" width="100%" height="100%" y="44"></use></g><path stroke="#fff" d="M0 17v10"></path><path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z"></path><path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"></path><circle cy="-6" r="6" fill="#cd2e3a"></circle></g><g transform="rotate(-123.7 191.2 62.2) scale(10.66667)"><use xlink:href="#kr-c" width="100%" height="100%"></use><path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"></path></g></g></svg>

`;
});
const Ma = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ma" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ma" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#c1272d" d="M640 0H0v480h640z"></path><path fill="none" stroke="#006233" stroke-width="11.7" d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"></path></svg>

`;
});
const Mk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of mk" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-mk" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#d20000" d="M0 0h640v480H0z"></path><path fill="#ffe600" d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480 40-205.7L360 480z"></path><circle cx="320" cy="240" r="77.1" fill="#ffe600" stroke="#d20000" stroke-width="17.1"></circle></svg>

`;
});
const Ml = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ml" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ml" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="red" d="M425.8 0H640v480H425.7z"></path><path fill="#009a00" d="M0 0h212.9v480H0z"></path><path fill="#ff0" d="M212.9 0h214v480h-214z"></path></g></svg>

`;
});
const Ms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ms" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ms" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#012169" d="M0 0h640v480H0z"></path><path fill="#fff" d="M384.9 111h205.5l-.3 146.3c1.7 58.7-34.9 95.2-102.3 111.7-47.9-12-103-36.5-103.2-110l.3-148z"></path><path fill="#00a2bd" stroke="#000" stroke-width="1.8" d="M389.4 115.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.5-35-98.6-105.4l.2-141.8z"></path><path fill="#a53d08" d="M584.3 272.2c-7.2 53.7-48.6 77.2-96.5 89.7-42.5-11.4-88.2-29.6-97-89.5l193.5-.2z"></path><path d="m480 141.5-.3-17.6 14 .1.1 17.5H532l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z"></path><path fill="#ff9a08" fill-rule="evenodd" stroke="#000" stroke-width=".8" d="m449 278.8 35 36.3c12.1-13.3 3.7-63-12.2-72.1-1.9 5.9-5.1 13-8.6 15.2-7.5 5.2-26.1 11.2-19.9 15 1.4-1.9 5.1-3.7 6.9.6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.2-12.6.8-.3 14.3-4 16.6-15.9 2.9-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.7.9-42-47.9-42-47.9l3.8-2.2z"></path><path fill="#ff9a08" stroke="#000" stroke-width=".8" d="m474.6 245 .2 65.5m-4.2-64.2.3 59.4m-4.5-50.8.2 47.2m-3.7-43.9.2 39.1m-3.9-37.3v33m-4-30.4v26.1m-3.5-24v20"></path><g fill="none" stroke="#ffdf00" stroke-linecap="round" stroke-width="1.8"><path stroke-width=".8" d="m448.5 283 36 41.2"></path><path stroke-width="1.4" d="M486.3 257s16.4 35.7 1.2 65m-43.2-46.6s1.2-3.1 2.7-1.8m-5.5-7.3s-6.6 5.7-3 9.5"></path></g><path fill="#008021" stroke="#000" stroke-width=".3" d="M494 175.4c2.3-2 3.6-3.3 5.1-3 1.5.2 3.5 0 5-.4a31 31 0 0 1 12-.4c1 .2 2.5.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.8-1.4c-8.8 6.7-17 14.8-29.1 6.7-2.8-1.8-3.6-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V175.4z"></path><path fill="#ffe1cf" stroke="#000" stroke-width=".3" d="M502.3 166.8a9.6 9.6 0 0 1-.1 6.8 9 9 0 0 0 .5 8.4c2.7-4 6.6-3.2 9-5.4 2.2-2.3 2.7-4.5 4.4-5-1.7-1.5-4.3-3.2-3.8-7.5.6-4.4 6.7-8 1.2-14.6a8 8 0 0 0-13.4 1.2c-.3.8.2 2.4-.7 3.4a8 8 0 0 1-2.1 2c-.5.4-.8.9-.2 1.6.2.3.6.3 1 .4l-.8 1.5c-.3.3-.2.6.2 1-.5 1.3.4 1.5-.2 2.5-.6.9-1.2 2 .6 3 .6.3 3 .8 4.4.7zm-22.5 23c-3.2.8-8.4-.6-12.3-.2-1.8.2-3.2-.7-3-2.4.3-1.7.6-4.4.2-6.8a31.6 31.6 0 0 1 3.8-14.8 33 33 0 0 0 3.8-11.6c0-1.9.2-3.9 1.8-5 1.2-.7 1.4-1.4 1.8-2 1-1.5 2-1.8 2-1 .1.5 0 1-.5 1.6 1-.8 2.8-1.8 3.2-2 .4-.4 2.4-1.8 2.5-.4.8-.4 1.4-.4 1.6 0 .2.5 0 .7-.3 1 .6 0 1.2.9 0 1.8.7-.2 1.3.8.2 1.7-1 1-2.4 1.6-2.7 2.4-.4.8-3.2 2.9-4.3 3.3-1.1.5-1.2 1.1-1.2 2.7 0 17.8-2 16.3-2 20.7 0 1-.3 2.1.8 1.8a15 15 0 0 1 4.6-.9v10zm.7 38.2c5.2-2.6 11.2-3.6 14.3-4.4a62.4 62.4 0 0 0 10.4-4.4c2.5-1.3 4.5-3 5.9-3.5a6.5 6.5 0 0 0 3.8-3.2 50.4 50.4 0 0 0 6.9-21.8c0-4-1-8.6-5-5.4a29.6 29.6 0 0 0-8.8 13.2c-1.6 6.4-3 7.9-3.3 9.1-.4 1.3-1.6 1.3-3.2 1.6a26.7 26.7 0 0 0-13.6 6.4 136 136 0 0 1-14.2 9.2c-3.7 2.1-4.4 2.3-5.2 4-.8 1.6-1.6 3-2.2 3.6-.8.8-1 1.6-.8 2.6.1.8-.2 4.2-.3 5.4 0 1.2.3 1.4.7 1.5.4 0 1-.2 1.3-1.6-.2 1.4 1.7 1 1.8-.1 0 1.5 2 .6 2-.8 0 1 1.7.3 1.7 0 .4-1.3.7-2.5 1.2-3.4.6-1.4 1.3-3.2 2.7-4 1.5-1.2.8-2.4 3.9-4zm37.4 94.5c.3 1.3 1 2.7 1.2 3.6.2.8-.2 1.1-.4 1.6a32.8 32.8 0 0 0-2.8 8.8c0 1.2-1 2.4-1.3 3.2-.5.8-.3 1.5.8 2.3.4.3 2-.2 2.1-1 .7.6 1.6.4 2.1-.5.6.5 1.5.2 2-.7.5.3 1.3-.3 1.6-.8.8.4 1.6 0 1.6-1.6 0-.4.3-1 .5-1.3.2-.4.3-1.1.3-1.7 0-.7.3-2 .9-2.8.6-1 1.5-2.5 1.1-4-.4-1.4-1-1.3-1.5-3.2-1.3-1.4-3-3.2-4.8-3.4-1.8 0-2.8 1.1-3.4 1.5zm-32.9 9.9c1.7 1.6 5.3 1.6 7.8-1-.9-.4-3-1.4-3.8-2a12.4 12.4 0 0 1-4 3z"></path><path fill="#870f00" stroke="#000" stroke-width=".3" d="M501.4 149c.6-4 3.5-4 5.3-3.5.8.1 2.6.3 4.4-.2 3.4-.9 6 .3 5.6 3.6 1 .7 2 2.3 1.7 3.7-.1 1.4.2 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.6 2.1-4.8.5-1.3.6-3.3.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-.9-.3-1-2.8.4-3.1-.1-.8 0-1.6.3-2 .3-.4 0-1.2-.8-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z"></path><g fill="none" stroke="#000" stroke-width=".3"><path d="M502.3 166.8c2.2-.3 3-1.6 4.6-1.6m-9.4-4.7.5.3c.4.3 1 .4 1.4.4m-1.3-3.1 1 .6m4.2-9.7c-1.3-1.3 2.2-3.8 6-.2.8.8 2.5.8 3 .6m-3.8 1.6c1.8-.4 4.3-.4 5.1 1.6.8 2 2.3.6 3.5 3 1.2 2.3 3 4.8 5 3m-7.4 5.4a4 4 0 0 1-.4-3.2c-.7-.8-.4-2.5 0-3.3m-4.6 1.7c0 .7 1 2 2.4 2.2m7.2 3.2c-.8-1-.7-2-.5-3.2"></path><path d="M510.9 153c0 1.1.6 2.5 1.6 3 .3.6 1.4 2.2 3.8 2m.4-9a10.9 10.9 0 0 0-5.2-2.6m-8.8 35.6c-2 2.7-3.2 6.4-2.4 11.6 1 5.2 2.4 12.8-1.3 16.2m18.6 10.1c-2.6-.7-6.4-.7-8.5.9-2 1.5-5.6 1.6-7.9.4"></path><path d="M512 219.6c-2.3.4-3.3 2.1-3.3 6.4 0 4.2-1 10.4-.2 16.6m-.6-21.1c-1.6.4-3.2.4-2.8 4.5m-5.1 0c.1-2.4 1-4.8 2.6-4.3m14.1 4.9c0-5.6-1.2-7.1-2.8-7 2.2 0 3.7.3 4.7 9.2.6 6.8 2 9 3.7 14.4 4.1 13.6 2 34.5 4.1 42m-12.9-57a71.4 71.4 0 0 1-.4 49.3c4.8 13.4 9.6 23.1 10.5 28.6m-23.9-48c.8-2.9-2.2-3.2.4-13.3 1.1-4.4 1.3-7 .6-8.4"></path><path d="M500.7 242.4c-1 4.4 3.3 12.8 1.2 19m-5.5 1.1c0 4 .9 9 .7 13-.2 3.9 1.4 5.7 3.2 9.4 6.8 13.4 11.2 22.9 10.7 35.5-.2 2.4.6 7.2-1.8 8.6m-12.6 3.4c.7 0 1.4-.4 2.3-2.4a64.8 64.8 0 0 0 2.4-23m1.4 9.6c.4 2.6.4 8-1.3 12.4"></path><path d="M507.1 308.7c1 5.6 1 10.7.1 14.3m-2.4 0c.2 2.2 1.2 8-.5 8.5m9.2-35.3c4.3 6.7 7.6 23.2 11.2 26.6m-7.6-2.6c0-1.8-.1-4.4-1.2-5.6M471 239.4c.1-1.2-.1-2.4 1.3-4.4m-3.3 5.2c.2-4.4.1-4.8 1.4-6m-3.2 6.1c0-3.2-.3-4.3 1-6.3m14.9-88.8-4.5 3.4m5.8-2.4c-.5 0-2.1 1.4-5 3.6m5.1-1.8c-1 .4-2.6 2-4.2 3.2m-2.9-3.5-1.6 1.6M517.5 341c-.2-.2-.2-1.3.3-2.4m1.9 1.9c-.4-.3 0-1.7.2-2.6m1.7 1.9c-.4-.2-.5-1 0-2m1.5 1.2c-.2 0-.3-.6.1-1.8"></path></g><path d="M500.5 152.7c.8 1 1.7 1 1.8 1.6.2.8.3.8.4 1 .2.2-.4.2-.6 0h-1.4c-.4 0-.8-.5-.6-.5.3-.1.3-.2.2-.4 0-.3.2-.6.4-.7l-.1-.3c-.2-.3-.3-1-.1-.8zm.5-1.1a6.4 6.4 0 0 1 3.4 1.6c.7.8.1.6-.2.6s-1-.2-1.4-.6a4.6 4.6 0 0 0-1.9-1.2c-.3 0-.6-.4 0-.4z"></path><path fill="#012169" d="M0 0h320v240H0z"></path><path fill="#FFF" d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"></path><path fill="#C8102E" d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"></path><path fill="#FFF" d="M120.5 0v240h80V0zM0 80v80h320V80z"></path><path fill="#C8102E" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"></path></svg>

`;
});
const Mx = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of mx" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-mx" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><radialGradient xlink:href="#mx-a" id="mx-b" cx="842.3" cy="103.7" r="25.9" gradientTransform="matrix(.14152 .03595 -.03453 .14198 213.1 162.4)" gradientUnits="userSpaceOnUse"></radialGradient><radialGradient xlink:href="#mx-a" id="mx-c" cx="651.5" cy="550.5" r="25.9" gradientTransform="matrix(-.13441 -.05384 .04964 -.12489 397.9 -24.3)" gradientUnits="userSpaceOnUse"></radialGradient><radialGradient xlink:href="#mx-a" id="mx-d" cx="380.8" cy="740.4" r="25.9" gradientTransform="matrix(.07536 .00282 -.00343 .14804 412.4 -203.6)" gradientUnits="userSpaceOnUse"></radialGradient><linearGradient id="mx-a"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f15770"></stop></linearGradient></defs><path fill="#ce1126" d="M426.7 0H640v480H426.7z"></path><path fill="#fff" d="M213.3 0h213.4v480H213.3z"></path><path fill="#006847" d="M0 0h213.3v480H0z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m355.8 289.4.2 4.5 1.7-1.1-1.3-3.7z"></path><circle cx="355.6" cy="288.2" r="1.4" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2"></circle><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m361.1 296.4-3.2-3.1-1.5 1.2 4.5 2.6z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M360.9 298.2c-.5-.6-.3-1.5.3-2 .7-.5 1.6-.4 2 .2.5.6.3 1.5-.3 2-.7.5-1.6.4-2-.2z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m386.3 249.6 3.4 3.3.4-1.7-3.1-2z"></path><circle cx="385.9" cy="248.7" r="1.4" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2"></circle><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="M395.2 251.6 390 253l.5-1.7 4.4-.4z"></path><circle cx="396" cy="250.8" r="1.4" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2"></circle><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m378 276.8-3.2-4.8.5-.3 3.5 4.2z"></path><circle cx="374.5" cy="270.8" r="1.4" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2"></circle><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m378.1 277 4 .7.1-.5-3.3-1.4z"></path><circle cx="383.3" cy="277.7" r="1.4" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2"></circle><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M284.6 288c0 .8-.5 1.2-1 1.2s-1-.5-1-1.2.5-1.3 1-1.3 1 .7 1 1.4z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m284.6 290.3 1 5-1.3-.5-.4-4.3z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M285.7 288.6c.6.7-.4 1.9-1.4 2.2-1 .3-2.4-.2-2.4-1.2s1.6-.5 2-.6c.6-.2 1.2-1.2 1.8-.4z"></path><ellipse cx="277" cy="296.3" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" rx="1.6" ry="1.1"></ellipse><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m279.6 296 4.8-.2-.8-1-4 .4z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M280 295.4c.5 1.3.5 3-.9 2.7-1.4-.1-1-1.4-1.2-1.8-.2-.9-1-1.7-.2-2.5s2 .4 2.3 1.6z"></path><ellipse cx="264.4" cy="269.2" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" rx=".9" ry="1.4"></ellipse><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m264.4 272.4.1 4.6-1.2-1v-3.8z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M266.2 271c.3 1-1.3 1.6-2.4 1.4-1-.2-1.9-.7-1.7-1.7.1-1 1.5-.8 2-.5.4.3 1.8-.8 2.1.7z"></path><ellipse cx="256.2" cy="276.5" fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" rx="1.6" ry=".7"></ellipse><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m259.1 276.5 3.6-.3 1.6 1.2-5.3-.2z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M257.8 274.5c1 0 1.6 1.1 1.5 2.3-.2 1.1-1 2-2 2-.9-.2-.8-1-.8-1.2 0-.3.5-.7.6-1 0-.4-.3-1.3-.1-1.6 0-.4.3-.5.8-.5zm-3-28.3c-.4.6-1.2 1.1-1.6.9-.4-.3-.2-1.2.2-1.8.4-.7 1-1 1.4-.8.4.3.4 1 0 1.7z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m250.7 253.5 2-4.8-.2-.3-2.4 3.4z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M252.4 248.7c-1-.7-1.2-1.5-1-2.3.4-.7 1.2-.2 1.2-.2l.8.7c.4.2 1 0 1.4.6.5.6.2 1.2-.1 1.4-.4.1-1.5.4-2.3-.2zm-8.5-.6c.7.4 1.1 1 .9 1.5-.3.5-1 .5-1.8 0-.7-.3-1-1-.8-1.5.2-.4 1-.5 1.7 0z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m246 250.2 3.8 2.2-.1 1.8-4.1-3.5z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M246 250.6c-.8 1-1.6 1-2.3.7-.7-.5-.1-1.2-.1-1.2l.8-.7c.2-.4 0-1 .7-1.4.7-.4 1.2 0 1.3.3.1.4.3 1.5-.4 2.3z"></path><path fill="#aa8c30" d="m356.6 289.8-.4.4-.3 1v-1.5l.5-.3.2.4zm.2-.9s-.3.5-1.1.5-1.2-.4-1.3-.8c-.1-.4-.1-.7.2-1.2.2-.5-.4.4-.4.4v1l.6.6.5.2h.4l.7-.2.4-.3v-.2zm4.2 7.3s-.4.2-.7.1c-1.9-.6-3.5-1.8-3.5-1.8l3.8 2.4.4-.7zm2.4 1.1s0 .7-.8 1c-.7.3-1.2.2-1.5-.1s-.4-.6-.4-1.2l-.1.6.4.8.8.4.5-.1.5-.2.4-.5.3-.5-.1-.2zm24.3-47.6-.1.4v.7l-.9-1 .4-.5.6.4zm-.5-1.2c0 .7-.9 1.6-1.6 1.3-.7-.3-1.2-1-.9-1.8l-.2.3.1 1.1.7.6h.9l.6-.3.4-.7v-.5zm10 1.8s-.1-.4 0 0-.6 1.7-1.4 1.6c-.7-.1-1-.8-1-1.4 0-.6-.1.2-.1.2v.8l.5.4.6.4.6-.2.7-.3.2-.6v-.9z"></path><path fill="#aa8c30" d="M393.8 251s0 .4-.4.7l-1.3.7 2.8-.8-.2-.7-.9.2zm-17.1 22.5-.1.5v.8l-1.6-2.5.5-.3 1.2 1.5zm-.9-2.4c-.2.7-1.4 1-2 .8-.5-.4-1-1.6-.3-2l-.4.2-.1.7.2.7.6.7.5.1.8-.2.6-.4s.4-1.3.1-.6zm5.6 5.7s0 .3-.5.3h-1.6l2.6.6.2-.6-.7-.3z"></path><path fill="#aa8c30" d="M384.6 277.5c.3.8-.5 1.7-1.5 1.4-1-.3-1.3-1.3-1-1.8l-.2.6.2.8.6.6h1.3l.6-.7.2-.7-.1-.2zm-99 11.1c.3.3-.1 1.5-1.2 2-1.2.4-1.7 0-2-.4-.3-.4-.3-.8-.3-.8l-.2.2.2.6.5.5 1 .2.8-.1.7-.5.4-.3.3-.5v-.6l-.1-.3z"></path><path fill="#aa8c30" d="m284.6 291.1-.3.4-.3.8v-1.4l.5-.3.1.5zm-3.8 4s0 .3.2.5l1 .3h-1.8l-.2-.7h.8zm-.6 1.2v.2a1.4 1.4 0 0 1-.1.5c-.2.5-.3 1-1 .9a1.2 1.2 0 0 1-1-1.1c0-.4-.2-.6-.2-.6v.6l.4 1 .7.3h.5l.5-.2.2-.6.1-.5v-.5zm-4.7-.1s.2.8 1.2.8 1.2-.2 1.2-.2v.3l-.2.2H276l-.3-.3-.3-.5v-.3zm-9.4-25.4v.4c-.1.3-.7 1-1.8 1-1 0-1.5-.3-1.8-.7-.3-.3-.4-.8-.4-.8v.5l.4.7 1.1.5h1l1-.3.5-.5.1-.6-.1-.2zm-1.7 2.3s-.4 0-.6.2a4 4 0 0 0-.4.4v-1.3h1v.7zm-4.7 3.4.5.3c.5.3 3.1.5 3.1.5h-4.1l.1-.8h.4zm-.5 0-.2.6c-.2.5-.7 1.6-1.6 1.4-.9-.1-.7-.8-.7-.8v-.4l-.2.7.2.4.4.2.7.1.4-.2.6-.5.2-.5.2-.6v-.3zm-2.2.2s0 .2-.7.2-1.7-.3-1.7-.3l.4.4.5.2h1.3l.2-.5zm-2-29s0 .5-.3.8c-.4.3-1.3.5-1.8.2s-1.5-1.3-1.5-1.3l.4.8.7.6 1 .3 1-.2.4-.4.2-.3-.2-.4z"></path><path fill="#aa8c30" d="M252 249.1v.6l-.2 1.1.9-2-.4-.2-.3.5zm-5.4 1.5.2.5c.2.5 2.3 2.6 2.3 2.6l-3.3-2.9.4-.5.4.3zm-1 .3s-.5.3-1 .3c-.3 0-1 0-1-.4-.1-.5.1-.7.1-.7l-.3.6.1.4.5.3h.7l.6-.3.2-.2zm-1.5-1.4h-.5c-.7 0-1.4-.8-1.4-.8l.5.8 1 .5.4-.5z"></path><path fill="#9ca168" d="M399.9 240.2c-.3 3.8-4.1 5.8-6.1 7.2-2 1.4-3 3.2-3 3.2l-.6 2.2-.3 1.5-.1.5c.1.4.3 1 .3 2l-.1 4.3 2.7-1.9 1.9-.7.6-.1s-2.2 2.1-3 4.4c-.8 2.3-2.4 7.2-5.3 8.8-3 1.6-4.8 1-5.7 1.8-1 .8-1 1-1 1l-1.3 1.8-1 1.2-.9.7-.6.4a7.5 7.5 0 0 1-.2 1.7l-.7 2.4s.6-.4 1.3-.5h1.3s-.5.6-.7 1.3c-.2.6.1 4.6-3.6 7-3.8 2.3-13.4 2-13.4 2l-1.8.7-1.7 1.3-1.6 1.7v.4s-1.3 1.5-2.1 2l-2.8 1.9 2.2.1 3.5 1.5s-2.2 0-3.6.5c-1.5.6-8.2 4.4-11.4 4.3-3.3-.1-8-4.9-8-4.9l-2-1.4-3.5-.7-4.3-.2v-.6l.1-.7s1.5-.2 3.8.1c2 .2 2.7 1 4.4 1.1 1.7.2 3 0 3.5-.3.7-.3 5.9-4.7 5.9-4.7l5.8-2 2.3.3 1 .2.9.3-1 1a7.3 7.3 0 0 1-1.4 1.1l.7.6 3.7-.6 1.2.3.3.2c0-.3.2-.8.6-1.3.4-.6 2.5-2.3 3.4-2.9l1.4-1c.3-.3 1.5-3.3 1.5-3.3l.1-1.6 4.1-4 2.8-2.9 1.2-3.3-.2-.7s1 1 .9 3c-.2 2.2-.7 2.9-.7 2.9s2.8-2 4.3-2.6c1.2-.5 2-.5 2.4-.5.4-.2 1.5-.9 2.1-1.8.8-1.2 1-1.5 1-2l.2-2.8-.3-7 2.4-5.4 3.5-3.1.7-.4-.4 1.2v1.5s1.8-2.5 2.7-2.9l.5-.3a7 7 0 0 0 .8-2l.3-3v-3l-.5-2.3-1.7-4.3v-5.8l-1.2-1.6s1.1 0 2.5 2a13.5 13.5 0 0 1 1.9 5l3.3-10.3s.9 1.2 1.5 3.3l.8 3.3 1.4-2.8.1 1c.2 1 2.3 2.1 2 6zm-67.3 65s-.7-1.6-3.9-3.2c-3.1-1.5-5.5-1.8-5.5-1.8v1.1l5 2.2 2.4 2 2-.3z"></path><path fill="#717732" d="M355.4 295.6c.3-.4 3-2.8 4.4-3.5s3.2-.8 3.2-.8c1.9-.4 2.2-.1 6.6-2.5 4.3-2.4 5.3-5.2 6.2-5.9.8-.7 2.3-.8 2.3-.8l-3.4 3.9a28.5 28.5 0 0 1-5.8 4.5 17.8 17.8 0 0 1-7.6 1.8 7.7 7.7 0 0 0-4 2c-1.3 1-2 2.2-2 2.2s-.2-.5 0-.9zm12-12.7c-4 3.7-5.3 7.2-5.3 7.2l5.4-4.9c1.9-1.8 4.5-2.6 5.6-3.7 1.2-1.1 1.3-2 2-2.7l1.3-1s-1.8-1.4-9 5.1zm-8.5 8.6s1.7-.8 2.4-2.3c.5-1.2.2-1.5 1-2.8 0 0 4.2-4 5.7-5.8 2.6-3.1 1.4-5.7 1.4-5.7s.3 1.3-.8 2.7c-1 1.4-6.5 5-7.2 7.2-.6 2.2-.3 2.3-.6 3.4-.6 2.6-1.9 3.3-1.9 3.3zm-2.8 10.5s-2.1-1.4-4.5-1.3c-4.9.4-9 3.4-12.2 3.4-3.1.1-4.4-1.5-6.9-3.2-2.6-1.8-9.2-1.5-9.2-1.5v.3s4.4 0 6.4.6c3.6 1 5.6 4.8 9.7 4.6 5.5-.3 9.9-3.6 12-3.6 3.8 0 4.7.7 4.7.7zm-24-2.4s3.7.6 6.6-1.5c3-2.1 6.4-5 8.3-5.2 2 0 4 .4 4 .4s-2.5-1-4.4-1c-2 0-4 .2-5.8 1.3-1.8 1.1-2.7 3-4.6 4.3a12.8 12.8 0 0 1-4.1 1.7zm-.7 5c-.5 0-1.1.3-1.3.3-.2 0-1.3-1.2-3-2-1.6-1-4-1.4-4-1.4s-.3 0 .3.2l3.8 1.5a8.6 8.6 0 0 1 2.6 2.1c.1.3.6.9 1.5.8 1 0 1.3-.5 1.2-1 0-.3-.6-.5-1.1-.5zm2.6-3.6s1.5.8 4 .8c5.2-.2 8.6-3.8 12-5 3.4-1.4 5.2-.3 5.2-.3s.1-.2 0-.2a7 7 0 0 0-3.9-1.2c-5.7 0-11.2 3.7-13.5 4.7-2.3 1-3.8 1.2-3.8 1.2zm56-39.9c-1.8 1.9-4.5 7.7-5.6 9.3-1.2 1.6-2.7 2-3.3 2.7-.6.6-2.7 3.5-3.2 4.1-.5.7-.6.5-1 .8-.3.3-.5.3.1.2.6-.1.8-.5 1.6-1.5 1-1 .9-1.4 2.3-2.7 1.4-1.2 3.9-2.6 5.1-4.2 1.3-1.5 3.8-7.5 5.2-9 1.4-1.5 4-2.4 4-2.4s-2-.6-5.3 2.7zm-9 11.1s-.1-1 1.2-2.6 1.7-1.3 2.8-3.6c1-2.3 1.5-4.5 2.3-6.9.9-2.4 2.3-4.8 2.3-4.8s-1.3.2-2.7 2a34.5 34.5 0 0 0-4.8 8.7c-1.1 3.4-1.1 7.2-1.1 7.2zm-1.7 2.2s.5-.2.5-3.2c.1-2.9-.1-7 .7-9 .9-2 5.4-7 5.4-7s-1.9.5-4.5 2.5-3.7 4.7-3.6 6.7c.2 2 1.3 4.2 1.4 6.1l.1 4zm10.5-20.1s1.1-4 1.6-5 .5-1.5 2.7-4c1.3-1.5 2.6-2.4 3.1-4.4.6-2 .6-7.7.6-7.7s-.6.5-1.1 1.5c-.5 1-.1 4.7-1 6.4-.8 1.7-2.7 5.6-3.7 6.5 0 0-.2-2.9.2-5.7.3-3 1.3-3.8 1.7-5.7.4-1.9.2-6.7.2-6.7s-1.5 1.5-2.3 3.4c-.8 1.8-1.2 5-1.2 7.5s.5 4.5.6 5.9c.1 1.4.2 2-.4 3.6l-.6 2a34.8 34.8 0 0 1-.7 2.6l.3-.2zm-3.5-21.6s1.4 1.7 1.2 3.6c-.3 2-1 4.5-.2 6.5.7 2 1.9 2.2 2.2 3.4.3 1.2.3 3.4.3 3.4s.6-4.3.2-5.5c-.5-1.1-.7-.6-1.3-1.8s0-4.7-.4-6.7c-.5-2-2-2.9-2-2.9z"></path><path fill="#9ca168" d="M306.7 304.8s.4-1 3.1-2.4a34 34 0 0 1 7.3-3c.3.3-.3 1.8-.3 1.8l-2.6.8-2.1 1.2-2.5 1.6h-2.9z"></path><path fill="#9ca168" d="M313.6 297.7c-3.4.1-5.3 1-6 1-.2.1-.7.5-1.2.3a4.9 4.9 0 0 1-1.5-1.5l-.7-.7-.2 2.5-5-4.4-.6 3-.7 1.3-5-4.8.2 3.7-1.4.1-3.6-2.5-1 .4 1.2 2.2-4.6.3-1 .8a6.3 6.3 0 0 0-1 1v.4h1.9c.4-.2.6-.7.7-.5.2.2.3 1.2.9 1.1.6 0 2.7-1.7 4.2-1 1.7.8-2.2 2-1.8 3.1.4 1.2 3.2.7 4 .3.6-.3 2.7-3 3.6-2 1.2 1.4-2.5 2.5-1.8 3.9.6 1.3 2.7 1 3.7.4 1-.5 3.4-4.1 3.9-3.4.9 1.4-2 2.7-1.3 3.7.8 1 2.3 0 3.4-.8s1.5-2.5 3-3.3c1.4-.8 1.3-.5 1.7-.5.4 0 1.5-1.1 1.5-1.1l3.5-1.5 1.6.2.9.4 1.7.2.2-1.4s-2-1-3.3-1zm-27.4 0 .7-1.3-.4-.6s-1.2-.7-2.3-1.8a6.9 6.9 0 0 0-2-1.6L280 291l-.8-2.8-.5-.9-1.3.6-1.7-6.1-.3-1.1h-.7l-1.5 3.6-1.5-2.3-.4-5-1 1-1.3 1.4-2.3-4.6s-.1-.1-.3.3c0 .3-.3 1.8-.1 2.6a26.2 26.2 0 0 1-6-5.2l-1-2.5 1-2 .5-2.6-2.2.9-.4-5.7-.3-1.8-2.7 3.8-1-1.7v-3.6l-.7-.2-1 2s-1.1-2-1.6-2.5c.1-.8.2-2.9-.3-4.5-.6-2-1.3-3.1-1-4.8.2-1.6.9-1.8.8-2.5 0-.8-1.2.5-.8-.5.4-1 3.8-3.2 3.1-4.4-.7-1.1-4 1.9-3.3-.1.8-2 4-2 4.2-4.9.1-1.7-3 1.1-3.3.2-.3-.8 2-2.6 1.9-3.8 0-1 .4-1.2-.2-1.8-.6-.6-2.6 2.3-2.6 2.3l-2-.7-.8 3-.6 2.5-2.6-1.5.7 3.1.6 3-2.7-.7 1.4 2.6 1.9 2 1.1 1.5.9.4 1 1.1.5 1.7.6 1.9.1 1.8v2.4l-.1.4v1.1c-.5 0-1.4-.8-1.7-.3-.3.6 1.6 2 1.2 2.4-.3.4-3-.5-3.2.3-.2 1 .2 2.2 1.8 2.6s5.3 1.2 4.7 2c-.6.7-4.7-2.3-4.5-.1a3.8 3.8 0 0 0 2.6 3.4c1 .4 5.1 0 4.9 1-.3.9-3.3-.4-3.6 1-.3 1.4 2.1 1.6 2.6 1.6s2.2-.1 2.9.4l4.3 4.1a75.7 75.7 0 0 0 4.6 3.4c-.8 0-2.4-.3-2.6.3-.3.7 6 3 4.2 3.8-1.8.7-3.8-2-4.3-.4-.6 1.7 1.2 3 2.2 3.6 1 .6 6.7.1 5.6 1.4-1.1 1.3-5.3-.8-5.3.7s2.7 4 4.2 3.9c1.4 0 3-2.4 3.6-1.1.7 1.2-1 1.7.3 2 1.4.4 2.3-1.4 4-1 1.5.3 4 1.3 5.4 2.5a79 79 0 0 1 2.9 2.8z"></path><path fill="#717732" d="M308.4 304.1c1 0 1 .6 1.2.6.1 0 1.8-1.5 3.3-2.3a17.5 17.5 0 0 1 4-1.4l.1.2s-2.8.7-4.2 1.7l-3 2.1c-.2.2-.8.7-1.7.7-1 0-1.4-.6-1.4-.9 0-.2.7-.7 1.7-.7zm8.5-4.3s-.9.1-1.3-.3a4.3 4.3 0 0 0-2.6-.8 7 7 0 0 0-4 1.8c0 .1-.3.6-1.4 1.3.4.1 1.1-.4 2-1a7.4 7.4 0 0 1 3.6-1.4c1-.2 1.7.4 2.2.7.5.4 1.4.3 1.4.3v-.6zm-50.5-20.6v-.7a16.1 16.1 0 0 1-2.2-1.1c-1.6-1-5-3.8-5-3.8l2.8 2.7c1.4 1.3 4 2.9 4 2.9h.4zm35.6 25.2 1.5-2.1c.9-1.5 1.7-2 1.9-2.2.1-.2-.4-.9-.7-1.4l-.2-1.2s.4.8 1 1.3a9.5 9.5 0 0 1 1.1 1s1.4-.2 1.4-.5c0-.2 0-.4-.2-.5-.3-.1-.5.2-1.1 0-1.3-.6-1.8-2.6-2.6-2.6-.8-.1-.2 2-.6 2-1.1.2-2-4.3-5-4.5-2 0-2.3.3-2.4.7 0 .5 2.5 3.1 1.6 3.5-.8.4-3.5-4.2-5.5-4.2-1.9 0-2 .7-2 1.1.2.4 2.2.8 1.8 2.2-.5 1.4-2.5-2-4.3-1.9-1.8.2-2 .3-2 .9-.1.5.6 1.2.3 1.4-.2.2-1.4.1-2.3.7-.9.7-2.1 2.4-2.1 2.4s1.2-1.7 2.7-1.9a50 50 0 0 1 5.6 0l-1.1-.8c-.6-.5-1.1-1.6-1.1-1.6l1.7 1.5c.8.7 1.9 1.2 1.9 1.2s1.7.2 1.8.4c.1.2 0 .6-.8 1.3l-1.7 1.7 2-1.6 1.5-1.2 1.4.2c.1 0 0-.5-.8-1.7l-1.6-2.5s1 .9 2 2.3c1.1 1.3 1 2 1.4 2 .4 0 1 .2 1.4.1.4 0 .3.6-.4 1.7s-1.2 2.5-1.2 2.5.8-1.2 1.6-2c.7-.8 1.1-1.7 1.5-1.8h1.5l-.8-1.6c-.6-1-.8-2.6-.8-2.6s.6 1.4 1.4 2.5l1.3 1.9 1.4-.1.3.1c0 .5-.2.7-.7 1.8a17.7 17.7 0 0 0-1 2.1zM280.5 292c1.2.5 1.7.5 1.7.5s-1.7-1-2.1-2.4c-.5-1.4 0-4.4-.8-4.3-.7 0-1.1 2.1-1.8 1.7-.8-.4.2-4.4-.6-6-.8-1.7-2.6-2.9-3-2.3-.4.6-.3 4.2-1.5 3.5-1.1-.8.1-4-.2-5.3-.4-1.5-1.2-2.5-1.9-2.1-.6.3.3 3-.7 3s-.9-1.9-1.3-2c-.5-.2-.6.3-.9 0-.2-.4 0-1.7-.6-1.6-.6.1-.5 1.2-.3 1.7.1.6.5 1.4.7 1.8.2.4 1 .9 1 1.2-.1.3-.5.6-1 .6h-1.9s1.4.4 1.9.4 1.4-.2 1.7.2c.2.5 1.4 2 1.4 2s.3-.8.4-2.2c.2-1.5 0-2.7 0-2.7s.5 1.6.4 2.7c0 1-.4 3-.4 3s1.1.8.8 1c-.3.3-1.5.3-2.8.3-1.4 0-3.3-.5-3.3-.5a13.7 13.7 0 0 0 6.7 1.3l1.8 2s.9-1.5 1-3v-3l.4 2.8c0 1.3-.4 3.6-.6 3.8a5 5 0 0 1-1.9 1l-3.5.5s2.2.3 3.8 0c1.5-.4 1.7-.9 2.2-.6l.8.7 1.3 1c.1.1-.7.4-1 .7l-1.5.7 2.2-.7a22.3 22.3 0 0 0 1.1-.4l.5.2-.1-1.2-.3-1.8s.5.8.7 1.6l.1 1.6s.2.2 1.4.6zm-31.1-35.6s.3-1.7.3-3.6a14.3 14.3 0 0 0-1.9-5.8l1-1.4-1.2 1-1.2-.5a3 3 0 0 1-.9-1l1.2.8c.6.2.7.1.7.1l-.5-2-1.9-1c-1.3-.6-2.5-1.8-2.5-1.8l2.8 1.5c1 .4 1.6.4 1.6.4l1.6-.6 1.7-1.1s-1 .6-1.8.7l-1.6.3-.3-2.4-1.1-1.1c-.9-1.2-1.6-2.9-1.6-2.9s1 1.2 1.7 1.7c.7.6 1.4 1.5 1.4 1.5l1.6-1 2.8-2-2.7 1.3-1.6.7s-.2-1 0-1.5c.3-.4.8-1.2.7-1.6 0-.5-.4-.3-.5-.7-.2-.3.4-2.6.4-2.6l.1 1.2c0 .5-.2 1 .4 1 .6 0 3.2-2.7 3.6-3.2.3-.5.8-1.8-.6-1.3-1.4.6-1 1.8-2.2 1.7-.4 0-.8-1.5-1.2-1.2-.4.4-1.4 1.3-1.6 2.4-.2 1 .2 2.6-.4 3.1-.6.5-1-1.8-2.2-1.5-1.2.3-1.5 2-1.3 2.6.2.6 2.7 3.5 2 4-.9.3-2.9-2.6-4-.6-1 1.9 3.4 4 4 4.4.5.5 0 .6.8 1.6s1.8 1.2 2.4 1.8a13 13 0 0 1 2.1 5.9l-.1 2.7zm11.7 17.1s-1-1.2-.7-3.3c.3-2 1.8-5.7 1.3-6.2s-2 2.2-2.4 1.6c-.4-.6.9-4.3.2-5.8-.6-1.5-.7-2.5-2-2.3-1.3.1-1.8 4.4-2.5 3.6-.6-.7.4-2.6 0-3.7-.5-1-.7-1.3-1.3-1.2-.7.2-1 2.2-1.4 2.1-.5 0-1.2-2.3-2.2-2-.9.3 2.3 4.5 2.3 4.5s.5-.5.8-1.2l.6-1.5s.3 1.3 0 1.9c-.2.5-.3 1.7-.3 1.7s-.8.3-2.1 0a8.8 8.8 0 0 1-2.3-.7s.8.6 2.1 1l2.7.7a44.9 44.9 0 0 0 2 2.7l.8-2.1 1.3-3.5-.6 3.9-.7 3s-1 0-2.6-.3l-3.6-.8 3.6 1.2 2.8.7 1.4 1.9 1-1.5 1-1.8s-.3 1.4-.7 2.3a27.4 27.4 0 0 1-.7 1.4l-1.8.2h-2.5a19.6 19.6 0 0 0 4.5.9s0 .5.7 1.3a4.6 4.6 0 0 0 1.3 1.3z"></path><path fill="#fff" d="M314.4 310.8s-.6-.6-1.4-1c-.9-.5-1.2-.4-1.2-.4l-.4-.1.8-2 5.5-5.3.9-5.3h3.4v7.2l1 .5 6.2 3.7v1.6l-1 .4-.7.4-2.3.2-4-3-1.8-1.7-3 4-2 .8z"></path><path fill="#016848" d="m318.8 296.7-.1 1c0 .9 0 5.2-.2 5.8-.2.6-3.2 1.8-4.9 3.3-1.7 1.5-1.8 2.6-1.8 2.6s-.5 0-1.6.4c-1 .4-1.5 1-1.5 1s.6-2.6 3.4-5c2.7-2.6 4-2.8 4.4-3.2.3-.4 0-5 0-5.5.1-.4.5-.4.7-.4h1.6zm7 15.7.8-1.1 1-.8-1.5-.8c-1.5-.6-2.3-.4-3.3-1.2a13.6 13.6 0 0 1-2.2-2l-1.5 1.2 1.7 2c.9.8 2.7 1.1 3.5 1.6a8.8 8.8 0 0 1 1.6 1.1z"></path><path fill="#cd202a" d="M321.5 296.6s1.7 0 1.9.2l.2.6c0 .1 0 4-.2 5.3a8 8 0 0 1-1.4 3l-4 3.7c-1.2 1.2-2.4 2.8-2.4 2.8l-.8-1c-.3-.4-.7-.6-.6-.9a10 10 0 0 1 3.3-3.4c2-1.3 3.6-2.8 4-4.9.3-2 0-5.4 0-5.4z"></path><path fill="#cd202a" d="M332.5 310s-.4-.4-1.8-.4l-1.5.1s-.8-1-2-1.7c-1.2-.8-2.1-.7-3.5-1.6-1.3-.8-2-2.1-2-2.1l1-2s1.2 1.5 2.4 2.4c1.1.9 3.7 1.7 4.6 2.4l2.8 2.9z"></path><path fill="#30c2dc" stroke="#0872a7" stroke-width=".5" d="M345 286.4s-3.6-1.4-3.4-2.7c.3-1.2 8.3-3.3 8.3-3.3l.1-2.1s-1.2-.1-3.2.5c-2 .7-5.2 1.6-8.6 1.6a1735.4 1735.4 0 0 0-34.4-2.2c-3.7-.3-6-6-6-6l-1.8.4s.5 2.7-.4 3a65 65 0 0 1-13.9-6l-.6 2.6s7.3 4 7.1 5.5c-.2 1.4-2.4 1.3-2.4 1.3l1 1.8c.3 0 12 .6 12.3 4.1 0 1.5-3 2.3-3 2.3l1 1.2v.6s6.7 0 8.5 1c1.8 1 2.7 2.6 5 3.8 2.2 1.3 17.3 1 19.6.3 2.7-.7 4.3-3.7 8.7-5 4.3-1.4 5.7-1.4 5.7-1.4z"></path><circle cx="284.5" cy="280.7" r="2.1" fill="#fff" stroke="#0872a7"></circle><circle cx="296.4" cy="270.9" r="2.1" fill="#fff" stroke="#0872a7"></circle><circle cx="346.5" cy="286.6" r="2.1" fill="#fff" stroke="#0872a7"></circle><path fill="#f8c83c" d="M275.1 267.8c-.7 1.6 2 4.6 4 5 1.8.2 2.8-.2 3.2-1.1a2.8 2.8 0 0 0-.4-2.5c-1.2-1.7-6-3-6.8-1.4z"></path><path fill="#fff" d="M281 270.2c0-1-1.6-1.9-2.6-1.9s-2 0-1.8.5c.1.6 2.7 1.3 2.8 1.6 0 .3-.8.6-.4 1 .5.4 1 .1 1.4-.2.4-.3.7-.4.7-1z"></path><path fill="#f8c83c" d="M297.7 288.3c.4 1.4-.7 2-2 2.7-1.5.6-4.3.2-5-.9-.6-1.1 1-3 2.8-3.4 1.7-.4 3.8.3 4.2 1.6z"></path><path fill="#fff" d="M294.8 289c.5 0 .6 1 1 .8.5 0 1-.8.8-1.3-.1-.6-1-1.3-1.8-1.2-.8 0-3 2-2.8 2.5.2.5.8.5 1.2.3.4-.2 1-1 1.6-1z"></path><path fill="#f8c83c" d="M349.2 281c1.3 1.7 3.6.2 4.2-.5.6-.6 2.4-1.7 1.7-2.8-.8-1.1-2-1-3-1-.8 0-2.6 1.4-2.9 2-.3.5-.6 1.6 0 2.4z"></path><path fill="#fff" d="M349.6 280s.1-1.9 1.8-2c1 0 1 .3 1.8.7.7.4 1-.5 1-.5s0 1.3-1.1 1.3c-1.2 0-.8-.5-2-.7-1-.2-1.5 1.1-1.5 1.1z"></path><path fill="#f9aa51" stroke="#953220" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="m321.9 276.4-.9-.6h-2.8l-3.4.1 3.4 9.9 4 5.8 1.6.6 3.1-.2.6-1.6-1.2-9.5-4.4-4.5z"></path><path fill="#f9aa51" stroke="#953220" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="m310.6 277 .2-1.1 1.8-.1a7.2 7.2 0 0 1 2.2.1s2.3 2.9 3.1 4.7c.8 1.8 1.7 4.8 2.7 6.6 1 1.9 3.2 5 3.2 5h-4l-2-.6-5.6-9-1.6-5.6z"></path><path fill="#f9aa51" stroke="#953220" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M308.2 275.8h2.6a14 14 0 0 1 3.9 5.4c1 2.8.5 3.2 1.8 6.2 1.4 2.9 3.2 4.9 3.2 4.9s-3.9.2-6-.2c-2.3-.4-3-.3-3.6-1a9.2 9.2 0 0 0-1.7-1.3h-2.2l.5-3.1-.6-6.9.1-3.5 2-.5zm23.4 1.8-3.7-1.5-7-.4.6 3.6a30.2 30.2 0 0 0 2.6 7.7c1.1 2 2.2 4.4 2.8 5 .6.5 4.6-1.1 4.6-1.1l2.6-.4-.3-2.8-.4-1 .6-8-.6-1.2-1.8.1z"></path><path fill="#f9aa51" stroke="#953220" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M307.1 277.7c0 .8 1 .9 1.2.8.2 0 1-.3 1-1.5s-.7-2.1-2.2-2.2c-1.4 0-2.5 1.7-2.5 3 0 1.2 1.2 1.8 1.2 2.3 0 0-1.2 1.1-1.1 3.1 0 2 1.6 3.6 1.6 3.6s-1.7 1.3-1.7 2.7c0 1.4 1.3 2.3 2.6 2.3 1.2 0 2.8-.8 2.8-1.8s-1-1.7-1.7-1.7c-.8 0-1.1.5-1.1.8m25.6-10.9c0 .9-.6 1-1 1s-1.2-.4-1.2-1.5c0-1 1.4-1.6 2.4-1.6.9 0 2.4 1.2 2.4 2.7 0 1.5-1 2.6-1 2.6s.6.3.6 2.2c0 2-1.2 3.3-1.2 3.3s1.6.6 1.6 2.6-1.4 2.6-2.3 2.6c-1 0-2.6-.5-2.6-1.9 0-1.3.8-1.8 1.5-1.8.6 0 1.3.7 1.3 1.5"></path><path fill="#953220" d="m309.5 288.6.4.6c.2.4.3 1 .8 1.4.8.7 7.2 1 9.2 1 2 0 7.8.2 8.9-.4 1-.7 1.2-1.8 1.9-2.3l.9-.4-.9.7v1.4l.5.8s-.1.4-.8.8c-.7.4-1.3.5-2.3.6-1 .1-13.2.1-15.2-.2-2-.4-1.8-.3-2.4-.7a4.3 4.3 0 0 1-1-1l.3-.8-.3-1.4zm20-11.8 1 .5s-.9.3-1.6 2.3c-.7 2-.1 2.5-.6 2.7-.5.2-5.8 0-5.8 0l-1-2.1 8-3.3z"></path><path fill="#231f20" d="M346.4 276s-.9-.3-1.3-1c-.4-.8-.8-1.7-.5-2 .4-.1 1 .5 1 1.1 0 .6.8 2 .8 2zm10.4-2.8s.7 1.2 1 1.3l1.2.6s-1.5 0-2-.4a8.3 8.3 0 0 1-1-1.5h.8z"></path><path fill="#231f20" d="M360 274.2s-1 .5-1.6.2c-.8-.3-1.4-.7-1-1 .2-.4.4-.3.8.2.4.4 1.8.6 1.8.6zm5.3-4.5s-.8.6-1.3.6-1.5-.2-1.5-.4 1.3-.4 1.6-.3h1.2zm-8-10.5s-1.1.4-1.5 1c-.4.5-.3 1.2.2 1.2s.6-.7.6-1l.7-1.2zm-5.2 2.9s-.9.5-1 1c-.3.5-.5 1.6 0 1.6s.7-.8.7-1.2c0-.5.3-1.4.3-1.4z"></path><path fill="#8cbebf" stroke="#04534e" stroke-width=".5" d="m342.8 268.4-2.9 3s6.6 3.7 11.7 3.5c5-.1 10.8-4 11.2-5 .4-.7 0-4.3-.6-5.4-.7-1.1-4.2-3.8-5.5-3.7-1.3.1-3.7 1.9-5.8 4-2.2 2.1-2 3.9-5 3.7l-3.1-.1z"></path><path fill="#0c8489" d="M342 269.6s7 1 9.1-.8c2-1.8 4.3-5.3 5.7-6 1.4-.9 2-.9 2-.9l1.6 1.1 1.8 1.5.6 3.4v1.8l-2.2 1.8-4 1.9-4 1.2-3.2-.1-6.7-2-1.7-1.1-.4-.4 1.4-1.4z"></path><path fill="#04534e" d="M352.8 265.5c0-.6.4-.6 1-.6s1 .2 1 .8-.5 1.4-1 1.4c-.6 0-1-1-1-1.6zm2.8 1.8c0-.6.4-.8 1-.8.7 0 1.3.7 1.3 1.2s-.5 1-1.1 1c-.7 0-1.2-.9-1.2-1.4zm-1 4.2c0-.7.5-.8 1.1-.8.6 0 1 .3 1 1a1.2 1.2 0 0 1-1.1 1.2c-.7 0-1-.7-1-1.4zm-3.7-1.3c0-.7.7-1 1.3-1 .6 0 1 .7 1 1.4s-.4 1.3-1 1.3-1.3-1-1.3-1.7zm-5.9.7a1.4 1.4 0 1 1 3 0 1.4 1.4 0 0 1-3 0z"></path><path fill="#8cbebf" d="M355.6 267.3c0-.5.7-.8 1-.8.5 0 .8.4.8.8s-.3 1-.7 1c-.4 0-1-.5-1-1zm-1 4c0-.5.6-.8 1.2-.8s1 .3 1 .8-.5 1-1 1c-.6 0-1.1-.4-1.1-1zm-3.7-1.2c0-.6 1-.9 1.5-.9.4 0 .3.4.3 1 0 .7-.3 1.2-.7 1.2s-1-.7-1-1.3zm1.8-4.7c0-.5.4-.5.8-.5s.6.1.6.7-.3 1-.6 1c-.4 0-.8-.6-.8-1.2zm-7.7 5.1c0-.6.6-1.3 1.4-1.3s1.7.3 1.7 1c0 .6-1 1.8-1.8 1.8-.9 0-1.3-.8-1.3-1.5z"></path><path fill="#231f20" d="M347.7 269.4s-1 .1-1.5.6-.5 1-.3 1.2c.3.2.7-.3.8-.6 0-.2 1-1.2 1-1.2zm4.7-1s-1 .6-1 1.3c-.1.6 0 1 .2 1 .3 0 .5-.9.4-1.2-.1-.3.4-1.2.4-1.2z"></path><path fill="#231f20" d="M353.2 269.3s-.6 0-1 .4c-.5.5-.9 1-.6 1 .3 0 .8-.2.8-.5 0-.2.8-.9.8-.9zm1-5.4-.8.6c-.2.2-.5 1-.2 1 .3.2.5 0 .8-.5.2-.5.2-1.1.2-1.1zm3.5 2.3s-.9 0-1.2.5c-.3.4-.5.8 0 .8.3 0 .4-.2.6-.5.1-.4.6-.8.6-.8zm-.5 4.1s-.2.7-.8 1c-.5.3-.7.5-1 .1-.1-.4.2-.6.4-.7l1.4-.4z"></path><path fill="#04534e" d="M362.8 267.5s.4 2-1.3 3c-1.7.9-6.4 4.2-10.9 3.8-4.5-.4-9.6-3-9.6-3l-.7.4 1.2.5 3.4 1.4 4 1.2 2.5.1 2.1-.2 4-1.3 3.3-1.7 1.8-1.4.4-.6v-1.9l-.2-.3z"></path><path fill="#231f20" d="M274.9 242.2s1 .9 1 1.6c-.2.8-.4 1.1-.7 1-.3-.2-.3-1-.3-1.3v-1.3zm7.7 7.1s-.3 1.4-.9 1.5c-.5.1-.9-.4-.8-.7.1-.2.6 0 .8-.2l.9-.6zm-16.8 1s.4.8 1 1c.8 0 1-.4 1-.6-.1-.2-.4-.2-.8-.2l-1.2-.1zm3 6s.7.6 1.5.7a1.3 1.3 0 0 0 1.3-.7c0-.2-1-.2-1.3 0-.3.3-1.5 0-1.5 0zm5.3 4.4s1.4-.2 1.6-.6c.2-.4.6-1 .3-1.3-.3-.4-.5.5-.7.9-.1.3-1.2 1-1.2 1z"></path><path fill="#8cbebf" stroke="#04534e" stroke-width=".5" d="M282.6 257.1s1-6-4-10.4c-5-4.3-8.1-3.2-9.8-1.6-1.7 1.6-3.2 6.7 2 11.3 5.3 4.5 11.7 3 11.7 3l.1-2.3z"></path><path fill="#0c8489" d="M267.6 250.7s-.1-3.4 1.5-4.4c1.5-1 6.8-1.8 9.3 3.1 2.6 5 2.7 7.4 2 10h-2.7l-4.3-1.8-3.5-2.6-2.3-4.3z"></path><path fill="#04534e" d="M282 258s-.9 1-2.7 1c-1.7-.2-10-2.3-12-9.8v1.7l.1.5.6 1.5 1.7 2.5 2.2 1.9 2.8 1.4 2 .6 2.5.4h1.5l1.3-1.7z"></path><path fill="#04534e" d="M277.7 255.9c0-.7.3-.7.8-.7s1-.2 1 .4c0 .7-.4 1.6-1 1.6-.4 0-.8-.7-.8-1.3zm.3-4c0-.4.4-.8 1-.8.5 0 .9.4.9.9 0 .4-.4.8-1 .8-.5 0-.9-.4-.9-.8zm-3.7 4.4c0-.4.4-.7 1-.7s1 .3 1 .7c0 .3-1 .8-1.5.8-.6 0-.5-.5-.5-.8zm-.4-4.6c0-.6.3-.4.8-.4s1.2.1 1.2.7-.7 1.4-1.2 1.4-.8-1.2-.8-1.7zm-3.4.7c0-.5.3-1.1.9-1.1s1.3.6 1.3 1.1c0 .5-.5 1-1.1 1-.6 0-1.1-.5-1.1-1zm.6-4c0-.6.3-.5 1-.5.6 0 1.1.2 1.1.7 0 .5-.7 1.2-1.4 1.2-.6 0-.7-1-.7-1.5zm3.7-.5c0-.4.5-.3 1-.3.7 0 1.1.4 1.1 1s-.7 1-1.3 1c-.6 0-.8-1.2-.8-1.6z"></path><path fill="#8cbebf" d="M271 248.3c.2-.4.4-.7.8-.7.5 0 .9.1.9.7 0 .4-.4.9-.8.9-.5 0-1-.5-.8-1zm-.6 4c0-.5.2-1 .7-1s1 0 1 .5-.5 1.1-1 1.1-.7-.1-.7-.6zm4.4-4.3c0-.4.3-.4.8-.4s.8 0 .8.5c0 .4-.4.7-.8.7s-.8-.4-.8-.8zm-.9 3.9c0 .5.5 1 1 1s1-.5 1-1c0-.6-.6-1-1-1s-1 .4-1 1zm4.3-.6c0 .5.4.9 1 .9.5 0 .9-.4.9-.9s-.5-.9-1-.9-1 .4-1 1zm-4.1 5c0-.5.5-.9.9-.9s.9.3.9.7c0 .4-.8 1-1.2 1-.5 0-.6-.4-.6-.9zm3.6-.7c0-.5.4-.6 1-.6.5 0 .8.1.8.6 0 .6-.5 1-1 1s-.8-.5-.8-1z"></path><path fill="#231f20" d="M278.7 249.4s.5.7.6 1.3v1.2c-.3 0-.6-.4-.7-.9-.1-.5 0-1.6 0-1.6zm-3.2-3.3s.4.5.4 1 0 1-.3 1-.3-.4-.3-.8l.2-1.2zm-3.7.5s.4.5.4 1 0 1-.3 1-.3-.4-.3-.8l.2-1.2z"></path><path fill="#231f20" d="m270.5 247.3 1 .4c.3.4.5.8.3 1-.1.2-.5-.1-.6-.4l-.7-1zm2.8 3.8s.7 0 1.1.5c.4.3.8.6.5.9-.2.2-.7-.2-1-.5l-.6-.9zm-3.4 0 1 .3c.3.2.4.7.2.8-.1.1-.4 0-.6-.4l-.6-.8zm8.3 2.5.2 1.4c0 .5.1 1-.2 1s-.3-.7-.3-1c0-.5.3-1.4.3-1.4z"></path><path fill="#231f20" d="m277.3 254.9.8.5c.3.2.3.6.1.6l-.4-.5a9.2 9.2 0 0 1-.5-.6zm-3.7.2.9.3c.2.2.3 1 .2 1.1 0 .1-.4 0-.6-.3l-.5-1z"></path><path fill="#04534e" d="M272.1 243.8s-3.2.7-3.8 2.9c-.6 2-.7 4.4-.7 4.4l-.4-2.7.6-1.7 1-1.6 1.4-1 1.3-.4.6.1zm10.2 12.5s.4-.8-.6-3.4c-1-2.5-3-6-3-6l1.6 1.8 1.2 2 .6 1.8.5 1.7v1.6l-.3.6z"></path><path fill="#231f20" d="M285.6 252.2s1.2.7 1.3 1.1c.1.4.2.6-.1.7-.3.1-.8-.4-1-.7a6.5 6.5 0 0 1-.2-1.1zm-4.8 12.8s.6-1 1.3-1.3c.7-.4 1.2-.4 1.4-.1.2.2-.4.7-1 .9l-1.7.6zm8.1 3.1s.8-.4 1.3-1c.5-.5.6-.9.4-1-.2-.3-.8 0-1.1.5-.3.4-.6 1.5-.6 1.5zm-.9-.7s.3-1 .6-1.4c.3-.3.6-.5 1-.3.2.2 0 .6-.2.9a7.8 7.8 0 0 1-1.4.8z"></path><path fill="#8cbebf" stroke="#04534e" stroke-width=".5" d="M301.5 261.2s-5-7.2-12.8-7.6a7.4 7.4 0 0 0-8 7c.2 1.6 2.6 5.2 10.9 5.8 8.3.6 9.6-3.9 10-4.1.3-.2-.1-1-.1-1z"></path><path fill="#0c8489" d="M295.6 256.3s2 1.5 3 2.8c.8 1.2 1 2.2.5 2.3-.5.2-5-4-8.8-4.9-3.7-.9-6.9 0-7.6 1.7s-.4 4.5 1.2 5.6c1.8 1 9.7 2.3 9.7 2.3l3.7-.5 2.3-1.3.5-1.3.6-1.6.2-.7-1.9-2-3.4-2.5z"></path><path fill="#04534e" d="M289.2 257.3c0 .4-.5.7-1 .7s-.9-.3-.9-.7c0-.5.4-.9 1-.9s1 .4 1 .9zm-4.6 1.6c0-.5.6-.4 1-.4.6 0 1 .3 1 .8s-.8 1.1-1.3.9c-.6-.3-.7-.8-.7-1.3zm5 2.7c0-.6.4-1 1-1 .7 0 1.2.4 1.2 1s-.8 1.2-1.5 1.2-.7-.6-.7-1.2z"></path><path fill="#8cbebf" d="M285.8 262.7c0-.5.6-.6 1-.6.5 0 1 .5 1 1s-.5.9-1 .9c-.4 0-1-.8-1-1.3z"></path><path fill="#04534e" d="M292.5 264.5c0-.4.2-.8.7-.8.4 0 1 .3 1 .7 0 .4-.5.9-1 .9a.8.8 0 0 1-.7-.8zm3-2.3c0-.5.3-.4.8-.4s1 .2 1 .8-.6.8-1.1.8c-.5 0-.7-.6-.7-1.2z"></path><path fill="#8cbebf" d="M289 256.9c0 .4-.2.6-.7.6s-.9-.2-.9-.6c0-.5.2-.6.6-.6s1 .1 1 .6zm-2.5 1.9c0 .5-.7.7-1 .7-.5 0-.8-.2-.8-.7 0-.5.3-.6.8-.6s1 .1 1 .6zm1 3.8c0 .4 0 .7-.5.7s-1-.3-1-.7c0-.4 0-.7.5-.7s1.1.3 1.1.7zm4-1.3c0 .4-.7 1-1.2 1-.4 0-.6-.9-.6-1.3s.4-.7.8-.7 1 .6 1 1zm5.8 1.3c0 .4-.7.4-1 .4-.5 0-.8-.5-.8-1 0-.4.1-.8 1-.7.5 0 .8.8.8 1.3zm-3.4 1.7c0 .5-.3.8-.7.8a.8.8 0 0 1-.8-.8c0-.4.4-.6.8-.6s.7.2.7.6z"></path><path fill="#231f20" d="M294.4 262s.8-.3 1.5-.3c.6 0 .6.3.6.4 0 .1-.5.3-.7.2a86.2 86.2 0 0 1-1.4-.4zm-3.3 2.8s.6-.4 1.1-.5c.5-.1.9 0 .8.4 0 .3-.2.3-.6.3l-1.3-.2zm-2.2-5s1.4.6 1.7 1.1c.3.6.4.7.1.9-.3.2-.6-.2-.8-.5l-1-1.5z"></path><path fill="#231f20" d="m288.5 261.6 1.6-.3c.5 0 .6 0 .7.2 0 .2-.1.3-.5.3l-1.8-.2zm-3.4 0s1.2.2 1.5.5c.3.3.3.6.1.7 0 .2-.6.1-.8 0l-.8-1.2z"></path><path fill="#231f20" d="M285 263.3s.4-.7.8-.8 1-.1 1 .1c.1.2-.4.5-.7.6l-1.2.1zm-1-5.1 1.2.3c.4.3.5.6.4.7 0 .1-.5.2-.8 0-.5-.4-.7-1-.7-1zm2.6-3s1.2.4 1.6 1c.4.5.3.8.1.9l-.9-.4c-.3-.3-.8-1.4-.8-1.4z"></path><path fill="#04534e" d="M300 263.7s-2.3 2-7.7 1.9c-5.5-.2-10.4-2.5-11.6-5l.5 1.2 1.2 1.6 3.8 2 4.3.9 3.3.2 3.2-.6 2.5-1.1.4-.7.2-.4zm.8-2.5s-.9-1.2-2.2-2.3c-1.2-1.2-6.2-4.4-6.2-4.4l4 1.8 2.7 2.2 1.8 2-.1.7z"></path><path fill="#231f20" d="M301 256.4s1.4.5 1.6.8l.5.6s-.3 1-.6.6l-.8-.9-.7-1.1zm4-2.2s1.3.5 1.8 1.1c.5.7.4 1.2.2 1.3-.2 0-1-.7-1.2-1a47.3 47.3 0 0 0-.7-1.4z"></path><path fill="#231f20" d="M306.4 254s1.2.8 1.4 1.2c.1.4.5 1 .1 1-.3.2-.9-.4-1-.8l-.6-1.5zm6.8 1.5s1 .4 1 1.2v1.3l-.7-.7v-.7l-.3-1zm1.8.7s.8.7.9 1.2c0 .5.2.8-.3 1-.4 0-.6-.5-.6-1v-1.2zm-12.3 15s.6.2 1.2 0c.5-.2 1-.7.9-1-.1-.4-.4-.7-.8-.2-.4.4-.2.6-.5.8l-.7.3zm6.8 1.8s.9-.2 1.5-.9c.6-.6.9-1 .5-1.2-.4-.2-1 0-1 .5l-1 1.6zm5.5.1 1.3-.9c.5-.4.7-.7.4-1-.3-.5-.6-.2-.8 0l-.2.7-.6 1.2z"></path><path fill="#231f20" d="M316.7 273.1s.8-.9 1-1.4c.1-.5.2-1-.1-1-.4 0-.8.5-.8.9v1.5z"></path><path fill="#8cbebf" stroke="#04534e" stroke-width=".5" d="M299.9 264.1c0-2.4 3.5-8 7.5-8 1.6 0 4.9 1 7.5 2.1 2.2 1 3 2 4.4 2.4 1.5.4 3.7.1 3.7.1l5-.5-4 5.7-1.4 1.2s-1.2 2.4-4.7 3.8c-3.6 1.4-9.5.4-12.2-.3-2.7-.7-6-3.2-5.8-6.5z"></path><path fill="#04534e" d="M299.9 264.1h.2c0-.5.2-1.3.6-2.1a12.2 12.2 0 0 1 2.7-3.8c1.1-1 2.5-1.8 3.9-1.8.8 0 2 .2 3.4.6a29.4 29.4 0 0 1 4.1 1.4c1 .5 1.8 1 2.4 1.5.7.4 1.3.8 2 1a9 9 0 0 0 2 .2l1.8-.1 4.4-.5-3.6 5.2-1.4 1.2v.1a9 9 0 0 1-4.6 3.7c-1.3.4-2.8.6-4.5.6-2.8 0-5.9-.5-7.6-1a8.4 8.4 0 0 1-3.8-2.1 5.7 5.7 0 0 1-1.8-4h-.5c0 1.7.8 3.2 2 4.4a9 9 0 0 0 4 2.3c1.7.4 4.8 1 7.7 1a14 14 0 0 0 4.7-.7 9.4 9.4 0 0 0 4.9-4h-.3l.2.1 1.4-1.3 4.3-6.2-5.6.7h-.1a14.8 14.8 0 0 1-3.4-.1 5.5 5.5 0 0 1-1.9-1c-.6-.4-1.4-1-2.5-1.4a29 29 0 0 0-4.2-1.5c-1.3-.4-2.6-.6-3.4-.6h-.1c-1 0-2 .3-3 1a11.2 11.2 0 0 0-3.3 3.5 8.3 8.3 0 0 0-1.4 3.7h.3z"></path><path fill="#0c8489" d="M324 264.9c-.4.3-1 .3-1.4.3-.5 0-11.6-6.7-15-6.4-3.5.3-6.8 1.7-6.9 5.3 0 3.5.8 3.5 1.5 4.5s7.5 2.5 7.5 2.5h4.1l3.3-.4 3-1.6 1.5-1.3 1.1-1.3 1.3-1.6z"></path><path fill="#04534e" d="M306.5 263c0 .8-.3 1.3-1 1.3-.6 0-1.1-.3-1.1-1s.4-1 1-1c.7 0 1 .1 1 .8zm1.1-3c0-.6.6-.8 1.2-.8.7 0 1.2.2 1.2.8 0 .6-.5 1-1.2 1-.6 0-1.2-.4-1.2-1zm6.7 1.8c0-.5.4-.9 1-.9.5 0 .9.4.9 1s-.4.8-1 .8a1 1 0 0 1-1-.9zm1.3 4c0-.6.5-1 1-1 .6 0 1.2.2 1.2.8s-.2 1.3-.8 1.3c-.6 0-1.4-.4-1.4-1zm-3.2 2.7c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1 0 .5-.5.9-1 .9-.7 0-1.2-.4-1.2-1zm-6-1c0-.6.3-1 .9-1a1 1 0 1 1 0 1.9 1 1 0 0 1-1-1z"></path><path fill="#8cbebf" d="M306.4 263c0 .5-.4 1-1 1a1 1 0 0 1-1-1c0-.6.4-.8 1-.8s1 .2 1 .7zm3.3-3.2c0 .5-.2.9-.8.9-.5 0-1.3-.4-1.3-.9s.5-1 1-1c.6 0 1 .5 1 1zm6.4 1.7c0 .5-.4.9-1 .9s-.9-.4-.9-.9c0-.4.4-.8 1-.8s.9.4.9.8z"></path><path fill="#04534e" d="M312.7 264.2c0 .7-.3 1.2-1 1.2-.6 0-1.1-.3-1.1-1s.3-1 1-1 1 .2 1 .8z"></path><path fill="#8cbebf" d="M308 267.2c0 .5-.4 1-1 1s-1-.5-1-1 .6-.8 1.2-.8.8.3.8.8zm4.5-3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zm5.2 1.3c0 .6-.3 1-1 1-.6 0-1.1-.4-1.1-1s.2-.8.8-.8c.6 0 1.3.2 1.3.8zm-3.3 2.7c0 .6-.4 1-1 1s-1.1-.4-1.1-1c0-.5.5-.8 1-.8.6 0 1 .3 1 .8z"></path><path fill="#231f20" d="M314.8 265s1.6-.2 1.9 0c.3.4.3.8.1 1-.1 0-.8.1-1-.1 0-.3-1-1-1-1zm-1.7-5.4s1.3.3 1.8.9c.5.5.4 1 .4 1.1-.2.1-.6.2-1-.2l-1.2-1.8zm-3.7 2.6s1.5.8 1.8 1.3c.3.4.4.8.2 1-.1.2-.8 0-1-.3 0-.3-1-2-1-2z"></path><path fill="#231f20" d="M308.7 263.3s1.7.2 2 .5c.5.4.8.4.8.6 0 .3-.3.4-.5.4a3.6 3.6 0 0 1-1.2-.5l-1-1zm-1.9-4.8s1.7.2 2 .5c.4.3.5 1 .1 1.2-.4.2-.8-.2-1-.5a8.2 8.2 0 0 0-1-1.2zm-3.6 2.5s1.5.8 2 1.4c.3.4.5.7 0 1-.4 0-.9-.7-.9-1a9 9 0 0 0-1.1-1.4z"></path><path fill="#231f20" d="m302.8 263 1.5-.2c.5 0 1.2-.1 1.2.2 0 .4-.6.5-1 .4l-1.7-.4zm8.6 5.6s1.1-.7 1.7-.6c.5.1.7.1.7.4 0 .4-.7.3-.9.3l-1.5-.1zm-6-.9s.4-.6.9-.7c.4 0 .6 0 .7.2 0 .2-.4.6-.6.6h-1z"></path><path fill="#04534e" d="M322.6 266.6s-1.6 2-4 3a14 14 0 0 1-7.2 1.1 15.2 15.2 0 0 1-11.2-5.2l.4 1.1 2 2.6 2.3 1 3.5 1 3.3.3h2.5l3-.5 1.9-.7 1.3-.8 1-.8 1.2-2zm-3-5.9s-1 .3-3-.9-4.3-2.8-8.8-2.8c-4.5 0-5.9 3-6.2 3.2l2-2.6 2-1.1 1.7-.3h1.5l2 .6 1.7.6 2.1.7 1.8 1 2.2 1.1 1 .5zm6 1.4h-3.4c-.8 0-.8.2-1 .4a4 4 0 0 1-.2.4l-.8-1.7 3.5-.5 2 .7-.2.6z"></path><path fill="#0c8489" stroke="#04534e" stroke-width=".5" d="M320.7 280.4c.2.5.6 1 1.1 1h1.6l3.6-.3 1.2-1.4.8-3.2 1-1.2 3.3-1.9 2.8-.8 1.9-.2 2.5-.8 1.9-1 .8-1.2.8-1.8-.8-2.5-2-2.7-3.4-1.3H335l-3 1.1-5.5 1.3s-3 1.3-4.3 3.7c-1.3 2.3-1.2 3-1.5 6-.2 3.2 0 7.2 0 7.2z"></path><path fill="#8cbebf" d="M322.2 279.2c1 0 .2-1.7 1.4-3.8 1.2-2 2.6-4.6 3-4.6s.4.4.9.3c.4-.2 1.2-.8 1.2-1 0-.2 0-1.3 1-2 .8-.8 2.1-1.9 2.7-2 .6-.1 1-.3 1 0 .1.3-.3.7.1.8.4.2 1.4.1 1.6-.5l.2-1s.6-.5 1.8-.3c1.2.3 1.3.2 1.4.7.1.4-.5.5-.4.8v.6c.2.2.4 1 1.2 1 .8-.1 1.1-.6 1.1-.6l.3-.4s.2-.5-.1-.7c-.3-.2-.2-.4 0-.3.4.1 1.6 1.8 2 1.1.4-.7.5-1.7.2-2a91.2 91.2 0 0 1-1.9-2.7l-3-1-4 .3-4 2.2-3.6 2s-.2 2.9-.8 2.3c-.7-.5-1.6-2-1.9-1.5-.3.5-.9 2.7-1.3 3.8-.3 1-1.4 4.4-1.3 5.6.1 1.2.8 2.9 1.2 2.9z"></path><path fill="#8cbebf" d="M325.8 274.4c-.3 0-.7.3-.8.5-.2.2-.3.5-.2 1 0 .3.7.7.7.7h.5l1-.3.3-.8c0-.5-.3-.6-.4-.6a29 29 0 0 1-1.1-.5zm6.2-5c-.6-.3-.8.1-1 .3v.5s.2.8.4 1c.3 0 1.1.3 1.3 0 .3-.2.5-.4.5-.9s-.7-.7-.7-.7l-.5-.3zm5 1.1c0-.2-.5-.3-.9-.2-.3 0-.7.4-.6 1 .2.7.8.7 1.2.6.5-.1.4-.8.4-.9l-.1-.5zm-14.4 1c0 .3.5 1 1.2.9a1.3 1.3 0 0 0 1.2-1c0-.4-.4.3-1 .5s-.7.2-1 0c-.2-.4-.4-.4-.4-.4z"></path><path fill="#04534e" d="M327.3 275.5s0 .6-.4 1c-.5.3-.8.3-1 .3-.3 0-.6 0-.8-.3l-.3-.7s.5.8 1.3.6a2 2 0 0 0 1.2-.9zm13.3-8.3s0 .6-.5.9c-.5.3-.7.3-1 .3-.2 0-.6-.1-.7-.4-.6-1-.3-1.5-.3-1.5s.4 1.6 1.3 1.5a2 2 0 0 0 1.2-.8zm-11.9 2.9s-.4 1.2-1.2 1.2c-.9 0-.8-.2-.7-.4 0-.1.3.2.7 0 .4 0 1.2-.8 1.2-.8zm2.3-.3s0 1 .2 1.2c.3.4.7.5 1 .5s.6 0 .9-.4.1-.8.1-.8l-.2.5c-.3.3-.5.3-.8.3s-.7 0-.8-.3l-.4-1zm4.3-4.3s.2.7-.3 1.2c-.5.6-1.5.2-1.5.2s.8.3 1.2-.2c.4-.4.6-1.2.6-1.2z"></path><path fill="#04534e" d="M321.7 281.1s5.3 0 5.7-.8c.4-.7-.4-3.6 2.7-5.8 3.2-2.2 5.7-2.2 7.4-2.3 1.7-.2 5.3-1.3 6-4.5.3-2-2.3-2.2-3.3-4-1-2-3.6-1.2-3.8-1.2-.1 0-3 0-4.3 1.3-.9.8-.8 1.8-1.1 2.2-.4.5-4 0-4.3.6-.4.6.1 1.7-.2 2-.2.3-1-.8-1-.8l.2-2.8 4.5-2.6 5-2.8 3.5.1 3.5 1.8 1.7 2s.3.8.5 2.3a5.3 5.3 0 0 1-.2 2c-.8 2.8-3.7 4.8-6.7 5a14 14 0 0 0-7 2.5c-1.4 1-2.1 5.3-2.1 5.9 0 .5-6.6.1-6.6.1v-.2z"></path><path fill="#231f20" d="M324 270.8c-.3.3-.7.2-.8 0-.2-1 .3-2.2.3-2.2v1.6c.1.2.4.1.5.3v.3zm3.2-.6c-.2-.1-.1-1 0-1.3.2-.3 1.7-1.4 1.7-1.4l-.6 1.5c-.2.4-.7 1.3-1 1.2zm-1.2 5.3c-.3 0-.3-.4-.3-1s1-1.6 1-1.6l-.4 1.2.2 1c0 .3-.3.4-.5.4z"></path><path fill="#231f20" d="M328.4 274s-.5.6-1 .9c-.5.3-1.1.7-1.4.6-.4 0 .1-.8.3-.9l2.1-.6zm4.5-6.4s-.6.5-.9 1.2c-.3.7-.4 1.3-.1 1.4.3.2.7-.8.8-1.1l.2-1.5z"></path><path fill="#231f20" d="M334.6 269.9s-.5-.4-1.2-.6c-.8-.2-1 0-1.2.2 0 .2-.6.5-.3.7.2.2.6-.3.8-.3.2-.1.5-.3.9-.2l1 .2zm-1-4.5c.3.3.7-.2 1-.6.4-.4.7-1.2.7-1.2l-1 .7c-.4.3-.9 1-.7 1.1zm6.9-.1s-1 .4-1.2.8c-.3.4-.7.8-.4 1 .3.3.6-.2.8-.5l.8-1.3zm-2 4.6s-.3.6-.9 1c-.5.4-1.2.5-1.3.3-.1-.2.1-.6.3-.7l.8-.2a7.3 7.3 0 0 0 1.1-.4z"></path><ellipse cx="328.8" cy="207.4" fill="url(#mx-b)" rx="2.9" ry="4.3" transform="rotate(8.7)"></ellipse><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m295.4 247-1.7 4.2 1.4-.2.7-3.8z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M296.1 245.1c-.6 0-1.1.4-1.2 1 0 .7.4 1.3 1 1.4.6 0 1.1-.4 1.2-1 0-.7-.3-1.3-1-1.4z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m369.7 255.8-4.2 4 1.7.4 2.9-3.8z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M371.6 254.1a1.5 1.5 0 0 0-2 .6c-.5.7-.3 1.5.4 2 .7.3 1.6 0 2-.7.4-.6.2-1.5-.4-1.9z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".3" d="m262.8 233 2.2 4.9 1-1.4-2.6-3.7z"></path><path fill="#fcca3e" stroke="#aa8c30" stroke-width=".2" d="M261.9 230.9c-.6.4-.6 1.3-.1 1.9.4.6 1.3.7 1.8.2.6-.5.6-1.3.1-2a1.3 1.3 0 0 0-1.8-.1z"></path><path fill="#aa8c30" d="M296.6 245.3s.3.1 0 0c-.5 0-1.4.4-1.4 1a1 1 0 0 0 1 1c.5 0-.2.2-.2.2l-.7-.2-.2-.4-.2-.5.1-.6.4-.5.5-.2h.3l.4.2z"></path><path fill="#aa8c30" d="M295.6 248.1s-.3 0-.5.3a49.4 49.4 0 0 1-.7 1.1l1-2.3.4.2-.2.7zm76.4 6.4s.3.4-.1 0c-.4-.3-1.8-.2-2.1.5-.4.8 0 1.4.6 1.7.6.2-.2 0-.2 0l-.7-.5-.1-.6v-.7l.5-.6.7-.3h.7l.3.2.4.3z"></path><path fill="#aa8c30" d="M369.4 257.3s-.3-.2-.8 0l-1.4.9 2.3-2.2.5.6-.6.7zm-107-26.7s.4-.1 0 .1c-.5.3-.8 1.4-.3 2 .6.5 1.3.4 1.7 0 .4-.5 0 .2 0 .2l-.7.4h-.6l-.6-.3-.4-.6v-.8l.2-.5.3-.3.3-.2z"></path><path fill="#aa8c30" d="M264 233.8s-.3.1-.2.6l.3 1.5-1.2-2.7.7-.2.4.8z"></path><ellipse cx="337.6" cy="-128.1" fill="url(#mx-c)" rx="4.6" ry="3.1" transform="rotate(62.9)"></ellipse><path fill="#e92736" d="M262.6 241.2s1 .2 1.5 0 .6-.7.7-.8.3-.6.2-1a3.8 3.8 0 0 0-1-1.4l-1-.1c-.1-.1 0-.4-.2-.5-.3 0-1.7 1.6-1.5 1.8.3.3.4 0 .5.1v1.1c0 .3.8.8.8.8z"></path><path fill="#e92736" d="M264 238.1c.1.3.7 1 .9 1 .2.2.8.2 1 0 .3 0 1-.7 1-1a1.5 1.5 0 0 0-.1-.7c-.2-.3-.1-1-.4-1.1-.2 0-.3-.1-.5-.3v-.7c-.3-.3-2.6 1.1-2.4 1.4.2.2.4 0 .5.1v1.3z"></path><path fill="#e92736" d="M269.2 237.6c.2-.4.1-1.5-.1-1.8s-.6-.3-.7-.4c0-.1.3-.2.3-.5s-2.6.1-2.4.4c.2.3.6.1.6.3 0 .2-.4.4-.5.6l.3 1.1c0 .2 0 .4.2.5l.6.2h1.4c.1-.1.2-.1.3-.5zm22 12.8s.3.7.8 1h1l.6-.5c.2-.2.4-1.2.3-1.4 0-.2-.5-.6-.5-.8 0-.2.3-.2.2-.4-.1-.2-2-.2-2 .2 0 .3.3.2.2.3 0 .2-.5.5-.6.7-.2.1 0 1 0 1z"></path><path fill="#e92736" d="M293.8 249.5c0 .2-.2 1 0 1.1 0 .2.3.7.5.8h1.2a1.2 1.2 0 0 0 .4-.6c.1-.3.6-.7.5-.9-.1-.2-.2-.2-.1-.4 0-.2.3-.2.3-.5s-2.1-1-2.2-.7c0 .3.3.2.2.4 0 .2-.7.6-.8.8z"></path><path fill="#e92736" d="M297.3 252.5c.3-.2 1-.9 1-1.1 0-.4-.3-.6-.2-.7l.5-.1c.1-.2-1.6-1.6-1.7-1.3 0 .3.3.4.2.5l-.7.1c-.1.1-.5.6-.5.8 0 .2-.3.2-.2.5l.2.4c.1.2.8.9 1 .9h.4zm66 5.5s0 .8.4 1.2c.3.3.6.3.8.4h.7a3 3 0 0 0 1-1c0-.3-.3-.8-.2-1s.3 0 .3-.2c0-.3-1.6-1.1-1.7-.8-.1.2.2.3 0 .4l-.8.2c-.2 0-.5.8-.5.8z"></path><path fill="#e92736" d="m366 258.5-.8.8c0 .2 0 .7.2.8 0 .2.7.6 1 .5.1 0 .3 0 .5-.2.2-.1.8-.2.8-.4l.1-.4c.1-.1.4 0 .6-.2.2-.2-1.2-1.7-1.4-1.5-.2.2 0 .3 0 .4-.2 0-.9 0-1 .2z"></path><path fill="#e92736" d="M366.4 262.2h1.4l.4-.5c.1 0 .1.2.4.2.2 0 0-2-.3-1.8-.2.1-.1.5-.2.4-.2 0-.3-.3-.5-.3a2.4 2.4 0 0 0-1 .1s-.2 0-.3.2l-.2.4v1c.1.2 0 .2.3.3z"></path><path fill="#f7e204" d="M264.2 239c.2.4-.1 1.2-.3 1.4-.1.2-1.3-.1-1.3-.3 0-.2-.1-.6 0-.8.2-.2.6-.7.9-.6.3 0 .6.3.7.4zm.3-1.3c-.2.3 0 .6.2.7.1.2 1 .4 1.2.3.2-.2.6-1.5.4-1.7-.2-.2-.6-.2-.7-.2-.2 0-1 .6-1.1.9zm2.7-1.3v.7c.2.1.7.5 1 .5.3 0 .5-1 .5-1.1 0-.2-.1-.3-.3-.4l-1.2.2zm26.1 13.7c0 .4-.7.7-.9.7-.2 0-.7-1-.6-1 .1-.2.3-.5.5-.5s.7 0 .9.2l.2.7zm1.1-.6c-.2.1-.3.4-.3.6 0 .2.3.8.5.9.2 0 1.2-.5 1.3-.7 0-.2-.2-.5-.4-.6l-1-.2zm2.4 1c-.2 0-.4.3-.4.5 0 0 0 .6.3.8.2.2.8-.2.9-.3v-.4c0-.2-.8-.6-.8-.6zm68.6 8.2c-.2.2-.9.2-1 0-.3 0-.3-1-.1-1 .1-.1.4-.3.6-.2.2 0 .6.3.6.6l-.1.6zm1 .1c-.3 0-.5.1-.6.3-.1.1-.2.7 0 .9.1.1 1.2.2 1.3 0v-.5l-.7-.7zm1 2h-.5c-.1 0-.4.4-.4.7 0 .2.7.3.8.3l.3-.2-.1-.8z"></path><ellipse cx="438.6" cy="-93" fill="url(#mx-d)" rx="2.2" ry="4.5" transform="rotate(47.9)"></ellipse><path fill="#a8ac71" d="M285.8 199.3s-3.8.3-6.5-.1-2-7.3-2.1-7.5c0-.2-1.6-1.8-1.4-3.3.3-1.5 5.2-5.5 5.8-5.8.5-.1 1.5.3 1.5.3s1.2-1.2 1.6-1.2c.4 0 .9.7.8 1-.2.3-1.9 1.3-2 2-.2.8 0 1.5-.5 2.3-.5.7-1.4 1.7-1.5 2.4-.1.6-.4 1.1 0 1.4.5.2 2.1 0 3.5-.6 1.4-.7 2-1.5 2.1-1.4.2 0-.8 1.7-2.3 2.4-1.5.6-2.5 1.3-3.3 1.2 0 0-.8 2 1.8 2.2 2.6 0 4-.6 4-.6l-1.5 5.3zm-15 16s2 .8 2 3-2.1 4.1-2 8c0 4 .6 4 5.8 8.3a5.7 5.7 0 0 1 1.6 2.5c.3 1.3 1.2 8.9 6.2 8.9s5.8-3.3 5.8-3.3l-2.2-3.1s-1.7.5-2.7.3a3.4 3.4 0 0 1-2.3-2.1c-.6-1.2-.7-4.1-1.6-5.4-2-3.2-5.8-3.7-5.9-7 0-3.4 2.3-3.7 1.7-7.7-.7-4-5.4-5.8-5.4-5.8l-1.9-.8-.7 4 1.6.2z"></path><path fill="#f1a720" d="M284.7 187.6c1.7-.4.7-4.8.7-4.8l-1.2 1s.8 1 .8 2-.3 1.8-.3 1.8z"></path><path fill="#a8ac71" d="m287.8 231.5-.9-.7c-.6-.4-3.2-2.6-2.8-8.9.5-7.2 11-11 11.6-13.8.8-3.2 3.1-4.5-5.2-11l-2 2.2 3.5 2.6s.7-.4.8.6c0 1-1 1.7-1.2 2.5-.2.7-5.4 4.3-5.8 4.6l-3 2.4s-1.3 1.3-2.5 4.1c-1.3 2.8-.7 6.4-.7 6.4s0 7.6 8.2 9z"></path><path fill="#78732e" d="m282.7 235.5.6 2.7-1.7.6h-.7l-.5.2-1.3 1.2h-.3s-.2 0-.3-.8c0-.8-.2-1.5-.2-1.5l1.6.7h.6l.3-.1.7-1.5 1.2-1.5zm-4.8.5-.8-1-1-.9 1.2-.6h1.2l-.2 1.5-.4 1zm2.7-4.3s.8.3 1 1l.6 1.2-2-.2-1.4-.4 1-1.4.8-.2zm-.7 11.9s-.4-.3-.7-.9l-.4-1.6 1.3-.3 1.5.7h.4l-.3.8-1.5 1.3h-.3zm5-4.1s-1-.4-1.2-1c-.2-.5-.4-.4-.4-.4l-.3 1.5-.5 1.5.2.2 1.1-.3.9-.9.3-.6zm-4.7 4.8 1.4.7c.8.5 1.2.5 1.2.5l.6-.6.7-1.3v-.1l-3 .3-.9.5zm4.4-1.2 2.7-1.6.1-1.4-.5-.4h-1.5l-.5 1.8-.3 1.6zm-1.8 2.5s1.8.8 5-.4c1.4-.5 1.7-1.2 1.7-1.2l-1.3-.5-1.2 1-4.2 1zm-2.5-20.3-.4-1.4c-.2-.8-.1-1.1-.1-1.1l.9.5 1.3 1-1 .7-.7.3zm2.2 3.7-.9-1a12.4 12.4 0 0 1-.6-1.2l1 .2 1.1.6-.5 1.4h-.1z"></path><path fill="#c6c7a6" d="M276.6 187c-.2.7-.4 1.9.5 2 .4.2 2.3 0 4.5-2.4 1-1.2 1-2.4 1-2.4l.5-1.3s-.9-.6-2.2.2c-1.3.8-4.3 4-4.3 4z"></path><circle cx="282.5" cy="183.6" r=".4" fill="#1c242f"></circle><path fill="#a8ac71" d="M279.7 184a17.7 17.7 0 0 0-1.7 1.7s1.4-.4 2.6-1.5c.6-.6 2-.8 2.6-.7.4.1.2-.4 0-.5-.3-.3-1.4-.4-1.6-.3l-1.9 1.3z"></path><path fill="#78732e" d="M284.1 224.5v-2.2l-.9.8-.8 1.1 1.3.5.4-.2zm-4.5-2.6v-2.3c0-1 .5-3.1.5-3.1l.6 1.4 1.5 2.4.5.4-1.3 1-1.4.4-.4-.2zm4.5-.6.3-1c.1-.6.5-1.4.5-1.4v.1a25 25 0 0 0-2 1.7l.8.7h.5m-3.7-6s.2-.6 1-1.5l1.3-1.8.6 2.4.4 2v.4l-.7.2c-.2 0-1.6 0-1.8-.3l-.8-1.3zm4.8 2.9.8-.9 1-1-3.2.6.5 1 .8.3zm-2-6.7s.3 0 1.2-1c.8-.8 1.3-.7 1.3-.7l.3 3.4-1.6-.5-1.2-1.2z"></path><path fill="#78732e" d="m287.3 216.2 2-2-3.3-1 .6 2.3zm1.4-5.2.2-3.3s-.7.3-1.5 1l-1.2.9.4.6 1 .7h1zm2.8-3.2V205s-.5.8-1 1.2l-.9.8.9.6h1zm1.2 3.5 1.6-1.3a6.5 6.5 0 0 0 1.5-1.7l-4.2-.3.2 1.7 1 1.6zm-9.6-13.8-.2 1.8h3.5l-.9-1.2-1-.6-1-1zm6.6 16.2c.2 0 1.1-.8 1.6-1.2.4-.5 1.2-1 1.2-1l-3.3-.3v2.2l.5.3zm6.3-5.9s.4-1.3.3-2.6c0-1.2-.2-1.8-.2-1.8l-2.5 1.7.4 1.2 1 1 1 .5z"></path><path fill="#78732e" d="M291.8 204.8s.7-1 .8-1.4v-.4h2l1.1.2h.2l-.9 1.1-1.2.7-1.5.2-.5-.4zm4-2-1.3-2c-.4-.7-.8-1-.8-1l-1 2.7v.3h3z"></path><path fill="#fff" d="m271.6 222.2-.3.8s1.3-.7 2.3-.7c1 0 2.1 1.3 2.1 1.3l.2-.9s-1.3-1.3-2.2-1.3c-.8-.1-2 .8-2 .8zm.7-5.8.3.4c0 .1.1-1 1.4-1.5 1.4-.6 2-.1 2-.1s-.2-.8-.8-1c-.6-.1-1.1 0-1.8.5a3.7 3.7 0 0 0-1.1 1.7zm4.4 4.4s-.6-1.4-1.6-1.6c-1.1-.3-2.5.5-2.5.5l-.2.7s1.5-.8 2.5-.4c1.1.5 1.5 1.7 1.5 1.7l.3-1zm-5-5.1.4.5s-.2-1.4.5-2.1a4.9 4.9 0 0 1 1.1-1l-.6-.3s-.9.5-1.2 1.1a3.2 3.2 0 0 0-.2 1.8zm-.5-2.3c.3-.8 1.2-1 1.2-1l-.3-.3h-.5s-.5.3-.9 1c-.3.9-.3 2-.3 2l.6.3s-.1-1.4.2-2zm7.8-19.2c.9-.4 1.5-.3 1.5-.3s-1.3 1.3-.7 2.9c-.7 1.3-.9 2.3-.9 2.3h.7l.4-1.8c.8 1.3 2 2 2 2h1s0-1.3.4-2.4h.1a5 5 0 0 0 2 1.5v-.4s-1.1-.6-1.7-1.5l-.1-.1a4.2 4.2 0 0 1 1.8-1.7l.7.6.2-.2-.5-.7h-.6l-1.8 1.7a9.2 9.2 0 0 1-.8-1.5l-.4-.2s-1.1.1-2 1.7c-.2-1.2 1.1-2.4 1.1-2.4v-.5l-2.4.6c-1 .3-1.7 1.2-1.7 1.2v.8s1-1.1 1.7-1.6zm1.5 2.2c.6-1 2-1.5 2-1.5s0 .7.7 1.7c-.5.9-.8 2.2-.8 2.2s-1-.6-1.9-2a1.6 1.6 0 0 1-.2-.3l.2-.1zm-7.6 21.1v.8s.8-.9 2-1c1.2 0 2.3 1 2.3 1s0-1-.2-1.2c-.1 0-1.1-.6-2-.6s-2.1 1-2.1 1zm21.4-11.2-.5-1 .6-.3a12.5 12.5 0 0 0 1.7-1.6l-.4-.6h-1.6l-1.4-.1.5-1.7.6-1.4-.6-.5s.2.5-.8.6c-1 .1-2.8-.8-2.8-.8v.4l2.5.7c.6 0 1-.1 1.2-.3l-.5 1.3-.3 1 .2.2v.8l1.4.1 1.6.1s-.8 1-1.7 1.5a2.3 2.3 0 0 1-.3 0l-1-1.5-.1.5.7 1.2a5 5 0 0 1-1.5-.1l-.4.4v2.5l-1.8-.6-.3.3v-.1l-.4.4s-.4 1.4-.3 3.1v.1a4.9 4.9 0 0 1-2.4-1.3l-.4.3s-.3 1.4 0 3.2c-1.3-.3-2.5-1.5-2.5-1.5l-.5.5a60 60 0 0 0 .7 4.7 4.9 4.9 0 0 1-.7 0c-1.4 0-2.3-1.3-2.3-1.3l-.4 1s.6 2.7 2 4l.4.2c-1.3 1-2.8 1.2-2.8 1.2v.9a44.7 44.7 0 0 0 2.2 1.5 4.8 4.8 0 0 1-1.6 1l.2.5 1.8-1.3 1.8.5v-.5l-1.5-.3.1-.1c.5-.4 1.4-1.8 1.4-1.8v-1s-.5 0-1.1-.6c1.8-1.2 1.9-1.8 1.9-1.8l.4-.6s-.7-.3-1.1-1.2l2.9-.7.2-.2s-.7-1.2-1-2.6l3 .6.4-.4-.5-2.4c1.8 0 3.2.2 3.2.2l.3-.3s-1-1.9-1-3a4.8 4.8 0 0 0 1 0h3l.3-.5s-1.4-1-1.7-1.5zm-10.5 15.5s-.5 1-1.4 2l-.2.2a4.6 4.6 0 0 1-.5-.2c-1.1-.6-1.4-1.3-1.4-1.3l2.5-1.6 1 .9zm.9-3.2-2 2a4.1 4.1 0 0 1-.4-.5c-.8-1.2-2-2.1-1.8-3.8 0 0 .7 1.2 2.2 1a14 14 0 0 0 1-.1c.4 1 1 1.4 1 1.4zm2-2.5-2.7.7a5.3 5.3 0 0 1-.1-.5c-.5-1.6-.5-4-.5-4s1 .8 2.6 1.2l.7 2.6zm-.5-3c-.2-1.4.1-2.9.1-2.9s.8.8 2.3 1c.1 1.5.3 2.1.3 2.1l-2.7-.1zm5.8-2.2s-1 .4-2.8.1a15.3 15.3 0 0 1 0-.5 23 23 0 0 1 0-3l2.3.7a10 10 0 0 0 .5 2.7zm0-3.1h-.2V205s1 .3 1.7.2c.2.4 0 .5.5 1.2.4.7 1.1 1.3 1.1 1.3s-2.3.2-3.2 0zm-7.6 18.6-.1-.5s-1 .7-1.2 1.4a1.6 1.6 0 0 1-.3-.1l-2-.8.2.4 1.8.8h.2l-.5 1.4.2.3.5-1.7 1.2.1-.2.8-.4 1.5.5.3h2l-.3-.4-.7-.1h-1.1l.3-1.2.3-.8-.3-.7-1 .2a3 3 0 0 1 .9-.9zm-11.3-1.3c1.3 0 2.3.9 2.3.9v-.6s-1-1.4-2.1-1.4c-1.2 0-2.5 1.2-2.5 1.2v1.2s1-1.3 2.3-1.3zm13.3 19.4c-1.3.6-2.7.6-2.7.6l.8-1.5c2.5-.8 3-2.4 3-2.4l-.2-.7s-.6 1.6-2.6 2.4c.4-1.2.7-3.2.7-3.2l-.7-.2s-1 1.3-2 1.6a7.7 7.7 0 0 0 .8-2.7l-.3-.5s-.7.6-1.7.8a1.8 1.8 0 0 1-.6 0c.6-.8 1.7-3.2 1.7-3.2l-.2-.5s-.8 2.1-1.7 3.2a10.6 10.6 0 0 1-.3.4c-1-.3-2.2-1-2.2-1l.1.3s.8.6 1.8 1a27.3 27.3 0 0 1-1.3 1.2v1l3 .4c-1 1.6-2 2.1-2 2.1l.5.7s1.3 0 3.7-.6c-.6 1.2-1.2 1.8-1.2 1.8s2.2.2 3.7-.6 2-1.6 2-1.6l-.4-.4s-.4 1-1.7 1.6zm-6.9-4 1.2-1.5c1.6.3 2-.1 2-.1s.3.8-.6 2.3c-1.1 0-2.6-.8-2.6-.8zm1.4 3 1.3-1.6.3-.3c1.5 0 2.3-1.3 2.3-1.3s.2 1.2-.5 2.7c-1.9.7-3.4.5-3.4.5zm-1.9-9.8c1.5 0 3.3.7 3.3.7l-.2-.7-2.9-.6a3.6 3.6 0 0 1 1.6-1.6l-.5-.3s-.6.1-1.4 1.5a4.1 4.1 0 0 0-.2.4 4 4 0 0 0-.3 0 5 5 0 0 0-2.4.7l.2.4s1.1-.5 2.3-.5a25.7 25.7 0 0 0-.7 2.4l.3.6 1-3zm-3-6.2-.3-.7s-1.5-.6-2.7 0c-1.1.5-2 1.9-2 1.9l.5.9s.8-1.5 1.9-1.9c1-.3 2.6-.2 2.6-.2zm3 2.4-1-.6s-1.7.5-2.2 1.1c-.6.6-1.1 2.1-1 2.5.2.5.7.7.7.7s.3-1.5 1.1-2.3c.8-.8 2.4-1.4 2.4-1.4zm-3.9-.5a4.5 4.5 0 0 1 2-1l-.7-.5s-1.5.2-2.2.9c-.8.7-1.8 2.1-1.8 2.1l.9.9s1.2-1.8 1.8-2.4zm5.2-44.7v-.1c.8-1 1.6-1 1.9-1h.6a9.3 9.3 0 0 0-.8 2.5c-.2 1-.7 1.2-1 1.9-.4.7-1.1 1.8-1.2 2.8 0 1 .3 1.6.5 1.7.3.1.8-.4.7-.7 0-.3-.3 0-.4 0-.2 0-.2-.3-.3-.9-.1-.6.7-2.2 1-2.8.3-.5 1-1.1 1-2l.7-2.5c0-.1-.4-.2-1.3-.3-.6 0-1.5.5-1.9 1.2-.4.6-1.7 1.1-1.7 1.1s1.4 0 2.2-1z"></path><path fill="#78732e" d="M285.2 194.5h-2.5l.7 2zm-3-.1-.5-.4a1.5 1.5 0 0 0-.3-.3l-.9.5-.5 1.9.3.3 2-2zm-.3 5-1.8-2.7-1 2.2.5.2 1.2.2h1.1zm7.4 44.7a9 9 0 0 1-4.8 1.5 6.7 6.7 0 0 1-3.4-1 4 4 0 0 1-1.5-1.7c-.6-1.1-.8-2.5-1-4-.3-1.3-.5-2.6-1.1-3.6-.8-1.3-2.4-2.1-3.8-3.3a7.3 7.3 0 0 1-2.8-5.2 8.1 8.1 0 0 1 0-.8c0-1.7.5-3.2 1-4.5s1.2-2.5 1.2-3.5v-.5c-.3-.7-1-1.4-1.5-1.9s-1.2-.8-1.2-.8l-1-.2-.1.3 1 .2v-.1.1l1.3 1c.5.4 1 1 1.1 1.5a1.9 1.9 0 0 1 0 .4c0 1-.5 2-1 3.3a11.7 11.7 0 0 0-1.2 4.7v.8a7.7 7.7 0 0 0 3 5.5c1.5 1.1 3 2 3.7 3.2.8 1.2 1 3 1.3 5 .2.8.4 1.7.8 2.5s.9 1.5 1.6 2a7 7 0 0 0 3.7 1c2.7 0 4.9-1.6 4.9-1.6l-.2-.3z"></path><path fill="#78732e" d="M287.2 239.2a2.6 2.6 0 0 1-1.3.4c-.5 0-1.1-.2-1.7-.8a4 4 0 0 1-1.2-2.3c-.2-.9-.3-2-1-3.3-.5-1.5-2-2.6-3.5-3.7-1.3-1.1-2.6-2.2-2.9-3.4a3.3 3.3 0 0 1 0-.7c0-1 .4-2 .8-3.1a10.8 10.8 0 0 0 .9-4.8c-.2-2-1.7-3.5-3.2-4.5a14.1 14.1 0 0 0-2.8-1.4l-.1.3h.2c.5.3 1.8.9 3 1.8 1.3 1 2.4 2.2 2.6 3.8v.8c0 1.5-.4 2.7-.9 3.9s-.9 2.2-.9 3.2l.1.8c.3 1.3 1.6 2.4 3 3.6 1.5 1 3 2.2 3.5 3.5.6 1.3.7 2.4.9 3.2.2 1 .4 1.7 1.2 2.5.7.7 1.4.9 2 .9a2.8 2.8 0 0 0 1.4-.4l-.1-.3z"></path><path fill="#a8ac71" d="M296.4 231.6s1.7.4 1.6 1.8a13.3 13.3 0 0 1-.8 3.4l-2.4-2.2 1.3-1.2.5-.7-.2-1.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M266.4 214.5s-1.7.6-2.1-.1c-.4-.8-.2-1.4-.2-1.5 0-.2-1-.3-1-1.3.1-1 1.4-.9 1.6-.9.3 0 .4-1.5 1.3-1.4.8 0 1.2 1 1.2 1l-.8 4.2z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M268.3 215s-1.5.8-2 0c-.4-.7 0-1.6-.1-1.8-.2-.1-1-.4-.9-1.3.2-.9 1.1-.6 1.4-.8.3-.1.6-1.4 1.5-1.2.9.3 1 1 1 1l-1 4.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M270.8 215.3s-.5 1-1.5.8c-1-.2-.7-1.7-.9-2-.1-.3-.9-.5-.8-1.4.2-1 1.1-.9 1.5-1 .3-.1.7-1.6 1.4-1.4.7.3 1.3 1.1 1.2 1.5 0 0-1.5.5-1.7 1.5-.2 1 .8 2 .8 2z"></path><path fill="#af7029" d="m293.7 231.2-2.2-2.6c-.9-1.3-2.3-2.7-2.3-2.7l-2.2-1.1-1.4-2.4-.2-2.8.6-1.6.8-1.2s-4.6 1.7-2.2 10.5c1 3.8 3.5 4.3 3.5 4.3l4.3-.3h1.3z"></path><path fill="#816c2a" d="M291.6 201.7c.4 0 .6.2.8.4l.2.6v.4c-1.6 3.4-4.8 5-7.8 7a13.8 13.8 0 0 0-3.8 4 12 12 0 0 0-1.6 6.8c.1 5 2 7.8 4.2 9.3a9.7 9.7 0 0 0 5.2 1.5h.4l1.4-.1a35.8 35.8 0 0 1 3-.2l1.8.1.9.4a.8.8 0 0 1 .2.5c0 .4-.3.8-.6 1.2l-1 .7.2.3a4 4 0 0 0 1-.8c.4-.4.7-.9.7-1.4 0-.2 0-.5-.3-.7-.2-.3-.6-.4-1.1-.5l-1.8-.1c-2 0-4.5.3-4.5.3v.2-.2a6.8 6.8 0 0 1-.3 0 9.4 9.4 0 0 1-5-1.5c-2.1-1.4-4-4-4-9v-.4c0-2.7.5-4.7 1.5-6.3 1.4-2.4 3.7-3.8 6-5.3a14 14 0 0 0 5.5-5.7v-.5c0-.2 0-.6-.2-.8-.2-.3-.5-.5-1-.5v.3z"></path><path fill="#fff" d="M297.8 232.7s-1 2-1.4 2c-.2 0 1 .3 1.3.8l-.3.5s-1.2-.9-2-1v-.6l1.1-.7a4 4 0 0 0 .9-1.7l.4.7z"></path><path fill="#fcca3d" d="m302 234-2.7.8-1.3-1s0-1-.5-1.5l-1.6-1c-.6-.2-2.5-.2-2.5-.2l-5-5.3 2 .2 2.8-.4 2.7-.2 1.4.2 1.6.4.8.7.8.8.8 1.3.6 1.6.2 1.7v1.9z"></path><path fill="#af7029" d="M302.2 233.8s-1 .3-2.2.3c-1.3 0-2-.2-2-.2l-.2.9c-.2.9-.5 1.3-.5 1.3v3.2l2.6.5 1.4-.5.7-3.5.2-2z"></path><path fill="#fcca3d" d="M301.5 232.5v1.2l.6.2v-1.2zm-2.5-30-.3-2.1-.8-1.5-1.1-1.5-1.2-1.3-.6-.5-.3-.5-2.9.2-1.4 1.7s3.8 2.8 5.3 5.8a7 7 0 0 1 2.8 1.7l.1-.2.4-1.8z"></path><path fill="#af7029" d="M296.3 205c0 2.2-.5 3.2-.8 3.7l1.8-2 1.2-2.2a7 7 0 0 0-2.8-1.7c.4.7.6 1.4.6 2.1z"></path><path fill="#816c2a" d="m300.3 237.9-1.4-1.6c-.6-.6-1.3-1-1.3-1l-.2.4h.1l1.2.8a17.6 17.6 0 0 1 1.3 1.6l.3-.2z"></path><path fill="#6f5b24" d="M302 235.5s-.3 1-1.3 1.8c-1 1-2.2 1.5-2.2 1.5l2.8 1 1.9-1.7-1.2-2.6z"></path><path fill="#404118" d="m302.4 237.8-.2.3-.5.5-.4.5.6-3 .6 1v.4z"></path><path fill="none" stroke="#78732e" stroke-width=".2" d="M285.8 199.3s-3.8.3-6.5-.1-2-7.3-2.1-7.5c0-.2-1.6-1.8-1.4-3.3.3-1.5 5.2-5.5 5.8-5.8.5-.1 1.5.3 1.5.3s1.2-1.2 1.6-1.2c.4 0 .9.7.8 1-.2.3-1.9 1.3-2 2-.2.8 0 1.5-.5 2.3-.5.7-1.4 1.7-1.5 2.4-.1.6-.4 1.1 0 1.4.5.2 2.1 0 3.5-.6 1.4-.7 2-1.5 2.1-1.4.2 0-.8 1.7-2.3 2.4-1.5.6-2.5 1.3-3.3 1.2 0 0-.8 2 1.8 2.2 2.6 0 4-.6 4-.6l-1.5 5.3z"></path><path fill="#ab6d29" stroke="#4d2a15" stroke-width=".4" d="M318.7 170.6s-7-1.3-7 4.5c.1 1.9.5 2.5 2 3 1.5.3 4.4.5 7 2.7 2.5 2.3 2.7 4 2.7 5.3 0 1.4-.7 2.6-.7 2.6l1.6 7.7 1.6 5.7 4.8-2.7 2.8-8.5-3.6-15.2-11.2-5.1z"></path><path fill="#4d2a15" d="M325.6 200s2.5-1 3-3c.3-.5-2.4-2.9-2.4-2.9-.1 0 1.3.7 2 1.3.6.6 1.1.9 1.3.8.2-.1 1.3-2.7.9-3.3-.4-.6-1.1-2-2.1-2.6-1-.7-2.4-.6-2.4-.6s1.9-.6 2.8 0c1 .5 1 1 1.1.9.1-.3-.2-2.9-.6-3.7-.4-1-.8-1.3-2-1.6-1.1-.2-2.3-.1-2.3-.1s1.6-.9 2.8-.6c1.3.3 1.3 1 1.4.8 0-.1-.6-2.4-1-3a6.7 6.7 0 0 0-2.1-1.8l-1.8-.2h-.6s1-.6 2.1-.5c1.2.1 1.3.5 1.4.4.2 0-.1-.2-.8-.7s-4.2-2-4.2-2h-3.3s0-.8 1-1c.9-.1 1.1.1 1-.1 0-.3-2.6-.8-2.6-.8H316l-3 .3s.2-.5.7-.9c.3-.3.9-.5 1.3-.6 1-.3-.6-1.1-.6-1.1l.9-1.3 3.9.3 8.2 4.8 3.9 3.3 2.4 6.2-.7 10.8-5.5 4.5-2.4.3.5-2.3z"></path><path fill="#d2a567" d="M318.4 173.3s-.2-.7-.2-1.7.2-.9.2-.9-2.7-.3-4.6 1.2c-1.9 1.5-.8 4.1-.8 4.1s.8-.8 1.9-1.2c1-.4 3-.3 3-.3.2-.2-.4-1-1.1-1.1-.8-.2-2.1-.2-2.1-.2s.8-.5 2.2-.4c1.4.1 1.6.5 1.6.5z"></path><path fill="#8f4620" d="m326.7 200.9-1.8.6 1 7.5 7.2 12.1 3.7-.6 1.3-2.3 1 .5c.4.4 1.8 2.8 3 3.3 1.1.4 1.7.2 2.7 1 1 1 4.9 6.6 5 6.8.3.2-.1-2.4-.1-2.4l-1.2-3.4-1.4-2.4-.3-.6h2l1.2.8 2 1.5.9 1.2.5 1.2.2 1 .5 1.6 1 2.3 1.3 2.1.4-.9-.6-2.5-2-6-1-2 1.9 1.2c.4.1 1.8 2.2 1.8 2.2l.9 2.2.6 2 .4 1.7.7 1.9 1-.7-.1-1.3-1-4.2-.4-4.5s.6 0 1.2.7a9 9 0 0 1 1.2 2.3l.5 4.1.7 3.8 1.2 3.8 1.2 2.4.9 1.3v-2l-1.6-16 .2-.6s.2-.1.8.7c.5.7 1 1.9 1 1.9l.5 2.5.2 1.7.3 3.3.5 3.5 1.6 3.8.9 2 .5-2.4-.8-17.1.4-.5s.9.7 1.2 1.3l.8 1 .6 3.8.4 10.7.4 2.8 3.2-28.2 2-.4.2-.6-1.5-1-3.2-5-2.1-4.9-3.8-7-6.6-8-5.2-4.3a20 20 0 0 0-1.9-1.3l.4-1 1-1.7-.1-.1h-.9l-2.2.4-2.2-.7-4.4-3-4.6-2.3-2.8-1-6.6-1.6-6.6-1h-3l-2.6.5s-1.4.6-1.8 1.5c-.5.8-.5 1.4-.4 2.6.2 1.3 1 1.9 2.8 2.7 1.8.7 6.2 3.6 6.2 3.6l2 2.1.8 1 .2.8 1.4 11.1-2.8 6-2 1z"></path><path fill="#ab6d29" d="M333.8 218.2s1.2 2 2.9.5c1.7-1.6-.8-6-.7-6.3 0-.3.7-.3.7-.3l1.3 2.2s.7 1.3.4 3.2c-.2 2-2.1 3.7-2.1 3.7l-2.2-.5-.3-2.5z"></path><path fill="#4d2a15" d="m375.3 244.2-1.6-4.5-.4-3.5c0-.6-.3-7.9-.5-9.3 0-1.4 0-3-.2-3.1l-1.6-2.2-.7-.7.5-.3s.6.6.7.3c.2-.4 0-2-.6-4.5-.7-2.5-3.9-8.3-3.9-8.3l.4.2.9 1 1.8 1.5 4.1 1.5 2.2.3 1.4 2.9s1 4.9 1 7.4c0 2.4-.2 4.5-1.2 7-1 2.4-1.2 10.3-1.3 11.5-.1 1.3-.6 2.5-.6 2.5l-.5.3z"></path><path fill="#8f4620" d="M375.3 231.2s.8-1 1.2-2.4c.4-1.4.5-12.4-.8-13.7a10 10 0 0 0-4-2.3c-.2 0 1 3.5 1 3.5l.8 1.4.6 1.8c.1 1 .9 3.1 1 6l.2 5.7z"></path><path fill="#4d2a15" d="M369.3 238s.5-5.1.3-9c-.3-3.7-.6-4.2-1-4.9a32.3 32.3 0 0 1-2.5-6.3c-.9-3.2-1.5-5.6-2-6.2-.6-.6-1.7-2-2-1.6-.3.3-.3 1.1-.3 1.1l-1.5-.4-.4-1 .5-1.6v-.7l-.3-1.1 2 1.6 4.2 2.8 2 8.6 2 5.3.2 9-.2 8-1-3.5zm2.4-24.7s1 1 1.7 1.4c.7.4 1.8 1.1 1.6 1.2a8 8 0 0 1-2-.8l-1.2-.8v-1z"></path><path fill="#4d2a15" d="M363.7 236s.8-1.8.7-4.1a49 49 0 0 0-1.6-8.6c-.4-.7-2-1.7-3.5-4.8s-1.3-3.8-2.3-5c-1-1-2-2.4-2-2.4l.3-3.3 3.6 1.8 1.6.8 1.8 8.7 1.6 2.5.7 3.5.9 8 .4 6.6-.2.5-2-4.2zm-4.2-3.7s.1-2.5-.5-4.8c-.7-2.3-1.1-4-1.9-4.8-.7-.7-2.5-2.6-4.1-5-1.6-2.5-3.9-5-3.9-5v-3.3l2 1.5a57.1 57.1 0 0 1 2.4 1.2l1 3.7 1.2 2.7 1.8 2.4 1.2 1.1.7 4 .4 2.3 1 3.2-.4 1.7-.9-.9zm-3 0-1-.9s.6-.6.3-2c-.3-1.2-.6-2.4-1.2-3.7-.6-1.2-.7-2-1-2.3a121 121 0 0 0-4.5-4c-1-1-2.7-2.6-3.7-3.3-1-.6-1.8-.8-1.8-.8l-.5-4s1.3 1.8 2.1 2a54.7 54.7 0 0 0 2.1.8l2.8 5 1 1.3 2.6 2 1 2.2.9 2.5 1 3.4.1 2-.2-.1zm-5.5-1s-1.7-2-2-3.2c-.2-1.2.2-1.2-.3-2.6-.5-1.4-2.3-3.5-3.7-4.6-1.4-1.2-3.4-2.8-3.3-3.8.1-.9.4-1 .4-1l.8.8 4.5 4.7 1.4 2.5 1 3.1.7 1.5.7 1.8-.2.7zm16-23.3s3.1 3.8 4 .3c.3-1.6-1.2-4.6-1.2-4.6s-2.8-5-3.8-6.2l-5.7-7.3-3.5-1.6 1.2 2s2.6 2.6 5.9 8.4c3.3 5.7 2.7 8.9 2.7 8.9h.5zm-17.8-23s6.1 5.2 10 10.8c4 5.7 5.5 9.4 4.7 10.2-1 .7-3.4-.4-4.4-2-1-1.6-1.8-4.4-5.5-8.6-3.7-4.2-5.5-4.8-5.5-4.8l-2.7-4.3 3.4-1.3zm-3.2 12.5s3.6 3 6 5.4a37.4 37.4 0 0 1 3.4 4.2l1.4 1.4s-.9-1.5-.4-2c.5-.6 1.1-.3 1.1-.3l-11.5-12v3.3zm-.7.3s1.2 2.3 3 4.1a464.6 464.6 0 0 0 4.1 4l.8 2.9s-5.2-4-5.2-3 1.2 3 1.2 3l-1.6-1-2.2-3.1-1.3-2.8-1.5-3.8 2.7-.3z"></path><path fill="#4d2a15" d="M329.5 210.2s2.7 2.4 4.2 0c1.5-2.3.3-5 .3-5s3.9 5.6 5 .3c.2-1-2.4-4.6-2.4-4.6l1-.9 1.9 3.3s1.8-.8 1.8-3-1.9-5.3-1.9-5.3l1.8 2s3.6 0 3.7-2c0-2.2-3-4.5-3-4.5s2.4.1 2.4-1.3c0-1.4-3.4-2.4-3.4-3.3 0-.9 1-2.4 2.5-1.5 1.5.8 3.5 1.4 4.4-.2.8-1.6-.1-2-.1-2l-2.1-.4-3.4-1.8-2.7-1-2.8-.4 1 2 .8 5.8v2.6l.5 5.8-1.4 4.7-.7.9-.5.6-1.2 2.6-1.6 1.8-2.2 2.7-2 2.1z"></path><path fill="#ab6d29" d="M348.8 220.9s-.7-1.7-2.2-2.9a7.8 7.8 0 0 0-3.8-1.2l4 4.2 2-.1zm5.6 1s-1.3-2.6-2.8-4.2c-1.5-1.6-2.5-3.6-3-3.6h-.6l.4 3.3 2.7 2.7s2.6 2 3.3 1.8zm4.6-.2s-.6-3-2.2-6c-1.5-2.8-3.1-4-3.1-4l.4 3 1.2 3 2 3 1.7 1zm3.8-1.7s1-6.2 0-8c-.9-1.6-2.7-2-2.7-2l-.6 1 .6 4.3 1.5 3.4 1.2 1.3zm3.7-10.3s.9.4 2 2.5a40 40 0 0 1 2.6 8.6c0 .3-.5.2-.7.2-.2-.1-3.9-6-3.9-6l-.6-5.4h.6z"></path><path fill="#d2a567" d="M340.4 216.8s2-.4 2-1c0-.8-2.4-2.2-2.2-3.3 0-.5 2 .1 2.1-.3.1-.4-2-3.6-1.3-4.4.6-.8 2.4 3.5 2.4 3.5s1 2 .7 3.2c-1.2 3.6-3.7 2.3-3.7 2.3zm4.6-4.4c.1-.3 3.1.4 3.1.2.2-.7-2.7-3-2.7-3s-.6-1.2-.4-1.4c.2-.2 2 .2 2 0 .2-.3-2-3.2-2-3.7s.6 0 .6 0 1.7 1.7 2.6 3.2c1 1.4 1.8 2.6 1.5 4.9-.4 2.5-5 .6-4.7-.2zm13.6-4.6s-.5-2-.2-2.3l1.1-.5s-1.6-1-2.4-1c-.7 0-.8-.2-1 0-.2.4 1.3 2.4 1.3 2.4l1.2 1.4z"></path><path fill="#d2a567" d="M349.4 209.4s4.7 1.2 4.9.8c.2-.3-3.7-4-3.7-4s-.3-.6-.2-.8c0-.2 1.7-.3 2.2.1s0 1.2.1 1.5c.2.3 1.7 2.5 2 2.1.2-.3-.4-3-.3-3.3.2-.2 1.8 1.6 2.3 1.9.4.3 3 2.3 3.3 1.4.3-1 .4-1.1.3-1.7 0-.6.9 2.6-.3 3-1.2.4-2.6-.4-2.6-.4l-1.1-.8-.6-.7s.7 2.5-.2 2.7c-.8.3-1.7.2-1.7.2l-2-.2-2.4-1.8zm10.7-3.2s5 3 5.4 2.5c.5-.5-1.2-7.5-1-8.2.3-.6 4 7.9 2.2 9-1.4 1-2 .3-2 .3l-2.5-1.3-2-2.3zm13.8 12.6 1 .5.7.2-1.4.2-.3-1zm-4.8-16.4.7.3.7.3s-.4.3-.6.2h-.4l-.4-.8zm-1.4-2.5s.5.3 1.1-.2c.7-.4.7-.8.6-1 0-.2-1-.2-1.4-.5-.3-.2-.3-.6-.3-.6h-1.1l-.4.1 1.5 2.2zm4.3 14.4s1.5 1 2 1c.4 0 1.1.5 1 .6 0 .1-1.2.2-1.8-.1-.6-.3-.7-.1-.7-.1l-.5-1.4zm-8.1-22.5h.6c.3 0 .5-.2.6 0 .2.2 0 1.2-.3 1.5l-1 .5a48.4 48.4 0 0 1-1.6-2.2l1.7.2zm-7.1-6.4h1.5c.5 0 1 .3 1.5.6.4.3.9 3.3.6 3.8-.2.6-3.6-2-3.7-2.1 0-.3-1.5-2.5-1.5-2.5l1.6.2zm-3.2-1.4s2.5.2 2.2-1.3a3.2 3.2 0 0 0-1.3-2.3l-2.9 2.1 2 1.5zm-6.5-2.8s.7.4 1.4 0c.7-.2 2.6-2.7 4-3 1.4-.3 1.7-.3 2 0 .2.4 0 1.8-.2 2.2-.3.4-4.4 2-4.4 2l-1.5-.1a9.6 9.6 0 0 1-1.3-.5v-.6zm-.7-4.5c-.7-1.4-1.7-2-2.2-1.9-.4.1 1.4 1.5 1.7 3.5.3 2 .2 3.3.2 3.4l.8.1.2-.7.1-.5v-.5l-.1-1-.2-.9-.2-.6-.3-.9zm-5.8-2a15.4 15.4 0 0 0-5.5-3.7c-.2 0 4 2.5 5 4 .9 1.7.9 3.9 1.3 4.2.4.3.8-.2.9-.2 0 0 .3-.5.2-.7l-.2-1-.7-1-.4-.8-.6-.8zm-5.5-2.3c-2.4-2-6.6-3-10-3-3.5-.2-5.3.2-4.8 2s2 2.8 5 2.8c2.9 0 3.6-.3 5.2.2a9.7 9.7 0 0 1 3.6 2c.5.5-1.1-1.5-2.6-2.6-1.5-1.2-2.5-1.7-2.5-1.7s-.3-.7 1.7-.4c2 .3 4.7 1.6 5.5 3.3.7 1.7.6 2.6.6 3 0 .3.7-.2.7-.2l.3-.9s0-.6-.3-1.4c-.4-.7-.5-1-1.4-2-.9-1.1-1-1-1-1zm-9.6 28.5c1.5 0 4.8-2.8 5.2-6.7.5-4-1.9-11.9-2.5-12.7-.5-.9 1-.4 1.7.4a25 25 0 0 1 2.5 10.6c0 4.2-.8 5.3-3 7.5-2.2 2-4 1.8-4 1.8l.1-.9zm5.1 11.6s.7 1 1.6.6c1.5-.5 3.8-1.7 3.8-3.8 0-1.4-1.8-2.7-1.9-3.2v-1l1.6.4.5 2.2s.6.7 1.3.4c.6-.2 2.5-1.6 2.2-3-.3-1.2-2-2.9-2.2-3.5-.2-.7 0-1.2 0-1.2l1.6.2.4 2s.4.6 1.3.4c.8-.1 2.4-1.7 2-2.5l-1.5-2.6v-.9l.5.4s.6.2 1.8-.1c1.1-.4 2.3-1.2 2.3-2s-1-1.6-1-2v-.6h.8l1 1.2.1 1.4-.3 1.2-1.4 1.6-1.4.6h-.4l.8 1.4-.2 2-1.3 1.2-1.7 1-.1 1.9-1 2-2 1.2h-.7l-.2 1.2-1.4 2-2.3 1.5-1.7.3-1-1.4.1-.5z"></path><path fill="#d2a567" d="M343.4 191.4s4 1.1 3.8-1.4c0-1.3-3.8-4.5-4-5-.3-.6-.2-1.3-.2-1.3l1.9 1.8s2.5.6 3.2-.9c.7-1.4.1-2.3 0-2.3l.6-.1 1.1.2-.1 2.2-1.3 5.5s.3 2.2-1.4 2.3c-1.7.2-3.6-1-3.6-1zm3.7 29.5s0-1.1-.8-2c-.9-.7-2.5-1.4-2.8-1.6a63 63 0 0 0 2.8 3.5h.8zm5.6.2s-2-2.4-2.3-3.3c-.5-.8-1.5-2.6-2.3-2.7-.8 0 .8 3 .8 3l3.2 2.9h.6zm5.4 0-2.1-4.2c-.4-.9-1.3-3.4-2.3-4.1-1-.7.1 1.1.1 1.1l1.1 3.3 1.9 2.9 1.3 1zm3.9-2.4s-.1-2.7-.5-4.6c-.3-1.8-1.7-3.4-1.8-3.3v3.3l2.3 4.6zm8.1 2-2-4.7c-.5-1.6-1.8-4.1-2-4.2l.4 3 1.7 4.7 2 1.2zm7-8.5s-1.2-1.2-3.9-2.3c-2.7-1-5.4-1.2-5.4-1.2l.3.4 1.3 1 2.8 1.5 3.7.9 1.3-.3z"></path><path fill="#202020" d="M348.2 213.8s0 2.4 1.3 3.8c1.2 1.5 4 4 4.6 4.6.6.5 1 3.4 1.9 5.8.8 2.4 1 4.4 1.4 5.1.4.7 1.1 1.8.5 1.7-.5-.1-1-.8-1.4-1.7-.3-.9-.2-.9-.2-2 0-1.3-1.8-7.5-2.7-8.1-.9-.7-4.8-4-6.4-6.3-1.5-2.3-1.2-2.8-1.2-2.8h2.2z"></path><path fill="#202020" d="M354.6 229.3c-.8-1.7-1-3.3-1.2-4.3a16 16 0 0 0-4.4-4.2c-.6-.3-1.9 0-2.4-.3l-3.7-4s-.5.5-.3.6c.1.1 3.4 3.7 4.6 4.8 1.2 1.2 1.9 3.7 2.7 5.7.9 2 .5 1.6.6 2.5.1 1 .7 1.5 1.3 1.5.6 0 .8-.2.6-.4a10.3 10.3 0 0 1-2.2-3.5c-.7-1.7-1.5-4.9-2.5-6l-.3-.3 1.3-.2c.8 0 4.1 3 4.4 4 .3.8 0 1.2 1.4 4.2s2 3.7 2 3.7h.2s-1.2-2-2-3.8zm-5.2-19.9s2.5 1.5 3.2 1.7a9.8 9.8 0 0 0 1.2.3s.4 4.4 2.1 6.8c1.8 2.5 3.2 3.4 3.2 3.4s0 4.8 1.4 8c1.3 3.3 1.5 7.3 1.2 8-.3.6-1.4-2-2-4.3l-2-6.2a13 13 0 0 0-2.5-4.4c-.8-.7-.2-.6.3-.2.4.4 1.7 2 2.5 4.5s1.1 5 1.5 5c.5 0 .8-.3.8-.9 0-.4-.6-1.8-1-4.1a17 17 0 0 0-1.2-4.7c-.4-.6-1-.7-2.4-3.4a20.3 20.3 0 0 1-2.5-5.3c-.2-1.2 0-1-.2-1.3-.2-.1-.4 0-1.6-.6-1.1-.6-2-2.3-2-2.3z"></path><path fill="#202020" d="M355.7 208.5s1.4 1.2 2.3 1.5c.8.4 2 .4 2 .4s-.3 4.2 1.3 6.9 3.3 4.2 3.3 4.2.3 1 .8 6.8l.7 8.3c.1 2.3.2 10.6-.1 10.3-1.3-1-.2-5.4-.9-7.3-.6-1.8-1.6-2.1-2.8-7.4-1.2-5.2-.4-6.4-1.3-8.3-.9-2-2-2.2-2-2.2s1.6.4 2.3 2c.6 1.6.7 6 1.3 8.2 1.2 4.9 2.9 7.4 2.9 7.4s-.4-6.2-.8-9.7c-.5-3.5-.5-6.4-1.1-7.7-.7-1.4-2.1-2.4-3-4.2-.8-1.8-1.1-5.3-1.5-6.2-.4-.9-.6-.6-1.2-.8-2-.8-2.2-2.2-2.2-2.2z"></path><path fill="#202020" d="M360.1 206.2s1.3 1.5 3.1 2.6c1.8 1 2.8.7 3 1 .3.2-.3 3.8 1.6 7.2 1.9 3.4 2.6 3.5 2.6 4l.6 13.9c.3 3.4.5 14.8-.9 14.8s-.1-8.5-.8-10.4c-.7-2-.7-1.4-1.3-3-.7-1.6-.7-7.8-1.8-11.5-.8-2.8-1.6-3.2-1.6-3.2s1.4.7 2 3c.6 2.2.8 10 1.5 11.1.8 1.3 1.8 2.8 2 4a157 157 0 0 0-.4-15.6c-.3-1-3.5-6.6-3.7-9.7-.3-3.2-.4-3.5-.7-3.7-.2-.3-1.1 0-2.6-1.5-1.5-1.4-2.6-3-2.6-3z"></path><path fill="#202020" d="M367.3 208c0-.3 1 1.7 3.7 2.8 2.9 1.2 5.6 1 6 1.3.3.3 2 4.5 2.1 10.2.1 5.6-1 5.1-1.8 10-.9 4.9-1 14.8-1.5 16.3-.2.5-.5.8-.8 1.7-.3 1 .2 2.8-.7 2.8-.8 0-1-1.4-1-2.1 0-.8 1-3.5 1-6.2s-.6-3-1-6.2c-.4-3.3-.4-13.5-.8-14.5-.3-1-2.1-3.1-2.1-3.1s1.9 1.2 2.4 2.6c.4 1.3.5 12.7 1 15 .5 2.4.3-.5.5-1.8s.9-7 .8-10c-.1-3-1.4-9.4-2.4-10.5 0 0 .5.6 1.1 2 0 .1.4.5.8.7l1 .5s-.6 0-1-.3c-.4-.1-.6-.4-.6-.4a23.9 23.9 0 0 1 1.3 8c.1 5.2-.7 16.4.1 16.5.8.2.7-6 1.5-11.2.8-5 2-5.8 1.6-9.9-.3-4.1-1.4-8.6-2.3-9.2-.9-.5-3.4-.3-5.6-1.8-2.2-1.4-3.4-2.9-3.3-3.2zm-35.8 5.7s.8.4 1.7 0c1-.5 3.5-2.5 3.5-3.3v-1.6s0 .3.7.4c.8.1 2.8-1.4 3-2.4a8 8 0 0 0-.1-3.1c-.2-.4.6.3 1 0 .4-.4 2.4-1.7 2.4-3 0-1.4-1.1-2.6-1.1-2.6s1 .2 1.6 0c.5-.1 2.5-1.3 2.4-2.4 0-1.2-.7-3-2.3-3.2 0 0 1.2.3 2.3-.1 1-.4 1.5-1 1.5-2.3 0-1.2-2.3-4-2.6-4.2-.4-.2 2.4.8 3-.3.8-1.1.9-1.9.7-2.5-.2-.7-.8-.8-.8-.8s1.2.3 2.8-.5 3-2 3.8-1.9c.8 0-2.3 1.7-2.5 2.6 0 .4.9 1 2.3 2 0 .1 0 .2.2.3.7.3 3 .4 3.3.5.2.2-2.4.1-2.2.3a34.1 34.1 0 0 1 5.7 5.4c.1 0 .5.4 1 .5l1.3.3h-1.6a65.3 65.3 0 0 1 3.3 4.7c0 .1.4.6.9.8.5.2 1 .1 1.1.2.1.2-1.4 0-1.3.2a82 82 0 0 1 3.3 6s-3-5.3-6.7-9.5c-3.8-4.2-4.7-4.7-4.8-4.4-.2.4 2.7 4.1 4.3 6.7 1.6 2.6 3 5.9 3 5.9s-3.7-7.8-9-12.6c-5.2-4.8-5.8-5.5-6.3-5.4-.6.2-1 3.8-.7 4.5.3.7 4.2 3.6 7.4 7.5 3.3 3.8 7.5 10.4 7.5 10.4s-3-4.7-8-10-6.9-6.6-7.3-6.5c-.4 0-.4 1-1 1.8-.6.7-1.8.6-1.8 1s4.2 4.3 5 4.7c.9.5 1.4.3 2 .6l1.4 1-1.6-.5c-.6-.2-1.3-.3-1.3 0s3.5 4.3 4 4.6c.6.3 1 .1 1.7.4.8.3 2 1.1 2 1.1s-1.3-.7-2.1-.8c-.9-.2-1.2 0-1.2.2s2.6 3.6 2.5 3.6c-.1 0-4-4.6-7.3-7.5-3.3-3-4.8-3.6-5-3.5-.2.1 0 1-.9 1.3-.8.3-1.5.4-1.5.7 0 .3 3 3 5 5.4a149.4 149.4 0 0 1 4 4.5l-4.5-4.3c-2.3-2.2-3.5-3-3.8-3-.2.2-.2 1.3 0 1.6.2.3 4.6 5.4 4.4 5.5-.1.2-5-6-5.4-6-.3 0-.5.7-.8 1-.4.4-1.8.4-1.8 1 0 .4 7 7.3 6.9 7.5 0 0-5.8-5-6-4.7-.2.3 2.4 5 2.2 5.2-.1 0-3.4-5-3.7-5-.3 0-.2.6-1 1.3-1 .8-2 .4-2 .8 0 .3 4.8 5.7 4.7 5.8-.2.1-5-5.1-5-4.8-.1 0-.4.3-.2.7.3 1.3 1.4 3.6 1.3 3.8 0 0-1.6-3.2-2-3-.4 0-.4.7-1.2 1.1-.7.5-1.3.4-1.3.7 0 .3.8 1 1.2 1.7.4.7.7 2.4.7 2.4s-.5-1.4-1.1-2.3c-.7-.9-1.3-1.5-1.9-1.5s-.8.5-.8.5l-.5-1.2z"></path><path fill="#202020" d="M377 212s1.5 0 1.7-.4c.2-.3-.6 0-2-1.6s-5-12.1-9-17.4c-6.6-8.7-12.7-12.7-12.7-12.7s7.3 4.2 13 12.4c5.6 8.4 7 14.9 8.6 16.6 1.6 1.7 3.2 2 3 2.5 0 .5-.3.8-.9 1l-2 .1.2-.4zm-48-2.2.3.1c.3 0 2.3-1.9 2.2-2.5 0 0-1-.3-1.6-1-.7-.8-.9-1.9-.9-1.9s.7 1.3 1.2 1.6c.6.4 1.4.6 1.8.3.3-.2 3.2-2.4 3-3.2 0 0-.9 0-1.8-.6-.8-.6-1-2-1-2s.6 1.1 1.5 1.5c.8.4 1.7.3 2 0 .2-.3 2-3 1.8-3.7 0 0-1 0-1.8-.5-.9-.6-1.3-2.2-1.3-2.2s.6 1.3 1.7 1.5c1.1.3 2-.4 2.2-1.2.2-.8.8-3.7-.2-4.5 0 0-1.4.5-2.4 0-1-.6-1.4-1.9-1.4-1.9s.9 1.2 2 1.4c1.2.1 1.7-.5 1.9-1a5.9 5.9 0 0 0-.1-3c-.4-1-1.1-.8-1.3-2.2 0 0-.3.5-1.8.5s-2.3-1.6-2.3-1.6 1.2 1 2.4 1a1.9 1.9 0 0 0 1.6-1.9c0-.7-.6-1.4-1-2.1-.2-.8-.3-1.7-.5-1.6-.2 0-.5.8-2 .6-1.5-.3-1.8-1.3-1.8-1.3s1 .7 2 .7c.8 0 1.3-.5 1.3-1 0-.6-.3-1.7-2.2-3.3a58.1 58.1 0 0 0-3.5-2.7 21.8 21.8 0 0 0 6.6 5.3s1.7.6 2 0c.1-.6.1-1.4-.5-2.4-.5-1-2-2.6-2-2.6s1.6 1.3 2.3 2.7c.8 1.3.4 2.2.5 2.6 0 .3 3.3 1.6 4 1.1.8-.4.5-1.4-.2-2.3l-1-1.8s.7.8 1.2 1.8c.6 1 1 1.7.8 2.1-.2.5-.6.7-.6.9l2.3 1.3c1 .6 2.3 1 2.5.8.2-.4.3-1.1.2-2.2-.1-1-.7-2.7-.7-2.7s.7 1.6.8 2.7-.1 2 .1 2.4c.3.4 1.1.5 1.1.5s-.6.4-2 0c-1.5-.4-7.7-3.6-8-3.3-.3.4 2.9 2.3 4.3 3.7 1.5 1.3 2.2 2.8 2.2 2.8s-1.1-1-2.2-1.6c-1.1-.6-4.4-2.3-4.7-2-.2.2 1.3.5 1.4.7.1.3-1 1.3-1 1.8 0 .4 4.7 3.7 4.5 4-.1.4-1.2 1.3-1.4 1.2-.1 0-2.5-1.8-2.5-1.6s1.4 1.5 1.4 1.7c0 .3-1 .8-.8 1.4.2.6 2.6 2.6 2.6 3.3 0 .7-1.4 1.3-1.1 1.7l1.5 2s-1.4-.9-1.8-1.4c-.4-.4-1.3-1.5-1.5-1.3-.1.1-1 2-1 2.5.2.4 1.3 1 1.5 2.3.2 1.1-.2 2.4-.3 2.4 0 0-1.6-2-2-2.1-.2 0-.6.1-.9.6s-1.2 2.1-1 2.4c0 .3 1.6.7 1.6 1.9a3.4 3.4 0 0 1-1 2.3l-2.1-2.4c-.2 0-2.2 2.3-2.3 2.6 0 .2 1.4 1.3 1.2 1.7-.3.4-1.3-.2-1.8.1l-1.7.7c-.2 0-.5-.6-.5-.6z"></path><path fill="#202020" d="m355 180 .5-1c.3-.3 1.5-1.7 1-2-.4-.2-2 .3-3 .2-1 0-1.7.2-4.6-2.3 0 0-9.3-6.4-23.6-7.3-4.6-.2-6.6 1.4-6.8 2.2 0 .2 1.2-1.8 5.7-1.7 2 0 16.5 1.1 24 7 .4.3 2.9 2.7 5.2 2.4 2.3-.2 2.8-.5 2.7-.2 0 .4-.7 1.2-.9 1.6a9.2 9.2 0 0 0-.3 1.1zm-25 2v-.2c-.2-.4-1.1-1.7-2.7-3.1a37.4 37.4 0 0 0-8-4.3c-.3-.1 6 2.9 7.7 4.5l3 3z"></path><path fill="#d2a567" d="M330 192.2s-.4-.6-1.7-1.4a9.9 9.9 0 0 0-2.5-1.1l3 .7a4.8 4.8 0 0 1 1.1 1.8zm-.8-5.3s-.4-.6-2.1-1.2-2.2-.5-2.2-.5 1.6-.7 2.8 0a2.7 2.7 0 0 1 1.5 1.6zm-1-4.5s-.4-.8-2-1.3c-1.5-.6-2.6-.7-2.6-.7s1.6-.4 3.2.2c1.5.6 1.4 1.8 1.4 1.8zm-2-2.8s-.4-.6-3.3-1.3c-3-.7-4-.7-4-.7s4.1-.4 5.2.1c1.1.5 2.2 1.9 2.2 1.9zm-5.3-3s-1.8-.6-3.5-.7-4.4.1-4.4.1 5-.8 6.3-.5c1.4.3 1.6 1 1.6 1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M304.5 238.4s.9 1.6 2.6 1.6c1.8.1 3.1 2.6 3.1 2.6l-1.9 1.9-4.6.2-1.5-2.4 2.3-3.9zm0-1.6c.2-.3-1.3-3.3-2.4-3.8-1-.5.4 1 .2 1.6-.3.6-.4 1.4-.3 1.5 0 0 .9 1.4.4 2-.4.5 2.2-1.3 2.2-1.3z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M303.8 241.4s.8.4 1.4.2c.7-.2 1.3-.9 1.3-.9m-3.6-.5s2.6-1.9 2.4-2.9c-.2-1-.7-1-1-.9a7 7 0 0 0-2.1 1.7c-.1.3.7 2.1.7 2.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M301 241.5s.6 1.3 1.4 1.3c.8 0 2-.7 2-1.2.1-.5-.8-1.5-1.3-1.7-.6-.3-1.9.4-1.9.4l-.1 1.2z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M303.4 239.8c0 .4-1.7 1.2-2.3 1.2-.5 0-1.6-1.3-1.2-1.5l1.5-.4c.4-.2.5-.8.7-.8.3 0 1 .1 1.1.5.2.5.4.6.2 1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M301.8 240.9s-2.6 3.4-3.7 3.3c-1-.2.5-5 .5-5l1.2.6c.9.2 1.7.6 2 1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M297.2 238.4s3.3.6 3.4 1.1c.2.6-1.5 1.3-2.5 1.3-.9 0-.9-2.4-.9-2.4z"></path><path fill="#202220" d="M289 243.4s.5 1.6 1.9 1.7c1.4 0 2.8-1.5 2.8-1.5l-3.4-1.3-1.3 1.1z"></path><path fill="#4b4139" d="m289 243.4.4.9c.3.4.7.8 1.5.9h.1c1.4 0 2.7-1.6 2.7-1.6l-3.4-1.4-1.4 1.2h.1l1.3-1 3.3 1.3v-.1l-.2.2c-.4.4-1.4 1.2-2.4 1.2h-.1a1.8 1.8 0 0 1-1.4-.8 2.8 2.8 0 0 1-.3-.6v-.1l-.1-.1z"></path><path fill="#202220" d="M290 243s.5 1.2 2.4 1.2 3.3-1.5 3.3-1.5l-3-2.3-2.7 2.6z"></path><path fill="#4b4139" d="M290 243s.5 1.2 2.4 1.3c2 0 3.4-1.5 3.4-1.5l-3-2.5-3 2.7h.2l2.8-2.5 2.9 2.3v-.1a5 5 0 0 1-3.2 1.4 3 3 0 0 1-2-.6 2.2 2.2 0 0 1-.3-.4 1.1 1.1 0 0 1-.1-.1h-.1z"></path><path fill="#4b4139" d="M290.2 243.3s.9.6 1.8.7c1 0 2.2-.3 2.2-.3l-1.1.4-.8.1-.8-.1-.6-.3-.6-.4v-.2z"></path><path fill="#202220" d="M292.4 241.6s.8 2 2.6 1.8c1.7-.2 1.7-1.2 1.7-1.2l-2-2.8-2.3 2.2z"></path><path fill="#4b4139" d="m292.4 241.6.5 1c.4.4 1 1 1.8 1l.3-.1c.8-.1 1.3-.4 1.5-.7.3-.3.3-.6.3-.6l-2-3-2.5 2.4h.1l2.4-2.1 1.9 2.7c0 .2-.3 1-1.8 1.1h-.2a2.2 2.2 0 0 1-1.7-.8 4 4 0 0 1-.4-.6v-.2a1.5 1.5 0 0 1-.1-.1h-.1z"></path><path fill="#4b4139" d="M292.6 242s1 1.3 2 1.3a3 3 0 0 0 1.5-.4v.1l-.5.3-.8.1h-.8l-.7-.5-.6-.9zm-3.2 2s.8.9 1.5.9a4.7 4.7 0 0 0 1.9-.6h.1l-.2.1-.8.4-.9.3-.7-.1-.6-.4-.3-.4v-.2z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M297 238.3c.8-.2 2.4 2 2.4 3.2s-.5 2.7-1.3 2.7-2.6-1.7-3-2.5c-.4-.9-.8-1.4-.5-1.9.3-.4 2.4-1.5 2.4-1.5zm-8 .2s-1.4-1-1.9-.5-.3 2.3 0 2.6c.4.4 2-.8 2-.8l-.2-1.3z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M288.8 239.7s-1.8.2-1.8 1 .9 1.6 1 1.8c.2.1 1.8-.7 1.8-.7l-1-2.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M289.5 241.1s-1.8.6-1.8 1.2.8 1.7 1.3 1.7 1-1 1.2-1.3c.3-.2-.7-1.6-.7-1.6zm.8-5.1s-.3-.5-1-.2c-.8.3-1.6 1-1.5 2.3.1 1.1.6 2 .6 2l2.7-1-.8-3.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M290.5 238s-2.2.8-2.3 1.7c-.1.9.5 1.7 1 2 .7 0 2.6-1.8 2.6-1.8l-1.3-1.8z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M292.5 241.7s-2.2 1.5-2.5 1.5c-.3 0-1.2-1.2-1-2 .2-.8 1.7-1.3 2.3-1.6.6-.2 1.2 2.1 1.2 2.1zm2-8.2s-.7-.6-2-.5c-1.4.1-2.4 2-2.6 2.8-.2.9 0 2.6.5 2.8.5.3 3.3-2 3.3-2l.8-3z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M291.8 240.3c-1-.1-1.8-1.5-1.7-2.3.2-.8 2-2.2 3-2 1 .1.8 2.5.8 2.5s-1.2 1.9-2.1 1.8z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M294.7 240s-.4 1.2-1.4 1.7c-1 .4-1.5 0-2-.7-.6-.8.2-1.2.6-1.6.5-.4 1.7-.7 1.7-.7l1.1 1.4z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M293.2 237.2s-1 .8-.4 1.8 1 1.4 1.8 1.5c.8.1 1.3-.2 1.9-.9.6-.7 1.5-1 1.4-2-.1-.9-.4-1.6-1-1.8-.5-.3-2.2 0-3.7 1.4z"></path><path fill="#202220" d="M296.2 233s-1-.5-1.9 0c-.8.5-1.4 1.5-1.5 2.4l.2 2.3s1.2-.4 2-1c.7-.6 1-.8.8-1.1 0-.2-.4-.4-.4-1.2 0-1.4.8-1.5.8-1.5z"></path><path fill="#4b4139" d="M296.2 233s-1.2-.3-1.9.1a3.2 3.2 0 0 0-1.3 1.9c-.3.8-.1 1-.1 1v-1.4c.4-.8 1-1.5 1.6-1.7.8-.3 1.7 0 1.7 0z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="m328.8 257 1.6-.8 2-1.2.4 2.2-1.8 1.4h-1.5l-.9-.7.2-1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M326.4 257.2h1c1.1 0 1.2-.3 1.4-.3.2.1.5 1.3.5 1.3l-.4.7-1.5.9-1.3-.8-.1-1.8h.4zm12.1-.8s-.3-.5-.9-1l-2.2-1.9v5l2.3-.1 1.1-1.5-.3-.5z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M326.4 257.2s-.4-.5-1.3-.4c-1 0-2 .9-2.1 1.5-.1.7 0 2.6.5 3 .5.4 1.2.5 2.2.3 1-.3 6.4-3.6 6.4-3.6l-1.4.3c-.7.2-1.4-.1-1.4-.1s-.7.8-1.6 1c-.8 0-1-.5-1.2-.9l-.1-1.1z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="m330 258.9-1.2.5-1.3.6.4 1.6 2.3.5 1.4-1.1v-1.6l-1.7-.5zm10.4-1.2-.8-.8c-.4-.4-1-.5-1-.5l-1.3 1.5v1l1.2.7.9.2 1.1-.8-.1-1.3z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M332.6 257s-1 .4-1.5.8l-1.2 1c0 .2 1.1 1.4 1.1 1.4l1.2.1 2.5-1.7-.2-1.6h-1.9zm9.5 2-.5-.7c-.4-.4-1-.6-1.2-.6-.3 0-1.3 1.5-1.3 1.5v.4l.8 1 1.6.5 1.1-1.2-.5-.9z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" d="m338 260.8 1.2.2s0 .3.3.5c.3.3.3 0 .3 0s.2 1.2 1.4 2c0 0 1.4.6 2 .2.8-.4.7 0 .7 0l2-2.4s0-.5-.5-.5c0 0 .4-1.6-1-2-1.2-.2-2.2.2-2.2.2s-1 1.8-1.6 1.6a2.4 2.4 0 0 1-.8-.5l-.7-.9s-.4.1-.9-.2c-.5-.3-.9-1.1-.9-1.1s-.7-.1-1-.4l-.5-.8-1.9 1.4s0 .5-1.1 1.3-1.7.8-1.7.8-.4 1.7-1.6 1.4c-1.2-.3-2-1.6-2-1.6s-.9-.2-1.4.6c-.6.7-.9 1-.9 1.7 0 .8.5 1.8 1 2.2.3.3 1.5 1.3 3 .6 1.4-.8.9-2 .9-2l.8-.5c.9-.6 1.8-1.5 2.5-1.7"></path><path fill="#f8c83c" stroke="#977c2e" stroke-width=".3" d="M335.8 250.8v3.2s.4 2.9-.2 3.7c-.6 1-2.9.7-3.2 0-.3-.8-.2-3.2-.2-3.2l3.6-3.7z"></path><path fill="#f8c83c" stroke="#977c2e" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" d="M333.3 260.5s-.5.8 1 1c.4 0 .7-.2.9-.4.4-.4.3-.8.3-.8s-.2 1.2 1.2 1.2c1.4.1 1.3-1.3 1.3-1.3"></path><path fill="#202220" d="M321.2 263.1s-.8-1.4.1-1.9c1-.5 1.5 0 2.1 0 .6 0 .4-1.4.3-1.7a3.7 3.7 0 0 0-.7-1.2c-.2-.2-3.5.2-3.4 2.3 0 2.1 1.6 2.5 1.6 2.5zm5 5.2s-1-1.5-.4-2.4c.5-.9 1-.3 1.2-.4.3 0 .4-.6 0-1.6-.5-1-1.1-1.4-1.4-1.5-.4 0-2.3 1.4-2 3.2a3.5 3.5 0 0 0 2.6 2.7zm18.2-1.8s3.5 1.5 3.7-2c.2-2-1.5-3.3-2-3.3-.4 0-.7.3-1.3 1-.7.8-1.1 1.3-.9 1.6.3.3 1.3-.3 1.8.8.7 2-1.3 1.9-1.3 1.9z"></path><path fill="#4b4139" d="M326.2 268.3s-2.7-.6-2.7-3.3c0-1.8 2-2.6 2-2.6s-1.8 1-1.8 2.6c-.1 2.7 2.5 3.3 2.5 3.3zm-5-5.2s-1.6-.3-1.7-2.6c-.2-2.3 3.5-2.2 3.5-2.2s-3.5.2-3.4 2.4c.2 2.2 1.6 2.4 1.6 2.4zm23.2 3.4s.7.3 1.5.3 1.8-.3 2-1.6c.4-1.3.3-2-.6-3.1-.6-.9-1.2-.8-1.2-.8s.6 0 1 .8c.6.8 1.3 1.6.8 3.1s-2 1.5-2.5 1.5a5.5 5.5 0 0 1-1-.2z"></path><path fill="#904720" d="m302.6 192.4-.6-.2.4-1 1.9-.7 1.8-.1 2-.1.8.6 1 2.3-3.6 2.2-.6.2-.2-1-.6-1.4z"></path><path fill="#202020" d="m337 245.5-.3-5.5-14.8 4.6 5.8 5.5z"></path><path fill="#d2a567" d="m309.4 235.9-1.2-1-1.4-.8h-1.1l-.2.3.2.5 1.3 1.6 2.3 1.2.8.7.5.2-1.1-2.7zm-.3 2.3.8.2.9 1 .5 1 .7 1.3.2.8-1.6-.3-4.8-1.5.4-1.2.8-.7.7-.3 1-.2z"></path><path fill="#d2a567" d="M312.2 242.2h.8l.6-.5-.3-1.8.3-5.8-3.9-4.6-.8 2.6 1.1 4.7.9 2.8z"></path><path fill="#ab6d29" d="M309.4 231.7s-.2.4.1 2c.3 1.5.9 4.9 2.2 7.2l-1.3-1.9s-2-4.6-1.7-8.2c.3-3.5.7.8.7.8zm2.9 2.9s-.9 1-1 1.9v2.2s0-1 .8-1.3c.9-.3.7 2.3.8 2.6l.5-4.7-1.1-.7zm.4 9.6-4.4-1c-2.3-1-3.5-1.8-3.4-2.3 0-.6 4 .1 4.6.2l2.4 1h1l1.9-.8.2 2-2.3 1zm-7.3-.8s1 .8.5 1a4.4 4.4 0 0 1-2.3.3l4.2 1 .9-.7-3.3-1.6z"></path><path fill="#d2a567" d="M304.2 242.2c.2-.2.3.7 1.8.8 1.5.2 2.2-.2 2.2-.2l.7.4.8.2-.7 1.1-2.8-.8-1.5-.8-.5-.7z"></path><path fill="#ab6d29" d="m314 240.3.8 1 .5-2.4v-2.5l-1.6-1z"></path><path fill="#4d2a15" d="m309.7 236.1-1.3-2.1-1.7-3.1 1-1.8 1.3 1.8s-.4 1.3-.1 2.5c.2 1.2.8 2.7.8 2.7z"></path><path fill="#d2a567" d="M300.8 244s.6-.9 1.9-1a7.6 7.6 0 0 1 2.4.2l2.6 1.4.6.9-5-.7-2.5-.8z"></path><path fill="#8f4620" d="m314 235 .2 4c0 1 .7 2 .6 2.3-.2.4-.4.6-1 .9-.6.2-2 0-2 0s1.3-.2 1.4-.5c0-.2-.4-1.4-.5-2.4 0-1 .1-2.2-.3-2.2-.3 0-.7.4-.8.6 0 0 .4-3.8.8-4.2.4-.4 1.6 1.6 1.6 1.6z"></path><path fill="#ab6d29" d="M304.7 243s-.5-.4-.5-.8c0-.3.6 1.6 3.4 1.5 2.8 0 2.6-.2 2.6-.2h1.3s-.3 1.3-.5 1.4a61 61 0 0 0-2.2 1.4l-.7.4v-.2l-.3-2.1-2.4-1-.7-.4z"></path><path fill="#8f4620" d="M309.7 236.1s-3.2-3.3-4.3-5.5c-1-2.2-.4-5.2-.4-5.2l3 4s-.4.7-.3 2c.2 1.2 2 4.7 2 4.7z"></path><path fill="#ab6d29" d="M307.6 248.3c0-.3-.2-1 .4-1.8 2-2.4 6.8-4 6.8-4v2.8l-6.2 3h-1z"></path><path fill="#8f4620" d="M308 246c.3-.1 1.4-1 1.4-1.3 0-.4-.7-.4-2.1-.7-1.5-.3-2.6-1-2.6-1s1.7 1.4 2.4 1.7c.7.2.6.5.5.7l.4.6zm8.3.7s-.9-1.3-1.2-2.1c-.3-.8-.3-2.1-.3-2.2l-1 .7-2 .7s2 0 2 .6c0 .7-3 1-3 1 0 .1 2.4-.4 2.3.1-.2.6-1.2.7-2.5 1.2l-2.3 1-.7.5s.6.4 1.5.3c.9 0 2.9-.5 2.9-.5l3.8-1.5.5.2z"></path><path fill="#ab6d29" d="M316.3 246.7s-1-.3-1.8-4.8-.6-5.7-.6-5.7l1.8 1.3 1.7 3-1.1 6.2z"></path><path fill="#8f4620" d="M316.9 239.3s-.9 2.5-.9 4c0 1.4-.1 2.4.3 3.4s1.8 2.3 1.8 2.3l.7-.6.3-2 .1-3.4-2.3-3.7z"></path><path fill="#202020" d="M319.4 242.7s.4 6.3-1.2 6.5c-.7 0-1.9-2.4-1.9-2.5 0 0 1.4 2.3 2 2.1 1-.4.6-6.6.6-6.6l.5.5zm-3.1 4s-.3 0-.7-.8c-.4-.7 0 .6-3.4 1.8-3.4 1.2-4.6.5-4.6.5s1.1 1 4.5 0 3.1-1.3 3.6-1.4h.6z"></path><path fill="#ab6d29" d="M310 238.7s.6.5 1.2 1.7a363.3 363.3 0 0 0 1 2h.2s-.4-1.3-1-2.2l-2.2-3.1.8 1.6z"></path><path fill="#8f4620" d="M308 246.5s.3-1.1 0-1.4c-.3-.2-.7 0-3-.2a34 34 0 0 1-4.2-.9s1.6 1 3 1.4l3.5.8.5.1.2.2z"></path><path fill="#202020" d="m308 246.5-.2-.5c-.3-.3-.7.1-3.5-.7-2.8-.7-3.5-1.3-3.5-1.3s1 1 3.4 1.5l3.8 1z"></path><path fill="#ab6d29" d="M309.3 238.2s-2.1.1-2.8.7c-.7.5-1.6 2-1.6 2l1.3.1s-.1-1.2.5-1.9c.7-.6 1.7-.7 2.6-.9z"></path><path fill="#8f4620" d="M305.3 234.2s.8 1.2 1.7 1.5c.9.4 1.8.8 2.2 1.2.4.4.9 1.8.9 1.8s-3-1.3-3.7-2a9.6 9.6 0 0 1-1.1-2.5z"></path><path fill="#8f4620" d="M308.2 235s-.3-.5-1.1-.9-1.4-.3-1.7-.1-.1.2-.1.2l1 1.7.7-.2s-1.6-1-1.3-1.3c.8-.7 2.5.5 2.5.5z"></path><path fill="#202020" d="m316.3 231.1 17-8.7 8 11.1-14.7 4-7.7.6-3.8-2.7z"></path><path fill="#4d2a15" d="m339 235.9 21 18.2-2.3 1.6-5-1.4-10.2-10.1-3.8-3.8z"></path><path fill="#4d2a15" d="m366 250.5-12-9.1-15.3-11.5.4 5.5 17.4 16 5.7 2.7 3-.8 1.4-1.6-.6-1.2z"></path><path fill="#803f1d" d="M339 237.6s6 6.9 10.6 10.4 9 7.3 10 6.7c.8-.5.5-1 .5-1l-21.3-17.5.1 1.4z"></path><path fill="#4d2a15" d="m353.8 255.1-2.1 1.7-2.5-1-13-13.2.7-2.5 1.8.3z"></path><path fill="#202020" d="M366 250.5s-1.6 3.8-5 2.9c-3.4-.9-22-18.5-22-18.5v1.8s18.8 17.3 22.5 18c3.6.7 6.6-2.5 6.2-2.8a43.7 43.7 0 0 0-1.7-1.4z"></path><path fill="#803f1d" d="M336.9 240.4s6 7.7 9.1 10.5c3.2 2.9 6 5 7.2 4.8 1.3-.2-.7-1.7-.7-1.7l-9.1-9-4.7-4.6s-1.8-.7-1.8 0z"></path><path fill="#202020" d="M338.4 240.4s15.2 15.5 16.4 15.9c2.5.7 6.2-2 6.2-2l-1.3-.7-.2.5s-.7 1.6-4 .9c-3.2-.7-16.6-15.1-16.6-15.1l-.5.5z"></path><path fill="#4d2a15" d="m344 255.3-5.5-6.4-1.2-2.1-.3-2.7 11 11.1-1.5 1-1.4-.4z"></path><path fill="#202020" d="M354.1 255.5s-1.3 2-3.2 1.6a5.4 5.4 0 0 1-2.8-1.7L337.5 245l-.3-1.6s11.7 12.3 13.7 12.8c1.6.4 2.7-1.4 2.7-1.4l.5.7z"></path><path fill="#202020" d="M348.2 255.1s-.5 1.6-2 1.4c-1.6-.3-2-.9-2-.9l-6.6-7.7-.1-2s6.8 9.3 8.3 9.8c1.6.5 2-1 2-1l.4.4z"></path><path fill="#b07229" d="M341.3 234.9s6.3 5.4 6.8 5.6c.5.3 2.7.4 2.8.7.2.3-1.4 0-1.5.3-.1.4 3.2 3 3.7 3.1.5 0 3.2 0 3.1.4 0 .3-1.8 0-1.9.4 0 .4 2.9 2.7 3.4 2.8.5 0 3.9 0 3.9.4 0 .3-2.7 0-2.7.5.1.6 4.6 3.4 4.4 3.8-.2.4-5.4-3.5-5.5-3.3-.2.2-.4 1.4-.7 1.6-.3.2 0-1.6-.2-2.4-.3-.8-3.4-3.1-3.7-2.9-.3.3 0 1.7-.4 1.7s.1-1.7-.2-2.3a16 16 0 0 0-3.6-3c-.4 0-.1 1.3-.4 1.5-.3.2-.2-1.5-.6-2-.4-.5-7-6.5-6.7-7z"></path><path fill="#4d2a15" d="M330.5 252.3s0 2.4-1 2.8c-1.1.3-3.1-4.4-3.1-4.4l-.5-4.4 3.1 3 1.5 3zm8.4-1.2V250c0-.6-.3-1.5-.3-1.5l-.2-2.4-.6-1.7-.4-1h-.7l-1.7 1.2-.5 1.6.8 3 .8 2.7 1.3.4 1.5-1z"></path><path fill="#4d2a15" d="M336.8 255.3c.3-.1-.4-3.4-.4-3.4l-2-4.8-.5-1.7-1.5-.6-1 1.2.2 1.9s1.5 3.2 2.2 4.3c.8 1.1 2.3 3.3 3 3.1z"></path><path fill="#202020" d="M335 245a6 6 0 0 1 1.4 2.6s1.3 3.6 1.1 4c-.2.3-1 .3-1 .3s1.8 1.8 2.3 1.6c.5-.2.3-2 .1-2.4-.1-.4-.7 0-1-.5-.1-.4-.8-2.7-.8-4.2v-2.7c.2-.3 1.5 3 1.5 4.7l.6.7-.6-3.2-.7-2.3c0-.2.3-.8.3-1.5v-1s.6.5.9.5c.3 0 .7-.4.8-2 .2-1.5-.1-6-.1-6l-6.8 9 2 2.5z"></path><path fill="#202020" d="M335 244.3s-.3 2.4.6 4.8l1.3 3c.2.3.2 2.9-.1 3.2 0 0-1.8-4.4-2.4-6.6-.5-2.1-.7-3-1-3.2l-.8-.2 2.4-1z"></path><path fill="#4d2a15" d="M334.4 257c.2 0 0-1 0-1l-.2-2.3-2.4-4.9-2.6-2.3-1.4-2-.2 4s2 4 3.1 5c1.3 1.2 3.3 3.6 3.7 3.5z"></path><path fill="#202020" d="M324.7 246s.4 1.1.4 1.8v1.4l1.8 3.5c.9 1.5 1.7 3.1 2.4 2.8.7-.4 1-1.5 1-1.7.1-.1-.8 1.3-1.2 1.1a40 40 0 0 1-2.3-6.6l-1-.8a18.4 18.4 0 0 1-1.1-1.4zm7 5.5-1.7-3.1c-.5-1-1.2-1.7-1.4-1.7-.2 0-.5-2-.5-2s.7 1.3 1.6 1.7c1 .5 1.5.8 2 .7l.2 2-.2 2.4z"></path><path fill="#5c3a1d" d="M327.4 248.3s.5 1.4 1.4 2.7c.8 1.3 2.3 2.9 2.3 2.9s-1.6-1.6-2.5-2.8a14 14 0 0 1-1.4-2.8h.2z"></path><path fill="#202020" d="M332 246.7s.5-1.2.8-1.3l1.2-.3s-.7-.1-1.2-.8l-1.3-1.3.4 2 .1 1.7zm-.4.4s2 4 2.4 5.5c.5 1.3.4 3.4.4 3.4s-.2-1.5-.6-2.7l-2.4-5c-.1-.3.2-1.2.2-1.2z"></path><path fill="#4d2a15" d="m334.2 244.4.5-6-.5-2.2-2.7-6s-.1.8-.8.8a6.2 6.2 0 0 1-3.1-1.8 9.2 9.2 0 0 0-.2 4.8l5.3 9.9 1.5.5z"></path><path fill="#8b441f" d="M323.8 248.3s.8 1 1.3 1c.4-.2.3-2.1-.3-3.2-.6-1-7-9.6-8-10.1s7 12.3 7 12.3z"></path><path fill="#8b441f" stroke="#5c3a1d" stroke-width=".1" d="M328.1 244.8c.2.4.6 3.1-.5 3.4-1.5.3-8.5-9.4-9.6-10.7 0 0-4.4-2.8-4.5-3.5-.1-.7 4.7 1 4.7 1l9.5 9 .5.8z"></path><path fill="#202020" d="M323.8 248.3s-.8-1.3-.9-2.3c0-1-.4-1.5-.4-1.9 0-.3-5.2-7.7-5.7-8.2-.6-.5-2.3-1.4-2.3-1.4a15.5 15.5 0 0 0 .3 2.4s1.6 3 4 5.7a458.4 458.4 0 0 0 5 5.8z"></path><path fill="#4d2a15" d="M331.6 247c.7-.3.4-2.7.1-3.5a458.4 458.4 0 0 0-4.4-9.4l-1.3.4-2.3-1.8-1.4-1.5s.5 2.1.4 3.1v1.6l3.3 5.9 5.6 5.3zm4.7-5.2 1-1.3-.5-4.4-2.8-9.4s-.7.1-1.4-.3c-.6-.4-1.4-1.3-1.4-1.3l.7 5.7 2.9 8 .2 2.3 1.3.7z"></path><path fill="#202020" d="M327.7 244s-2.8-3-3.7-4.5l-1.7-3s-.8.3-1.8 0c-1-.5-2.2-1.8-2.2-1.8s-.8 1.5 3.2 5.6c4.6 4.6 6.2 3.7 6.2 3.7z"></path><path fill="#8b441f" d="M334.4 245c1.2-.4 1.1-5.4 0-8.7-1-3.3-2.9-6.2-2.9-6.2s2.3 5.4 2.8 7.5c.4 2.2 0 3.7-.4 3.6-.4-.1-.4-1.3-1.3-3.4-1-2-1.6-2.6-1.6-2.6s3.3 8.8 2.3 8.6c-.9-.2-5.3-9.9-5.5-10.2-.2-.2-.4.4-.4.4s4 12.2 7 11z"></path><path fill="#4d2a15" d="m337 221.3 2 4.2.6 4.4.2 3.7s0 7.4-.8 7.6c-1 .1-1.4-.7-1.4-.9a2729 2729 0 0 1-1.7-8.3l-1.7-8.5.6-.6.2-1.2 1.3-.1.7-.3z"></path><path fill="#8b441f" d="M331.6 247c.8 0 0-2 0-2s-.6 1-1.2.3c-.5-.7-1.3-3.1-1.3-3.1l-.5-1.5s-.6 1.6-1.3 1.6-4.6-6.4-4.6-6.4l-.4.6s5.4 11.1 9.3 10.6z"></path><path fill="#202020" d="M329.1 242.2s.7-1.6.4-3c-.3-1.5-2.2-5.1-2.2-5.1s-.6.1-1.4-.2a9.6 9.6 0 0 1-2.2-1.2 38.3 38.3 0 0 0 5.4 9.5zm3.1-2.3s-.5-3.4-2-6.6c-1.6-3.1-2.6-4.1-2.6-4.1v3.5s1.5.5 2.6 2.4c1 2 2 4.8 2 4.8zm4.3-5.8s-.3-3.7-.8-5.8l-1.2-5s0-.2.3-.4h.6c.8.3 1.1 2.2 1.1 2.2l-.1-3.1-.3-.5h-1.4s.3 1-.1 1.3c-.3.3-.6-.2-.7-.3l-.2.4.4 2-.1 1.7s.5 2.2 1.2 3.5c.6 1.4 1.3 4 1.3 4zm3.3-.5s.6-5.3-.6-8.7c-1.2-3.4-2.2-4.2-2.2-4.2l-.6.6s1.8 3 2.4 5.6l1 6.7zm-5.4 2.7s-.6-4.1-1.3-6.8a82.8 82.8 0 0 1-1-3.6l-1.1-1s.7 2.7.6 3.6l-.1 1.4s.5 1.4 1.3 2.6a25.5 25.5 0 0 1 1.6 3.8z"></path><path fill="#904720" d="M337.2 242.9c1 0 .1-6-.3-7.5-.4-1.6-3-8.8-3-8.8s3 10.3 2.8 10.8c-.3.8-1.5-3.1-1.7-3-.2 0 2.2 6.9 1.3 7-.8 0-1.3-1.5-1.3-1.5l.1 1.5s.6 1.4 2.1 1.5z"></path><path fill="#904720" d="M338.5 239.9c.7 0-.2-5.7-.7-8.2l-2-7.5s1.5 3.5 2.3 7.5c.8 4 1.4 9 .6 9.2-.8 0-1.2-.8-1.2-.8v-.9s.3.7 1 .7z"></path><path fill="#312317" d="M328.8 246.5c0 .4 0 2.4-1 2.2-1-.1-2.9-1.9-3.3-3 0 0 2.2 2.5 3 2.4.8 0 .8-2.5.6-3.2 0-.6.6 1.6.6 1.6z"></path><path fill="#d2a567" d="M334.1 219.5s1.4.9 2.4.3a4 4 0 0 0 1.8-3c0-.8 0-1.5-.7-2.4-.7-.9 1 .7 1 2.3 0 1.6 0 4.3-2.5 5-2.5.5-1.4-.2-1.4-.2l-.6-2z"></path><path fill="#8f4620" d="M332.1 214.7s1.6 2.6 2.2 5c.7 2.3.5 3.2.2 3.3-.4 0-.6-.3-.7-.9 0-.6-1.7-7.4-1.7-7.4z"></path><path fill="#1e2121" d="m304.1 218 10.6 15.3 13.2-15-8.3-8.6z"></path><path fill="#4d2a15" d="m317.5 208.5-.6 2.4 1.3 4.1 2.2 2.3 2.5 1.7.6-2 .6-2.2.7-.2 1.6.6 1-1.5 1.8-3.1-.4-1.2-.4-.9-2.7-4.6-.9 1.7-.8.5-1.6-.8-1.8 2.4-2.3-1z"></path><path fill="#5c3818" d="M323 219s.4-.3.6-1.6c.2-1.2.2-4.9-.1-6.4-.3-1.5-1.3-4.4-1.5-4.2-.2.3 1.5 3.3 1.3 7-.3 3.6-.2 4.6-1 5-.7.3.6.2.6.2z"></path><path fill="#5c3818" d="M323.6 212.8s1.7 2.5 2.5 1.6c.9-.9.5-4 0-5.3l-1.2-3 .5-.6.9 3.4c.3 1.4 1.3 5.2.1 6-1.1.6-2.8-1.5-2.8-1.5v-.6z"></path><path fill="#8f4620" d="M317.9 214.6s.6-1 1.4-1c.8 0 1 .3 1 .3l.6 2 1.2 2.2 1 1-.5.6-.9.2-2.5-1.4-.7-1-.6-3z"></path><path fill="#d2a567" d="M322 236.3c-.8.5-2.7-.5-3.7-1.4l-6.8-6.7-.8-3.2 2.2.6 3.9-1.7.7-1.3 4.6-2.4 2.6-1.4 5.5-.1 1.4-2.7s1.8 3.2 2.1 4.5c.4 1.4.3 5.4-.2 5.7-.5.3-2.3-1.2-2.6-1.3-.2-.1 1.4 5.7 0 6-1.3.2-3.6-2.2-3.6-2.2s1 5.2-.2 5.2a10 10 0 0 1-5-2.6s1.3 4.3 0 5z"></path><path fill="#8f4620" d="m321 229.6 1.1 1.7c.3.4 0 2.9-.2 3.4-.3.9-1.6-1.2-2.3-3l-2.2-3.8c0-.4 3.5 1.7 3.5 1.7zm10.8-12.9s2 8.1 1 8.4c-1 .3-3.6-2.6-4-3l-4-6.4-.8-.8.2-.4 1.7.6 6 1.6z"></path><path fill="#8f4620" d="M317.9 232.3c-.4.3-1.3-1-1.7-1.4l-3-3.3a11.5 11.5 0 0 1-2.2-2.5c0-.3-.8-1.1-.8-1.1l.7-1h.9s5.4 4.2 5.7 5c.4.6.6 4.1.4 4.3zm8 0c-.2.3-3.7-2.3-5.2-4.4-1.5-2.2-3-4-3.5-5l-.6-1.9 1 .2s8.8 10.8 8.4 11.2zm1.3-3.7c-.2.3-1.7-.9-2.7-2.1-1-1.3-.4-2.9-.4-2.9s3.3 4.8 3.1 5zm2-.5c-.5.3-2.5-2.2-4.2-5-1.3-2-1.6-2.3-1.8-2.5-.5-.3-1.4-.4-1.4-.4l-.2-.3 1-.2.6-.8 1-1.3 4.3 8.5s1 1.9.7 2z"></path><path fill="#ab6d29" d="M318.3 234.9c0 .3 0 .6-1.2.5a21 21 0 0 1-9.9-7.8l-3-5 1.1-1.4 9.6 11 3.4 2.7z"></path><path fill="#8f4620" d="M318.3 234.9c0 .5-.5.6-1.1.5-.6-.2-3-1-6.9-5.3a33.3 33.3 0 0 1-5.3-7.4l-.2-1.8 1.2-.5 6.5 10 5.8 4.5z"></path><path fill="#4d2a15" d="M324.6 230.6s-2-1.5-3.2-3a24 24 0 0 1-3.8-5.7c.1-.7 1.2-.7 1.2-.7v-1.8l.2-.6 1.9.8 2.3 2.9.9 1.1s1.5 3.7 1.2 4c-.3.3-2.4-2-2.7-1.7-.3.3 2.4 4.4 2 4.7zm-3.7-1s.7 1 .4 1.7c-.3.7-.5 1-1.5-.4a16 16 0 0 0-2.3-3c0 .1.1 2.3-.3 2.3-.5 0-2-1.9-3-3.3l-2.5-3.9v-2l-.1-2.5.3.9.4.7 3.6 4.2 1-.7 2.1 4 2 2zm-13.5-6.1s2.8 4.8 5.3 7.5a17.4 17.4 0 0 0 5.6 3.9l-8.4-9.9-2.5-1.5zm21.2 2.8a12 12 0 0 1-3-3.4c-1-1.6-1.9-4-1.8-5 0-1 .4-3.4.4-3.4s2.8 3 3.4 4.3c.5 1.4 1.7 3.3 1.4 3.5-.2.2-2.1-1.3-2.4-1-.2.4 2.3 4.8 2 5zm3.2-3c-.3.1-1.8-1.6-2.1-2.6a14.8 14.8 0 0 1-.6-3.2l-1.2-3v-3.3l1.4-.2 1.9 2.7s.7 1.5.7 3.7c0 2.3.3 5.6 0 5.8zm-22.5 8a41.8 41.8 0 0 1-4-6l-1-2.9.5.4s.8 3.2 4.7 7.1c4 4 4.9 4.2 4.9 4.2s.7 2.2.4 3c0 0-2.9-2.6-5.5-5.7z"></path><path fill="#202020" d="M313.6 235.9s-3.4-3-6-6.4a46.6 46.6 0 0 1-4.4-6.6l1.2-1a46.3 46.3 0 0 0 9.2 14zm4.7-1-6-6.1c-2-2.2-3-4.4-3-4.4l1.6.6s.7 1.7 2 3.5l5.4 6.4zm-.8-7s-2.1-2.6-3.1-4.2l-2-3.8s2.8 3.3 3.6 3.5c.9.2.9 0 .9 0s-.4 1.2-.1 2.2l.7 2.3zm.9-10.6s.3 1.9.1 3c-.2 1-.8 1-.8 1a15.7 15.7 0 0 0 4 4l-1.8-2.7c-.5-1-1.3-2-1-2.8.4-1 2.1.6 2.6 1l2.6 2.8s-.8-2.5-1.8-3.4a53.6 53.6 0 0 0-4-2.9z"></path><path fill="#202020" d="m327 222.8-1.7-4.2-1.6-5.2v2.8c-.1 1.2-.5 3-1 3.3-.6.2-.7.3-1.7 0-1-.2.7.5.7.5s1 0 1.4-.5c.4-.5.5-1.5 1-1.4.4.2 1 1.7 1.3 2.4l1.6 2.3z"></path><path fill="#202020" d="M323.7 213.4s2 2.3 3 1.3c.8-1 .3-4 .3-4s1.2.5 1.6.2c.4-.4.2-1.5.2-1.5s2.3 3.2 3.3 5.3c1.1 2 1.6 5.8 1.6 5.8s-1.8-3-2.7-5.8c-.9-2.6-2.1-3.8-2.3-3.5a5.3 5.3 0 0 0-.3 3c.2 1 1 2.1 1.5 3.5l1.1 3.4-1.6-2.5c-.7-.8-1.3-1.2-1.7-1.6-.4-.4-1-1.2-1.7-1.4-.6-.3-1.8-.9-1.8-.4s-.3-1-.3-1l-.2-.8z"></path><path fill="#171717" d="M316.8 223.3a27 27 0 0 0 4.2 6.3s-2-1.8-2.8-3a15.5 15.5 0 0 1-1.4-3.3z"></path><path fill="#8f4620" d="M330.2 223.9c-.3 0-1.3-.3-1.4 0 0 .4.6 1.8 1.3 2.5.7.7 1 .7 1.1.6.2 0 0-.7-.2-1.4v-1.7c-.1-.3-.8 0-.8 0z"></path><path fill="#d2a567" d="m306 209.4-1.3.7-1.4 3 .4 5.3 2.1 3c.8 1.2 3.5 4.2 4.2 4 .7-.2 1.4-2.3 1.5-3.4l.2-3.2 1.8 2.3c1.1 1.3 2 2.4 2.6 2.3.5 0 2-3.2 2-3.6.1-.4-3.8-10-3.8-10l-1.8-1-6.6.6z"></path><path fill="#ab6d29" d="m314.8 217.4 1 3.7c.5 1.2 0 2.3.3 2.3.2 0 2.3-2.7 2.3-4 0-1.2 0-2.5-.5-6.3s.2-5 .2-5l-1.2-1-2 4.2-.1 6.1zm-7-2.2.7 5c.3 1.2 1 3.3 1.4 3.2.4 0 1.6-3.3 1.7-4.4 0 0-.9-1.6-.8-5.5 0-4-.4-4.4-.4-4.4l-2.6 6.1z"></path><path fill="#45392d" d="M302.5 207.5s-3.1 4.6-3 7c0 2.5.4 2 1.1 4.2.7 2.3 1.1 5.6 1.2 5.9 0 .2.5-.2.5-.5l.2-16.6z"></path><path fill="#ab6d29" d="M302.5 208s-2.7 4.3-2.5 6.6c.2 2.3.5 2.3 1.3 4.4.8 2 .8 5.4.8 5.4s1-.2 1.9-.9c1-.7 1.8-2.1 1.8-2.1l-1-2.1a8 8 0 0 1-.6-2l-.8-1 .2-4.1.7-3v-1l-1.8-.1z"></path><path fill="#dbad6c" d="M317.2 215.3s-1.3-.3-1.9-.6c-.6-.3-.8-1.1-.8-1.1l.4-.8 2.3 2.5z"></path><path fill="#d2a567" d="M303 208.5s-2 4.3-1.7 7.2 1.9 6.6 2 6.7c.2 0 0-.3.1-1v-8.7l.9-2.8v-1.5l-1.3.1z"></path><path fill="#8f4620" d="M307.8 209.5s.3 1.2.1 1.8c-.2.5-1.2 1.2-1.6 2-.5.8-1 2.8-1 2.8s.4-1.1 1-1.8c.7-.7 1-1.2 1-.8.2.4.4 2 .3 2.3-.1.3-.7.8-1 2-.4 1.3 0 2.4 0 2.4l.5-2.2c.2-.6.7-1 .7-1l1 2.4s0-1.1.3-2c.1-.8 1-2 1.3-2 .3 0 .8-.1-.3-.7-.4-.2-.1-4.2.1-4.4.3-.2 1.9-.2 1.7-.8a11 11 0 0 0-1.6-2.2c-.1-.1-2.5 2.2-2.5 2.2z"></path><path fill="#dbad6c" d="m317 218.1-1.5-.3c-.5 0-.6-.6-.6-.6l.2-.6 1.2.7.7.8z"></path><path fill="#8f4620" d="M304.4 218.6c0 .4-.3.9-.5 1.5-.3.7-.4 1.6-.4 1.6l-.4-3.3-.3-2.4c-.2 0-.7.7-.7.7s0-1.6.3-2.3c.3-.7.5-1.8.3-2-.3-.1-.8.3-1 .7a30.8 30.8 0 0 0-.8 1.3s.3-1.3.6-1.9c.3-.5 1.8-2.2 2-2.8.4-.7.4-1.4.4-1.4h1s1 .8 1 1.5c0 .4-1 .9-1 1 0 0-.8-.1-1 3.2-.2 3.4.6 3.2.5 4.6zm9.4-8.7s.2 1.8 0 2.4c-.2.6-.7 1-1.1 1.8-.4.7-.4 2.4-.4 2.4l.5-1.4.7-1c.1 0 .6.7.8 1.7l.8 2.5s-.2-1.2.1-1.2.5-.1.9.2l.9.8s0-.5-.7-1.1c-.6-.7-1-.6-1.1-1.5-.2-1-.3-1.8-.2-2.2 0-.3.5.3.9.7l1.5 1.4-.7-1v-3c0-1 0-1.9.4-2.1.3-.3.4-1.6.2-1.8-.1-.2-3.5 2.4-3.5 2.4z"></path><path fill="#1e2121" d="M324.6 206.1a23.7 23.7 0 0 0 1.5 7.1s-1-2-1.6-3.6-.9-3.5-1.3-3.6c-.4-.2-1 .8-1 1.5s.5 3.3 1.1 4.2c.6 1-1-1.2-1.3-2.3l-.7-2.2s-.4 1-.3 2c.2 1.1 1.1 2.7 1.1 2.7l-1-1-.6-.7s0 1.5.4 2.1l1.2 1.7-1.3-1-.4-.8s.2 2.1.6 3.3l1.5 3s-1.2-1-2-2.9c-.8-1.8-1.2-7.3-1-8.1l1.1-1.9c.6-.8 1.3-4.7 1.3-4.7s.9 3.6 1.5 4.3c.6.7 1.2 1 1.2 1zm-8.6-1 .8 1.3.6 1s-1 1.1-2.3 2c-1.2 1-2.8 2-3.1 1.5-.4-.5-.4-1-.4-1s1.4-.8 2.4-1.8a6.6 6.6 0 0 0 1.6-2.2c.2-.6.5-.9.5-.9zm-10.9 3.5s.2 2.2 1.2 2.2c.9 0 3.7-2.9 3.9-3 .2-.1.4-.8.4-1l-.2-.8s-3 3-4 3.2c-.9 0-1.3-.6-1.3-.6zm.1-3-.3 2c0 .5.2.9.2.9s-2.2.7-2.5 0c-.4-.6-.1-1.6-.1-1.6h1.5c.6-.2 1.2-1.3 1.2-1.3zm20.3-3.1 1.5 3.2 1.4 2.8s-1.4-1.7-1.9-2l-1.2-1 .2-1.1v-2z"></path><path fill="#dbad6c" d="M302.1 207h1.3c.5 0 .8-.2.8-.2l.9-1.2s-.5 1.4-.2 2.5c.3 1 1 1.1 1.2 1.1a4 4 0 0 0 2.2-1.1c.9-1 2.1-1.9 2.1-1.9s-.3 1.3.2 2.7c.5 1.3 1.2 1.3 2.2.4 1-.8 2-2.2 2.6-2.8l.7-1 1.1-1 1-5.4-.5-.7-1.4.7-1.7-.7-.5-.7-1 1.7-1 .6-.5.1-1.2.3-.5-1.1-.3-.8-.6-.3-2.4 2.5-1.4-.1-1.3 2.2-1 1.3-1 2.4.2.5z"></path><path fill="#8f4620" d="M313.9 201.5s.2 1.3-.5 3.6-1.6 3.9-1.6 3.9 2.4-1.5 3.6-4.2c1.1-2.6.9-5.7.9-5.7l-2.4 2.4zm3-2.5s.2.4 0 2.4l-.8 4 .6 1.2c.4.7 1.2 1.8 1.7 1.6.6-.2 1.6-.9 2.2-2.2.6-1.4 1.1-2.7 1.4-2.9.2-.2.3.1.4.2 0 .1.3 1.3.9 1.8.5.5 1.3 1.3 1.6 1 .4-.2.8-.9.7-1.2l-1.3-4-1.6-4-1-1.6-2.8.3-2 3.4z"></path><path fill="#ab6d29" d="M321.7 195.3s.8 1.7.9 3.6c0 1.8-.4 3.8-.4 3.8s.2-2.3 0-3.7c-.3-1.4-.7-2.3-.7-2.7l.2-1z"></path><path fill="#4d2a15" d="M325.6 202.6v2.3c-.2.8-1.3-.5-2-3-.6-2.5-.5-3-1-4.3l-.9-2.2 1.5-.3 2.4 7.5zm-7 4.6s2.8-1.5 3.1-6.2c.2-2.1-1.2-5.7-1.2-5.7s0 3.8-1 6.2a60.9 60.9 0 0 1-1.9 4s.7-.2 1-.6l.8-1.1s.1.7-.1 1.6l-.6 1.8zm-2.3-8.1s-.1 1-1.3 2c-1 .9-3.1 1.9-3.1 1.9s1.5-1.4 2-2.6c.6-1.2.1-2 .1-2s-.2.6-.8 1.1c-.6.5-1.6.6-1.6.6s0-.6.7-1.3c0-.1 0-.4.2-.7.3-1 1.1-2.3 1.1-2.3s.7 1.4 1.3 2l1.4 1.3z"></path><path fill="#1e2121" d="M324.7 193.6a17.6 17.6 0 0 0 .9 9s-1.4-2.2-1.7-3c-.4-1-.4-2.3-.7-3a3.2 3.2 0 0 0-1-1c-.3-.2-1-.1-1-.1s.8-.4.8-1.1v-1l1.4.3h1.3zm-6 9.8s1.4-2 1.8-4.6c.4-2.6 0-3.5 0-3.5s-.6 0-1.1-.5c-.5-.5-1.3-1.8-1.3-1.8s.2 1.4 0 3c-.4 1.6-1.8 3-1.8 3s.8.4 1.4 0c1.5-.9 1.4-2.5 1.4-2.5s.3.2.3 2.2-.7 4.7-.7 4.7z"></path><path fill="#8f4620" d="M301.2 206.9c-.3 0 1-2 1.8-3.4l2.1-3.4s.3.3.8.3a3.6 3.6 0 0 0 2.4-1.7 7 7 0 0 0 1-2.5c0-.3-.1 1.8 1 3 1 1.1.9 1 1.3 1 0 0 0 1.4-.4 2.7l-.8 3.3s.2-2.5-.3-3.2c-.4-.8-.6 0-1 1-.3.9-1.1 1.5-1.1 1.5s.6-1.1 1-2.3c.4-1.2.2-1.2 0-1.2 0 0-.2-.1-.6.4-.5.5-.9.6-.9.6s.5-.4.7-1a6 6 0 0 1 1-1.8c.2-.3.4-.7.4-1 0-.2 0-.7-.2-.7s-.5.3-1.4 1.2l-1.3 1.3-.9 2.6a17 17 0 0 1-1 2.8l-.6.4.9-2.4 1-3.4c-.2-.3-.7-.3-.8 0l-2 2.8c-1 1.4-1 3.1-1.2 3.2l-1-.1z"></path><path fill="#874f20" d="M325.7 192.1c0 .2 0 1.2-1 1.5a3.5 3.5 0 0 1-2.3-.2c-.2 0-.2-1.4-.2-1.4l3.5.1z"></path><path fill="#b27129" d="M306 195.4s-.2.9-.8 2c-.5 1.2-1.4 2.2-1.3 2.4 0 .1.6.7 1.4.6.8 0 1.1-4.8 1.1-4.8l-.1-.2h-.3z"></path><path fill="#dbad6c" d="M318.4 192.7s-.3 6.4-2.1 6.4-2.7-3.2-2.7-3.2-.1 4.3-2.4 4.3c-1 0-2.1-3.4-1.9-4 0 0-.4 2.3-1.5 3.2-2.2 1.7-3.5.9-3.6.6 0-.3 1.8-2 2-4.6 0 0 .4.1 1-.6s.7-1.6 1.3-1.5c.5.2 3-1 3-1l1.4-1.7s.2.5 1.2-.2a3.6 3.6 0 0 0 1.3-1.7l2.7 2.3.3 1.7z"></path><path fill="#b27129" d="m311.4 186.6 2.7 3.8.6-.5c.4.5.6.9.4 1.2-.4 1-1.3 2.3-.5 3.7 0 0-.3-.8.1-1.8s.7-1.4 1-1.3c.2 0 .6 5.8 1 5.8.3 0 .9-2.7.9-4.5 0-1.8.3-.3.5 0 .2.4 1.8 3 3.1 2.6 1.4-.4 1.2-2.8 1.2-3.3 0-.6-1-3.7-1-3.7l-6.1-3.9-.5 1.6c-.3 1-3.4.3-3.4.3z"></path><path fill="#8f4620" d="M320 186s.4.4 1 1.9.7 6.4-.1 6.4c-.8 0-2.3-1-2.6-1.6-.3-.7 0-3.1-.4-3.8a8.1 8.1 0 0 1-1.2-2.7l.1-2 1.4-.5 1.9 2.3z"></path><path fill="#4d2a15" d="m319.6 184.5 2.6 3.9 2.3 3.3 1.2.4a2.5 2.5 0 0 1-3.2.5c-.9-.5-.4-2-1.5-4.5-1.2-2.5-3.2-3.6-3.2-3.6l.7-.7 1.1.7z"></path><path fill="#1e2121" d="M318.2 182.4s2.3 1.5 3.1 3.2c.9 1.7 1.3 2.7 2.3 4.3 1 1.6 2.1 2.1 2 2.2 0 .1-.7.3-1.2 0a4.7 4.7 0 0 1-1.4-1.6 35 35 0 0 0-2.4-4.2c-.5-.7-2.3-2-2.3-1.9 0 .1.5.5 1.5 2.1a7 7 0 0 1 1.2 3.1l-1.1-2c-1-1.5-2.8-3.3-2.9-3-.1.2 1 1.9 1.5 2.9l1.3 3.3-1.8-3c-1-1.5-1.2-1.3-1.6-1.8l-1.4-1.8s1 .3 1.8-.3c1-.6 1.4-1.5 1.4-1.5z"></path><path fill="#8f4620" d="M312.3 186.7s1.5.3 2.3.2h1.1s.5.6.5 1.4c0 .7-.5 2.1-.8 2.2-.2 0-.2-1.3-.5-1.8l-2.6-2z"></path><path fill="#b27129" d="M313.1 190.6s.5 1.6.1 3.9c-.4 2.2-1.7 4.6-2 4.6-.3 0-.2-2.6-.4-4a38.8 38.8 0 0 0 0-.4l-.5 1.6.4-2.6-.1-.8 1.6-2 .9-.3z"></path><path fill="#8f4620" d="M310.3 192.3c-.5.5-1.2.4-1.8.6-.6.2-.9 1-.9 1s.5-.3.7-.2c.3.1.5.1.1 1.2-.5 1.1-2.2 3-2.1 3 0 0 2-1.5 2.5-2.5.7-.9.6-1.4.8-1.8 0-.3.8-.7 1-.7.1 0 .5 0 .6.7l.6 2.6.8-2.6c.2-1 .2-2.9.2-2.9l-.6-.1c-.5-.1-1.5-1-1.5-1s.2 2-.5 2.7z"></path><path fill="#dbad6c" d="M318.3 180.8s.6 1.5-.7 2.6c-.4.3-.7.5-1.4.6a4.5 4.5 0 0 1-1.7-.6l-4-1.6-2-.6-1-.3.2-1.1h3l3 1.2 1.3.5 1.1.2h.9l.7-.2.4-.3.2-.4z"></path><path fill="#ab6d29" d="M318.3 180.8c0 .3-.3 1.1-.6 1.3-.3 0-.8.3-2 0-1.1-.2-2.3-1-3.6-1.3-1.3-.4-2.3-.7-3.3-.7s-.5-.4-.5-.4 2.3-.3 4.3.5c2 .7 2.9 1.2 4 1.2 1.4 0 1.7-.6 1.7-.6z"></path><path fill="#4d2a15" d="M307.6 179.6h.9c.4 0 .7-.3.7-.3s0 .5-.2.7c-.3.2-1 .1-1.2.1l-.2-.5z"></path><path fill="#dbad6c" d="M315.3 184.4s1.3 1.3 1 2.4l-2.7-1.2-4.2-1.7-2.3-.7-.3-.4.6-.8.2-.8 2.8.4 3 1 1.9 1.8z"></path><path fill="#dbad6c" d="M312.4 186.3s2.4 3.1 1.8 4.1l-5.6-3.5-2 3.3-4.7-2.3s3.8-3 4.2-3.5l.5-.7 2 .4 3.4 1 .4 1.2z"></path><path fill="#ab6d29" d="M311 181.6s2 .5 3.3 1.2c1.3.6 3 .8 3 .8s-.6.7-2 .8c-.4 0-1.4-.8-2-1.3-.7-.4-2.6-1-2.6-1l.3-.5z"></path><path fill="#4d2a15" d="M307.6 180.6s1.4.3 2.2.7c1 .3 1 .2 1.2.1.3 0 .3-.2.3-.2s.2 1-.5 1-1-.3-1.8-.7c-1-.4-1.5 0-1.5 0v-1z"></path><path fill="#ab6d29" d="M315.4 186s1 .7.9.9c-.2 0-.7.3-1.6.4a3.4 3.4 0 0 1-2-.4c-.6-.2-1-1.3-2.5-2a18 18 0 0 0-2.8-.9l-1.3-.2 1-.4 3.2.6 2.8.9 1.7.8.6.4zm-5.4 2 .6 2.6-.4 1.5-.8.6-.8-.3-.3-.5s.4-.6 0-1.1c-.3-.6-2-1.2-2-1.2s.7-1.3 1.4-1.6c.8-.3.4-1.2.4-1.2l1.9 1.2z"></path><path fill="#4d2a15" d="M306.8 182.8s.5.4 1.5.5c.5 0 1.3.2 2.2.5l1-.3-.5.4c.9.2 2 .7 2.5.9a5.8 5.8 0 0 1 2 1.3l-2-1a17.4 17.4 0 0 0-3-.9c-2-.3-4-.2-4.3-.4-.4 0 .1-.1.4-.3.2-.2.2-.7.2-.7z"></path><path fill="#ab6d29" d="M314 189.8s.7.7 0 .9c-.6.2-2.4.2-3.2-.7l-.6-1.2a14 14 0 0 0-2.4-1.7c-.7-.5.3-.5.3-.5l3.6 1.5a13 13 0 0 1 2.3 1.7z"></path><path fill="#4d2a15" d="M314 189.9s-1.2-1.8-4.9-3.3l1.2-.2h-2a24 24 0 0 0-.8-.3c-2-.6-2-.6-2.2-.8-.1-.3-.4 0-.6.3l-.7 1a5 5 0 0 1 2.5-.1c1.1.3 1 .7 1 1-.1.5-1.4 2-1.3 2.1.2 0 1-1.5 2-1.3 1 .3 1.2.8 1.2.8s0-.6-.2-.8c-.2-.2-1.3-1.3-1-1.3.3 0 1.6.3 3.3 1.2 1.8.9 2 1.1 2.6 1.7z"></path><path fill="#dbad6c" d="M308.1 187s2.8.8 2.7 3.8c-.1 3-2.3 2.4-2.5 1.3-.2-1 .3.5 1 .4.9-.2 1-1 1-2.2 0-1-.3-1.6-1-2.2a12 12 0 0 0-1.2-1z"></path><path fill="#6c3f18" d="M296 179.9s.4.2-.4 2.3c-.8 2.1-1.3 2.8-2.5 4.2-2.2 2.4-3.2 2.5-3 3.5.3 1 1.1.8 1.3.8.2 0 4.3-6 4.3-6l.9-3.5-.2-1-.3-.3z"></path><path fill="#dbad6c" d="M306.1 175.6s1.2 1.8.8 5c-.3 3.4-4.7 6.3-4.7 6.3l-6.4 4.4-2.7-.2h-.8c-.4-.1-.8-.5-.9-.5l-.5-1.2.9-1 2.3-2.3 1.4-2s.7-1.3.8-2.5c0-1.1-.2-1.7-.2-1.7l.5.8.3 1.8-.2 2 1.6-1.2 2.2-1s.7 0 1-1.3c.5-1.2.9-3 .9-3.8l-.1-1.8h.3c.2 0 .7 1.2.7 1.7l.4 2.8 1-1 1-1.5c.2-.5.4-1.3.4-1.8z"></path><path fill="#904720" d="M306.8 192.2s.5.4.3 1.6c-.2 1.2-1.1 1.8-1.6 1.8V194l-1.4-1.2-1.5-.4.3-.3c.1-.2 1.7-.8 1.7-.8l2.2.9z"></path><path fill="#ab6d29" d="M305.7 192.2s.5.4 1.2.3c.7-.2 1-1.3.6-1.8-.4-.4-.2 1-.7 1.3-.4.1-1-1.2-1.5-1.3-.7-.1-1.6.3-1.9.7-.2.4 1 0 1 0l.7.3h.5l.1.5z"></path><path fill="#904720" d="M296.5 187.6s.8.3 1.7.1l3.1-1 1.8-1.3c.7-.7 3.1-2.2 3.4-5.1.2-3-.4-4.7-.4-4.7s3.5 3.8.5 8.2c-2 2.8-3.8 3.7-3.8 3.7s3.4-1 3.7-.2c.3.8-.1 2-.2 2.3 0 0 1.9.4 2.2 1.4.1.6-2.2-.7-4-.2-1.8.4-2.5 1.4-2.5 1.4s-.4-.5-2-.5c-1.5 0-2.2.7-3.1.7-1 0-3.7-.6-4.2-1.4l1.8-2.2c.8-1.6 2-1.2 2-1.2z"></path><path fill="#ab6d29" d="M303.8 179.7s1.3-1.3 1.8-2.3c.4-1 .5-1.8.5-1.8s.2 1-.6 2.3-1.7 2-1.7 2v-.2z"></path><path fill="#904720" d="M303.4 176.7s1.1 4.4 0 6.1c-1.3 1.8-6.5 4.1-6.5 4.1s4-2.1 5.2-4.6 1.1-4.5 1.1-4.5l.2-1z"></path><path fill="#1e2121" d="M298.2 187.7s1.7 0 2.6-.6c1-.5 2.3-1.7 2.3-1.7s-1.2 1-1.6 1c-.3 0-.6-.5-.5-.9 0 0-.3.8-1 1.4-.8.5-1.8.8-1.8.8zm3.9-5.4s1.4-1.4 1.4-4.4c0-3-1.2-2.5-1.2-2.5s1 .7.7 3c-.2 2.3-1 4-1 4zm1.7.3s1.6-.3 2.1-1.3.6-2.7.6-2.7-.2 1.7-.7 2.3c-.4.6-2 1.7-2 1.7zm-1 9.5s.8-1.5 1.9-1.1c1 .4 1 1.2 1 1.2s-.4-.6-1.2-.7c-.7 0-1.6.6-1.6.6zm-2.9-2.7 3.7-1 3-1s-1.2 1.3-3 2.3c-1.6 1-3 1-3 1s3.2-1.4 3.4-2c0 0-3 .9-4 .7z"></path><path fill="#fff" d="M296.2 185.8a2.6 2.7 67.8 0 1-3 4.4"></path><path fill="#f16e16" d="M296.1 186.1a2.3 2.4 67.8 0 1-2.7 3.8"></path><path d="M295 187.4a1 1 0 1 1-.8 1.4"></path><path fill="#d5d3ca" d="M295.2 188.6a.3.3 0 1 1-.6-.1.3.3 0 0 1 .3-.3.3.3 0 0 1 .3.4z"></path><path fill="#ab6d29" d="M296.8 184.2s1.6-1.5 1.9-3.5c.3-2 .1-3.2.1-3.2l.9 1 .3 1.4-.5 2.6 1.6-.8c.6-.8 1.5-4.2 1.2-6.3 0 0 .4 1-.2 3.8-.6 2.9-1 3.2-3.2 4.4a9.6 9.6 0 0 0-3.8 4.2 19 19 0 0 1-2.3 3l1.6-2.6c.8-1.8 1.7-2.8 1.7-2.8l.7-1.2z"></path><path fill="#904720" d="M296.1 185.4s.7-2 .7-3.1-.7-2.4-.7-2.4 1-.1 1 2.2c.1 2.4-.4 2.6-1 3.3z"></path><path fill="#4d2a15" d="M299.2 182.8s.7-1.7.7-3c0-1.1-1-2.3-1-2.3s1.1.3 1.2 2.4c.1 2.2-.2 2.2-1 3z"></path><path fill="#ab6d29" d="M292.1 191s-.6-.8-.5-1.3c0-.6 0-.7 1.4-2.2a13 13 0 0 0 2.5-3c.3-.9 1.5-3 .6-4.6 0 0 .6 2.4-.8 4.3a15.7 15.7 0 0 1-3.3 3.7c-1.1.8-1.3 1.2-1.2 1.7 0 .5.1 1 .3 1 .4.3 1 .3 1 .3z"></path><path fill="#6c4119" d="M305.5 195.6s.3 0 .5-.3.2-1-.3-1.6a3.3 3.3 0 0 0-1.7-1.1l-2-.4s.4.8 1.3 1.3c.4.2 1.2 0 1.6.4.5.4.6 1.7.6 1.7z"></path><path fill="#6c4119" d="M305.5 195.6s1.5-.5 1.6-2l-.1-1.2s.2.5.8.7l.6-.2s-1 2.8-3 2.7z"></path><path fill="#bf802d" d="m294.8 195.3.8.8.9 1 3.7-1 1.2-1.2-1-1.6h-2.7l-3 2z"></path><path fill="#f9c83a" stroke="#8f4620" stroke-width=".4" d="m303.8 194-.7-.9-.7-.6c-.6-.3-2.8-.3-2.8-.3l-1.6.3s-.5.5-1.3.3a22 22 0 0 1-2.6-1l-1.9-.7s-1.3-.6-1.6-.5c-.3.1-1.5 1.3-1.5 1.3s-.2.7.3.7c.4 0-.7.2-.7.2s-2.8 1.6-3.2 4.4c-.5 2.7 4.6 6.8 6.5 4.7 0 0-2.8-2-2.2-3.7.5-1.7 1.8-2.8 4-3 2.1 0 2.3-.3 3.2-1 1-.6 2.7-1 4 .3 1.3 1.4-5 2.7-5 2.7l.7 1s7.7-2.7 7-4.1z"></path><path fill="#fcf3d8" d="M289.4 200.7s-3.1-.8-2.9-3.7c.3-2.8 3-3.9 3.4-4 .4-.2.3-1.6.8-1.8a2.4 2.4 0 0 1 2 .5l1.4.8s-5.5 2.4-5.5 5.6c0 2.1.8 2.5.8 2.5z"></path><path fill="#fdeaaf" d="M303.8 193.8s-.4.2-.5 0c-.6-1-2-1.4-3-1.3-1.5 0-2.4.5-3.4.5s-.7-.1-1.8-.2c-1.1 0-3.5-1.8-4-1.6-.6.2-.8.8-.8 1.1.1.4-1 .4-1 .1-.2-.2.7-1.7 1.7-1.7 2.6 0 4.6 1.7 5.8 1.7 1.3 0 1.7-.7 3.4-.7s3.5.8 3.6 2z"></path><path fill="#513625" d="M295.2 195.8s1.3-.2 2.2-.6l2.2-.8-2 1.2-2 .5-.4-.3z"></path><path fill="#f9c83a" d="M290.8 202.3c-.2 0-1.3 0-3-1.1-1.8-1.2-2.3-3.2-2.3-3.2s-.4-1.9 1.4-3.8c1.8-1.9 2.1-1.3 2.2-1.2.1 0 0 .1 0 .1l-1.7 1.3-.7 1.3-.7 1.2v1.4l.8 1.5 2.5 1.5 1.5 1z"></path><path fill="#8b5122" d="M289.8 191.4v-.2.3-.3.3-.3l-.3.2h.2v-.2l-.2.2.2-.2h-.2a.3.3 0 0 0 0 .2l.2-.2h-.2.2-.2.2-.2.2l-.2-.1.2.1-.2-.1-.1.1a4.6 4.6 0 0 0-.4.5l-.2.6v.1c0 .3.2.5.4.6h1.4a.3.3 0 0 0 .1-.4.3.3 0 0 0-.3-.2l-.7.1a.8.8 0 0 1-.3 0v-.2a.5.5 0 0 1 0-.2 3 3 0 0 1 .3-.5l.2-.1v-.1l.1-.2a.3.3 0 0 0-.3-.2.3.3 0 0 0-.2.3.3.3 0 0 0 .3.2z"></path><path fill="#f9c83a" d="m295.1 194.1-3.8 1.1c-.3.2 1.2 0 2.4 0l1.3.1.9-.2c1.4-.5 4.4-1.6 4.7-.3.2 1-4.1 2-4.1 2v.5l3.4-.9 1.9-1 .5-.9-1.7-1.2H298l-1.2.3-1.7.5z"></path><path fill="#8f4620" d="M289.7 199.5c.3.8.9 2 1.6 2.3 0 0 .1 0 0 0 0 .1-.5.5-1.7.1-1.2-.3-3-.7-4.1-4v.7l.7 1.3 1.1 1.2 1.9 1.1 1.2.3 1-.2.6-.4-1.1-1-1.4-2.3.2 1z"></path><path fill="#fcca3d" d="M302.1 232.6v1.2h-.7v-1.5zm-4.7-34.4-1.2-1.4-.8.1 1.2 1.8z"></path><path fill="#816c2a" d="m302 235.5-1.7-1a10 10 0 0 0-2.4-.6v.3h.2l2.1.6a14.3 14.3 0 0 1 1.7 1l.1-.3zm0-3.1h-3a4 4 0 0 0-1.3.7l.1.2a3.8 3.8 0 0 1 2.6-.7 23 23 0 0 1 1.4.1v-.3zm-.4-2.7-2.6 1.4-1.6 1.2.2.2.5-.4a16.5 16.5 0 0 1 2.6-1.6l1-.5-.1-.3zm-1.7-2.7s0 .7-.3 1.2a8.6 8.6 0 0 1-.6.8 86.3 86.3 0 0 1-2.5 2.6l.2.3a220.4 220.4 0 0 0 2.5-2.7l.7-.8c.3-.6.3-1.3.3-1.4h-.3zm-2.1-1.2a4.2 4.2 0 0 1-.2 2.2l-1 2.2-.4.9-.2.3.2.2s1.3-2.2 1.7-3.5c.2-.5.2-1 .2-1.5a4 4 0 0 0 0-.9h-.4zm-2.1-.3a8.7 8.7 0 0 0 0 1.2c0 .6 0 1.2-.2 1.7l-.7 1.8-.3 1 .3.1 1-2.8c.2-.5.2-1.2.2-1.8v-1.2h-.3zm-1.6 0v1.2l-.3 2a52.2 52.2 0 0 0-.5 2.5h.3l.2-.8.3-1.7c.3-1 .3-3.2.3-3.2h-.3zm-1.8.3a13 13 0 0 0 0 2.9 14 14 0 0 0-.4 2.5h.3a23.3 23.3 0 0 1 .4-2.4l.1-1.4v-1.6h-.4zm-1.3.2v.2a9 9 0 0 1-.3 2.2l-.6 1.9-.2 1h.3l.8-2.9a8.9 8.9 0 0 0 .3-2.2v-.2h-.3zm-1.6 0v.7c0 .6 0 1.4-.4 2a5.5 5.5 0 0 1-1.3 1.6 9.8 9.8 0 0 1-.7.4l-.2.2.1.3s1.7-1 2.4-2.3c.4-.7.5-1.6.5-2.2v-.7h-.4zm-.9-.3v.2a6.7 6.7 0 0 1-1 1.9c-.3.4-.9.8-1.3 1.1a12.1 12.1 0 0 1-.8.5l.2.3s1.4-.8 2.1-1.7a8 8 0 0 0 1.1-2.2h-.3zm-1.5-.7v.1a6.2 6.2 0 0 1-1 1.3c-.1.2-.5.4-.9.6l-.6.4.1.3.7-.4 1-.7.7-.9.3-.6-.3-.1zm-.7-1-.3.3-.9 1a6.5 6.5 0 0 1-.5.4l-.4.3.1.3.7-.4c.7-.6 1.5-1.7 1.5-1.7l-.2-.2zm-.4-.6-.2.2-.9.6a2 2 0 0 1-.8.3v.4l.6-.3c.7-.3 1.5-1 1.5-1l-.2-.2zm-.2-.7-.8.4-.6.3a1.9 1.9 0 0 1-.4.2v.3c.2 0 .3 0 .5-.2l1.4-.7-.1-.3zm-.4-1.3-.5.5-.9.3v.3a2 2 0 0 0 1.2-.5 3.8 3.8 0 0 0 .5-.4l-.3-.2zm.1-2.2-.6.5c-.3.3-.6.6-.7 1a.6.6 0 0 1-.1 0v.5l.2-.2a.8.8 0 0 0 .2-.2c0-.2.4-.6.7-.9a7.9 7.9 0 0 1 .5-.5l-.2-.2zm10.7-12.8h1.6l.1-.2v-.1h-.1v.3-.1h-.2.1-.1v-.2l.1.1v-.1.1-.1h-1.5v.3zm0-1h.2c.2 0 .4 0 .6-.2.4-.1.7-.4 1-.6l.5-.3a.8.8 0 0 1 .3 0v-.4l-.6.2-1 .7-.8.3-.1.3zm0-1.5.7-.2 1.2-.8c.4-.3.7-.4 1-.4v-.3c-.3 0-.5 0-.8.2l-1.2.7a3 3 0 0 1-1 .5v.3zm-.6-1.4 1.5-1 1.6-1.2-.1-.3-1.7 1.2c-.5.5-1.1.9-1.5 1l.2.4zm-1-1.5 3.2-2.3-.2-.3-3.2 2.3.1.3zm-1.5-1.6a20.7 20.7 0 0 1 3.4-2.3l-.2-.2-1.5 1-1.9 1.3.2.2zm-1-1a123.7 123.7 0 0 1 2.6-1.8l.8-.5-.1-.3a7.6 7.6 0 0 0-.8.5 113 113 0 0 0-2.7 2l.1.2z"></path><path fill="#78732e" d="m294.5 195.4.1.1a17.3 17.3 0 0 1 2.5 2.5c1 1.2 1.8 2.7 1.8 4.1v.5a9.5 9.5 0 0 1-2.5 5c-2 2.3-4.8 4.4-7 6.4a18 18 0 0 0-3 3.1 6.1 6.1 0 0 0-1.2 3.7 6.4 6.4 0 0 0 1.1 3.4 4.4 4.4 0 0 0 3.9 2c1.8 0 3.8-.7 5.6-.7 1.6 0 3 .4 4.4 1.9 1.3 1.4 1.7 3.6 1.7 5.7 0 1.6-.2 3-.4 4.2a25.6 25.6 0 0 1-.4 1.8h.3s.8-2.8.8-6c0-2.1-.4-4.5-1.8-6a5.8 5.8 0 0 0-4.6-1.9c-1.9 0-3.9.6-5.6.6a4 4 0 0 1-3.6-1.8 6 6 0 0 1-1-3.3v-.1c0-1.6.7-3 1.9-4.3 1.8-2 4.5-4 7-6.2 2.3-2.2 4.4-4.5 4.7-7.5v-.5c0-1.8-1.1-3.5-2.3-4.8a17.2 17.2 0 0 0-2.3-2.2l-.1.3z"></path><path fill="#a8ac71" d="m292.1 198.4-.4-.3-.3.1.6.5zm1 1-.3-.3h-.1l.2.4z"></path><path fill="#78732e" d="m294.5 201-.2-.4-.2.2.3.3zm1 1.5-.1-.3h-.3l.4.5zm.7 1.5-.2-.4v.4zm0 1.5v-.4l-.2-.1v.5zm0 1v-.5l-.1-.1v.6zM284 221.1l.1-.7c.1-.3-.3.1-.3.1v.5l.2.1z"></path><path fill="#fff" d="m284 222.1-.3.1.1.5.1-.2v-.4z"></path><path fill="#78732e" d="M284 223.9v-.4h-.2v.6z"></path><path fill="#fff" d="M284 224.9v-.4h-.1v.4zm.3 1.4v-.4l-.2.1.1.4zm.4 1.4-.1-.5h-.2l.2.6z"></path><path fill="#a8ac71" d="m285.6 229.7-.2-.3h-.2l.3.3zm1.5 1.4-.5-.3c-.3-.3-.1.2-.1.2l.4.2h.2zm9.8.8-.4-.3c-.2 0 0 0 .2.4.1.3.2-.1.2-.1z"></path><path fill="#fff" d="m297.7 232.5-.3-.3v.3h.2z"></path><path fill="#a8ac71" d="M297.9 233c-.1-.2-.2.1-.2.1l.2.3v-.5zm0 1.3v-.5c0-.2-.1 0-.1 0v.5h.1z"></path><path fill="#fff" d="m297.4 235.7.2-.4h-.2v.4zm-14.8-52s.5-.2.1.4l.3-.5h-.5z"></path><path fill="#f9c83a" d="m294.6 195 .4.3h-.5l.1-.3z"></path><path fill="#8f4620" d="m295 195.3-.7.1c-.2 0 .2-.2.2-.2l.4.1z"></path><path fill="#977c2e" d="M301 239.1s.3 0 .5-.3-.1.4-.1.4l-.3.1-.2-.2z"></path></svg>

`;
});
const Ne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ne" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ne" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#0db02b" d="M0 0h640v480H0z"></path><path fill="#fff" d="M0 0h640v320H0z"></path><path fill="#e05206" d="M0 0h640v160H0z"></path><circle cx="320" cy="240" r="68" fill="#e05206"></circle></svg>

`;
});
const Nl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of nl" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-nl" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#21468b" d="M0 0h640v480H0z"></path><path fill="#fff" d="M0 0h640v320H0z"></path><path fill="#ae1c28" d="M0 0h640v160H0z"></path></svg>

`;
});
const No = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of no" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-no" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#ed2939" d="M0 0h640v480H0z"></path><path fill="#fff" d="M180 0h120v480H180z"></path><path fill="#fff" d="M0 180h640v120H0z"></path><path fill="#002664" d="M210 0h60v480h-60z"></path><path fill="#002664" d="M0 210h640v60H0z"></path></svg>

`;
});
const Pl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of pl" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-pl" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"></path><path fill="#dc143c" d="M640 480H0V240h640z"></path></g></svg>

`;
});
const Pt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of pt" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-pt" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="red" d="M256 0h384v480H256z"></path><path fill="#060" d="M0 0h256v480H0z"></path><g fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".6"><path d="M339.5 306.2c-32.3-1-180-93.2-181-108l8.1-13.5c14.7 21.3 165.7 111 180.6 107.8l-7.7 13.7"></path><path d="M164.9 182.8c-2.9 7.8 38.6 33.4 88.4 63.8 49.9 30.3 92.9 49 96 46.4l1.5-2.8c-.6 1-2 1.3-4.3.6-13.5-3.9-48.6-20-92.1-46.4-43.6-26.4-81.4-50.7-87.3-61a6.3 6.3 0 0 1-.6-3.1h-.2l-1.2 2.2-.2.3zm175.3 123.8c-.5 1-1.6 1-3.5.8-12-1.3-48.6-19.1-91.9-45-50.4-30.2-92-57.6-87.4-64.8l1.2-2.2.2.1c-4 12.2 82.1 61.4 87.2 64.6 49.8 30.8 91.8 48.9 95.5 44.2l-1.3 2.3z"></path><path d="M256.2 207.2c32.2-.3 72-4.4 95-13.6l-5-8c-13.5 7.5-53.5 12.5-90.3 13.2-43.4-.4-74.1-4.5-89.5-14.8l-4.6 8.6c28.2 12 57.2 14.5 94.4 14.6"></path><path d="M352.5 193.8c-.8 1.3-15.8 6.4-37.8 10.2a381.2 381.2 0 0 1-58.6 4.3 416.1 416.1 0 0 1-56.2-3.6c-23.1-3.6-35-8.6-39.5-10.4l1.1-2.2c12.7 5 24.7 8 38.7 10.2A411.5 411.5 0 0 0 256 206a391.8 391.8 0 0 0 58.3-4.3c22.5-3.7 34.8-8.4 36.6-10.5l1.6 2.7zm-4.4-8.1c-2.4 2-14.6 6.3-36 9.7a388.2 388.2 0 0 1-55.8 4c-22 0-40.1-1.6-53.8-3.6-21.8-2.8-33.4-8-37.6-9.4l1.3-2.2c3.3 1.7 14.4 6.2 36.5 9.3a385 385 0 0 0 53.6 3.4 384 384 0 0 0 55.4-4c21.5-3 33.1-8.4 34.9-9.8l1.5 2.6zM150.3 246c19.8 10.7 63.9 16 105.6 16.4 38 .1 87.4-5.8 105.9-15.6l-.5-10.7c-5.8 9-58.8 17.7-105.8 17.4-47-.4-90.7-7.6-105.3-17v9.5"></path><path d="M362.8 244.5v2.5c-2.8 3.4-20.2 8.4-42 12a434 434 0 0 1-65.4 4.4 400 400 0 0 1-62-4.3 155 155 0 0 1-44.4-12v-2.9c9.7 6.4 35.9 11.2 44.7 12.6 15.8 2.4 36.1 4.2 61.7 4.2 26.9 0 48.4-1.9 65-4.4 15.7-2.3 38-8.2 42.4-12.1zm0-9v2.5c-2.8 3.3-20.2 8.3-42 11.9a434 434 0 0 1-65.4 4.5 414 414 0 0 1-62-4.3 155 155 0 0 1-44.4-12v-3c9.7 6.5 36 11.2 44.7 12.6a408 408 0 0 0 61.7 4.3c26.9 0 48.5-2 65-4.5 15.7-2.2 38-8.1 42.4-12zm-107 68.8c-45.6-.2-84.7-12.4-93-14.4l6 9.4a249.8 249.8 0 0 0 87.4 14.3c34.7-1 65-3.7 86.3-14.1l6.2-9.8c-14.5 6.9-64 14.6-93 14.6"></path><path d="M344.9 297.3a143 143 0 0 1-2.8 4c-10 3.6-26 7.4-32.6 8.4a295.5 295.5 0 0 1-53.7 5c-40.4-.6-73.5-8.5-89-15.3l-1.3-2.1.2-.4 2.1.9a286.5 286.5 0 0 0 88.2 14.5c18.8 0 37.5-2.1 52.6-4.8 23.2-4.7 32.6-8.2 35.5-9.8l.7-.4zm5.3-8.8a287.2 287.2 0 0 1-2 3.5c-5.4 2-20 6.2-41.3 9.2-14 1.9-22.7 3.8-50.6 4.3a347.4 347.4 0 0 1-94.2-14L161 289a390 390 0 0 0 95.4 14c25.5-.5 36.4-2.4 50.3-4.3 24.8-3.8 37.3-8 41-9.1a2.9 2.9 0 0 0 0-.2l2.6-1z"></path><path d="M350.8 237.6c.1 30-15.3 57-27.6 68.8a99.3 99.3 0 0 1-67.8 28.2c-30.3.5-58.8-19.2-66.5-27.9a101 101 0 0 1-27.5-67.4c1.8-32.8 14.7-55.6 33.3-71.3a99.6 99.6 0 0 1 64.2-22.7 98.2 98.2 0 0 1 71 35.6c12.5 15.2 18 31.7 20.9 56.7zM255.6 135a106 106 0 0 1 106 105.2 105.6 105.6 0 1 1-211.4 0c-.1-58 47.3-105.2 105.4-105.2"></path><path d="M255.9 134.5c58.2 0 105.6 47.4 105.6 105.6S314.1 345.7 256 345.7s-105.6-47.4-105.6-105.6c0-58.2 47.4-105.6 105.6-105.6zM152.6 240c0 56.8 46.7 103.3 103.3 103.3 56.6 0 103.3-46.5 103.3-103.3s-46.7-103.3-103.3-103.3S152.6 183.2 152.6 240z"></path><path d="M256 143.3a97 97 0 0 1 96.7 96.7 97.1 97.1 0 0 1-96.7 96.8c-53 0-96.7-43.6-96.7-96.8a97.1 97.1 0 0 1 96.7-96.7zM161.6 240c0 52 42.6 94.4 94.4 94.4s94.4-42.5 94.4-94.4c0-52-42.6-94.4-94.4-94.4a94.8 94.8 0 0 0-94.4 94.4z"></path><path d="M260.3 134h-9.1v212.3h9z"></path><path d="M259.3 132.8h2.3v214.7h-2.2V132.8zm-9 0h2.4v214.7h-2.3V132.8z"></path><path d="M361.6 244.2v-7.8l-6.4-6-36.3-9.6-52.2-5.3-63 3.2-44.8 10.6-9 6.7v7.9l22.9-10.3 54.4-8.5h52.3l38.4 4.2 26.6 6.4z"></path><path d="M256 223.8c24.9 0 49 2.3 68.3 6 19.8 4 33.7 9 38.5 14.5v2.8c-5.8-7-24.5-12-39-15-19-3.6-43-6-67.9-6-26.1 0-50.5 2.6-69.3 6.2-15 3-35.1 9-37.6 14.8v-2.9c1.3-4 16.3-10 37.3-14.3 18.9-3.7 43.3-6.1 69.6-6.1zm0-9.1a383 383 0 0 1 68.3 6c19.8 4 33.7 9 38.5 14.6v2.7c-5.8-6.9-24.5-12-39-14.9-19-3.7-43-6-67.9-6a376 376 0 0 0-69.2 6.2c-14.5 2.7-35.4 8.9-37.7 14.7v-2.8c1.4-4 16.6-10.3 37.3-14.3 19-3.7 43.3-6.2 69.7-6.2zm-.6-46.2c39.3-.2 73.6 5.5 89.3 13.5l5.7 10c-13.6-7.4-50.6-15-94.9-14-36.1.3-74.7 4-94 14.4l6.8-11.4c15.9-8.3 53.3-12.5 87.1-12.5"></path><path d="M256 176.7a354 354 0 0 1 61.3 4.3c16 3 31.3 7.4 33.5 9.8l1.7 3c-5.3-3.4-18.6-7.3-35.6-10.5s-38.7-4.3-61-4.2c-25.3-.1-45 1.2-61.8 4.2a108.9 108.9 0 0 0-33.3 10.3l1.7-3.1c6-3 15.3-6.7 31.1-9.6 17.5-3.2 37.4-4.1 62.4-4.2zm0-9c21.4-.2 42.6 1 59.1 4a96 96 0 0 1 30.6 10l2.5 4c-4.2-4.7-20-9.2-34.1-11.6-16.4-2.9-36.7-4-58.1-4.2a361 361 0 0 0-59.5 4.4 97.3 97.3 0 0 0-29.6 9.1l2.2-3.3c5.8-3 15.2-5.8 27-8.1a357 357 0 0 1 59.9-4.4zM308.4 284a276.4 276.4 0 0 0-52.5-4c-65.5.8-86.6 13.5-89.2 17.3l-5-8c16.8-12 52.4-18.8 94.6-18.2 21.9.4 40.8 1.9 56.6 5l-4.5 8"></path><path d="M255.6 278.9c18.2.3 36 1 53.3 4.2l-1.2 2.2c-16-3-33.2-4-52-4-24.3-.2-48.7 2.1-70 8.2-6.7 1.9-17.8 6.2-19 9.8l-1.2-2c.4-2.2 7-6.6 19.6-10 24.4-7 47.2-8.3 70.5-8.4zm.8-9.2a327 327 0 0 1 57.3 5l-1.3 2.3a299 299 0 0 0-56-4.9c-24.2 0-49.9 1.8-73.3 8.6-7.5 2.2-20.6 7-21 10.7l-1.2-2.2c.2-3.4 11.5-7.9 21.7-10.8 23.5-6.9 49.3-8.6 73.8-8.7z"></path><path d="m349.4 290.5-7.8 12.3-22.7-20.1-58.6-39.5-66.2-36.3-34.3-11.7 7.3-13.6 2.5-1.3 21.3 5.3 70.4 36.3 40.6 25.6L336 272l13.9 16z"></path><path d="M158.6 195.5c6-4 50.2 15.6 96.6 43.6 46.1 28 90.3 59.6 86.3 65.5l-1.3 2.1-.6.5c.1-.1.8-1 0-3.1-2-6.5-33.4-31.5-85.3-62.9-50.7-30.1-92.9-48.3-97-43.1l1.3-2.6zM351 290.4c3.8-7.6-37.2-38.5-88.1-68.6-52-29.5-89.6-46.9-96.5-41.7L165 183c0 .1 0-.2.4-.5 1.2-1 3.3-1 4.2-1 11.8.2 45.5 15.7 92.8 42.8 20.8 12 87.6 55 87.3 67 0 1 .1 1.2-.3 1.8l1.7-2.6z"></path></g><g transform="translate(0 26.7) scale(1.06667)"><path fill="#fff" stroke="#000" stroke-width=".7" d="M180.6 211a58.7 58.7 0 0 0 17.5 41.7 59 59 0 0 0 41.8 17.6 59.4 59.4 0 0 0 42-17.4 59 59 0 0 0 17.4-41.8v-79.2l-118.7-.2V211z"></path><path fill="red" stroke="#000" stroke-width=".5" d="M183 211.1a56.4 56.4 0 0 0 16.8 40 57 57 0 0 0 40.2 16.8 56.9 56.9 0 0 0 40.2-16.6 56.4 56.4 0 0 0 16.7-40v-77H183v76.8m91-53.7v48.9l-.1 5.1a33.2 33.2 0 0 1-10 24 34 34 0 0 1-24 10c-9.4 0-17.7-4-23.9-10.2a34 34 0 0 1-10-24v-54l68 .2z"></path><g id="pt-e"><g id="pt-d" fill="#ff0" stroke="#000" stroke-width=".5"><path stroke="none" d="M190.2 154.4c.1-5.5 4-6.8 4-6.8.1 0 4.3 1.4 4.3 6.9h-8.3"></path><path d="m186.8 147.7-.7 6.3h4.2c0-5.2 4-6 4-6 .1 0 4 1.1 4.1 6h4.2l-.8-6.4h-15zm-1 6.4h17c.3 0 .6.3.6.7 0 .5-.3.8-.6.8h-17c-.3 0-.6-.3-.6-.8 0-.4.3-.7.7-.7z"></path><path d="M192 154c0-3.3 2.3-4.2 2.3-4.2s2.3 1 2.3 4.2H192m-5.8-9h16.3c.3 0 .6.4.6.8 0 .3-.3.6-.6.6h-16.3c-.3 0-.6-.3-.6-.7 0-.3.3-.6.6-.6zm.4 1.5H202c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-15.5c-.4 0-.6-.3-.6-.7 0-.4.2-.7.6-.7zm5-10.6h1.2v.8h.9v-.8h1.3v.9h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.4c-.3 0-.6-.2-.6-.5v-2zm4.6 2.7.3 6.4h-4.3l.3-6.5h3.7"></path><path id="pt-a" d="M191 141.6v3.4h-4v-3.4h4z"></path><use xlink:href="#pt-a" width="100%" height="100%" x="10.6"></use><path id="pt-b" d="M186.3 139h1.2v1h.9v-1h1.2v1h.9v-1h1.2v2c0 .4-.2.6-.5.6h-4.3a.6.6 0 0 1-.6-.6v-2z"></path><use xlink:href="#pt-b" width="100%" height="100%" x="10.6"></use><path fill="#000" stroke="none" d="M193.9 140.6c0-.6.9-.6.9 0v1.6h-.9v-1.6"></path><path id="pt-c" fill="#000" stroke="none" d="M188.6 142.8c0-.6.8-.6.8 0v1.2h-.8v-1.2"></path><use xlink:href="#pt-c" width="100%" height="100%" x="10.6"></use></g><use xlink:href="#pt-d" width="100%" height="100%" y="46.3"></use><use xlink:href="#pt-d" width="100%" height="100%" transform="rotate(-45.2 312.8 180)"></use></g><use xlink:href="#pt-d" width="100%" height="100%" x="45.7"></use><use xlink:href="#pt-e" width="100%" height="100%" transform="matrix(-1 0 0 1 479.8 0)"></use><g id="pt-f" fill="#fff"><path fill="#039" d="M232.6 202.4a8.3 8.3 0 0 0 2.2 5.7 7.2 7.2 0 0 0 5.3 2.4c2.1 0 4-1 5.3-2.4a8.3 8.3 0 0 0 2.2-5.7v-10.8h-15v10.8"></path><circle cx="236.1" cy="195.7" r="1.5"></circle><circle cx="244.4" cy="195.7" r="1.5"></circle><circle cx="240.2" cy="199.7" r="1.5"></circle><circle cx="236.1" cy="203.9" r="1.5"></circle><circle cx="244.4" cy="203.9" r="1.5"></circle></g><use xlink:href="#pt-f" width="100%" height="100%" y="-26"></use><use xlink:href="#pt-f" width="100%" height="100%" x="-20.8"></use><use xlink:href="#pt-f" width="100%" height="100%" x="20.8"></use><use xlink:href="#pt-f" width="100%" height="100%" y="25.8"></use></g></svg>

`;
});
const Py = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of py" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-py" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#0038a8" d="M0 319.7h640V480H0z"></path><path fill="#fff" d="M0 160h640v160H0z"></path><path fill="#d52b1e" d="M0 0h640v160H0z"></path><g fill="none" stroke="#000" transform="translate(-116.4) scale(1.45455)"><circle cx="300" cy="165" r="42.2" stroke-width="1.1"></circle><circle cx="300" cy="165" r="34.7" stroke-width=".5"></circle><circle cx="300" cy="165" r="26.6" stroke-width=".4"></circle></g><path d="m287.3 263.7-7.1 4.2-2.2-3.7a6.2 6.2 0 0 1-.7-1.6 2 2 0 0 1 .1-1.3c.2-.4.5-.7 1-1 .4-.2.7-.3 1.1-.3a2.3 2.3 0 0 1 1.1.2l.8.6v-1.3l.3-.5 1.5-2.3 1.4 2.5-1.4 2.4-.3.8.1.6.1.2 3-1.7zm-5.5.3-.6-1-.4-.5a.7.7 0 0 0-.5-.2.8.8 0 0 0-.5.1l-.4.6c0 .2.1.5.4.9l.5 1zm-6.7-5.5-2.2-6.5 1.7-.6 1.3 4.1 1.3-.4-1.3-3.8 1.6-.5 1.3 3.7 1.5-.5-1.4-4.2 1.8-.5 2.2 6.6zm-2.9-9.7-.4-4.2c-.2-1 0-1.6.4-2.1.4-.6 1-.9 1.8-1 .8 0 1.5.1 2 .6.5.4.8 1.2 1 2.2l.1 1.4 3-.4.4 2.6zm3.3-3-.1-.6c0-.5-.2-.8-.4-1a.8.8 0 0 0-.7-.2 1 1 0 0 0-.6.4c-.2.1-.2.5-.2 1l.1.7zm-3.5-12.5.3-2.6 4.8.6a4.2 4.2 0 0 1 1.4.4c.4.2.8.4 1 .8.4.3.5.7.6 1 .2.6.2 1.2.1 1.9l-.2 1.3c-.1.5-.3.8-.5 1.1a3 3 0 0 1-1.8 1.3h-1.4l-4.9-.5.3-2.5 5 .5c.4 0 .8 0 1-.2.4-.2.5-.6.6-1a1.4 1.4 0 0 0-.3-1c-.2-.4-.6-.5-1-.6zm1-6 1.7-4.6c.2-.8.6-1.3 1.1-1.5a2 2 0 0 1 1.6-.2c.5.2.8.5 1 .9.2.3.3.6.3 1 .3-.5.7-.8 1.1-1a2 2 0 0 1 1.4 0 2.2 2.2 0 0 1 1.5 1.8v1l-.3 1-1.5 4.2zm4-1.4.4-1.1c0-.4.1-.7 0-.8 0-.2-.2-.4-.4-.5a.7.7 0 0 0-.6 0c-.2.2-.4.4-.5.8l-.4 1zm3 1 .5-1.2c.1-.4.2-.7 0-1a.8.8 0 0 0-.4-.4.7.7 0 0 0-.7 0l-.5.9-.4 1.2zm-3-9.6 1.3-2.2 5.4 3.2 2-3.4 1.8 1-3.4 5.6zm5-7.6 1.6-2 6.4 5.3-1.6 2zm11.1-4.3 2.2-1c.3.6.4 1.2.5 1.7a3.1 3.1 0 0 1-.3 1.5 4.5 4.5 0 0 1-1.2 1.5 4 4 0 0 1-2 1.1 3.5 3.5 0 0 1-2 0 4.7 4.7 0 0 1-2-1.6c-1-1-1.4-2-1.3-3.1a4.2 4.2 0 0 1 1.6-2.9 4.2 4.2 0 0 1 2.3-1c.7-.1 1.5 0 2.3.5l-1.4 1.9a1.9 1.9 0 0 0-.6-.3 1.5 1.5 0 0 0-.7 0 1.5 1.5 0 0 0-.6.4 1.5 1.5 0 0 0-.6 1.4c0 .4.4.9.8 1.4.6.7 1.1 1.1 1.6 1.2.4 0 .8 0 1.2-.4.4-.3.6-.6.6-1s-.1-.8-.4-1.3zm8.8-3.2-2.5 1.4.3 1.4-2.3 1.2-1.2-8.7 2.5-1.3 6.6 5.8-2.4 1.3zm-1.3-1.3-2.2-2.2.6 3zm7.8-8.5 3.8-.6a4.6 4.6 0 0 1 1.8 0c.5.1 1 .3 1.3.7s.7.7.9 1.2c.2.4.4 1 .4 1.5.2.9.2 1.6.1 2a3.4 3.4 0 0 1-.6 1.4 2.7 2.7 0 0 1-1 .9 6 6 0 0 1-1.5.5l-3.7.6zm2.9 1.4.8 4.5.6-.1c.5-.1.9-.2 1-.4.3-.1.4-.4.5-.7v-1.4c-.2-.9-.5-1.4-.8-1.7-.3-.3-.8-.4-1.5-.3zm7.8-2.8 6.8.3v1.8l-4.3-.2-.1 1.3 4 .2-.1 1.7-4-.2v1.6l4.4.2-.1 1.9-7-.3zm10 .8 2.4.6-1.5 6 4 1-.6 2-6.3-1.6zm13.2 4.4 3.7 2.2c.8.4 1.3 1 1.4 1.6.2.6 0 1.3-.3 2a2.5 2.5 0 0 1-1.7 1.3c-.6.1-1.4 0-2.3-.6l-1.2-.7-1.6 2.6-2.2-1.3zm.4 4.4.6.3 1 .3a.8.8 0 0 0 .6-.4 1 1 0 0 0 0-.7c0-.3-.2-.5-.6-.8l-.6-.3zm7.2 9.6-2.1-2-1.2.7-2-1.7 8-4 2 2-3.4 8.1-2-1.8zm.8-1.7 1.4-2.8-2.7 1.6zm1 5.5 6.9-4.7 2.3 3.5 1 1.7-.1 1.2a2.3 2.3 0 0 1-1 1.1c-.3.3-.7.4-1 .4a2.3 2.3 0 0 1-1.2-.2c-.2 0-.5-.3-.8-.5l.2.7-.2.6a3.3 3.3 0 0 1-.2.6l-1.3 2.3-1.6-2.3 1.3-2.6.3-.7a1 1 0 0 0-.2-.7l-.1-.2-2.8 2zm5.5-.6.7.9.4.4c.2.2.3.2.5.2a.8.8 0 0 0 .5-.1.8.8 0 0 0 .3-.6c0-.2 0-.5-.3-.9l-.7-.9zm2.6 12.4-1-2.8-1.5.2-1-2.5 8.9-.1 1 2.6-6.5 6-1-2.6zm1.5-1.2 2.4-2-3.1.3zm2.1 9 1.7-.2.6 3.9-3.5.5a8 8 0 0 1-1.3-1.8 6.8 6.8 0 0 1-.6-2 5 5 0 0 1 .1-2.5 4 4 0 0 1 1.3-1.6 4.9 4.9 0 0 1 2.2-.9 5 5 0 0 1 2.4.2 3.6 3.6 0 0 1 1.7 1.4c.4.6.6 1.3.8 2.2v2a2.7 2.7 0 0 1-.6 1.3c-.3.4-.7.6-1.2.9l-.8-2.4c.3-.1.5-.3.7-.6s.1-.6 0-1a1.7 1.7 0 0 0-.7-1.2c-.4-.3-1-.4-2-.2a3 3 0 0 0-1.7.7c-.4.4-.5 1-.4 1.5 0 .3.1.6.3.8l.5.8h.8zm5.4 12-.2 2.6-5-.4a4.2 4.2 0 0 1-1.3-.4 3 3 0 0 1-1-.8 3 3 0 0 1-.6-1.1 5.1 5.1 0 0 1-.2-1.8l.2-1.3.5-1.2a3 3 0 0 1 .8-.8 2.6 2.6 0 0 1 1-.4 4.9 4.9 0 0 1 1.4-.2l5 .5-.3 2.5-5-.4c-.5 0-.9 0-1.1.3a1.4 1.4 0 0 0-.5 1c0 .4 0 .8.3 1 .2.3.5.5 1 .5zm-9.1 8.8.9-2.8-1.2-.8.8-2.5 7 5.6-1 2.6-8.8.4.9-2.5zm1.9 0 3 .1-2.5-1.8zm3 6.8-1.5 2.4h-3.3l1.5 2.9-1.4 2.4-2.5-5.2-3-1.8 1.4-2.2 3 1.8z"></path><g fill="#009b3a" stroke="#000" stroke-width=".1"><path d="M328.1 211.3s23.4 10.1 19.3 30.9c-4 20.8-17 20.6-22.2 23-5 2.2-8.6 5.5-10.6 5-2-.4-4.7-2-4.7-2s-.2 3.5 3.9 4c4.1.7 9.5-5.3 12-6 2.6-.6 18.5-2.4 22.4-23.5 4.5-22.6-20-30.7-20-31.4z"></path><path d="M339.9 215.8a3.2.8 75.1 0 1-1.5 0 3.2.8 75.1 1 1 1.5 0z"></path><path d="M339.1 216a3.3.7 63.3 1 1-1.4.5 3.3.7 63.3 0 1 1.4-.5zm-2.3 1.5a3.1.8 17 0 1-.2 1.6 3.1.8 17 0 1 .2-1.6z"></path><path d="M337.1 216.7a3.3.7 34.2 1 1-.7 1.3 3.3.7 34.2 1 1 .7-1.3z"></path><path d="M338.1 216.3a3.3.7 46.2 1 1-1 1 3.3.7 46.2 0 1 1-1z"></path><path d="m339.7 219.2-1 .6c-.3 0-.6-.3-1.2 0s-1 .9-1.1 1.2c-.1.3.2.5.9.1.7-.3.9-.9 1.2-1.1l1.3-.7.8-1.3c.3-.4 1.2-1 1.6-1.8.3-.6.2-1.1-.2-.9a3 3 0 0 0-1.2 1.3c-.2.4 0 1-.3 1.4l-.8 1.2zm7.3 2.4a1 4.8-1.6 1 1-2.2-.5 1 4.8-1.6 1 1 2.2.5z"></path><path d="M345.8 221.5a5 1 77.5 1 1-2.2.1 5 1 77.5 1 1 2.1 0z"></path><path d="M342 222.7a4.7 1.1 35 1 1-.7 2.2 4.7 1.1 35 1 1 .7-2.2z"></path><path d="M342.8 221.6a5 1 50.9 0 1-1.4 1.6 5 1 50.9 1 1 1.4-1.5z"></path><path d="M344.3 221.5a5.1 1 61.8 1 1-1.8 1 5.1 1 61.8 1 1 1.8-1z"></path><path d="m345.6 226.4-1.8.4c-.3 0-.6-.7-1.5-.5-.9.2-1.7.8-2 1.2-.2.4.1.8 1.2.6 1.2-.2 1.6-1 2.2-1 .5-.2 1.4-.4 2-.4.2-.4 1-1.2 1.5-1.6.5-.5 2-1 2.7-1.8.7-.8.7-1.6 0-1.5a4.8 4.8 0 0 0-2 1.3c-.5.6-.4 1.5-.9 2l-1.4 1.3zm5.1 4.9a1 4.8 8.7 1 1-2-1 1 4.8 8.7 1 1 2 1z"></path><path d="M349.6 231a1 5-2 1 1-2-.3 1 5-2 1 1 2 .3z"></path><path d="M345.7 231.4a4.7 1.1 46 1 1-1 2 4.7 1.1 46 1 1 1-2z"></path><path d="M346.7 230.5a5 1 61.8 1 1-1.7 1.3 5 1 61.8 1 1 1.7-1.3z"></path><path d="M348.1 230.7a5.1 1 72.5 1 1-1.9.7 5.1 1 72.5 1 1 2-.7z"></path><path d="M348.5 235.8h-1.7c-.3 0-.5-.8-1.4-.8a3.3 3.3 0 0 0-2.1.8c-.4.4-.1.8 1 .8s1.7-.5 2.3-.6h2l1.8-1.2c.6-.4 2.1-.6 3-1.3.7-.6.9-1.4.3-1.4a5 5 0 0 0-2.3.9c-.5.4-.6 1.3-1.2 1.7-.4.2-1.6 1.1-1.7 1m2.5 6.4a1 4.8 31.3 0 1-1.4-1.7 1 4.8 31.3 0 1 1.4 1.7"></path><path d="M350.1 241.3a1 5 20.6 0 1-1.8-1.1 1 5 20.6 0 1 1.8 1.1m-3.7-1.2a4.8 1 70 0 1-1.8 1.5 4.8 1 70 0 1 1.8-1.5"></path><path d="M347.6 239.7a1 5.1-4.9 0 1-2 .5 1 5.1-4.9 1 1 2-.5"></path><path d="M349 240.4a1 5.2 5.5 1 1-2-.1 1 5.2 5.5 1 1 2 .1"></path><path d="M347.3 245.3s-1.4-.5-1.6-.7c-.3-.2-.1-.8-1-1.3a3.1 3.1 0 0 0-2.2 0c-.5 0-.4.6.6 1 1 .6 1.8.2 2.3.4l1.8.9c.5-.2 1.6-.3 2.2-.4.6-.1 2.1.4 3.2 0 .9-.3 1.3-1 .7-1.2a4.5 4.5 0 0 0-2.3 0c-.7.1-1.1 1-1.8 1-.5 0-1.9.4-2 .3m1 7.7a1.3 5.5 48.5 1 1-1.1-2.4 1.3 5.5 48.5 1 1 1 2.4"></path><path d="M347.3 251.9a1.2 5.8 37.5 1 1-1.5-2 1.2 5.8 37.5 1 1 1.5 2"></path><path d="M343.7 249.2a1.3 5.5-3.5 1 1-2.4 1 1.3 5.5-3.5 1 1 2.4-1"></path><path d="M345.1 249.2a1.2 5.9 11.6 0 1-2.3-.2 1.2 5.9 11.6 1 1 2.3.1"></path><path d="M346.3 250.4a1.2 6 22.1 1 1-2.1-.8 1.2 6 22.1 1 1 2.1.8"></path><path d="M343 255.3a16.3 16.3 0 0 1-1.6-1.4c-.2-.3.1-1-.7-1.8s-1.8-1-2.4-1c-.6.1-.6.7.3 1.6 1 1 2 .8 2.4 1.2.6.4 1.4 1.1 1.7 1.6l2.6.4c.7 0 2.2 1.1 3.5 1.1 1 0 1.8-.5 1.2-1a5.3 5.3 0 0 0-2.6-1c-.8 0-1.5.8-2.2.6l-2.3-.3m-2.3 7.3a1.4 6 79.8 1 1 .3-2.9 1.4 6 79.8 1 1-.3 2.9"></path><path d="M340.5 261a1.3 6.4 68.5 0 1-.5-2.6 1.3 6.4 68.5 0 1 .5 2.7"></path><path d="M338.4 256.4a1.4 6 26.2 0 1-2.8-.5 1.4 6 26.2 1 1 2.8.5"></path><path d="M339.9 257.2a1.3 6.5 41.8 0 1-2.3-1.5 1.3 6.5 41.8 0 1 2.3 1.5"></path><path d="M340.3 259.1a1.3 6.5 52.7 1 1-1.6-2 1.3 6.5 52.7 0 1 1.6 2"></path><path d="M334.4 261.7a18.1 18.1 0 0 1-.7-2.2c-.1-.4.6-.8.3-2a4.3 4.3 0 0 0-1.9-2.3c-.5-.3-.9.2-.5 1.6.4 1.4 1.4 1.9 1.7 2.6l.8 2.4 2.2 1.9c.6.5 1.5 2.4 2.7 3.1 1 .7 2 .5 1.8-.2a6.2 6.2 0 0 0-2-2.4c-.7-.6-1.8-.3-2.5-.8-.4-.5-2-1.6-2-1.7"></path><path d="M330.8 268a1.8 6.1 89 0 1 0-3.5 1.8 6.1 89 0 1 0 3.5"></path><path d="M330 262.5a1.7 6.3 37.6 0 1-2.7-2.2 1.7 6.3 37.6 1 1 2.6 2.2"></path><path d="M330.8 265.3a1.7 6.2 66.5 0 1-1.2-3.3 1.7 6.2 66.5 0 1 1.2 3.3m1.7-53.4a3.8.8 41.1 0 1-1.5.8 3.8.8 41.1 1 1 1.5-.8m-1.9 1.5a3.9.8 8.2 0 1 .3 1.6 3.9.8 8.2 1 1-.3-1.6"></path><path d="M331.4 212.4a4 .7 26.8 1 1-.8 1.3 4 .7 26.8 0 1 .8-1.3M303.7 262s5.1 1.1 9.6 2.7c4.5 1.7 11.3 7.2 13.1 7.6 2 0 4.9-.7 6-3.6-3.2.8-5 2.1-8 .5-1.1-.4-4.6-3.6-8.5-5.3-3.8-1.7-11.5-3.6-11.5-3.6l-.7 1.7m5.5-46.5 5.9-3.1-6.5 1.7-.8 1.1 1.4.3"></path><path d="M314.8 217c-2.3-.5-5.8-1.3-8-1.4 1.5-1.7 3.6-4.7 5-6.4-1 1.7-2.3 4-2.8 5.5 1.5.9 4 1.6 5.8 2.2"></path><path d="M308.1 215.9a314.4 314.4 0 0 1 5.3-4.1l-6.1 2.7-.6 1.3h1.4"></path><path d="M313.7 216.9c-2.3-.5-5.8-1.3-8-1.5 1.4-1.7 3.5-4.7 4.8-6.6-.8 1.8-2.2 4.1-2.7 5.8 1.6.9 4.1 1.6 6 2.3"></path><path d="m307.3 216.2 6.1-2.6-6.6 1.1-.9 1 1.3.5"></path><path d="M313 217c-2.3-.3-6-.7-8.2-.6 1.3-2 3-5.3 4.1-7.3-.6 1.9-1.7 4.4-2 6.1 1.7.8 4.3 1.2 6.1 1.7"></path><path d="m306.6 216.2 4.2-5-5.3 3.9-.3 1.3 1.4-.2"></path><path d="M313 217.3c-2.5 0-6.4-.3-8.8 0 1.2-2.3 2.7-6 3.6-8.3-.4 2.1-1.3 5-1.4 6.9 1.8.6 4.6 1 6.6 1.4"></path><path d="m305.8 217.4 5-4.9-6.1 3.5-.4 1.4h1.5"></path><path d="M311.9 217.4c-2.7 0-6.8-.1-9.5.2 1.8-2.5 4.2-6.6 5.6-9.1-1 2.3-2.4 5.4-3 7.5 1.9.7 4.8 1 6.9 1.4"></path><path d="m304 217.8 6.6-5.5-7.4 3.9-.8 1.6h1.6"></path><path d="M311 217.6c-2.7.4-6.9.8-9.4 1.5 1.3-2.7 3.1-7 4.2-9.7-.6 2.4-1.7 5.6-2 7.8 2 .4 5 .3 7.1.4"></path><path d="m303.2 218.9 5-7-6.3 5.7-.3 1.7 1.6-.4"></path><path d="M309.4 218.4c-2.6.3-6.8.5-9.4 1 1.5-2.6 3.5-6.8 4.8-9.4-.8 2.3-2 5.5-2.4 7.7 2 .5 5 .5 7 .7"></path><path d="m302.3 219.6 6.4-5.5-7.3 3.9-.7 1.6h1.6"></path><path d="M308.7 218.7c-2.7.6-6.9 1.3-9.4 2.1 1.2-2.7 2.8-7.1 3.8-9.8-.5 2.4-1.4 5.6-1.6 7.8 2 .3 5 0 7.2-.1"></path><path d="m301.2 220 4-7.7-5.4 6.6-.1 1.7 1.5-.7"></path><path d="M308.7 219.1c-3 .8-7.4 1.8-10 2.8 1-3.1 2.1-8 2.9-11.1-.3 2.7-.9 6.3-.8 8.8 2.3.2 5.5-.3 7.8-.5"></path><path d="m300.4 221.7 5.2-7.6-6.6 6.1-.3 2 1.7-.5"></path><path d="M307.5 220c-2.8.9-7.2 2.1-9.8 3.3.8-3.2 1.8-8.1 2.4-11.2-.1 2.7-.5 6.3-.3 8.7 2.2.1 5.4-.6 7.7-.8"></path><path d="m299.4 222.8 3.9-8.4-5.6 7.2v2l1.7-.8"></path><path d="M306.4 221.2c-2.8.6-7.3 1.5-10 2.4 1.1-3 2.5-8 3.4-11-.4 2.7-1.1 6.4-1.1 8.7 2.2.3 5.4-.1 7.7-.2"></path><path d="m298.4 223.6 6.4-6.6-7.5 4.9-.6 1.8 1.7-.1"></path><path d="M305.2 222.3c-2.9.4-7.3.8-10 1.5 1.3-3 3-7.8 4-10.8-.6 2.7-1.5 6.3-1.7 8.7 2.2.5 5.4.4 7.7.6"></path><path d="m297.2 223 4.3-8.3-5.9 7v1.9l1.6-.7"></path><path d="M305.5 221.3c-3 1.3-8 3-10.9 4.6 1-3.7 2-9.5 2.6-13.1 0 3.1-.5 7.4-.3 10.1 2.5 0 6-1.1 8.6-1.6"></path><path d="m296.6 225.4 5.2-9.4-6.9 8-.2 2.2 1.9-.8"></path><path d="M304.3 222.5c-3 1.4-7.8 3.4-10.6 5.1.8-3.6 1.5-9.5 2-13 0 3-.2 7.3.1 10 2.5-.3 6-1.5 8.5-2.1"></path><path d="m295.5 226.8 3.8-10.1-5.7 9 .2 2.3 1.7-1.2"></path><path d="M303 223.3c-3 1.5-7.8 3.5-10.6 5.3.7-3.7 1.4-9.5 1.9-13.1 0 3-.2 7.3.2 10 2.5-.3 6-1.6 8.5-2.2"></path><path d="m294.7 228 5.8-8.9-7.4 7.3-.3 2.2 1.9-.6"></path><path d="M302.7 222.8c-2.7 2.2-7 5.4-9.4 7.8 0-3.8-.5-9.5-.8-13 .6 2.9 1.3 7 2.3 9.5 2.4-.9 5.5-3 8-4.2"></path><path d="m295 228.5.6-10.7-2.8 10.4.8 2 1.4-1.7"></path><path d="M302 223.8c-2.8 2.2-7 5.3-9.5 7.7 0-3.7-.5-9.5-.8-13 .7 3 1.3 7 2.3 9.5 2.4-.8 5.5-3 8-4.2"></path><path d="m294.3 230.3 2.7-10.5-4.7 9.6.3 2.2 1.7-1.3"></path><path d="M301.6 224c-2.5 2.6-6.6 6.4-8.9 9-.4-3.7-1.5-9.6-2.2-13.2 1 3 2.1 7.1 3.4 9.5 2.3-1.1 5.4-3.6 7.7-5.2"></path><path d="m294.3 231.6.5-11.1-2.7 10.8.8 2 1.4-1.7"></path><path d="M300.8 226c-2.7 2.2-7 5.5-9.6 8 0-3.8-.7-9.8-1-13.5.7 3 1.5 7.3 2.5 9.9 2.5-1 5.7-3.1 8.1-4.5"></path><path d="m293.5 232.9 3.8-10.5-5.8 9.3.2 2.3 1.8-1.1"></path><path d="M300.8 226c-2.5 2.5-6.3 6.4-8.5 9.1-.4-3.8-1.5-9.8-2.1-13.4 1 3 2 7.2 3.2 9.6 2.3-1.2 5.1-3.7 7.4-5.3"></path><path d="m293.6 233.4-.4-11-1.8 11 1 1.9 1.2-1.9"></path><path d="M299.6 226.8c-2.4 2.6-6.1 6.5-8.2 9.3-.5-4-1.8-9.8-2.5-13.5 1 3 2.3 7.2 3.5 9.6 2.2-1.2 5-3.8 7.2-5.4"></path><path d="m293 234.5 1.2-11.2-3.3 10.6.7 2.2 1.4-1.6"></path><path d="M299 227.2c-2 2.9-5.5 7-7.4 10-.8-3.8-2.5-9.5-3.5-13 1.3 2.8 2.8 6.8 4.2 9.1 2.1-1.4 4.7-4.2 6.8-6"></path><path d="m293 235.6-.8-11.3-1.4 11.2 1 2 1.1-2"></path><path d="M298.9 227.9c-2 3-5.3 7.3-7 10.4-1-3.8-3-9.5-4.2-13 1.4 2.8 3.1 6.8 4.7 9 2-1.5 4.5-4.5 6.5-6.4"></path><path d="m293.6 236.6 1.2-11.3-3.2 10.6.6 2.3 1.4-1.6"></path><path d="M298.4 229c-1.7 3.1-4.5 8-6 11.3-1.3-3.6-3.8-9-5.3-12.4 1.7 2.6 3.7 6.3 5.5 8.4 1.9-1.8 4-5.2 5.8-7.4"></path><path d="m293.3 237.6-3.2-10.8 1 11.3 1.5 1.6.6-2.1"></path><path d="M298.4 230.2c-1.8 3.2-4.8 8-6.3 11.3-1.3-3.6-3.8-9-5.4-12.3 1.7 2.6 3.8 6.3 5.6 8.3 2-1.8 4.2-5.1 6-7.3"></path><path d="m293.4 239.6-1.2-11.3-1 11.3 1.1 2 1.1-2"></path><path d="M298.6 231.2c-1.9 3.1-5 7.9-6.5 11.1-1.3-3.6-3.7-9-5.2-12.4 1.7 2.6 3.7 6.4 5.5 8.4 2-1.7 4.3-5 6.2-7.1"></path><path d="m293.3 240.5-2.1-11-.1 11.2 1.3 1.8.9-2"></path><path d="M297.8 232.8c-2 3-5.3 7.5-7 10.7-1.1-3.7-3.3-9.4-4.6-12.8 1.5 2.7 3.4 6.6 5 8.8 2.1-1.6 4.6-4.7 6.6-6.7"></path><path d="m292.3 241.7 1-11.3-3.1 10.7.7 2.2 1.4-1.6"></path><path d="M297.9 233c-1.7 3.3-4.6 8.3-6 11.6-1.4-3.5-4-8.8-5.7-12 1.8 2.4 4 6 5.8 8 2-1.9 4-5.3 5.9-7.5"></path><path d="m292 242.7-3.5-10.6 1.3 11.2 1.5 1.6.6-2.2"></path><path d="M297.4 233.9c-1.2 3.6-3.2 9-4 12.7-2-3.2-5.5-7.8-7.6-10.7 2.1 2.1 4.9 5.2 7 6.7 1.6-2.3 3.2-6 4.6-8.7"></path><path d="m295 243.5-3.7-10.4 1.6 11.2 1.5 1.4.6-2.2"></path><path d="M297.4 235c-1.2 3.6-3.2 9.1-4 12.7-2-3.2-5.4-7.7-7.6-10.5 2.1 2 4.9 5 7 6.6 1.6-2.3 3.2-6.1 4.6-8.8"></path><path d="m295 245.3-4.8-9.7 2.8 10.8 1.7 1.2.4-2.3"></path><path d="M297 235.9c-.7 3.7-2 9.5-2.5 13.2-2.3-2.9-6.3-7-8.7-9.4 2.3 1.7 5.4 4.4 7.7 5.5 1.3-2.5 2.4-6.5 3.5-9.3"></path><path d="m295.4 246.8-2.6-10.9.4 11.3 1.4 1.7.8-2"></path><path d="M297 237c-.4 3.9-1.2 9.8-1.2 13.5-2.6-2.5-6.9-6-9.5-8.1 2.4 1.4 5.7 3.6 8.1 4.4 1-2.6 1.8-6.8 2.6-9.7"></path><path d="m295.5 247.6-6.9-7.8 5.2 9.5 2 .6-.3-2.3"></path><path d="M297.2 238.4c-.4 3.8-1.2 9.7-1.3 13.4-2.6-2.5-6.9-6-9.5-8.2 2.5 1.4 5.8 3.7 8.1 4.5 1.1-2.6 1.8-6.8 2.7-9.7"></path><path d="M296.3 249.4 291 240l3.3 10.7 1.7 1.1.3-2.3"></path><path d="M297.5 240c-.3 3.8-.8 9.7-.8 13.5a117 117 0 0 0-9.8-7.6c2.6 1.2 6 3.3 8.3 4 1-2.7 1.6-7 2.3-10"></path><path d="m297 251.2-6.6-8.3 4.8 9.8 1.8.8v-2.3"></path><path d="M297.6 241.8c-.3 3.8-.8 9.7-.7 13.5-2.7-2.4-7.1-5.6-9.9-7.6 2.6 1.3 6 3.3 8.4 4 1-2.7 1.5-7 2.2-10"></path><path d="m297.5 252.6-4.5-10 2.5 11 1.6 1.3.4-2.3"></path><path d="M297.7 242.9c.2 3.9.2 9.8.6 13.6a134 134 0 0 0-10.4-6.2c2.6.9 6.1 2.4 8.6 2.8.7-2.9.8-7.1 1.2-10.2"></path><path d="m298.3 252.2-8.3-5.7 7 7.8 2 .1-.7-2.2"></path><path d="M298 243.3c.3 3.9.7 9.8 1.3 13.5-3-1.9-7.8-4.3-10.8-5.8 2.7.8 6.3 2.2 8.8 2.5.5-2.9.4-7.1.7-10.2"></path><path d="m299.3 254.3-7-8 5.3 9.6 1.9.7-.3-2.3"></path><path d="M298.6 244.8c.5 3.8 1 9.7 1.9 13.4-3-1.7-8-3.8-11-5.1 2.7.6 6.4 1.8 8.8 2 .4-3 .2-7.2.3-10.3"></path><path d="m300.6 255.7-8.3-5.9 7 8 2 .1-.7-2.2"></path><path d="M298.9 246.4c.7 3.8 1.7 9.7 2.7 13.3-3.1-1.5-8.2-3.1-11.3-4.1 2.8.3 6.5 1.2 9 1 .2-2.9-.3-7-.4-10.2"></path><path d="m301.6 256.9-7-8.2 5.2 9.7 2 .8-.2-2.3"></path><path d="M299.3 247.4c1.1 3.7 2.6 9.5 4 13-3.3-1-8.4-2-11.6-2.6 2.8 0 6.5.3 9-.1 0-3-1-7.1-1.4-10.2"></path><path d="m302 256.9-9.7-2 9.1 4.5 1.9-.7-1.4-1.8"></path><path d="M300 248.6c1 3.7 2.5 9.4 3.8 12.9-3.2-1-8.3-2-11.5-2.6 2.8 0 6.5.3 9 0 0-3-1-7.2-1.3-10.3"></path><path d="m303.5 257.9-9.2-4.5 8.2 6.7 2-.2-1-2"></path><path d="M299.5 249.2c1.8 3.4 4.5 8.7 6.5 11.7-3.4-.2-8.6 0-11.8 0 2.7-.5 6.4-1 8.7-2-.7-2.9-2.4-6.7-3.4-9.7"></path><path d="m305 258.9-9.6-2.6 9 5 1.8-.5-1.3-2"></path><path d="M300.4 250.7c1.9 3.3 4.6 8.6 6.7 11.6-3.4-.2-8.6 0-11.8.2 2.6-.7 6.4-1.2 8.6-2.2-.6-2.9-2.4-6.7-3.4-9.6"></path><path d="m306.1 259.7-8.9-5.3 7.8 7.4h2l-.9-2.1"></path><path d="M301.2 251.5c2.1 3.1 5.3 8 7.6 10.9a90 90 0 0 0-11.6 1.7c2.6-1 6.2-2 8.4-3.3-1-2.8-3.1-6.5-4.4-9.3"></path><path d="m306.8 260.5-9.6-.3 9.5 2.9 1.7-1.1-1.6-1.5m5.6-46.6 6.9-1.1-6.9.1-1.2.6 1.2.4"></path><path d="M316.2 215.4c-2-.6-5-1.6-7.1-2l7.4-3.5c-1.5 1-3.8 2.2-5 3.2 1.2.8 3.3 1.6 4.7 2.3"></path><path d="m312 214.1 6.8-1.8-7 .9-1 .7 1.3.2"></path><path d="M316.5 215.9c-2.4-.3-6-.7-8.3-.7 1.8-1.6 4.2-4.1 5.7-5.7-1 1.5-2.6 3.4-3.3 4.8 1.6.7 4.1 1.1 5.9 1.6"></path><path d="m309.6 214.6 7-.8-6.8-.2-1.3.6 1 .4"></path><path d="m314.7 216.1-7.5-1.3 6.9-3.8c-1.4 1-3.4 2.4-4.4 3.4 1.3.6 3.5 1.2 5 1.7"></path><path d="m309 214.6 6.1-2.7-6.7 1.8-.8.8h1.4"></path><path d="M314.5 216.9c-1.7-.7-4.5-2-6.2-2.5l4.4-4.8c-.8 1.3-2 3-2.6 4.4 1.2 1 3 2 4.4 2.9"></path><path d="m309.3 215 4.8-2-5.2.6-.6 1 1 .4m-4 44.6h-9.8l10 2.5 1.6-1-1.8-1.5"></path><path d="m307.1 260.2-10-2.3 9.6 4.7 2-.6-1.6-1.8"></path><path d="m308.8 260.9-10-.5 10 3 1.7-1-1.7-1.5"></path><path d="M302.5 253.9c2.5 2.8 6.4 7.4 9.1 9.9-3.3.5-8.3 1.8-11.4 2.7 2.4-1.2 6-2.6 8-4-1.4-2.6-4-6-5.7-8.6"></path><path d="m310.1 261.4-10-3.3 9.4 5.6 2-.4-1.4-2"></path><path d="M303.4 254.5c2.8 2.6 7 6.7 10 9-3.2.9-8 2.8-11 4 2.3-1.4 5.6-3.2 7.4-5-1.6-2.4-4.5-5.5-6.4-8"></path><path d="m311 262-9.5 1.9 10 .6 1.4-1.3-2-1.2"></path><path d="m309 261.4-9.8.8 10.1 1.7 1.6-1.2-2-1.3"></path><path d="m310.8 262-10.2-1.7 10 4 1.8-.7-1.6-1.7z"></path><path d="m312.5 262.5-10 .2 10.2 2.3 1.6-1.1-1.8-1.4z"></path><path d="M305.7 256c2.8 2.6 7 6.8 9.9 9.2-3.3.7-8.3 2.4-11.3 3.4 2.4-1.3 5.8-2.9 7.7-4.5-1.6-2.5-4.4-5.7-6.3-8.2z"></path><path d="m313.9 262.9-10.2-2.6 9.8 5 1.9-.6-1.5-1.8z"></path><path d="M306.6 256.5c3 2.4 7.6 6.2 10.7 8.2-3.2 1.1-7.8 3.5-10.6 4.9 2.2-1.7 5.3-3.7 7-5.5-1.8-2.4-5-5.3-7-7.6z"></path><path d="m314.8 263.4-9.3 2.6h10l1.3-1.5-2-1z"></path></g><path fill="#fedf00" stroke="#000" stroke-width=".4" d="m327.6 249.5-7.6-5.3-7.6 5.3 2.9-8.4-6.7-5.2h8.6l2.8-8.4 2.8 8.4h8.6l-6.7 5.2 2.9 8.4z"></path></svg>

`;
});
const Rs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of rs" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-rs" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="rs-a"><path fill-rule="evenodd" d="M60 0h1200v900H60z"></path></clipPath></defs><g clip-path="url(#rs-a)" transform="translate(-32) scale(.53333)"><path fill="#fff" d="M0 0h1350v900H0z"></path><path fill="#0c4076" d="M0 0h1350v600H0z"></path><path fill="#c6363c" d="M0 0h1350v300H0z"></path><g transform="matrix(1 0 0 1.00437 0 -.3)"><path fill="#21231e" d="M473.4 259.4v-.2h1v.2l-.5.5-.6-.6zm1 0v.5h-.5l.4-.6zm-93 5.2-1 .2.3-.6 4.2-.2 4-.3 4-.2 3.8-.3 4-.2 3.6-.3 3.7-.2 3.7-.2 3.5-.2h3.4l3.3-.3 3.2-.2 3.2-.2 3-.2h3l3-.2 3-.2 2.7-.2h2.8l2.7-.2 2.5-.2h2.5l2.4-.3h2.2l2.2-.2h2.2l2-.2h2l2-.2h5.3v1h-5.5l-1.8.2h-2l-2 .2h-2.2l-2.2.2-2.4.2h-2.4l-2.5.2-2.5.2H446l-2.8.3h-2.8l-3 .3-2.8.2h-3l-3 .3-3.3.2-3.3.2-3.3.2h-3.5l-3.5.3-3.6.2-3.5.3-3.8.2-3.8.2-4 .3-4 .2-4 .3-4.2.2.5-.6zm-1 .2-.3-.5h.7l-.4.5zm6.4 31-6.5-31 1-.2 6.5 31-.5.7-.5-.4zm.5.5h-.4l-.2-.4.5.3zm95-4-.2 1h.2-5.8l-3 .2h-3l-2.8.2h-3l-3 .2h-6l-3 .2h-3l-3 .2h-3l-3 .2h-3.2l-3 .2h-3l-3 .2h-3l-3 .2h-3l-3 .2h-3l-3 .2h-3l-3 .2h-3l-2.8.2h-5.8l-2.7.2h-2.7v-1h5.8l2.7-.2h5.8l3-.2h3l2.8-.2h3l3-.2h3l3-.2h3l3-.2h3l3-.2h3l3-.2h3.2l3-.2h3l3-.2h3l3-.2h3l3-.2h3l3-.2h3l2.8-.2h3l2.8-.2h.2zm-.2 0h.2zm94.5 3.4 1 .2-.5.3h-2.8l-2.8-.2h-8.8l-2.8-.2h-3l-3-.2H551l-3-.2h-3l-3-.2h-3l-3-.2h-3l-3-.2h-3l-3.2-.2h-3l-3-.2h-3l-3-.2h-3l-3-.2h-3l-3-.2h-3l-3-.2h-3l-3-.2H485l-3-.2.2-1h2.8l3 .2h3l2.8.2h3l3 .2h3l3 .2h3l3 .2h3l3 .2h3l3 .2h3l3 .2h3.2l3 .2h3l3 .2h3l3 .2h3l3 .2h3l3 .2h5.8l2.7.2h3l2.7.2h2.8l-.5.5zm1 .2v.3h-.5l.5-.4zm6.5-31.2-6.5 31h-1l6.5-31.2.6-.4.4.6zm-.4-.6h.5v.6l-.4-.6zm-93.7-4.8h1l-.6-.5h5.4l2 .2h2l2 .2h2l2.4.2h2.4l2.4.3h5l2.6.3h2.7l3 .3 2.8.2h3l3 .3 3 .3 3.3.2 3.3.2 3.4.2h3.4l3.6.3 3.6.2 3.7.2 3.6.3 4 .2 3.8.3 4 .2 4 .3 4.2.2v1l-4.3-.2-4-.3-4-.2-4-.3-3.7-.2-3.8-.2-3.6-.3-3.6-.2-3.5-.2h-3.4l-3.3-.3-3.3-.2-3.2-.2-3-.2h-3l-3-.2-3-.2h-2.7l-2.6-.3h-2.6l-2.6-.3h-2.5l-2.4-.2-2.3-.2h-2.2l-2.2-.2h-2l-2-.2h-2l-1.8-.2h-3.3l-.5-.6zm.4.5h-.5v-.6l.4.5zm.5-.8v.2h-1v-.2l.3-.5.6.5zm-1 0v-.4h.3l-.4.4zm-8 .3.2-1h8.8l.3.2v.8h-.5v.2h-.3l-.2-1h.2v.7h.2-8.2zm.2 0zm-8.3.2v-1l-.2 1h-.4l-.2-.2-.3-.3v-.5l.2-.2h9.4v1h-8.8l.2-.2v-.8h-.2.4v1zm0-1v1l-.6-.5.5-.5zm-.6.5v-.5h.5l-.6.5z"></path><path fill="#edb92e" d="M583.5 264.2c3.2-6.6 6.7-13 11.2-18.7-11.7 8.8-18 7.5-18.7-4-.7-.2-1.7-.2-2.6-.2-9 14-17.7 12-26.2-5.8-11.5 18.4-21.4 18-29.2-1-13.3 16.6-24.5 16.7-33.6.2v-2c.5.2 0 .3-1 0l-.3-.3a69.3 69.3 0 0 1-1 .2c-.2 0-.5 0-.8-.2l-.2.4c-1.2.2-1.6 0-1 0v2c-9.2 16.4-20.4 16.3-33.7-.4-7.8 19-17.7 19.5-29.2 1-8.4 18-17 20-26 6-1 0-2 0-2.7.2-.8 11.4-7 12.7-18.8 4 4.6 5.5 8 12 11.3 18.6 34-1.4 67.6-3.2 101.3-5 34 1.8 67.6 3.6 101.5 5z"></path><path fill="#21231e" d="m595 246-.6-1 .7 1-.3.4-.4.5-.4.4-.5.6-.4.5-.3.6-.4.6-.4.6-.5.5-.3.6-.4.6-.4.4-.3.6-.3.6-.3.6-.4.6-.3.5-.3.6-.4.5-.3.6-.3.7-.4.6-.3.6-.3.5-.3.6-.2.8-.3.6-.4.6-.2.6-.3.6-.3.6-.3.6-1-.4.3-.6.3-.7.3-.6.2-.5.4-.6.3-.7.2-.6.3-.6.3-.6.4-.6.3-.6.3-.6.3-.6.5-.6.3-.6.4-.6.3-.6.4-.5.2-.5.4-.6.4-.7.3-.6.4-.5.4-.6.5-.6.4-.5.3-.6.4-.6.4-.6.5-.5.4-.6.4-.5.7.7zm-19.2-4 .3-1 .5.5v1l.2 1v1l.3.7.2.8.3.7.3.7.2.6.4.5.3.5.4.4.5.3.4.3.4.3.5.2h.4l.5.2h1.9l.7-.2.7-.2.8-.3.8-.3.8-.3 1-.5.8-.6 1-.5 1-.7 1-.7 1-.7 1-1 .7 1-1 .7-1 .8-1 .7-1 .6-1 .5-1 .5-1 .5-.8.4-1 .3-.7.3-.8.2h-.8l-.8.2h-2l-.7-.3-.5-.2-.6-.3-.5-.5-.6-.4-.5-.4-.5-.5-.3-.5-.4-.7-.3-.7-.2-.7-.3-.8-.2-1v-.8l-.2-1v-1l.2.3zm.3-1 .4.2v.3l-.3-.4zm-2.2.6-.8-.6.4-.2h2v.2h.4l-.2 1h-1.2v-.2h-1.2l.4-.2zm-.8-.6v-.2h.4l-.4.2zm-25.3-5.2-1-.6h1l.8 1.7.8 1.4.8 1.5.8 1.2.8 1.2.8 1.2.8 1 .8 1 .8.8.8.8.8.7.7.5 1 .4.7.3.8.3.7.3h2.3l.8-.2.8-.2.8-.3.8-.4.8-.6.8-.6.8-.7.8-.6 1-1 .7-1 .8-1 .8-1 1-1.4.8.6-.8 1.3-1 1-.7 1.2-1 1-.7 1-1 .7-.8.6-.8.6-1 .6-.7.4-1 .4-.8.2-1 .2h-3l-1-.4-.7-.3-1-.5-.7-.5-1-.6-.7-.7-1-.8-.8-1-.8-1-.8-1-.8-1.2-.8-1.3-.8-1.3-.8-1.5-.8-1.6-.8-1.7h1zm-1-.6.6-.7.4.8h-1zm-28.3-.5-.8-.6 1 .2.6 1.7.7 1.5.7 1.5.8 1.4.7 1.3.8 1.2.8 1 .8 1 .8.7.8.7.8.6 1 .5.7.4.8.2 1 .2h2.5l1-.3.8-.2 1-.4.8-.6 1-.7 1-.6 1-1 1-1 1-1 1-1.2 1-1.3 1-1.6 1-1.5 1.2-1.8 1 .6-1.2 1.7-1 1.5-1.2 1.5-1 1.3-1 1.3-1 1.2-1.2 1-1 1-1 .8-1 .7-1 .6-1 .4-1 .4-1 .4h-3l-1-.2-1-.3-.8-.6-1-.5-.8-.8-1-.8-.7-.8-1-1-.8-1-.8-1.3-.8-1.4-.8-1.5-.8-1.5-.7-1.7-.8-1.7h1zm-.8-.6.5-.6.5.8h-1zm-33.8.7h1v-.2l.8 1.5 1 1.4.8 1.2 1 1.2.8 1 1 1 .8 1 1 .8.8.7 1 .6 1 .4 1 .4.8.3 1 .3 1 .2h2l1-.2 1-.3 1-.3 1.2-.4 1-.6 1.2-.6 1-.6 1.3-.8 1-1 1.3-1 1.2-1 1-1.3 1.4-1.3 1.2-1.4 1.2-1.5.8.7-1.3 1.5-1 1.5-1.3 1.3-1.2 1.3-1.2 1-1.2 1-1 1-1.3 1-1.2.7-1 .6-1.3.6-1 .5-1.3.3-1.2.3h-1l-1.2.2h-1l-1.2-.2-1-.2-1-.3-1-.4-1-.5-1-.7-1-.6-1-1-1-.8-1-1-1-1.2-.8-1.2-1-1.3-.8-1.5-1-1.5v-.3zm0 .3v-.3.3zm1-2.3v2h-1v-2l.8-.5.3.5zm-1 0v-.8l.8.2-.8.5zm-1 .3 1-.4-.4-.3h1l-.2.2v.4l.4-1h.2v.2l.2.2v.6h-1.8l-.5-.3zm.5.3h-.3v-.3l.3.3zm.3-1 .2.3-1 .4v-.4l.2-.7.6.2zm-.6-.4.4-.2.2.4-.6-.3zm-1 1 .2-1h.8l.2 1h-1zm.2 0zm-.6-.4-1-.4.7-.3h.8v1h-1l.4-.4zm-1-.4.3-.4h.3l-.6.4zm0 .4v-.4l1 .4-.2.4-.4.3-.5-.7zm.8.4v.3h-.4l.4-.3zm-1-.3h-1l.7.4v.2h.2v-.8h-.2.2l.2-.2h.4l.2 1h-1.9v-.2h-.2v-.5h.2v-.2h.2l.8.4zm-.7-.5.7-.3v.7l-.7-.5zm-.3 2.5v-2h1v2.3l-1-.3zm1 0v.2-.3zm-33.6 0-1-.5h1l1 1.4 1.3 1.4 1.3 1.3 1.2 1.2 1.2 1 1.2 1.2 1 1 1.2.7 1 .7 1.2.7 1 .6 1.2.4 1 .3 1 .3h1l1 .2h1l1-.2 1-.2 1-.2 1-.4 1-.5 1-.7.8-.7 1-.8.8-1 1-1 .8-1 1-1.2.8-1.2.8-1.4 1-1.5.8.5-1 1.5-.8 1.4-1 1.2-.8 1.2-1 1.2-1 1-.8 1-1 .8-1 .7-1 .8-1 .5-1 .4-1 .4-1 .3-1.2.2h-2.2l-1-.2-1.3-.3-1-.3-1.2-.5-1-.6-1.2-.6-1.2-.8-1.2-.8-1.2-1-1.2-1-1.2-1-1.2-1.4-1.2-1.3-1.3-1.5-1-1.5h.8zm-1-.5.3-.8.7.7-1 .2zm-28.3 1.5-1-.4h1l1 1.6 1 1.4 1.2 1.5 1 1.2 1 1.2 1 1 1 1 1 1 1 .7 1 .8 1 .6.8.4 1 .3.8.4h2.8l.8-.2.8-.3.8-.5 1-.5.7-.6 1-.7.7-.8.8-1 .8-1 .8-1.3.8-1.3.8-1.4.8-1.5.7-1.6.8-1.8 1 .4-.8 1.7-.7 1.7-.8 1.5-.8 1.4-.8 1.3-1 1.2-.7 1-1 1-.7 1-1 .7-.8.7-1 .4-.8.5-1 .2-1 .2h-3l-1-.3-1-.3-1-.4-1-.6-1-.7-1-.8-1-1-1-1-1-1-1-1.4-1-1.3-1.2-1.5-1-1.5-1.2-1.7h1zm-1-.4.5-.8.5.7h-1zm-25.6 6.5v-1l.3.2 1 1.3.7 1.2.8 1 .8 1 .8.8 1 .8.7.8 1 .6.7.5.7.3.8.3.8.2.8.2h2.3l.8-.4.8-.3.8-.4.7-.5 1-.6.7-.8.8-.8.8-.8.8-1 1-1 .7-1.2.7-1.2.8-1.3.8-1.6.8-1.5.8-1.7 1 .4-1 1.7-.7 1.5-1 1.4-.7 1.3-.8 1.3-.8 1.2-.8 1-1 1-.8 1-.8.8-.8.7-1 .6-.7.5-1 .5-1 .3-.7.3h-2.6l-1-.2-.8-.2-1-.4-.8-.4-1-.6-.8-.6-.8-.7-1-1-.7-.8-1-1-.8-1-1-1.3-.7-1.4.4.2zm0-1h.2v.2l-.3-.2zm-2.2.8h-1l.4-.5h1.2v-.2h1.5v1H389v.2h-.4l.2-.4zm-1 0v-.4h.4l-.4.3zm-18 3.6-.6.7.6-1 1 1 1.2.6 1 .7 1 .6 1 .4.8.5 1 .4.7.3.8.3.8.3.8.2h.7l.7.2h1.7l.4-.2.5-.2.4-.3.4-.3.4-.3.4-.4.3-.5.2-.5.3-.6.3-.7.3-.7.3-.8v-.8l.3-1v-.8l.2-1h1v1l-.2 1-.2 1-.2 1-.2.7-.2.8-.3.8-.4.7-.2.6-.5.6-.4.5-.6.5-.5.4-.7.2-.6.2-.6.2h-3.3l-.8-.3-.8-.3-1-.3-.8-.4-1-.5-.8-.5-1-.5-1-.6-1-.7-1-.8-1.2-.8.7-.8zm11 18.5v1l-.4-.3-.3-.6-.2-.6-.3-.6-.3-.6-.4-.6-.3-.6-.3-.7-.3-.5-.4-.6-.4-.7-.3-.6-.4-.6-.3-.5-.4-.6-.4-.7-.4-.5-.3-.6-.4-.6-.4-.6-.4-.6-.3-.5-.4-.7-.3-.6-.3-.5-.4-.6-.4-.5-.4-.5-.4-.5-.4-.6-.4-.5-.4-.6-.4-.5.7-.8.4.5.4.6.4.5.4.6.4.5.4.5.4.5.4.6.4.6.4.5.3.6.4.6.4.5.4.6.4.6.3.6.5.6.3.6.3.6.5.6.3.6.3.6.5.6.3.7.3.7.4.6.3.6.4.5.4.6.3.7.3.7.3.6-.5-.3zm0 1h-.3v-.3l.4.3zm101.4-6v1l-3.2.2h-3.2l-3 .3h-3.3l-3 .3-3.3.2H460l-3 .3-3.3.3h-3.2l-3 .3H444l-3 .3h-3.3l-3.3.2-3 .2h-3.3l-3.2.3h-3l-3.3.3-3.3.2h-3l-3.3.3h-3.2l-3 .2-3.3.2h-3.3l-3.2.2h-3l-3.3.3H384l-3 .2-.2-1h3.2l3.2-.3h3l3.3-.2 3.2-.2h3l3.3-.3h3.2l3-.3h3.3l3.2-.3h3l3.3-.2h3.2l3-.3h3.3l3.2-.3 3-.2h3.3l3.2-.3h3l3.3-.3 3.2-.2h3l3.3-.3 3-.3h3.3l3.2-.3 3-.2h3.3l3.2-.3 3-.3h.2zm0 0zm101.2 5v1h-3l-3.3-.2-3-.2h-3.3l-3-.3h-3.3l-3.2-.3h-3l-3.3-.2-3.3-.2h-3l-3.3-.3-3.2-.2h-3l-3.3-.3h-3.3l-3-.3h-3.3l-3.2-.3-3-.3h-3.3l-3.3-.3h-3l-3.3-.3h-3l-3.3-.2-3-.2-3.2-.2h-3.2l-3.2-.3h-3l-3.3-.2.2-1h3l3.3.3 3.2.2 3 .2 3.3.2h3l3.3.3h3.2l3 .2 3.3.2 3.2.2h3l3.3.3h3l3.3.2 3.2.2h3l3.3.3h3.3l3 .3h3.3l3.2.3h3l3.3.3h3.3l3 .3h3.3l3.2.2h3.2l3 .2 3.3.2h3.2zm0 1zm0 0v-1l.5.7-.6.3zm.5-.3-.2.3h-.4l.5-.3z"></path><path fill="#edb92e" d="m459.4 276.2 22.7-11.5 23 11.5-23 11.4z"></path><path fill="#edb92e" d="M474 259.2v.2c-17.6.7-48.6 2.5-93.2 5.3l6.5 31c29.6-.8 64.3-2 94.8-3 30.7 1 65.3 2.2 95 3l6.5-31c-44.6-2.8-75.6-4.6-93-5.3v-.2c1.7-.4-1-.4-8.4-.2-7-.2-10-.2-8 .2z"></path><path fill="#edb92e" d="m597.3 236.7-3.7-.6c-7 17.5-13.4 18-14.6 1.4 1.6-.6 1-3.3 2.8-2.2 1 .5 2-1 1.3-2-2-1.5-3.6-1.3-5.4.4-.8-2.7-3-4-5.4-2.8-1 .5-.7 2.5.4 2.4 1.8-.2 1 1.6 1.6 3-12.5 16.4-19 14.4-17.4-7.3-3-.7-6.5-1.3-9.6-2.4-11.5 23.3-19.7 24.3-26.4 3.4 1.4-1 1-3.8 3-3 1.3.6 2.3-1.5 1.2-2.4-2.4-2-5-1.3-6.8 1.3-1.4-3-4-4-6.6-2.2-1.2.7-.5 3 .8 2.6 2.3-.7 1.3 2.4 3 3.5-5 19.6-30.8 21-26.6-8.2-2.4 0-4.5 0-6.6.2l-6.7-.2c4.2 29-21.5 27.8-26.6 8 1.6-1 .6-4 3-3.4 1.2.3 2-2 .7-2.7-2.6-1.7-5.2-.7-6.6 2.2-1.7-2.7-4.3-3.4-6.7-1.4-1 1 0 3 1 2.5 2.2-.8 1.8 2 3.2 3-6.7 21-15 20-26.4-3.4-3 1-6.5 1.7-9.5 2.3 1.6 21.6-5 23.6-17.4 7 .6-1.2 0-3 1.7-2.8 1 0 1.5-2 .4-2.4-2.4-1-4.5 0-5.3 2.8-1.7-1.7-3.5-2-5.5-.4-.8 1 .4 2.5 1.3 2 1.8-1 1.2 1.6 2.8 2.2-1.2 16.5-7.6 16-14.6-1.3l-3.7.7c0 4 1.3 8.5 3.8 11.7 10.6 13.5 18.5 10.4 18.8-4.7 14 16.4 24.4 14.3 26.2-3 11.7 21.8 30.5 11.4 31-2 5 19.4 33.5 19.2 35.4-3 1.8 22.2 30.3 22.4 35.4 3 .4 13.4 19.2 23.8 31 2 1.7 17.3 12.3 19.4 26 3 .4 15 8.3 18.2 19 4.7 2.4-3.2 3.8-7.6 3.7-11.7z"></path><path fill="#21231e" d="m593.7 235.6 3.7.6-.2 1-3.6-.6-.4-.7.5-.4zm-.5.3v-.4h.5l-.5.3zm-14.3 1 .2 1 .3-.6.2 1.4v1.4l.3 1.3.2 1.2.2 1 .3 1 .3 1 .3.7.3.7.3.6.3.5.3.5.4.2.3.2h1.3l.4-.3.4-.2.5-.4.4-.3.6-.6.5-.6.6-.7.7-1 .6-.8.7-1.2.6-1.2.6-1.3.7-1.3.5-1.5.7-1.6 1 .3-.8 1.6-.6 1.4-.7 1.4-.5 1.3-.7 1.3-.6 1-.6 1-.7 1-.7.8-.6.8-.6.6-.5.5-.6.3-.7.4-.5.2h-1.2l-.6-.2-.5-.2-.5-.4-.5-.4-.4-.6-.3-.6-.3-.8-.4-.8-.3-1-.2-1-.3-1-.2-1.3-.2-1.3-.2-1.5v-1.6l.3-.5zm-.5.4v-.4h.4l-.5.4zm3.5-2.7-.5 1v-.2h-.4v.2h-.2v.2l-.2.2v.3l-.2.3-.2.3v.2h-.2v.3h-.3v.2h-.3l-.2.2-.3-1v-.2h.2v-.2h.2v-.2l.2-.2v-.5h.2v-.4l.2-.2v-.3l.2-.2.2-.2h.2l.2-.2h1l.2.2zm-.5 1zm1.3-2 .6-1v.2h.2l.2.3v1.6h-.2v.2h-.2v.2h-.2v.2h-.2v.2h-.5v.2h-.8l-.3-.2.5-1v.2h.4v-.2h.2v-.2h.2v-.8zm.6-1v.2-.2zm-6.3 1 1-.3-.8-.2h.2l.2-.3.2-.2.2-.2.3-.2h.2l.2-.2h.2v-.2h.4l.2-.2h2.3l.2.2h.2l.2.2h.2l.2.2h.2l.2.2.2.2-.6.8-.3-.2h-.2l-.2-.2-.2-.2h-.3l-.2-.2h-2.1v.2h-.3v.2h-.2l-.3.2v.2h-.3v.2l-.3.2-1-.3zm1 .3-.7.5-.2-.8 1 .3zm-5.6-2.7-.4-1h.5l.3-.2h2.1l.4.2h.4l.2.3h.2v.2l.3.2h.2l.2.2v.2l.2.2v.2l.2.2.2.2v.2l.2.3v.2l.2.2v.2l-1 .3v-.5h-.2v-.3l-.2-.2v-.2h-.3v-.3h-.2v-.4h-.3v-.2h-.3v-.2h-.6v-.2h-2l-.2.2h-.2zm0 1.4.2 1h-.6v-.2h-.2l-.2-.2-.2-.2-.2-.2V231l.2-.2.2-.2.3-.2.4 1h-.2v1.2h.2zm2.2 3.7-.8-.6v.5-.2h-.2v-1h-.2v-1l-.2-.2h-.7v-1.2h.6l.3.2.2.2h.2v.2l.2.3v.4h.2v1.5h.2v.8zm0-.5h.2l-.2.4v-.5zm-18-6.6.3-1 .3.6v2l-.2 1.8v4.9l.3 1.4v1.3l.3 1 .2 1 .3 1 .4.8.3.8.4.5.5.5.4.3.4.3.5.2h1l.6-.2.7-.3.7-.4.8-.5 1-.4.7-.8 1-.8 1-1 1-1 1-1 1-1.4 1-1.4 1.3-1.4.8.6-1.2 1.5-1 1.3-1.2 1.3-1 1-1 1.2-1 1-1 .8-1 .8-.8.6-1 .5-.7.4-.8.3h-.8l-.8.2h-.7l-.7-.2-.6-.3-.6-.5-.5-.5-.4-.7-.5-.7-.4-1-.2-1-.2-1-.2-1.2-.2-1.3V229l.5.6zm.3-1h.3v.6l-.4-.6zm-9.3-1.6-1-.4.7-.3.3.2h.3l.3.2h.3l.2.2h.3l.4.2h.6l.3.2h.3l.4.2h.6l.3.2h.5l.3.2h.7l.3.2h.6l.3.2h.5l.3.2h.8l.3.2h.3l-.3 1h-.8l-.2-.2h-.6l-.3-.2h-.8l-.3-.2h-.6l-.4-.2h-.7l-.4-.2h-.3l-.3-.2h-.6l-.3-.2h-.2l-.3-.2h-.6l-.4-.2h-.3l-.4-.2h-.4l-.3-.2h-.2l.7-.4zm-1-.4.3-.4h.4l-.6.4zm-26.2 3.2.6.8.3-.6.6 2 .5 1.7.7 1.6.6 1.6.7 1.4.7 1.2.6 1 .7 1 .7 1 .7.6.6.6.7.4.7.4.7.2h1.4l1-.2.6-.2.8-.4 1-.6.7-.6 1-.8 1-1 .8-1 1-1.2 1-1.3.8-1.4 1-1.6 1-1.7 1-1.8 1-2 1.2-2 1 .3-1.2 2.2-1 2-1 1.8-1 1.8-1 1.6-1 1.5-1 1.3-1 1.2-1 1-1 1-1 1-.8.7-1 .5-.8.4-1 .2-.8.2h-1.8l-.8-.3-.8-.3-.8-.5-.8-.6-.7-.8-.8-1-.7-1-.7-1-.7-1.4-.7-1.4-.7-1.5-.7-1.7-.6-1.7-.7-1.8.2-.6zm-.2.6v-.4l.2-.2-.2.5zm3.8-3.6-.3 1h-.3l-.2-.2h-.2v.2h-.2v.2h-.2v.5h-.2v.4l-.2.3-.2.2v.2l-.2.3-.3.3-.2.3h-.2l-.5-.7.2-.2.2-.2v-.5h.2v-.4h.2v-.3l.2-.3v-.2l.2-.2.2-.3.2-.2h.2v-.2h.5v-.2h.7l.2.2zm.7-1.6.6-.8.2.2.2.2v.2l.2.3v1.3l-.2.3v.2l-.2.2h-.2v.2h-.2v.2h-.2l-.2.2h-1.1l.4-1h.7v-.2h.2v-.6h.2v-.7h-.2v-.2zm-7 1 1-.3h-1l.2-.3v-.3h.3l.2-.3.2-.3.2-.2.3-.3.3-.3h.2l.2-.3h.3l.2-.2h.5l.2-.2h2.2l.3.2h.2l.3.2h.3l.3.3h.2l.3.3.3.2-.6.8-.2-.2h-.2l-.2-.3-.4-.2h-.2l-.2-.2H521v.2h-.5l-.2.3h-.2v.2h-.2l-.2.3-.2.2-.3.3v.2l-.2.3-.2.2h-1zm1 .2-.6.7-.3-1 1 .2zm-7-2-.4-1h.3l.2-.2h.3l.4-.2h.2l.3-.2h.4l.3-.2h1.6l.2.2h.2l.3.2h.2l.2.3.3.2.2.2v.2l.3.2.2.2.2.2v.2l.3.2.2.3.3.4v.3l-.8.4-.2-.4-.2-.2v-.2l-.3-.2v-.2l-.3-.2-.3-.3h-.2v-.2h-.3l-.3-.2h-.2l-.3-.2h-.4l-.2-.2h-1.2l-.2.2h-.5l-.2.2h-.2l-.2.2-.2.2zm.5 1.7.3 1h-.5l-.2-.2h-.2l-.2-.2-.2-.2-.2-.2v-.2l-.2-.2V224l.2-.2.2-.3.3-.2.5 1h-.2v1.2h.2v.2h.4zm3.7 4-1-.2.2.5h-.2l-.2-.2h-.2v-.3h-.2l-.2-.3v-.4l-.2-.2v-.3l-.2-.2v-.4l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2h-.6l-.4-1h1.1l.3.2h.2v.4h.2v.3l.2.2v.2h.2v.5l.2.3v.5h.2v.4h.2l.2.2.2.2.3.6zm-.3-.5.3.2v.3l-.3-.5zm-27-7.2v-1l.6.5-.3 2.7-.2 2.4v2.2l.2 2 .3 2 .4 1.7.5 1.5.7 1.4.6 1 .8 1.2 1 1 1 .7 1 .6 1 .5 1 .4 1.3.3h2.4l1.3-.2 1.2-.3 1.2-.5 1.2-.5 1-.7 1.2-1 1-.8 1-1 1-1.3 1-1.3.8-1.3.8-1.5.6-1.7.5-1.7 1 .2-.6 2-.7 1.6-.8 1.6-1 1.5-1 1.4-1 1.3-1 1-1.2 1-1.2 1-1.2.8-1.3.7-1.2.5-1.3.3-1.4.2h-2.5l-1.2-.3-1.3-.4-1.2-.5-1-.7-1-1-1-1-1-1-.8-1.5-.7-1.5-.6-1.6-.4-1.8-.3-2-.2-2.2V227l.2-2.6.3-2.7.5.6zm0-1h.7v.5l-.6-.5zm-6.6 1.2.2-1h4l.2-.2h2.1v1h-4.1l-.2.2h-2zm.2 0zm-6.2-.8h-1l.5-.4h5.1l.2.2h1.2v1h-4l-.3-.2h-2l.5-.6zm-1 0v-.5h.5l-.5.6zm-26.4 7.8.5.8.3-.5.6 1.7.5 1.7.7 1.5 1 1.4.8 1.4 1 1.2 1 1 1 1 1.2 1 1.2.6 1.2.5 1.2.5 1.2.3 1.2.2h2.4l1.2-.3 1-.3 1.2-.4 1-.7 1-1 .8-.8 1-1 .6-1.3.6-1.5.6-1.6.4-1.8.3-2v-2l.2-2.3-.2-2.5-.3-2.7h1l.3 2.6.2 2.5v2.2l-.2 2.2-.3 2-.5 1.8-.5 1.6-.7 1.5-.8 1.4-1 1.2-1 1-1 .8-1 .7-1.2.5-1.3.4-1.3.3H463l-1.2-.2-1.3-.3-1.3-.5-1.3-.6-1.3-.7-1.2-1-1.2-1-1-1-1-1.2-1-1.3-1-1.5-.7-1.6-.7-1.7-.6-2 .2-.5zm-.2.5v-.3l.2-.2-.2.5zm3.7-4-.2 1-.2-.2h-.7v.2l-.2.2v.4l-.2.2v.5l-.2.2v.2l-.2.3v.2l-.2.2v.2h-.2v.3h-.3l-.2.2h-.2l-.4-.7.2-.2.2-.2h.2v-.3l.2-.2v-.5l.2-.2v-.5l.2-.3v-.3l.2-.2.3-.3.2-.2h.2l.2-.2h1.1zm.4-1.8.6-1v.2h.3v.3h.2v.2l.2.2v1.5l-.2.2v.2l-.2.2-.3.2-.2.2h-.9l.3-1h.4v-.4l.2-.2v-.8h-.2v-.2h-.2zm-6.7 2 .8-.6h-.8v-.2l.2-.3.3-.4v-.2l.3-.2.2-.2.2-.2.2-.2.2-.2.2-.2h.2l.3-.3.3-.2h.2l.3-.2h.5l.2-.2h1.6l.4.2h.2l.3.2h.2l.3.2.2.2h.3l-.6 1-.2-.2h-.2l-.2-.2h-.3l-.2-.2h-.5l-.2-.2h-1.3l-.2.2h-.3v.2h-.3l-.2.3-.2.2-.3.3-.3.3-.2.2v.2l-.2.2-.2.2v.3h-.2l-1 .2zm1 0-.5.7-.5-.8h1zm-7-1.2-.8-.8.2-.2.2-.2h.3l.2-.3h.2l.2-.2h.3l.3-.2h2.5l.3.2h.2l.3.2.2.2h.2l.2.3h.2l.2.2.2.2.2.3.2.2h.2v.4l.3.2-.8.6-.2-.2v-.3l-.3-.2-.2-.2-.3-.3-.2-.2h-.2l-.2-.2v-.2h-.2l-.2-.2h-.4l-.2-.2H441l-.2.2h-.2l-.2.2h-.2l-.2.3h-.2l-.2.3zm.5 1.6.4 1h-1.3l-.2-.2-.3-.2h-.2v-.2l-.2-.3v-.2l-.2-.2v-1.6l.2-.2.2-.2v-.2l.8.8-.2.2v1l.2.2.2.2h.4zm3.8 3.6-1-.4.2.6h-.2v-.3h-.3v-.2h-.2v-.3h-.2v-.5h-.2v-.6h-.2v-.5l-.2-.2-.2-.2h-.2v-.2h-.5v.2l-.5-1h.4l.2-.2h.6l.2.2.3.2h.2v.2l.2.2.2.3v.2l.2.2v.2l.2.3v.2l.2.2.2.2.2.2.2.2.2.6zm-.2-.6.3.2v.4l-.2-.6zm-26.6-2.5-.3-1 .5.4 1 2 1 2 1.2 2 1 1.6 1 1.6 1 1.5 1 1.4.8 1.2 1 1 .8 1 1 .8.7.6 1 .6.6.4.8.2.8.2h1.3l.7-.2.7-.4.7-.4.7-.6.7-.7.8-.7.6-1 .7-1 .8-1.3.6-1.4.7-1.5.7-1.5.7-1.8.6-2 1 .5-.7 2-.6 1.6-.7 1.7-.6 1.5-.7 1.4-.7 1.3-.7 1.2-.7 1-.8.8-.7.8-.7.6-.8.5-1 .4-.7.4H432l-1-.2-.7-.3-1-.5-1-.6-.8-.8-1-1-.8-1-1-1-1-1.2-1-1.3-1-1.5-1-1.6-1-1.8-1-1.8-1-2-1-2.2.5.3zm-.3-1h.3l.2.4-.6-.3zm-9 3h-1l.4-.6h.7l.3-.2h.6l.4-.2h.9l.3-.2h.5l.3-.2h.6l.4-.2h.3l.3-.2h.6l.3-.2h.5l.3-.2h.3l.4-.2h.3l.3-.2h.3l.3-.2h.3l.2 1h-.7l-.3.2h-.3l-.3.2h-.3l-.3.2h-.5l-.3.2h-.3l-.4.2h-.6l-.4.2h-.6l-.3.2h-.6l-.2.2h-.6l-.3.2h-.7l-.3.2h-.8v.2h-.4l.4-.5zm-1 0v-.5h.4l-.4.5zm-17.4 7 1 .3v-.5l1 1.4 1 1.4 1.2 1.3 1 1 1 1 1 1 1 .8.8.8 1 .6.6.4.8.4.7.3h.6l.6.2h.4l.5-.2.3-.2.5-.2.4-.5.3-.5.4-.7.2-.7.3-1 .2-1 .2-1v-2.7l.2-1.5v-5l-.2-1.8h1v2l.2 1.8v4.9l-.2 1.4v1.4l-.3 1.2-.3 1-.3 1-.2 1-.4.7-.4.7-.6.5-.5.5-.7.3-.7.2H402l-.6-.2-.8-.4-1-.5-.7-.5-1-.6-1-.8-1-.8-1-1-1-1-1-1.2-1-1.3-1.2-1.4-1-1.6-.2-.5zm0 .4v-.3.4zm2-3.7v1h-.6v.8l-.2.3v1h-.2v.3l-1-.4v-.4l.2-.2v-.9h.2v-.5l.2-.2v-.2h.4v-.2h1zm.3-1.4.3-1 .2.2h.2v.2h.2v.7h.2v1.2l-.2.2v.3l-.2.2-.2.2h-.2l-.2.2h-.5v-1h.4v-.2h.2v-.8l-.2-.2zm-5.7 2.7.7-.8-.8.2v-.2l.2-.3v-.3l.2-.3v-.2l.2-.2.2-.2v-.2l.3-.2v-.2l.3-.2h.2v-.3h.3l.3-.2.2-.2h.4v-.2h2.5l.3.2h.2l.3.2-.4 1-.3-.2h-.5l-.2-.2h-1.3l-.3.2h-.2v.2h-.2l-.2.2v.2h-.2l-.2.2v.2h-.2v.3l-.2.2v.2h-.2v.5l-.2.2-1 .3zm1-.3-.4.8-.7-.5 1-.3zm-5.8-.2-.7-.6v-.2l.3-.2h.3l.2-.2h.2l.2-.2.3-.2h.2l.2-.2h2.1l.2.2h.2l.2.2h.2l.2.2.3.2.2.2h.2l.2.3v.2l-.7.8v-.2h-.3v-.2l-.3-.2-.3-.2h-.3v-.2h-.2l-.2-.2h-2v.2h-.3l-.2.2-.2.2h-.2l-.2.2zm-.7-.6v-.2zm1.4 1.7.6 1h-1.3l-.3-.2-.2-.2v-.2h-.2l-.2-.2v-.3l-.2-.2v-.8l.2-.3h.2l.7.5v.8h.2v.2h.2v.2h.2zm3.6 2.7h-1l.3.5v-.2h-.3v-.2h-.3v-.3h-.2v-.2h-.2v-.2l-.2-.2v-.3h-.2v-.2l-.2-.3v-.2h-.7l-.6-.8h.2l.2-.2h1.1l.3.2.2.2v.2h.2v.4l.2.2v.5h.2v.2l.2.2.2.2h.2l.4.6zm-.4-.5h.4v.4l-.4-.5zm-14.7-.4v-1l.4.3.8 1.5.6 1.5.7 1.3.7 1.3.6 1.2.6 1 .6 1 .6 1 .5.6.6.7.5.7.6.4.5.5.3.2.5.2h1.1l.3-.3.3-.2.4-.4.3-.4.4-.5.3-.6.3-.8.3-.8.2-1 .3-1 .3-1.3.2-1.3v-1.4l.2-1.4h1v1.5l-.2 1.4-.2 1.3-.2 1.2-.2 1-.2 1-.3 1-.4.8-.4.8-.4.6-.4.6-.5.4-.5.4-.5.2-.6.2h-1.1l-.6-.3-.7-.4-.6-.4-.5-.6-.6-.6-.7-.7-.7-.7-.6-1-.6-1-.6-1-.6-1.2-.6-1.2-.7-1.4-.7-1.5-.6-1.7.5.3zm0-1h.3v.3l-.4-.4zm-3.8.6 3.6-.6v1l-3.6.6-.5-.5.4-.5zm-.5.5v-.4h.4l-.5.4zm4.7 11.4-.8.7-.3-.3v-.3l-.3-.3-.2-.3-.3-.3-.2-.3-.2-.3v-.4l-.3-.3-.2-.4-.2-.4v-.4l-.2-.4v-.4l-.3-.4v-.4l-.2-.3v-.4l-.2-.4v-.9l-.2-.3v-.8l-.2-.5V238l-.2-.5v-.7h1v1.9l.2.4v1.1l.2.5v.7l.2.3v.4l.2.4.2.3v.4l.2.5.2.3v.4l.2.3.2.4.2.2v.3l.3.4.2.2v.3l.3.3.2.4.2.3.2.3.2.3zm18.7-4.7-.8.7 1-.3-.2 1.4v1.4l-.2 1.3-.2 1.2-.2 1-.3 1-.2 1-.3 1-.4.7-.4.8-.4.7-.6.6-.5.5-.5.4-.7.3-.6.3h-.7l-.8.2h-.7l-.8-.2-.8-.2-.8-.2-1-.4-.7-.5-1-.7-1-.6-.8-.8-1-1-1-1-1-1-.8-1-1-1.3.8-.6 1 1.3 1 1 .8 1 1 1 1 .8.7 1 1 .5.7.6.8.5.8.4.7.2h.7l.7.3h1.4l.6-.2.4-.2.6-.2.4-.3.5-.5.4-.5.4-.6.4-.7.3-.8.3-.8.3-1 .4-1 .2-1 .2-1.2v-1.2l.2-1.3v-1.3l1-.4zm-1 .4V242l1 1-1 .4zm27.3-3.2-1 .4 1-.2-.2 1.6v1.5l-.4 1.3-.4 1.3-.4 1.2-.4 1.2-.5 1-.7 1-.6 1-.6.7-.6.7-.8.6-.7.5-1 .4h-.8l-1 .3h-2.8l-1-.3-1-.4-1.2-.4-1-.6-1.2-.6-1.2-.8-1-.8-1.3-1-1.2-1-1.3-1.2-1.2-1.3-1.3-1.5-1.3-1.5.7-.7 1.2 1.5 1.3 1.4 1.2 1.2 1.2 1.2 1 1 1.3 1 1 .8 1.2.7 1 .7 1 .6 1 .4 1 .3 1 .2h1l.8.2h.8l1-.2.7-.3.7-.4.7-.5.7-.4.6-.6.6-.7.5-.8.5-1 .4-1 .5-1 .2-1.2.4-1.3.3-1.3v-1.5l.3-1.6h1zm-1 0 .2-1.5.8 1.5h-1zm31.8-1.8-.8.3h1v1l-.3 1.4-.4 1.2-.4 1.2-.5 1-.6 1.3-.6 1-.7 1-.8 1-1 1-1 .7-1 .7-1 .7-1 .6-1.2.5-1.2.4-1.2.3h-3.8l-1.3-.2-1.3-.4-1.4-.4-1.3-.7-1.3-1-1.3-.8-1.3-1.2-1.3-1.2-1-1.5-1.3-1.6-1.2-1.8-1-2 .8-.5 1 2 1.2 1.6 1.2 1.7 1.2 1.4 1 1.3 1.3 1 1.2 1 1.3.7 1.2.6 1.2.5 1.3.5 1.2.2h3.6l1.2-.3 1-.3 1-.3 1.2-.5 1-.6 1-.7.7-.8 1-1 .6-.7.6-1 .6-1 .6-1 .4-1 .4-1.2.3-1V239h1zm35.6-3-1 .2h1l-.2 2-.4 2-.6 1.6-.6 1.7-.8 1.6-1 1.3-1 1.3-1 1-1.3 1-1.3 1-1.3.8-1.3.6-1.5.6-1.5.3-1.5.2h-1.5l-1.6.2-1.4-.2-1.6-.2-1.5-.3-1.5-.5-1.4-.6-1.4-.7-1.4-1-1.3-1-1.2-1-1-1.2-1-1.4-1-1.4-1-1.6-.6-1.6-.5-1.8 1-.3.5 1.7.6 1.6.8 1.5 1 1.3 1 1.3 1 1.2 1.2 1 1.2 1 1.3.8 1.3.7 1.4.5 1.4.5 1.4.3 1.5.2h4.4l1.5-.3 1.4-.4 1.3-.5 1.3-.5 1.3-.7 1-1 1.2-.8 1-1 1-1.3 1-1.4.6-1.4.7-1.7.5-1.7.4-1.8.2-2h1zm35.5 3-1 .2h1l-.4 1.8-.7 1.6-1 1.6-1 1.4-1 1.4-1 1.2-1.3 1-1.2 1-1.4 1-1.3.6-1.5.6-1.4.5-1.6.3-1.5.2-1.5.2h-1.6l-1.5-.2-1.4-.3-1.5-.4-1.4-.6-1.4-.6-1.3-.8-1.4-1-1.2-1-1-1-1.2-1.3-1-1.4-.7-1.7-.7-1.7-.5-1.7-.4-2-.4-2 1-.2.3 2 .3 1.8.5 1.7.6 1.6.8 1.3 1 1.4.8 1.2 1 1 1.2 1 1.2.8 1.3.7 1.3.6 1.4.6 1.4.3 1.4.2h4.5l1.4-.2 1.5-.3 1.4-.5 1.3-.5 1.3-.7 1.3-.8 1-1 1.2-1 1-1 1-1.4 1-1.3.7-1.5.6-1.6.5-1.7h1zm31 2h-1l1 .2-1.2 2-1.2 1.7-1.2 1.6-1.2 1.5-1.3 1.2-1.4 1.2-1.3 1-1.3.7-1.3.6-1.3.5-1.4.5-1.3.2H530l-1.3-.3-1.2-.3-1.2-.4-1-.5-1-.6-1-.7-1-.8-1-1-.7-1-.8-1-.6-1-.6-1-.5-1.2-.3-1.2-.3-1.2-.2-1.3v-1l1-.2v1.2l.2 1.2.3 1 .4 1.2.5 1 .6 1 .7 1 .7 1 .7 1 1 .8.8.7 1 .6 1 .6 1 .5 1 .4 1 .4 1.3.2 1.2.2h2.4l1.2-.3 1.2-.4 1.3-.4 1.2-.6 1.3-.7 1.2-1 1.2-1 1.2-1.2 1.2-1.3 1.2-1.6 1-1.6 1.2-2 1 .2zm-1-.2.8-1.5.2 1.6h-1zm27.2 3.2h-1l1 .3-1.4 1.5-1.3 1.4-1.2 1.2-1.3 1-1.2 1.2-1.2 1-1.2.8-1 .8-1.2.6-1 .6-1.2.4-1 .4-1 .2-1 .2h-2l-1-.3h-.8l-.8-.5-.8-.5-.7-.6-.8-.7-.6-.8-.6-1-.6-1-.5-1-.5-1-.4-1.4-.3-1.3-.3-1.4-.2-1.6-.3-1.6 1-.2.2 1.6.2 1.5.3 1.3.3 1.3.4 1.2.4 1 .5 1 .5 1 .6.8.6.7.6.6.6.5.7.6.6.3.8.2h.8l.8.2h.8l1-.2 1-.2.8-.3 1-.4 1-.6 1.2-.6 1-.6 1.2-.8 1.2-1 1-1 1.4-1.2 1.2-1.2 1.3-1.4 1.3-1.5 1 .4zm-1-.4 1-1v1.4l-1-.4zm19 4.8.7.7-1 1.2-1 1-1 1-1 1-1 1-.8.7-1 .6-.8.6-.8.4-1 .4-.7.3-1 .3-.7.2h-1.5l-.7-.2-.6-.3-.6-.3-.6-.4-.6-.5-.5-.6-.4-.7-.4-.8-.4-.8-.3-1-.3-1-.3-1-.3-1-.2-1.3V246l-.2-1.3v-1.3h1v2.6l.2 1.3.2 1 .2 1.2v1l.4 1 .4.7.3.8.5.6.4.5.4.5.4.5.5.3.5.3.6.3h.6l.6.2h.6l.7-.2h.6l.7-.4.8-.5 1-.4.7-.5 1-.6.7-1 1-.7.8-1 1-1 1-1 1-1.2zm4-10.7v-1l.6.4v2.9l-.2.4v.7l-.2.4v.5l-.2.4v.3l-.2.4v.3l-.3.4v.4l-.2.4-.2.4v.3l-.3.3-.2.4-.2.3-.2.4-.2.3-.2.4-.2.4-.2.3-.2.4-.2.4-.3.3-1-.6.3-.2.3-.3.2-.3.2-.4.2-.3.2-.3.2-.3v-.5l.3-.3v-.3l.2-.5.2-.3v-.4l.3-.3v-.4l.2-.3v-.7l.2-.4v-.3l.2-.4v-.5l.2-.4v-1l.2-.4v-1.8l.5.5zm0-1h.6v.4l-.5-.5zm0 0v1-1zm0 1z"></path><path fill="#edb92e" d="M482 263h-22.5l-1.3.2H451l-1.3.2h-4.4l-1.2.2h-2.3l-6.3.4h-.3c-3 0-6 .3-9 .4h-.8l-18.2 1.3h-.2a965 965 0 0 0-26.4 2.4c-5 .6-6-5.3 0-6a960.5 960.5 0 0 1 26.3-2.2 983.7 983.7 0 0 1 37-2.2h2.4l15.4-.5h16.8a1082.3 1082.3 0 0 1 7.2 0h16.6l15.2.5h3.3a984 984 0 0 1 37 2.3 960.5 960.5 0 0 1 26.2 2c5.8.7 5 6.6 0 6a965.6 965.6 0 0 0-26.4-2.3h-.3a978.4 978.4 0 0 0-18.3-1.2h-.6l-9.2-.5h-.3c-2.2 0-4.3-.2-6.4-.3h-2.3l-1.2-.2h-4.5l-1.3-.2H506l-1-.2h-23z"></path><path fill="#0c4076" d="M482 105a17.3 17.3 0 0 1 .1 34.7c-9.3 0-17-7.8-17-17.3 0-9.6 7.7-17.3 17-17.3z"></path><path fill="#edb92e" d="M485.3 85c1.6-.2 3-1.5 3-3.2 0-1.7-1.4-3-3-3.2 0-1.7-1.4-3-3.2-3a3 3 0 0 0-3 3c-1.6 0-3 1.5-3 3.2a3 3 0 0 0 3 3v6.5h-5.5a3 3 0 0 0-3-3c-1.8 0-3 1.3-3.2 3a3 3 0 0 0-3 3c0 1.8 1.3 3.2 3 3.2a3 3 0 0 0 3 3c1.8 0 3.2-1.2 3.2-3h5.5V119h6.3V97.6h5.5a3 3 0 0 0 3 3c1.8 0 3-1.4 3.2-3 1.7 0 3-1.5 3-3.2a3 3 0 0 0-3-3c0-1.8-1.4-3.2-3-3.2-2 0-3.2 1.4-3.2 3h-5.5V85z"></path><path fill="#21231e" d="M487.8 81.8h1v1h-.2v.5h-.2v.3l-.2.3-.2.2v.2h-.2l-.2.2-.2.2h-.2v.2h-.2l-.2.2h-.2v.2h-.8l-.2.2h-.3v-1h.7V84h.2l.3-.2h.2v-.2h.2v-.2l.2-.2V83h.2l.2-.2v-.4l.2-.2v-.4zm-3-3.2h1l-.5-.5h.2l.3.2h.4l.3.2h.3l.2.2.2.2h.2v.2h.2l.2.2.2.3.2.2v.2h.2v.4h.2v.5l.2.2v.7h-1V81h-.2v-.4l-.2-.2V80h-.4v-.2h-.2v-.2h-.2l-.3-.2h-.2V79h-.8l-.4-.6zm.4.5h-.4v-.4l.4.5zm-3-3v-1h.7l.2.2h.2l.3.2h.2l.2.2.2.2h.2v.3l.2.2.2.3.2.2v.2h.2v.4h.2v.8h.2v.3h-1V78h-.2v-.5h-.2v-.2l-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2l-.2-.2h-.4l-.3-.2h-.4zm-3.2 3v-1l-.5.6v-.8l.2-.2V77h.2v-.6h.2v-.2l.2-.2.2-.2.2-.2h.2v-.2h.3v-.2h.3l.3-.2h.4l.2-.2h.4v1h-.5v.2h-.3l-.2.2h-.2v.2h-.2v.2h-.2v.2l-.2.2v.2h-.2v.5h-.2v1l-.6.5zm.5-.4v.5h-.5l.5-.4zm-3 3.2h-1V81l.2-.3v-.5l.2-.2v-.2l.2-.2.2-.3.2-.2h.2l.2-.2h.2v-.2h.3v-.2h.5l.3-.2h.7v1h-.7l-.2.2h-.2l-.2.2-.2.2-.2.2-.2.2v.2h-.2v.4l-.2.2v.8zm3 3h-1l.5.6h-1V85h-.7v-.2h-.3v-.2h-.2l-.2-.2-.2-.2V84h-.2v-.2l-.2-.2-.2-.3v-.5h-.2v-1h1v1h.2v.4h.2v.2h.2v.2l.2.2h.2v.2h.2l.3.2h.7v.2h.2l.5.5zm-.5-.4h.5v.5l-.5-.6zm-.5 7V85h1v6.3l-.5.5-.5-.5zm1 0v.4h-.5l.5-.5zm-6-.6h5.5v1h-5.5l-.5-.5.5-.5zm0 1h-.5v-.5l.5.5zm-3-3v-1h1.2v.2h.3l.3.2.3.2.3.2v.2l.2.2.2.3.2.3.2.3v.4l.2.2v.8h-1v-.7l-.2-.2V90h-.2v-.2h-.2v-.2l-.2-.2-.2-.2h-.2V89h-.4l-.2-.2h-.8zm-3.2 3v-1l-.5.4v-.8l.2-.3V90l.2-.3v-.2h.2v-.2l.2-.2h.2v-.3h.2l.2-.2.2-.2h.2V88h.7v-.2h1.1v1h-1l-.2.2h-.2v.2h-.2v.2h-.2l-.2.2v.2h-.2v.4h-.2v.8l-.2.2v.3l-.5.5zm.5-.5v.5h-.5l.5-.5zm-3 3h-1V93h.2v-.2h.2v-.3l.2-.3.3-.3v-.2h.2v-.2h.2v-.2h.2l.2-.2h.2V91h.7l.2-.2h.8v1h-.7l-.2.2h-.2v.2h-.2v.2h-.2l-.2.2-.2.2v.2h-.2v.5h-.2v.7zm3 3.2h-1l.5.5h-1v-.2h-.5l-.2-.2h-.2v-.2h-.2l-.2-.2-.2-.2v-.2h-.3v-.2l-.2-.2V96h-.2v-.4l-.2-.3v-.8h1v.9h.2v.2l.2.3h.2v.2h.2v.2h.2v.2h.2l.2.2h.5v.2h.4l.6.5zm-.5-.5h.5v.5l-.5-.5zm3 3v1h-1l-.2-.2h-.3v-.2h-.3v-.2h-.2l-.2-.2-.2-.3v-.2h-.2v-.3h-.2V99h-.2v-.5l-.2-.2V98h-.2v-.5h1v.7h.2v.4h.2v.2l.2.2v.2h.2v.2h.2v.2h.2l.2.2h.2l.3.2h.6zm3.2-3v1l.5-.4v.8l-.2.2v.3h-.2v.3l-.2.3-.2.2-.2.2-.2.2-.3.2-.2.2h-.2l-.2.2h-.2l-.3.2h-.8v-1h.9v-.2h.2l.2-.2h.2v-.2h.2l.2-.2V99h.2v-.2l.2-.3v-.2l.2-.2v-.4l.5-.5zm-.5.6V97h.5l-.5.6zm6 .5h-5.5v-1h5.5l.5.6-.5.5zm0-1h.5v.6l-.5-.5zm-.5 22V97.6h1V119l-.5.5-.5-.5zm.5.5h-.5v-.5l.5.5zm6.3 0H479v-1h6.3l.5.5-.5.5zm.5-.5v.5h-.5l.5-.5zm0-21.4V119h-1V97.6l.5-.5.5.6zm-1 0V97h.5l-.5.6zm6 .5h-5.5v-1h5.5l.5.6-.5.5zm0-1h.4v.6l-.4-.5zm3 3v1h-1l-.3-.2h-.2l-.3-.2-.2-.2h-.2v-.2h-.2l-.2-.2v-.2h-.2v-.2l-.2-.2V99h-.2v-.2h-.2v-1l-.2-.2h1v.4l.2.2v.2l.2.3v.2h.2v.2h.2l.2.2v.2h.2l.3.2h.2v.2h1.1zm3.2-3v1l.5-.5v.7h-.2v.5l-.2.3v.4h-.2v.3h-.2v.2h-.2v.2h-.3v.2l-.3.2h-.3l-.2.2h-.3l-.2.2h-.8v-1h.9v-.2h.2v-.2h.2l.2-.2.2-.2V99h.2v-.2l.2-.2v-.2l.2-.2v-.6l.6-.6zm-.5.5V97h.5l-.5.5zm3-3h1v.9l-.2.3v.2h-.2v.6h-.2l-.2.2v.2h-.2v.2h-.3v.2h-.2v.2h-.3l-.3.2h-.2l-.3.2h-.7v-1h.8V97h.2v-.2h.2l.2-.2.2-.2h.2V96l.2-.3v-.2h.2v-.7l.2-.3zm-3-3.2h1l-.5-.6h.7l.2.2h.4l.3.2.3.2.3.2.2.2.2.3.2.2v.5h.2v.3h.2v.7l.2.3v.4h-1v-.6h-.2v-.4l-.2-.2-.2-.2v-.2h-.2l-.2-.2-.2-.2h-.2V92h-.5l-.2-.2h-.5l-.5-.5zm.5.5h-.5v-.5l.5.5zm-3-3v-1h1.1l.2.2h.4v.2h.3v.2l.3.2.2.3h.2v.3h.2v.4l.2.2v.4h.2v.7h-1v-.8h-.2V90l-.2-.2-.2-.2-.2-.2-.2-.2h-.2V89h-.5v-.2h-.6zm-3.2 3v-1l-.6.5v-.9l.2-.2V90l.2-.3.2-.3.2-.3h.2v-.2l.2-.2h.2v-.2h.2l.2-.2h.3l.2-.2h.3l.2-.2h1v1h-1l-.3.2h-.2v.2h-.2l-.2.2v.2l-.2.2-.2.2v.2l-.2.2v.7l-.7.6zm.5-.5v.5h-.6l.6-.5zm-6-.5h5.5v1h-5.5l-.5-.5.5-.5zm0 1h-.5v-.5l.5.5zm.5-7v6.5h-1V85l.4-.6.6.5zm-1 0v-.4h.4l-.4.5zm.5 0v-.4.5zm-.5 0v-.4h.4l-.4.5z"></path><path fill="#21231e" d="M499.8 122.4h-1v-1.7l-.2-1v-.7l-.3-.8-.2-.8-.2-.8-.3-.8-.3-.7-.4-.6-.4-.7-.4-.7-.5-.7-.5-.6-.5-.6-.6-.5-.7-.6-.6-.6-.6-.5-.5-.6-.7-.4-.7-.4-.6-.4-.8-.3-.7-.4-1-.3-.7-.2h-.8l-.8-.2h-.8l-1-.2h-1v-1h2l.8.2h1l.8.3.8.4.8.2.8.4.8.3.8.4.7.4.7.6.7.5.7.6.6.6.6.6.6.6.6.6.5.7.5.7.5.7.4 1 .4.6.4.8.3.8.3 1 .3.7.2.8v1l.2.7v2zM482 140.2v-1h1.8l1-.2.7-.2.8-.2.8-.2 1-.3.6-.2.8-.3.7-.4.8-.3.7-.4.6-.5.7-.5.6-.5.6-.6.5-.5.5-.6.5-.6.5-.6.4-.7.4-.6.4-.8.3-.7.3-1 .3-.6.3-.8.2-.8v-1l.2-.7v-1.6h1v2.8l-.2.8-.2.8-.3 1-.3.7-.3.8-.3.8-.3 1-.4.6-.5.7-.5.7-.5.7-.6.6-.6.7-.6.6-.6.5-.7.6-.7.5-.7.6-.7.4-.8.4-.8.4-.8.3-.8.4-.8.2-1 .2-.8.2h-.8l-1 .2h-1zm-17.5-17.8h1v1.8l.2.7v.8l.3.8.2.8.3.7.3 1 .3.6.5.8.4.7.3.8.5.6.5.6.5.7.6.5.5.6.5.5.7.5.6.5.7.4.7.4.7.5.7.3.7.3.8.4.8.2.8.2.8.2h1.8l.7.2v1h-1.8l-.7-.2-1-.2-.8-.2-.8-.2-1-.3-.7-.2-.8-.4-.8-.4-.7-.4-.7-.5-.7-.4-.7-.5-.7-.4-.7-.6-.5-.7-.5-.6-.5-.7-.5-.7-.5-.7-.4-.7-.4-1-.3-.7-.5-.8-.2-.8-.3-1-.2-.7v-1l-.2-.8v-1.8zm17.6-17.8v1h-1.7l-.7.2h-.8l-.8.3-.8.3-.8.3-.7.3-.8.2-.8.4-.7.4-.7.4-.6.5-.7.4-.6.5-.6.5-.6.6-.5.7-.5.6-.5.7-.4.7-.5.7-.4.7-.2.8-.3.8-.3.8-.2.8-.2.8v.8l-.2 1v1.7h-1v-2.8l.2-1 .2-.8.3-1 .2-.8.4-.8.2-.8.4-.7.4-1 .5-.6.5-.7.5-.7.6-.6.6-.6.7-.6.6-.6.6-.5.7-.4.7-.5.7-.3.8-.4.8-.3.8-.4 1-.2.7-.3h1l.8-.2h.8l1-.2h.8z"></path><path fill="#edb92e" d="M499 118.8a17.6 17.6 0 0 1 0 6c-5.5-.2-11.2-.3-17-.3-5.5 0-11.2 0-17 .3a17.5 17.5 0 0 1 .3-6l16.8-.3c5.8 0 11.4.2 17 .3z"></path><path fill="#21231e" d="M499.8 122.4h-1V120h-.2v-1l1-.2v1.7l.2.2v1.6zm-.7 3 .2-1-.6.3v-.8l.2-.2v-1.1h1v2.2h-.2l-.5.5zm.6-.5v.3h-.5l.6-.4zm-17.5 0v-1H494l.4.2h4.8v1h-10.6l-.5-.2h-6zm-17.4 0 1-.3-.5-.4h4.7l.4-.2H482v1h-11l-.5.2H465l-.5-.3zm.6.3h-.5v-.4l.5.3zm-.7-3h1v2.4l-1 .3v-2.6zm.8-4v1l.5-.3v.8l-.2.2v2.5h-1v-3h.2v-.4l.5-.5zm-.5.5v-.4h.5l-.5.4zm17.3-.8v1h-9.1l-.5.2H466l-.7.2v-1h2.5l.5-.2h9l.5-.2h4.2zm17.5.8-1 .2.4.4h-3.6l-.5-.2h-10.3l-.5-.2h-2.1v-1h10l.5.2h6.1l.5.6zm-.5-.5h.4v.5l-.4-.5z"></path><path fill="#edb92e" d="M468.8 133.2c-3.6-2.3-4.3 1.2-4.2 4.7.4 13.2 3 25.8-.6 42-1.4 6.4-3.7 10-1.5 11.3 5.7 3.2 8.3 6 7.4 7.7 1.5 3.2 5.7 2.6 12 1.6 6.6 1 10.7 1.6 12.4-1.6-1-1.6 1.7-4.5 7.4-7.7 2.2-1.2 0-5-1.5-11.3-3.5-16.2-1-28.8-.7-42 0-3.6-.5-7-4-4.8a28.6 28.6 0 0 1-26.8 0z"></path><path fill="#21231e" d="M465 138h-1v-1.5l.2-.3v-1.6l.2-.3v-.3h.2v-.4l.2-.2v-.3h.2l.2-.3.2-.2.2-.2h.2l.2-.2h1.8l.4.2.4.2h.3l.4.3-.4 1-.4-.3h-.2l-.3-.2h-.3l-.2-.2h-1.2v.2h-.2v.2l-.2.2v.2l-.2.2v.4l-.2.3v.4l-.2.2v2.5zm-.5 42-1-.2.3-1.5.3-1.4.3-1.6.2-1.4.2-1.5.2-1.4v-2.5l.2-1.4V154l-.2-1.2v-2.5l-.2-1.2V148l-.2-1.2v-1.2l-.2-1.3V142l-.2-1.3V138h1v3.5l.2 1.2v2.6l.2 1.2v1.3l.2 1.2v2.5l.2 1.2v1.3l.2 1.3v13.3l-.2 1.4v1.4l-.3 1.5-.2 1.4-.2 1.6-.2 1.4-.2 1.5-.3 1.6zm-1.8 11-.4.8-.3-.2-.2-.2-.2-.2-.2-.2v-.2l-.2-.3V188l.2-.3v-.4l.2-.3v-.4l.2-.4v-.5l.3-.4.2-.4v-.5l.3-.3v-.5l.3-.5v-.6l.3-.4.2-.6v-.6l.3-.6 1 .3-.2.7v.6l-.3.5v.6l-.2.5-.2.4v.6l-.3.4v.5l-.3.4v.4l-.2.4v.4l-.2.4v.4l-.2.3v.4l-.2.4v1.9l.2.2.2.2zm7.6 7.8-1 .4v-.4h.2v-1l-.2-.2v-.2l-.2-.2v-.4l-.3-.2-.2-.2-.2-.3h-.3l-.2-.4-.3-.2-.3-.3h-.3l-.4-.4-.4-.3-.3-.2-.5-.2-.4-.3-.3-.3-.5-.3-.5-.3-.4-.3-.5-.3-.6-.2.5-1 .6.4.5.3.5.3.4.3.5.4.4.3.5.3.5.2.3.3.4.3.4.3.3.4.2.2.3.3.3.2.2.2.2.3.3.2.2.2v.2l.3.3v.2l.3.2v.5l.2.2v1.1l-.2.3v-.5zm-1 .4v-.4.4zm13 1-.2 1h.2-1.2l-.5.2h-1.2l-.6.2h-1l-.5.2h-4.7l-.4-.2h-.3l-.3-.2-.3-.2-.3-.2-.2-.2-.3-.2-.2-.2-.3-.3h-.2l-.2-.4-.2-.4 1-.4v.2l.2.3.2.2.2.2.2.2h.2l.2.2h.2l.3.2h.3l.3.2h.3l.2.2h4.3l.5-.2h1l.6-.2h1.1l.5-.2h.8zm-.2 0h.2zm12-1 1-.4v.4l-.3.4-.2.3h-.2l-.3.4-.2.2-.3.2-.3.2-.3.2-.4.2h-.3l-.3.2h-.4l-.4.2H486l-.6-.2h-.5l-.6-.2h-1.2l-.5-.2h-.6l.2-1h1.8l.5.2h.6l.6.2h1.1l.5.2h4.2l.3-.2h.3l.2-.2h.3l.2-.2.2-.2.3-.3.2-.2.2-.2v-.3l.3-.2v.5zm1-.4v.4-.4zm6.5-8 .5 1-.5.3-.5.4-.5.3-.4.2-.4.2-.4.3-.4.3-.4.3-.4.3-.3.3-.3.3h-.3l-.2.4-.3.2-.3.3h-.2l-.2.4-.2.2-.2.2v.2l-.3.2v.7h-.2v1.2l-.8.5v-.2l-.2-.2v-1.3l.2-.2v-.3l.3-.3v-.3l.3-.2.2-.3.2-.3.3-.3.2-.2.3-.3.3-.4.4-.2.3-.3.4-.2.4-.3.4-.3.4-.2.4-.3.5-.3.5-.3.5-.2.5-.3.5-.3.5-.3zm-1.7-10.7 1-.2v.6l.3.6.2.6.2.5v.7l.3.5v.5l.2.4v.6l.2.5.2.5v.4l.2.3v.4l.2.4v.5l.2.3v.7l.2.3v1.8l-.2.3v.2l-.3.3h-.2l-.2.3-.3.2-.5-1h.2l.2-.2v-.4h.2v-2.5l-.2-.3v-.3l-.2-.3v-.4l-.2-.4v-.4l-.2-.4v-.4l-.3-.5v-.6l-.2-.4v-.6l-.3-.5v-.6l-.3-.6v-.5l-.2-.6-.2-.6zm-.7-42h1v5.9l-.2 1.4v1.2l-.2 1.2v1.3l-.2 1.3v2.5l-.2 1.2v2.6l-.2 1.2v9.3l.2 1.4v1.4l.2 1.3.2 1.5.2 1.5.2 1.4.2 1.5.3 1.3.3 1.5-1 .3-.3-1.5-.3-1.5-.2-1.4-.2-1.5-.2-1.3-.2-1.5v-1.4l-.2-1.4V167l-.2-1.3v-10.3l.2-1.3v-2.5l.2-1.3V149l.2-1.2v-1.3l.2-1.2V143l.2-1.2V138zm-3.3-4.4-.5-1h.4l.3-.2.2-.2h.3l.4-.2h1.2l.3.2h.2l.2.3v.2l.2.2h.2v.4l.2.2v.3h.2v.7l.2.3v1.5l.2.3v1.1h-1v-2.4l-.2-.3v-.8l-.2-.3v-.4l-.2-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-1.1l-.2.2h-.3l-.3.2-.3.2zm-27 0 .4-1 .8.5.7.5.7.4.7.2.7.3.8.2.8.3 1 .2.7.2 1 .2h.7l1 .2h.8l1 .2h4.6l.7-.2h1l.8-.3h.8l1-.3.7-.2.8-.3.8-.2.8-.3.7-.4.8-.3.7-.4.7-.3.5 1-.7.3-.7.4-.8.4-.7.3-1 .4-.7.3-.7.3-1 .2-.7.2-1 .2h-.8l-1 .2h-1l-.8.2h-4.6l-1-.2h-.8l-1-.2-.8-.2-1-.2-.7-.2-.8-.3-.8-.3-.8-.3-.8-.2-.8-.4-.7-.4-.7-.4z"></path><g id="rs-b"><path fill="#edb92e" d="M363 212c-2-4-.3-9.8.3-11 .3-.8-.6-2.2-1-2.8-13-18.3-13.2-20-4.3-26.8 8-6 26.2-12 39.2-16.2 2.7-2 4.4-5 6.8-7.2-25 1.8-52 12-65.5 23.8-7.2 6.2 1.5 19 12.2 38 6.7 5 9.8 7 12.3 2.3z"></path><path fill="#21231e" d="m362.8 200.7 1 .4v.2l-.2.2v.3l-.2.3v.5l-.2.2v.6l-.2.4v.7l-.2.3v1.6l-.2.4v2.5l.2.4v.4l.2.4v.4l.2.4v.3l.3.4-1 .3v-.4l-.3-.5v-.4l-.2-.4v-.4l-.2-.5v-.8l-.2-.6v-2.9l.2-.4v-1.2l.2-.3v-.4l.2-.2v-.6l.2-.3v-.6l.2-.2v-.2l.2-.2zm-1-2.2 1-.6v.2h.2v.4h.2v.4h.2v.2l.2.2v.4h.2v1.2l-1-.3v-.6l-.2-.2v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2zm-4-27.5.5 1-.8.5-.7.6-.7.6-.5.6-.6.5-.6.5-.5.6-.5.5-.3.4-.3.5-.3.5v.5l-.3.5v1.7l.2.6.2.8.2.7.4.8.4.8.4 1 .5 1 .6 1 .7 1 .7 1.3 1 1.2.7 1.3 1 1.4 1 1.5 1 1.5 1.3 1.7-.8.5-1.3-1.7-1-1.5-1-1.5-1-1.4-1-1.3-.8-1.2-.8-1.2-.7-1-.6-1-.7-1-.4-1-.6-1-.3-.7-.2-1-.2-.7v-.7l-.2-.7v-1.4l.2-.6.2-.6.2-.6.3-.6.4-.6.5-.5.5-.5.5-.5.6-.6.7-.5.7-.7.7-.6.7-.7zm39-16.2.7.8h-.2l-1.2.5-1.2.5-1.2.4-1.4.3-1.3.4-1.4.5-1.4.4-1.3.5-1.5.5-1.4.5-1.3.5-1.3.5-1.4.5-1.4.5-1.3.5-1.4.5-1.4.5-1.3.6-1.3.6-1.3.5-1.2.7-1.2.5-1.2.6-1 .5-1.2.6-1 .4-1 .6-1 .6-1 .5-1 .7-.7.6-.7.6-.6-1 .8-.5 1-.6.8-.7 1-.6 1-.6 1-.4 1-.6 1.2-.6 1.2-.5 1-.7 1.4-.6 1.3-.5 1.3-.6 1.3-.5 1.2-.4 1.4-.5 1.3-.5 1.3-.5 1.4-.5 1.3-.5 1.4-.5 1.4-.5 1.4-.4 1.4-.5 1.3-.4 1.3-.4 1.3-.4 1.3-.5 1.2-.4 1.3-.5 1.3-.4 1.2-.3zm.7.8h-.2.2zm6.6-7v-1l.4.8-.2.2-.3.2-.3.3-.2.3-.2.2-.2.2v.3l-.3.2-.2.2-.2.2-.2.3-.3.3-.2.3-.2.2-.2.3v.3l-.3.2-.2.3-.2.2-.3.2-.2.3-.2.2-.2.2h-.2l-.3.4-.3.2-.2.2-.3.2-.2.2-.3.2-.2.2-.6-.8v-.2l.3-.2.3-.2.2-.2.2-.2.2-.2.3-.2.2-.2.2-.2v-.2l.3-.3.2-.2.2-.2.2-.2v-.2l.3-.2.2-.2.2-.3.2-.3v-.3l.3-.2.2-.2.2-.3.2-.2v-.2l.4-.3.2-.2.2-.2.2-.3.2-.2h.3l.2-.3.4.8zm0-1 1.4-.2-1 1-.4-1zM338.8 172l-.7-.8 1.5-1 1.4-1.2 1.4-1 1.5-1.2 1.5-1 1.7-1 1.7-1 1.7-1 2-1 1.8-1 2-1 2-1 2-.8 2-1 2.2-.7 2-.8 2.3-.8 2.3-1 2.2-.6 2.3-.7 2.3-.6 2.4-.5 2.3-.6 2.4-.7 2.4-.5 2.4-.4 2.4-.4 2.4-.4 2.3-.3 2.3-.3 2.4-.3 2.3-.2v1l-2.3.2-2.3.3-2.3.3-2.3.3-2.4.4-2.3.4-2.4.4-2.3.5-2.3.6-2.3.5-2.3.6-2.3.7-2.2.7-2.2.7-2.2.8-2.2.8-2.2.8-2 1-2 .7-2.2 1-2 1-2 1-1.8.8-1.8 1-1.8 1-1.7 1-1.6 1-1.5 1-1.6 1-1.5 1.2-1.4 1-1.2 1.2zm12.2 37.3-.5.8-.2-.2-1-1.6-1-1.8-1-1.7-1-1.7-.8-1.7-1-1.6-.8-1.5-.8-1.5-1-1.5-.7-1.5-.8-1.4-.7-1.3-.7-1.4-.5-1.3-.6-1.3-.6-1.2-.4-1.2-.5-1.2-.3-1-.3-1-.4-1.2v-1l-.2-1v-2.8l.3-.8.3-.8.4-.7.5-.8.5-.7.6-.6.8.8-.6.5-.5.6-.4.7-.3.6-.3.7-.2.8v4.5l.4 1v1l.5 1 .4 1 .4 1.3.5 1.2.4 1.2.6 1.3.7 1.3.7 1.4.7 1.4 1 1.4.7 1.5 1 1.5.8 1.5 1 1.6.8 1.7 1 1.7 1 1.7 1 2 1 1.6h-.3zm-.5.8-.2-.2.2.3zm12.5 1.3v1l.5-.2-.3.4-.2.4-.3.4-.3.3-.3.2-.2.3-.3.2-.3.2h-.3l-.5.2h-2.1l-.4-.2-.5-.2-.4-.2-.3-.2-.5-.2-.4-.3-.5-.3-.5-.3-.4-.4-.6-.3-.5-.3-.5-.4-.6-.4-.5-.4-.6-.4-.5-.5.5-.8.7.4.5.3.6.5.6.3.5.5.4.4.5.2.4.3.4.3.5.3.4.3.4.2.5.2.4.2h.5l.3.2h1.5l.2-.2h.3l.2-.3.2-.2.3-.2.2-.3v-.3l.4-.4.2-.4.4-.4zm-.4.3v-.4h.4l-.4.3zm.4.6v-1l.5.3-.5.6zm.5-.7.3.6h-.8l.5-.7z"></path><path fill="#edb92e" d="M359 213.6a34 34 0 0 1-1-4.7c-.7-2.8-.4-5.7.5-8.3-3-4.2-6.4-8.8-8.8-13.3-1.7-3.3-3-7-2-10.6 1-4 4.5-6.6 7.6-9 3.7-2.8 8.6-5.3 13.6-7.5 11-4.6 20-7 26.5-7l-4.2 3.8c-12 4-26.4 9.2-33.3 14.5-9 6.8-8.6 8.4 4.3 26.7.4.6 1.3 2 1 2.7-.6 1.2-1.8 7.2 0 11.4-1 2-2.6 1-4.2 1.2z"></path><path fill="#21231e" d="m357.4 209 1-.2v.7l.2.2v.7h.2v.8l.2.3v.3l.2.3v.7h.2v.6h.2l-1 .4v-.3l-.2-.3v-.2l-.2-.3v-.5l-.2-.3v-.6h-.2v-.5l-.2-.3v-.7l-.2-.3v-.2zm1-.2zm-.4-7.8 1-.6v.5l-.2.4v.2l-.2.2v1l-.2.2v.8l-.2.2v4.7l.2.3-1 .2v-.6l-.2-.2V203h.2v-1l.2-.2v-.5l.2-.2v-.2l.2-.3v.5zm1-.6v.5-.6zm-9.7-12.8 1-.5v.6l.3.4.3.4v.4l.4.5.2.4.3.4v.5l.4.4.3.4.2.4.2.4.3.4.2.4.3.5.3.4.3.3.3.4.2.4.2.5.3.5.3.4.3.4.3.4.3.4.2.4.3.4.2.4.3.4.3.4.3.4.3.4-1 .6-.2-.4-.3-.4-.3-.4-.3-.4-.4-.4-.3-.4-.2-.4-.2-.4-.3-.4-.3-.4-.3-.5-.4-.4-.3-.3-.3-.4-.2-.4-.3-.5-.3-.5-.3-.4-.4-.4-.3-.4-.2-.5-.2-.4-.3-.5-.2-.4-.3-.4-.3-.4-.2-.4-.3-.5-.2-.4-.2-.5-.3-.5-.2-.4zm-2-11 1 .4-.2.3v4.1l.2.4v.3l.2.3v.7l.3.3v.4l.2.4v.6l.3.3v.3l.3.3v.2l.3.3v.3l.2.3-1 .6v-.3l-.2-.3-.2-.3v-.3l-.3-.4v-.3l-.3-.3v-.3l-.3-.3-.2-.3v-.3l-.2-.2v-.4l-.2-.3v-.3l-.2-.3v-.7l-.2-.4V180l-.2-.4V178l.2-.2v-.7l.2-.3zm7.7-9.2.6.8-.3.2-.3.3-.3.2h-.3l-.3.3-.2.3-.2.2-.3.3-.3.3-.3.2-.3.3-.2.2-.3.3-.4.3-.2.2-.3.3v.3l-.4.3-.2.3-.2.2-.3.3-.3.3-.2.3-.2.4v.3l-.3.3-.2.3v.3l-.3.3v.3l-.2.3v.4l-1-.3v-.4l.2-.4v-.4l.2-.4.2-.4v-.3l.3-.4.2-.2.2-.3.2-.3v-.3l.4-.5.2-.3.2-.2.3-.3.4-.3.2-.3.3-.2.2-.2.3-.3.2-.3.3-.2.3-.3.3-.2.3-.3.2-.2.3-.2.3-.3.3-.2h.4l.3-.4.3-.2zm13.7-7.5.4.8-.4.2-.4.2-.5.2-.5.2-.4.2-.5.2-.4.3-.6.2-.5.2-.5.2h-.5l-.4.3-.5.3-.3.2-.4.2-.5.3-.4.2-.4.2-.4.3-.5.2-.3.2-.4.3-.4.2-.5.2-.4.2-.2.3-.4.2-.4.2-.4.2-.3.3-.4.3-.4.2-.6-.8.3-.3h.4l.4-.4.4-.3.4-.2.4-.2.4-.2.4-.3.4-.2.4-.2.4-.2.4-.3.5-.2.5-.2.4-.2.4-.2.4-.3h.4l.5-.3.4-.3.6-.2.4-.2.5-.2.5-.3.4-.2.5-.2h.4l.4-.3.5-.2.5-.2.4-.2h.5zm0 0zm27-6.4-.6-.7.5.7H394l-.6.2h-1.8l-.7.2h-.8l-.7.2h-.7l-.8.3-.8.2h-.7l-.8.2-.8.2-1 .2-.8.2-.8.3-1 .3-.8.3-1 .3-.8.2-1 .3-.8.3-1 .3-1 .5-1 .3-.8.4-1 .4-1 .4-1 .4-1 .4-.5-1 1-.4 1-.4 1-.4 1-.4 1-.3 1-.5 1-.3 1-.4 1-.3.8-.3 1-.3.8-.4 1-.2.8-.3h1l.8-.4.8-.2.8-.2.8-.2h.8l.8-.3.8-.2h.7l.7-.2h.8l.7-.2h1.4l.5-.2h1.9l.4.8zm-.3-1h1.4l-1 1-.4-1zm-4.4 4 4-3.7.8.6-4 3.8-.3.2-.5-1zm.7.8-.2.2.2-.2zM358.3 172l-.6-1 .7-.5.7-.5 1-.5.7-.5.8-.5 1-.5.8-.4 1-.5 1-.4.8-.5 1.2-.4 1-.5 1-.3 1-.5 1.2-.5 1-.4 1.3-.5 1-.4 1.2-.5 1-.5 1.3-.5 1-.4 1.3-.4 1.2-.5 1.2-.4 1.2-.4 1.2-.5 1-.4 1.3-.3 1.2-.4 1-.3 1.2-.4.3 1-1.2.3-1 .3-1.3.4-1 .4-1.3.5-1.2.4-1.2.3-1.2.4-1 .4-1.2.6-1.2.4-1 .4-1.3.5-1 .3-1.3.5-1 .4-1.2.5-1 .4-1 .6-1.2.5-1 .5-1 .5-1 .5-1 .5-.8.5-1 .4-.8.4-.8.5-.8.4-.7.5-.7.4-.7.5zm4.4 26-.8.5-1.3-1.7-1-1.5-1-1.5-1-1.4-1-1.3-.8-1.2-.8-1.2-.7-1-.6-1-.7-1-.4-1-.5-1-.4-.7-.2-1-.2-.7v-.7l-.2-.7v-1.4l.2-.6.2-.6.2-.6.3-.6.4-.6.5-.5.5-.5.5-.5.6-.6.7-.5.7-.7.7-.6.7-.7.6 1-.8.5-.7.6-.7.6-.5.6-.6.5-.6.5-.5.6-.5.5-.3.4-.3.5-.3.5v.5l-.2.6v2.2l.3.8.3.7.4.8.4.8.4 1 .6 1 .5 1 .7 1 .7 1.3 1 1.2.7 1.3 1 1.4 1 1.5 1 1.5 1.3 1.7zm1 3-1-.3v-1h-.2v-.2l-.2-.2v-.2h-.2v-.4l.7-.7.2.2v.4h.2v.2l.2.2v.2l.2.2v.4h.2v1.4zm.2 11.6-1-.5v.6l-.2-.4-.2-.5v-.4l-.2-.4v-.6l-.2-.4v-.5l-.2-.4v-5.4l.2-.4v-.7l.2-.4v-.5l.2-.3v-.4l.2-.2 1 .3v.2l-.2.2v.6l-.2.2v.6l-.2.3v1.1l-.2.4v5.1l.2.4v.8l.3.4v.4l.2.4.2.4v.4zm0-.4v.4-.4zm-5 1v1-1h.2l.2-.2h1.4v.2h1.5l.2-.2h.2v-.2h.2v-.2l.2-.2.2-.3 1 .6-.2.2-.2.2v.2l-.2.2h-.2v.2l-.3.2h-.4l-.2.2h-.3v.2h-3v-1zm0 1v-1l.6.2-.5.7zm.6-.8.2.7h-.7l.6-.6z"></path><path fill="#edb92e" d="M468 132.2c.3-2.3 0-2-.3 1.6-.3-.7-.8-1-1.4-1-1 0-1.7 1.6-1.8 5.2l.2 2.8c-33-.7-52.7 4.3-57.7 14-4.2 7.8 3 21 13.6 36 1.3 1.8 1.2 1.6 0 3-1.8 2.3-3.8 6-2.3 9.2a24.3 24.3 0 0 1-21 1.5c-1-3-3.4-4.4-5.4-5.8-.5-.2-2-1-2-1.4l-10.2-31.6c-9.5-30.7 75.3-33.5 88.3-33.5z"></path><path fill="#21231e" d="m467.3 134 1-.4-1 .2V132h.2v-1.2l.2-.2.6-.3.3.3v1.6h-1V131l.4.2h.6v-.2 1l-.2.2v1.8h-1zm1 0-.2 1.6-.7-1.5h1zm-2-.7v-1h.7v.2h.4v.2h.2v.2h.2v.2h.2v.2h.2v.2l-1 .5v-.2h-.2v-.2h-.2v-.2h-.4zm0 0zM465 138h-1v-1.8l.2-.3v-.9l.2-.3v-.7h.2v-.3l.2-.3.2-.3.2-.2h.2v-.2h.2v-.2h.5v1h-.2v.2h-.2v.2l-.2.2v.3l-.2.3v.6l-.2.2v2l-.2.3v.4zm-1 0zm.7 3.3v-1l-.5.5v-2.3h-.2v-.4l1-.2v1.8l.2.2v1l-.5.5zm.5-.5v.5h-.5l.5-.5zM407.4 155l-1-.5.7-1 .7-.8.7-1 .8-.7 1-.8 1-.8 1-.8 1-.7 1.3-.7 1.2-.7 1.4-.6 1.6-.6 1.5-.5 1.7-.7 1.7-.5 1.8-.4 2-.5 1.8-.5 2-.3 2.2-.4 2.2-.3 2.2-.2 2.4-.3 2.4-.2 2.5-.2h2.5l2.7-.2h2.7l2.8-.2h9v1H453l-2.8.2h-2.6l-2.6.2-2.5.2-2.4.2-2.3.3-2.2.2-2.2.3-2 .4-2 .3-2 .4-1.8.4-1.8.4-1.7.5-1.6.5-1.5.6-1.5.5-1.3.5-1.3.7-1.2.6-1 .7-1 .7-1 .7-1 .7-.6.8-.7.8-.6.8-.6 1zm13.6 35.5-.8.6-1-1.3-1-1.4-1-1.4-1-1.5-.8-1.3-.8-1.4-1-1.3-.7-1.3-.8-1.3-.8-1.4-.7-1.2-.7-1.3-.6-1-.6-1.3-.5-1.2-.5-1.2-.5-1.2-.4-1-.5-1-.3-1.2-.3-1-.3-1-.2-1.2v-1l-.2-1V158l.3-.8.3-1 .2-.7.3-.8 1 .5-.4.7-.2.7-.2.8-.2.8v4.5l.2 1 .3 1v1l.5 1 .3 1.2.4 1 .5 1.2.5 1 .5 1.2.6 1.2.6 1.2.6 1.3.7 1 .7 1.4.8 1.3.8 1.3.8 1.3 1 1.3.8 1.4 1 1.3.8 1.4 1 1.4 1 1.5zm0 3.8-.8-.7.2-.3.2-.2h.2v-.2l.2-.2v-.4l-.2-.2v-.2h-.2v-.3h-.2v-.3h-.2l.8-.7.2.3.2.3v.2h.2v.4h.2v.2l.2.2v1l-.2.2v.2h-.2v.2l-.2.2-.2.2-.2.3zm-2.5 9-.4-.8-.2.7v-.3l-.2-.5v-.3l-.2-.3v-3.5l.2-.3v-.3l.2-.4.2-.3v-.3l.2-.3.2-.3v-.3l.3-.2v-.3l.3-.2.2-.3v-.2l.3-.3.2-.2v-.3l.3-.2.2-.2.8.7-.2.2-.2.2v.2h-.3v.3l-.3.3-.2.2v.3l-.3.3v.3l-.2.2-.2.3v.7l-.2.2v.2l-.2.3v.6l-.2.4v2.7l.2.3.2.3-.3.6zm.3-.5v.4l-.3.2.3-.6zm-22 1.8 1-.3-.2-.3.6.2.7.3.5.2.6.2h.8l.6.2.6.2h.7l.6.2h5.7l.7-.2h.5l.7-.3h.6l.7-.2.6-.2.7-.2.7-.2.6-.2.6-.3.6-.3.6-.2.7-.4.6-.3.5 1-.6.2-.7.4-.6.4-.7.2-.6.3-.7.2-.6.2-.6.2-.7.2-.6.2h-.6l-.7.3h-.7l-.6.2h-.7l-.7.2h-5l-.7-.2h-.7l-.6-.3h-.7l-.7-.3-.6-.3-.7-.3-.6-.2-.8-.3-.3-.4zm.4.3-.2-.2v-.2l.2.3zm-5.6-5.8.6-1 .2.2.2.2h.2l.2.2.2.2h.2l.2.2v.2h.3v.3h.3l.2.3h.2l.2.3.3.3.2.2.2.2.2.2v.2l.3.2v.2l.3.2.2.2v.2l.3.3.2.2.2.2v.2l.3.3v.3l.2.3-1 .3-.2-.2v-.3h-.2v-.3l-.2-.3-.2-.2v-.2l-.2-.2-.2-.2v-.2l-.3-.2-.2-.2-.3-.3-.2-.2-.3-.3h-.2l-.2-.3v-.2l-.3-.2h-.2v-.3h-.3l-.2-.2h-.2l-.2-.2h-.2l-.2-.3h-.2l-.2-.2h-.2zm-2-1.7.8-.3h.2v.2h.2l.2.2h.2v.2h.4v.2h.2l.2.2h.2l-.6 1-.2-.2h-.2v-.2h-.4v-.2h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2zm-10.2-31.7 1-.3.2 1 .3 1 .2.8.3 1 .3 1 .3.8.4 1 .3 1 .3 1 .3 1 .3 1 .3.8.2 1 .4 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .3 1 .5 1 .3 1 .3 1 .5 1 .3 1 .3 1 .4 1.2.4 1 .3 1 .4 1.2-1 .3-.3-1-.2-1.2-.3-1-.4-1-.2-1-.3-1-.3-1.2-.4-1-.3-1-.3-1-.4-1-.3-1-.3-1-.3-1-.4-1-.4-1-.3-1-.4-1-.3-1-.3-.8-.3-1-.4-1-.3-1-.3-1-.3-.8-.3-1-.2-1-.3-1-.3-.8-.3-1-.4-.8-.2-1zm88.2-33.6h1l-.5.5h-5.4l-2.5.2h-2.8l-3 .2-3.3.2-3.5.2-3.7.3-3.8.3-4 .4-4 .5-4 .6-4.2.6-4 .7-4.2 1-4 .8-4 1-3.7 1-3.7 1.3-3.4 1.4-3.3 1.4-3 1.5-2.6 1.6-2.3 1.7-2 2-1.6 1.8-1.2 2.2-.8 2.2-.4 2.3v2.5l.7 2.7-1 .3-.6-2.8v-2.8l.3-2.6 1-2.4 1.2-2.2 1.8-2 2-2 2.5-2 2.7-1.6 3-1.5 3.3-1.6 3.5-1.3 3.6-1 4-1.2 3.8-1 4-1 4-.7 4.2-.6 4.2-.6 4-.6 4-.5 4-.4 4-.4 3.7-.4 3.5-.2 3.3-.2 3-.2h3l2.4-.2h5.4l-.6.4zm1 0v.5h-.5l.7-.5zm-.5 0h-.4.5zm.7 0v.5h-.6l.7-.5z"></path><path fill="#fff" d="M405 190.2c3.5 0 6.4 2.8 6.4 6.4 0 3.5-3 6.4-6.4 6.4s-6.4-3-6.4-6.4c0-3.6 3-6.4 6.4-6.4z"></path><path fill="#21231e" d="M412 196.6h-1a6 6 0 0 0-3.4-5.3 5.8 5.8 0 0 0-2.6-.6v-1c2.3 0 4.6 1.2 5.8 3.2a7 7 0 0 1 1 3.6zm-7 7v-1c2.2 0 4.3-1.4 5.2-3.4a6 6 0 0 0 .7-2.6h1c0 2.3-1.4 4.6-3.4 6a7 7 0 0 1-3.6 1zm-7-7h1c0 2.2 1.4 4.3 3.4 5.3a5.8 5.8 0 0 0 2.6.5v1a7 7 0 0 1-5.8-3.3 7 7 0 0 1-1-3.6zm7-7v1a6 6 0 0 0-5.2 3.3 6 6 0 0 0-.7 2.6h-1c0-2.4 1.4-4.7 3.4-6a6.8 6.8 0 0 1 3.6-1z"></path><path fill="#fff" d="M350.8 203.6c3.2 0 6 2.7 6 6s-2.8 6-6 6c-3.3 0-6-2.7-6-6s2.7-6 6-6z"></path><path fill="#21231e" d="M357.2 209.6h-1c0-2-1-4-2.8-4.8a5.4 5.4 0 0 0-2.6-.7v-1a7 7 0 0 1 5.4 3 6.5 6.5 0 0 1 1 3.6zm-6.4 6.4v-1c2 0 4-1.2 4.8-3a5.5 5.5 0 0 0 .6-2.4h1c0 2-1.2 4.3-3 5.4a6.4 6.4 0 0 1-3.4 1zm-6.5-6.4h1c0 2 1.2 4 3 4.8.8.4 1.6.6 2.5.6v1a6.6 6.6 0 0 1-5.5-3 6.5 6.5 0 0 1-1-3.4zm6.5-6.5v1c-2 0-4 1.3-5 3a5.5 5.5 0 0 0-.5 2.6h-1c0-2.2 1.2-4.4 3-5.5a6.4 6.4 0 0 1 3.5-1z"></path><path fill="#fff" d="M345 192.7c3.4 0 6 2.7 6 6s-2.6 6-6 6c-3.2 0-5.8-2.7-5.8-6s2.6-6 6-6z"></path><path fill="#21231e" d="M351.5 198.7h-1c0-2-1.2-4-3-5a5.3 5.3 0 0 0-2.4-.5v-1c2.3 0 4.4 1.2 5.5 3a6.5 6.5 0 0 1 1 3.5zM345 205v-1c2 0 4-1 4.8-2.7a5.5 5.5 0 0 0 .7-2.6h1c0 2.2-1.2 4.3-3 5.5a6.4 6.4 0 0 1-3.4 1zm-6.3-6.3h1c0 2 1.2 4 3 4.8a5 5 0 0 0 2.4.6v1c-2 .2-4.2-1-5.3-3a6.5 6.5 0 0 1-1-3.3zm6.4-6.5v1c-1.8 0-3.7 1-4.6 2.8a5.5 5.5 0 0 0-.7 2.7h-1c0-2.2 1.2-4.4 3-5.5a6.4 6.4 0 0 1 3.4-1z"></path><path fill="#fff" d="M339.8 181.7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"></path><path fill="#21231e" d="M346.2 187.7h-1c0-2-1.2-4-3-5a5.4 5.4 0 0 0-2.4-.5v-1c2.2 0 4.3 1.2 5.4 3a6.5 6.5 0 0 1 1 3.5zm-6.4 6.4v-1c2 0 3.8-1 4.7-2.7.5-.8.7-1.7.7-2.6h1c0 2-1 4.3-3 5.4a6.4 6.4 0 0 1-3.4 1zm-6.4-6.3h1c0 2 1 4 3 4.8.7.4 1.5.6 2.4.6v1a6 6 0 0 1-5.4-3 6.5 6.5 0 0 1-1-3.3zm6.4-6.5v1c-2 0-4 1.2-4.8 3a5.5 5.5 0 0 0-.6 2.5h-1c0-2.2 1-4.4 3-5.5a6.4 6.4 0 0 1 3.4-1z"></path><path fill="#edb92e" d="M444.3 202.2c3.4-.3 2.5 5.8 2 7.2-1 1.8-1.8 1.8-3 .2-.8-1.3-2.4-7.2 1-7.5z"></path><path fill="#21231e" d="m446.6 209.6-1-.4h.2v-.7l.2-.3v-.5l.2-.3V204h-.2v-.3l-.2-.2v-.2l-.2-.2h-.2l-.3-.2h-.2l-.2-.2h-.3v-1h.7l.3.2h.3l.3.2v.2l.3.3.2.2.2.3v.2l.2.3v.7l.2.3v3.7l-.2.3v.5l-.2.3v.5h-.2zm-3.7.3.8-.7.2.3v.2h.2v.2h.2v.2h.7l.2-.2v-.2h.2v-.2h.2v-.3l1 .3v.2l-.2.2v.3h-.2v.2l-.2.2-.2.2h-.4v.2H444v-.2h-.2v-.2h-.2v-.2h-.2v-.3h-.2v-.3h-.3zm1.2-8.4v1h-.4v.2h-.3v.2h-.3v.3l-.2.2v.4h-.2v3.2l.2.2v.6l.2.2v.3l.2.2v.2l.2.2v.2h.2l-1 .7v-.5l-.2-.2v-.2l-.2-.4v-.2l-.2-.3v-.2l-.2-.3v-.7l-.2-.3v-3l.2-.3v-.3l.3-.3.2-.2.2-.3h.2l.2-.3.3-.2h.4l.2-.2z"></path><path fill="#fff" d="M444.5 205.5c8-.6 6 13.8 4.4 17-2 4.2-4 4.3-6.7.5-2-3-5.8-17 2.2-17.5z"></path><path fill="#21231e" d="m449.4 222.7-1-.4.2-.3.2-.4v-.4l.3-.5.2-.5v-.6l.2-.6.2-.7V217l.2-.7v-5.1l-.3-.7v-.6l-.3-.7-.3-.6-.3-.5-.3-.5-.3-.4-.3-.4-.4-.4-.5-.2-.5-.2-.5-.2h-1.4v-1h1.5l.6.2.7.2.5.4.6.4.4.4.4.5.4.7.3.6v.7l.3.6.2.7v.7l.3.8v6.3l-.3.7v.7l-.2.6v.6l-.3.6v.5l-.3.5v.4l-.3.3zm-7.5.5.8-.5.2.3.2.3.3.3.2.3h.2v.4h.3l.2.3.2.2h.4l.2.2h1v-.2h.3l.2-.3v-.2l.2-.2.2-.2h.2l.2-.4v-.3l.3-.3.3-.3.2-.4 1 .4-.3.4-.2.5-.2.3-.2.4-.2.3-.2.3-.2.2-.2.2-.2.3-.3.2h-.2v.3h-.4l-.2.2H445l-.4-.2h-.2l-.3-.3v-.2l-.4-.2-.2-.2-.2-.2-.3-.2-.3-.3-.3-.4-.2-.4-.3-.4zm2.5-17.2v-1 1h-.6l-.7.2-.5.2-.5.3-.4.3-.5.4-.3.4-.3.4-.3.6-.2.5v.6l-.2.5v.7l-.2.7v.6l.2.7v1.4l.2.7v.8l.3.7v.6l.3.7.2.6.2.5.2.6.2.7.2.5.2.4.2.4.2.4.2.3-1 .5v-.3l-.3-.5-.2-.4-.2-.4v-.6l-.4-.5-.2-.7-.2-.6-.2-.7-.2-.7v-.7l-.3-.6v-.8l-.2-.7V213l-.2-.7v-.8l.2-.7v-.6l.2-.7v-.7l.4-.6.2-.6.4-.6.4-.5.4-.5.5-.4.6-.3.7-.3.7-.2h.8v1zm0-1v1-1z"></path><path fill="#edb92e" d="M379.7 210.8c3.3-1 4 5 3.6 6.6-.4 2-1.2 2.2-2.7 1-1-1.2-4-6.5-1-7.6z"></path><path fill="#21231e" d="m383.8 217.5-1-.2v-2.8l-.2-.3v-.7l-.2-.3v-.3l-.2-.2v-.3l-.3-.2-.2-.2-.3-.3-.3-.3h-.3l-.3-.2h-.6l-.4-1h1.5l.2.2.3.2.2.2.3.2.2.3.2.2v.3l.3.3v.4l.2.3v.3l.2.3v.3l.2.4v.6l.2.3v2.5zm-3.5 1 .7-.6h.2v.2h.2l.2.2h.2v.2h.4l.2-.2v-.2h.2v-.6h.2v-.3l1 .2v.4h-.2v.4l-.2.3v.2h-.2l-.2.2-.2.2h-.2l-.2.2h-1v-.2h-.3l-.2-.2h-.2v-.2h-.2l-.2-.2v-.2zm-.7-8.2.3 1h-.3l-.2.2h-.2v.2l-.2.2v.2l-.2.2v1.8l.2.4v.3l.2.3v.2l.2.3.2.3v.3l.2.3.2.3v.2l.3.2v.2l.2.2.3.3.2.2-.7.6h-.2v-.4l-.3-.2v-.2l-.3-.2v-.3l-.3-.2v-.2l-.2-.3v-.3l-.3-.3v-.4l-.2-.3v-.3l-.3-.3v-.7l-.2-.3V212l.3-.2.2-.3.2-.3.3-.2.2-.2h.2l.4-.3z"></path><path fill="#fff" d="M380.7 214c7.7-2.5 9.2 12 8.4 15.5-1 4.5-2.8 5-6.2 2-2.6-2.4-9.7-15-2-17.5z"></path><path fill="#21231e" d="m389.6 229.6-1-.2v-.8l.2-.4v-2.9l-.2-.7V223l-.3-.7v-.7l-.3-.8-.2-.7-.2-.6-.2-.7-.3-.7-.2-.6-.3-.6-.3-.4-.4-.5-.3-.4-.4-.3-.4-.4-.4-.4-.5-.2h-.5l-.5-.2h-1.1l-.6.3-.4-1 .7-.2h2.2l.7.2.7.2.5.4.5.5.5.4.4.5.4.5.4.6.3.7.3.6.3.6.3.7.2.8.2.8.2.7v.8l.3.7v1.5l.2.7v4.4zm-7 2.3.5-1 .5.4.2.2.3.3h.3l.3.3h.2l.3.3h.3l.2.2h1.4l.2-.2.2-.2.2-.3.3-.3v-.6l.2-.2v-.3l.2-.4v-.2l.2-.4 1 .2v.4l-.2.4v.4l-.2.4-.2.3v.3l-.2.3-.2.4v.3l-.3.2h-.2v.3l-.3.2h-.2l-.2.3h-.8l-.3.2h-.5l-.3-.2h-.2l-.3-.2h-.4l-.3-.3-.3-.2h-.3l-.3-.3-.3-.3-.2-.2-.3-.3zm-2-18.5.3 1-.7.2-.6.3-.4.3-.4.4-.4.4-.3.5-.2.5v.5l-.2.6v2.5l.2.6.2.7.2.6.2.7.3.7v.7l.4.6.3.7.4.6.4.6.3.6.4.6.4.5.3.4.3.4.4.4.2.4.3.3-.5 1-.3-.4-.3-.3-.4-.4-.4-.5-.3-.5-.4-.5-.4-.6-.3-.7-.5-.6-.3-.6-.4-.6-.3-.6-.3-.7-.3-.7-.3-.7-.3-.7-.2-.8-.2-.8v-.7l-.2-.7V218l.2-.7.2-.6.2-.6.3-.5.4-.5.6-.5.6-.4.7-.2.6-.3zm0 .5v-.5.5z"></path><path fill="#edb92e" d="M464.2 137.8c-17.2-1.6-35 .2-52.3 7-14.8 6-13.4 23.2 4.6 47-1.7 3-2.6 6.8-2.7 11h4.8c-1.3-2.8 0-6.4 1.8-9 1-1.5 1.3-1.2 0-3-10.7-15-17.8-28.2-13.6-36 5-9.7 24.6-14.7 57.7-14 0-1 0-1.8-.2-2.7 0 0-.2 0-.3-.2z"></path><path fill="#21231e" d="m412 145.4-.3-1 1.7-.6 1.6-.6 1.7-.6 1.6-.5 1.6-.4 1.6-.5 1.6-.4 1.7-.4 1.5-.4 1.7-.4 1.6-.4 1.7-.3 1.6-.3 1.8-.3h1.6l1.7-.3 1.7-.2 1.7-.2 1.6-.2h3.3l1.6-.2h11.5l1.6.2h1.6l1.6.3v1l-1.7-.2h-4.9l-1.6-.2h-9.7l-1.6.2H443l-1.5.3-1.7.2-1.6.2-1.6.2H435l-1.7.4-1.6.3-1.7.3-1.6.4-1.6.3-1.7.5-1.5.4-1.6.4-1.8.5-1.6.6-1.6.6-1.7.6-1.6.6-1.6.6zm5 46.7-1-.4.2.5-1.7-2-1.5-2.3-1.5-2-1.3-2.2-1.3-2-1.2-2-1-2-1-2-1-2-.7-1.7-.6-1.8-.5-1.8-.6-1.7-.4-1.6-.3-1.7-.2-1.6v-4.4l.2-1.3.3-1.3.4-1.2.5-1.2.5-1.2.7-1 .8-1 .8-1 1-.7 1-.8 1.3-.8 1.4-.6 1.3-.5.4 1-1.2.5-1.2.6-1 .7-1 .8-1 1-1 .8-.6 1-.7 1-.5 1-.5 1-.3 1.2-.3 1.2-.2 1.2v3.8l.2 1.5.3 1.7.3 1.6.5 1.6.6 1.6.7 1.8.8 1.8 1 2 .8 1.8 1 2 1.2 2 1.2 2 1.4 2 1.4 2.2 1.5 2 1.7 2.3v.6zm0-.5.2.3-.2.3v-.5zm-3 11v1l-.6-.6v-2.5l.2-.4v-1l.2-.4v-.7l.2-.5v-.4l.2-.2v-.4l.2-.3v-.3l.2-.3v-.4l.2-.3v-.3l.2-.3v-.3l.3-.3v-.3l.2-.2.2-.3v-.3l.3-.3v-.4l1 .5v.4l-.3.2v.3l-.2.2-.2.3v.3l-.2.3v.4l-.2.3v.3l-.2.4v.3l-.2.3v.3l-.2.4v.7l-.2.3v.8l-.2.4v.8l-.2.4v1.4l-.2.4v.7l-.5-.6zm0 1h-.6v-.6l.5.5zm4.3-.4 1-.4-.5.8h-4.6v-1h4.6l-.5.7zm1-.4.3.7h-.8l.4-.7zm1-9 .7.6-.2.2v.3l-.2.2-.2.2v.2l-.3.3v.4l-.2.3-.2.2v.3l-.2.3v.2l-.2.3v.7l-.2.2v.5l-.2.3v2.2l.2.3v.4l.2.2-1 .5v-.5l-.2-.3v-.7l-.2-.3v-2.7l.2-.3v-.3l.2-.2v-.3l.2-.3v-.3l.2-.4v-.3l.2-.3.2-.3v-.2l.2-.3.2-.3v-.3l.3-.3v-.3h.3l.2-.3zm0-2.5.7-.5.2.3.2.3v.2h.2v.4h.2v.4l.2.2v.5l-.2.2v.2h-.2v.2l-.2.2v.2h-.2v.3l-.2.2-.8-.6v-.2l.2-.2.2-.2v-.2h.2v-.4h.2v-.2h-.2v-.2l-.2-.2v-.3h-.2v-.3h-.2zm-13.8-36.5 1 .5-.4.7-.2.7-.2.8-.2.8v4.5l.2 1 .3 1v1l.5 1 .3 1.2.4 1 .5 1.2.5 1 .5 1.2.6 1.2.6 1.2.6 1.3.7 1 .7 1.4.8 1.3.8 1.3.8 1.3 1 1.3.8 1.4 1 1.3.8 1.4 1 1.4 1 1.5-.8.6-1-1.3-1-1.4-1-1.4-1-1.5-.8-1.3-.8-1.4-1-1.3-.7-1.3-.8-1.3-.8-1.4-.7-1.2-.7-1.3-.6-1-.6-1.3-.5-1.2-.5-1.2-.5-1.2-.4-1-.5-1-.3-1.2-.3-1-.3-1-.2-1.2v-1l-.2-1V158l.3-.8.3-1 .2-.7.3-.8zm57.7-13.7h1l-.5.5h-14.5l-2.6.2H445l-2.5.3-2.4.2-2.3.3-2.2.2-2.2.3-2 .4-2 .3-2 .4-1.8.4-1.8.4-1.7.5-1.6.5-1.5.6-1.5.5-1.3.5-1.3.7-1.3.6-1 .7-1 .7-1 .7-.8.7-.8.8-.7.8-.6.8-.6 1-1-.5.7-1 .7-.8.7-1 .8-.7 1-.8 1-.8 1-.8 1-.7 1.2-.7 1.3-.7 1.4-.6 1.6-.6 1.5-.5 1.7-.7 1.7-.5 1.8-.4 2-.5 1.8-.5 2-.3 2.2-.4 2.2-.3 2.2-.2 2.4-.3 2.4-.2 2.5-.2h2.5l2.7-.2h2.7l2.8-.2h9l-.6.6zm1 0v.5h-.5l.5-.5zm-1-2.3.7-.7v1.9h.2v1h-1v-2.3l-.2-.2v-.4.3zm.7-.7v.3-.2zm-1.2-.4.8.7v-.6.2h.2v.2l-.7.7v-.4h-.2v-.6zm0 .7-.3-.2.3-.4v.7zm.8 0-.8-.6h.4l.4.7zm-.4-.7h1l-.6.8-.4-.7z"></path><path fill="#fff" d="M380.6 142.7c3.4 0 6 2.7 6 6s-2.6 6.3-6 6.3-6.2-2.7-6.2-6.2a6 6 0 0 1 6.2-6z"></path><path fill="#21231e" d="M387.2 148.8h-1c0-2-1.2-4-3-5a5.6 5.6 0 0 0-2.6-.6v-1c2.2 0 4.5 1.2 5.6 3a6.7 6.7 0 0 1 1 3.6zm-6.6 6.7v-1c2 0 4-1.2 5-3a7 7 0 0 0 .6-2.7h1a7 7 0 0 1-3 5.7 6.6 6.6 0 0 1-3.6 1zm-6.7-6.7h1c0 2 1.2 4.2 3 5a5.6 5.6 0 0 0 2.6.7v1a6.6 6.6 0 0 1-5.6-3 6.7 6.7 0 0 1-1-3.7zm6.6-6.7v1.2c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.6 2.6h-1c0-2.2 1-4.4 3-5.6a6.6 6.6 0 0 1 3.6-1z"></path><path fill="#fff" d="M392.6 138.7c3.4 0 6.2 2.8 6.2 6.2 0 3.3-2.8 6-6.2 6a6 6 0 0 1-6-6c0-3.5 2.6-6.3 6-6.3z"></path><path fill="#21231e" d="M399.3 145h-1c0-2.2-1.3-4.3-3.2-5.2a5.6 5.6 0 0 0-2.4-.6v-1a7 7 0 0 1 5.7 3 6.7 6.7 0 0 1 1 3.7zm-6.7 6.6v-1c2 0 4-1.3 5-3a5.7 5.7 0 0 0 .7-2.7h1c0 2.2-1.2 4.4-3.2 5.6a6.6 6.6 0 0 1-3.4 1zM386 145h1c0 2 1.2 4 3 5a5.6 5.6 0 0 0 2.6.6v1a6.7 6.7 0 0 1-5.6-3.2 6.7 6.7 0 0 1-1-3.5zm6.6-6.8v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.6 2.7h-1c0-2.4 1.2-4.7 3.2-5.8a6.6 6.6 0 0 1 3.4-1z"></path><path fill="#edb92e" d="M394.2 144a261.2 261.2 0 0 0 2 2.4c-9.8 5.4-14 11-13 16.7.2 1 3.2 11.5 9.8 31.7 4.5 3 7.8 6 10 8.4-.2.4.8 1.2.5 1.5.7 3-2.8 2.4-5 1.7-1.2-3-4.6-6-6.6-7.5-.5-.2-2-1-2-1.4l-10.2-31.6c-3-9.8 3.6-16.8 14.4-21.7z"></path><path fill="#21231e" d="m396.3 147-.5-1v.7h-.2v-.2h-.2v-.2l-.2-.2h-.2v-.2l-.2-.2v-.2h-.2v-.2h-.2v-.2l-.2-.2-.2-.2v-.2h-.2l.8-.7.2.2h.2v.4h.2v.2h.2v.2l.2.2.2.2v.2h.2v.2h.2v.2l.2.2v1zm.2-1 .3.6-.5.3.2-1zm-12.7 17-1 .2v-3.9l.2-.6.2-.5.2-.6.2-.5.3-.5.2-.5.3-.6.4-.5.3-.6.4-.6.5-.5.4-.6.6-.5.5-.5.6-.5.6-.6.5-.5.7-.4.7-.5.6-.5.8-.5.8-.5 1-.5.7-.5.8-.5.5 1-1 .4-.7.5-.8.4-.8.5-.8.4-.7.5-.7.4-.6.5-.7.4-.6.5-.6.4-.5.5-.6.4-.5.6-.5.5-.4.5-.3.5-.3.5-.3.5-.2.5-.2.5-.2.5-.2.5-.2.5v.5l-.2.5v3.1zm0 0zm9.5 31.3-.6.8-.2-.2-.6-1.8-.7-1.8-.5-1.8-.6-1.7-.5-1.6-.5-1.5-.5-1.5-.5-1.5-.4-1.4-.4-1.2-.4-1.3-.4-1.3-.4-1-.3-1.3-.4-1-.3-1-.3-1-.3-1-.3-.8-.2-.8-.2-.8-.2-.6-.2-.7v-.5l-.3-.5v-.5l-.2-.4v-.8h-.2v-.3h1v.3l.2.3v.4l.2.3v.5l.2.5.2.6.2.7.2.7.2.7.2 1 .3.7.2 1 .2 1 .3 1 .3 1 .4 1 .4 1.2.3 1.2.3 1.3.5 1.3.4 1.4.5 1.5.4 1.5.7 1.6.5 1.6.5 1.7.6 2 .6 1.7.5 1.8-.2-.2zm-.6.8-.2-.2.2.3zm10.7 8.4-.7-.6v.6l-.2-.2-.2-.2-.3-.3-.2-.2-.2-.2-.3-.3-.2-.2-.2-.2-.2-.3-.3-.2-.3-.2-.2-.2-.3-.3-.3-.3-.3-.2-.4-.3-.3-.2-.4-.3-.4-.3-.3-.2-.4-.3-.4-.3-.4-.3-.3-.3-.5-.3-.4-.2-.3-.3-.4-.2-.4-.3-.5-.3-.4-.3-.3-.3.6-.7.4.3.4.3h.5l.4.4.3.3.4.3.4.3.5.3.3.2.4.3.3.4.4.3.2.2.4.2.3.3.2.2.3.3.3.3.3.2.4.3.3.2.3.3.3.3.2.2.3.3.3.3.3.3.2.2.3.2.2.3.2.2.2.3v.6zm0-.6.3.3-.3.4v-.6zm.6 1.6-1 .2.2-.5v.2h-.2v.2-.2l-.2-.2v-.2h-.2v-1.2l.8.6v-.2h.2v.2l.2.2v.2l.2.2v.7l-.2.2.2-.6zm-1 .2v-.3l.2-.2-.2.6zm-5 1.8 1-.4-.4-.3h.4l.2.2h.7l.4.2h2.3v-.2h.2v-1.4l1-.2v1.6l-.2.3v.2l-.2.2h-.2l-.2.2h-.4l-.2.2h-3l-.3-.2h-.5l-.3-.2h-.5l-.3-.4zm.2.3h-.2v-.3l.2.3zm-6.6-7.5.6-1 .2.3h.2l.2.3h.2l.3.3.2.3.2.2.2.2.2.2h.2l.2.3.3.2v.3l.4.2.2.3.2.2.3.3.3.2.2.3.3.3.2.2.2.3.2.4.2.3.2.3.2.2.2.3v.3l.3.3v.4l.3.3v.3l-1 .4v-.3l-.2-.4-.2-.3v-.2l-.3-.2v-.3l-.2-.2-.2-.3-.2-.3-.2-.2-.2-.3-.2-.2-.2-.3-.3-.2-.2-.3v-.2l-.3-.3-.3-.2-.2-.2-.2-.2-.3-.2-.2-.2-.2-.2h-.2l-.2-.3h-.2l-.2-.3h-.2l-.2-.3h-.2l-.2-.2zm.6-1 .3.3-.3-.2zm-2.7-.7 1-.3.2.2h.2v.2h.2v.2h.4v.2h.2l.2.2h.2l-.6 1-.2-.2h-.2v-.2h-.4v-.2h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2zm-10-31.7.8-.3.3 1 .3 1 .2.8.3 1 .3 1 .3.8.4 1 .3 1 .3 1 .3 1 .3 1 .3.8.2 1 .4 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .3 1 .5 1 .3 1 .3 1 .5 1 .3 1 .3 1 .4 1.2.4 1 .3 1 .4 1.2-1 .3-.3-1-.2-1.2-.3-1-.4-1-.2-1-.3-1-.3-1.2-.4-1-.3-1-.3-1-.4-1-.3-1-.3-1-.3-1-.4-1-.4-1-.3-1-.4-1-.3-1-.3-.8-.3-1-.4-1-.3-1-.3-1-.3-.8-.3-1-.2-1-.3-1-.3-.8-.3-1-.4-.8-.2-1zm15-22-.7.5h.6l-1 .6-1 .4-1 .5-.8.4-1 .5-.7.4-1 .5-.7.5-.8.5-.7.6-.7.6-.5.6-.7.6-.5.6-.6.7-.5.6-.4.7-.4.6-.4.7-.3.7-.3.7-.3.7v.8l-.2.7v.7l-.2.8v2.6l.3.8v1l.3.7-1 .3-.2-1v-.8l-.3-1V159l.2-1 .2-.7.2-.6.3-.8.4-.7.5-1 .4-.6.4-.7.6-.7.5-.7.6-.6.8-.6.6-.6.8-.6.7-.6.7-.5.8-.6 1-.5.7-.5 1-.5 1-.5.8-.5 1-.5 1-.5.6.2zm-.5-.3.4-.2.2.4-.6-.2z"></path><path fill="#edb92e" d="m356 217-.4 2c-2.8.5-5.3.7-7.3.3 3.4-3.3 6-4 7.6-2.4z"></path><path fill="#21231e" d="m355 218.8.4-2 1 .2-.3 2-.3.4-.6-.6zm1 0v.5h-.3l.4-.4zm-8 .2.7.7-.3-1 .2.2h4.1l.3-.2h1l.2-.2h.7l.2-.2h.3l.2 1h-.8l-.4.2h-.5l-.4.2h-1.3v.2h-3.7l-.4-1zm.2 1-1-.3.8-.7.2 1zm8.2-3-1-.2.2.5v-.2h-.6v-.2h-.6l-.2-.2H353v.2h-.6l-.2.3-.2.2h-.3l-.2.2-.3.2-.2.2-.3.2-.3.2-.2.2-.3.2-.4.3h-.3l-.3.4-.3.3-.7-.7.3-.3.3-.3.3-.3.2-.2.3-.2.3-.2.3-.3h.4l.3-.3h.3l.2-.3h.3l.3-.3h.6l.3-.2h.5l.4-.2h1.3l.2.2h.3l.2.2h.2l.2.2.3.3v.5zm0-.5v.5-.5zm-.5.4h.4-.5zm.3-.5.2.2v.3l-.2-.5z"></path><path fill="#edb92e" d="M355.6 212.3c1.8.4 2 .7 2.7 1 1 0 2.4 0 3.3-1 4-2.2 4 2 2.5 5-1 2.4-.5 5 .6 7 1.2 2.2 1 3.2 0 4l-1.6 1c-1 1.2-1.8 1-2-.6-3.8-1.6-5-5.3-6.2-8.6-1.7-4.7-7.8-5.8.8-7.7z"></path><path fill="#21231e" d="M358.4 212.7v1h-.7v-.2h-.4l-.2-.2h-.4l-.2-.2h-.8l-.3-.2.2-1h.4l.2.2h.4l.2.2h.4v.2h.8v.2h.4zm3-.7.5 1v-.2l-.2.2h-.3v.2h-.2l-.2.2h-.2l-.2.2h-2.1v-1h2.2l.2-.2h.2v-.2h.2l.2-.2zm0 0zm3 5.6-.8-.4v-.3l.3-.4v-.5l.2-.2v-.6l.2-.3v-2.2h-.2v-.2h-.2v-.2h-1.2l-.3.2-.3.2-.3.2-.6-1 .4-.2.3-.2h.5l.3-.2h1.8l.2.2.2.2v.2l.2.3v.4l.2.3v2.4l-.2.3v.3l-.2.4v.3l-.2.3v.3l-.3.3zm.6 6.3-1 .4v-.4l-.2-.2v-.4l-.2-.2v-.2l-.2-.2v-.5l-.2-.2v-.8l-.2-.2v-2.3l.2-.2v-.3l.2-.3v-.3l.2-.2 1 .4-.2.2v.4l-.2.2v.8l-.2.2v2l.2.2v.5l.2.2v.4h.2v.2l.2.2v.4h.2zm0 4.6-.6-1h.2v-.2h.2v-1.6l-.2-.3v-.3l-.2-.2v-.2l-.2-.2v-.2l.8-.5v.2l.2.2v.2l.2.2v.2l.2.2v.2l.2.3v1.7l-.2.2v.2h-.2v.2h-.2v.2l-.2.2zm0 0zm-1.6 1-.8-.7v-.2h.2l.2-.2h.2v-.2h.4v-.2h.2v-.2h.4v-.2h.2l.6.8h-.2v.2h-.4v.2h-.2l-.2.2h-.2v.2h-.2l-.2.2zm-.8-.7v-.2zm-1.8 0 .4-.8.3.4v.5h.2v.2h.4v-.2h.2v-.2h.2l.8.6-.2.2-.2.2-.3.2h-.2v.2h-1.1l-.2-.2v-.2l-.2-.2v-.4h-.2v-.7l.2.4zm.4-.8h.3v.4l-.3-.4zm-7-8 1-.3.2.2v.3l.2.3v.4l.2.3v.3l.3.3.2.4v.3l.2.3.2.3v.3l.3.3v.2l.2.3v.2l.3.3.2.3.2.2v.3l.3.2.2.3.2.2.2.2.2.2h.2l.3.3.3.2.3.2.3.2h.3l.2.2-.4 1-.3-.2-.4-.2-.2-.2-.4-.2-.3-.2-.2-.3-.3-.3-.2-.2-.3-.3-.3-.2-.2-.3-.2-.3-.2-.3-.3-.4-.2-.3-.2-.3-.2-.3v-.4l-.2-.3v-.3l-.3-.3v-.3l-.3-.2v-.3l-.2-.4v-.2l-.2-.3-.2-.3v-.3l-.2-.4v-.3zm1.4-8.4v1l-.6.2-.7.2h-.6l-.5.3h-.4l-.4.3h-.3v.3l-.2.2v.2h-.2v.2l.2.3.3.2.2.3.2.2.2.3.3.2v.3l.4.3.2.3.3.5.2.3.2.4.3.4.2.4v.5l.3.4-1 .3v-.4l-.3-.5-.2-.4-.2-.3-.3-.3-.2-.3v-.2l-.4-.3-.2-.3-.3-.3v-.4l-.3-.2-.3-.3-.3-.4v-.2l-.2-.3-.2-.4v-.6l.3-.3v-.2l.3-.3h.3l.4-.3.4-.3.5-.2h.4l.7-.3.8-.2.7-.2zm0 0zm0 1v-1 1zm0-1z"></path><path fill="#edb92e" d="M357 212.5c3.5 1.2 4-.7 6-.6-.8 5-1.7 7.7-7 5-3-1.6-6.7.7-7.4 2.3-.3.6-2-.6-2.6-2-2.6-5.8 6.7-6.4 11-4.8z"></path><path fill="#21231e" d="m363.6 212-1-.2.5.6H362v.2h-.3l-.2.2h-.2l-.3.2h-.3v.2h-.7l-.2.2h-2l-.4-.2h-.3l-.3-.2.3-1h.3l.3.2h.4l.2.2h1.3l.2-.2h.2l.2-.2h.5l.2-.2h.2l.3-.2h.5l.2-.2h.4l.6.6zm-.5-.6h.7v.6l-.6-.6zm-7.2 6 .4-1 .5.4.5.2h.4l.4.3h.3l.4.2h1.7l.2-.2.3-.3.2-.3v-.2l.2-.2.2-.3v-.3l.2-.3v-.3l.2-.2v-.4l.2-.4v-.4l.2-.4v-.9l.2-.5 1 .2v.5l-.2.5v.8l-.2.5v.4l-.2.4v.4l-.3.4v.3l-.2.4-.2.4v.2l-.3.3-.2.3-.2.2-.3.2-.2.2h-.2l-.3.2h-.3l-.3.2h-1.6l-.4-.2-.4-.2h-.4l-.4-.3-.5-.3-.5-.3zm-6.8 2-1-.3h.2v-.3h.3v-.3l.3-.2v-.2l.3-.2h.3l.2-.3.2-.2h.3l.2-.3h.3l.2-.3h.3l.3-.2h.3l.2-.2h.3l.4-.2h2.3l.3.2h.3l.3.2h.2l-.4 1h-.3l-.2-.2h-.5l-.3-.2h-1.8l-.3.2h-.3l-.3.2h-.3l-.2.3h-.2l-.3.2h-.2l-.2.2h-.2v.2l-.2.2h-.2v.3h-.2v.2h-.2v.2h-.2zm-3.5-2 1-.3v.4h.2v.4h.2v.2l.2.2h.2v.2l.2.2h.2v.2h.4v.2l.8.5v.2l-.3.2h-1v-.2h-.2l-.3-.2h-.2v-.2l-.2-.2-.2-.2h-.2v-.3h-.2v-.2h-.2v-.3h-.2v-.4h-.2v-.3zm11.8-5.4-.3 1-.4-.2h-.5l-.3-.2h-.5l-.5-.2h-5l-.5.2-.4.2h-.4l-.4.3-.4.3-.3.2v.2l-.4.2-.2.2v.3l-.3.2v1.6l.3.4.2.5-1 .5-.2-.5-.2-.6V215l.2-.6.2-.4.2-.4.3-.3.2-.4.3-.3.4-.3.4-.2.4-.2.5-.2h.5l.5-.3h1.1l.5-.2h3.3l.6.2h.5l.4.2.5.2h.3zm0 .5v-.5.5z"></path><path fill="#fff" d="M458.8 124.5c3.4 0 6.2 2.7 6.2 6 0 3.5-2.8 6.3-6.2 6.3s-6-2.8-6-6.2a6 6 0 0 1 6-6z"></path><path fill="#21231e" d="M465.5 130.6h-1c0-2-1.3-4.2-3.3-5a5.5 5.5 0 0 0-2.4-.6v-1a7 7 0 0 1 5.7 3 6.7 6.7 0 0 1 1 3.6zm-6.7 6.7v-1c2 0 4-1.2 5-3a5.6 5.6 0 0 0 .6-2.7h1c0 2.3-1 4.5-3 5.7a6.6 6.6 0 0 1-3.6 1zm-6.6-6.7h1c0 2 1.3 4.2 3.2 5a5.5 5.5 0 0 0 2.4.7v1a6.6 6.6 0 0 1-5.6-3.2 6.7 6.7 0 0 1-1-3.4zm6.6-6.6v1c-2 0-4 1.2-5 3a5.6 5.6 0 0 0-.6 2.6h-1c0-2.2 1.2-4.4 3.2-5.6a6.6 6.6 0 0 1 3.4-1z"></path><path fill="#fff" d="M446.3 124.5a6 6 0 0 1 6 6c0 3.5-2.6 6.3-6 6.3s-6-2.8-6-6.2c0-3.4 2.6-6 6-6z"></path><path fill="#21231e" d="M453 130.6h-1c0-2-1.3-4-3.2-5a5.5 5.5 0 0 0-2.5-.6v-1c2.3 0 4.5 1.2 5.6 3a6.7 6.7 0 0 1 1 3.6zm-6.7 6.7v-1c2 0 4-1.3 5-3a7 7 0 0 0 .6-2.7h1c0 2.3-1.3 4.5-3.2 5.7a6.6 6.6 0 0 1-3.5 1zm-6.6-6.7h1c0 2 1.2 4.2 3 5a5.5 5.5 0 0 0 2.6.7v1a6.5 6.5 0 0 1-5.6-3.2 6.7 6.7 0 0 1-1-3.4zm6.6-6.6v1c-2 0-4 1.2-5 3a5.6 5.6 0 0 0-.6 2.6h-1a7 7 0 0 1 3-5.6 6.6 6.6 0 0 1 3.6-1z"></path><path fill="#fff" d="M433.8 125.5a6 6 0 0 1 6 6c0 3.5-2.6 6.3-6 6.3s-6-2.8-6-6.2 2.6-6 6-6z"></path><path fill="#21231e" d="M440.4 131.6h-1c0-2-1.2-4-3-5a5.5 5.5 0 0 0-2.6-.6v-1a7 7 0 0 1 5.6 3 6.7 6.7 0 0 1 1 3.6zm-6.6 6.7v-1c2 0 4-1.3 5-3a5.7 5.7 0 0 0 .6-2.7h1a7 7 0 0 1-3 5.7 6.6 6.6 0 0 1-3.6 1zm-6.6-6.7h1c0 2.2 1.3 4.3 3.2 5.2a5.5 5.5 0 0 0 2.4.5v1a6.4 6.4 0 0 1-5.6-3.2 6.7 6.7 0 0 1-1-3.4zm6.6-6.6v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.6 2.6h-1c0-2.3 1.3-4.6 3.3-5.7a6.6 6.6 0 0 1 3.3-1z"></path><path fill="#fff" d="M422.3 127.7c3.3 0 6 2.8 6 6.2 0 3.3-2.7 6-6 6s-6.2-2.7-6.2-6 3-6.3 6.3-6.3z"></path><path fill="#21231e" d="M429 134h-1a6 6 0 0 0-3.3-5.2 5.5 5.5 0 0 0-2.4-.6v-1c2.2 0 4.4 1.2 5.6 3.2a6.7 6.7 0 0 1 1 3.5zm-6.7 6.5v-1c2 0 4-1.2 5-3 .4-1 .6-1.8.6-2.6h1c0 2-1.3 4.3-3.3 5.5a6.6 6.6 0 0 1-3.4 1zm-6.7-6.6h1c0 2 1.2 3.8 3 4.8a5 5 0 0 0 2.7.7v1a7 7 0 0 1-5.7-3 6.7 6.7 0 0 1-1-3.6zm6.7-6.8v1c-2 0-4.2 1.3-5 3.2a5.7 5.7 0 0 0-.7 2.5h-1c0-2.5 1.3-4.7 3.3-6a6.6 6.6 0 0 1 3.3-.8z"></path><path fill="#fff" d="M346.3 159.4a6 6 0 0 1 6 6.2c0 3.4-2.6 6.2-6 6.2s-6-2.8-6-6.2a6 6 0 0 1 6-6.2z"></path><path fill="#21231e" d="M353 165.6h-1c0-2-1.3-4-3.2-5a5.6 5.6 0 0 0-2.5-.7v-1c2.2 0 4.5 1 5.6 3a6.7 6.7 0 0 1 1 3.6zm-6.7 6.7v-1c2 0 4-1.2 5-3a7 7 0 0 0 .6-2.7h1c0 2.3-1.3 4.5-3.2 5.7a6.6 6.6 0 0 1-3.5 1zm-6.7-6.7h1c0 2 1.3 4.2 3.2 5a5.6 5.6 0 0 0 2.5.7v1a7 7 0 0 1-5.6-3 6.7 6.7 0 0 1-1-3.7zm6.7-6.7v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.6 2.6h-1a7 7 0 0 1 3-5.7 6.6 6.6 0 0 1 3.6-1z"></path><path fill="#fff" d="M356.8 152.8c3.4 0 6.2 2.7 6.2 6 0 3.6-2.8 6.3-6.2 6.3-3.4 0-6-2.6-6-6a6 6 0 0 1 6-6.2z"></path><path fill="#21231e" d="M363.5 159h-1c0-2.2-1.3-4.2-3-5a5.6 5.6 0 0 0-2.7-.7v-1a7 7 0 0 1 5.7 3 6.7 6.7 0 0 1 1 3.6zm-6.7 6.6v-1a5.7 5.7 0 0 0 5.7-5.7h1a7 7 0 0 1-3 5.6 6.6 6.6 0 0 1-3.7 1zm-6.6-6.7h1c0 2 1.2 4 3 5a5.6 5.6 0 0 0 2.6.6v1a7 7 0 0 1-5.6-3 6.7 6.7 0 0 1-1-3.7zm6.6-6.8v1c-2 0-4 1.3-5 3.2a5.7 5.7 0 0 0-.6 2.5h-1c0-2.3 1.2-4.6 3-5.8a6.6 6.6 0 0 1 3.6-1z"></path><path fill="#fff" d="M368.8 147c3.4 0 6 3 6 6.3 0 3.4-2.6 6.2-6 6.2s-6-2.8-6-6.2a6 6 0 0 1 6-6.2z"></path><path fill="#21231e" d="M375.4 153.3h-1c0-2-1.2-4.2-3-5a5.6 5.6 0 0 0-2.6-.7v-1a7 7 0 0 1 5.6 3 6.7 6.7 0 0 1 1 3.7zm-6.6 6.7v-1c2 0 4-1.3 5-3a5.7 5.7 0 0 0 .6-2.7h1a7 7 0 0 1-3 5.7 6.6 6.6 0 0 1-3.6 1zm-6.7-6.7h1c0 2 1.4 4 3.2 5a5.6 5.6 0 0 0 2.6.7v1a6.9 6.9 0 0 1-5.7-3.2 6.7 6.7 0 0 1-1-3.5zm6.8-6.7v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.6 2.7h-1c0-2.3 1-4.5 3-5.7a6.6 6.6 0 0 1 3.6-1z"></path><path fill="#fff" d="M338.2 169.5a6 6 0 0 1 6 6.2c0 3.4-2.6 6.2-6 6.2s-6.2-3-6.2-6.3 2.8-6.2 6.2-6.2z"></path><path fill="#21231e" d="M344.8 175.7h-1c0-2-1.3-4.2-3.2-5a5.6 5.6 0 0 0-2.4-.7v-1a7 7 0 0 1 5.6 3 6.7 6.7 0 0 1 1 3.7zm-6.6 6.7v-1c2 0 4-1.3 5-3a5.7 5.7 0 0 0 .6-2.7h1c0 2.3-1.2 4.5-3.2 5.7a6.6 6.6 0 0 1-3.4 1zm-6.7-6.7h1c0 2 1.2 4 3 5a5.6 5.6 0 0 0 2.7.7v1a6.9 6.9 0 0 1-5.7-3.2 6.7 6.7 0 0 1-1-3.5zm6.7-6.7v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.7 2.7h-1c0-2.3 1.2-4.5 3.2-5.7a6.6 6.6 0 0 1 3.5-1z"></path><path fill="#edb92e" d="m454.2 276.3-22 12.8-23.4-10 22-12.8z"></path><path fill="#21231e" d="m431 266.7-22 12.8-.4-1 22-12.7h.5v1zm-.4-1h.5-.4zm23.5 11-23.3-10 .4-1 23.4 10v1h-.3zm.4-1 1 .5-1 .5v-1zm-22.4 13 22-13 .5 1-22 12.8h-.5v-.8zm.5.8-.2.2h-.3l.5-.2zm-23.4-11 23.4 10-.4 1-23.3-10v-1h.4zm-.3 1-1-.4 1-.4v1z"></path><path fill="#c6363c" d="M431 270.6c5.8-.3 10.5 2.5 10.8 6.3.2 3.7-4.2 7-9.8 7.4-5.7.3-10.4-2.5-10.7-6.3-.2-3.6 4.2-7 9.8-7.4z"></path><path fill="#21231e" d="M442.3 277h-1v-.7l-.2-.3v-.6l-.3-.3v-.2l-.3-.2-.2-.3-.2-.3-.3-.2-.3-.3-.2-.2-.3-.2h-.5l-.3-.3-.3-.2-.5-.2-.4-.2h-.3l-.4-.2h-.4l-.5-.3h-.9l-.5-.2h-.8l-.5-.2h-1l-.5.2v-1h3.6l.4.2.5.2h.5l.4.2.5.2.5.2.4.2.3.2.4.2.4.2.4.2.4.3.3.3.4.3.3.3.3.3.2.4.2.3.2.3.2.4v.3l.3.4.2.4v.8zm-10.3 8v-1l.4-.2h.9l.5-.2h.4l.4-.2h.5l.4-.3h.5l.4-.2.4-.2.4-.2.3-.2.4-.2.4-.3.4-.2.3-.2.3-.3.3-.2.3-.3v-.3l.3-.3.2-.4.2-.2v-.3l.2-.2v-.6l.2-.3v-1.1l1-.2v1.6l-.2.4v.3l-.3.5v.3l-.3.4-.3.3v.3l-.4.4-.3.3-.3.3-.3.2-.3.3-.4.3-.4.2-.4.3-.4.3-.4.2-.4.2-.5.2h-.4l-.4.2-.5.2h-.4l-.5.2h-.4l-.5.2h-1zm-11.2-6.8h1v.5l.2.3v.3l.2.3.2.3v.2l.3.3.2.2v.3l.4.2.2.3.3.2.2.2.3.2.4.2.2.2h.4l.4.3h.4l.4.2.4.2h.4l.5.2h1l.4.2h2.3v1H428l-.5-.2h-.4l-.5-.3h-.6l-.4-.3h-.4l-.5-.3-.3-.2-.3-.3-.4-.2-.4-.2-.3-.3-.3-.2-.3-.3-.3-.3-.3-.3v-.3l-.3-.3-.2-.3-.2-.4-.2-.3v-1l-.2-.4zm10.3-8 .2 1h-1.5l-.5.2h-.5l-.5.2-.4.2h-.5l-.4.3-.5.2-.4.2-.3.2-.4.2-.3.2-.3.3-.4.2-.3.3-.3.2-.2.3-.3.2-.2.3-.2.3-.2.4-.2.3v.3l-.3.3v.8l-.2.3v.6l-1 .2V277l.2-.4v-.3l.2-.4v-.5l.3-.3.2-.4.3-.3.2-.3.3-.3.2-.4.4-.3.4-.3.3-.3.4-.3.5-.2.3-.3.5-.3.4-.2.4-.2.6-.2h.4l.5-.2h.5l.5-.3h.5l.5-.2h1.1l.5-.2z"></path><path fill="#edb92e" d="m382.4 270 23.8 9-19.7 13c-5-1.6-9-19-4-22z"></path><path fill="#21231e" d="m406 279.4-23.8-9 .4-1 23.7 9v1h-.3zm.3-1 1 .4-1 .5v-1zm-20 13.3 19.6-13.2.4.8-19.6 13.3h-.4v-1zm.5 1h-.4.4zm-4.2-23.3-.4 1h.5l-.4.2-.4.3-.4.4-.2.5-.2.4-.2.7-.2.8v1.5l-.2.8v2.8l.3.8v1l.2.8.2 1 .2 1 .3.7v1l.5 1 .3.7.3.7.5.8.4.6.3.6.4.6.4.5.5.4.4.2.3.3.4.2-.3 1-.6-.3-.5-.3-.5-.3-.5-.5-.4-.6-.6-.6-.4-.7-.4-.7-.4-.7-.4-1-.3-.8-.3-1-.3-.8-.4-1-.2-.8-.2-1-.2-1v-.8l-.3-1v-5.2l.3-.8.2-.7.3-.6.3-.6.4-.5.4-.5.5-.4h.6zm-.5 0h.6-.5zm.4.4.2-.4-.2.5zm-.3-.4h.6-.5z"></path><path fill="#0c4076" d="M382.8 274.3c5.7-.6 10.5 2 11 5.8.3 3.8-4 7.4-9.6 8-3.6.3-6-3-6.3-6.3-.5-3.4 1-7 4.8-7.4z"></path><path fill="#21231e" d="M394.2 280h-1v-.5l-.2-.3v-.3l-.2-.4-.2-.3-.2-.2-.2-.2-.2-.3-.2-.2-.3-.3-.2-.2-.3-.2-.3-.2-.4-.2-.3-.2-.4-.2-.3-.2h-.4l-.5-.3h-.4l-.4-.2h-.8l-.5-.2h-3.6l-.2-1h3.8l.4.2h.5l.4.2.4.2h.4l.5.3.4.2h.5l.4.3.2.2.4.3.3.2.2.3.3.3.3.3.2.2.3.3.2.3.2.3v.5l.3.4v.2l.2.4v.4zm-10 8.4v-1h1l.5-.2h.4l.6-.2.5-.2h.5l.4-.3.4-.2h.4l.4-.3.3-.3.4-.2.2-.2.4-.3.3-.2.2-.3.3-.2.2-.3.3-.3.2-.3.2-.2.2-.3v-.4l.3-.3v-.8l.2-.4v-1h1v1.6l-.2.3v.3l-.2.4-.2.3-.2.4-.2.3-.2.4-.3.4-.2.3-.3.3-.3.3-.5.3-.3.3h-.4l-.4.4-.4.2-.4.3h-.4l-.4.3-.5.2h-.5l-.4.3-.5.2h-.6l-.5.2h-.7l-.5.2h-.5zm-6.8-6.7h1v.7l.2.3v.3l.2.4v.3l.2.2v.2l.2.3.2.2v.3l.3.2.2.3v.2l.2.2h.2l.2.3h.2l.2.3.2.2h.3l.2.2h.2l.2.2h.2l.3.2h1.4v1h-2.1l-.3-.2h-.4l-.3-.3-.3-.2-.3-.2-.3-.2-.2-.2-.3-.2-.3-.2-.2-.2-.3-.3-.2-.2v-.2l-.3-.3-.2-.3v-.2l-.3-.4v-.3l-.3-.3-.2-.3v-.3l-.2-.3v-.6l-.2-.3v-.3zm5.4-8v1h-.2l-.4.2h-.8l-.3.3-.3.2-.3.2-.2.2h-.2l-.2.2v.2l-.3.2v.3h-.3v.3l-.2.3-.2.2v.7l-.2.3v.4l-.2.3v2.2h-1V279l.2-.3v-.3l.2-.2v-.3l.2-.3.2-.3v-.4l.3-.3.2-.3.2-.2v-.3l.3-.2.3-.2h.2l.3-.3.4-.2.3-.2h.3l.3-.2h.7l.4-.2h.4z"></path><path fill="#fff" d="M457.5 280.4c1.7 0 3.2 1.5 3.2 3.2 0 1.8-1.5 3.3-3.2 3.3-1.8 0-3.2-1.6-3.2-3.4 0-1.7 1.4-3.2 3.2-3.2z"></path><path fill="#21231e" d="M461.2 283.6h-1v-.6l-.2-.2v-.2l-.2-.3v-.2h-.2v-.2h-.2v-.2h-.2l-.2-.2-.3-.2h-.2l-.2-.2h-.7v-1h1l.3.2.2.2h.2l.3.2v.2h.2v.2h.2v.3h.2v.2l.2.2v.2h.2v.2l.2.3v.5l.2.2v.2zm-3.7 3.8v-1h.4l.3-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2.2-.2v-.2l.2-.2v-1h1.2v.8l-.2.2v.3l-.2.2v.2l-.2.2-.2.3h-.2v.3h-.3l-.2.2-.3.2-.3.2h-.6v.2h-.6v.2h-.3zm-3.7-3.8h1v1h.2v.2l.2.2v.2l.2.2h.2v.2h.2v.2h.2l.2.2h.2v.2h1v1.2h-.7l-.2-.2h-.5v-.2h-.3l-.2-.2-.3-.2-.2-.2h-.2v-.3h-.2l-.2-.3-.2-.3v-.2l-.2-.3v-.3l-.2-.3v-.8zm3.7-3.7v1h-.9l-.2.2h-.2v.2h-.2v.2h-.2v.2h-.2v.2h-.2v.2l-.2.3v.5h-.2v.8h-1v-1.2l.2-.2v-.3h.2v-.3l.2-.2.2-.2v-.2h.4v-.2l.2-.2h.2v-.2h.5v-.2h.4v-.2h1z"></path><path fill="#fff" d="M408.7 283c1.8 0 3.2 1.6 3.2 3.4 0 1.7-1.5 3.2-3.3 3.2a3.2 3.2 0 0 1-3.2-3.2c0-1.8 1.4-3.3 3.2-3.3z"></path><path fill="#21231e" d="M412.4 286.4h-1v-.9l-.2-.2v-.2l-.2-.2v-.2l-.2-.2-.2-.2h-.2v-.2h-.2v-.2h-.4l-.2-.2h-.8v-1.2h.7v.2h.7v.2h.3v.2h.3v.2h.3l.2.2.2.3h.2l.2.3.2.3v.3h.2v.6l.2.2v.9zm-3.7 3.7v-1h1v-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.3h.2v-.5l.2-.2v-.4h1v.8l-.2.2v.3l-.2.2v.3h-.2v.3h-.2l-.2.3h-.2v.2h-.3l-.2.2h-.2v.2h-.3v.2h-.5l-.2.2h-.8zm-3.7-3.6h1v.8h.2v.5h.2v.2h.2v.2h.2v.2h.2l.2.2h.2v.2h.5v.2h.7v1h-1.2v-.2h-.3v-.2h-.2l-.2-.2-.2-.2h-.2v-.2h-.2v-.3h-.3v-.3h-.2v-.3l-.2-.2v-.2l-.2-.3v-.8zm3.7-3.8v1h-.7v.2h-.5v.2h-.2l-.2.2v.2h-.2l-.2.2v.2l-.2.2v.2h-.2v.7l-.2.3v.4h-1v-1l.2-.2v-.3l.2-.3.2-.3v-.3h.3v-.3h.2l.2-.2.2-.2h.2v-.2h.6l.3-.2h.5l.3-.2h.2z"></path><path fill="#fff" d="M407 268.3c1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2a3.2 3.2 0 0 1-3.2-3.2c0-1.8 1.4-3.2 3.2-3.2z"></path><path fill="#21231e" d="M410.7 271.5h-1v-.7l-.2-.2v-.3l-.2-.2h-.2v-.4h-.2v-.2h-.2l-.2-.2h-.2l-.2-.2h-.5v-.2h-.4v-1h.8v.2h.3l.3.2h.2l.3.2h.2v.2l.3.2.2.2.3.3.2.3v.3h.2v.4l.2.2v1zm-3.7 3.7v-1h1v-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2.2-.2v-.4h.2v-1h1v1.2l-.2.2-.2.3v.3h-.2l-.2.3h-.2v.3h-.3v.2h-.2v.2h-.2l-.2.2h-.5l-.3.2h-.7zm-3.7-3.7h1v.8l.2.2v.4h.2v.2l.2.2v.2h.2v.2h.2v.2h.2l.2.2h.5l.2.2h.5v1h-.9l-.3-.2h-.2l-.3-.2-.3-.2h-.2l-.2-.2-.2-.3h-.3v-.3l-.2-.3v-.3h-.2v-.4l-.2-.2v-.8zm3.7-3.7v1h-.8v.2h-.5l-.2.2h-.2v.2h-.2v.2h-.2v.2h-.2v.2l-.2.2v.3l-.2.2v.7h-1v-1.2h.2v-.6h.2v-.3h.2v-.3h.3l.2-.2v-.2h.3v-.2h.3l.2-.2h.4v-.2h.5l.2-.2h.7z"></path><path fill="#fff" d="M457.3 266.2c1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2a3.2 3.2 0 0 1-3.2-3.2c0-1.8 1.6-3.2 3.3-3.2z"></path><path fill="#21231e" d="M461 269.4h-1v-.8h-.2v-.3l-.2-.2v-.2h-.2v-.2h-.2v-.2l-.2-.2h-.2l-.2-.2h-.2l-.3-.2h-.7v-1h1.1l.2.2h.3l.3.2.3.2.2.3h.2v.2h.2v.2h.2v.3h.2v.3l.2.2v.5l.2.2v.7zm-3.7 3.7v-1h1.2v-.2h.2l.2-.2.2-.2v-.2h.2v-.2h.2v-.2l.2-.2v-.5h.2v-.8h1v1.1l-.2.2v.2l-.2.2-.2.3-.2.3-.2.2-.2.2-.2.2h-.2v.2h-.3v.2h-.4l-.2.2h-1zm-3.7-3.6h1v.5l.2.2v.3l.2.2v.2h.2l.2.2v.2h.2v.2h.2l.3.2h.2l.2.2h.7v1h-1l-.3-.2h-.3l-.3-.2-.3-.2v-.2l-.3-.2-.2-.2v-.2h-.2v-.3h-.2v-.6l-.2-.2v-.7l-.2-.2v-.2zm3.7-3.7v1h-.7v.2h-.4l-.2.2h-.2v.2h-.2v.2l-.2.2-.2.2v.4h-.2v.8h-1.2v-.5l.2-.3v-.4l.2-.2v-.2h.2v-.3h.2v-.3h.2v-.2h.3v-.3l.3-.2.3-.2h.3l.2-.2h1z"></path><path fill="#edb92e" d="M371 237.4c2.3-.8 6 4.6 7 4.5 1.2-3-1.2-10.5-5.5-16.3-3-1-3.2-3-3.8-7.3-.2-1.3-2.7-.4-2.7 2 0 2.3-.3 3.6.3 5.6.2.8 0 1.6-.8 2.3 4.5 1.8 5.6 4 5.4 9z"></path><path fill="#21231e" d="m377.6 241.8 1 .3-.5.4h-.4l-.3-.2-.2-.2-.3-.3-.2-.2-.2-.2-.2-.2-.3-.3-.3-.2-.2-.2-.2-.3-.3-.2-.2-.2-.3-.2-.2-.3h-.3l-.3-.3h-.2l-.3-.3-.3-.2h-.2l-.3-.2h-.4l-.2-.2h-.4l-.4-1h1.3l.3.2h.3l.3.2.2.2h.3l.3.3.2.2h.3l.3.3.3.3v.2l.4.2.2.3.3.2v.2l.4.3.2.2.2.2.2.2.2.2.2.2h.2v.2h.3v.2l-.4.3zm1 .3-.2.4h-.3l.5-.3zm-6.3-15.8.4-1 .2.2.3.5.4.5.4.6.4.7.4.5.3.6.5.6.3.6.3.6.4.6.3.6.2.6.2.6.2.5.2.6.2.7.2.5v.6l.3.5v.6l.2.4v.5l.2.4v3.3l-.2.3-1-.2v-.3l.2-.3v-3.6l-.3-.5v-.4l-.2-.5-.2-.5-.2-.5v-.5l-.4-.6-.2-.7-.2-.5-.3-.6-.2-.6-.3-.5-.3-.5-.4-.6-.3-.7-.4-.5-.4-.6-.4-.6-.3-.5-.5-.5-.4-.5.3.2zm.4-1 .2.2-.3-.2zm-4.5-6.7h1v.7l.2.3v1l.2.3v.5l.2.3v.5l.2.2v.4h.2v.3l.2.2v.2h.2v.3h.2l.2.2v.2h.2l.2.2h.2l.2.2h.2l.2.2h.2l.3.2-.4 1h-.2l-.2-.2-.3-.2h-.2l-.2-.2h-.2l-.2-.3-.2-.2h-.2v-.2l-.3-.2-.2-.2-.2-.2v-.2l-.2-.2v-.2l-.2-.3v-.2l-.2-.2v-.3l-.2-.2v-.9l-.2-.3v-.6l-.2-.3V219l-.2-.5zm-1.7 1.8h-1v-1l.2-.2.2-.2v-.4h.2l.2-.3h.2l.2-.2.3-.2h.2l.2-.2h1.2v.2h.2v.3l.2.2v.2h-1.6v.2h-.2v.2h-.2v.2h-.2v.3l-.2.2v.8zm.3 5.6-1 .2v-.6l-.2-.2V224h-.2v-3.6h1v4.2l.2.2v.7l.2.2zm-1 2-.5.8v-1l.2-.2v-.2h.2v-.4h.2v-.4l-.2-.2v-.2l1-.3v1.8h-.2v.4h-.2v.2h-.2v.2l-.2.2h-.2v-.7zm-.5.8-.8-.3.7-.6v.8zm5 8.6h1-1v-.5l.2-.5v-2l-.2-.3v-.7l-.2-.3v-.6l-.2-.3v-.2l-.2-.3-.2-.3v-.2l-.3-.3v-.2l-.3-.2-.2-.2-.3-.2-.2-.2-.3-.2h-.3l-.3-.3-.2-.2-.3-.2-.4-.2h-.3l-.4-.2.4-1 .4.2.5.2.4.2.3.2.3.2.4.2.3.2.3.2.3.2v.2l.4.3.2.3.3.3v.2l.3.3v.4l.3.3v.3l.3.3v.7l.2.3v.7l.2.4v2.9h-1zm1 0h-1l.5-.5.6.4zm-1 0v-.4h.5l-.4.4z"></path><path fill="#edb92e" d="M368.8 218.5c-.4 1-.6 1.8-.7 3.4 0 1 .5 2 1.2 3 .8 1 1.8 2 3 2.6.8.5 1.6 1.7 2.3 3 .7 1.4 1.2 3 1.2 4 0 3.5.8 6.7 2.4 7.3 1.2.3 1.6.2 2.4 0-.2-.6 0-1.5-.7-2.4a8 8 0 0 1-1.4-3.7c0-1-.5-1.6-.2-3.3.4-1.2 1-1.6 1-2.7-.3-2-2-6-4.3-6s-3.4-.3-4.6-3.4c-.3-1-1-1.6-1.2-2z"></path><path fill="#21231e" d="m368.6 222-1-.2v-1.2l.2-.2v-1h.2v-.7h.2v-.4l1 .3v.4h-.2v1l-.2.2v1.5l-.2.3zm1 2.8-.8.6v-.2h-.2v-.2l-.2-.2v-.2h-.2v-.4h-.2v-.5l-.2-.2v-.7l-.2-.2v-.7h1v1.1h.2v.7h.2v.4h.2v.4h.2v.2h.2v.2zm3 2.4-.6 1v-.2h-.4v-.2h-.2v-.2h-.2l-.2-.2h-.2v-.2h-.3v-.2h-.2l-.2-.2v-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2l-.2-.2-.2-.2.8-.6.2.2.2.2v.2h.2l.2.2v.2h.2l.2.2.2.2h.2v.2h.2v.2h.3l.2.2.2.2h.2v.2zm2.4 3.2-1 .4v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.2v-.2h-.2l-.2-.2h-.2l.5-1h.2v.2h.2v.2h.2v.2l.2.2.2.2v.2h.2v.2h.2v.2l.2.2v.2l.2.2v.2h.2v.3h.2v.3h.2zm1.2 4.2h-1v-.8l-.2-.2v-.8h-.2v-.5h-.2v-.4h-.2v-.5h-.2v-.2l-.2-.2 1-.4v.4h.2v.4h.2v.5l.2.2v.3h.2v.6h.2v1h.2v.7zm-1 0zm3 6.8-.3 1h-.3l-.2-.2-.3-.3v-.2l-.3-.2h-.2l-.2-.3v-.2h-.2v-.3l-.2-.2v-.3l-.2-.2v-.3l-.2-.2v-.5l-.2-.3v-.8l-.2-.3V236l-.2-.3v-1.5h1v2.1l.2.3v1.4l.2.2v.8l.2.2v.2l.2.2v.4l.2.2v.2l.2.2.2.2v.2h.2v.2h.2l.2.2zm1.7.8 1-.3-.5.5h-.4v.2h-1.4l-.2-.2h-.4l.3-1h.7v.2h1.2v-.2l-.3.7zm1-.3v.4h-.5l.4-.5zm-1.7-2 .8-.7h.2v.4h.2v.4h.2v.8l.2.2v1l-1 .4V241l-.2-.2v-.8h-.2v-.2zm-1.5-4h1v.8h.2v.8l.2.2v.2l.2.2v.2h.2v.5h.2v.2h.2v.2l-.7.7v-.2l-.2-.2v-.4h-.2v-.5h-.2v-.2l-.2-.3v-.2l-.2-.2v-.2l-.2-.3v-.4l-.2-.2v-.5zm1 0zm-1.2-3.4 1 .2v3l.2.2-1 .2v-.8l-.2-.2v-2.6zm1-2.5h1v.7h-.2v.6l-.2.2v.2l-.2.2v.2h-.2v.6h-.2v.2l-1-.2v-.4h.2v-.4l.2-.2v-.2l.2-.2v-.2l.2-.2v-.9zm-4-5.5v-1h1.1l.3.2h.2l.2.2h.3l.2.2.2.2v.2l.3.2v.2l.3.2.2.3v.2l.3.3.2.2.2.3v.2l.2.3v.2l.2.3v.3l.2.2v.3l.2.2v.5l.2.3v.8h-1v-1l-.2-.2v-.4l-.2-.3-.2-.4v-.2l-.2-.2v-.3l-.3-.3v-.2l-.2-.2v-.3l-.2-.2-.3-.3-.2-.2-.3-.3-.3-.2-.3-.2h-.8zm-5-3.7 1-.4v.3l.2.3v.2l.2.2v.2l.2.2v.2l.2.2.2.2v.2h.2v.2h.2v.2h.4v.2h.7v.2h1.7v1H373l-.3-.2h-.4v-.2h-.3v-.2h-.3v-.3h-.3v-.2l-.2-.2-.2-.3-.2-.2v-.2l-.2-.2-.2-.4-.2-.2v-.3l-.2-.2zm-.4-2-1-.5h1.2v.4h.2v.2h.2v.2h.2v.4h.2v.2l.2.2v.2l.2.2-1 .4v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2v-.2h-.2v-.2h-.2v-.2h.8zm-1-.5.5-1 .5 1h-1zm.6.2.4.2-.4-.2zm-.5-.2.4-1 .5 1h-1z"></path><path fill="#edb92e" d="m360 227 2-1a6 6 0 0 1 4-.2c5.5 1.7 8 11.6 1.8 14-1.2.2-2.3-1-3.4-3.3a20.5 20.5 0 0 0-4-6.8c-1-1-1-2-.4-2.6z"></path><path fill="#21231e" d="m362 225.5.3 1h-.4v.2h-.4v.2h-.8v.2h-.2l-.2.2-.7-.7.2-.2v-.2h.4v-.2h.8v-.2h.4v-.2h.4zm4-.2-.2 1h-.5v-.2h-2.1v.2h-.7l-.2.2-.5-1h.4l.3-.2h.8v-.2h1.6l.2.2h.4zm2 15-.2-1h-.2l.5-.2h.6l.4-.4.4-.3.3-.4.3-.5.2-.4.2-.3.2-.5v-.5l.2-.5V232l-.3-.4-.2-.5-.2-.5v-.5l-.4-.4-.2-.5-.4-.3-.3-.5-.4-.3-.3-.5-.4-.3-.5-.3-.3-.4-.5-.2h-.4l.2-1h.6l.5.3.7.3.4.4.6.3.5.4.5.6.3.4.4.5.3.5.3.6.3.5.3.7.2.6v.6l.3.5v3.4l-.2.5-.2.6-.3.6-.2.5-.3.5-.4.5-.4.4-.4.3-.6.3-.6.3zm0 0zm-4-3.6 1-.4v.4l.2.2.2.3.2.3v.2h.2v.5h.2v.2l.2.2.2.2h.2v.2h.2l.2.2h.8v1.2h-.8v-.2h-.5l-.2-.2-.2-.2-.2-.2-.2-.2v-.2h-.2l-.2-.2v-.2h-.2v-.3l-.2-.2v-.2h-.2v-.2l-.2-.2v-.2l-.2-.3-.3-.3zm0 0zm-4-6.6.7-.6.2.2v.2h.2l.2.3v.3h.2l.2.3v.2l.2.2h.2v.3l.3.2v.2l.2.2.2.2v.4l.2.2.2.3v.3l.2.2.2.3v.3l.2.3v.3l.3.3.2.4v.3l.3.3v.3l-1 .4v-.6l-.2-.2v-.3l-.3-.2v-.3l-.2-.2v-.5l-.3-.3v-.2l-.2-.2v-.3l-.3-.2-.2-.3v-.2l-.3-.2v-.2h-.2v-.3h-.3v-.3l-.2-.2-.3-.3v-.2l-.2-.2h-.2v-.2l-.2-.2zm0 0zm0-3.4v1l.3-.2v.2h-.2v.8h.2v.4l.2.2.2.2v.2l-.7.7h-.2v-.2l-.2-.2-.2-.2v-.3h-.2V227h.2v-.2h.2l.4-.2zm-.4 0h.4-.4zm.4 1v-1l.3 1h-.3zm.3 0h-.2.3z"></path><path fill="#edb92e" d="M362.8 227.7c5.4-2 9.4 8.3 4.3 10.2-2.6 1-2.8-2.4-3.4-4.3-.7-2.5-6-4-.8-6z"></path><path fill="#21231e" d="m367.3 238.4-.4-1h.3l.3-.3.3-.2.2-.3.2-.3.2-.3v-.5l.2-.4v-2.7l-.2-.4-.2-.5-.2-.4-.2-.4-.3-.4-.3-.4-.2-.3-.4-.4-.3-.2-.3-.2-.4-.2-.4-.2h-.4l-.3-.2h-1.3l-.4.2-.4-1h.6l.5-.2h1.6l.5.3.5.2.4.2.4.4.5.4.4.4.3.4.3.5.2.4.3.6.3.5.2.6.2.6v.5l.2.5v1.6l-.2.5v.5l-.3.5-.2.4-.3.5-.4.3-.4.4-.4.2-.5.2zM363 234l1-.4.2.2v.6l.2.2v.8l.2.2v.4l.2.2v.2l.2.3.2.3v.2h.2v.2h.2l.2.2h1.2l.3.8h-.3l-.3.2h-1.2l-.2-.2h-.2v-.2l-.3-.2-.3-.3v-.2l-.2-.2v-.2h-.2v-.3l-.2-.2v-.4h-.2v-.8l-.2-.2v-.8l-.2-.2v-.2zm-.4-6.7.4 1h-.5l-.3.3h-.4l-.2.3h-.2l-.2.2v.2h-.2v.4h.2v.3l.2.2v.2h.3v.3l.3.2h.2l.2.2.2.2.2.2.2.2.2.3.2.3.2.2v.3l.3.2v.6l-1 .3v-.7l-.2-.2h-.2v-.3l-.3-.2h-.2v-.3l-.3-.2-.2-.2-.2-.2-.2-.2v-.2l-.2-.2h-.2v-.3l-.3-.3v-.2l-.2-.2v-.8l.2-.3v-.3l.3-.2.2-.2.3-.3.3-.2h.4l.4-.3.6-.2z"></path><path fill="#0c4076" d="M363.4 229.3c2.6-1 6.2 5 3 6.5-2.3 1-4-.3-4.8-2-.7-2 0-3.8 1.7-4.5z"></path><path fill="#21231e" d="m366.5 236.3-.4-1h.3l.2-.2h.2v-.2l.2-.2v-2l-.2-.3v-.3h-.2v-.4l-.3-.3-.2-.2-.3-.4-.2-.2-.2-.2h-.2v-.2l-.3-.2h-1.1l-.3-1h1.5l.4.3.3.2.2.3.2.2.3.2.2.2.2.3v.3l.3.3.2.4.2.3v.4l.2.4v2.6l-.2.3-.2.4-.2.3-.2.2h-.4l-.3.3zm-5.4-2.5 1-.3.2.3.2.3v.2l.2.3.2.2.2.2h.3v.2h.2l.3.2h.4v.2h1.3l.3-.2.5 1h-.7l-.2.2h-1.9l-.2-.2h-.2v-.2h-.3l-.2-.2-.3-.2-.3-.3-.3-.3h-.2v-.3l-.2-.3-.2-.3v-.2l-.2-.2v-.2zm2.2-5 .3 1h-.3l-.2.2-.2.2-.2.2-.2.2-.2.2v.2h-.2v.7l-.2.2v1.1l.2.2v.3l-1 .3v-.7l-.2-.3v-1.5l.2-.2v-.3l.2-.2.2-.3.2-.3v-.2l.3-.2v-.2h.3l.2-.2.3-.2h.2l.2-.2zm.2.5-.2-.5.2.5z"></path><path fill="#fff" d="M400 179.7c3.6 0 6.4 2.8 6.4 6.4 0 3.6-2.8 6.5-6.3 6.5s-6.3-3-6.3-6.4 3-6.3 6.4-6.3z"></path><path fill="#21231e" d="M407 186h-1c0-2-1.4-4.3-3.3-5.2a5.8 5.8 0 0 0-2.6-.6v-1c2.4 0 4.7 1.2 6 3.2a7 7 0 0 1 1 3.7zm-7 7v-1a6 6 0 0 0 5.3-3.3 6 6 0 0 0 .6-2.6h1c0 2.4-1.3 4.7-3.3 6a6.8 6.8 0 0 1-3.6 1zm-6.8-7h1a6 6 0 0 0 3.3 5.4 5.8 5.8 0 0 0 2.6.6v1a6.8 6.8 0 0 1-5.7-3.3 7 7 0 0 1-1-3.6zm7-7v1.2a5.9 5.9 0 0 0-5.3 3.2 6 6 0 0 0-.8 2.7h-1a7 7 0 0 1 3.3-5.8 6.8 6.8 0 0 1 3.6-1z"></path><path fill="#fff" d="M395.4 169c3.5 0 6.4 3 6.4 6.4 0 3.6-3 6.4-6.4 6.4s-6.3-2.8-6.3-6.4c0-3.5 3-6.4 6.4-6.4z"></path><path fill="#21231e" d="M402.3 175.4h-1c0-2.2-1.3-4.3-3.2-5.3a5.8 5.8 0 0 0-2.6-.5v-1c2.4 0 4.6 1.3 6 3.2a7 7 0 0 1 1 3.7zm-7 7v-1c2.3 0 4.4-1.4 5.4-3.3a6 6 0 0 0 .6-2.6h1c0 2.4-1.2 4.7-3.2 6a6.8 6.8 0 0 1-3.6 1zm-6.7-7h1a6 6 0 0 0 3.2 5.3c.8.4 1.7.6 2.6.6v1a6.8 6.8 0 0 1-5.8-3.2 7 7 0 0 1-1-3.6zm6.8-7v1c-2 0-4.2 1.4-5.2 3.3a6 6 0 0 0-.6 2.7h-1c0-2.3 1.2-4.6 3.2-6a7 7 0 0 1 3.6-1z"></path><path fill="#fff" d="M410.7 131.5c3.4 0 6 2.7 6 6s-2.6 6.3-6 6.3-6.2-2.7-6.2-6.2a6 6 0 0 1 6.2-6z"></path><path fill="#21231e" d="M417.3 137.7h-1c0-2.2-1.2-4.2-3-5a5.6 5.6 0 0 0-2.6-.7v-1a7 7 0 0 1 5.6 3 6.7 6.7 0 0 1 1 3.7zm-6.6 6.6v-1c2 0 4-1.2 5-3 .4-1 .6-1.8.6-2.6h1c0 2.2-1.2 4.5-3 5.6a6.6 6.6 0 0 1-3.6 1zm-6.7-6.7h1c0 2.2 1.3 4.2 3.2 5a5.6 5.6 0 0 0 2.5.7v1a6.6 6.6 0 0 1-5.6-3 6.7 6.7 0 0 1-1-3.6zm6.7-6.6v1c-2 0-4 1.2-5 3a5.7 5.7 0 0 0-.7 2.6h-1a7 7 0 0 1 3-5.6 6.6 6.6 0 0 1 3.7-1z"></path><path fill="#fff" d="M400.4 136.2c3.5 0 6.3 3 6.3 6.4 0 3.5-2.8 6.4-6.3 6.4s-6.4-3-6.4-6.4c0-3.5 2.8-6.4 6.4-6.4z"></path><path fill="#21231e" d="M407.2 142.6h-1a6 6 0 0 0-3.3-5.3 5.8 5.8 0 0 0-2.6-.6v-1c2.3 0 4.6 1.2 5.8 3.2a7 7 0 0 1 1 3.6zm-6.8 7v-1c2 0 4.2-1.4 5.2-3.3a6 6 0 0 0 .6-2.7h1c0 2.3-1.2 4.7-3.2 6a6.8 6.8 0 0 1-3.6 1zm-7-7h1c0 2.2 1.4 4.3 3.3 5.3a5.8 5.8 0 0 0 2.7.5v1a7.2 7.2 0 0 1-6-3.2 7 7 0 0 1-1-3.7zm7-7v1a6.2 6.2 0 0 0-5.3 3.3 6 6 0 0 0-.5 2.6h-1c0-2.4 1.2-4.7 3.2-6a6.8 6.8 0 0 1 3.7-1z"></path><path fill="#fff" d="M392.8 145.3c3.5 0 6.3 2.8 6.3 6.4 0 3.5-2.7 6.4-6.2 6.4s-6.4-2.8-6.4-6.3c0-3.6 3-6.4 6.4-6.4z"></path><path fill="#21231e" d="M399.6 151.7h-1a6 6 0 0 0-3.2-5.3 5.8 5.8 0 0 0-2.6-.6v-1c2.3 0 4.6 1.2 5.8 3.2a7 7 0 0 1 1 3.7zm-6.8 7v-1c2 0 4.2-1.4 5.2-3.4a6 6 0 0 0 .6-2.6h1c0 2.3-1.2 4.6-3.2 6a6.8 6.8 0 0 1-3.6 1zm-7-7h1c0 2 1.4 4.3 3.3 5.2a5.8 5.8 0 0 0 2.8.6v1a7.4 7.4 0 0 1-6-3.3 7 7 0 0 1-1-3.6zm7-7v1a6 6 0 0 0-5.3 3.3 6 6 0 0 0-.6 2.7h-1c0-2.4 1-4.7 3.2-6a7 7 0 0 1 3.6-1z"></path><path fill="#fff" d="M391.5 156.7c3.6 0 6.4 2.8 6.4 6.4s-3 6.5-6.5 6.5-6.3-3-6.3-6.4 2.8-6.3 6.3-6.3z"></path><path fill="#21231e" d="M398.4 163h-1c0-2-1.3-4.2-3.2-5.2a5.8 5.8 0 0 0-2.7-.6v-1c2.4 0 4.7 1.2 6 3.2a7 7 0 0 1 1 3.7zm-7 7v-1a6 6 0 0 0 5.4-3.3 6 6 0 0 0 .6-2.6h1c0 2.5-1.3 5-3.4 6a6.8 6.8 0 0 1-3.5 1zm-6.7-7h1c0 2.3 1.3 4.4 3.2 5.4.7.4 1.6.6 2.5.6v1a7 7 0 0 1-5.8-3.2 7 7 0 0 1-1-3.7zm6.8-6.8v1c-2 0-4.2 1.3-5.2 3.2a6 6 0 0 0-.6 2.7h-1c0-2.3 1.2-4.6 3.2-5.8a7 7 0 0 1 3.5-1z"></path><path fill="#edb92e" d="M474.4 198c-2.7-5-5.6-8.2-8.6-9.6 4.2-13.2 5.2-30.2 2.7-51-.2-3.3-1-4.6-2.2-4.6-1 0-1.7 1.6-1.8 5.2.8 11.6 1.7 21.6 1.2 30.2-.5 7.6-2.3 14-4.2 21.2-.3 1 .4 1.7 3.8 3.7 2.6 1.5 4.2 3.3 4.7 5 .7-.2 1.2 0 1.5 0 2.5.8 3.6.6 3 0z"></path><path fill="#21231e" d="m465.3 188.2 1 .3-.3-.6h.3l.3.2.3.2.2.2h.3l.3.3h.3l.4.4.2.2.3.2.2.3.3.3.3.3.3.3.3.2.3.3.3.3.2.3.2.5.3.3.3.4.2.3.3.4.3.3.2.4.3.4.3.5.2.5.3.4.3.4.3.5.3.5-1 .5-.3-.5-.2-.4-.3-.5-.2-.5-.3-.4-.3-.3-.2-.4-.3-.4-.3-.5-.3-.4-.2-.2-.3-.4-.4-.3-.2-.2-.3-.3v-.3l-.4-.3-.3-.4-.2-.3-.2-.2-.3-.2-.2-.2-.3-.2-.3-.2-.2-.2-.3-.2-.3-.2-.3-.2h-.3l-.3-.3-.4-.2-.3-.6zm.3.6h-.4v-.6l.4.6zm2.4-51.5h1l.2 2 .2 1.8.2 2 .2 2v1.8l.2 1.8v1.8l.2 1.8v15l-.3 1.5-.2 1.5v1.5l-.3 1.5-.2 1.5-.2 1.4-.2 1.5-.2 1.3-.3 1.4-.3 1.3-.3 1.4-.3 1.3-.4 1.3-.3 1.3-.4 1.2-1-.3.4-1.2.4-1.3.4-1.3.3-1.3.3-1.2.3-1.3.3-1.4.2-1.3.3-1.4.3-1.5.2-1.4V172l.3-1.6V169l.2-1.7v-1.6l.2-1.6v-13.6l-.2-1.8v-2l-.2-1.7-.2-2-.2-1.8-.2-2-.2-2zm0 0zm-1.7-4v-1h.6v.2h.3v.2h.2l.2.3h.2v.5h.2v.3l.2.2v.3l.2.2v.4l.2.4v.9l.2.3v.4h-1v-.9l-.2-.2v-.6l-.2-.2v-.5h-.2v-.5h-.2v-.2l-.2-.2h-.2v-.2h-.4zM465 138h-1v-1.7l.2-.3v-1l.2-.3v-.7h.2v-.3l.2-.3v-.3h.2l.2-.2.3-.2.2-.2h.5v1h-.2v.2h-.2v.2l-.2.2v.3l-.2.3v.6l-.2.2v1.6l-.2.4v.7zm-1 0zm2.2 30.2h-1V154l-.2-1v-2.8l-.2-1v-2l-.2-1v-1l-.2-1v-2l-.2-1V139l-.2-1 1-.2v1l.2 1.2v2l.2 1v2.2l.2 1v2l.2 1v2l.2 1v2.8l.2 1v12zm-4.3 21.3-1-.3.2-.6v-.7l.3-.8.2-.6.2-.7v-.7l.2-.7.2-.6.2-.7v-.6l.3-.6v-.6l.2-.6.2-.7v-.5l.2-.6.2-.8v-.6l.2-.7.2-.7v-.7l.2-.6v-.7l.2-.6v-.7l.2-.7v-.7l.2-.6V169l.2-.8h1v1.5l-.2.7v1.5l-.2.6v.7l-.2.8v.7l-.2.6v.8l-.2.7-.2.6v.8l-.2.6-.2.7v.7l-.3.7v.6l-.3.7v.6l-.3.6-.2.6v.6l-.3.7-.2.5-.2.7v.6l-.3.7-.2.7-.2.6v.7zm3.6 3-.5 1-.2-.2h-.3l-.3-.3-.3-.2h-.4l-.2-.3h-.2l-.3-.3h-.3v-.2l-.3-.2h-.2l-.2-.2-.2-.3h-.2v-.2h-.2l-.2-.2v-.2l-.2-.2v-1l1 .2v.5h.2v.2l.2.2h.2v.2h.2l.2.2.3.3h.2l.2.2.2.2h.2l.2.3h.3l.3.3.3.2h.3zm0 0zm4.2 5.2.4 1-.7-.4v-.2l-.2-.2v-.3l-.2-.2v-.3l-.2-.3-.3-.3-.2-.3-.3-.2-.3-.3v-.2h-.3v-.2h-.3v-.2l-.3-.2h-.2v-.3h-.3l-.2-.2h-.3l-.2-.2-.2-.2h-.2l.6-1 .2.2h.2l.3.3.2.2.2.2h.2v.3h.4l.2.3.3.3.3.3.2.2.3.3v.3l.3.2h.2v.3l.3.2v.2h.2v.3l.2.2v.2l.2.3v.3l.2.2v.2l-.6-.3zm.4 1h-.5l-.2-.4.7.3zm1.4-1.2-.3 1h-1l-.4-.8h.2l.2-.2h1.4zm3.3.5h-1l.7-.4.2.2v.8l-.2.2h-.2v.2h-1.8l-.2-.2h-.3l-.2-.2h-.5l.3-1h.7l.2.2h1v.2h.7v.4l.7-.4zm-1 0v-1l.7.6-.8.4zm0 0h1l-1 .3v-.3z"></path><path fill="#edb92e" d="M458.4 214.6c1.6-1 2-.8 2.4-1.4.6-.8.6-2.2.4-3.5-.8-5.3 2.4-4.6 6-2.2 1.7 1 3.5 4 5 5.3s2.8 1.5 3.2 2v9.2c-.4.6-1.7.7-3.2 2-1.5 1.5-3.3 4.2-5 5.4-3.6 2.3-6.8 3-6-2.2.2-1.3.2-2.7-.4-3.5-.5-.7-.8-.4-2.4-1.4a7 7 0 0 1-2.3-2.2c-.4-.8 0-1.7 0-2.6 0-1-.4-1.8 0-2.6.6-.8 1.4-1.6 2.4-2.2z"></path><path fill="#21231e" d="m460.4 213 .8.5-.2.2-.2.2h-.4v.2h-.4l-.2.2h-.2l-.2.2h-.2v.2h-.5v.2l-.7-1h.6v-.2h.2l.2-.2h.2l.2-.2h.4v-.2h.4v-.2h.2zm.3-3.2 1-.2v2.9l-.2.3v.2h-.2v.2l-1-.5v-.2h.2v-.4h.2v-2.6zm6.7-2.8-.6 1-.3-.3-.3-.2-.3-.2-.4-.2h-.3l-.3-.2h-.3l-.3-.2h-.3v-.2h-.4l-.2-.2h-1.1v.2h-.2v.2l-.2.2v.6l-.2.3v2l-1 .2v-3l.2-.4v-.3l.3-.2.3-.2.2-.2h.2l.2-.2h.2l.2-.2h1.5v.2h.5l.3.2h.3l.4.3h.3l.3.2.4.2.3.2.3.2.4.2zm5 5.4-.6.7-.3-.2-.3-.3-.3-.3-.2-.2-.2-.2-.3-.3-.2-.2v-.2h-.2v-.3l-.3-.2-.3-.3-.2-.2v-.2l-.3-.2v-.2h-.3l-.2-.3-.3-.2-.2-.2h-.2l-.2-.2v-.2h-.3v-.2h-.2l.6-1 .2.2.3.2v.2h.3v.3h.3l.2.2.2.2v.2l.3.2h.2v.3l.3.3.2.2v.2l.3.2.3.3h.2v.3l.3.2.2.2.2.2.3.3v.2h.3v.3h.3v.3h.2zm3.5 2.4h-1.2v.3h-.2l-.2-.2h-.2v-.2h-.4l-.2-.2h-.2v-.2h-.3v-.2h-.3v-.2l-.3-.2-.3-.2-.2-.3.7-.6h.2v.2h.2v.2h.2v.2h.2v.2h.3l.2.2.2.2h.2l.2.2h.2l.2.2h.2v.2h.4v.2l.2.2v.2zm-.2-.2v.2-.2zm0 4.8h-1v-4.5l1-.2v4.5zm-1 0zm0 0h1-1zm0 0zm1 5-1-.7v.3-4.4h1v4.7zm0-.4v.2-.2zm-3.3 2.5-.7-.8h.2v-.2l.3-.2.3-.2h.3v-.2h.3v-.2h.2l.2-.2h.2v-.2h.4v-.2h.4v-.2l1 .5-.2.2-.2.2h-.2v.2h-.4l-.2.2h-.2v.2h-.4v.2h-.3v.2h-.2l-.2.2-.2.2v.2h-.3zm-5 5.3-.7-.8h.2v-.2l.3-.2.3-.2.2-.2.3-.3.2-.2.2-.2.2-.2v-.2h.3v-.3l.2-.3.2-.2v-.2l.3-.2.3-.2v-.2l.3-.2.2-.2v-.2h.3v-.3l.3-.2.2-.2h.2v-.3h.3v-.3l.8.8-.2.2-.2.2-.2.2v.2h-.3v.3l-.3.2-.3.2-.2.2-.2.2-.2.2v.2l-.3.2v.2l-.2.2h-.2v.3h-.3l-.2.3v.2h-.2l-.2.3-.2.2-.3.3-.3.3-.3.2zm-6.8-2.7 1 .3v2.6l.2.2v.2h.2v.2h1.7v-.2h.4l.3-.2h.3l.3-.3.3-.3h.3l.2-.3.3-.2.3-.2.6.8-.4.2-.3.3-.3.2h-.4l-.3.3-.3.2h-.3l-.2.3h-.4l-.3.2h-.4l-.3.2h-.9l-.3-.2h-.3l-.2-.3-.2-.2-.2-.2v-.3l-.2-.2v-.7l-.2-.3V229zm-.3-3 .8-.6v.2h.2v.4h.2v.6l.2.2v2.4l-1-.2v-2.5h-.2v-.4h-.2v-.2zm-2.3-1.3.7-.8h.2l.2.2h.2l.2.2h.2l.2.2h.4v.2h.2v.2h.2l.2.2.2.2-.8.6-.2-.2h-.2v-.2h-.4l-.2-.2h-.4v-.2h-.2l-.2-.2h-.2v-.2h-.3zm.7-.8.5.2-.5-.3zm-3-1.7.8-.5.2.2v.2h.2v.4h.2v.2h.2v.2h.2v.2h.2l.2.2.2.2h.2v.2h.2l-.5 1v-.2h-.2l-.2-.2-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2l-.2-.2-.2-.2v-.2zm-.3-3h1v2.4l-.7.5v-.2h-.2v-.4l-.2-.2v-2.1zm.3-2.8.8.6v.4l-.2.2v1.8h-1V217h.2v-.4h.2zm2.4-2.4.7 1h-.2v.2h-.2l-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2v.2h-.2v.2h-.2v.2l-1-.5h.2v-.2l.2-.2.2-.2v-.2h.2l.2-.2v-.2h.2v-.2h.2l.2-.2h.2v-.2l.2-.2h.2v-.2h.2zm.7 1 .5-.3-.5.3z"></path><path fill="#21231e" d="M475.5 220.2v1c-4 .4-7 2-9.7 4.3 1.8-2.7 5.7-4.7 9.7-5.3zm0-1.6v-.8c-4-.5-7-2-9.7-4.4 1.8 2.7 5.7 4.6 9.7 5.2z"></path><path fill="#edb92e" d="M461.2 207.3c1 .4 2.3 1 3.4 2 1.6 1.5.6 4-1.5 6.6-.6.7-1 2-1 3.5 0 1.3.5 2.7 1 3.5 2.2 2.5 3.2 5 1.6 6.6-1 1-2.3 1.5-3.4 2v-2.4c.2-1.3.2-2.7-.4-3.5-.5-.7-.8-.4-2.4-1.4a7 7 0 0 1-2.3-2.2c-.4-.8 0-1.7 0-2.6 0-1-.4-1.8 0-2.6.6-.8 1.4-1.6 2.4-2.2 1.6-1 2-.8 2.4-1.4.6-.8.6-2.2.4-3.5v-2.4z"></path><path fill="#21231e" d="m465 209-.8.6-.2-.2-.2-.2h-.2v-.2h-.2l-.2-.2h-.2v-.2h-.4v-.2h-.5v-.2h-.2l-.2-.2h-.2l-.2-.2h-.2l.4-1h.2l.2.2h.2l.2.2h.3l.2.2h.2v.2h.3l.2.2h.2v.2h.3v.2h.2l.2.2.2.2.2.2zm-1.5 7.2-.8-.6.2-.3v-.2h.2l.2-.3.2-.3v-.2l.3-.2v-.5l.2-.2v-.2h.2v-.3l.2-.2v-.4h.2v-1.6l-.2-.3-.2-.2-.2-.2.7-.7.3.3v.2l.2.2v.2h.2v.5l.2.2v1l-.2.2v.4l-.2.2v.5l-.2.3v.3l-.3.2v.5l-.3.2v.3l-.3.2-.2.3v.2l-.3.2-.3.3-.2.2zm-1 3.3h-1v-.7l.2-.2v-1.2h.2v-1h.2v-.4l.2-.2v-.2h.2v-.2l1 .6h-.2v.4h-.2v.2l-.2.2v.9h-.2v1.4h-.2v.5zm1 3.2-.8.6v-.2h-.2v-.2h-.2v-.4h-.2v-1.1l-.2-.3V220h-.2v-.5h1v1.1l.2.2v.4l.2.2v.4l.2.2v.2h.2v.2zm1.5 7.3-.8-.8h.2v-.2h.2v-.3l.2-.2v-1.9l-.2-.2v-.2l-.2-.2v-.2l-.2-.3v-.2l-.2-.2-.3-.3v-.3l-.3-.2-.2-.2v-.2l-.3-.3-.3-.2.8-.6.2.2h.2v.4l.2.2.2.3h.2v.3l.3.3v.5l.3.3v.3l.2.2v.5l.2.2v.5l.2.2v.7l-.2.4v.4l-.2.2v.2l-.2.2v.2l-.3.2v.2zm-4.3 1.7 1-.2-.7-.4h.7v-.2h.4l.2-.2h.2l.2-.2h.2v-.2h.4v-.2h.2l.2-.2.2-.2h.2v-.2h.2v-.2l.8.8h-.2v.2h-.2v.2h-.2l-.2.2-.2.2h-.2l-.2.2h-.2v.2h-.4v.2h-.4v.2h-.5v.2h-.2l-.2.2h-.2l-.7-.3zm.7.4-.6.3v-.6l.6.4zm-.7-3 1 .3v2l-1 .3v-2.4zm-.3-3 .8-.6v.2h.2v.4h.2v.6l.2.2v2.4l-1-.2v-2.4h-.2v-.4h-.2v-.2zm-2.3-1.3.7-.8h.2l.2.2h.2l.2.2h.2l.2.2h.4v.2h.2l.2.2.2.2.2.2-.8.6-.2-.2h-.2v-.2h-.4l-.2-.2h-.4v-.2h-.2l-.2-.2h-.2v-.2h-.3zm0 0-.3-.2.4.2zm-2.3-2.4.8-.5.2.2v.2h.2v.4h.2v.2h.2v.2h.2v.2h.2l.2.2h.2v.2h.2v.2h.2l-.5 1v-.2h-.2l-.2-.2-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2l-.2-.2-.2-.2v-.2zm0 0 .3.5-.3-.5zm-.3-3h1v2.4l-.7.5v-.2h-.2v-.4l-.2-.2v-2.2zm.3-2.8.8.6v.4l-.2.2v1.8h-1V217h.2v-.4h.2zm2.4-2.4.7 1h-.2v.2h-.2l-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2v.2h-.2v.2h-.2v.2l-1-.5h.2v-.2l.2-.2.2-.2v-.2h.2l.2-.2v-.2h.2v-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2h.2zm2.4-1 .8.5-.2.2-.2.2h-.4v.2h-.4l-.2.2h-.2l-.2.2h-.2v.2h-.5v.2l-.7-1h.6v-.2h.2l.2-.2h.2l.2-.2h.4v-.2h.4v-.2h.2zm.3-3.2 1-.2v2.9l-.2.2v.2h-.2v.2l-1-.5v-.2h.2v-.4h.2V210zm.5-2v-1l.5.6v2.1l-1 .2V207l.5.6zm0-1h.6v.6l-.6-.6zm0 0v1h-.2l.2-1zM361 226.3l.7-.3c-1.6-2.2-2-4.2-1.3-6.3-1.3 1.6-1 4.2.6 6.6z"></path><path fill="#edb92e" d="M410.7 200c1.4 1.6 1.2 2 2 2.5 1 .6 2 .4 3.3 0 5-2 5 2 3.5 6.4-.7 2-2.8 4.3-3.7 6.2-1 1.7-.7 3-1 3.5a95.4 95.4 0 0 1-4 .6l-4 .5c-.6-.3-1-1.6-2.6-3s-4.4-3-6-4.6c-3-3.5-4.6-6.8.2-6.7 1.2 0 2.4-.2 3-1 .4-.7 0-1 .4-3 .3-1.2.8-2.3 1.4-3 .6-.8 1.5-.6 2.3-.7 1-.2 1.6-.7 2.5-.2 1 .4 2 1.2 2.7 2.3z"></path><path fill="#21231e" d="m413 202-.6 1-.2-.2-.2-.2-.2-.2v-.2h-.2v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.3-.3-.3.8-.6.3.2.2.3v.2h.2v.4h.2v.4h.2v.2l.2.2v.2h.2v.2l.2.2zm-.6 1zm3.5-1 .2 1h-.5l-.2.2h-.8v.2h-1.2l-.3-.2h-.2l-.2-.2h-.2l.5-1v.2h.8v.2h1l.2-.2h.4l.2-.2h.3zm4 7-1-.3v-.4l.2-.4v-.5l.2-.4v-.3l.2-.3v-.7l.2-.4v-1.7l-.2-.2v-.4h-.2l-.2-.3h-.2l-.3-.2H417l-.4.3h-.4l-.3-.8.3-.2h.5l.4-.2h1.8l.3.2h.3l.2.3.2.4v.2l.3.3.2.4v3.3l-.2.4v.4l-.2.4v.4l-.2.4v.4zm-3.7 6.4-1-.5v-.2l.2-.2.2-.2v-.2l.2-.2v-.4l.2-.2.2-.2v-.2l.2-.2.2-.2.2-.3.2-.2.2-.3.2-.2v-.2l.2-.2h.2v-.3l.2-.2v-.2l.2-.2.2-.3v-.2l.2-.2v-.2l.2-.3 1 .3v.2l-.2.3v.2l-.2.2-.2.3v.2l-.2.2v.3l-.3.2-.2.2v.2l-.2.2-.2.2v.2l-.2.2-.2.2v.2l-.3.2v.2l-.2.2-.2.2v.2l-.2.2v.4h-.3v.3l-.2.2-.2.2v.2zm-1.5 3.8-.2-1-.3.2v-.4h.2v-1l.2-.2v-.4l.2-.3v-.4l.2-.3v-.2h.2l1 .4-.2.2-.2.3v.3h-.2v.7h-.2v.9l-.2.2v.4l-.2.2v.2l-.4.2zm.3 0h-.2.3zm-4.3.6v-1h1.1v-.2h1.2v-.2h1.1l.3-.2.2 1h-.4l-.3.2h-.9l-.2.2h-1.3v.2h-.7zm0 0zm0 0v-1 .5-.5 1-.5.5zm0-1zm-4 1.5.4-1h-.2 1.3l.3-.2h1.9l.2-.2.2 1h-.8v.2h-1.4v.2h-2zm.2 0h-.3.2zm-3-3 .5-1 .2.3.3.3h.2l.2.3.2.2.2.3.2.2v.2h.2v.2h.2v.2l.2.2v.2h.2v.2h.2v.2l-.4 1v-.2h-.2l-.2-.2-.2-.2v-.2h-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.2-.2-.2-.2-.3v-.2h-.2v-.2h-.3v-.3zm-6-4.8.7-.6.2.2.3.3.3.3h.2v.3l.3.2h.3l.2.3h.2l.2.3.3.3.2.2.2.2h.2v.2l.3.2h.2l.2.3.2.2.3.3h.2l.2.3.3.2.2.2h.2v.2l-.5.8h-.3v-.2l-.3-.2h-.2v-.2l-.3-.2h-.3l-.2-.2-.2-.2h-.2v-.2l-.3-.2h-.2l-.2-.3h-.2v-.2h-.3l-.2-.2-.2-.2h-.2v-.3h-.3l-.2-.3-.2-.2h-.2v-.3h-.3v-.3l-.3-.2h-.2v-.3l-.3-.2zm.4-7.5v1H397l-.2.2h-.4l-.2.2v.2h-.2v1.5l.2.3v.3l.2.2.2.3.2.4.2.3.2.3.2.3.2.3.3.3v.2l.4.3.3.4-.8.5-.4-.3-.3-.3-.2-.4-.2-.4-.2-.3-.3-.4-.2-.3v-.4l-.3-.4v-.3l-.3-.3v-.3l-.3-.3V206l.2-.2.2-.2.2-.2.3-.2h.2l.3-.2h.7l.4-.2h.8zm2.5-.8.8.5-.2.2-.2.2h-.2v.2h-.2l-.2.2h-.2l-.2.2h-.5l-.2.2h-1.1v-1h1.4l.2-.2h.2l.2-.2h.2v-.2h.2v-.2zm0 0zm.4-2.8 1 .2v.4h-.2v2h-.2v.4l-.2.2-1-.4h.2v-1.4l.2-.3v-.8l.2-.2zm1.4-3.2.8.6-.2.2v.2h-.2v.4h-.2v.4h-.2v.4l-.2.2v.4l-.2.2v.4l-1-.2v-.7l.2-.2v-.4l.2-.2v-.4h.2v-.4h.2v-.4h.2v-.2h.2v-.4h.2zm.8.6.5-.7-.4.8zm1.8-1.5.2 1H404v.2h-.4v.2h-.2l-.8-.5.2-.2.2-.2h.2v-.2h.4l.2-.2h1.4zm.2 1h-.7.6zm2.7-1.2-.5 1H406l-.2.2h-.4l-.2-1h.8l.2-.2h2.1zm3 3h-1v.2-.2h-.2v-.2l-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2l-.2-.2-.2-.2h-.2l-.2-.2.5-1v.2h.2l.2.2h.2v.2h.2v.2h.2l.2.2.2.2.2.2h.2v.2h.2v.2l.2.2.2.2.2.2v.2l.3.3zm-.2-.4h.2v.3-.4zm-.8.3h1l-1 .2v-.3zm0 .2v-.3.2z"></path><path fill="#21231e" d="M410 219.4h-.7c-1.4-3.8-3.5-7-6.3-9.5 2.8 1.4 5.5 5.3 7 9.4zm1.4-.2c.3 0 .5 0 .8-.2-.5-4 0-7.5 1.5-11-2 2.5-2.8 7-2.3 11.2z"></path><path fill="#edb92e" d="M418.3 202c-.2 1.4-.4 3-1 4.3-1 2-3.8 1.3-6.6-.7-.8-.6-2.2-.8-3.4-.6-1.3.3-2.4.8-3 1.7-1.5 2.6-3.4 4-5.2 2.6-1-1-2-2.3-2.7-3.5.5-.2 1.2-.3 2-.3 1.3 0 2.5-.2 3-1 .5-.7 0-1 .6-3 0-1.2.6-2.3 1.2-3 .6-.8 1.5-.6 2.3-.7 1-.2 1.6-.7 2.5-.2 1 .4 2 1.2 2.7 2.3 1.4 1.6 1.2 2 2 2.5 1 .6 2.2.4 3.3 0 1-.4 1.7-.6 2.3-.5z"></path><path fill="#21231e" d="m417.7 206.5-1-.4.2-.2v-.5l.2-.2v-.4l.2-.2v-.9l.2-.2v-1.2h.2v-.4h1v1.1l-.2.3v1h-.2v.7h-.2v.7h-.2v.3l-.2.3v.2zm-7.2-.5.5-.8.3.2h.2l.3.3h.2l.3.3h.2l.3.2.2.2h.2l.3.2h.4v.2h.7l.2.2h1v-.2h.2l.2-.2.2-.3.2-.2 1 .5-.2.2-.2.3-.3.3v.2h-.2l-.2.2h-.2l-.3.2h-2l-.2-.2h-.2l-.3-.2h-.2l-.2-.2h-.2l-.3-.2-.2-.2h-.2l-.3-.3-.2-.2h-.3l-.3-.3-.2-.2zm-3-.4-.3-1h1.1v-.2h1.3v.2h.6v.2h.4v.2h.2l.2.2-.5.8h-.2v-.2h-.4v-.2h-2.4zm-2.7 1.3-.8-.6v-.2h.2v-.2h.2v-.2l.2-.2h.2v-.2h.2l.2-.2h.2l.2-.2h.3v-.2h.8l.2-.2h.5l.2 1h-.7v.2h-.4v.2h-.4l-.2.2h-.2v.2h-.2v.2h-.2v.2h-.2zm-6 2.7.6-.8h.3v.2h.5l.2.2h.5l.3-.2h.3v-.2h.3v-.2h.2v-.3h.3v-.3h.3v-.3l.3-.3.2-.2.2-.2v-.2h.3v-.4l.3-.2.8.5v.2l-.3.2v.3l-.3.2h-.2v.3l-.3.2-.2.2-.2.2-.3.3h-.2l-.2.3h-.2v.3h-.3l-.3.2h-.4l-.3.2h-1.2l-.2-.2h-.2l-.2-.2-.2-.2h-.2zm-2.7-4.4.5 1 .3-.8v.3h.2v.2l.2.2v.2h.2v.2l.2.2v.2h.2v.2l.2.2.2.2.2.2v.2h.2v.2h.2v.2h.2v.2h.2v.2h.2l-.6 1-.2-.2-.2-.2-.2-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.3h-.2v-.2h-.2v-.2h-.2v-.3h-.2v-.2h-.2v-.4h-.2v-.2h-.2V205zm0 .8-.4-.4.5-.3v.8zm2.4-1v1H397v.2h-.4l-.5-1h1.2v-.2h1.2zm2.5-.8.8.5-.2.2-.2.2h-.2v.2h-.2l-.2.2h-.2l-.2.2h-.7l-.2.2h-1.2v-1h1.4l.2-.2h.4v-.2h.2v-.2h.2v-.2zm0 0zm.4-2.8 1 .3v.3l-.2.3v1.7h-.2v.7h-.2l-1-.4h.2v-1.4h.2v-1.3l.2-.2zm1.4-3.2.8.6-.2.2v.2h-.2v.4h-.2v.4h-.2v.4l-.2.2v.7h-.2v.5l-1-.3v-.7l.2-.2v-.4l.2-.2v-.4h.2v-.4h.2v-.4h.2v-.2h.2v-.4h.2zm0 0 .4-.5-.4.5zm2.6-1 .2 1h-.6v.2h-1v.2h-.2l-.2.2-.8-.6.2-.2.2-.2h.2v-.2h.4l.2-.2h1.4zm0 0h.6-.6zm3 0-.6.8H406v.2h-.5l-.2-1h.8v-.2h2.1zm-.6.8.3.2-.2-.2zm3.3 1.6-.6.6-.2-.2h-.2v-.2l-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2l-.2-.2h-.2v-.2h-.2l-.2-.2.5-1v.2h.2l.2.2h.2v.2h.2v.2h.2l.2.2.2.2.2.2h.2v.2h.2v.2l.2.2.2.2.2.2v.2zm2 2.5-.6 1-.2-.2-.2-.2-.2-.2v-.2h-.2v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.3-.2-.3.7-.6.3.2.2.3v.2h.2v.2l.2.2v.4h.2v.2l.2.2v.2h.2v.2l.2.2zm-.6 1-.2-.2h.2zm3.5-1 .2 1h-.5l-.2.2h-.8v.2h-1.3l-.2-.2h-.2l-.2-.2h-.2l.5-1v.2h.6l.2.2h1.1l.2-.2h.4l.2-.2h.2zm2.8 0h-1l.5.5h-1l-.2.2h-.4l-.2.2h-.2l-.3-1 .2-.2h.8v-.2h1.5l.5.4zm-.5-.5h.6l-.2.5-.5-.5z"></path><path fill="#edb92e" d="M391.8 221.2c.7-1 1-.8 1.2-1.3.2-1-.3-2-1-3.2-2.2-4.6.3-4.2 3.6-2.4 1 .4 2 1.2 3 2 1 1 1.8 1.8 2.7 2.4 1.6 1.2 2.7 1.2 3 1.7 1 2 1.5 3.5 1.8 4.2.3.7 1 2.3 1.6 4.2 0 .4-1 .5-1.8 2-.7 1.2-1.2 3.5-2 4.7-1.4 1.6-2.5 2.6-3.4 2.4-1 0-1.6-1.3-1.8-4.2a4 4 0 0 0-1.5-3c-.5-.6-.6-.4-2-1.2a9.3 9.3 0 0 1-2.4-2c-.6-.6-.7-1.3-1-2-.3-1-.8-1.6-.7-2.4a3.8 3.8 0 0 1 .8-2z"></path><path fill="#21231e" d="m392.5 219.7 1 .3v.2l-.2.2v.2h-.2v.2h-.2v.2h-.2l-.2.2v.2h-.2l-.8-.5v-.2l.2-.2.2-.2.2-.2h.2v-.2h.2v-.2zm1 .3zm-1.8-3 1-.5v.4l.2.2v.4l.2.3v.2l.2.2v2l-1-.3v-1.2l-.2-.2v-.4h-.2v-.4h-.2v-.4zm4.2-3-.6.8h-.3l-.2-.3h-.3l-.3-.3h-.3l-.3-.2h-.3l-.2-.2h-.5l-.2-.2h-.6v1.5l.3.4.2.3.2.4.2.5-1 .5v-.4l-.3-.4-.2-.4v-.7l-.2-.2v-1.5l.2-.2h.2l.2-.2h.2l.2-.2h1.2l.2.2h.6l.3.3.3.2h.3l.3.2.2.2.4.2h.3zm2.8 2-.7 1v-.4h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2l-.2-.2h-.2v-.2h-.2l-.2-.2-.2-.2h-.2l-.2-.2.5-1v.2h.2v.2h.2l.2.2h.2v.2h.2l.2.2h.2v.2h.2v.2h.2l.2.2.2.2.2.2h.2v.2h.2zm2.8 2.4-.6.8h-.2v-.2h-.2v-.2h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2l-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2v-.2h-.2l.6-1v.2h.2l.2.2v.2h.2l.2.2.2.2h.2v.2h.2v.2h.2v.2h.2l.2.2.2.2h.2v.2h.2l.2.2zm3.3 2-1 .3v.2-.2h-.2v-.2h-.4l-.2-.2h-.2l-.2-.2h-.3l-.2-.2h-.3v-.2h-.3v-.2h-.3v-.2h-.3v-.2l.6-.8.2.2h.2v.2h.3l.2.2h.2l.2.2h.2v.2h.4l.2.2h.4v.2h.2l.2.2h.2v.3zm-.2-.3v.2zm1.7 4.5-1 .4v-.7l-.2-.2v-.4l-.2-.2v-.5h-.2v-.4l-.2-.3v-.3h-.2v-.5h-.2v-.5h-.2v-.3l1-.4v.4l.2.3v.2l.2.3v.2l.2.3v.3l.2.3v.4h.2v.4l.2.2v.4h.2v.4zm0 0zm0 0-1 .4h.3l.3.2-.5-.5.6.5-.5-.5.6.5-.5-.5.2.4-.2-.3v.2l1-.5v.2-.4.4l-.4-.5.6.5-.5-.5.6.5-.5-.5h.4v.3zm0-.2v.2-.2zm1.6 4.7-1-.2v.3-.5l-.2-.3v-.2l-.2-.3v-.3l-.2-.3v-.2l-.2-.2v-.4l-.2-.2v-.2l-.2-.2v-.4l-.2-.2 1-.5v.4h.2v.5h.2v.5l.2.2v.3l.2.3v.5l.2.2v.3l.2.2v.2l.2.2v.6zm0-.3v.3-.3zm-1.7 2.4-1-.4.2-.2v-.2h.2v-.2l.2-.2v-.2h.2v-.2h.2l.2-.2h.2v-.2h.2v-.2l1 .2v.4h-.2v.2h-.2v.2h-.2l-.2.2-.2.2-.2.2-.2.2-.2.2v.2zm-2.2 5-.7-.7.2-.3v-.2h.2v-.3l.2-.2v-.4l.2-.2v-.5h.2v-.4h.2v-.5h.2v-.2l.2-.3v-.2l.2-.3v-.2l.2-.2 1 .5-.2.2v.3h-.2v.4h-.2v.5l-.2.2v.3l-.2.2v.3l-.2.2v.3l-.2.2v.3l-.2.2v.3h-.2v.3h-.2v.3l-.2.2v.2zm-3.7 2.7.2-1h.4v-.2h.2l.2-.2h.2v-.2h.2l.2-.2.2-.2.2-.2.2-.2.2-.3.2-.2v-.2h.2v-.3l1 .7h-.2v.3h-.3v.3h-.2v.3h-.4v.4h-.2v.2h-.2l-.2.2-.2.2-.2.2h-.3v.2h-.4v.2h-1zm-2.2-5h1v.3l.2.2v1.1h.2v.5l.2.2v.3l.2.2v.2h.2v.2h.2v.2h.2v1h-.8v-.2h-.2l-.2-.2-.2-.2v-.3h-.2v-.2l-.2-.2v-.3l-.2-.3v-.4h-.2v-1l-.2-.2v-1zm-1.2-2.6.7-.6.2.2v.2h.2v.2l.2.2v.2h.2v.3l.2.2v.2h.2v.7h.2v.6l-1 .2v-1h-.2v-.4l-.2-.2v-.2h-.2v-.2h-.2v-.4h-.2v-.2h-.2zm-2-1 .4-.8h.3v.2h.4v.2h.4v.2h.4v.2h.4v.2h.2v.2l-.6.7h-.2l-.2-.2h-.4v-.2h-.4l-.2-.2h-.2l-.2-.2h-.3zm-2.5-2 .7-.6.2.2.2.2.2.2.2.2h.2v.2h.2v.2h.2l.2.2h.2v.2h.2l.2.2-.5 1v-.2h-.2v-.2h-.4v-.2l-.2-.2h-.2l-.2-.2-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2v-.2zm-1.2-2.3 1-.4v.2h.2v.4h.2v.5h.2v.4h.2v.2l.2.2-.7.7h-.2v-.4h-.2v-.4h-.2v-.4l-.2-.2v-.8h-.2v-.2zm-.6-2.5h1v.8h.2v.4l.2.2v.2l.2.2v.2l-1 .5v-1h-.2v-.4h-.2v-.6h-.2v-.8zm1 0v.2zm.4-1.5v-1l.3.8v.4h-.2v.2h-.2v.8h-.2v.2h-1v-.9l.2-.2v-.4l.2-.2v-.2h.2v-.4h.2v-.2h.2l.4.7zm0-1h1l-.7.8-.2-.8zm0 0v1l-.4-.8.4-.3zm0 1h-1l.6-.8.4.7z"></path><path fill="#21231e" d="m406.5 226 .2 1c-1.4.4-2.6 1-3.6 1.8s-1.7 2-2.3 3.2c.2-1.4 1-2.7 2-3.7s2.3-1.8 3.8-2.2zm-.6-1.6-.5-1c-1.6 0-3.2-.4-4.7-1-1.5-.7-3-1.6-4.4-2.8 1 1.3 2.6 2.4 4.3 3.3 1.6.7 3.5 1.3 5.2 1.5z"></path><path fill="#edb92e" d="M391.4 213.8c1 .4 1.6.8 2.8 1.8.8.7 1.3 1.7 1.5 3 0 1 0 2.5-.3 3.8-.2.8 0 2.2.5 3.6.4 1.4 1 2.8 2 3.5 2.3 2.5 4 5 3.4 6.7a4 4 0 0 1-1.5 1.8c-.4-.6-1-1.2-1.4-2.2a8 8 0 0 0-1.5-3.5c-.5-.6-.7-1.3-2-2.2-1-.5-2-.3-2.6-1-1.2-1.6-3-5.5-1.3-7.2 1.7-1.7 2.3-2.7 1-5.6-.5-1-.5-1.8-.6-2.4z"></path><path fill="#21231e" d="m394.5 215.2-.7.8-.2-.2-.2-.2-.2-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2l-.2-.2h-.2l-.2-.2h-.4l.3-1h.4v.2h.4v.2h.4v.2h.4v.2h.2v.2h.2l.2.2.2.2h.2v.2h.2v.2zm1.7 3.2-1 .2v-.6h-.2v-.7h-.2v-.4l-.2-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2l.7-.8h.2v.2l.2.2v.2h.2v.2l.2.2v.2h.2v.4l.2.2v.4h.2v.8h.2v.2zm-.3 4h-1V221h.2v-2.4l1-.2v3.3l-.2.2v.5zm-1 0v-.3.3zm1.4 3.5-1 .2v-.5l-.2-.3v-.4l-.2-.3v-.8h-.2v-1.4h1v1.9h.2v.7h.2v.7h.2v.3zm1.8 3.2-.7.7v-.2l-.2-.2h-.2v-.4h-.2v-.2l-.2-.3v-.2h-.2v-.2l-.2-.3v-.2h-.2v-.5l-.2-.2-.2-.3v-.4h-.2l1-.4v.2l.2.2v.2l.2.3.2.2v.3l.2.2v.2h.2v.2h.2v.4h.2v.2h.2v.2h.2v.2zm3.6 7.2-1-.4.2-.2v-1.3l-.2-.2v-.4l-.2-.2v-.2l-.2-.2-.2-.2v-.2l-.2-.2-.2-.2v-.2l-.3-.2-.2-.3v-.3l-.3-.2-.2-.2-.2-.3-.2-.2-.2-.2-.2-.2-.3-.3h-.2l.7-.8.3.2.2.2.2.3.3.4.3.2.2.2v.3l.3.3.3.2.2.3v.2l.3.2.2.3v.2l.2.2.2.2v.2l.2.2v.2l.2.3v.7l.2.2v1.2l-.2.2zm-2.4 1.8 1-.4-.8-.2.2-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.2l.2-.2v-.2l1 .4v.2l-.2.2v.2l-.2.2v.2h-.2v.2h-.2v.2h-.2v.2h-.2v.2h-.2l-.2.2-.8-.2zm.8.2-.5.3-.3-.5.8.2zm-2-2.5 1-.3v.4h.2v.4h.2v.2h.2v.2l.2.2v.2h.2v.4l-.8.4v-.2h-.2v-.2l-.2-.2v-.2h-.2v-.2h-.2v-.4l-.2-.2v-.2l-.2-.2v-.3zm-1.5-3.3.8-.7v.2h.2v.2l.2.2v.2l.2.2v.2h.2v.5h.2v.4l.2.2v.4l.2.3v.7l-.8.2v-.4h-.2v-.5l-.2-.2v-.5h-.2v-.2l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2zm0 0zm-2-2.2.4-1 .3.2.2.2h.2l.2.2.2.2.2.2v.2h.2v.2h.2v.2l.2.2.2.2v.2h.2v.2l-.7.7-.2-.2v-.2h-.2v-.2h-.2v-.4h-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2zm-2.7-1.3.8-.6h.2v.2h.2v.2h.9l.2.2h.4l.2.2h.2l.2.2-.4 1v-.2h-.4l-.2-.2h-.9v-.2h-.4l-.2-.2h-.2l-.2-.2-.2-.2-.2-.2zm-1.2-7.8.7.7v.3h-.2v.3h-.2v2.2l.2.3v.5l.2.2v.2l.2.3v.2l.2.2v.2l.2.2v.2l.3.2v.2h.2v.3l.2.2-.7.7-.2-.3-.2-.3v-.2l-.2-.2v-.2h-.3v-.3l-.2-.3-.2-.4v-.2l-.2-.3v-.2l-.2-.2v-.6l-.2-.3v-2.1l.2-.3v-.2h.2l.2-.3.2-.3zm.7-5 1-.5v.5l.2.2v.3l.2.2v.7h.2v1.7l-.2.2v.2l-.2.2v.2h-.2v.3h-.2v.2l-.2.2-.3.3h-.2l-.2.3-.8-.6.2-.3h.2l.2-.3.2-.3.2-.2v-.3l.2-.2v-.2l.2-.3v-.7l-.2-.2v-.5l-.2-.2-.2-.4v-.2zm0-3v1l.4-.7v1.4h.2v1.1h.2l-1 .6v-.9h-.2v-.7l-.2-.2v-1l.4-.7zm-.6.5-.3-.7h.7l-.5.6zm.4.3v-1 1zm0-1z"></path><path fill="#edb92e" d="M434 226.2c-1.2 1-1.5 1-2 1.6-.3.8 0 2 .3 3.3 1.5 5-1.4 4.4-5 2.6-1.6-1-3.6-3.2-5.2-4.4-1.5-1-2.6-1-3-1.6a118.7 118.7 0 0 1-1-4.3c0-.7-.5-2.4-1-4.4.4-.7 1.4-1 2.5-2.5 1-1.7 2.2-4.7 3.6-6 3-3.2 6-4.5 6 1.3 0 1.4.3 3 1 3.6.6.6 1 .3 2.5 1 1 .6 2 1.3 2.6 2 .7 1 .5 2 .7 2.8 0 1 .5 1.7.2 2.6-.5 1-1 1.7-2 2.4z"></path><path fill="#21231e" d="m432.6 228-1-.5h.2v-.4h.4v-.2h.4v-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l.8.8-.2.2h-.2v.2h-.2l-.2.2-.2.2h-.2v.2h-.4v.2h-.2v.2zm-1-.5zm1 3.4-.8.3v-.2l-.2-.2v-.7h-.2v-2.3h.2v-.2l1 .4v.2h-.2v2.1h.2v.7zm-5.4 3 .5-.8h.3l.3.3h.3l.3.3h.2l.3.2h.2l.3.2h.7l.2.2h.7v-.2h.2v-.4l.2-.3v-1.1l-.2-.3v-.3l-.2-.4 1-.4v.4l.2.4v.8l.2.3v1.1l-.2.4v.2l-.3.2-.2.2h-.2l-.2.2-.4.2h-1.2l-.3-.2h-.6l-.3-.3-.2-.2h-.3l-.3-.2-.4-.2-.3-.2h-.3zm-5.4-4.3.6-1 .2.2.3.2.2.3h.2v.3h.3v.3l.3.2.2.2h.2v.3h.3l.2.3.2.3.2.2.3.3h.2v.2l.2.2h.2l.2.2v.2h.3v.2h.2l.2.2.3.2-.5 1-.2-.2h-.2v-.2l-.3-.2h-.2l-.2-.2-.2-.3h-.2l-.2-.2h-.2v-.3h-.3l-.3-.3h-.2v-.3l-.3-.3h-.2l-.2-.3-.3-.3h-.2v-.2h-.3l-.2-.3-.3-.3-.3-.2-.3-.2h-.2zm.6-1zm-4-1 1-.2v-.2h.2v.2h.4l.2.2h.4v.2h.7l.2.2h.2l.2.2.3.2h.2l.2.2-.6 1v-.2h-.3v-.2h-.2l-.2-.2-.2-.2h-.3l-.2-.2h-.2v-.2h-.4l-.2-.2h-.2l-.2-.2h-.2v-.2h-.2v-.3zm.2.3v-.3.3zm-.6-4.2v-1l.5.4v.4l.2.2v1h.2v1.3h.2v1h.2v.5l-1 .2v-.7l-.2-.3v-.7l-.2-.3v-.7h-.2v-.8l-.2-.2v-.6l.4.4zm0-1h.5v.4l-.5-.4zm-.5.6 1-.2v-.2l-.5-.2v1h-.3l-.2-.5zm1-.2zm-1.8-4.5 1 .4v-.2 1.1h.2v1.1l.2.3v.8l.2.2v.9l-1 .2V222l-.2-.2v-.8l-.2-.3v-.7h-.2v-.8l-.2-.2v-.3zm0 .3v-.3.3zm2.4-2.8 1 .5-.2.2-.2.2-.2.3-.2.2-.2.2h-.2v.2h-.2l-.2.2h-.2v.2h-.2v.2h-.2v.2h-.2l-1-.3h.2v-.4h.2v-.2h.4v-.2h.2l.2-.2.2-.2.2-.2h.2v-.2l.2-.2.2-.2v-.2h.2v-.2zm3.7-6.2.8.7h-.2v.3h-.2v.3l-.3.3v.2l-.2.2v.2h-.2v.3l-.2.3v.4l-.3.2v.2l-.2.2v.2l-.2.2v.2l-.2.2v.3l-.2.3v.2l-.2.2v.2h-.2v.2l-.2.2-.2.2-1-.4.2-.2.2-.3v-.2h.2v-.3l.2-.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.2v-.3l.2-.2v-.2h.2l.2-.3v-.2l.2-.2v-.3l.2-.2v-.2l.3-.2v-.2l.2-.2.2-.3v-.2l.2-.2h.2v-.3zm6.8 1.8h-1v-1.4l-.2-.4v-.6l-.2-.2v-.4l-.2-.2h-.3v-.2h-1.2l-.3.2-.3.2h-.2l-.3.3-.2.3-.3.2-.2.2-.3.2-.2.2-.3.2-.2.3-.8-.7.3-.3.3-.3.3-.2.2-.3.3-.3.4-.2.3-.2.2-.2h.2l.3-.3h.2l.3-.2h.3l.2-.2h1.2l.3.2.3.3.2.2.2.2.2.3v.6l.2.5v.4l.2.3v1.5zm1 3.3-.8.8-.2-.2v-.2h-.2v-.2l-.2-.2v-.6l-.2-.2v-.7l-.2-.2V212h1v2h.2v.3l.2.2v.2h.2v.2l.2.2zm0 0zm2.2 1-.4 1-.3-.2h-.2l-.3-.2h-.4v-.2h-.9v-.2h-.4v-.2h-.2v-.2l.6-.7v.2h.4v.2h.8l.2.2h.4l.2.2h.2l.2.2zm2.8 2.2-.8.6h-.2v-.2l-.2-.2h-.2v-.4h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2l-.2-.2.3-1 .3.2h.2l.2.2.2.2h.2v.2h.2l.2.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2zm-.8.6.4.5-.3-.5zm1.5 2.3-1 .2V220l-.2-.2v-.8h-.2v-.4l.7-.6v.2l.2.2v.2l.2.2v2.2h.2v.2zm0 3-.8-.4v-2.1l-.2-.2v-.4h1v1l.2.2v1.8zm-1.8 2.6-.7-.8h.2v-.2l.2-.2v-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.2l.2-.2v-.2h.2v-.2l1 .4-.2.2v.2l-.2.2v.2h-.2v.4h-.2v.2h-.2v.2l-.2.2-.2.2v.2h-.2l-.2.2-.2.2zm-.7-.8z"></path><path fill="#21231e" d="m418 222.6-.2-1a14 14 0 0 0 7.8-5.3c-1.2 3-4.3 5.3-7.7 6.3zm.2 1.5c0 .4.2.7.3 1 3.4 0 6.4 1 9.2 3-2-2.3-5.8-3.8-9.5-4z"></path><path fill="#edb92e" d="M432.7 233.3a11 11 0 0 1-3.4-1.5c-1.6-1.3-1.2-3.8.3-6.4.4-.8.5-2.2.2-3.5a6.3 6.3 0 0 0-1.4-3.5c-2.4-2.3-3.8-4.8-2.6-6.6.8-1.3 2-2 2.8-2.7.3.6.4 1.5.4 2.5 0 1.4.3 3 1 3.6.6.6 1 .3 2.5 1 1 .7 2 1.3 2.6 2 .7 1 .6 2 .7 2.8 0 1 .5 1.7.2 2.6-.5 1-1 1.7-2 2.4-1.2 1-1.5 1-2 1.6-.3.8 0 2 .3 3.3.3 1 .4 1.7.4 2.3z"></path><path fill="#21231e" d="m429 232.2.6-.8h.2v.2h.2l.2.2h.2l.2.2h.2l.2.2h.4v.2h.4l.2.2h.4l.2.2h.2l-.3 1h-.4v-.2h-.4l-.2-.2h-.3v-.2h-.4l-.2-.2h-.2l-.2-.2h-.2v-.2h-.2l-.3-.2h-.2v-.2zm0-7 1 .5v.2h-.2l-.2.4v.2l-.2.2v.2l-.2.3v.4l-.2.2v.5l-.2.2v1.5l.2.3v.2h.2v.3l.2.2.2.2-.6.8-.2-.2-.3-.3v-.2h-.2v-.3l-.2-.2v-.4l-.2-.3V228h.2v-.7l.2-.3.2-.3v-.3l.2-.2v-.3l.3-.3v-.5zm.3-3.3 1-.2v.8h.2v1.9l-.2.2v.7h-.2v.2l-1-.4h.2v-.6h.2V222zm-1.3-3.2.7-.7v.2h.2v.4h.2v.2l.2.2v.2l.2.2v.2l.2.2v.5h.2v.7l.2.2v.8h-1v-1.2l-.2-.2v-.4h-.2v-.4h-.2v-.2l-.2-.2v-.2h-.2v-.2l-.2-.2zm0 0zm-2.7-7.2 1 .6h-.2v.7l-.2.2v.7l.2.2v.4l.2.2v.2l.2.2v.2l.2.2v.2l.3.2v.2l.2.2.2.2v.2l.3.3.2.3v.2l.3.2.2.2h.2l-.7.8-.2-.2-.2-.2-.3-.2-.2-.2v-.3l-.2-.2-.2-.2-.2-.2-.2-.2v-.2l-.3-.2-.2-.3h-.2v-.3l-.2-.2v-.3l-.2-.2v-.2l-.2-.3v-.4l-.2-.2v-1l.2-.3v-.2l.2-.2v-.2zm3.8-2.5-.8.4.7.3h-.2l-.2.2h-.2l-.2.2h-.2v.2h-.2v.2h-.2l-.2.2-.2.2-.2.2-.2.2-.2.2v.2h-.2v.2l-.2.2-1-.6h.2v-.2l.2-.2.2-.2v-.2h.2v-.2h.2v-.2h.2v-.2h.2l.2-.2.2-.2h.2v-.2h.2l.2-.2.2-.2h.2v-.2h1.1zm-.6 0 .5-.5v.6h-.6zm1 2.8h-1v-2.1h-.2v-.4l1-.3v1h.2v2zm1 3.3-.7.8-.2-.2v-.2h-.2v-.2l-.2-.2v-.7l-.2-.2v-.7l-.2-.2V212h1v1.7h.2v.6l.2.2v.2h.2v.2l.2.2zm2.3 1-.4 1-.3-.2h-.2l-.3-.2h-.4v-.2h-.9v-.2h-.4v-.2h-.2v-.2l.6-.7v.2h.4v.2h.8l.2.2h.4l.2.2h.2l.2.2zm2.8 2.2-.8.6h-.2v-.2l-.2-.2h-.2v-.4h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2l-.2-.2.3-1 .3.2h.2l.2.2.2.2h.2v.2h.2l.2.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2zm-.8.6.4.5-.3-.5zm1.5 2.3-1 .2V220h-.2v-.8h-.2v-.4l.7-.6v.2l.2.2v.2l.2.2v2h.2v.2zm0 3-.8-.4v-2.2l-.2-.2v-.4h1v1l.2.2v1.8zm-1.8 2.6-.7-.8h.2v-.2l.2-.2v-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.2h.2v-.4h.2v-.2l1 .4-.2.2v.2l-.2.2v.2l-.2.2v.2h-.2v.2h-.2v.2l-.2.2-.2.2v.2h-.2l-.2.2-.2.2zm-.7-.8zm-1 2.2-1-.5v-.2h.2v-.2h.2v-.2h.4v-.2h.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l.8.8-.2.2h-.2v.2h-.2l-.2.2-.2.2h-.2l-.2.2h-.2v.2h-.2v.2zm-1-.5zm1 3.4-1 .3v-.7h-.2v-3h.2l1 .4h-.2v2.6h.2v.2zm-1 .3zm.8 2.5.3-1-.6.5v-1h-.2v-.9l-.2-.2 1-.5v.9h.2v1h.2v.7l-.7.5zm.7-.5v.7l-.7-.2.7-.5zm-.5 0-.2.5.2-.5zm.5 0v.7l-.7-.2.7-.5z"></path><path fill="#edb92e" d="M410.6 216.4c4 0 8 3.4 8.4 7.7.6 4.4-2.2 7.7-6 7.8-4 0-7.5-3-8.3-7.3-.7-4 1.8-8 6-8z"></path><path fill="#21231e" d="m419.5 224-1 .2v-.8l-.2-.4v-.3l-.2-.4v-.3l-.2-.4-.2-.3-.2-.3-.2-.4-.2-.3-.2-.3-.3-.2-.2-.3-.3-.3-.2-.2-.3-.3-.3-.2-.3-.2-.4-.2h-.3l-.3-.3h-.4l-.3-.3h-.3l-.4-.2h-.3l-.3-.2h-1.5v-1h1.9l.4.2h.3l.4.3h.4l.4.3.4.2.3.2.5.2.3.3.3.2.4.2.3.3.3.3.3.3.3.4.2.3.2.4.3.4.2.4.2.4.2.4v.4l.2.4v.4l.2.4v.8zm-6.6 8.3v-1h.9l.2-.2h.6l.3-.2h.4l.2-.2.3-.2h.2l.2-.3h.2l.2-.3.3-.3.3-.2v-.2l.3-.3.2-.2v-.3l.3-.3.2-.4v-.3l.2-.3v-.7l.2-.3V224l1-.2v2.5l-.2.4v.8l-.3.4v.3l-.2.3v.4l-.3.3-.2.3-.3.3h-.2l-.2.4-.3.2-.3.3h-.3l-.3.3-.3.2h-.2l-.3.3h-.4l-.2.2h-.4l-.3.2H413zm-8.7-7.7 1-.2v.7l.2.5v.3l.3.4v.3l.3.3.2.4.2.3.2.3.2.3.2.3.3.3.2.3h.3l.2.3.3.3.2.2.3.2.3.2h.4l.3.3.3.2h.3l.3.2h.7l.3.2h1.2v1h-2l-.3-.2h-.4l-.4-.3h-.4l-.4-.3-.3-.2-.4-.2-.3-.2-.4-.2-.4-.2-.3-.3-.2-.2-.2-.2-.3-.3-.2-.3-.3-.3-.2-.4-.2-.3-.2-.3-.2-.4-.2-.3-.2-.4v-.4l-.2-.4-.2-.4v-.8zm6.2-8.7v1h-1l-.3.2h-.4l-.3.2h-.3l-.3.3h-.2l-.2.3-.3.2-.2.2v.2l-.3.2-.2.2-.2.3-.2.3v.2l-.2.3v.4l-.3.3v.6l-.2.3v.7l-.2.3v.7l.2.4v.8l-1 .2v-3.3l.2-.3v-.3l.2-.4v-.3l.3-.4v-.3l.3-.3.2-.3.2-.3.2-.3h.2l.2-.4.3-.2.3-.2.3-.2.3-.2.3-.2.3-.2h.3l.4-.2h.4l.3-.2h.9z"></path><path fill="#edb92e" d="M411 218.6c2.8-.2 5.7 2.4 6 5.5.5 3.3-1.5 5.8-4.4 5.8-2.8 0-5.5-2.3-6-5.3s1.3-5.8 4.3-6z"></path><path fill="#21231e" d="m417.6 224-1 .2v-.6l-.2-.3v-.2l-.2-.3v-.4l-.2-.2v-.2l-.2-.3-.2-.3v-.2l-.3-.2-.2-.2-.2-.3-.2-.2-.2-.2h-.2l-.2-.3h-.2l-.3-.3h-.2l-.2-.2-.4-.2h-.5v-.2h-1.1v-1h1.1l.4.2h.3l.2.2h.2l.3.2h.3l.2.3h.3l.2.2.3.2h.2l.3.3.2.3.2.2.2.2v.2l.3.3h.2v.4l.3.3v.3l.3.2.2.3v.3l.2.3v.8l.2.3zm-5 6.3v-1h1.1l.2-.2h.4l.2-.2h.2v-.2l.3-.2h.3v-.2l.3-.2v-.2h.2l.2-.3v-.2l.2-.2.2-.3v-.7l.2-.2v-1.6h1v2.2l-.2.3v.2l-.2.3v.2l-.3.3-.2.2v.3l-.3.2-.2.2-.2.2-.3.2-.2.2-.2.2h-.2l-.2.2h-.2l-.3.2h-.2l-.2.2h-1.5zm0-1zm-6.5-4.8h1l.2.4.2.4v.2l.2.3.2.3v.3l.3.2.2.2.2.2v.2l.3.2.2.2.3.3.2.2.2.2h.2v.3h.3l.2.2h.7l.2.2h1.1v1H411l-.4-.2h-.2l-.3-.2h-.2l-.2-.3h-.3l-.2-.3-.4-.3-.2-.3-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.3v-.2l-.3-.2-.2-.2-.2-.3v-.3l-.2-.3v-.3l-.2-.2v-.7zm1 0zm4-6.4v1h-.6l-.2.2h-.5l-.2.2h-.2l-.2.2-.2.2h-.2l-.2.3v.2l-.3.2-.2.3v.2h-.2v.3l-.2.2v.2l-.2.2v.7l-.2.2v1.7h-1V222h.2v-.4l.2-.3v-.2l.2-.2v-.2l.3-.3v-.2h.2l.2-.3.2-.2.2-.2.2-.2h.2l.2-.2h.3l.2-.3h.2l.2-.2h.6l.3-.2h.6z"></path><path fill="#0c4076" d="M411.2 220.7c2 0 3.6 1.5 4 3.5.2 2-1 3.6-3 3.6a4 4 0 0 1-3.7-3.4c-.3-2 1-3.6 2.7-3.7z"></path><path fill="#21231e" d="m415.6 224-1 .3v-.4l-.2-.2v-.4h-.2v-.3l-.2-.2-.2-.3-.2-.2-.2-.2h-.2l-.2-.2-.2-.2h-.2l-.2-.2h-.6v-.2h-.6v-1h1l.2.2h.2l.3.2h.3v.2h.3l.2.3v.2h.3l.2.2.2.2.2.3.3.2v.4h.2v.3l.2.3v.4l.2.2zm-3.3 4.3v-1h.7l.2-.2h.4v-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.5l.2-.2v-1.1l1-.3v2h-.2v.3l-.2.3-.2.3-.2.2h-.2v.2l-.2.2h-.2v.2h-.3l-.2.2h-.4v.2h-1zm-4.3-3.8 1-.2v.5l.2.3v.4h.2v.2l.2.2.2.2.2.3.2.2.2.2h.3v.2h.4l.3.2h.8v1h-1.3l-.2-.2h-.2l-.3-.2h-.2v-.2h-.2v-.2l-.3-.2-.3-.2v-.2h-.2v-.3h-.3v-.3l-.2-.2v-.2h-.2v-.5l-.2-.2v-.5zm2.7-3.8h1l-.5.5h-.7l-.2.2h-.2v.2h-.2l-.2.2-.2.2-.2.2v.2h-.2v.5h-.2v1.3l-1 .3v-1.8h.2v-.5h.2v-.3h.2v-.3h.3v-.3h.3v-.2h.3v-.2h.3v-.2h1l.2-.2h.4l-.5.5zm1 0v.5h-.5l.5-.5zm0 0h-1l.5-.5.5.5zm-1 0v-.5h.5l-.5.5z"></path></g><path fill="#fff" d="M482 183c4 0 7 3 7 7s-3 6.7-7 6.7c-3.6 0-6.7-3-6.7-6.8 0-4 3-7 6.8-7z"></path><path fill="#21231e" d="M489.5 189.8h-1c0-2.3-1.4-4.6-3.5-5.6a6.3 6.3 0 0 0-3-.7v-1c2.6 0 5 1.3 6.4 3.5a7.4 7.4 0 0 1 1 3.8zm-7.4 7.4v-1c2.5 0 4.7-1.4 5.8-3.4a6.4 6.4 0 0 0 .7-3h1c0 2.6-1.5 5.2-3.7 6.5a7.3 7.3 0 0 1-3.7 1zM475 190h1a6.4 6.4 0 0 0 6.3 6.2v1a7.1 7.1 0 0 1-6-3.4 7.4 7.4 0 0 1-1.2-4zm7.3-7.5v1a6.3 6.3 0 0 0-5.5 3.5 6.4 6.4 0 0 0-.7 3h-1c0-2.7 1.4-5 3.5-6.4a7.3 7.3 0 0 1 3.8-1z"></path><path fill="#fff" d="M482 171c4 0 7 3 7 7a6.8 6.8 0 1 1-13.7-.2c0-3.7 3-6.7 6.8-6.7z"></path><path fill="#21231e" d="M489.5 178h-1c0-2.4-1.4-4.7-3.6-5.8a6.3 6.3 0 0 0-3-.6v-1c2.6 0 5 1.3 6.4 3.4a7.4 7.4 0 0 1 1 4zm-7.4 7.3v-1c2.5 0 4.7-1.4 5.8-3.4a6.4 6.4 0 0 0 .7-3h1c0 2.5-1.5 5-3.7 6.4a7.3 7.3 0 0 1-3.7 1zM475 178h1a6.4 6.4 0 0 0 6.3 6.3v1a7.1 7.1 0 0 1-6-3.4 7.4 7.4 0 0 1-1.2-4zm7.3-7.4v1a6.3 6.3 0 0 0-5.5 3.5 6.4 6.4 0 0 0-.7 3h-1c0-2.6 1.4-5 3.5-6.3a7.3 7.3 0 0 1 3.8-1z"></path><path fill="#fff" d="M482 159.6c4 0 7 3 7 7a6.8 6.8 0 1 1-13.7-.2c0-3.7 3-6.8 6.8-6.8z"></path><path fill="#21231e" d="M489.5 166.5h-1c0-2.4-1.4-4.7-3.6-5.7a6.3 6.3 0 0 0-3-.7v-1c2.6 0 5 1.5 6.4 3.6a7.4 7.4 0 0 1 1 4zM482 174v-1c2.5 0 4.7-1.5 5.8-3.6.4-1 .7-2 .7-3h1c0 2.6-1.4 5-3.5 6.4a7.3 7.3 0 0 1-4 1zm-7.2-7.5h1c0 2.4 1.4 4.7 3.6 5.7a6.3 6.3 0 0 0 2.7.7v1a7.2 7.2 0 0 1-6-3.6 7.4 7.4 0 0 1-1.2-4zm7.3-7.4v1a6.4 6.4 0 0 0-5.5 3.6 6.4 6.4 0 0 0-.7 3h-1c0-2.6 1.4-5 3.5-6.4a7.3 7.3 0 0 1 3.8-1z"></path><path fill="#fff" d="M482 127c4 0 7 3.2 7 7s-3 6.8-7 6.8a7 7 0 0 1 .1-13.8z"></path><path fill="#21231e" d="M489.5 134h-1c0-2.4-1.4-4.7-3.6-5.8a6.3 6.3 0 0 0-3-.6v-1c2.6 0 5 1.3 6.4 3.4a7.4 7.4 0 0 1 1 4zm-7.4 7.3v-1c2.5 0 4.7-1.4 5.8-3.4a6.4 6.4 0 0 0 .7-3h1c0 2.5-1.5 5-3.7 6.3a7.3 7.3 0 0 1-3.7 1zM475 134h1c0 2.3 1.4 4.6 3.5 5.6a6.3 6.3 0 0 0 2.8.7v1a7.3 7.3 0 0 1-6-3.4 7.4 7.4 0 0 1-1.2-4zm7.3-7.4v1a6.3 6.3 0 0 0-5.5 3.5 6.4 6.4 0 0 0-.7 3h-1c0-2.6 1.4-5 3.5-6.3a7.3 7.3 0 0 1 3.8-1z"></path><path fill="#fff" d="M482 137.2c4 0 7 3 7 6.8s-3 7-7 7c-3.6 0-6.7-3.2-6.7-7s3-6.8 6.8-6.8z"></path><path fill="#21231e" d="M489.5 144h-1c0-2.3-1.4-4.6-3.5-5.7a6.3 6.3 0 0 0-3-.6v-1c2.7 0 5.2 1.4 6.5 3.6a7.4 7.4 0 0 1 1 3.7zm-7.4 7.4v-1c2.5 0 4.7-1.4 5.8-3.4a6.4 6.4 0 0 0 .7-3h1c0 2.6-1.5 5-3.7 6.4a7.3 7.3 0 0 1-3.7 1zM475 144h1c0 2.4 1.4 4.7 3.5 5.7a6.3 6.3 0 0 0 2.8.7v1a7 7 0 0 1-6-3.5 7.4 7.4 0 0 1-1.2-4zm7.3-7.4v1a6.4 6.4 0 0 0-5.5 3.6c-.5 1-.7 2-.7 2.8h-1c0-2.5 1.4-5 3.5-6.2a7.3 7.3 0 0 1 3.8-1.2z"></path><path fill="#fff" d="M482 148.2c4 0 7 3 7 6.8s-3 7-7 7c-3.6 0-6.7-3.2-6.7-7s3-6.8 6.8-6.8z"></path><path fill="#21231e" d="M489.5 155h-1c0-2.3-1.4-4.6-3.6-5.7a6.3 6.3 0 0 0-3-.6v-1c2.6 0 5 1.3 6.4 3.4a7.4 7.4 0 0 1 1 4zm-7.4 7.4v-1c2.5 0 4.7-1.4 5.8-3.4a6.4 6.4 0 0 0 .7-3h1c0 2.6-1.5 5-3.7 6.4a7.3 7.3 0 0 1-3.7 1zM475 155h1c0 2.4 1.4 4.7 3.5 5.7a6.3 6.3 0 0 0 2.8.7v1a7.3 7.3 0 0 1-6-3.4 7.4 7.4 0 0 1-1.2-4zm7.3-7.4v1a6.5 6.5 0 0 0-5.5 3.5 6.4 6.4 0 0 0-.7 3h-1c0-2.5 1.4-5 3.5-6.3a7.3 7.3 0 0 1 3.8-1z"></path><path fill="#edb92e" d="M487 195.5c1 1.6.7 2 1.4 2.4.8.6 2 .6 3.4.4 5.3-1 4.5 2.3 2.2 6-1 1.7-3.8 3.5-5.2 5-1.4 1.5-1.6 2.8-2 3.2h-9.2c-.5-.4-.7-1.7-2-3.2-1.5-1.5-4.2-3.3-5.3-5-2.4-3.7-3-7 2.2-6 1.3.2 2.6.2 3.4-.5.6-.6.3-1 1.3-2.5a7 7 0 0 1 2.2-2.3c1-.5 1.8-.2 2.6-.2 1 0 2-.3 2.8.2a7 7 0 0 1 2.2 2.3z"></path><path fill="#21231e" d="m488.7 197.5-.7.8-.2-.2h-.2v-.4h-.2v-.4h-.2v-.4l-.2-.2v-.2l-.2-.2-.2-.3v-.2l.8-.6v.2h.2v.3l.2.2v.2h.2v.4h.2v.4h.2v.4h.2zm-.7.8-.3-.3.3.3zm3.8-.4v1h-2.4l-.2-.2h-.2l-.2-.2h-.3l-.2-.2.7-1v.2h.2v.2h.8l.2.2h1.9zm2.6 6.6-.8-.6.2-.3.2-.3.2-.4.2-.3v-.3l.3-.3v-.2l.2-.2v-.6l.2-.2v-1.3l-.2-.2h-.2v-.2h-.5l-.2-.2h-2l-.2-1h2.8l.3.2h.2l.2.2.2.2.2.2.2.2v.3l.2.3v1.7l-.2.3v.3l-.3.2v.4l-.3.3v.2l-.3.4v.3l-.3.2-.3.4zm-5.3 5.2-.6-.7.3-.2v-.2h.3l.2-.3v-.2h.3l.2-.2h.2v-.3h.2l.2-.3.2-.2h.2l.2-.3h.2v-.3l.3-.2h.2l.2-.3v-.2l.2-.2.2-.2h.2v-.3h.3v-.4h.3v-.3h.2v-.3l1 .6-.2.2-.2.3v.3l-.2.2h-.2l-.2.3v.2l-.3.2-.3.3v.2h-.3l-.2.3-.2.2h-.2l-.2.3-.2.2-.3.3-.3.3h-.2v.3l-.3.2h-.2v.3l-.3.2h-.2v.3h-.2l-.2.3zm-2.3 3.3v-1l-.3.2v-.2h.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.2v-.2h.2v-.2l.2-.2.2-.3.3-.3.8.6v.2l-.2.2-.2.2-.2.3v.2h-.2v.2l-.2.2v.2l-.2.2v.2h-.2v.4h-.2v.2l-.2.2v.2h-.5zm.3 0h-.2.2zm-5 .2v-1h4.7v1h-4.5zm0-1h.2zm0 0v1-1zm0 0zm-4.7.8.6-.8h-.4 4.2l.2 1h-4.7l-.3-.2zm.3 0h-.2.2zm-2.4-3.2.7-.7v.2l.2.2.2.3.2.3.2.2v.2h.2v.4h.2v.4h.2v.4h.2v.4h.2v.2l-.5.8-.2-.2v-.2l-.2-.2v-.2h-.2v-.4h-.2v-.4l-.2-.2v-.2h-.2v-.2l-.2-.3-.2-.2-.2-.3-.2-.2zm-5.4-5.2 1-.6v.2l.2.3h.2v.3l.2.2h.2v.3h.3v.3l.2.2h.2l.2.3.2.2v.2l.3.2h.3l.2.3h.2l.2.2v.2h.2l.2.3h.2l.2.3h.2v.3l.3.2h.2v.3h.3v.3l-.6.8-.2-.2-.3-.3-.3-.2-.3-.2v-.2l-.2-.2h-.2l-.2-.3h-.2l-.2-.2h-.2v-.3l-.3-.2h-.2l-.2-.3v-.2h-.3l-.2-.3v-.2h-.3l-.2-.3v-.2l-.3-.2h-.2v-.3l-.3-.2-.2-.2-.2-.2zm2.7-6.7v1l-.6-.2h-2.1l-.2.2h-.2v.2h-.2v.4l-.2.2v1.1l.2.2v.3l.2.3v.2l.2.3.2.4v.3l.3.3.3.4.2.3.2.3-1 .6v-.4l-.3-.3-.2-.4-.2-.4v-.3l-.3-.4v-.4l-.3-.3v-.4l-.2-.3v-.6l-.2-.3v-1l.2-.2v-.2l.3-.2.2-.2.2-.2.4-.2h.3l.3-.2h2.5zm3-.5.8.8-.2.2h-.2l-.2.2h-.4l-.2.2h-3v-1h2.5l.2-.2h.4v-.2h.2zm1.4-2.3.7.6v.3l-.2.2v.2h-.2v.4h-.2v.8h-.2v.2h-.2v.2l-.2.2-.8-.7h.2v-.4h.2v-.4h.2v-.2l.2-.2v-.4h.2v-.3h.2v-.3zm0 0 .2-.4-.3.4zm2.3-2.4.5.8-.2.2h-.2v.2h-.2v.2h-.2l-.2.2-.2.2-.2.2v.2h-.2v.2l-.2.2-.2.2v.2l-1-.6.2-.2.2-.2v-.2h.2v-.2l.2-.2h.2v-.2l.2-.2.2-.2h.2v-.2l.2-.2h.2v-.2h.2l.2-.2zm2.8-.3v1h-2.4l-.5-.7h.2v-.2h.4l.2-.2h2zm3 .3-.5.8h-.4v-.2H482v-1h2.5l.2.2h.2l.2.2zm0 0 .3.2-.3-.2zm2 3.2v-1l-.4.8-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.2v-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2v-.2l.4-.8h.2l.2.2.2.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2l.2.2.2.2v.2h.2v.2h.2v.2l-.4.8zm.4-.8.5.8h-1l.4-.8zm-.4-.2v1l-.4-.2.4-.8zm-.4.8-.5-.8h1l-.4.8z"></path><path fill="#21231e" d="m481.4 212.8-1-.2c-.4-3.7-2-7-4.3-9.6 2.8 1.8 4.8 5.7 5.4 9.8z"></path><path fill="#edb92e" d="M494.2 198.3c-.5 1-1 2.4-2 3.5-1.5 1.6-4 .5-6.5-1.6-.8-.6-2.2-1-3.6-1a6 6 0 0 0-3.4 1c-2.5 2-5 3.2-6.6 1.6-1-1-1.5-2.4-2-3.5h2.5c1.3.3 2.6.3 3.4-.4.6-.6.3-1 1.3-2.5a7 7 0 0 1 2.2-2.3c1-.5 1.7-.2 2.6-.2 1 0 2-.3 2.8.2.8.5 1.5 1.3 2.2 2.3 1 1.6.7 2 1.3 2.4 1 .6 2.2.6 3.5.4 1-.2 1.8-.2 2.4 0z"></path><path fill="#21231e" d="m492.6 202-.7-.6v-.2l.2-.2.2-.2v-.2h.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.2v-.2l.2-.3v-.4l1 .5v.4l-.2.2v.2l-.2.2v.4h-.2v.2l-.2.2v.3h-.2v.2h-.2v.2h-.2v.3l-.2.2-.2.2h-.2zm-7.3-1.4.7-.7h.2l.2.2.3.2.2.2.3.3h.3l.2.2h.2l.2.2h.2l.2.2h.2l.2.2h.4l.2.2h1.6l.2-.2.2-.2h.2v-.2l.8.7-.2.3h-.2v.3h-.3l-.3.2h-.3l-.2.2h-1.9l-.3-.2h-.3l-.2-.2h-.3l-.2-.2h-.3l-.2-.2-.2-.2h-.3l-.2-.3h-.3l-.2-.3-.2-.2-.2-.2-.2-.2-.3-.2zm.7-.7.5.3-.5-.4zm-4-.2v-1h2v.2h.7v.2h.4l.2.2h.2l.2.2h.2v.2h.2l-.7.8h-.2v-.2h-.2v-.2h-1v-.2h-1v-.2h-1zm-3 .8-.7-.7v-.2h.2l.2-.2h.2v-.2h.2l.2-.2h.5v-.2h1.2v-.2h1v1h-1.5v.2h-.5l-.2.2h-.4v.2h-.2l-.2.2zm-7.3 1.5.7-.6.3.2.2.2h.2v.2h1.7v-.2h.5l.2-.2h.2v-.2h.3l.2-.2.2-.2h.3l.2-.3h.2l.2-.3.3-.2v-.2h.3l.7.6-.3.2-.2.2-.3.2-.2.2-.2.2h-.3l-.2.3h-.3l-.2.2h-.2l-.3.2h-.2l-.2.2h-.2l-.2.2h-.3l-.3.2H473l-.4-.2h-.2l-.2-.2-.2-.2-.3-.3zm-1.7-4 .2 1 .3-.7v.2l.2.2v.3l.2.2v.4l.2.2v.2h.2v.4h.2v.4h.2v.2h.2v.2h.2v.2l.2.2-.7.7h-.2v-.2h-.2v-.2h-.2v-.5h-.2v-.2h-.2v-.3l-.2-.2v-.2h-.2v-.4h-.2v-.4l-.2-.2v-.4h-.2l.4-.8zm-.4.7-.2-.6.6-.2-.4.7zm3-.6-.2 1-.2-.2H470l-.2-1h2.4zm3-.5.7.8-.2.2h-.2l-.2.2h-.4l-.2.2h-2.8v-1h2.3l.2-.2h.4v-.2h.2zm.7.8-.5.4.5-.4zm.6-3 .7.5v.3l-.2.2v.2h-.2v.4h-.2v.8h-.2v.2h-.2v.2l-.2.2-.8-.7h.2v-.4h.2v-.4h.2v-.2l.2-.2v-.4h.2v-.3h.2v-.3zm2.3-2.5.5.8-.2.2h-.2v.2h-.2v.2h-.2l-.2.2-.2.2-.2.2v.2h-.2v.2l-.2.2-.2.2v.2l-1-.6.2-.2.2-.2v-.2h.2v-.2l.2-.2h.2v-.2l.2-.2.2-.2h.2v-.2l.2-.2h.2v-.2h.2l.2-.2zm2.8-.3v1h-2.3l-.5-.7h.2v-.2h.4l.2-.2h2zm3 .3-.5.8h-.4v-.2H482v-1h2.5l.2.2h.2l.2.2zm0 0 .3.2-.3-.2zm2.4 2.4-.8.6-.2-.2v-.2h-.2v-.2l-.2-.2-.2-.2-.2-.2v-.2h-.2v-.2h-.2v-.2h-.4v-.2h-.2v-.2l.4-.8h.2l.2.2.2.2h.2v.2h.2v.2h.2v.2h.2v.2h.2v.2l.2.2.2.2v.2h.2v.2h.2v.2zm1.3 2.3-.7.8-.2-.2h-.2v-.4h-.2v-.4h-.2v-.4l-.2-.2v-.2l-.2-.2-.2-.3v-.2l.8-.6v.2h.2v.3l.2.2v.2h.2v.4h.2v.4h.2v.4h.2zm-.7.8-.3-.3.3.3zm3.8-.4v1h-2.4l-.2-.2h-.2l-.2-.2h-.4v-.2h-.2l.7-1v.2h.2v.2h.8l.2.2h1.9zm3 .5-1-.4.3.8H492l-.2-1h2.4l.5.7zm-.5-.7h.6l-.3.7-.4-.7zm0 .5.4.2-.5-.2zm0-.5h.6l-.3.7-.4-.7z"></path><path fill="#edb92e" d="M482 211.7c4.4 0 8 3.4 8 7.7s-3.6 7.8-8 7.8-7.6-3.5-7.6-7.8 3.5-7.8 7.7-7.8z"></path><path fill="#21231e" d="m483 212.8.8-.2c.5-3.7 2-7 4.3-9.6a14.7 14.7 0 0 0-5 9.8z"></path><use xlink:href="#rs-b" width="1350" height="900" transform="matrix(-1 0 0 1 964.3 0)"></use><path fill="#edb92e" stroke="#21231e" d="M577 293.6c2 .3 3 1.5 3 2.8 0 1.3-1 2.6-3 3a8.7 8.7 0 0 1-1.6.2c-60.8 5.2-125.7 5.2-186.5 0a8.7 8.7 0 0 1-1.6-.3c-2-.3-3-1.6-3-3 0-1.2 1-2.4 3-2.7a8.6 8.6 0 0 1 1.5-.3c60.7-5.2 125.6-5.2 186.4 0 .6 0 1 .2 1.5.3z"></path><path fill="#21231e" d="M412 298.4h-.2v-.2h-.2v-1h.4v-.2.2-.2h2.3l.7-.2h3l.7-.2h3l.7-.2h3l.8-.2h3.3l.7-.2h3.8l.7-.2h.8v1.2h-2.9l-.7.2H428l-.7.2h-2.7l-.8.2H421l.7.2h3.7l.7.2h2.9l.7.2h3.7l.7.2h1.5v1.2h-3.7l-.7-.2h-3.8l-.7-.2h-2.9l-.7-.2H420l-.6-.2h-2.9l-.7-.2H413l-1-.2v-.2.2zm.2-.7zm46.6-2.6v1.3H453l-.7.2h-6.6l-.7.2h-5l-1 .2h-3.5v-1.2h3.5l.8-.2h5.2l.7-.2h5.9l.7-.2h6.8zm23.3 0v1h-13.7l-.7.2h-8.8v-1h1.4l.8-.2H482zm23.5 0v1.3h-11.1l-.7-.2H482v-1h23.6zm23.3 1v1h-5.2l-.8-.2h-5.2l-.7-.2h-6.5l-.8-.2h-4.3V295h.7l.7.2h7.5l.8.2h5l.8.2h5.1l.6.2h2.3zm23.4 1v.2h.4v1h-.2l-.2.2h-3l-.7.2h-2.2l-.7.2h-3.8l-.8.2h-2.8l-.7.2H534l-.8.2h-3.6l-.8.2v-1.2h2.2l.7-.2h3.7l.8-.2h3.7l.7-.2h1.8-1.4l-.8-.2h-2.7l-.7-.2H533l-.6-.2h-3.6V296h6.5l.7.2h3l.8.2h2.8l.7.2h3l.7.2h3l.7.2h1.5zm0 .7zm-116.7.7h.2l.2.2v.8h-.2v.2h-.2v-1.2zm93.3 1.2h-.2l-.2-.2v-.2h-.2v-.8h.2v-.2h.4v1.2zm-50.3-36.2v-1h3.8v1h-4zm0-1zm-1.2 0h1.2v1h-1.2v-1zm0 1zm-.6-1h.6v1h-.6v-1zm-1 0h1v1h-1v-1zm0 0zm-.8 0h.6v1h-.7v-1zm0 1zm-.5-1h.4v1h-.5v-1zm0 0zm-.8 0h.8v1h-.8v-1zm0 0zm-1.2 0h1.2v1h-1.2v-1zm-1 0h1v1h-1v-1zm0 0zm-.2 0h.2v1h-.2v-1zm-1 0h1v1h-1v-1zm-2.5 1v-1h2.6v1h-2.5zm0-1zm-.3 0h.2v1h-.2v-1zm0 1zm-.2-1h.2v1h-.2v-1zm0 0zm-1 0h1v1h-1v-1zm0 1zm-.5-1h.4v1h-.4v-1zm0 0zm-.4 0h.4v1h-.4v-1zm0 1zm-1.2-1h1.2v1h-1.2v-1zm0 0zm0 0v1-1zm0 1h-.2.2zm-1.2-1h1.2v1l-1.2.2v-1zm-.4 0h.4v1.2h-.4v-1zm-.8.2h.8v1h-.8v-1zm0 0h.3-.2zm-.3 0h.3v1h-.3v-1zm0 1h-.5.5zm-1-1h1v1h-1v-1zm-1 0h1v1h-1v-1zm0 0zm-.2 0v1-1zm0 1zm-1-1h1v1h-1v-1zm-.6 0h.5v1h-.4v-1zm0 0zm0 0v1-1zm0 1zm-4.2.2v-1h3.5v-.2h.4v1h-2.7l-.2.2h-.8zm0-1zm-.6 0h.5v1h-.6v-1zm0 0zm-1.7 0h1.6v1h-1.7v-1zm0 1zm-.2-1h.3v1h-.2v-1zm0 0zm-1.3 0h1.4v1h-1.3v-1zm-1 0h1v1h-1v-1zm-.6 0h.7v1h-.6v-1zm0 0zm0 0v1.2-1zm0 1.2zm-1.6-1h1.5v1h-1.5v-1zm0 1zm0-1v1-1zm0 0zm-1.2 0h1.2v1h-1.2v-1zm0 0zm0 0v1-1zm0 1zm-1.2-1h1l.2 1H444v-1zm-.8 0h.8v1h-.7v-1zm0 0zm-1.6.2h1.6v1h-1.5v-1zm0 1zm0-1v1-1zm0 0zm-6.2 1.3v-1h1.7l.2-.2h3.9v1H436l-.2.2zm0 0zm-.4-1h.3v1h-.2v-1zm0 0zm-9 1.4v-1h1.3l.3-.2h3.2l.3-.2h3.5v1h-5.1l-.3.2H426zm0 0zm-.3-1h.2v1h-.3v-1zm0 0zm-.5 0h.5v1h-.4v-1zm-18.2 2.2v-1h1.8l.5-.2h1.7l.5-.2h2.4l.6-.2h2.6l.6-.2h2.2l.6-.2h2.8l.6-.2h1.2v1h-2.1l-.6.2h-2.7l-.6.2h-2.3l-.6.2h-2.8l-.6.2h-2.2l-.5.2H408l-.6.2h-.6zm0 0zm-.3-1h.3v1h-.2v-1zm0 0zm0 0v1-1zm0 1zm-26.3 2.4v-1h.7l1-.2h.8l.8-.2h1.6l.8-.2h1l.7-.2h1.6l.8-.2h1.8l.8-.2h.8l1-.2h1.7l.7-.2h1.7l.8-.2h1.8l.7-.2h1.6l1-.2h1.5l1-.2v1H405l-.7.2h-1.7l-.8.2H400l-.7.2h-.8l-1 .2H396l-.8.2h-1.7l-.8.2H391l-.8.2h-.8l-.8.2H387l-1 .2h-.7l-.8.2H383l-1 .2h-.8l-.8.2zm0 0zm0-7v1h-.5l-.5.2h-.5l-.3.2-.4.2-.3.2h-.2l-.3.3-.2.2-.3.3v.5l-.2.2v1.1h.2v.3l.2.2.2.2.3.3.3.2h.2l.3.2h.3l.4.2h1v1h-1.6l-.4-.2-.4-.2-.3-.2-.3-.2-.3-.2-.4-.2-.2-.3-.2-.2v-.3l-.3-.3-.2-.3v-1.6l.2-.3.2-.3.2-.4.2-.3.2-.3.4-.3.3-.2.4-.2.3-.2h.4l.5-.2h.6l.5-.2zm0 1zm26.3-3.3v1H405l-.7.2h-1.7l-.8.2H400l-.7.2H396l-.8.2h-1l-.7.2H392l-1 .2h-1.6l-.8.2h-.8l-.8.2h-1.7l-.8.2h-.8l-.8.2H381l-.8.2v-1h1.7l.8-.2h.8l.8-.2h.8l.8-.2h1.7l.8-.2h1.6l1-.2h.8l.8-.2h1.8l.7-.2h1.7l1-.2h.7l.8-.2h1.8l.7-.2h1.6l1-.2h2.5zm0 1zm0 0v-1 1zm0-1zm37-2.2v1.2H439l-1 .2h-2.3l-1.3.2H431l-1.2.2h-2.2l-1.3.2H424l-1.2.2h-2.3l-1 .2H417l-1.2.2h-1.2l-1 .2h-2.3l-1.3.2h-1l-1.2.2h-1.2v-1h2.2l1.2-.2h1l1.2-.2h2.2l1.3-.2h1l1.2-.2h2.3l1-.2h2.3l1.3-.2h2.4l1.2-.2h2.3l1-.2h3.5l1.2-.2h3.5l1-.2h2.5zm1 1-1 .2v-1h1v1zm0 0zm.2 0h-.3v-1l.2 1zm-.2-1zm.4 1h-.3l-.2-1h.4v1zm1.2 0h-1.2v-1h1.2v1zm0 0zm0 0v-1 1zm0-1zm15.4-.4v1h-5.5l-.5.2h-6.5l-.4.2h-2.6v-1h5l.5-.2h7.7l.5-.2h1.8zm.8 1h-.8v-1h.8v1zm0 0zm0 0v-1 1zm0-1zm1.4 1h-1.4v-1h1.4v1zm0 0zm.2 0h-.2v-1h.2v1zm0 0h-.2.2zm0 0v-1 1zm0-1zm1.2 1h-1.2v-1h1.2v1zm.5 0h-.6v-1h.4v1zm-.2-1zm.8 1h-.7l-.2-1h.8v1zm1 0h-1v-1h1v1zm0 0zm.2 0h-.3v-1h.2v1zm0-1zm.4 1h-.4v-1h.4v1zm3-1 .2 1H468v-1h3.3zm1.2 1h-1v-1l1-.2v1zm0 0v-1.2 1zm0-1.2zm1.3 1h-1.2v-1h1.2v1zm3.5-1v1h-3.5v-1h3.5zm0 0zm0 1v-1 1zm0 0zm1.3 0h-1.2v-1h1.2v1zm3.6-1v1h-3.5v-1h3.7zm3.8 0v1H482v-1h3.8zm1 1h-1v-1h1.2v1zm.2 0zm0 0v-1 1zm0-1zm3.6 0v1H487v-1h4zm1 1h-1v-1h1.2v1zm.2-1zm0 1v-1 1zm1 0h-1v-1h1v1zm3.3-1v1H493v-1h3zm.5 1h-.4v-1h.5v1zm0-1zm.3 1h-.3v-1h.3v1zm0 0zm1 0h-1v-1h1v1zm.6 0h-.7v-1h.8v1zm0-1zm.5 1.2h-.6v-1h.5v1zm1 0h-1v-1h1v1zm0-1zm0 1v-1 1zm0 0h.3-.2zm.3 0h-.2v-1h.3v1zm0 0zm1.3 0h-1.3v-1h1.4v1zm0-1zm0 1v-1 1zm0 0h.2zm1 0h-1v-1h1v1zm15.2-.6v1h-6l-.4-.2H504l-.6-.2h-.9v-1h6l.4.2h6.6l.4.2h1.7zm0 0zm0 1v-1 1zm0 0zm1.3 0h-1v-1h1v1zm.4 0h-.3v-1h.5v1zm0-1zm.2 1h-.2v-1h.2v1zm0 0zm1 .2h-1v-1h1v1zm37 1v1h-2.3l-1.2-.2h-1l-1.2-.2h-2.2l-1.3-.2H546l-1-.2h-1.3l-1-.2h-2.3l-1.3-.2H537l-1-.2h-4l-1-.2h-2.6l-1-.2H524l-1-.2h-2.4v-1h4.7l1.2.2h3.3l1.3.2h2.3l1.3.2h2.3l1 .2h2.4l1 .2h2.3l1.3.2h2.3l1 .2h2.3l1.2.2h1.2l1 .2h1.3l1 .2h1.3zm0 0zm0 1v-1 1zm0 0zm26.4 1.4v1H582l-.8-.2h-.8l-.8-.2H578l-.7-.2h-.8l-.8-.2H574l-.8-.2h-.8l-.8-.2h-1.8l-.7-.2h-1.5l-.8-.2H565l-.8-.2h-1.7l-.8-.2H560l-.8-.2h-1.6v-1h3.5l.8.2h1.6l1 .2h1.7l.7.2h1.7l.8.2h1.8l.7.2h.8l.8.2h1.8l.8.2h.8l.8.2h1.8l.7.2h.7l.8.2h1.8l.7.2zm0 1zm0 6v-1h1.6l.3-.2h.3l.3-.2.2-.2.2-.2h.2v-.3l.2-.2v-.2h.2v-1.4l-.2-.3v-.2h-.3l-.2-.3-.3-.2h-.2l-.3-.3-.4-.2h-.4l-.4-.2h-.4l-.5-.2v-1h.5l.6.2h.5l.5.3.4.3.4.2.3.2.4.3.3.3.2.3v.3l.3.2v.3l.2.3v1.3l-.3.3v.3l-.3.3-.3.4-.3.2-.3.2-.2.2-.3.2-.4.2h-.3l-.4.2H584zm0 0zm-26.5-2.4v-1h1.8l.8.2h1.8l.8.2h1.8l.7.2h1.7l1 .2h.7l.8.2h1.8l.7.2h1.6l.8.2h1l.8.2h1.6l.8.2h1l.7.2h1.5l.8.2h1l.7.2v1h-1l-.8-.2h-1.6l-.8-.2h-.8l-.8-.2h-1.7l-.8-.2h-.8l-1-.2h-1.6l-.8-.2h-.8l-1-.2h-1.4l-.8-.2H566l-.7-.2h-1.6l-1-.2H561l-1-.2h-1.6l-.8-.2zm0 0zm0-1v1-1zm0 0zm-.2 0h.3v1h-.4v-1zm0 1zM539 265v-1h2.9l.5.2h3l.5.2h2.3l.6.2h2.2l.6.2h2.3l.5.2h2.4l.5.2v1h-1.7l-.5-.2h-2.3l-.6-.2H550l-.7-.2H547l-.6-.2h-2.9l-.6-.2H540l-.6-.2h-.6zm-.4-1h.5v1h-.4v-1zm0 0zm-.2 0h.2v1h-.2v-1zm0 1zm-9.2-.5v-1h4l.3.2h3.2l.3.2h1.3v1h-1.6l-.3-.2H533l-.4-.2h-3.3zm0-1zm-.3 0h.2v1h-.3v-1zm0 1zm-6.4-.3v-1h4.5l.2.2h1.7v1h-4.4l-.2-.2h-1.7zm0-1zm0 0v1-1zm0 1zm-1.5-1h1.7v1H521v-1zm0 0zm-.7 0h.8v1h-.7v-1zm-1-.2h1v1H519l.2-1zm-.2 1zm0-1h.2v1-1zm0 0zm-1 0h1v1h-1v-1zm0 0zm-.2 0v1-1zm0 1zm-1.4-1h1.4v1h-1.4v-1zm0 1zm-.2-1h.2v1h-.2v-1zm0 0zm-.6 0h.6v1h-.7v-1zm-1 0h1v1h-1v-1zm-1.4-.2h1.4v1h-1.4v-1zm0 0zm-.2 0h.2v1h-.2v-1zm0 1zm-1.6-1h1.6v1h-1.6v-1zm0 0zm-.6 0h.6v1h-.6v-1zm-4.2 1v-1.2h3.3l.2.2h.8v1h-4.3zm0 0zm0-1.2v1-1zm0 0zm-.5 0h.6v1h-.5v-1zm-1 0h1v1h-1v-1zm0 1zm0-1v1-1zm0 0zm-1.3 0h1.2v1h-1.3v-1zm-1 0h1v1h-1v-1zm0 1h.6-.6zm-.2-1h.3v1h-.3v-1zm0 0h-.3.3zm-.8 0h.8v1h-.8v-1zm-.4 0h.4v1h-.4v-1zm-1.2 0h1.3v1H500v-1zm0 1h.2zm0-1v1-1zm0 0zm-1 0h1v1h-1v-1zm0 1zm-.5-1h.4v1h-.6v-1zm0 0zm-.4 0h.5v1h-.4v-1zm0 1zm-1-1h1v1h-1v-1zm0 0zm-.2 0h.2v1h-.2v-1zm0 1zm-.3-1h.3v1h-.3v-1zm0 0zm-2.6.8v-1h2.3v1H494zm-1-1h1v1h-1v-1zm-.2 0h.2v1h-.2v-1zm0 0zm-1 0h1v1h-1v-1zm-1.2 0h1.2v1h-1.3v-1zm0 0zm-.8 0h.8v1h-.8v-1zm0 0zm-.4 0h.4v1h-.5v-1zm0 1zm-.7-1h.7v1h-.7v-1zm0 0zm-1 0h1v1h-1v-1zm-.7 0h.6v1h-.6v-1zm0 1zm-1.2-1h1.2v1H486v-1zm0 0zm-3.7 1v-1h3.9v1h-4.1zm.4 1.8L460 276.6l-.4-1 22.7-11.3h.4v1zm-.5-1h.4-.5zm22.7 12.4-23-11.4.4-1 22.7 11.5v1h-.3zm.4-1 1 .6-1 .4v-1zm-23 11.6 22.7-11.5.4 1-22.6 11.4h-.5v-.8zm.4 1h-.3.4zM460 275.7l22.8 11.5-.5 1-22.8-11.6v-1h.4zm-.4 1-1-.5 1-.5v1z"></path><path fill="#0c4076" d="M482 269c5.8 0 10.4 3.2 10.4 7s-4.6 7-10.3 7-10-3.2-10-7 4.5-7 10-7z"></path><path fill="#21231e" d="M493 276h-1v-.3l-.2-.3v-.5l-.2-.3v-.3l-.3-.3-.2-.4v-.3l-.3-.2-.2-.2-.2-.3-.3-.2-.3-.3-.3-.2-.3-.2-.2-.2-.4-.2-.4-.2-.3-.2-.4-.2h-.5l-.4-.3h-.4l-.5-.2h-.8l-.5-.2h-1.9v-1.2h1.7l.6.2h.5l.5.2h.5l.5.2h.4l.5.3.4.2.5.2h.5l.4.3.3.2.4.2.3.3.4.3.3.2.3.3.3.3.2.4.3.3.2.4.2.4.2.4v.3l.2.5v.4l.2.2v.8zm-11 7.4v-1h1.6l.5-.2h1.1l.5-.2h.5l.4-.3h.4l.5-.3h.4l.3-.3h.4l.4-.3.3-.2.4-.3.3-.2.3-.2.3-.3.2-.3.2-.2.3-.3v-.3l.3-.3h.2v-.4l.2-.3v-.7l.2-.3v-.3h1v.4l-.2.4v.4l-.2.4v.3l-.2.3-.2.3-.2.4-.2.3-.3.3-.2.3-.3.2-.3.3-.3.3-.4.3-.3.3-.4.2-.4.3-.5.2-.4.2-.4.2h-.4l-.5.3h-.4l-.5.3h-.5l-.5.2h-1.1l-.5.2H482zm-10.6-7.4h1v1l.2.3v.3l.2.2.2.3v.4l.3.3.2.3.3.2.2.3.3.3.3.2.3.2.2.3.3.2.4.2h.2l.4.3h.4l.4.3h.5l.3.3h.9l.5.2h1.5l.6.2h.5v1h-1.9l-.5-.2h-.5l-.5-.2-.5-.2h-.4l-.5-.3h-.4l-.4-.3-.4-.2-.4-.2-.4-.3-.4-.2-.3-.2-.4-.2-.4-.3-.3-.3-.3-.3-.2-.4-.3-.3-.2-.3-.2-.4v-.3l-.2-.4-.2-.4v-.8l-.2-.4v-.4zm10.7-7.4v1h-1.3l-.5.2h-.3l-.5.2h-.5l-.4.2h-.4l-.6.3h-.4l-.4.3-.4.2-.3.2-.5.2-.3.2-.3.2-.4.2-.3.3-.3.2-.2.3-.3.3-.2.3-.2.3v.3l-.2.2v.3l-.2.3v.7l-.2.3v.3h-1V275l.2-.5.2-.4v-.2l.3-.4.3-.3.2-.3.3-.3.2-.3.3-.2.3-.3.3-.2.3-.3.3-.3.4-.2.4-.2.4-.2h.4l.4-.3.5-.2.5-.2h.5l.5-.2h1l.5-.2h1.1l.6-.2h.5z"></path><path fill="#edb92e" d="M482 211.7c4.4 0 8 3.4 8 7.7s-3.6 7.8-8 7.8-7.6-3.5-7.6-7.8 3.5-7.8 7.7-7.8z"></path><path fill="#21231e" d="M490.4 219.4h-1v-1l-.2-.3v-.4l-.2-.3v-.4l-.2-.4v-.3l-.3-.3-.2-.3-.2-.3v-.3l-.3-.2-.2-.3-.2-.2-.3-.2-.3-.2-.2-.2-.3-.2-.3-.2-.4-.2h-.3l-.3-.3h-.4l-.3-.2h-.4l-.4-.2H482V211l.6.2h1.2l.4.2h.4l.4.2.3.2.4.2h.4l.4.3.3.3.4.2.4.2.3.3.3.3.2.3.3.2.2.3.3.3.2.3.2.5.2.3v.4l.3.4v.8l.2.4v.8l.2.4v.4zm-8.3 8.3v-1h1.5l.3-.2h.3l.3-.2.4-.2h.3l.3-.2h.3l.2-.3.3-.2.2-.2.3-.2.3-.2.2-.3.2-.2.2-.2v-.3l.3-.3.2-.3.2-.4v-.3l.2-.4v-.7l.2-.4v-.8l.2-.4v-.4h1v1.2l-.2.4v.5l-.2.4v.3l-.3.4v.3l-.3.4-.2.3-.2.4-.3.4-.2.3-.3.3-.2.3-.3.3-.3.2-.3.3-.3.3-.3.2-.3.2-.3.2h-.4l-.3.2-.4.2h-.4l-.4.2H482zm-8-8.3h1v1.8l.2.3.2.3v.3l.2.3.2.3.2.2.2.3.2.3.2.3.2.3.2.3.3.2.2.3.3.3.3.2.4.2h.3l.3.3h.3l.4.3h.3l.3.2h.7l.4.2h.7v1h-1.6l-.4-.2h-.3l-.4-.3h-.4l-.4-.3-.4-.3-.3-.2-.5-.2-.3-.2-.3-.2-.4-.2-.3-.3-.3-.3-.2-.3-.3-.3-.2-.3-.2-.3v-.3l-.3-.4v-.3l-.3-.4v-.4l-.2-.5v-.4l-.2-.3v-1.4zm8-8.3v1.2h-1.3l-.4.2h-.3l-.3.2h-.4l-.3.3h-.3l-.3.2-.3.2-.2.2-.3.2-.2.3-.3.3-.2.2-.2.3-.2.3-.2.4-.2.3-.2.3-.2.3v.3l-.2.3-.2.3v.7l-.2.3v1.1h-1v-1.6l.2-.4v-.4l.2-.4.2-.4v-.4l.3-.3v-.4l.3-.2.2-.3.3-.3.2-.3.3-.4.3-.3.3-.3.2-.2.3-.2.4-.3.2-.2h.4l.3-.2.3-.2h.4l.4-.2h.5l.4-.2h1.1z"></path><path fill="#edb92e" d="M482 213.7c3.3 0 5.8 2.6 5.8 5.7 0 3.2-2.5 5.8-5.7 5.8-3 0-5.5-2.6-5.5-5.8 0-3 2.5-5.7 5.6-5.7z"></path><path fill="#21231e" d="M488.3 219.4h-1V218h-.2v-.7l-.2-.2v-.2l-.2-.3-.2-.2v-.2l-.3-.2-.2-.2-.2-.2-.2-.2h-.2l-.2-.3h-.4l-.2-.3h-.2l-.3-.2h-.6l-.2-.2H482v-1h1.8l.3.2h.3l.2.2h.3l.3.3h.4l.2.3h.2l.3.3.3.2.2.2.2.2.2.3v.2l.3.3v.2l.3.3v.2l.2.3.2.3v.6l.2.2v1.3zm-6.2 6.3v-1h1.1l.2-.2h.3l.2-.2h.2l.2-.2h.4l.2-.2.2-.2h.2l.2-.3.2-.2h.2v-.2l.3-.2v-.2l.3-.3.2-.3v-.2l.2-.3v-.2l.2-.3v-1.3h1v2l-.2.3-.2.3-.2.4-.2.3v.2l-.3.2v.2l-.3.2-.2.3h-.2l-.2.3h-.2l-.2.3-.3.2h-.2l-.2.3-.3.2h-.2l-.3.2h-.3l-.3.2h-1.4zm-6-6.3h1v1.3l.2.3v.2l.2.3v.2l.2.2.2.4.2.2v.2h.3l.2.3.2.3v.2h.3l.2.3h.3l.2.2h.2v.2h.4l.2.2h.2l.3.2h.9v1h-1.5l-.3-.2h-.3l-.3-.2h-.2l-.3-.3-.3-.2-.3-.2-.3-.2h-.2l-.2-.3h-.2l-.2-.4-.2-.2-.2-.2-.2-.3-.2-.3v-.3l-.2-.3h-.2v-.4l-.2-.3v-.6l-.2-.3v-.9zm6-6.2v1H481l-.2.2h-.4l-.3.2-.3.3h-.5l-.2.3h-.2v.3l-.3.2h-.2l-.2.3v.3l-.2.2v.2l-.2.3v.2l-.2.2v.2l-.2.3v.4l-.2.2v.7h-1V218l.2-.4v-.3l.2-.3.2-.3v-.2l.2-.3.2-.2.2-.3.2-.2.2-.3.2-.2.2-.2.2-.2.2-.2h.3l.2-.3h.2l.3-.2h.2l.3-.2h.3l.3-.2h.5l.3-.2h.6z"></path><path fill="#0c4076" d="M482 215.8c2 0 3.7 1.6 3.7 3.6S484 223 482 223c-1.8 0-3.4-1.6-3.4-3.6s1.6-3.6 3.5-3.6z"></path><path fill="#21231e" d="M486.2 219.4h-1v-.8h-.2v-.3l-.2-.2v-.2l-.2-.2-.2-.2-.2-.3h-.2l-.3-.2h-.2l-.2-.2h-.2v-.2H482v-1h1.4v.2h.5v.2h.3v.2h.3v.3h.3v.2l.2.2.2.3.2.3v.2l.2.2.2.3v.4l.2.2v.6zm-4 4.2v-1h.6v-.2h.5l.3-.2h.2l.2-.2v-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2v-.2l.2-.2v-.4h.2v-1h1v1l-.2.2v.2l-.2.2v.2l-.2.2-.2.3-.2.2-.2.2-.3.2-.3.3h-.3l-.3.2-.3.2h-1l-.3.2zm-4-4.2h1v1.3l.2.2v.2l.2.2.2.2.2.2.2.2.2.2h.2v.2h.4l.2.2h.8v1.2h-.7l-.2-.2h-.3v-.2h-.5l-.2-.2-.3-.3h-.2v-.2l-.2-.2h-.2v-.2l-.2-.3-.2-.3v-.2l-.2-.2-.2-.3v-1.4zm4-4v1h-1l-.2.2h-.2l-.2.2h-.2v.2h-.2l-.2.3-.2.2-.2.2-.2.3v.4h-.2v1h-1V218l.2-.2.2-.3v-.2l.2-.2.2-.2.3-.3.2-.2.2-.2h.2l.2-.2h.2l.2-.2h.3l.3-.2h.9z"></path></g><path fill="#c6363c" d="M314.6 301.2v271.3c0 48.5 18.8 92.6 49.2 124.6A162.9 162.9 0 0 0 482 749a163 163 0 0 0 118.5-51.7c30.4-32 49.2-76 49.2-124.5V301.2h-335z"></path><path fill="#fff" d="M313.4 300v277l.2 4.6.3 4.5.3 4.6.5 4.4.5 4.5.7 4.3.8 4.4 1 4.3 1 4.2 1 4.3 1.2 4.2 1.3 4 1.4 4.2 1.4 4 1.7 4 1.6 4 1.8 4 2 3.8 1.8 3.8 2 3.7 2 3.7 2.2 3.6 2.2 3.6 2.4 3.5 2.4 3.6 2.4 3.4 2.6 3.3 2.6 3.2 2.7 3.2 2.8 3 3 3.2 1.6-1.7-2.8-3-2.7-3-2.6-3.3-2.5-3.2-2.7-3.3-2.4-3.3-2.5-3.4-2.2-3.5-2.3-3.5-2-3.6-2-3.6-2-3.7-2-4-1.8-3.7-1.7-3.8-1.6-4-1.7-4-1.4-4-1.5-4-1.2-4-1.2-4.2-1-4-1-4.3-.8-4.3-.8-4.3-.7-4.3-.6-4.2-.4-4.5-.4-4.4-.2-4.5-.2-4.5V302.5h332.7V577l-.2 4.5-.3 4.4-.3 4.3-.5 4.5-.6 4.3-.7 4.4-1 4.3-.8 4.3-1 4.2-1 4-1.2 4.3-1.3 4-1.3 4-1.4 4-1.6 4-1.6 4-1.7 3.8-1.7 3.8-2 4-2 3.6-2 3.6-2 3.6-2.3 3.5-2.3 3.5-2.3 3.4-2.5 3.3-2.6 3.3-2.6 3.2-2.6 3.2-2.7 3-2.8 3-3 3-2.8 3-3 2.7-3 2.6-3.3 2.6-3 2.6-3.4 2.4-3.3 2.5-3.3 2.3-3.4 2.2-3.5 2.2-3.5 2-3.5 2-3.6 2-3.7 1.7-3.7 1.8-3.8 1.7-3.8 1.5-3.8 1.4-4 1.3-3.8 1.3-4 1-4 1-4 1-4 1-4.2.6-4 .6-4.3.5-4 .4-4.3.4-4.3.2H482v2.4h4.5l4.3-.2 4.3-.3 4.4-.4 4.2-.4 4.2-.6 4.2-.8 4-.8 4.2-1 4-1 4-1.2 4-1.2 4-1.4 4-1.4 3.8-1.6 3.7-1.6 3.8-1.7 3.7-2 3.7-1.8 3.5-2 3.5-2 3.6-2.3 3.4-2.2 3.4-2.4 3.3-2.5 3.3-2.4 3.2-2.6 3.2-2.7 3-2.7 3-2.8 3-3 3-3 2.8-3 2.8-3 2.7-3.3 2.6-3.2 2.5-3.3 2.5-3.4 2.4-3.5 2.3-3.4 2.3-3.6 2-3.6 2.2-3.7 2-3.7 2-3.8 1.7-4 1.8-3.8 1.6-4 1.6-4 1.4-4 1.4-4 1.3-4.2 1.2-4.2 1-4.3 1-4.2 1-4.3.7-4.4.7-4.3.5-4.5.5-4.4.4-4.5.3-4.4V577l.2-4.5V300z"></path><g fill="#fff" stroke="#21231e"><path d="M483.7 734.8c1.4-.2 4 0 5.7-1.4 2.5-2 1.5-9.8 1.3-14.8-1-25.3-2.2-68-3.5-128-2-.2-3.6 0-5 .2a12 12 0 0 0-5 0c-1.4 59.8-2.5 102.5-3.6 127.8-.2 5-1.2 13 1.3 14.8 1.7 1.5 4.2 1 5.6 1.4h3z"></path><path d="M499.6 734c-1.5 0-4 .5-6-.8-2.6-1.7-2.8-9.7-3-14.7a6148 6148 0 0 0-7.6-127.6c2-.6 3.6-.6 5-.5.3 0 .5 0 .7-.2 9.6 59.2 13.2 101.2 19.7 126.5 1 3.5 2.8 12.2-.2 15-1.7 1.7-4.2 1.6-5.6 2l-3 .3z"></path><path d="M518.2 731.4c-1.5 0-3.8.8-6-.3-2.7-1.4-2.6-9.4-3.8-14.2-6.6-25.3-10.2-67.3-19.7-126.5 2-.7 3.6-.8 5-1h.2c15 57.6 19.6 98.2 31.4 123.2 1 3.5 4 12.7 1.2 16-1.5 1.7-4 1.8-5.4 2.3l-3 .6z"></path><path d="M537 726c-1.5.3-4 1.6-6 .7-3-1.2-3.5-9.7-5.6-14.2-11.8-25-16.3-66-31.7-124 2-.8 3.5-1 5-1.3 1.3-.6 1-1 3-1.2 18 57.3 23.7 97 40.5 121.8 2.7 4 4.7 12 3 14.5-1.5 2-4 2.3-5.3 3l-3 .8zm-72.2 8c1.4 0 3.8.5 5.8-.8 2.7-1.7 3-9.7 3-14.7a7227 7227 0 0 1 7.7-127.6c-2-.6-3.6-.6-5-.5a25.4 25.4 0 0 0-.7-.2c-9.6 59.2-13.2 101.2-19.7 126.5-1 3.5-3 12.2 0 15 1.8 1.7 4.3 1.6 5.7 2l3 .3z"></path><path d="M446 731.4c1.6 0 4 .8 6-.3 2.8-1.4 2.7-9.4 4-14.2 6.4-25.3 10-67.3 19.6-126.5-2-.7-3.6-.8-5-1h-.3c-15 57.6-19.6 98.2-31.4 123.2-1.2 3.5-4.2 12.7-1.3 16 1.5 1.7 4 1.8 5.4 2.3l3 .6z"></path><path d="M427.3 726c1.5.3 4 1.6 6 .7 3-1.2 3.5-9.7 5.6-14.2 11.7-25 16.2-66 31.6-124-2-.8-3.5-1-5-1.3-1.3-.6-1-1-3-1.2-18 57.3-23.7 97-40.5 121.8-2.6 4-4.6 12-2.8 14.5 1.4 2 4 2.3 5.2 3l3 .8zm99.7-43c-1.3 0-3.3 1-5.4 0-2.8-1.4-4.6-9-6-14-12-23.5-23-65.3-40.8-123.4 1.8-.7 3-1 4.5-1 1-.5 2.4-1 4.3-1.2 19.3 57.5 28 99 46.7 122 3 3.8 5.4 12 4 14.4-1.2 1.8-3.4 2-4.6 2.6l-2.7.6z"></path><path d="M512 685.8c-1.5 0-3.6.6-5.6-.5-2.6-1.6-3.5-9.4-4.5-14.3-5-25-13.7-67-26.3-126 1.8-.7 3.2-.8 4.5-.8 1.2-.4 2.6-.8 4.5-.8 15 58.7 18.3 102.6 32.4 125 2.6 4.2 4 12.5 2.3 14.8-1.3 1.7-3.5 1.7-4.8 2.2l-2.7.4z"></path><path d="M496.4 687.6c-1.4-.2-3.5.3-5.4-1-2.4-1.7-2.4-9.6-2.8-14.6-2-25.3-6-68-11.6-127.6 2-.5 3.3-.4 4.6-.3 1.2-.2 2.6-.5 4.5-.4 8 59.6 12.8 102.8 18 127.2 1 5 2.4 12.6.4 14.8-1.4 1.5-3.6 1.4-5 1.8l-2.6.2z"></path><path d="M437.2 682.8c1.4 0 3.4 1 5.5 0 2.8-1.4 4.6-9 6-14 12-23.5 23-65.3 40.8-123.4-1.8-.7-3-1-4.5-1-1-.5-2.4-1-4.3-1.2-19.3 57.5-28 99-46.7 122-3 3.8-5.4 12-4 14.4 1.2 1.8 3.4 2 4.6 2.6l2.6.6z"></path><path d="M452.4 685.8c1.4 0 3.5.6 5.5-.5 2.5-1.6 3.4-9.4 4.4-14.3 4.8-25 13.6-67 26.2-126-1.8-.7-3.2-.8-4.5-.8a12 12 0 0 0-4.4-.8c-15 58.7-18.3 102.6-32.4 125-2.5 4.2-4 12.5-2.2 14.8 1.3 1.7 3.5 1.7 4.7 2.2l2.7.4z"></path><path d="M468 687.6c1.3-.2 3.4.3 5.3-1 2.4-1.7 2.4-9.6 2.8-14.6 2-25.3 6-68 11.7-127.6-2-.5-3.3-.4-4.6-.3-1-.2-2.5-.5-4.4-.4-8 59.6-12.8 102.8-18 127.2-1 5-2.4 12.6-.4 14.8 1.5 1.5 3.7 1.4 5 1.8l2.7.2z"></path><path d="M483.5 688c1.3 0 3.5.2 5.2-1.3 2.3-2 1.4-9.8 1.2-14.8-1.2-25.4-2-68-3.3-128a14 14 0 0 0-4.6 0c-1.2-.2-2.5-.3-4.4 0-1.2 60-2 102.6-3.2 128-.2 5-1 12.8 1.2 14.7 1.6 1.5 4 1 5.2 1.4h2.7z"></path><path d="M516.5 648c-1 0-2.5 1-4 0-2.3-1.5-3.7-9.2-4.8-14-9.2-23.5-17.5-65.4-31.2-123.5 1.4-.7 2.4-1 3.4-1 .8-.5 1.8-1 3.3-1 14.7 57.4 21.3 99 35.7 121.8 2.4 3.8 4 12 3 14.5-.8 1.8-2.5 2-3.4 2.5l-2 .7z"></path><path d="M505 651c-1 0-2.7.6-4.3-.6-2-1.5-2.7-9.4-3.4-14.3-3.7-25-10.5-67-20-126 1.3-.6 2.3-.7 3.4-.7 1-.4 2-.7 3.4-.8 11.5 58.7 14 102.6 25 125.2 2 4 3 12.4 1.6 14.6-1 1.7-2.7 1.8-3.6 2.2l-2 .5z"></path><path d="M493 652.7c-1 0-2.6.4-4-1-2-1.7-2-9.6-2.2-14.5-1.5-25.4-4.5-68-9-127.7 1.5-.4 2.6-.4 3.6-.3 1-.3 2-.6 3.5-.4 6 59.6 9.7 102.7 13.6 127 .7 5 2 12.8.4 15-1.2 1.5-3 1.4-4 1.7l-2 .2z"></path><path d="M447.8 648c1 0 2.5 1 4 0 2.3-1.5 3.7-9.2 4.8-14 9.2-23.5 17.5-65.4 31-123.5-1.2-.7-2.2-1-3.2-1-1-.5-2-1-3.4-1-14.7 57.4-21.3 99-35.7 121.8-2.4 3.8-4.2 12-3 14.5.8 1.8 2.5 2 3.4 2.5l2 .7z"></path><path d="M459.4 651c1 0 2.6.6 4-.6 2.2-1.5 3-9.4 3.6-14.3 3.7-25 10.5-67 20-126a7.7 7.7 0 0 0-3.4-.7c-1-.4-2-.7-3.4-.8-11.4 58.7-14 102.6-24.8 125.2-2 4-3 12.4-1.7 14.6 1 1.7 2.7 1.8 3.6 2.2l2 .5z"></path><path d="M471.3 652.7c1 0 2.6.4 4-1 2-1.7 2-9.6 2.2-14.5 1.5-25.4 4.5-68 9-127.7a9.5 9.5 0 0 0-3.6-.3c-1-.3-2-.6-3.6-.4-6.2 59.6-9.8 102.7-13.7 127-.7 5-2 12.8-.4 15 1.2 1.5 3 1.4 4 1.7l2 .2z"></path><path d="M483.2 653.2c1-.2 2.7 0 4-1.4 1.7-2 1-9.7 1-14.7-1-25.3-1.6-68-2.5-128-1.5-.2-2.6 0-3.6.2-.8-.2-2-.4-3.4 0-1 59.8-1.6 102.5-2.4 128 0 5-.8 12.7 1 14.6 1.2 1.5 3 1.2 4 1.4h2z"></path><path d="M475 559c-.2 4.4-.3 9-.3 14l-10.6 2.3c0 4.8 12 55.4 18 55.4 6.3 0 18.2-50.6 18.2-55.5l-10.6-2v-.2c0-5 0-9.6-.2-14-2.2 2-4.7 5.2-7.3 8-2.4-2.8-5-6-7-8z"></path></g><g id="rs-d"><path fill="#edb92e" stroke="#21231e" d="M412 584.5c-3 .2-7 2-18.5 12-5 10.2-10 20.5-17 29.4-2.4 1.4-4.2 2.5-6 3.2a84 84 0 0 1-17-.5c-4.4-4-11.3-1.2-9 3.2-1.8 1.6 2.2 7.8 5.3 5.2 3-2.4 13-.2 16.4-1.4-1.3 3-10.4 5-16.8 5.5-5.8.2-5.4 6-3 10.5 2.7 1.8.5-.4 1.4.8 2.6 4 8.2 3.4 8.4-.4.2-4 13.8-9 15.8-12-2.5 6-8.2 11.5-11 17.3-3 3-5 3.7-1 10 4.4-.6 4.6-1.7 7.3.8 6-.6 7-2.4 6-7.2-1-5 3.2-14 4.6-16.6 1.2-2.4 1.5-4.8 2.8-6.3 2.2-2.5 12.6-7.7 15.2-6.3 5 2.7 8.7 1 9.3-3.7-1.6-1.2-.4-8-3.8-8.2-2.8-.3-4.4.6-7 2.7-4 3.2-6 5-7.4 4.6-3-.7 5.8-5 13.8-15.6 11-14.5 11.8-22 11.3-27z"></path><use xlink:href="#rs-c" width="1350" height="900" transform="matrix(-1 0 0 1 801.6 0)"></use><path fill="#edb92e" stroke="#21231e" d="M345.2 634.5c-4-2.3-6.3-2.2-8-.5-.7 1-1.8.5-1.2-1 2.7-6.3 7-7 10.7-4.2l2.8 2.7c-.6 1-3.8 2.3-4.3 3zm57.4-5.6c4.3-3 8.3-3.6 10.5-2 1.3 1 2.5.3 1.4-1.2-4.4-6.2-9.6-6.5-13.5-3-1.2 1-2 2-2.8 3 1.3 1.6 4.3 3.2 4.4 3zM369 664.4c.2-.2-1-5.4-2.6-7-1.4 1-3 2-4.3 3.5-4.2 4.5-4 11 2.5 16.7 1.6 1.5 2.4 0 1.7-1.7-1-2.7.3-6.3 3-11.5zM352.6 651c-4 1.6-5.4 3.7-5.2 6.4 0 1.5-1 2-1.5.3-4.8-11.2.2-13.3 7.5-13 .4 2-.7 6.2-.8 6.2z"></path><path fill="#21231e" d="m384 621.3 1 .6h-.2v1.8h.2v.4h.2v.2h.2l.2.3.3.2v.2h.4l.2.3h.2l-.6 1h-.2l-.3-.2h-.2l-.2-.2-.2-.2-.3-.3-.3-.3v-.2h-.2v-.3l-.2-.2v-.2h-.2v-.2l-.2-.2V622l.2-.3v-.2zm6.5.8-.8 1-.2-.2-.3-.2-.2-.2-.2-.2h-.3l-.2-.3-.2-.3-.3-.2-.2-.2-.3-.2h-.7l-.2-.2h-.7v.2h-.2l-.2.2v.2h-.2v.3l-.2.2-1-.7v-.3l.2-.2.2-.2.2-.2.3-.3h.3l.2-.2h.4v-.2h.8l.2.2h.4l.2.2h.2l.2.2h.2l.2.3h.2l.2.3h.2l.3.3.2.3.2.2.3.2.2.2h.3z"></path><path fill="#21231e" d="m387.3 617.6 1 .6v.4h-.2v.8l.2.2v.2l.2.2v.2l.2.2.2.3.3.2h.2l.2.2h.2l.2.2.2.2h.2l-.6 1h-.2l-.3-.2-.3-.3h-.2l-.2-.2-.2-.2-.2-.3v-.2h-.2l-.2-.2v-.2h-.2v-.5h-.2V618h.2v-.3zm6.5.8-.7 1-.2-.3h-.2l-.2-.3-.3-.2-.3-.3h-.2l-.2-.3-.2-.2-.3-.2-.3-.2h-.3v-.2h-.8l-.2.2-.2.2-.2.2v.2l-.3.2-1-.6.2-.3v-.2h.3v-.3h.3l.3-.3h.2l.2-.2h.2v-.2h1.4l.2.2h.2v.2h.3l.3.3h.2l.2.2h.2l.2.3h.2l.3.3v.2l.3.2.3.2.2.2z"></path><path fill="#21231e" d="m391 612.8 1 .6-.2.2v.6h-.2v1l.2.3v.3h.2v.4h.2l.2.3v.2h.2l.2.2.2.2.3.3.3.2h.2l.2.2-.6 1-.3-.2-.2-.2-.2-.2-.3-.2-.2-.2v-.2l-.3-.2v-.2l-.3-.2v-.2l-.3-.2v-.4l-.2-.3v-.2h-.2v-.7h-.2v-1l.2-.3v-.4l.2-.3v-.2zm7 1-.8 1-.3-.3-.3-.2-.3-.3-.3-.2v-.2l-.3-.2-.3-.2-.2-.2-.2-.2-.2-.2h-.2l-.2-.2-.3-.2h-.2l-.2-.2h-.7l-.2.2-.2.2-.3.3v.2h-.2v.4l-1-.6v-.3l.2-.2.2-.3v-.2l.3-.2.2-.2v-.2h.3l.2-.2h.3l.2-.2h1.2l.2.2h.2l.2.2.3.2h.3l.2.3.2.2h.3l.2.3.3.2.2.2.3.2.2.2.3.2.2.3.3.2z"></path><path fill="#21231e" d="m394.8 607.7 1 .5v.5l-.2.3v1.7l.2.2v.3l.2.2v.2l.2.2.3.3v.2l.3.2.2.2h.2l.2.3.2.2.3.2v.2l-.6.8-.3-.2v-.2l-.4-.2-.2-.3-.3-.3v-.2l-.3-.3-.2-.2v-.2l-.3-.3v-.2l-.3-.2-.2-.2v-.2l-.2-.2v-.3l-.2-.3v-2.1l.2-.2v-.2l.2-.3zm7.6 1.3-1 .8-.2-.3-.3-.3-.3-.2-.3-.3-.3-.3v-.2l-.4-.2-.2-.2-.2-.2-.2-.2-.2-.2h-.2l-.2-.2h-.2l-.2-.2h-.3v-.2h-.7v.2l-.3.2-.2.3-.2.2v.2l-.3.2v.2l-1.2-.5.2-.3.2-.3v-.2l.3-.3.2-.2.2-.2.3-.2.3-.2h.5l.3-.2h.8l.3.2h.2l.3.2h.2l.2.3.3.3.2.2.3.2.2.2h.3l.2.3.3.3.2.2.3.3.3.4.3.3.4.3z"></path><path fill="#21231e" d="m399 602.6 1.2.6v.2l-.2.2-.2.3v2.1l.2.2v.2l.2.2.2.2v.2l.2.2.2.2.2.2v.2l.3.2.2.2.2.2.3.2.2.2.3.2-.8 1-.3-.3-.2-.3-.3-.2-.3-.3-.2-.2-.3-.2-.2-.3v-.2l-.3-.2-.2-.2v-.2l-.3-.2v-.3h-.2v-.4l-.2-.2v-.2l-.2-.3v-2.6l.2-.2v-.2l.2-.2v-.2zm7.7 1.4-1 .8-.2-.3-.3-.3-.2-.3-.3-.3-.3-.3-.2-.2-.2-.3-.3-.3-.2-.2h-.2l-.2-.3-.2-.2h-.2v-.2h-1.3l-.3.2v.2h-.2v.3l-.3.2-.2.3v.2l-1.2-.6.3-.3.2-.3.2-.2.2-.3v-.2l.4-.2h.2l.2-.2h.2l.2-.2h1.7l.2.2.2.2h.2l.2.3h.3l.3.3.2.3h.3l.2.3.3.3.2.2.3.3.3.4.4.3.3.3z"></path><path fill="#fff" stroke="#21231e" d="m462.6 580.6-9.5-5.4c-4 3-6.8 13.5 0 22.2 8.5 11 12 18.7 14 27.5 6.2-8 8.3-16.3 4.4-24.5-5.3-11-8.7-17-8.8-20z"></path><path fill="#fff" stroke="#21231e" d="m470.4 573-9.5-5.4c-4 3-12.5 13.2-5.6 22 8.5 10.8 17.3 19 19.4 27.7 6.2-8 8.8-16.2 5-24.4-5.4-11-9.4-17.2-9.4-20z"></path><path fill="#fff" stroke="#21231e" d="m449.4 569.2-9.5-5.4c-4 3-7 13.5-.2 22.2a65 65 0 0 1 14 27.5c6.2-8 8.4-16.3 4.4-24.4-5.3-11-8.7-17-8.8-19.8z"></path><path fill="#fff" d="M405.5 469c.2 8.7-1.4 66.5-1.8 74.7-.5 8.2-4 13.7-8 17-3.5-5-5.6-11.5-6-19.3-.4-4 .4-58.7.7-70 6.4-17 11.2-17.8 15-2.4z"></path><path fill="#21231e" d="M404 543.8h-1l.2-1v-2.6l.2-1.7v-4l.2-2.3v-5l.2-2.7v-2.8l.2-3v-3l.2-3v-6.2l.2-3v-6.2l.2-3v-5.8l.2-2.7v-7.4l.2-2V469h1v11.7l-.2 2.5v8.3l-.2 2.8v6l-.2 3.2v3l-.2 3.2v6l-.2 3v3l-.2 2.8v5.3l-.2 2.5v2.3l-.2 2v3.6l-.2 1.5v2zm-8.7 17 .8-.5h-.6l.3-.4.4-.4.4-.3.4-.3.3-.4.5-.4.3-.3.3-.5.4-.4.4-.4.3-.4.4-.5.3-.4.2-.5.2-.5.3-.5.3-.5.2-.6.2-.5.3-.6.2-.5.2-.5v-.7l.3-.6v-.6l.3-.7v-.7l.2-.7v-.7l.2-.8v-1.5h1v2.3l-.2.7v.8l-.3.6v.8l-.3.7-.2.6-.2.8-.2.6-.2.6-.2.6-.3.6-.4.5-.2.6-.3.5-.2.5-.3.5-.3.5-.3.5-.4.4-.4.5-.3.4-.5.5-.3.4-.4.3-.3.4-.4.3-.2.4-.4.3-.4.3h-.7zm.7.2-.4.3-.3-.4h.7zm-7-19.5h1v.6l.2.8v1.4l.2.7v.6l.2.7v.6l.3.6v1.5l.3.5v.7l.3.6.2.6.2.6.2.6.2.5.2.7.2.6.2.5.3.6.2.5.3.4.2.6.3.5.3.5.3.5.2.4.3.4.3.5.3.3-.7.6-.3-.6-.4-.4-.3-.5-.3-.5-.3-.5-.3-.6-.2-.6-.3-.5-.4-.7-.2-.5-.3-.6v-.6l-.3-.5-.3-.5-.2-.6-.2-.7-.2-.6v-.7l-.3-.6-.2-.6v-.7l-.3-.5v-.7l-.2-.7-.2-.6v-.6l-.2-.7v-1l-.2-.8v-1.5zm1-70.2.8.3v8l-.2 2.3V492l-.2 2.7v11.6l-.2 3v19l-.2 2.2v11h-1v-20.9l.2-2.7v-14.6l.2-2.8V489l.2-2.6v-8.9l.2-2v-4.2zm0 0zm16-2.3h-1l-.4-1.3-.3-1.3-.4-1-.5-1.2-.4-1-.2-1-.4-.7-.4-.8-.4-.6-.4-.4-.4-.4-.4-.3-.3-.3h-.3l-.4-.2h-.7l-.4.3-.4.3-.5.5-.5.4-.5.5-.5.7-.5.7-.5.8-.5 1-.6 1-.5 1.2-.6 1.3-.6 1.3-.6 1.5-.6 1.6-1-.3.7-1.6.6-1.5.7-1.3.6-1.4.5-1.2.6-1 .5-1 .5-1 .5-.8.6-.7.5-.7.6-.6.6-.4.5-.4.6-.3.5-.2h1.1l.5.3.5.3.5.5.5.5.4.6.4.6.5.8.4.8.4 1 .5 1 .3 1 .4 1.4.4 1.3.4 1.4zm0 0z"></path><path fill="#fff" d="m368 454.8-2.6 79.6c-.8 7 8.4 49 13.5 57.4 12.3-5.3 15-33.8 12.6-61.6-2.4-27.8.4-51.8 2.3-56.8 0-6.3-1-12.8-1-19.3-8 .5-17.2.4-25 .8z"></path><path fill="#21231e" d="m365 534.4 2.4-79.6h1l-2.5 79.6h-1zm1 0zm12.7 57 .3.8-.6-.2-.5-1-.6-1-.5-1.2-.7-1.4-.5-1.6-.6-1.6-.6-1.8-.6-2-.5-2-.6-2-.7-2.2-.6-2.2-.6-2.3-.4-2.3-.6-2.3-.5-2.3-.6-2.3-.6-2.3-.4-2.2-.5-2.2-.4-2.2-.3-2-.4-2.2-.3-2-.3-1.8-.3-1.7-.2-1.6v-1.4l-.3-1.3v-2.8h1v4.1l.2 1.5.2 1.6.3 1.7.3 1.8.3 2 .4 2 .4 2.2.5 2.2.4 2.2.4 2.3.5 2.2.4 2.3.6 2.3.5 2.4.6 2.3.7 2.2.5 2.2.6 2 .6 2.2.6 2 .6 2 .5 1.7.7 1.5.6 1.5.5 1.4.5 1.2.5 1 .5 1-.6-.3zm.3.8-.4.2-.2-.4.6.2zm12-62h1l.3 2.5v2.7l.3 2.6v2.6l.2 2.6v12.5l-.3 2.4-.2 2.5-.2 2.3v2.3l-.4 2.3-.4 2.2-.3 2-.6 2-.4 2-.6 2-.5 1.7-.8 1.7-.6 1.5-.7 1.5-1 1.5-.7 1.3-1 1.2-1 1-1 1-1 1-1 .6-1.3.6-.3-1 1-.4 1-.7 1-.7 1-1 1-1 .7-1 .8-1.3.8-1.4.7-1.5.6-1.5.6-1.6.5-2 .5-1.7.5-2 .4-2 .3-2 .3-2 .3-2.3v-2.3l.4-2.3V558l.3-2.3V538l-.2-2.6-.2-2.6-.2-2.6zm2.4-56.8h1v.2l-.2.5-.2.7-.2.7-.2 1-.2.8-.2 1-.2 1.2v1.2l-.3 1.3-.2 1.3-.2 1.4v1.6l-.3 1.6v1.7l-.3 1.7v2l-.2 1.8v2l-.2 2V520l.2 2.5.2 2.5.2 2.6v2.5l-1 .2v-2.6l-.3-2.5-.2-2.5V520l-.2-2.5v-20.1l.2-2v-2l.3-2v-1.7l.2-1.7.2-1.8.2-1.6v-1.4l.3-1.5.2-1.3v-1.2l.3-1V477l.3-1 .2-.8.2-.7.2-.7.2-.5zm1 0v.2-.2zm-1.5-18.8v-1l.4.4v3.7l.2.6v2.5l.2.6v1.8l.2.6v2.4l.2.6v3.6l.2.6v2.4h-1V468l-.2-.5V465l-.2-.5v-1.9l-.2-.6v-1.7l-.2-.6v-3l-.2-.6V454l.5.6zm0-1h.4v.4l-.5-.4zm-24.6 1.2h-1l.4-.5h3.9l.8-.2h12.8l.8-.2h4.7l.8-.2h1.7v1h-4.1l-.7.2h-8l-.8.2h-7.1l-.8.2h-3.9l.4-.4zm-1 0v-.4h.4l-.4.4zm.5 0h.4-.5zm-.6 0v-.4h.4l-.4.4z"></path><path fill="#fff" d="m353 468 1.8 79.5c-.4 7 11 48.5 16.4 56.5 12.6-9.8 10-49.8 8.2-62-4-24-3.2-52-2-56.5 0-6.3-.2-13.8-.6-20.4-8 1-15.8 2-23.7 2.8z"></path><path fill="#21231e" d="m354.3 547.5-1.7-79.6 1-.2 1.7 79.6h-1zm1 0zm15.6 56 .5 1-.7-.2-.5-1-.6-1-.6-1.2-.5-1.2-.7-1.6-.6-1.6-.7-1.8-.7-1.8-.7-2-.5-2-.7-2.2-.7-2.2-.6-2.2-.7-2.3-.7-2.2-.7-2.3-.6-2.3-.6-2.3-.5-2.3-.6-2.2-.6-2.2-.5-2-.6-2-.4-2-.4-2-.4-1.6-.3-1.6-.3-1.3-.2-1.3v-1.2l-.2-1v-.8h1v1.8l.2 1 .2 1.3.2 1.5.2 1.5.3 1.7.4 2 .4 1.8.4 2 .5 2 .6 2.2.4 2.2.6 2.3.7 2.3.6 2.3.7 2.2.6 2.3.7 2.3.7 2.3.7 2.2.7 2 .7 2.2.8 2 .7 1.8.6 1.7.8 1.7.6 1.4.6 1.3.6 1.2.5 1 .6.7h-.7zm.5 1-.4.2-.2-.4h.7zM379 542l1-.2v1.2l.2 1.4.2 1.5.2 1.8.2 1.7v2l.3 2 .2 2v2l.2 2.3v12l-.2 2.4v2.3l-.3 2.4-.4 2.4-.3 2.4-.3 2.2-.4 2.2-.5 2.2-.4 2-.6 2-.7 2-.8 1.6-.8 1.7-1 1.5-1 1.3-1 1.4-1.2 1-.6-.8 1-1 1-1 1-1.4.8-1.4.8-1.6.8-1.7.6-1.8.6-2 .5-2 .6-2 .4-2.2.4-2.3.3-2.3.2-2.4v-2.3l.3-2.4V569l.2-2.2V560l-.2-2.3v-2.2l-.2-2v-2l-.2-2-.2-1.6-.2-1.8-.2-1.5v-1.3l-.3-1.2zm-2-56.7h1v.6l-.2.7-.2.7v1l-.2.8v2.4l-.2 1.3v2.8l-.2 1.6v15.2l.2 2v2.3l.3 2v2.4l.3 2.3v2.2l.3 2.2.4 2.3.2 2.4.3 2.2.2 2.3.3 2.2.4 2.3-1 .2-.5-2.3-.3-2.4-.3-2.3-.4-2.3-.2-2.4-.2-2.3-.2-2.3-.2-2.3-.2-2.2v-2.3l-.3-2.2V512l-.2-2v-16l.2-1.4v-1.3l.2-1.2v-2l.3-1v-.8l.2-.6v-.7.2zm1 0zm-1.2-20v-1l.5.6v3.4l.2.7v3.8l.2.6v6l.2.6v5.3h-1V480l-.2-.7v-5.7l-.2-.6v-4.5l-.2-.7v-2.4l.4.4zm0-1h.4v.6l-.5-.4zm-23.7 4v-1l.8-.2h.8l.7-.2h2.2l.7-.2h.8l.7-.2h.8l.7-.2h1.4l.7-.2h.8l.7-.2h.6l.8-.2h1.7l.6-.2h.7l.8-.2h.8l.7-.2h1.5l.8-.2h.7l.7-.2h.8l.7-.2v1h-.6l-.6.2h-.8l-.7.2h-1.6l-.7.2h-.8l-.8.2h-.8l-.7.2h-1.5l-.7.2h-.8l-.7.2h-.7l-.8.2H362l-.7.2h-.7l-.8.2h-.7l-.6.2H357l-1 .2h-.6l-.7.2h-.8l-.8.2zm.2 0zm0-1v1l-.6-.6.5-.6zm-.6.4v-.6h.5l-.4.5z"></path><path fill="#fff" d="m342.2 486.7 21-.5c-2 8.6-.5 35.6 3.2 56.2 3.3 19.3 8 69.3-12 81.3-12.5-26.4-3-52-9.2-75-5-24.3-6-44.6-3-62z"></path><path fill="#21231e" d="m363 486.7-20.8.5v-1l21-.5.4.6-.5.4zm0-1h.7v.6l-.6-.6zm3.8 56.6-1 .2-.3-2-.3-2-.3-2-.4-2-.3-2-.2-2-.2-2.2-.2-2-.2-2.2-.2-2-.2-2-.2-2-.2-2.2v-2l-.3-2v-2l-.2-2V499l-.2-1.7v-4.5l.2-1.4v-1.2l.2-1.2v-1l.3-1v-1l1 .3v.8l-.2 1v1l-.2 1.3v5.4l-.2 1.6v4.9l.2 1.8v4l.2 1.8v2l.3 2v2l.3 2 .2 2v2l.3 2.2.3 2 .2 2.2.3 2 .3 2 .3 2 .3 2.2.2 2 .3 2 .3 2zM354 624l.8-.6-.7-.2 2-1.2 1.5-1.4 1.5-1.6 1.4-1.8 1.3-2 1-2 1-2.3 1-2.6 1-2.5.6-2.8.6-2.7.4-2.8.4-3 .4-3 .3-3 .2-3v-3l.2-3v-6.2l-.2-3-.2-3v-3l-.4-3-.2-2.7-.3-2.7-.2-2.5-.4-2.5-.2-2.4-.3-2.2-.3-2-.3-2h.8l.4 1.8.3 2 .3 2.3.3 2.3.4 2.5.3 2.7.3 2.7.2 2.8.2 3 .2 2.8.2 3v15.5l-.3 3-.3 3.2-.4 3-.4 2.8-.5 3-.8 2.7-.7 2.7-.8 2.6-1 2.4-1 2.4-1.2 2.2-1.3 2-1.4 2-1.6 1.5-1.7 1.5-1.8 1.3h-.7zm.7 0-.5.4-.3-.5h.7zm-10-75.2 1-.2.5 2.2.4 2.2.4 2.2.3 2.2.3 2.2.2 2.3v2l.2 2.4v25.4l.2 2.4v2.4l.3 2.4.3 2.4.3 2.4.5 2.4.4 2.4.5 2.4.7 2.5.7 2.4.8 2.5 1 2.5 1 2.4-.8.5-1.2-2.6-1-2.5-.8-2.6-.8-2.5-.7-2.5-.5-2.5-.5-2.4-.4-2.5-.2-2.3-.3-2.5-.2-2.4V594l-.2-2.4V564l-.2-2.3-.2-2.3-.2-2.2-.4-2.2-.3-2-.5-2.3-.5-2v-.2zm0 0zm-2.5-62.6v1l.5-.4-.3 1.6-.2 1.7-.2 1.7-.2 1.7-.2 1.7v1.8l-.3 1.8v3.5l-.2 2v7.3l.2 2v1.8l.2 2v2l.2 2 .2 2 .2 2 .2 2 .3 2 .2 2 .3 2.3.3 2 .3 2.2.4 2.2.4 2.2.4 2 .4 2.4.4 2.2-1 .2-.4-2.2-.4-2.3-.4-2.2-.4-2-.3-2.3-.4-2.2-.3-2-.3-2.2-.2-2-.3-2.2-.2-2-.2-2-.2-2v-2l-.2-2v-2l-.2-1.8v-13l.2-1.8v-1.8l.2-1.7.2-1.7.2-1.7.2-1.7.2-1.7.3-1.7.5-.4zm-.5.4v-.4h.5l-.5.4zm.5 0v-.4.5zm-.5 0v-.4h.5l-.5.4z"></path><path fill="#fff" d="M422 454.4c0 8.7-3.2 66.5-4 74.6-.7 8-4.5 13.6-8.4 16.6-3.4-5-5.3-11.5-5.5-19.3 0-4 2.3-58.7 3-70 7-17 11.8-17.4 15-2z"></path><path fill="#21231e" d="M418.5 529h-1v-1l.2-1v-1.5l.2-1.7v-2l.2-2v-2.3l.3-2.4v-2.5l.3-2.7.2-2.8v-3l.3-3 .2-3 .2-3v-3l.3-3.2.2-3 .2-3.2v-3l.3-3V474l.3-3v-2.5l.2-2.4V464l.2-2v-2l.2-1.8v-3.7h1v5.6l-.2 2v2l-.2 2.3v2.6l-.3 2.6-.2 2.7v2.8l-.3 3-.2 3v3l-.3 3-.2 3v3.2l-.3 3-.2 3.2-.2 3v3l-.2 2.7-.2 2.6v2.6l-.3 2.4v2.3l-.3 2v2l-.2 1.5v1.5l-.2 1.2v1zm-9.3 17 .8-.6-.7-.2.4-.2.3-.3.4-.4.3-.3.4-.3.4-.4.4-.3.3-.4.4-.4.4-.4.3-.5.4-.4.3-.6.3-.4.3-.5.3-.5.3-.5v-.5l.4-.6.2-.5.3-.7v-.6l.3-.6.2-.5.2-.7.2-.6V532l.3-.8v-.8l.2-.7v-.7h1v1.6l-.2.7-.2.7v.7l-.2.7-.2.7-.2.8-.2.6-.2.6-.2.6-.3.6-.2.6-.3.6-.3.5-.2.5-.3.5-.3.5-.5.5-.3.5-.3.4-.4.4-.4.4-.3.4-.5.4-.4.4-.2.4-.4.3-.4.4-.3.4-.4.3-.4.3h-.8zm.7 0-.5.4-.3-.5h.7zm-6.4-19.7h1v2.8l.2.8v.7l.2.7v1.2l.3.6v.8l.2.6.2.7v.7l.3.6v.6l.3.5.2.6.2.6.2.6v.6l.3.5.3.6.2.4.2.5.3.5.3.5.2.5.3.4.4.4.3.5.3.4-.8.5-.3-.6-.4-.4-.3-.5-.3-.6-.3-.6-.3-.5-.3-.6v-.6l-.4-.5-.2-.6-.2-.6-.2-.4-.2-.6-.2-.6-.2-.6-.2-.6-.2-.7-.2-.6v-.7l-.3-.7v-.6l-.2-.7v-.6l-.2-.7v-1.4l-.2-.7v-1.5l-.2-.7v-1.5zm3-70 .8.3v-.2 2.6l-.2 1.6v2l-.2 2v2l-.2 2.4v2.5l-.2 2.6v2.8l-.3 2.8v2.8l-.2 3v2.8l-.2 3v3l-.2 2.8v3l-.3 2.7v2.7l-.2 2.7v7.3l-.2 2v3.8l-.2 1.6v3.3h-1v-6.8l.2-2V513l.2-2.4V508l.2-2.6.2-2.8v-2.8l.2-3V494l.2-3 .2-2.8v-3l.2-2.8v-3l.3-2.7V474l.2-2.5V469l.2-2.4v-4.2l.2-1.8V459l.2-1.5v-1.2zm-.2 0zm16.2-2h-1v.2l-.3-1.4-.3-1.2-.3-1.2-.4-1-.3-1-.4-1-.3-1-.4-.6-.5-.6-.4-.5-.2-.5-.4-.4h-.4l-.3-.2h-1.1l-.4.2-.5.2-.4.4-.5.5-.5.6-.6.7-.5.7-.5 1-.6.8-.5 1-.6 1.2-.7 1.2-.6 1.4-.6 1.4-.6 1.6-1-.4.7-1.6.8-1.4.6-1.4.6-1.2.6-1.2.6-1 .6-1 .6-1 .6-.7.5-.7.6-.6.6-.6.6-.4.5-.3h.6l.5-.3h1.2l.5.3.5.4.5.4.4.5.4.6.4.5.4.8.3 1 .4.8.3 1.2.3 1 .4 1.3.3 1.4.3 1.3zm0 0zm-.5 0h.6-.5zm.6 0z"></path><path fill="#fff" d="M385 407.2c-.6 18.7-1 59-.8 62.6a51 51 0 0 0 6.7 22.6c4-3 7.7-8.5 8.4-16.6.6-6.7.8-39.5 1-56-4.3-2.6-8.7-6-12.2-9.7l-3.2-2.8z"></path><path fill="#21231e" d="M384.7 469.8h-1v-23.4l.2-2.4v-19.6l.2-2.4v-9l.2-2v-3.8h1v7.8l-.2 2.4v9.4l-.2 2.5v12.5l-.2 2.4v25.4zm6 22.2.5.8h-.7l-.3-.6-.3-.5-.4-.6-.4-.4-.3-.6-.4-.6-.3-.7-.3-.6-.2-.6-.3-.7-.3-.7-.3-.7-.3-.7-.3-.8-.2-.7-.3-.7-.3-.8-.2-.8-.2-.7-.2-.8v-.8l-.3-.8v-.8l-.3-.8v-.8l-.2-.8v-.8l-.2-.8v-.7l-.2-.7v-1.5h1v2.5l.2.8v.8l.3.7v.8l.2.8.2.8.2.8v.7l.2.7.3.8.2.7.2.8v.8l.4.7.2.7.3.7v.7l.4.6.3.7.3.7.2.6.3.6.3.5.3.6.4.6.3.6.3.5.3.4h-.7zm.5.8-.4.3-.3-.3h.7zm7.7-17h1l-.2.8v.8l-.2.7v.8l-.3.7-.2.7v.7l-.2.5-.2.7-.2.6-.3.6v.6l-.4.6-.2.6-.3.5-.2.5-.3.6-.3.5-.3.5-.4.4-.4.5-.3.4-.5.6-.3.4-.4.4-.3.4-.4.4-.3.3-.3.4-.4.2-.4.3-.4.3-.6-.8.4-.3.3-.3.4-.3.4-.2.4-.4.4-.3.3-.3.4-.4.4-.4.3-.5.4-.4.3-.3.3-.5.3-.5.3-.4.3-.5.2-.6.3-.5.2-.5.3-.6.2-.6.2-.5.2-.6.2-.8.2-.6.2-.6v-.7l.3-.7v-.7l.2-.8v-.7l.2-.8zm1-55.5.6-.8.2.4v18.8l-.2 2.2v14.6l-.2 2v8.9l-.2 1.5v4.3l-.2 1v2.6h-1V471l.2-1.5v-6.3l.2-1.8v-12l.2-2v-20.8l.2-1.7v-5.1l.2.3zm.6-.8h.2v.4l-.2-.5zm-12.4-9.8v1l.4-1 .3.4.2.5.4.3.3.3.3.5.3.3.4.3.3.4.4.4.3.3.4.4.4.3.4.3.3.3.4.3.3.4.4.3.4.3.5.3.3.2.4.2.4.3.4.3.4.3.4.3.4.3h.4l.4.4.4.3.4.2.4.2.4.3-.6.8-.4-.3-.4-.2-.4-.3-.4-.3-.4-.2-.4-.3-.4-.3-.4-.3-.4-.2-.4-.3-.4-.3-.4-.3-.4-.4-.3-.3-.4-.3-.3-.3-.4-.3-.4-.3-.5-.2-.4-.3-.2-.3-.4-.4-.4-.3-.3-.3-.4-.3-.4-.5-.4-.3-.4-.3-.3-.5-.5-.3-.3-.4-.3-.3.2-.8zm-.3.8-1-.8h1.2l-.3.8zm-2.5-3.3h-1l1-.3.2.2.2.2v.2h.3v.3h.4v.2l.3.2.3.2v.2h.3v.2h.2v.2h.3l.2.2v.2h.2v.2l-.2.8v-1l-.3 1h-.2v-.2h-.2v-.2h-.2v-.2h-.2l-.2-.2v-.2h-.2l-.2-.2-.3-.3h-.3v-.3h-.3v-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2h-.2l1-.4zm-1 0v-1.4l1 1-1 .4z"></path><path fill="#fff" d="M400 419.3c-.4 20-.2 51.7 0 54.3a34 34 0 0 0 5.4 19.3c4-3.2 8-8.8 8.8-17 .5-5 2-26.4 2-42.8-5.3-1.7-12-10.4-16.3-14z"></path><path fill="#21231e" d="M400.4 473.5h-1v-12.9l-.2-1.7v-33.7l.2-2v-4h1v14.5l-.2 2v37.1l.2.5v.3zm4.7 19 .7.8h-.7l-.3-.6-.3-.5-.3-.5-.2-.5-.3-.5-.3-.5-.2-.6-.3-.5-.2-.5-.3-.5-.2-.6-.2-.6-.2-.6-.2-.6-.2-.6-.2-.6-.2-.6v-.6l-.3-.7v-.6l-.3-.8v-.6l-.2-.7v-.8l-.2-.6v-.7l-.2-.8v-1.5l-.2-.7v-1.4h1v2.8l.2.7v.7l.2.7v.7l.2.7v.7l.2.6v.7l.3.6v.6l.3.5v.6l.3.7.3.6.2.6.2.5.2.5v.6l.4.5.2.7.3.5v.5l.4.5.2.5.3.5.2.5.3.5.3.4h-.7zm.7.8-.4.3-.3-.4h.7zm8-17.3h1v1.7l-.3.7v.7l-.3.8v.7l-.2.7-.2.7-.2.5-.3.7v.6l-.4.6-.2.6-.3.5-.2.6-.3.6-.4.6-.2.5-.3.5-.4.5-.2.4-.4.6-.3.4-.3.5-.3.4-.4.3-.4.3-.4.4-.3.3-.5.4-.4.3-.3.3-.6-.8.5-.3.3-.3.4-.4.4-.3.3-.4.3-.4.3-.4.4-.4.3-.4.4-.4.3-.5.3-.4.4-.4.3-.5.3-.3.3-.6.3-.4.2-.5.3-.5.2-.5.3-.6.2-.6.2-.6.2-.6.2-.7.2-.7.2-.7v-.7l.3-.8v-.7l.2-.7v-.8zm2.4-42.3.4-1 .3.5v7.9l-.2 1.6v5.1l-.2 1.6v1.7l-.2 1.7v4.6l-.2 1.6v2.9l-.2 1.3v1.4l-.2 1.3v2.5l-.2 1v2.2l-.2 1v1.6l-.2.7v1.1h-1v-2l.2-.8v-1.8l.2-1v-2.2l.2-1.2v-2.7l.2-1.3v-1.5l.2-1.4V457l.2-1.6v-1.6l.2-1.6V449l.2-1.6V443l.2-1.6V433l.5.5zm.4-1h.3v.5l-.3-.5zm-16-13.4h-1l.8-.4.5.2.4.4.5.4.5.4.5.5.4.4.4.4.5.5.4.6.5.4.4.5.5.4.5.6.5.5.5.5.5.6.6.5.5.6.7.5.5.6.5.5.6.5.5.5.5.4.6.4.4.4.5.3.4.3.5.3.4.3.5.2.4.2-.3 1-.5-.2-.5-.3-.5-.2-.6-.3-.6-.4-.6-.3-.5-.4-.6-.4-.5-.4-.6-.5-.5-.5-.5-.5-.5-.5-.6-.5-.5-.5-.7-.5-.5-.6-.5-.5-.6-.5-.5-.6-.5-.4-.5-.5-.5-.5-.5-.5-.5-.5-.5-.4-.4-.4-.5-.4-.4-.5-.6-.4-.4-.3-.4-.4.8-.3zm-1 0v-1l.8.6-.8.2z"></path><path fill="#fff" d="M387 405.6 373 385c-2.8 10.2-6.3 82.8-2.2 88.8a36 36 0 0 0 6.4 19.3c4-3 9.8-8.5 8-16.7-1.6-8.2.4-62.3 2-70.7z"></path><path fill="#21231e" d="m373.3 384.7 14.2 20.6-.8.5-14.3-20.5v-.4l1-.3zm-1 .2.4-1 .5.7-.8.2zm-1.2 88.7h-1l.2.3-.5-.8-.3-1.2-.3-1.5v-1.8l-.3-2-.2-2.5v-2.6l-.2-2.8v-20.3l.2-3.7V431l.2-4 .2-3.6v-3.8l.3-3.7.2-3.7.2-3.4.3-3.5.2-3.2.3-3 .2-3 .3-2.5.3-2.4.2-2 .3-2 .3-1.3.4-1 1 .2-.3 1-.2 1.5-.3 1.8-.3 2-.2 2.4-.3 2.5-.3 2.8-.2 3-.3 3.3-.3 3.3-.2 3.4-.2 3.6-.2 3.7v3.7l-.3 3.8v3.8l-.2 3.7v3.8l-.2 3.6v19.6l.2 2.6.2 2.3.2 2v1.8l.4 1.5.3 1 .3.7v.2zm0-.2v.2-.2zm5.7 19.2.6.8-.7-.2-.3-.4-.3-.6-.3-.5-.3-.6-.3-.5-.2-.6-.3-.6-.3-.5-.3-.6-.4-.5-.2-.6-.3-.6v-.6l-.4-.6-.2-.6-.2-.6-.3-.6-.3-.6-.2-.7v-.6l-.3-.5-.2-.7v-.7l-.3-.6v-.6l-.2-.7v-.6l-.2-.7v-1.5l-.2-.7v-.7h1v1.4l.2.7v.6l.2.6v.7l.2.6v.7l.2.6.2.6v.6l.3.6.2.7.2.6.2.7v.6l.3.6.2.5.3.6.2.6.3.6.2.5.3.6.3.5.3.5.3.6.3.4.2.5.3.4.3.4.3.5.4.5h-.7zm.6.8-.4.3-.4-.5.7.2zm7.4-17 1-.3v.8l.2.7v3l-.2.7-.2.7v.7l-.3.7-.2.6-.2.6-.2.6-.3.6-.3.5-.4.6-.3.4-.4.5-.5.4-.3.5-.4.4-.4.4-.4.4-.5.5-.4.4-.3.5-.4.3-.4.4-.5.3-.4.3-.3.4-.4.3-.6-.8.4-.3.5-.3.4-.2.3-.4.3-.3.4-.3.4-.4.4-.3.4-.4.4-.5.4-.3.4-.4.4-.5.3-.5.5-.5.3-.5.3-.5.4-.5.3-.5.2-.6v-.6l.3-.5.2-.5.2-.7v-.6l.2-.6v-3.1l-.2-.7v-.6zM387 406v-1l.6.7-.2 1-.2 1v1.4l-.3 1.7-.2 2-.2 2v2l-.3 2.4v2.5l-.3 2.6v2.8l-.2 2.7-.2 2.8v3l-.2 2.8v3l-.2 3v8.5l-.2 2.8v13.5l.2 2v1.5l.2 1.4v1l.2 1-1 .2v-1l-.2-1v-1.5l-.2-1.7v-4l-.2-2v-15.5l.2-3V441l.2-3v-2.8l.2-3 .2-2.7v-2.8l.2-2.7.2-2.5V419l.3-2.3v-2.2l.3-2v-2l.3-1.5.3-1.4v-1.2l.3-1 .5.7zm0-1h.7v.7l-.6-.6zm0 0v1l-.3-.2.4-.7zm0 1h-.2v-.2l.3.3z"></path><path fill="#fff" d="M358 451.2c-.8 11.3-1.2 19-1 23 .2 7.6 2 14.2 5.5 19.2 4-3 9-8.5 8.4-16.6-2-31.5 1.4-61 5.4-89.6-3.4-2.5-9-5-12.5-7.6-6.8 38.3-9 62-6 71.6z"></path><path fill="#21231e" d="M357.4 474h-1v-7.4l.2-.7V463l.2-.7V459l.2-1v-1.8l.2-1v-3l.2-1h1v2l-.2 1v2l-.2 1v2.8l-.2.7v3.2l-.2.7v4.2l-.2.6v4.3zm4.8 19 .6.8h-.7l-.3-.6-.3-.5-.3-.5-.2-.5-.2-.5-.3-.5-.3-.6-.2-.4-.3-.6-.2-.5-.3-.6-.2-.7-.2-.6-.2-.6-.2-.5-.2-.6v-.7l-.3-.6v-.7l-.3-.6v-.7l-.2-.6-.2-.6v-.7l-.2-.7v-1.4l-.2-.7v-1.5l-.2-.7v-.7h1v2.2l.2.7v1.2l.2.7v.6l.2.6v.7l.2.5.2.7v.6l.3.6v.6l.3.6.2.6.2.6.2.6.2.6.2.5.2.6.2.6.3.6.2.5.2.5.2.5.3.5.3.5.3.5.3.5.3.4h-.8zm.6.8-.4.3-.3-.3h.8zm7.6-17h1v3.7l-.3.7v.6l-.2.7v.7l-.4.6-.2.6-.2.6-.3.6-.3.6-.3.5-.2.6-.3.5-.4.5-.2.5-.4.4-.4.5-.4.4-.3.6-.4.4-.5.4-.4.4-.3.4-.4.3-.4.3-.5.4-.4.3-.2.3-.6-.8.3-.3.4-.3.3-.3.3-.2.4-.4.4-.3.4-.3.4-.4.3-.4.4-.5.3-.4.3-.4.4-.4.3-.5.3-.5.3-.5.2-.5.3-.5.3-.5.2-.6.3-.6.2-.5.2-.6.2-.8v-.6l.2-.6v-.7l.2-.6v-3.1zm5.7-89.2.7-.8.2.5-.5 2.6-.4 2.6-.3 2.7-.3 2.7-.4 2.7-.3 2.7-.3 2.7-.4 2.8-.3 2.8-.3 2.7-.3 2.8-.2 2.8-.2 2.8-.3 2.7-.2 2.8v3l-.3 2.7-.2 2.8-.2 2.8v2.8l-.2 3v8.5l-.2 3v8.6l.2 3v3l.2 2.8.2 3h-1l-.2-3v-3l-.2-2.8v-5.8l-.2-3V451l.2-2.8v-3l.2-2.7v-2.7l.3-3 .2-2.7.2-2.8V428l.3-2.7.3-2.8.3-2.8V417l.4-2.8.3-2.7.3-2.8.4-2.7.3-2.7.4-2.7.4-2.7.4-2.8.3-2.7.5-2.7.4-2.7v.6zm.7-.8.2.2v.3l-.3-.5zm-12.3-7-1-.3.8-.3.3.2.4.2.2.3h.3l.4.3.3.3.4.2.4.2.5.3.4.2.3.2.4.3.4.2.5.3.5.2.4.2.4.2.4.2.5.3.4.2.5.2.4.2.3.2.4.3h.4l.5.4.4.2.3.2.3.3.4.3.3.3.4.2-.6.8-.2-.2-.4-.3h-.3l-.3-.3-.3-.3-.4-.2-.4-.2-.4-.3-.4-.2-.4-.2-.4-.3-.4-.2-.4-.3-.5-.2-.4-.2-.4-.2-.5-.2-.5-.3-.4-.2-.4-.2-.4-.2-.4-.2-.4-.3h-.4l-.4-.4-.4-.2-.4-.2-.4-.3-.4-.3-.3-.3-.4-.2-.4-.2.8-.3zm-1-.3.2-.8.6.5-.8.3zm-6 71.4.8.6-.8-.2-.3-1v-1l-.3-1-.2-1.3v-1l-.2-1.4V443l-.2-1.6v-5l.2-1.8v-2l.2-2 .2-2 .2-2.3.2-2.3.2-2.5.3-2.4.3-2.5.3-2.6.4-2.8.4-2.8.4-3 .4-2.8.5-3 .6-3.2.5-3.2.6-3.3.6-3.5.6-3.5.6-3.5 1 .2-.6 3.5-.6 3.5-.6 3.4-.5 3.3-.4 3.3-.5 3-.4 3-.4 3-.4 3-.4 2.7-.3 2.7-.3 2.7-.3 2.5-.2 2.4-.3 2.4-.3 2.3v2.2l-.3 2v2l-.2 2v9.8l.2 1.4v1.2l.3 1 .2 1.2v1l.4 1-1-.3zm.8.6-.5.6-.3-.8.8.2zm0 0-.7-.7 1 .3-.3.3zm-.7-.7 1-1v1.3l-1-.4z"></path><path fill="#fff" d="m343.6 471.8 4 14.7c.2 7.7 5 14 8.3 19 4-3 7.5-8 6.5-16-5.8-46.5-3.8-77.3 6-115-22 15-32.3 46.6-25 97.3z"></path><path fill="#21231e" d="m347 486.6-3.8-14.7 1-.3 3.8 14.6-1 .3zm1-.3zm7.6 19 .6.7h-.7l-.3-.6-.3-.5-.4-.5-.4-.5-.3-.5-.5-.6-.3-.6-.4-.5-.3-.7-.4-.5-.2-.6-.4-.5-.3-.6-.2-.5-.4-.6-.3-.7-.2-.6-.3-.6-.3-.5-.3-.7-.3-.6-.3-.7-.2-.7-.2-.6-.2-.7-.2-.7-.2-.7v-.6l-.2-.7v-.8l-.2-.8v-.7h1v1.4l.2.7v.7l.2.7.2.6v.6l.3.7v.5l.4.7.2.6.3.6v.6l.4.7.3.6.3.6.3.4.3.6.4.6.3.6.3.5.4.6.3.5.4.5.3.6.3.4.4.5.3.4.4.5.3.4.3.5.4.3h-.8zm.6.7-.4.3-.3-.4h.8zm5.8-16.5h1v5.5l-.2.6v.7l-.3.6v.4l-.3.6-.2.6-.3.5-.2.6-.2.5-.3.6-.3.5-.3.6-.3.4-.2.4-.3.4-.4.5-.2.3-.3.4-.4.4-.3.3-.3.4-.4.4-.4.3-.3.3-.7-.8.4-.3.4-.4.3-.3.4-.3.4-.3.3-.4.4-.3.4-.4.3-.4.3-.4.3-.4.3-.4.3-.4v-.5l.4-.3.2-.5.2-.5.2-.5.2-.5.2-.5.2-.6v-.6l.2-.5v-.6l.2-.7v-5.1zm6.8-114.7-.6-1 .8.7-1 3.5-.8 3.5-.8 3.4-.7 3.4-.7 3.4-.7 3.3-.6 3.5-.6 3.4-.4 3.2-.5 3.3-.3 3.4-.4 3.2-.4 3.4-.4 3.3-.2 3.3-.2 3.4-.2 3.4v3.6l-.2 3.5v14.7l.3 3.7.3 4 .2 3.8.3 4 .4 3.8.3 4 .5 4.2.4 4.3.6 4.4h-1l-.6-4.2-.4-4.3-.5-4.2-.3-4-.4-4-.3-4-.2-3.8-.2-3.8v-3.7l-.2-3.7v-14.3l.2-3.4.2-3.4.2-3.4.2-3.4.3-3.3.3-3.4.4-3.3.4-3.3.6-3.4.5-3.3.7-3.4.6-3.3.7-3.4.7-3.4.8-3.5.8-3.4.8-3.5 1-3.6.8.6zm-.6-1 1-.6-.2 1.3-.8-.6zm-24 98h-1l-.7-4.6-.5-4.6-.5-4.5-.3-4.3-.3-4.2-.2-4.2v-8l.2-3.8.2-3.7.3-3.7.4-3.4.5-3.4.6-3.3.8-3.3.7-3 1-3 1-3 1-2.8 1-2.8 1.2-2.5 1.3-2.5 1.4-2.4 1.5-2.3 1.4-2 1.6-2.2 1.7-2 1.7-2 2-1.6 1.8-1.7 2-1.6 2-1.5.6.8-2 1.4-2 1.6-1.8 1.6-1.8 1.7-1.8 2-1.6 2-1.6 2-1.5 2-1.4 2.3-1.4 2.4-1.4 2.4-1.2 2.6-1 2.7-1 2.7-1 3-1 3-.7 3-.7 3-.6 3.4-.5 3.3-.5 3.5-.3 3.6-.3 3.7-.2 3.8v12l.4 4.4.3 4.3.5 4.5.5 4.6.6 4.7zm-1 0zm.4 0h.5-.4zm-.4 0z"></path><path fill="#fff" d="m344.8 486.2-20.3-6.7c-2.5 20.2 1.4 45.6 7 79 4.6 29 2 51.6-1.5 66.2 21.6-3 30.7-30.7 20-83-3-13.7-5.8-31.3-5.2-55.5z"></path><path fill="#21231e" d="m324.7 479 20.2 6.7-.4 1-20.2-6.7-.3-.6.7-.4zm-.6.4v-.6l.7.2-.6.4zm8 79-1 .3-.6-3-.5-3.2-.6-3-.5-3-.5-3-.5-2.8-.4-3-.4-2.7-.4-2.7-.4-2.7-.4-2.7-.3-2.7-.4-2.6-.3-2.6-.3-2.4-.2-2.5-.3-2.3-.2-2.4-.2-2.4v-2.4l-.3-2.3V500l-.2-2v-10.7l.2-2 .2-2v-2l.4-2 1 .3-.2 2-.2 1.8v2l-.2 2v4l-.2 2v4.3l.2 2.3v2.3l.2 2.3.2 2.3.2 2.2.2 2.4.3 2.4.2 2.5.3 2.5.3 2.5.3 2.6.4 2.8.4 2.6.3 2.7.4 3 .6 2.7.4 2.8.4 3 .5 3 .4 2.8.5 3 .4 3 .5 3.2zm-2 65.8v1l-.5-.6.4-1.4.2-1.4.3-1.5.3-1.5.3-1.6.4-1.6.3-1.7.2-1.8.2-1.7.2-1.8.2-2 .2-1.8v-2l.3-2 .2-2v-2l.2-2v-13.4l-.2-2.3-.2-2.4-.2-2.4-.2-2.5-.3-2.5-.3-2.6-.3-2.6-.4-2.6-.4-2.7 1-.2.3 2.7.4 2.7.3 2.5.3 2.6.3 2.6.2 2.5.2 2.6v2.4l.3 2.4v6.8l.2 2.3v4.3l-.2 2v2l-.2 2v2l-.2 2-.2 2-.2 1.8-.3 1.8v1.8l-.4 1.7-.2 1.8-.3 1.6-.2 1.6-.3 1.5-.3 1.5-.4 1.5-.3 1.4-.5-.8zm0 1h-.6v-.6l.7.6zm19.4-83.5 1-.2 1 5 .8 4.6.7 4.6.5 4.5.5 4.3.4 4 .3 4 .2 4v7.2l-.2 3.4-.2 3.2-.4 3-.4 3-.6 3-.6 2.6-.7 2.6-1 2.4-1 2.3-1 2.2-1 2-1.2 1.8-1.3 1.7-1.4 1.5-1.4 1.4-1.5 1.3-1.5 1-1.8 1-1.8.7-2 .7-2 .5-2 .2v-1l2-.3 1.8-.6 1.8-.6 1.7-.8 1.6-1 1.5-1 1.5-1 1.4-1.5 1.3-1.5 1.3-1.6 1-1.8 1.2-2 1-2 1-2.2.7-2.3.6-2.4.7-2.7.5-3 .4-2.8.4-3 .2-3.3v-3.5l.2-3.5v-3.7l-.3-3.8-.3-4-.3-4-.4-4.3-.7-4.4-.8-4.5-.8-4.7-1-5zm-4.8-55 .3-1 .3.5V503l.2 2 .2 1.8v2l.2 1.8v1.8l.2 1.8.2 1.7.2 1.8.2 1.7.2 1.7.2 1.6.2 1.6.2 1.6.2 1.5.3 1.5.3 1.5.3 1.5.2 1.4.3 1.4.3 1.4.3 1.4.3 1.3v1.3l.4 1.2-1 .2-.2-1.3-.3-1.3-.4-1.2-.2-1.4-.3-1.4-.2-1.4-.2-1.4-.3-1.5-.2-1.5v-1.5l-.4-1.6-.2-1.5-.2-1.6-.2-1.7-.2-1.7-.2-1.7-.2-1.8-.2-1.8v-1.7l-.3-2-.2-1.7v-2l-.3-1.8v-4l-.2-2v-13l.3.5zm.3-1 .3.2v.2l-.4-.5z"></path><path fill="#21231e" d="M343.6 584h1v.7h-.8v-.2h-.2v-.4zm-4.3-40 1-.4.4 1.2.2 1.2v1l.4 1.3.2 1.3.2 1.2.2 1.2.2 1.2.2 1.3.2 1.3.2 1.2.2 1.3.2 1.3.2 1.2.2 1.3v1.4l.3 1.3v2.6l.3 1.3v1.3l.2 1.2v2.6l.2 1.3v9.1h-1v-7.6l-.2-1.2v-2.7l-.2-1.3V570l-.2-1.3v-1.3l-.2-1.3v-1l-.3-1.4v-1.3l-.3-1.3-.2-1.3v-1.2l-.3-1.3-.2-1.3-.2-1.3-.2-1.3v-1.2l-.4-1.2-.2-1.2-.2-1.2-.2-1.2-.3-1.2-.2-1.2-.2-1.2zm-5.5-50.4h1.2v6.4l.2 1.5v3.3l.2 1.5v1.6l.2 1.5v1.6l.3 1.5v3.1l.3 1.5.2 1.7v1.5l.3 1.6.2 1.5.2 1.6.2 1.4.2 1.6.3 1.5v1.6l.4 1.6.2 1.6.3 1.6.2 1.5.3 1.6.3 1.5.3 1.5.4 1.6-1 .3-.5-1.7-.4-1.6-.3-1.6-.3-1.5-.3-1.5-.2-1.6-.3-1.6-.2-1.5-.3-1.6-.2-1.6-.2-1.4-.3-1.6-.2-1.5-.2-1.6v-1.7l-.3-1.5-.2-1.6v-1.5l-.2-1.6v-1.4l-.2-1.6-.2-1.6V508l-.2-1.7V503l-.2-1.4v-6.4l-.2-1.6zm1.2 0h-1.2v-.2h.2v-.2h.2v-.2h.8v.2h.2v.4z"></path><path fill="#fff" d="m344 367.3 13.2 2.2-4.6 23.3c-5 24.3-8.2 53-4.5 84.2 1.5 11.7 4 21.2 7.6 28.5-14.6-1.6-24-15.8-22.7-40.6-2.6-29-1.5-52 3.2-69.4 1.4-5 5.8-24.2 7.8-28.3z"></path><path fill="#21231e" d="m357 370-13-2.3v-1l13.3 2.3.4.6-.6.4zm.3-1h.5v.6l-.5-.6zm-4.2 24-1-.3.2-.3v-.4l.2-.5v-.6l.2-.7v-.6l.3-.7v-.8l.2-.8v-1l.3-.7.2-1 .2-1v-.8l.2-1 .2-1 .2-1 .2-1 .2-1 .2-.8v-1l.3-.7.2-1v-.7l.3-.7v-.7l.3-.6v-.6l.2-.5v-.4l.2-.3v-.3l1 .2v.6l-.2.5v.5l-.3.6v.5l-.2.7-.2.8-.2.8v1l-.3.7-.2 1v.8l-.2 1-.2 1-.2 1-.2.8-.2 1-.2 1v1l-.3 1-.2.7-.2 1v.7l-.2.7v1l-.2.5-.2.6v.7l-.2.5v.7zm-4.4 84h-1l-.3-2.8-.3-3-.3-3-.2-2.8v-2.8l-.3-3V457l-.2-3v-11l.2-2.7v-2.7l.2-2.7.2-2.8.2-2.6.2-2.6.3-2.6.2-2.6.3-2.6.3-2.5.4-2.5.4-2.5.4-2.5.3-2.4.4-2.4.3-2.4.5-2.4.4-2.3.5-2.3.4-2.3 1 .2-.4 2.2-.4 2.3-.5 2.3-.4 2.4-.4 2.4-.5 2.4-.4 2.4-.2 2.4-.4 2.5-.3 2.5-.2 2.5-.3 2.6-.3 2.5-.2 2.5-.2 2.7-.2 2.6-.2 2.6v2.6l-.2 2.7v2.7l-.2 2.7v11.5l.2 3v2.7l.3 3 .2 2.7.3 3 .3 2.8.3 3zm7 29v-1l-.4.8-.4-.7-.3-.6-.3-.8-.4-.7-.3-1-.3-.6-.3-.8-.4-.8-.3-.8-.2-.8-.2-.8-.3-1-.2-.7-.3-1-.2-.8-.3-1-.2-1-.2-.8v-1l-.3-1-.2-.8-.2-1-.2-1v-1l-.3-1-.2-1v-1l-.3-1-.2-1v-1l-.2-1.2-.2-1 1-.2v1l.3 1v1.2l.2 1v1l.3 1 .2 1 .2 1v1l.2 1 .2 1 .2 1 .2 1 .3.8.3 1 .2.8.2 1 .3.7.2 1 .3.7.2.8.3 1 .3.7.3.8.3.7v.8l.4.8.4.7.3.7.4.7.3.6.3.7-.5.7zm.4-.7.4.8h-1l.6-.7zM332.4 465l1-.2v8.8l.2 2 .2 2 .3 2 .4 1.8.4 1.7.4 1.8.5 1.7.5 1.5.6 1.5.6 1.5.7 1.3.8 1.3.7 1.3.8 1 1 1 .8 1.2 1 1 1 .8 1 .8 1 .8 1 .7 1.2.6 1.2.4 1.2.5 1.2.3 1.2.3 1.3.3h1.4l-.2 1h-1.3l-1.4-.4-1.3-.4-1.3-.4-1.2-.5-1.2-.5-1.2-.7-1-.6-1.2-.8-1-.8-1-1-1-1-1-1-1-1.2-.7-1.2-.8-1.3-.8-1.2-.7-1.4-.7-1.5-.5-1.6-.6-1.6-.5-1.7-.4-1.6-.4-1.8-.3-2-.2-1.8-.2-2-.2-2v-8.9zm1-.2zm2.3-69.4 1 .3-.5 1.6-.4 1.7-.4 1.7-.3 1.7-.3 1.8-.3 1.8-.3 1.8-.2 2-.2 1.8-.3 2-.2 2v2l-.3 2v2l-.2 2-.2 2.3v4.3l-.2 2.2v9.6l.2 2.5v2.4l.2 2.5v2.5l.2 2.6.2 2.6.2 2.5.2 2.6.2 2.8h-1l-.2-2.6-.2-2.6-.2-2.7-.2-2.7v-2.5l-.2-2.6v-2.5l-.2-2.4v-18.5l.3-2v-2.2l.3-2v-2.2l.3-2 .3-2 .3-2 .2-1.8.3-2 .4-1.8.4-1.8.3-1.8.5-1.7.4-1.7.3-1.7.4-1.6zm8.3-28.6v1l.4-.3-.2.4-.2.4-.2.6-.2.6-.3.7-.2.8-.2 1-.2.8-.3 1-.3 1-.2 1-.3 1-.3 1-.3 1.2-.4 1-.3 1.2-.3 1-.2 1.2-.3 1-.3 1.2-.3 1-.3 1-.3 1-.2 1-.3 1-.3 1-.2.8-.2.8-.2.7v.6l-.2.6v.5l-1-.3v-.5l.2-.7.2-.6.2-.8v-1l.4-.7.2-1 .2-.8.3-1 .2-1 .3-1 .2-1.2.3-1 .3-1.2.3-1 .4-1 .2-1.2.3-1 .2-1.2.3-1 .3-1 .3-1 .4-1 .2-1 .3-1v-.8l.4-.8.2-.7.3-.7v-.6l.3-.5.2-.5.5-.2zm-.5.2.2-.3h.3l-.5.3zm.5.3v-.5.5zm-.5-.3.2-.3h.3l-.5.3z"></path><path fill="#fff" d="m336 370.4 6.4 7.4c-1.8 1.4 1.3 7-.4 18-1 6.4-4.8 13.8-5.6 22-2.5 26.5-2.5 59.8 5.4 81-14.5-1.6-19.5-14.8-20-39.6-.4-20.6-.4-44.7 4.7-72.7 1-6.5 4.2-11.7 9.4-16z"></path><path fill="#21231e" d="m342 378.2-6.5-7.5.8-.6 6.5 7.5v.7h-.7zm.8-.7.4.4-.5.2v-.7zm-.3 18.5h-1l.2-1.2v-1l.2-1V385l-.2-.6v-1.2l-.2-.6v-1l-.2-.4v-2.8l.2-.3.3-.4v-.2l.7.8v.2h-.2v.5h-.2v2.2l.2.4v1.1l.2.6v1.1l.2.7v8.1l-.2 1v1l-.3 1zm0 0zm-5.6 21.7h-1v-1.8l.2-.7.2-.7v-.7l.3-1v-.6l.3-.8.2-.7.2-.8.2-.7.2-.7.2-.7.2-.6.2-.7.2-.7.3-.7v-.7l.3-.6.2-.7.2-.7.2-.6v-.7l.3-.6.2-.6.2-.5.2-.7v-.6l.2-.6v-.6l.2-.6v-.5h1v1.2l-.3.6v.7l-.2.6v.7l-.3.7-.2.6-.2.6v.7l-.3.7-.2.6-.3.7-.2.6-.2.6-.2.7-.2.7-.2.7-.3.7-.3.7-.2.8-.2.7-.2.7v.7l-.2.6-.2.7v.7l-.3.8v.7l-.2.7v1.5zm4.8 81.6v-1l-.4.7-.8-2-.6-2-.7-2.3-.6-2.2-.5-2.3-.5-2.4-.5-2.4-.4-2.4-.4-2.5-.4-2.5-.3-2.5-.3-2.6-.2-2.7-.2-2.7-.2-2.6v-2.7l-.2-2.7V455l-.2-2.8v-10.9l.2-2.7V436l.2-2.8v-2.7l.3-2.6.3-2.7.2-2.6.2-2.6.2-2.4h1l-.3 2.6-.2 2.6-.2 2.5-.2 2.6v2.6l-.2 2.6v2.7l-.2 2.6v2.7l-.2 2.7V455l.2 2.7v2.7l.2 2.7.2 2.5.2 2.7.2 2.6.3 2.5.3 2.6.4 2.4.4 2.4.4 2.5.4 2.3.5 2.4.7 2.2.6 2.2.6 2.2.6 2 .7 2-.5.7zm.5-.6.3.7h-.8l.5-.7zm-21-39.5h1v2.2l.2 2.3v2l.2 2.2.2 2v2l.3 1.7.3 1.8.3 1.8.2 1.6.4 1.5.4 1.6.4 1.5.5 1.4.4 1.2.6 1.3.6 1.2.6 1 .7 1 .6 1 .8 1 .8 1 .8.6 1 .7 1 .7 1 .6 1 .5 1 .4 1 .4 1.3.3 1.3.2 1.3.2-.2 1-1.4-.2-1.3-.3-1-.4-1.3-.4-1.2-.5-1-.6-1.2-.5-1-.7-1-.7-.8-.7-1-1-.7-1-.7-1-.6-1-.7-1.2-.6-1-.5-1.4-.5-1.3-.5-1.5-.5-1.5-.4-1.5-.3-1.7-.4-1.5-.4-1.8-.3-1.8-.2-2v-2l-.3-2v-2l-.2-2.3v-2.2l-.2-2.3zm4.7-72.8 1 .2-.5 2.6-.4 2.6-.3 2.5-.4 2.6-.3 2.4-.4 2.5-.3 2.4-.3 2.4-.2 2.4-.2 2.5-.3 2.3v2.4l-.3 2.4-.2 2.3v2.4l-.2 2.2v2.3l-.2 2v4.5l-.2 2.2V459h-1v-26.9l.2-2.2v-2l.2-2.4v-2.3l.2-2.3.2-2.3.2-2.4.2-2.3.2-2.4.2-2.5.3-2.3.3-2.4.3-2.5.4-2.5.3-2.6.4-2.5.4-2.6.6-2.6.4-2.6zm1 .2zm9.3-16.5-.8.7h.7l-.4.5-.5.4-.5.4-.4.4-.4.5-.4.3-.4.4-.4.5-.4.4-.4.5-.3.5-.4.5-.3.5-.3.4-.3.4-.3.5-.2.4-.3.5-.2.4-.3.5-.2.4-.2.6-.2.5-.2.5-.2.6-.2.5-.2.7v.5l-.3.6v.6l-.2.6v.6l-1-.2v-.6l.2-.6.2-.6v-.6l.3-.6v-.6l.3-.5.2-.6.2-.6.2-.4.3-.6v-.5l.4-.5.2-.6.3-.5.2-.6.3-.5.3-.6.4-.5.3-.6.4-.5.2-.6.4-.4.4-.5.4-.4.4-.4.5-.4.4-.5.5-.4.4-.4.5-.6.6-.4h.7zm-.7 0 .4-.3.3.4h-.7z"></path><path fill="#fff" d="m372.3 390-13.4-1.6c-2.6 12.7-4.5 21.7-5 26.2-1 9 1.8 17 5 23 5-3 7.2-9.4 9.2-18.6 2-9.2 2.7-19.2 4-29z"></path><path fill="#21231e" d="m359 388 13.3 1.5v1l-13.5-1.6-.4-.7.5-.4zm-.6.3v-.4h.5l-.6.3zm-4 26.4h-1l.2-.6v-.8l.2-.6v-1l.2-.6v-.7l.3-.6v-.7l.2-.7v-.7l.3-.7v-1l.2-.7.2-.8.2-1v-.7l.3-1 .2-.8v-1l.2-1 .2-1 .2-1 .2-1 .2-1 .3-1 .2-1 .2-1.2.2-1.2v-1l.4-1.3 1 .2-.3 1.2v1l-.3 1.3-.3 1-.2 1.2-.2 1-.2 1-.2 1-.2 1-.2 1-.2 1v1l-.3 1-.2.8-.2.8v1l-.3.7v.8l-.3.7v.8l-.2.7-.2.7v.6l-.2.7v1.3l-.2.5v1.1l-.2.5v.9zm4.3 22.6.5.8h-.7l-.3-.7-.3-.6-.4-.6-.3-.5-.3-.6-.2-.7-.3-.7-.2-.6-.3-.7-.2-.7-.3-.7-.2-.8-.2-.7v-.7l-.3-.7-.2-.7-.2-.7v-.8l-.3-.7v-.7l-.2-.8v-.8l-.2-.7v-.8l-.2-.8v-6.1h1v6.6l.2 1v1.4l.3.7v1.6l.3.8.2.7v.8l.3.7.2.7.3.7.2.6.2.7.2.6.2.6.2.6.3.7.3.5.2.6.3.7.3.6.3.6.3.5-.7-.2zm.5.8-.5.4-.2-.5h.7zm8.6-19h1l-.3 1-.2.8-.2 1v.7l-.3.8-.2.7-.2.8-.2.7v.8l-.4.7-.2.7-.3.6v.7l-.4.6-.2.7-.3.6-.2.5-.3.5-.3.6-.3.5-.4.7-.3.5-.4.5-.5.4-.3.6-.4.4-.4.4-.4.4-.5.3-.4.5-.4.3-.4.3-.5-.7.4-.3.5-.3.4-.3.3-.4.4-.3.4-.4.4-.4.4-.5.3-.4.4-.4.4-.5.3-.4.4-.5.2-.4.3-.6.2-.5.3-.6.2-.7.3-.7.2-.6.3-.7.2-.6.2-.7v-.8l.3-.7.3-.7.2-.8.2-.8.2-.8.2-.8.2-.8.2-1zm4.5-28.5v-1l.5.5v1l-.3 1v.8l-.2 1v1l-.2.8v1l-.2.8v1l-.2 1v.8l-.2 1v1l-.2.8v1l-.2.8v1l-.2.8v1l-.2 1-.2.8v1l-.2.8-.2 1v.8l-.2 1-.2.8-.2.8v1l-.3.8v1l-.3.7h-1l.3-1v-.8l.3-1 .2-.7v-1l.3-.8v-1l.3-.8.2-1v-1l.3-.8v-1l.2-.8v-1l.2-.8v-1.8l.2-1v-1l.2-.8v-1l.2-.8v-1l.3-1v-1.8l.2-1v-.8l.2-1v-.8l.3-1v-1l.6.7zm0-1h.6l-.2.5-.5-.5zm0 0v1-1zm0 1z"></path><path fill="#fff" d="M407 418.6h-11.8c-.4 11-.7 18.5-.5 22.3.4 7.5 2.3 14 5.5 18.7 3.6-3 7-8.3 7.6-16.2.6-8-.6-16.5-.7-25z"></path><path fill="#21231e" d="M395.2 418.2h12v1h-12l-.5-.5.5-.5zm-.5.5v-.5h.5l-.5.5zm.5 22.2h-1v-11.4l.2-.8v-4.4l.2-.8v-5h1v7.8l-.2.7v5.6l-.2.7v7.7zm4.7 18.4.6.7h-.8l-.3-.5-.3-.4-.3-.4-.4-.5-.2-.4-.3-.5v-.4l-.4-.6-.2-.5-.3-.5v-.6l-.3-.6-.2-.5-.2-.6-.2-.6v-.5l-.2-.6-.2-.7-.2-.6v-.6l-.2-.6-.2-.6v-.7l-.2-.5v-.7l-.2-.7v-.5l-.2-.7v-2.6l-.2-.7h1v1.1l.2.7v1.4l.2.7v.7l.2.6v.7l.2.6v.6l.3.6v.7l.3.6v.7l.3.5v.6l.2.6.2.5.2.5.2.5.3.6.3.5.2.6.3.5.2.6.3.5.2.6.3.5.3.6.4.4.2.5h-.7zm.6.7-.5.5-.2-.5h.8zm6.7-16.6h1v1.6l-.2.7v1.4l-.3.8v.6l-.3.7-.2.7-.2.6-.2.6-.2.5-.2.5-.3.6v.5l-.4.7-.2.5-.3.5-.2.5-.3.4-.3.5-.3.5-.4.4-.3.3-.4.4-.4.4-.3.5-.4.3-.4.4-.4.3-.3.3-.4.3-.7-.6.2-.3.4-.2.3-.3.2-.4.3-.2.4-.3.2-.4.3-.3.3-.4.3-.4.4-.5.3-.4.2-.4.2-.4.3-.5.2-.5.3-.5.2-.5.3-.5.2-.6.2-.4v-.6l.3-.6v-.6l.3-.6v-.7l.3-.6v-1.4l.2-.7V444zm0-24.3v-1l.4.6v5.6l.2 1v4.6l.2.8v2.8l.2.8v9.2h-1v-11.8l-.2-.8V429l-.2-1v-3l-.2-1v-5.3l.4.5zm0-1h.4v.6l-.5-.5z"></path><path fill="#fff" d="m420 424.2-12 .6c0 11 0 18.4.3 22.2a37 37 0 0 0 6.2 18.6c3.5-3 6.8-8.6 7-16.5.3-8-1-16.3-1.5-24.8z"></path><path fill="#21231e" d="m408 424.3 12-.6v1l-12 .6-.4-.5.5-.5zm-.4.5v-.5h.5l-.4.5zm1.2 22.2h-1v-4l-.2-.6v-17.8h1V445l.2.4v1.6zm5.4 18.2.6.8h-.7l-.2-.5-.3-.5-.3-.5-.3-.5-.4-.5-.3-.5-.3-.5-.2-.5-.3-.5-.3-.5-.2-.6-.2-.5-.3-.7-.2-.6-.2-.6v-.4l-.3-.6-.2-.6v-.7l-.3-.6-.2-.5v-.6l-.3-.8v-.6l-.2-.7v-.8l-.2-.6v-.7l-.2-.8v-2h.8v.7l.2.7v1.4l.2.7.2.7v.7l.2.7v.6l.3.6v.7l.2.6v.5l.3.6.2.7.2.5v.6l.3.6.2.5.2.5.2.5.2.5.2.6.2.6.3.5.2.6.2.4.3.5.3.5.3.4.3.5.3.3h-.8zm.6.8-.4.4-.3-.5h.8zm6.2-17h1v2.3l-.2.7v.7l-.2.7-.2.6v.7l-.3.6v.6l-.2.5-.2.6-.2.7-.2.6-.3.5-.3.6-.3.5-.2.4-.3.5-.4.4-.3.4-.3.5-.3.4-.3.4-.3.5-.2.4-.3.3-.3.4-.4.3-.3.4-.3.3-.4.3-.6-.8.3-.3.3-.4.3-.3.4-.3.3-.4.4-.3.4-.4.2-.5.3-.4.2-.3.3-.4.3-.5.2-.4.3-.5.2-.6.3-.5.2-.6.2-.5.2-.6.2-.6.2-.6.2-.5.2-.6v-.5l.3-.7v-.6l.2-.7v-.6l.2-.8V449zm-1-25.3v1l.5-.5v2.4l.2.8v1.5l.2.7v3.4l.2.7v1.5l.2.8v.8l.2.8v2.5l.2.7v2.3l.2.8v5.3h-1v-7.4l-.2-.7v-1.6l-.2-.8V437l-.2-1v-1.5l-.2-.7v-1.6l-.2-.8v-1.6l-.2-.8v-1.6l-.2-.8v-2.2l.4-.6zm-.5.6v-.6h.5l-.5.6zm.5.4v-1 1z"></path><path fill="#fff" d="m395 412.4-12-.8c-1.2 11-2 18.2-2.2 22-.2 7.7 1 14.2 4 19.3 3.8-2.8 7.7-8 8.8-15.7 1.2-8 .8-16.4 1.4-25z"></path><path fill="#21231e" d="m383 411 12 1v1l-12-1-.4-.5.5-.4zm-.4.5v-.5h.5l-.4.5zm-1.3 22.2h-1V431l.2-.4V429l.2-.6v-1.2l.2-.6v-2.2l.2-.7v-1.4l.2-.8v-.8l.2-.8v-1l.2-.8v-1l.2-.8v-1l.3-1v-1l.2-1v-1l1 .2v2l-.3 1v1l-.2 1v.8l-.2 1v.7l-.2 1v.8l-.2.8v.8l-.2.8v1.3l-.2.7v1.4l-.2.6v1.1l-.2.6v1.7l-.2.5v2.7zm3.2 18.8.5.8-.7-.2-.2-.4-.2-.5-.2-.4-.3-.5-.2-.4v-.5l-.3-.5-.3-.5v-.6l-.3-.5v-.7l-.3-.6v-.6l-.3-.4v-.6l-.3-.7V443l-.2-.5v-.7l-.2-.6V440l-.2-.8v-5.5h1v6.8l.2.7v.7l.2.6v.6l.2.5v.6l.2.7.2.6v.6l.3.5v.5l.3.6.2.5.2.7.2.5.2.5.2.5.2.5.3.5.2.5.2.5.2.4h-.7zm.5.8-.4.3-.3-.5.8.3zm8.2-16h1l-.2.8v.8l-.3.7v.7l-.3.7-.2.6-.2.6-.2.6-.3.6-.2.6-.3.6-.2.6-.3.5-.3.6-.3.5-.4.5-.3.5-.3.4-.3.5-.3.4-.4.6-.3.4-.4.4-.3.3-.4.4-.3.5-.4.3-.5.3-.3.4-.4.3-.4.3-.3.3-.5-.8.3-.3.4-.2.3-.3.4-.3.2-.3.4-.2.3-.4.3-.3.3-.3.3-.4.2-.4.4-.5.3-.4.2-.3.3-.5.3-.5.3-.4.4-.5.2-.5.3-.6v-.5l.4-.6.2-.5.2-.5.2-.6.2-.7.2-.7.2-.6.2-.7v-.7l.2-.7.2-.8zm1.8-24.4v-1l.5.5v1.5l-.2.8v5.6l-.2.7v9l-.2.8v2.2l-.2.8v.7l-.2.8v1l-.2.6v.8l-1-.2v-.7l.2-.8v-1.5l.2-.7V432l.2-.8V428l.2-.8V421l.2-.7v-4.8l.2-.8v-2.3l.6.5zm0-1h.5v.5l-.5-.6z"></path><path fill="#fff" d="m384 399.6-13.2-5.4c-2.2 8.8-5.2 37.8 0 50 4.5-3 9-8.4 10.3-17 1.6-9 2-18.2 3-27.6z"></path><path fill="#21231e" d="m371 393.7 13 5.4-.3 1-13-5.4-.4-.6.7-.3zm-.7.3.2-.5.5.2-.7.3zm.3 50 .6.7-.7-.2-.5-1.2-.5-1.3-.3-1.4-.4-1.5-.3-1.5-.3-1.6-.2-1.7-.2-1.7v-1.8l-.2-1.8v-3.6l-.2-2V418l.2-2v-1.8l.2-1.8.2-1.8V409l.3-1.8.2-1.7V404l.3-1.6.2-1.5.3-1.4.2-1.3.2-1.2.2-1v-1l.3-1 1 .3-.2 1v.8l-.3 1.2-.3 1.2-.2 1.3-.2 1.4-.2 1.5-.2 1.6-.2 1.6v1.7l-.3 1.7v1.7l-.2 1.8v1.8l-.2 1.8v3.8l-.2 2v5.4l.2 1.8v1.7l.2 1.8.2 1.7.2 1.6.3 1.6.3 1.5.3 1.3.5 1.4.4 1.2.4 1h-.8zm.6.7-.5.3-.2-.5.7.2zm9.4-17.7h1v1l-.3.8-.2.8v.7l-.3.8-.2.8-.3.7-.2.7-.3.7-.3.5-.3.7-.2.6-.3.6-.3.6-.3.6-.5.5-.3.7-.4.5-.4.5-.3.5-.3.4-.4.5-.4.5-.5.4-.4.3-.3.4-.4.4-.4.4-.5.4-.5.3-.4.4-.4.3-.6-.8.4-.4.4-.3.4-.3.4-.3.4-.4.4-.3.4-.4.4-.4.4-.4.3-.4.4-.4.3-.5.3-.4.4-.4.3-.5.4-.4.3-.6.3-.5.3-.6.3-.6.2-.6.3-.7.3-.5.2-.6.3-.8.2-.7.2-.7.3-.7v-.7l.3-.7.2-.8v-.8zm3-27 .4-1 .4.6v1l-.2.8v1.7l-.2 1v1l-.2.8v1.8l-.2.8v1.7l-.2 1v1.7l-.2 1v1.6l-.2 1v.7l-.2 1v.8l-.2.8v1l-.2.7v.8l-.2 1v.8l-.2 1v.7l-.3.8v.8h-1v-.8l.2-1v-1.5l.2-.8v-1l.2-.8v-1l.2-.7v-1l.2-.7v-1l.2-.7v-1.6l.2-1v-.7l.2-1V410l.2-.8v-1.8l.2-.8v-1.8l.2-1v-1.5l.2-1v-.8l.2-1 .3.6zm.4-1 .4.3v.3l-.4-.5zm0 .6-.3.4.2-.4zm0-.5.4.3v.3l-.4-.5z"></path><path id="rs-c" fill="#edb92e" stroke="#21231e" d="M387.8 701.2c8 6.3 15.2-8.3 8-27.6-5-14.2-30.6-8.7-16.4 10.5.7 1 1.6.6 1.5-.4-1-4 1.6-6.3 5.5-5.5 10.5 2 11 22-.6 17.6-2.2-.2-.4 4 1.7 5.6z"></path><path fill="#edb92e" stroke="#21231e" d="M400 639.2c-1 3.4-5 7.6-8 10.8-4.5 4.8-3.4 12.2-.2 16 3.5 4.4 5 9.2 5.8 13 .5 2.3 1.5 7.4.8 15.5-.4 4-2.7 6-5 7.7-1 1 .5 3 4.3 6 .4.2 1.5 1 2 3 .2.4 2 .4 2.2 0 .4-2 1.6-2.8 2-3 3.7-3 5.4-5 4.2-6-2.2-1.7-4.6-3.8-5-7.7-.6-8 .3-13.2.8-15.5.8-3.8 2.3-8.6 6-13 3-3.8 4.2-11.2-.5-16-3-3.2-7-7.4-8-10.7 0-.8-.3-1-.7-1-.3 0-.7.2-.7 1z"></path><path fill="#edb92e" d="M395 685.5h11.6c2 0 3.6 1.6 3.6 3.5 0 2-1.6 3.5-3.6 3.5H395c-2 0-3.5-1.5-3.5-3.5s1.6-3.5 3.6-3.5z"></path><path fill="#21231e" d="M406.6 686H395v-1h11.6v1zm4 3h-1v-1l-.2-.2v-.2l-.2-.2v-.2h-.2v-.2h-.2v-.2h-.3v-.2h-.2v-.2h-.3l-.2-.2h-.5v-.2h-.6v-1h1l.2.2h.4v.2h.3l.2.2h.2v.2h.2v.2l.3.2.2.2v.2l.3.2.2.3v.3l.2.3v.4l.2.2v.8zm-1 0h1-1zm-3 4v-1h.8l.3-.2h.2l.2-.2.2-.2h.3v-.2l.2-.2v-.2l.2-.2.2-.3v-.3l.2-.2v-.8h1v1.2l-.2.2v.4h-.2v.3l-.2.3h-.2v.3h-.2v.3h-.3l-.3.2v.2h-.3l-.2.2h-.2l-.3.2h-.4l-.2.2h-.8zm-11.5-1h11.6v1H395v-1zm-4-3h1v1l.2.2v.3h.2v.2h.2v.2h.2v.2h.2v.2h.2l.3.2h.2l.2.2.3.2h.6v1h-1.2v-.2h-.3l-.2-.2h-.2l-.2-.2-.2-.2-.3-.2-.3-.3-.2-.3-.2-.3-.2-.2v-.2l-.2-.2v-.4l-.2-.2v-.8zm1 0h-1 1zm3-4v1H394v.2h-.3l-.2.2h-.2v.2h-.2v.2l-.2.2-.2.2-.2.2v.2l-.2.2v.5h-.2v.6h-1v-1.2l.2-.2v-.2h.2v-.3h.2v-.2l.2-.2v-.2h.2l.2-.2v-.2h.3v-.2h.3v-.2h.3l.3-.2h.2l.2-.2h.5l.2-.2h.7z"></path><path fill="#fff" d="m417 579.2.5-11c-4.4-2.2-15.2 0-19.7 10.2a64.7 64.7 0 0 1-18 25.2c10 1.8 18.4-.2 23.7-7.4 7.3-9.8 11.2-15.7 13.6-17z"></path><path fill="#21231e" d="m418 568.3-.4 11h-1l.4-11 .7-.5.3.5zm-.3-.5.3.2v.3l-.3-.5zm-19.5 10.8-1-.4.6-1 .5-.8.5-1 .6-.7.5-.8.5-.8.7-.7.6-.6.7-.7.7-.5.7-.6.6-.4.7-.5.8-.4.8-.4.7-.3.8-.3.7-.2.7-.3h.7l.8-.3h1.2l.7-.2h2l.7.2h.5l.6.2.5.2.4.2-.4 1-.4-.3h-.5l-.5-.2h-.5l-.5-.2h-3l-.7.2h-.6l-.7.3-.7.2-.7.2-.7.2-.8.3-.7.3-.7.4-.7.4-.5.5-.7.5-.7.6-.5.6-.6.6-.7.7-.6.6-.5.7-.6.8-.5 1-.3.7-.5 1zM380 603l-.2 1-.2-.8.6-.6.6-.5.7-.5.6-.6.7-.6.6-.6.5-.6.6-.6.6-.7.6-.7.5-.6.7-.7.5-.7.6-.7.5-.7.6-.8.4-.8.5-.7.5-.8.5-1 .5-.8.6-.8.6-1 .5-.8.6-1 .6-1 .5-1 .5-1 .5-1 .6-1 .5-1.2.5-1.2 1 .4-.6 1.2-.5 1-.6 1.2-.5 1-.4 1-.6 1-.5 1-.5 1-.6 1-.5 1-.6.8-.6.8-.5.8-.5.8-.6.8-.5.8-.6.7-.4.7-.6.8-.6.6-.5.7-.7.7-.6.6-.6.7-.4.6-.6.5-.6.6-.7.7-.6.5-.5.6-.6.6-.8.5-.2-1zm-.2 1h-1l.8-.8.2.8zm23.4-8 .8.5-.6.7-.5.6-.7.6-.6.6-.6.6-.5.5-.6.6-.7.5-.7.5-.7.4-.8.3-.7.4-.7.3-.7.3-.7.2-.7.3-.8.2-.8.2h-.8l-.8.2h-.8l-1 .2h-6.1l-1-.2-.8-.2-1-.2.2-1 1 .2.8.2h1l.8.2h6.6l.8-.3h.8l.7-.3.8-.2.7-.2.7-.3.7-.2.7-.2.8-.4.6-.3.7-.3.7-.4.6-.5.6-.5.5-.5.5-.5.6-.5.5-.6.7-.6.5-.7zm13.4-16.8h1l-.2.4-.2.2h-.2l-.3.3-.2.3-.3.2-.2.3-.3.3-.3.4-.3.3-.2.4-.4.5-.3.4-.3.3-.4.5-.3.5-.4.5-.5.6-.3.5-.4.5-.5.7-.5.6-.5.7-.5.7-.5.7-.5.6-.6.8-.6.8-.5.8-.6 1-.7.7-.7 1-.6.8-.8-.6.6-1 .7-1 .6-.7.7-1 .6-.7.6-.8.5-.7.5-.7.5-.7.5-.7.5-.8.5-.6.5-.6.4-.6.4-.6.4-.6.4-.5.4-.5.3-.5.3-.4.4-.5.3-.4.3-.4.3-.3.4-.3.3-.3.2-.2.3-.3.3-.2.4-.2h.2l.3-.2-.4.4zm1 0v.3h-.2l.2-.3z"></path><path fill="#fff" d="m425.2 580.6-11.8-5c-5 10-8.2 16.6-9.5 20.2-2.8 7-3.5 13.8-2.3 19.5a22 22 0 0 0 14-11.6c3.8-7 6-15.3 9.5-23z"></path><path fill="#21231e" d="m413.6 575.2 11.7 5-.3 1-11.8-5-.3-.8.6-.2zm-.7.2v-.4l.6.2-.7.2zm-8.7 20.6-1-.4.2-.3.2-.4.2-.5v-.4l.2-.3.2-.5.2-.4.2-.5.2-.5.3-.5.2-.5.3-.6.2-.5.3-.6.3-.5.3-.7.2-.6.3-.6.3-.7.4-.8.3-.7.4-.8.2-.7.4-.8.4-.8.4-.8.4-.8.4-.8.4-1 .4-.8.5-.8.4-1 .8.5-.4.8-.5 1-.5.8-.4.8-.3 1-.4.7-.4 1-.5.7-.4.7-.3.8-.3.7-.4.6-.3.7-.3.7-.3.6-.2.7-.3.6-.3.5-.3.6-.3.6-.3.6-.2.5-.3.5-.3.5-.2.5-.2.4-.2.5v.5l-.2.4-.2.3v.3l-.3.4zm-2.7 18.8.2 1-.6-.4v-.5l-.2-.7v-.6l-.2-.5v-1.7l-.2-.5v-3.7l.2-.6v-1.2l.2-.7v-.6l.2-.5v-.7l.2-.6.2-.7v-.6l.3-.8v-.6l.3-.7.2-.7.2-.7.2-.7.2-.7.2-.7 1 .4-.3.6v.7l-.4.6-.2.6-.2.6-.2.7v.5l-.3.6v.8l-.3.6v.6l-.2.7v.6l-.2.6v.5l-.2.6v1.9l-.2.5v3.5l.2.5v1.2l.2.5v.7l.2.5-.6-.4zm.2 1h-.5v-.4l.5.4zm13.5-12.4 1 .5-.5.6-.3.6-.4.6-.3.6-.4.6-.4.5-.5.6-.5.6-.4.5-.4.6-.5.4-.4.5-.5.4-.5.3-.4.4-.6.4-.5.4-.5.4-.5.3-.5.4-.5.3-.4.2-.5.2-.4.2-.5.2-.4.3h-.4l-.5.2-.5.2h-.5l-.4.3h-.5l-.2-1h.9l.4-.3h.4l.4-.3h.5l.4-.3.5-.2.4-.2.5-.2.5-.2.5-.3.5-.3.4-.3.4-.4.4-.3.5-.4.4-.4.4-.4.6-.4.4-.5.4-.4.5-.6.3-.4.4-.5.4-.6.5-.6.4-.5.2-.7.4-.6.4-.6.3-.6zM425 581l.3-.8.3.6-.3.7-.3.8-.3.7-.3.7-.3.8-.2.7-.3.7-.2.7-.3.7-.3.8-.3.7-.2.6-.3.8-.4.7-.3 1-.2.6-.2.7-.3.8-.3.8-.2.7-.3.7-.3.8-.3.7-.2.7-.3.7-.3.8-.3.7-.5.7-.3.7-.3.6-.5.6-.3.7-1-.6.5-.6.3-.7.3-.6.3-.6.4-.7.3-.6.3-.7.3-.7.2-.7.3-.7.2-.7.3-1 .3-.6.3-.7.3-.7v-.8l.4-.7.3-.7.3-.8.2-.7.3-.7.3-.8.3-.7.3-.7.3-.7.3-.7.2-1 .3-.6.3-.8.3-.7.4-.8.3-.8.3.7zm.3-.8.5.2-.2.4-.3-.6z"></path><path fill="#fff" d="m428.6 580.6-12.7-2c-2.4 10.8-4 18-4.4 22-1 7.5 0 14 2.7 19.4 4.3-2.3 8.8-7 10.7-14.7 2-7.8 2.2-16.3 3.6-24.7z"></path><path fill="#21231e" d="m416 578.2 12.6 2v1l-12.8-2-.4-.6.6-.4zm-.6.4v-.5l.6.2-.6.4zm-3.3 22h-1l.2-.5V599l.2-.6v-.5l.2-.6v-.5l.2-.6v-.6l.2-.5v-.6l.2-.6v-.6l.2-.6.2-.7v-.6l.3-.7v-.7l.2-.8v-.8l.3-.8.2-.8v-.8l.3-1 .2-.7.2-1 .2-.8.2-1 .2-1 .2-1 .2-1 1 .3-.2 1-.2 1-.2 1-.2 1-.2.8-.2 1-.2.7-.2 1-.2.7v.8l-.3.8-.2.8v.8l-.2.7v.6l-.2.7-.2.7v.6l-.2.6-.2.7v.4l-.2.6v.6l-.2.5v1.1l-.2.6v.4l-.2.4v1.2zm2 19 .5.8-.7-.2-.2-.5-.3-.5-.2-.5v-.6l-.3-.4-.2-.5-.2-.5-.2-.6v-.6l-.2-.6v-.6l-.3-.6v-.6l-.2-.6v-.6l-.2-.6v-2.8l-.2-.6v-5.4l.2-.7v-1.5h1v3.1l-.2.7v5.1l.2.6v1.2l.2.6v.6l.2.6v.6l.3.6v.5l.2.6v.7l.3.5v.5l.3.6.2.5.2.5.2.5.3.5.2.5-.7-.2zm.5.8-.5.3-.2-.5.7.2zm10-15.2 1 .2-.2.7-.2.8v.7l-.3.7-.3.7-.2.5-.3.6-.4.7-.3.6-.3.6-.3.4-.3.6-.4.5-.3.5-.4.5-.4.5-.4.4-.4.5-.4.3-.4.4-.4.4-.4.5-.4.3-.4.4-.4.3-.4.3-.4.3-.4.4-.5.3-.4.3-.4.2-.5.2-.5-.8.4-.2.4-.3h.4l.4-.4.4-.3.4-.3.4-.3.4-.3.4-.3.4-.3.3-.3.4-.4.4-.4.5-.4.3-.4.4-.5.3-.4.4-.6.2-.5.3-.6.3-.5.3-.6.4-.6.3-.5.3-.6.2-.6.3-.5.2-.6.3-.8.2-.7.2-.6.2-.8zm4-25v1l.5-.5v.8l-.2.8v.7l-.2.8v.8l-.2.8v.8l-.2.8v.7l-.2.8v.8l-.2.8v1.7l-.2.7v.8l-.2.8v.8l-.2.8v.7l-.2.8v1l-.2.6v.8l-.2.8-.2.7v.7l-.2.7-.2.8v.7l-.3.7-.2.7-1-.2.2-.8.2-.7v-.7l.2-.8v-.7l.3-.7v-.8l.2-.8v-.7l.2-.8v-1.5l.2-.8v-.7l.2-.8v-1l.2-.7v-.7l.2-.8v-1.6l.2-.8v-.8l.2-.7v-1l.2-.7v-.8l.2-.8v-.8l.2-1v-.7l.3-.8.5-.4zm-.4.3v-.4h.5l-.4.5zm.5.6v-1 1z"></path><path fill="#fff" d="M430.4 563.4h7.6c4.4 2 9 12.2 3.7 22a65.8 65.8 0 0 0-9.5 29.2c-7.4-6.8-10.8-14.7-8.2-23.3 3.4-11.7 6.8-25.2 6.4-28z"></path><path fill="#21231e" d="M438 564h-7.6v-1h7.8l-.2 1zm0-1h.2-.2zm4 22.5-.8-.5.5-1 .4-.8.4-.8.3-1 .3-.8.2-1v-.7l.3-1V574l-.2-1v-.6l-.3-.8-.2-.7-.3-.8-.2-.7-.3-.6-.3-.7-.3-.6-.3-.6-.3-.4-.3-.5-.4-.3-.4-.4-.3-.4-.4-.4-.5-.3-.4-.3-.3-.2.5-1 .4.4.5.2.5.4.4.4.4.4.4.4.4.5.4.6.3.6.3.6.3.6.3.7.2.7.3.7.2.6.2.8v.7l.3 1v.8l.2.8v3.5l-.2 1v1l-.4.8-.3 1-.3 1-.4.8-.4 1-.5 1zM432 615l.5-.7-.8.3v-.8l.2-1v-2.3l.3-1v-.7l.2-.8.2-1 .2-.8v-1l.2-.7.3-1 .2-.8.2-1 .2-.7.3-1 .3-.8.3-1 .4-1 .4-.8.4-1 .4-1 .4-1 .4-1 .5-1 .4-1 .5-1 .5-1 .5-1.2.6-1 .6-1.2 1 .5-.7 1-.6 1.2-.7 1-.5 1-.5 1.2-.5 1-.4 1-.5 1-.5.8-.4 1-.3 1-.3 1-.4.8-.3 1-.3.8-.2.8-.3 1-.4.8-.2.8-.2 1-.2.7-.2 1v.7l-.3.8v1l-.3.7v.8l-.2.8v1l-.2.7v1.8l-1 .2zm.7-.3v1l-.8-.7.7-.3zm-9.2-23.6 1 .4-.3.8-.2.8v.8l-.2.7v.8l-.2.8v3l.2.8.2.8v.7l.3.7.3.7.2.8.3.7.4.7.4.6.3.7.5.7.4.7.4.7.5.6.4.7.5.7.4.6.6.7.6.6.6.7.7.6.5.7-.6.7-.8-.6-.7-.7-.6-.7-.7-.6-.6-.7-.6-.7-.4-.7-.6-.7-.4-.7-.5-.8-.3-.7-.5-.7-.3-.8-.5-.7-.3-.7-.3-.8-.4-.7-.2-.7-.2-.8-.2-.7v-.8l-.2-.8v-.8l-.2-.8v-2.5l.2-.8v-.8l.3-.8.3-1 .2-.7zm7-28v1l.4-.7v1.8l-.2.5v1.1l-.2.7-.2.7v.8l-.3.8v.8l-.2 1-.2.8-.2 1-.3 1v1l-.4 1-.2 1-.3 1-.2 1-.2 1-.3 1.2-.3 1-.3 1.2-.3 1-.3 1.2-.3 1.2-.3 1-.3 1.2-.2 1-.4 1.2-1-.3.4-1 .3-1 .5-1.2.3-1 .3-1.2.4-1.2.3-1 .3-1.2.3-1 .3-1.2.3-1 .2-1 .2-1 .3-1.2.2-1 .2-1 .2-1 .2-.8.2-1 .2-.8.2-.8v-.8l.3-.7v-.8l.2-.7v-.6l.2-.6v-2l.4-.6zm-.6.5v-.6h.4l-.5.5zm.4 0v-.6.4zm-.5 0v-.6h.4l-.5.5z"></path><path fill="#fff" d="m433.8 558.2-12-4.3c-4.3 10-7.2 16.8-8.4 20.5-2.3 7.3-2.6 14-1 19.6a21.3 21.3 0 0 0 14-11.6c3.3-7.3 4.5-16.3 7.4-24.2z"></path><path fill="#21231e" d="m422 553.4 12 4.3-.4 1-12-4.4-.3-.6.6-.3zm-.7.3.2-.4h.4l-.7.4zm-7.4 21-1-.3v-.4l.2-.4v-.4l.3-.4v-.4l.3-.5.2-.5v-.5l.3-.5.2-.5.2-.6.3-.6.2-.5.2-.6.3-.6.2-.6.2-.6.3-.7.3-.6.3-.7.4-.7.3-.8.3-.8.3-.7.4-.8.3-1 .4-.8.3-1 .4-.8.5-1 .4-.8.3-1 1 .5-.5 1-.4 1-.4.8-.3 1-.4.8-.4.8-.4.8-.3.8-.4.8-.4.8-.3.7-.3.8-.3.8-.3.7-.3.6v.8l-.4.6-.2.6-.3.6v.6l-.3.6-.2.5-.2.5-.2.5v.5l-.3.5-.2.4v.5l-.3.4v.3l-.2.3v.4zm-1.8 19 .3 1-.6-.4-.3-.6v-.5l-.2-.6v-.5l-.2-.5v-.6l-.2-.7V583l.2-.7V581l.3-.6v-.7l.2-.6v-.6l.3-.6.2-.7v-.6l.3-.7.2-.6.2-.6 1 .3-.3.6-.2.7-.2.7-.2.6v.7l-.2.6v.7l-.2.6-.2.6v.6l-.2.6v1l-.2.7v6.5l.2.6v1.1l.2.4.2.6v.5l.2.5-.6-.3zm.3 1h-.5v-.4l.5.3zM426 582l.8.6-.3.6-.4.7-.2.5-.4.6-.4.7-.4.6-.4.5-.4.5-.4.5-.5.5-.5.5-.5.4-.4.4-.5.4-.4.4-.4.4-.5.3-.5.5-.5.3-.5.3-.5.4-.4.2-.5.3h-.5l-.5.4-.5.2-.5.2-.5.2h-.4l-.6.3-.4.2h-.5l-.3-.8.4-.2h.5l.5-.3.5-.2h.4l.5-.3.4-.2.4-.3.5-.2.5-.2.5-.3.4-.3.5-.3.5-.4.4-.3.6-.3.4-.4.5-.3.4-.4.4-.5.4-.4.4-.4.4-.4.4-.5.4-.5.4-.5.4-.5.4-.6.3-.6.3-.6.3-.6.3-.7zm7.6-23.4.4-1 .3.7-.3.8-.3.8-.2.8-.3.7-.2.8-.2 1-.2.6-.2.8-.3.8v.8l-.3.7-.2.8-.2.8-.2.8v1l-.3.6-.2.8-.2.8-.2.8v.7l-.3.8-.2.8-.3.7-.2.8-.2.7-.3.8-.3.7-.2.7-.3.8-.3.7-.3.7-.2.6-1-.5.4-.5.3-.7.3-.7.3-.6.3-.7.3-.8.2-.8.2-.7.3-.8.2-.7.2-.8.2-.7v-.8l.4-.8.2-.8.2-.8.2-.8.2-.8.2-.7.2-.7.2-.8.2-.8.2-.8.2-1 .2-.6.2-.8.3-.8.3-.8.2-.7.3-.8.3-.8.3-.7.3.6zm.4-1 .4.3v.3l-.4-.6zm-.2.6-.2.4.2-.4zm.2-.5.4.2v.3l-.4-.6z"></path><path fill="#fff" d="m425.6 549.7-2.6-16.4c-2.8-.7-6.5 5.8-10 9.5-1 1-2 1.7-2.6 2.8a23.3 23.3 0 0 0-3.4 8 62.3 62.3 0 0 1-13 27.6c10.2-.2 18-3.8 21.8-12 5-11 7.7-17.7 9.8-19.5z"></path><path fill="#21231e" d="m423.4 533.3 2.7 16.4h-1l-2.5-16.3.6-.6.4.5zm-.3-.4h.4v.2l-.3-.4zm-9.7 10.2-.8-.7.4-.4.2-.2.3-.4.4-.4.2-.4.3-.4.4-.4.2-.5.3-.4.4-.5.2-.4.3-.3.4-.5.2-.4.3-.4.4-.3.2-.3.3-.4.3-.3.4-.3.3-.4.3-.2.3-.2.4-.2.4-.3h.3l.4-.3h.3l.4-.2h1.1l-.2 1h-1l-.3.2-.2.2-.3.2-.3.2-.3.2-.3.3v.4l-.5.3-.3.3-.3.3-.4.4-.3.4-.3.5-.4.4-.3.3-.3.4-.3.4-.4.5-.3.5-.3.4-.4.4-.3.4-.4.4-.3.4-.4.4-.4.4-.3.4zm-2.5 2.7-.8-.7v-.2h.2l.2-.2v-.2h.2v-.2h.2v-.2h.2v-.2h.2v-.2l.2-.2h.2v-.2l.2-.2h.2v-.2h.2v-.2h.2v-.2l1 .6h-.2l-.2.2v.2h-.2v.2h-.2l-.2.2v.2h-.2l-.2.2v.2h-.2v.2h-.2v.2h-.2v.2h-.2v.2l-.2.2v.2h-.2zm-3.3 7.7-1-.2v-.6l.2-.4v-.3l.2-.3v-.8l.2-.3v-.3l.2-.3v-.3h.2v-.4l.2-.3v-.2l.2-.2v-.2l.3-.3v-.2l.2-.2v-.2l.3-.2v-.3h.2v-.3l.3-.3v-.2l.3-.2v-.2l.2-.3.2-.2.8.6-.3.3v.2l-.2.2-.2.2v.4l-.2.2-.2.2v.3l-.2.3v.2l-.2.3-.2.2v.2l-.2.3v.2l-.2.3v.2l-.2.3v.2l-.2.3v.5l-.2.3v.2l-.2.3v.5l-.2.3v.7zm-13.4 27v1l-.3-.8.5-.8.5-.7.5-.6.5-.8.5-.7.5-.7.4-.6.6-.7.4-.7.5-.8.4-.7.4-.7.4-.8.4-.7.4-.7.4-.8.4-.8.4-.8.4-1 .4-1 .3-.8.3-1 .3-.8.4-1 .3-1 .4-1 .3-1 .3-1.2.3-1 .3-1.3.2-1.3.3-1.2 1 .2-.3 1.2-.3 1-.4 1.3-.3 1.2-.4 1-.4 1-.3 1.2-.4 1-.4 1-.4 1-.3 1-.5.8-.4 1-.3.8-.4.8-.4 1-.5.8-.4.8-.3.7-.5.8-.4.8-.5.8-.4.7-.6.7-.5.7-.5.7-.5.7-.5.8-.5.7-.5.6-.5.8-.5.7-.4-.8zm0 1h-1l.7-.8.4.7zm21.3-12.8 1 .4-.5.7-.4 1-.4.6-.4.7-.5.7-.4.6-.5.6-.5.6-.5.6-.6.5-.6.4-.6.5-.7.4-.6.4-.8.4-.7.4-.7.4-.7.3-.7.3-.8.3-.8.2-.8.2-1 .2-.7.2-1 .2-.7.2h-1l-.8.2h-1l-.8.2h-2v-1h2.8l1-.2h.8l.8-.2 1-.2h.7l1-.3.7-.2.7-.3.8-.2.7-.3.7-.3.7-.3.6-.3.7-.3.6-.4.7-.5.6-.4.6-.4.5-.4.6-.6.5-.5.5-.4.5-.6.5-.6.4-.7.5-.6.4-.6.3-.7.3-.8zm9.8-19.2h1v.3l-.3.3v.2l-.3.2-.2.2-.2.2-.2.3-.3.4-.2.2-.2.4v.4l-.4.5-.2.5-.3.5-.2.5-.3.6-.2.6-.3.6-.3.6-.4.7-.3.8-.3.8-.4.7-.3.8-.4 1-.4.7-.4 1-.4.8-.4 1-.4 1-.5.8-.3 1-.5 1-1-.4.6-1 .4-1 .5-1 .4-1 .5-1 .4-.8.3-1 .4-.7.4-.8.4-.8.4-1 .3-.6.4-.7.4-.7.3-.6.4-.7.3-.6.2-.4.2-.6.3-.5.2-.5.3-.4.2-.5.3-.3.2-.4.2-.3.2-.4.2-.3.2-.3.2-.2.3-.2.3-.2-.2.4zm1 0v.3-.3z"></path></g><use xlink:href="#rs-d" width="1350" height="900" transform="matrix(-1 0 0 1 964.3 0)"></use><path fill="#fff" stroke="#21231e" d="M536.4 415a38 38 0 0 0 4.8-1.5 66.2 66.2 0 0 1-21.4-22c-7.8-12 3.3-33 8-44.3a53 53 0 0 0 21.2-31c1-7.3-19-4.7-33 2-17 8-19.3 5.7-25.4 7-2.2 10.5 2.4 11.4 6.7 11-9.4 15-13.3 29.8-15 51.4-2-21.6-6-36.5-15.3-51.5 4.3.6 9-.3 6.7-10.7-6-1.4-8.4.8-25.4-7.2-14-6.5-34-9-33-1.8 3 13.7 11.8 24 21.3 31 4.6 11.2 15.7 32.4 8 44.2a67.3 67.3 0 0 1-21.5 22c1.7.7 3.3 1.2 5 1.5-1.2 1.5-11 4.5-12.3 3.7-7.6-5.3-15-18-21.4-25.2-18.2-20.8-27.3-36.7-24-49.6 4.5-14 20.8-29.6-.8-27-21.7 2.8-39.6 32.5-45.4 68.3-2 13.2-3.3 24.4-4.7 33.5 11.8-4.3 17-8.5 20.2-13.7-1.4 5-2.5 9.7-3.2 14.2 9.7-1.7 16.7-6.4 19.2-15 1-3.6 2.3-6.5 3.6-9 3 1 7 1 11.6 0 1.7 4 15 19 22.2 30 8 12.2 20.2 21.6 24.2 22 2 .4 2.7-4 2.2-10.2 21 .2 42.3.3 63-.4 20.7.7 41.8.6 63 .4-.6 6 0 10.6 2 10.3 4-.5 16.2-10 24.3-22.2 7-10.8 20.5-25.7 22.2-30a20 20 0 0 0 11.6.2c1.3 2.5 2.5 5.4 3.5 9 2.5 8.6 9.5 13.3 19.2 15-.7-4.5-1.8-9-3.2-14 3.2 5 8.4 9.3 20.2 13.6-1.4-9-2.7-20.3-4.8-33.5-5.8-35.8-23.7-65.5-45.4-68.2-21.6-2.6-5.3 13-.7 27 3.3 12.8-5.8 28.7-24 49.5-6.5 7.3-13.8 20-21.4 25.2-1.2.8-11-2.2-12.2-3.8z"></path><g id="rs-e"><path fill="#edb92e" d="M440.6 356.8c-2 1.8-8.8 1.8-18 2.4-14.8.5-23.4-4-25.3-13.5 5.6 6.6 12.2 10 19.7 8 10.2-2.5 16-4.3 18.3-3.8 1.6.4 4 3.3 5.3 6.8z"></path><path fill="#21231e" d="M422.6 359.7v-1h1.8l.7-.2h2.5l.8-.2h2.8l.8-.2h3l.5-.2h1l.4-.2h.5l.4-.2h.4l.5-.2h.3l.3-.2h.4l.3-.2h.2v-.3h.3l.6.7h-.3l-.3.3-.3.2h-.2l-.3.3h-.4l-.3.2h-.4l-.4.2h-.5l-.5.2h-1l-.5.2h-1.5l-.6.2H432l-.6.2h-2.8l-.8.2h-2.3l-1 .2H423zm0 0zm-25-14.3-.7.6.8-.4.2 1 .2.7.3.8.3 1 .3.6.5.7.4.7.4.6.5.6.4.6.6.6.6.5.6.4.7.5.6.3.8.5.8.4.8.3 1 .4.8.2 1 .3 1 .2 1 .2h1l1 .3h1.2l1.2.3h6.6v1H416l-1-.2h-1.3l-1-.3h-1.2l-1-.3-1-.3-1-.3-1-.2-1-.4-.8-.3-.8-.4-1-.4-.7-.5-.7-.5-.7-.5-.7-.6-.6-.5-.6-.6-.4-.8-.5-.7-.3-.7-.4-.8-.4-.7-.4-1-.3-.7-.3-1-.2-.8 1-.4zm19.3 8 .2 1h-.8l-.7.2h-1.4l-.7.2h-2.8l-.6-.2-.7-.2h-.7l-.6-.3h-.7l-.6-.3-.8-.3-.6-.3-.6-.2-.6-.3-.6-.4-.6-.3-.6-.4-.6-.4-.6-.6-.6-.4-.6-.5-.5-.6-.6-.6-.4-.6-.6-.5-.5-.6-.6-.7.7-.6.5.6.5.6.6.6.5.5.5.5.6.5.4.5.6.5.6.4.5.5.7.4.6.3.6.3.4.3.6.2.6.3.6.2.7.2h.5l.6.3.7.2h.6l.7.2h4.7l.6-.3h.7zm18.5-4-.3 1h-2.6l-.4.2h-.9l-.5.2-.5.2h-.5l-.6.2h-.5l-.6.3h-.5l-.7.3-.7.2h-.6l-.7.3-.7.2-.8.2-.8.2h-.8l-.8.3-1 .3-.8.2-1 .2-.8.3-.3-1 1-.2.8-.2 1-.2.7-.2 1-.2.7-.2.8-.2.7-.2.8-.2.7-.2.7-.2.6-.2h.6l.6-.3h.6l.6-.3h.6l.5-.2h.6l.5-.2h.6l.4-.2h.9l.3-.2h2zm0 0zm5.4 7.8-.7-.8-.2.6v-.7l-.3-.3v-.3l-.3-.3v-.3l-.3-.2v-.3l-.2-.2-.2-.3v-.3l-.3-.2-.2-.3v-.2l-.2-.2-.2-.3v-.2l-.3-.2h-.2v-.3h-.2l-.2-.3v-.2h-.3l-.2-.2v-.2h-.2v-.2h-.4v-.2h-.2l.3-1h.2l.2.2.2.2h.2l.2.2.2.2h.2v.3l.3.2.2.2h.2l.2.3v.2l.2.2.2.2.2.2.2.2.2.3v.2l.3.2.2.3.2.3v.3l.3.4.2.3v.3l.3.3v.3l.3.3v.3l.2.3v.6zm0-.6.2.3-.3.2v-.6zm-21.5-35.4v1.5h-.4v-.4h-.2v-.7l.2-.2h.2v-.2h.2zm15.3 4-.5 1.3-.6-.2-.5-.2h-.6l-.5-.2-.4-.2-.5-.2-.4-.2-.5-.2-.4-.2h-.5l-.4-.3-.5-.2h-.4l-.4-.3h-.5l-.4-.3h-.5l-.4-.2h-.4l-.5-.2h-.4l-.3-.2h-1.3l-.4-.2H420v-2h2.9l.5.2h1l.4.2h.5l.3.2.5.2h.5l.4.2.5.2h.5l.4.3h.6l.5.3.6.2h.5l.6.3.5.2.6.2h.5l.6.3.6.2.5.2.6.2h.5zm9 2.5v1.5H442l-.3-.2h-.4l-.3-.2h-.3l-.4-.2h-.3l-.4-.2h-.4l-.3-.2h-.5l-.3-.2-.4-.2h-.3l-.4-.2h-.2l-.3-.2h-.3l-.3-.3h-.7l-.2-.2h-.4l-.2-.2.4-1.5h.2l.2.2h.2l.2.2h.3v.2h.4l.3.2h.3l.3.2h.4l.3.2.3.2h.4l.3.2h.4l.3.2h.4l.4.2h.3l.4.2h.4l.3.2h.6l.3.2h1zm0 1.5v-1.5h.4v.2h.2v.2h.2v.9h-.2v.2h-.2v.2h-.2zm23.4 7.5.2-1.2h.2v.2h.2v.8h-.6zm-10-2 .4-1.2h.5l.3.2h.4l.3.2h1.1l.2.2h.6l.2.2h.6l.3.2h.7l.4.2h.8l.3.2h.9l.2.2h.9l.5.2h.8l-.2 1.3h-.9l-.4-.2h-.6l-.4-.2h-.7l-.4-.2h-1.4l-.3-.2h-.7l-.3-.2h-.6l-.3-.2h-.5l-.4-.2h-.5l-.3-.2h-.5l-.2-.2h-.5l-.2-.2zm.4-1.2-.3 1h-.2v-.8h.8z"></path><path fill="#21231e" d="m431.5 332-.7 1.3-.4-.3-.4-.2-.4-.3-.3-.2-.4-.3-.4-.3-.3-.3-.4-.3-.4-.2-.3-.4-.3-.3-.2-.3-.3-.3-.3-.4-.2-.3-.3-.4-.2-.3-.3-.4-.2-.4-.2-.3-.3-.5-.2-.4-.2-.2v-.4l-.3-.4-.2-.3-.2-.4-.2-.3v-.4l-.2-.3-.2-.3-.2-.4 1.4-.7.2.2.2.4v.3l.3.2.2.4.2.3v.3l.3.3.2.4.2.3.2.4v.3l.3.4.3.3.2.4.2.4.2.4.3.3.2.4.3.4.2.3.3.4.3.3.3.3.3.2.3.3.3.3.2.2.4.3.3.2.2.2.3.2zm7.6-5.3 1.5.8-.2.4-.2.3-.2.4-.2.4-.3.5-.3.4-.2.2-.3.4-.3.3-.3.2-.3.3-.3.3-.3.3-.2.4-.3.2-.3.2-.4.2-.3.2-.3.2h-.3l-.5.2h-.3l-.3.2h-2.2l-.4-.2-.3-.2h-.2l.7-1.5h.5l.2.2h1.7l.3-.2h.2l.3-.2h.2l.3-.3.2-.2.3-.2h.2l.3-.3.2-.3.3-.2.2-.3.3-.4.2-.3.3-.3.2-.4.2-.3.3-.4.2-.5.2-.4v-.3z"></path><path fill="#21231e" d="m429.6 331-2.2-2.3c-1-1.3-.5-3 2-5.4 1.5.7 3 1.3 4.2 2-1 3-2.2 4.8-4 5.6zm-6.3 82-.4 1h-.4v-1h.8zm23.8-3.6 1 1-.7.5-.6.4-.7.5-.6.4-.7.5-.7.3-.7.4-.7.4-.7.4-1 .3-.6.3-.8.2-.7.2-1 .2-.7.2h-.8l-.8.2h-5l-1-.2h-.8l-.8-.3h-1l-.8-.4h-1l-.7-.3-1-.3-.8-.3.3-1 .8.2 1 .3 1 .3.7.2 1 .2.7.2h.8l1 .2h.7l.7.2h4.8l.7-.2h1l.6-.3.7-.2h.7l.7-.4.7-.3.7-.3.8-.3.6-.4.7-.4.7-.5.6-.5.6-.5.5-.5.6-.6zm3-2.8 1 .8h-.2v.2h-.2l-.2.2v.2h-.2v.2h-.2v.2h-.2l-.2.2-.2.2v.2h-.2v.2h-.2l-.2.2-.2.2-.2.2-.2.2v.2h-.2l-1-.8h.2v-.2h.2v-.2h.2l.2-.2.2-.2.2-.2v-.2h.2v-.2h.2l.2-.2.2-.2.2-.2v-.2h.2l.2-.2.2-.2v-.2h.2zm1 .8-1-.8.2-.2h.7v.2h.2v.8z"></path><path fill="#21231e" d="m452.2 401.3-1.2-.2v-.2h.2l.2-.2h.6v.4h.2v.2zm-5.5 16 .3 1-.7-.8.2-.4.2-.4.2-.5v-.4l.3-.4.2-.5.2-.5v-.5l.3-.4.2-.5.2-.5v-.5l.3-.5v-.5l.3-.5v-.5l.3-.5v-.5l.3-.5v-.5l.2-.5.2-.6v-.5l.2-.6v-.5l.2-.4v-.6l.2-.6v-.5l.2-.7v-.6l.2-.6 1.2.3v.6l-.2.5v.6l-.2.6v.6l-.2.6v.5l-.2.6-.2.4v.6l-.2.5v.6l-.3.6v.5l-.3.6v.6l-.3.5v.5l-.2.5-.2.5v.5l-.3.5-.2.5v.5l-.2.4-.2.5-.2.6-.2.5-.2.6-.2.5-.2.5-.2.5-.7-.8zm-.4.2 1 .5v.2h-.2v.2h-.4l-.2-.2v-.2h-.2v-.4zm15.2-9.5 1 .7-.3.4-.4.6-.3.4-.4.4-.2.4-.4.4-.4.4-.4.4-.4.3-.4.4-.5.3-.4.4-.6.3-.4.3-.5.3-.5.3-.5.3-.5.2-.5.3-.5.3-.6.2-.5.3-.7.2-.5.3-.6.2-.6.2-.6.2-.6.2-.6.2-.6.2-.6.2-.6.2-.3-1.2.6-.2h.6l.5-.3.6-.2.6-.2.6-.2h.6l.5-.3.6-.3.4-.2.5-.2.4-.3.5-.2.4-.3.5-.3.4-.4.5-.3.3-.3.5-.3.4-.3.4-.3.4-.2.4-.4.4-.3.4-.3.4-.3.3-.4.3-.4.3-.4.3-.4.2-.4.3-.4zm1 .7-1-.7h.2v-.2h.7v.2h.2v.7z"></path><path fill="#21231e" d="M461.3 400.2H460v-.2h.2v-.2h1v.4zm4.4 15.7.7 1-.8-.3-.3-.4-.3-.4-.2-.5-.3-.5-.2-.4-.3-.4-.2-.5-.3-.5-.2-.4-.2-.5v-.5l-.3-.5-.2-.5-.2-.5-.2-.5v-.5l-.2-.5-.2-.5v-.6l-.3-.5v-.5l-.3-.6v-.4l-.2-.6v-.6l-.2-.5v-.7l-.2-.6v-.6l-.2-.5v-1.2h1v.5l.2.6v.6l.2.5v1.4l.2.5.2.6v.5l.2.5v.6l.3.5v.4l.2.5.2.4v.5l.2.4.2.5.2.4.2.5.2.4.2.4.2.5.2.4.2.5.3.4.3.4.2.4.3.5.2.3.3.4.3.3h-1zm0 .7 1-.7v.8l-.2.2h-.2v.2h-.4v-.2h-.2zm7.6-12.6 1 .4v.6l-.2.5v.5l-.2.5-.2.5-.2.5-.2.5-.2.5-.2.4-.2.4-.2.4-.3.5v.4l-.4.4-.2.5-.3.4v.3l-.4.3-.3.4-.3.4-.2.3-.3.3-.3.4-.3.3-.4.3-.3.3-.3.3-.3.2-.3.3-.3.4-.3.2-.3.3-.7-1 .3-.3.3-.2.3-.3.3-.2.2-.3.3-.3.2-.2.3-.3.3-.4.3-.3.2-.4.3-.4.4-.3.2-.4.3-.4v-.4l.4-.3.2-.5.3-.4v-.3l.3-.4.2-.4.2-.6.2-.4v-.5l.3-.4.2-.4.2-.5v-.4l.3-.5v-.4l.3-.5zm1 .4-1-.3v-.2h.8v.2h.2v.4z"></path><path fill="#edb92e" d="M406 317.8c-16.7 1.8-16 12.6-.4 28 3 3 4 3 4.6-.2 1.2-5.3 7-8.5 10.2-4.4 2 2.7 1.6 4.3 8.6 3.3 9 7.5 16.2 12.8 4.5 12.3-5-.2-9 2.8-15.7 2.5 2 4 2.3 4.3 3.4 4.6 6.5 1.2 13.3-2.8 19.8-1.6 14.3 2.6-23-38.6-22.4-40.3 1-4-9-11.5-12.7-4.2z"></path><path fill="#21231e" d="m406 345.5-.7.7-1.4-1.5-1.5-1.4-1.2-1.4-1.2-1.4-1-1.3-1-1.3-.8-1.3-.8-1.2-.8-1.2-.6-1.2-.5-1-.5-1.2-.3-1-.3-1v-1l-.2-1v-1l.2-1 .2-.8.4-.8.4-.8.6-.7.6-.7.8-.6.8-.6 1-.5 1-.5 1-.4 1.4-.4 1.3-.3 1.3-.2 1.6-.2v1l-1.5.2-1.4.2-1.2.3-1.2.3-1 .4-1 .5-1 .4-.6.5-.7.7-.6.6-.4.6-.4.6-.4.7-.2.8-.2 1v1.7l.2.8.2 1 .4 1 .4 1 .5 1 .5 1.3.7 1 .8 1.3 1 1.4.8 1.2 1 1.3 1.2 1.3 1.2 1.3 1.4 1.4 1.4 1.5zm3.8 0 1 .2v.3l-.2.3v.5l-.2.2v.2l-.2.2v.2l-.2.2-.3.3v.2h-.3l-.2.2H408l-.2-.2h-.2l-.2-.2h-.2l-.2-.3-.2-.2h-.2l-.3-.4h-.2l-.2-.3-.3-.3-.2-.2.7-.7.2.2.3.3.2.2.3.2.2.2.2.2h.2l.2.2.2.2h.3v.2h.6l.2-.2v-.2l.2-.2v-.2l.2-.4v-.4l.2-.3zm11-4.6-.8.5-.3-.4h-.3l-.3-.4-.2-.2-.3-.2h-.3l-.3-.2h-.5l-.3-.2h-1.5l-.3.2-.4.2h-.2l-.4.3-.3.2-.2.2-.4.2-.3.2-.2.3-.3.3-.2.4-.3.3-.2.4-.3.5-.2.4-.2.3v.5l-.2.4v.5l-1-.2v-.5l.2-.5.2-.5.2-.5.3-.5.2-.4.2-.4.3-.4.3-.4.3-.4.4-.3.4-.3.4-.3.4-.2.3-.2.3-.2.5-.2h.4l.4-.2h.4l.4-.2h1l.4.2h.6l.4.3.4.3.3.2.4.3.4.5.4.4zm8.6 3.2-.7.7h.4-.5l-.6.2h-4.5l-.2-.2h-.3l-.2-.2h-.2l-.2-.2-.2-.2-.2-.2h-.2v-.3l-.3-.3v-.2l-.3-.2v-.2h-.3l-.2-.3-.2-.3v-.2l-.3-.2v-.3l-.3-.2.8-.6h.2v.4l.3.2.2.3.3.3v.2l.2.2.2.2.2.2.2.2.2.2h.2v.2h.3l.2.2h.2l.2.2h5.4zm-.4 0 .2-.2.2.2h-.4zm4.5 13v-1h4.1l.5-.2h.4l.3-.3h.2v-1l-.2-.3-.2-.4-.3-.5-.4-.4-.5-.4-.4-.4-.4-.5-.6-.5-.6-.6-.6-.6-.7-.5-.6-.6-.7-.7-.7-.7-.8-.6-.8-.7-.8-.7-1-.7.8-.8.8.7.8.5.8.7.8.7.7.5.8.6.8.7.7.6.6.6.7.4.6.6.5.5.5.5.4.5.4.4.4.4.3.4.2.4v2.3l-.4.3-.3.2-.4.3-.6.2h-.6l-.7.2h-3.6zm-15.2 2-1 .4.5-.8h3.4l.6-.2h.5l.5-.2h.5l.5-.2h.5l.4-.2h.5l.5-.2.4-.2h.6l.4-.2.5-.2h.4l.4-.2h.5l.3-.2h.5l.4-.2h.5l.5-.2h2.6v1H431l-.4.2h-.9l-.4.3h-.8l-.4.2h-.5l-.4.3h-.6l-.5.2h-.5l-.5.3h-.5l-.5.2h-.5l-.5.2h-.5l-.6.2h-.6l-.6.2h-3l.5-.7zm-1 .4-.3-.8h.8l-.4.8zm4 4-.2.8h-.4v-.2h-.2l-.2-.2h-.2v-.2h-.2v-.2h-.2v-.2l-.2-.3-.2-.2-.3-.3-.2-.2v-.2h-.2v-.4l-.3-.2v-.3h-.3v-.4l-.3-.3v-.4l-.3-.4 1-.5v.5l.2.3.2.3v.4l.3.3.2.2v.2l.3.2v.2l.2.2v.2h.2v.3l.2.2v.2l.2.2h.2v.2h.4v.2h.4zm-.2.8zm20-2.5v1l-.7-.2h-4.7l-.6.2h-.7l-.6.2h-.7l-.6.2-.6.2h-.6l-.6.2h-.7l-.7.3-.6.2h-.6l-.6.2h-.6l-.6.2h-4.6l-.6-.2.3-1 .6.2h4.8l.6-.2h.6l.5-.2h.6l.7-.2.7-.2h.6l.6-.2.6-.2h.7l.5-.2h.6l.7-.2h.7l.6-.2h4.9zm-23-40 1 .3.3.3.5.7.6.8.8 1.2 1 1.2 1 1.3 1 1.5 1.3 1.5 1.3 1.7 1.4 1.8 1.4 1.8 1.5 1.8 1.5 2 1.5 1.8 1.4 2 1.4 2 1.3 1.7 1.3 2 1.2 1.7 1 1.7 1 1.6.8 1.5.6 1.4.4 1.3.3 1.2v2l-.6.7-.8.5H441v-1h2l.4-.3.3-.4V360l-.3-1.2-.4-1.2-.6-1.3-.8-1.5-1-1.6-1-1.7-1-1.8-1.3-1.8-1.4-2-1.4-2-1.4-1.8-1.5-2-1.4-1.8-1.5-1.8-1.4-1.8-1.3-1.8-1.3-1.6-1.2-1.6-1-1.5-1.2-1.3-1-1.2-.7-1-.6-1-.5-.7-.3-.4v-.6zm-12-3.7v-1l-.5.2.4-.6.3-.7.5-.6.5-.4.5-.3.6-.3.5-.2.5-.2h2.6l.6.2.6.2.5.3.6.2.6.3.4.4.5.2.4.4.4.4.5.5.4.4.3.4.3.4.3.5.2.5.2.5v.5l.2.5v1l-1-.3v-1l-.2-.4v-.4l-.3-.4-.2-.4-.3-.4-.3-.4-.5-.4-.3-.4-.5-.4-.4-.4-.5-.3-.4-.3-.5-.3h-.7l-.5-.3-.5-.2h-.5l-.6-.2h-2l-.4.3-.5.2-.4.3-.5.5-.4.4-.3.4-.3.6-.4.3zm.4-.3-.2.2h-.2l.4-.2zm-.5-.2v.5-.5zm.4.2-.2.2h-.2l.4-.2z"></path><path fill="#21231e" d="m407 317.2-1.3.4v-.6h.2v-.2h.8v.2h.2v.2zm7.6 10.6-.8 1-.4-.4-.3-.4-.3-.3-.3-.3-.4-.3-.3-.2-.3-.4-.3-.3-.2-.2-.3-.4-.3-.3-.3-.2-.4-.4-.3-.3-.2-.2-.2-.4-.2-.3-.3-.3-.2-.3v-.4l-.4-.3-.2-.4-.2-.4-.2-.4-.2-.4v-.4l-.3-.3-.2-.4v-.3l-.3-.3v-.4l-.3-.4 1.2-.4v.7l.3.3v.3l.3.4v.3l.3.4v.3l.3.4.2.3.2.3.2.4v.3l.3.3.2.4.3.3.2.3.3.4.2.3.3.3.3.3.4.4.2.3.3.3.2.3.3.3.4.2.2.3.3.3.4.4.2.3.4.3zm-.8 1 .8-1v.2h.2v.7h-.4v.2h-.7zm-9.5-4.6c.8 0 1.3.7 1.2 1.5s-.8 1.3-1.5 1.2c-.8-.2-1.3-.8-1.2-1.6s.8-1.3 1.5-1.2zm-45.9 38.4h.2v-.2h.4v.2h.2v.2l.2.2v.4h-.2l-.8-.8zm-22.7 56 .2-1V416l.4-1.5.3-1.5.4-1.7.6-1.8.5-2 .7-2 .6-2 .6-2 .6-2.2.8-2.2.7-2.2 1-2 .7-2.3 1-2.3.7-2.2 1-2.2.8-2 1-2.2.8-2 1-2 .8-2 1-1.7.8-1.5 1-1.6.7-1.5 1-1.3.7-1.2.8-1 .8-.8.8-.6.7 1-.6.5-.7.8-.7 1-.8 1-1 1.3-.7 1.5-1 1.5-.7 1.7-1 1.7-.8 2-1 1.8-.8 2-1 2-.8 2.3-1 2-.7 2.3-1 2.3-.7 2.3-.8 2.2-.7 2.2-.8 2.2-.6 2-.6 2-.6 2.2-.6 2-.5 1.8-.4 1.8-.4 1.6-.5 1.6-.2 1.4-.2 1.3v1H336zm5.6 80.5-.7-2-.7-2-.7-2.2-.6-2.2-.6-2.2-.4-2.4-.4-2.3-.5-2.4-.4-2.5-.3-2.4-.3-2.5-.3-2.7-.2-2.6-.3-2.6-.2-2.5-.2-2.6v-3l-.2-2.7v-18.5l.3-2.7v-2.5l.2-2.6v-2.7l.3-2.6.2-2.5.2-2.5h1.2l-.3 2.6-.2 2.5-.2 2.6-.2 2.6v2.6l-.2 2.6v2.6l-.2 2.7v18.8l.2 2.6v2.6l.3 2.6.3 2.6.3 2.6.3 2.5.2 2.5.3 2.5.4 2.4.3 2.5.5 2.3.5 2.3.5 2.3.6 2.2.6 2 .7 2.2.7 2-1 .4zm1-.4v.8h-.8v-.2l1-.6z"></path></g><use xlink:href="#rs-e" width="1350" height="900" transform="matrix(-1 0 0 1 964.3 0)"></use><path fill="#21231e" d="M473 398.4h-.2v.5h-.2v.8l.2.7v1.6l.2.8.2.8v.7l.3.8v.8l.3.7.2.8.3.7.2.7.2.7.3.7.3.8.3.7.3.7.2.7.3.6.4.6.2.7.4.5.4.7.4.7.4.5.5.6.4.8.5.6.4.6.5.6.6.6.2.2h.8v-.2l.6-.6.5-.6.5-.6.4-.6.5-.7.5-.5.4-.6.3-.8.4-.6.3-.7.4-.8.4-.6.3-.7.4-.8.3-.7.3-.7.3-.7.3-.6.2-.7.3-.7.3-.7.2-.8v-.7l.3-.7.2-.7v-.7l.3-.8v-1.4l.2-.8v-2.1h-1v.4l-.2 1v1.4l-.2.7v.7l-.2.7-.2.7v.8l-.3.7-.2.7-.2.7v.6l-.3.7-.3.7-.2.7-.3.7-.4.6-.2.7-.4.7-.3.6-.3.7-.4.6-.4.7-.3.6-.4.6-.5.6-.4.6-.4.7-.4.7-.4.6-.5.6h-.2l-.5-.7-.4-.6-.4-.6-.4-.6-.4-.6-.4-.6-.4-.6-.4-.6-.3-.7-.4-.6-.4-.7-.3-.6-.3-.7-.4-.7-.2-.6-.3-.7-.2-.7-.2-.7-.2-.7-.2-.7-.2-.8-.2-.7-.2-.7v-.7l-.3-.6v-.8l-.2-.7v-2.3l-.2-.8v-.4h-.2v-.2h-.5z"></path><path fill="#c6363c" d="M549.2 422v108.6a72 72 0 0 1-19.7 49.8 65 65 0 0 1-94.7.1 72.9 72.9 0 0 1-19.7-49.8V422h134.2z"></path><use xlink:href="#rs-f" width="1350" height="900" transform="matrix(-1 0 0 1 964.3 -90)"></use><path fill="#fff" stroke="#21231e" d="M549.2 488.6v28h-53v83a63.8 63.8 0 0 1-14 1.5 59 59 0 0 1-14-1.5v-83h-53v-28h53V422h28v66.6h53z"></path><use xlink:href="#rs-f" width="1350" height="900" transform="translate(0 -90)"></use><path id="rs-f" fill="#fff" stroke="#21231e" d="M459 567.3V528c-8.4-2.3-29.3-10.6-30.3 7.6-.5 8.4 10.4 14 13.3 6.5 1.4-3.4 0-6-2-6.7-2.4-.8-4.6 1-4 3.6-8.8-4.7 8-14.6 15.5-1.7 2.2 3.7-3.7 7.6-3.7 10.4 0 2.7 5.8 7 3.7 10.3-7.7 12.8-24.3 3-15.5-1.6-.6 2.7 1.6 4.5 4 3.6 2-.8 3.4-3.3 2-6.8-3-7.5-13.8-2-13.3 6.5 1 18.2 22 10 30.4 7.6z"></path><use xlink:href="#rs-f" width="1350" height="900" transform="matrix(-1 0 0 1 964.3 0)"></use><path fill="#21231e" d="M414 421v113.3l.2 1.7v2l.4 1.7.2 1.8.3 1.7.4 1.8.3 1.8.4 1.7.6 1.7.5 1.7.6 1.5.6 1.7.5 1.6.7 1.6.7 1.6.7 1.6.8 1.6.8 1.5.8 1.5 1 1.5.8 1.5 1 1.4.8 1.4 1 1.4 1 1.4 1 1.3 1 1.5 1.2 1.2 1 1.3 1.2 1.2 1.2 1.2 1.2 1.2 1.2 1 1.3 1.3 1 1 1.4 1 1.3 1 1.4 1 1.5 1 1.4 1 1.3.8 1.4.8 1.5.8 1.4.8 1.6.7 1.5.6 1.5.7 1.5.6 1.6.5 1.6.5 1.5.5 1.6.5 1.8.4 1.6.4 1.7.4 1.8.2 1.7.3 1.7.2h1.7l1.6.2h8.9l1.7-.3 1.8-.3 1.7-.3 1.7-.2 1.7-.4 1.5-.4 1.7-.4 1.6-.5 1.6-.5 1.6-.5 1.5-.6 1.6-.7 1.6-.7 1.6-.7 1.5-.8 1.4-.8 1.6-.8 1.4-1 1.5-.7 1.4-1 1.2-1 1.4-1 1.3-1 1.2-1 1.3-1 1.2-1.3 1.2-1 1-1.3 1.3-1.2 1.2-1.2 1-1.3 1.2-1.2 1-1.4 1-1.2 1-1.4 1-1.4 1-1.4 1-1.4.7-1.5 1-1.5.7-1.5.8-1.5.8-1.6.7-1.6.6-1.6.6-1.6.6-1.6.5-1.7.5-1.6.5-1.8.4-1.7.6-1.7.3-1.8.2-1.8.3-1.7.3-1.8v-.9l.3-2 .2-1.7V421H414zm2.3 2.2H548V536l-.3 1.6-.2 1.8-.2 1.7-.3 1.8-.3 1.7-.4 1.7-.3 1.7-.5 1.5-.4 1.7-.4 1.6-.5 1.6-.5 1.6-.6 1.5-.8 1.6-.7 1.6-.7 1.5-.7 1.6-.7 1.4-.8 1.5-.8 1.4-1 1.3-.8 1.4-1 1.3-1 1.3-1 1.3-1 1.3-1 1.2-1.2 1.2-1 1.2-1.2 1-1.2 1.3-1.2 1-1.2 1-1.2 1-1.3 1-1.2 1-1.4 1-1.4 1-1.3.8-1.4 1-1.5.7-1.4.8-1.3.7-1.5.8-1.5.6-1.4.7-1.5.7-1.6.5-1.5.6-1.5.5-1.6.4-1.6.4-1.6.5-1.6.3-1.6.3-1.7.4H489l-1.8.3h-1.7l-1.6.2h-3.6l-1.6-.2H477l-1.6-.3h-1.6l-1.7-.4-1.5-.2-1.6-.3-1.7-.4-1.6-.3-1.6-.4-1.4-.5-1.6-.6-1.5-.5-1.5-.6-1.5-.6-1.4-.6-1.4-.8-1.4-.7-1.4-.8-1.4-.8-1.4-1-1.3-.7-1.4-1-1.3-1-1.2-1-1.3-1-1.2-1-1.2-1-1-1-1.3-1.3-1-1-1.2-1.3-1-1.2-1-1.3-1.2-1.4-1-1.3-1-1.3-1-1.3-.8-1.4-.8-1.4-1-1.5-.7-1.5-.8-1.4-.7-1.5-.8-1.4-.6-1.5-.6-1.5-.6-1.5-.5-1.6-.6-1.6-.5-1.6-.5-1.7-.4-1.6-.4-1.8-.4-1.7-.3-1.7-.3-1.7-.2-1.6-.2-1.8-.2-1.7v-5.4z"></path></g></svg>

`;
});
const Se = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of se" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-se" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#005293" d="M0 0h640v480H0z"></path><path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96z"></path></svg>

`;
});
const Sk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of sk" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-sk" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#ee1c25" d="M0 0h640v480H0z"></path><path fill="#0b4ea2" d="M0 0h640v320H0z"></path><path fill="#fff" d="M0 0h640v160H0z"></path><path fill="#fff" d="M233 370.8c-43-20.7-104.6-61.9-104.6-143.2 0-81.4 4-118.4 4-118.4h201.3s3.9 37 3.9 118.4S276 350 233 370.8z"></path><path fill="#ee1c25" d="M233 360c-39.5-19-96-56.8-96-131.4s3.6-108.6 3.6-108.6h184.8s3.5 34 3.5 108.6C329 303.3 272.5 341 233 360z"></path><path fill="#fff" d="M241.4 209c10.7.2 31.6.6 50.1-5.6 0 0-.4 6.7-.4 14.4s.5 14.4.5 14.4c-17-5.7-38.1-5.8-50.2-5.7v41.2h-16.8v-41.2c-12-.1-33.1 0-50.1 5.7 0 0 .5-6.7.5-14.4 0-7.8-.5-14.4-.5-14.4 18.5 6.2 39.4 5.8 50 5.6v-25.9c-9.7 0-23.7.4-39.6 5.7 0 0 .5-6.6.5-14.4 0-7.7-.5-14.4-.5-14.4 15.9 5.3 29.9 5.8 39.6 5.7-.5-16.4-5.3-37-5.3-37s9.9.7 13.8.7c4 0 13.8-.7 13.8-.7s-4.8 20.6-5.3 37c9.7.1 23.7-.4 39.6-5.7 0 0-.5 6.7-.5 14.4 0 7.8.5 14.4.5 14.4a119 119 0 0 0-39.7-5.7v26z"></path><path fill="#0b4ea2" d="M233 263.3c-19.9 0-30.5 27.5-30.5 27.5s-6-13-22.2-13c-11 0-19 9.7-24.2 18.8 20 31.7 51.9 51.3 76.9 63.4 25-12 57-31.7 76.9-63.4-5.2-9-13.2-18.8-24.2-18.8-16.2 0-22.2 13-22.2 13S253 263.3 233 263.3z"></path></svg>

`;
});
const Sn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of sn" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-sn" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#0b7226" d="M0 0h213.3v480H0z"></path><path fill="#ff0" d="M213.3 0h213.3v480H213.3z"></path><path fill="#bc0000" d="M426.6 0H640v480H426.6z"></path></g><path fill="#0b7226" d="M342 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3z"></path></svg>

`;
});
const Tn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of tn" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-tn" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#e70013" d="M0 0h640v480H0z"></path><path fill="#fff" d="M320 119.2a1 1 0 0 0-1 240.3 1 1 0 0 0 1-240.3zM392 293a90 90 0 1 1 0-107 72 72 0 1 0 0 107zm-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.4-12.2 37.4-12.2V188l23.1 31.8 37.4-12.1-23.1 31.8z"></path></svg>

`;
});
const Tr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of tr" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-tr" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd"><path fill="#e30a17" d="M0 0h640v480H0z"></path><path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"></path><path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"></path><path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"></path></g></svg>

`;
});
const Ua = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of ua" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-ua" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><g fill-rule="evenodd" stroke-width="1pt"><path fill="gold" d="M0 0h640v480H0z"></path><path fill="#0057b8" d="M0 0h640v240H0z"></path></g></svg>

`;
});
const Us = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of us" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-us" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#bd3d44" d="M0 0h640v480H0"></path><path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"></path><path fill="#192f5d" d="M0 0h364.8v258.5H0"></path><marker id="us-a" markerHeight="30" markerWidth="30"><path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"></path></marker><path fill="none" marker-mid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"></path></svg>

`;
});
const Uy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of uy" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-uy" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><path fill="#fff" d="M0 0h640v480H0z"></path><path fill="#0038a8" d="M266 53.3h374v53.4H266zm0 106.7h374v53.3H266zM0 266.7h640V320H0zm0 106.6h640v53.4H0z"></path><g fill="#fcd116" stroke="#000" stroke-miterlimit="20" stroke-width=".6" transform="translate(133.3 133.3) scale(2.93333)"><g id="uy-c"><g id="uy-b"><g id="uy-a"><path stroke-linecap="square" d="m-2 8.9 3 4.5c-12.4 9-4.9 14.2-13.6 17 5.4-5.2-.9-5.7 3.7-16.8"></path><path fill="none" d="M-4.2 10.2c-6.8 11.2-2.4 17.4-8.4 20.3"></path><path d="M0 0h6L0 33-6 0h6v33"></path></g><use xlink:href="#uy-a" width="100%" height="100%" transform="rotate(45)"></use></g><use xlink:href="#uy-b" width="100%" height="100%" transform="rotate(90)"></use></g><use xlink:href="#uy-c" width="100%" height="100%" transform="scale(-1)"></use><circle r="11"></circle></g><g transform="translate(133.3 133.3) scale(.29333)"><g id="uy-d"><path d="M81-44c-7 8-11-6-36-6S16-35 12-38s21-21 29-22 31 7 40 16m-29 9c7 6 1 19-6 19S26-28 32-36"></path><path d="M19-26c1-12 11-14 27-14s23 12 29 15c-7 0-13-10-29-10s-16 0-27 10m3 2c4-6 9 6 20 6s17-3 24-8-10 12-21 12-26-6-23-10"></path><path d="M56-17c13-7 5-17 0-19 2 2 10 12 0 19M0 43c6 0 8-2 16-2s27 11 38 7c-23 9-14 3-54 3h-5m63 6c-4-7-3-5-11-16 8 6 10 9 11 16M0 67c25 0 21-5 54-19-24 3-29 11-54 11h-5m5-29c7 0 9-5 17-5s19 3 24 7c1 1-3-8-11-9S25 9 16 7c0 4 3 3 4 9 0 5-9 5-11 0 2 8-4 8-9 8"></path></g><use xlink:href="#uy-d" width="100%" height="100%" transform="scale(-1 1)"></use><path d="M0 76c-5 0-18 3 0 3s5-3 0-3"></path></g></svg>

`;
});
const Za = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of za" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { id: "flag-icons-za" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="za-a"><path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z"></path></clipPath></defs><g clip-path="url(#za-a)" transform="translate(67.4) scale(.93748)"><g fill-rule="evenodd" stroke-width="1pt"><path d="M-71.9 407.8V104.4L154 256.1-72 407.8z"></path><path fill="#000c8a" d="m82.2 512.1 253.6-170.6H696V512H82.2z"></path><path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0z"></path><path fill="#ffb915" d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192L-72 64z"></path><path fill="#007847" d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"></path><path fill="#fff" d="M23 0h59.2l253.6 170.7H696V204H324.3L23 .1zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"></path></g></g></svg>

`;
});
const Zw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "flag of zw" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if (
    $$props.ariaLabel === void 0 &&
    $$bindings.ariaLabel &&
    ariaLabel !== void 0
  )
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
      },
      { id: "flag-icons-zw" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel),
      },
      { viewBox: "0 0 640 480" },
    ],
    {}
  )}><defs><clipPath id="zw-a"><rect width="546" height="420.1" x="1.9" y=".1" fill="#00f" fill-rule="evenodd" ry="0"></rect></clipPath></defs><g clip-path="url(#zw-a)" transform="matrix(1.1722 0 0 1.1426 -2.3 -.1)"><path fill="#006400" d="M0 0h840v420H0z"></path><path fill="#ffd200" d="M0 60h840v300H0z"></path><path fill="#d40000" d="M0 120h840v180H0z"></path><path d="M0 180h840v60H0z"></path><path stroke="#000" stroke-width="20" d="M0 0v420l280-210z"></path><path fill="#fff" d="M0 0v420l280-210z"></path><path fill="#d40000" d="M106.5 104.4 162 275.1 16.8 169.6h179.5L51 275.1z"></path><path fill="#fc0" d="m82.8 253.7 9.8-1.8 18.1-.7 6.7.6 15 2.5 1.1-1.5V242l1.8-9.3 3-9.4 3.3-7.5 4.2-7.8 6.8 1.7h1.8l.2-1.3-14.4-12.3-15-11.5-21.7-16.2-2-.5-2.3-17-1.7-5.1-2.3-2-4.3-1.4-4.8.2-2.2 1.2-4.6 1-2.4.4-1.6 1.9-.2 2.4 6.7.2 1.7.7-.2.7-3.8.5-1.8.6 2.1 1.6 2.2.8 2.8 1 .6 2 .2 25.8-1.5 4-.5 7.5 2.2 9-5.6 6.4L77 216l-.6 3.5-1.7 3.5-.2 2.2 1.1 2.4 4.3 14.2 2.2 11.7z"></path><path d="M88 142c-1.8 0-2.6.2-4.3 1.1a10.8 10.8 0 0 1-4.6 1.4c-2.5 0-4.5 1.8-4.5 4.1v1.5l3.6-.1c10.6.3 1 1.3.2 1.4-2.6.5.6 2.6 3.7 3.7 3.3 1 3.1.4 3.1 15 0 11.9 0 13.6-1 16.3-1.3 4-1.3 10 0 14 .6 1.6 1 3 1 3.3 0 .2-1.6 2.1-3.5 4.3-3.5 4-5.6 8.1-5.6 11a6 6 0 0 1-1 2.6c-1.3 1.7-1.3 4.6-.1 5.7 1.3 1.2 6.6 21.8 6.7 25.7 0 1.4.2 1.4 8.3-.2 6.6-1.3 22.1-1.6 30-.6 3.6.5 7.8 1.3 9.3 1.6 4.8 1.3 4.6 1.5 4.6-4.3a74 74 0 0 1 5.1-26.7 94.7 94.7 0 0 1 6.9-14s1.8.2 4 .8c4.1 1 5.3.9 5.3-1 0-1-4.3-4.6-25.4-21a432.2 432.2 0 0 0-26.3-19.9c-.6 0-1.2-.3-1.3-.7l-1.5-9.5c-.7-4.9-1.7-9.7-2.1-10.7-1.4-3-4.1-4.5-8.6-4.8a31.2 31.2 0 0 0-2 0zm.1 1h2c6.6.4 7.8 2.2 9.6 14a173 173 0 0 1 1.2 9.4c0 .8-.9 1.8-3.2 3.3a46.8 46.8 0 0 0-10 9.5l-1.3 1.8-.3-4.2V165c.3-8.7 0-9.5-2.8-10.5-2.3-.8-5.3-1.6-4.5-2.1 1-.6 2-.2 4.4-.9 1-.2.9-.1.7-.9-.2-1.3-1.6-2-5.3-1.8-3 .2-3.3.1-3.1-.7.4-1.6 2-2.6 4.5-2.9a13.4 13.4 0 0 0 4.4-1.3 7 7 0 0 1 3.7-1zm14.9 25.8h.4c1.7.3 50.8 38.7 50.8 39.8 0 .4-.4.7-1 .7-.4 0-12.9-3.5-27.7-7.8-23.6-7-27-8-28-9.3a5.1 5.1 0 0 1-.1-6.2 5 5 0 0 0 1-2c0-1.2-2.5 1.8-3 3.5-.5 2 .5 5.4 2 6.5.6.5 5.1 2 10 3.5 8.4 2.4 9 2.7 9.4 4.1 1 3.3-2.5 7.2-7.5 8.3a14.6 14.6 0 0 0-5.2 2.4 68.2 68.2 0 0 1-17.2 10.4c-.4.3-.9 1.9-1.2 3.4-.6 3.3-.8 3.8-1.8 3.8-.5 0-.6-.3-.2-1.4.7-2 .6-4.4-.1-4.4-.5 0-.7.7-.7 1.8 0 1-.3 2.2-.7 2.5-.5.6-.6.2-.4-2.3.2-1.7.1-3-.1-3-.5 0-1.4 2.5-1.7 4.7-.2 1.3-.2 1.3-.6-.3-.3-1.2-.2-2 .7-3.5a9 9 0 0 0 1-3.5c0-1.3 1-2.6 5.7-7.3 3-3.1 6.7-7 8-8.7 2.3-2.8 2.4-3 2.3-5.9 0-1.6-.2-3.1-.4-3.3-.6-.6-1.4 2.6-1 4.3.2 1.6 0 2.1-3.3 6a113.2 113.2 0 0 1-7.5 7.8c-3.9 3.6-5.3 5.6-5.3 7.4 0 .6-.4 2-1 3.3s-.8 2.6-.6 2.9c.2.3 0 .3-.3 0-.5-.5-.5-1.3-.1-3a7 7 0 0 0 .2-2.6c-.5-1-1.2.2-1.5 2.7-.2 1.4-.5 2.5-.8 2.3-.7-.4-.5-3 .4-4.4.5-.7 1-2.3 1.3-3.6.7-3.7 2.3-6.7 5.8-10.7a57.5 57.5 0 0 0 3.2-3.8l-1-3.3a25 25 0 0 1-.2-13.7c1.3-3.8 3.9-7.6 8-11.7 4-3.9 7.9-6.3 10-6.4zm15 32.2a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.5.3a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.6.5a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.4.5a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm-6.3.6a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.4.4a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm5.2.2a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm-2.7 0a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm5 .6c.1 0 3.7.8 8 2l7.9 2.3-1.5 2.7a96.2 96.2 0 0 0-2.4 4.4c-1 2-1.2 2-6 .9-5.2-1.2-13.4-2.3-21.8-3l-8-.7 3-1.1a50.4 50.4 0 0 0 5.3-2.4c2-1.1 2.8-1.3 5.9-1 4.5.3 7.5-.6 8.7-2.4l1-1.7zm-8.8.6a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm5.6 0a.9.6 0 0 1 1 .6.9.6 0 0 1-1.6 0 .9.6 0 0 1 .7-.6zm-8 0a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.5zm5.3.2a.9.6 0 0 1 1 .5.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.5zm-6.6 1.1a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.5 0a.9.6 0 0 1 1 .7.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm2.6.2a.9.6 0 0 1 1 .5.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.5zm2.8 0a.9.6 0 0 1 1 .6.9.6 0 0 1-1.7 0 .9.6 0 0 1 .7-.6zm-20.3 8.1a191.2 191.2 0 0 1 35.1 4.2c.1.1-.6 2.5-1.7 5.4l-2 6c-.1.5-.8.5-2.5.3-8.3-1.3-32.3-1.2-41.5.2-5.3.8-6 .7-5.6-.4l1-3.5.6-2.7L93 221a63.4 63.4 0 0 0 10.2-6.5h.9zm-27 14.2c.3 0 .9.3 1.6.8 1 .6 2.2 1.1 2.7 1.1 2.6 0 4 3.7 6.2 16l.8 4.4c.2 1 0 1.2-2.3 1.7-2.8.6-3.5.7-3.5.3 0-1-2.8-13.7-4-18.2a96.9 96.9 0 0 1-1.6-6 .1.1 0 0 1 .1 0zm28.6 2h2.9l-1 1c-1.7 2-2.5 2.1-3.7.8a5 5 0 0 1-1-1.5c0-.2 1.3-.4 2.8-.4zm6.1 0h5.4l-1.2 1.2c-1.4 1.6-1.5 1.6-3 0l-1.2-1.3zm8.2 0h1.3c.7 0 2 0 2.8.2l1.5.3-1.4 1.3c-.8.7-1.5 1.3-1.6 1.2l-1.4-1.6-1.2-1.5zm8.5.3 1.2.3c.7.2 2.2.3 3.3.4h2l-1.5 1.3a8.9 8.9 0 0 1-1.8 1.3c-.1 0-1-.8-1.7-1.7l-1.5-1.6zm-30.2.1h.2c.1.2-.3 1-1 1.7l-1 1.4-1.5-1.2-1.5-1.3 2.4-.3 2.4-.3zm2.3.2 1.6 1.4 1.6 1.5-3 .2-3 .1 1.4-1.5 1.4-1.7zm18 0c.3 0 .5.1.8.3a6.6 6.6 0 0 1 1.3 1.7c.4.8.3 1-1 1l-2.5-.5-1.2-.3 1.3-1.3c.6-.6 1-1 1.4-1zm-8.3 0c.5 0 1 .3 1.6 1.3.7 1.1.7 1.1-2 1.1h-2.7l1.4-1.3c.7-.7 1.3-1 1.7-1zm17 .2 1.2 1.2c1.4 1.3 1.6 2.1.6 2l-2.8-.3-2.2-.2 1.6-1.3 1.6-1.4zm-35.2.7c.2 0 1 .5 1.6 1.2l1.2 1.3-2.5.4-3.5.5c-.7.2-.5-.3 1-1.6 1-1 2-1.8 2.2-1.8zm-3.7 0h.4c.8.2.8.4-.6 1.8l-1.5 1.5-.5-1.3c-.4-1-.3-1.3.6-1.7a4.8 4.8 0 0 1 1.6-.3zm46 1.8c.2 0 .2.2 0 .6-.2.8-1.1 1-1.1.2 0-.2.3-.5.7-.7h.3zm-21.4 1.6c7.7 0 15.5.2 17.4.4 3.1.4 3.4.5 3.4 1.7 0 1.4-.4 1.5-4.6.8-1.2-.3-6.3-.7-11.2-1.1a149.6 149.6 0 0 0-28.5 1c-1.9.2-2.4 0-2.4-.6 0-1.3 10.2-2.2 25.9-2.2zm-10.3 2.9h5.4l-1.2 1.3c-1.5 1.6-1.6 1.6-3 0l-1.2-1.3zm7 0 1.4 1.4 1.4 1.6-2.9.1h-2.9l1.5-1.6 1.4-1.5zm2.1 0h5.4l-1.2 1.3c-1.4 1.6-1.5 1.6-3 0l-1.2-1.3zm-12.8 0c.2 0 0 .5-.7 1.5-.7.9-1.4 1.6-1.5 1.6-.2 0-.9-.6-1.5-1.3l-1.2-1.3H96a9 9 0 0 0 2.7-.4 1 1 0 0 1 .4 0zm2 .5 1.3 1.2 1.5 1.3-2.6.2-2.9.2 1.4-1.5 1.3-1.4zm17.4 0 1.4 1.6c1.6 1.7 1.5 1.8-2.1 1.1l-1.7-.3 1.2-1.2 1.2-1.2zm2 0h2.4c2.6 0 2.9.4 1.4 1.8-1.2 1-1.2 1-2.6-.5l-1.2-1.3zm-30.6.5c1.2 0 1.1.1-.4 1.6-1.1 1.1-1.2 1.1-1.6.3-.3-1 .6-1.8 2-1.9zm38.8.2c.4 0 1.2 0 2 .2l2.3.4-1.3 1.2-1.2 1.2-1.1-1.4-1-1.6h.3zm-36 .5c.3 0 .6.2 1.1.7 1 1 1 1 .2 1.4a8 8 0 0 1-2.4.4H90l1.3-1.4c.7-.7 1-1 1.3-1.1zm34.1.3c.4 0 .7.2 1.2 1l.9 1.2h-2.1c-1.4 0-2-.2-2-.6.2-.4.7-1 1.3-1.3l.7-.3zm6.4 1.3c.2 0 .2.2.2.5 0 1-.9 1.7-1.3 1-.1-.3.1-.8.5-1.1l.6-.4zm-25.9 1.2c8.7 0 18.3.6 24 1.6l1.6.3v4.4c0 3.3-.2 4.4-.7 4.4l-5-1a126 126 0 0 0-35-1l-2.3.3-.6-3.7a21 21 0 0 1-.4-3.8s2.3-.5 5-.8c3.3-.5 8.2-.7 13.4-.7z"></path><path id="zw-b" d="M124.8 217.8c-3 0-5.1 2.1-5.1 5.2 0 4.8 5.4 7.2 8.6 3.8s1-9-3.5-9zm0 1.2a4 4 0 0 1 4 4c0 3-3.3 5-6 3.7-2.7-1.5-2.5-6.1.4-7.3a4.3 4.3 0 0 1 1.5-.4z"></path><use xlink:href="#zw-b" width="100%" height="100%" x="-20.1" y="-.6"></use><path d="M88 145.3a1.7 1.8 0 0 0-1.6 1.7 1.7 1.8 0 1 0 3.5 0 1.7 1.8 0 0 0-1.9-1.7zm.1.6a1.2 1.1 0 0 1 1.2 1.1 1.2 1.1 0 1 1-2.4 0 1.2 1.1 0 0 1 1.2-1.1z"></path></g></svg>

`;
});
function replacer(key, value) {
  if (typeof value === "bigint") {
    return value.toString();
  } else {
    return value;
  }
}
function formatUnixTimeToTime(unixTimeNano) {
  const unixTimeMillis = unixTimeNano / 1e6;
  const date = new Date(unixTimeMillis);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}
function getPositionText(position) {
  switch (position) {
    case Position.GOALKEEPER:
      return "Goalkeeper";
    case Position.DEFENDER:
      return "Defender";
    case Position.MIDFIELDER:
      return "Midfielder";
    case Position.FORWARD:
      return "Forward";
    default:
      return "Unknown position";
  }
}
function convertDateToReadable(nanoseconds) {
  const milliseconds = nanoseconds / 1e6;
  const date = new Date(milliseconds);
  return date.toLocaleDateString("en-GB");
}
function calculateAgeFromNanoseconds(nanoseconds) {
  const milliseconds = nanoseconds / 1e6;
  const birthDate = new Date(milliseconds);
  const today = /* @__PURE__ */ new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
function getFlagComponent(countryCode) {
  switch (countryCode) {
    case "Albania":
      return Al;
    case "Algeria":
      return Dz;
    case "Argentina":
      return Ar;
    case "Australia":
      return Au;
    case "Austria":
      return At;
    case "Belgium":
      return Be;
    case "Bosnia and Herzegovina":
      return Ba;
    case "Brazil":
      return Br;
    case "Burkina Faso":
      return Bf;
    case "Cameroon":
      return Cm;
    case "Canada":
      return Ca;
    case "Colombia":
      return Co;
    case "Costa Rica":
      return Cr;
    case "Croatia":
      return Hr;
    case "Czech Republic":
      return Cz;
    case "Denmark":
      return Dk;
    case "DR Congo":
      return Cg;
    case "Ecuador":
      return Ec;
    case "Egypt":
      return Eg;
    case "England":
      return Gb;
    case "Estonia":
      return Ee;
    case "Finland":
      return Fi;
    case "France":
      return Fr;
    case "Gabon":
      return Ga;
    case "Germany":
      return De;
    case "Ghana":
      return Gh;
    case "Greece":
      return Gr;
    case "Grenada":
      return Gd;
    case "Guinea":
      return Gn;
    case "Iceland":
      return Is;
    case "Iran":
      return Ir;
    case "Ireland":
      return Ie;
    case "Israel":
      return Il;
    case "Italy":
      return It;
    case "Ivory Coast":
      return Ci;
    case "Jamaica":
      return Jm;
    case "Japan":
      return Jp;
    case "Macedonia":
      return Mk;
    case "Mali":
      return Ml;
    case "Mexico":
      return Mx;
    case "Montserrat":
      return Ms;
    case "Morocco":
      return Ma;
    case "Netherlands":
      return Nl;
    case "Nigeria":
      return Ne;
    case "Northern Ireland":
      return Gb;
    case "Norway":
      return No;
    case "Paraguay":
      return Py;
    case "Poland":
      return Pl;
    case "Portugal":
      return Pt;
    case "Scotland":
      return Gb;
    case "Senegal":
      return Sn;
    case "Serbia":
      return Rs;
    case "Slovakia":
      return Sk;
    case "South Africa":
      return Za;
    case "South Korea":
      return Kr;
    case "Spain":
      return Es;
    case "Sweden":
      return Se;
    case "Switzerland":
      return Ch;
    case "Tunisia":
      return Tn;
    case "Turkey":
      return Tr;
    case "Ukraine":
      return Ua;
    case "United States":
      return Us;
    case "Uruguay":
      return Uy;
    case "Wales":
      return Gb;
    case "Zimbabwe":
      return Zw;
    default:
      return null;
  }
}
function updateTableData(fixtures, teams, selectedGameweek) {
  let tempTable = {};
  teams.forEach((team) => initTeamData(team.id, tempTable, teams));
  const relevantFixtures = fixtures.filter(
    (fixture) =>
      fixture.fixture.status === 3 &&
      fixture.fixture.gameweek <= selectedGameweek
  );
  relevantFixtures.forEach(({ fixture, homeTeam, awayTeam }) => {
    if (!homeTeam || !awayTeam) return;
    initTeamData(homeTeam.id, tempTable, teams);
    initTeamData(awayTeam.id, tempTable, teams);
    const homeStats = tempTable[homeTeam.id];
    const awayStats = tempTable[awayTeam.id];
    homeStats.played++;
    awayStats.played++;
    homeStats.goalsFor += fixture.homeGoals;
    homeStats.goalsAgainst += fixture.awayGoals;
    awayStats.goalsFor += fixture.awayGoals;
    awayStats.goalsAgainst += fixture.homeGoals;
    if (fixture.homeGoals > fixture.awayGoals) {
      homeStats.wins++;
      homeStats.points += 3;
      awayStats.losses++;
    } else if (fixture.homeGoals === fixture.awayGoals) {
      homeStats.draws++;
      awayStats.draws++;
      homeStats.points += 1;
      awayStats.points += 1;
    } else {
      awayStats.wins++;
      awayStats.points += 3;
      homeStats.losses++;
    }
  });
  return Object.values(tempTable).sort((a, b) => {
    const goalDiffA = a.goalsFor - a.goalsAgainst;
    const goalDiffB = b.goalsFor - b.goalsAgainst;
    if (b.points !== a.points) return b.points - a.points;
    if (goalDiffB !== goalDiffA) return goalDiffB - goalDiffA;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return a.goalsAgainst - b.goalsAgainst;
  });
}
function initTeamData(teamId, table, teams) {
  if (!table[teamId]) {
    const team = teams.find((t) => t.id === teamId);
    if (team) {
      table[teamId] = {
        ...team,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
      };
    }
  }
}
function createTeamStore() {
  const { subscribe, set } = writable([]);
  const actor = ActorFactory.createActor(
    idlFactory$1,
    {
      DFX_VERSION: "0.14.4",
      DFX_NETWORK: "ic",
      CANISTER_CANDID_PATH_OpenFPL_backend:
        "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did",
      CANISTER_CANDID_PATH_OPENFPL_BACKEND:
        "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_backend/OpenFPL_backend.did",
      CANISTER_CANDID_PATH_player_canister:
        "/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did",
      CANISTER_CANDID_PATH_PLAYER_CANISTER:
        "/home/james/OpenFPL/.dfx/ic/canisters/player_canister/player_canister.did",
      TOKEN_CANISTER_CANISTER_ID: "hwd4h-eyaaa-aaaal-qb6ra-cai",
      CANISTER_ID_TOKEN_CANISTER: "hwd4h-eyaaa-aaaal-qb6ra-cai",
      CANISTER_ID_token_canister: "hwd4h-eyaaa-aaaal-qb6ra-cai",
      PLAYER_CANISTER_CANISTER_ID: "pec6o-uqaaa-aaaal-qb7eq-cai",
      CANISTER_ID_PLAYER_CANISTER: "pec6o-uqaaa-aaaal-qb7eq-cai",
      CANISTER_ID_player_canister: "pec6o-uqaaa-aaaal-qb7eq-cai",
      NNS_SNS_WASM_CANISTER_ID: "qaa6y-5yaaa-aaaaa-aaafa-cai",
      CANISTER_ID_NNS_SNS_WASM: "qaa6y-5yaaa-aaaaa-aaafa-cai",
      CANISTER_ID_nns_sns_wasm: "qaa6y-5yaaa-aaaaa-aaafa-cai",
      NNS_ROOT_CANISTER_ID: "r7inp-6aaaa-aaaaa-aaabq-cai",
      CANISTER_ID_NNS_ROOT: "r7inp-6aaaa-aaaaa-aaabq-cai",
      CANISTER_ID_nns_root: "r7inp-6aaaa-aaaaa-aaabq-cai",
      NNS_REGISTRY_CANISTER_ID: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
      CANISTER_ID_NNS_REGISTRY: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
      CANISTER_ID_nns_registry: "rwlgt-iiaaa-aaaaa-aaaaa-cai",
      NNS_LIFELINE_CANISTER_ID: "rno2w-sqaaa-aaaaa-aaacq-cai",
      CANISTER_ID_NNS_LIFELINE: "rno2w-sqaaa-aaaaa-aaacq-cai",
      CANISTER_ID_nns_lifeline: "rno2w-sqaaa-aaaaa-aaacq-cai",
      NNS_LEDGER_CANISTER_ID: "ryjl3-tyaaa-aaaaa-aaaba-cai",
      CANISTER_ID_NNS_LEDGER: "ryjl3-tyaaa-aaaaa-aaaba-cai",
      CANISTER_ID_nns_ledger: "ryjl3-tyaaa-aaaaa-aaaba-cai",
      NNS_GOVERNANCE_CANISTER_ID: "rrkah-fqaaa-aaaaa-aaaaq-cai",
      CANISTER_ID_NNS_GOVERNANCE: "rrkah-fqaaa-aaaaa-aaaaq-cai",
      CANISTER_ID_nns_governance: "rrkah-fqaaa-aaaaa-aaaaq-cai",
      NNS_GENESIS_TOKEN_CANISTER_ID: "renrk-eyaaa-aaaaa-aaada-cai",
      CANISTER_ID_NNS_GENESIS_TOKEN: "renrk-eyaaa-aaaaa-aaada-cai",
      CANISTER_ID_nns_genesis_token: "renrk-eyaaa-aaaaa-aaada-cai",
      NNS_CYCLES_MINTING_CANISTER_ID: "rkp4c-7iaaa-aaaaa-aaaca-cai",
      CANISTER_ID_NNS_CYCLES_MINTING: "rkp4c-7iaaa-aaaaa-aaaca-cai",
      CANISTER_ID_nns_cycles_minting: "rkp4c-7iaaa-aaaaa-aaaca-cai",
      INTERNET_IDENTITY_CANISTER_ID: "rdmx6-jaaaa-aaaaa-aaadq-cai",
      CANISTER_ID_INTERNET_IDENTITY: "rdmx6-jaaaa-aaaaa-aaadq-cai",
      CANISTER_ID_internet_identity: "rdmx6-jaaaa-aaaaa-aaadq-cai",
      OPENFPL_FRONTEND_CANISTER_ID: "bgpwv-eqaaa-aaaal-qb6eq-cai",
      CANISTER_ID_OPENFPL_FRONTEND: "bgpwv-eqaaa-aaaal-qb6eq-cai",
      CANISTER_ID_OpenFPL_frontend: "bgpwv-eqaaa-aaaal-qb6eq-cai",
      OPENFPL_BACKEND_CANISTER_ID: "bboqb-jiaaa-aaaal-qb6ea-cai",
      CANISTER_ID_OPENFPL_BACKEND: "bboqb-jiaaa-aaaal-qb6ea-cai",
      CANISTER_ID_OpenFPL_backend: "bboqb-jiaaa-aaaal-qb6ea-cai",
      CANISTER_ID: "bgpwv-eqaaa-aaaal-qb6eq-cai",
      CANISTER_CANDID_PATH:
        "/home/james/OpenFPL/.dfx/ic/canisters/OpenFPL_frontend/assetstorage.did",
      VITE_AUTH_PROVIDER_URL: "https://identity.ic0.app",
      LESSOPEN: "| /usr/bin/lesspipe %s",
      USER: "james",
      npm_config_user_agent:
        "npm/9.5.0 node/v18.15.0 linux x64 workspaces/false",
      GIT_ASKPASS:
        "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass.sh",
      npm_node_execpath: "/home/james/.nvm/versions/node/v18.15.0/bin/node",
      SHLVL: "1",
      npm_config_noproxy: "",
      MOTD_SHOWN: "update-motd",
      HOME: "/home/james",
      TERM_PROGRAM_VERSION: "1.84.2",
      NVM_BIN: "/home/james/.nvm/versions/node/v18.15.0/bin",
      VSCODE_IPC_HOOK_CLI:
        "/tmp/vscode-ipc-55e74069-e243-4d5e-85c2-180e79128070.sock",
      npm_package_json: "/home/james/OpenFPL/package.json",
      NVM_INC: "/home/james/.nvm/versions/node/v18.15.0/include/node",
      VSCODE_GIT_ASKPASS_MAIN:
        "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/extensions/git/dist/askpass-main.js",
      VSCODE_GIT_ASKPASS_NODE:
        "/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/node",
      npm_config_userconfig: "/home/james/.npmrc",
      npm_config_local_prefix: "/home/james/OpenFPL",
      COLORTERM: "truecolor",
      WSL_DISTRO_NAME: "Ubuntu",
      COLOR: "1",
      NVM_DIR: "/home/james/.nvm",
      npm_config_metrics_registry: "https://registry.npmjs.org/",
      LOGNAME: "james",
      NAME: "DESKTOP-UV8C3VI",
      WSL_INTEROP: "/run/WSL/12_interop",
      _: "/home/james/.nvm/versions/node/v18.15.0/bin/npm",
      npm_config_prefix: "/home/james/.nvm/versions/node/v18.15.0",
      TERM: "xterm-256color",
      npm_config_cache: "/home/james/.npm",
      npm_config_node_gyp:
        "/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
      PATH: "/home/james/OpenFPL/node_modules/.bin:/home/james/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/james/.vscode-server/bin/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:/home/james/bin:/home/james/.nvm/versions/node/v18.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/Microsoft/jdk-11.0.16.101-hotspot/bin:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft SDKs/Azure/CLI2/wbin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/bin:/mnt/c/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.0/libnvvp:/mnt/c/Program Files (x86)/Common Files/Intel/Shared Libraries/redist/intel64/compiler:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Microsoft SQL Server/130/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/Client SDK/ODBC/170/Tools/Binn/:/mnt/c/Program Files/NVIDIA Corporation/Nsight Compute 2020.1.2/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files/Git LFS:/mnt/c/Program Files/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files (x86)/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/150/DTS/Binn/:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/ZED SDK/dependencies/freeglut_2.8/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/glew-1.12.0/x64:/mnt/c/Program Files (x86)/ZED SDK/dependencies/opencv_3.1.0/x64:/mnt/c/Program Files (x86)/ZED SDK/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/dotnet/:/mnt/c/Program Files/Git/cmd:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/Scripts/:/mnt/c/Users/james/AppData/Local/Programs/Python/Python37/:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/james/.dotnet/tools:/mnt/c/Users/james/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/james/AppData/Local/Microsoft/WindowsApps:/mnt/c/Program Files/heroku/bin:/mnt/c/Users/james/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Program Files/MongoDB/Server/4.4/bin/:/mnt/c/Users/james/AppData/Roaming/npm:/mnt/c/Users/james/.dotnet/tools:/snap/bin",
      NODE: "/home/james/.nvm/versions/node/v18.15.0/bin/node",
      npm_package_name: "open_fpl_frontend",
      LANG: "C.UTF-8",
      LS_COLORS:
        "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",
      VSCODE_GIT_IPC_HANDLE: "/tmp/vscode-git-ec8aec957c.sock",
      TERM_PROGRAM: "vscode",
      npm_lifecycle_script: "vite build",
      SHELL: "/bin/bash",
      npm_package_version: "0.1.0",
      npm_lifecycle_event: "build",
      LESSCLOSE: "/usr/bin/lesspipe %s %s",
      VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
      npm_config_globalconfig:
        "/home/james/.nvm/versions/node/v18.15.0/etc/npmrc",
      npm_config_init_module: "/home/james/.npm-init.js",
      PWD: "/home/james/OpenFPL",
      npm_execpath:
        "/home/james/.nvm/versions/node/v18.15.0/lib/node_modules/npm/bin/npm-cli.js",
      NVM_CD_FLAGS: "",
      XDG_DATA_DIRS: "/usr/local/share:/usr/share:/var/lib/snapd/desktop",
      npm_config_global_prefix: "/home/james/.nvm/versions/node/v18.15.0",
      npm_command: "run-script",
      HOSTTYPE: "x86_64",
      WSLENV: "VSCODE_WSL_EXT_LOCATION/up",
      INIT_CWD: "/home/james/OpenFPL",
      EDITOR: "vi",
      NODE_ENV: "production",
      VITE_OPENFPL_BACKEND_CANISTER_ID: "bkyz2-fmaaa-aaaaa-qaaaq-cai",
      VITE_OPENFPL_FRONTEND_CANISTER_ID: "bd3sg-teaaa-aaaaa-qaaba-cai",
      VITE___CANDID_UI_CANISTER_ID: "bw4dl-smaaa-aaaaa-qaacq-cai",
      VITE_PLAYER_CANISTER_CANISTER_ID: "be2us-64aaa-aaaaa-qaabq-cai",
      VITE_TOKEN_CANISTER_CANISTER_ID: "br5f7-7uaaa-aaaaa-qaaca-cai",
      VITE_DFX_NETWORK: "local",
      VITE_HOST: "http://localhost:8000",
    }.OPENFPL_BACKEND_CANISTER_ID
  );
  async function sync() {
    const category = "teams";
    const newHashValues = await actor.getDataHashes();
    const liveTeamsHash =
      newHashValues.find((x) => x.category === category) ?? null;
    const localHash = localStorage.getItem(category);
    if (liveTeamsHash?.hash != localHash) {
      const updatedTeamsData = await actor.getTeams();
      localStorage.setItem(
        "teams_data",
        JSON.stringify(updatedTeamsData, replacer)
      );
      localStorage.setItem(category, liveTeamsHash?.hash ?? "");
      set(updatedTeamsData);
    } else {
      const cachedTeamsData = localStorage.getItem("teams_data");
      let cachedTeams = [];
      try {
        cachedTeams = JSON.parse(cachedTeamsData || "[]");
      } catch (e) {
        cachedTeams = [];
      }
      set(cachedTeams);
    }
  }
  async function getTeamById(id) {
    let teams = [];
    subscribe((value) => {
      teams = value;
    })();
    return teams.find((team) => team.id === id);
  }
  return {
    subscribe,
    sync,
    getTeamById,
  };
}
createTeamStore();
export {
  ActorFactory as A,
  convertDateToReadable as a,
  getFlagComponent as b,
  calculateAgeFromNanoseconds as c,
  idlFactory as d,
  formatUnixTimeToTime as f,
  getPositionText as g,
  idlFactory$1 as i,
  replacer as r,
  updateTableData as u,
};
