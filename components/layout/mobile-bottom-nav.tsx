'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      label: 'Products',
      href: '/products',
      icon: 'grid_view',
    },
    {
      label: 'Call Sales',
      href: 'tel:+918260229594',
      icon: 'call',
      external: true,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/918260229594?text=Hi%20Anand%20Sports!%20I%20want%20to%20inquire%20about%20wholesale%20products.',
      icon: 'chat',
      external: true,
      highlight: true,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#06080d]/95 backdrop-blur-2xl border-t border-white/10 px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = !item.external && pathname === item.href;

          const content = (
            <div
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-gold-light font-bold'
                  : item.highlight
                  ? 'text-emerald-400 font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] mb-0.5 ${
                  isActive ? 'text-gold-accent' : item.highlight ? 'text-emerald-400' : 'text-white/60'
                }`}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-caps uppercase tracking-wider leading-none">
                {item.label}
              </span>
            </div>
          );

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
