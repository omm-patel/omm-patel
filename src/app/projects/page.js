'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectsPage() {
  const projects = [
    {
      id: '01',
      title: 'URBNX – E-commerce Website',
      category: 'E-COMMERCE SYSTEM',
      description: 'An advanced clothing e-commerce platform with secure authentication, product catalog, shopping cart, and order management.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      features: [
        'Secure clothing store frontend with catalog filters, shopping cart and billing details.',
        'Complete My Account panel comprising profile details, past history, and settings.',
        'Structured database schemas with foreign key constraints, indexes, and soft deletes.',
      ],
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '02',
      title: 'WorkForce Hub',
      category: 'ENTERPRISE SYSTEM',
      description: 'An advanced Employee Management System engineered to simplify administrative and data management tasks. Built with performance and security at its core.',
      tech: ['Next.js', 'Express.js', 'TiDB', 'Tailwind CSS', 'Resend API'],
      features: [
        'Secure dashboard with metrics, search, and table-based data pagination.',
        'Excel and CSV file parser to import and export entire employee rosters asynchronously.',
        'Structured database schemas with foreign key constraints, indexes, and soft deletes.',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '03',
      title: 'Enclave Export Import',
      category: 'COMMERCIAL PLATFORM',
      description: 'A corporate web platform built to establish and strengthen cross-border commercial connections. Styled with luxury design systems and massive whitespace.',
      tech: ['Next.js', 'React', 'Node.js', 'MySQL', 'Prisma', 'Tailwind CSS'],
      features: [
        'High-end typography and interactive grids to showcase logistics flow and export products.',
        'Highly responsive design supporting fast load times and clean mobile interactions.',
        'Integrated database models to track catalog services and shipping queries.',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '04',
      title: 'Surya Impex',
      category: 'BUSINESS DIRECTORY',
      description: 'A premium, responsive corporate portal designed for global shipping and export operations. Features minimalist aesthetics, smooth slider galleries, and service inquiries.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      features: [
        'Premium visual layouts showcasing logistics solutions, cargo types, and international trade routes.',
        'Clean animations and slide galleries to present company assets and certificates.',
        'Contact form inquiries hooked to state tracking for business lead generation.',
      ],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-bg-pure py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 md:space-y-24"
        >
          {/* Header */}
          <div className="border-b border-border-lux pb-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
              02 / CASE STUDIES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary">
              Projects
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              A curated selection of business systems and digital products
            </p>
          </div>

          {/* Project Cards List */}
          <div className="space-y-16 md:space-y-36">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
              >
                {/* Visual Column */}
                <div className="lg:col-span-6 w-full space-y-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-border-lux bg-bg-cloud group card-hover-depth">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-1000 group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-mono text-text-muted px-1">
                    <span>INDEX: P-{project.id}</span>
                    <span>TYPE: {project.category}</span>
                  </div>
                </div>

                {/* Info Column */}
                <div className="lg:col-span-6 flex flex-col space-y-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1">
                      PROJECT CASE STUDY
                    </span>
                    <h2 className="font-serif text-3xl font-normal text-text-primary">
                      {project.title}
                    </h2>
                  </div>

                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-text-secondary font-light">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="border-t border-border-lux pt-6 space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-primary block">
                      Core Implementation Specs:
                    </span>
                    <ul className="space-y-2">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="font-sans text-xs text-text-secondary font-light flex items-start gap-2">
                          <span className="w-1.5 h-1.5 border border-text-primary rotate-45 mt-1 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 border border-border-lux font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-text-secondary bg-bg-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 sm:pt-4 w-full">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-5 py-2.5 border border-text-primary text-[10px] font-mono uppercase tracking-wider text-bg-pure bg-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300 rounded-none hover:scale-102 w-full sm:w-auto text-center"
                      >
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 border border-border-lux text-[10px] font-mono uppercase tracking-wider text-text-muted bg-bg-soft select-none cursor-not-allowed w-full sm:w-auto text-center">
                        Coming Soon
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-5 py-2.5 border border-border-lux text-[10px] font-mono uppercase tracking-wider text-text-primary hover:border-text-primary transition-all duration-300 rounded-none hover:scale-102 w-full sm:w-auto text-center"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
