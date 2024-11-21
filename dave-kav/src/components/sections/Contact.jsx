import { useRef } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const handleResumeClick = (e) => {
    e.preventDefault();
    // Assuming resume.pdf is in the public folder
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
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact__links">
            <a href="mailto:hello@davekav.com" className="contact__link">
              <span>Email</span>
            </a>
            <a href="https://github.com/dave-kav" className="contact__link" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dave-kav" className="contact__link" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
            <button 
              onClick={handleResumeClick}
              className="navigation__resume-btn"
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
