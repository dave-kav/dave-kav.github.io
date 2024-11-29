import { useState, useEffect, FC } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import './Navigation.css';
import React from 'react';

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navigation ${isScrolled ? 'is-scrolled' : ''}`}>
      <Container>
        <nav className="navigation__inner">
          <a href="/" className="navigation__logo">
            <img src="/logo.svg" alt="DK Logo" className="navigation__logo-image" />
          </a>

          {/* Desktop Navigation */}
          <div className="navigation__desktop">
            <a href="/" className="navigation__link">
              Home
            </a>
            <a href="#experience" className="navigation__link">
              Experience
            </a>
            <a href="#education" className="navigation__link">
              Education
            </a>
            <a href="#projects" className="navigation__link">
              Projects
            </a>
            <a href="#contact" className="navigation__link">
              Contact
            </a>
            <button 
              className="navigation__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="navigation__mobile-controls">
            <button 
              className="navigation__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
            <button
              className={`navigation__mobile-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`navigation__mobile ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <a
            href="/"
            className="navigation__mobile-link"
            onClick={handleMobileMenuClick}
          >
            Home
          </a>
          <a
            href="#experience"
            className="navigation__mobile-link"
            onClick={handleMobileMenuClick}
          >
            Experience
          </a>          
          <a
            href="#education"
            className="navigation__mobile-link"
            onClick={handleMobileMenuClick}
          >
            Education
          </a>
          <a
            href="#projects"
            className="navigation__mobile-link"
            onClick={handleMobileMenuClick}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="navigation__mobile-link"
            onClick={handleMobileMenuClick}
          >
            Contact
          </a>          
        </div>
      </Container>
    </header>
  );
};
