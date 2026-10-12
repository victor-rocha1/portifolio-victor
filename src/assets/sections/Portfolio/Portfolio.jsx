import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { projectsData } from '../../../data/projectsData';
import './portfolio.css';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="interface">
        {/* Title strictly at top of section */}
        <Title text="Meu" spantext="Portfólio" tag="Experiências Completas" />

        <p className="portfolio-intro">
          Aplicações concebidas de ponta a ponta. Passe o cursor sobre os cards para rolar a página ou clique em <strong>Ver Completa</strong> para inspecionar em tela cheia.
        </p>

        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="portfolio-card">
              {/* Browser window top bar */}
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="b-dot red"></span>
                  <span className="b-dot yellow"></span>
                  <span className="b-dot green"></span>
                </div>
                <div className="browser-address">
                  <span>{project.text.toLowerCase().replace(/[^a-z0-9]/g, '')}.vrcode.dev</span>
                </div>
                <div className="browser-action">
                  <button
                    className="expand-icon-btn"
                    onClick={() => setSelectedProject(project)}
                    title="Expandir em tela cheia"
                    aria-label={`Expandir imagem de ${project.text}`}
                  >
                    <i className="bi bi-arrows-fullscreen"></i>
                  </button>
                </div>
              </div>

              {/* Viewport with controlled height and smooth hover-scroll */}
              <div
                className="browser-viewport"
                onClick={() => setSelectedProject(project)}
                title="Clique para visualizar em tela cheia"
              >
                <div className="viewport-scroll-track">
                  <img
                    src={project.img}
                    alt={`Página completa do projeto ${project.text}`}
                    className="portfolio-img-long"
                    loading="lazy"
                  />
                </div>
                <div className="viewport-hover-hint">
                  <i className="bi bi-arrows-expand"></i>
                  <span>Clique para expandir</span>
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="portfolio-info">
                <div className="portfolio-meta-row">
                  <span className="portfolio-cat-badge">{project.category}</span>
                  <span className="portfolio-id">#{String(project.id).padStart(2, '0')}</span>
                </div>

                <h3 className="portfolio-title">{project.text}</h3>
                <p className="portfolio-description">{project.desc}</p>

                <div className="portfolio-card-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-action-btn"
                      title="Acessar repositório no GitHub"
                    >
                      <i className="bi bi-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    className="preview-action-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <i className="bi bi-eye"></i>
                    <span>Ver Completa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for full inspection */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
