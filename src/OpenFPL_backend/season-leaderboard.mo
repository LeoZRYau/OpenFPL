import T "types";
import DTOs "DTOs";
import List "mo:base/List";
import Cycles "mo:base/ExperimentalCycles";
import Timer "mo:base/Timer";
import CanisterIds "CanisterIds";
import Utilities "utilities";

actor class SeasonLeaderboardCanister() {
  private stable var entries : List.List<T.LeaderboardEntry> = List.nil();

  public func addSeasonLeaderboard(seasonId: T.SeasonId, seasonLeaderboard: T.SeasonLeaderboard) : async () {

  };

  system func preupgrade() { };

  system func postupgrade() {};
};
