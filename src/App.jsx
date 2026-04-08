import React, { useState, useEffect } from 'react';
import NavBar from './assets/sections/NavBar/NavBar';
import About from './assets/sections/About/About';
import Projects from './assets/sections/Projects/Projects';
import Experiences from './assets/sections/Experiences/Experiences';
import Footer from './assets/sections/Footer/Footer';
import Skills from './assets/sections/Skills/Skills';
import ButtonTop from './assets/components/buttonTop/buttonTop'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experiences darkMode={darkMode} /> 
      <Footer darkMode={darkMode} />
      <ButtonTop />
    </div>
  );
}

export default App;