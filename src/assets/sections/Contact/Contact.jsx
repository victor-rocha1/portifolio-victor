import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import './contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'victor.rocha3203@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-section" id="contato">
      <div className="interface">
        <Title text="Entre em" spantext="Contato" tag="Vamos Conversar?" />

        <div className="contact-card">
          <div className="contact-glow-orb"></div>

          <h3 className="contact-headline">
            Pronto para transformar sua visão em uma experiência digital única?
          </h3>
          <p className="contact-subheadline">
            Seja para desenvolvimento web sob medida ou landing pages de alta conversão para seu negócio.
          </p>

          <div className="contact-primary-actions">
            <a
              href="https://wa.me/5531972210129"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <i className="bi bi-whatsapp"></i>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={copyEmail}
              className={`contact-copy-btn ${copied ? 'copied' : ''}`}
              title="Clique para copiar email"
            >
              <i className={`bi ${copied ? 'bi-check-lg' : 'bi-envelope'}`}></i>
              <span>{copied ? 'Email Copiado!' : email}</span>
            </button>
          </div>

          <div className="contact-channels-grid">
            <a
              href="mailto:victor.rocha3203@gmail.com"
              className="channel-item"
              title="Enviar e-mail"
            >
              <div className="channel-icon">
                <i className="bi bi-envelope-at"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">E-mail</span>
                <span className="channel-value">{email}</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/victor-rocha-751376267/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-item"
              title="LinkedIn de Victor Rocha"
            >
              <div className="channel-icon">
                <i className="bi bi-linkedin"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">LinkedIn</span>
                <span className="channel-value">Victor Rocha</span>
              </div>
            </a>

            <a
              href="https://www.github.com/victor-rocha1"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-item"
              title="GitHub"
            >
              <div className="channel-icon">
                <i className="bi bi-github"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">GitHub</span>
                <span className="channel-value">@victor-rocha1</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/victor.rocha77/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-item"
              title="Instagram"
            >
              <div className="channel-icon">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">Instagram</span>
                <span className="channel-value">@victor.rocha77</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
