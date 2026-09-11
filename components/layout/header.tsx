'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      {/* Slim Top Bar */}
      <div className="w-full bg-slate-900 border-b border-slate-800 text-[11px] text-slate-300 z-50 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="material-symbols-outlined text-[13px] text-amber-400">verified</span>
              Est. 1984 · East India Master Sports Distributor
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Consignments Active
            </span>
            <span className="text-slate-700">|</span>
            <a href="tel:+919437023456" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[12px] text-amber-400">call</span>
              +91 94370 23456
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 w-full">
        {/* Clean White backdrop */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md border-b border-[#E8E1D3] shadow-xs" />

        <div className="relative max-w-[1400px] mx-auto px-6 h-[64px] sm:h-[72px] flex items-center justify-between">

          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-11 w-40 sm:h-12 sm:w-48 md:w-56 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Anand Sports Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 rounded-xl font-display uppercase tracking-widest text-[12.5px] transition-all duration-200 whitespace-nowrap
                    ${active
                      ? 'text-slate-950 bg-amber-500/15 border border-amber-400/50 font-extrabold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-stone-100/80 font-bold'
                    }
                  `}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-display uppercase tracking-widest font-bold text-[11.5px] active:scale-95 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-[15px] transition-transform duration-200 group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-[#E8E1D3] text-slate-700 hover:bg-stone-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden relative bg-white border-t border-[#E8E1D3] shadow-xl px-4 sm:px-6 flex flex-col gap-1.5 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] py-5 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-display uppercase tracking-widest text-[13.5px] transition-all ${
                pathname === href
                  ? 'text-slate-950 bg-amber-500/15 border border-amber-400/50 font-extrabold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-stone-50 font-bold'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 font-display uppercase tracking-widest font-bold text-[12.5px] shadow-sm transition-all"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}