import React from 'react';

import SocialFollow from "../Header/SocialFollow"
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
  return (
    <div className="App">
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
    <LanguageSwitcher/>
    </span>
    <span class="navbar-text">
      <SocialFollow/>
    </span>
  </div>
</nav>
    </div>
  );
}

export default Header;