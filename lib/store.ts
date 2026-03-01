'use client';

import { create } from 'zustand';

interface AppStore {
  // Preloader
  preloaderComplete: boolean;
  setPreloaderComplete: (complete: boolean) => void;

  // Menu
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;

  // Theme
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;

  // Cursor
  cursorLabel: string;
  setCursorLabel: (label: string) => void;
  cursorScale: number;
  setCursorScale: (scale: number) => void;

  // Navigation
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  navVisible: boolean;
  setNavVisible: (visible: boolean) => void;

  // Video/Showreel
  showreelOpen: boolean;
  setShowreelOpen: (open: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  // Preloader
  preloaderComplete: false,
  setPreloaderComplete: (complete) => set({ preloaderComplete: complete }),

  // Menu
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),

  // Theme
  isDark: true,
  setIsDark: (isDark) => set({ isDark }),

  // Cursor
  cursorLabel: '',
  setCursorLabel: (label) => set({ cursorLabel: label }),
  cursorScale: 1,
  setCursorScale: (scale) => set({ cursorScale: scale }),

  // Navigation
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  navVisible: true,
  setNavVisible: (visible) => set({ navVisible: visible }),

  // Video/Showreel
  showreelOpen: false,
  setShowreelOpen: (open) => set({ showreelOpen: open }),
}));
