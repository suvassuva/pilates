import React from "react";
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
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Connect With Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Contact Dr Pilates Studios
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
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
