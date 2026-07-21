'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function FeaturedProjects() {
  const projects = [
    {
      id: '01',
      title: 'URBNX – E-commerce Website',
      description: 'A full-stack clothing e-commerce platform with secure authentication, product catalog, shopping cart, admin dashboard, and order management.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '02',
      title: 'WorkForce Hub',
      description: 'Full-stack Employee Management System featuring secure JWT cookies authentication, employee/department records, and Resend email integrations.',
      tech: ['Next.js', 'Express.js', 'TiDB', 'Tailwind CSS', 'Resend API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '03',
      title: 'Enclave Export Import',
      description: 'Professional international trade logistics website focused on export-import operations, showcasing products and logistics flow.',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&sat=-100&auto=format&fit=crop',
      github: 'https://github.com/omm-patel',
      live: null, // Coming soon
    },
    {
      id: '04',
      title: 'Surya Impex',
      description: 'Modern SEO-optimized corporate platform featuring responsive grid layouts, sliding certificate galleries, and smooth Framer Motion triggers.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-32 bg-bg-ice border-y border-border-lux">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
            03 / SELECTED WORKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary">
            Featured Projects
          </h2>
        </div>

        {/* Project Lists */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16 md:space-y-36"
        >
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Image Column (order-1 stacks on mobile, lg:order-x applies alternating order on desktop) */}
                <div className={`order-1 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-border-lux bg-bg-cloud group">
                    <div className="absolute inset-0 bg-[#111111]/5 z-10 pointer-events-none mix-blend-overlay" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-1000 group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Column (order-2 stacks on mobile, lg:order-y applies alternating order on desktop) */}
                <div className={`order-2 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col space-y-4 sm:space-y-6`}>
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-text-muted">
                      CASE STUDY {project.id}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-text-primary">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-text-secondary font-light">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 border border-border-lux font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-text-secondary bg-bg-pure"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
