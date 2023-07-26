import T "types";
import DTOs "DTOs";
import List "mo:base/List";
import Nat32 "mo:base/Nat32";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Float "mo:base/Float";
import Nat8 "mo:base/Nat8";
import Nat16 "mo:base/Nat16";
import Order "mo:base/Order";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Debug "mo:base/Debug";
import Buffer "mo:base/Buffer";
import Hash "mo:base/Hash";

module {
    public class FantasyTeams(getAllPlayersMap: (seasonId: Nat16, gameweek: Nat8) -> async [(Nat16, DTOs.PlayerScoreDTO)]){
        
        private var fantasyTeams: HashMap.HashMap<Text, T.UserFantasyTeam> = HashMap.HashMap<Text, T.UserFantasyTeam>(100, Text.equal, Text.hash);

        public func setData(stable_fantasy_teams: [(Text, T.UserFantasyTeam)]){
            fantasyTeams := HashMap.fromIter<Text, T.UserFantasyTeam>(
                stable_fantasy_teams.vals(), stable_fantasy_teams.size(), Text.equal, Text.hash);
        };

        public func getFantasyTeams() : [(Text, T.UserFantasyTeam)] {
            return Iter.toArray(fantasyTeams.entries());
        };

        public func getFantasyTeam(principalId: Text) : ?T.UserFantasyTeam {
            return fantasyTeams.get(principalId);
        };

        public func createFantasyTeam(principalId: Text, gameweek: Nat8, newPlayers: [DTOs.PlayerDTO], captainId: Nat16, bonusId: Nat8, bonusPlayerId: Nat16, bonusTeamId: Nat16) : Result.Result<(), T.Error> {

             let existingTeam = fantasyTeams.get(principalId);
            
            switch (existingTeam) {
                case (null) { 

                    let allPlayerValues = Array.map<DTOs.PlayerDTO, Float>(newPlayers, func (player: DTOs.PlayerDTO) : Float { return player.value; });

                    if(not isTeamValid(newPlayers, bonusId, bonusPlayerId)){
                        return #err(#InvalidTeamError);
                    };

                    let totalTeamValue = Array.foldLeft<Float, Float>(allPlayerValues, 0, func(sumSoFar, x) = sumSoFar + x);
                    if(totalTeamValue > Float.fromInt(300_000_000)){
                        return #err(#InvalidTeamError);
                    };

                    var bankBalance = 300_000_000 - (totalTeamValue * 1_000_000);
                    var goalGetterGameweek = Nat8.fromNat(0);
                    var goalGetterPlayerId = Nat16.fromNat(0);
                    var passMasterGameweek = Nat8.fromNat(0);
                    var passMasterPlayerId = Nat16.fromNat(0);
                    var noEntryGameweek = Nat8.fromNat(0);
                    var noEntryPlayerId = Nat16.fromNat(0);
                    var teamBoostGameweek = Nat8.fromNat(0);
                    var teamBoostTeamId = Nat16.fromNat(0);
                    var safeHandsGameweek = Nat8.fromNat(0);
                    var safeHandsPlayerId = Nat16.fromNat(0);
                    var captainFantasticGameweek = Nat8.fromNat(0);
                    var captainFantasticPlayerId = Nat16.fromNat(0);
                    var braceBonusGameweek = Nat8.fromNat(0);
                    var hatTrickHeroGameweek = Nat8.fromNat(0);
                    var newCaptainId = captainId;

                    let sortedPlayers = sortPlayers(newPlayers);       
                    let allPlayerIds = Array.map<DTOs.PlayerDTO, Nat16>(sortedPlayers, func (player: DTOs.PlayerDTO) : Nat16 { return player.id; });
                    
                    if(newCaptainId == 0){
                        var highestValue = Float.fromInt(0);
                        for (i in Iter.range(0, Array.size(newPlayers)-1)) {
                            if(newPlayers[i].value > highestValue){
                                highestValue := newPlayers[i].value; 
                                newCaptainId := newPlayers[i].id;
                            };
                        };
                    };
                    
                    if(bonusId == 1 and bonusPlayerId > 0){
                        goalGetterGameweek := gameweek;
                        goalGetterPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 2 and bonusPlayerId > 0){
                        passMasterGameweek := gameweek;
                        passMasterPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 3 and bonusPlayerId > 0){
                        noEntryGameweek := gameweek;
                        noEntryPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 4 and bonusTeamId > 0){
                        teamBoostGameweek := gameweek;
                        teamBoostTeamId := bonusTeamId;
                    };

                    if(bonusId == 5 and bonusPlayerId > 0){
                        safeHandsGameweek := gameweek;
                        safeHandsPlayerId := bonusPlayerId;
                    };


                    if(bonusId == 6 and bonusPlayerId > 0){
                        captainFantasticGameweek := gameweek;
                        captainFantasticPlayerId := bonusPlayerId;
                    };


                    if(bonusId == 7){
                        braceBonusGameweek := gameweek;
                    };


                    if(bonusId == 8){
                        hatTrickHeroGameweek := gameweek;
                    };

                    var newTeam: T.FantasyTeam = {
                        principalId = principalId;
                        bankBalance = bankBalance;
                        playerIds = allPlayerIds;
                        transfersAvailable = 2;
                        captainId = newCaptainId;
                        goalGetterGameweek = goalGetterGameweek;
                        goalGetterPlayerId = goalGetterPlayerId;
                        passMasterGameweek = passMasterGameweek;
                        passMasterPlayerId = passMasterPlayerId;
                        noEntryGameweek = noEntryGameweek;
                        noEntryPlayerId = noEntryPlayerId;
                        teamBoostGameweek = teamBoostGameweek;
                        teamBoostTeamId = teamBoostTeamId;
                        safeHandsGameweek = safeHandsGameweek;
                        safeHandsPlayerId = safeHandsPlayerId;
                        captainFantasticGameweek = captainFantasticGameweek;
                        captainFantasticPlayerId = captainFantasticPlayerId;
                        braceBonusGameweek = braceBonusGameweek;
                        hatTrickHeroGameweek = hatTrickHeroGameweek;
                    };

                    let newUserTeam: T.UserFantasyTeam = {
                        fantasyTeam = newTeam;
                        history = List.nil<T.FantasyTeamSnapshot>();
                    };

                    fantasyTeams.put(principalId, newUserTeam);
                    return #ok(());
                };
                case (?existingTeam) { return #ok(()); };
            };
        };

        public func updateFantasyTeam(principalId: Text, newPlayers: [DTOs.PlayerDTO], captainId: Nat16, bonusId: Nat8, bonusPlayerId: Nat16, bonusTeamId: Nat16, gameweek: Nat8, existingPlayers: [DTOs.PlayerDTO]) : Result.Result<(), T.Error> {
            
            let existingUserTeam = fantasyTeams.get(principalId);
   
            switch (existingUserTeam) {
                case (null) { return #ok(()); };
                case (?e) { 
                    let existingTeam = e.fantasyTeam;
                    let allPlayerValues = Array.map<DTOs.PlayerDTO, Float>(newPlayers, func (player: DTOs.PlayerDTO) : Float { return player.value; });
                    
                    if(not isTeamValid(newPlayers, bonusId, bonusPlayerId)){
                        return #err(#InvalidTeamError);
                    };

                    let playersAdded = Array.filter<DTOs.PlayerDTO>(newPlayers, func (player: DTOs.PlayerDTO): Bool {
                        let playerId = player.id;
                        let isPlayerIdInExistingTeam = Array.find(existingTeam.playerIds, func (id: Nat16): Bool {
                            return id == playerId;
                        });
                        return Option.isNull(isPlayerIdInExistingTeam);
                    });

                    if(Nat8.fromNat(Array.size(playersAdded)) > existingTeam.transfersAvailable and gameweek != 1){
                        return #err(#InvalidTeamError);
                    };

                    let playersRemoved = Array.filter<Nat16>(existingTeam.playerIds, func (playerId: Nat16): Bool {
                        let isPlayerIdInPlayers = Array.find(newPlayers, func (player: DTOs.PlayerDTO): Bool {
                            return player.id == playerId;
                        });
                        return Option.isNull(isPlayerIdInPlayers);
                    });

                    let spent = Array.foldLeft<DTOs.PlayerDTO, Float>(playersAdded, 0, func(sumSoFar, x) = sumSoFar + x.value);
                    var sold = 0.0;
                    for (i in Iter.range(0, Array.size(playersRemoved)-1)) {
                        let player = Array.find(newPlayers, func (player: DTOs.PlayerDTO): Bool {
                            return player.id == playersRemoved[i];
                        });
                        switch(player){
                            case (null) {};
                            case (?p) {
                                sold := sold + p.value;
                            };
                        };
                    };

                    if(spent - sold > existingTeam.bankBalance){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 1 and existingTeam.goalGetterGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 2 and existingTeam.passMasterGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 3 and existingTeam.noEntryGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 4 and existingTeam.teamBoostGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 5 and existingTeam.safeHandsGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 6 and existingTeam.captainFantasticGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 7 and existingTeam.braceBonusGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId == 8 and existingTeam.hatTrickHeroGameweek != 0){
                        return #err(#InvalidTeamError);
                    };

                    if(bonusId > 0 and (
                        existingTeam.goalGetterGameweek == gameweek 
                        or existingTeam.passMasterGameweek == gameweek
                        or existingTeam.noEntryGameweek == gameweek
                        or existingTeam.teamBoostGameweek == gameweek
                        or existingTeam.safeHandsGameweek == gameweek
                        or existingTeam.captainFantasticGameweek == gameweek
                        or existingTeam.braceBonusGameweek == gameweek
                        or existingTeam.hatTrickHeroGameweek == gameweek)){
                            return #err(#InvalidTeamError);
                    };


                    var goalGetterGameweek = existingTeam.goalGetterGameweek;
                    var goalGetterPlayerId = existingTeam.goalGetterPlayerId;
                    var passMasterGameweek = existingTeam.passMasterGameweek;
                    var passMasterPlayerId = existingTeam.passMasterPlayerId;
                    var noEntryGameweek = existingTeam.noEntryGameweek;
                    var noEntryPlayerId = existingTeam.noEntryPlayerId;
                    var teamBoostGameweek = existingTeam.teamBoostGameweek;
                    var teamBoostTeamId = existingTeam.teamBoostTeamId;
                    var safeHandsGameweek = existingTeam.safeHandsGameweek;
                    var safeHandsPlayerId = existingTeam.safeHandsPlayerId;
                    var captainFantasticGameweek = existingTeam.captainFantasticGameweek;
                    var captainFantasticPlayerId = existingTeam.captainFantasticPlayerId;
                    var braceBonusGameweek = existingTeam.braceBonusGameweek;
                    var hatTrickHeroGameweek = existingTeam.hatTrickHeroGameweek;
                    var newCaptainId = captainId;

                    let sortedPlayers = sortPlayers(newPlayers);       
                    let allPlayerIds = Array.map<DTOs.PlayerDTO, Nat16>(sortedPlayers, func (player: DTOs.PlayerDTO) : Nat16 { return player.id; });    
                    
                    if(newCaptainId == 0){
                        var highestValue = Float.fromInt(0);
                        for (i in Iter.range(0, Array.size(newPlayers)-1)) {
                            if(newPlayers[i].value > highestValue){
                                highestValue := newPlayers[i].value; 
                                newCaptainId := newPlayers[i].id;
                            };
                        };
                    };
                    
                    if(bonusId == 1 and bonusPlayerId > 0){
                        goalGetterGameweek := gameweek;
                        goalGetterPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 2 and bonusPlayerId > 0){
                        passMasterGameweek := gameweek;
                        passMasterPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 3 and bonusPlayerId > 0){
                        noEntryGameweek := gameweek;
                        noEntryPlayerId := bonusPlayerId;
                    };

                    if(bonusId == 4 and bonusTeamId > 0){
                        teamBoostGameweek := gameweek;
                        teamBoostTeamId := bonusTeamId;
                    };

                    if(bonusId == 5 and bonusPlayerId > 0){
                        safeHandsGameweek := gameweek;
                        safeHandsPlayerId := bonusPlayerId;
                    };


                    if(bonusId == 6 and bonusPlayerId > 0){
                        captainFantasticGameweek := gameweek;
                        captainFantasticPlayerId := bonusPlayerId;
                    };


                    if(bonusId == 7){
                        braceBonusGameweek := gameweek;
                    };


                    if(bonusId == 8){
                        hatTrickHeroGameweek := gameweek;
                    };
                   
                    let updatedTeam: T.FantasyTeam = {
                        principalId = principalId;
                        bankBalance = existingTeam.bankBalance - spent + sold;
                        playerIds = allPlayerIds;
                        transfersAvailable = existingTeam.transfersAvailable - Nat8.fromNat(Array.size(playersAdded));
                        captainId = newCaptainId;
                        goalGetterGameweek = goalGetterGameweek;
                        goalGetterPlayerId = goalGetterPlayerId;
                        passMasterGameweek = passMasterGameweek;
                        passMasterPlayerId = passMasterPlayerId;
                        noEntryGameweek = noEntryGameweek;
                        noEntryPlayerId = noEntryPlayerId;
                        teamBoostGameweek = teamBoostGameweek;
                        teamBoostTeamId = teamBoostTeamId;
                        safeHandsGameweek = safeHandsGameweek;
                        safeHandsPlayerId = safeHandsPlayerId;
                        captainFantasticGameweek = captainFantasticGameweek;
                        captainFantasticPlayerId = captainFantasticPlayerId;
                        braceBonusGameweek = braceBonusGameweek;
                        hatTrickHeroGameweek = hatTrickHeroGameweek;
                    };

                    let updatedUserTeam: T.UserFantasyTeam = {
                        fantasyTeam = updatedTeam;
                        history = e.history;
                    };

                    fantasyTeams.put(principalId, updatedUserTeam);
                    return #ok(());
                };
            };
        };

        private func sortPlayers(players: [DTOs.PlayerDTO]) : [DTOs.PlayerDTO] {
            
            let sortedPlayers = Array.sort(players, func(a: DTOs.PlayerDTO, b: DTOs.PlayerDTO): Order.Order {
                if (a.position < b.position) { return #less; };
                if (a.position > b.position) { return #greater; };
                if (a.value > b.value) { return #less; };
                if (a.value < b.value) { return #greater; };
                return #equal;
            });
            return sortedPlayers;
        };

        public func isTeamValid(players: [DTOs.PlayerDTO], bonusId: Nat8, bonusPlayerId: Nat16) : Bool {
            let playerPositions = Array.map<DTOs.PlayerDTO, Nat8>(players, func (player: DTOs.PlayerDTO) : Nat8 { return player.position; });
                    
            let playerCount = playerPositions.size();
            if(playerCount != 11 ){
                return false;
            };
            
            var teamPlayerCounts = HashMap.HashMap<Text, Nat8>(0, Text.equal, Text.hash);
            var playerIdCounts = HashMap.HashMap<Text, Nat8>(0, Text.equal, Text.hash);  // HashMap to store player ids as Text
            var goalkeeperCount = 0;
            var defenderCount = 0;
            var midfielderCount = 0;
            var forwardCount = 0;

            for (i in Iter.range(0, playerCount-1)) {
                let count = teamPlayerCounts.get(Nat16.toText(players[i].teamId));
                switch(count){
                    case (null) { teamPlayerCounts.put(Nat16.toText(players[i].teamId), 1); };
                    case (?count){
                        teamPlayerCounts.put(Nat16.toText(players[i].teamId), count + 1);
                    };
                };
        
                let playerIdCount = playerIdCounts.get(Nat16.toText(players[i].id));
                switch(playerIdCount){
                    case (null) { playerIdCounts.put(Nat16.toText(players[i].id), 1); };
                    case (?count){
                        return false;
                    };
                };

                if(players[i].position == 0){
                    goalkeeperCount := goalkeeperCount + 1;
                };

                if(players[i].position == 1){
                    defenderCount := defenderCount + 1;
                };
                
                if(players[i].position == 2){
                    midfielderCount := midfielderCount + 1;
                };
                
                if(players[i].position == 3){
                    forwardCount := forwardCount + 1;
                };

            };
            
            for ((key, value) in teamPlayerCounts.entries()) {
                if(value > 3){
                    return false;
                };
            };
            
            if (goalkeeperCount != 1 or defenderCount < 3 or defenderCount > 5 or
                midfielderCount < 3 or midfielderCount > 5 or forwardCount < 1 or forwardCount > 3 ){
                return false;
            };

            if (bonusId == 3) {
                let bonusPlayer = List.find<DTOs.PlayerDTO>(List.fromArray(players), func (player: DTOs.PlayerDTO): Bool {
                    return player.id == bonusPlayerId;
                });
                switch(bonusPlayer){
                    case(null) { return false; };
                    case(?player) {
                        if (player.position != 1) { return false; };
                    };
                };
            };

            if (bonusId == 5) {
                let bonusPlayer = List.find<DTOs.PlayerDTO>(List.fromArray(players), func (player: DTOs.PlayerDTO): Bool {
                    return player.id == bonusPlayerId;
                });
                switch(bonusPlayer){
                    case(null) { return false; };
                    case(?player) {
                        if (player.position != 0) { return false; };
                    };
                };
            };

            return true;
        };

        public func resetTransfers(): async () {
            
            for ((key, value) in fantasyTeams.entries()) {
                let userFantasyTeam = value.fantasyTeam;
                let updatedTeam = { 
                    principalId = userFantasyTeam.principalId;
                    transfersAvailable = Nat8.fromNat(2);
                    bankBalance = userFantasyTeam.bankBalance;
                    playerIds = userFantasyTeam.playerIds;
                    captainId = userFantasyTeam.captainId;
                    goalGetterGameweek = userFantasyTeam.goalGetterGameweek;
                    goalGetterPlayerId = userFantasyTeam.goalGetterPlayerId;
                    passMasterGameweek = userFantasyTeam.passMasterGameweek;
                    passMasterPlayerId = userFantasyTeam.passMasterPlayerId;
                    noEntryGameweek = userFantasyTeam.noEntryGameweek;
                    noEntryPlayerId = userFantasyTeam.noEntryPlayerId;
                    teamBoostGameweek = userFantasyTeam.teamBoostGameweek;
                    teamBoostTeamId = userFantasyTeam.teamBoostTeamId;
                    safeHandsGameweek = userFantasyTeam.safeHandsGameweek;
                    safeHandsPlayerId = userFantasyTeam.safeHandsPlayerId;
                    captainFantasticGameweek = userFantasyTeam.captainFantasticGameweek;
                    captainFantasticPlayerId = userFantasyTeam.captainFantasticPlayerId;
                    braceBonusGameweek = userFantasyTeam.braceBonusGameweek;
                    hatTrickHeroGameweek = userFantasyTeam.hatTrickHeroGameweek;
                };
                
                let updatedUserTeam: T.UserFantasyTeam = {
                    fantasyTeam = updatedTeam;
                    history = value.history;
                };

                fantasyTeams.put(key, updatedUserTeam);
            }
        };

        public func calculatePredictionScores(seasonId: Nat16, gameweek: Nat8, gameweekFixtures: [T.Fixture]): async () {
            let eq = func (a: Nat16, b: Nat16) : Bool {
                a == b
            };

            let hashNat16 = func (key: Nat16) : Hash.Hash {
                Nat32.fromNat(Nat16.toNat(key)%(2 ** 32 -1));
            };
            let allPlayersList = await getAllPlayersMap(seasonId, gameweek);
            var allPlayers = HashMap.HashMap<Nat16, DTOs.PlayerScoreDTO>(500, eq, hashNat16);
            for ((key, value) in Iter.fromArray(allPlayersList)) {
                allPlayers.put(key, value);
            };

            for ((key, value) in fantasyTeams.entries()) {
                let userFantasyTeam = value.fantasyTeam;
                var totalTeamPoints: Int16 = 0;
                
                for (i in Iter.range(0, Array.size(userFantasyTeam.playerIds)-1)) {

                    let playerId = userFantasyTeam.playerIds[i];
                    let playerData = allPlayers.get(playerId);
                    switch (playerData) {
                        case (null) {};
                        case (?player) {
                            var bonusPlayed: Bool = false;
                            
                            totalTeamPoints += player.points;

                            // Goal Getter
                            if(userFantasyTeam.goalGetterGameweek == gameweek and userFantasyTeam.goalGetterPlayerId == playerId) {
                                totalTeamPoints += (player.points * 3);
                                bonusPlayed := true;
                            };

                            // Pass Master
                            if(userFantasyTeam.passMasterGameweek == gameweek and userFantasyTeam.passMasterPlayerId == playerId) {
                                // Assuming assists are included in the player's points
                                totalTeamPoints += (player.points * 3);
                            };

                            // No Entry
                            if(userFantasyTeam.noEntryGameweek == gameweek and player.position == 1 and player.goalsConceded == 0) {
                                totalTeamPoints += (player.points * 3);
                            };

                            // Team Boost
                            if(userFantasyTeam.teamBoostGameweek == gameweek and player.teamId == userFantasyTeam.teamBoostTeamId) {
                                totalTeamPoints += (player.points * 2);
                            };

                            // Safe Hands
                            if(userFantasyTeam.safeHandsGameweek == gameweek and player.position == 0 and player.goalsConceded == 0) {
                                totalTeamPoints += (player.points * 3);
                            };

                            // Captain Fantastic
                            if(userFantasyTeam.captainFantasticGameweek == gameweek and userFantasyTeam.captainId == playerId and player.goalsScored > 0) {
                                totalTeamPoints += (player.points * 3);
                            };

                            // Brace Bonus
                            if(userFantasyTeam.braceBonusGameweek == gameweek and player.goalsScored >= 2) {
                                totalTeamPoints += (player.points * 2);
                            };

                            // Hat Trick Hero
                            if(userFantasyTeam.hatTrickHeroGameweek == gameweek and player.goalsScored >= 3) {
                                totalTeamPoints += (player.points * 3);
                            };
                            
                            // Handle captain bonus
                            if (playerId == userFantasyTeam.captainId) {
                                totalTeamPoints += player.points;
                            };
                        };
                    }
                };
            };
        };
        
        public shared func snapshotGameweek(): async (){

            //need to copy every current team into gameweek predictions

            //copy current teams into gameweek predictions - this is to copy the predictions into the users profile history

            

               /*

                // 3. Create a snapshot with the total points and append it to the team's history
                let updatedTeamSnapshot: T.FantasyTeamSnapshot = { 
                    // ... (the rest remains unchanged)
                    points = totalTeamPoints; // Assign the calculated points
                };

                var newHistoryList = value.history;
                newHistoryList := List.push(updatedTeamSnapshot, newHistoryList);
            
                let updatedUserTeam: T.UserFantasyTeam = {
                    fantasyTeam = value.fantasyTeam;
                    history = List.append(value.history, newHistoryList);
                };

                fantasyTeams.put(key, updatedUserTeam);
                */
                
        };
    }
}
