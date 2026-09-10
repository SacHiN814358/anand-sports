'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface QuickQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categoryLabel: string;
  brandName?: string;
}

export function QuickQuoteDrawer({
  isOpen,
  onClose,
  productName,
  categoryLabel,
  brandName = 'Anand Sports',
}: QuickQuoteDrawerProps) {
  const [cartonQty, setCartonQty] = useState('10');
  const [storeName, setStoreName] = useState('');

  const handleSendWhatsApp = () => {
    const text = `Hi Anand Sports! I am looking for B2B trade pricing for:
• Product: ${productName} (${categoryLabel})
• Brand: ${brandName}
• Estimated Quantity: ${cartonQty} Cartons
• Store Name: ${storeName || 'Retail Buyer'}

Please share your best wholesale price sheet and dispatch timeline.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918260229594?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="bottom" className="bg-[#090c10]/98 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl p-6 shadow-2xl text-left max-w-lg mx-auto">
        <SheetHeader className="pb-3 border-b border-white/10 text-left">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-gold-accent/15 border border-gold-accent/30 text-gold-light font-caps uppercase text-[10px] font-semibold">
              Instant B2B Trade Quotation
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Stock Active
            </span>
          </div>
          <SheetTitle className="font-display font-bold text-xl uppercase text-white tracking-wide pt-2">
            {productName}
          </SheetTitle>
          <p className="text-[12px] text-on-surface-variant font-light">
            Category: <span className="text-white">{categoryLabel}</span> • Brand: <span className="text-gold-light">{brandName}</span>
          </p>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[12px]">
            <div>
              <span className="text-on-surface-variant block text-[10px] font-caps uppercase">Carton Packing</span>
              <span className="font-mono text-white font-medium">Standard Factory Pack</span>
            </div>
            <div>
              <span className="text-on-surface-variant block text-[10px] font-caps uppercase">Dispatch Origin</span>
              <span className="font-mono text-emerald-400 font-medium">Cuttack / Ranchi Godowns</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-caps uppercase text-slate-300 tracking-wider">
              Target Carton Quantity
            </label>
            <select
              value={cartonQty}
              onChange={(e) => setCartonQty(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-[13px] outline-none focus:border-gold-accent"
            >
              <option value="5-10">5 – 10 Cartons (Starter Trade Order)</option>
              <option value="10-25">10 – 25 Cartons (Tier-1 Wholesale)</option>
              <option value="25-50">25 – 50 Cartons (Institutional Bulk)</option>
              <option value="50+">50+ Cartons (Master Distributor Rate)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-caps uppercase text-slate-300 tracking-wider">
              Store / Business Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Royal Sports Agency, Cuttack"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-gold-accent"
            />
          </div>

          <button
            onClick={handleSendWhatsApp}
            className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-caps uppercase tracking-wider text-[13.5px] shadow-[0_4px_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
            </svg>
            Request B2B Trade Rate on WhatsApp
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
