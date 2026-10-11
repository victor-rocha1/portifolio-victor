import Icons from '../../components/Icons/Icons';
import logo from '/public/images/logo.webp';
import './footer.css';

function Footer() {
    const socialIcons = [
        { name: 'instagram', link: 'https://www.instagram.com/victor.rocha77/' },
        { name: 'github', link: 'https://www.github.com/victor-rocha1' },
    ];
    const contactIcon = { name: 'envelope-fill', link: 'mailto:victorrocha3202@gmail.com' };

    return (
        <footer id='footer'>
            <div className="footer-container">
                <div className="logo-footer">
                    <a href="#">
                        <img id='logotipo' src={logo} alt="Logotipo Victor Rocha" />
                    </a>
                </div>
                <div className="social-icons">
                    <Icons
                        icons={socialIcons}
                        size="2rem"
                        alignment="flex-start"
                    />
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="contact-info">
                <p>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:victor.rocha3203@gmail.com">victor.rocha3203@gmail.com</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;