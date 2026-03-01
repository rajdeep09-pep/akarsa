'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { COLORS } from '@/lib/design-system';

gsap.registerPlugin(ScrollTrigger);

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-4"
      style={{
        background: COLORS.background.secondary,
        borderTop: `1px solid ${COLORS.glass.border}`,
      }}
    >
      <div className="container-akarsa">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <p
              className="text-overline mb-4"
              style={{
                color: COLORS.text.secondary,
                letterSpacing: '0.2em',
              }}
            >
              ABOUT AKARSA
            </p>
            <h2 className="text-h2 mb-8" style={{ color: COLORS.text.primary }}>
              Crafting Digital Futures Since 2024
            </h2>
            <p
              className="text-body-large mb-6"
              style={{ color: COLORS.text.secondary, lineHeight: 1.8 }}
            >
              We're a premium digital agency obsessed with creating meaningful experiences.
              Every project is an opportunity to push boundaries and redefine what's possible.
            </p>
            <p
              className="text-body mb-8"
              style={{ color: COLORS.text.muted, lineHeight: 1.8 }}
            >
              With expertise spanning design, development, strategy, and culture, we bring
              a holistic approach to every challenge. We believe in the power of collaboration,
              creativity, and cutting-edge technology to transform ideas into reality.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-4 rounded-full transition-all duration-300"
              style={{
                background: COLORS.accent.primary,
                color: COLORS.background.primary,
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'white';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = COLORS.accent.primary;
              }}
            >
              Read Our Story
            </Link>
          </div>

          {/* Right Visual */}
          <div
            className="relative aspect-square rounded-2xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.accent.primary}20, ${COLORS.accent.secondary}20)`,
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accent.primary}, ${COLORS.accent.secondary})`,
                opacity: 0.1,
              }}
            >
              <div className="text-center">
                <p className="text-text-secondary">Visual Content</p>
                <p className="text-caption text-text-muted">Image or animation here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
