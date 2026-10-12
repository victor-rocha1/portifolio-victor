import React from 'react';
import Title from '../../components/Title/Title';
import './skills.css';

import reactIcon from '/images/react.webp';
import jsIcon from '/images/js.webp';
import htmlIcon from '/images/html.webp';
import cssIcon from '/images/css.webp';
import phpIcon from '/images/php.webp';
import laravelIcon from '/images/laravel.webp';
import pythonIcon from '/images/python.webp';
import postgresIcon from '/images/postgres.webp';
import sqlIcon from '/images/sql.webp';
import gitIcon from '/images/git.webp';
import githubIcon from '/images/github.webp';

const techs = [
  { name: 'React', src: reactIcon, category: 'Front-End' },
  { name: 'JavaScript', src: jsIcon, category: 'Linguagem' },
  { name: 'HTML5', src: htmlIcon, category: 'Front-End' },
  { name: 'CSS3', src: cssIcon, category: 'Estilização' },
  { name: 'PHP', src: phpIcon, category: 'Back-End' },
  { name: 'Laravel', src: laravelIcon, category: 'Framework PHP' },
  { name: 'Python', src: pythonIcon, category: 'Automação' },
  { name: 'PostgreSQL', src: postgresIcon, category: 'Banco de Dados' },
  { name: 'Oracle SQL', src: sqlIcon, category: 'Banco de Dados' },
  { name: 'Git', src: gitIcon, category: 'Versionamento' },
  { name: 'GitHub', src: githubIcon, category: 'Repositório' },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="interface">
        <Title text="Habilidades" spantext="Gerais" tag="Stack & Domínio Técnico" />

        <div className="skills-pillars-grid">
          <div className="skill-box">
            <div className="skill-box-header">
              <div className="skill-icon-wrap">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Programação</h3>
            </div>
            <p>
              No <span>Front End</span>, interfaces modernas e responsivas utilizando{' '}
              <span>React</span>, <span>JavaScript</span>, <span>HTML5</span> e <span>CSS3</span>. <br />
              No <span>Back End</span>, desenvolvimento sólido em <span>PHP</span> com frameworks{' '}
              <span>CakePHP</span> e <span>Laravel</span>, integrado a bancos relacionais como <span>Oracle</span> e <span>PostgreSQL</span>.
            </p>
          </div>

          <div className="skill-box">
            <div className="skill-box-header">
              <div className="skill-icon-wrap">
                <i className="bi bi-fast-forward"></i>
              </div>
              <h3>Automação</h3>
            </div>
            <p>
              Criação de fluxos inteligentes e integração de serviços via <span>n8n</span> para eliminação
              de gargalos manuais. Desenvolvimento de scripts eficientes em <span>Python</span> para{' '}
              <span>automação de rotinas repetitivas</span> e processamento de dados com alta agilidade.
            </p>
          </div>

          <div className="skill-box">
            <div className="skill-box-header">
              <div className="skill-icon-wrap">
                <i className="bi bi-clipboard-data"></i>
              </div>
              <h3>Metodologias Ágeis</h3>
            </div>
            <p>
              Vivência prática em times de tecnologia aplicando <span>Scrum</span> e <span>Kanban</span>.
              Elaboração minuciosa de <span>Análise de Requisitos</span>, detalhamento de{' '}
              <span>Histórias de Usuário</span> e gestão do ciclo de vida de software via <span>GitLab</span> e <span>GitHub</span>.
            </p>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="tech-stack-container">
          <div className="tech-stack-title">Tecnologias & Ferramentas</div>
          <div className="tech-grid">
            {techs.map((tech, index) => (
              <div key={index} className="tech-badge" title={`${tech.name} - ${tech.category}`}>
                <div className="tech-icon-container">
                  <img src={tech.src} alt={tech.name} loading="lazy" />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;