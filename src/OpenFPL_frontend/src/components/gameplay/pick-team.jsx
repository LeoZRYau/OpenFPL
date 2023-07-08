import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { StarOutlineIcon } from '../icons';
import { OpenFPL_backend as open_fpl_backend } from '../../../../declarations/OpenFPL_backend';
import { AuthContext } from "../../contexts/AuthContext";
import { Actor } from "@dfinity/agent";
import PlayerSlot from './player-slot';
import Fixtures from './fixtures';
import SelectPlayerModal from './select-player-modal';


const PickTeam = () => {
  const { authClient } = useContext(AuthContext);  
  const [isLoading, setIsLoading] = useState(true);

  const [fantasyTeam, setFantasyTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [bonuses, setBonuses] = useState([
    {id: 1, name: 'Goal Getter'},
    {id: 2, name: 'Pass Master'},
    {id: 3, name: 'No Entry'},
    {id: 4, name: 'Team Boost'},
    {id: 5, name: 'Safe Hands'},
    {id: 6, name: 'Captain Fantastic'},
    {id: 7, name: 'Brace Bonus'},
    {id: 8, name: 'Hat Trick Hero'}
  ]); 
  const [showSelectPlayerModal, setShowSelectPlayerModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      await fetchViewData();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const fetchViewData = async () => {
    const identity = authClient.getIdentity();
    Actor.agentOf(open_fpl_backend).replaceIdentity(identity);

    const teamsData = await open_fpl_backend.getTeams();
    setTeams(teamsData);

    const fantasyTeamData = await open_fpl_backend.getFantasyTeam();
    setFantasyTeam(fantasyTeamData);
  };
  
  const handlePlayerSelection = (slotNumber) => {
    setSelectedSlot(slotNumber);
    setShowSelectPlayerModal(true);
  };

  const handlePlayerConfirm = (player) => {
    setFantasyTeam(prevFantasyTeam => {
      const updatedFantasyTeam = {...prevFantasyTeam};
      updatedFantasyTeam.players[selectedSlot] = player;
      return updatedFantasyTeam;
    });
    setShowSelectPlayerModal(false);
  };
  
  
  const handleBonusClick = (bonusId) => {
    console.log(`Bonus ${bonusId} was clicked`);
  }
  
  const renderPlayerSlots = (playerArray) => {
    let rows = [];
    let cols = [];
  
    for (let i = 0; i < playerArray.length; i++) {
      cols.push(
        <PlayerSlot 
          key={i} 
          player={playerArray[i]} 
          slotNumber={i} 
          handlePlayerSelection={handlePlayerSelection} 
        />
      );
  
      if (cols.length === 3 || i === playerArray.length - 1) {
        rows.push(<Row className='player-container' key={i}>{cols}</Row>);
        cols = [];
      }
    }
    
    // Add Save button as 12th tile
    cols.push(
      <Col className="d-flex justify-content-center align-items-center">
        <Button variant="primary" onClick={handleSaveTeam}>Save</Button>
      </Col>
    );
    
    rows.push(<Row className='player-container' key={playerArray.length}>{cols}</Row>);
  
    return rows;
  }

  const calculateTeamValue = () => {
    if(fantasyTeam && fantasyTeam.players) {
      const totalValue = fantasyTeam.players.reduce((acc, player) => acc + player.value, 0);
      return (totalValue / 10).toFixed(1);
    }
    return null;
  }

  const handleSaveTeam = async () => {
    setIsLoading(true);
    try {
      const playerIds = fantasyTeam.players.map(player => player.id);

      const identity = authClient.getIdentity();
      Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
      await open_fpl_backend.saveFantasyTeam(playerIds);
      
      setIsLoading(false);
  
    } catch(error) {
      console.error("Failed to save team", error);
      setIsLoading(false);
    }
  };
  

  return (
    isLoading ? (
      <div className="customOverlay d-flex flex-column align-items-center justify-content-center">
        <Spinner animation="border" />
        <p className='text-center mt-1'>Loading Team</p>
      </div>) :
      <Container className="flex-grow-1 my-5 pitch-bg mt-0">
        <Row className="mb-4">
          <Col md={9}>
            <Card className="mt-4">
              <Card.Header>
                <Row className="justify-content-between align-items-center">
                  <Col xs={12} md={6}>
                    Team Selection
                  </Col>
                  <Col xs={12} md={6}>
                    <Card className="p-2">
                      <Row className='align-items-center text-center small-text'>
                        <Col xs={12} md={4}>
                            <small>Team Value: £{calculateTeamValue()}m</small>
                        </Col>
                        <Col xs={12} md={4}>
                          <small>Bank: £{(fantasyTeam ? fantasyTeam.bank / 10 : 0).toFixed(1)}m</small>
                        </Col>
                        <Col xs={12} md={4}>
                          <small>Transfers Available: {fantasyTeam ? fantasyTeam.transfersAvailable : 0}</small>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <div className='d-flex align-items-center mb-3'>
                  <StarOutlineIcon color="#807A00" width="15" height="15" />
                  <p style={{marginLeft: '1rem'}} className='mb-0'>Make a player your captain by selecting their star icon to receive double points for that player in the next gameweek.</p>
                </div>
                <Row>
                  {renderPlayerSlots(fantasyTeam.players)}
                </Row>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Header>Bonuses</Card.Header>
              <Card.Body>
                <Row>
                  {bonuses.map((bonus, index) =>
                    <Col xs={12} md={3} key={index}>
                      <Card className='mb-2'>
                        <div className='bonus-card-item'>
                          <div className='text-center mb-2'>
                            <StarIcon color="#807A00" />
                          </div>
                          <div className='text-center mb-2'>{bonus.name}</div>
                          <Button variant="primary w-100" onClick={() => handleBonusClick(bonus.id)} style={{ display: 'block' }}>
                            Use
                          </Button>
                        </div>
                      </Card>
                    </Col>)}
                  </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Fixtures />
          </Col>
        </Row>

        <SelectPlayerModal 
          show={showSelectPlayerModal} 
          handleClose={() => setShowSelectPlayerModal(false)} 
          handleConfirm={handlePlayerConfirm}
          teams={teams}
        />
        
      </Container>
  );
};

export default PickTeam;
