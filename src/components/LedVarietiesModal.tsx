"use client";

import React, { useState, useMemo } from "react";
import { ALL_LED_VARIETIES_CATALOG, LedCatalogItem } from "@/data/ledProducts";
import { X, Search, Lightbulb, CheckCircle2, Send, ExternalLink, Zap, Shield, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

interface LedVarietiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProductForQuote?: (productName: string) => void;
}

export function LedVarietiesModal({
  isOpen,
  onClose,
  onSelectProductForQuote,
}: LedVarietiesModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Outdoor & Solar", "Commercial & Industrial", "Indoor & Architectural", "Decorative & Festive", "Security & Power"];

  const filteredItems = useMemo(() => {
    return ALL_LED_VARIETIES_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.popularApplications.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyHighlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  const handleInquire = (item: LedCatalogItem) => {
    if (onSelectProductForQuote) {
      onSelectProductForQuote(`LED: ${item.name} (${item.typicalWattage})`);
      onClose();
    } else {
      const text = encodeURIComponent(
        `Hello Shivani Enterprises, I would like to get a price quote and technical catalog for: ${item.name} (${item.typicalWattage}).`
      );
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-blue-900 via-blue-800 to-sky-900 text-white border-b border-blue-700/50">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-semibold uppercase tracking-wider border border-sky-300/30">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                Authorized Sonshiv Distributor Catalog
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                100+ LED Lighting Varieties & Solutions
              </h2>
              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl">
                Commercial, industrial, municipal solar, architectural, and decorative lighting solutions available for wholesale and institutional supply across Lucknow & UP.
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

          {/* Search & Category Filter Bar */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by product name, wattage, application (e.g. Stadium, COB, Flood, Hexa)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-amber-400 text-slate-950 shadow-md font-bold"
                      : "bg-blue-950/60 text-blue-100 hover:bg-blue-950/90 border border-blue-700/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Product List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50 dark:bg-slate-950/60">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>
              Showing <strong className="text-slate-800 dark:text-slate-200">{filteredItems.length}</strong> LED lighting varieties
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" /> Ready Stock & Custom Orders Available
            </span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-16 text-center">
              <Lightbulb className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-50" />
              <p className="text-slate-600 dark:text-slate-300 font-semibold">No lighting products matched your search.</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for other terms like Flood, Street, COB, Panel, or Solar.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800">
                        {item.tag}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {item.typicalWattage}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      <strong className="text-slate-700 dark:text-slate-200 font-medium">Specs:</strong> {item.keyHighlight}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">Use:</span> {item.popularApplications}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-sky-600 dark:text-sky-400">
                      {item.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleInquire(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-sm transition-all active:scale-95 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 sm:py-3.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs">
          <div className="text-slate-600 dark:text-slate-400 flex items-center gap-2 font-medium">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Direct Wholesale Pricing • BIS Certified • 2 to 5 Year Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
}
