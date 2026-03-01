'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const offices = [
  {
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Dubai, United Arab Emirates',
    type: 'Global HQ',
    color: '#FF6B6B',
  },
  {
    flag: '🇮🇳',
    country: 'India',
    city: 'Indore (Vijay Nagar)',
    address: 'Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore',
    type: 'Creative Studio',
    color: '#A855F7',
  },
  {
    flag: '🇮🇳',
    country: 'India',
    city: 'Indore (New Palasia)',
    address: '17/2, New Palasia, Indore, Madhya Pradesh 452001',
    type: 'Design Office',
    color: '#FF4757',
  },
  {
    flag: '🇮🇳',
    country: 'India',
    city: 'Bhind',
    address: 'HR26+M6V, Bhadoriya Nagar, Rekha Nagar, Bhind, Manpura, Madhya Pradesh 477001',
    type: 'Regional Office',
    color: '#A855F7',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !email || !name) return;
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      ref={ref}
      className="w-full py-40 relative overflow-hidden"
      style={{ background: '#0A0A0C' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '-15%', left: '-8%', width: '60vmax', height: '60vmax', background: 'radial-gradient(circle, rgba(107,63,160,0.15) 0%, transparent 65%)', filter: 'blur(90px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-8%', width: '50vmax', height: '50vmax', background: 'radial-gradient(circle, rgba(232,68,122,0.1) 0%, transparent 65%)', filter: 'blur(90px)', borderRadius: '50%' }} />
      </div>

      <div className="container-akarsa relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-px" style={{ background: '#E8447A' }} />
            <span className="text-xs uppercase tracking-[0.35em]" style={{ color: '#E8447A' }}>
              Contact AKARSA
            </span>
            <div className="w-8 h-px" style={{ background: '#E8447A' }} />
          </div>
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontSize: 'clamp(3rem, 6vw, 7rem)',
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-inter)',
              color: '#FAFAFA',
            }}
          >
            Let&apos;s build{' '}
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #E8447A 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              together.
            </span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.9 }}>
            From Dubai to Indore to Bhind — we are where you are. Reach us anytime.
          </p>
        </motion.div>

        {/* Top contact strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <a
            href="tel:+918109801383"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl group transition-all duration-300"
            style={{
              border: '1px solid rgba(232,68,122,0.2)',
              background: 'rgba(232,68,122,0.05)',
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(232,68,122,0.12)', border: '1px solid rgba(232,68,122,0.2)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8447A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(232,68,122,0.7)' }}>Call Us</p>
              <p className="text-sm font-semibold" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>+91 8109801383</p>
            </div>
          </a>

          <a
            href="mailto:beakarsa@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl group transition-all duration-300"
            style={{
              border: '1px solid rgba(168,85,247,0.2)',
              background: 'rgba(168,85,247,0.05)',
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(168,85,247,0.7)' }}>Email Us</p>
              <p className="text-sm font-semibold" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>beakarsa@gmail.com</p>
            </div>
          </a>
        </motion.div>

        {/* Main 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* Left — Offices */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#E8447A', fontFamily: 'var(--font-inter)' }}>
              Our Offices
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="font-bold mb-10"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', color: '#FAFAFA', fontFamily: 'var(--font-inter)', lineHeight: 1.15 }}
            >
              Headquartered globally,<br />
              <span style={{ color: 'rgba(255,255,255,0.45)' }}>rooted locally.</span>
            </motion.h3>

            <div className="space-y-3">
              {offices.map((office, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  className="w-full text-left"
                  onClick={() => setActiveOffice(i)}
                >
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      border: `1px solid ${activeOffice === i ? `${office.color}30` : 'rgba(255,255,255,0.05)'}`,
                      background: activeOffice === i ? `${office.color}07` : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {/* Flag + type */}
                    <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                      <span className="text-2xl">{office.flag}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-bold" style={{ color: activeOffice === i ? '#FAFAFA' : 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-inter)' }}>
                          {office.city}
                        </p>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: activeOffice === i ? `${office.color}15` : 'rgba(255,255,255,0.04)',
                            color: activeOffice === i ? office.color : 'rgba(255,255,255,0.25)',
                            border: `1px solid ${activeOffice === i ? `${office.color}25` : 'rgba(255,255,255,0.06)'}`,
                          }}
                        >
                          {office.type}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>
                        {office.address}
                      </p>
                    </div>

                    <div className="shrink-0 mt-1">
                      <motion.div
                        animate={{ rotate: activeOffice === i ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke={activeOffice === i ? office.color : 'rgba(255,255,255,0.2)'} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#0F0F14' }}>
              {/* Colored top border */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg, #E8447A, #A855F7)' }} />

              <div className="p-8 sm:p-10">
                <h3 className="font-bold mb-1.5" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.02em', color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>
                  Start a Conversation
                </h3>
                <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)', lineHeight: 1.8 }}>
                  Tell us about your project. We respond within 24 hours — always.
                </p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(232,68,122,0.12)', border: '1px solid rgba(232,68,122,0.25)' }}
                    >
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#E8447A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="font-bold text-lg mb-1" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>Message Sent.</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>We&apos;ll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                      style={{ background: '#1A1A22', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="rgba(255,255,255,0.25)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                        className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-30"
                        style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}
                      />
                    </div>

                    {/* Email */}
                    <div
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                      style={{ background: '#1A1A22', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="rgba(255,255,255,0.25)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-30"
                        style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}
                      />
                    </div>

                    {/* Message */}
                    <div
                      className="px-4 py-3.5 rounded-xl"
                      style={{ background: '#1A1A22', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={4}
                        className="w-full bg-transparent text-sm outline-none placeholder:opacity-30 resize-none"
                        style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}
                      />
                    </div>

                    {/* Privacy */}
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div
                        onClick={() => setAgreed(!agreed)}
                        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{
                          background: agreed ? '#E8447A' : 'transparent',
                          border: `1px solid ${agreed ? '#E8447A' : 'rgba(255,255,255,0.2)'}`,
                        }}
                      >
                        {agreed && (
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="2 6 5 9 10 3"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>
                        I agree to the{' '}
                        <a href="/privacy" className="underline" style={{ color: 'rgba(255,255,255,0.55)' }}>Privacy Policy</a>
                      </span>
                    </label>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #E8447A, #A855F7)', color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(232,68,122,0.35)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick links below form */}
            <div className="mt-6 flex items-center justify-between px-2">
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                Or start a project directly:
              </p>
              <motion.a
                href="mailto:beakarsa@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest"
                style={{ background: '#E8447A', color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(232,68,122,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                Email Directly ↗
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
