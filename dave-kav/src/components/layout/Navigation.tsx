import React, { useState, useEffect, FC } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogsPage = location.pathname === '/blogs';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'is-scrolled' : ''}`}>
      <Container>
        <div className="navigation__inner">
          <Link to="/" className="navigation__logo">
            DK
          </Link>

          <div className="navigation__desktop">
            {!isHomePage && (
              <Link to="/" className="navigation__link">
                Home
              </Link>
            )}
            {!isBlogsPage && (
              <Link to="/blogs" className="navigation__link">
                Blogs
              </Link>
            )}
            {isHomePage && (
              <>
                <a 
                  onClick={() => scrollToSection('experience')} 
                  className="navigation__link"
                >
                  Experience
                </a>
                <a 
                  onClick={() => scrollToSection('education')} 
                  className="navigation__link"
                >
                  Education
                </a>
                <a 
                  onClick={() => scrollToSection('projects')} 
                  className="navigation__link"
                >
                  Projects
                </a>
                <a 
                  onClick={() => scrollToSection('contact')} 
                  className="navigation__link"
                >
                  Contact
                </a>
              </>
            )}
            <button
              onClick={toggleTheme}
              className="navigation__theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </button>
          </div>

          <div className="navigation__mobile-controls">
            <button
              onClick={toggleTheme}
              className="navigation__theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
