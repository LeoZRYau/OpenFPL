import T "types";
import List "mo:base/List";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Account "Account";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Debug "mo:base/Debug";

module {
    public class Governance(){

        private var gameEventDataSubmissions: [T.GameEventData] = [];

        public shared func getConsensusData(fixtureId: Nat32) : async T.GameEventData {
            return {
                fixtureId = 0;
                appearances = [];
                homeGoals = [];
                awayGoals = [];
                redCards = [];
                yellowCards = [];
                keeperSaves = [];
                penaltySaves = [];
                penaltyMisses = [];
            }
        };

    }
}
