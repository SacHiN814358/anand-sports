'use client';

import React from 'react';

const depots = [
  {
    city: 'Bhubaneswar Central Depot',
    location: 'Master Canteen Square & Mancheswar Industrial Estate Hub',
    capacity: '15,000 Sq. Ft. Warehousing & Showroom',
    role: 'Central Dispatch Hub for Odisha & South Asia Line allocations',
    badge: 'Main Central Hub',
  },
  {
    city: 'Cuttack Trade Stockroom',
    location: 'Chandi Chhak Sports Trade Belt',
    capacity: '8,000 Sq. Ft. Wholesale Godown',
    role: 'Fast-track carton dispatch & wholesale dealer pickup counter',
    badge: 'Express Depot',
  },
  {
    city: 'Western Odisha Supply Desk',
    location: 'Sambalpur & Rourkela Logistics Network',
    capacity: 'Regional Stockist Distribution Point',
    role: 'Express delivery hub for Western Odisha & Jharkhand borders',
    badge: 'Regional Hub',
  },
];

export function DepotFacilities() {
  return (
    <section className="w-full bg-[#0c1017] py-24 border-b border-border-subtle" id="godown">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-light font-caps uppercase tracking-widest text-[12px] font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">warehouse</span>
              Infrastructure & Logistics Scale
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[42px] uppercase tracking-tight text-white leading-tight">
              Showroom & Central Godowns
            </h2>
          </div>
          <div className="text-[13px] text-on-surface-variant max-w-md font-light">
            Strategic warehousing network ensuring constant inventory readiness for bulk carton dispatches across Eastern India.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depots.map((d, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-gold-accent/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase text-[10px] tracking-wider">
                    {d.badge}
                  </span>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-gold-light transition-colors">
                    location_on
                  </span>
                </div>

                <h3 className="font-display font-bold text-[22px] uppercase text-white tracking-wide">
                  {d.city}
                </h3>

                <p className="text-[13px] text-white/90 font-medium">{d.location}</p>

                <p className="text-[13px] text-on-surface-variant leading-relaxed font-light">
                  {d.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  {d.capacity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
