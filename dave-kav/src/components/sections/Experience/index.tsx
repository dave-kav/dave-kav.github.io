import { useRef, FC } from 'react';
import { Container } from '../../ui/Container';
import { ExperienceCard } from './ExperienceCard';
import experienceData from '../../../data/experience.json';
import './Experience.css';
import { useInView } from '../../../hooks/useInView';
import React from 'react';

interface ExperienceItem {
  id: number;
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceData {
  experiences: ExperienceItem[];
}

export const Experience: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
          {(experienceData as ExperienceData).experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};