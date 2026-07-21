'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-ice border-y border-border-lux">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Heading & Label */}
          <div className="lg:col-span-4 space-y-4">
            <motion.span variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
              01 / ABOUT ME
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary">
              Om Patel
            </motion.h2>
            <motion.p variants={itemVariants} className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
              MCA Final Semester Student &amp; Full Stack Developer
            </motion.p>
          </div>

          {/* Center Column: Text Content */}
          <div className="lg:col-span-5 space-y-6 text-text-secondary font-sans text-sm sm:text-base leading-relaxed font-light">
            <motion.p variants={itemVariants}>
              Passionate about building modern websites, business applications and scalable solutions using Next.js, React, Node.js, Express and MySQL.
            </motion.p>
            <motion.p variants={itemVariants}>
              Currently focused on creating responsive, high-quality user experiences and robust business software. My work sits at the intersection of aesthetic layout design and reliable full-stack engineering.
            </motion.p>
            <motion.p variants={itemVariants}>
              I believe in clean architectures, readable code, and meticulous attention to detail. Every project is approached with the goal of creating a premium, production-grade product that delivers value.
            </motion.p>
          </div>

          {/* Right Column: Visual/Professional Image */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-3 w-full"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-border-lux bg-bg-cloud group">
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&sat=-100&auto=format&fit=crop"
                alt="Workspace focusing on technology and layout design"
                className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
