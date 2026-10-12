import React, { useState, useEffect } from 'react';
import logo from '/images/logo.webp';
import './navbar.css';
import DarkMode from '../../components/DarkMode/DarkMode';

function NavBar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <a href="#" className="nav-brand" aria-label="VR CODE Início">
          <img src={logo} alt="VR CODE" className="brand-logo" />
        </a>

        <div className="nav-links">
          <a href="#agencia">Agência</a>
          <a href="#skills">Habilidades</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#experiences">Experiência</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="nav-actions">
          <a
            href="https://wa.me/5531972210129"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            title="Conversar no WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
            <span>WhatsApp</span>
          </a>

          <div className="theme-toggle-wrapper">
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <button
            className={`menu-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Alternar Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <div className="mobile-brand">
            <img src={logo} alt="VR CODE" className="brand-logo" />
          </div>
          <button className="close-menu" onClick={closeMenu} aria-label="Fechar Menu">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="side-menu-links">
          <a href="#" onClick={closeMenu}>Início</a>
          <a href="#agencia" onClick={closeMenu}>Agência</a>
          <a href="#skills" onClick={closeMenu}>Habilidades</a>
          <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
          <a href="#experiences" onClick={closeMenu}>Experiência</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>

        <div className="side-menu-footer">
          <a
            href="https://wa.me/5531972210129"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
          >
            <i className="bi bi-whatsapp"></i>
            <span>Conversar no WhatsApp</span>
          </a>

          <div className="mobile-theme-row">
            <span>Tema {darkMode ? 'Escuro' : 'Claro'}</span>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;