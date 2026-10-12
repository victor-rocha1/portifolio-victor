import logo from '../../../../public/images/logo.webp';
import './preloader.css';

function Preloader({ visible }) {
  return (
    <div
      className={`preloader ${visible ? '' : 'is-done'}`}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
    >
      <img src={logo} alt="" className="brand-logo preloader__logo" />
      <p className="preloader__label">VR CODE</p>
    </div>
  );
}

export default Preloader;
