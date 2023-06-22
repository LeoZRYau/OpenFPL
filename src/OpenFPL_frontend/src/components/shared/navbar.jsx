import React, { useState, useContext, useEffect  } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../../assets/logo.png";

const MyNavbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img src={LogoImage} alt="footballgod" style={{ maxWidth: '200px', maxHeight: '100%' }} />
        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-end">
          <Nav.Link as={Link} to="/whitepaper" onClick={() => setExpanded(false)} className="nav-link mx-3">
            Whitepaper
          </Nav.Link>
          <Nav.Link as={Link} to="/gameplay" onClick={() => setExpanded(false)} className="nav-link mx-3">
            Gameplay
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
