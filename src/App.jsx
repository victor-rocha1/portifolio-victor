import { useEffect, useState } from 'react';
import NavBar from './assets/sections/NavBar/NavBar';
import Hero from './assets/sections/Hero/Hero';
import About from './assets/sections/About/About';
import Projects from './assets/sections/Projects/Projects';
import Portfolio from './assets/sections/Portfolio/Portfolio';
import Experiences from './assets/sections/Experiences/Experiences';
import Contact from './assets/sections/Contact/Contact';
import Footer from './assets/sections/Footer/Footer';
import Skills from './assets/sections/Skills/Skills';
import ButtonTop from './assets/components/ButtonTop/buttonTop';
import Background from './assets/components/Background/Background';
import Preloader from './assets/components/Preloader/Preloader';

const THEME_KEY = 'vr-theme';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = window.localStorage.getItem(THEME_KEY);
    return saved ? saved === 'dark' : true;
  });
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    window.localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setBooting(false);
    };

    if (document.readyState === 'complete') {
      finish();
      return undefined;
    }

    window.addEventListener('load', finish);
    return () => window.removeEventListener('load', finish);
  }, []);

  return (
    <div className="app">
      <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
      <Preloader visible={booting} />
      <Background darkMode={darkMode} />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Portfolio />
        <Experiences />
        <Contact />
      </main>
      <Footer />
      <ButtonTop />
    </div>
  );
}

export default App;
