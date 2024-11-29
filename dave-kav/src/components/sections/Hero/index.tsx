import { useRef, FC } from 'react';
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
import { Container } from '../../ui/Container';
import { useInView } from '../../../hooks/useInView';
import './Hero.css';
import React from 'react';

export const Hero: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const motionStyle: MotionStyle = { y, opacity };

  return (
    <section 
      ref={sectionRef}
      className={`hero ${isInView ? 'is-in-view' : ''}`}
    >
      <Container>
        <motion.div 
          className="hero__content"
          style={motionStyle}
        >
          <div className="hero__text">
            <motion.span 
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              David Kavanagh
              <motion.span 
                className="hero__role"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Backend Engineer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I build scalable backend systems and solve complex engineering challenges
              at <a href="https://evervault.com" target="_blank" rel="noopener noreferrer">Evervault</a>.
              Focused on distributed systems and cloud architecture.
            </motion.p>
          </div>

          <motion.div 
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <div className="hero__image-wrapper">
              <div className="hero__image-container">
                <img 
                  src="/profile.jpeg" 
                  alt="David Kavanagh"
                  className="hero__image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
