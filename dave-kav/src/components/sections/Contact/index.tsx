import { useRef, MouseEvent } from 'react';
import { Container } from '../../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useInView } from '../../../hooks/useInView';
import './Contact.css';
import { SOCIAL_LINKS } from '../../../utils/constants';
import React from 'react';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const handleResumeClick = (e: MouseEvent<HTMLButtonElement>) => {
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
          <h2 className="section-title">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </h2>
          <p className="contact__description">
            Find me on the links below.
          </p>
          <div className="contact__links">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="contact__link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
            <a href={SOCIAL_LINKS.github} className="contact__link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="contact__link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.substack} className="contact__link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faNewspaper} />
              <span>Substack</span>
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
