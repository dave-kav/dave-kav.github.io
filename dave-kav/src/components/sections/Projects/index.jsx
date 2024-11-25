import { useRef } from 'react';
import { Container } from '../../ui/Container';
import { ProjectCard } from './ProjectCard';
import projectsData from '../../../data/projects.json';
import './Projects.css';
import { useInView } from '../../../hooks/useInView';

export const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`projects ${isInView ? 'is-in-view' : 'is-blurred'}`}
    >
      <Container>
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects__grid">
          {projectsData.projects.map((project, index) => (
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