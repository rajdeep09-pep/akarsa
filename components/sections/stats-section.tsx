'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', sub: 'Across 20+ industries globally' },
  { value: 50, suffix: '+', label: 'Happy Clients', sub: 'From startups to enterprises' },
  { value: 320, suffix: '%', label: 'Average ROI', sub: 'Across all client campaigns' },
  { value: 99, suffix: '%', label: 'Client Retention', sub: 'They keep coming back' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full py-40 relative overflow-hidden" style={{ background: '#0A0A0C' }}>
      {/* Central glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 70%)' }}
      />

      {/* Thin divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />

      <div className="container-akarsa relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: '#FF6B6B' }}
          >
            By the Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group relative flex flex-col items-center justify-center py-20 px-8 text-center overflow-hidden"
              style={{ background: '#0A0A0C' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              whileHover={{ background: 'rgba(255,107,107,0.03)' }}
            >
              {/* Hover corner accent */}
              <motion.div
                className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
                style={{ borderTop: '1px solid rgba(255,107,107,0.4)', borderLeft: '1px solid rgba(255,107,107,0.4)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div
                className="text-5xl lg:text-7xl font-black mb-3 leading-none"
                style={{
                  fontFamily: 'var(--font-inter)',
                  background: 'linear-gradient(135deg, #FF6B6B 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {stat.label}
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee */}
        <motion.div
          className="mt-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="flex whitespace-nowrap" style={{ animation: 'statsMarquee 25s linear infinite' }}>
            {[...Array(3)].map((_, set) => (
              <div key={set} className="flex shrink-0 gap-16 mr-16">
                {['Trusted by 50+ clients', 'Built for growth', 'Premium results', 'Global impact', '5-star rated'].map((t) => (
                  <span key={t} className="flex items-center gap-4 text-xs uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.15)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] opacity-50" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes statsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
