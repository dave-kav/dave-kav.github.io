import { useRef, FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card } from '../../ui/Card';
import { useInView } from '../../../hooks/useInView';
import React from 'react';

interface Experience {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef);

  const variants: Variants = {
    hidden: index % 2 === 0 
      ? { x: -50, opacity: 0 }
      : { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
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
      className="experience-card-wrapper"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="experience-item" variant="glass">
        <div className="experience-item__header">
          <div className="experience-item__company">
            <div className="experience-item__logo-wrapper">
              <img 
                src={experience.logo} 
                alt={`${experience.company} logo`} 
                className="experience-item__logo"
              />
            </div>
            <div className="experience-item__company-info">
              <h3>{experience.company}</h3>
              <h4 className="experience-item__role">{experience.role}</h4>
              <span className="experience-item__period">{experience.period}</span>
            </div>
          </div>
        </div>

        <div className="experience-item__content">
          <p className="experience-item__description">
            {experience.description}
          </p>
          
          <ul className="experience-item__highlights">
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className="experience-item__tech">
            {experience.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};