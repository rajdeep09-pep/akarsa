'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Aurora Branding Identity',
    category: 'Brand Identity',
    year: '2024',
    description: 'A full-spectrum brand identity system for a luxury lifestyle label — from strategic positioning to a design system deployed across 12 international markets.',
    tags: ['Branding', 'Strategy', 'Print', 'Digital'],
    accent: '#FF6B6B',
    index: '01',
    size: 'large',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aurora%20Branding%20Identity-pLggyoz5kebg9ND0hYgW7E7zWfVp3x.svg',
  },
  {
    id: 2,
    title: 'Nexa Digital Campaign',
    category: 'Digital Marketing',
    year: '2024',
    description: '320% ROI. 2M+ impressions. The campaign that turned a regional product into a cultural moment across UAE and India.',
    tags: ['SEO', 'Social', 'PPC', 'Content'],
    accent: '#A855F7',
    index: '02',
    size: 'small',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexa%20Digital%20Campaign-eSO5BHtRvJuJY6hIHQ9VOYOHvLjW81.svg',
  },
  {
    id: 3,
    title: 'W1 — Web Experience',
    category: 'Web Development',
    year: '2024',
    description: 'A full-stack platform delivering seamless user journeys. Conversion rate doubled in month one. Obsessively crafted down to the last micro-interaction.',
    tags: ['React', 'Node.js', 'UX', 'Motion'],
    accent: '#FF4757',
    index: '03',
    size: 'small',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/W1-yTQK0p8pHy4JumY5XPsejUHZ43bbg9.svg',
  },
  {
    id: 4,
    title: 'W2 — Digital Product',
    category: 'Product Design',
    year: '2024',
    description: 'Native cross-platform product design. 500K+ active users in Q1. Shortlisted for a regional design award.',
    tags: ['UI/UX', 'Product', 'iOS', 'Android'],
    accent: '#A855F7',
    index: '04',
    size: 'large',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/W2-zJmYnSwFFT5OqxotSVi3XOYIv1yhvs.svg',
  },
];

function ProjectCard({ project, isLarge }: { project: typeof projects[0]; isLarge: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.a
      ref={cardRef}
      href="/work"
      className="group relative rounded-2xl overflow-hidden block cursor-pointer"
      style={{
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.02)',
        transformStyle: 'preserve-3d',
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transition: 'box-shadow 0.4s',
        boxShadow: hovered ? `0 30px 80px -10px ${project.accent}30` : '0 0 0 transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: isLarge ? '16/9' : '4/3' }}
      >
        {/* Real project image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{ scale: hovered ? 1.05 : 1 }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 30%, rgba(10,10,12,0.85) 100%)`,
            opacity: hovered ? 0.9 : 0.6,
            transition: 'opacity 0.4s',
          }}
        />

        {/* Top accent glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 30% 30%, ${project.accent}20 0%, transparent 60%)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating project number */}
        <div
          className="absolute top-6 left-7 font-black leading-none select-none"
          style={{
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            color: 'transparent',
            WebkitTextStroke: `1px rgba(255,255,255,0.12)`,
            fontFamily: 'var(--font-inter)',
          }}
        >
          {project.index}
        </div>

        {/* Category pill */}
        <div className="absolute top-6 right-6">
          <span
            className="text-xs px-3 py-1.5 rounded-full font-medium uppercase tracking-wider"
            style={{
              background: `${project.accent}20`,
              color: project.accent,
              border: `1px solid ${project.accent}35`,
              backdropFilter: 'blur(10px)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: project.accent }}
          animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg className="w-5 h-5" fill="none" stroke="#0A0A0C" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.div>
      </div>

      {/* Info */}
      <div
        className="p-7"
        style={{ background: 'rgba(12,12,16,0.97)', borderTop: `1px solid ${project.accent}12` }}
      >
        <div className="flex items-start justify-between mb-3">
          <h3
            className="text-xl font-bold transition-colors duration-300"
            style={{ color: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-inter)' }}
          >
            {project.title}
          </h3>
          <span className="text-xs font-mono mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{ border: `1px solid ${hovered ? `${project.accent}20` : 'rgba(255,255,255,0.07)'}`, color: hovered ? project.accent : 'rgba(255,255,255,0.3)', transition: 'all 0.3s' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-40 relative" style={{ background: '#0A0A0C' }}>
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,107,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-akarsa relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-24 gap-8">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: '#FF6B6B' }}>
                Selected Work
              </span>
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 7rem)',
                  letterSpacing: '-0.04em',
                  fontFamily: 'var(--font-inter)',
                  color: '#FAFAFA',
                }}
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Work that{' '}
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    background: 'linear-gradient(135deg, #FF6B6B, #A855F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  speaks.
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              View All Projects
              <motion.span className="inline-block" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <ProjectCard project={project} isLarge={project.size === 'large'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
