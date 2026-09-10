'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/reveal';

const sisterConcerns = [
  {
    name: 'Anand Fitness',
    location: 'Opposite GPO office, Buxi Bazaar, Cuttack',
    year: 'Founded in 2014',
    icon: 'fitness_center',
  },
  {
    name: 'Anand Distribution',
    location: 'Ranchi, Jharkhand',
    year: 'Founded in 2021',
    icon: 'local_shipping',
  },
];

export function AboutSection() {
  return (
    <section className="w-full bg-surface-container-low py-14 sm:py-24 border-b border-border-subtle overflow-hidden" id="about">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Story & Sister Concerns (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <Reveal variant="left" duration={800}>
              <div>
                <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold mb-3">
                  <span className="material-symbols-outlined text-[16px]">history_edu</span>
                  40+ Years of Legacy
                </div>
                <h2 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[44px] uppercase tracking-tight text-white leading-tight mb-6">
                  About Us
                </h2>
                <p className="text-[15px] text-on-surface-variant leading-[1.85] font-light">
                  Welcome to Anand sports! A Legacy spanning over 40 years. India&apos;s Best Sports Equipment and
                  Sportswear Distributor, recommended by Top Companies of the Business. We are Distributor of 15+
                  Top Brands, like{' '}
                  <span className="text-gold-light font-medium">
                    TECHNO (Distributor of ODISHA &amp; JHARKHAND), YONEX (Distributor of ODISHA),
                  </span>{' '}
                  DIDA, NIVIA, COSCO, STAR IMPACT, ARYAN, ASI &amp; Many more. Serving{' '}
                  <span className="text-white font-medium">1000+ retailers</span> of East Zone of INDIA.
                  Contact us for top Brands &amp; original sports goods.
                </p>
              </div>
            </Reveal>

            {/* Sister Concerns Block */}
            <Reveal delay={150} variant="up">
              <div className="pt-2 border-t border-white/[0.08]">
                <h3 className="font-caps uppercase tracking-wider text-[13px] text-gold-light font-semibold mb-4">
                  Our Sister Concerns
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sisterConcerns.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-border-subtle hover:border-gold-accent/40 transition-all flex items-start gap-3 min-w-0 overflow-hidden"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px] text-gold-light">
                          {item.icon}
                        </span>
                      </div>
                      <div className="space-y-1 min-w-0 flex-1 overflow-hidden">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-display font-bold text-[14px] sm:text-[15px] uppercase text-white truncate">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-[11.5px] text-on-surface-variant font-light leading-snug break-words">
                          {item.location}
                        </p>
                        <span className="inline-block text-[9.5px] sm:text-[10px] font-mono text-gold-light px-2 py-0.5 rounded bg-black/40 border border-white/10 shrink-0 mt-0.5">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Read More Button */}
            <Reveal delay={250} variant="up">
              <Link
                href="/about"
                className="self-start px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-semibold font-caps uppercase tracking-wider text-[13px] shadow-[0_10px_25px_rgba(245,158,11,0.22)] flex items-center gap-2 transition-all group"
              >
                Read Full Story
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Original Founders Photo Card (5 cols) - object-top */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <Reveal delay={200} variant="right" duration={800}>
              <div className="relative group rounded-2xl p-2.5 gold-glow-card max-w-md w-full">
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    alt="Anand Sports Founders"
                    src="https://anandsports.co.in/wp-content/uploads/2023/10/anand.jpg"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-90" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-gold-light font-caps uppercase text-[10px] tracking-wider font-medium">
                      Founding Leadership
                    </span>
                  </div>

                  {/* Bottom Caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 space-y-1">
                    <h4 className="font-display font-bold text-[17px] uppercase text-white">
                      Anand Sports Legacy
                    </h4>
                    <p className="text-[12px] text-on-surface-variant font-light">
                      Pioneering East India&apos;s master sports distribution since 1984.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}