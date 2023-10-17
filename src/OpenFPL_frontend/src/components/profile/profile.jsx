import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, ListGroup, Tabs, Tab, Form, Image } from 'react-bootstrap';
import { OpenFPL_backend as open_fpl_backend } from '../../../../declarations/OpenFPL_backend';
import { Actor } from "@dfinity/agent";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import UpdateNameModal from './update-name-modal';
import WithdrawICPModal from './withdraw-icp-modal';
import WithdrawFPLModal from './withdraw-fpl-modal';
import UpdateProfilePictureModal from './update-profile-picture-modal';
import UpgradeMembershipModal from './upgrade-membership-modal';
import { EditIcon } from '../icons';
import ProfileImage from '../../../assets/profile_placeholder.png';
import ICPCoin from '../../../assets/ICPCoin.png';
import FPLCoin from '../../../assets/FPLCoin.png';
import ckBTCCoin from '../../../assets/ckBTCCoin.png';
import ckETHCoin from '../../../assets/ckETHCoin.png';
import { Link } from "react-router-dom";
import ConfirmFavouriteTeamModal from './confirm-favourite-team-modal';

const Profile = () => {

  const { authClient } = useContext(AuthContext);
  const { teams } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showUpdateNameModal, setShowUpdateNameModal] = useState(false);
  const [showUpdateProfilePictureModal, setShowUpdateProfilePictureModal] = useState(false);
  const [showWithdrawICPModal, setShowWithdrawICPModal] = useState(false);
  const [showWithdrawFPLModal, setShowWithdrawFPLModal] = useState(false);
  const [favouriteTeam, setFavouriteTeam] = useState(null);
  const [loadingAccountBalance, setLoadingAccountBalance] = useState(true);
  const [balanceData, setBalanceData] = useState(null);

  const [showUpgradeAccountModal, setShowUpgradeAccountModal] = useState(false);
  const [showGetMoreLeaguesModal, setShowGetMoreLeaguesModal] = useState(false);

  const [profilePicSrc, setProfilePicSrc] = useState(ProfileImage);
  const [joinedDate, setJoinedDate] = useState('');

  const [viewData, setViewData] = useState(null);
  const [icpAddressCopied, setICPAddressCopied] = useState(false);
  const [fplAddressCopied, setFPLAddressCopied] = useState(false);

  const [showConfirmFavouriteTeamModal, setShowConfirmFavouriteTeamModal] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [selectedTeamName, setSelectedTeamName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetchViewData();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(!viewData){
      return;
    }
    const fetchData = async () => {
      await fetchAccountBalance();
      setLoadingAccountBalance(false);
    };
    fetchData();
  }, [viewData]);

  const fetchViewData = async () => {
    try {
        const identity = authClient.getIdentity();
        Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
        const data = await open_fpl_backend.getProfileDTO();
        setViewData(data);

        const dateInMilliseconds = Number(data.createDate / 1000000n);
        const date = new Date(dateInMilliseconds);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const joinDate = `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
        setJoinedDate(joinDate);

        if (data.profilePicture && data.profilePicture.length > 0) {
        
          const blob = new Blob([data.profilePicture]);
          const blobUrl = URL.createObjectURL(blob);
          setProfilePicSrc(blobUrl);

        } else {
          setProfilePicSrc(ProfileImage);
        }
        setFavouriteTeam(data.favouriteTeamId);
    } catch (error){
        console.log(error);
    };
  };

  const fetchAccountBalance = async () => {
    try {
      const identity = authClient.getIdentity();
      Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
      const data = await open_fpl_backend.getAccountBalanceDTO();
      setBalanceData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const hideUpdateNameModal = async (changed) => {
    if(!changed){
      setShowUpdateNameModal(false); 
      return;
    }
    setIsLoading(true);
    setShowUpdateNameModal(false); 
    await fetchViewData();
    setIsLoading(false);
  };

  const hideWithdrawICPModal = async (changed) => {
    if(!changed){
      setShowWithdrawICPModal(false); 
      return;
    }
    setIsLoading(true);
    setShowWithdrawICPModal(false); 
    await fetchViewData();
    setIsLoading(false);
  };

  const hideWithdrawFPLModal = async (changed) => {
    if(!changed){
      setShowWithdrawFPLModal(false); 
      return;
    }
    setIsLoading(true);
    setShowWithdrawFPLModal(false); 
    await fetchViewData();
    setIsLoading(false);
  };

  const hideProfilePictureModal = async (changed) => {
    if(!changed){
      setShowUpdateProfilePictureModal(false); 
      return;
    }
    setIsLoading(true);
    setShowUpdateProfilePictureModal(false); 
    await fetchViewData();
    setIsLoading(false);
  };

  const hideUpgradeAccountModal = async (changed) => {
    if(!changed){
      setShowUpgradeAccountModal(false); 
      return;
    }
    setIsLoading(true);
    setShowUpgradeAccountModal(false); 
    await fetchViewData();
    setIsLoading(false);
  };
  
  const handleFavoriteTeamChange = async (event) => {
    setSelectedTeamId(Number(event.target.value));
    let team = teams.find(t => t.id === Number(event.target.value));
    setSelectedTeamName(team.name);
    setShowConfirmFavouriteTeamModal(true);
  };
  
  const handleConfirmFavouriteTeamClick = async (favouriteTeamId) => {
    try{
      setIsLoading(true);
      const identity = authClient.getIdentity();
      Actor.agentOf(open_fpl_backend).replaceIdentity(identity);
      await open_fpl_backend.updateFavouriteTeam(Number(favouriteTeamId));
      setShowConfirmFavouriteTeamModal(false);
      setFavouriteTeam(Number(favouriteTeamId));  
    } catch (error){
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      isLoading ? (
        <div className="customOverlay d-flex flex-column align-items-center justify-content-center">
          <Spinner animation="border" />
          <p className='text-center mt-1'>Loading Profile</p>
        </div>
      ) : (
        <Container fluid className='view-container mt-2'>
          <Row>
            <Col xs={12}>
              <Card>
                <div className="outer-container d-flex">
                  <div className="flex-grow-1 light-background">
                    <Tabs defaultActiveKey="details" id="profile-tabs" className="home-tab-header">
                      <Tab eventKey="details" title="Details">
                        <div className="dark-tab-row w-100 mx-0">
                          <Row>
                            <Col xs={12} md={'auto'}>
                              <div className='profile-picture-col'>
                                <div className="vertical-flex">
                                  <Image src={profilePicSrc} className="w-100 profile-detail-image" />
                                  <div className="edit-profile-icon position-absolute top-0 right-0">
                                    <EditIcon onClick={() => setShowUpdateProfilePictureModal(true)} />
                                </div>
                                </div>
                              </div>
                            </Col>
                            <Col xs={12} md={6}>
                              <div className='profile-details-row' style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                <div className='profile-details-col'>
                                  <div className='profile-detail-row-1'>
                                    <Row className="stat-row-1">
                                      <div className='profile-display-name-col'>
                                        <p className="stat-header w-100">Display Name</p>
                                      </div>
                                      <div className='profile-favourite-team-col'>
                                        <p className="stat-header w-100">Favourite Team</p>
                                      </div>
                                    </Row>
                                    <Row className="stat-row-2 vertical-flex">
                                      <div className='profile-display-name-col'>  
                                        <p className="stat">{viewData.displayName == viewData.principalName ? 'Not Set' : viewData.displayName}</p>
                                      </div>
                                      <div className='profile-favourite-team-col' style={{ display: 'flex', alignItems: 'center' }}>
                                        <Form.Group controlId="favouriteTeam">
                                          <Form.Control className="stat" as="select" value={favouriteTeam || 0} onChange={handleFavoriteTeamChange} disabled={!viewData.canUpdateFavouriteTeam}>
                                            <option value="">Select Favourite Team</option>
                                              {teams.map((team) => (
                                              <option key={team.id} value={team.id}>
                                                  {team.name}
                                              </option>
                                            ))}
                                          </Form.Control>
                                        </Form.Group>
                                      </div>
                                    </Row>
                                    <Row className="stat-row-2 vertical-flex">
                                      <div className='profile-display-name-col'>  
                                        <Button className="fpl-large-btn" onClick={() => setShowUpdateNameModal(true)}>Update</Button>
                                      </div>
                                      <div className='profile-favourite-team-col'>
                                        <Button className="fpl-large-btn" as={Link} to={`/club-leaderboard/${favouriteTeam}`}>View Club Leaderboard</Button>
                                      </div>
                                    </Row>
                                  </div>
                                  <div className='profile-detail-row-2'>
                                    <p className='w-100'><b>Joined </b>{joinedDate}</p>
                                    <p className='w-100'><b>Principal ID </b>{viewData.principalName}</p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className='coins-row' >
                            <Col xs={12} md={3}>
                              <div className='coin-col-1 coin-col'>
                                <div className='coin-icon-col'>
                                  <img src={ICPCoin} alt="sponsor1" className='coin-icon'/>
                                </div>
                                <div className='coin-name-col'>
                                  <Container>
                                    <Row>
                                      <Col>
                                          <div className='coin-name'>ICP</div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col>
                                          <div className='coin-balance'>0.00 <span className='coin-balance-suffix'>ICP</span></div>
                                      </Col>
                                    </Row>
                                  </Container>
                                </div>
                              </div>
                            </Col>
                            <Col xs={12} md={3}>
                            <div className='coin-col-2 coin-col'>
                                <div className='coin-icon-col'>
                                  <img src={FPLCoin} alt="sponsor1" className='coin-icon' />
                                </div>
                                <div className='coin-name-col'>
                                  <Container>
                                    <Row>
                                      <Col>
                                          <div className='coin-name'>FPL</div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col>
                                          <div className='coin-balance'>0.00 <span className='coin-balance-suffix'>FPL</span></div>
                                      </Col>
                                    </Row>
                                  </Container>
                                </div>
                              </div>
                            </Col>
                            <Col xs={12} md={3}>
                              <div className='coin-col-3 coin-col'>
                                <div className='coin-icon-col'>
                                  <img src={ckBTCCoin} alt="sponsor1" className='coin-icon' />
                                </div>
                                <div className='coin-name-col'>
                                  <Container>
                                    <Row>
                                      <Col>
                                          <div className='coin-name'>ckBTC</div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col>
                                          <div className='coin-balance'>0.00 <span className='coin-balance-suffix'>ckBTC</span></div>
                                      </Col>
                                    </Row>
                                  </Container>
                                </div>
                              </div>
                            </Col>
                            <Col xs={12} md={3}>
                              <div className='coin-col-4 coin-col'>
                                <div className='coin-icon-col'>
                                  <img src={ckETHCoin} alt="sponsor1" className='coin-icon' />
                                </div>
                                <div className='coin-name-col'>
                                  <Container>
                                    <Row>
                                      <Col>
                                          <div className='coin-name'>ckETH</div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col>
                                          <div className='coin-balance'>0.00 <span className='coin-balance-suffix'>ETH</span></div>
                                      </Col>
                                    </Row>
                                  </Container>
                                </div>
                              </div>
                            </Col>
                          </Row>
                                  
                          <UpdateNameModal
                            show={showUpdateNameModal}
                            onHide={hideUpdateNameModal}
                            displayName={viewData.displayName}
                          />
                          <UpdateProfilePictureModal
                            show={showUpdateProfilePictureModal}
                            onHide={hideProfilePictureModal}
                          />
                          <UpgradeMembershipModal
                            show={showUpgradeAccountModal}
                            onHide={hideUpgradeAccountModal}
                          />
                          {!loadingAccountBalance && (
                              <WithdrawICPModal
                                show={showWithdrawICPModal}
                                onHide={hideWithdrawICPModal}
                                balance={balanceData.icpBalance}
                              />
                          )}
                          {!loadingAccountBalance && (
                            <WithdrawFPLModal
                              show={showWithdrawFPLModal}
                              onHide={hideWithdrawFPLModal}
                              balance={balanceData.fplBalance}
                            />
                          )}
                        </div>
                      </Tab>
                      <Tab eventKey="gameweeks" title="Gameweeks">
                        <h3 className='mt-4'>Gameweek History Coming Soon</h3>
                      </Tab>
                      <Tab eventKey="governance" title="Governance">
                        <h3 className='mt-4'>Governance History Coming Soon</h3>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {showConfirmFavouriteTeamModal && <ConfirmFavouriteTeamModal
            show={showConfirmFavouriteTeamModal}
            handleClose={() => { setShowConfirmFavouriteTeamModal(false); setSelectedTeamId(null); } }
            handleConfirm={handleConfirmFavouriteTeamClick}
            teamId={selectedTeamId}
            teamName={selectedTeamName}
          />}

        </Container>
    )
  );
};

export default Profile;
