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
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-24 border-b border-[#E8E1D3] overflow-hidden" id="testimonials">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <Reveal variant="down">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-700 font-caps uppercase tracking-widest text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[18px]">stars</span>
              CUSTOMER REVIEWS
            </div>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] uppercase tracking-tight text-slate-900 leading-tight">
              WHAT OUR CUSTOMER SAYS!
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto pb-4 md:pb-0">
          {reviews.map((rev, index) => (
            <Reveal key={rev.id} delay={150 * (index + 1)} variant="up" className="snap-center shrink-0 w-[88vw] sm:w-[450px] md:w-auto">
              <div className="h-full p-5 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xs hover:shadow-md">
                {/* Decorative Quote Icon Watermark */}
                <span className="absolute -top-3 -right-2 font-display text-[110px] leading-none text-stone-100 group-hover:text-amber-50 transition-colors select-none pointer-events-none">
                  &ldquo;
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Star Rating & Verified Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[20px] fill-current">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-caps tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                      <span className="material-symbols-outlined text-[13px]">verified</span>
                      VERIFIED BUYER
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Profile */}
                <div className="pt-4 mt-6 sm:pt-6 sm:mt-8 border-t border-slate-200 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0 shadow-xs">
                      <Image
                        src={rev.image}
                        alt={rev.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-[14px] sm:text-[16px] font-caps uppercase tracking-wider text-slate-900 font-bold group-hover:text-amber-700 transition-colors">
                        {rev.name}
                      </h3>
                      <p className="text-[12px] text-slate-500 font-normal">{rev.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block font-caps uppercase tracking-wider font-medium">
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
              className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white border border-[#E8E1D3] hover:border-amber-500 hover:bg-amber-50/50 text-slate-800 hover:text-amber-800 font-caps text-[13px] font-bold tracking-widest uppercase transition-all duration-300 shadow-2xs"
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