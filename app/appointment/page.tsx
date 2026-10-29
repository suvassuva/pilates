"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BRANCHES, getBranchById } from "@/data/branches";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, MessageSquare, Phone, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const branchParam = searchParams.get("branch") || "kalyan-nagar";

  const [selectedBranchId, setSelectedBranchId] = useState<string>(branchParam);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>("reformer-pilates");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [preferredDate, setPreferredDate] = useState<string>("");
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
      `*Notes:* ${message || "None"}`;
    return `https://wa.me/${activeBranch.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
      {/* Left Info Panel (Clean 12px rectangular card) */}
      <div className="lg:col-span-5 bg-[#FFFFFF] text-[#282622] p-6 sm:p-8 rounded-xl border border-[#DDD3C8] space-y-6 lg:sticky lg:top-28 self-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#E8DED1] text-[#282622] text-xs font-medium font-body uppercase tracking-widest border border-[#DDD3C8]">
          <Sparkles className="w-3.5 h-3.5 text-[#282622]" />
          <span>Selected Branch Specs</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-normal font-display text-[#282622]">
            {activeBranch.name}
          </h2>
          {activeBranch.tagline ? (
            <p className="text-xs sm:text-sm text-[#6E685E] font-body mt-1">{activeBranch.tagline}</p>
          ) : null}
        </div>

        <div className="space-y-4 pt-3 border-t border-[#DDD3C8] text-xs sm:text-sm font-body">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C5A990] shrink-0 mt-0.5" />
            <span className="text-[#282622]">{activeBranch.address.fullText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#C5A990] shrink-0" />
            <a href={`tel:${activeBranch.rawPhone}`} className="hover:text-[#282622] font-medium text-[#282622]">
              {activeBranch.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#C5A990] shrink-0" />
            <span className="text-[#6E685E]">{activeBranch.hours}</span>
          </div>
        </div>
      </div>

      {/* Right Booking Form (Clean 12px rectangular card) */}
      <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 rounded-xl border border-[#DDD3C8]">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-lg bg-[#E8DED1] text-[#282622] flex items-center justify-center mx-auto border border-[#DDD3C8]">
              <CheckCircle2 className="w-8 h-8 text-[#282622]" />
            </div>

            <h3 className="text-2xl font-normal font-display text-[#282622]">
              Appointment Request Submitted!
            </h3>

            <p className="text-sm sm:text-base text-[#6E685E] max-w-md mx-auto leading-[1.6] font-body">
              Thank you, <strong className="text-[#282622] font-medium">{fullName}</strong>. Your appointment request for <strong className="text-[#282622] font-medium">{activeService.title}</strong> at <strong className="text-[#282622] font-medium">{activeBranch.shortName}</strong> has been created.
            </p>

            <div className="p-6 rounded-lg bg-[#F7F3ED] border border-[#DDD3C8] max-w-md mx-auto space-y-3 font-body">
              <span className="text-xs font-medium uppercase tracking-wider text-[#282622] block">
                Instant Desk Confirmation
              </span>
              <p className="text-xs sm:text-sm text-[#6E685E] leading-[1.6]">
                Click below to send your pre-filled details straight to our WhatsApp desk for immediate slot lock-in:
              </p>
              <Button
                href={constructWhatsAppMsg()}
                external
                variant="whatsapp"
                size="md"
                fullWidth
                icon={<MessageSquare className="w-4 h-4 text-white" />}
              >
                Send via WhatsApp Now
              </Button>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-medium text-[#282622] hover:underline cursor-pointer font-body"
            >
              ← Edit details or submit another booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-normal font-display text-[#282622] border-b border-[#DDD3C8] pb-4">
              Schedule Your Session
            </h3>

            {errorText && (
              <div className="p-3 rounded-[6px] bg-red-50 text-red-700 text-xs font-medium font-body border border-red-200">
                {errorText}
              </div>
            )}

            {/* Select Branch */}
            <div>
              <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                Select Studio Branch <span className="text-[#282622]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {BRANCHES.map((b) => {
                  const isSelected = selectedBranchId === b.id;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBranchId(b.id)}
                      className={`min-h-[46px] p-3.5 rounded-[6px] border text-left font-medium font-body text-xs sm:text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#5C604E] text-white border-[#5C604E] shadow-xs"
                          : "bg-[#F7F3ED] text-[#282622] border-[#DDD3C8] hover:border-[#5C604E]"
                      }`}
                    >
                      <span className="block">{b.shortName}</span>
                      <span className="text-[11px] font-normal opacity-80">
                        {b.address.area}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Service */}
            <div>
              <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                Select Service <span className="text-[#282622]">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedServiceSlug}
                  onChange={(e) => setSelectedServiceSlug(e.target.value)}
                  className="w-full min-h-[46px] px-4 pr-10 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] appearance-none cursor-pointer transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title} ({s.sessionStructure.duration})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#282622] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                  Full Name <span className="text-[#282622]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Roy"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full min-h-[46px] px-4 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                  Phone Number <span className="text-[#282622]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-h-[46px] px-4 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-h-[46px] px-4 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full min-h-[46px] px-4 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-medium font-body uppercase tracking-wider text-[#282622] mb-1.5">
                Special Health Notes / Goals (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention any lower back stiffness, knee history, or specific target goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] text-sm font-body text-[#282622] focus:outline-none focus:ring-2 focus:ring-[#282622] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              icon={<Calendar className="w-4 h-4" />}
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
    <div className="pb-12 bg-[#F7F3ED]">
      {/* Page Hero with Background Image */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] mb-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero_appointment_luminous.jpg"
            alt="Dr Pilates Luxury Sunlit Reformer Studio Booking"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Luminous airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282622]/70 via-[#282622]/35 to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-normal font-display tracking-tight text-white leading-tight sm:leading-[1.15]">
              Book Your <span className="font-serif italic text-[#FFFFFF]">Dr Pilates Session</span>
            </h1>
          </div>
        </Container>
      </section>

      <Container>
        <Suspense fallback={<div className="text-center py-12 text-[#6E685E] font-body">Loading booking form...</div>}>
          <AppointmentFormContent />
        </Suspense>
      </Container>
    </div>
  );
}
