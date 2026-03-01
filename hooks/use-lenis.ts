'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: 'vertical',
      normalizeWheel: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Animation loop using requestAnimationFrame
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef.current;
}

// Scroll to element with smooth scroll
export function useScrollTo() {
  return (element: HTMLElement | string) => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    if (typeof element === 'string') {
      lenis.scrollTo(element);
    } else {
      lenis.scrollTo(element);
    }
  };
}
