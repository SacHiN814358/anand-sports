'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ProductImage } from '@/types/database';

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const initial = productName ? productName.charAt(0).toUpperCase() : 'A';
  const hasImages = images && images.length > 0;
  
  // For this placeholder implementation, we don't actually use the image URLs 
  // since we don't have real images yet. We just show a placeholder.
  const displayCount = hasImages ? images.length : 1;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Area */}
      <div className="relative aspect-square w-full bg-card rounded-2xl overflow-hidden border border-white/5 premium-shadow group">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-surface to-black flex items-center justify-center text-8xl font-bold text-foreground/10 select-none group-hover:scale-105 transition-transform duration-700">
          {initial}
        </div>
        
        {hasImages && (
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-border">
            {activeIndex + 1} / {displayCount}
          </div>
        )}
      </div>

      {/* Thumbnail Row */}
      {displayCount > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {Array.from({ length: displayCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative shrink-0 w-20 aspect-square rounded-xl overflow-hidden bg-card border-2 transition-all",
                activeIndex === index 
                  ? "border-brand-accent shadow-[0_0_10px_rgba(255,107,0,0.3)]" 
                  : "border-transparent hover:border-border opacity-60 hover:opacity-100"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-surface to-black flex items-center justify-center text-xl font-bold text-foreground/20">
                {initial}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

