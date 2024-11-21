import { Card } from '../../ui/Card';

export const ExperienceCard = ({ experience }) => {
  return (
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
  );
};