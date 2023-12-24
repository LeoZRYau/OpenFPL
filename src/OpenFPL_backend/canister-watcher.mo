import Cycles "mo:base/ExperimentalCycles";
import List "mo:base/List";
import Timer "mo:base/Timer";
import Utilities "utilities";
import CanisterIds "CanisterIds";

module {

  public class CanisterWatcher() {

    let canisters: List.List<Text> = List.fromArray<Text>([CanisterIds.MAIN_CANISTER_ID]);
    let canisterCheckInterval = Utilities.getHour() * 24;
    let canisterCheckTimerId: ?Timer.TimerId = null;

    public func setAndWatchCanister(canisterId: Text) : async (){
      if(canisterCheckTimerId != null){
        //TODO:cancel current timer
      };
      //TODO:Chcek canister balances now
      await checkCanisterCycles();
      //TODO:Check canister balances in timer duration
    };


    public func distributeRewards() : async () {
      //TODO:distribute rewards
      //IMPLEMENT
    };

    public func checkCanisterCycles() : async () {

    //TODO:for each canister check if the balance is low and top it up if it is
        //what should I topup to?


/*
    let amount = Cycles.available();
    let limit : Nat = capacity - /;
    let acceptable =
      if (amount <= limit) amount
      else limit;
    let accepted = Cycles.accept(acceptable);
    assert (accepted == acceptable);
 */

    //TODO: Again check canister balances at this point too

  };

  };
};
