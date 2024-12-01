import React, { FC } from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage; 