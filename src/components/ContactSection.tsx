"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/companyInfo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  Building,
  Loader2,
} from "lucide-react";

interface ContactSectionProps {
  preFilledInterest?: string;
  preFilledMessage?: string;
}

export function ContactSection({
  preFilledInterest = "",
  preFilledMessage = "",
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("LED Lighting Wholesale / Project");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (preFilledInterest) {
      setInterest(preFilledInterest);
    }
  }, [preFilledInterest]);

  useEffect(() => {
    if (preFilledMessage) {
      setMessage(preFilledMessage);
    }
  }, [preFilledMessage]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = phone.replace(/[\s\-\+]/g, "");
    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Please describe your product requirement or inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_shivani";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_quote";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_KEY";

    const templateParams = {
      from_name: name,
      user_phone: phone,
      user_email: email,
      interest_type: interest,
      message: message,
      to_name: "Shivani Enterprises Sales Team",
      reply_to: email,
    };

    try {
      if (publicKey && publicKey !== "YOUR_EMAILJS_KEY") {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Simulated local fallback for demo / testing if keys not added yet
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.log("EmailJS Submission (Simulation mode):", templateParams);
      }

      setSubmitSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Clear form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error("EmailJS Submission Error:", err);
      // Even if EmailJS network encounters an error, provide a friendly fallback to WhatsApp
      setSubmitError("We had a momentary connection issue. You can still send this inquiry directly via WhatsApp!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    const text = encodeURIComponent(
      `*New Inquiry for Shivani Enterprises*\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Email:* ${email.trim()}\n*Interest:* ${interest}\n*Message:* ${message.trim()}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = encodeURIComponent(
      `*New Inquiry for Shivani Enterprises*\n*Name:* ${name.trim() || "Prospective Client"}\n*Phone:* ${phone.trim() || "Not Provided"}\n*Email:* ${email.trim() || "Not Provided"}\n*Interest:* ${interest}\n*Message:* ${message.trim() || "I would like to inquire about wholesale rates."}`
    );
    return `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/60 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            Get in Touch • Wholesale & Dealership Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Connect with Shivani Enterprises
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Have a project requirement in Lucknow or across Uttar Pradesh? Fill out the form for a fast quotation or reach us directly via phone and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info, Hours & Live Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Warehouse & Corporate Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-blue-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Office & Warehouse Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 leading-snug">
                    {COMPANY_INFO.address.full}
                  </p>
                  <span className="inline-block mt-1 text-xs text-sky-600 dark:text-sky-400 font-medium">
                    Near Mantri Awas, Vibhav Khand
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Call / WhatsApp Sales
                  </h4>
                  <div className="flex flex-col gap-1 mt-1">
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.raw}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                      >
                        {phone.display} {phone.isPrimary && "(Primary)"}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Business Hours
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {COMPANY_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {COMPANY_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-95 transition-all text-center cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Live Google Maps Embed for Vibhav Khand Gomtinagar, Lucknow */}
            <div className="p-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden">
                <iframe
                  title="Shivani Enterprises Lucknow Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.854089904297!2d80.9991273!3d26.8445778!2m3!1f0!2f0!3f0!32m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37f4806a3e5%3A0x6b44991583d8ca52!2sVibhav%20Khand%204%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
                📍 4/35, Rina Tower, Vibhav Khand, Gomtinagar, Lucknow
              </div>
            </div>
          </div>

          {/* Right Column: Interactive EmailJS Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              <div>
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  EmailJS Serverless Inquiry Flow
                </div> */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Send Your Wholesale & Project Requirements
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
                  Our sales team will get back to you with custom distributor pricing, technical datasheets, and delivery schedules.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for reaching out to Shivani Enterprises. Our wholesale distribution representative will contact you shortly with quotation details.
                  </p>
                  <div className="pt-3 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p>{submitError}</p>
                        <a
                          href={generateWhatsAppInquiryUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 font-bold underline block cursor-pointer"
                        >
                          Click here to send via WhatsApp instead →
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Full Name / Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar / Lucknow Traders"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          errors.name
                            ? "border-rose-400 dark:border-rose-600"
                            : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 9999999999"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          errors.phone
                            ? "border-rose-400 dark:border-rose-600"
                            : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Interest Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. contact@yourcompany.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          errors.email
                            ? "border-rose-400 dark:border-rose-600"
                            : "border-slate-200 dark:border-slate-700"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Product / Interest Category <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
                      >
                        <option value="select">Select an option</option>
                        <option value="LED Lighting Wholesale / Project">SONSHIV LED Lighting Wholesale</option>
                        <option value="SRIIVA House Cleaning Bulk">SRIIVA House Cleaning Products</option>
                        <option value="Both LED & SRIIVA Cleaning (Consolidated Supply)">Both LED & SRIIVA Cleaning (Consolidated Supply)</option>
                        <option value="Dealership / Retail Franchise Inquiry">Dealership & Distribution Partner Inquiry</option>
                        <option value="Solar Street Lights & Infrastructure Project">Solar Street Lights & Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirement Details */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Requirement Details, Product Names or Estimated Quantities <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify product types (e.g. 50W Flood Lights 20 pcs, 5L Floor Cleaner 10 cans, or general tender requirement)..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        errors.message
                          ? "border-rose-400 dark:border-rose-600"
                          : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 font-semibold">{errors.message}</p>
                    )}
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm shadow-xl shadow-blue-600/25 active:scale-95 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 active:scale-95 transition-all text-center cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
