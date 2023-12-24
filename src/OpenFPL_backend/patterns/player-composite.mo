import T "../types";
import DTOs "../DTOs";
import List "mo:base/List";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Int "mo:base/Int";
import Timer "mo:base/Timer";
import Nat16 "mo:base/Nat16";
import HashMap "mo:base/HashMap";
import CanisterIds "../CanisterIds";
import Countries "../Countries";
import Utilities "../utilities";

module {
  public class PlayerComposite() {
    
    private var nextPlayerId : T.PlayerId = 1;
    private var players = List.fromArray<T.Player>([]);
    private var retiredPlayers = List.fromArray<T.Player>([]);
    private var formerPlayers = List.fromArray<T.Player>([]);
    private var setAndBackupTimer : ?((duration : Timer.Duration, callbackName : Text) -> ()) = null;
    private var removeExpiredTimers : ?(() -> ()) = null;

    public func setStableData(stable_next_player_id: T.PlayerId, stable_players: [T.Player], stable_retired_players: [T.Player], stable_former_players: [T.Player]) {
      nextPlayerId := stable_next_player_id;
      players := List.fromArray(stable_players);
      retiredPlayers := List.fromArray(stable_retired_players);
      formerPlayers := List.fromArray(stable_former_players);
    };
    
    public func setTimerBackupFunction(
      _setAndBackupTimer : (duration : Timer.Duration, callbackName : Text) -> (),
      _removeExpiredTimers : () -> ()) {
      setAndBackupTimer := ?_setAndBackupTimer;
      removeExpiredTimers := ?_removeExpiredTimers;
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

    public func loanExpired() : async (){

      let playersToRecall = List.filter<T.Player>(
        players,
        func(currentPlayer : T.Player) : Bool {
          return currentPlayer.onLoan and currentPlayer.loanEndDate <= Time.now();
        },
      );
      
      for (player in Iter.fromList(playersToRecall)){
        let recallPlayerDTO: DTOs.RecallPlayerDTO = {
          playerId = player.id;
        };
        
        await executeRecallPlayer(recallPlayerDTO);
      };

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
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == revaluePlayerUpDTO.playerId;
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

    public func executeRevaluePlayerUp(revaluePlayerUpDTO: DTOs.RevaluePlayerUpDTO, systemState: T.SystemState) : async () {
      var updatedPlayers = List.map<T.Player, T.Player>(
        players,
        func(p : T.Player) : T.Player {
          if (p.id == revaluePlayerUpDTO.playerId) {
            var newValue = p.valueQuarterMillions;
            newValue += 1;

            let historyEntry : T.ValueHistory = {
              seasonId = systemState.calculationSeason;
              gameweek = systemState.pickTeamGameweek;
              oldValue = p.valueQuarterMillions;
              newValue = newValue;
            };

            let updatedPlayer : T.Player = {
              id = p.id;
              clubId = p.clubId;
              position = p.position;
              firstName = p.firstName;
              lastName = p.lastName;
              shirtNumber = p.shirtNumber;
              valueQuarterMillions = p.valueQuarterMillions;
              dateOfBirth = p.dateOfBirth;
              nationality = p.nationality;
              seasons = p.seasons;
              valueHistory = List.append<T.ValueHistory>(p.valueHistory, List.make(historyEntry));
              onLoan = p.onLoan;
              parentClubId = p.parentClubId;
              loanEndDate = p.loanEndDate;
              isInjured = p.isInjured;
              injuryHistory = p.injuryHistory;
              retirementDate = p.retirementDate;
              transferHistory = p.transferHistory;
            };

            return updatedPlayer;
          };
          return p;
        },
      );

      players := updatedPlayers;
    };

    public func validateRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO) : async Result.Result<Text,Text> {
      let player = List.find<T.Player>(
        players,
        func(p : T.Player) : Bool {
          return p.id == revaluePlayerDownDTO.playerId;
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

    public func executeRevaluePlayerDown(revaluePlayerDownDTO: DTOs.RevaluePlayerDownDTO, systemState: T.SystemState) : async () {
      var updatedPlayers = List.map<T.Player, T.Player>(
        players,
        func(p : T.Player) : T.Player {
          if (p.id == revaluePlayerDownDTO.playerId) {
            var newValue = p.valueQuarterMillions;
            if (newValue >= 1) {
              newValue -= 1;
            };

            let historyEntry : T.ValueHistory = {
              seasonId = systemState.calculationSeason;
              gameweek = systemState.pickTeamGameweek;
              oldValue = p.valueQuarterMillions;
              newValue = newValue;
            };

            let updatedPlayer : T.Player = {
              id = p.id;
              clubId = p.clubId;
              position = p.position;
              firstName = p.firstName;
              lastName = p.lastName;
              shirtNumber = p.shirtNumber;
              valueQuarterMillions = newValue;
              dateOfBirth = p.dateOfBirth;
              nationality = p.nationality;
              seasons = p.seasons;
              valueHistory = List.append<T.ValueHistory>(p.valueHistory, List.make(historyEntry));
              onLoan = p.onLoan;
              parentClubId = p.parentClubId;
              loanEndDate = p.loanEndDate;
              isInjured = p.isInjured;
              injuryHistory = p.injuryHistory;
              retirementDate = p.retirementDate;
              transferHistory = p.transferHistory;
            };

            return updatedPlayer;
          };
          return p;
        },
      );

      players := updatedPlayers;
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

    public func executeLoanPlayer(loanPlayerDTO: DTOs.LoanPlayerDTO, systemState: T.SystemState) : async () {
      let playerToLoan = List.find<T.Player>(players, func(p : T.Player) { p.id == loanPlayerDTO.playerId });
      switch (playerToLoan) {
        case (null) {};
        case (?p) {

          let newTransferHistoryEntry : T.TransferHistory = {
            transferDate = Time.now();
            transferGameweek = systemState.pickTeamGameweek;
            transferSeason = systemState.calculationSeason;
            fromClub = p.clubId;
            toClub = loanPlayerDTO.loanClubId;
            loanEndDate = loanPlayerDTO.loanEndDate;
          };

          let loanedPlayer : T.Player = {
            id = p.id;
            clubId = loanPlayerDTO.loanClubId;
            position = p.position;
            firstName = p.firstName;
            lastName = p.lastName;
            shirtNumber = p.shirtNumber;
            valueQuarterMillions = p.valueQuarterMillions;
            dateOfBirth = p.dateOfBirth;
            nationality = p.nationality;
            seasons = p.seasons;
            valueHistory = p.valueHistory;
            onLoan = true;
            parentClubId = p.clubId;
            loanEndDate = loanPlayerDTO.loanEndDate;
            isInjured = p.isInjured;
            injuryHistory = p.injuryHistory;
            retirementDate = p.retirementDate;
            transferHistory = List.append<T.TransferHistory>(p.transferHistory, List.fromArray([newTransferHistoryEntry]));
          };

          players := List.map<T.Player, T.Player>(
            players,
            func(currentPlayer : T.Player) : T.Player {
              if (currentPlayer.id == loanedPlayer.id) {
                return loanedPlayer;
              } else {
                return currentPlayer;
              };
            },
          );

          let loanTimerDuration = #nanoseconds(Int.abs((loanPlayerDTO.loanEndDate - Time.now())));
          switch (setAndBackupTimer) {
            case (null) {};
            case (?actualFunction) {
              actualFunction(loanTimerDuration, "loanExpired");
            };
          };
        };
      };
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

    public func executeTransferPlayer(transferPlayerDTO: DTOs.TransferPlayerDTO, systemState: T.SystemState) : async () {
      let player = List.find<T.Player>(players, func(p : T.Player) { p.id == transferPlayerDTO.playerId });
      switch (player) {
        case (null) {};
        case (?p) {

          let newTransferHistoryEntry : T.TransferHistory = {
            transferDate = Time.now();
            transferGameweek = systemState.pickTeamGameweek;
            transferSeason = systemState.calculationSeason;
            fromClub = p.clubId;
            toClub = transferPlayerDTO.newClubId;
            loanEndDate = 0;
          };

          let updatedPlayer : T.Player = {
            id = p.id;
            clubId = transferPlayerDTO.newClubId;
            position = p.position;
            firstName = p.firstName;
            lastName = p.lastName;
            shirtNumber = p.shirtNumber;
            valueQuarterMillions = p.valueQuarterMillions;
            dateOfBirth = p.dateOfBirth;
            nationality = p.nationality;
            seasons = p.seasons;
            valueHistory = p.valueHistory;
            onLoan = false;
            loanEndDate = 0;
            parentClubId = 0;
            isInjured = p.isInjured;
            injuryHistory = p.injuryHistory;
            retirementDate = p.retirementDate;
            transferHistory = List.append<T.TransferHistory>(p.transferHistory, List.fromArray([newTransferHistoryEntry]));
          };
          players := List.map<T.Player, T.Player>(
            players,
            func(currentPlayer : T.Player) : T.Player {
              if (currentPlayer.id == updatedPlayer.id) {
                return updatedPlayer;
              } else {
                return currentPlayer;
              };
            },
          );
        };
      };
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
      let playerToRecall = List.find<T.Player>(players, func(p : T.Player) { p.id == recallPlayerDTO.playerId });
      switch (playerToRecall) {
        case (null) {};
        case (?p) {
          if (p.onLoan) {
            let returnedPlayer : T.Player = {
              id = p.id;
              clubId = p.parentClubId;
              position = p.position;
              firstName = p.firstName;
              lastName = p.lastName;
              shirtNumber = p.shirtNumber;
              valueQuarterMillions = p.valueQuarterMillions;
              dateOfBirth = p.dateOfBirth;
              nationality = p.nationality;
              seasons = p.seasons;
              valueHistory = p.valueHistory;
              onLoan = false;
              parentClubId = 0;
              loanEndDate = 0;
              isInjured = p.isInjured;
              injuryHistory = p.injuryHistory;
              retirementDate = p.retirementDate;
              transferHistory = p.transferHistory;
            };

            players := List.map<T.Player, T.Player>(
              players,
              func(currentPlayer : T.Player) : T.Player {
                if (currentPlayer.id == returnedPlayer.id) {
                  return returnedPlayer;
                } else {
                  return currentPlayer;
                };
              },
            );

            switch (removeExpiredTimers) {
              case (null) {};
              case (?actualFunction) {
                actualFunction();
              };
            };
          };
        };
      };
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
        let newPlayer : T.Player = {
          id = nextPlayerId + 1;
          clubId = createPlayerDTO.clubId;
          position = createPlayerDTO.position;
          firstName = createPlayerDTO.firstName;
          lastName = createPlayerDTO.lastName;
          shirtNumber = createPlayerDTO.shirtNumber;
          valueQuarterMillions = createPlayerDTO.valueQuarterMillions;
          dateOfBirth = createPlayerDTO.dateOfBirth;
          nationality = createPlayerDTO.nationality;
          seasons = List.nil<T.PlayerSeason>();
          valueHistory = List.nil<T.ValueHistory>();
          onLoan = false;
          parentClubId = 0;
          loanEndDate = 0;
          isInjured = false;
          injuryHistory = List.nil<T.InjuryHistory>();
          retirementDate = 0;
          transferHistory = List.nil<T.TransferHistory>();
        };
        players := List.push(newPlayer, players);
        nextPlayerId += 1;
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
        players := List.map<T.Player, T.Player>(
          players,
          func(currentPlayer : T.Player) : T.Player {
            if (currentPlayer.id == updatePlayerDTO.playerId) {
              return {
                id = currentPlayer.id;
                clubId = currentPlayer.clubId;
                position = updatePlayerDTO.position;
                firstName = updatePlayerDTO.firstName;
                lastName = updatePlayerDTO.lastName;
                shirtNumber = updatePlayerDTO.shirtNumber;
                valueQuarterMillions = currentPlayer.valueQuarterMillions;
                dateOfBirth = updatePlayerDTO.dateOfBirth;
                nationality = updatePlayerDTO.nationality;
                seasons = currentPlayer.seasons;
                valueHistory = currentPlayer.valueHistory;
                onLoan = currentPlayer.onLoan;
                parentClubId = currentPlayer.parentClubId;
                loanEndDate = currentPlayer.loanEndDate;
                isInjured = currentPlayer.isInjured;
                injuryHistory = currentPlayer.injuryHistory;
                retirementDate = currentPlayer.retirementDate;
                transferHistory = currentPlayer.transferHistory;
              };
            } else {
              return currentPlayer;
            };
          },
        );
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
       players := List.map<T.Player, T.Player>(
      players,
      func(currentPlayer : T.Player) : T.Player {
        if (currentPlayer.id == setPlayerInjuryDTO.playerId) {

          if (setPlayerInjuryDTO.expectedEndDate <= Time.now()) {
            let updatedInjuryHistory = List.map<T.InjuryHistory, T.InjuryHistory>(
              currentPlayer.injuryHistory,
              func(injury : T.InjuryHistory) : T.InjuryHistory {
                if (injury.expectedEndDate > Time.now()) {
                  return {
                    description = injury.description;
                    injuryStartDate = injury.injuryStartDate;
                    expectedEndDate = Time.now();
                  };
                } else {
                  return injury;
                };
              },
            );

            return {
              id = currentPlayer.id;
              clubId = currentPlayer.clubId;
              position = currentPlayer.position;
              firstName = currentPlayer.firstName;
              lastName = currentPlayer.lastName;
              shirtNumber = currentPlayer.shirtNumber;
              valueQuarterMillions = currentPlayer.valueQuarterMillions;
              dateOfBirth = currentPlayer.dateOfBirth;
              nationality = currentPlayer.nationality;
              seasons = currentPlayer.seasons;
              valueHistory = currentPlayer.valueHistory;
              onLoan = currentPlayer.onLoan;
              parentClubId = currentPlayer.parentClubId;
              loanEndDate = currentPlayer.loanEndDate;
              isInjured = false;
              injuryHistory = updatedInjuryHistory;
              retirementDate = currentPlayer.retirementDate;
              transferHistory = currentPlayer.transferHistory;
            };
          } else {
            let newInjury : T.InjuryHistory = {
              description = setPlayerInjuryDTO.description;
              expectedEndDate = setPlayerInjuryDTO.expectedEndDate;
              injuryStartDate = Time.now();
            };

            return {
              id = currentPlayer.id;
              clubId = currentPlayer.clubId;
              position = currentPlayer.position;
              firstName = currentPlayer.firstName;
              lastName = currentPlayer.lastName;
              shirtNumber = currentPlayer.shirtNumber;
              valueQuarterMillions = currentPlayer.valueQuarterMillions;
              dateOfBirth = currentPlayer.dateOfBirth;
              nationality = currentPlayer.nationality;
              seasons = currentPlayer.seasons;
              valueHistory = currentPlayer.valueHistory;
              onLoan = currentPlayer.onLoan;
              parentClubId = currentPlayer.parentClubId;
              loanEndDate = currentPlayer.loanEndDate;
              isInjured = true;
              injuryHistory = List.push(newInjury, currentPlayer.injuryHistory);
              retirementDate = currentPlayer.retirementDate;
              transferHistory = currentPlayer.transferHistory;
            };
          };
        } else {
          return currentPlayer;
        };
      },
    );
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
      let playerToRetire = List.find<T.Player>(players, func(p : T.Player) { p.id == retirePlayerDTO.playerId });
      switch (playerToRetire) {
        case (null) {};
        case (?p) {
          let retiredPlayer : T.Player = {
            id = p.id;
            clubId = p.clubId;
            position = p.position;
            firstName = p.firstName;
            lastName = p.lastName;
            shirtNumber = p.shirtNumber;
            valueQuarterMillions = p.valueQuarterMillions;
            dateOfBirth = p.dateOfBirth;
            nationality = p.nationality;
            seasons = p.seasons;
            valueHistory = p.valueHistory;
            onLoan = p.onLoan;
            parentClubId = p.parentClubId;
            loanEndDate = p.loanEndDate;
            isInjured = p.isInjured;
            injuryHistory = p.injuryHistory;
            retirementDate = retirePlayerDTO.retirementDate;
            transferHistory = p.transferHistory;
          };

          retiredPlayers := List.push(retiredPlayer, retiredPlayers);
          players := List.filter<T.Player>(
            players,
            func(currentPlayer : T.Player) : Bool {
              return currentPlayer.id != retirePlayerDTO.playerId;
            },
          );
        };
      };
    };

    public func validateUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async Result.Result<Text,Text> {
      
      let playerToUnretire = List.find<T.Player>(retiredPlayers, func(p : T.Player) { p.id == unretirePlayerDTO.playerId });
      switch(playerToUnretire){
        case (null){
          return #err("Invalid: Cannot find player");
        };
        case (?foundPlayer){ };
      };

      return #ok("Valid");
    };
    
    public func executeUnretirePlayer(unretirePlayerDTO: DTOs.UnretirePlayerDTO) : async () {
      let playerToUnretire = List.find<T.Player>(retiredPlayers, func(p : T.Player) { p.id == unretirePlayerDTO.playerId });
      switch (playerToUnretire) {
        case (null) {};
        case (?p) {
          let activePlayer : T.Player = {
            id = p.id;
            clubId = p.clubId;
            position = p.position;
            firstName = p.firstName;
            lastName = p.lastName;
            shirtNumber = p.shirtNumber;
            valueQuarterMillions = p.valueQuarterMillions;
            dateOfBirth = p.dateOfBirth;
            nationality = p.nationality;
            seasons = p.seasons;
            valueHistory = p.valueHistory;
            onLoan = p.onLoan;
            loanEndDate = p.loanEndDate;
            parentClubId = p.parentClubId;
            isInjured = p.isInjured;
            injuryHistory = p.injuryHistory;
            retirementDate = 0;
            transferHistory = p.transferHistory;
          };

          players := List.push(activePlayer, players);
          retiredPlayers := List.filter<T.Player>(
            retiredPlayers,
            func(currentPlayer : T.Player) : Bool {
              return currentPlayer.id != unretirePlayerDTO.playerId;
            },
          );
        };
      };
    };

    public func addEventsToPlayers(playerEventData: [T.PlayerEventData], seasonId: T.SeasonId, gameweek: T.GameweekNumber) : async (){
      
      var updatedSeasons : List.List<T.PlayerSeason> = List.nil<T.PlayerSeason>();
      let playerEventsMap : HashMap.HashMap<Nat16, [T.PlayerEventData]> = HashMap.HashMap<Nat16, [T.PlayerEventData]>(200, Utilities.eqNat16, Utilities.hashNat16);

      for (event in Iter.fromArray(playerEventData)) {
        let playerId : Nat16 = event.playerId;
        switch (playerEventsMap.get(playerId)) {
          case (null) {
            playerEventsMap.put(playerId, [event]);
          };
          case (?existingEvents) {
            let existingEventsBuffer = Buffer.fromArray<T.PlayerEventData>(existingEvents);
            existingEventsBuffer.add(event);
            playerEventsMap.put(playerId, Buffer.toArray(existingEventsBuffer));
          };
        };
      };

      for(playerEventMap in playerEventsMap.entries()){
        let player = List.find<T.Player>(
          players,
          func(p : T.Player) : Bool {
            return p.id == playerEventMap.0;
          },
        );
        switch(player){
          case (null){};
          case (?foundPlayer){

            let score: Int16 = calculatePlayerScore(foundPlayer.position, playerEventMap.1);

            if (foundPlayer.seasons == null) {
              let newGameweek : T.PlayerGameweek = {
                number = gameweek;
                events = List.fromArray<T.PlayerEventData>(playerEventMap.1);
                points = score;
              };
              let newSeason : T.PlayerSeason = {
                id = seasonId;
                gameweeks = List.fromArray<T.PlayerGameweek>([newGameweek]);
              };
              updatedSeasons := List.fromArray<T.PlayerSeason>([newSeason]);
            } else {
              let currentSeason = List.find<T.PlayerSeason>(
                foundPlayer.seasons,
                func(s : T.PlayerSeason) : Bool {
                  s.id == seasonId;
                },
              );

              if (currentSeason == null) {
                let newGameweek : T.PlayerGameweek = {
                  number = gameweek;
                  events = List.fromArray<T.PlayerEventData>(playerEventMap.1);
                  points = score;
                };
                let newSeason : T.PlayerSeason = {
                  id = seasonId;
                  gameweeks = List.fromArray<T.PlayerGameweek>([newGameweek]);
                };
                updatedSeasons := List.append<T.PlayerSeason>(foundPlayer.seasons, List.fromArray<T.PlayerSeason>([newSeason]));

              } else {
                updatedSeasons := List.map<T.PlayerSeason, T.PlayerSeason>(
                  foundPlayer.seasons,
                  func(season : T.PlayerSeason) : T.PlayerSeason {

                    if (season.id != seasonId) {
                      return season;
                    };

                    let currentGameweek = List.find<T.PlayerGameweek>(
                      season.gameweeks,
                      func(gw : T.PlayerGameweek) : Bool {
                        gw.number == gameweek;
                      },
                    );

                    if (currentGameweek == null) {
                      let newGameweek : T.PlayerGameweek = {
                        number = gameweek;
                        events = List.fromArray<T.PlayerEventData>(playerEventMap.1);
                        points = score;
                      };
                      let updatedGameweeks = List.append<T.PlayerGameweek>(season.gameweeks, List.fromArray<T.PlayerGameweek>([newGameweek]));
                      let updatedSeason : T.PlayerSeason = {
                        id = season.id;
                        gameweeks = List.append<T.PlayerGameweek>(season.gameweeks, List.fromArray<T.PlayerGameweek>([newGameweek]));
                      };
                      return updatedSeason;
                    } else {
                      let updatedGameweeks = List.map<T.PlayerGameweek, T.PlayerGameweek>(
                        season.gameweeks,
                        func(gw : T.PlayerGameweek) : T.PlayerGameweek {
                          if (gw.number != gameweek) {
                            return gw;
                          };
                          return {
                            number = gw.number;
                            events = List.append<T.PlayerEventData>(gw.events, List.fromArray(playerEventMap.1));
                            points = score;
                          };
                        },
                      );
                      return {
                        id = season.id;
                        gameweeks = updatedGameweeks;
                      };
                    };
                  },
                );
              };
            };

            let updatedPlayer = {
              id = foundPlayer.id;
              clubId = foundPlayer.clubId;
              position = foundPlayer.position;
              firstName = foundPlayer.firstName;
              lastName = foundPlayer.lastName;
              shirtNumber = foundPlayer.shirtNumber;
              valueQuarterMillions = foundPlayer.valueQuarterMillions;
              dateOfBirth = foundPlayer.dateOfBirth;
              nationality = foundPlayer.nationality;
              seasons = updatedSeasons;
              valueHistory = foundPlayer.valueHistory;
              onLoan = foundPlayer.onLoan;
              parentClubId = foundPlayer.parentClubId;
              loanEndDate = foundPlayer.loanEndDate;
              isInjured = foundPlayer.isInjured;
              injuryHistory = foundPlayer.injuryHistory;
              retirementDate = foundPlayer.retirementDate;
              transferHistory = foundPlayer.transferHistory;
            };

            players := List.map<T.Player, T.Player>(
              players,
              func(p : T.Player) : T.Player {
                if (p.id == updatedPlayer.id) { updatedPlayer } else { p };
              },
            );
          };
        }
        
      };
    };
    
    private func calculatePlayerScore(playerPosition: T.PlayerPosition, events: [T.PlayerEventData]) : Int16 {
      let totalScore = Array.foldLeft<T.PlayerEventData, Int16>(
        events,
        0,
        func(acc : Int16, event : T.PlayerEventData) : Int16 {
          return acc + Utilities.calculateIndividualScoreForEvent(event, playerPosition);
        },
      );

      let aggregateScore = Utilities.calculateAggregatePlayerEvents(events, playerPosition);
      return totalScore + aggregateScore;
    };

    public func getStablePlayers(): [T.Player] {
      return List.toArray(players);
    };

    public func setStablePlayers(stable_players: [T.Player]) {
      players := List.fromArray(stable_players);
    };

    public func getStableRetiredPlayers(): [T.Player] {
      return List.toArray(retiredPlayers);
    };

    public func setStableRetiredPlayers(stable_retired_players: [T.Player]) {
      retiredPlayers := List.fromArray(stable_retired_players);
    };

    public func getStableFormerPlayers(): [T.Player] {
      return List.toArray(formerPlayers);
    };

    public func setStableFormerPlayers(stable_former_players: [T.Player]) {
      players := List.fromArray(stable_former_players);
    };

    public func getStableNextPlayerId() : T.PlayerId {
      return nextPlayerId;
    };

    public func setStableNextPlayerId(stable_next_player_id: T.PlayerId) {
      nextPlayerId := stable_next_player_id;
    };
  };
};
