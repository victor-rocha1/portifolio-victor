import React from 'react';
import './imgproject.css';

const ImgProject = ({ img, text, button, github }) => {
  const handleButtonClick = () => {
    window.open(github, '_blank');
  };

  return (
    <div className="img-project" style={{ backgroundImage: `url(${img})`}}>
      <div className="overlay">
        <p>{text}</p>
        {button && (
          <button onClick={handleButtonClick} aria-label="Abrir repositório no GitHub">
            <i className="bi bi-github"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ImgProject;