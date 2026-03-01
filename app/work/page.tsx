'use client';

import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { Footer } from '@/components/sections/footer';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Branding', 'Digital Marketing', 'Web Development', 'Product Design'];

const works = [
  {
    id: 1,
    title: 'Aurora Branding Identity',
    category: 'Branding',
    description: 'A full-spectrum brand identity system for a luxury lifestyle label — strategic positioning through a complete design system deployed across 12 international markets.',
    year: '2024',
    tags: ['Branding', 'Strategy', 'Print', 'Digital'],
    accent: '#FF6B6B',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aurora%20Branding%20Identity-pLggyoz5kebg9ND0hYgW7E7zWfVp3x.svg',
    metric: '12 Markets',
    metricSub: 'International deployment',
    featured: true,
    index: '01',
  },
  {
    id: 2,
    title: 'Nexa Digital Campaign',
    category: 'Digital Marketing',
    description: '320% ROI. 2M+ impressions. The campaign that turned a regional product into a cultural moment across UAE and India.',
    year: '2024',
    tags: ['SEO', 'Social Media', 'PPC', 'Content'],
    accent: '#A855F7',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexa%20Digital%20Campaign-eSO5BHtRvJuJY6hIHQ9VOYOHvLjW81.svg',
    metric: '320% ROI',
    metricSub: '2M+ impressions',
    featured: true,
    index: '02',
  },
  {
    id: 3,
    title: 'W1 — Web Experience',
    category: 'Web Development',
    description: 'A full-stack platform delivering seamless user journeys. Conversion rate doubled in month one. Obsessively crafted down to the last micro-interaction.',
    year: '2024',
    tags: ['React', 'Node.js', 'UX Design', 'Motion'],
    accent: '#FF4757',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/W1-yTQK0p8pHy4JumY5XPsejUHZ43bbg9.svg',
    metric: '2× Conversions',
    metricSub: 'Month 1 post-launch',
    featured: true,
    index: '03',
  },
  {
    id: 4,
    title: 'W2 — Digital Product',
    category: 'Product Design',
    description: 'Native cross-platform product design with an obsessive focus on experience. 500K+ active users in Q1 alone. Shortlisted for a regional design award.',
    year: '2024',
    tags: ['UI/UX', 'Product', 'iOS', 'Android'],
    accent: '#A855F7',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/W2-zJmYnSwFFT5OqxotSVi3XOYIv1yhvs.svg',
    metric: '500K+ Users',
    metricSub: 'Q1 launch',
    featured: false,
    index: '04',
  },
];

