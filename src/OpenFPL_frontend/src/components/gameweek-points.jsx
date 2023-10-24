import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button, Spinner } from 'react-bootstrap';
import { BadgeIcon, ArrowLeft, ArrowRight } from './icons';
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import { getFantasyTeamForGameweek } from '../AuthFunctions';
import { OpenFPL_backend as open_fpl_backend } from '../../../declarations/OpenFPL_backend';
import { player_canister as player_canister } from '../../../declarations/player_canister';
import { getTeamById, CustomToggle } from './helpers';
import getFlag from './country-flag';
import GoalGetter from "../../assets/goal-getter.png";
import PassMaster from "../../assets/pass-master.png";
import NoEntry from "../../assets/no-entry.png";
import TeamBoost from "../../assets/team-boost.png";
import SafeHands from "../../assets/safe-hands.png";
import CaptainFantastic from "../../assets/captain-fantastic.png";
import BraceBonus from "../../assets/brace-bonus.png";
import HatTrickHero from "../../assets/hat-trick-hero.png";
import PlayerPointsModal from './modals/player-points-modal';

const GameweekPoints = () => {
    const { authClient, userPrincipal } = useContext(AuthContext);
    const navigate = useNavigate();
    const { seasons, fixtures, systemState, playerEvents, teams, players } = useContext(DataContext);
    
    const [isLoading, setIsLoading] = useState(true);
    const [currentGameweek, setCurrentGameweek] = useState(systemState.focusGameweek);
    
    const [currentSeason, setCurrentSeason] = useState(systemState.activeSeason);
    const [showGameweekDropdown, setShowGameweekDropdown] = useState(false);
    const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
    const gameweekDropdownRef = useRef(null);
    const seasonDropdownRef = useRef(null);
    const [fantasyTeam, setFantasyTeam] = useState({
        players: [],
    });
    const [sortedPlayers, setSortedPlayers] = useState([]);
    const positionCodes = ['GK', 'DF', 'MF', 'FW'];
    
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedPlayerDTO, setSelectedPlayerDTO] = useState(null);
    const [selectedPlayerCaptain, setSelectedPlayerCaptain] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleGameweekBlur = (e) => {
        const currentTarget = e.currentTarget;
        if (!currentTarget.contains(document.activeElement)) {
        setShowGameweekDropdown(false);
        }
    };
    
    const handleSeasonBlur = (e) => {
        const currentTarget = e.currentTarget;
        setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
            setShowSeasonDropdown(false);
        }
        }, 0);
    };

    const handleShowModal = (player, playerDTO, isCaptain) => {
      setSelectedPlayer(player);
      setSelectedPlayerDTO(playerDTO);
      setSelectedPlayerCaptain(isCaptain);
      setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setSelectedPlayer(null);
        setShowModal(false);
    }
    
    useEffect(() => {
        const fetchData = async () => {
        await fetchViewData();
        setIsLoading(false);
        };
        fetchData();
    }, [currentSeason, currentGameweek]);

    useEffect(() => {
        if (fantasyTeam && fantasyTeam.players) {
            const playersWithUpdatedScores = fantasyTeam.players.map(player => {
                const score = calculatePlayerScore(player, fixtures);
                const bonusPoints = calculateBonusPoints(player, fantasyTeam, score);
                const captainPoints = player.id == fantasyTeam.captainId ? (score + bonusPoints) : 0;
                
                return {
                    ...player,
                    points: score,
                    bonusPoints: bonusPoints,
                    totalPoints: score + bonusPoints + captainPoints
                };
            });
    
            const sortedPlayers = [...playersWithUpdatedScores].sort((a, b) => 
                Number(b.totalPoints) - Number(a.totalPoints)
            );
            
            setSortedPlayers(sortedPlayers);
        }
    }, [fantasyTeam]);
  
    const fetchViewData = async () => {
        try{
            
            const fetchedFantasyTeam = await getFantasyTeamForGameweek(authClient, userPrincipal, currentSeason.id, currentGameweek); 
            if(currentGameweek == systemState.focusGameweek){
                const detailedPlayers = playerEvents.map(player => extractPlayerData(player));
                const playersInTeam = detailedPlayers.filter(player => fetchedFantasyTeam.playerIds.includes(player.id));
            
                setFantasyTeam({
                    ...fetchedFantasyTeam,
                    players: playersInTeam,
                });
            }
            else
            {
                const detailedPlayersRaw = await player_canister.getPlayersDetailsForGameweek(fetchedFantasyTeam.playerIds, currentSeason.id, currentGameweek);    
                const detailedPlayers = detailedPlayersRaw.map(player => extractPlayerData(player));
                setFantasyTeam({
                    ...fetchedFantasyTeam,
                    players: detailedPlayers,
                });
            }

        } catch (error){
            console.log(error);
        };
    };

    const extractPlayerData = (playerDTO) => {
        let goals = 0, assists = 0, redCards = 0, yellowCards = 0, missedPenalties = 0, ownGoals = 0, saves = 0, cleanSheets = 0, penaltySaves = 0, goalsConceded = 0, appearance = 0, highestScoringPlayerId = 0;
        let goalPoints = 0, assistPoints = 0, goalsConcededPoints = 0, cleanSheetPoints = 0;

        playerDTO.events.forEach(event => {
            switch(event.eventType) {
                case 0:
                    appearance += 1;
                    break;
                case 1:
                    goals += 1;
                    switch(playerDTO.position){
                        case 0:
                        case 1:
                            goalPoints += 20;
                            break;
                        case 2:
                            goalPoints += 15;
                            break;
                        case 3:
                            goalPoints += 10;
                            break;
                    }
                    break;
                case 2:
                    assists += 1;
                    switch(playerDTO.position){
                        case 0:
                        case 1:
                            assistPoints += 15;
                            break;
                        case 2:
                            case 3:
                            assistPoints += 10;
                            break;
                    };
                    break;
                case 3:
                    goalsConceded += 1;
                    if(playerDTO.position < 2 && goalsConceded % 2 == 0){
                        goalsConcededPoints += -15;
                    };
                    break;
                case 4:
                    saves += 1;
                    break;
                case 5:
                    cleanSheets += 1;
                    if(playerDTO.position < 2 && goalsConceded == 0){
                        cleanSheetPoints += 10;
                    };
                    break;
                case 6:
                    penaltySaves += 1;
                    break;
                case 7:
                    missedPenalties += 1;
                    break;
                case 8:
                    yellowCards += 1;
                    break;
                case 9:
                    redCards += 1;
                    break;
                case 10:
                    ownGoals += 1;
                    break;
                case 11:
                    highestScoringPlayerId += 1;
                    break;
            }
        });
    
        return {
            ...playerDTO,
            gameweekData: {
                appearance,
                goals,
                assists,
                goalsConceded,
                saves,
                cleanSheets,
                penaltySaves,
                missedPenalties,
                yellowCards,
                redCards,
                ownGoals,
                highestScoringPlayerId,
                goalPoints,
                assistPoints,
                goalsConcededPoints,
                cleanSheetPoints
            }
        };
    };

    
    const calculatePlayerScore = (playerDTO, fixtures) => {
      if (!playerDTO) {
          console.error("No gameweekData found for player:", playerDTO);
          return 0;
      }
      
      let score = 0; 

      let pointsForAppearance = 5;
      let pointsFor3Saves = 5;
      let pointsForPenaltySave = 20;
      let pointsForHighestScore = 25;
      let pointsForRedCard = -20;
      let pointsForPenaltyMiss = -10;
      let pointsForEach2Conceded = -15;
      let pointsForOwnGoal = -10;
      let pointsForYellowCard = -5;
      let pointsForCleanSheet = 10;

      var pointsForGoal = 0;
      var pointsForAssist = 0;

      if(playerDTO.gameweekData.appearance > 0){
          score += pointsForAppearance * playerDTO.gameweekData.appearance;
      }

      if (playerDTO.gameweekData.redCards > 0) {
          score += pointsForRedCard;
      }

      if (playerDTO.gameweekData.missedPenalties > 0) {
          score += pointsForPenaltyMiss * playerDTO.gameweekData.missedPenalties;
      }

      if (playerDTO.gameweekData.ownGoals > 0) {
          score += pointsForOwnGoal * playerDTO.gameweekData.ownGoals;
      }

      if (playerDTO.gameweekData.yellowCards > 0) {
          score += pointsForYellowCard * playerDTO.gameweekData.yellowCards;
      }
  
      switch(playerDTO.position){
          case 0:
              pointsForGoal = 20;
              pointsForAssist = 15;     
              
              if (playerDTO.gameweekData.saves >= 3) {
                  score += Math.floor(playerDTO.gameweekData.saves / 3) * pointsFor3Saves;
              }
              if (playerDTO.gameweekData.penaltySaves) {
                  score += pointsForPenaltySave * playerDTO.gameweekData.penaltySaves;
              }

              if (playerDTO.gameweekData.cleanSheets > 0) {
                  score += pointsForCleanSheet;
              }
              if (playerDTO.gameweekData.goalsConceded >= 2) {
                  score += Math.floor(playerDTO.gameweekData.goalsConceded / 2) * pointsForEach2Conceded;
              }

              break;
          case 1:
              pointsForGoal = 20;
              pointsForAssist = 15; 

              if (playerDTO.gameweekData.cleanSheets > 0) {
                  score += pointsForCleanSheet;
              }
              if (playerDTO.gameweekData.goalsConceded >= 2) {
                  score += Math.floor(playerDTO.gameweekData.goalsConceded / 2) * pointsForEach2Conceded;
              }

              break;
          case 2:
              pointsForGoal = 15;
              pointsForAssist = 10; 
              break;
          case 3:
              pointsForGoal = 10;
              pointsForAssist = 10; 
              break;
      };
  
      const gameweekFixtures = fixtures ? fixtures.filter(fixture => fixture.gameweek === playerDTO.gameweek) : [];
      const playerFixture = gameweekFixtures.find(fixture => 
          (fixture.homeTeamId === playerDTO.teamId || fixture.awayTeamId === playerDTO.teamId) && 
          fixture.highestScoringPlayerId === playerDTO.id
      );
      if (playerFixture) {
          score += pointsForHighestScore;
      }

      
      score += playerDTO.gameweekData.goals * pointsForGoal;

      score += playerDTO.gameweekData.assists * pointsForAssist;

      return score;
    };
  
  const calculateBonusPoints = (playerDTO, fantasyTeamDTO, points) => {
      if (!playerDTO) {
          console.error("No gameweekData found for player:", playerDTO);
          return 0;
      }
      
      let bonusPoints = 0; 
      var pointsForGoal = 0;
      var pointsForAssist = 0;
      switch(playerDTO.position){
          case 0:
              pointsForGoal = 20;
              pointsForAssist = 15;  
              break;
          case 1:
              pointsForGoal = 20;
              pointsForAssist = 15; 
              break;
          case 2:
              pointsForGoal = 15;
              pointsForAssist = 10; 
              break;
          case 3:
              pointsForGoal = 10;
              pointsForAssist = 10; 
              break;
      };

      if(fantasyTeamDTO.goalGetterGameweek === playerDTO.gameweek && fantasyTeamDTO.goalGetterPlayerId === playerDTO.id){
          bonusPoints = playerDTO.gameweekData.goals * pointsForGoal * 2;
      }

      if(fantasyTeamDTO.passMasterGameweek === playerDTO.gameweek && fantasyTeamDTO.passMasterPlayerId === playerDTO.id){
          bonusPoints = playerDTO.gameweekData.assists * pointsForAssist * 2;
      }
      
      if (fantasyTeamDTO.noEntryGameweek === playerDTO.gameweek && fantasyTeamDTO.noEntryPlayerId === playerDTO.id && 
          (playerDTO.position === 0 || playerDTO.position === 1) && playerDTO.gameweekData.cleanSheets) {
          bonusPoints = points * 2; 
      }
  
      if (fantasyTeamDTO.safeHandsGameweek === playerDTO.gameweek && playerDTO.position === 0 && playerDTO.gameweekData.saves >= 5) {
          bonusPoints = points * 2; 
      }
  
      if (fantasyTeamDTO.captainFantasticGameweek === playerDTO.gameweek && fantasyTeamDTO.captainId === playerDTO.id && playerDTO.gameweekData.goals > 0) {
          bonusPoints = points; 
      }
  
      if (fantasyTeamDTO.braceBonusGameweek === playerDTO.gameweek && playerDTO.gameweekData.goals >= 2) {
          bonusPoints = points; 
      }
  
      if (fantasyTeamDTO.hatTrickHeroGameweek === playerDTO.gameweek && playerDTO.gameweekData.goals >= 3) {
          bonusPoints = points * 2; 
      }
  
      if (fantasyTeamDTO.teamBoostGameweek === playerDTO.gameweek && playerDTO.teamId === fantasyTeamDTO.teamBoostTeamId) {
          bonusPoints = points;
      }
  
      return bonusPoints;
  };

  const handleGameweekChange = (change) => {
    setCurrentGameweek(prev => Math.min(38, Math.max(1, prev + change)));
  };
  
  const handleSeasonChange = async (change) => {
    const newIndex = seasons.findIndex(season => season.id === currentSeason.id) + change;
    if (newIndex >= 0 && newIndex < seasons.length) {
      setCurrentSeason(seasons[newIndex]);
      setCurrentGameweek(1);
      
      if (seasons[newIndex].id !== systemState.activeSeason.id) {
        const newFixtures = await fetchFixturesForSeason(seasons[newIndex].id);
        fetchGameweekPoints(newFixtures);
      } else {
        fetchGameweekPoints(null, null);
      }
    }
  };
  
  const fetchGameweekPoints = async (seasonId, gameweek) => {
    try{
      return await open_fpl_backend.getGameweekPoints(seasonId, gameweek);
    }
    catch (error){
      console.log(error);
    }
  };
  
  const openGameweekDropdown = () => {
    setShowGameweekDropdown(!showGameweekDropdown);
    setTimeout(() => {
      if (gameweekDropdownRef.current) {
        const item = gameweekDropdownRef.current.querySelector(`[data-key="${currentGameweek - 1}"]`);
        if (item) {
          item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }
    }, 0);
  };

  const openSeasonDropdown = () => {
    setShowSeasonDropdown(!showSeasonDropdown);
    setTimeout(() => {
      if (seasonDropdownRef.current) {
        const item = seasonDropdownRef.current.querySelector(`[data-key="${currentSeason.id}"]`);
        if (item) {
          item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }
    }, 0);
  };
  
  const getBonusId = () => {
    if(fantasyTeam.goalGetterGameweek === currentGameweek && 
      fantasyTeam.goalGetterPlayerId === selectedPlayer.id){
        return 1;
      };
    if(fantasyTeam.passMasterGameweek == currentGameweek && 
      fantasyTeam.passMasterPlayerId == selectedPlayer.id){
        return 2;
      };
    if(fantasyTeam.noEntryGameweek == currentGameweek && 
      fantasyTeam.noEntryPlayerId == selectedPlayer.id){
        return 3;
      };
    if(fantasyTeam.safeHandsGameweek == currentGameweek && 
      selectedPlayer.position === 0 && 
      selectedPlayerDTO.gameweekData.saves >= 5){
        return 4;
    };
    if(fantasyTeam.captainFantasticGameweek == currentGameweek && 
      fantasyTeam.captainId == selectedPlayer.id && 
      selectedPlayerDTO.gameweekData.goals > 0){
        return 5;
    }
    if(fantasyTeam.braceBonusGameweek == currentGameweek && 
      selectedPlayerDTO.gameweekData.goals >= 2){
        return 6;
    };
    if(fantasyTeam.hatTrickHeroGameweek == currentGameweek && 
      selectedPlayerDTO.gameweekData.goals >= 3){
        return 7;
    } 
    if(fantasyTeam.teamBoostGameweek == currentGameweek && 
      fantasyTeam.teamBoostTeamId == selectedPlayer.teamId){
        return 8;
    }                         
  }
  
  
  
  
  return (
      <>
        {isLoading ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Spinner animation="border" />
            <p className='text-center mt-1'>Loading Gameweek Points</p>
          </div>) 
          :
          <div className="dark-tab-row w-100 mx-0">
            <Row>
              <Col md={12}>
                <div className='filter-row'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button className="w-100 justify-content-center fpl-btn left-arrow" onClick={() => handleGameweekChange(-1)} disabled={currentGameweek === 1}>
                      <ArrowLeft />
                    </Button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div ref={gameweekDropdownRef} onBlur={handleGameweekBlur}>
                      <Dropdown show={showGameweekDropdown}>
                        <Dropdown.Toggle as={CustomToggle} id="gameweek-selector">
                          <Button className='filter-dropdown-btn' style={{ backgroundColor: 'transparent' }} onClick={() => openGameweekDropdown()}>Gameweek {currentGameweek}</Button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                          {Array.from({ length: 38 }, (_, index) => (
                            <Dropdown.Item
                              data-key={index}
                              className='dropdown-item'
                              key={index}
                              onMouseDown={() => {setCurrentGameweek(index + 1)}}
                            >
                              Gameweek {index + 1} {currentGameweek === (index + 1) ? ' ✔️' : ''}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button className="w-100 justify-content-center fpl-btn right-arrow" onClick={() => handleGameweekChange(1)} disabled={currentGameweek === 38}>
                      <ArrowRight />
                    </Button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button className="w-100 justify-content-center fpl-btn left-arrow"  onClick={() => handleSeasonChange(-1)} disabled={currentSeason.id === seasons[0].id}>
                      <ArrowLeft />
                    </Button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div ref={seasonDropdownRef} onBlur={handleSeasonBlur}>
                      <Dropdown show={showSeasonDropdown}>
                        <Dropdown.Toggle as={CustomToggle} id="season-selector">
                          <Button className='filter-dropdown-btn' style={{ backgroundColor: 'transparent' }} onClick={() => openSeasonDropdown()}>{currentSeason.name}</Button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                          
                          {seasons.map(season => 
                            <Dropdown.Item
                              data-key={season.id}
                              className='dropdown-item'
                              key={season.id}
                              onMouseDown={() => setCurrentSeason(season)}
                            >
                              {season.name} {currentSeason.id === season.id ? ' ✔️' : ''}
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button className="w-100 justify-content-center fpl-btn right-arrow"  onClick={() => handleSeasonChange(1)} disabled={currentSeason.id === seasons[seasons.length - 1].id}>
                      <ArrowRight />
                    </Button>
                  </div>
                  <div className='gw-total-points-wrapper'>
                    <label className='gw-total-points'>Total Points: {fantasyTeam.points}</label>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>

            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='light-background table-header-row w-100'  style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="gw-points-position-col gw-table-header">Pos</div>
                            <div className="gw-points-name-col gw-table-header">Player Name</div>
                            <div className="gw-points-club-col gw-table-header">Club</div>
                            <div className="gw-points-appearances-col gw-table-header">A</div>
                            <div className="gw-points-highest-scoring-col gw-table-header">HSP</div>
                            <div className="gw-points-goals-col gw-table-header">GS</div>
                            <div className="gw-points-assists-col gw-table-header">GA</div>
                            <div className="gw-points-pen-saves-col gw-table-header">PS</div>
                            <div className="gw-points-clean-sheets-col gw-table-header">CS</div>
                            <div className="gw-points-saves-col gw-table-header">KS</div>
                            <div className="gw-points-yellow-cards-col gw-table-header">YC</div>
                            <div className="gw-points-own-goals-col gw-table-header">OG</div>
                            <div className="gw-points-goals-conceded-col gw-table-header">GC</div>
                            <div className="gw-points-missed-pen-col gw-table-header">MP</div>
                            <div className="gw-points-red-card-col gw-table-header">RC</div>
                            <div className="gw-points-red-card-col gw-table-header">B</div>
                            <div className="gw-points-points-col gw-table-header">PTS</div>
                        </div>
                    </Col>  
                </Row>

              {sortedPlayers.length == 0 && <p className='px-4 mt-3'>No Gameweek Points</p>}
                
              {sortedPlayers.map(playerDTO => {
                const player = players.find(p => p.id === playerDTO.id);
                const playerTeam = getTeamById(teams, player.teamId);
                if (!playerTeam) {
                    console.error("One of the teams is missing for player: ", player);
                    return null;
                }
                    return (
                      <Row key={player.id} onClick={() => handleShowModal(player, playerDTO, player.id == fantasyTeam.captainId)}>
                        <Col xs={12}>
                        <div className="table-row clickable-table-row">
                            <div className="gw-points-position-col gw-table-col">{positionCodes[player.position]}</div>
                            <div className="gw-points-name-col gw-table-col">{getFlag(player.nationality, 'gameweek-points-flag')}{(player.firstName != "" ? player.firstName.charAt(0) + "." : "") + player.lastName}</div>
                            <div className="gw-points-club-col gw-table-col vertical-flex" >
                            <BadgeIcon
                                primary={playerTeam.primaryColourHex}
                                secondary={playerTeam.secondaryColourHex}
                                third={playerTeam.thirdColourHex}
                                className='gw-points-badge-icon'
                              />
                              {playerTeam.friendlyName}
                            </div>
                            <div className={`gw-points-appearances-col gw-table-col ${playerDTO.gameweekData.appearance === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.appearance}
                            </div>
                            <div className={`gw-points-highest-scoring-col gw-table-col ${playerDTO.gameweekData.highestScoringPlayerId === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.highestScoringPlayerId}
                            </div>
                            <div className={`gw-points-goals-col gw-table-col ${playerDTO.gameweekData.goals === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.goals}
                            </div>
                            <div className={`gw-points-assists-col gw-table-col ${playerDTO.gameweekData.assists === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.assists}
                            </div>
                            <div className={`gw-points-pen-saves-col gw-table-col ${playerDTO.gameweekData.penaltySaves === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.penaltySaves}
                            </div>
                            <div className={`gw-points-clean-sheets-col gw-table-col ${playerDTO.gameweekData.cleanSheets === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.cleanSheets}
                            </div>
                            <div className={`gw-points-saves-col gw-table-col ${playerDTO.gameweekData.saves === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.saves}
                            </div>
                            <div className={`gw-points-yellow-cards-col gw-table-col ${playerDTO.gameweekData.yellowCards === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.yellowCards}
                            </div>
                            <div className={`gw-points-own-goals-col gw-table-col ${playerDTO.gameweekData.ownGoals === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.ownGoals}
                            </div>
                            <div className={`gw-points-goals-conceded-col gw-table-col ${playerDTO.gameweekData.goalsConceded === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.goalsConceded}  
                            </div>
                            <div className={`gw-points-missed-pen-col gw-table-col ${playerDTO.gameweekData.missedPenalties === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.missedPenalties}
                            </div>
                            <div className={`gw-points-red-card-col gw-table-col ${playerDTO.gameweekData.redCards === 0 ? 'zero-text' : ''}`}>
                              {playerDTO.gameweekData.redCards}
                            </div>
                            <div className={`gw-points-bonus-col gw-table-col ${(
                                (fantasyTeam.goalGetterGameweek === currentGameweek && fantasyTeam.goalGetterPlayerId === player.id) || 
                                (fantasyTeam.passMasterGameweek == currentGameweek && fantasyTeam.passMasterPlayerId == player.id) ||
                                (fantasyTeam.noEntryGameweek == currentGameweek && fantasyTeam.noEntryPlayerId == player.id) || 
                                (fantasyTeam.safeHandsGameweek == currentGameweek && player.position === 0 && playerDTO.gameweekData.saves >= 5) ||
                                (fantasyTeam.captainFantasticGameweek == currentGameweek && fantasyTeam.captainId == player.id && playerDTO.gameweekData.goals > 0) ||
                                (fantasyTeam.braceBonusGameweek == currentGameweek && playerDTO.gameweekData.goals >= 2) ||
                                (fantasyTeam.hatTrickHeroGameweek == currentGameweek && playerDTO.gameweekData.goals >= 3) ||
                                (fantasyTeam.teamBoostGameweek == currentGameweek && fantasyTeam.teamBoostTeamId == player.teamId)) ? '' : 'zero-text'}`}>
                              {[
                                (fantasyTeam.goalGetterGameweek === currentGameweek && fantasyTeam.goalGetterPlayerId === player.id && <img src={GoalGetter} alt='goal-getter' className='gw-bonus-image'/>),
                                (fantasyTeam.passMasterGameweek == currentGameweek && fantasyTeam.passMasterPlayerId == player.id && <img src={PassMaster} alt='pass-master' className='gw-bonus-image'/>),
                                (fantasyTeam.noEntryGameweek == currentGameweek && fantasyTeam.noEntryPlayerId == player.id && <img src={NoEntry} alt='no-entry' className='gw-bonus-image'/>),
                                (fantasyTeam.safeHandsGameweek == currentGameweek && player.position === 0 && playerDTO.gameweekData.saves >= 5 && <img src={SafeHands} alt='safe-hands' className='gw-bonus-image'/>),
                                (fantasyTeam.captainFantasticGameweek == currentGameweek && fantasyTeam.captainId == player.id && playerDTO.gameweekData.goals > 0 && <img src={CaptainFantastic} alt='captain-fantastic' className='gw-bonus-image'/>),
                                (fantasyTeam.braceBonusGameweek == currentGameweek && playerDTO.gameweekData.goals >= 2 && <img src={BraceBonus} alt='brace-bonus' className='gw-bonus-image'/>),
                                (fantasyTeam.hatTrickHeroGameweek == currentGameweek && playerDTO.gameweekData.goals >= 3 && <img src={HatTrickHero} alt='hat-trick-hero' className='gw-bonus-image'/>),
                                (fantasyTeam.teamBoostGameweek == currentGameweek && fantasyTeam.teamBoostTeamId == player.teamId && <img src={TeamBoost} alt='team-boost' className='gw-bonus-image'/>)
                                ].some(Boolean) || '-'}
                            </div>
                            <div className="gw-points-points-col gw-table-col">{playerDTO.totalPoints}</div>
                        </div>
                        </Col>
                        </Row>
                    );
                })}
                

                </Container>
                
                {selectedPlayer && selectedPlayerDTO && <PlayerPointsModal show={showModal} onClose={handleCloseModal} player={selectedPlayer} playerDTO={selectedPlayerDTO} gameweek={currentGameweek} isCaptain={selectedPlayerCaptain} bonusId={getBonusId()} team={getTeamById(teams, selectedPlayer.teamId)} season={currentSeason} />}
    
            </Row>
          </div>
      }
      </>
  );
};

export default GameweekPoints;
