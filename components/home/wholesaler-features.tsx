'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/reveal';

const features = [
  {
    icon: 'handshake',
    title: 'Reliable Sports Wholesaler',
    description:
      'Trusted by 1000+ retailers across East India for over four decades — dependable supply chain, genuine products, on-time delivery.',
    animation: 'left' as const,
  },
  {
    icon: 'verified',
    title: 'Top Brands Sports Equipment',
    description:
      'Official distributor of 15+ leading brands: YONEX, TECHNO, COSCO, NIVIA, STAR IMPACT, ARYAN, ASI, DIDA and many more.',
    animation: 'scale' as const,
  },
  {
    icon: 'sell',
    title: 'Affordable Sports Part Supplier',
    description:
      'Competitive wholesale pricing, flexible order quantities, and GST-compliant invoicing for retailers, academies, and institutions.',
    animation: 'right' as const,
  },
];

export function WholesalerFeatures() {
  return (
    <section className="w-full bg-surface py-24 border-b border-border-subtle overflow-hidden" id="wholesale">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Reveal variant="down">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              Why Choose Us
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] uppercase tracking-tight text-white leading-tight max-w-2xl">
              Wholesaler of top sports brand
            </h2>
            <div className="w-16 h-0.5 bg-gold-accent rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 150} variant={f.animation}>
              <div className="h-full group p-8 rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-gold-accent/40 hover:bg-white/[0.04] transition-all flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-accent/10 border border-gold-accent/25 flex items-center justify-center group-hover:bg-gold-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-[28px] text-gold-accent">{f.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-[18px] uppercase text-white tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350} variant="zoom">
          <div className="flex justify-center">
            <Link
              href="/products"
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-bold font-caps uppercase tracking-wider text-[14px] shadow-[0_14px_32px_rgba(245,158,11,0.28)] flex items-center gap-2.5 transition-all group"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              Shop Now
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}