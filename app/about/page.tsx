import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Anand Sports',
  description: "Learn about Anand Sports' 40-year heritage, founding leadership, directors, and sister concerns.",
};

const stats = [
  { value: '40+', label: 'Years of Legacy' },
  { value: '15+', label: 'Top Brands' },
  { value: '1000+', label: 'Retail Partners' },
  { value: '3', label: 'Central Depots' },
];

const sisterConcerns = [
  {
    id: 1,
    name: 'Anand Fitness',
    location: 'Opposite GPO office, Buxi Bazaar, Cuttack',
    year: 'Founded in 2014',
    icon: 'fitness_center',
    desc: 'Premier fitness & gym equipment showroom in Cuttack',
  },
  {
    id: 2,
    name: 'Anand Distribution',
    location: 'Ranchi, Jharkhand',
    year: 'Founded in 2021',
    icon: 'local_shipping',
    desc: 'Central wholesale distribution hub for Jharkhand region',
  },
];

const brands = [
  'YONEX (Odisha)',
  'TECHNO (Odisha & Jharkhand)',
  'DIDA',
  'NIVIA',
  'COSCO',
  'STAR IMPACT',
  'ARYAN',
  'ASI',
  'SG Cricket',
  'Vicky',
  'Sega',
  'Select',
];

