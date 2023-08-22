import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Container, Form, Pagination, Row, Col } from 'react-bootstrap';
import { TeamsContext } from "../../contexts/TeamsContext";
import { PlayersContext } from "../../contexts/PlayersContext";

const SelectPlayerModal = ({ show, handleClose, handleConfirm, fantasyTeam }) => {
  
  const { teams } = useContext(TeamsContext);
  const { players } = useContext(PlayersContext);
  const [filterTeamId, setFilterTeamId] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [page, setPage] = useState(0);
  const count = 10;
  const [viewData, setViewData] = useState({ players: [], totalEntries: 0 }); 
  const [filterSurname, setFilterSurname] = useState("");


  const positionOptions = [
    { id: 0, name: "Goalkeeper" },
    { id: 1, name: "Defender" },
    { id: 2, name: "Midfielder" },
    { id: 3, name: "Forward" },
  ];

  useEffect(() => {
    if (!show) {
      setFilterTeamId("");
      setFilterPosition("");
      setPage(0);
    }
  }, [show]);
  
  useEffect(() => {
    if(!Array.isArray(players)){
      return;
    }
    const filteredPlayers = players
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
    handleConfirm(player);
  };

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= Math.ceil(viewData.totalEntries / count); number++) {
      items.push(
        <Pagination.Item key={number} active={number === page + 1} onClick={() => handlePageChange(number - 1)}>
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
        <Form className='mb-4'>
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
                <Form.Control as="select" value={filterPosition || ''} onChange={handleChangeFilterPosition}>
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
        <Row>
          <Col>
            <p>Available Balance: £{(fantasyTeam.bankBalance).toFixed(1)}m</p>
          </Col>
        </Row>
        {players?.isLoading ? (
          <p>Loading...</p>
        ) : (
          <Container className="mt-4">
            <Row className='mb-2'>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>Pos</p>
              </Col>
              <Col xs={3} className='d-flex align-self-center'>
                <p className='small-text m-0'>Player</p>
              </Col>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>Team</p>
              </Col>
              <Col xs={2} className='d-flex align-self-center'>
                <p className='small-text m-0'>Value</p>
              </Col>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>Pts</p>
              </Col>
              <Col xs={4} className='d-flex align-self-center'>
              </Col>

            </Row>
          {viewData.players.map((player) => (
            <Row key={player.id} className='mb-2'>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>
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
              </Col>
              <Col xs={3} className='d-flex align-self-center'>
                <p className='small-text m-0'>{player.firstName != "" ? player.firstName.charAt(0) + "." : ""} {player.lastName}</p>
              </Col>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>{teams.find(team => team.id === player.teamId).abbreviatedName}</p>
              </Col>
              <Col xs={2} className='d-flex align-self-center'>
                <p className='small-text m-0'>{`£${(Number(player.value) / 4).toFixed(2)}m`}</p>
              </Col>
              <Col xs={1} className='d-flex align-self-center'>
                <p className='small-text m-0'>{player.totalPoints}</p>
              </Col>
              <Col xs={4} className='d-flex align-self-center'>
                {fantasyTeam.players.some(teamPlayer => teamPlayer.id === player.id) 
                  ? <p className='small-text m-0 text-center w-100'>Added</p> 
                  : <Button className="w-100 small-text" variant="primary" onClick={() => {handleSubmit(player);}} disabled={(Number(player.value) / 4) > fantasyTeam.bankBalance}>
                      <small>Select</small>
                    </Button>
                }
              </Col>

            </Row>
          ))}
          <div style={{ overflowX: 'auto' }}>
            {renderPagination()}
          </div>
        </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SelectPlayerModal;
