import React from "react";
import Metadata from "next";
import { Container } from "@/components/ui/Container";
import { BranchSelector } from "@/components/branches/BranchSelector";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Dr Pilates Studios & Locations in Bengaluru | Kalyan Nagar & Branch 02",
  description:
    "View Dr Pilates branch details, addresses, phone numbers, opening hours, directions, and available services for Kalyan Nagar and Branch 02 in Bengaluru."
};

export default function BranchesPage() {
  return (
    <div className="pt-28 pb-12">
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Dr Pilates Locations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Explore Our Bengaluru Studios
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Select your preferred branch below to view detailed address specs, operating hours, Google Maps directions, and direct desk contact options.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Interactive 2-Branch Selector Hub */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <BranchSelector defaultBranchId="kalyan-nagar" />
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
