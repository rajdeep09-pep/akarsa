'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const logos = ['Google', 'Apple', 'Microsoft', 'Meta', 'Amazon', 'Tesla', 'Nike', 'Spotify', 'Airbnb', 'Uber', 'Netflix', 'Stripe', 'Figma', 'Notion'];

export function LogoMarquee() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="w-full py-16 relative overflow-hidden"
      style={{ background: '#0D0D10', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0D0D10, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0D0D10, transparent)' }} />

      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}
        >
          Trusted by forward-thinking brands
        </span>
      </motion.div>

      {/* Marquee track */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'logoMarquee 30s linear infinite' }}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-10 py-2 flex items-center gap-3 group cursor-default transition-opacity duration-300"
              style={{ opacity: 0.25 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.25')}
            >
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)', letterSpacing: '0.15em' }}
              >
                {logo}
              </span>
              <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,107,107,0.4)' }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
