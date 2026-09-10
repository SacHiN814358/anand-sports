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
    spotlight: 'rgba(245, 158, 11, 0.22)',
    borderColor: 'rgba(245, 158, 11, 0.65)',
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
    spotlight: 'rgba(239, 68, 68, 0.22)',
    borderColor: 'rgba(239, 68, 68, 0.65)',
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
    spotlight: 'rgba(245, 158, 11, 0.22)',
    borderColor: 'rgba(245, 158, 11, 0.65)',
  },
];

export function FeaturedProducts() {
  return (
    <section className="w-full bg-surface py-14 sm:py-24 border-b border-border-subtle overflow-hidden" id="collections">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Header */}
        <Reveal variant="down">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">category</span>
                Curated Wholesale Catalog
              </div>
              <h2 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[44px] uppercase tracking-tight text-white leading-tight">
                Sports Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-white border border-border-medium hover:border-gold-accent/50 font-caps uppercase tracking-wider text-[12px] transition-all self-start md:self-auto group"
            >
              <span className="material-symbols-outlined text-[16px] text-gold-light group-hover:rotate-45 transition-transform">
                apps
              </span>
              View All Collection
            </Link>
          </div>
        </Reveal>

        {/* Equal 3-Column Grid with 3D Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={i * 150}
              variant={cat.animation}
              duration={800}
            >
              <SpotlightCard
                spotlightColor={cat.spotlight}
                borderColor={cat.borderColor}
                className="h-full flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative h-48 sm:h-60 md:h-64 overflow-hidden bg-black/60 flex-shrink-0">
                  <img
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    src={cat.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-gold-light font-caps uppercase text-[10px] tracking-wider font-semibold shadow-md group-hover:border-gold-accent/60 transition-colors">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 space-y-4 relative z-30">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gold-accent/15 border border-gold-accent/40 flex items-center justify-center group-hover:bg-gold-accent group-hover:text-black transition-all duration-300 shadow-md">
                        <span className="material-symbols-outlined text-[20px] text-gold-light group-hover:text-black transition-colors">
                          {cat.icon}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[18px] sm:text-[22px] uppercase text-white tracking-wide group-hover:text-gold-light transition-colors">
                        {cat.label}
                      </h3>
                    </div>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Wholesale quantities available</span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] group-hover:bg-gold-accent group-hover:text-black border border-white/10 group-hover:border-gold-accent text-gold-light font-caps uppercase text-[11px] tracking-wider transition-all duration-300 transform group-hover:translate-x-0.5"
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