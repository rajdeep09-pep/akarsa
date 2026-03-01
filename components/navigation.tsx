'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useAppStore } from '@/lib/store';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { menuOpen, setMenuOpen } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Show floating glass style after 60px
      setScrolled(y > 60);
      // Hide on scroll down, reveal on scroll up
      if (y > lastScrollY && y > 200) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      setLastScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Glass Navbar ── */}
      <motion.div
        className="fixed z-[100] left-0 right-0"
        style={{ top: scrolled ? '16px' : '0px' }}
        animate={{ y: navHidden ? '-130%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`
            mx-auto flex items-center justify-between
            transition-all duration-500 ease-out
            ${scrolled
              ? 'max-w-5xl mx-4 sm:mx-6 md:mx-auto rounded-2xl px-5 py-3 h-14'
              : 'max-w-none rounded-none px-6 sm:px-8 lg:px-12 py-4 h-20'
            }
          `}
          style={{
            background: scrolled
              ? 'rgba(10, 10, 12, 0.75)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            border: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset'
              : 'none',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 z-10" aria-label="AKARSA home">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              {/* Symbol — always visible */}
              <Image
                src="/akarsa-symbol.png"
                alt="AKARSA symbol"
                width={scrolled ? 28 : 32}
                height={scrolled ? 28 : 32}
                className="object-contain transition-all duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
              {/* Full wordmark — hidden on mobile, visible on md+ */}
              <span className="hidden md:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/akarsa-3tXUgsvbjcPRGswC7DVmQ4Wcc9Y1fo.png"
                  alt="AKARSA"
                  width={scrolled ? 100 : 120}
                  height={scrolled ? 28 : 34}
                  className="object-contain transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  priority
                />
              </span>
            </motion.div>
          </Link>

          {/* ── Desktop center nav links ── */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.18em] transition-colors duration-250 py-1 group"
                  style={{
                    color: active ? '#FAFAFA' : 'rgba(255,255,255,0.45)',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FAFAFA')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? '#FAFAFA' : 'rgba(255,255,255,0.45)')}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full"
                      style={{ background: '#FF6B6B' }}
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover underline dot */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: 'rgba(255,107,107,0.5)' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right: CTA + hamburger ── */}
          <div className="flex items-center gap-3 sm:gap-4 z-10 shrink-0">
            {/* CTA button — desktop only */}
            <motion.a
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: '#FF6B6B',
                color: '#0A0A0C',
                fontFamily: 'var(--font-inter)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 6px 24px rgba(255,107,107,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Start a Project
            </motion.a>

            {/* ── Animated hamburger ── */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex flex-col items-center justify-center gap-[6px] z-[200] rounded-xl"
              style={{
                width: scrolled ? '40px' : '44px',
                height: scrolled ? '40px' : '44px',
                background: menuOpen
                  ? 'rgba(255,107,107,0.15)'
                  : scrolled
                    ? 'rgba(255,255,255,0.07)'
                    : 'transparent',
                border: menuOpen
                  ? '1px solid rgba(255,107,107,0.3)'
                  : scrolled
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
                transition: 'background 0.3s, border 0.3s, width 0.3s, height 0.3s',
              }}
              whileHover={{
                background: menuOpen
                  ? 'rgba(255,107,107,0.2)'
                  : 'rgba(255,255,255,0.1)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.94 }}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block rounded-full"
                style={{ width: 20, height: 1.5, background: menuOpen ? '#FF6B6B' : '#FAFAFA' }}
                animate={menuOpen ? { rotate: 45, y: 7.5, background: '#FF6B6B' } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block rounded-full"
                style={{ height: 1.5, background: '#FAFAFA' }}
                animate={menuOpen ? { width: 0, opacity: 0 } : { width: 20, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block rounded-full"
                style={{ width: 20, height: 1.5, background: menuOpen ? '#FF6B6B' : '#FAFAFA' }}
                animate={menuOpen ? { rotate: -45, y: -7.5, background: '#FF6B6B' } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col"
            style={{ background: 'rgba(8, 8, 9, 0.98)' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background ambient glows */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.12) 0%, transparent 50%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 20% 80%, rgba(255,107,107,0.08) 0%, transparent 50%)',
              }}
            />

            {/* Menu links */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 pt-20 sm:pt-24">
              <nav className="space-y-1 sm:space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.08 + i * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-4 sm:gap-6 py-3 sm:py-4 border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span
                        className="text-xs font-mono shrink-0 w-6"
                        style={{
                          color: 'rgba(255,255,255,0.2)',
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="font-black leading-none transition-colors duration-200 group-hover:text-[#FF6B6B]"
                        style={{
                          fontSize: 'clamp(2rem, 8vw, 6.5rem)',
                          letterSpacing: '-0.04em',
                          color: pathname === link.href ? '#FF6B6B' : 'rgba(255,255,255,0.85)',
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        className="ml-auto text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-2"
                        style={{ color: 'rgba(255,107,107,0.6)' }}
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Menu footer bar */}
            <motion.div
              className="px-8 sm:px-12 lg:px-20 py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:beakarsa@gmail.com"
                  className="text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#FF6B6B]"
                  style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}
                >
                  beakarsa@gmail.com
                </a>
                <a
                  href="tel:+918109801383"
                  className="text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#FF6B6B]"
                  style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}
                >
                  +91 8109801383
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs uppercase tracking-widest transition-colors duration-200 hover:text-[#FF6B6B]"
                    style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
