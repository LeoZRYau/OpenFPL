import React, { useState, useEffect, useContext } from 'react';
import { Modal, Container, Form, Pagination, Row, Col } from 'react-bootstrap';
import { DataContext } from "../../contexts/DataContext";
import { PlusIcon, BadgeIcon } from '../icons';

const SelectPlayerModal = ({ show, handleClose, handleConfirm, fantasyTeam, startingPosition, availableFormations,  }) => {
  const { players, teams } = useContext(DataContext);
  const [filterTeamId, setFilterTeamId] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [page, setPage] = useState(0);
  const count = 8;
  const [viewData, setViewData] = useState({ players: [], totalEntries: 0 }); 
  const [filterSurname, setFilterSurname] = useState("");

  const positionOptions = [
    { id: 0, name: "Goalkeeper" },
    { id: 1, name: "Defender" },
    { id: 2, name: "Midfielder" },
    { id: 3, name: "Forward" },
  ];

  useEffect(() => {
    if (show) {
      setFilterPosition(startingPosition);
    } else {
      setFilterTeamId("");
      setFilterPosition("");
      setPage(0);
    }
  }, [show, startingPosition]);
  
  useEffect(() => {
    if(!Array.isArray(players)){
      return;
    }
    const filteredPlayers = players
    .filter(player => player.teamId > 0)
    .filter(player => filterTeamId === "" || player.teamId === Number(filterTeamId))
    .filter(player => filterPosition === "" || player.position === Number(filterPosition))
    .filter(player => minValue === "" || player.value >= (Number(minValue) * 4))
    .filter(player => maxValue === "" || player.value <= (Number(maxValue) * 4))
    .filter(player => filterSurname === "" || player.lastName.toLowerCase().includes(filterSurname.toLowerCase()))

    const totalEntries = filteredPlayers.length; 
    const paginatedPlayers = filteredPlayers.slice(page * count, (page + 1) * count);
  
    setViewData({ players: paginatedPlayers, totalEntries: totalEntries });
  }, [players, filterTeamId, filterPosition, page, minValue, maxValue, filterSurname]);
  
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleChangeFilterTeam = (event) => {
    setFilterTeamId(event.target.value);
    setPage(0); 
  };

  const handleChangeMinValue = (event) => {
    setMinValue(event.target.value);
    setPage(0);
  };

  const handleChangeMaxValue = (event) => {
    setMaxValue(event.target.value);
    setPage(0);
  };

  const handleChangeFilterPosition = (event) => {
    setFilterPosition(event.target.value);
    setPage(0);
  };
  
  const handleChangeFilterSurname = (event) => {
    setFilterSurname(event.target.value);
    setPage(0);
  };

  const handleSubmit = (player) => {
    if (canAddPlayer(player, fantasyTeam, fantasyTeam.bankBalance)) {
      handleConfirm(player);
    }
  };
  const canAddPlayer = (player, fantasyTeam, bankBalance) => {
    if (fantasyTeam.players && Object.values(fantasyTeam.players).some(p => p.id === player.id)) {
      return "Already in Team";
    }
  
    if (Number(player.value) / 4 > bankBalance) {
      return "Over Budget";
    }
  
    const teamPlayerCount = Object.values(fantasyTeam.players)
      .filter(p => p.teamId === player.teamId)
      .length;
  
    if (teamPlayerCount >= 2) return "Max 2 Per Team";
  
    const counts = {0: 0, 1: 0, 2: 0, 3: 0};
    Object.values(fantasyTeam.players || {}).forEach(p => {
      counts[p.position]++;
    });
  
    const tempCounts = { ...counts, [player.position]: counts[player.position] + 1 };
    const totalPlayers = Object.values(tempCounts).reduce((a, b) => a + (b || 0), 0);
    const maxTeamSize = 11;
  
    const isFormationValid = availableFormations.some(formation => {
      const [def, mid, fwd] = formation.split('-').map(Number);
      const minDef = Math.max(0, def - (tempCounts[1] || 0));
      const minMid = Math.max(0, mid - (tempCounts[2] || 0));
      const minFwd = Math.max(0, fwd - (tempCounts[3] || 0));
      const minGK = Math.max(0, 1 - (tempCounts[0] || 0)); 
  
      const additionalPlayersNeeded = minDef + minMid + minFwd + minGK;
  
      return totalPlayers + additionalPlayersNeeded <= maxTeamSize;
    });
  
    if (!isFormationValid) {
      return "Invalid Formation";
    }
  
    return "Valid";
  };
  
  
  

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= Math.ceil(viewData.totalEntries / count); number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === page + 1} 
          onClick={() => handlePageChange(number - 1)} 
          className="custom-pagination-item"
        >
          {number}
        </Pagination.Item>,
      );
    }
    return <Pagination>{items}</Pagination>;
  };
  

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="teamFilter">
                <Form.Label>Filter Team:</Form.Label>
                <Form.Control as="select" value={filterTeamId || ''} onChange={handleChangeFilterTeam}>
                  <option value="">All</option>
                  {teams.map((team, index) => (
                    <option key={index} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="positionFilter">
                <Form.Label>Filter Position:</Form.Label>
                <Form.Control 
                  as="select" 
                  value={filterPosition !== null && filterPosition !== undefined ? filterPosition : ''}
                  onChange={handleChangeFilterPosition}>
                  <option value="">All</option>
                  {positionOptions.map((position) => (
                    <option key={position.id} value={position.id}>
                      {position.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={6}>
              <Form.Group controlId="minValueFilter">
                <Form.Label>Min Value (£m):</Form.Label>
                <Form.Control type="number" step="0.1" value={minValue || ''} onChange={handleChangeMinValue} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="maxValueFilter">
                <Form.Label>Max Value (£m):</Form.Label>
                <Form.Control type="number" step="0.1" value={maxValue || ''} onChange={handleChangeMaxValue} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
                <Form.Group controlId="surnameFilter">
                    <Form.Label>Filter by Surname:</Form.Label>
                    <Form.Control type="text" placeholder="Search by surname" value={filterSurname || ''} onChange={handleChangeFilterSurname} />
                </Form.Group>
            </Col>
        </Row>
        </Form>
        <Row className='mt-3'>
          <Col>
            <p><small>Available Balance: £{(fantasyTeam.bankBalance).toFixed(2)}m</small></p>
          </Col>
        </Row>
        {players?.isLoading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <Row className='mb-2 modal-table-row'>

              <div className="modal-table-header modal-position-col">
                <p className='w-100 m-0'>Pos</p>
              </div>
              <div className="modal-table-header modal-player-col">
                <p className='w-100 m-0'>Player Name</p>
              </div>
              <div className="modal-table-header modal-team-col">
                <p className='w-100 m-0'>Team</p>
              </div>
              <div className="modal-table-header modal-value-col">
                <p className='w-100 m-0'>Value</p>
              </div>
              <div className="modal-table-header modal-pts-col">
                <p className='w-100 m-0'>PTS</p>
              </div>
              <div className="modal-table-header modal-button-col"></div>

            </Row>
          {viewData.players.map((player) => (
            <Row key={player.id} className='select-player-modal-row'>
              <div className="modal-table-header modal-position-col">
                <p className='small-text w-100 m-0'>
                  {(() => {
                    switch (player.position) {
                      case 0:
                        return "GK";
                      case 1:
                        return "DF";
                      case 2:
                        return "MF";
                      case 3:
                        return "FW";
                    }})()}
                </p>
              </div>
              <div className="modal-table-header modal-player-col">
                <p className='w-100 m-0 dot-truncate'><b>{player.firstName != "" ? player.firstName.charAt(0) + "." : ""} {player.lastName}</b></p>
              </div>
              <div className="modal-table-header modal-team-col">
                <p className='w-100 m-0'>
                  {(() => {
                    const foundTeam = teams.find(team => team.id === player.teamId);
                    return (
                      <>
                        <BadgeIcon
                          primary={foundTeam.primaryColourHex}
                          secondary={foundTeam.secondaryColourHex}
                          third={foundTeam.thirdColourHex}
                          className='select-player-badge-icon'
                        />
                        {foundTeam.abbreviatedName}
                      </>
                    );
                  })()}
                </p>
              </div>

              <div className="modal-table-header modal-value-col">
              <p className='small-text w-100 m-0'>{`£${(Number(player.value) / 4).toFixed(2)}m`}</p>
              </div>
              <div className="modal-table-header modal-pts-col"><p className='small-text w-100 m-0'>{player.totalPoints}</p></div>
              <div className="modal-table-header modal-button-col">
                  {(() => {
                    const reasonOrValid = canAddPlayer(player, fantasyTeam, fantasyTeam.bankBalance);
                    return reasonOrValid === "Valid"
                      ? <button onClick={() => { handleSubmit(player); }} className='add-player-button'><PlusIcon /></button>
                      : <p className='disabled-player-text m-0 text-center w-100'>{reasonOrValid}</p>;
                  })()}
                
              </div>



            </Row>
          ))}
          <div className='custom-pagination-container'>
            {renderPagination()}
          </div>
        </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SelectPlayerModal;
