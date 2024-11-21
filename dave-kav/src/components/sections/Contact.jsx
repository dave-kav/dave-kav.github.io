import { useRef } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const handleResumeClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'david-kavanagh-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`contact ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <div className="contact__content">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__description">
            Find me on the links below.
          </p>
          <div className="contact__links">
            <a href="mailto:hello@davekav.com" className="contact__link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
            <a href="https://github.com/dave-kav" className="contact__link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dave-kav" className="contact__link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <button 
              onClick={handleResumeClick}
              className="contact__link"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
