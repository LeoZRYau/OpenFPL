import List "mo:base/List";
import Result "mo:base/Result";
import T "types";
import DTOs "DTOs";
import Array "mo:base/Array";
import Order "mo:base/Order";
import Nat16 "mo:base/Nat16";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Char "mo:base/Char";
import Nat8 "mo:base/Nat8";
import Timer "mo:base/Timer";
import Int "mo:base/Int";
import Debug "mo:base/Debug";

module {

  public class Seasons() {


    public func setSeasons(stable_seasons : [T.Season]) {
      if (stable_seasons == []) {
        return;
      };
      seasons := List.fromArray(stable_seasons);
    };

    public func getSeasons() : [T.Season] {
      List.toArray(seasons);
    };

    public func getSeasonFixtures(seasonId : Nat16) : [T.Fixture] {

      var seasonFixtures = List.nil<T.Fixture>();

      let foundSeason = List.find<T.Season>(
        seasons,
        func(season : T.Season) : Bool {
          return season.id == seasonId;
        },
      );

      switch (foundSeason) {
        case (null) { return [] };
        case (?season) {
          for (gameweek in List.toIter(season.gameweeks)) {
            seasonFixtures := List.append(seasonFixtures, gameweek.fixtures);
          };
        };
      };

      let sortedArray = Array.sort(
        List.toArray(seasonFixtures),
        func(a : T.Fixture, b : T.Fixture) : Order.Order {
          if (a.kickOff < b.kickOff) { return #less };
          if (a.kickOff == b.kickOff) { return #equal };
          return #greater;
        },
      );
      let sortedFixtures = List.fromArray(sortedArray);
      return sortedArray;
    };

    public func getGameweekFixtures(seasonId : Nat16, gameweekNumber : Nat8) : [T.Fixture] {

      let foundSeason = List.find<T.Season>(
        seasons,
        func(season : T.Season) : Bool {
          return season.id == seasonId;
        },
      );

      switch (foundSeason) {
        case (null) { return [] };
        case (?season) {
          let foundGameweek = List.find<T.Gameweek>(
            season.gameweeks,
            func(gameweek : T.Gameweek) : Bool {
              return gameweek.number == gameweekNumber;
            },
          );
          switch (foundGameweek) {
            case (null) { return [] };
            case (?g) {
              let sortedArray = Array.sort(
                List.toArray(g.fixtures),
                func(a : T.Fixture, b : T.Fixture) : Order.Order {
                  if (a.kickOff < b.kickOff) { return #less };
                  if (a.kickOff == b.kickOff) { return #equal };
                  return #greater;
                },
              );
              let sortedFixtures = List.fromArray(sortedArray);
              return sortedArray;
            };
          };
        };
      };
    };

    public func getNextSeasonId() : Nat16 {
      return nextSeasonId;
    };

    public func getNextFixtureId() : Nat32 {
      return nextFixtureId;
    };

    public func setNextSeasonId(stable_next_season_id : Nat16) : () {
      nextSeasonId := stable_next_season_id;
    };

    public func setNextFixtureId(stable_next_fixture_id : Nat32) : () {
      nextFixtureId := stable_next_fixture_id;
    };

    public func createNewSeason(activeSeasonId : Nat16) : async () {
      let activeSeason = List.find<T.Season>(
        seasons,
        func(season : T.Season) : Bool {
          return season.id == activeSeasonId;
        },
      );

      var newSeasonsList = List.nil<T.Season>();
      switch (activeSeason) {
        case (null) {};
        case (?season) {
          let newYear = season.year + 1;
          let gameweeks : [T.Gameweek] = Array.tabulate<T.Gameweek>(
            38,
            func(index : Nat) : T.Gameweek {
              return {
                number = Nat8.fromNat(index + 1);
                canisterId = "";
                fixtures = List.nil<T.Fixture>();
              };
            },
          );

          let newSeason : T.Season = {
            id = nextSeasonId;
            name = Nat16.toText(newYear) # subText(Nat16.toText(newYear + 1), 2, 3);
            year = newYear;
            gameweeks = List.nil();
            postponedFixtures = List.nil();
          };

          newSeasonsList := List.push(newSeason, newSeasonsList);
          seasons := List.append(seasons, newSeasonsList);
          nextSeasonId += 1;
        };
      };
    };

    public func getSeason(seasonId : Nat16) : T.Season {
      let season = List.find<T.Season>(
        seasons,
        func(season : T.Season) : Bool {
          return season.id == seasonId;
        },
      );
      switch (season) {
        case (null) {
          return {
            gameweeks = List.nil<T.Gameweek>();
            id = 0;
            name = "";
            postponedFixtures = List.nil<T.Fixture>();
            year = 0;
          };
        };
        case (?foundSeason) {
          return {
            id = foundSeason.id;
            name = foundSeason.name;
            year = foundSeason.year;
            gameweeks = List.nil<T.Gameweek>();
            postponedFixtures = List.nil<T.Fixture>();
          };
        };
      };
    };

    public func getFixture(seasonId : T.SeasonId, gameweekNumber : T.GameweekNumber, fixtureId : T.FixtureId) : async T.Fixture {
      let emptyFixture : T.Fixture = {
        id = 0;
        seasonId = 0;
        gameweek = 0;
        kickOff = 0;
        homeTeamId = 0;
        awayTeamId = 0;
        homeGoals = 0;
        awayGoals = 0;
        status = 0;
        events = List.nil();
        highestScoringPlayerId = 0;
      };

      let season = List.find<T.Season>(
        seasons,
        func(season : T.Season) : Bool {
          return season.id == seasonId;
        },
      );
      switch (season) {
        case (null) { return emptyFixture };
        case (?foundSeason) {
          let gameweek = List.find<T.Gameweek>(
            foundSeason.gameweeks,
            func(gameweek : T.Gameweek) : Bool {
              return gameweek.number == gameweekNumber;
            },
          );

          switch (gameweek) {
            case (null) { return emptyFixture };
            case (?foundGameweek) {
              let fixture = List.find<T.Fixture>(
                foundGameweek.fixtures,
                func(fixture : T.Fixture) : Bool {
                  return fixture.id == fixtureId;
                },
              );
              switch (fixture) {
                case (null) { return emptyFixture };
                case (?foundFixture) { return foundFixture };
              };
            };
          };
        };
      };
    };

    public func updateStatus(seasonId : Nat16, gameweek : Nat8, fixtureId : Nat32, status : Nat8) : async T.Fixture {

      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(season : T.Season) : T.Season {
          if (season.id == seasonId) {

            let updatedGameweeks = List.map<T.Gameweek, T.Gameweek>(
              season.gameweeks,
              func(gw : T.Gameweek) : T.Gameweek {
                if (gw.number == gameweek) {
                  let updatedFixtures = List.map<T.Fixture, T.Fixture>(
                    gw.fixtures,
                    func(fixture : T.Fixture) : T.Fixture {
                      if (fixture.id == fixtureId) {
                        return {
                          id = fixture.id;
                          seasonId = fixture.seasonId;
                          gameweek = fixture.gameweek;
                          kickOff = fixture.kickOff;
                          homeTeamId = fixture.homeTeamId;
                          awayTeamId = fixture.awayTeamId;
                          homeGoals = fixture.homeGoals;
                          awayGoals = fixture.awayGoals;
                          status = status;
                          events = fixture.events;
                          highestScoringPlayerId = fixture.highestScoringPlayerId;
                        };
                      } else {
                        return fixture;
                      };
                    },
                  );
                  return {
                    number = gw.number;
                    canisterId = gw.canisterId;
                    fixtures = updatedFixtures;
                  };
                } else {
                  return gw;
                };
              },
            );

            return {
              id = season.id;
              name = season.name;
              year = season.year;
              gameweeks = updatedGameweeks;
              postponedFixtures = season.postponedFixtures;
            };
          } else {
            return season;
          };
        },
      );

      let modifiedSeason = List.find<T.Season>(
        seasons,
        func(s : T.Season) : Bool {
          return s.id == seasonId;
        },
      );

      switch (modifiedSeason) {
        case (null) {
          return {
            id = 0;
            seasonId = 0;
            gameweek = 0;
            kickOff = 0;
            awayTeamId = 0;
            homeTeamId = 0;
            homeGoals = 0;
            awayGoals = 0;
            status = 0;
            events = List.nil<T.PlayerEventData>();
            highestScoringPlayerId = 0;
          };
        };
        case (?s) {
          let modifiedGameweek = List.find<T.Gameweek>(
            s.gameweeks,
            func(gw : T.Gameweek) : Bool {
              return gw.number == gameweek;
            },
          );

          switch (modifiedGameweek) {
            case (null) {
              return {
                id = 0;
                seasonId = 0;
                gameweek = 0;
                kickOff = 0;
                awayTeamId = 0;
                homeTeamId = 0;
                homeGoals = 0;
                awayGoals = 0;
                status = 0;
                events = List.nil<T.PlayerEventData>();
                highestScoringPlayerId = 0;
              };
            };
            case (?gw) {
              let modifiedFixture = List.find<T.Fixture>(
                gw.fixtures,
                func(f : T.Fixture) : Bool {
                  return f.id == fixtureId;
                },
              );

              switch (modifiedFixture) {
                case (null) {
                  return {
                    id = 0;
                    seasonId = 0;
                    gameweek = 0;
                    kickOff = 0;
                    awayTeamId = 0;
                    homeTeamId = 0;
                    homeGoals = 0;
                    awayGoals = 0;
                    status = 0;
                    events = List.nil<T.PlayerEventData>();
                    highestScoringPlayerId = 0;
                  };
                };
                case (?f) { return f };
              };
            };
          };
        };
      };
    };

    public func savePlayerEventData(seasonId : Nat16, gameweek : Nat8, fixtureId : Nat32, playerEventData : List.List<T.PlayerEventData>) : async T.Fixture {

      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(season : T.Season) : T.Season {
          if (season.id == seasonId) {
            let updatedGameweeks = List.map<T.Gameweek, T.Gameweek>(
              season.gameweeks,
              func(gw : T.Gameweek) : T.Gameweek {
                if (gw.number == gameweek) {
                  let updatedFixtures = List.map<T.Fixture, T.Fixture>(
                    gw.fixtures,
                    func(fixture : T.Fixture) : T.Fixture {
                      if (fixture.id == fixtureId) {
                        return {
                          id = fixture.id;
                          seasonId = fixture.seasonId;
                          gameweek = fixture.gameweek;
                          kickOff = fixture.kickOff;
                          homeTeamId = fixture.homeTeamId;
                          awayTeamId = fixture.awayTeamId;
                          homeGoals = fixture.homeGoals;
                          awayGoals = fixture.awayGoals;
                          status = 3;
                          events = playerEventData;
                          highestScoringPlayerId = fixture.highestScoringPlayerId;
                        };
                      } else {
                        return fixture;
                      };
                    },
                  );
                  return {
                    number = gw.number;
                    canisterId = gw.canisterId;
                    fixtures = updatedFixtures;
                  };
                } else {
                  return gw;
                };
              },
            );
            return {
              id = season.id;
              name = season.name;
              year = season.year;
              gameweeks = updatedGameweeks;
              postponedFixtures = season.postponedFixtures;
            };
          } else {
            return season;
          };
        },
      );

      let modifiedSeason = List.find<T.Season>(
        seasons,
        func(s : T.Season) : Bool {
          return s.id == seasonId;
        },
      );

      switch (modifiedSeason) {
        case (null) {
          return {
            id = 0;
            seasonId = 0;
            gameweek = 0;
            kickOff = 0;
            awayTeamId = 0;
            homeTeamId = 0;
            homeGoals = 0;
            awayGoals = 0;
            status = 0;
            events = List.nil<T.PlayerEventData>();
            highestScoringPlayerId = 0;
          };
        };
        case (?s) {
          let modifiedGameweek = List.find<T.Gameweek>(
            s.gameweeks,
            func(gw : T.Gameweek) : Bool {
              return gw.number == gameweek;
            },
          );

          switch (modifiedGameweek) {
            case (null) {
              return {
                id = 0;
                seasonId = 0;
                gameweek = 0;
                kickOff = 0;
                awayTeamId = 0;
                homeTeamId = 0;
                homeGoals = 0;
                awayGoals = 0;
                status = 0;
                events = List.nil<T.PlayerEventData>();
                highestScoringPlayerId = 0;
              };
            };
            case (?gw) {
              let modifiedFixture = List.find<T.Fixture>(
                gw.fixtures,
                func(f : T.Fixture) : Bool {
                  return f.id == fixtureId;
                },
              );

              switch (modifiedFixture) {
                case (null) {
                  return {
                    id = 0;
                    seasonId = 0;
                    gameweek = 0;
                    kickOff = 0;
                    awayTeamId = 0;
                    homeTeamId = 0;
                    homeGoals = 0;
                    awayGoals = 0;
                    status = 0;
                    events = List.nil<T.PlayerEventData>();
                    highestScoringPlayerId = 0;
                  };
                };
                case (?f) { return f };
              };
            };
          };
        };
      };
    };

    public func updateHighestPlayerId(seasonId : Nat16, gameweek : Nat8, updatedFixture : T.Fixture) : async () {
      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(season : T.Season) : T.Season {
          if (season.id == seasonId) {
            let updatedGameweeks = List.map<T.Gameweek, T.Gameweek>(
              season.gameweeks,
              func(gw : T.Gameweek) : T.Gameweek {
                if (gw.number == gameweek) {
                  let updatedFixtures = List.map<T.Fixture, T.Fixture>(
                    gw.fixtures,
                    func(fixture : T.Fixture) : T.Fixture {
                      if (fixture.id == updatedFixture.id) {
                        return updatedFixture;
                      } else { return fixture };
                    },
                  );
                  return {
                    number = gw.number;
                    canisterId = gw.canisterId;
                    fixtures = updatedFixtures;
                  };
                } else {
                  return gw;
                };
              },
            );
            return {
              id = season.id;
              name = season.name;
              year = season.year;
              gameweeks = updatedGameweeks;
              postponedFixtures = season.postponedFixtures;
            };
          } else {
            return season;
          };
        },
      );
    };

    private func subText(value : Text, indexStart : Nat, indexEnd : Nat) : Text {
      if (indexStart == 0 and indexEnd >= value.size()) {
        return value;
      } else if (indexStart >= value.size()) {
        return "";
      };

      var indexEndValid = indexEnd;
      if (indexEnd > value.size()) {
        indexEndValid := value.size();
      };

      var result : Text = "";
      var iter = Iter.toArray<Char>(Text.toIter(value));
      for (index in Iter.range(indexStart, indexEndValid - 1)) {
        result := result # Char.toText(iter[index]);
      };

      return result;
    };

    public func addInitialFixtures(seasonId : T.SeasonId, fixtures : [T.Fixture]) : () {
      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(currentSeason : T.Season) : T.Season {
          if (currentSeason.id == seasonId) {

            var seasonGameweeks = List.nil<T.Gameweek>();

            for (i in Iter.range(1, 38)) {
              let fixturesForCurrentGameweek = Array.filter<T.Fixture>(
                fixtures,
                func(fixture : T.Fixture) : Bool {
                  return Nat8.fromNat(i) == fixture.gameweek;
                },
              );

              let newGameweek : T.Gameweek = {
                id = i;
                number = Nat8.fromNat(i);
                canisterId = "";
                fixtures = List.fromArray(fixturesForCurrentGameweek);
              };

              seasonGameweeks := List.push(newGameweek, seasonGameweeks);
            };

            return {
              id = currentSeason.id;
              name = currentSeason.name;
              year = currentSeason.year;
              gameweeks = seasonGameweeks;
              postponedFixtures = currentSeason.postponedFixtures;
            };
          } else { return currentSeason };
        },
      );
    };

    /*Remove these functions post sns*/

    public func updateFixture(updatedFixture : DTOs.UpdateFixtureDTO) : async () {
      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(season : T.Season) : T.Season {
          if (season.id == updatedFixture.seasonId) {
            let updatedGameweeks = List.map<T.Gameweek, T.Gameweek>(
              season.gameweeks,
              func(gw : T.Gameweek) : T.Gameweek {
                if (gw.number == updatedFixture.gameweek) {
                  let updatedFixtures = List.map<T.Fixture, T.Fixture>(
                    gw.fixtures,
                    func(fixture : T.Fixture) : T.Fixture {
                      if (fixture.id == updatedFixture.fixtureId) {
                        return {
                          id = fixture.id;
                          seasonId = fixture.seasonId;
                          gameweek = updatedFixture.gameweek;
                          kickOff = updatedFixture.kickOff;
                          homeTeamId = fixture.homeTeamId;
                          awayTeamId = fixture.awayTeamId;
                          homeGoals = fixture.homeGoals;
                          awayGoals = fixture.awayGoals;
                          status = updatedFixture.status;
                          events = fixture.events;
                          highestScoringPlayerId = fixture.highestScoringPlayerId;
                        };
                      } else {
                        return fixture;
                      };
                    },
                  );
                  return {
                    number = gw.number;
                    canisterId = gw.canisterId;
                    fixtures = updatedFixtures;
                  };
                } else {
                  return gw;
                };
              },
            );

            return {
              id = season.id;
              name = season.name;
              year = season.year;
              gameweeks = updatedGameweeks;
              postponedFixtures = season.postponedFixtures;
            };
          } else {
            return season;
          };
        },
      );
    };

    public func postPoneFixtuure() {
      seasons := List.map<T.Season, T.Season>(
        seasons,
        func(season : T.Season) : T.Season {
          if (season.id == 1) {
            return {
              id = season.id;
              name = season.name;
              year = season.year;
              gameweeks = List.map<T.Gameweek, T.Gameweek>(
                season.gameweeks,
                func(gameweek : T.Gameweek) : T.Gameweek {
                  switch (gameweek.number) {
                    case 17 {
                      return {
                        number = gameweek.number;
                        canisterId = gameweek.canisterId;
                        fixtures = List.filter<T.Fixture>(
                          gameweek.fixtures,
                          func(fixture : T.Fixture) : Bool {
                            return fixture.id != 161;
                          },
                        );
                      };
                    };
                    case _ {
                      return gameweek;
                    };
                  };
                },
              );
              postponedFixtures = List.append(season.postponedFixtures, List.fromArray<T.Fixture>([{ id = 161; seasonId = 1; gameweek = 17; kickOff = 1702738800000000000; homeTeamId = 3; awayTeamId = 12; homeGoals = 0; awayGoals = 0; status = 0; events = List.nil<T.PlayerEventData>(); highestScoringPlayerId = 0 }]));
            };
          } else { return season };
        },
      );
    }

  };
};
