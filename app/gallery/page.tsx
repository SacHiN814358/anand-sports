'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PhotoItem {
  id: number;
  title: string;
  albumId: string;
  albumName: string;
  image: string;
  caption: string;
  location: string;
  date: string;
}

const originalPhotos: PhotoItem[] = [
  // Album 1: Independence Day 2023
  {
    id: 1,
    title: 'Felicitation & Gift Presentation',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230823-WA0002.jpg',
    caption: 'Felicitation ceremony and gift distribution during 77th Independence Day celebration',
    location: 'Anand Sports Wholesale Store',
    date: '15th August 2023',
  },
  {
    id: 2,
    title: 'Flag Hoisting Ceremony',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230815-WA0009.jpg',
    caption: 'Tricolor flag hoisting ceremony at Anand Sports wholesale store premises',
    location: 'Anand Sports Store Entrance',
    date: '15th August 2023',
  },
  {
    id: 3,
    title: 'Store Team & Floral Decoration',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230815-WA0010.jpg',
    caption: 'Entire Anand Sports store team and staff gathered at the entrance',
    location: 'Anand Sports Wholesale Store',
    date: '15th August 2023',
  },
  {
    id: 4,
    title: 'I Love My India Celebration',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230815-WA0017.jpg',
    caption: 'Special flower rangoli decoration "I Love My India 77th" in store courtyard',
    location: 'Anand Sports Courtyard',
    date: '15th August 2023',
  },
  {
    id: 5,
    title: 'Female Staff & Associates Gathering',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230823-WA0006.jpg',
    caption: 'Anand Sports team members in white traditional attire celebrating Independence Day',
    location: 'Anand Sports Store Front',
    date: '15th August 2023',
  },
  {
    id: 6,
    title: 'Indoor Hall Meeting & Staff Assembly',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230815-WA0020.jpg',
    caption: 'Annual team meeting and celebration address inside Anand Sports store hall',
    location: 'Anand Sports Main Hall',
    date: '15th August 2023',
  },
  {
    id: 7,
    title: 'Store Executive Hall Gathering',
    albumId: 'independence-2023',
    albumName: '77th Independence Day 2023',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/IMG-20230815-WA0023.jpg',
    caption: 'Executive team members and retail partners assembled in decorated hall',
    location: 'Anand Sports Main Hall',
    date: '15th August 2023',
  },

  // Album 2: DIDA Meetup 2023 Chilika
  {
    id: 8,
    title: 'Anand Sports & DIDA Meet 2023 Stage',
    albumId: 'dida-chilika-2023',
    albumName: 'DIDA Meetup 2023 (Chilika)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/09/CTS_9578.jpg',
    caption: 'Inaugural address and sportswear catalog launch at Swosti Chilika Resort',
    location: 'Swosti Chilika Resort, Chilika',
    date: 'September 2023',
  },
  {
    id: 9,
    title: 'Retail Partner Honor & Felicitation',
    albumId: 'dida-chilika-2023',
    albumName: 'DIDA Meetup 2023 (Chilika)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/09/CTS_9565.jpg',
    caption: 'Honoring top wholesale dealers and retail partners of Odisha & Jharkhand',
    location: 'Swosti Chilika Resort',
    date: 'September 2023',
  },
  {
    id: 10,
    title: 'Partner Business Conference Hall',
    albumId: 'dida-chilika-2023',
    albumName: 'DIDA Meetup 2023 (Chilika)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/09/CTS_9543.jpg',
    caption: 'Full house of 200+ sports equipment dealers at Swosti Chilika Resort hall',
    location: 'Swosti Chilika Convention Center',
    date: 'September 2023',
  },
  {
    id: 11,
    title: 'Anand Sports Executive Delegation',
    albumId: 'dida-chilika-2023',
    albumName: 'DIDA Meetup 2023 (Chilika)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/09/CTS_9575.jpg',
    caption: 'Anand Sports management team & DIDA brand directors',
    location: 'Swosti Chilika Resort',
    date: 'September 2023',
  },
  {
    id: 12,
    title: 'Sportswear New Range Showcase',
    albumId: 'dida-chilika-2023',
    albumName: 'DIDA Meetup 2023 (Chilika)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/09/CTS_9585.jpg',
    caption: 'DIDA apparel and tracksuits product display for upcoming season',
    location: 'Swosti Chilika Resort',
    date: 'September 2023',
  },

  // Album 3: DIDA Meetup 2018-19 Puri
  {
    id: 13,
    title: 'Puri Beach Resort Dealer Convention',
    albumId: 'dida-puri-2018',
    albumName: 'DIDA Meetup 2018-19 (Puri)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/CTS_9579-copy.jpg',
    caption: 'Annual partner meetup and strategic roadmap presentation at Puri',
    location: 'Puri Beach Resort, Puri',
    date: '2018 - 2019',
  },
  {
    id: 14,
    title: 'Wholesale Partner Recognition Ceremony',
    albumId: 'dida-puri-2018',
    albumName: 'DIDA Meetup 2018-19 (Puri)',
    image: 'https://anandsports.co.in/wp-content/uploads/2023/08/CTS_9583-copy.jpg',
    caption: 'Awarding top performing sports retailers of Odisha',
    location: 'Puri Beach Resort, Puri',
    date: '2018 - 2019',
  },

  // Album 4: Depots & Showrooms
  {
    id: 15,
    title: 'Bhubaneswar Central Store & Hub',
    albumId: 'showrooms',
    albumName: 'Showrooms & Depots',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    caption: 'Bhubaneswar retail & wholesale central depot',
    location: 'Bhubaneswar Master Canteen Sq.',
    date: 'Est. 1984',
  },
  {
    id: 16,
    title: 'Yonex & Cricket Gear Displays',
    albumId: 'showrooms',
    albumName: 'Showrooms & Depots',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    caption: 'Authorized Yonex & Techno sports equipment counters',
    location: 'Cuttack Trade Belt Depot',
    date: 'Active Stock',
  },
];

