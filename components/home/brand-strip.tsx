'use client';

import React from 'react';
import Reveal from '@/components/ui/reveal';

const partners = [
  { name: 'TECHNO', note: 'Distributor – Odisha & Jharkhand', highlight: true },
  { name: 'YONEX', note: 'Distributor – Odisha', highlight: true },
  { name: 'DIDA', note: 'Official Partner', highlight: false },
  { name: 'NIVIA', note: 'Authorised Wholesale', highlight: false },
  { name: 'COSCO', note: 'Authorised Wholesale', highlight: false },
  { name: 'STAR IMPACT', note: 'Institutional Line', highlight: false },
  { name: 'ARYAN', note: 'Gym & Fitness Gear', highlight: false },
  { name: 'ASI', note: 'Since 1959 Partner', highlight: false },
];

export function BrandStrip() {
  return (
    <section className="w-full bg-surface-dim py-14 sm:py-20 border-b border-border-subtle overflow-hidden" id="brands">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Reveal variant="left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Authorised Distribution Rights
              </div>
              <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[40px] uppercase tracking-tight text-white leading-tight">
                Our Partners
              </h2>
            </div>
            <p className="text-[13px] text-on-surface-variant max-w-sm font-light leading-relaxed">
              Direct appointed master wholesale stockist across East India. 100% authentic goods with factory warranty.
            </p>
          </div>
        </Reveal>

        <div className="relative overflow-hidden w-full border-y border-white/5 py-4 bg-black/40 backdrop-blur-md">
          {/* Subtle Side Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#090c10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#090c10] to-transparent z-10 pointer-events-none" />

          {/* Marquee Wrapper (Duplicated for Seamless Infinite Loop) */}
          <div className="animate-marquee flex items-center gap-4">
            {[...partners, ...partners, ...partners].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="group shrink-0 px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-gold-accent/15 border border-white/10 hover:border-gold-accent/40 flex items-center gap-3 transition-all duration-300 active:scale-95 cursor-default"
              >
                {b.highlight && (
                  <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse shrink-0" />
                )}
                <span
                  className={`font-display font-bold text-[15px] sm:text-[17px] uppercase tracking-widest group-hover:text-gold-light transition-colors whitespace-nowrap ${
                    b.highlight ? 'text-gold-light' : 'text-white/90'
                  }`}
                >
                  {b.name}
                </span>
                <span className="text-[10px] font-caps uppercase tracking-wider text-on-surface-variant/80 border-l border-white/10 pl-3">
                  {b.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}