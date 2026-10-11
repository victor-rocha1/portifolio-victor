import React, { useState } from 'react'; 
import logo from '../../../../public/images/logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import DarkMode from '../../components/DarkMode/DarkMode';

// =Recebe 'darkMode' e 'setDarkMode' como ordens (props)
function NavBar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav-links">
          <a href="#about">Sobre Mim</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#experiences">Experiências</a>
        </div>
        <div className="theme-toggle-wrapper">
          {/* 2. O componente DarkMode usa as props que vieram do App.js */}
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <button className="menu" onClick={toggleMenu}></button>
      </nav>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <button className="close-menu" onClick={closeMenu}>X</button>
          <div className="dark-mode-button">
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        <a href="#">Home</a>
        <a href="#about">Sobre Mim</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#experiences">Experiências</a>
      </div>
    </header>
  );
}

export default NavBar;