import Icons from '../../components/Icons/Icons';
import logo from '../../../../public/images/logo.webp';
import { CONTACT, NAV_LINKS, SOCIAL_ICONS } from '../../../data/site';
import './footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logo-footer">
          <a href="#inicio">
            <img id="logotipo" src={logo} alt="Logotipo VR CODE" className="brand-logo" />
          </a>
        </div>
        <nav className="footer-nav" aria-label="Rodapé">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="social-icons">
          <Icons icons={SOCIAL_ICONS} size="1.5rem" alignment="flex-end" />
        </div>
      </div>
      <div className="footer-line" />
      <div className="contact-info">
        <p>
          <i className="bi bi-envelope-fill" aria-hidden="true" />
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <small>© {year} VR CODE. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

export default Footer;
