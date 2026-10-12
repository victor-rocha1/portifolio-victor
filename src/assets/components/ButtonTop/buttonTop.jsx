import { useEffect, useState } from 'react';
import './buttonTop.css';

function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const about = document.getElementById('agencia');

    const update = () => {
      if (about) {
        const passedAbout = about.getBoundingClientRect().bottom < 80;
        setIsVisible(passedAbout);
        return;
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduce ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="back-to-top-container">
      {isVisible && (
        <div className="back-to-top-wrap">
          {isHovered && (
            <span className="back-to-top-text">Voltar ao topo</span>
          )}
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Voltar ao topo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <i className="bi bi-arrow-up" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ButtonTop;
