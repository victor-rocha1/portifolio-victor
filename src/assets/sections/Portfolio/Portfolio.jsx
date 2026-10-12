import { useState } from 'react';
import Title from '../../components/Title/Title';
import Reveal from '../../components/Reveal/Reveal';
import { PROJECTS } from '../../../data/site';
import './portfolio.css';

function Portfolio() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="interface">
        <Reveal>
          <p className="section-kicker">Páginas completas</p>
          <Title text="Meu " spantext="Portfólio" />
        </Reveal>

        <div className="portfolio__grid">
          {PROJECTS.map((project, index) => {
            const isOpen = expanded === project.id;
            return (
              <Reveal key={project.id} delay={index * 60}>
                <article className={`portfolio-card ${isOpen ? 'is-open' : ''}`}>
                  <div className="portfolio-card__preview">
                    <img
                      src={project.img}
                      alt={`Página completa do projeto ${project.name}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="portfolio-card__body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-card__actions">
                      <button
                        type="button"
                        className="cta-button cta-button--ghost"
                        onClick={() => setExpanded(isOpen ? null : project.id)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Recolher' : 'Ver página completa'}
                      </button>
                      <a
                        className="github-link"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir repositório ${project.name} no GitHub`}
                      >
                        <i className="bi bi-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