const testimonials = [
  {
    name: 'K Rahul',
    role: 'Retail Store Customer & Visitor',
    comment:
      'I bought a Aryan Skipping at their retail store and it was so good quality very long lasting. Recently I visited their godown and it was a so big and thay have a so much of brand\'s and I have a very good experience at hear. Anand sports is a biggest sports dealer of Odisha.',
    rating: 5,
  },
  {
    name: 'Avinash Nayak',
    role: 'Verified Customer',
    comment:
      'Anand Sports is a well known wholesaler and retailer of sports equipments and hosiery items in Odisha. Almost all indoor and outdoor sports items and gym equipments are available here under one roof.',
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Header */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-white/[0.04] via-surface-dim to-surface border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.08),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase tracking-widest text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            Est. 1984 &bull; Pioneer in Sports Distribution
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white">
            About Anand Sports
          </h1>
          <p className="text-on-surface-variant text-[15px] sm:text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
            India&apos;s best sports equipment and sportswear distributor. Serving 1000+ retailers across the East Zone for over 40 years.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border-subtle bg-white/[0.02]">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="font-display font-bold text-4xl md:text-5xl text-gold-accent">{s.value}</p>
              <p className="font-caps uppercase text-[12px] tracking-wider text-on-surface-variant mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Story + Founders Section */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center mb-24">
          
          {/* Main Heritage Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-caps text-gold-light uppercase tracking-widest text-[12px]">Our Foundation</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white">
              Welcome To Anand Sports!
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-[15px] font-light">
              <p className="text-white text-[17px] font-normal">
                A Legacy spanning over 40 years. India&apos;s Best Sports Equipment and Sportswear Distributor, recommended by Top Companies of the Business.
              </p>
              <p>
                We are Distributor of 15+ Top Brands, like{' '}
                <span className="text-gold-light font-medium">TECHNO (Distributor of ODISHA &amp; JHARKHAND)</span>,{' '}
                <span className="text-gold-light font-medium">YONEX (Distributor of ODISHA)</span>, DIDA, NIVIA, COSCO, STAR IMPACT, ARYAN, ASI &amp; Many more.
              </p>
              <p>
                Serving <span className="text-white font-medium">1000+ retailers</span> of East Zone of INDIA. Contact us for top Brands &amp; original sports goods.
              </p>
            </div>

            {/* Authorised Brand Pills */}
            <div className="pt-4 space-y-3">
              <h4 className="font-caps uppercase tracking-wider text-[12px] text-gold-light font-semibold">Authorised Distribution Lines</h4>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-border-medium text-white/90 font-caps uppercase text-[11px] tracking-wider"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founders Photo Card - object-top to prevent head crop */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/[0.03] to-transparent border border-white/20 hover:border-gold-accent/50 transition-all duration-500 shadow-2xl max-w-md w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  alt="Hemanti Agarwal & Anand Kumar Agarwal Founders"
                  src="https://anandsports.co.in/wp-content/uploads/2023/10/anand.jpg"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-gold-light font-caps uppercase text-[10px] tracking-widest font-medium">
                    Founders
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 space-y-1">
                  <h4 className="font-display font-bold text-[17px] uppercase text-white">
                    Hemanti Agarwal &amp; Anand Kumar Agarwal
                  </h4>
                  <p className="text-[12px] text-gold-light font-mono">Founders of Anand Sports</p>
                  <p className="text-[11.5px] text-on-surface-variant font-light">
                    Started a shop of sports goods at Buxi Bazar chhak, Cuttack in 1984.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Directors Messages Section (Yogesh Agarwal & Suraj Agarwal) */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-gold-light uppercase tracking-widest text-[12px]">Leadership Vision</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Director Statements
            </h2>
            <div className="w-16 h-0.5 bg-gold-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Director 1: Yogesh Agarwal - object-top to prevent head crop */}
            <div className="group rounded-3xl p-8 bg-white/[0.02] border border-border-subtle hover:border-gold-accent/40 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
              <div className="w-48 h-64 shrink-0 rounded-2xl overflow-hidden bg-black/60 border border-white/15 relative">
                <img
                  alt="Yogesh Agarwal Director"
                  src="https://anandsports.co.in/wp-content/uploads/2023/09/Untitled-design-71.png"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>

              <div className="space-y-4 flex-1">
                <span className="text-gold-accent text-4xl font-display leading-none block">&ldquo;</span>
                <p className="text-[14.5px] text-white font-medium italic leading-relaxed">
                  &ldquo;TODAY&apos;S INDIA NEEDS SOMETHING WHICH IS TRULY OUT OF BOUNDARIES, &quot;SPORTS&quot; IS THAT OPPORTUNITY, LET&apos;S TAKE IT TO EVERYONE AND EVERYWHERE&rdquo;
                </p>
                <div className="pt-2 border-t border-white/10">
                  <h4 className="font-display font-bold text-[18px] uppercase text-white tracking-wide">
                    YOGESH AGARWAL
                  </h4>
                  <span className="text-[12px] font-caps uppercase tracking-wider text-gold-light">
                    Director
                  </span>
                </div>
              </div>
            </div>

            {/* Director 2: Suraj Agarwal - object-top to prevent head crop */}
            <div className="group rounded-3xl p-8 bg-white/[0.02] border border-border-subtle hover:border-gold-accent/40 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
              <div className="w-48 h-64 shrink-0 rounded-2xl overflow-hidden bg-black/60 border border-white/15 relative">
                <img
                  alt="Suraj Agarwal Director"
                  src="https://anandsports.co.in/wp-content/uploads/2023/10/Untitled-design-99.png"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>

              <div className="space-y-4 flex-1">
                <span className="text-gold-accent text-4xl font-display leading-none block">&ldquo;</span>
                <p className="text-[14.5px] text-white font-medium italic leading-relaxed">
                  &ldquo;Welcome to the heart of sports passion! Dive into the excitement, embrace the challenges, and celebrate victories together. Let&apos;s make sporting history!&rdquo;
                </p>
                <div className="pt-2 border-t border-white/10">
                  <h4 className="font-display font-bold text-[18px] uppercase text-white tracking-wide">
                    SURAJ AGARWAL
                  </h4>
                  <span className="text-[12px] font-caps uppercase tracking-wider text-gold-light">
                    Director
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our Sister Concerns */}
        <div className="mb-24 p-10 rounded-3xl bg-white/[0.02] border border-border-subtle space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-gold-light uppercase tracking-widest text-[12px]">Expanding Reach</span>
            <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-white">Our Sister Concerns</h2>
            <div className="w-16 h-0.5 bg-gold-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sisterConcerns.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-white/[0.03] border border-border-subtle hover:border-gold-accent/40 transition-all flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center shrink-0 group-hover:bg-gold-accent/25 transition-colors">
                  <span className="material-symbols-outlined text-[28px] text-gold-light">{item.icon}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-[20px] uppercase text-white group-hover:text-gold-light transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono text-gold-light px-2.5 py-1 rounded bg-black/50 border border-white/10">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant font-light leading-relaxed">
                    {item.location}
                  </p>
                  <p className="text-[12px] text-slate-400 font-light italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-border-subtle flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center shrink-0">
              <img
                alt="Mission"
                src="https://anandsports.co.in/wp-content/uploads/2023/09/mission.png"
                className="w-10 h-10 object-contain brightness-0 invert opacity-90"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-display font-bold text-2xl uppercase text-white">Our Mission</h3>
              <p className="text-on-surface-variant text-[14px] font-light leading-relaxed">
                Our Mission is to cover all the very needs of our customers and to provide our service to all kinds of people. From old to younger, they can take benefit from our products. We want to customize our collection according to the world’s trends and customer requirements. To collaborate with all categories of sports equipment, Anand Sports is willing to serve millions.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-border-subtle flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center shrink-0">
              <img
                alt="Vision"
                src="https://anandsports.co.in/wp-content/uploads/2023/09/eye.png"
                className="w-10 h-10 object-contain brightness-0 invert opacity-90"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-display font-bold text-2xl uppercase text-white">Our Vision</h3>
              <p className="text-on-surface-variant text-[14px] font-light leading-relaxed">
                Our Vision is very wide, as we took up a long journey of 40 years. We are excited and confident about going forward in this fast-growing world. Our journey starts with the influential vision of becoming an Authorised wholesaler of top-brand sports equipment, and we have a strong mindset to develop sports enthusiasts as well as our business.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews from Original About Page */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-gold-light uppercase tracking-widest text-[12px]">Customer Testimonials</span>
            <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-white">What Our Customer Says</h2>
            <div className="w-16 h-0.5 bg-gold-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-border-subtle space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]">star</span>
                  ))}
                </div>
                <p className="text-[14px] text-white/85 italic leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="pt-2 flex items-center justify-between text-[12px]">
                  <span className="font-display font-bold uppercase text-gold-light">{t.name}</span>
                  <span className="text-on-surface-variant font-mono">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl border border-gold-accent/30 bg-gradient-to-r from-gold-accent/[0.05] via-amber-500/[0.08] to-gold-accent/[0.05]">
          <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-white mb-3">Partner With Us</h2>
          <p className="text-on-surface-variant text-base max-w-xl mx-auto font-light leading-relaxed mb-8">
            Are you a sports retailer, academy director, or institutional buyer? Connect with our wholesale desk today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold font-caps uppercase tracking-wider text-[13px] hover:from-amber-400 hover:to-gold-light transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Contact Wholesale Desk
            </Link>
            <Link
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border-medium hover:border-gold-accent/40 text-white font-caps uppercase tracking-wider text-[13px] transition-all bg-white/[0.04] hover:bg-white/[0.08]"
              href="/products"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}