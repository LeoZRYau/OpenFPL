import Cycles "mo:base/ExperimentalCycles";
import List "mo:base/List";
import Timer "mo:base/Timer";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Utilities "utilities";
import CanisterIds "CanisterIds";

module {

  public class CanisterWatcher() {

    let canisterIds: List.List<Text> = List.fromArray<Text>([CanisterIds.MAIN_CANISTER_ID]);
    let canisterCheckInterval: Nat = Utilities.getHour() * 24;
    var canisterCheckTimerId: ?Timer.TimerId = null;

    public func setAndWatchCanister(canisterId: Text) : async (){
      switch(canisterCheckTimerId){
        case (null){};
        case (?id){
          Timer.cancelTimer(id);
          canisterCheckTimerId := null;
        };
      };
      await checkCanisterCycles();
      
      canisterCheckTimerId := ?Timer.setTimer(#nanoseconds(canisterCheckInterval), checkCanisterCycles);
    };

    public func checkCanisterCycles() : async () {

      for(canisterId in Iter.fromList(canisterIds)){
        let canister_actor = actor (canisterId) : actor {
          getCyclesBalance : () -> async Nat;
          topupCanister : () -> async ();
        };
        
        let balance = await canister_actor.getCyclesBalance();

        if(balance < 500000000000){
          Cycles.add(2000000000000);
          await canister_actor.topupCanister();
        };

      };
    };

  };
};
