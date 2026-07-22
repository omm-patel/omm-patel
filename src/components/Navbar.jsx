'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Mail, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Sync state with DOM/localStorage on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-lux bg-bg-pure/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between relative">
        
        {/* Left: Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger (Mobile navigation toggle) */}
        <button
          className="md:hidden text-text-primary p-2 -ml-2 focus:outline-none hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Center: Brand name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <Link href="/" className="font-serif text-lg tracking-[0.25em] font-normal text-text-primary hover:opacity-80 transition-opacity">
            OM PATEL
          </Link>
        </div>

        {/* Right: Socials, Resume & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://github.com/omm-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <GithubIcon className="w-3 h-3" />
            <span className="hidden lg:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/om-patel-053338245/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <LinkedinIcon className="w-3 h-3" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
          <Link
            href="/resume"
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <FileText size={12} />
            <span>Resume</span>
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-1 text-text-secondary hover:text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group"
          >
            {theme === 'dark' ? (
              <Sun
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            ) : (
              <Moon
                size={14}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
            )}
          </button>
        </div>
        
        {/* Quick mobile right links including Theme Toggle */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1 text-text-secondary hover:text-text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href="https://github.com/omm-patel" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-110">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/om-patel-053338245/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:scale-110">
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile Full-height Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-xs md:hidden"
            />

            {/* Sidebar drawer container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen z-[100] w-[85vw] max-w-[380px] bg-bg-pure border-r border-border-lux flex flex-col gap-8 p-6 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Header row */}
              <div className="flex items-center justify-between border-b border-border-lux pb-4">
                <span className="font-serif text-sm tracking-[0.2em] text-text-primary font-normal">
                  OM PATEL
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="p-1 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-border-lux my-1" />
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                >
                  <FileText size={14} />
                  <span>View Resume</span>
                </Link>
              </nav>

              {/* Contact details directly below */}
              <div className="border-t border-border-lux pt-6 space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted block">
                  CONTACT
                </span>
                <div className="space-y-3">
                  <a
                    href="mailto:om07674@gmail.com"
                    className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <div className="p-1 border border-border-lux flex items-center justify-center bg-bg-soft">
                      <Mail size={10} />
                    </div>
                    <span>om07674@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+917203864244"
                    className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <div className="p-1 border border-border-lux flex items-center justify-center bg-bg-soft">
                      <Phone size={10} />
                    </div>
                    <span>+91 7203864244</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
