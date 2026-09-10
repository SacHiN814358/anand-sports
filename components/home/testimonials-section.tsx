'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const reviews = [
  {
    id: 'review-1',
    name: 'K Rahul',
    role: 'Retail & Wholesale Customer',
    image: '/images/testimonials/testimo-1.jpg',
    comment:
      'I bought a Aryan Skipping at their retail store and it was so good quality very long lasting. Recently I visited their godown and it was so big and they have so much of brands and I have a very good experience there. Anand sports is a biggest sports dealer of Odisha.',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 'review-2',
    name: 'Avinash Nayak',
    role: 'Sports Equipment & Hosiery Buyer',
    image: '/images/testimonials/testimo-2.jpg',
    comment:
      'Anand Sports is a well known wholesaler and retailer of sports equipments and hosiery items in Odisha. Almost all indoor and outdoor sports items and gym equipments are available here under one roof.',
    rating: 5,
    source: 'Google Review',
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-surface-dim py-14 sm:py-24 border-b border-border-subtle overflow-hidden" id="testimonials">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <Reveal variant="down">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[18px]">stars</span>
              CUSTOMER REVIEWS
            </div>
            <h2 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[44px] uppercase tracking-tight text-white leading-tight">
              WHAT OUR CUSTOMER SAYS!
            </h2>
            <div className="w-16 h-0.5 bg-gold-accent rounded-full" />
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto pb-4 md:pb-0">
          {reviews.map((rev, index) => (
            <Reveal key={rev.id} delay={150 * (index + 1)} variant="up" className="snap-center shrink-0 w-[88vw] sm:w-[450px] md:w-auto">
              <div className="h-full p-5 sm:p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-border-subtle hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group active:scale-[0.99]">
                {/* Decorative Quote Icon Watermark */}
                <span className="absolute -top-3 -right-2 font-display text-[110px] leading-none text-white/[0.03] group-hover:text-gold-accent/10 transition-colors select-none pointer-events-none">
                  &ldquo;
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Star Rating & Verified Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[20px] fill-current">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-caps tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="material-symbols-outlined text-[13px]">verified</span>
                      VERIFIED BUYER
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-[15px] sm:text-[16px] text-white/85 leading-relaxed font-light italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Profile */}
                <div className="pt-4 mt-6 sm:pt-6 sm:mt-8 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold-accent/60 shadow-lg shadow-gold-accent/10 flex-shrink-0">
                      <Image
                        src={rev.image}
                        alt={rev.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-[14px] sm:text-[16px] font-caps uppercase tracking-wider text-white font-bold group-hover:text-gold-light transition-colors">
                        {rev.name}
                      </h3>
                      <p className="text-[12px] text-on-surface-variant font-light">{rev.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-white/40 block font-caps uppercase tracking-wider">
                      {rev.source}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Reviews Button */}
        <Reveal delay={450} variant="zoom">
          <div className="mt-10 sm:mt-14 text-center">
            <a
              href="https://www.google.com/search?q=anand+sports+wholesale+store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gold-accent/10 border border-gold-accent/30 hover:border-gold-accent hover:bg-gold-accent/20 text-gold-light font-caps text-[13px] font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-gold-accent/5"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              VIEW ALL GOOGLE REVIEWS
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}