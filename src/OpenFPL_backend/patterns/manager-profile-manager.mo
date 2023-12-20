module {

  public class SnapshotManager() {

   //include all profile info for caller
    //include all manager info
    //GetProfile
      //GetGameweekPoints?? - Replace with GetProfile which includes their season history
      //Will include their current team and the pick team should copy from this for the in game session changes
   

    /*
    
    //ManagerProfileManager //what 
    manager-profile-manager.mo
Purpose: Handles operations related to the user profiles of the football managers.
Contents:
Methods for updating manager details like updateUsername and updateProfilePicture.
Functions for managing account settings and preferences.
Integration points for authentication and authorization if needed.
    




    public func getFantasyTeamForGameweek(managerId : Text, seasonId : Nat16, gameweek : Nat8) : T.FantasyTeamSnapshot {
      let emptySnapshot : T.FantasyTeamSnapshot = {
        principalId = "";
        transfersAvailable = 0;
        bankBalance = 0;
        playerIds = [];
        captainId = 0;
        gameweek = 0;
        goalGetterGameweek = 0;
        goalGetterPlayerId = 0;
        passMasterGameweek = 0;
        passMasterPlayerId = 0;
        noEntryGameweek = 0;
        noEntryPlayerId = 0;
        teamBoostGameweek = 0;
        teamBoostTeamId = 0;
        safeHandsGameweek = 0;
        safeHandsPlayerId = 0;
        captainFantasticGameweek = 0;
        captainFantasticPlayerId = 0;
        countrymenGameweek = 0;
        countrymenCountryId = 0;
        prospectsGameweek = 0;
        braceBonusGameweek = 0;
        hatTrickHeroGameweek = 0;
        points = 0;
        favouriteTeamId = 0;
        teamName = "";
        transferWindowGameweek = 0;
      };
      let fantasyTeam = fantasyTeams.get(managerId);
      switch (fantasyTeam) {
        case (null) { return emptySnapshot };
        case (?foundTeam) {

          let teamHistory = foundTeam.history;
          switch (teamHistory) {
            case (null) { return emptySnapshot };
            case (foundHistory) {
              let foundSeason = List.find<T.FantasyTeamSeason>(
                foundHistory,
                func(season : T.FantasyTeamSeason) : Bool {
                  return season.seasonId == seasonId;
                },
              );
              switch (foundSeason) {
                case (null) { return emptySnapshot };
                case (?fs) {
                  let foundGameweek = List.find<T.FantasyTeamSnapshot>(
                    fs.gameweeks,
                    func(gw : T.FantasyTeamSnapshot) : Bool {
                      return gw.gameweek == gameweek;
                    },
                  );
                  switch (foundGameweek) {
                    case (null) { return emptySnapshot };
                    case (?fgw) { return fgw };
                  };
                };
              };

            };

          };
        };
      };
    };

    public func resetFantasyTeams() : async () {
      for ((principalId, userFantasyTeam) in fantasyTeams.entries()) {

        let clearTeam = clearFantasyTeam(principalId);

        let updatedUserTeam : T.UserFantasyTeam = {
          fantasyTeam = clearTeam;
          history = userFantasyTeam.history;
        };

        fantasyTeams.put(principalId, updatedUserTeam);
      };
    };

    public func updateDisplayName(principalName : Text, displayName : Text) : () {
      let existingTeam = fantasyTeams.get(principalName);
      switch (existingTeam) {
        case (null) {};
        case (?foundTeam) {
          if (foundTeam.fantasyTeam.teamName == displayName) {
            return;
          };

          let updatedFantasyTeam : T.FantasyTeam = {
            principalId = foundTeam.fantasyTeam.principalId;
            teamName = displayName;
            favouriteTeamId = foundTeam.fantasyTeam.favouriteTeamId;
            transfersAvailable = foundTeam.fantasyTeam.transfersAvailable;
            bankBalance = foundTeam.fantasyTeam.bankBalance;
            playerIds = foundTeam.fantasyTeam.playerIds;
            captainId = foundTeam.fantasyTeam.captainId;
            goalGetterGameweek = foundTeam.fantasyTeam.goalGetterGameweek;
            goalGetterPlayerId = foundTeam.fantasyTeam.goalGetterPlayerId;
            passMasterGameweek = foundTeam.fantasyTeam.passMasterGameweek;
            passMasterPlayerId = foundTeam.fantasyTeam.passMasterPlayerId;
            noEntryGameweek = foundTeam.fantasyTeam.noEntryGameweek;
            noEntryPlayerId = foundTeam.fantasyTeam.noEntryPlayerId;
            teamBoostGameweek = foundTeam.fantasyTeam.teamBoostGameweek;
            teamBoostTeamId = foundTeam.fantasyTeam.teamBoostTeamId;
            safeHandsGameweek = foundTeam.fantasyTeam.safeHandsGameweek;
            safeHandsPlayerId = foundTeam.fantasyTeam.safeHandsPlayerId;
            captainFantasticGameweek = foundTeam.fantasyTeam.captainFantasticGameweek;
            captainFantasticPlayerId = foundTeam.fantasyTeam.captainFantasticPlayerId;
            countrymenGameweek = foundTeam.fantasyTeam.countrymenGameweek;
            countrymenCountryId = foundTeam.fantasyTeam.countrymenCountryId;
            prospectsGameweek = foundTeam.fantasyTeam.prospectsGameweek;
            braceBonusGameweek = foundTeam.fantasyTeam.braceBonusGameweek;
            hatTrickHeroGameweek = foundTeam.fantasyTeam.hatTrickHeroGameweek;
            transferWindowGameweek = foundTeam.fantasyTeam.transferWindowGameweek;
          };

          let updatedUserFantasyTeam : T.UserFantasyTeam = {
            fantasyTeam = updatedFantasyTeam;
            history = foundTeam.history;
          };

          fantasyTeams.put(principalName, updatedUserFantasyTeam);
        };
      };
    };

    public func updateFavouriteTeam(principalName : Text, favouriteTeamId : Nat16) : () {
      let existingTeam = fantasyTeams.get(principalName);
      switch (existingTeam) {
        case (null) {};
        case (?foundTeam) {

          let updatedFantasyTeam : T.FantasyTeam = {
            principalId = foundTeam.fantasyTeam.principalId;
            teamName = foundTeam.fantasyTeam.teamName;
            favouriteTeamId = favouriteTeamId;
            transfersAvailable = foundTeam.fantasyTeam.transfersAvailable;
            bankBalance = foundTeam.fantasyTeam.bankBalance;
            playerIds = foundTeam.fantasyTeam.playerIds;
            captainId = foundTeam.fantasyTeam.captainId;
            goalGetterGameweek = foundTeam.fantasyTeam.goalGetterGameweek;
            goalGetterPlayerId = foundTeam.fantasyTeam.goalGetterPlayerId;
            passMasterGameweek = foundTeam.fantasyTeam.passMasterGameweek;
            passMasterPlayerId = foundTeam.fantasyTeam.passMasterPlayerId;
            noEntryGameweek = foundTeam.fantasyTeam.noEntryGameweek;
            noEntryPlayerId = foundTeam.fantasyTeam.noEntryPlayerId;
            teamBoostGameweek = foundTeam.fantasyTeam.teamBoostGameweek;
            teamBoostTeamId = foundTeam.fantasyTeam.teamBoostTeamId;
            safeHandsGameweek = foundTeam.fantasyTeam.safeHandsGameweek;
            safeHandsPlayerId = foundTeam.fantasyTeam.safeHandsPlayerId;
            captainFantasticGameweek = foundTeam.fantasyTeam.captainFantasticGameweek;
            captainFantasticPlayerId = foundTeam.fantasyTeam.captainFantasticPlayerId;
            countrymenGameweek = foundTeam.fantasyTeam.countrymenGameweek;
            countrymenCountryId = foundTeam.fantasyTeam.countrymenCountryId;
            prospectsGameweek = foundTeam.fantasyTeam.prospectsGameweek;
            braceBonusGameweek = foundTeam.fantasyTeam.braceBonusGameweek;
            hatTrickHeroGameweek = foundTeam.fantasyTeam.hatTrickHeroGameweek;
            transferWindowGameweek = foundTeam.fantasyTeam.transferWindowGameweek;
          };

          let updatedUserFantasyTeam : T.UserFantasyTeam = {
            fantasyTeam = updatedFantasyTeam;
            history = foundTeam.history;
          };

          fantasyTeams.put(principalName, updatedUserFantasyTeam);
        };
      };
    };

    private func clearFantasyTeam(principalId : Text) : T.FantasyTeam {
      return {
        principalId = principalId;
        transfersAvailable = 3;
        bankBalance = 1200;
        playerIds = [];
        captainId = 0;
        goalGetterGameweek = 0;
        goalGetterPlayerId = 0;
        passMasterGameweek = 0;
        passMasterPlayerId = 0;
        noEntryGameweek = 0;
        noEntryPlayerId = 0;
        teamBoostGameweek = 0;
        teamBoostTeamId = 0;
        safeHandsGameweek = 0;
        safeHandsPlayerId = 0;
        captainFantasticGameweek = 0;
        captainFantasticPlayerId = 0;
        countrymenGameweek = 0;
        countrymenCountryId = 0;
        prospectsGameweek = 0;
        braceBonusGameweek = 0;
        hatTrickHeroGameweek = 0;
        teamName = "";
        favouriteTeamId = 0;
        transferWindowGameweek = 0;
      };
    };

    

    public func getWeeklyLeaderboardEntry(managerId : Text, seasonId : T.SeasonId, gameweek : T.GameweekNumber) : ?T.LeaderboardEntry {

      for ((seasonId, seasonLeaderboards) in seasonLeaderboards.entries()) {
        if (seasonId == seasonId) {
          let weeklyLeaderboard = List.find<T.Leaderboard>(
            seasonLeaderboards.gameweekLeaderboards,
            func(gameweekLeaderboard : T.Leaderboard) : Bool {
              return gameweekLeaderboard.gameweek == gameweek;
            },
          );
          switch (weeklyLeaderboard) {
            case (null) {};
            case (?foundWeeklyLeaderboard) {

              return List.find<T.LeaderboardEntry>(
                foundWeeklyLeaderboard.entries,
                func(entry : T.LeaderboardEntry) : Bool {
                  return entry.principalId == managerId;
                },
              );
            };
          };
        };
      };

      return null;
    };

    public func getMonthlyLeaderboardEntry(managerId : Text, seasonId : T.SeasonId, clubId : T.TeamId) : ?T.LeaderboardEntry {

      for ((seasonId, clubLeaderboards) in monthlyLeaderboards.entries()) {
        if (seasonId == seasonId) {

          let clubLeaderboard = List.find<T.ClubLeaderboard>(
            clubLeaderboards,
            func(leaderboard : T.ClubLeaderboard) : Bool {
              return leaderboard.clubId == clubId;
            },
          );

          switch (clubLeaderboard) {
            case (null) {};
            case (?foundClubLeaderboard) {
              return List.find<T.LeaderboardEntry>(
                foundClubLeaderboard.entries,
                func(entry : T.LeaderboardEntry) : Bool {
                  return entry.principalId == managerId;
                },
              );
            };
          };
        };
      };

      return null;
    };

    public func getSeasonLeaderboardEntry(managerId : Text, seasonId : T.SeasonId) : ?T.LeaderboardEntry {

      for ((seasonId, seasonLeaderboards) in seasonLeaderboards.entries()) {
        if (seasonId == seasonId) {
          return List.find<T.LeaderboardEntry>(
            seasonLeaderboards.seasonLeaderboard.entries,
            func(entry : T.LeaderboardEntry) : Bool {
              return entry.principalId == managerId;
            },
          );
        };
      };

      return null;
    };





    public func getTeamValueInfo() : async [Text] {
      let allPlayers = await getPlayers();
      let teamDetailsBuffer = Buffer.fromArray<Text>([]);
      for (fantasyTeam in fantasyTeams.entries()) {

        let currentTeam : T.UserFantasyTeam = fantasyTeam.1;
        var allTeamPlayers : [DTOs.PlayerDTO] = [];
        let allTeamPlayersBuffer = Buffer.fromArray<DTOs.PlayerDTO>([]);
        for (playerId in Iter.fromArray(currentTeam.fantasyTeam.playerIds)) {
          let player = Array.find<DTOs.PlayerDTO>(
            allPlayers,
            func(player : DTOs.PlayerDTO) : Bool {
              return player.id == playerId;
            },
          );
          switch (player) {
            case (null) {};
            case (?foundPlayer) {
              allTeamPlayersBuffer.add(foundPlayer);
            };
          };
        };

        allTeamPlayers := Buffer.toArray(allTeamPlayersBuffer);
        let allPlayerValues = Array.map<DTOs.PlayerDTO, Nat>(allTeamPlayers, func(player : DTOs.PlayerDTO) : Nat { return player.value });
        let totalTeamValue = Array.foldLeft<Nat, Nat>(allPlayerValues, 0, func(sumSoFar, x) = sumSoFar + x);

        teamDetailsBuffer.add(currentTeam.fantasyTeam.principalId # " - " # Nat.toText(totalTeamValue));
      };
      return Buffer.toArray(teamDetailsBuffer);
    };

    public func updateTeamValueInfo() : async () {
      let updatedFantasyTeams : HashMap.HashMap<Text, T.UserFantasyTeam> = HashMap.HashMap<Text, T.UserFantasyTeam>(100, Text.equal, Text.hash);
      let allPlayers = await getPlayers();
      for (fantasyTeam in fantasyTeams.entries()) {

        let currentTeam : T.UserFantasyTeam = fantasyTeam.1;
        var allTeamPlayers : [DTOs.PlayerDTO] = [];
        let allTeamPlayersBuffer = Buffer.fromArray<DTOs.PlayerDTO>([]);
        for (playerId in Iter.fromArray(currentTeam.fantasyTeam.playerIds)) {
          let player = Array.find<DTOs.PlayerDTO>(
            allPlayers,
            func(player : DTOs.PlayerDTO) : Bool {
              return player.id == playerId;
            },
          );
          switch (player) {
            case (null) {};
            case (?foundPlayer) {
              allTeamPlayersBuffer.add(foundPlayer);
            };
          };
        };

        allTeamPlayers := Buffer.toArray(allTeamPlayersBuffer);
        let allPlayerValues = Array.map<DTOs.PlayerDTO, Nat>(allTeamPlayers, func(player : DTOs.PlayerDTO) : Nat { return player.value });
        let totalTeamValue = Array.foldLeft<Nat, Nat>(allPlayerValues, 0, func(sumSoFar, x) = sumSoFar + x);

        let ut : T.FantasyTeam = {
          principalId = currentTeam.fantasyTeam.principalId;
          favouriteTeamId = currentTeam.fantasyTeam.favouriteTeamId;
          teamName = currentTeam.fantasyTeam.teamName;
          transfersAvailable = currentTeam.fantasyTeam.transfersAvailable;
          bankBalance = Nat.sub(1200, totalTeamValue);
          playerIds = currentTeam.fantasyTeam.playerIds;
          captainId = currentTeam.fantasyTeam.captainId;
          goalGetterGameweek = currentTeam.fantasyTeam.goalGetterGameweek;
          goalGetterPlayerId = currentTeam.fantasyTeam.goalGetterPlayerId;
          passMasterGameweek = currentTeam.fantasyTeam.passMasterGameweek;
          passMasterPlayerId = currentTeam.fantasyTeam.passMasterPlayerId;
          noEntryGameweek = currentTeam.fantasyTeam.noEntryGameweek;
          noEntryPlayerId = currentTeam.fantasyTeam.noEntryPlayerId;
          teamBoostGameweek = currentTeam.fantasyTeam.teamBoostGameweek;
          teamBoostTeamId = currentTeam.fantasyTeam.teamBoostTeamId;
          safeHandsGameweek = currentTeam.fantasyTeam.safeHandsGameweek;
          safeHandsPlayerId = currentTeam.fantasyTeam.safeHandsPlayerId;
          captainFantasticGameweek = currentTeam.fantasyTeam.captainFantasticGameweek;
          captainFantasticPlayerId = currentTeam.fantasyTeam.captainFantasticPlayerId;
          countrymenGameweek = currentTeam.fantasyTeam.countrymenGameweek;
          countrymenCountryId = currentTeam.fantasyTeam.countrymenCountryId;
          prospectsGameweek = currentTeam.fantasyTeam.prospectsGameweek;
          braceBonusGameweek = currentTeam.fantasyTeam.braceBonusGameweek;
          hatTrickHeroGameweek = currentTeam.fantasyTeam.hatTrickHeroGameweek;
          transferWindowGameweek = currentTeam.fantasyTeam.transferWindowGameweek;
        };

        let updatedFantasyteam : T.UserFantasyTeam = {
          fantasyTeam = ut;
          history = currentTeam.history;
        };
        updatedFantasyTeams.put(fantasyTeam.0, updatedFantasyteam);

      };
      fantasyTeams := updatedFantasyTeams;
    };
  };









    */

public func updateProfilePicture(principalName : Text, profilePicture : Blob) : Result.Result<(), T.Error> {
      let existingProfile = userProfiles.get(principalName);
      switch (existingProfile) {
        case (null) {
          return #err(#NotFound);
        };
        case (?foundProfile) {
          userProfilePictures.put(principalName, profilePicture);

          /*
          let updatedProfile : T.Profile = {
            principalName = foundProfile.principalName;
            displayName = foundProfile.displayName;
            termsAccepted = foundProfile.termsAccepted;
            profilePictureCanisterId = canisterId;
            favouriteTeamId = foundProfile.favouriteTeamId;
            createDate = foundProfile.createDate;
          };
          */

          userProfilePictures.put(principalName, profilePicture);
          return #ok(());
        };
      };
    };



    
    public func setData(stable_profiles : [(Text, T.Profile)]) {
      userProfiles := HashMap.fromIter<Text, T.Profile>(
        stable_profiles.vals(),
        stable_profiles.size(),
        Text.equal,
        Text.hash,
      );
    };

    public func getProfiles() : [(Text, T.Profile)] {
      return Iter.toArray(userProfiles.entries());
    };

    public func getProfile(principalName : Text) : ?T.Profile {
      return userProfiles.get(principalName);
    };

    public func getProfilePicture(principalName : Text) : ?Blob {
      return userProfilePictures.get(principalName);
    };

    public func isWalletValid(walletAddress : Text) : Bool {
      let account_id = Account.decode(walletAddress);
      switch account_id {
        case (#ok array) {
          if (Account.validateAccountIdentifier(Blob.fromArray(array))) {
            return true;
          };
        };
        case (#err err) {
          return false;
        };
      };

      return false;
    };

    public func createProfile(principalName : Text, displayName : Text) : () {
      if (userProfiles.get(principalName) == null) {
        let newProfile : T.Profile = {
          principalName = principalName;
          displayName = displayName;
          profilePictureCanisterId = "";
          termsAccepted = false;
          favouriteTeamId = 0;
          createDate = now();
        };

        userProfiles.put(principalName, newProfile);
      };
    };

    public func isDisplayNameValid(displayName : Text) : Bool {

      if (Text.size(displayName) < 3 or Text.size(displayName) > 20) {
        return false;
      };

      let isAlphanumeric = func(s : Text) : Bool {
        let chars = Text.toIter(s);
        for (c in chars) {
          if (not ((c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z') or (c >= '0' and c <= '9') or (c == ' '))) {
            return false;
          };
        };
        return true;
      };

      if (not isAlphanumeric(displayName)) {
        return false;
      };

      for (profile in userProfiles.vals()) {
        if (profile.displayName == displayName) {
          return false;
        };
      };

      return true;
    };

    public func updateDisplayName(principalName : Text, displayName : Text) : Result.Result<(), T.Error> {
      let existingProfile = userProfiles.get(principalName);
      switch (existingProfile) {
        case (null) {
          return #err(#NotFound);
        };
        case (?existingProfile) {
          if (existingProfile.displayName == displayName) {
            return #ok(());
          };
          let nameValid = isDisplayNameValid(displayName);
          if (not nameValid) {
            return #err(#NotAllowed);
          };

          let updatedProfile : T.Profile = {
            principalName = existingProfile.principalName;
            displayName = displayName;
            profilePictureCanisterId = existingProfile.profilePictureCanisterId;
            termsAccepted = existingProfile.termsAccepted;
            favouriteTeamId = existingProfile.favouriteTeamId;
            createDate = existingProfile.createDate;
          };

          userProfiles.put(principalName, updatedProfile);

          return #ok(());
        };
      };
    };

    public func updateFavouriteTeam(principalName : Text, favouriteTeamId : Nat16) : Result.Result<(), T.Error> {
      let existingProfile = userProfiles.get(principalName);
      switch (existingProfile) {
        case (null) {
          return #err(#NotFound);
        };
        case (?existingProfile) {
          let updatedProfile : T.Profile = {
            principalName = existingProfile.principalName;
            displayName = existingProfile.displayName;
            profilePictureCanisterId = existingProfile.profilePictureCanisterId;
            termsAccepted = existingProfile.termsAccepted;
            favouriteTeamId = favouriteTeamId;
            createDate = existingProfile.createDate;
          };

          userProfiles.put(principalName, updatedProfile);
          return #ok(());
        };
      };
    };

    

  };
};
