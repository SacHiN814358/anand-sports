'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery & Events', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white pt-10 sm:pt-16 pb-8 sm:pb-10 border-t border-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-44 overflow-hidden bg-white/10 rounded-lg p-1">
                <Image
                  src="/images/logo.png"
                  alt="Anand Sports Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] font-caps uppercase px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold">
                Est. 1984
              </span>
            </div>
            <p className="text-[13px] text-slate-300 leading-relaxed font-normal max-w-xs">
              India&apos;s trusted sports equipment &amp; sportswear distributor. Serving 1000+ retailers
              across East India with 15+ top brands.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/profile.php?id=100091375285173"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 transition-all shadow-xs"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/anandsports_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-xl bg-slate-800 hover:bg-pink-600/30 border border-slate-700 hover:border-pink-500 text-slate-300 hover:text-pink-400 transition-all shadow-xs"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="#0f172a"
                  />
                  <line stroke="#0f172a" strokeWidth="2" x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-caps uppercase text-[13px] tracking-wider text-amber-400 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-medium text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-[14px] text-amber-400/40 group-hover:text-amber-400 transition-colors">
                      chevron_right
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-4">
            <h4 className="font-caps uppercase text-[13px] tracking-wider text-amber-400 font-bold">
              Trust &amp; Compliance
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-amber-400">verified</span>
                <span className="text-[12px] text-slate-200 font-medium">100% Factory Authorised</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-amber-400">receipt_long</span>
                <span className="text-[12px] text-slate-200 font-medium">GST Tax Invoice Compliant</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-2 text-[12px] text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row text-center sm:text-left items-center justify-between gap-3 text-[12px] font-light text-slate-500">
          <p>&copy; {new Date().getFullYear()} Anand Sports. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-600">Made with &#9829; for sport lovers</p>
        </div>
      </div>
    </footer>
  );
}