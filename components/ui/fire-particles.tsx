'use client';

import React, { useState, useEffect } from 'react';

export function FireParticles() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate 25 randomized ember particles
  const embers = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 4) + 2,
    left: Math.floor(Math.random() * 90) + 5,
    delay: (Math.random() * 5).toFixed(2),
    duration: (Math.random() * 4 + 4).toFixed(2),
    opacity: (Math.random() * 0.6 + 0.4).toFixed(2),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* 1. Interactive Mouse Cursor Spotlight Follower */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.18), transparent 50%)`,
        }}
      />

      {/* 2. Sweeping Stadium Volumetric God Rays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/20 via-gold-accent/5 to-transparent rotate-[25deg] blur-2xl animate-light-sweep pointer-events-none" />

      {/* 3. Energy Impact Shockwave Ring */}
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full border border-gold-accent/40 animate-shockwave pointer-events-none" />

      {/* 4. Dynamic Golden Flame Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />

      {/* 5. Floating Fire Embers & Sparks */}
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="absolute rounded-full bg-gradient-to-t from-amber-500 via-gold-accent to-yellow-200 animate-ember shadow-[0_0_10px_#f59e0b]"
          style={{
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            left: `${ember.left}%`,
            bottom: '-10px',
            opacity: ember.opacity,
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
