import React, {Link} from 'react';
import {Container, Col, Row, Nav, Ratio, Card } from 'react-bootstrap'
import Menu from './Menu'
import SocialFollow from "../Header/SocialFollow"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logomain from "../../assets/logomain.jpg"

function Header(  {isLoggedIn, setIsLoggedIn, userName, setIsAdmin } ) {

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn', false)
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };
  return (
    <div className="App">
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
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
  </div>
</nav>
        <Container>
        <Row>
          <Col>
          <Ratio aspectRatio={50} style={{margin: "2% auto"}}>
          <Card.Img variant="top" src={logomain} />
          </Ratio>
          </Col>
          <Col></Col>
          <Col></Col>
          <br></br>
        </Row>
        </Container>
         
          <Menu/>
    </div>
    
  );
}

export default Header;