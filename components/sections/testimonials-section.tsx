'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'AKARSA completely redefined our brand narrative. Their team didn\'t just deliver design — they immersed themselves in our vision and brought it to life in a way we never imagined possible. The ROI speaks for itself: 320% in the first quarter alone.',
    name: 'Rahul Sharma',
    title: 'CEO & Co-founder',
    company: 'Nexus Technologies',
    location: 'Dubai, UAE',
    metric: '320%',
    metricLabel: 'ROI in Q1',
    metricSub: 'Post-launch revenue growth',
    avatar: 'RS',
    flag: '🇦🇪',
    color: '#FF6B6B',
    stars: 5,
  },
  {
    quote: 'Working with AKARSA felt like partnering with the sharpest creative minds in the industry. Their strategic clarity, aesthetic sensibility, and execution discipline are extraordinarily rare. Our brand impressions grew by 2 million in the first month.',
    name: 'Priya Verma',
    title: 'Founder',
    company: 'Aurora Health',
    location: 'Indore, India',
    metric: '2M+',
    metricLabel: 'Brand Impressions',
    metricSub: 'Month 1 after launch',
    avatar: 'PV',
    flag: '🇮🇳',
    color: '#A855F7',
    stars: 5,
  },
  {
    quote: 'The platform AKARSA built doesn\'t just look beautiful — it converts. Our customer acquisition cost dropped by 38% while conversions doubled. I\'ve never encountered an agency so relentlessly focused on measurable business outcomes.',
    name: 'Mohammed Al-Farsi',
    title: 'CMO',
    company: 'Vortex Labs',
    location: 'Dubai, UAE',
    metric: '2×',
    metricLabel: 'Conversion Rate',
    metricSub: '38% lower CAC',
    avatar: 'MA',
    flag: '🇦🇪',
    color: '#FF4757',
    stars: 5,
  },
  {
    quote: 'AKARSA understood our regional market deeply and brought global execution quality to our campaign in Bhind. The cultural authenticity they brought was extraordinary — something no other agency has ever matched. 500K engagements in week one.',
    name: 'Ankit Bhadoriya',
    title: 'Director',
    company: 'Pulse Media Group',
    location: 'Bhind, MP, India',
    metric: '500K+',
    metricLabel: 'Engagements',
    metricSub: 'Week 1 alone',
    avatar: 'AB',
    flag: '🇮🇳',
    color: '#A855F7',
    stars: 5,
  },
  {
    quote: 'From strategy to launch in record time. AKARSA brought precision, creativity, and a level of accountability that is extraordinarily rare. Our New Palasia retail footprint doubled in three months because of their sustained creative and strategic work.',
    name: 'Sunita Malhotra',
    title: 'Managing Director',
    company: 'Apex Retail Solutions',
    location: 'New Palasia, Indore',
    metric: '2×',
    metricLabel: 'Retail Footprint',
    metricSub: '3 months post-launch',
    avatar: 'SM',
    flag: '🇮🇳',
    color: '#FF6B6B',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FF6B6B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    let step = 0;
    const STEPS = 100;
    const DURATION = 7000;
    timerRef.current = setInterval(() => {
      step++;
      setProgress((step / STEPS) * 100);
      if (step >= STEPS) {
        setCurrent((p) => (p + 1) % testimonials.length);
        step = 0;
        setProgress(0);
      }
    }, DURATION / STEPS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, paused]);

  const t = testimonials[current];

  return (
    <section ref={ref} className="w-full py-48 relative overflow-hidden" style={{ background: '#080809' }}>

      {/* ── Ambient environment ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Noise texture */}
        <div className="absolute inset-0" style={{ opacity: 0.025, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Colored blobs */}
        <motion.div
          className="absolute"
          style={{ top: '-10%', right: '-10%', width: '70vmax', height: '70vmax', borderRadius: '50%', background: `radial-gradient(circle, ${t.color}09 0%, transparent 65%)`, filter: 'blur(100px)' }}
          animate={{ background: `radial-gradient(circle, ${t.color}09 0%, transparent 65%)` }}
          transition={{ duration: 1.2 }}
        />
        <div
          className="absolute"
          style={{ bottom: '-10%', left: '-10%', width: '60vmax', height: '60vmax', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)', filter: 'blur(100px)' }}
        />

        {/* Giant watermark quote mark */}
        <div
          className="absolute select-none"
          style={{
            top: '-8%', left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontSize: 'clamp(30rem, 55vw, 70rem)',
            lineHeight: 0.75,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.018)',
          }}
        >
          {'\u201C'}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FF6B6B)' }} />
            <span className="text-xs uppercase tracking-[0.4em]" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>
              Client Stories
            </span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #FF6B6B, transparent)' }} />
          </div>

          <h2
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 9rem)', letterSpacing: '-0.05em', fontFamily: 'var(--font-inter)', color: '#FAFAFA' }}
          >
            Results that{' '}
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #FF6B6B 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              echo.
            </span>
          </h2>

          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: 'rgba(255,255,255,0.32)', lineHeight: 1.85, fontFamily: 'var(--font-inter)' }}
          >
            From Dubai to Indore to Bhind — our clients tell the real story.
          </p>
        </motion.div>

        {/* ── Trust stat row ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-0 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {[
            { value: '50+', label: 'Clients Served', icon: '◈' },
            { value: '98%', label: 'Retention Rate', icon: '◆' },
            { value: '3', label: 'Countries', icon: '◉' },
            { value: '100%', label: 'On-Time Delivery', icon: '◎' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center px-10 py-8"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <span className="text-xs mb-3" style={{ color: 'rgba(255,107,107,0.5)', fontFamily: 'var(--font-inter)' }}>{s.icon}</span>
              <p className="text-3xl font-black" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)', letterSpacing: '-0.04em' }}>{s.value}</p>
              <p className="text-xs uppercase tracking-widest mt-1.5" style={{ color: 'rgba(255,255,255,0.22)', fontFamily: 'var(--font-inter)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Main carousel card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="relative rounded-[2rem] overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(30px)', background: 'rgba(255,255,255,0.022)' }}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Accent gradient bar */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}20, transparent)` }} />

              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 100% 0%, ${t.color}10 0%, transparent 55%)` }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* ── Left: Quote content (8 cols) ── */}
                <div
                  className="lg:col-span-8 p-12 lg:p-16 relative"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {/* Stars + flag */}
                  <div className="flex items-center justify-between mb-10">
                    <Stars count={t.stars} />
                    <span className="text-2xl">{t.flag}</span>
                  </div>

                  {/* Opening quote */}
                  <div
                    className="text-7xl font-black leading-none mb-3"
                    style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: t.color, opacity: 0.5 }}
                  >
                    {'\u201C'}
                  </div>

                  <p
                    className="text-xl lg:text-2xl font-light leading-relaxed mb-12"
                    style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-inter)', lineHeight: 1.65, letterSpacing: '-0.01em' }}
                  >
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-5">
                    {/* Avatar ring */}
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}25, ${t.color}08)`,
                        border: `2px solid ${t.color}35`,
                        color: t.color,
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {t.avatar}
                      {/* Online dot */}
                      <span
                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                        style={{ background: '#080809', border: `1px solid rgba(255,255,255,0.1)` }}
                      >
                        {t.flag}
                      </span>
                    </div>

                    <div>
                      <p className="text-base font-bold" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>
                        {t.name}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}>
                        {t.title}, <span style={{ color: t.color }}>{t.company}</span>
                      </p>
                      <p className="text-xs mt-1 flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Right: Metric panel (4 cols) ── */}
                <div className="lg:col-span-4 p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                  {/* BG decoration */}
                  <div
                    className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${t.color}15 0%, transparent 70%)`, filter: 'blur(30px)' }}
                  />
                  <div
                    className="absolute -top-4 -left-4 text-[10rem] font-black leading-none select-none pointer-events-none"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: `1px ${t.color}08`,
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {t.metric}
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.3em] mb-10" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                      Key Result
                    </p>

                    <div
                      className="text-6xl lg:text-7xl font-black leading-none mb-3"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}60 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.05em',
                      }}
                    >
                      {t.metric}
                    </div>

                    <p
                      className="text-base font-semibold mb-1"
                      style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-inter)' }}
                    >
                      {t.metricLabel}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
                      {t.metricSub}
                    </p>

                    <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                          Verified by client
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                        Results may vary based on market conditions and project scope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-10">
            {/* Dot progress indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((t2, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setProgress(0); }}
                  aria-label={`Testimonial ${i + 1}`}
                  className="relative rounded-full overflow-hidden transition-all duration-400"
                  style={{
                    height: '3px',
                    width: i === current ? '60px' : '14px',
                    background: i === current ? 'transparent' : 'rgba(255,255,255,0.08)',
                  }}
                >
                  {i === current && (
                    <>
                      <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.08)' }} />
                      <motion.div className="absolute inset-y-0 left-0" style={{ background: t2.color, width: `${progress}%` }} />
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <span className="text-xs tabular-nums mr-2" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              {[{ dir: -1, label: 'Previous' }, { dir: 1, label: 'Next' }].map(({ dir, label }) => (
                <motion.button
                  key={label}
                  onClick={() => { setCurrent((p) => (p + dir + testimonials.length) % testimonials.length); setProgress(0); }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.03)' }}
                  whileHover={{ borderColor: '#FF6B6B', color: '#FF6B6B', scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  aria-label={label}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dir === -1 ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
                  </svg>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
