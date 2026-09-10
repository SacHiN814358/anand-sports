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
      <div className="w-full bg-[#04060a] border-b border-white/[0.06] text-[11px] text-white/50 z-50 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-light/80">
              <span className="w-1 h-1 rounded-full bg-gold-accent animate-pulse inline-block" />
              Est. 1984 · East India Master Distributor
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400/70">
              <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
              Consignments Active
            </span>
            <span className="text-white/20">|</span>
            <a href="tel:+919437023456" className="hover:text-gold-light transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[12px] text-gold-accent">call</span>
              +91 94370 23456
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 w-full">
        {/* Glass backdrop */}
        <div className="absolute inset-0 bg-[#090c10]/90 backdrop-blur-2xl border-b border-white/[0.07]" />

        <div className="relative max-w-[1400px] mx-auto px-6 h-[60px] sm:h-[68px] flex items-center justify-between">

          {/* Official Brand Logo — Transparent */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-10 w-36 sm:h-12 sm:w-48 md:w-56 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Anand Sports Logo"
                fill
                priority
                className="object-contain object-left filter brightness-110 drop-shadow-[0_2px_12px_rgba(245,158,11,0.2)]"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap
                    ${active
                      ? 'text-white bg-white/[0.08]'
                      : 'text-white/55 hover:text-white hover:bg-white/[0.05]'
                    }
                  `}
                >
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gold-accent rounded-full" />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold text-[13px] tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_16px_rgba(245,158,11,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden relative bg-[#090c10]/98 backdrop-blur-2xl border-t border-white/[0.07] px-4 sm:px-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-[15px] font-medium tracking-wide transition-all ${
                pathname === href ? 'text-gold-light bg-gold-accent/10' : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.07]">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-accent to-amber-500 text-black font-bold text-[14px] tracking-wide"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Get in Touch
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}