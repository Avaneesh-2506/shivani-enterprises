"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeAre } from "@/components/WhoWeAre";
import { LedSolutions } from "@/components/LedSolutions";
import { SriivaCleaning } from "@/components/SriivaCleaning";
import { BulkQuoteBuilder } from "@/components/BulkQuoteBuilder";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { LedVarietiesModal } from "@/components/LedVarietiesModal";
import { SriivaEssentialsModal } from "@/components/SriivaEssentialsModal";
import { ProductModal } from "@/components/ProductModal";
import { LedCategory } from "@/data/ledProducts";
import { SriivaProduct } from "@/data/sriivaProducts";

export default function HomePage() {
  // Modal states
  const [isLedVarietiesModalOpen, setIsLedVarietiesModalOpen] = useState(false);
  const [isSriivaEssentialsModalOpen, setIsSriivaEssentialsModalOpen] = useState(false);
  
  // Product Detail Modal state
  const [selectedProduct, setSelectedProduct] = useState<LedCategory | SriivaProduct | null>(null);
  const [productModalType, setProductModalType] = useState<"led" | "sriiva">("led");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Pre-fill state for contact section
  const [contactPreFill, setContactPreFill] = useState<{
    interest: string;
    message: string;
  }>({
    interest: "LED Lighting Wholesale / Project",
    message: "",
  });

  const handleOpenLedProduct = (product: LedCategory) => {
    setSelectedProduct(product);
    setProductModalType("led");
    setIsProductModalOpen(true);
  };

  const handleOpenSriivaProduct = (product: SriivaProduct) => {
    setSelectedProduct(product);
    setProductModalType("sriiva");
    setIsProductModalOpen(true);
  };

  const handleInquireProduct = (productName: string) => {
    setContactPreFill({
      interest: productName.includes("LED")
        ? "LED Lighting Wholesale / Project"
        : "SRIIVA House Cleaning Bulk",
      message: `Hello Shivani Enterprises, I would like to inquire about price quotation, bulk discount, and delivery time for: ${productName}.`,
    });

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePreFillFromQuoteBuilder = (data: { interest: string; message: string }) => {
    setContactPreFill(data);
  };

  const handleScrollToSriivaCarousel = () => {
    const el = document.getElementById("sriiva-cleaning");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar
        onOpenLedModal={() => setIsLedVarietiesModalOpen(true)}
        onOpenSriivaModal={() => setIsSriivaEssentialsModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Cityscape, Headline & Clickable Trust Badges */}
        <HeroSection
          onOpenLedModal={() => setIsLedVarietiesModalOpen(true)}
          onOpenSriivaModal={() => setIsSriivaEssentialsModalOpen(true)}
        />

        {/* 2. Who We Are with Noticeable & Expanded Value Proposition Cards */}
        <WhoWeAre />

        {/* 3. LED Lighting Solutions Section with Filtered Grid & Specs */}
        <LedSolutions
          onOpenLedModal={() => setIsLedVarietiesModalOpen(true)}
          onSelectProduct={handleOpenLedProduct}
          onInquireProduct={handleInquireProduct}
        />

        {/* 4. SRIIVA House Cleaning Products Section with Dynamic Product Carousel */}
        <SriivaCleaning
          onOpenSriivaModal={() => setIsSriivaEssentialsModalOpen(true)}
          onSelectProduct={handleOpenSriivaProduct}
          onInquireProduct={handleInquireProduct}
        />

        {/* 5. Interactive Bulk Quote Estimator Builder */}
        <BulkQuoteBuilder onPreFillContactForm={handlePreFillFromQuoteBuilder} />

        {/* 6. Contact Section with EmailJS Form, WhatsApp and Google Maps Embed */}
        <ContactSection
          preFilledInterest={contactPreFill.interest}
          preFilledMessage={contactPreFill.message}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLedModal={() => setIsLedVarietiesModalOpen(true)}
        onOpenSriivaModal={() => setIsSriivaEssentialsModalOpen(true)}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* 100+ LED Lighting Varieties Modal */}
      <LedVarietiesModal
        isOpen={isLedVarietiesModalOpen}
        onClose={() => setIsLedVarietiesModalOpen(false)}
        onSelectProductForQuote={handleInquireProduct}
      />

      {/* 9+ SRIIVA Cleaning Essentials Modal */}
      <SriivaEssentialsModal
        isOpen={isSriivaEssentialsModalOpen}
        onClose={() => setIsSriivaEssentialsModalOpen(false)}
        onSelectProductForQuote={handleInquireProduct}
        onScrollToCarousel={handleScrollToSriivaCarousel}
      />

      {/* Individual Product Detail / Specs Modal */}
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
        type={productModalType}
        onInquire={handleInquireProduct}
      />
    </div>
  );
}
