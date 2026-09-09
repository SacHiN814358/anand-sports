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
      className="relative w-full overflow-hidden bg-surface pt-24 pb-20 border-b border-border-subtle min-h-[92vh] flex items-center"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          alt="Anand Sports football rugby cricket action background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-75 contrast-110"
          src="/images/hero-bg.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(245,158,11,0.1),transparent)]" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl flex flex-col items-start space-y-7">
          {/* Eyebrow pill */}
          <Reveal delay={100} variant="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
              <span className="font-caps tracking-[0.2em] uppercase text-white/80 text-[11px] font-medium">
                Est. 1984 &bull; India&apos;s Trusted Distributor
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={250} variant="up">
            <h1 className="font-display font-extrabold text-[52px] sm:text-[64px] lg:text-[76px] leading-[1.03] tracking-tight text-white">
              Stay fit{' '}
              <span className="text-gold-accent text-glow-gold">live</span>
              <br />
              in style
            </h1>
          </Reveal>

          {/* Sub-text */}
          <Reveal delay={400} variant="fade">
            <p className="text-[18px] sm:text-[20px] text-white/75 font-light leading-relaxed max-w-lg">
              Recharge your game with super-branded sports equipment.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={550} variant="scale">
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-9 py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-semibold font-caps uppercase tracking-wider text-[13px] shadow-[0_12px_30px_rgba(245,158,11,0.3)] flex items-center gap-2 transition-all group"
              >
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/20 hover:border-gold-accent/50 font-caps uppercase tracking-wider text-[13px] flex items-center gap-2 backdrop-blur-md transition-all"
              >
                About Us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-border-subtle grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <Reveal key={item.stat} delay={650 + i * 100} variant="up">
              <div className="flex flex-col border-l-2 border-gold-accent/50 pl-5">
                <span
                  className={`font-display font-bold text-[32px] sm:text-[38px] leading-tight ${
                    item.gold ? 'text-gold-light' : 'text-white'
                  }`}
                >
                  {item.stat}
                </span>
                <span className="text-[11px] font-caps uppercase tracking-widest text-on-surface-variant mt-1">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}