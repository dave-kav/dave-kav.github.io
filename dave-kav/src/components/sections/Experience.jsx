import { useRef } from 'react';
import { Container } from '../ui/Container';
import './Experience.css';
import { useInView } from '../../hooks/useInView';

const experiences = [
  {
    id: 1,
    company: 'Evervault',
    role: 'Senior Software Engineer',
    period: '2024 - Present',
    location: 'Dublin, Ireland',
    description: 'Developing cloud-native software on AWS using Rust and TypeScript, utilising Terraform for infrastructure provisioning.',
    highlights: [
      'Creating clean, scalable APIs and integrating with third-party APIs',
      'Enhancing functionality and improving developer experience of APIs',
    ],
    technologies: ['Rust', 'TypeScript', 'AWS', 'Terraform'],
    logo: '/logos/evervault.svg'
  },
  {
    id: 2,
    company: 'Apata',
    role: 'Senior Software Engineer',
    period: '2022 - 2024',
    location: 'Dublin, Ireland',
    description: 'Developed the next-generation ACS (Authentication and Cardholder Verification) system for secure eCommerce transactions.',
    highlights: [
      'Led design and implementation of key features using TypeScript and AWS',
      'Spearheaded migration from JavaScript to TypeScript',
      'Collaborated with cross-functional teams to meet aggressive deadlines',
      'Improved system performance and reliability'
    ],
    technologies: ['TypeScript', 'JavaScript', 'AWS', 'Node.js'],
    logo: '/logos/apata.svg'
  },
  {
    id: 3,
    company: 'Salesforce',
    role: 'Software Engineer',
    period: '2021 - 2022',
    location: 'Dublin, Ireland',
    description: 'Contributed to the integration of Salesforce functionality into Slack, developing TypeScript-based Slack apps and backend integrations.',
    highlights: [
      'Developed Slack apps using TypeScript',
      'Built backend integrations using Java/Spring',
      'Utilized AWS, Jenkins, and Terraform for infrastructure',
      'Provided technical leadership within the team'
    ],
    technologies: ['TypeScript', 'Java', 'Spring', 'AWS', 'Jenkins', 'Terraform'],
    logo: '/logos/salesforce.png'
  },
  {
    id: 4,
    company: 'Workday',
    role: 'Software Engineer - Distributed Systems',
    period: '2017 - 2021',
    location: 'Dublin, Ireland',
    description: 'Played a key role in maintaining and developing features in a highly distributed microservices architecture.',
    highlights: [
      'Improved reliability and performance of integration runtime platform',
      'Led team in creating Scala onboarding materials',
      'Resolved production support issues',
      'Participated in architectural discussions and planning'
    ],
    technologies: ['Scala', 'Java', 'Microservices', 'Distributed Systems'],
    logo: '/logos/workday.svg'
  },
  {
    id: 5,
    company: 'Qumas/Dassault Systèmes',
    role: 'Software Development Intern',
    period: '2016',
    location: 'Dublin, Ireland',
    description: 'Conducted R&D activities, including prototyping proof-of-concept solutions for data ingestion and indexing.',
    highlights: [
      'Worked with real-time data stream processing technologies',
      'Gained experience in big data processing',
      'Developed prototypes using Apache Spark and Kafka'
    ],
    technologies: ['Apache Spark', 'Kafka', 'Big Data', 'Java'],
    logo: '/logos/dassault.png'
  }
];

export const Experience = () => {
  const sectionRef = useRef(null);
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
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-item__header">
                <div className="experience-item__company">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="experience-item__logo"
                  />
                  <div className="experience-item__company-info">
                    <h3>{exp.company}</h3>
                    <span className="experience-item__period">{exp.period}</span>
                  </div>
                </div>
                <h4 className="experience-item__role">{exp.role}</h4>
              </div>

              <div className="experience-item__content">
                <p className="experience-item__description">
                  {exp.description}
                </p>
                
                <ul className="experience-item__highlights">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-item__tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
