'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal, Cpu, Hammer, Code, GitBranch } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-text-primary" />,
      skills: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-text-primary" />,
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-text-primary" />,
      skills: ['MySQL', 'Prisma'],
    },
    {
      title: 'Tools',
      icon: <Terminal className="w-5 h-5 text-text-primary" />,
      skills: ['Git', 'GitHub', 'GitHub Desktop', 'VS Code', 'Vercel'],
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
    <section id="tech-stack" className="py-24 md:py-32 bg-bg-pure">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
            02 / EXPERTISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary">
            Tech Stack
          </h2>
        </div>

        {/* Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="group border border-border-lux bg-bg-soft p-8 transition-all duration-300 hover:bg-bg-pure hover:border-text-primary flex flex-col justify-between aspect-[1/1]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    0{idx + 1}
                  </span>
                  <div className="p-2 border border-border-lux group-hover:border-text-primary/20 transition-colors">
                    {cat.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-text-primary mb-4">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-[11px] uppercase tracking-wider text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-text-muted rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
