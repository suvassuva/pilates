"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BRANCHES, getBranchById } from "@/data/branches";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, MessageSquare, Phone, CheckCircle2, Sparkles, User, Mail } from "lucide-react";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const branchParam = searchParams.get("branch") || "kalyan-nagar";

  const [selectedBranchId, setSelectedBranchId] = useState<string>(branchParam);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>("reformer-pilates");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("10:00 AM");
  const [message, setMessage] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  useEffect(() => {
    if (branchParam && BRANCHES.some((b) => b.id === branchParam)) {
      setSelectedBranchId(branchParam);
    }
  }, [branchParam]);

  const activeBranch = getBranchById(selectedBranchId);
  const activeService = SERVICES.find((s) => s.slug === selectedServiceSlug) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorText("Please fill out your Full Name and Phone Number.");
      return;
    }
    setErrorText("");
    setIsSubmitted(true);
  };

  const constructWhatsAppMsg = () => {
    const text = `*New Appointment Booking Request*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Branch:* ${activeBranch.name}\n` +
      `*Service:* ${activeService.title}\n` +
      `*Preferred Date:* ${preferredDate || "Earliest available"}\n` +
      `*Preferred Time:* ${preferredTime}\n` +
      `*Notes:* ${message || "None"}`;
    return `https://wa.me/${activeBranch.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Info Panel */}
      <div className="lg:col-span-5 bg-[#121417] text-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#C5A059]/30 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Selected Branch Specs</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF8F5]">
            {activeBranch.name}
          </h2>
          <p className="text-xs text-[#8C929D] mt-1">{activeBranch.tagline}</p>
        </div>

        <div className="space-y-4 pt-2 border-t border-[#282C32] text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
            <span>{activeBranch.address.fullText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
            <a href={`tel:${activeBranch.rawPhone}`} className="hover:text-[#C5A059] font-bold">
              {activeBranch.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>{activeBranch.hours}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#1A1D20] border border-[#282C32]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2">
            Why Book Online?
          </h4>
          <ul className="space-y-2 text-xs text-[#8C929D]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Direct priority scheduling with lead instructors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Instant WhatsApp confirmation option</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Zero cancellation fees for 24h notice</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Booking Form */}
      <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#121417]/10 shadow-lg">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-[#121417]">
              Appointment Request Submitted!
            </h3>

            <p className="text-sm text-[#5C626D] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#121417]">{fullName}</strong>. Your appointment request for <strong className="text-[#121417]">{activeService.title}</strong> at <strong className="text-[#121417]">{activeBranch.shortName}</strong> has been created.
            </p>

            <div className="p-6 rounded-2xl bg-[#F3EEE7]/60 border border-[#121417]/10 max-w-md mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block">
                Instant Desk Confirmation
              </span>
              <p className="text-xs text-[#5C626D]">
                Click below to send your pre-filled details straight to our WhatsApp desk for immediate slot lock-in:
              </p>
              <Button
                href={constructWhatsAppMsg()}
                external
                variant="primary"
                size="md"
                fullWidth
                className="bg-[#25D366] hover:bg-[#20bd5a] border-none text-white"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Send via WhatsApp Now
              </Button>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-[#C5A059] hover:underline cursor-pointer"
            >
              ← Edit details or submit another booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-[#121417] border-b border-[#121417]/10 pb-4">
              Schedule Your Session
            </h3>

            {errorText && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                {errorText}
              </div>
            )}

            {/* Select Branch (Auto pre-selected!) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-2">
                1. Select Studio Branch <span className="text-[#C5A059]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {BRANCHES.map((b) => {
                  const isSelected = selectedBranchId === b.id;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBranchId(b.id)}
                      className={`p-3.5 rounded-2xl border text-left font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#121417] text-white border-[#C5A059]"
                          : "bg-[#FAF8F5] text-[#121417] border-[#121417]/15 hover:border-[#C5A059]"
                      }`}
                    >
                      <span className="block">{b.shortName}</span>
                      <span className="text-[10px] font-normal opacity-80">
                        {b.address.area}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-2">
                2. Select Service <span className="text-[#C5A059]">*</span>
              </label>
              <select
                value={selectedServiceSlug}
                onChange={(e) => setSelectedServiceSlug(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title} ({s.sessionStructure.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                  Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Roy"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                  Phone Number <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              />
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                >
                  <option value="07:00 AM">07:00 AM (Morning)</option>
                  <option value="09:00 AM">09:00 AM (Morning)</option>
                  <option value="11:00 AM">11:00 AM (Late Morning)</option>
                  <option value="04:00 PM">04:00 PM (Afternoon)</option>
                  <option value="06:00 PM">06:00 PM (Evening)</option>
                  <option value="07:30 PM">07:30 PM (Evening)</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121417] mb-1.5">
                Special Health Notes / Goals (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention any lower back stiffness, knee history, or specific target goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#121417]/15 text-sm text-[#121417] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              fullWidth
              icon={<Calendar className="w-5 h-5" />}
            >
              Book Appointment
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="pt-28 pb-12">
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden mb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Appointment Booking
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Book Your Dr Pilates Session
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Select your preferred branch, service, and timing below. Your branch selection carries over automatically.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <Suspense fallback={<div className="text-center py-12 text-[#5C626D]">Loading booking form...</div>}>
          <AppointmentFormContent />
        </Suspense>
      </Container>
    </div>
  );
}
