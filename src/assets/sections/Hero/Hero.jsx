import React from 'react';
import './hero.css';
import logo from '/images/logo.webp';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="interface hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-pulse"></span>
            <span>VR CODE &bull; Soluções Digitais</span>
          </div>

          <h1 className="hero-title">
            Impacto com <span className="hero-highlight">relevância.</span>
          </h1>

          <p className="hero-subtitle">
            Estratégia, criatividade e resultados para transformar ideias em experiências digitais.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="hero-btn-primary">
              <span>Entrar em contato</span>
              <i className="bi bi-arrow-right"></i>
            </a>

            <a href="#portfolio" className="hero-btn-secondary">
              <span>Conhecer Projetos</span>
              <i className="bi bi-chevron-down"></i>
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge-item">
              <i className="bi bi-layers"></i>
              <span>Full Stack</span>
            </div>
            <div className="badge-item">
              <i className="bi bi-lightning-charge"></i>
              <span>Alta Performance</span>
            </div>
            <div className="badge-item">
              <i className="bi bi-shield-check"></i>
              <span>Código Limpo</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbital-system">
            <div className="orbital-track track-1">
              <div className="orbit-node node-1"></div>
            </div>
            <div className="orbital-track track-2">
              <div className="orbit-node node-2"></div>
            </div>
            <div className="orbital-track track-3">
              <div className="orbit-node node-3"></div>
            </div>
            <div className="orbital-core">
              <img src={logo} alt="VR CODE Core" className="core-logo" />
              <div className="core-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
