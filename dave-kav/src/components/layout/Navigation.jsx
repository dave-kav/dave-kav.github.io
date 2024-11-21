import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import './Navigation.css';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    // Assuming resume.pdf is in the public folder
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'david-kavanagh-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`navigation ${isScrolled ? 'is-scrolled' : ''}`}>
      <Container>
        <nav className="navigation__inner">
          <a href="#" className="navigation__logo">
            <img src="/logo.svg" alt="DK Logo" className="navigation__logo-image" />
          </a>

          {/* Desktop Navigation */}
          <div className="navigation__desktop">
            <a href="#" className="navigation__link">
              Home
            </a>
            <a href="#experience" className="navigation__link">
              Experience
            </a>
            <button 
              onClick={handleResumeClick}
              className="navigation__resume-btn"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Resume</span>
            </button>
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
            href="#"
            className="navigation__mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#experience"
            className="navigation__mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </a>
          <button 
            onClick={(e) => {
              handleResumeClick(e);
              setIsMobileMenuOpen(false);
            }}
            className="navigation__mobile-resume"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Resume</span>
          </button>
        </div>
      </Container>
    </header>
  );
};
