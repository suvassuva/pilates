import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Services | Reformer Pilates, EMS & Physiotherapy in Bengaluru",
  description:
    "Explore Dr Pilates services: Reformer Pilates, EMS 20-minute training, clinical Physiotherapy, and 1-on-1 Personal Training in Bengaluru."
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Services Hero */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        {/* Background Studio Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Studio Interior Background"
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
              Our Core Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Specialized Movement & <span className="font-serif italic font-normal text-[#E2C79A]">Clinical Programs</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Targeted strength, core conditioning, rapid bio-suit EMS, and evidence-based physiotherapy tailored to your body.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
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
