import React from "react";
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
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Our Core Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Specialized Movement & Clinical Programs
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
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
