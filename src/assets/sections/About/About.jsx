import './about.css';
import avatarLight from '../../../../public/images/avatar.jpg';
import avatarDark from '../../../../public/images/avatar-dark.jpg';
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
            <img src={darkMode ? avatarDark : avatarLight} alt="Avatar de Victor" />
          </div>
          <div className="about-content">
            <Title text='Victor' spantext='Rocha' />
            <p className="desc">Desenvolvedor</p>
            <ul className='description-list'>
              <li>Formado em Análise e Desenvolvimento de Sistemas<span>.</span></li>
              <li>Estudante de diversos cursos na área de tecnologia, focados em Programação<span>.</span></li>
              <li>Assessor de T.I na Prodemge<span>.</span></li>
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