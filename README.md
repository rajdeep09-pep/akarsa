# AKARSA - Premium Digital Agency Website

A high-performance, luxury digital agency website built with cutting-edge technologies and animations.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: GSAP 3, Framer Motion, Lenis
- **3D**: React Three Fiber, Three.js
- **State Management**: Zustand
- **Fonts**: Neue Montreal, Editorial New, Caveat, JetBrains Mono
- **Deployment**: Vercel Edge

## Key Features

### Visual Elements
- Custom cursor with magnetic effect and contextual labels
- Smooth scroll with Lenis
- Grain texture overlay
- Glassmorphism navigation
- Full-screen menu with animations
- Luxury preloader with 4-phase animation sequence

### Pages
- **Home**: Hero section with 3D elements, services grid, marquees, about preview, CTA
- **About**: Brand story and values
- **Services**: Detailed service offerings (9 disciplines)
- **Work**: Portfolio showcase
- **Blog**: Article listing and insights
- **Contact**: Contact form and information

### Components
- `PreloaderComponent`: 4-phase brand reveal animation
- `CustomCursor`: Interactive cursor with magnetic pull effect
- `Navigation`: Fixed navbar with scroll-responsive glassmorphism
- `FullscreenMenu`: Premium agency-style menu overlay
- `HeroSection`: Full-viewport hero with typography and 3D elements
- `ServicesSection`: 3x3 grid with interactive cards
- `LogoMarquee`: Infinite scrolling client logos
- `TextMarquee`: Large text divider with outlined effect
- `AboutPreview`: Split layout with content and visuals
- `CTABanner`: Call-to-action section with form prompt

## Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Development

### Structure
```
app/
  ├── page.tsx           # Homepage
  ├── about/page.tsx     # About page
  ├── services/page.tsx  # Services listing
  ├── work/page.tsx      # Portfolio
  ├── blog/page.tsx      # Blog listing
  ├── contact/page.tsx   # Contact page
  └── layout.tsx         # Root layout with fonts

components/
  ├── preloader.tsx              # Brand preloader
  ├── custom-cursor.tsx          # Custom cursor component
  ├── navigation.tsx             # Top navigation
  ├── fullscreen-menu.tsx        # Full-screen overlay menu
  ├── lenis-wrapper.tsx          # Smooth scroll wrapper
  ├── scroll-progress.tsx        # Top scroll progress bar
  ├── magnetic-button.tsx        # Magnetic hover button
  └── sections/
      ├── hero-section.tsx
      ├── logo-marquee.tsx
      ├── services-section.tsx
      ├── text-marquee.tsx
      ├── about-preview.tsx
      └── cta-banner.tsx

lib/
  ├── design-system.ts   # Design tokens and constants
  ├── store.ts           # Zustand store for global state
  └── utils.ts           # Utility functions

hooks/
  └── use-lenis.ts       # Lenis smooth scroll hook
```

### Fonts
Local fonts (Neue Montreal, Editorial New) should be placed in `public/fonts/`:
- NeueMontreal-Regular.woff2
- NeueMontreal-Medium.woff2
- NeueMontreal-Bold.woff2
- EditorialNew-Regular.woff2

Google fonts (Caveat, JetBrains Mono) are loaded via next/font.

### Design System
All colors, typography, and spacing follow the AKARSA design system defined in `lib/design-system.ts`:
- **Primary Color**: #E8FF47 (Lime)
- **Secondary Color**: #FF6B35 (Orange)
- **Tertiary Color**: #7B61FF (Purple)
- **Background**: #0A0A0A (Almost Black)
- **Text**: #FAFAFA (Off White)

### Animation Library
GSAP is used for complex animations with ScrollTrigger for scroll-based effects. Framer Motion handles component transitions.

## Performance Optimization

- **Image Optimization**: Use Next.js Image component for all images
- **Code Splitting**: Automatic via Next.js
- **Lazy Loading**: Components with dynamic imports where appropriate
- **CSS Minimization**: Tailwind purges unused styles
- **GPU Acceleration**: Will-change hints on animated elements

## SEO

- Sitemap: `/app/sitemap.ts`
- Robots: `/public/robots.txt`
- Meta tags in layout.tsx
- Semantic HTML structure
- Schema.org markup ready

## Deployment to Vercel

```bash
# Push to GitHub and link to Vercel
# Or use Vercel CLI:
vercel

# For production:
vercel --prod
```

Environment variables can be set in Vercel dashboard.

## Future Enhancements

- [ ] Sanity CMS integration for blog and portfolio
- [ ] Service detail pages with deep content
- [ ] Case studies section
- [ ] Testimonials carousel
- [ ] Video integrations
- [ ] Analytics integration
- [ ] Email newsletter subscription
- [ ] Contact form backend integration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-optimized interactions

## License

© 2024 AKARSA. All rights reserved.

## Support

For questions or issues, contact hello@akarsa.com
