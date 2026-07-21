'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Layout, Server, Database, Terminal } from 'lucide-react';
import Hero from '@/components/Hero';

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const previewProjects = [
    {
      id: '01',
      title: 'URBNX – E-commerce Website',
      category: 'E-COMMERCE SYSTEM',
      description: 'Clothing e-commerce system featuring secure user database flows, catalog management, and shopping cart modules.',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&sat=-100&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'WorkForce Hub',
      category: 'ENTERPRISE SYSTEM',
      description: 'Employee Management platform featuring secure JWT cookie validations, CRUD modules, and Resend notifications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&sat=-100&auto=format&fit=crop',
    },
  ];

  const primarySkills = [
    { name: 'Next.js', icon: <Layout className="w-4 h-4" /> },
    { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
    { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
    { name: 'Git & GitHub', icon: <Terminal className="w-4 h-4" /> },
  ];

  const stats = [
    { value: '01', label: 'WORK INTERNSHIP' },
    { value: '03', label: 'COMPLETED PROJECTS' },
    { value: '10+', label: 'TECHNOLOGIES MASTERED' },
    { value: '02', label: 'MCA YEARS' },
  ];

  return (
    <div className="bg-bg-pure">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short Introduction */}
      <section className="py-20 md:py-28 bg-bg-ice border-y border-border-lux">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-3">
                OM PATEL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-text-primary">
                A designer-developer building functional software.
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-text-secondary font-light max-w-2xl">
                I am an MCA final semester student and Full Stack Developer focused on building high-performance web products, secure databases, and clean UI configurations. My engineering workflow prioritizes logical data flow, readable backend logic, and spacious frontend layouts.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-primary hover:opacity-75 transition-opacity group"
                >
                  <span>Explore my background</span>
                  <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Projects Preview */}
      <section className="py-20 md:py-28 bg-bg-pure">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-16">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-border-lux pb-8">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
                01 / SELECT WORK
              </span>
              <h2 className="font-serif text-3xl font-normal text-text-primary">
                Project Highlights
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-primary hover:opacity-75 transition-opacity group"
            >
              <span>Explore all case studies</span>
              <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {previewProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="space-y-4 group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-border-lux bg-bg-cloud">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-700 group-hover:scale-101"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-wider text-text-muted block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-text-primary">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-text-secondary font-light max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Selected Skills Preview */}
      <section className="py-20 md:py-28 bg-bg-ice border-y border-border-lux">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
                02 / CAPABILITIES
              </span>
              <h2 className="font-serif text-3xl font-normal text-text-primary">
                Technical Stack
              </h2>
              <p className="font-sans text-xs leading-relaxed text-text-secondary font-light max-w-xs">
                Leveraging server-side architectures, SQL normalization, and responsive templates.
              </p>
              <div className="pt-2">
                <Link
                  href="/tech-stack"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-primary hover:opacity-75 transition-opacity group"
                >
                  <span>View Full Stack Specs</span>
                  <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 gap-4 w-full">
              {primarySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="border border-border-lux bg-bg-pure p-6 flex flex-col justify-between aspect-[16/9] group hover:border-text-primary transition-colors"
                >
                  <div className="p-1.5 border border-border-lux w-fit bg-bg-soft group-hover:border-text-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section className="py-20 md:py-28 bg-bg-pure">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="space-y-2 border-l border-border-lux pl-4"
              >
                <span className="font-serif text-4xl sm:text-5xl font-light text-text-primary block">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Call To Action (CTA) */}
      <section className="py-20 md:py-28 bg-bg-ice border-t border-border-lux">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
              03 / COLLABORATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-text-primary">
              Have an idea? Let&apos;s build it.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-secondary font-light max-w-md mx-auto leading-relaxed">
              I am currently available for new opportunities, freelance contract builds, and full-stack software team roles.
            </p>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-text-primary text-[11px] font-mono uppercase tracking-wider text-bg-pure bg-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300 rounded-none"
              >
                <span>Get In Touch</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
