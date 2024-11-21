import { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <Container>
        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__greeting">Hello, I'm</span>
            <h1 className="hero__title">
              David Kavanagh
              <span className="hero__role">Backend Engineer</span>
            </h1>
            
            <p className="hero__description">
              I build scalable backend systems and solve complex engineering challenges
              at <a href="https://evervault.com" target="_blank" rel="noopener noreferrer">Evervault</a>.
              Focused on distributed systems and cloud architecture.
            </p>

            <div className="hero__links">
              <a 
                href="https://github.com/dave-kav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero__social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/dave-kavanagh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero__social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-container">
              <img 
                src="/profile.jpeg" 
                alt="David Kavanagh"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
