import './about.css';
import avatar from '../../../../public/images/avatar.jpg';
import fundo from '../../../../public/images/fundo.png'; 
import fundoEscuro from '../../../../public/images/fundo-escuro.png';

import Title from '../../components/Title/Title';
import Icons from '../../components/Icons/Icons';

function About({ darkMode }) {
  const socialIcons = [
    { name: 'instagram', link: 'https://www.instagram.com/victor.rocha77/' },
    { name: 'github', link: 'https://www.github.com/victor-rocha1' },
  ];

  return (
    <section
      className='about'
      id='about'
      style={{ backgroundImage: `url(${darkMode ? fundoEscuro : fundo})` }}
    >
      <div className="interface">
        <div className="about2">
          <div className="avatar">
            <img src={avatar} alt="Avatar de Victor" />
          </div>
          <div className="about-content">
            <Title text='Victor' spantext='Rocha' />
            <p className="desc">Desenvolvedor Full Stack</p>
            <ul className='description-list'>
              <li>🎓 Graduado em <strong>Análise e Desenvolvimento de Sistemas</strong>.</li>
              <li>💻 Gosto de trabalhar com React e frameworks de Php (Laravel, CakePHP).</li>
              <li>🏢 Assessor de T.I na <strong>Prodemge</strong>, focado em soluções eficientes.</li>
            </ul>
            <br />
            <br />
            <Icons icons={socialIcons} size="2rem" alignment="flex-start" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;