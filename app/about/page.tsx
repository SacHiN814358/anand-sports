import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    role: 'Retail & Wholesale Customer',
    image: '/images/testimonials/testimo-1.jpg',
    comment:
      'I bought a Aryan Skipping at their retail store and it was so good quality very long lasting. Recently I visited their godown and it was so big and they have so much of brands and I have a very good experience there. Anand sports is a biggest sports dealer of Odisha.',
    rating: 5,
  },
  {
    name: 'Avinash Nayak',
    role: 'Sports Equipment Buyer',
    image: '/images/testimonials/testimo-2.jpg',
    comment:
      'Anand Sports is a well known wholesaler and retailer of sports equipments and hosiery items in Odisha. Almost all indoor and outdoor sports items and gym equipments are available here under one roof.',
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface overflow-x-hidden w-full max-w-full">
      {/* Hero Header */}
      <section className="relative py-10 sm:py-14 px-4 text-center bg-[#F3EEE5] border-b border-[#E8E1D3] overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-2.5 px-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-caps uppercase tracking-widest text-[10px] sm:text-[10.5px] max-w-full font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            <span className="truncate sm:whitespace-normal">Est. 1984 &bull; Pioneer in Sports Distribution</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-slate-900 leading-tight">
            About Anand Sports
          </h1>
          <p className="text-slate-600 text-[13px] sm:text-[14.5px] leading-relaxed max-w-lg mx-auto">
            India&apos;s best sports equipment and sportswear distributor. Serving 1000+ retailers across the East Zone for over 40 years.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-[#E8E1D3] bg-[#FAF7F2]">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value} className="p-2">
              <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-amber-600">{s.value}</p>
              <p className="font-caps uppercase text-[10.5px] sm:text-[11.5px] tracking-wider text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Story + Founders Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24">
          
          {/* Main Heritage Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] sm:text-[12px] font-semibold">Our Foundation</span>
            <h2 className="font-display font-bold text-2xl sm:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              Welcome To Anand Sports!
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-[14px] sm:text-[15px]">
              <p className="text-slate-900 text-[16px] sm:text-[17px] font-normal leading-relaxed">
                A Legacy spanning over 40 years. India&apos;s Best Sports Equipment and Sportswear Distributor, recommended by Top Companies of the Business.
              </p>
              <p>
                We are Distributor of 15+ Top Brands, like{' '}
                <span className="text-amber-800 font-semibold">TECHNO (Distributor of ODISHA &amp; JHARKHAND)</span>,{' '}
                <span className="text-amber-800 font-semibold">YONEX (Distributor of ODISHA)</span>, DIDA, NIVIA, COSCO, STAR IMPACT, ARYAN, ASI &amp; Many more.
              </p>
              <p>
                Serving <span className="text-slate-900 font-semibold">1000+ retailers</span> of East Zone of INDIA. Contact us for top Brands &amp; original sports goods.
              </p>
            </div>

            {/* Authorised Brand Pills */}
            <div className="pt-2 space-y-3">
              <h4 className="font-caps uppercase tracking-wider text-[11px] sm:text-[12px] text-slate-700 font-semibold">Authorised Distribution Lines</h4>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-caps uppercase text-[10px] sm:text-[11px] tracking-wider font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founders Photo Card - object-top to prevent head crop */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative group rounded-3xl p-2.5 sm:p-3 bg-white border border-slate-200 hover:border-amber-400 transition-all duration-500 shadow-xl max-w-md w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  alt="Hemanti Agarwal & Anand Kumar Agarwal Founders"
                  src="https://anandsports.co.in/wp-content/uploads/2023/10/anand.jpg"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />
                
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-300 font-caps uppercase text-[9px] sm:text-[10px] tracking-widest font-semibold">
                    Founders
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 space-y-1">
                  <h4 className="font-display font-bold text-[15px] sm:text-[17px] uppercase text-white leading-tight">
                    Hemanti Agarwal &amp; Anand Kumar Agarwal
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-amber-300 font-mono">Founders of Anand Sports</p>
                  <p className="text-[10.5px] sm:text-[11.5px] text-slate-300 font-light leading-snug">
                    Started a shop of sports goods at Buxi Bazar chhak, Cuttack in 1984.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Directors Messages Section (Yogesh Agarwal & Suraj Agarwal) */}
        <div className="mb-16 sm:mb-24 space-y-6 sm:space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] sm:text-[12px] font-semibold">Leadership Vision</span>
            <h2 className="font-display font-bold text-xl sm:text-4xl uppercase tracking-tight text-slate-900 break-words">
              Director Statements
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            
            {/* Director 1: Yogesh Agarwal - Mobile Responsive Stack */}
            <div className="group rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 shadow-sm relative overflow-hidden min-w-0">
              <div className="w-full sm:w-44 h-52 sm:h-60 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                <img
                  alt="Yogesh Agarwal Director"
                  src="https://anandsports.co.in/wp-content/uploads/2023/09/Untitled-design-71.png"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-3 flex-1 text-left min-w-0 w-full">
                <span className="text-amber-500 text-3xl sm:text-4xl font-display leading-none block">&ldquo;</span>
                <p className="text-[13px] sm:text-[14.5px] text-slate-700 font-medium italic leading-relaxed break-words">
                  &ldquo;TODAY&apos;S INDIA NEEDS SOMETHING WHICH IS TRULY OUT OF BOUNDARIES, &quot;SPORTS&quot; IS THAT OPPORTUNITY, LET&apos;S TAKE IT TO EVERYONE AND EVERYWHERE&rdquo;
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-display font-bold text-[15px] sm:text-[18px] uppercase text-slate-900 tracking-wide break-words">
                    YOGESH AGARWAL
                  </h4>
                  <span className="text-[11px] sm:text-[12px] font-caps uppercase tracking-wider text-amber-700 font-semibold">
                    Director
                  </span>
                </div>
              </div>
            </div>

            {/* Director 2: Suraj Agarwal - Mobile Responsive Stack */}
            <div className="group rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 shadow-sm relative overflow-hidden min-w-0">
              <div className="w-full sm:w-44 h-52 sm:h-60 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                <img
                  alt="Suraj Agarwal Director"
                  src="https://anandsports.co.in/wp-content/uploads/2023/10/Untitled-design-99.png"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-3 flex-1 text-left min-w-0 w-full">
                <span className="text-amber-500 text-3xl sm:text-4xl font-display leading-none block">&ldquo;</span>
                <p className="text-[13px] sm:text-[14.5px] text-slate-700 font-medium italic leading-relaxed break-words">
                  &ldquo;Welcome to the heart of sports passion! Dive into the excitement, embrace the challenges, and celebrate victories together. Let&apos;s make sporting history!&rdquo;
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-display font-bold text-[15px] sm:text-[18px] uppercase text-slate-900 tracking-wide break-words">
                    SURAJ AGARWAL
                  </h4>
                  <span className="text-[11px] sm:text-[12px] font-caps uppercase tracking-wider text-amber-700 font-semibold">
                    Director
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Our Sister Concerns */}
        <div className="mb-16 sm:mb-24 p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#F3EEE5] border border-[#E8E1D3] space-y-6 sm:space-y-8 overflow-hidden shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] sm:text-[12px] font-semibold">Expanding Reach</span>
            <h2 className="font-display font-bold text-xl sm:text-3xl uppercase tracking-tight text-slate-900">Our Sister Concerns</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {sisterConcerns.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E8E1D3] hover:border-amber-400 hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-3.5 sm:gap-5 group min-w-0 overflow-hidden shadow-sm"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px] text-amber-700">{item.icon}</span>
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-1.5">
                    <h3 className="font-display font-bold text-[16px] sm:text-[19px] uppercase text-slate-900 group-hover:text-amber-600 transition-colors break-words">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono text-amber-800 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 shrink-0 font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed break-words">
                    {item.location}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 italic break-words">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-24">
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 shadow-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <img
                alt="Mission"
                src="https://anandsports.co.in/wp-content/uploads/2023/09/mission.png"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-80"
              />
            </div>
            <div className="space-y-2.5">
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed">
                Our Mission is to cover all the very needs of our customers and to provide our service to all kinds of people. From old to younger, they can take benefit from our products. We want to customize our collection according to the world’s trends and customer requirements. To collaborate with all categories of sports equipment, Anand Sports is willing to serve millions.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 shadow-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <img
                alt="Vision"
                src="https://anandsports.co.in/wp-content/uploads/2023/09/eye.png"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-80"
              />
            </div>
            <div className="space-y-2.5">
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed">
                Our Vision is very wide, as we took up a long journey of 40 years. We are excited and confident about going forward in this fast-growing world. Our journey starts with the influential vision of becoming an Authorised wholesaler of top-brand sports equipment, and we have a strong mindset to develop sports enthusiasts as well as our business.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews from Original About Page */}
        <div className="mb-16 sm:mb-20 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-caps text-amber-700 uppercase tracking-widest text-[11px] sm:text-[12px] font-semibold">Customer Testimonials</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-slate-900">What Our Customer Says</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] sm:text-[20px]">star</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-caps tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    VERIFIED BUYER
                  </span>
                </div>
                
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 italic leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-300 shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-display font-bold uppercase text-slate-900 text-[13px] sm:text-[14px] block">{t.name}</span>
                    <span className="text-slate-500 text-[11px] block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-6 sm:p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-slate-900 mb-3">Partner With Us</h2>
          <p className="text-slate-600 text-[13.5px] sm:text-base max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Are you a sports retailer, academy director, or institutional buyer? Connect with our wholesale desk today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <Link
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold font-caps uppercase tracking-wider text-[12px] sm:text-[13px] hover:from-amber-600 hover:to-amber-700 transition-all shadow-md w-full sm:w-auto"
              href="/contact"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Contact Wholesale Desk
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-slate-900 font-caps uppercase tracking-wider text-[12px] sm:text-[13px] transition-all bg-white hover:bg-slate-100 w-full sm:w-auto shadow-sm"
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