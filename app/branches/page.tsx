import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BranchSelector } from "@/components/branches/BranchSelector";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Dr Pilates Locations & Branches in Bengaluru | Kalyan Nagar & Kothanur, Hennur Road",
  description:
    "View Dr Pilates branch details, addresses, phone numbers, opening hours, directions, and available services for Kalyan Nagar and Kothanur, Hennur Road in Bengaluru."
};

export default function BranchesPage() {
  return (
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Studio Exterior Background */}
      <section className="py-20 sm:py-28 bg-[#2A2520] text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/woman_walking_outside.jpeg"
            alt="Dr Pilates Bengaluru Entrance"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520]/80 via-[#2A2520]/45 to-[#2A2520]/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white drop-shadow-md leading-tight">
              Explore Our <span className="font-serif italic font-normal text-[#FAF8F5]">Bengaluru Studios</span>
            </h1>
            <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Visit our Kalyan Nagar and Kothanur studios across Bengaluru to view detailed address specs, operating hours, Google Maps directions, and direct desk contact options.
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
