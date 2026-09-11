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
      <section className="relative py-8 sm:py-12 px-4 text-center bg-[#F3EEE5] border-b border-[#E8E1D3] overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-caps uppercase tracking-widest text-[10.5px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            East India Wholesale Desk &bull; Cuttack &amp; Bhubaneswar
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-slate-900">
            Get In Touch
          </h1>

          <p className="text-slate-600 text-[13px] sm:text-[14.5px] leading-relaxed max-w-xl mx-auto">
            Connect directly with our master wholesale stockists in Odisha. Call, WhatsApp, or send an inquiry for trade prices.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-16">
        
        {/* Quick Phone Hotline Bar */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-3xl bg-[#F3EEE5] border border-[#E8E1D3] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] font-semibold">Direct Hotlines</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl uppercase text-slate-900">Wholesale &amp; Orders Support</h2>
            </div>
            <span className="text-[12px] font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Lines Active Mon–Sat (10 AM – 8 PM)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phoneNumbers.map((p) => (
              <a
                key={p.number}
                href={`tel:${p.number.replace(/\s+/g, '')}`}
                className="group p-4 rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between shadow-sm"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-caps uppercase tracking-wider text-slate-500 group-hover:text-amber-700 transition-colors block font-medium">
                    {p.label}
                  </span>
                  <span className="font-mono font-bold text-[15px] text-slate-900">
                    {p.number}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white text-amber-700 transition-all">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E1D3] shadow-md space-y-8">
              <div>
                <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] font-semibold">Inquiry Form</span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase text-slate-900 mt-1">Send a Message</h2>
                <p className="text-[13px] text-slate-600 mt-2 font-normal">
                  Fill in your requirements below. Our wholesale sales coordinator will contact you within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <span className="material-symbols-outlined text-[48px] text-emerald-600">check_circle</span>
                  <h3 className="font-display font-bold text-xl uppercase text-slate-900">Message Received!</h3>
                  <p className="text-[13px] text-slate-600 max-w-sm mx-auto">
                    Thank you, {formState.name}. We will get back to you shortly with wholesale catalogs and pricing details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-slate-900 text-white font-caps uppercase text-[12px] font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-slate-700 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DCD3C1] focus:border-amber-500 focus:bg-white text-slate-900 placeholder:text-slate-400 text-[13.5px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-slate-700 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DCD3C1] focus:border-amber-500 focus:bg-white text-slate-900 placeholder:text-slate-400 text-[13.5px] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-slate-700 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yogesh@anandsportswholesale.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DCD3C1] focus:border-amber-500 focus:bg-white text-slate-900 placeholder:text-slate-400 text-[13.5px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-caps uppercase tracking-wider text-slate-700 font-medium">
                        Category Interest
                      </label>
                      <select
                        value={formState.interest}
                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DCD3C1] focus:border-amber-500 focus:bg-white text-slate-900 text-[13.5px] outline-none transition-colors"
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
                    <label className="text-[12px] font-caps uppercase tracking-wider text-slate-700 font-medium">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your wholesale requirements, product models, or quantity details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-amber-500 focus:bg-white text-slate-900 placeholder:text-slate-400 text-[13.5px] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold font-caps uppercase tracking-wider text-[13.5px] shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Address, Business Hours & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Address Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase text-slate-900">Main Wholesale Store</h3>
                  <span className="text-[11px] font-caps uppercase text-amber-700 font-semibold">Cuttack Central Belt</span>
                </div>
              </div>

              <div className="space-y-2 text-[13.5px] text-slate-600 leading-relaxed pt-1">
                <p className="text-slate-900 font-semibold">Anand Sports</p>
                <p>Makarbagh Sahi, In front of Annapurna Theatre</p>
                <p>Buxi Bazaar, Cuttack, ODISHA — 751003</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://goo.gl/maps/dX9zxCZ6G5GS8b8G7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 hover:border-amber-400 font-caps uppercase tracking-wider text-[11.5px] transition-all font-medium"
                >
                  <span className="material-symbols-outlined text-[16px] text-amber-700">map</span>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-caps uppercase tracking-wider text-slate-500 block font-medium">Official Email</span>
                  <a href="mailto:yogesh@anandsportswholesale.com" className="font-mono text-[12px] sm:text-[13px] break-all text-slate-900 hover:text-amber-700 transition-colors font-medium">
                    yogesh@anandsportswholesale.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase text-slate-900">Business Hours</h3>
                </div>
                <span className="text-[10px] font-caps uppercase px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono font-semibold">
                  Open Mon–Sat
                </span>
              </div>

              <div className="space-y-2 pt-2">
                {businessHours.map((bh) => (
                  <div
                    key={bh.day}
                    className="flex items-center justify-between text-[12.5px] py-1 border-b border-slate-100 last:border-none"
                  >
                    <span className="text-slate-700 font-medium">{bh.day}</span>
                    <span className={bh.open ? 'font-mono text-slate-800' : 'font-mono text-rose-600 font-bold'}>
                      {bh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Sister Concerns Contact Footer Strip */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center shadow-sm">
          <div className="space-y-1">
            <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] font-semibold">Sister Concern Facilities</span>
            <h4 className="font-display font-bold text-lg uppercase text-slate-900">Cuttack &amp; Ranchi Depots</h4>
            <p className="text-[12.5px] text-slate-600">
              Anand Fitness (Buxi Bazaar, Cuttack) &bull; Anand Distribution (Ranchi, Jharkhand)
            </p>
          </div>
          <div className="flex sm:justify-end gap-3">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-caps uppercase text-[11.5px] tracking-wider transition-all shadow-sm font-medium"
            >
              About Sister Concerns
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}