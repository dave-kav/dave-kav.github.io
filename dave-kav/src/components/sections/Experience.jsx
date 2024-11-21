import { useRef } from 'react';
import { Container } from '../ui/Container';
import './Experience.css';
import { useInView } from '../../hooks/useInView';
import experienceData from '../../data/experience.json' ;

export const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`experience ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <h2 className="experience__title">Experience</h2>
        
        <div className="experience__timeline">
          {experienceData.experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-item__header">
                <div className="experience-item__company">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="experience-item__logo"
                  />
                  <div className="experience-item__company-info">
                    <h3>{exp.company}</h3>
                    <span className="experience-item__period">{exp.period}</span>
                  </div>
                </div>
                <h4 className="experience-item__role">{exp.role}</h4>
              </div>

              <div className="experience-item__content">
                <p className="experience-item__description">
                  {exp.description}
                </p>
                
                <ul className="experience-item__highlights">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-item__tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
