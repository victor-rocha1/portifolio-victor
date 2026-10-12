import './imgproject.css';

const ImgProject = ({ img, text, description, button, github }) => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    window.open(github, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="img-project" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay">
        <p>{text}</p>
        {description && <span className="overlay__desc">{description}</span>}
        {button && (
          <button
            type="button"
            className="github-link"
            onClick={handleButtonClick}
            aria-label={`Abrir repositório ${text} no GitHub`}
          >
            <i className="bi bi-github" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
};

export default ImgProject;
