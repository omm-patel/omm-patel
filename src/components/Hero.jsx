'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-0 lg:min-h-[calc(100vh-80px)] flex items-center justify-center py-12 sm:py-16 md:py-24 overflow-hidden bg-bg-pure">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-6 sm:space-y-8 lg:order-1 order-2">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-text-muted"
          >
            FULL STACK DEVELOPER
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.15] sm:leading-[1.1] tracking-tight text-text-primary max-w-2xl"
          >
            Building modern web experiences with precision.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-text-secondary max-w-lg font-light"
          >
            I build high-performance websites, business applications and digital products using Next.js, React, Node.js and MySQL.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 w-full sm:w-auto"
          >
            <a 
              href="/projects" 
              className="px-6 py-3 border border-text-primary text-[10px] font-mono uppercase tracking-wider text-bg-pure bg-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300 rounded-none w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 border border-border-lux text-[10px] font-mono uppercase tracking-wider text-text-primary hover:border-text-primary transition-all duration-300 rounded-none w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Image (Shows above text on mobile for better balance) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full flex justify-center lg:order-2 order-1"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] max-w-md lg:max-w-none overflow-hidden border border-border-lux bg-bg-cloud group">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#111111]/5 z-10 pointer-events-none mix-blend-overlay" />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&sat=-100&auto=format&fit=crop"
              alt="Minimal workspace representing precision and craftsmanship"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale contrast-110"
              loading="eager"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
