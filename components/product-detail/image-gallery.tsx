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
  
  const activeImage = images && images[activeIndex] ? images[activeIndex].image_url : null;
  const isRealUrl = activeImage && (activeImage.startsWith('http') || activeImage.startsWith('/images/products/agility'));
  const displayUrl = isRealUrl ? activeImage : 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80';
  const displayCount = hasImages ? images.length : 1;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Area */}
      <div className="relative aspect-square w-full bg-[#F5F0E8] rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-sm group">
        <img
          src={displayUrl}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
        
        {hasImages && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-slate-600 border border-[#E8E1D3] shadow-sm font-mono">
            {activeIndex + 1} / {displayCount}
          </div>
        )}
      </div>

      {/* Thumbnail Row */}
      {displayCount > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {Array.from({ length: displayCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative shrink-0 w-20 aspect-square rounded-xl overflow-hidden bg-[#F5F0E8] border-2 transition-all",
                activeIndex === index 
                  ? "border-amber-500 shadow-sm" 
                  : "border-[#E8E1D3] hover:border-slate-300 opacity-70 hover:opacity-100"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] flex items-center justify-center text-xl font-bold text-stone-400">
                {initial}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

