import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__social">
              <a 
                href="https://github.com/dave-kav"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://linkedin.com/in/dave-kavanagh"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="mailto:dave.kavanagh@gmail.com"
                className="footer__social-link"
                aria-label="Email Contact"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>

            <div className="footer__info">
              <p className="footer__text">
                Built with React, CSS, JavaScript, and Claude 3.5
              </p>
              <p className="footer__copyright">
                © {currentYear} David Kavanagh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
