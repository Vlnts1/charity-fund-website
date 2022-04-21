import React, {Link} from 'react';
import {Nav } from 'react-bootstrap'

import SocialFollow from "../Header/SocialFollow"
import LanguageSwitcher from './LanguageSwitcher'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { textAlign } from '@mui/system';

function Header(  {isLoggedIn, setIsLoggedIn, userName } ) {

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false)
  };
  return (
    <div className="App">
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
    <LanguageSwitcher/>
    </span>
    { 
          isLoggedIn ?
          <nav style={{textAlign: "center"}}>
        Ласкаво просимо, <strong> {userName} </strong>
        <Nav.Link onClick={handleLogOut} as={Link} to={"/login"}> <ExitToAppIcon/> Logout</Nav.Link>
        </nav>
        : 'Admin Panel'
        
      }
    <span class="navbar-text">
      <SocialFollow/>
    </span>
  </div>
</nav>
    </div>
  );
}

export default Header;