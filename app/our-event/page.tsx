'use client';

import React from 'react';
import Link from 'next/link';

const originalEvents = [
  {
    id: 1,
    title: '77th INDEPENDENCE DAY: 2023 AT ANAND SPORTS WHOLESALE STORE',
    date: '15th August 2023',
    location: 'Anand Sports Wholesale Store, Odisha',
    description:
      '77th Independence Day celebration and flag hoisting event held at Anand Sports Wholesale Store with our retail partners, sports enthusiasts, and team staff.',
    badge: 'Official Celebration',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
    color: 'text-amber-400',
  },
  {
    id: 2,
    title: 'ANAND SPORTS & DIDA MEET UP: 2023 AT SWOSTI CHILIKA RESORT',
    date: 'Annual Meetup 2023',
    location: 'Swosti Chilika Resort, Chilika, Odisha',
    description:
      'Grand dealer meet and business conference organized by Anand Sports & DIDA. Showcased upcoming sportswear lines and recognized top retail partners.',
    badge: 'Dealer Meetup',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    color: 'text-amber-400',
  },
  {
    id: 3,
    title: 'ANAND SPORTS & DIDA MEET UP: 2018-19 AT PURI',
    date: '2018 - 2019',
    location: 'Puri Beach Resort, Puri, Odisha',
    description:
      'State-wide sports dealer meet-up at Puri celebrating 35+ years of wholesale leadership and DIDA brand partnership in Odisha and East Zone.',
    badge: 'Annual Convention',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    color: 'text-amber-600',
  },
];

export default function OurEventPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="relative py-8 sm:py-12 px-4 text-center bg-[#F3EEE5] border-b border-[#E8E1D3] overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-caps uppercase tracking-widest text-[10.5px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Anand Sports Events &bull; Odisha
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-slate-900">
            Our Events
          </h1>
          <p className="text-slate-600 text-[13px] sm:text-[14.5px] leading-relaxed max-w-xl mx-auto">
            Highlights from our independence day celebrations, dealer meets, and brand conventions across Odisha.
          </p>
        </div>
      </section>

      {/* Events Showcase */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {originalEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white border border-[#E8E1D3] hover:border-amber-400 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Event Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  alt={event.title}
                  src={event.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`font-caps uppercase text-[10px] tracking-wider px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/20 font-semibold ${event.color}`}>
                    {event.badge}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex flex-col space-y-4 flex-1">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-amber-700 font-semibold">{event.date}</span>
                  <h3 className="font-display font-bold text-[18px] uppercase tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {event.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-[12px] font-mono">
                  <span className="material-symbols-outlined text-[15px] text-amber-600">location_on</span>
                  {event.location}
                </div>

                <p className="text-slate-600 text-[13px] leading-relaxed flex-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-10 rounded-2xl border border-[#E8E1D3] bg-[#F3EEE5] shadow-sm">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-slate-900 mb-3">
            Planning a Sports Event or Dealer Meet?
          </h2>
          <p className="text-slate-600 mb-6 max-w-md mx-auto text-sm">
            We offer bulk equipment supply, official sponsorship, and dealer coordination across East India.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold font-caps uppercase tracking-wider text-[13px] hover:from-amber-600 hover:to-amber-700 transition-all shadow-md active:scale-95"
            href="/contact"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}