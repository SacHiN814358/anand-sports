'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Phone } from 'lucide-react';

interface QuickQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categoryLabel: string;
  brandName?: string;
  productImage?: string;
}

export function QuickQuoteDrawer({
  isOpen,
  onClose,
  productName,
  categoryLabel,
  brandName = 'Anand Sports',
  productImage,
}: QuickQuoteDrawerProps) {
  const phoneNumber = '+91 8260229594';
  const cleanPhone = '918260229594';

  const handleWhatsApp = () => {
    const text = `Hi Anand Sports! I am inquiring about wholesale B2B pricing for:
• Product: ${productName}
• Category: ${categoryLabel}
• Brand: ${brandName}

Please share the latest wholesale catalog, tiered carton rates, and dispatch timelines.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="bg-white rounded-t-2xl sm:rounded-2xl border border-[#E8E1D3] p-5 sm:p-6 shadow-2xl sm:max-w-md sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 mx-auto text-left"
      >
        {/* Subtle drag handle on mobile screens */}
        <div className="w-8 h-1 rounded-full bg-slate-200 mx-auto -mt-1 mb-3.5 sm:hidden" />

        <SheetHeader className="text-left space-y-1 pb-3 border-b border-slate-100">
          <div className="flex items-center justify-between pr-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-semibold tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Direct Wholesale Desk
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              Cuttack &bull; Bhubaneswar
            </span>
          </div>

          <div className="pt-1.5 flex items-start gap-3">
            {productImage && (
              <img
                src={productImage}
                alt={productName}
                className="w-12 h-12 rounded-xl object-cover border border-[#E8E1D3] shrink-0"
              />
            )}
            <div>
              <SheetTitle className="text-base font-bold text-slate-900 font-display tracking-tight leading-snug">
                {productName}
              </SheetTitle>
              <p className="text-xs text-slate-500 mt-0.5">
                Category: <span className="font-medium text-slate-700">{categoryLabel}</span>
                <span className="text-slate-300 mx-1.5">•</span>
                Brand: <span className="font-semibold text-amber-700">{brandName}</span>
              </p>
            </div>
          </div>
        </SheetHeader>

        <div className="py-4 space-y-4">
          <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E1D3] text-xs text-slate-600 leading-relaxed">
            Need bulk carton rates, institutional tenders, or distributor sheets? Connect directly with our central wholesale team:
          </div>

          {/* Dual Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleWhatsApp}
              className="w-full h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.426 2.502 1.156 3.473l-.763 2.784 2.855-.749c.94.516 2.019.808 3.167.809 3.18 0 5.766-2.586 5.767-5.766.001-3.181-2.585-5.767-5.765-5.767zm3.364 8.163c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.445.159-.173.346-.217.462-.217.116 0 .231.001.332.006.107.005.25-.041.39.295.144.347.491 1.198.534 1.285.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.18.212-.077.389.103.177.458.756.983 1224.675.602 1.244.79 1.42.876.176.086.279.072.383-.048.104-.12.448-.52.564-.698.116-.178.231-.149.389-.091.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
              </svg>
              <span>Chat on WhatsApp ({phoneNumber})</span>
            </button>

            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="w-full h-10 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Call Wholesale Desk Directly</span>
            </a>
          </div>

          <p className="text-[10.5px] text-slate-400 text-center pt-1">
            ⚡ Quick dispatch and GST billing support for retail dealers &amp; institutions
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
