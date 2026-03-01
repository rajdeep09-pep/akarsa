'use client';

import { useAppStore } from '@/lib/store';

export function ScrollProgress() {
  const scrollProgress = useAppStore((state) => state.scrollProgress);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] bg-gradient-to-r from-accent-primary to-accent-secondary"
      style={{
        width: `${scrollProgress * 100}%`,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
}
