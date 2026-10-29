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
    <div className="pb-12 bg-[#F7F3ED]">
      {/* Page Hero with Studio Exterior Background */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero_branches_luminous.jpg"
            alt="Dr Pilates Bright Sunlit Bengaluru Studio Entrance"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Luminous airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282622]/75 via-[#282622]/40 to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-normal font-display tracking-tight text-white leading-tight sm:leading-[1.15]">
              Explore Our <span className="font-serif italic text-[#FFFFFF]">Bengaluru Studios</span>
            </h1>
            <p className="text-base sm:text-[17px] text-white/95 font-normal font-body leading-[1.6] max-w-2xl mx-auto">
              Visit our Kalyan Nagar and Kothanur studios across Bengaluru to view detailed address specs, operating hours, Google Maps directions, and direct desk contact options.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Interactive 2-Branch Selector Hub */}
      <section className="py-20 bg-[#F7F3ED]">
        <Container>
          <BranchSelector defaultBranchId="kalyan-nagar" />
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
