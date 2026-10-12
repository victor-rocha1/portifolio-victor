import Title from '../../components/Title/Title';
import Icons from '../../components/Icons/Icons';
import Reveal from '../../components/Reveal/Reveal';
import { CONTACT, SOCIAL_ICONS } from '../../../data/site';
import './contact.css';

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="interface">
        <Reveal>
          <p className="section-kicker">Vamos conversar</p>
          <Title text="Entre em " spantext="contato" />
          <p className="contact__lead">
            Conte a ideia. A VR CODE avalia o contexto e propõe o próximo passo
            com clareza técnica e visual.
          </p>
          <a className="cta-button" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <div className="contact__social">
            <Icons icons={SOCIAL_ICONS} size="1.6rem" alignment="center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
