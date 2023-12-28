import T "types";
import DTOs "DTOs";
import List "mo:base/List";
import Cycles "mo:base/ExperimentalCycles";
import Timer "mo:base/Timer";
import Principal "mo:base/Principal";
import CanisterIds "CanisterIds";
import Utilities "utilities";

actor class WeeklyLeaderboardCanister() {
  private stable var leaderboard : ?T.WeeklyLeaderboard = null;
  private stable var seasonId : ?T.SeasonId = null;
  private stable var gameweek : ?T.GameweekNumber = null;
  
  public shared ({ caller }) func addWeeklyLeaderboard(_seasonId: T.SeasonId, _gameweek: T.GameweekNumber, weeklyLeaderboard: T.WeeklyLeaderboard) : async () {
    assert not Principal.isAnonymous(caller);
    let principalId = Principal.toText(caller);
    assert principalId == CanisterIds.MAIN_CANISTER_ID;
   
    leaderboard := ?weeklyLeaderboard;
    seasonId := ?_seasonId;
    gameweek := ?_gameweek;
  };
  
  public shared query func getEntries (limit : Nat, offset : Nat) : async ?DTOs.WeeklyLeaderboardDTO {
    
    switch(leaderboard){
      case (null){
        return null;
      };
      case (?foundLeaderboard){
        let droppedEntries = List.drop<T.LeaderboardEntry>(foundLeaderboard.entries, offset);
        let paginatedEntries = List.take<T.LeaderboardEntry>(droppedEntries, limit);

        let leaderboardDTO: DTOs.WeeklyLeaderboardDTO = {
          seasonId = foundLeaderboard.seasonId;
          gameweek = foundLeaderboard.gameweek;
          entries = List.toArray(paginatedEntries);
          totalEntries = List.size(foundLeaderboard.entries);
        };

        return ?leaderboardDTO;
      };
    }
  };

  public shared query func getEntry (principalId: Text) : async ?DTOs.LeaderboardEntryDTO {
     switch(leaderboard){
      case (null){
        return null;
      };
      case (?foundLeaderboard){
        let foundEntry = List.find<T.LeaderboardEntry>(
          foundLeaderboard.entries,
          func(entry : DTOs.LeaderboardEntryDTO) : Bool {
            return entry.principalId == principalId;
          },
        );
      };
    }
  };

  system func preupgrade() { };

  system func postupgrade() {};
};
