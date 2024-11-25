import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
