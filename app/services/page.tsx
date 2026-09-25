import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/Button";
import {
  Activity, Zap, HeartPulse,
  CheckCircle2, Clock, Flame, Users, Sparkles,
  Calendar
} from "lucide-react";

export const metadata = {
  title: "Services | Reformer Pilates, EMS, Physiotherapy & More | Dr Pilates Bengaluru",
  description:
    "Explore Dr Pilates services: Reformer Pilates, EMS 20-minute training, and clinical Physiotherapy at Kalyan Nagar & Kothanur, Hennur Road, Bengaluru."
};

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />
};

const serviceTaglines: Record<string, string> = {
  "reformer-pilates": "TRANSFORM YOUR BODY",
  "ems-training": "20-MINUTE WORKOUT REVOLUTION",
  "physiotherapy": "RESTORE & MOVE PAIN-FREE"
};

export default function ServicesPage() {
  const reformerService = SERVICES.find((s) => s.slug === "reformer-pilates");

  return (
    <div className="pt-24 pb-0 bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Interior Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Specialized Movement & <span className="font-serif italic font-normal text-[#E2C79A]">Clinical Programs</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Targeted strength, core conditioning, rapid bio-suit EMS, and evidence-based physiotherapy tailored to your body.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Sections */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`py-16 sm:py-24 ${isEven ? "bg-[#FAF8F5]" : "bg-[#EEEDE8]"} scroll-mt-[140px]`}
          >
            <Container>
              {/* Service Header with Image */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Image Side */}
                <div className={`${!isEven ? "lg:col-start-8 lg:col-span-5" : "lg:col-span-5"} order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-md bg-[#141312]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className={`${!isEven ? "lg:col-start-1 lg:col-span-7 lg:row-start-1" : "lg:col-span-7"} order-2 ${!isEven ? "lg:order-1" : "lg:order-2"} space-y-4 sm:space-y-5`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center shadow-xs">
                      {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#B59C7D]" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] leading-tight">
                        {service.title}
                      </h2>
                      {service.badge && (
                        <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#111111] text-[#E2C79A] border border-[#B59C7D]/40 mt-1 inline-block">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Session Structure Specs */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-[#B59C7D]" />
                      {service.sessionStructure.duration}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                      <Flame className="w-3.5 h-3.5 text-[#B59C7D]" />
                      {service.sessionStructure.intensity}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                      <Users className="w-3.5 h-3.5 text-[#B59C7D]" />
                      {service.sessionStructure.format}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      href="/appointment"
                      variant="gold"
                      size="sm"
                      icon={<Calendar className="w-3.5 h-3.5" />}
                    >
                      Book {service.title} Session
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Program Overview Showcase Card (Positioned below all services) */}
      {reformerService && (
        <section className="py-14 sm:py-20 bg-[#FAF8F5] border-t border-[#E5E0D8]">
          <Container>
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5E0D8] shadow-sm overflow-hidden">
              {/* Card Header Banner */}
              <div className="bg-[#FAF8F5] px-6 sm:px-8 py-4 sm:py-5 border-b border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#111111] uppercase tracking-wide">
                    {reformerService.title}: <span className="text-[#8C7658] font-normal">{serviceTaglines[reformerService.slug] || "TRANSFORM YOUR BODY"}</span>
                  </h3>
                </div>
              </div>

              {/* 3 Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D8]">
                {/* Top Benefits */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h4 className="text-base sm:text-lg font-bold font-display text-[#111111] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B59C7D]" />
                    Top Benefits
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4641]">
                    {reformerService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#B59C7D] font-bold text-base leading-tight mt-0.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable For */}
                <div className="p-6 sm:p-8 space-y-4 bg-[#FAF8F5]/50">
                  <h4 className="text-base sm:text-lg font-bold font-display text-[#111111] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#B59C7D]" />
                    Suitable For
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4641]">
                    {reformerService.whoItIsFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#B59C7D] font-bold text-base leading-tight mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h4 className="text-base sm:text-lg font-bold font-display text-[#111111] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#B59C7D]" />
                    How It Works
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4641]">
                    {(reformerService.howItWorks || reformerService.features).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#B59C7D] font-bold text-base leading-tight mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </div>
  );
}
