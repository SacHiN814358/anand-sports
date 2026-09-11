'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/reveal';
import SpotlightCard from '@/components/ui/spotlight-card';

const categories = [
  {
    id: 'cricket',
    label: 'Cricket',
    badge: '100% Genuine Willow',
    icon: 'sports_cricket',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    description:
      'English willow & Kashmir bats, leather match balls, gloves, helmets, leg guards and complete team kit bags — direct factory stock.',
    animation: 'left' as const,
  },
  {
    id: 'shoes',
    label: 'Shoes',
    badge: 'Athletic Footwear',
    icon: 'directions_run',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description:
      'Pro court shoes, rubber spike cricket footwear, running shoes, and outdoor athletic sandals from YONEX, NIVIA, COSCO & more.',
    animation: 'scale' as const,
  },
  {
    id: 'gym',
    label: 'Gym & Fitness',
    badge: 'Commercial Gear',
    icon: 'fitness_center',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description:
      'Commercial dumbbells, rubber weight plates, adjustable gym benches, resistance bands, agility cones, and gym flooring mats.',
    animation: 'right' as const,
  },
];

export function FeaturedProducts() {
  return (
    <section className="w-full bg-surface py-12 sm:py-16 border-b border-slate-200 overflow-hidden" id="collections">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Header */}
        <Reveal variant="down">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 font-caps uppercase tracking-widest text-[11px] font-semibold mb-2">
                <span className="material-symbols-outlined text-[15px]">category</span>
                Curated Wholesale Catalog
              </div>
              <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] uppercase tracking-tight text-slate-900 leading-tight">
                Sports Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F3EEE5] text-slate-800 border border-[#E8E1D3] font-caps uppercase tracking-wider text-[12px] font-semibold transition-all self-start md:self-auto group shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px] text-amber-600 group-hover:rotate-45 transition-transform">
                apps
              </span>
              View All Collection
            </Link>
          </div>
        </Reveal>

        {/* Equal 3-Column Grid with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={i * 150}
              variant={cat.animation}
              duration={800}
            >
              <SpotlightCard className="h-full flex flex-col justify-between">
                {/* Image Showcase */}
                <div className="relative h-48 sm:h-60 md:h-64 overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={cat.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md text-amber-400 font-caps uppercase text-[10px] tracking-wider font-semibold shadow-md">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 space-y-4 relative z-30 bg-white">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 shadow-xs">
                        <span className="material-symbols-outlined text-[20px] text-amber-700 group-hover:text-slate-950 transition-colors">
                          {cat.icon}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[18px] sm:text-[22px] uppercase text-slate-900 tracking-wide group-hover:text-amber-600 transition-colors">
                        {cat.label}
                      </h3>
                    </div>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500 font-medium">Wholesale quantities available</span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 border border-slate-200 group-hover:border-amber-500 text-slate-800 font-caps uppercase text-[11px] tracking-wider transition-all duration-300"
                    >
                      <span className="font-semibold">Browse</span>
                      <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}