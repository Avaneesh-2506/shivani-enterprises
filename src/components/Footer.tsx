"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import {
  MapPin,
  Phone,
  Mail,
  Zap,
  Sparkles,
  ArrowUp,
  ShieldCheck,
  ChevronRight,
  Clock,
  Heart,
} from "lucide-react";

export function Footer({
  onOpenLedModal,
  onOpenSriivaModal,
}: {
  onOpenLedModal: () => void;
  onOpenSriivaModal: () => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 transition-colors relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white uppercase font-sans">
                  SHIVANI
                </span>
                <span className="text-2xl font-bold tracking-wider text-sky-400 uppercase font-sans">
                  ENTERPRISES
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                Authorized Wholesale & Institutional Distributor
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Lucknow&apos;s premier distributor of SONSHIV LED commercial & municipal lighting systems and SRIIVA hospital-grade house cleaning and hygiene formulations.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={onOpenLedModal}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-blue-900/60 border border-sky-400/30 text-sky-200 hover:bg-blue-800 transition-colors cursor-pointer"
              >
                ⚡ 100+ LED Varieties
              </button>
              <button
                type="button"
                onClick={onOpenSriivaModal}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-950/60 border border-emerald-400/30 text-emerald-200 hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                🌿 9+ SRIIVA Essentials
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> Home
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> Who We Are
                </a>
              </li>
              <li>
                <a href="#led-solutions" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> LED Solutions
                </a>
              </li>
              <li>
                <a href="#sriiva-cleaning" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> SRIIVA Cleaning
                </a>
              </li>
              <li>
                <a href="#quote-builder" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> B2B Quote Builder
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3 h-3" /> Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* LED Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              LED Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="hover:text-sky-300 transition-colors">• Flood Lights & Stadium Lights</li>
              <li className="hover:text-sky-300 transition-colors">• Solar Street Lights & Panels</li>
              <li className="hover:text-sky-300 transition-colors">• High Bay & Industrial Warehouse</li>
              <li className="hover:text-sky-300 transition-colors">• Panel Lights & 2x2 False Ceiling</li>
              <li className="hover:text-sky-300 transition-colors">• COB, Cylinders & Track Lights</li>
              <li className="hover:text-sky-300 transition-colors">• Garden Bollards & Gate Lamps</li>
              <li className="hover:text-sky-300 transition-colors">• CCTV Cameras & Designer Poles</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Gomtinagar Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.raw}`} className="hover:text-white font-semibold cursor-pointer">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shivani Enterprises. All Rights Reserved. Authorized Sonshiv & SRIIVA Distributor.</p>

          <div className="flex items-center gap-4">
            <span>Lucknow • Uttar Pradesh</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
