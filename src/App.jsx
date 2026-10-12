import React, { useState, useEffect } from 'react';
import Preloader from './assets/components/Preloader/Preloader';
import TechBackground from './assets/components/TechBackground/TechBackground';
import NavBar from './assets/sections/NavBar/NavBar';
import Hero from './assets/sections/Hero/Hero';
import About from './assets/sections/About/About';
import Skills from './assets/sections/Skills/Skills';
import Portfolio from './assets/sections/Portfolio/Portfolio';
import Experiences from './assets/sections/Experiences/Experiences';
import Contact from './assets/sections/Contact/Contact';
import Footer from './assets/sections/Footer/Footer';
import ButtonTop from './assets/components/ButtonTop/buttonTop';

function App() {
  // Dark Mode como padrão, conforme especificação
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="app-layout">
      {/* Preloader com VR logo */}
      <Preloader />

      {/* Background animado inspirado na SYDLE com partículas e anéis orbitais */}
      <TechBackground darkMode={darkMode} />

      {/* Header com navegação e controle de tema com animação Sol/Lua */}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* Hero Section: "Impacto com relevância." */}
        <Hero />

        {/* Seção Agência / About */}
        <About />

        {/* Seção Habilidades Gerais */}
        <Skills />

        {/* Seção Meu Portfólio - Páginas completas com hover scroll & modal */}
        <Portfolio />

        {/* Seção Minha Experiência - Timeline tecnológica */}
        <Experiences />

        {/* Seção Contato - WhatsApp CTA, email e canais */}
        <Contact />
      </main>

      {/* Rodapé sofisticado */}
      <Footer />

      {/* Botão flutuante voltar ao topo */}
      <ButtonTop />
    </div>
  );
}

export default App;