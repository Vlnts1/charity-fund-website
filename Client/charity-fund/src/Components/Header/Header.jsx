import React, {Link} from 'react';
import { Nav } from 'react-bootstrap'
import Menu from './Menu'
import SocialFollow from "../Header/SocialFollow"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
        <Nav.Link onClick={handleLogOut} as={Link} to={"/login"}> <ExitToAppIcon/> Logout</Nav.Link>
        </nav>
        : 'dyxovnistnacii@gmail.com'
        
      }
      </span>
    <span class="navbar-text">
      <SocialFollow/>
    </span>
  </div>
</nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         
          <Menu/>
    </div>
    
  );
}

export default Header;