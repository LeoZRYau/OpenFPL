import T "../../types";
import DTOs "../../DTOs";
import List "mo:base/List";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Array "mo:base/Array";
import CanisterIds "../../CanisterIds";
import Countries "../../Countries";
import Utilities "../../utilities";

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
      //TODO
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
      //TODO
      return #ok("Valid");
    };

    public func executeRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO) : async () {
      //TODO
    };

    public func validateRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<Text,Text> {
      //TODO
      return #ok("Valid");
    };

    public func executeRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async () {
      //TODO
    };

    public func validateLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO, clubs: List.List<T.Club>) : async Result.Result<Text,Text> {
      if (loanPlayerDTO.loanEndDate <= Time.now()) {
        return #err("Invalid: Loan end date must be in the future.");
      };

      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == loanPlayerDTO.playerId;
        },
      );

      switch(player){
        case (null){
          return #err("Invalid: Cannot find player to loan.");
        };
        case (?foundPlayer){
          if(foundPlayer.onLoan){
            return #err("Invalid: Player already on loan.")
          };
        };
      };

      if (loanPlayerDTO.loanClubId > 0) {
        
        let loanClub = List.find<T.Club>(
          clubs,
          func(club : T.Club) : Bool {
            return club.id == loanPlayerDTO.loanClubId;
          },
        );

        switch (loanClub) {
          case (null) {
            return #err("Invalid: Loan club does not exist.");
          };
          case (?foundTeam) {};
        };
      };

      return #ok("Valid");
    };

    public func executeLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO) : async () {
      //TODO
    };

    public func validateTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO, clubs: List.List<T.Club>) : async Result.Result<Text,Text> {
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == transferPlayerDTO.playerId;
        },
      );
      
      switch(player){
        case (null){
          return #err("Invalid: Cannot find player to transfer.");
        };
        case (?foundPlayer){ };
      };

      if (transferPlayerDTO.newClubId > 0) {
        
        let newClub = List.find<T.Club>(
          clubs,
          func(club : T.Club) : Bool {
            return club.id == transferPlayerDTO.newClubId;
          },
        );

        switch (newClub) {
          case (null) {
            return #err("Invalid: New club does not exist.");
          };
          case (?foundTeam) {};
        };
      };

      return #ok("Valid");
    };

    public func executeTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO) : async () {
      //TODO
    };

    public func validateRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async Result.Result<Text,Text> {
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == recallPlayerDTO.playerId;
        },
      );
      
      switch(player){
        case (null){
          return #err("Invalid: Cannot find player to recall.");
        };
        case (?foundPlayer){ 
          if (not foundPlayer.onLoan) {
            return #err("Invalid: Player is not on loan to recall.");
          };
        };
      };

      return #ok("Valid");
    };

    public func executeRecallPlayer(recallPlayerDTO: DTOs.RecallPlayerDTO) : async () {
      //TODO
    };

    public func validateCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO, clubs: List.List<T.Club>) : async Result.Result<Text,Text> {

      let newClub = List.find<T.Club>(
        clubs,
        func(club : T.Club) : Bool {
          return club.id == createPlayerDTO.clubId;
        },
      );

      switch (newClub) {
        case (null) {
          return #err("Invalid: Player club does not exist.");
        };
        case (?foundTeam) {};
      };

      if (Text.size(createPlayerDTO.firstName) > 50) {
        return #err("Invalid: Player first name greater than 50 characters.");
      };

      if (Text.size(createPlayerDTO.lastName) > 50) {
        return #err("Invalid: Player last name greater than 50 characters.");
      };

      let playerCountry = Array.find<T.Country>(Countries.countries, func(country : T.Country) : Bool { return country.id == createPlayerDTO.nationality });
      switch(playerCountry){
        case (null){
          return #err("Invalid: Country not found.")
        };
        case (?foundCountry){};
      };

      if (Utilities.calculateAgeFromUnix(createPlayerDTO.dateOfBirth) < 16) {
        return #err("Invalid: Player under 16 years of age.");
      };

      return #ok("Valid");
    };

    public func executeCreatePlayer(createPlayerDTO: DTOs.CreatePlayerDTO) : async () {
    };

    public func validateUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async Result.Result<Text,Text> {

      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == updatePlayerDTO.playerId;
        },
      );
      
      switch(player){
        case (null){
          return #err("Invalid: Cannot find player to update.");
        };
        case (?foundPlayer){ };
      };



      if (Text.size(updatePlayerDTO.firstName) > 50) {
        return #err("Invalid: Player first name greater than 50 characters.");
      };

      if (Text.size(updatePlayerDTO.lastName) > 50) {
        return #err("Invalid: Player last name greater than 50 characters.");
      };

      let playerCountry = Array.find<T.Country>(Countries.countries, func(country : T.Country) : Bool { return country.id == updatePlayerDTO.nationality });
      switch(playerCountry){
        case (null){
          return #err("Invalid: Country not found.")
        };
        case (?foundCountry){};
      };

      if (Utilities.calculateAgeFromUnix(updatePlayerDTO.dateOfBirth) < 16) {
        return #err("Invalid: Player under 16 years of age.");
      };

      return #ok("Valid");
    };

    public func executeUpdatePlayer(updatePlayerDTO: DTOs.UpdatePlayerDTO) : async () {
      //TODO
    };

    public func validateSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async Result.Result<Text,Text> {
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == setPlayerInjuryDTO.playerId;
        },
      );
      
      switch(player){
        case (null){
          return #err("Invalid: Cannot find player.");
        };
        case (?foundPlayer){ };
      };

      return #ok("Valid");
    };

    public func executeSetPlayerInjury(setPlayerInjuryDTO: DTOs.SetPlayerInjuryDTO) : async () {
      //TODO
    };
    
    public func validateRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async Result.Result<Text,Text> {
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == retirePlayerDTO.playerId;
        },
      );
      
      switch(player){
        case (null){
          return #err("Invalid: Cannot find player to retire.");
        };
        case (?foundPlayer){ };
      };
      

      return #ok("Valid");
    };

    public func executeRetirePlayer(retirePlayerDTO: DTOs.RetirePlayerDTO) : async () {
      //TODO
    };

    public func validateUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<Text,Text> {
      return #ok("Valid");
    };
    
    public func executeUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async () {
      //TODO
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
