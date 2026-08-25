"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white shadow-xl hover:bg-slate-800 transition-all border border-slate-700 active:scale-95 animate-in fade-in duration-200 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call Floating Action Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        aria-label="Call Shivani Enterprises"
        className="p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
        title={`Call ${COMPANY_INFO.phones[0].display}`}
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Action Button with Pulse */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-500/40 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
        title="Chat on WhatsApp"
      >
        {/* Ping animation indicator */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
