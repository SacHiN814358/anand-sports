'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/reveal';

export function HeroBanner() {
  const stats = [
    { stat: '40+ Yrs', label: 'Legacy of Trust', gold: true },
    { stat: '15+ Brands', label: 'Top Manufacturer Lines', gold: false },
    { stat: '1,000+', label: 'Retailers Served', gold: false },
    { stat: '100% Genuine', label: 'Factory Direct', gold: true },
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-slate-950 pt-16 pb-14 sm:pt-24 sm:pb-20 border-b border-slate-800 min-h-[80vh] sm:min-h-[88vh] flex items-center"
    >
      {/* Background video + clean cinematic athletic overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={(el) => {
            if (el) el.muted = true;
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg.jpg"
          className="w-full h-full object-cover object-center opacity-60 filter contrast-105 brightness-90"
          aria-hidden="true"
        >
          <source src="/videos/hero-sports.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl flex flex-col items-start space-y-7">
          {/* Eyebrow pill */}
          <Reveal delay={100} variant="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-caps tracking-[0.18em] uppercase text-white/90 text-[11px] font-medium">
                Est. 1984 &bull; India&apos;s Trusted Sports Distributor
              </span>
            </div>
          </Reveal>

          {/* Headline — High-Impact Athletic Display Typography */}
          <Reveal delay={250} variant="up">
            <h1 className="font-bebas tracking-wider text-[48px] sm:text-[72px] md:text-[88px] lg:text-[100px] leading-[0.95] uppercase text-white drop-shadow-md">
              STAY FIT <span className="text-amber-400">LIVE</span>
              <br />
              IN STYLE
            </h1>
          </Reveal>

          {/* Sub-text */}
          <Reveal delay={400} variant="fade">
            <p className="text-[15px] sm:text-[18px] md:text-[20px] text-white/75 font-light leading-relaxed max-w-lg">
              Recharge your game with super-branded sports equipment.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={550} variant="scale">
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-7 py-3 sm:px-9 sm:py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-semibold font-caps uppercase tracking-wider text-[13px] shadow-[0_12px_30px_rgba(245,158,11,0.3)] flex items-center gap-2 transition-all group"
              >
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about"
                className="px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/20 hover:border-gold-accent/50 font-caps uppercase tracking-wider text-[13px] flex items-center gap-2 backdrop-blur-md transition-all"
              >
                About Us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <div className="mt-12 pt-8 sm:mt-20 sm:pt-10 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, i) => (
            <Reveal key={item.stat} delay={650 + i * 100} variant="up">
              <div className="flex flex-col border-l-2 border-amber-400/70 pl-5">
                <span
                  className={`font-display font-bold text-[26px] sm:text-[32px] md:text-[38px] leading-tight ${
                    item.gold ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {item.stat}
                </span>
                <span className="text-[11px] font-caps uppercase tracking-widest text-slate-300 mt-1">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Live Trust & Infrastructure Ribbon */}
        <Reveal delay={950} variant="up">
          <div className="mt-8 p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg flex flex-wrap items-center justify-around gap-3 text-[11px] sm:text-[12px] font-caps uppercase tracking-wider text-white/90">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              40+ Yrs Master Legacy
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-amber-400">warehouse</span>
              15,000 Sq.Ft Depots (Cuttack &amp; Ranchi)
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-amber-400">local_shipping</span>
              24h Express Carton Dispatch
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              100% Tax Invoice &amp; ITC Benefit
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}