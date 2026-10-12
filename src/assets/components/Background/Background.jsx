import fundoEscuro from '../../../../public/images/fundo-escuro.webp';
import './background.css';

function Background({ darkMode }) {
  return (
    <div className={`site-bg ${darkMode ? 'is-dark' : 'is-light'}`} aria-hidden="true">
      {darkMode && (
        <>
          <div
            className="site-bg__stars"
            style={{ backgroundImage: `url(${fundoEscuro})` }}
          />
          <div className="site-bg__veil" />
          <div className="site-bg__orb site-bg__orb--one" />
          <div className="site-bg__orb site-bg__orb--two" />
          <div className="site-bg__ring site-bg__ring--lg" />
          <div className="site-bg__ring site-bg__ring--md" />
          <span className="site-bg__dot site-bg__dot--a" />
          <span className="site-bg__dot site-bg__dot--b" />
          <span className="site-bg__dot site-bg__dot--c" />
        </>
      )}
    </div>
  );
}

export default Background;
