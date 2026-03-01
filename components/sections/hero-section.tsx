'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text.split('').map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('')
        );
        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplay(text);
          setDone(true);
        }
        iteration += 0.5;
      }, 28);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className={done ? '' : 'opacity-60'}>{display || '\u00A0'.repeat(text.length)}</span>;
}

function FloatingOrb({ x, y, size, color, blur, delay }: {
  x: string; y: string; size: string; color: string; blur: string; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: `blur(${blur})` }}
      animate={{ x: [0, 35, -18, 0], y: [0, -25, 18, 0], scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration: 18 + delay * 4, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

const words = ['Experiences', 'Identities', 'Futures', 'Legacies'];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setWordIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - (rect.left + rect.width / 2)) * 0.025);
      mouseY.set((e.clientY - (rect.top + rect.height / 2)) * 0.025);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(springX, (v) => v);
  const parallaxY = useTransform(springY, (v) => v);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const lineReveal = {
    hidden: { y: '110%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0C', paddingTop: '5rem', paddingBottom: '4rem' }}
    >
      {/* Atmospheric orbs — matched to brand gradient: hot pink top-right, deep purple bottom-left, blue-gray mid */}
      <FloatingOrb x="40%" y="-15%" size="75vmax" color="radial-gradient(circle, rgba(232,68,122,0.38) 0%, transparent 65%)" blur="100px" delay={0} />
      <FloatingOrb x="-18%" y="30%" size="80vmax" color="radial-gradient(circle, rgba(107,63,160,0.45) 0%, transparent 65%)" blur="110px" delay={2} />
      <FloatingOrb x="60%" y="50%" size="50vmax" color="radial-gradient(circle, rgba(58,74,90,0.35) 0%, transparent 65%)" blur="80px" delay={5} />
      <FloatingOrb x="20%" y="-5%" size="40vmax" color="radial-gradient(circle, rgba(180,45,140,0.2) 0%, transparent 65%)" blur="70px" delay={8} />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          opacity: 0.55,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Architectural lines */}
      {[20, 80].map((pct) => (
        <motion.div key={`h-${pct}`} className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ top: `${pct}%`, background: 'rgba(255,255,255,0.035)' }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        />
      ))}
      {[8, 92].map((pct) => (
        <motion.div key={`v-${pct}`} className="absolute top-0 bottom-0 w-px pointer-events-none hidden lg:block"
          style={{ left: `${pct}%`, background: 'rgba(255,255,255,0.025)' }}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center"
        style={{ x: parallaxX, y: parallaxY }}
        variants={container}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
      >
        {/* Status chip */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8 sm:mb-10">
          <div
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border text-xs uppercase tracking-[0.22em]"
            style={{ border: '1px solid rgba(255,107,107,0.28)', background: 'rgba(255,107,107,0.06)', color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
            <span className="hidden sm:inline">Available for new projects</span>
            <span className="sm:hidden">Open for projects</span>
          </div>
        </motion.div>

        {/* Line 1 — scramble on mount */}
        <div className="overflow-hidden mb-1 sm:mb-2">
          <motion.div variants={lineReveal}>
            <h1
              className="font-black leading-none tracking-tight text-white"
              style={{
                fontSize: 'clamp(3.2rem, 13vw, 13rem)',
                letterSpacing: '-0.04em',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {mounted && <ScrambleText text="CRAFTING" delay={350} />}
            </h1>
          </motion.div>
        </div>

        {/* Line 2 — DIGITAL + rotating word */}
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.div
            variants={lineReveal}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 flex-wrap"
          >
            <h1
              className="font-black leading-none tracking-tight text-white"
              style={{
                fontSize: 'clamp(3.2rem, 13vw, 13rem)',
                letterSpacing: '-0.04em',
                fontFamily: 'var(--font-inter)',
              }}
            >
              DIGITAL
            </h1>
            {/* Animated cycling word — clip contained within its own overflow-hidden row */}
            <div
              className="overflow-hidden"
              style={{
                height: 'clamp(3.8rem, 14vw, 14rem)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  className="block font-black italic whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(3.2rem, 13vw, 13rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    fontFamily: 'var(--font-playfair)',
                    background: 'linear-gradient(135deg, #E8447A 0%, #8B35C8 55%, #E8447A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    paddingBottom: '0.08em',
                  }}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-110%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Descriptor row */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-10 sm:mb-14"
          style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
        >
          <span className="hidden sm:inline">Strategy&nbsp;&nbsp;/&nbsp;&nbsp;Design&nbsp;&nbsp;/&nbsp;&nbsp;Technology&nbsp;&nbsp;/&nbsp;&nbsp;Culture</span>
          <span className="sm:hidden">Strategy / Design / Technology</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            className="relative inline-flex items-center gap-3 px-7 sm:px-9 py-4 sm:py-5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-widest overflow-hidden w-full sm:w-auto justify-center"
            style={{ background: '#FF6B6B', color: '#0A0A0C', fontFamily: 'var(--font-inter)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(255,107,107,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            Start Your Project <span>↗</span>
          </motion.a>
          <motion.a
            href="/work"
            className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-4 sm:py-5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold w-full sm:w-auto"
            style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-inter)' }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,107,107,0.45)', color: '#FFFFFF' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={fadeUp}
          className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: '150+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '99%', label: 'Retention' },
            { value: '5★', label: 'Rated' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-xl sm:text-2xl font-black tracking-tight"
                style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}
              >
                {value}
              </div>
              <div
                className="text-[10px] sm:text-xs uppercase tracking-widest mt-0.5"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {label}
              </div>
            </div>
          ))}
          <div className="w-px h-8 hidden md:block" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <p
            className="text-[10px] sm:text-xs uppercase tracking-widest hidden md:block"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Trusted by forward-thinking brands
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-14 origin-top"
          style={{ background: 'linear-gradient(to bottom, #FF6B6B, transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em]"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
