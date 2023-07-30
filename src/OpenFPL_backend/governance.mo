import T "types";
import List "mo:base/List";
import HashMap "mo:base/HashMap";
import Utilities "utilities";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Time "mo:base/Time";
import Int64 "mo:base/Int64";
import Nat64 "mo:base/Nat64";

module {
    public class Governance(){


        let admins : [Text] = [
            //JB Local
            "eqlhf-ppkq7-roa5i-4wu6r-jumy3-g2xrc-vfdd5-wtoeu-n7xre-vsktn-lqe"
            //JB Live
            //"ld6pc-7sgvt-fs7gg-fvsih-gspgy-34ikk-wrwl6-ixrkc-k54er-7ivom-wae"
        ];

        private var draftFixtureDataSubmissions: HashMap.HashMap<T.FixtureId, T.DataSubmission> = 
            HashMap.HashMap<T.FixtureId, T.DataSubmission>(22, Utilities.eqNat32, Utilities.hashNat32);
        private var fixtureDataSubmissions: HashMap.HashMap<T.FixtureId, T.DataSubmission> = 
            HashMap.HashMap<T.FixtureId, T.DataSubmission>(22, Utilities.eqNat32, Utilities.hashNat32);
        private var playerRevaluationSubmissions: HashMap.HashMap<T.SeasonId, HashMap.HashMap<T.GameweekNumber, HashMap.HashMap<T.PlayerId, List.List<T.PlayerValuationSubmission>>>> = 
            HashMap.HashMap<T.SeasonId, HashMap.HashMap<T.GameweekNumber, HashMap.HashMap<T.PlayerId, List.List<T.PlayerValuationSubmission>>>> (20, Utilities.eqNat16, Utilities.hashNat16);
        private var proposals: [T.Proposal] = [];
        private var consensusFixtureData: HashMap.HashMap<T.FixtureId, T.ConsensusData> = HashMap.HashMap<T.FixtureId, T.ConsensusData>(22, Utilities.eqNat32, Utilities.hashNat32);



        public func setData(
            stable_fixture_data_submissions: [(T.FixtureId, T.DataSubmission)], 
            stable__draft_fixture_data_submissions: [(T.FixtureId, T.DataSubmission)],
            stable_player_revaluation_submissions: [(T.SeasonId, (T.GameweekNumber, (T.PlayerId, List.List<T.PlayerValuationSubmission>)))],
            stable_proposals: [T.Proposal]) {

            // Type definitions
            type InnerMapType = HashMap.HashMap<T.PlayerId, List.List<T.PlayerValuationSubmission>>;
            type MidMapType = HashMap.HashMap<T.GameweekNumber, InnerMapType>;
            type OuterMapType = HashMap.HashMap<T.SeasonId, MidMapType>;

            // Iterators
            let draftFixtureIterator = Iter.fromArray(stable__draft_fixture_data_submissions);
            let fixtureDataIterator = Iter.fromArray(stable_fixture_data_submissions);

            draftFixtureDataSubmissions := HashMap.fromIter<T.FixtureId, T.DataSubmission>(
                draftFixtureIterator,
                Iter.size(draftFixtureIterator),
                Utilities.eqNat32, 
                Utilities.hashNat32
            );

            fixtureDataSubmissions := HashMap.fromIter<T.FixtureId, T.DataSubmission>(
                fixtureDataIterator,
                Iter.size(fixtureDataIterator),
                Utilities.eqNat32, 
                Utilities.hashNat32
            );
            
            var outerMap: OuterMapType = HashMap.HashMap<T.SeasonId, MidMapType>(Iter.size(Iter.fromArray(stable_player_revaluation_submissions)), Utilities.eqNat16, Utilities.hashNat16);
            for ((seasonId, (gameweek, data)) in Iter.fromArray(stable_player_revaluation_submissions)) {
                let (playerId, submissions) = data;

                let innerMap: InnerMapType = HashMap.HashMap<T.PlayerId, List.List<T.PlayerValuationSubmission>>(1, Utilities.eqNat16, Utilities.hashNat16);
                innerMap.put(playerId, submissions);
                
                let midMap: MidMapType = HashMap.HashMap<T.GameweekNumber, InnerMapType>(1, Utilities.eqNat8, Utilities.hashNat8);
                midMap.put(gameweek, innerMap);
                
                outerMap.put(seasonId, midMap);
            };

            playerRevaluationSubmissions := outerMap;

            proposals := stable_proposals;
        };
        
        public func getFixtureDataSubmissions() : [(T.FixtureId, T.DataSubmission)] {
            return Iter.toArray(fixtureDataSubmissions.entries());
        };
        
        public func getDraftFixtureDataSubmissions() : [(T.FixtureId, T.DataSubmission)] {
            return Iter.toArray(draftFixtureDataSubmissions.entries());
        };


        public func getPlayerRevaluationSubmissions() : [(T.SeasonId, (T.GameweekNumber, (T.PlayerId, List.List<T.PlayerValuationSubmission>)))] {
            var results: [(T.SeasonId, (T.GameweekNumber, (T.PlayerId, List.List<T.PlayerValuationSubmission>)))] = [];
            var resultsBuffer = Buffer.fromArray<(T.SeasonId, (T.GameweekNumber, (T.PlayerId, List.List<T.PlayerValuationSubmission>)))>(results);

            // Iterate over the outer map (seasons)
            for ((seasonId, midMap) in playerRevaluationSubmissions.entries()) {
                
                // Iterate over the mid map (gameweeks)
                for ((gameweek, innerMap) in midMap.entries()) {
                    
                    // Iterate over the inner map (player submissions)
                    for ((playerId, submissions) in innerMap.entries()) {
                        
                        let entry: (T.SeasonId, (T.GameweekNumber, (T.PlayerId, List.List<T.PlayerValuationSubmission>))) = (seasonId, (gameweek, (playerId, submissions)));
                        resultsBuffer.add(entry);
                    }
                }
            };

            results := Buffer.toArray(resultsBuffer);
            return results;
        };

        public func getProposals() : [T.Proposal]{
            return proposals;
        };

        public func submitDraftPlayerEventData(principalId: Text, fixtureId: T.FixtureId, playerEventData: [T.PlayerEventData]) : () {
            let userVotingPower: Nat64 = getVotingPower(principalId);

            let currentTime = Time.now();
            let newSubmission: T.DataSubmission = {
                fixtureId = fixtureId;
                proposer = principalId;
                timestamp = currentTime;
                events = List.fromArray(playerEventData);
                votes_yes = List.nil<T.PlayerValuationVote>();
                votes_no = List.nil<T.PlayerValuationVote>();
            };

            let existingSubmissions = draftFixtureDataSubmissions.get(fixtureId);

            switch (existingSubmissions) {
                case (null) {
                    draftFixtureDataSubmissions.put(fixtureId, newSubmission);
                };
                case (?currentSubmissions) {
                if (Utilities.eqPlayerEventDataArray(List.toArray(currentSubmissions.events), List.toArray(newSubmission.events))) {
                    
                    let newVote: T.PlayerValuationVote = {
                        principalId = principalId;
                        votes = { amount_e8s = userVotingPower };
                    };
                    var newVoteList = List.nil<T.PlayerValuationVote>();
                    newVoteList := List.push(newVote, newVoteList);
                    
                    let updatedSubmissions: T.DataSubmission = {
                        fixtureId = currentSubmissions.fixtureId;
                        proposer = currentSubmissions.proposer;
                        timestamp = currentSubmissions.timestamp;
                        events = currentSubmissions.events;
                        votes_yes = List.append<T.PlayerValuationVote>(currentSubmissions.votes_yes, newVoteList);
                        votes_no = currentSubmissions.votes_no;
                    };

                    draftFixtureDataSubmissions.put(fixtureId, updatedSubmissions);
                } else {
                    draftFixtureDataSubmissions.put(fixtureId, newSubmission);
                }
            };

            };

            let newConsensus = recalculateDraftPlayerConsensus(fixtureId);
            consensusFixtureData.put(fixtureId, newConsensus);
        };




        private func recalculateDraftPlayerConsensus(fixtureId: T.FixtureId) : T.ConsensusData {
            let submissions = switch (draftFixtureDataSubmissions.get(fixtureId)) {
                case (null) { 
                    List.nil<T.DataSubmission>() 
                };
                case (?actualSubmissions) { 
                    List.push(actualSubmissions, List.nil<T.DataSubmission>()) 
                };
            };

            var maxVotesSubmission: ?T.DataSubmission = null;
            var maxVotes: Int = 0;

            List.iterate(submissions, func (submission: T.DataSubmission) {
                let totalVotesYes = List.foldLeft<T.PlayerValuationVote, Int>(submission.votes_yes, (0 : Int), func (acc: Int, vote: T.PlayerValuationVote) {
                    acc + Int64.toInt(Int64.fromNat64(vote.votes.amount_e8s));
                });

                let totalVotesNo = List.foldLeft<T.PlayerValuationVote, Int>(submission.votes_no, (0 : Int), func (acc: Int, vote: T.PlayerValuationVote) {
                    acc + Int64.toInt(Int64.fromNat64(vote.votes.amount_e8s));
                });

                let currentTotalVotes = totalVotesYes - totalVotesNo;

                if (currentTotalVotes > maxVotes) {
                    maxVotes := currentTotalVotes;
                    maxVotesSubmission := ?submission;
                }
            });

            let (weightedEvents, totalVotesYes, totalVotesNo) = switch (maxVotesSubmission) {
                case (null) {
                    ([], { amount_e8s = 0 }, { amount_e8s = 0 })
                };
                case (?submissionWithMaxVotes) {
                    let events = List.toArray(submissionWithMaxVotes.events);

                    let votesYes = List.foldLeft<T.PlayerValuationVote, Int>(submissionWithMaxVotes.votes_yes, (0 : Int), func (acc: Int, vote: T.PlayerValuationVote) {
                        acc + Int64.toInt(Int64.fromNat64(vote.votes.amount_e8s));
                    });

                    let votesNo = List.foldLeft<T.PlayerValuationVote, Int>(submissionWithMaxVotes.votes_no, (0 : Int), func (acc: Int, vote: T.PlayerValuationVote) {
                        acc + Int64.toInt(Int64.fromNat64(vote.votes.amount_e8s));
                    });

                    (events, { amount_e8s = votesYes }, { amount_e8s = votesNo })
                };
            };
            
            let totalVotesDifference = totalVotesYes.amount_e8s - totalVotesNo.amount_e8s;
            let totalVotes: T.Tokens = { amount_e8s = Int64.toNat64(Int64.fromInt(totalVotesDifference)) };

            return {
                fixtureId = fixtureId;
                events = List.fromArray(weightedEvents);
                totalVotes = totalVotes;
            };
        };

        public func submitPlayerRevaluation() : (){
            //IMPLEMENT
        };

        public func voteOnProposal() : (){
            //IMPLEMENT
        };

        public func getGameweekPlayerEventData(gameweek: Nat8, fixtureId: Nat32) : async List.List<T.PlayerEventData> {

            //so you could have lots of variations of consensus data
                //need a way to use the most weighted to be in the final array

            //Based on the data that has been added and the voting power of the user the 

            //IMPLEMENT

            return List.nil();
        };

        public func getRevaluedPlayers() : async [T.Player] {

            //IMPLEMENT

            //RESET PLAYERS VOTES

            //NOTE THE SUCCESSFUL PLAYER VALUATION VOTES

            return [];
        };

        public func getVotingPower(principalId: Text) : Nat64 {
            switch (Array.find<Text>(admins, func (admin) { admin == principalId })) {
            case null { return 0; };
            case _ { return 1_000_000; };
            };
        };

    }
}
