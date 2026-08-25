"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { COMPANY_INFO } from "@/data/companyInfo";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  Sparkles,
  Zap,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenLedModal?: () => void;
  onOpenSriivaModal?: () => void;
}

export function Navbar({ onOpenLedModal, onOpenSriivaModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Who We Are", href: "#who-we-are" },
    { name: "LED Solutions", href: "#led-solutions" },
    { name: "SRIIVA Cleaning", href: "#sriiva-cleaning" },
    { name: "Bulk Quote", href: "#quote-builder" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-slate-800/80 py-2.5"
            : "bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Taglines */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-900 dark:text-white font-sans uppercase">
                  SHIVANI
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-wider text-sky-600 dark:text-sky-400 font-sans uppercase">
                  ENTERPRISES
                </span>
              </div>
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <span className="text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                  <Zap className="w-2.5 h-2.5" /> SONSHIV LED
                </span>
                <span>•</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" /> SRIIVA CLEANING
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Theme Toggle (Desktop Only >= 1024px) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle className="cursor-pointer" />

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#quote-builder"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white shadow-md shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile & Tablet Controls (< 1024px): Single Theme Toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle className="cursor-pointer" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-700 to-sky-600 text-white shadow-md text-center cursor-pointer"
            >
              <span>Request Wholesale Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
