import { useRef, FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card } from '../../ui/Card';
import { useInView } from '../../../hooks/useInView';
import React from 'react';

interface Project {
  thumbnail: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
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
      className="project-card-wrapper"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="project-item" variant="glass">
        <div className="project-item__thumbnail">
          <img src={project.thumbnail} alt={project.title} />
        </div>
        <div className="project-item__content">
          <h3>{project.title}</h3>
          <p className="project-item__description">{project.description}</p>
          <ul className="project-item__highlights">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <div className="project-item__tech">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <a 
            href={project.repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-item__link"
          >
            View on GitHub →
          </a>
        </div>
      </Card>
    </motion.div>
  );
};