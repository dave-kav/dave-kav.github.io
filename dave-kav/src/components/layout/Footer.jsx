import { Container } from '../ui/Container';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <p className="footer__text">
            Built with React, CSS, JS, and a lot of Claude 3.5
          </p>
          <p className="footer__copyright">
            © {currentYear} David Kavanagh. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
