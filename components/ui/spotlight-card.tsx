'use client';

import React from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className = '',
}: SpotlightCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-lg group ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}
