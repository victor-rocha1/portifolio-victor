import { useEffect, useState } from 'react';
import logo from '../../../../public/images/logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import DarkMode from '../../components/DarkMode/DarkMode';
import { CONTACT, NAV_LINKS } from '../../../data/site';

function NavBar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const contactHref = CONTACT.whatsapp || `mailto:${CONTACT.email}`;
  const contactLabel = CONTACT.whatsapp ? 'WhatsApp' : 'Contato';

  return (
    <header>
      <nav className="site-nav" aria-label="Principal">
        <a href="#inicio" className="site-nav__brand" onClick={closeMenu}>
          <img src={logo} alt="VR CODE" className="brand-logo" />
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="site-nav__tools">
          <a
            className="site-nav__contact"
            href={contactHref}
            target={CONTACT.whatsapp ? '_blank' : undefined}
            rel={CONTACT.whatsapp ? 'noopener noreferrer' : undefined}
          >
            {contactLabel}
          </a>
          <div className="theme-toggle-wrapper">
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <button
            className={`menu ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-lateral"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            type="button"
          />
        </div>
      </nav>

      <div
        className={`side-menu ${isMenuOpen ? 'open' : ''}`}
        id="menu-lateral"
        aria-hidden={!isMenuOpen}
      >
        <div className="side-menu-header">
          <button className="close-menu" onClick={closeMenu} type="button" aria-label="Fechar menu">
            X
          </button>
          <div className="dark-mode-button">
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href={contactHref} onClick={closeMenu}>{contactLabel}</a>
      </div>

      {isMenuOpen && (
        <button className="menu-backdrop" aria-label="Fechar menu" onClick={closeMenu} type="button" />
      )}
    </header>
  );
}

export default NavBar;
