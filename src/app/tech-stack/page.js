'use client';

import { motion } from 'framer-motion';

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c5.441 0 10.059-3.622 11.504-8.607l-11.424-14.76H9.72v12.48h1.68V5.077l9.467 12.222A10.316 10.316 0 0 0 22.28 12c0-5.672-4.608-10.28-10.28-10.28z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-.846-.865-1.464-2.228-1.954-1.282-.444-1.572-.734-1.572-1.22 0-.462.434-.787 1.05-.787.625 0 1.063.303 1.258.828.188-.12.44-.29.74-.476-.254-.515-.845-.96-1.96-.96-1.606 0-2.477.893-2.477 2.083 0 1.22.865 1.764 2.502 2.302 1.34.453 1.577.828 1.577 1.324 0 .58-.59 1.006-1.43 1.006-1.127 0-1.745-.526-1.986-1.543-.284.15-.55.333-.872.506.338 1.47 1.503 2.193 2.87 2.193 2.1 0 3.513-.98 3.513-2.506zm-7.697-3.085c0-.98-.604-1.63-1.604-1.63-.984 0-1.58.65-1.58 1.63v4.618c0 .99.596 1.63 1.58 1.63 1 0 1.604-.64 1.604-1.63v-4.618zm-1.584 7.24c-1.6 0-2.603-.98-2.603-2.622v-4.618c0-1.642 1.003-2.622 2.603-2.622 1.624 0 2.623.98 2.623 2.622v4.618c0 1.642-.999 2.622-2.623 2.622z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const ShadcnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
    <path d="M4 15V9a5 5 0 0 1 5-5h6M20 9v6a5 5 0 0 1-5 5H9"/>
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 0h24v12H12L0 0zm0 12h12l12 12H0V12zm24-12v12L12 0h12z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.233 2.128a1.6 1.6 0 0 1 1.534 0l8.03 4.636a1.6 1.6 0 0 1 .8 1.386v9.273a1.6 1.6 0 0 1-.8 1.386l-8.03 4.636a1.6 1.6 0 0 1-1.534 0l-8.03-4.636a1.6 1.6 0 0 1-.8-1.386V8.15a1.6 1.6 0 0 1 .8-1.386zM12 4L5.6 7.7v7.4L12 18.8l6.4-3.7V7.7z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 9h8M8 12h6M8 15h8" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const PrismaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm0 3.464l-6.928 4v8l6.928 4 6.928-4v-8l-6.928-4z"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="18" cy="18" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 15V9a4 4 0 0 0-4-4H9"/>
    <line x1="6" y1="9" x2="6" y2="15"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.984 6.136a1.488 1.488 0 0 0-.466-.967L18.665.751a1.472 1.472 0 0 0-1.78-.063 1.485 1.485 0 0 0-.62 1.2v2.247l-5.698 5.697-3.328-3.328a.742.742 0 0 0-1.047 0L.216 12.48a1.482 1.482 0 0 0 0 2.094l5.975 5.975a.742.742 0 0 0 1.047 0l3.328-3.328 5.698 5.698v2.247c0 .546.299 1.048.784 1.306.486.257 1.072.225 1.527-.083l4.853-4.418a1.488 1.488 0 0 0 .565-1.127V7.263c0-.4-.165-.783-.466-1.127zM18.72 19.385l-4.437-4.437 4.437-4.438v8.875zM8.7 13.527l-2.438-2.437L8.7 8.653l2.437 2.437-2.437 2.437z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 22.525H0L12 .475l12 22.05z"/>
  </svg>
);

export default function TechStackPage() {
  const techCards = [
    {
      name: 'Next.js',
      description: 'Production-grade React framework providing server-side rendering, routing configurations, and speed optimizations.',
      icon: <NextjsIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'React',
      description: 'Declarative client-side UI library for component composition, state synchronization, and reactive layouts.',
      icon: <ReactIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'JavaScript',
      description: 'Core scripting language powering dynamic client workflows, modular API data fetching, and event handlers.',
      icon: <JSIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first design system engine for building structured, mobile-first layouts and color tokens.',
      icon: <TailwindIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'shadcn/ui',
      description: 'Accessible, copy-paste components styled using Radix primitives and Tailwind styling overrides.',
      icon: <ShadcnIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'Framer Motion',
      description: 'Hardware-accelerated layout transition engine for orchestrating entrance, exit, and scroll-bound motions.',
      icon: <FramerIcon />,
      category: 'FRONTEND',
    },
    {
      name: 'Node.js',
      description: 'Event-driven asynchronous JavaScript server runtime engine powering modern scalable back-end operations.',
      icon: <NodeIcon />,
      category: 'BACKEND',
    },
    {
      name: 'Express.js',
      description: 'Fast middleware router and minimal framework for structuring secure REST API routing configurations.',
      icon: <ExpressIcon />,
      category: 'BACKEND',
    },
    {
      name: 'MySQL',
      description: 'Enterprise relational database server for organizing clean database schemas, table relationships, and index optimizations.',
      icon: <MySQLIcon />,
      category: 'DATABASE',
    },
    {
      name: 'Prisma',
      description: 'Type-safe database ORM client simplifying relational database table querying, validations, and schema migrations.',
      icon: <PrismaIcon />,
      category: 'DATABASE',
    },
    {
      name: 'Git',
      description: 'Distributed version control system for tracking codebase alterations, branches, merges, and commit rollbacks.',
      icon: <GitIcon />,
      category: 'TOOLS',
    },
    {
      name: 'GitHub',
      description: 'Cloud workspace directory hosting code repositories, automation pipelines, and collaborative workflows.',
      icon: <GithubIcon />,
      category: 'TOOLS',
    },
    {
      name: 'VS Code',
      description: 'Primary customizable local code editor configured with syntax linting and development workspaces.',
      icon: <VSCodeIcon />,
      category: 'TOOLS',
    },
    {
      name: 'Vercel',
      description: 'Optimized serverless deployment cloud hosting Next.js builds, global caching, and page analytics.',
      icon: <VercelIcon />,
      category: 'TOOLS',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
              03 / CAPABILITIES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary">
              Tech Stack
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              A comprehensive directory of my tools, frameworks, and developer environments
            </p>
          </div>

          {/* Grids of individual tech cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techCards.map((tech) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                className="group border border-border-lux bg-bg-soft p-6 flex flex-col justify-between aspect-[1/1] hover:bg-bg-pure hover:border-text-primary hover:scale-[1.02] transition-all duration-300 rounded-none relative"
              >
                <div>
                  {/* Top bar info */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[8px] tracking-wider text-text-muted">
                      {tech.category}
                    </span>
                    <div className="p-2 border border-border-lux bg-bg-pure group-hover:border-text-primary/20 transition-colors">
                      {tech.icon}
                    </div>
                  </div>

                  {/* Tech Name */}
                  <h3 className="font-serif text-xl font-normal text-text-primary mb-2">
                    {tech.name}
                  </h3>
                </div>

                {/* Tech Short Description */}
                <p className="font-sans text-xs leading-relaxed text-text-secondary font-light">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
