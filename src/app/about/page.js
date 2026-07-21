'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
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

  return (
    <div className="bg-bg-pure py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 md:space-y-24"
        >
          {/* Section 1: Editorial Header */}
          <div className="border-b border-border-lux pb-12 space-y-4">
            <motion.span variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
              01 / PROFILE
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary">
              Om Patel
            </motion.h1>
            <motion.p variants={itemVariants} className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Full Stack Developer &amp; MCA Final Semester Student
            </motion.p>
          </div>

          {/* Section 2: Split Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Bio & Approach */}
            <div className="lg:col-span-7 space-y-8">
              <motion.h2 variants={itemVariants} className="font-serif text-2xl sm:text-3xl font-normal text-text-primary">
                Crafting production-ready web products and database architectures.
              </motion.h2>
              <div className="font-sans text-sm sm:text-base leading-relaxed text-text-secondary space-y-6 font-light">
                <motion.p variants={itemVariants}>
                  I am a Full Stack Developer with hands-on experience building web applications and business portals from frontend to backend. I utilize technologies like Next.js, React.js, Node.js, Express.js, JavaScript, TypeScript, Tailwind CSS, MySQL, Supabase, and MongoDB.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Currently, I am completing my final semester of the Master of Computer Applications (MCA) at Indus University. Through academic coursework and three successive internships, I have refined my ability to build secure RESTful APIs, manage databases, design intuitive client interfaces, and optimize performance.
                </motion.p>
              </div>

              {/* Core Philosophy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {[
                  {
                    title: 'Precision Coding',
                    desc: 'Writing maintainable, clean code using modern syntax guidelines (TypeScript/ES6) and logical structures.'
                  },
                  {
                    title: 'Full Stack Flow',
                    desc: 'Integrating secure API logic, stateful frontend routers, and optimized relational databases.'
                  },
                  {
                    title: 'Deploy & Audit',
                    desc: 'Publishing web experiences securely using Vercel or Render, while focusing on SEO and speed.'
                  }
                ].map((phil, idx) => (
                  <motion.div
                    key={phil.title}
                    variants={itemVariants}
                    className="border border-border-lux bg-bg-soft p-6 space-y-3"
                  >
                    <span className="font-mono text-[9px] text-text-muted">0{idx + 1}</span>
                    <h3 className="font-serif text-lg text-text-primary font-normal">{phil.title}</h3>
                    <p className="font-sans text-[11px] text-text-secondary leading-relaxed font-light">{phil.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Academic details & Portrait */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div variants={itemVariants} className="relative aspect-[4/5] overflow-hidden border border-border-lux bg-bg-cloud group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&sat=-100&auto=format&fit=crop"
                  alt="Minimalist workspace showing light and order"
                  className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-1000 group-hover:scale-102"
                  loading="lazy"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="border-t border-border-lux pt-8 space-y-6">
                <h3 className="font-serif text-xl font-normal text-text-primary">
                  Education &amp; Qualifications
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col border-b border-border-lux pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[9px] uppercase text-text-muted">POSTGRADUATE</span>
                      <span className="font-mono text-[9px] text-text-muted">2024 - 2026</span>
                    </div>
                    <p className="font-sans text-xs text-text-primary font-bold mt-1">Master of Computer Applications</p>
                    <p className="font-mono text-[9px] text-text-secondary mt-0.5">Indus University</p>
                  </div>

                  <div className="flex flex-col border-b border-border-lux pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[9px] uppercase text-text-muted">UNDERGRADUATE</span>
                      <span className="font-mono text-[9px] text-text-muted">2020 - 2023</span>
                    </div>
                    <p className="font-sans text-xs text-text-primary font-bold mt-1">Bachelor of Computer Application</p>
                    <p className="font-mono text-[9px] text-text-secondary mt-0.5">Khyati School of Computer Application (GTU)</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
