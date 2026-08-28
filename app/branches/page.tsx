import React from "react";
import Image from "next/image";
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
      {/* Page Hero with Studio Exterior Background */}
      <section className="py-20 sm:py-28 bg-[#0D0F12] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/woman_walking_outside.jpeg"
            alt="Dr Pilates Bengaluru Studio Entrance"
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
              Dr Pilates Locations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#FAF8F5] drop-shadow-md">
              Explore Our <span className="gold-gradient-text">Bengaluru Studios</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
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
