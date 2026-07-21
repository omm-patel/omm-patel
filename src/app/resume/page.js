'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ArrowLeft, Printer, GraduationCap, Briefcase, Award, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const resumeData = {
    name: 'Om Patel',
    title: 'Full Stack Developer',
    location: 'Gota, Ahmedabad 382470',
    email: 'om07674@gmail.com',
    phone: '+91 7203864244',
    github: 'https://github.com/omm-patel',
    githubDisplay: 'github.com/omm-patel',
    linkedin: 'https://www.linkedin.com/in/om-patel-053338245/',
    linkedinDisplay: 'linkedin.com/in/om-patel-053338245',
    summary: 'Full Stack Developer with hands-on experience building production-ready business websites and web applications from frontend to backend using Next.js, React.js, Node.js, Express.js, JavaScript, TypeScript, Tailwind CSS, MySQL, Supabase, and MongoDB. Experienced in developing scalable REST APIs, implementing JWT authentication, building admin dashboards, and deploying applications on Vercel and Render. Built multiple real-world projects including a full-stack e-commerce platform, an employee management system, and SEO-optimized corporate websites. Passionate about writing clean, maintainable code and delivering responsive, high-performance web applications.',
    education: [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Indus University',
        period: 'Jul 2024 - May 2026',
        details: [
          'Relevant Coursework: Web Development, Database Management Systems, Software Engineering, Data Structures & Algorithms',
          'Developed multiple full-stack web applications using modern JavaScript technologies during academic and personal projects.'
        ]
      },
      {
        degree: 'Bachelor of Computer Application (BCA)',
        institution: 'Khyati School of Computer Application',
        period: 'Jul 2020 - May 2023',
        details: [
          'Graduated with a CGPA of 6.70/10',
          'Built a strong foundation in Programming, Object-Oriented Programming, Database Management, Computer Networks, and Web Technologies.',
          'Participated in academic projects focused on frontend and backend web development.'
        ]
      },
    ],
    experience: [
      {
        role: 'Full Stack Developer Intern',
        company: 'Digiva Inc., Satellite, Ahmedabad',
        period: 'June 2026 - Present',
        points: [
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
        role: 'Web Developer Intern',
        company: 'Mindlink Research Academy, Ahmedabad',
        period: 'Feb 2026 - April 2026',
        points: [
          'Developed URBNX e-commerce website using React, TypeScript, and Tailwind CSS.',
          'Integrated backend services using Supabase for authentication and database management.',
          'Implemented features like product listing, cart system, and user account functionality.',
          'Designed responsive and modern UI for improved user experience.',
          'Worked on optimizing performance and debugging frontend issues.'
        ],
      },
      {
        role: 'Web Developer Intern',
        company: 'CSoft Technology, Ahmedabad',
        period: 'July 2022 - April 2023',
        points: [
          'Developed responsive web pages using HTML, CSS, and JavaScript.',
          'Assisted in debugging and fixing UI-related issues.',
          'Collaborated with team members on front-end development tasks.',
          'Improved user experience by optimizing page responsiveness.'
        ],
      },
    ],
    projects: [
      {
        title: 'URBNX – E-commerce Website',
        tech: 'React.js, TypeScript, Tailwind CSS, Supabase',
        points: [
          'Developed a full-stack clothing e-commerce platform with secure authentication, product catalog, shopping cart, and order management.',
          'Built a complete My Account module featuring profile management, order history, and password management.',
          'Developed an admin dashboard for managing products and customer orders.',
          'Integrated Supabase Authentication and database services for secure user management and real-time data operations.',
          'Designed a modern, fully responsive user interface using Tailwind CSS.'
        ]
      },
      {
        title: 'WorkForce Hub',
        tech: 'Next.js, Express.js, TiDB, Tailwind CSS, Resend API',
        points: [
          'Developed a full-stack Employee Management System using Next.js, Express.js, TiDB, and Tailwind CSS.',
          'Implemented secure JWT Authentication with HTTP-only cookies.',
          'Built employee, department, and role management modules.',
          'Added Excel Import & Export functionality.',
          'Developed REST APIs with pagination, search, and filtering.',
          'Integrated email notifications using Resend.',
          'Deployed frontend on Vercel and backend on Render.'
        ]
      },
      {
        title: 'Enclave Export Import',
        tech: 'Next.js, Tailwind CSS',
        points: [
          'Designed and developed a professional export-import business website.',
          'Built responsive layouts with Next.js and Tailwind CSS.',
          'Implemented SEO-friendly pages and reusable UI components.',
          'Optimized website performance and user experience.'
        ]
      },
      {
        title: 'Surya Impex',
        tech: 'Next.js, Framer Motion',
        points: [
          'Developed a modern SEO-optimized corporate website using Next.js.',
          'Built responsive UI with smooth animations using Framer Motion.',
          'Implemented reusable components and optimized page performance.',
          'Configured deployment on Vercel.'
        ]
      }
    ],
    skills: {
      frontend: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn/ui', 'Framer Motion'],
      backendAndDatabase: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MySQL', 'TiDB', 'Supabase', 'MongoDB'],
      tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'Resend API'],
      coreSkills: ['Responsive Web Design', 'API Integration', 'SEO Optimization', 'Problem Solving', 'Debugging', 'Team Collaboration']
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
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
    <div className="bg-bg-pure py-16 md:py-24 print:py-0 print:bg-white text-text-primary">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 print:px-0">
        
        {/* Navigation & Action Bar (Hidden in Print) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16 border-b border-border-lux pb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="/resume/Om patel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 border border-border-lux hover:border-text-primary text-[10px] font-mono uppercase tracking-wider text-text-primary transition-colors rounded-none w-full sm:w-auto cursor-pointer"
            >
              <FileText size={12} />
              <span>View PDF Resume</span>
            </a>
            <a
              href="/resume/Om patel.pdf"
              download="Om_Patel_Resume.pdf"
              className="flex items-center justify-center gap-2 px-5 py-2.5 border border-text-primary text-[10px] font-mono uppercase tracking-wider text-bg-pure bg-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300 rounded-none w-full sm:w-auto cursor-pointer"
            >
              <Download size={12} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Resume Sheet Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="border border-border-lux bg-bg-soft p-5 sm:p-8 md:p-16 print:p-0 print:border-none print:bg-white space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="border-b border-border-lux pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                {resumeData.name}
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                {resumeData.title}
              </p>
            </div>
            
            <div className="font-mono text-[10px] uppercase tracking-wider text-text-secondary space-y-1.5 md:text-right w-full md:w-auto">
              <p className="flex items-center md:justify-end gap-2">
                <MapPin size={10} className="text-text-muted" />
                <span>{resumeData.location}</span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-text-muted">EMAIL:</span>
                <a href={`mailto:${resumeData.email}`} className="text-text-primary hover:underline">{resumeData.email}</a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-text-muted">PHONE:</span>
                <a href={`tel:${resumeData.phone.replace(' ', '')}`} className="text-text-primary hover:underline">{resumeData.phone}</a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-text-muted">GITHUB:</span>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">{resumeData.githubDisplay}</a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-text-muted">LINKEDIN:</span>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">{resumeData.linkedinDisplay}</a>
              </p>
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="border-b border-border-lux pb-2">
              <h2 className="font-serif text-base uppercase tracking-wider text-text-primary font-bold">
                Profile Summary
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              {resumeData.summary}
            </p>
          </motion.div>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            
            {/* Left Block: Experience & Education */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Experience */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-border-lux pb-3">
                  <Briefcase size={14} className="text-text-muted" />
                  <h2 className="font-serif text-base uppercase tracking-wider text-text-primary font-bold">
                    Professional Experience
                  </h2>
                </div>

                <div className="space-y-8">
                  {resumeData.experience.map((exp, expIdx) => (
                    <div key={exp.company + expIdx} className="space-y-3">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[9px] text-text-muted">
                          {exp.company} &mdash; {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="font-sans text-xs text-text-secondary leading-relaxed font-light flex items-start gap-2">
                            <span className="w-1.5 h-1.5 border border-text-primary rotate-45 mt-1 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-border-lux pb-3">
                  <GraduationCap size={14} className="text-text-muted" />
                  <h2 className="font-serif text-base uppercase tracking-wider text-text-primary font-bold">
                    Education Timeline
                  </h2>
                </div>

                <div className="space-y-6">
                  {resumeData.education.map((edu, eduIdx) => (
                    <div key={edu.degree + eduIdx} className="space-y-2.5">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                          {edu.degree}
                        </h3>
                        <span className="font-mono text-[10px] text-text-muted">
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-mono text-[9px] uppercase text-text-secondary">
                        {edu.institution}
                      </p>
                      <ul className="space-y-1.5 mt-1">
                        {edu.details.map((det, dIdx) => (
                          <li key={dIdx} className="font-sans text-xs text-text-secondary leading-relaxed font-light flex items-start gap-2">
                            <span className="w-1 h-1 bg-text-muted rounded-full mt-1.5 flex-shrink-0" />
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Block: Skills & Projects Summary */}
            <div className="lg:col-span-4 space-y-12">
              
              {/* Skills */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-border-lux pb-3">
                  <FileText size={14} className="text-text-muted" />
                  <h2 className="font-serif text-base uppercase tracking-wider text-text-primary font-bold">
                    Technical Skills
                  </h2>
                </div>

                <div className="space-y-4">
                  {Object.entries(resumeData.skills).map(([key, list]) => (
                    <div key={key} className="space-y-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
                        {key === 'frontend' ? 'Frontend' : key === 'backendAndDatabase' ? 'Backend & Database' : key === 'tools' ? 'Tools & Platforms' : 'Core Skills'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 border border-border-lux font-mono text-[9px] text-text-secondary bg-bg-pure"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects Summary Checklist */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-border-lux pb-3">
                  <Award size={14} className="text-text-muted" />
                  <h2 className="font-serif text-base uppercase tracking-wider text-text-primary font-bold">
                    Key Projects
                  </h2>
                </div>

                <div className="space-y-4">
                  {resumeData.projects.map((proj, pIdx) => (
                    <div key={proj.title} className="space-y-1.5">
                      <p className="font-sans text-xs font-bold text-text-primary flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-text-muted mt-0.5 flex-shrink-0" />
                        <span>{proj.title}</span>
                      </p>
                      <p className="font-mono text-[8px] text-text-muted pl-4">
                        TECH: {proj.tech}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
}
