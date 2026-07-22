'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Message sent successfully.');
        reset();
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Submit contact form error:', error);
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      label: 'Email',
      value: 'om07674@gmail.com',
      href: 'mailto:om07674@gmail.com',
      icon: <Mail className="w-4 h-4 text-text-primary" />,
    },
    {
      label: 'Phone',
      value: '+91 7203864244',
      href: 'tel:+917203864244',
      icon: <Phone className="w-4 h-4 text-text-primary" />,
    },
    {
      label: 'GitHub',
      value: 'github.com/omm-patel',
      href: 'https://github.com/omm-patel',
      icon: <GithubIcon className="w-4 h-4 text-text-primary" />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/om-patel-053338245/',
      href: 'https://www.linkedin.com/in/om-patel-053338245/',
      icon: <LinkedinIcon className="w-4 h-4 text-text-primary" />,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-pure">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Cards Grid */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted block">
                06 / CONNECT
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] text-text-primary">
                Let&apos;s build something together.
              </h2>
            </div>
            
            <p className="font-sans text-sm leading-relaxed text-text-secondary font-light max-w-sm">
              I am open to new job opportunities, freelance projects, and collaborations. Feel free to reach out via the form or my social channels.
            </p>

            {/* Grid of Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === 'GitHub' || card.label === 'LinkedIn' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-5 border border-border-lux bg-bg-soft hover:bg-bg-pure hover:border-text-primary hover:scale-[1.02] transition-all duration-300 rounded-none group aspect-[4/3]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                      {card.label}
                    </span>
                    <div className="p-1.5 border border-border-lux bg-bg-pure group-hover:border-text-primary/20 transition-colors">
                      {card.icon}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] break-all text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                    {card.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full border border-border-lux bg-bg-soft p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Name Input */}
              <div className="space-y-1 relative">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register('name')}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-border-lux focus:border-text-primary outline-none py-2 text-sm font-sans text-text-primary transition-colors rounded-none placeholder-text-muted/50 disabled:opacity-50"
                />
                {errors.name && (
                  <span className="font-mono text-[10px] text-text-primary underline decoration-dotted block mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1 relative">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-border-lux focus:border-text-primary outline-none py-2 text-sm font-sans text-text-primary transition-colors rounded-none placeholder-text-muted/50 disabled:opacity-50"
                />
                {errors.email && (
                  <span className="font-mono text-[10px] text-text-primary underline decoration-dotted block mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Subject Input */}
              <div className="space-y-1 relative">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  {...register('subject')}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-border-lux focus:border-text-primary outline-none py-2 text-sm font-sans text-text-primary transition-colors rounded-none placeholder-text-muted/50 disabled:opacity-50"
                />
                {errors.subject && (
                  <span className="font-mono text-[10px] text-text-primary underline decoration-dotted block mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-1 relative">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can I help you?"
                  {...register('message')}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-border-lux focus:border-text-primary outline-none py-2 text-sm font-sans text-text-primary transition-colors resize-none rounded-none placeholder-text-muted/50 disabled:opacity-50"
                />
                {errors.message && (
                  <span className="font-mono text-[10px] text-text-primary underline decoration-dotted block mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 border border-text-primary text-[11px] font-mono uppercase tracking-wider text-bg-pure bg-text-primary hover:bg-transparent hover:text-text-primary disabled:opacity-50 disabled:hover:bg-text-primary disabled:hover:text-bg-pure transition-all duration-300 rounded-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={12} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={12} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
