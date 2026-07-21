'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

export default function ExperiencePage() {
  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'Digiva Inc., Satellite, Ahmedabad',
      period: 'June 2026 - Present',
      details: [
        'Developing full-stack web applications using Next.js, React, Node.js, Express.js, and Tailwind CSS.',
        'Building scalable REST APIs and integrating SQL databases.',
        'Implementing JWT Authentication with secure HTTP-only cookies.',
        'Working on production-level business websites and enterprise web applications.',
        'Deploying frontend and backend applications using Vercel and Render.',
        'Collaborating with senior developers using Git and GitHub.',
        'Optimizing application performance, responsiveness, and SEO.',
        'Working with modern UI libraries including shadcn/ui and Framer Motion.'
      ],
    },
    {
      type: 'work',
      title: 'Web Developer Intern',
      organization: 'Mindlink Research Academy, Ahmedabad',
      period: 'Feb 2026 - April 2026',
      details: [
        'Developed URBNX e-commerce website using React, TypeScript, and Tailwind CSS.',
        'Integrated backend services using Supabase for authentication and database management.',
        'Implemented features like product listing, cart system, and user account functionality.',
        'Designed responsive and modern UI for improved user experience.',
        'Worked on optimizing performance and debugging frontend issues.'
      ],
    },
    {
      type: 'work',
      title: 'Web Developer Intern',
      organization: 'CSoft Technology, Ahmedabad',
      period: 'July 2022 - April 2023',
      details: [
        'Developed responsive web pages using HTML, CSS, and JavaScript.',
        'Assisted in debugging and fixing UI-related issues.',
        'Collaborated with team members on front-end development tasks.',
        'Improved user experience by optimizing page responsiveness.'
      ],
    },
    {
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      organization: 'Indus University',
      period: 'Jul 2024 - May 2026',
      details: [
        'Specializing in Web Development, Database Management Systems, Software Engineering, Data Structures & Algorithms.',
        'Developed multiple full-stack web applications using modern JavaScript technologies during academic and personal projects.'
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Application (BCA)',
      organization: 'Khyati School of Computer Application (GTU)',
      period: 'Jul 2020 - May 2023',
      details: [
        'Graduated with a CGPA of 6.70/10.',
        'Built a strong foundation in Programming, Object-Oriented Programming, Database Management, Computer Networks, and Web Technologies.'
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
              04 / CHRONOLOGY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary">
              Experience
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              A timeline of my professional contributions and academic foundation
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="max-w-4xl space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title + idx}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start relative"
              >
                {/* Time & Meta Column */}
                <div className="md:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 text-text-muted font-mono text-[10px] uppercase tracking-wider">
                    {exp.type === 'work' ? <Briefcase size={12} className="text-text-muted" /> : <GraduationCap size={12} className="text-text-muted" />}
                    <span>{exp.period}</span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-text-primary font-normal">
                    {exp.organization}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    {exp.title}
                  </p>
                </div>

                {/* Details Column */}
                <div className="md:col-span-8 border-l border-border-lux pl-6 md:pl-8 space-y-4">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="space-y-1">
                      <p className="font-sans text-xs sm:text-sm leading-relaxed text-text-secondary font-light flex items-start gap-2.5">
                        <ChevronRight size={10} className="text-text-muted mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </p>
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
