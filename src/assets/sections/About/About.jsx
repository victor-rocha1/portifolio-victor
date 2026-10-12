import React from 'react';
import './about.css';
import Title from '../../components/Title/Title';
import Icons from '../../components/Icons/Icons';
import logo from '/images/logo.webp';

function About() {
  const socialIcons = [
    { name: 'instagram', link: 'https://www.instagram.com/victor.rocha77/' },
    { name: 'github', link: 'https://www.github.com/victor-rocha1' },
  ];

  return (
    <section className="about-section" id="agencia">
      <div className="interface">
        <Title text="Agência" spantext="VR CODE" tag="Posicionamento & Credibilidade" />

        <div className="about-grid">
          {/* Visual Brand Card */}
          <div className="about-brand-card">
            <div className="orbital-badge">
              <div className="badge-ring ring-outer"></div>
              <div className="badge-ring ring-inner"></div>
              <div className="badge-logo-container">
                <img src={logo} alt="VR CODE" className="badge-logo" />
              </div>
            </div>

            <div className="brand-card-info">
              <h3>VR CODE</h3>
              <p className="brand-subtitle">Tecnologia, Estratégia & Soluções Digitais</p>
              <div className="founder-tag">
                <i className="bi bi-person-badge"></i>
                <span>Fundado por <strong>Victor Rocha</strong></span>
              </div>
            </div>

            <div className="about-socials">
              <Icons icons={socialIcons} size="1.6rem" alignment="center" />
            </div>
          </div>

          {/* About Content & Pillars */}
          <div className="about-details">

            <p className="about-text">
              A <strong>VR CODE</strong> cria experiências digitais que valorizam produtos,
              fortalecem marcas e transformam visitantes em clientes. Unimos design e
              tecnologia para desenvolver soluções sob medida para o seu negócio.
            </p>

            <div className="about-lead">
              Sua ideia merece mais do que um site. Merece uma presença digital que gera resultados.
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <div>
                  <h4>Engenharia Moderna</h4>
                  <p>Aplicações com React, ecossistema PHP (Laravel, CakePHP) e bancos Oracle/PostgreSQL.</p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className="bi bi-kanban"></i>
                </div>
                <div>
                  <h4>Metodologias Ágeis</h4>
                  <p>Gestão com Scrum, Kanban, histórias de usuário e controle de versão profissional via GitLab/GitHub.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;