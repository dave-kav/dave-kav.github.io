import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { useInView } from '../../../hooks/useInView';

export const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);

  const variants = {
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