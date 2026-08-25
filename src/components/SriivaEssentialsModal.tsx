"use client";

import React from "react";
import Image from "next/image";
import { SRIIVA_PRODUCTS, SriivaProduct } from "@/data/sriivaProducts";
import { X, Sparkles, CheckCircle2, Send, ShieldCheck, Droplet, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

interface SriivaEssentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductForQuote?: (productName: string) => void;
  onScrollToCarousel?: () => void;
}

export function SriivaEssentialsModal({
  isOpen,
  onClose,
  onSelectProductForQuote,
  onScrollToCarousel,
}: SriivaEssentialsModalProps) {
  if (!isOpen) return null;

  const handleInquire = (item: SriivaProduct) => {
    if (onSelectProductForQuote) {
      onSelectProductForQuote(`SRIIVA Cleaning: ${item.name} (${item.sizes.join(", ")})`);
      onClose();
    } else {
      const text = encodeURIComponent(
        `Hello Shivani Enterprises, I would like to inquire about wholesale/institutional pricing for: ${item.name}.`
      );
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
    }
  };

  const handleExploreCarousel = () => {
    onClose();
    if (onScrollToCarousel) {
      onScrollToCarousel();
    } else {
      const element = document.getElementById("sriiva-cleaning");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-emerald-200 dark:border-emerald-950 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white border-b border-emerald-700/50">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-300/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                SRIIVA House Cleaning & Hygiene Lineup
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                9 Essential House & Institutional Cleaning Formulations
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl">
                Hospital-grade, powerful disinfectants & sparkling cleansers for homes, hotels, restaurants, hospitals, and commercial establishments.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Product Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-emerald-50/40 dark:bg-slate-950/60">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>
              Complete <strong className="text-emerald-700 dark:text-emerald-400">9 Core SRIIVA Formulations</strong> as featured in product catalogue
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> 500ml, 1L & 5L Institutional Packs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SRIIVA_PRODUCTS.map((item, idx) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Product #{idx + 1} • {item.category}
                    </span>
                    {item.fragranceOrFlavor && (
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Droplet className="w-3 h-3 text-emerald-500" />
                        {item.fragranceOrFlavor.split("&")[0]}
                      </span>
                    )}
                  </div>

                  {/* Bottle Visual & Title */}
                  <div className="flex gap-4 items-center my-3">
                    <div className="relative w-16 h-28 shrink-0 bg-slate-100 dark:bg-slate-800/60 rounded-xl p-1 flex items-center justify-center border border-slate-200/60 dark:border-slate-800 group-hover:scale-105 transition-transform">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={110}
                        className="object-contain max-h-24 w-auto drop-shadow-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                    {item.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pack sizes */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
                    {item.sizes.map((sz) => (
                      <span
                        key={sz}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Direct Distributor Supply
                  </span>
                  <button
                    type="button"
                    onClick={() => handleInquire(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 sm:py-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Authorized SRIIVA Distributor • Wholesale Cases & Bulk Cans Available</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExploreCarousel}
              className="px-4 py-2 rounded-xl text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              View Interactive Carousel <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
