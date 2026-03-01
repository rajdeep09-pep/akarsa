'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useAppStore } from '@/lib/store';
import { FULLSCREEN_MENU, COLORS } from '@/lib/design-system';

export function FullscreenMenu() {
  const menuOpen = useAppStore((state) => state.menuOpen);
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    if (menuOpen) {
      // Open animation
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0)',
        duration: 0.5,
        ease: 'power3.inOut',
      });

      gsap.to('.menu-item', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2,
      });
    } else {
      // Close animation
      gsap.to('.menu-item', {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.02,
        ease: 'power3.in',
      });

      gsap.to(overlayRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.5,
        ease: 'power3.inOut',
        delay: 0.1,
      });
    }
  }, [menuOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[8999] pointer-events-none"
      style={{
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 pointer-events-auto"
        style={{
          background: COLORS.background.primary,
          clipPath: 'inset(0 100% 0 0)',
          display: 'flex',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Section - 60% */}
        <div className="flex-1 flex flex-col justify-center px-12 pt-32">
          <nav className="space-y-8">
            {FULLSCREEN_MENU.items.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.label === 'Home' ? '/' : `/${item.label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="menu-item flex items-center gap-6 opacity-0 translate-y-20"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span
                    className="text-overline font-mono"
                    style={{ color: COLORS.text.secondary }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-h2 leading-tight"
                    style={{
                      color: hoveredItem === item.label
                        ? COLORS.accent.primary
                        : COLORS.text.primary,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.label}
                  </span>
                  {item.hasSubmenu && (
                    <svg
                      className="w-6 h-6 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Submenu */}
                {item.hasSubmenu && hoveredItem === item.label && (
                  <div className="mt-4 ml-24 space-y-2">
                    {FULLSCREEN_MENU.submenuItems.map((subitem, subidx) => (
                      <Link
                        key={subidx}
                        href="#"
                        className="block text-text-secondary hover:text-accent-primary transition-colors text-body"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                        }}
                      >
                        {subitem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="mt-24 pt-12 border-t border-glass-border space-y-4">
            <p className="text-text-secondary text-caption">GET IN TOUCH</p>
            <a href="mailto:beakarsa@gmail.com" className="text-body text-text-primary hover:text-accent-primary transition-colors block">beakarsa@gmail.com</a>
            <a href="tel:+918109801383" className="text-body text-text-primary hover:text-accent-primary transition-colors block">+91 8109801383</a>
            <p className="text-text-secondary text-caption pt-2">OFFICES</p>
            <p className="text-body text-text-primary">Dubai, UAE &nbsp;|&nbsp; Indore, India &nbsp;|&nbsp; Bhind, India</p>
          </div>
        </div>

        {/* Right Section - 40% */}
        <div className="w-2/5 bg-background-secondary relative hidden md:block">
          {/* Placeholder for preview images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-64 h-64 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accent.primary}, ${COLORS.accent.secondary})`,
                opacity: 0.1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
