'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Mind Link Research Academy',
      role: 'Full Stack Development Intern',
      period: 'Internship Experience',
      highlights: [
        'React Development: Crafted responsive, accessible, and fast user interfaces for business dashboards and external websites.',
        'Next.js Development: Built server-side rendered routes and search-optimized dynamic pages using Next.js routing patterns.',
        'Node.js APIs: Developed RESTful backend APIs with robust validations, error-handling, and JSON payloads.',
        'MySQL Database Work: Designed database tables, managed indices, wrote complex JOIN queries, and integrated Prisma ORM.',
        'Full Stack Development: Directed deployment pipelines and linked complex interfaces with secure business logic databases.',
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-pure">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
            04 / TIMELINE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary">
            Work Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-3xl border-l border-border-lux ml-4 pl-8 md:pl-12 space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={exp.company} variants={itemVariants} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 border border-border-lux bg-bg-pure rounded-full flex items-center justify-center group-hover:border-text-primary transition-colors">
                <Briefcase size={10} className="text-text-muted group-hover:text-text-primary transition-colors" />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <Calendar size={10} />
                  {exp.period}
                </span>
                <h3 className="font-serif text-2xl font-normal text-text-primary">
                  {exp.company}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  {exp.role}
                </p>
              </div>

              {/* Bullet Highlights */}
              <ul className="space-y-4 max-w-2xl">
                {exp.highlights.map((highlight, hIdx) => {
                  const [title, description] = highlight.split(': ');
                  return (
                    <li key={hIdx} className="font-sans text-sm leading-relaxed text-text-secondary font-light">
                      <strong className="font-medium text-text-primary">{title}</strong>
                      {description && `: ${description}`}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
