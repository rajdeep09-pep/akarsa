'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { CURSOR } from '@/lib/design-system';

interface MousePos {
  x: number;
  y: number;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState<MousePos>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorLabel = useAppStore((state) => state.cursorLabel);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    // Check for interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('a, button, [role="button"], .interactive, input, textarea') ||
        target.closest('a, button, [role="button"], .interactive, input, textarea')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Smooth follow effect
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.2,
        y: prev.y + (targetPos.y - prev.y) * 0.2,
      }));
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [targetPos]);

  // Update dot position
  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
    }
  }, [mousePos]);

  // Update ring position and size
  useEffect(() => {
    if (ringRef.current) {
      const size = isHovering ? CURSOR.hoverSize : CURSOR.defaultSize;
      ringRef.current.style.transform = `translate(${targetPos.x}px, ${targetPos.y}px) scale(${size / CURSOR.defaultSize})`;
    }
  }, [targetPos, isHovering]);

  // Update label position
  useEffect(() => {
    if (labelRef.current && cursorLabel) {
      labelRef.current.style.transform = `translate(${targetPos.x + 30}px, ${targetPos.y}px)`;
      labelRef.current.style.opacity = '1';
    } else if (labelRef.current) {
      labelRef.current.style.opacity = '0';
    }
  }, [targetPos, cursorLabel]);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Dot (inner) */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          width: `${CURSOR.defaultSize}px`,
          height: `${CURSOR.defaultSize}px`,
          borderRadius: '50%',
          backgroundColor: '#FAFAFA',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 16px rgba(232, 255, 71, 0.5)',
        }}
      />

      {/* Ring (outer) */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9997] mix-blend-difference border border-accent-primary"
        style={{
          width: `${CURSOR.defaultSize}px`,
          height: `${CURSOR.defaultSize}px`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s ease',
        }}
      />

      {/* Label */}
      <div
        ref={labelRef}
        className="fixed pointer-events-none z-[9997] text-xs font-mono text-accent-primary whitespace-nowrap"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {cursorLabel}
      </div>
    </>
  );
}
