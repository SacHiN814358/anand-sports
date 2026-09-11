'use client';

import React, { useState } from 'react';

export function WholesaleCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#F3EEE5] py-14 sm:py-24 border-b border-[#E8E1D3]" id="wholesale">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: B2B Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-caps uppercase tracking-wider text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[15px] text-amber-700">handshake</span>
              B2B & Institutional Master Desk
            </div>

            <h2 className="font-display font-bold text-[26px] sm:text-[36px] md:text-[44px] uppercase tracking-tight text-slate-900 leading-tight">
              Direct Factory Wholesale Pricing Matrix
            </h2>

            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
              Are you a sports retailer, academy director, tournament convener, or institutional buyer? Submit your requirements for tiered wholesale price sheets, bulk dispatch timelines, and official dealer authorization certificates.
            </p>

            <div className="space-y-3 pt-2">
              <details className="group p-4 rounded-xl bg-white border border-[#E8E1D3] open:bg-[#FAF7F2] shadow-xs transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-[20px]">
                      check_circle
                    </span>
                    <h4 className="text-slate-900 font-caps uppercase text-[13.5px] sm:text-[14px] tracking-wide font-semibold">
                      Tiered Carton Discounts
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-[18px] group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-[13px] text-slate-600 pt-2.5 pl-8 leading-relaxed border-t border-[#E8E1D3] mt-2.5">
                  Volume pricing brackets for 10+, 50+, and 100+ carton allocations with factory warranty pass-through.
                </p>
              </details>

              <details className="group p-4 rounded-xl bg-white border border-[#E8E1D3] open:bg-[#FAF7F2] shadow-xs transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-[20px]">
                      check_circle
                    </span>
                    <h4 className="text-slate-900 font-caps uppercase text-[13.5px] sm:text-[14px] tracking-wide font-semibold">
                      State-wide Express Depot Dispatch
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-[18px] group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-[13px] text-slate-600 pt-2.5 pl-8 leading-relaxed border-t border-[#E8E1D3] mt-2.5">
                  Same-day dispatch across Odisha, Jharkhand, West Bengal, and Chhattisgarh via our central godowns.
                </p>
              </details>

              <details className="group p-4 rounded-xl bg-white border border-[#E8E1D3] open:bg-[#FAF7F2] shadow-xs transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-[20px]">
                      check_circle
                    </span>
                    <h4 className="text-slate-900 font-caps uppercase text-[13.5px] sm:text-[14px] tracking-wide font-semibold">
                      GST & Invoice Compliance
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-[18px] group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-[13px] text-slate-600 pt-2.5 pl-8 leading-relaxed border-t border-[#E8E1D3] mt-2.5">
                  100% Tax invoice with ITC benefit and brand warranty pass-through for registered trade partners.
                </p>
              </details>
            </div>
          </div>

          {/* Right Column: Wholesale Inquiry Form Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#E8E1D3] shadow-lg relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <span className="material-symbols-outlined text-emerald-600 text-[48px]">
                    verified
                  </span>
                  <h3 className="font-display font-bold text-[24px] uppercase text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-[14px] text-slate-600 max-w-xs mx-auto">
                    Our wholesale team will send the wholesale price matrix and catalog to your provided contact.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-caps uppercase text-[12px] font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between mb-2 pb-3 border-b border-slate-100">
                    <h3 className="font-display font-bold text-[18px] sm:text-[20px] uppercase text-slate-900 tracking-wide">
                      Request Trade Price List
                    </h3>
                    <span className="text-[10px] font-caps uppercase px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">
                      B2B Only
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                        Business / Store Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Royal Sports Agency"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                        Contact Person
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                        Location / District
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Cuttack, Odisha"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                      Primary Category Interest
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all">
                      <option value="cricket">Cricket Equipment & Gear</option>
                      <option value="badminton">Yonex & Racket Sports</option>
                      <option value="balls">Nivia / Cosco Match Balls</option>
                      <option value="institutional">Institutional / School Bulk Supplies</option>
                      <option value="all">Full Wholesale Catalog</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-caps uppercase text-slate-700 font-semibold mb-1 tracking-wider">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify required carton quantities or SKU models..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C1] text-slate-900 text-[13px] placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-caps uppercase tracking-wider text-[13px] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Submit B2B Quotation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


