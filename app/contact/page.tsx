'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const phoneNumbers = [
  { number: '+91 8260229594', label: 'Wholesale & Orders Desk 1' },
  { number: '+91 6372201001', label: 'Wholesale & Orders Desk 2' },
  { number: '+91 8144106607', label: 'Sales & Inventory Helpline' },
  { number: '+91 8144136690', label: 'Institutional & Bulk Supply' },
];

const businessHours = [
  { day: 'Monday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Tuesday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Wednesday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Thursday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Friday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Saturday', hours: '10:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', hours: 'Closed', open: false },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Cricket Gear',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Banner */}
      <section className="relative py-14 sm:py-20 px-4 text-center bg-gradient-to-b from-white/[0.04] via-surface-dim to-surface border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.08),transparent)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase tracking-widest text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            East India Wholesale Desk &bull; Cuttack &amp; Bhubaneswar
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white">
            Get In Touch
          </h1>

          <p className="text-on-surface-variant text-[15px] sm:text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
            Connect directly with our master wholesale stockists in Odisha. Call, WhatsApp, or send an inquiry for trade prices.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-16">
        
        {/* Quick Phone Hotline Bar */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-gold-accent/30 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-caps text-gold-light uppercase tracking-widest text-[11px]">Direct Hotlines</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl uppercase text-white">Wholesale &amp; Orders Support</h2>
            </div>
            <span className="text-[12px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Lines Active Mon–Sat (10 AM – 8 PM)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phoneNumbers.map((p) => (
              <a
                key={p.number}
                href={`tel:${p.number.replace(/\s+/g, '')}`}
                className="group p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-gold-accent/50 transition-all flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-caps uppercase tracking-wider text-on-surface-variant group-hover:text-gold-light transition-colors block">
                    {p.label}
                  </span>
                  <span className="font-mono font-bold text-[15px] text-white">
                    {p.number}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center group-hover:bg-gold-accent group-hover:text-black text-gold-light transition-all">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-border-subtle space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="font-caps text-gold-light uppercase tracking-widest text-[11px]">Quick Inquiry</span>
                <h2 className="font-display font-bold text-xl sm:text-2xl uppercase text-white">Send Us A Message</h2>
                <p className="text-[13px] text-on-surface-variant font-light">
                  Submit your wholesale inquiry or trade requirements below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[28px]">check_circle</span>
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-white">Message Sent Successfully!</h3>
                  <p className="text-[13px] text-on-surface-variant font-light max-w-md mx-auto">
                    Thank you for reaching out to Anand Sports. Our wholesale executive will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[12px] font-caps uppercase tracking-wider text-gold-light hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-on-surface-variant">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-medium focus:border-gold-accent/60 text-white placeholder:text-white/30 text-[13.5px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-on-surface-variant">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-medium focus:border-gold-accent/60 text-white placeholder:text-white/30 text-[13.5px] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-on-surface-variant">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yogesh@anandsportswholesale.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-medium focus:border-gold-accent/60 text-white placeholder:text-white/30 text-[13.5px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-on-surface-variant">
                        Category Interest
                      </label>
                      <select
                        value={formState.interest}
                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090c10] border border-border-medium focus:border-gold-accent/60 text-white text-[13.5px] outline-none transition-colors"
                      >
                        <option value="Cricket Gear">Cricket Equipment &amp; Bats</option>
                        <option value="Badminton">Yonex &amp; Badminton Rackets</option>
                        <option value="Football">Football &amp; Team Sports</option>
                        <option value="Gym & Fitness">Aryan Gym &amp; Fitness Equipment</option>
                        <option value="Institutional">Institutional &amp; School Supply</option>
                        <option value="General Wholesale">General Trade Price List</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-caps uppercase tracking-wider text-on-surface-variant">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your wholesale requirements, product models, or quantity details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-medium focus:border-gold-accent/60 text-white placeholder:text-white/30 text-[13.5px] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-bold font-caps uppercase tracking-wider text-[13.5px] shadow-[0_4px_20px_rgba(245,158,11,0.28)] flex items-center justify-center gap-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Send Messages
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Address, Business Hours & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Address Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.02] border border-border-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-light">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase text-white">Main Wholesale Store</h3>
                  <span className="text-[11px] font-caps uppercase text-gold-light">Cuttack Central Belt</span>
                </div>
              </div>

              <div className="space-y-2 text-[13.5px] text-on-surface-variant font-light leading-relaxed pt-1">
                <p className="text-white font-normal">Anand Sports</p>
                <p>Makarbagh Sahi, In front of Annapurna Theatre</p>
                <p>Buxi Bazaar, Cuttack, ODISHA — 751003</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://goo.gl/maps/dX9zxCZ6G5GS8b8G7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-border-medium hover:border-gold-accent/50 font-caps uppercase tracking-wider text-[11.5px] transition-all"
                >
                  <span className="material-symbols-outlined text-[16px] text-gold-light">map</span>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.02] border border-border-subtle flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-light">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-caps uppercase tracking-wider text-on-surface-variant block">Official Email</span>
                  <a href="mailto:yogesh@anandsportswholesale.com" className="font-mono text-[12px] sm:text-[13px] break-all text-white hover:text-gold-light transition-colors">
                    yogesh@anandsportswholesale.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.02] border border-border-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-light">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase text-white">Business Hours</h3>
                </div>
                <span className="text-[10px] font-caps uppercase px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                  Open Mon–Sat
                </span>
              </div>

              <div className="space-y-2 pt-2">
                {businessHours.map((bh) => (
                  <div
                    key={bh.day}
                    className="flex items-center justify-between text-[12.5px] py-1 border-b border-white/[0.04] last:border-none"
                  >
                    <span className="text-white/80 font-medium">{bh.day}</span>
                    <span className={bh.open ? 'font-mono text-slate-300' : 'font-mono text-rose-400 font-bold'}>
                      {bh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Sister Concerns Contact Footer Strip */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-3xl bg-white/[0.02] border border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-1">
            <span className="font-caps text-gold-light uppercase tracking-widest text-[11px]">Sister Concern Facilities</span>
            <h4 className="font-display font-bold text-lg uppercase text-white">Cuttack &amp; Ranchi Depots</h4>
            <p className="text-[12.5px] text-on-surface-variant font-light">
              Anand Fitness (Buxi Bazaar, Cuttack) &bull; Anand Distribution (Ranchi, Jharkhand)
            </p>
          </div>
          <div className="flex sm:justify-end gap-3">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-border-medium font-caps uppercase text-[11.5px] tracking-wider transition-all"
            >
              About Sister Concerns
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}