import React, { useEffect } from 'react';
import './projectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <div className="project-modal-title-group">
            <h3>{project.text}</h3>
            {project.category && <span className="modal-category-tag">{project.category}</span>}
          </div>
          <div className="project-modal-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-github-btn"
                title="Acessar código no GitHub"
              >
                <i className="bi bi-github"></i>
                <span>Ver no GitHub</span>
              </a>
            )}
            <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="project-modal-viewport">
          <div className="viewport-topbar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="viewport-url">{project.text.toLowerCase().replace(/\s+/g, '-')}.vrcode.dev</span>
          </div>
          <div className="viewport-scroll-area">
            <img src={project.img} alt={`Página completa do projeto ${project.text}`} className="modal-full-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
