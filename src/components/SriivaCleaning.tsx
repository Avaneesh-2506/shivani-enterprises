"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SRIIVA_PRODUCTS, SriivaProduct } from "@/data/sriivaProducts";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Droplets,
  CheckCircle2,
  Send,
  Building,
  Layers,
  ArrowRight,
  Maximize2,
  Package,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

interface SriivaCleaningProps {
  onOpenSriivaModal: () => void;
  onSelectProduct: (product: SriivaProduct) => void;
  onInquireProduct: (productName: string) => void;
}

export function SriivaCleaning({
  onOpenSriivaModal,
  onSelectProduct,
  onInquireProduct,
}: SriivaCleaningProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="sriiva-cleaning" className="py-20 lg:py-28 bg-emerald-50/50 dark:bg-slate-900/60 transition-colors relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              SRIIVA House Cleaning & Hygiene Division
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Hospital-Grade Hygiene & Home Sanitization Products
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Certified powerful cleaning formulations that dissolve tough stains, eliminate 99.9% of bacteria and viruses, and leave enduring botanical freshness for homes, hotels, hospitals, and corporate facilities.
            </p>
          </div>

          {/* Action Button to Open 9+ Essentials Modal */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSriivaModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-emerald-200" />
              <span>View All 9 Formulations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Complete Lineup Visual Banner */}
        <div className="mb-12 p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Official Catalog Lineup
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                SRIIVA Complete 9-Bottle Disinfectant & Cleanser Series
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                Toilet Cleaner • Bathroom Cleaner • Floor Cleaner • White Phenyl • Rose Hand Wash • Lemon Dish Wash • Dish Bar • Lavender Room Freshener • Multipurpose Spray
              </p>
            </div>

            <div className="w-full lg:w-3/5 bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-emerald-50/80 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-950/90 rounded-2xl p-3 border border-emerald-100 dark:border-emerald-950/60 overflow-hidden shadow-inner">
              <div className="grid grid-cols-9 gap-1 sm:gap-2 items-end justify-items-center h-28 sm:h-36 py-1">
                {SRIIVA_PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => onSelectProduct(prod)}
                    className="group relative flex flex-col items-center justify-end h-full w-full focus:outline-none transition-transform hover:-translate-y-1 cursor-pointer"
                    title={`${prod.name} - Click for details`}
                  >
                    <div className="relative w-full h-20 sm:h-28 flex items-center justify-center">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        width={60}
                        height={100}
                        className="object-contain max-h-full w-auto drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate max-w-full text-center mt-1 hidden sm:block">
                      {prod.name.replace("Sriiva ", "")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Product Carousel */}
        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
            <div className="flex gap-6">
              {SRIIVA_PRODUCTS.map((product, idx) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="group relative h-full flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Top Tag & Scent */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider">
                          <Droplets className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          {product.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          #{idx + 1} of 9
                        </span>
                      </div>

                      {/* Bottle Image with Ambient Base Glow */}
                      <div className="relative h-60 w-full bg-gradient-to-b from-emerald-50/60 to-slate-100 dark:from-slate-800 dark:to-slate-900/90 rounded-2xl p-4 flex items-center justify-center overflow-hidden my-4 border border-emerald-50 dark:border-slate-800">
                        {/* Quick View Button */}
                        <button
                          type="button"
                          onClick={() => onSelectProduct(product)}
                          className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-white/90 dark:bg-slate-950/80 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          title="View Full Specifications"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>

                        <div
                          onClick={() => onSelectProduct(product)}
                          className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={160}
                            height={220}
                            className="object-contain max-h-52 w-auto drop-shadow-xl"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {product.subtitle}
                      </p>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                        {product.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Available Sizes */}
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Sizes:
                        </span>
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Action Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        Specs & Usage
                      </button>

                      <button
                        type="button"
                        onClick={() => onInquireProduct(`SRIIVA: ${product.name}`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Inquire Bulk</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons (Left / Right) */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous Slide"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next Slide"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xl border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === selectedIndex
                    ? "w-8 bg-emerald-600 dark:bg-emerald-400"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Institutional & Bulk Cleaning Supply Notice */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-900 text-white border border-emerald-700/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 shrink-0">
              <Package className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                5 Litre & 20 Litre Bulk Cans for Hotels, Hospitals & Corporates
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90">
                Special commercial volume contract pricing with monthly automated replenishment across Lucknow & UP.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent("Hello Shivani Enterprises, I would like to inquire about SRIIVA 5L / 20L institutional bulk cans supply for my facility.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Get Institutional Rates</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
