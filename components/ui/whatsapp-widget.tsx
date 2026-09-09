'use client';

import React, { useState } from 'react';

const topics = [
  { label: 'B2B Wholesale Price List', text: 'Hi Anand Sports! I am a retailer looking for your wholesale price list.' },
  { label: 'Cricket & YONEX Stock Availability', text: 'Hi Anand Sports! I want to inquire about YONEX racket and Cricket equipment stock.' },
  { label: 'Institutional & School Supply', text: 'Hi Anand Sports! I need a quote for school/academy sports equipment supply.' },
  { label: 'New Retailer Partnership', text: 'Hi Anand Sports! I want to register as an authorized retail dealer in Odisha/Jharkhand.' },
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const phoneNumber = '918260229594';

  const handleOpenWhatsApp = () => {
    const encodedText = encodeURIComponent(selectedTopic.text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Quick Popup Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#090c10]/98 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4 animate-scale-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1.224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-bold text-[15px] uppercase text-white">Anand Sports B2B Desk</h4>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online for Retailers
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white text-[18px] p-1"
            >
              &times;
            </button>
          </div>

          {/* Quick Select Topic */}
          <div className="space-y-2">
            <span className="text-[11px] font-caps uppercase tracking-wider text-gold-light font-semibold">
              Select Requirement:
            </span>
            <div className="space-y-1.5">
              {topics.map((t) => {
                const selected = selectedTopic.label === t.label;
                return (
                  <button
                    key={t.label}
                    onClick={() => setSelectedTopic(t)}
                    className={`w-full text-left p-2.5 rounded-xl text-[12px] transition-all flex items-center justify-between ${
                      selected
                        ? 'bg-gold-accent/15 border border-gold-accent/40 text-gold-light font-semibold'
                        : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 border border-white/10'
                    }`}
                  >
                    <span>{t.label}</span>
                    {selected && <span className="material-symbols-outlined text-[14px]">check</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-caps uppercase tracking-wider text-[13px] shadow-[0_4px_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
            </svg>
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Floating Button Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-caps uppercase tracking-wider text-[13px] shadow-[0_6px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.6)] transition-all duration-300 transform active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black" />
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
        </svg>
        <span>Wholesale Chat</span>
      </button>
    </div>
  );
}