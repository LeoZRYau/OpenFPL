import React, { useState, useContext, useEffect  } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon, WalletIcon } from '../icons';
import { CustomToggle } from '../helpers';
import { useLocation } from 'react-router-dom';
import ProfileImage from '../../../assets/profile_placeholder.png';

const MyNavbar = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [profilePicSrc, setProfilePicSrc] = useState(ProfileImage);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);

    return () => {
        document.body.removeEventListener('click', handleClickOutside);
    };
}, []);


  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);
  
  const handleClickOutside = (e) => {
    const navbar = document.querySelector('.custom-navbar');
    // Assuming your disconnect panel has a class 'disconnect-panel'
    const disconnectPanel = document.querySelector('.disconnect-panel');
  
    if (!navbar.contains(e.target) && !disconnectPanel.contains(e.target)) {
      setShowDropdown(false);
      setExpanded(false);
    }
  };
  

  const handleLogout = async () => {
    setShowDropdown(false);
    setExpanded(false)
    logout();
  };
  
  const handleDropdownBlur = (e) => {
    const currentTarget = e.currentTarget;
    if (!currentTarget.contains(document.activeElement)) {
      setShowDropdown(false);
      setExpanded(false)
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <Navbar className='mb-3 custom-navbar' expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center" style={{color: "white", fontSize: "small"}}>
            <LogoIcon /> <b className="logo-text">OpenFPL</b>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-end">
          {isAuthenticated && 
            <>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={`custom-nav-link mt-2 mt-md-0 ${isActive('/') ? 'active-link' : ''}`}>
                Home
                { isActive('/') && <div className="nav-caret"></div>}
              </Nav.Link> 
              <Nav.Link as={Link} to="/pick-team" onClick={() => setExpanded(false)} className={`custom-nav-link mt-2 mt-md-0 ${isActive('/league-table') ? 'active-link' : ''}`}>
                Squad Selection
                { isActive('/pick-team') && <div className="nav-caret"></div>}
             </Nav.Link> 
              <Nav.Link as={Link} to="/governance" onClick={() => setExpanded(false)} className={`custom-nav-link mt-2 mt-md-0 ${isActive('/governance') ? 'active-link' : ''}`}>
                Governance
                { isActive('/governance') && <div className="nav-caret"></div>}
              </Nav.Link> 
              <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)} className={`custom-nav-link mt-2 mt-md-0 vertical-flex ${isActive('/profile') ? 'active-link' : ''}`}>
                Profile
                <Image src={profilePicSrc} roundedCircle className="nav-profile-image d-lg-none" onClick={() => setShowDropdown(!showDropdown)} />
                { isActive('/profile') && <div className="nav-caret"></div>}
              </Nav.Link> 
              <div className="d-none d-lg-block disconnect-panel">
                <Dropdown show={showDropdown}>
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <Image src={profilePicSrc} roundedCircle className="nav-profile-image" onClick={() => setShowDropdown(!showDropdown)} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100 nav-dropdown-menu">
                    <Dropdown.Item className="w-100 disconnect" eventKey="1" onClick={handleLogout}>Disconnect</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Nav.Link onClick={() => handleLogout()} className={`custom-nav-link mt-2 d-lg-none mt-md-0 ${isActive('/profile') ? 'active-link' : ''}`} style={{display: 'flex'}}>
                Disconnect
                { isActive('/profile') && <div className="nav-caret"></div>}
              </Nav.Link> 
              <Image src={profilePicSrc} roundedCircle className="nav-profile-image d-none" onClick={() => setShowDropdown(!showDropdown)} />
             </>
          }
          {!isAuthenticated && 
            <button className="wallet-icon" onClick={() => { login(); setShowDropdown(false); setExpanded(false); }}>Connect <WalletIcon className="custom-icon" ></WalletIcon></button>
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
