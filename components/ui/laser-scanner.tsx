'use client';

import React from 'react';

export function LaserScanner() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Sleek Horizontal Gold Laser Scan Line */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent shadow-[0_0_15px_#f59e0b,0_0_30px_#f59e0b] animate-laser-scan opacity-80" />
      
      {/* Subtle Trailing Laser Glow */}
      <div className="absolute left-0 right-0 h-12 bg-gradient-to-b from-gold-accent/10 to-transparent animate-laser-scan opacity-60" />
    </div>
  );
}
