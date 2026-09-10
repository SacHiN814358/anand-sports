'use client';

import React, { useState } from 'react';

export function WholesaleCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#0c1017] py-14 sm:py-24 border-b border-border-subtle" id="wholesale">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: B2B Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase tracking-wider text-[11px] font-medium">
              <span className="material-symbols-outlined text-[14px]">handshake</span>
              B2B & Institutional Master Desk
            </div>

            <h2 className="font-display font-bold text-[24px] sm:text-[34px] md:text-[44px] uppercase tracking-tight text-white leading-none">
              Direct Factory Wholesale Pricing Matrix
            </h2>

            <p className="text-[15px] text-on-surface-variant leading-relaxed font-light">
              Are you a sports retailer, academy director, tournament convener, or institutional buyer? Submit your requirements for tiered wholesale price sheets, bulk dispatch timelines, and official dealer authorization certificates.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-gold-light mt-0.5 text-[20px]">
                  check_circle
                </span>
                <div>
                  <h4 className="text-white font-caps uppercase text-[14px] tracking-wide font-medium">
                    Tiered Carton Discounts
                  </h4>
                  <p className="text-[12px] text-on-surface-variant">
                    Volume pricing brackets for 10+, 50+, and 100+ carton allocations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-gold-light mt-0.5 text-[20px]">
                  check_circle
                </span>
                <div>
                  <h4 className="text-white font-caps uppercase text-[14px] tracking-wide font-medium">
                    State-wide Express Depot Dispatch
                  </h4>
                  <p className="text-[12px] text-on-surface-variant">
                    Same-day dispatch across Odisha, Jharkhand, West Bengal, and Chhattisgarh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-gold-light mt-0.5 text-[20px]">
                  check_circle
                </span>
                <div>
                  <h4 className="text-white font-caps uppercase text-[14px] tracking-wide font-medium">
                    GST & Invoice Compliance
                  </h4>
                  <p className="text-[12px] text-on-surface-variant">
                    100% Tax invoice with ITC benefit and brand warranty pass-through.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Wholesale Inquiry Form Card */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-border-medium shadow-2xl relative overflow-hidden backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <span className="material-symbols-outlined text-emerald-400 text-[48px]">
                    verified
                  </span>
                  <h3 className="font-display font-bold text-[24px] uppercase text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-[14px] text-on-surface-variant max-w-xs mx-auto">
                    Our wholesale team will send the wholesale price matrix and catalog to your provided contact.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-white/10 text-white font-caps uppercase text-[12px] hover:bg-white/15"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-[17px] sm:text-[20px] uppercase text-white tracking-wide">
                      Request Trade Price List
                    </h3>
                    <span className="text-[10px] font-caps uppercase px-2 py-0.5 rounded bg-gold-accent/15 text-gold-light border border-gold-accent/30">
                      B2B Only
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                        Business / Store Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Royal Sports Agency"
                        className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] placeholder:text-white/30 focus:border-gold-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                        Contact Person
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] placeholder:text-white/30 focus:border-gold-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] placeholder:text-white/30 focus:border-gold-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                        Location / District
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Cuttack, Odisha"
                        className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] placeholder:text-white/30 focus:border-gold-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                      Primary Category Interest
                    </label>
                    <select className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] focus:border-gold-accent focus:outline-none">
                      <option value="cricket">Cricket Equipment & Gear</option>
                      <option value="badminton">Yonex & Racket Sports</option>
                      <option value="balls">Nivia / Cosco Match Balls</option>
                      <option value="institutional">Institutional / School Bulk Supplies</option>
                      <option value="all">Full Wholesale Catalog</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-caps uppercase text-slate-300 mb-1 tracking-wider">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify required carton quantities or SKU models..."
                      className="w-full px-3.5 py-3 rounded bg-black/50 border border-white/15 text-white text-[13px] placeholder:text-white/30 focus:border-gold-accent focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-semibold font-caps uppercase tracking-wider text-[13px] shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all flex items-center justify-center gap-2"
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


