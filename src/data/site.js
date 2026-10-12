import imgSpace from '../assets/sections/Projects/images/VRSpaceX.webp';
import imgValidador from '../assets/sections/Projects/images/validador.webp';
import imgCalculadoraPy from '../assets/sections/Projects/images/calculadorapy.webp';
import imgOneBitFlix from '../assets/sections/Projects/images/onebitflix.webp';
import imgJogodeDamas from '../assets/sections/Projects/images/jogo-de-dama.webp';
import imgCadastro from '../assets/sections/Projects/images/cadastro-laravel.webp';
import imgLinkHub from '../assets/sections/Projects/images/linkhub.webp';
import imgFeetCare from '../assets/sections/Projects/images/feetcare.webp';

export const CONTACT = {
  email: 'victor.rocha3203@gmail.com',
  instagram: 'https://www.instagram.com/victor.rocha77/',
  github: 'https://www.github.com/victor-rocha1',
  linkedin: 'https://www.linkedin.com/in/victor-rocha-751376267/',
  whatsapp: null,
};

export const SOCIAL_ICONS = [
  { name: 'instagram', link: CONTACT.instagram },
  { name: 'github', link: CONTACT.github },
];

export const NAV_LINKS = [
  { href: '#agencia', label: 'Agência' },
  { href: '#projects', label: 'Projetos' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
];

export const PROJECTS = [
  {
    id: 'vrspacex',
    name: 'VRSpaceX',
    description: 'Interface inspirada na SpaceX, desenvolvida com Bootstrap.',
    img: imgSpace,
    github: 'https://github.com/victor-rocha1/SpaceX-Bootstrap',
  },
  {
    id: 'damas',
    name: 'Jogo de Damas',
    description: 'Projeto acadêmico de jogo de damas.',
    img: imgJogodeDamas,
    github: 'https://github.com/victor-rocha1/jogo-de-damas',
  },
  {
    id: 'onebitflix',
    name: 'OneBitFlix',
    description: 'Aplicação no formato de plataforma de streaming.',
    img: imgOneBitFlix,
    github: 'https://github.com/victor-rocha1/onebitflix',
  },
  {
    id: 'linkhub',
    name: 'LinkHub',
    description: 'Centralizador de links para presença digital.',
    img: imgLinkHub,
    github: 'https://github.com/victor-rocha1/linkhub',
  },
  {
    id: 'feetcare',
    name: 'Premier Feet Care Podologia',
    description: 'Site em andamento para clínica de podologia.',
    img: imgFeetCare,
    github: 'https://github.com/victor-rocha1/premier_feet_care_podologia',
  },
  {
    id: 'cadastro',
    name: 'Cadastro Laravel',
    description: 'Aplicação de cadastro desenvolvida com Laravel.',
    img: imgCadastro,
    github: 'https://github.com/victor-rocha1/cadastro_laravel',
  },
  {
    id: 'validador',
    name: 'Validador de Email e Senha',
    description: 'Validação de e-mail e senha no front-end.',
    img: imgValidador,
    github: 'https://github.com/victor-rocha1/Validador-de-Email-e-Senha',
  },
  {
    id: 'calculadora-py',
    name: 'Calculadora Python',
    description: 'Calculadora desenvolvida em Python.',
    img: imgCalculadoraPy,
    github: 'https://github.com/victor-rocha1/Calculadora-Python',
  },
];
