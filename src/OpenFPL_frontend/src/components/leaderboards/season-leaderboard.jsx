import React, { useState, useEffect, useContext } from 'react';
import { Container, Spinner, Table, Pagination, Form, Card, Row, Col } from 'react-bootstrap';
import { AuthContext } from "../../contexts/AuthContext";
import { Actor } from "@dfinity/agent";
import { OpenFPL_backend as open_fpl_backend } from '../../../../declarations/OpenFPL_backend';

const SeasonLeaderboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { authClient } = useContext(AuthContext);
    const [managers, setManagers] = useState({
        totalEntries: 0n,
        seasonId: 0,
        entries: [],
        gameweek: 0
      });
    const [seasons, setSeasons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSeason, setSelectedSeason] = useState(1);
    const itemsPerPage = 25;
  
    const renderedPaginationItems = Array.from({ length: Math.ceil(Number(managers.totalEntries) / itemsPerPage) }, (_, index) => (
        <Pagination.Item 
            key={index + 1} 
            active={index + 1 === currentPage} 
            onClick={() => setCurrentPage(index + 1)}
        >
            {index + 1}
        </Pagination.Item>
    ));

    useEffect(() => {
        const fetchIntialData = async () => {
            await fetchSeasons();
            await fetchActiveSeasonId();
            await fetchViewData(selectedSeason);
            setIsLoading(false);
        };
        fetchIntialData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        fetchData();
    }, [selectedSeason]);
    
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        await fetchViewData(selectedSeason);
        setIsLoading(false);
    };
    
    const fetchActiveSeasonId = async () => {
        const identity = authClient.getIdentity();
        Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
    
        const activeSeasonData = await open_fpl_backend.getCurrentSeason();
        setSelectedSeason(activeSeasonData.id);
    };

    const fetchViewData = async (season) => {
        const identity = authClient.getIdentity();
        Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
        const leaderboardData = await open_fpl_backend.getSeasonLeaderboard(Number(season), itemsPerPage, (currentPage - 1) * itemsPerPage); // Update the backend call if needed
        setManagers(leaderboardData);
    };

    const fetchSeasons = async () => {
        const identity = authClient.getIdentity();
        Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
    
        const seasonList = await open_fpl_backend.getSeasons();
        setSeasons(seasonList); 
    };

    const renderedData = managers.entries && managers.entries.map(manager => (
        <tr key={manager.principalId}>
            <td className='text-center'>{manager.positionText}</td>
            <td className='text-center'>{manager.principalId == manager.username ? 'Unknown' : manager.username}</td>
            <td className='text-center'>{manager.points}</td>
        </tr>
    ));

    return (
        isLoading ? (
        <div className="customOverlay d-flex flex-column align-items-center justify-content-center">
            <Spinner animation="border" />
            <p className='text-center mt-1'>Loading</p>
        </div>
        ) 
        :
        <Container>
            <Card className='mb-2'>
                <Card.Body>
                <Card.Title className='mb-2'>
                    Season Leaderboard
                </Card.Title>
                <Row className='mb-2'>
                    <Col xs={12} md={6}>
                        <Form.Group controlId="seasonSelect">
                            <Form.Label>Select Season</Form.Label>
                            <Form.Control as="select" value={selectedSeason} onChange={e => {
                                setSelectedSeason(Number(e.target.value));
                            }}>
                                {seasons.map(season => <option key={season.id} value={season.id}>{`${season.name} ${season.year}`}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                

            
            <Table  responsive bordered className="table-fixed">
                <thead>
                    <tr>
                        <th className='top10-num-col text-center'><small>Pos.</small></th>
                        <th className='top10-name-large-col text-center'><small>Manager</small></th>
                        <th className='top10-points-col text-center'><small>Points</small></th>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </Table>
            <Pagination>{renderedPaginationItems}</Pagination>
                </Card.Body>
            </Card>
             
        </Container>
    );
};

export default SeasonLeaderboard;
