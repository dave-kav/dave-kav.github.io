import { useRef } from 'react';
import { Container } from '../../ui/Container';
import { ExperienceCard } from './ExperienceCard';
import experienceData from '../../../data/experience.json';
import './Experience.css';
import { useInView } from '../../../hooks/useInView';

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
          {experienceData.experiences.map((experience) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};