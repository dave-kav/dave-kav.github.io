import { useRef, FC } from 'react';
import { Container } from '../../ui/Container';
import { ProjectCard } from './ProjectCard';
import projectsData from '../../../data/projects.json';
import './Projects.css';
import { useInView } from '../../../hooks/useInView';
import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Project {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
}

interface ProjectsData {
  projects: Project[];
}

export const Projects: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`projects ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCode} />
          Projects
        </h2>
        <div className="projects__grid">
          {(projectsData as ProjectsData).projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};