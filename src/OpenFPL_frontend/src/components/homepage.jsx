import React, { useState, useEffect, useContext } from 'react';
import { Container, Spinner, Row, Col, Card, Tabs, Tab, Badge, Table, Button, Pagination } from 'react-bootstrap';
import { SmallFixtureIcon } from './icons';
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import { OpenFPL_backend as open_fpl_backend } from '../../../declarations/OpenFPL_backend';
import { Link } from "react-router-dom";
import { msToTime, nanoSecondsToMillis, getTeamById, groupFixturesByDate } from './helpers';

const Homepage = () => {

    const { userPrincipal, isAuthenticated } = useContext(AuthContext);
    const { teams, fixtures, systemState, seasonLeaderboard, weeklyLeaderboard } = useContext(DataContext);

    const [isLoading, setIsLoading] = useState(true);
    const [managerCount, setManagerCount] = useState(0);
    const [seasonTop10, setSeasonTop10] = useState([]);
    const [weeklyTop10, setWeeklyTop10] = useState();
    const [filterGameweek, setFilterGameweek] = useState(1);
    const [isActiveGameweek, setIsActiveGameweek] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const [currentGameweek, setCurrentGameweek] = useState(systemState.activeGameweek);
    const [currentSeason, setCurrentSeason] = useState(systemState.activeSeason.id);

    const groupedFixtures = groupFixturesByDate(getCurrentGameweekFixtures());
    const totalPrizePool = 0;
    
    useEffect(() => {
        const fetchViewData = async () => {
            if (filterGameweek === 0) return;

            await updateCountdowns();
            await updateManagerData();

            setIsLoading(false);
        };
        
        fetchViewData();
    }, [filterGameweek, fixtures, isAuthenticated]);

    useEffect(() => {
        const timer = setInterval(updateCountdowns, 1000);
        return () => clearInterval(timer);
    }, [filterGameweek, fixtures]);

    const updateCountdowns = async () => {
        const currentFixtures = getCurrentGameweekFixtures();
        const kickOffs = currentFixtures.map(fixture => computeTimeLeft(Number(fixture.kickOff)));
    
        const kickOffsInMillis = kickOffs.map(obj => 
            obj.days * 24 * 60 * 60 * 1000 + 
            obj.hours * 60 * 60 * 1000 + 
            obj.minutes * 60 * 1000 + 
            obj.seconds * 1000
        );
    
        const timeUntilGameweekBegins = Math.min(...kickOffsInMillis) - 3600000;
        
        if (timeUntilGameweekBegins > 0) {
            setCountdown(msToTime(timeUntilGameweekBegins));
            setIsActiveGameweek(false);
        } else {
            setCountdown(msToTime(0));
            setIsActiveGameweek(true);
        }
    };

    const updateManagerData = async () => {
        const managerCountData = await open_fpl_backend.getTotalManagers();
        setManagerCount(Number(managerCountData));

        const seasonTop10Data = weeklyLeaderboard.slice(0, 10);
        setSeasonTop10(seasonTop10Data.entries);
        
        const weeklyTop10Data = seasonLeaderboard.slice(0, 10);
        setWeeklyTop10(weeklyTop10Data);
    };

    const getCurrentGameweekFixtures = () => {
        return fixtures.filter(fixture => fixture.gameweek === filterGameweek);
    };
    
    const computeTimeLeft = (kickoff) => {
        const now = new Date().getTime();
        const distance = nanoSecondsToMillis(kickoff) - now;
    
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    };

    const handlePrevGameweek = () => {
        if (filterGameweek > 1) {
            setFilterGameweek(prevGameweek => prevGameweek - 1);
            const newGameweek = filterGameweek - 1;
            setButtonVisibility(newGameweek);
        }
      };
      
      const handleNextGameweek = () => {
        if (filterGameweek < 38) {
            setFilterGameweek(nextGameweek => nextGameweek + 1);
        
            const newGameweek = filterGameweek + 1;
            setButtonVisibility(newGameweek);
        }
      };

      const setButtonVisibility = (newGameweek) => {
        const shouldBeVisible = !isLoading && isAuthenticated && (newGameweek < currentGameweek || (newGameweek === currentGameweek && isActiveGameweek));
        setShouldShowButton(shouldBeVisible);
    };
    
    const renderStatusBadge = (fixture) => {
        const currentTime = new Date().getTime();
        const kickoffTime = computeTimeLeft(Number(fixture.kickOff));
        const oneHourInMilliseconds = 3600000;
    
        if (fixture.status === 0 && kickoffTime - currentTime <= oneHourInMilliseconds) {
            return (
                <Badge className='bg-warning w-100' style={{ padding: '0.5rem' }}>Pre-Game</Badge>
            );
        }
    
        switch (fixture.status) {
            case 1:
                return (
                    <Badge className='bg-info w-100' style={{ padding: '0.5rem' }}>Active</Badge>
                );
            case 2:
                return (
                    <Badge className='bg-success w-100' style={{ padding: '0.5rem' }}>In Consensus</Badge>
                );
            case 3:
                return (
                    <Badge className='bg-primary w-100' style={{ padding: '0.5rem' }}>Verified</Badge>
                );
            default:
                return (
                    <Badge className='bg-secondary w-100' style={{ padding: '0.5rem' }}>Unplayed</Badge>
                );
        }
    };
    

    return (
        isLoading ? (
            <div className="customOverlay d-flex flex-column align-items-center justify-content-center">
                <Spinner animation="border" />
                <p className='text-center mt-1'>Loading</p>
            </div>
        ) :
        <Container className="flex-grow-1 my-1">
            <Row>
                <Col md={8} xs={12}>
                    <Row className="mb-3">
                        <Col md={4} xs={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Gameweek</Card.Title>
                                    <h5 className="display-sm">{currentGameweek}</h5> 
                                    <Card.Text>{currentSeason.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Managers</Card.Title>
                                    <h5 className="display-sm">{managerCount.toLocaleString()}</h5> 
                                    <Card.Text>Total</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Weekly Prize Pool</Card.Title>
                                    <h5 className="display-sm"><small>{totalPrizePool.toLocaleString()}</small></h5> 
                                    <Card.Text>$FPL</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                
                    <Card className="mb-4">
                        <Card.Header>
                            <Row className="align-items-center p-2">
                                <Col xs={4}>
                                    Fixtures
                                </Col>
                                <Col xs={8} className="d-flex justify-content-end align-items-center">
                                    <Pagination className="my-auto">
                                        <Pagination.Prev onClick={() => handlePrevGameweek()} disabled={filterGameweek === 1} />
                                        <Pagination.Item><small className='small-text'>Gameweek {filterGameweek}</small></Pagination.Item>
                                        <Pagination.Next onClick={() => handleNextGameweek()} disabled={filterGameweek === 38} />
                                    </Pagination>
                                </Col>
                            </Row>
                        </Card.Header>

                        <Card.Body>

                        <Table responsive>
    <tbody>
        {Object.entries(groupedFixtures).map(([date, fixturesForDate], dateIdx) => {
            return (
                <React.Fragment key={dateIdx}>
                    <tr>
                        <td colSpan="5" className="date-header text-center small-text">{date}</td>
                        <td colSpan="2"></td>
                    </tr>
                    {fixturesForDate.map((fixture, idx) => {
                        const homeTeam = getTeamById(teams, fixture.homeTeamId);
                        const awayTeam = getTeamById(teams, fixture.awayTeamId);
                        if (!homeTeam || !awayTeam) {
                            console.error("One of the teams is missing for fixture: ", fixture);
                            return null;
                        }
                        return (
                            <tr key={idx} className="align-middle">
                                <td className="home-team-name" style={{ textAlign: 'right' }}>{homeTeam.friendlyName}</td>
                                <td className="home-team-icon text-center">
                                    <SmallFixtureIcon
                                        primaryColour={homeTeam.primaryColourHex}
                                        secondaryColour={homeTeam.secondaryColourHex}
                                    />
                                </td>
                                <td className="text-center align-self-center v-symbol">v</td>
                                <td className="text-center away-team-icon">
                                    <SmallFixtureIcon
                                        primaryColour={awayTeam.primaryColourHex}
                                        secondaryColour={awayTeam.secondaryColourHex}
                                    />
                                </td>
                                <td className="away-team-name">{awayTeam.friendlyName}</td>
                                <td className="text-muted text-center score">{fixture.status === 3 ? `${fixture.homeGoals}-${fixture.awayGoals}` : '-'}</td>
                                <td className='text-center status'>
                                    {renderStatusBadge(fixture)}
                                </td>
                            </tr>
                        );
                    })}
                </React.Fragment>
            );
        })}
    </tbody>
</Table>

                            { 
                                shouldShowButton &&
                                <div className="mt-2 mb-2" style={{ textAlign: 'right' }}>
                                    <Button as={Link} to={`/view-points/${userPrincipal}/${currentSeason.id}/${filterGameweek}`}>View Gameweek Points</Button>
                                </div>
                            }
                        </Card.Body>
                    </Card>


                </Col>
            
                <Col md={4} xs={12}>
                    <Card className='mb-2'>
                        <Card.Body>
                        <Card.Title>
                            {isActiveGameweek ? "Gameweek Active" : "Gameweek Begins:"}
                        </Card.Title>
                        {!isActiveGameweek ? (
                            <h5 className="display-sm">{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h5>
                        ) : null}
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Header>Leaderboard</Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey="gameweek" id="leaderboard-tabs">
                                <Tab eventKey="gameweek" title="Gameweek">
                                    <br />
                                    {weeklyTop10.entries.length == 0 && (
                                        <p className='mt-2'>No entries.</p>
                                    )}
                                    {weeklyTop10.entries.length > 0 && (
                                    <>
                                        <Table responsive bordered className="table-fixed">
                                            <thead>
                                                <tr>
                                                    <th className='top10-num-col text-center'><small>Pos.</small></th>
                                                    <th className='top10-name-col text-center'><small>Manager</small></th>
                                                    <th className='top10-points-col text-center'><small>Points</small></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {weeklyTop10.entries.map((leader) => (
                                                <tr key={leader.principalId}>
                                                    <td className='text-center'>{leader.positionText == "" ? "-" : leader.positionText}</td>
                                                    <td className='text-center text-truncate'>{leader.principalId == leader.username ? 'Unknown' : leader.username}</td>
                                                    <td className='text-center'>
                                                        <Button as={Link} className='p-0 w-100 clear-button' 
                                                        to={{
                                                            pathname: `/view-points/${leader.principalId}/${weeklyTop10.seasonId}/${weeklyTop10.gameweek}`
                                                        }}>{leader.points}</Button>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <div style={{ textAlign: 'right' }}>
                                        <   Button as={Link} to="/weekly-leaderboard">View All</Button>
                                        </div>
                                    </>
                                    )}
                                </Tab>
                                <Tab eventKey="season" title="Season">
                                    <br />
                                    {seasonTop10.length == 0 && (
                                        <p className='mt-2'>No entries.</p>
                                    )}
                                    {seasonTop10.length > 0 && (
                                    <>
                                    <Table responsive bordered className="table-fixed">
                                        <thead>
                                            <tr>
                                                <th className='top10-num-col text-center'><small>Pos.</small></th>
                                                <th className='top10-name-col text-center'><small>Manager</small></th>
                                                <th className='top10-points-col text-center'><small>Points</small></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {seasonTop10.map((leader) => (
                                            <tr key={leader.principalId}>
                                                <td className='text-center'>{leader.positionText == "" ? "-" : leader.positionText}</td>
                                                <td className='text-center text-truncate'>{leader.principalId == leader.username ? 'Unknown' : leader.username}</td>
                                                <td className='text-center'>{leader.points}</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button as={Link} to="/leaderboard">View All</Button>
                                    </div>
                                    </>
                                    )}
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;
