import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
