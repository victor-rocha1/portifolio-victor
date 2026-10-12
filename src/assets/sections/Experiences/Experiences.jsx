import React from 'react';
import Title from '../../components/Title/Title';
import './experiences.css';
import logo_prodemge from '/images/logo_prodemge.webp';

function Experiences() {
  return (
    <section className="experiences-section" id="experiences">
      <div className="interface">
        <Title text="Minha" spantext="Experiência" tag="Carreira & Atuação" />

        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {/* Item 1: Analista de T.I */}
          <div className="timeline-block right-block">
            <div className="timeline-node">
              <div className="node-pulse"></div>
            </div>

            <div className="timeline-card-content">
              <div className="timeline-card-header">
                <div className="role-date-badge">
                  <span>Dez 25</span> &mdash; <strong className="current-badge">Atual</strong>
                </div>
                <img src={logo_prodemge} alt="Prodemge" className="experience-logo" />
              </div>

              <h3 className="role-title">Analista de T.I</h3>
              <p className="company-name">Prodemge &bull; Companhia de Tecnologia da Informação do Estado de MG</p>

              <ul className="role-responsibilities">
                <li>
                  Manutenção e evolução contínua do <span className="highlight-tech">Sistema do Protocolo Digital</span>.
                </li>
                <li>
                  Sustentação e melhorias críticas no <span className="highlight-tech">Sistema de Cadastro de Despachantes</span>.
                </li>
                <li>
                  Desenvolvimento e sustentação com <span className="highlight-tech">CakePHP, Laravel, Oracle SQL</span> e <span className="highlight-tech">Bootstrap</span>.
                </li>
                <li>
                  Adequação regulatória de sistemas corporativos ao <span className="highlight-tech">novo formato de CNPJ Alfanumérico</span>, aplicando testes automatizados e validações.
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2: Estagiário */}
          <div className="timeline-block left-block">
            <div className="timeline-node">
              <div className="node-pulse"></div>
            </div>

            <div className="timeline-card-content">
              <div className="timeline-card-header">
                <div className="role-date-badge">
                  <span>Out 24</span> &mdash; <span>Nov 25</span>
                </div>
                <img src={logo_prodemge} alt="Prodemge" className="experience-logo" />
              </div>

              <h3 className="role-title">Estagiário de Tecnologia</h3>
              <p className="company-name">Prodemge &bull; Companhia de Tecnologia da Informação do Estado de MG</p>

              <ul className="role-responsibilities">
                <li>
                  Aplicação diária de Metodologias Ágeis (<span className="highlight-tech">Scrum & Kanban</span>) em squad interdisciplinar.
                </li>
                <li>
                  Refinamento e escrita de <span className="highlight-tech">Histórias de Usuário</span>, critérios de aceite e gestão de branches no <span className="highlight-tech">GitLab</span>.
                </li>
                <li>
                  Evolução do <span className="highlight-tech">Sistema de Envio de Correspondências de Trânsito</span>, garantindo estabilidade e integridade dos dados enviados.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;