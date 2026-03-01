'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-48 relative overflow-hidden" style={{ background: '#0A0A0C' }}>
      {/* Dramatic rise glow from bottom */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(168,85,247,0.2) 0%, transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 110%, rgba(255,107,107,0.14) 0%, transparent 60%)' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Top border glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,107,107,0.35), rgba(168,85,247,0.35), transparent)' }} />

      <div className="container-akarsa relative z-10 text-center">
        <motion.div
          className="text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready to Start
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h2
            className="font-black leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 11rem)',
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-inter)',
              color: '#FAFAFA',
            }}
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {"Let's Create"}
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            className="font-black leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 11rem)',
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #FF6B6B 0%, #A855F7 55%, #FF4757 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Something Great.
          </motion.h2>
        </div>

        <motion.p
          className="text-base max-w-lg mx-auto mb-14 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          You have a vision. We have the skills, the team, and the obsession to make it extraordinary.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest"
            style={{ background: '#FF6B6B', color: '#0A0A0C', fontFamily: 'var(--font-inter)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,107,107,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Start Your Project
            <span>↗</span>
          </motion.a>
          <motion.a
            href="mailto:hello@akarsa.com"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,107,0.4)', color: '#FFFFFF' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            hello@akarsa.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
