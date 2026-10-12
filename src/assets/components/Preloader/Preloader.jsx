import React, { useEffect, useState } from 'react';
import './preloader.css';
import logo from '/images/logo.webp';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Leve delay ajustado para permitir visualização elegante da animação VR CODE
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fading ? 'preloader-fade-out' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-rings">
          <div className="preloader-ring-outer"></div>
          <div className="preloader-ring-inner"></div>
          <div className="preloader-logo-wrap">
            <img src={logo} alt="VR CODE" className="preloader-logo" />
          </div>
        </div>
        <div className="preloader-brand">
          <span className="brand-vr">VR</span>
          <span className="brand-code">CODE</span>
        </div>
        <div className="preloader-bar-wrap">
          <div className="preloader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
