import React from "react";
import Image from "next/image";
import Metadata from "next";
import { BRANCHES } from "@/data/branches";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BranchCard } from "@/components/branches/BranchCard";
import { CTASection } from "@/components/home/CTASection";
import { MapPin, Phone, MessageSquare, Mail, Clock, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Dr Pilates | Kalyan Nagar & Branch 02 Bengaluru",
  description:
    "Get in touch with Dr Pilates in Kalyan Nagar (088922 36442) or Branch 02. Phone, WhatsApp, directions, and studio timings."
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-12">
      {/* Page Hero with Background Image */}
      <section className="py-20 sm:py-28 bg-[#0D0F12] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/instructor_welcoming_woman.jpeg"
            alt="Dr Pilates Reception Welcome Background"
            fill
            priority
            className="object-cover object-center opacity-45 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/40 to-[#0D0F12]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/90 via-transparent to-[#0D0F12]/90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#14171C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C5A059]/50 shadow-xl inline-block">
              Connect With Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#FAF8F5] drop-shadow-md">
              Contact <span className="gold-gradient-text">Dr Pilates Studios</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
              Reach out for appointment bookings, studio visits, or movement consultation inquiries in Bengaluru.
            </p>
          </div>
        </Container>
      </section>

      {/* Branch Cards Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <SectionTitle
            subtitle="Our Studio Branches"
            title="Two Convenient Bengaluru Locations"
            description="Choose a branch below for instant phone call, WhatsApp enquiry, or Google Maps navigation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {BRANCHES.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
