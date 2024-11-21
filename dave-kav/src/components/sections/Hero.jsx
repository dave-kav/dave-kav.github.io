import { useRef } from 'react';
import { Container } from '../ui/Container';
import { useInView } from '../../hooks/useInView';
import './Hero.css';

export const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      className={`hero ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
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
