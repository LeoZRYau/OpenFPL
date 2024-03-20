module {
  public let CANISTER_ID : Text = "rrkah-fqaaa-aaaaa-aaaaq-cai"; //TODO: Update with SNS canister Id

type AccountIdentifier = Blob;
type Action = variant {
  RegisterKnownNeuron : KnownNeuron;
  ManageNeuron : ManageNeuron;
  CreateServiceNervousSystem : CreateServiceNervousSystem;
  ExecuteNnsFunction : ExecuteNnsFunction;
  RewardNodeProvider : RewardNodeProvider;
  OpenSnsTokenSwap : OpenSnsTokenSwap;
  SetSnsTokenSwapOpenTimeWindow : SetSnsTokenSwapOpenTimeWindow;
  SetDefaultFollowees : SetDefaultFollowees;
  RewardNodeProviders : RewardNodeProviders;
  ManageNetworkEconomics : NetworkEconomics;
  ApproveGenesisKyc : ApproveGenesisKyc;
  AddOrRemoveNodeProvider : AddOrRemoveNodeProvider;
  Motion : Motion;
};
type AddHotKey = record { new_hot_key : opt principal };
type AddOrRemoveNodeProvider = record { change : opt Change };
type Amount = record { e8s : nat64 };
type ApproveGenesisKyc = record { principals : vec principal };
type Ballot = record { vote : int32; voting_power : nat64 };
type BallotInfo = record { vote : int32; proposal_id : opt NeuronId };
type By = variant {
  NeuronIdOrSubaccount : record {};
  MemoAndController : ClaimOrRefreshNeuronFromAccount;
  Memo : nat64;
};
type Canister = record { id : opt principal };
type CanisterStatusResultV2 = record {
  status : opt int32;
  freezing_threshold : opt nat64;
  controllers : vec principal;
  memory_size : opt nat64;
  cycles : opt nat64;
  idle_cycles_burned_per_day : opt nat64;
  module_hash : vec nat8;
};
type CanisterSummary = record {
  status : opt CanisterStatusResultV2;
  canister_id : opt principal;
};
type CfNeuron = record {
  has_created_neuron_recipes : opt bool;
  nns_neuron_id : nat64;
  amount_icp_e8s : nat64;
};
type CfParticipant = record {
  hotkey_principal : text;
  cf_neurons : vec CfNeuron;
};
type Change = variant { ToRemove : NodeProvider; ToAdd : NodeProvider };
type ChangeAutoStakeMaturity = record {
  requested_setting_for_auto_stake_maturity : bool;
};
type ClaimOrRefresh = record { by : opt By };
type ClaimOrRefreshNeuronFromAccount = record {
  controller : opt principal;
  memo : nat64;
};
type ClaimOrRefreshNeuronFromAccountResponse = record { result : opt Result_1 };
type ClaimOrRefreshResponse = record { refreshed_neuron_id : opt NeuronId };
type Command = variant {
  Spawn : Spawn;
  Split : Split;
  Follow : Follow;
  ClaimOrRefresh : ClaimOrRefresh;
  Configure : Configure;
  RegisterVote : RegisterVote;
  Merge : Merge;
  DisburseToNeuron : DisburseToNeuron;
  MakeProposal : Proposal;
  StakeMaturity : StakeMaturity;
  MergeMaturity : MergeMaturity;
  Disburse : Disburse;
};
type Command_1 = variant {
  Error : GovernanceError;
  Spawn : SpawnResponse;
  Split : SpawnResponse;
  Follow : record {};
  ClaimOrRefresh : ClaimOrRefreshResponse;
  Configure : record {};
  RegisterVote : record {};
  Merge : MergeResponse;
  DisburseToNeuron : SpawnResponse;
  MakeProposal : MakeProposalResponse;
  StakeMaturity : StakeMaturityResponse;
  MergeMaturity : MergeMaturityResponse;
  Disburse : DisburseResponse;
};
type Command_2 = variant {
  Spawn : NeuronId;
  Split : Split;
  Configure : Configure;
  Merge : Merge;
  DisburseToNeuron : DisburseToNeuron;
  SyncCommand : record {};
  ClaimOrRefreshNeuron : ClaimOrRefresh;
  MergeMaturity : MergeMaturity;
  Disburse : Disburse;
};
type Committed = record {
  total_direct_contribution_icp_e8s : opt nat64;
  total_neurons_fund_contribution_icp_e8s : opt nat64;
  sns_governance_canister_id : opt principal;
};
type Committed_1 = record {
  total_direct_participation_icp_e8s : opt nat64;
  total_neurons_fund_participation_icp_e8s : opt nat64;
  sns_governance_canister_id : opt principal;
};
type Configure = record { operation : opt Operation };
type Countries = record { iso_codes : vec text };
type CreateServiceNervousSystem = record {
  url : opt text;
  governance_parameters : opt GovernanceParameters;
  fallback_controller_principal_ids : vec principal;
  logo : opt Image;
  name : opt text;
  ledger_parameters : opt LedgerParameters;
  description : opt text;
  dapp_canisters : vec Canister;
  swap_parameters : opt SwapParameters;
  initial_token_distribution : opt InitialTokenDistribution;
};
type Decimal = record { human_readable : opt text };
type DerivedProposalInformation = record {
  swap_background_information : opt SwapBackgroundInformation;
};
type DeveloperDistribution = record {
  developer_neurons : vec NeuronDistribution;
};
type Disburse = record {
  to_account : opt AccountIdentifier;
  amount : opt Amount;
};
type DisburseResponse = record { transfer_block_height : nat64 };
type DisburseToNeuron = record {
  dissolve_delay_seconds : nat64;
  kyc_verified : bool;
  amount_e8s : nat64;
  new_controller : opt principal;
  nonce : nat64;
};
type DissolveState = variant {
  DissolveDelaySeconds : nat64;
  WhenDissolvedTimestampSeconds : nat64;
};
type Duration = record { seconds : opt nat64 };
type ExecuteNnsFunction = record { nns_function : int32; payload : vec nat8 };
type Follow = record { topic : int32; followees : vec NeuronId };
type Followees = record { followees : vec NeuronId };
type Followers = record { followers : vec NeuronId };
type FollowersMap = record { followers_map : vec record { nat64; Followers } };
type GetNeuronsFundAuditInfoRequest = record { nns_proposal_id : opt NeuronId };
type GetNeuronsFundAuditInfoResponse = record { result : opt Result_6 };
type GlobalTimeOfDay = record { seconds_after_utc_midnight : opt nat64 };
type Governance = record {
  default_followees : vec record { int32; Followees };
  making_sns_proposal : opt MakingSnsProposal;
  most_recent_monthly_node_provider_rewards : opt MostRecentMonthlyNodeProviderRewards;
  maturity_modulation_last_updated_at_timestamp_seconds : opt nat64;
  wait_for_quiet_threshold_seconds : nat64;
  metrics : opt GovernanceCachedMetrics;
  neuron_management_voting_period_seconds : opt nat64;
  node_providers : vec NodeProvider;
  cached_daily_maturity_modulation_basis_points : opt int32;
  economics : opt NetworkEconomics;
  spawning_neurons : opt bool;
  latest_reward_event : opt RewardEvent;
  to_claim_transfers : vec NeuronStakeTransfer;
  short_voting_period_seconds : nat64;
  topic_followee_index : vec record { int32; FollowersMap };
  migrations : opt Migrations;
  proposals : vec record { nat64; ProposalData };
  xdr_conversion_rate : opt XdrConversionRate;
  in_flight_commands : vec record { nat64; NeuronInFlightCommand };
  neurons : vec record { nat64; Neuron };
  genesis_timestamp_seconds : nat64;
};
type GovernanceCachedMetrics = record {
  total_maturity_e8s_equivalent : nat64;
  not_dissolving_neurons_e8s_buckets : vec record { nat64; float64 };
  dissolving_neurons_staked_maturity_e8s_equivalent_sum : nat64;
  garbage_collectable_neurons_count : nat64;
  dissolving_neurons_staked_maturity_e8s_equivalent_buckets : vec record {
    nat64;
    float64;
  };
  neurons_with_invalid_stake_count : nat64;
  not_dissolving_neurons_count_buckets : vec record { nat64; nat64 };
  ect_neuron_count : nat64;
  total_supply_icp : nat64;
  neurons_with_less_than_6_months_dissolve_delay_count : nat64;
  dissolved_neurons_count : nat64;
  community_fund_total_maturity_e8s_equivalent : nat64;
  total_staked_e8s_seed : nat64;
  total_staked_maturity_e8s_equivalent_ect : nat64;
  total_staked_e8s : nat64;
  not_dissolving_neurons_count : nat64;
  total_locked_e8s : nat64;
  neurons_fund_total_active_neurons : nat64;
  total_staked_maturity_e8s_equivalent : nat64;
  not_dissolving_neurons_e8s_buckets_ect : vec record { nat64; float64 };
  total_staked_e8s_ect : nat64;
  not_dissolving_neurons_staked_maturity_e8s_equivalent_sum : nat64;
  dissolved_neurons_e8s : nat64;
  dissolving_neurons_e8s_buckets_seed : vec record { nat64; float64 };
  neurons_with_less_than_6_months_dissolve_delay_e8s : nat64;
  not_dissolving_neurons_staked_maturity_e8s_equivalent_buckets : vec record {
    nat64;
    float64;
  };
  dissolving_neurons_count_buckets : vec record { nat64; nat64 };
  dissolving_neurons_e8s_buckets_ect : vec record { nat64; float64 };
  dissolving_neurons_count : nat64;
  dissolving_neurons_e8s_buckets : vec record { nat64; float64 };
  total_staked_maturity_e8s_equivalent_seed : nat64;
  community_fund_total_staked_e8s : nat64;
  not_dissolving_neurons_e8s_buckets_seed : vec record { nat64; float64 };
  timestamp_seconds : nat64;
  seed_neuron_count : nat64;
};
type GovernanceError = record { error_message : text; error_type : int32 };
type GovernanceParameters = record {
  neuron_maximum_dissolve_delay_bonus : opt Percentage;
  neuron_maximum_age_for_age_bonus : opt Duration;
  neuron_maximum_dissolve_delay : opt Duration;
  neuron_minimum_dissolve_delay_to_vote : opt Duration;
  neuron_maximum_age_bonus : opt Percentage;
  neuron_minimum_stake : opt Tokens;
  proposal_wait_for_quiet_deadline_increase : opt Duration;
  proposal_initial_voting_period : opt Duration;
  proposal_rejection_fee : opt Tokens;
  voting_reward_parameters : opt VotingRewardParameters;
};
type IdealMatchedParticipationFunction = record {
  serialized_representation : opt text;
};
type Image = record { base64_encoding : opt text };
type IncreaseDissolveDelay = record {
  additional_dissolve_delay_seconds : nat32;
};
type InitialTokenDistribution = record {
  treasury_distribution : opt SwapDistribution;
  developer_distribution : opt DeveloperDistribution;
  swap_distribution : opt SwapDistribution;
};
type KnownNeuron = record {
  id : opt NeuronId;
  known_neuron_data : opt KnownNeuronData;
};
type KnownNeuronData = record { name : text; description : opt text };
type LedgerParameters = record {
  transaction_fee : opt Tokens;
  token_symbol : opt text;
  token_logo : opt Image;
  token_name : opt text;
};
type ListKnownNeuronsResponse = record { known_neurons : vec KnownNeuron };
type ListNeurons = record {
  neuron_ids : vec nat64;
  include_neurons_readable_by_caller : bool;
};
type ListNeuronsResponse = record {
  neuron_infos : vec record { nat64; NeuronInfo };
  full_neurons : vec Neuron;
};
type ListNodeProvidersResponse = record { node_providers : vec NodeProvider };
type ListProposalInfo = record {
  include_reward_status : vec int32;
  omit_large_fields : opt bool;
  before_proposal : opt NeuronId;
  limit : nat32;
  exclude_topic : vec int32;
  include_all_manage_neuron_proposals : opt bool;
  include_status : vec int32;
};
type ListProposalInfoResponse = record { proposal_info : vec ProposalInfo };
type MakeProposalResponse = record {
  message : opt text;
  proposal_id : opt NeuronId;
};
type MakingSnsProposal = record {
  proposal : opt Proposal;
  caller : opt principal;
  proposer_id : opt NeuronId;
};
type ManageNeuron = record {
  id : opt NeuronId;
  command : opt Command;
  neuron_id_or_subaccount : opt NeuronIdOrSubaccount;
};
type ManageNeuronResponse = record { command : opt Command_1 };
type Merge = record { source_neuron_id : opt NeuronId };
type MergeMaturity = record { percentage_to_merge : nat32 };
type MergeMaturityResponse = record {
  merged_maturity_e8s : nat64;
  new_stake_e8s : nat64;
};
type MergeResponse = record {
  target_neuron : opt Neuron;
  source_neuron : opt Neuron;
  target_neuron_info : opt NeuronInfo;
  source_neuron_info : opt NeuronInfo;
};
type Migration = record {
  status : opt int32;
  failure_reason : opt text;
  progress : opt Progress;
};
type Migrations = record {
  neuron_indexes_migration : opt Migration;
  copy_inactive_neurons_to_stable_memory_migration : opt Migration;
};
type MostRecentMonthlyNodeProviderRewards = record {
  timestamp : nat64;
  rewards : vec RewardNodeProvider;
};
type Motion = record { motion_text : text };
type NetworkEconomics = record {
  neuron_minimum_stake_e8s : nat64;
  max_proposals_to_keep_per_topic : nat32;
  neuron_management_fee_per_proposal_e8s : nat64;
  reject_cost_e8s : nat64;
  transaction_fee_e8s : nat64;
  neuron_spawn_dissolve_delay_seconds : nat64;
  minimum_icp_xdr_rate : nat64;
  maximum_node_provider_rewards_e8s : nat64;
  neurons_fund_economics : opt NeuronsFundEconomics;
};
type Neuron = record {
  id : opt NeuronId;
  staked_maturity_e8s_equivalent : opt nat64;
  controller : opt principal;
  recent_ballots : vec BallotInfo;
  kyc_verified : bool;
  neuron_type : opt int32;
  not_for_profit : bool;
  maturity_e8s_equivalent : nat64;
  cached_neuron_stake_e8s : nat64;
  created_timestamp_seconds : nat64;
  auto_stake_maturity : opt bool;
  aging_since_timestamp_seconds : nat64;
  hot_keys : vec principal;
  account : vec nat8;
  joined_community_fund_timestamp_seconds : opt nat64;
  dissolve_state : opt DissolveState;
  followees : vec record { int32; Followees };
  neuron_fees_e8s : nat64;
  transfer : opt NeuronStakeTransfer;
  known_neuron_data : opt KnownNeuronData;
  spawn_at_timestamp_seconds : opt nat64;
};
type NeuronBasketConstructionParameters = record {
  dissolve_delay_interval : opt Duration;
  count : opt nat64;
};
type NeuronBasketConstructionParameters_1 = record {
  dissolve_delay_interval_seconds : nat64;
  count : nat64;
};
type NeuronDistribution = record {
  controller : opt principal;
  dissolve_delay : opt Duration;
  memo : opt nat64;
  vesting_period : opt Duration;
  stake : opt Tokens;
};
type NeuronId = record { id : nat64 };
type NeuronIdOrSubaccount = variant {
  Subaccount : vec nat8;
  NeuronId : NeuronId;
};
type NeuronInFlightCommand = record {
  command : opt Command_2;
  timestamp : nat64;
};
type NeuronInfo = record {
  dissolve_delay_seconds : nat64;
  recent_ballots : vec BallotInfo;
  neuron_type : opt int32;
  created_timestamp_seconds : nat64;
  state : int32;
  stake_e8s : nat64;
  joined_community_fund_timestamp_seconds : opt nat64;
  retrieved_at_timestamp_seconds : nat64;
  known_neuron_data : opt KnownNeuronData;
  voting_power : nat64;
  age_seconds : nat64;
};
type NeuronStakeTransfer = record {
  to_subaccount : vec nat8;
  neuron_stake_e8s : nat64;
  from : opt principal;
  memo : nat64;
  from_subaccount : vec nat8;
  transfer_timestamp : nat64;
  block_height : nat64;
};
type NeuronsFundAuditInfo = record {
  final_neurons_fund_participation : opt NeuronsFundParticipation;
  initial_neurons_fund_participation : opt NeuronsFundParticipation;
  neurons_fund_refunds : opt NeuronsFundSnapshot;
};
type NeuronsFundData = record {
  final_neurons_fund_participation : opt NeuronsFundParticipation;
  initial_neurons_fund_participation : opt NeuronsFundParticipation;
  neurons_fund_refunds : opt NeuronsFundSnapshot;
};
type NeuronsFundEconomics = record {
  maximum_icp_xdr_rate : opt Percentage;
  neurons_fund_matched_funding_curve_coefficients : opt NeuronsFundMatchedFundingCurveCoefficients;
  max_theoretical_neurons_fund_participation_amount_xdr : opt Decimal;
  minimum_icp_xdr_rate : opt Percentage;
};
type NeuronsFundMatchedFundingCurveCoefficients = record {
  contribution_threshold_xdr : opt Decimal;
  one_third_participation_milestone_xdr : opt Decimal;
  full_participation_milestone_xdr : opt Decimal;
};
type NeuronsFundNeuron = record {
  hotkey_principal : opt text;
  is_capped : opt bool;
  nns_neuron_id : opt nat64;
  amount_icp_e8s : opt nat64;
};
type NeuronsFundNeuronPortion = record {
  hotkey_principal : opt principal;
  is_capped : opt bool;
  maturity_equivalent_icp_e8s : opt nat64;
  nns_neuron_id : opt NeuronId;
  amount_icp_e8s : opt nat64;
};
type NeuronsFundParticipation = record {
  total_maturity_equivalent_icp_e8s : opt nat64;
  intended_neurons_fund_participation_icp_e8s : opt nat64;
  direct_participation_icp_e8s : opt nat64;
  swap_participation_limits : opt SwapParticipationLimits;
  max_neurons_fund_swap_participation_icp_e8s : opt nat64;
  neurons_fund_reserves : opt NeuronsFundSnapshot;
  ideal_matched_participation_function : opt IdealMatchedParticipationFunction;
  allocated_neurons_fund_participation_icp_e8s : opt nat64;
};
type NeuronsFundSnapshot = record {
  neurons_fund_neuron_portions : vec NeuronsFundNeuronPortion;
};
type NodeProvider = record {
  id : opt principal;
  reward_account : opt AccountIdentifier;
};
type Ok = record { neurons_fund_audit_info : opt NeuronsFundAuditInfo };
type Ok_1 = record { neurons_fund_neuron_portions : vec NeuronsFundNeuron };
type OpenSnsTokenSwap = record {
  community_fund_investment_e8s : opt nat64;
  target_swap_canister_id : opt principal;
  params : opt Params;
};
type Operation = variant {
  RemoveHotKey : RemoveHotKey;
  AddHotKey : AddHotKey;
  ChangeAutoStakeMaturity : ChangeAutoStakeMaturity;
  StopDissolving : record {};
  StartDissolving : record {};
  IncreaseDissolveDelay : IncreaseDissolveDelay;
  JoinCommunityFund : record {};
  LeaveCommunityFund : record {};
  SetDissolveTimestamp : SetDissolveTimestamp;
};
type Params = record {
  min_participant_icp_e8s : nat64;
  neuron_basket_construction_parameters : opt NeuronBasketConstructionParameters_1;
  max_icp_e8s : nat64;
  swap_due_timestamp_seconds : nat64;
  min_participants : nat32;
  sns_token_e8s : nat64;
  sale_delay_seconds : opt nat64;
  max_participant_icp_e8s : nat64;
  min_direct_participation_icp_e8s : opt nat64;
  min_icp_e8s : nat64;
  max_direct_participation_icp_e8s : opt nat64;
};
type Percentage = record { basis_points : opt nat64 };
type Progress = variant { LastNeuronId : NeuronId };
type Proposal = record {
  url : text;
  title : opt text;
  action : opt Action;
  summary : text;
};
type ProposalData = record {
  id : opt NeuronId;
  failure_reason : opt GovernanceError;
  cf_participants : vec CfParticipant;
  ballots : vec record { nat64; Ballot };
  proposal_timestamp_seconds : nat64;
  reward_event_round : nat64;
  failed_timestamp_seconds : nat64;
  neurons_fund_data : opt NeuronsFundData;
  reject_cost_e8s : nat64;
  derived_proposal_information : opt DerivedProposalInformation;
  latest_tally : opt Tally;
  sns_token_swap_lifecycle : opt int32;
  decided_timestamp_seconds : nat64;
  proposal : opt Proposal;
  proposer : opt NeuronId;
  wait_for_quiet_state : opt WaitForQuietState;
  executed_timestamp_seconds : nat64;
  original_total_community_fund_maturity_e8s_equivalent : opt nat64;
};
type ProposalInfo = record {
  id : opt NeuronId;
  status : int32;
  topic : int32;
  failure_reason : opt GovernanceError;
  ballots : vec record { nat64; Ballot };
  proposal_timestamp_seconds : nat64;
  reward_event_round : nat64;
  deadline_timestamp_seconds : opt nat64;
  failed_timestamp_seconds : nat64;
  reject_cost_e8s : nat64;
  derived_proposal_information : opt DerivedProposalInformation;
  latest_tally : opt Tally;
  reward_status : int32;
  decided_timestamp_seconds : nat64;
  proposal : opt Proposal;
  proposer : opt NeuronId;
  executed_timestamp_seconds : nat64;
};
type RegisterVote = record { vote : int32; proposal : opt NeuronId };
type RemoveHotKey = record { hot_key_to_remove : opt principal };
type Result = variant { Ok; Err : GovernanceError };
type Result_1 = variant { Error : GovernanceError; NeuronId : NeuronId };
type Result_10 = variant { Ok : Ok_1; Err : GovernanceError };
type Result_2 = variant { Ok : Neuron; Err : GovernanceError };
type Result_3 = variant { Ok : GovernanceCachedMetrics; Err : GovernanceError };
type Result_4 = variant { Ok : RewardNodeProviders; Err : GovernanceError };
type Result_5 = variant { Ok : NeuronInfo; Err : GovernanceError };
type Result_6 = variant { Ok : Ok; Err : GovernanceError };
type Result_7 = variant { Ok : NodeProvider; Err : GovernanceError };
type Result_8 = variant { Committed : Committed; Aborted : record {} };
type Result_9 = variant { Committed : Committed_1; Aborted : record {} };
type RewardEvent = record {
  rounds_since_last_distribution : opt nat64;
  day_after_genesis : nat64;
  actual_timestamp_seconds : nat64;
  total_available_e8s_equivalent : nat64;
  latest_round_available_e8s_equivalent : opt nat64;
  distributed_e8s_equivalent : nat64;
  settled_proposals : vec NeuronId;
};
type RewardMode = variant {
  RewardToNeuron : RewardToNeuron;
  RewardToAccount : RewardToAccount;
};
type RewardNodeProvider = record {
  node_provider : opt NodeProvider;
  reward_mode : opt RewardMode;
  amount_e8s : nat64;
};
type RewardNodeProviders = record {
  use_registry_derived_rewards : opt bool;
  rewards : vec RewardNodeProvider;
};
type RewardToAccount = record { to_account : opt AccountIdentifier };
type RewardToNeuron = record { dissolve_delay_seconds : nat64 };
type SetDefaultFollowees = record {
  default_followees : vec record { int32; Followees };
};
type SetDissolveTimestamp = record { dissolve_timestamp_seconds : nat64 };
type SetOpenTimeWindowRequest = record { open_time_window : opt TimeWindow };
type SetSnsTokenSwapOpenTimeWindow = record {
  request : opt SetOpenTimeWindowRequest;
  swap_canister_id : opt principal;
};
type SettleCommunityFundParticipation = record {
  result : opt Result_8;
  open_sns_token_swap_proposal_id : opt nat64;
};
type SettleNeuronsFundParticipationRequest = record {
  result : opt Result_9;
  nns_proposal_id : opt nat64;
};
type SettleNeuronsFundParticipationResponse = record { result : opt Result_10 };
type Spawn = record {
  percentage_to_spawn : opt nat32;
  new_controller : opt principal;
  nonce : opt nat64;
};
type SpawnResponse = record { created_neuron_id : opt NeuronId };
type Split = record { amount_e8s : nat64 };
type StakeMaturity = record { percentage_to_stake : opt nat32 };
type StakeMaturityResponse = record {
  maturity_e8s : nat64;
  staked_maturity_e8s : nat64;
};
type SwapBackgroundInformation = record {
  ledger_index_canister_summary : opt CanisterSummary;
  fallback_controller_principal_ids : vec principal;
  ledger_archive_canister_summaries : vec CanisterSummary;
  ledger_canister_summary : opt CanisterSummary;
  swap_canister_summary : opt CanisterSummary;
  governance_canister_summary : opt CanisterSummary;
  root_canister_summary : opt CanisterSummary;
  dapp_canister_summaries : vec CanisterSummary;
};
type SwapDistribution = record { total : opt Tokens };
type SwapParameters = record {
  minimum_participants : opt nat64;
  neurons_fund_participation : opt bool;
  duration : opt Duration;
  neuron_basket_construction_parameters : opt NeuronBasketConstructionParameters;
  confirmation_text : opt text;
  maximum_participant_icp : opt Tokens;
  minimum_icp : opt Tokens;
  minimum_direct_participation_icp : opt Tokens;
  minimum_participant_icp : opt Tokens;
  start_time : opt GlobalTimeOfDay;
  maximum_direct_participation_icp : opt Tokens;
  maximum_icp : opt Tokens;
  neurons_fund_investment_icp : opt Tokens;
  restricted_countries : opt Countries;
};
type SwapParticipationLimits = record {
  min_participant_icp_e8s : opt nat64;
  max_participant_icp_e8s : opt nat64;
  min_direct_participation_icp_e8s : opt nat64;
  max_direct_participation_icp_e8s : opt nat64;
};
type Tally = record {
  no : nat64;
  yes : nat64;
  total : nat64;
  timestamp_seconds : nat64;
};
type TimeWindow = record {
  start_timestamp_seconds : nat64;
  end_timestamp_seconds : nat64;
};
type Tokens = record { e8s : opt nat64 };
type UpdateNodeProvider = record { reward_account : opt AccountIdentifier };
type VotingRewardParameters = record {
  reward_rate_transition_duration : opt Duration;
  initial_reward_rate : opt Percentage;
  final_reward_rate : opt Percentage;
};
type WaitForQuietState = record { current_deadline_timestamp_seconds : nat64 };
type XdrConversionRate = record {
  xdr_permyriad_per_icp : opt nat64;
  timestamp_seconds : opt nat64;
};

  public type Interface = actor {
  claim_gtc_neurons : (principal, vec NeuronId) -> (Result);
  claim_or_refresh_neuron_from_account : (ClaimOrRefreshNeuronFromAccount) -> (
      ClaimOrRefreshNeuronFromAccountResponse,
    );
  get_build_metadata : () -> (text) query;
  get_full_neuron : (nat64) -> (Result_2) query;
  get_full_neuron_by_id_or_subaccount : (NeuronIdOrSubaccount) -> (
      Result_2,
    ) query;
  get_latest_reward_event : () -> (RewardEvent) query;
  get_metrics : () -> (Result_3) query;
  get_monthly_node_provider_rewards : () -> (Result_4);
  get_most_recent_monthly_node_provider_rewards : () -> (
      opt MostRecentMonthlyNodeProviderRewards,
    ) query;
  get_network_economics_parameters : () -> (NetworkEconomics) query;
  get_neuron_ids : () -> (vec nat64) query;
  get_neuron_info : (nat64) -> (Result_5) query;
  get_neuron_info_by_id_or_subaccount : (NeuronIdOrSubaccount) -> (
      Result_5,
    ) query;
  get_neurons_fund_audit_info : (GetNeuronsFundAuditInfoRequest) -> (
      GetNeuronsFundAuditInfoResponse,
    ) query;
  get_node_provider_by_caller : (null) -> (Result_7) query;
  get_pending_proposals : () -> (vec ProposalInfo) query;
  get_proposal_info : (nat64) -> (opt ProposalInfo) query;
  list_known_neurons : () -> (ListKnownNeuronsResponse) query;
  list_neurons : (ListNeurons) -> (ListNeuronsResponse) query;
  list_node_providers : () -> (ListNodeProvidersResponse) query;
  list_proposals : (ListProposalInfo) -> (ListProposalInfoResponse) query;
  manage_neuron : (ManageNeuron) -> (ManageNeuronResponse);
  settle_community_fund_participation : (SettleCommunityFundParticipation) -> (
      Result,
    );
  settle_neurons_fund_participation : (
      SettleNeuronsFundParticipationRequest,
    ) -> (SettleNeuronsFundParticipationResponse);
  simulate_manage_neuron : (ManageNeuron) -> (ManageNeuronResponse);
  transfer_gtc_neuron : (NeuronId, NeuronId) -> (Result);
  update_node_provider : (UpdateNodeProvider) -> (Result);
  };
};
