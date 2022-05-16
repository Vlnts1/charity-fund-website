import React from 'react';
import {Container, Nav, Navbar,NavDropdown } from 'react-bootstrap'
import {Link} from "react-router-dom";
import SocialFollow from "../Header/SocialFollow"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import rainbow from '../../assets/images/rainbow (2).png'
function Header(  {isLoggedIn, setIsLoggedIn, userName, setIsAdmin } ) {

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn', false)
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid style={{width: "90%"}}>
            <Navbar.Brand href="#"><img src={rainbow}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/"}>Головна</Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>Про нас</Nav.Link>
                  <Nav.Link as={Link} to={"/projects"}>Проекти</Nav.Link>
                  <NavDropdown title="Новини" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to={"/blog"}>Блог</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/reports"}>Звіти</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/contacts"}>Контакти</Nav.Link>
                </Nav>  
              <span class="text" style={{textAlign: "center"}}>
                { 
                  isLoggedIn ?
                    <nav style={{textAlign: "center"}}>
                    Адмін, <strong> {userName} </strong>
                    <Nav.Link onClick={handleLogOut} exact to="/login"> <ExitToAppIcon/> Logout</Nav.Link>
                    </nav>
                  : 'dyxovnistnacii@gmail.com'
                }
                </span>
                <span class="navbar-text">
                  <SocialFollow/>
                </span>
            </Navbar.Collapse>
          </Container>
      </Navbar>        
    </div>
    
  );
}

export default Header;