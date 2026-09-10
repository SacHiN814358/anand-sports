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
    <footer className="w-full bg-[#06080c] text-white pt-10 sm:pt-16 pb-8 sm:pb-10 border-t border-border-subtle">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-44 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Anand Sports Logo"
                  fill
                  className="object-contain object-left filter brightness-110"
                />
              </div>
              <span className="text-[10px] font-caps uppercase px-2 py-0.5 rounded bg-gold-accent/15 text-gold-light border border-gold-accent/30">
                Est. 1984
              </span>
            </div>
            <p className="text-[13px] text-on-surface-variant leading-relaxed font-light max-w-xs">
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
                className="p-3 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-white/60 hover:text-blue-400 transition-all"
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
                className="p-3 rounded-xl bg-white/[0.05] hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-white/60 hover:text-pink-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="#06080c"
                  />
                  <line stroke="#06080c" strokeWidth="2" x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-caps uppercase text-[13px] tracking-wider text-gold-light font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-light text-on-surface-variant">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-[14px] text-gold-accent/0 group-hover:text-gold-accent/60 transition-colors">
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
            <h4 className="font-caps uppercase text-[13px] tracking-wider text-gold-light font-semibold">
              Trust &amp; Compliance
            </h4>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-emerald-400">verified</span>
                <span className="text-[12px] text-on-surface-variant">100% Factory Authorised</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-gold-accent">receipt_long</span>
                <span className="text-[12px] text-on-surface-variant">GST Tax Invoice Compliant</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-2 text-[12px] text-on-surface-variant">
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