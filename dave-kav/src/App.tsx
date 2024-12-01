import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
