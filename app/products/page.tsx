'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProductCategoryItem {
  id: string;
  title: string;
  category: 'cricket' | 'badminton' | 'football' | 'ballgames' | 'racket' | 'athletics' | 'agility' | 'supports' | 'games' | 'education';
  categoryLabel: string;
  brands: string[];
  image: string;
  description: string;
  items: string[];
  badge: string;
}

const wholesaleProducts: ProductCategoryItem[] = [
  {
    id: 'badminton',
    title: 'Badminton Equipment & Rackets',
    category: 'badminton',
    categoryLabel: 'Badminton',
    brands: ['YONEX', 'TECHNO', 'COSCO'],
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    description: 'Official YONEX graphite & aluminum rackets, nylon & feather shuttles, court nets, grip tapes, and non-marking court shoes.',
    items: ['Graphite Rackets', 'Feather Shuttles', 'Court Nets', 'Non-Marking Shoes', 'Grip Tapes'],
    badge: 'YONEX Authorised',
  },
  {
    id: 'cricket',
    title: 'Cricket Equipment & Gear',
    category: 'cricket',
    categoryLabel: 'Cricket Products',
    brands: ['SG', 'TECHNO', 'SS', 'VICKY'],
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    description: 'English willow & Kashmir willow bats, 4-piece leather match balls, batting gloves, leg guards, helmets, and full team kit bags.',
    items: ['English Willow Bats', 'Leather Match Balls', 'Batting Gloves', 'Protective Helmets', 'Kit Bags'],
    badge: '100% Factory Direct',
  },
  {
    id: 'football',
    title: 'Football & Turf Gear',
    category: 'football',
    categoryLabel: 'Football',
    brands: ['NIVIA', 'COSCO', 'STAR IMPACT'],
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
    description: 'FIFA-approved match footballs, synthetic turf balls, goalkeeper gloves, shin guards, and heavy-duty goal post nets.',
    items: ['Match Footballs', 'Turf Balls', 'Goalkeeper Gloves', 'Shin Guards', 'Goal Nets'],
    badge: 'FIFA Approved Lines',
  },
  {
    id: 'basketball',
    title: 'Basketball Equipment',
    category: 'ballgames',
    categoryLabel: 'Basketball',
    brands: ['COSCO', 'NIVIA', 'SPALDING'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    description: 'Official size 7 & size 6 rubber and composite leather basketballs, heavy-duty basketball hoops, and nylon net replacements.',
    items: ['Size 7 Leather Balls', 'Size 6 Rubber Balls', 'Heavy Hoops', 'Nylon Nets'],
    badge: 'Tournament Approved',
  },
  {
    id: 'volleyball',
    title: 'Volleyball & Net Sets',
    category: 'ballgames',
    categoryLabel: 'Volley Ball',
    brands: ['COSCO', 'NIVIA'],
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
    description: 'Super-soft synthetic leather match volleyballs, official height tournament nets, antenna sets, and kneepads.',
    items: ['Match Volleyballs', 'Tournament Nets', 'Antenna Sets', 'Protective Kneepads'],
    badge: 'VFI Compliant',
  },
  {
    id: 'table-tennis',
    title: 'Table Tennis Rackets & Balls',
    category: 'racket',
    categoryLabel: 'Table Tennis',
    brands: ['STIGA', 'STAG', 'COSCO'],
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800&q=80',
    description: 'ITTF-approved 3-star TT balls, beginner to professional TT paddles, post & net sets, and TT table covers.',
    items: ['3-Star TT Balls', 'Pro TT Paddles', 'Post & Net Sets', 'Table Covers'],
    badge: 'ITTF Approved',
  },
  {
    id: 'athletics',
    title: 'Track & Field Athletics Gear',
    category: 'athletics',
    categoryLabel: 'Athletic Product',
    brands: ['ASI', 'TECHNO', 'NIVIA'],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    description: 'Track running spikes, shot put brass & iron balls, rubber discus, aluminum relay batons, and javelin equipment.',
    items: ['Track Spikes', 'Shot Put Balls', 'Discus Weights', 'Relay Batons', 'Javelins'],
    badge: 'State Meet Line',
  },
  {
    id: 'agility',
    title: 'Cones, Hurdles & Agility Gear',
    category: 'agility',
    categoryLabel: 'Cones, Hurdle & Agility',
    brands: ['TECHNO', 'ARYAN'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=800&q=80',
    description: 'Flexible saucer cones, space markers, adjustable speed hurdles, agility ladders, and field marker poles for academies.',
    items: ['Saucer Cones', 'Space Markers', 'Speed Hurdles', 'Agility Ladders', 'Marker Poles'],
    badge: 'Academy Essential',
  },
  {
    id: 'sports-supports',
    title: 'Sports Supports & Guards',
    category: 'supports',
    categoryLabel: 'Sports Supports',
    brands: ['DIDA', 'NIVIA', 'ARYAN'],
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80',
    description: 'Elastic knee supports, ankle binders, wrist wraps, waist trimmers, elbow sleeves, and kinesiology athletic tapes.',
    items: ['Knee Supports', 'Ankle Binders', 'Wrist Wraps', 'Waist Trimmers', 'Elbow Sleeves'],
    badge: 'Medical & Rehab Grade',
  },
  {
    id: 'primary-education',
    title: 'Primary Education & School Kits',
    category: 'education',
    categoryLabel: 'Primary Education',
    brands: ['COSCO', 'TECHNO'],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    description: 'School physical education kits, soft foam balls, hula hoops, skipping ropes, bean bags, and playground sports equipment.',
    items: ['PE School Kits', 'Soft Foam Balls', 'Hula Hoops', 'Skipping Ropes', 'Bean Bags'],
    badge: 'Institutional Pack',
  },
  {
    id: 'board-games',
    title: 'Carrom & Board Games',
    category: 'games',
    categoryLabel: 'Board Games',
    brands: ['SYNCO', 'COSCO'],
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80',
    description: 'Competition carrom boards, champion carrom men coins, boric powder, magnetic wooden chess sets, and Ludo boards.',
    items: ['Carrom Boards', 'Carrom Coins & Striker', 'Wooden Chess Sets', 'Ludo Boards'],
    badge: 'Tournament Carrom',
  },
  {
    id: 'indoor-games',
    title: 'Indoor & Recreation Games',
    category: 'games',
    categoryLabel: 'Indoor Games',
    brands: ['COSCO', 'TECHNO'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    description: 'Professional brass dartboards, steel tip dart sets, foosball accessories, and indoor recreational game equipment.',
    items: ['Professional Dartboards', 'Steel Tip Darts', 'Indoor Table Games', 'Recreation Sets'],
    badge: 'Recreation Line',
  },
];

const categoryTabs = [
  { id: 'all', label: 'All Catalog' },
  { id: 'cricket', label: 'Cricket' },
  { id: 'badminton', label: 'Badminton' },
  { id: 'football', label: 'Football' },
  { id: 'ballgames', label: 'Basketball & Volleyball' },
  { id: 'racket', label: 'Table Tennis' },
  { id: 'athletics', label: 'Athletics' },
  { id: 'agility', label: 'Cones & Agility' },
  { id: 'supports', label: 'Sports Supports' },
  { id: 'education', label: 'Primary Education' },
  { id: 'games', label: 'Board & Indoor Games' },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts =
    activeTab === 'all'
      ? wholesaleProducts
      : wholesaleProducts.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Banner */}
      <section className="relative py-14 sm:py-20 px-4 text-center bg-gradient-to-b from-white/[0.04] via-surface-dim to-surface border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.08),transparent)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase tracking-widest text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            Wholesale Catalog &bull; 15+ Top Brands
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white">
            Sports Collection
          </h1>

          <p className="text-on-surface-variant text-[15px] sm:text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
            Authorized B2B &amp; institutional supply lines for YONEX, TECHNO, NIVIA, COSCO, SG, DIDA, ARYAN &amp; ASI. Direct factory rates for retailers.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-12">
        {/* Category Filter Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide pb-2 lg:flex-wrap lg:overflow-visible lg:pb-0">
            {categoryTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 whitespace-nowrap shrink-0 rounded-xl font-caps uppercase tracking-wider text-[12px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold shadow-[0_4px_14px_rgba(245,158,11,0.3)]'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border border-border-medium'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 border-b border-white/[0.07]">
          <span className="text-[13px] font-mono text-slate-400">
            Showing {filteredProducts.length} Wholesale Categories
          </span>
          <span className="text-[11px] font-caps uppercase text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Direct Factory Stock Active
          </span>
        </div>

        {/* Product Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-gold-accent/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg"
            >
              {/* Top Showcase Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  alt={item.title}
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-gold-light font-caps uppercase text-[10px] tracking-wider font-medium">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-6 flex flex-col space-y-4 flex-1 justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-caps uppercase tracking-widest text-gold-light px-2 py-0.5 rounded bg-gold-accent/10 border border-gold-accent/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[17px] sm:text-[20px] uppercase text-white group-hover:text-gold-light transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-on-surface-variant font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Included Items */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {item.items.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[10.5px] font-mono text-slate-300 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Authorised Brand Badges & Inquire Button */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.brands.map((b) => (
                      <span
                        key={b}
                        className="text-[9.5px] font-caps uppercase tracking-wider text-gold-light font-semibold px-1.5 py-0.5 rounded bg-gold-accent/10"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-400 hover:to-gold-light text-black font-bold font-caps uppercase text-[11px] tracking-wider transition-all shadow-[0_2px_10px_rgba(245,158,11,0.2)]"
                  >
                    <span>Inquire</span>
                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trade Inquiry Callout */}
        <div className="mt-14 p-6 sm:mt-20 sm:p-10 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-gold-accent/30 text-center space-y-4">
          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-white">
            Need Tiered Wholesale Price List or Bulk Quotation?
          </h2>
          <p className="text-on-surface-variant text-[14px] font-light max-w-xl mx-auto">
            Contact our central B2B wholesale desk in Cuttack &amp; Bhubaneswar for carton rates, institutional tender supply, and brand authorization.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold font-caps uppercase tracking-wider text-[13px] hover:from-amber-400 hover:to-gold-light transition-all shadow-[0_4px_16px_rgba(245,158,11,0.25)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Request B2B Trade Price Sheet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}