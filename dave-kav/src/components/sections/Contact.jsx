import { useRef } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`contact ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <div className="contact__content">
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__links">
            <a 
              href="https://github.com/dave-kav"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/dave-kavanagh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:dave.kavanagh@gmail.com"
              className="contact__link"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
