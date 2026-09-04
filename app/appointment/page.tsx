"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BRANCHES, getBranchById } from "@/data/branches";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, MessageSquare, Phone, CheckCircle2, Sparkles } from "lucide-react";

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
      {/* Left Info Panel */}
      <div className="lg:col-span-5 bg-[#EEEDE8] text-[#111111] p-6 sm:p-10 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8E7557] text-xs font-bold uppercase tracking-widest border border-[#E5E0D8]">
          <Sparkles className="w-3.5 h-3.5 text-[#B59C7D]" />
          <span>Selected Studio Specs</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111111]">
            {activeBranch.name}
          </h2>
          <p className="text-xs text-[#7A756D] mt-1">{activeBranch.tagline}</p>
        </div>

        <div className="space-y-4 pt-2 border-t border-[#E5E0D8] text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#B59C7D] shrink-0 mt-1" />
            <span className="text-[#111111]">{activeBranch.address.fullText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#B59C7D] shrink-0" />
            <a href={`tel:${activeBranch.rawPhone}`} className="hover:text-[#8E7557] font-bold text-[#111111]">
              {activeBranch.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#B59C7D] shrink-0" />
            <span className="text-[#4A4641]">{activeBranch.hours}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E7557] mb-2">
            Why Book Online?
          </h4>
          <ul className="space-y-2 text-xs text-[#4A4641]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C7D]" />
              <span>Direct priority scheduling with lead instructors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C7D]" />
              <span>Instant WhatsApp confirmation option</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C7D]" />
              <span>Zero cancellation fees for 24h notice</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Booking Form */}
      <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#E5E0D8] shadow-sm">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#EEEDE8] text-[#8E7557] flex items-center justify-center mx-auto border border-[#B59C7D]/30">
              <CheckCircle2 className="w-10 h-10 text-[#B59C7D]" />
            </div>

            <h3 className="text-2xl font-bold font-display text-[#111111]">
              Appointment Request Submitted!
            </h3>

            <p className="text-sm text-[#4A4641] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#111111]">{fullName}</strong>. Your appointment request for <strong className="text-[#111111]">{activeService.title}</strong> at <strong className="text-[#111111]">{activeBranch.shortName}</strong> has been created.
            </p>

            <div className="p-6 rounded-2xl bg-[#EEEDE8] border border-[#E5E0D8] max-w-md mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E7557] block">
                Instant Desk Confirmation
              </span>
              <p className="text-xs text-[#4A4641]">
                Click below to send your pre-filled details straight to our WhatsApp desk for immediate slot lock-in:
              </p>
              <Button
                href={constructWhatsAppMsg()}
                external
                variant="whatsapp"
                size="md"
                fullWidth
                icon={<MessageSquare className="w-5 h-5 text-white" />}
              >
                Send via WhatsApp Now
              </Button>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-[#8E7557] hover:underline cursor-pointer"
            >
              ← Edit details or submit another booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-[#111111] border-b border-[#E5E0D8] pb-4">
              Schedule Your Session
            </h3>

            {errorText && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                {errorText}
              </div>
            )}

            {/* Select Branch */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                1. Select Studio Branch <span className="text-[#B59C7D]">*</span>
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
                          ? "bg-[#111111] text-white border-[#111111]"
                          : "bg-[#FAF8F5] text-[#111111] border-[#E5E0D8] hover:border-[#B59C7D]"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                2. Select Service <span className="text-[#B59C7D]">*</span>
              </label>
              <select
                value={selectedServiceSlug}
                onChange={(e) => setSelectedServiceSlug(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                  Full Name <span className="text-[#B59C7D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Roy"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                  Phone Number <span className="text-[#B59C7D]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
              />
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                Special Health Notes / Goals (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention any lower back stiffness, knee history, or specific target goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B59C7D]"
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
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Background Image */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center mb-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_reformer_machine.jpeg"
            alt="Dr Pilates Reformer Booking Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Light translucent overlay keeping image bright, vivid and clearly visible */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B59C7D]/50 shadow-sm inline-block">
              Appointment Booking
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Book Your <span className="font-serif italic font-normal text-[#E2C79A]">Dr Pilates Session</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Select your preferred branch, service, and timing below. Your branch selection carries over automatically.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <Suspense fallback={<div className="text-center py-12 text-[#7A756D]">Loading booking form...</div>}>
          <AppointmentFormContent />
        </Suspense>
      </Container>
    </div>
  );
}
