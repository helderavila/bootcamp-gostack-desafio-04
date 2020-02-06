import React from 'react';

import './header.css';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header-background">
      <nav className="header-nav">
        <img src={logo} />
        <a>Meu Perfil</a>
      </nav>
    </header>
  )
}

export default Header;