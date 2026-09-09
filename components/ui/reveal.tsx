'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'zoom' | 'fade';
  duration?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
      className={`${mounted ? 'animate-fade-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}