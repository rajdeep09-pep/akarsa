'use client';

import { COLORS } from '@/lib/design-system';

const text = 'DESIGN • DEVELOP • BRAND • MARKET • CREATE • INNOVATE • INSPIRE •';

export function TextMarquee() {
  return (
    <section
      className="w-full py-12 px-4 overflow-hidden"
      style={{
        background: COLORS.background.primary,
        borderTop: `1px solid ${COLORS.glass.border}`,
        borderBottom: `1px solid ${COLORS.glass.border}`,
      }}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 25s linear infinite',
          }}
        >
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                fontWeight: 800,
                color: 'transparent',
                WebkitTextStroke: `1px ${COLORS.text.secondary}`,
                letterSpacing: '-0.02em',
                marginRight: '2rem',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="animation: marquee"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
