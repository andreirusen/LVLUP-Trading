import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[var(--accent-primary)]">
              LVLUP University
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="btn-ghost"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-ghost"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('profits')}
              className="btn-ghost"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('reports')}
              className="btn-ghost"
            >
              Reports
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="btn-ghost"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-ghost"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-subtle)]">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="btn-ghost text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-ghost text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('profits')}
                className="btn-ghost text-left"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('reports')}
                className="btn-ghost text-left"
              >
                Reports
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="btn-ghost text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-ghost text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};