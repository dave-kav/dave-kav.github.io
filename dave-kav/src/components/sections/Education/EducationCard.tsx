import { useRef, FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card } from '../../ui/Card';
import { useInView } from '../../../hooks/useInView';
import React from 'react';

interface Education {
  logo: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
  courses: string[];
}

interface EducationCardProps {
  education: Education;
  index: number;
}

export const EducationCard: FC<EducationCardProps> = ({ education, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef);

  const variants: Variants = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="education-card-wrapper"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="education-item" variant="glass">
        <div className="education-item__header">
          <div className="education-item__school">
            <div className="education-item__logo-wrapper">
              <img 
                src={education.logo} 
                alt={`${education.school} logo`} 
                className="education-item__logo"
              />
            </div>
            <div className="education-item__info">
              <h3>{education.school}</h3>
              <h4 className="education-item__degree">{education.degree}</h4>
              <span className="education-item__period">{education.period}</span>
            </div>
          </div>
        </div>
        <div className="education-item__content">
          <p className="education-item__description">
            {education.description}
          </p>
          {education.highlights.length > 0 && (
            <ul className="education-item__highlights">
              {education.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
          {education.courses.length > 0 && (
            <div className="education-item__courses">
              {education.courses.map((course, index) => (
                <span key={index} className="tech-tag">{course}</span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};