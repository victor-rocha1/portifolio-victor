import { useId } from 'react';
import './darkmode.css';

function DarkMode({ darkMode, setDarkMode }) {
  const id = useId();

  return (
    <>
      <input
        type="checkbox"
        name="darkmode"
        id={id}
        className="checkbox"
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
        aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      />
      <label className="label" htmlFor={id} title={darkMode ? 'Modo claro' : 'Modo escuro'}>
        <i className="fas fa-moon" aria-hidden="true" />
        <i className="fas fa-sun" aria-hidden="true" />
        <div className="ball" />
      </label>
    </>
  );
}

export default DarkMode;
