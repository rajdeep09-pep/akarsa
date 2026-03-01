'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import gsap from 'gsap';

export function Preloader() {
  const { setPreloaderComplete } = useAppStore();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const completePreloader = () => {
      console.log('[v0] Preloader completing');
      setPreloaderComplete(true);
      document.body.style.overflow = 'auto';
    };

    const tl = gsap.timeline({
      onComplete: completePreloader,
    });

    // PHASE 1 (0s → 2s): The Count
    const counterElement = document.querySelector('.preloader-counter');
    if (counterElement) {
      tl.to(counterElement, {
        textContent: 100,
        duration: 2,
        snap: { textContent: 1 },
        ease: 'power2.inOut',
      }, 0);
    }

    // Line fills with accent gradient
    tl.from(
      '.preloader-line',
      { scaleX: 0, transformOrigin: 'left center', duration: 2, ease: 'power2.inOut' },
      0
    );

    // PHASE 2 (2s → 2.8s): The Reveal
    tl.to('.preloader-counter', { opacity: 0, y: -20, duration: 0.4 }, 2);
    tl.to('.preloader-corner-text', { opacity: 0, duration: 0.3 }, 2);

    // Wordmark letters animate in
    tl.from(
      '.preloader-letter',
      {
        opacity: 0,
        y: 30,
        rotationX: -90,
        transformOrigin: 'center center',
        duration: 0.6,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        stagger: 0.05,
      },
      2.2
    );

    // Line draws underneath
    tl.from(
      '.preloader-wordmark-line',
      { scaleX: 0, transformOrigin: 'center', duration: 0.4, ease: 'power3.inOut' },
      2.5
    );

    // PHASE 3 (2.8s → 3.3s): The Tagline
    tl.from(
      '.preloader-tagline-char',
      {
        opacity: 0,
        duration: 0.05,
        stagger: 0.02,
      },
      2.8
    );

    // PHASE 4 (3.3s → 4s): The Open
    tl.to(['.preloader-wordmark', '.preloader-tagline'], { opacity: 0, duration: 0.2 }, 3.3);

    tl.to(
      '.preloader-panel-top',
      { y: '-100%', duration: 0.5, ease: 'cubic-bezier(0.76, 0, 0.24, 1)' },
      3.5
    );

    tl.to(
      '.preloader-panel-bottom',
      { y: '100%', duration: 0.5, ease: 'cubic-bezier(0.76, 0, 0.24, 1)' },
      3.5
    );

    // Safety timeout (4.5s total)
    const timeout = setTimeout(() => {
      console.log('[v0] Preloader safety timeout triggered');
      completePreloader();
    }, 4500);

    return () => {
      tl.kill();
      clearTimeout(timeout);
    };
  }, [setPreloaderComplete]);

  return (
    <div 
      className="preloader fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ 
        background: 'var(--bg-primary)',
        perspective: '1000px' 
      }}
    >
      {/* PHASE 1: Counter */}
      <div 
        className="preloader-counter leading-none text-center"
        style={{
          fontSize: '200px',
          fontWeight: 100,
          color: 'var(--text-primary)',
        }}
      >
        0
      </div>

      {/* Counter line */}
      <div 
        className="preloader-line absolute top-1/2 left-1/2 -translate-x-1/2 transform origin-left"
        style={{
          width: '200px',
          height: '1px',
          background: 'linear-gradient(to right, var(--accent), var(--accent-hot))',
        }}
      />

      {/* PHASE 2: Wordmark */}
      <div className="preloader-wordmark absolute text-center opacity-0">
        <h1 
          className="whitespace-nowrap"
          style={{
            fontSize: '80px',
            fontWeight: 900,
            letterSpacing: '0.1em',
            color: 'var(--text-primary)',
          }}
        >
          {'AKARSA'.split('').map((letter, i) => (
            <span key={i} className="preloader-letter inline-block" style={{ perspective: '1000px' }}>
              {letter}
            </span>
          ))}
        </h1>
        <div 
          className="preloader-wordmark-line w-full mt-4"
          style={{
            height: '2px',
            background: 'var(--accent)',
          }}
        />
      </div>

      {/* PHASE 3: Tagline */}
      <div 
        className="preloader-tagline absolute mt-8 text-center opacity-0"
        style={{
          fontFamily: 'var(--font-caveat)',
          fontSize: '22px',
          color: 'var(--accent)',
        }}
      >
        {'We Don\'t Just Create — We Redefine.'.split('').map((char, i) => (
          <span key={i} className="preloader-tagline-char inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Corner text */}
      <div 
        className="preloader-corner-text absolute inset-0 pointer-events-none opacity-30"
        style={{
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: 'var(--text-muted)',
        }}
      >
        <div className="absolute top-8 left-8">AKARSA</div>
        <div className="absolute top-8 right-8">DIGITAL AGENCY</div>
        <div className="absolute bottom-8 left-8">LOADING EXPERIENCE</div>
        <div className="absolute bottom-8 right-8">©2024</div>
      </div>

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay" style={{
        backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/></filter><rect width="100%" height="100%" fill="%23000" filter="url(%23noise)"/></svg>)',
        backgroundSize: '100px 100px',
        animation: 'grain-shift 8s steps(10) infinite',
      }} />

      {/* PHASE 4: Panels */}
      <div 
        className="preloader-panel-top fixed top-0 left-0 w-full h-1/2 z-50"
        style={{ background: 'var(--bg-primary)' }}
      />
      <div 
        className="preloader-panel-bottom fixed bottom-0 left-0 w-full h-1/2 z-50"
        style={{ background: 'var(--bg-primary)' }}
      />

      <style>{`
        @keyframes grain-shift {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}</style>
    </div>
  );
}
