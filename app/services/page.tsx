import React from "react";
import Image from "next/image";
import Metadata from "next";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Services | Reformer Pilates, EMS & Physiotherapy in Bengaluru",
  description:
    "Explore Dr Pilates services: Reformer Pilates, EMS 20-minute training, clinical Physiotherapy, and 1-on-1 Personal Training in Bengaluru."
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-12">
      {/* Services Hero */}
      <section className="py-20 sm:py-28 bg-[#0D0F12] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        {/* Background Studio Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Studio Interior Background"
            fill
            priority
            className="object-cover object-center opacity-45 scale-105"
            sizes="100vw"
          />
          {/* Subtle vignette overlays for maximum contrast & visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/40 to-[#0D0F12]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/90 via-transparent to-[#0D0F12]/90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#14171C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C5A059]/50 shadow-xl inline-block">
              Our Core Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#FAF8F5] drop-shadow-md">
              Specialized Movement & <span className="gold-gradient-text">Clinical Programs</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
              Targeted strength, core conditioning, rapid bio-suit EMS, and evidence-based physiotherapy tailored to your body.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
