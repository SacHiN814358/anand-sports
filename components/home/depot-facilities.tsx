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
    <section className="w-full bg-[#F3EEE5] py-24 border-b border-[#E8E1D3] overflow-hidden" id="godown">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-700 font-caps uppercase tracking-widest text-[12px] font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">warehouse</span>
              Infrastructure & Logistics Scale
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[42px] uppercase tracking-tight text-slate-900 leading-tight">
              Showroom & Central Godowns
            </h2>
          </div>
          <div className="text-[13px] text-slate-600 max-w-md font-normal">
            Strategic warehousing network ensuring constant inventory readiness for bulk carton dispatches across Eastern India.
          </div>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory grid-cols-1 md:grid-cols-3 gap-6 pb-4 md:pb-0">
          {depots.map((d, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 transition-all flex flex-col justify-between space-y-6 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-caps uppercase text-[10px] tracking-wider font-semibold">
                    {d.badge}
                  </span>
                  <span className="material-symbols-outlined text-amber-600">
                    location_on
                  </span>
                </div>

                <h3 className="font-display font-bold text-[22px] uppercase text-slate-900 tracking-wide">
                  {d.city}
                </h3>

                <p className="text-[13px] text-slate-800 font-medium">{d.location}</p>

                <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                  {d.role}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-700 font-semibold">
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