const albums = [
  { id: 'all', label: 'All Photos', count: originalPhotos.length },
  {
    id: 'independence-2023',
    label: '77th Independence Day 2023',
    count: originalPhotos.filter((p) => p.albumId === 'independence-2023').length,
  },
  {
    id: 'dida-chilika-2023',
    label: 'DIDA Meetup 2023 (Chilika)',
    count: originalPhotos.filter((p) => p.albumId === 'dida-chilika-2023').length,
  },
  {
    id: 'dida-puri-2018',
    label: 'DIDA Meetup 2018-19 (Puri)',
    count: originalPhotos.filter((p) => p.albumId === 'dida-puri-2018').length,
  },
  {
    id: 'showrooms',
    label: 'Showrooms & Depots',
    count: originalPhotos.filter((p) => p.albumId === 'showrooms').length,
  },
];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayedPhotos =
    activeAlbum === 'all'
      ? originalPhotos
      : originalPhotos.filter((item) => item.albumId === activeAlbum);

  const currentPhoto = lightboxIndex !== null ? displayedPhotos[lightboxIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header Banner */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-white/[0.04] via-surface-dim to-surface border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.08),transparent)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-light font-caps uppercase tracking-widest text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            Original Gallery &amp; Event Archive &bull; Est. 1984
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white">
            Photo Gallery &amp; Events
          </h1>

          <p className="text-on-surface-variant text-[15px] sm:text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
            Original event photos, dealer meetups, and store celebrations from Anand Sports.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="max-w-[1360px] mx-auto px-4 md:px-8 py-14">
        {/* Album Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {albums.map((tab) => {
            const active = activeAlbum === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAlbum(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-caps uppercase tracking-wider text-[12px] font-medium transition-all duration-200 flex items-center gap-2 ${
                  active
                    ? 'bg-gradient-to-r from-gold-accent to-amber-500 text-black shadow-[0_4px_16px_rgba(245,158,11,0.3)] font-bold'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border border-border-medium'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    active ? 'bg-black/30 text-black font-bold' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Organized Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl bg-white/[0.02] border border-border-subtle hover:border-gold-accent/50 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
            >
              {/* Aspect Ratio Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  alt={item.title}
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-gold-light font-caps uppercase text-[10px] tracking-wider font-medium">
                    {item.albumName}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold-accent text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">zoom_in</span>
                  </div>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 flex flex-col space-y-2 flex-1 justify-between">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-[17px] text-white uppercase group-hover:text-gold-light transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-on-surface-variant font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-gold-light">location_on</span>
                    {item.location}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-gold-accent/30 text-center space-y-4">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-white">
            Have Questions About Wholesale Supplies or Official Events?
          </h2>
          <p className="text-on-surface-variant text-[14px] font-light max-w-xl mx-auto">
            Get in touch with Anand Sports central desk for B2B price lists, authorization certificates, and dealer meets.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold font-caps uppercase tracking-wider text-[13px] hover:from-amber-400 hover:to-gold-light transition-all shadow-[0_4px_16px_rgba(245,158,11,0.25)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Contact Wholesale Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Prev/Next Navigation */}
      {currentPhoto && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer select-none animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#090c10] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-black max-h-[70vh] flex items-center justify-center">
              <img
                alt={currentPhoto.title}
                src={currentPhoto.image}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-surface-container-low flex flex-col space-y-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-gold-accent/15 border border-gold-accent/30 text-gold-light font-caps uppercase text-[11px] font-medium">
                  {currentPhoto.albumName}
                </span>
                <span className="text-[12px] font-mono text-slate-400">
                  {lightboxIndex! + 1} / {displayedPhotos.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-[22px] text-white uppercase">
                {currentPhoto.title}
              </h3>
              <p className="text-[14px] text-on-surface-variant font-light">
                {currentPhoto.caption}
              </p>
              <div className="flex items-center gap-4 text-[12px] font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-gold-light">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  {currentPhoto.location}
                </span>
                <span>•</span>
                <span>{currentPhoto.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}