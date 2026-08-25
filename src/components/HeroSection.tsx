"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  ChevronDown,
  Layers,
  PhoneCall,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

interface HeroSectionProps {
  onOpenLedModal: () => void;
  onOpenSriivaModal: () => void;
}

export function HeroSection({
  onOpenLedModal,
  onOpenSriivaModal,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Graphic & Cityscape Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-slate-950/95 to-slate-950 z-10" />
        
        {/* Glow Spheres */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Value Badges & Dual CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Brand Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button
                type="button"
                onClick={onOpenLedModal}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 hover:bg-blue-800/80 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer"
                title="Click to view all SONSHIV LED Lighting products"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>SONSHIV Lighting A Better Tomorrow</span>
              </button>
              <button
                type="button"
                onClick={onOpenSriivaModal}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-400/30 text-emerald-200 text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer"
                title="Click to view all SRIIVA Cleaning formulations"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>SRIIVA House Cleaning</span>
              </button>
            </div>

            {/* Main Super Headline */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-400 uppercase">
                Authorized Wholesale & Institutional Distributor
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Distributors of{" "}
                <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                  Premium LED Lighting
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  SRIIVA House Cleaning Products
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Serving government projects, commercial complexes, real-estate developers, retail electrical shops, and institutional clients across Lucknow and Uttar Pradesh with direct wholesale pricing and prompt logistics.
            </p>

            {/* Dual CTAs & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#led-solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-600/30 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Explore LED Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sriiva-cleaning"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-700/30 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Discover SRIIVA Cleaning</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clickable Trust Badges (User Requested Feature) */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5">
                <span>Click badges below for full product breakdown:</span>
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1. 100+ LED Varieties (Clickable) */}
                <button
                  type="button"
                  onClick={onOpenLedModal}
                  className="group p-3 rounded-2xl bg-gradient-to-b from-blue-900/40 to-slate-900/80 border border-sky-500/30 hover:border-sky-400 hover:bg-blue-900/60 shadow-lg hover:shadow-sky-500/20 text-left transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  title="Click to view all 100+ LED Lighting varieties"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Zap className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-400/20 text-sky-300 uppercase">
                      View All
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white group-hover:text-sky-300 transition-colors">
                    100+
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    LED Lighting Varieties
                  </div>
                  <div className="text-[10px] text-sky-400/90 mt-1 flex items-center gap-1 font-medium">
                    <span>Street, Flood, COB & more</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </button>

                {/* 2. 9+ SRIIVA Cleaning Essentials (Clickable) */}
                <button
                  type="button"
                  onClick={onOpenSriivaModal}
                  className="group p-3 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/60 shadow-lg hover:shadow-emerald-500/20 text-left transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  title="Click to view all 9 SRIIVA Cleaning Formulations"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Sparkles className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 uppercase">
                      View All
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                    9+
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    SRIIVA Essentials
                  </div>
                  <div className="text-[10px] text-emerald-400/90 mt-1 flex items-center gap-1 font-medium">
                    <span>Floor, Toilet, Spray & Phenyl</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </button>

                {/* 3. 500+ Projects & Clients */}
                <a
                  href="#who-we-are"
                  className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-left hover:border-amber-500/40 transition-colors cursor-pointer block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 uppercase">
                      Trusted
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white">500+</div>
                  <div className="text-xs font-semibold text-slate-300">Projects & Clients</div>
                  <div className="text-[10px] text-slate-400 mt-1">Builders, Hotels & Retail</div>
                </a>

                {/* 4. Direct Lucknow Warehouse */}
                <a
                  href="#contact"
                  className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-left hover:border-rose-500/40 transition-colors cursor-pointer block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-400/10 text-rose-300 uppercase">
                      Local Hub
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white">Gomtinagar</div>
                  <div className="text-xs font-semibold text-slate-300">Direct Warehouse</div>
                  <div className="text-[10px] text-slate-400 mt-1">Rina Tower, Lucknow</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composite & Brand Graphic */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Main Showcase Card */}
            <div className="relative w-full max-w-md rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 to-blue-950/80 border border-blue-500/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Dual Wholesale Portfolio
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  Ready Dispatch
                </span>
              </div>

              {/* Graphic Composition */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800 flex items-center justify-center">
                {/* Cityscape Background */}
                <Image
                  src="/assets/images/brand/cityscape.png"
                  alt="City illuminated by LED lighting"
                  fill
                  className="object-cover opacity-60 mix-blend-screen"
                />

                {/* Overlay Brand Logo Graphic */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                  <div className="relative px-6 py-4 rounded-2xl bg-white/95 dark:bg-white/90 shadow-2xl backdrop-blur-md border border-white/50 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/assets/images/brand/logo.png"
                      alt="Shivani Enterprises Logo"
                      width={280}
                      height={150}
                      className="object-contain max-h-28 sm:max-h-32 w-auto drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-white">Authorized SONSHIV & SRIIVA Distributor</span>
                  </div>
                  <span className="text-[11px] font-bold text-sky-400">Lucknow & UP</span>
                </div>
              </div>

              {/* Sriiva Cleaning Mini Preview Banner */}
              <div className="mt-4 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-900/80 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">SRIIVA House Hygiene Line</h4>
                    <p className="text-[11px] text-emerald-300/90">Hospital & Hotel Bulk Packs (5L / 20L)</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenSriivaModal}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                >
                  View Line
                </button>
              </div>

              {/* Direct Call & WhatsApp Quick Bar */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Distributor</span>
                </a>
                <a
                  href="#contact"
                  className="py-2 px-3 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-amber-300" />
                  <span>Request Catalog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#who-we-are"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center text-slate-400 hover:text-sky-300 text-[11px] font-medium animate-bounce cursor-pointer transition-colors"
        title="Scroll down"
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-sky-400" />
      </a>
    </section>
  );
}
