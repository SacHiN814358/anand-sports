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

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {partners.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} variant="scale">
              <div className="group relative p-3 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-border-subtle hover:border-gold-accent/40 flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 cursor-default">
                {b.highlight && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold-accent flex items-center justify-center">
                    <span className="material-symbols-outlined text-[11px] text-black">star</span>
                  </span>
                )}
                <span
                  className={`font-display font-bold text-[13px] sm:text-[16px] uppercase tracking-widest group-hover:text-gold-light transition-colors ${
                    b.highlight ? 'text-gold-light' : 'text-white'
                  }`}
                >
                  {b.name}
                </span>
                <span className="text-[9px] font-caps uppercase tracking-wider text-on-surface-variant leading-tight">
                  {b.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}