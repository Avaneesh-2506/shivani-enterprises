"use client";

import React from "react";
import {
  Award,
  Zap,
  Boxes,
  Handshake,
  CheckCircle2,
  TrendingDown,
  Truck,
  Building,
  Sparkles,
  ShieldCheck,
  Factory,
  Check,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export function WhoWeAre() {
  const valueProps = [
    {
      icon: Award,
      title: "PREMIUM QUALITY",
      badge: "BIS & LM-80 Certified",
      color: "from-blue-600 to-sky-600",
      accentBg: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-sky-400 border-blue-500/30",
      description:
        "Every LED fixture and cleaning formulation distributed by Shivani Enterprises meets rigorous industry performance and durability benchmarks before dispatch.",
      bulletPoints: [
        "Heavy-duty pressure die-cast aluminium housings with 4kV-10kV surge protection",
        "High-purity LED chips with high Color Rendering Index (CRI > 80)",
        "Hospital-grade disinfectant formulations tested for 99.9% germ elimination",
        "Factory-sealed packaging ensuring zero transit tampering or degradation"
      ]
    },
    {
      icon: Zap,
      title: "ENERGY EFFICIENT",
      badge: "Up to 85% Power Saving",
      color: "from-amber-500 to-yellow-500",
      accentBg: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
      description:
        "Reduce operational expenditure for townships, commercial towers, warehouses, and homes with cutting-edge optical efficacy and eco-conscious formulations.",
      bulletPoints: [
        "High luminous efficiency exceeding 130–150 lumens per watt",
        "Solar Street Lights & Panels with zero ongoing monthly electricity cost",
        "Integrated motion & dusk-to-dawn sensors for smart automated dimming",
        "Eco-friendly concentrated cleaning formulas reducing plastic packaging waste"
      ]
    },
    {
      icon: Boxes,
      title: "WIDE RANGE OF PRODUCTS",
      badge: "100+ LED & 9+ SRIIVA Lines",
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      description:
        "A true single-source distribution partner offering end-to-end lighting fixtures alongside complete personal, floor, and surface sanitization products.",
      bulletPoints: [
        "Full lighting spectrum: Street, Flood, High Bay, Panel, COB, Strip, Poles & Solar",
        "Complete SRIIVA hygiene range: Toilet, Floor, Bathroom, Phenyl, Handwash & Sprays",
        "Retail packs (250ml–1L) + Institutional bulk drums (5L & 20L cans)",
        "Designer architectural profiles, halo rings, and custom project lighting"
      ]
    },
    {
      icon: Handshake,
      title: "RELIABLE SERVICE & BEST PRICES",
      badge: "Direct Distributor Margin",
      color: "from-indigo-600 to-purple-600",
      accentBg: "bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
      description:
        "Direct wholesale dealer rates eliminate intermediate trading markups, giving you transparent pricing, ready local inventory, and swift after-sales support.",
      bulletPoints: [
        "Competitive bulk pricing for electrical dealers, contractors, and builders",
        "Ready stock maintained in our Gomtinagar, Lucknow warehouse",
        "Fast dispatch across Lucknow, Kanpur, Ayodhya, Varanasi & all UP districts",
        "Dedicated technical consultation for lumen planning and bulk purchase tenders"
      ]
    },
  ];

  return (
    <section id="who-we-are" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            Who We Are • Shivani Enterprises
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Distributing Trust, Innovation & Hygiene Since Inception
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Headquartered in <strong className="text-slate-900 dark:text-white font-semibold">Gomtinagar, Lucknow</strong>, Shivani Enterprises is an authorized distributor of <strong className="text-blue-600 dark:text-sky-400 font-semibold">SONSHIV LED Lighting</strong> and <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">SRIIVA House Cleaning Products</strong>. We bridge the gap between world-class manufacturing and regional institutional & retail requirements.
          </p>
        </div>

        {/* 4 Core Prominent Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Corner Glow on hover */}
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-15 rounded-full blur-2xl transition-opacity duration-300`} />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${prop.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${prop.accentBg}`}>
                      {prop.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {prop.description}
                  </p>

                  {/* Detailed Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {prop.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>Authorized Quality Assurance</span>
                  <a
                    href="#quote-builder"
                    className="text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer font-bold"
                  >
                    Wholesale Advantage →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual Category Supply Synergy Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white border border-blue-800/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/10">
                <Sparkles className="w-3.5 h-3.5" /> One-Stop Commercial Procurement
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why Builders, Hotels & Institutions Prefer Shivani Enterprises
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you are illuminating a commercial complex with high-efficiency LED flood & panel lights or outfitting a hospital/hotel facility with bulk hygiene & sanitization supplies, we streamline your supply chain with consolidated billing, guaranteed quality, and doorstep delivery across Uttar Pradesh.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#quote-builder"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 transition-all active:scale-95 text-center cursor-pointer"
              >
                <span>Request Consolidated Quote</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent("Hello Shivani Enterprises, I would like to explore dealership / bulk supply terms.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all text-center cursor-pointer"
              >
                <span>Partner as a Dealer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
