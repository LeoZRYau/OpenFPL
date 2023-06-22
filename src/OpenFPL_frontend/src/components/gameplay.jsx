import React, { useState, useEffect } from 'react';
import { Container, Spinner, Row, Col, Card, Table } from 'react-bootstrap';

const Gameplay = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchViewData();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const fetchViewData = async () => {
    
  };
  
  return (
    isLoading ? (
      <div className="customOverlay d-flex flex-column align-items-center justify-content-center">
        <Spinner animation="border" />
        <p className='text-center mt-1'>Loading</p>
      </div>) 
      :
      <Container className="flex-grow-1 my-5">
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Header><h2 className="mt-4 mb-4">OpenFPL Gameplay Rules</h2></Card.Header>
              <Card.Body>
                <Card.Text>Please see below detailed rules of the OpenFPL fantasy football game.</Card.Text>
                <p>Users will setup their team before the gameweek deadline each week. When playing OpenFPL, users have the chance to win FPL tokens depending on how well the players in their team perform.</p>

                <p>The users select 15 players, 11 playing and 4 substitutes from any Premier League team. Users have a budget of 120m to pick a team at the start of the season. 
                  No more than 3 players from a single Premier League club can be in a fantasy football team.</p>

                <p>In January, a user can change their entire team once. </p>

                <p>A players value may go up or down based on a player pricing algorithm.</p>

                <p>Player ratings are set either at the start of the DAO or by DAO proposal. These ratings are then adjusted each week by the average ratings for that player by DAO neuron holders.</p>

                <p>During a gameweek substitutes are not included in a users score. A user is allowed to make 2 transfers per week which are never carried over.</p>

                <p>A user can make a player their captain each gameweek and that player will receive double points. </p>

                <p>The following bonuses can be played once a season by a user:</p>
                <p>- 'Dynamic Duo' bonus: A bonus for effective team partnerships. If any two players from the same club within your fantasy team combine to score a goal (one assisting and the other scoring), 
                  you'll earn bonus points. </p>
                <p>- 'Double Club' bonus: All players from a chosen team in their fantasy squad will have their points doubled for that gameweek. 
                  This power play must be declared before the gameweek deadline.</p>
                <p>-'Hat-trick Bonus': When a user correctly predicts and owns the player who scores a hat-trick they will receive a bonus.</p>
                <p>-'Penalty Save Bonus': When a user correctly predicts and owns the goalkeeper who saves a penalty they will receive a bonus.</p>
                <p>-'Red Card Bonus': When a user correctly predicts and owns the player who receives a red card they will receive a bonus.</p>
                <p>- 'Prodigy Bonus': A user can choose one player under the age of 21 from their squad at the start of the season. 
                  If this chosen player scores or assists any goal, the user receives bonus points.</p>
               

                <p>The user can get the following points during a gameweek for their team:</p>

                <Table bordered className="table-fixed mt-4">
                  <colgroup>
                    <col style={{width: '70%'}} />
                    <col style={{width: '30%'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>For</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Playing up to 60 minutes.</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Playing 60 minutes or more (excluding stoppage time).</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Goal scored by a goalkeeper or defender.</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Goal scored by a midfielder.</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Goal scored by a forward.</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Assisting a goal.</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Defender and goalkeeper clean sheets.</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Midfielder clean sheet bonus.</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>3 keeper saves.</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Penalty save.</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Penalty miss.</td>
                      <td>-2</td>
                    </tr>
                    <tr>
                      <td>Bonus points.</td>
                      <td>1-3</td>
                    </tr>
                    <tr>
                      <td>Goalkeeper or defender concedes 2 goals.</td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Yellow card received.</td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Red card received.</td>
                      <td>-3</td>
                    </tr>
                    <tr>
                      <td>Own goal scored.</td>
                      <td>-2</td>
                    </tr>
                    <tr>
                      <td>Dynamic Duo Bonus (each time one player assists another for a goal and both players are from the same club  and in your team.)</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Double Club Bonus (all points from a chosen club's players are doubled for a gameweek)</td>
                      <td>2x</td>
                    </tr>
                    <tr>
                      <td>Hat-trick Bonus (a player scores three goals in a match)</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>Penalty Save Bonus (a player saves a penalty)</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Prodigy Bonus (a player under the age of 21 scores or assists a goal)</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Gameplay;

