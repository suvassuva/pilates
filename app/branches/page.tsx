import React from "react";
import Image from "next/image";
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
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Studio Exterior Background */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/woman_walking_outside.jpeg"
            alt="Dr Pilates Bengaluru Studio Entrance"
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
              Dr Pilates Locations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Explore Our <span className="font-serif italic font-normal text-[#E2C79A]">Bengaluru Studios</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
