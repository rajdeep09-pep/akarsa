'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useAppStore } from '@/lib/store';

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const preloaderComplete = useAppStore((state) => state.preloaderComplete);
  const setScrollProgress = useAppStore((state) => state.setScrollProgress);
  const setNavVisible = useAppStore((state) => state.setNavVisible);

  useEffect(() => {
    if (!preloaderComplete) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: 'vertical',
      normalizeWheel: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Store reference globally for access
    (window as any).lenis = lenis;

    // Track scroll progress
    let lastScrollTop = 0;

    lenis.on('scroll', (event: any) => {
      const scrolled = event.animatedScroll;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = totalScroll > 0 ? scrolled / totalScroll : 0;

      setScrollProgress(scrollPercent);

      // Show/hide nav on scroll direction
      if (scrolled > lastScrollTop) {
        // Scrolling down
        if (scrolled > 100) {
          setNavVisible(false);
        }
      } else {
        // Scrolling up
        setNavVisible(true);
      }
      lastScrollTop = scrolled;
    });

    // Animation loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, [preloaderComplete, setScrollProgress, setNavVisible]);

  return <>{children}</>;
}
