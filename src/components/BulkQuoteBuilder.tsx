"use client";

import React, { useState } from "react";
import {
  Zap,
  Sparkles,
  Check,
  Trash2,
  Send,
  MessageSquare,
  Plus,
  Minus,
  Calculator,
  ArrowRight,
  X,
  PackageCheck,
  HelpCircle,
} from "lucide-react";
import { FEATURED_LED_CATEGORIES } from "@/data/ledProducts";
import { SRIIVA_PRODUCTS } from "@/data/sriivaProducts";
import { COMPANY_INFO } from "@/data/companyInfo";

interface QuoteItem {
  id: string;
  name: string;
  category: "LED Lighting" | "SRIIVA Cleaning";
  quantity: string;
}

interface BulkQuoteBuilderProps {
  onPreFillContactForm: (data: { interest: string; message: string }) => void;
}

export function BulkQuoteBuilder({ onPreFillContactForm }: BulkQuoteBuilderProps) {
  // Start with an empty basket - no preselected defaults
  const [selectedItems, setSelectedItems] = useState<QuoteItem[]>([]);

  // Quantity input modal state for user selection
  const [pendingProduct, setPendingProduct] = useState<{
    name: string;
    category: "LED Lighting" | "SRIIVA Cleaning";
    defaultUnit: string;
  } | null>(null);

  const [qtyValue, setQtyValue] = useState<number>(10);
  const [unitType, setUnitType] = useState<string>("pcs");

  // Custom Item state
  const [customItemName, setCustomItemName] = useState("");
  const [customCategory, setCustomCategory] = useState<"LED Lighting" | "SRIIVA Cleaning">("LED Lighting");
  const [customQty, setCustomQty] = useState("");

  const handleProductClick = (
    name: string,
    category: "LED Lighting" | "SRIIVA Cleaning",
    defaultUnit = "pcs"
  ) => {
    setPendingProduct({ name, category, defaultUnit });
    setQtyValue(10);
    setUnitType(defaultUnit);
  };

  const handleConfirmAddQuantity = () => {
    if (!pendingProduct) return;

    const finalQty = `${qtyValue > 0 ? qtyValue : 1} ${unitType}`;
    const newItem: QuoteItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: pendingProduct.name,
      category: pendingProduct.category,
      quantity: finalQty,
    };

    setSelectedItems((prev) => [...prev, newItem]);
    setPendingProduct(null);
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateNumericQty = (id: string, delta: number) => {
    setSelectedItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        // Parse current number and unit
        const match = item.quantity.match(/^(\d+)\s*(.*)$/);
        const currentNum = match ? parseInt(match[1], 10) : 1;
        const currentUnit = match && match[2] ? match[2] : "pcs";
        const newNum = Math.max(1, currentNum + delta);
        return {
          ...item,
          quantity: `${newNum} ${currentUnit}`,
        };
      })
    );
  };

  const handleDirectQtyChange = (id: string, text: string) => {
    setSelectedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: text } : item))
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemName.trim()) return;
    const finalQty = customQty.trim() ? customQty.trim() : "1 pcs";
    const newItem: QuoteItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: customItemName.trim(),
      category: customCategory,
      quantity: finalQty,
    };
    setSelectedItems((prev) => [...prev, newItem]);
    setCustomItemName("");
    setCustomQty("");
  };

  const handleProceedToContact = () => {
    const summary = selectedItems
      .map((item, idx) => `${idx + 1}. [${item.category}] ${item.name} - Required Qty: ${item.quantity}`)
      .join("\n");

    const message = `Hello, I would like to request a wholesale bulk price quotation for the following items:\n\n${summary}\n\nPlease share the best distributor discount and delivery lead time for Lucknow / UP.`;

    onPreFillContactForm({
      interest: selectedItems.some((i) => i.category === "LED Lighting") && selectedItems.some((i) => i.category === "SRIIVA Cleaning")
        ? "Both LED & SRIIVA Cleaning (Consolidated Supply)"
        : selectedItems.some((i) => i.category === "LED Lighting")
        ? "LED Lighting Wholesale / Project"
        : "SRIIVA House Cleaning Bulk",
      message,
    });

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendWhatsAppQuote = () => {
    const summary = selectedItems
      .map((item, idx) => `${idx + 1}. [${item.category}] ${item.name} - Required Qty: ${item.quantity}`)
      .join("%0A");

    const text = `Hello Shivani Enterprises, I would like to request an instant bulk quote for:%0A%0A${summary}%0A%0APlease provide dealer pricing.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <section id="quote-builder" className="py-20 lg:py-28 bg-slate-100/70 dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            Consolidated B2B Quote Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Build Your Wholesale & Project Quotation
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Click on any product below to specify your required quantities, assemble your custom order basket, and submit for direct distributor discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Add Catalog Pills */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Add LED Items */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Select LED Lighting Products
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Click to enter quantity
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {FEATURED_LED_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleProductClick(cat.name, "LED Lighting", "pcs")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-sky-400 transition-all active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-sky-500" />
                    <span>{cat.name.split("&")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Add SRIIVA Items */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Select SRIIVA Cleaning Supplies
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Click to enter quantity
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SRIIVA_PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() =>
                      handleProductClick(
                        `${prod.name} (${prod.sizes[0]})`,
                        "SRIIVA Cleaning",
                        prod.name.includes("Cleaner") || prod.name.includes("Phenyl")
                          ? "cans"
                          : "units"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{prod.name.replace("Sriiva ", "")}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add Custom Requirement Box */}
            <form
              onSubmit={handleAddCustom}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Add Custom / Specific Product Requirement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <input
                  type="text"
                  placeholder="e.g. 50W Solar Street Light with Pole"
                  value={customItemName}
                  onChange={(e) => setCustomItemName(e.target.value)}
                  className="sm:col-span-5 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Qty (e.g. 25 pcs)"
                  value={customQty}
                  onChange={(e) => setCustomQty(e.target.value)}
                  className="sm:col-span-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                <select
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value as any)}
                  className="sm:col-span-2 px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[11px] focus:ring-2 focus:ring-sky-400 focus:outline-none"
                >
                  <option value="LED Lighting">LED</option>
                  <option value="SRIIVA Cleaning">SRIIVA</option>
                </select>
                <button
                  type="submit"
                  className="sm:col-span-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  + Add
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Selected Quote Items Basket */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  Your Quotation Basket
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedItems.length === 0
                    ? "Basket is empty. Select products from the left to begin."
                    : `${selectedItems.length} items configured for quotation`}
                </p>
              </div>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedItems([])}
                  className="text-xs text-rose-500 hover:text-rose-600 font-semibold cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* List of items */}
            {selectedItems.length === 0 ? (
              <div className="py-16 text-center text-slate-400 dark:text-slate-500 text-sm space-y-2">
                <Calculator className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 opacity-60" />
                <p className="font-semibold text-slate-600 dark:text-slate-400">
                  No products added yet
                </p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click on any product button on the left to specify your desired quantity and build your quote.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                            item.category === "LED Lighting"
                              ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300"
                              : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                        {item.name}
                      </h4>
                    </div>

                    {/* Qty edit with Steppers */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-1">
                        <button
                          type="button"
                          onClick={() => handleUpdateNumericQty(item.id, -1)}
                          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-90 cursor-pointer"
                          title="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => handleDirectQtyChange(item.id, e.target.value)}
                          className="w-20 px-1 text-center text-xs font-bold text-slate-900 dark:text-white bg-transparent focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleUpdateNumericQty(item.id, 1)}
                          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-90 cursor-pointer"
                          title="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Submission Actions */}
            {selectedItems.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs text-slate-600 dark:text-slate-300">
                  ⚡ <strong>Distributor Advantage:</strong> Tiered discounts apply for wholesale orders. GST invoice & fast Lucknow/UP dispatch included.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleProceedToContact}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all text-center cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit via Form</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppQuote}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all text-center cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Asking User For Quantity When Adding A Product */}
      {pendingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    pendingProduct.category === "LED Lighting"
                      ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300"
                      : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                  }`}
                >
                  {pendingProduct.category}
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {pendingProduct.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  How many units/quantity do you require for quotation?
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPendingProduct(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quantity Stepper & Unit Selector */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Enter Required Quantity:
                </label>
                <div className="flex items-center gap-3">
                  {/* Stepper buttons */}
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 border border-slate-200 dark:border-slate-700 flex-1">
                    <button
                      type="button"
                      onClick={() => setQtyValue((q) => Math.max(1, q - 5))}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm hover:bg-slate-200 active:scale-95 cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={qtyValue}
                      onChange={(e) => setQtyValue(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      className="w-full text-center text-lg font-black bg-transparent text-slate-900 dark:text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQtyValue((q) => q + 5)}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm hover:bg-slate-200 active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Unit Selector */}
                  <select
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="px-3.5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-xs focus:ring-2 focus:ring-sky-400 focus:outline-none cursor-pointer"
                  >
                    <option value="pcs">Pieces (pcs)</option>
                    <option value="units">Units</option>
                    <option value="cans">Cans (5L)</option>
                    <option value="boxes">Boxes / Cartons</option>
                    <option value="meters">Meters (m)</option>
                  </select>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1.5">
                  Quick Presets:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[5, 10, 25, 50, 100, 250].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setQtyValue(num)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        qtyValue === num
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {num} {unitType}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setPendingProduct(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmAddQuantity}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-xs shadow-md shadow-blue-600/25 active:scale-95 transition-all cursor-pointer"
              >
                <PackageCheck className="w-4 h-4" />
                <span>Add {qtyValue} {unitType} to Basket</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
