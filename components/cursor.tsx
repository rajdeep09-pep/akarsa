'use client';

import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check for data-cursor attributes
      const target = e.target as HTMLElement;
      const cursorAttr = target.getAttribute('data-cursor');
      setCursorType(cursorAttr || 'default');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden lg:block"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Main cursor dot */}
      <div
        className="w-3 h-3 bg-accent rounded-full"
        style={{
          boxShadow: '0 0 20px rgba(255, 107, 107, 0.4)',
        }}
      />

      {/* Cursor ring */}
      <div
        className="absolute w-8 h-8 border border-accent rounded-full pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse-ring 1.5s ease-out infinite',
        }}
      />

      {/* Custom cursor types */}
      {cursorType === 'play' && (
        <div className="absolute top-0 left-0 text-xs text-accent font-mono whitespace-nowrap -translate-x-12 -translate-y-6">
          PLAY
        </div>
      )}

      {cursorType === 'view' && (
        <div className="absolute top-0 left-0 text-xs text-accent font-mono whitespace-nowrap -translate-x-12 -translate-y-6">
          VIEW
        </div>
      )}

      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 107, 107, 0);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(255, 107, 107, 0);
          }
        }
      `}</style>
    </div>
  );
}
