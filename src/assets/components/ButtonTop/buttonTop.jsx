import React, { useState, useEffect } from 'react';
import './ButtonTop.css';

function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top-container">
      {isVisible && (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isHovered && (
            <span className="back-to-top-text">Voltar ao topo</span>
          )}
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Voltar ao topo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default ButtonTop;