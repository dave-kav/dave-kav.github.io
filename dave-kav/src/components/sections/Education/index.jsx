import { useRef } from 'react';
import { Container } from '../../ui/Container';
import { EducationCard } from './EducationCard';
import educationData from '../../../data/education.json';
import './Education.css';
import { useInView } from '../../../hooks/useInView';

export const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className={`education ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <h2 className="education__title">Education</h2>
        <div className="education__timeline">
          {educationData.education.map((edu, index) => (
            <EducationCard 
              key={edu.id} 
              education={edu}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};