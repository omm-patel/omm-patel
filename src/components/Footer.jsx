'use client';

import Link from 'next/link';
import { ArrowUp, Mail, Phone } from 'lucide-react';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-ice border-t border-border-lux py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-12">
        
        {/* Top Section: Brand & Nav Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Logo / Brand & Contact Info */}
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="font-serif text-xl tracking-[0.25em] text-text-primary block hover:opacity-80 transition-opacity">
                OM PATEL
              </Link>
              <p className="font-sans text-xs text-text-secondary max-w-xs font-light leading-relaxed">
                Crafting premium digital products, business platforms, and responsive web systems.
              </p>
            </div>

            {/* Added Contact items under tagline */}
            <div className="flex flex-col gap-2.5 border-t border-border-lux/60 pt-4 w-fit">
              <a
                href="https://github.com/omm-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-1 border border-border-lux rounded-none flex items-center justify-center bg-bg-pure">
                  <GithubIcon className="w-2.5 h-2.5" />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/om-patel-053338245/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-1 border border-border-lux rounded-none flex items-center justify-center bg-bg-pure">
                  <LinkedinIcon className="w-2.5 h-2.5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:om07674@gmail.com"
                className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-1 border border-border-lux rounded-none flex items-center justify-center bg-bg-pure">
                  <Mail size={10} />
                </div>
                <span>om07674@gmail.com</span>
              </a>
              <a
                href="tel:+917203864244"
                className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-1 border border-border-lux rounded-none flex items-center justify-center bg-bg-pure">
                  <Phone size={10} />
                </div>
                <span>+91 7203864244</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[12px] uppercase tracking-wider text-text-primary block">
              NAVIGATE
            </span>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Tech Stack', href: '/tech-stack' },
                { name: 'Experience', href: '/experience' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[12px] uppercase tracking-wider text-text-primary block">
              FOLLOW
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/omm-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/om-patel-053338245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:om07674@gmail.com"
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Mail size={10} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border-lux" />

        {/* Bottom Section: Copyright & Top Anchor */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted text-center sm:text-left">
            &copy; {currentYear} OM PATEL. ALL RIGHTS RESERVED.
          </span>
          <a
            href="#"
            onClick={handleScrollTop}
            className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp size={10} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}
