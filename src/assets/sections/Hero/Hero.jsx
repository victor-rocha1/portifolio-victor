import { CONTACT } from '../../../data/site';
import Reveal from '../../components/Reveal/Reveal';
import './hero.css';

function Hero() {
  const primaryHref = CONTACT.whatsapp || '#contato';

  return (
    <section className="hero section" id="inicio">
      <div className="interface hero__grid">
        <Reveal>
          <p className="section-kicker">VR CODE</p>
          <h1 className="hero__title">Impacto com relevância.</h1>
          <p className="hero__lead">
            Estratégia, criatividade e resultados para transformar ideias em experiências digitais.
          </p>
          <div className="hero__actions">
            <a className="cta-button" href={primaryHref}>
              CHAMAR NO WHATSAPP
            </a>
            <a className="cta-button cta-button--ghost" href="#portfolio">
              Ver portfólio
            </a>
          </div>
        </Reveal>

        <div className="hero__stage" aria-hidden="true">
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
          <div className="hero__core">VR</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
