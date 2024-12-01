import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/layout/PageTransition';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/pages.css';
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            } 
          />
          <Route 
            path="/blogs" 
            element={
              <PageTransition>
                <BlogsPage />
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
