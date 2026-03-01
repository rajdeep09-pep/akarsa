'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'Graphic Design',
  'Web Development',
  'Branding & Strategy',
  'Digital Marketing',
  'Video Composition',
  'Creative AI',
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer
      ref={ref}
      className="relative pt-32 pb-12 overflow-hidden"
      style={{ background: '#080809', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="container-akarsa relative z-10">
        {/* Top: brand + headline */}
        <motion.div
          className="pb-24 mb-16 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>
                Let's Build Together
              </div>
              <h2
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 7rem)',
                  letterSpacing: '-0.04em',
                  fontFamily: 'var(--font-inter)',
                  color: '#FAFAFA',
                }}
              >
                Turn your idea{' '}
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
                  into reality.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 shrink-0"
            >
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ background: '#FF6B6B', color: '#0A0A0C' }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255,107,107,0.5)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                ↗
              </motion.div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>Get Started</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>beakarsa@gmail.com</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link href="/" className="block mb-5 transition-opacity hover:opacity-75">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/akarsa-3tXUgsvbjcPRGswC7DVmQ4Wcc9Y1fo.png"
                alt="AKARSA"
                width={120}
                height={34}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
              Crafting digital experiences that inspire growth. Strategy, design, and technology in perfect harmony.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:beakarsa@gmail.com" className="text-xs transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                beakarsa@gmail.com
              </a>
              <a href="tel:+918109801383" className="text-xs transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                +91 8109801383
              </a>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                Dubai · Indore · Bhind
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] mb-7" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] mb-7" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
              Services
            </p>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((s) => (
                <li key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] mb-7" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
              Connect
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm transition-colors duration-200 inline-flex items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {social.label}
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
              Newsletter
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-end gap-0 relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent pb-2 text-sm focus:outline-none"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.12)',
                  color: '#FAFAFA',
                  fontFamily: 'var(--font-inter)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#FF6B6B')}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="submit"
                className="pb-2 pl-4 text-sm font-semibold transition-colors"
                style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FAFAFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FF6B6B')}
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
            &copy; {new Date().getFullYear()} AKARSA. All rights reserved.
          </p>

          {/* Developer credit */}
          <p className="text-xs text-center order-last sm:order-none" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-inter)' }}>
            Developed by{' '}
            <a
              href="#"
              className="transition-colors duration-200 font-semibold"
              style={{ color: 'rgba(255,107,107,0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,107,107,0.5)')}
            >
              F12X STUDIO
            </a>
            {' '}
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>
              (rajdeepdev)
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
