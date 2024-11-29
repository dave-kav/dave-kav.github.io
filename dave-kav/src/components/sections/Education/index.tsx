import { useRef, FC } from 'react';
import { Container } from '../../ui/Container';
import { EducationCard } from './EducationCard';
import educationData from '../../../data/education.json';
import './Education.css';
import { useInView } from '../../../hooks/useInView';
import React from 'react';

interface EducationItem {
  id: number;
  logo: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
  courses: string[];
  location: string;
}

interface EducationData {
  education: EducationItem[];
}

export const Education: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
          {(educationData as EducationData).education.map((edu, index) => (
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