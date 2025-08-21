import React from 'react';
import { Youtube, Instagram, MessageCircle, Music } from 'lucide-react';
import { socialMediaLinks } from '../mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-8 mt-24">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-[var(--accent-primary)] mb-4">
              LVLUP University
            </div>
            <p className="body-md mb-6 max-w-md">
              A growing community dedicated to professional trading and financial education. 
              Master Smart Money Concepts, risk management, and trading psychology.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialMediaLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Youtube size={20} />
              </a>
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialMediaLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Music size={20} />
              </a>
              <a
                href={socialMediaLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="h4 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('profits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Results
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="h4 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:lvlup.university.2024@gmail.com"
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  lvlup.university.2024@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+40771810710"
                  className="body-md text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  +40 771 810 710
                </a>
              </li>
              <li>
                <span className="body-md text-[var(--text-muted)]">
                  Romania
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center">
          <p className="body-sm text-[var(--text-muted)] mb-4 md:mb-0">
            © {currentYear} LVLUP University. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="body-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
              Privacy Policy
            </button>
            <button className="body-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer social link styles (add to globals.css)
const footerStyles = `
.footer-social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.2s ease;
  text-decoration: none;
}

.footer-social-link:hover {
  background: var(--accent-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
}
`;