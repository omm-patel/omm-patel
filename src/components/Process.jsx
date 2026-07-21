'use client';

import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Research',
      description: 'Understanding requirements, identifying business obstacles, researching user trends, and outlining core system architectures.',
    },
    {
      num: '02',
      title: 'Design',
      description: 'Creating high-fidelity mockups, mapping UI components, designing data structures, and establishing clean style foundations.',
    },
    {
      num: '03',
      title: 'Development',
      description: 'Writing semantic, clean JavaScript, building fast React interfaces, drafting robust Node APIs, and integrating MySQL queries.',
    },
    {
      num: '04',
      title: 'Testing',
      description: 'Validating layout responsiveness, checking API boundary cases, verifying form submissions, and ensuring total accessibility.',
    },
    {
      num: '05',
      title: 'Deployment',
      description: 'Shipping builds to secure platforms like Vercel, auditing bundles, caching resources, and performing live sanity tests.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-bg-ice border-y border-border-lux">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
            05 / METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary">
            Development Process
          </h2>
        </div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="border border-border-lux bg-bg-pure p-8 flex flex-col justify-between aspect-[3/4] group hover:border-text-primary transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-5xl md:text-6xl font-light text-text-muted block mb-6 group-hover:text-text-primary transition-colors duration-300">
                  {step.num}
                </span>
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold mb-4">
                  {step.title}
                </h3>
              </div>
              <p className="font-sans text-xs leading-relaxed text-text-secondary font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
