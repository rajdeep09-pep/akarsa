'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticRadius?: number;
  href?: string;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  magneticRadius = 100,
  href,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
      );

      if (distance < magneticRadius) {
        const angle = Math.atan2(e.clientY - btnCenterY, e.clientX - btnCenterX);
        const pull = magneticRadius - distance;
        const x = Math.cos(angle) * (pull * 0.3);
        const y = Math.sin(angle) * (pull * 0.3);

        setMousePos({ x, y });

        gsap.to(btn, {
          x,
          y,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
      setMousePos({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticRadius]);

  const baseClassName = `relative px-8 py-4 font-semibold rounded-full transition-all duration-300 will-change-transform ${className}`;

  if (href) {
    return (
      <a ref={btnRef as any} href={href} className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <button ref={btnRef} onClick={onClick} className={baseClassName}>
      {children}
    </button>
  );
}
