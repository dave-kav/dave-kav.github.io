import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
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
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
