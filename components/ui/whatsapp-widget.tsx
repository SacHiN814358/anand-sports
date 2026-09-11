'use client';

import React from 'react';

export function WhatsAppWidget() {
  const phoneNumber = '918260229594';
  const message = encodeURIComponent('Hi Anand Sports! I want to inquire about sports equipment.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Anand Sports"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Clean Online Status Dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1.224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
        </svg>

        {/* Floating Tooltip (Hover) */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-[12px] font-sans font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}