// AKARSA Design System Constants

export const COLORS = {
  // Dark Mode (Primary)
  background: {
    primary: '#0A0A0C',
    secondary: '#111116',
    tertiary: '#1A1A22',
    surface: '#22222A',
  },
  text: {
    primary: '#FAFAFA',
    secondary: '#9A9AAA',
    muted: '#4A4A5A',
  },
  accent: {
    primary: '#FF6B6B',
    secondary: '#A855F7',
    tertiary: '#FF4757',
    gradient: 'linear-gradient(135deg, #FF6B6B, #A855F7)',
    success: '#00D68F',
  },
  glass: {
    background: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.08)',
  },
  scribble: '#FF6B6B',

  // Light Mode
  light: {
    background: {
      primary: '#FAFAF7',
      secondary: '#FFFFFF',
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#666666',
    },
    accent: {
      primary: '#0A0A0A',
      secondary: '#FF6B35',
    },
  },
};

export const TYPOGRAPHY = {
  fontFamily: {
    display: "'Neue Montreal', 'General Sans', sans-serif",
    body: "'Neue Montreal', 'General Sans', sans-serif",
    handwriting: "'Caveat', cursive",
    mono: "'JetBrains Mono', monospace",
  },
  scale: {
    heroDisplay: 'clamp(4rem, 12vw, 12rem)',
    h1: 'clamp(3rem, 8vw, 8rem)',
    h2: 'clamp(2.5rem, 5vw, 5rem)',
    h3: 'clamp(1.5rem, 3vw, 3rem)',
    h4: 'clamp(1.25rem, 2vw, 2rem)',
    bodyLarge: '1.25rem',
    body: '1rem',
    caption: '0.875rem',
    overline: '0.75rem',
  },
  letterSpacing: {
    tight: '-0.04em',
    wide: '0.2em',
    tracking: '0.3em',
  },
};

export const SPACING = {
  sectionPadding: 'clamp(80px, 15vh, 200px)',
  containerMax: '1440px',
  containerWide: '1600px',
  grid: '12-column with 24px gutters',
};

export const BORDER_RADIUS = {
  small: '8px',
  medium: '16px',
  large: '24px',
  xl: '32px',
  pill: '999px',
};

export const CURSOR = {
  defaultSize: 16,
  hoverSize: 64,
  blendMode: 'difference',
  hasMagneticEffect: true,
  hasTextOnHover: true,
};

export const ANIMATION = {
  timings: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },
  easing: {
    power1InOut: 'power1.inOut',
    power2InOut: 'power2.inOut',
    power3InOut: 'power3.inOut',
    power4InOut: 'power4.inOut',
    elasticOut: 'elastic.out(1, 0.75)',
  },
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  widescreen: '1280px',
  ultrawide: '1536px',
};

// Component-specific values
export const PRELOADER = {
  totalDuration: 3.5,
  phases: {
    counting: 1.5,
    logoDraw: 1,
    tagline: 0.5,
    reveal: 0.5,
  },
  counter: {
    fontSize: '200px',
    fontFamily: 'JetBrains Mono',
    letterSpacingTight: true,
  },
  tagline: {
    fontSize: '1.5rem',
    fontFamily: 'Caveat',
  },
};

export const NAVIGATION = {
  height: '80px',
  links: ['Work', 'Services', 'About', 'Blog', 'Contact'],
  hideOnScrollDown: true,
};

export const FULLSCREEN_MENU = {
  leftWidth: 60, // percent
  rightWidth: 40, // percent
  items: [
    { label: 'Home', number: '01' },
    { label: 'Services', number: '02', hasSubmenu: true },
    { label: 'Work', number: '03' },
    { label: 'About', number: '04' },
    { label: 'Blog', number: '05' },
    { label: 'Contact', number: '06' },
  ],
  submenuItems: [
    'Graphic Design',
    'Web Development',
    'Web Maintenance',
    'Branding & Strategy',
    'Digital Marketing',
    'Video Composition',
    'Creative AI',
    'Cultural Strategy',
    'Something Undefined',
  ],
};
