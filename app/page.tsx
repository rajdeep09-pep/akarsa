'use client';

import { Cursor } from '@/components/cursor';
import { Navigation } from '@/components/navigation';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/sections/hero-section').then(m => ({ default: m.HeroSection })), { ssr: false });
const LogoMarquee = dynamic(() => import('@/components/sections/logo-marquee').then(m => ({ default: m.LogoMarquee })), { ssr: false });
const ServicesSection = dynamic(() => import('@/components/sections/services-section').then(m => ({ default: m.ServicesSection })), { ssr: false });
const FeaturedWork = dynamic(() => import('@/components/sections/featured-work').then(m => ({ default: m.FeaturedWork })), { ssr: false });
const ProcessSection = dynamic(() => import('@/components/sections/process-section').then(m => ({ default: m.ProcessSection })), { ssr: false });
const StatsSection = dynamic(() => import('@/components/sections/stats-section').then(m => ({ default: m.StatsSection })), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(m => ({ default: m.TestimonialsSection })), { ssr: false });
const CTABanner = dynamic(() => import('@/components/sections/cta-banner').then(m => ({ default: m.CTABanner })), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sections/faq-section').then(m => ({ default: m.FAQSection })), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/contact-section').then(m => ({ default: m.ContactSection })), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/footer').then(m => ({ default: m.Footer })), { ssr: false });

const marqueeWords = ['DESIGN', 'DEVELOP', 'BRAND', 'MARKET', 'CREATE', 'INNOVATE', 'INSPIRE'];

export default function Home() {
  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen" style={{ background: '#0A0A0C' }}>
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />

        {/* Kinetic text marquee divider */}
        <div
          className="w-full py-24 overflow-hidden relative"
          style={{ background: '#0D0D10', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          {/* Top direction */}
          <div className="flex whitespace-nowrap mb-5" style={{ animation: 'marqueeLeft 22s linear infinite' }}>
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex-shrink-0 flex items-center">
                <span
                  className="text-transparent mx-6 font-black"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.07)',
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    letterSpacing: '-0.03em',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {word}
                </span>
                <span style={{ color: 'rgba(255,107,107,0.25)', fontSize: '1.5rem' }}>✦</span>
              </span>
            ))}
          </div>
          {/* Bottom direction — reversed */}
          <div className="flex whitespace-nowrap" style={{ animation: 'marqueeRight 28s linear infinite' }}>
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex-shrink-0 flex items-center">
                <span
                  className="mx-6 font-black"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(168,85,247,0.07)',
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    letterSpacing: '-0.03em',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {word}
                </span>
                <span style={{ color: 'rgba(168,85,247,0.2)', fontSize: '1.5rem' }}>◈</span>
              </span>
            ))}
          </div>
        </div>

        <FeaturedWork />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTABanner />
        <Footer />
      </main>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
