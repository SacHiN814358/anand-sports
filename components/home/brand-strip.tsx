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
    <section className="w-full bg-[#F3EEE5] py-14 sm:py-20 border-b border-[#E8E1D3] overflow-hidden" id="brands">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <Reveal variant="left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-700 font-caps uppercase tracking-widest text-[12px] font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Authorised Distribution Rights
              </div>
              <h2 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[40px] uppercase tracking-tight text-slate-900 leading-tight">
                Our Partners
              </h2>
            </div>
            <p className="text-[13px] text-slate-600 max-w-sm font-normal leading-relaxed">
              Direct appointed master wholesale stockist across East India. 100% authentic goods with factory warranty.
            </p>
          </div>
        </Reveal>

        <div className="relative overflow-hidden w-full border-y border-[#E8E1D3] py-4 bg-[#FAF7F2] shadow-xs">
          {/* Subtle Side Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

          {/* Marquee Wrapper */}
          <div className="animate-marquee flex items-center gap-4">
            {[...partners, ...partners, ...partners].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="group shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-amber-50/60 border border-[#E8E1D3] hover:border-amber-400 flex items-center gap-3 transition-all duration-300 shadow-2xs hover:shadow-sm cursor-default"
              >
                {b.highlight && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                )}
                <span
                  className={`font-display font-bold text-[15px] sm:text-[17px] uppercase tracking-widest transition-colors whitespace-nowrap ${
                    b.highlight ? 'text-blue-900' : 'text-slate-800'
                  }`}
                >
                  {b.name}
                </span>
                <span className="text-[10px] font-caps uppercase tracking-wider text-slate-500 border-l border-[#E8E1D3] pl-3">
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