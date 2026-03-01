'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understanding Your World',
    description: 'We go deep before we go anywhere. Immersive brand audits, stakeholder interviews, competitive landscape mapping, and cultural insight research form the unshakeable foundation of everything we build. No assumptions — only evidence.',
    deliverables: ['Brand Audit Report', 'Stakeholder Interviews', 'Market Research', 'Competitor Analysis', 'KPI Framework', 'Strategy Brief'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: '#FF6B6B',
    duration: '1–2 weeks',
    outcome: 'Clarity on your brand position and growth opportunity.',
  },
  {
    number: '02',
    title: 'Strategy',
    subtitle: 'Mapping the Path Forward',
    description: 'A comprehensive creative roadmap built on facts, not hunches. We define your positioning, messaging hierarchy, creative direction, and success metrics so every subsequent decision aligns with a single north star.',
    deliverables: ['Creative Direction Deck', 'Messaging Framework', 'Technical Architecture', 'Timeline Roadmap', 'Risk Assessment', 'Budget Plan'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: '#A855F7',
    duration: '1–2 weeks',
    outcome: 'A clear creative roadmap everyone is aligned on.',
  },
  {
    number: '03',
    title: 'Creation',
    subtitle: 'Crafting With Precision',
    description: 'Our designers and engineers execute with pixel-perfect precision. Iterative sprint cycles ensure you see real progress at every checkpoint. Feedback loops are built-in, not bolted on. The result: work that doesn\'t just look great — it performs.',
    deliverables: ['Brand Identity System', 'UI/UX Design', 'Development', 'Content Creation', 'Motion & Animation', 'QA & Testing'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: '#FF4757',
    duration: '3–8 weeks',
    outcome: 'Polished deliverables that exceed expectation.',
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Delivering Real Impact',
    description: 'We deploy with military precision. Performance audits, analytics instrumentation, and phased rollout protocols ensure nothing is left to chance. Then we stay — post-launch monitoring and optimization compound your returns over time.',
    deliverables: ['Production Deployment', 'Analytics Setup', 'Performance Audit', 'Team Handover', 'Full Documentation', 'Ongoing Support'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#A855F7',
    duration: '1–2 weeks',
    outcome: 'A live, optimized product with measurable business impact.',
  },
];

const principles = [
  { label: 'Transparency', desc: 'You\'re never in the dark. Real-time project visibility, always.', icon: '◈' },
  { label: 'Accountability', desc: 'We own outcomes, not just deliverables.', icon: '◆' },
  { label: 'Precision', desc: 'Every pixel, word, and decision has a reason behind it.', icon: '◎' },
  { label: 'Speed', desc: 'We move fast without breaking things — or trust.', icon: '◉' },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section ref={ref} className="w-full py-48 relative overflow-hidden" style={{ background: '#0C0C10' }}>

      {/* ── Ambient environment ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Gradient blob */}
        <div
          className="absolute"
          style={{ top: '0%', left: '50%', transform: 'translateX(-50%)', width: '90vmax', height: '60vmax', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 60%)', filter: 'blur(100px)' }}
        />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-px h-40" style={{ background: 'linear-gradient(180deg, rgba(255,107,107,0.4), transparent)' }} />
        <div className="absolute top-0 left-0 h-px w-40" style={{ background: 'linear-gradient(90deg, rgba(255,107,107,0.4), transparent)' }} />
        <div className="absolute bottom-0 right-0 w-px h-40" style={{ background: 'linear-gradient(0deg, rgba(168,85,247,0.4), transparent)' }} />
        <div className="absolute bottom-0 right-0 h-px w-40" style={{ background: 'linear-gradient(270deg, rgba(168,85,247,0.4), transparent)' }} />

        {/* Large watermark text */}
        <div
          className="absolute select-none"
          style={{
            bottom: '-5%', right: '-2%',
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            fontSize: 'clamp(12rem, 25vw, 30rem)',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.015)',
            letterSpacing: '-0.05em',
          }}
        >
          PROCESS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-28">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FF6B6B)' }} />
            <span className="text-xs uppercase tracking-[0.4em]" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>
              How We Work
            </span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #FF6B6B, transparent)' }} />
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 9rem)', letterSpacing: '-0.05em', fontFamily: 'var(--font-inter)', color: '#FAFAFA' }}
              initial={{ y: '100%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Built on{' '}
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
                clarity.
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.85, fontFamily: 'var(--font-inter)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Four phases. Zero confusion. A proven methodology forged across projects in Dubai, Indore, and Bhind — delivering exceptional results, on time and on budget.
          </motion.p>
        </div>

        {/* ── Interactive Phase Selector + Detail Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start mb-32">

          {/* Steps list (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {steps.map((step, i) => {
              const active = activeStep === i;
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="text-left w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.1 }}
                >
                  <div
                    className="flex items-center gap-5 px-7 py-6 rounded-2xl transition-all duration-400"
                    style={{
                      background: active ? `${step.color}08` : 'rgba(255,255,255,0.01)',
                      border: `1px solid ${active ? `${step.color}30` : 'rgba(255,255,255,0.05)'}`,
                    }}
                  >
                    {/* Number pill */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400"
                      style={{
                        background: active ? `${step.color}15` : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${active ? `${step.color}35` : 'rgba(255,255,255,0.06)'}`,
                        color: active ? step.color : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {step.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <span
                          className="text-xs font-black tabular-nums transition-colors duration-300"
                          style={{ color: active ? step.color : 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-inter)' }}
                        >
                          {step.number}
                        </span>
                        <p
                          className="text-sm font-bold transition-colors duration-300"
                          style={{ color: active ? '#FFFFFF' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
                        >
                          {step.title}
                        </p>
                      </div>
                      <p className="text-xs uppercase tracking-widest transition-colors duration-300" style={{ color: active ? step.color : 'rgba(255,255,255,0.18)' }}>
                        {step.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-end gap-2">
                      <span
                        className="text-[10px] px-2.5 py-1 rounded-full font-medium transition-all duration-300"
                        style={{
                          background: active ? `${step.color}15` : 'rgba(255,255,255,0.04)',
                          color: active ? step.color : 'rgba(255,255,255,0.2)',
                          border: `1px solid ${active ? `${step.color}25` : 'rgba(255,255,255,0.06)'}`,
                        }}
                      >
                        {step.duration}
                      </span>
                      <motion.svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke={active ? step.color : 'rgba(255,255,255,0.15)'}
                        viewBox="0 0 24 24"
                        animate={{ rotate: active ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel (3 cols) */}
          <div className="lg:col-span-3 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="rounded-[2rem] overflow-hidden relative"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.022)' }}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Accent bar */}
                <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${steps[activeStep].color}, ${steps[activeStep].color}20, transparent)` }} />

                {/* Decorative elements */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${steps[activeStep].color}14 0%, transparent 70%)`, filter: 'blur(50px)', transform: 'translate(30%, -30%)' }}
                />
                <div
                  className="absolute -bottom-6 -right-4 font-black leading-none select-none pointer-events-none text-[10rem]"
                  style={{ color: 'transparent', WebkitTextStroke: `1px ${steps[activeStep].color}08`, fontFamily: 'var(--font-inter)' }}
                >
                  {steps[activeStep].number}
                </div>

                <div className="p-10 lg:p-12 relative z-10">
                  {/* Phase badge */}
                  <div
                    className="inline-flex items-center gap-2 text-[10px] font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
                    style={{ background: `${steps[activeStep].color}12`, color: steps[activeStep].color, border: `1px solid ${steps[activeStep].color}25` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: steps[activeStep].color }} />
                    Phase {steps[activeStep].number} — {steps[activeStep].duration}
                  </div>

                  <h3
                    className="text-4xl font-black mb-1.5"
                    style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.04em', color: '#FAFAFA' }}
                  >
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest mb-8" style={{ color: steps[activeStep].color, fontFamily: 'var(--font-inter)' }}>
                    {steps[activeStep].subtitle}
                  </p>

                  <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.95, fontFamily: 'var(--font-inter)' }}>
                    {steps[activeStep].description}
                  </p>

                  {/* Outcome callout */}
                  <div
                    className="flex items-start gap-3 p-5 rounded-xl mb-8"
                    style={{ background: `${steps[activeStep].color}08`, border: `1px solid ${steps[activeStep].color}18` }}
                  >
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: steps[activeStep].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontFamily: 'var(--font-inter)' }}>
                      <span style={{ color: steps[activeStep].color, fontWeight: 700 }}>Outcome: </span>
                      {steps[activeStep].outcome}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                      Deliverables
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {steps[activeStep].deliverables.map((item, i) => (
                        <motion.div
                          key={item}
                          className="flex items-center gap-2.5 text-xs py-2.5 px-4 rounded-xl"
                          style={{ border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.02)', fontFamily: 'var(--font-inter)' }}
                          initial={{ opacity: 0, scale: 0.9, y: 5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.35 }}
                        >
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: steps[activeStep].color }} />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Principles row ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
            <p className="text-xs uppercase tracking-[0.35em] text-center" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
              Core Principles
            </p>
            <div className="flex-1 h-px max-w-xs" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.label}
                className="rounded-2xl p-8 text-center group transition-all duration-400"
                style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.018)' }}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
                whileHover={{ borderColor: 'rgba(255,107,107,0.25)', background: 'rgba(255,107,107,0.04)', scale: 1.02 }}
              >
                <div className="text-2xl mb-4" style={{ color: 'rgba(255,107,107,0.4)' }}>{p.icon}</div>
                <p className="text-sm font-bold mb-3" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>
                  {p.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.32)', fontFamily: 'var(--font-inter)', lineHeight: 1.8 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
