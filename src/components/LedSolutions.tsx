"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FEATURED_LED_CATEGORIES, ALL_LED_VARIETIES_CATALOG, LedCategory } from "@/data/ledProducts";
import {
  Zap,
  Search,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  Info,
  Maximize2,
  Send,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

interface LedSolutionsProps {
  onOpenLedModal: () => void;
  onSelectProduct: (product: LedCategory) => void;
  onInquireProduct: (productName: string) => void;
}

export function LedSolutions({
  onOpenLedModal,
  onSelectProduct,
  onInquireProduct,
}: LedSolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Outdoor & High Mast",
    "Commercial & Industrial",
    "Indoor & Architectural",
    "Decorative & Festive",
  ];

  const filteredCategories = useMemo(() => {
    return FEATURED_LED_CATEGORIES.filter((cat) => {
      let matchesTab = true;
      if (activeTab === "Outdoor & High Mast") {
        matchesTab = ["flood-lights", "street-lights", "solar-street-lights", "garden-bollard-lights", "poles-cctv-surveillance"].includes(cat.id);
      } else if (activeTab === "Commercial & Industrial") {
        matchesTab = ["high-bay-light", "panel-lights", "led-bulbs", "cob-downlights"].includes(cat.id);
      } else if (activeTab === "Indoor & Architectural") {
        matchesTab = ["panel-lights", "cob-downlights", "wall-hanging-designer-lights", "rope-strip-lights"].includes(cat.id);
      } else if (activeTab === "Decorative & Festive") {
        matchesTab = ["wall-hanging-designer-lights", "rope-strip-lights", "garden-bollard-lights"].includes(cat.id);
      }

      const matchesSearch =
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.subProducts.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        cat.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="led-solutions" className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-200 dark:border-blue-800 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              SONSHIV LED Lighting Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              High-Performance LED Lighting for Every Application
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              From heavy-duty industrial flood lights and solar highway poles to ultra-modern magnetic COB track lights and halo chandeliers — precision engineered for maximum lumens and minimum power consumption.
            </p>
          </div>

          {/* Quick Action Button for 100+ modal */}
          <div className="shrink-0">
            <button
              onClick={onOpenLedModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-amber-300" />
              <span>Browse All 100+ Varieties</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search LED categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>

        {/* Featured Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-400 dark:hover:border-sky-500 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Product Visual Area */}
              <div className="relative h-60 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-800 dark:to-slate-900 p-5 flex items-center justify-center overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-900/85 text-white dark:bg-sky-400 dark:text-slate-950 shadow-md uppercase tracking-wider backdrop-blur-sm">
                    <Zap className="w-3 h-3 text-amber-300 dark:text-slate-900" />
                    {item.badge}
                  </span>
                </div>

                {/* Quick View Button */}
                <button
                  type="button"
                  onClick={() => onSelectProduct(item)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/90 dark:bg-slate-950/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="View full product specifications"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Product Image */}
                <div
                  onClick={() => onSelectProduct(item)}
                  className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={220}
                    height={200}
                    className="object-contain max-h-48 w-auto drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Product Info & Specs Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => onSelectProduct(item)}
                    className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key specs pill */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Wattage:</span>
                      <strong className="text-slate-800 dark:text-slate-200 font-bold">{item.wattageRange}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Protection:</span>
                      <strong className="text-slate-800 dark:text-slate-200 font-bold">{item.ipRating}</strong>
                    </div>
                  </div>

                  {/* Sub Products pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.subProducts.slice(0, 3).map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-sky-300 border border-blue-100 dark:border-blue-900"
                      >
                        {sub}
                      </span>
                    ))}
                    {item.subProducts.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        +{item.subProducts.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(item)}
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onInquireProduct(`LED: ${item.name}`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>Inquire Price</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
