import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import TwitterIcon from '../../../assets/twitter.png';
import DiscordIcon from '../../../assets/discord.png';
import OpenChatIcon from '../../../assets/openchat.png';
import TelegramLogo from '../../../assets/telegram.png';
import LogoImage from '../../../assets/logo.png';

const MyFooter = () => {
  return (
    <footer className="footer mt-auto py-3 custom-footer">
      <Container>
        <Row>
          <Col md={4} className="text-start">
            {/* Place additional content if needed */}
          </Col>
          <Col md={4} xs={12} className="text-center">
            <div className="social-icons">
                <a href="https://twitter.com/OpenFPL_DAO" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://t.co/WmOhFA8JUR" target="_blank" rel="noopener noreferrer">
                  <img src={DiscordIcon} alt="Discord" className="social-icon" />
                </a>
                <a href="https://oc.app/community/uf3iv-naaaa-aaaar-ar3ta-cai/?ref=zv6hh-xaaaa-aaaar-ac35q-cai" target="_blank" rel="noopener noreferrer">
                  <img src={OpenChatIcon} alt="OpenChat" className="social-icon" />
                </a>
                <a href="https://t.co/vVkquMrdOu" target="_blank" rel="noopener noreferrer">
                  <img src={TelegramLogo} alt="OpenChat" className="social-icon" />
                </a>
            </div>
            <img src={LogoImage} alt="openFPL" style={{ maxWidth: '100px', maxHeight: '100%', marginTop: '10px' }} />
          </Col>
          <Col md={4} xs={12} className="text-md-end text-center">
            <Row className="mt-4">
              <Col md={6} xs={12}>
                <ul className="footer-links">
                  <li><LinkContainer to="/whitepaper"><a>Open FPL Whitepaper</a></LinkContainer></li>
                  <li><LinkContainer to="/dao"><a>Open FPL DAO Actions</a></LinkContainer></li>
                  <li><LinkContainer to="/gameplay"><a>Open FPL Gameplay Rules</a></LinkContainer></li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <ul className="footer-links">
                    <li><LinkContainer to="/architecture"><a>OpenFPL Architecture</a></LinkContainer></li>
                    <li><LinkContainer to="/definitions"><a>Further Definitions</a></LinkContainer></li>
                    <li><LinkContainer to="/terms"><a>Terms and Conditions</a></LinkContainer></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
