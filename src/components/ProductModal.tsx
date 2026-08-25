"use client";

import React from "react";
import Image from "next/image";
import { X, CheckCircle2, Phone, MessageSquare, Zap, Shield, Sparkles, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";
import { LedCategory } from "@/data/ledProducts";
import { SriivaProduct } from "@/data/sriivaProducts";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: LedCategory | SriivaProduct | null;
  type: "led" | "sriiva";
  onInquire?: (productName: string) => void;
}

export function ProductModal({
  isOpen,
  onClose,
  product,
  type,
  onInquire,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  const isLed = type === "led";
  const ledProduct = isLed ? (product as LedCategory) : null;
  const sriivaProduct = !isLed ? (product as SriivaProduct) : null;

  const handleInquireNow = () => {
    if (onInquire) {
      onInquire(`${isLed ? "LED" : "SRIIVA"}: ${product.name}`);
      onClose();
    } else {
      const text = encodeURIComponent(
        `Hello Shivani Enterprises, I would like to inquire about price and bulk supply for: ${product.name}.`
      );
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shivani Enterprises, please send specifications and wholesale quotation for: ${product.name}.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div
          className={`relative px-6 py-5 sm:px-8 bg-gradient-to-r text-white ${
            isLed
              ? "from-blue-900 via-blue-800 to-sky-900"
              : "from-emerald-800 via-teal-800 to-emerald-900"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm border border-white/20">
                {isLed ? <Zap className="w-3.5 h-3.5 text-amber-300" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                {isLed ? ledProduct?.badge : sriivaProduct?.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                {product.name}
              </h2>
              <p className="text-sm text-blue-100/90 dark:text-emerald-100/90 mt-0.5">
                {isLed ? ledProduct?.tagline : sriivaProduct?.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Preview */}
            <div className="md:col-span-5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-200/80 dark:border-slate-700 min-h-[220px]">
              <div className="relative w-full h-48 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="object-contain max-h-44 w-auto drop-shadow-lg"
                />
              </div>
              <span className="mt-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Authentic Brand Packaging & Design
              </span>
            </div>

            {/* Product Overview & Specs */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Description
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              {isLed && ledProduct && (
                <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-blue-50/60 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900/60 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block font-medium">Wattage Range:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">{ledProduct.wattageRange}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block font-medium">Protection Rating:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">{ledProduct.ipRating}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block font-medium">Standard Warranty:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">{ledProduct.warranty}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block font-medium">Distribution:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">Lucknow & UP Ready</strong>
                  </div>
                </div>
              )}

              {!isLed && sriivaProduct && (
                <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900/60 text-xs space-y-2">
                  {sriivaProduct.fragranceOrFlavor && (
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Fragrance / Active Scent: </span>
                      <strong className="text-emerald-700 dark:text-emerald-300 font-bold">{sriivaProduct.fragranceOrFlavor}</strong>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Available Pack Sizes: </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {sriivaProduct.sizes.map((s) => (
                        <span key={s} className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-800 font-semibold text-[11px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Advantages / Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              {isLed ? "Engineered Features & Build" : "Key Benefits & Germ Shield"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(isLed ? ledProduct?.features : sriivaProduct?.keyBenefits)?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isLed ? "text-sky-500" : "text-emerald-500"}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              {isLed ? "Typical Applications" : "Recommended Surfaces & Use Cases"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(isLed ? ledProduct?.applications : sriivaProduct?.targetSurfaces)?.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:px-8 sm:py-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Direct Gomtinagar Warehouse Wholesale Dispatch</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Inquiry
            </button>
            <button
              type="button"
              onClick={handleInquireNow}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md active:scale-95 cursor-pointer ${
                isLed
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
            >
              <Send className="w-4 h-4" />
              Request Official Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
