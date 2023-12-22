import T "../../types";
import DTOs "../../DTOs";
import List "mo:base/List";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import CanisterIds "../../CanisterIds";

module {
  public class PlayerComposite() {
    
    private var nextPlayerId : T.PlayerId = 1;
    private var players = List.fromArray<T.Player>([]);
   
    public func setStableData(stable_next_player_id: T.PlayerId, stable_players: [T.Player]) {
      nextPlayerId := stable_next_player_id;
      players := List.fromArray(stable_players);
    };

    let former_players_canister = actor (CanisterIds.FORMER_PLAYERS_CANISTER_ID) : actor {
      getFormerPlayer : (playerId: T.PlayerId) -> async ();
      addFormerPlayer : (playerDTO: DTOs.PlayerDTO) -> async ();
      reinstateFormerPlayer : (playerId: T.PlayerId) -> async ();
    };

    let retired_players_canister = actor (CanisterIds.RETIRED_PLAYERS_CANISTER_ID) : actor {
      getRetiredPlayer : (playerId: T.PlayerId) -> async ();
      retirePlayer : (playerDTO: DTOs.PlayerDTO) -> async ();
      unretirePlayer : (playerId: T.PlayerId) -> async ();
    };

    public func loanExpired(){
      //go through all players and check if any have their loan expired and recall them to their team if so
    };

    public func getPlayers(currentSeasonId: T.SeasonId) : [DTOs.PlayerDTO] {

      let playerDTOs = List.map<T.Player, DTOs.PlayerDTO>(
        players, 
        func(player : T.Player) : DTOs.PlayerDTO {

          let season = List.find<T.PlayerSeason>(
            player.seasons,
            func(playerSeason: T.PlayerSeason){
              return playerSeason.id == currentSeasonId;
            }
          );

          var totalSeasonPoints: Int16 = 0;

          switch(season){
            case (null){};
            case (?foundSeason){
              totalSeasonPoints := List.foldLeft<T.PlayerGameweek, Int16>(foundSeason.gameweeks, 0, func (acc, n) { acc + n.points });
            };
          };
          
          return {
            id = player.id;
            clubId = player.clubId;
            position = player.position;
            firstName = player.firstName;
            lastName = player.lastName;
            shirtNumber = player.shirtNumber;
            valueQuarterMillions = player.valueQuarterMillions;
            dateOfBirth = player.dateOfBirth;
            nationality = player.nationality;
            totalPoints = totalSeasonPoints;
          };
        },
      );
      return List.toArray(playerDTOs);
    };

    public func getPlayerDetailsForGameweek(seasonId: T.SeasonId, gameweek: T.GameweekNumber) : [DTOs.PlayerPointsDTO] {
      var playerDetailsBuffer = Buffer.fromArray<DTOs.PlayerPointsDTO>([]);

      label playerDetailsLoop for (player in Iter.fromList(players)) {
        var points : Int16 = 0;
        var events : List.List<T.PlayerEventData> = List.nil();

        for (season in Iter.fromList(player.seasons)) {
          if (season.id == seasonId) {
            for (gw in Iter.fromList(season.gameweeks)) {

              if (gw.number == gameweek) {
                points := gw.points;
                events := List.filter<T.PlayerEventData>(
                  gw.events,
                  func(event : T.PlayerEventData) : Bool {
                    return event.playerId == player.id;
                  },
                );
              };
            };
          };
        };

        let playerGameweek : DTOs.PlayerPointsDTO = {
          id = player.id;
          points = points;
          clubId = player.clubId;
          position = player.position;
          events = List.toArray(events);
          gameweek = gameweek;
        };
        playerDetailsBuffer.add(playerGameweek);
      };

      return Buffer.toArray(playerDetailsBuffer);
    };

    public func validateRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async Result.Result<Text,Text> {
      return #ok("Valid");
    };

    public func executeRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async () {
    };

    public func validateRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<Text,Text> {
      return #ok("Valid");
    };

    public func executeRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async () {
    };

    public func validateLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async Result.Result<Text,Text> {
      if (loanEndDate <= Time.now()) {
        return #err(#InvalidData);
      };

      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0) {
        return #err(#InvalidData);
      };

      //player is not already on loan
      if (player.onLoan) {
        return #err(#InvalidData);
      };

      //loan team exists unless 0
      if (loanTeamId > 0) {
        switch (teamsInstance.getTeam(loanTeamId)) {
          case (null) {
            return #err(#InvalidData);
          };
          case (?foundTeam) {};
        };
      };

      return #ok("Valid");
    };

    public func executeLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async () {
    };

    public func validateTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async Result.Result<Text,Text> {
      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0) {
        return #err(#InvalidData);
      };

      //new club is premier league team
      if (newTeamId > 0) {
        switch (teamsInstance.getTeam(newTeamId)) {
          case (null) {
            return #err(#InvalidData);
          };
          case (?foundTeam) {};
        };
      };

      return #ok("Valid");
    };

    public func executeTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async () {
    };

    public func validateRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async Result.Result<Text,Text> {
      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0) {
        return #err(#InvalidData);
      };

      //player is on loan
      if (not player.onLoan) {
        return #err(#InvalidData);
      };

      return #ok("Valid");
    };

    public func executeRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async () {
    };

    public func validateCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async Result.Result<Text,Text> {

      switch (teamsInstance.getTeam(teamId)) {
        case (null) {
          return #err(#InvalidData);
        };
        case (?foundTeam) {};
      };

      if (Text.size(firstName) > 50) {
        return #err(#InvalidData);
      };

      if (Text.size(lastName) > 50) {
        return #err(#InvalidData);
      };

      if (position > 3) {
        return #err(#InvalidData);
      };

      if (not countriesInstance.isCountryValid(nationality)) {
        return #err(#InvalidData);
      };

      if (Utilities.calculateAgeFromUnix(dateOfBirth) < 16) {
        return #err(#InvalidData);
      };


      return #ok("Valid");
    };

    public func executeCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async () {
    };

    public func validateUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async Result.Result<Text,Text> {

      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0) {
        return #err(#InvalidData);
      };

      if (Text.size(firstName) > 50) {
        return #err(#InvalidData);
      };

      if (Text.size(lastName) > 50) {
        return #err(#InvalidData);
      };

      if (position > 3) {
        return #err(#InvalidData);
      };

      if (not countriesInstance.isCountryValid(nationality)) {
        return #err(#InvalidData);
      };

      if (Utilities.calculateAgeFromUnix(dateOfBirth) < 16) {
        return #err(#InvalidData);
      };

      return #ok("Valid");
    };

    public func executeUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async () {
    };

    public func validateSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async Result.Result<Text,Text> {
      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0 or player.isInjured) {
        return #err(#InvalidData);
      };

      return #ok("Valid");
    };

    public func executeSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async () {
    };
    
    public func validateRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async Result.Result<Text,Text> {
      let player = await playerCanister.getPlayer(playerId);
      if (player.id == 0 or player.retirementDate > 0) {
        return #err(#InvalidData);
      };
      

      return #ok("Valid");
    };

    public func executeRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async () {
    };

    public func validateUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<Text,Text> {
      return #ok("Valid");
    };
    
    public func executeUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async () {
    };

    

    public func getStablePlayers(): [T.Player] {
      return List.toArray(players);
    };

    public func setStablePlayers(stable_players: [T.Player]) {
      players := List.fromArray(stable_players);
    };

    public func getStableNextPlayerId() : T.PlayerId {
      return nextPlayerId;
    };

    public func setStableNextPlayerId(stable_next_player_id: T.PlayerId) {
      nextPlayerId := stable_next_player_id;
    };
  };
};