function WorkCard({ work, i }: { work: typeof works[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        border: `1px solid ${hovered ? `${work.accent}30` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 30px 80px -10px ${work.accent}25` : 'none',
        transition: 'border-color 0.4s, box-shadow 0.4s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <motion.img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: hovered ? 1.06 : 1, transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(180deg, transparent 20%, rgba(8,8,9,0.92) 100%)`,
            opacity: hovered ? 0.95 : 0.7,
          }}
        />

        {/* Hover accent glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{
            background: `radial-gradient(ellipse at 30% 30%, ${work.accent}18 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Watermark number */}
        <div
          className="absolute top-4 left-6 font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            fontFamily: 'var(--font-inter)',
          }}
        >
          {work.index}
        </div>

        {/* Featured + Category pills */}
        <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
          {work.featured && (
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: `${work.accent}20`, color: work.accent, border: `1px solid ${work.accent}35`, backdropFilter: 'blur(8px)' }}
            >
              Featured
            </span>
          )}
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
          >
            {work.category}
          </span>
        </div>

        {/* Arrow CTA on hover */}
        <motion.div
          className="absolute bottom-5 right-5 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: work.accent }}
          animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg className="w-5 h-5" fill="none" stroke="#0A0A0C" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.div>
      </div>

      {/* Info panel */}
      <div
        className="p-7"
        style={{ background: '#0C0C10', borderTop: `1px solid ${hovered ? `${work.accent}18` : 'rgba(255,255,255,0.05)'}`, transition: 'border-color 0.4s' }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-xl font-bold leading-snug transition-colors duration-300"
            style={{ color: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-inter)' }}
          >
            {work.title}
          </h3>
          <div className="text-right shrink-0">
            <p
              className="text-lg font-black leading-none"
              style={{ color: work.accent, fontFamily: 'var(--font-inter)', letterSpacing: '-0.03em' }}
            >
              {work.metric}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
              {work.metricSub}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontFamily: 'var(--font-inter)' }}>
          {work.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full transition-all duration-300"
                style={{
                  border: `1px solid ${hovered ? `${work.accent}25` : 'rgba(255,255,255,0.07)'}`,
                  color: hovered ? work.accent : 'rgba(255,255,255,0.3)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>{work.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => setVisible(true), []);

  const filteredWorks = activeCategory === 'All' ? works : works.filter((w) => w.category === activeCategory);

  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen" style={{ background: '#080809' }}>

        {/* ── Hero ── */}
        <section className="pt-40 pb-28 px-4 relative overflow-hidden">
          {/* BG glow */}
          <div
            className="absolute pointer-events-none"
            style={{ top: '5%', left: '50%', transform: 'translateX(-50%)', width: '80vmax', height: '60vmax', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 60%)', filter: 'blur(80px)' }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          <div ref={heroRef} className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>Portfolio</span>
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
            </motion.div>

            <div className="overflow-hidden mb-8">
              <motion.h1
                className="font-black leading-none"
                style={{ fontSize: 'clamp(4rem, 9vw, 11rem)', letterSpacing: '-0.05em', fontFamily: 'var(--font-inter)', color: '#FAFAFA' }}
                initial={{ y: '100%' }} animate={visible ? { y: '0%' } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Work that{' '}
                <span style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', background: 'linear-gradient(135deg, #FF6B6B, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  speaks.
                </span>
              </motion.h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.p
                className="text-lg max-w-xl"
                style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontFamily: 'var(--font-inter)' }}
                initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.35 }}
              >
                Explore the projects that showcase our expertise, creativity, and commitment to delivering exceptional results across industries and borders.
              </motion.p>

              {/* Stats row */}
              <motion.div
                className="flex gap-8 shrink-0"
                initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 }}
              >
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '3', label: 'Countries' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-black" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)', letterSpacing: '-0.04em' }}>{s.value}</p>
                    <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Filter bar ── */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 }}
            >
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                    style={{
                      background: active ? '#FF6B6B' : 'transparent',
                      color: active ? '#0A0A0C' : 'rgba(255,255,255,0.4)',
                      border: active ? '1px solid #FF6B6B' : '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'var(--font-inter)',
                    }}
                    onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,107,107,0.4)'; }}
                    onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    {cat}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Project grid ── */}
        <section className="px-4 pb-40">
          <div className="max-w-7xl mx-auto px-4">
            {filteredWorks.length === 0 ? (
              <div className="text-center py-32">
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                  No projects in this category yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredWorks.map((work, i) => (
                  <WorkCard key={work.id} work={work} i={i} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 pb-40">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="rounded-3xl overflow-hidden relative"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
            >
              {/* Gradient top bar */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg, #FF6B6B, #A855F7)' }} />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(255,107,107,0.08) 0%, transparent 60%)' }}
              />

              <div className="relative z-10 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>
                    Ready to Work Together?
                  </p>
                  <h2
                    className="font-black leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '-0.04em', fontFamily: 'var(--font-inter)', color: '#FAFAFA' }}
                  >
                    Your project could<br />be next.
                  </h2>
                </div>
                <Link href="/contact">
                  <motion.div
                    className="inline-flex items-center gap-4 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shrink-0"
                    style={{ background: '#FF6B6B', color: '#0A0A0C', fontFamily: 'var(--font-inter)' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,107,107,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    Start a Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
