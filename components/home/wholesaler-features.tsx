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
    <section className="w-full bg-[#F3EEE5] py-14 sm:py-24 border-b border-[#E8E1D3] overflow-hidden" id="wholesale">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Reveal variant="down">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-700 font-caps uppercase tracking-widest text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              Why Choose Us
            </div>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] uppercase tracking-tight text-slate-900 leading-tight max-w-2xl">
              Wholesaler of top sports brands
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-14">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 150} variant={f.animation}>
              <div className="h-full group p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 transition-all flex flex-col gap-5 shadow-xs hover:shadow-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FAF7F2] border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px] text-amber-700 group-hover:text-slate-950 transition-colors">{f.icon}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-[16px] sm:text-[18px] uppercase text-slate-900 tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
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
              className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-caps uppercase tracking-wider text-[14px] shadow-xs flex items-center gap-2.5 transition-all group"
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