import logo from '../../../../public/images/logo.webp';
import Title from '../../components/Title/Title';
import Icons from '../../components/Icons/Icons';
import Reveal from '../../components/Reveal/Reveal';
import { SOCIAL_ICONS } from '../../../data/site';
import './about.css';

function About() {
  return (
    <section className="about section" id="agencia">
      <div className="interface about2">
        <Reveal className="about-visual">
          <div className="about-mark">
            <div className="about-mark__ring" />
            <img src={logo} alt="Logotipo VR CODE" className="brand-logo about-mark__logo" />
          </div>
        </Reveal>

        <Reveal className="about-content" delay={120}>
          <p className="section-kicker">Agência</p>
          <Title text="VR" spantext="CODE" />
          <p className="desc">Tecnologia, estratégia e criação de soluções digitais.</p>
          <ul className="description-list">
            <li>
              A VR CODE desenvolve experiências digitais com atenção à forma, ao código
              e ao resultado — da interface à entrega.
            </li>
            <li>
              Graduação em <strong>Análise e Desenvolvimento de Sistemas</strong>, com atuação
              em React e frameworks PHP (Laravel e CakePHP).
            </li>
            <li>
              Experiência em soluções de T.I na <strong>Prodemge</strong>, com foco em
              manutenção, evolução de sistemas e qualidade.
            </li>
          </ul>
          <Icons icons={SOCIAL_ICONS} size="1.6rem" alignment="flex-start" />
        </Reveal>
      </div>
    </section>
  );
}

export default About;
