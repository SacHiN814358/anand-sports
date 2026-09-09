'use client';

import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(245, 158, 11, 0.18)',
  borderColor = 'rgba(245, 158, 11, 0.6)',
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    // Calculate 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6; // max 6 deg

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(0)`,
        transition: opacity === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease' : 'transform 0.1s ease-out',
      }}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-gold-accent/60 transition-all duration-300 shadow-xl group ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-2xl z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />

      {/* Glowing Border Edge Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border transition-opacity duration-500 z-20"
        style={{
          opacity,
          borderColor: borderColor,
          boxShadow: `0 0 30px ${spotlightColor}`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-30 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}
