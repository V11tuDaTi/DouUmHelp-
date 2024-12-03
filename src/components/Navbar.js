import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo à esquerda */}
      <img src="/assets/logo.png" alt="DouUmHelp Logo" className="navbar-logo" />

      {/* Links de navegação com estilização */}
      <div className="navbar-links">
        <a href="/">Página Inicial</a>
        <a href="/staff">Sobre Nós</a>
      </div>
    </nav>
  );
};

export default Navbar;
