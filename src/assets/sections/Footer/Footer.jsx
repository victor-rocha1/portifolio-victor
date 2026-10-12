import React from 'react';
import logo from '/images/logo.webp';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-site" id="footer">
      <div className="interface">
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-link">
              <img src={logo} alt="VR CODE" className="footer-logo-img" />
              <span className="footer-brand-title">
                VR <span>CODE</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Estratégia, engenharia de software e experiências digitais modernas concebidas com precisão e propósito.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4>Navegação</h4>
            <div className="footer-nav-links">
              <a href="#">Início</a>
              <a href="#agencia">Agência</a>
              <a href="#skills">Habilidades</a>
              <a href="#portfolio">Portfólio</a>
              <a href="#experiences">Experiência</a>
              <a href="#contato">Contato</a>
            </div>
          </div>

          <div className="footer-social-col">
            <h4>Conectar</h4>
            <div className="footer-social-icons">
              <a
                href="https://wa.me/5531972210129"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/victor-rocha-751376267/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.github.com/victor-rocha1"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.instagram.com/victor.rocha77/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="mailto:victor.rocha3203@gmail.com"
                title="Email"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <div className="footer-email-tag">
              <i className="bi bi-envelope"></i>
              <span>victor.rocha3203@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-divider-line"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>VR CODE</strong>. Todos os direitos reservados.
          </p>
          <p className="footer-signature">
            Desenvolvido por <span>Victor Rocha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;