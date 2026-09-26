import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/Button";
import {
  Activity, Zap, HeartPulse, Layers,
  ShieldCheck, Target, Dumbbell, Compass,
  Cpu, Flame, Shield, Stethoscope, Sparkles,
  CheckCircle2, Clock, Users, Calendar, RotateCcw, Heart
} from "lucide-react";

export const metadata = {
  title: "Services | Reformer Pilates, EMS, Physiotherapy & More | Dr Pilates Bengaluru",
  description:
    "Explore Dr Pilates services: Reformer Pilates, EMS 20-minute training, and clinical Physiotherapy at Kalyan Nagar & Kothanur, Hennur Road, Bengaluru."
};

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />
};

const pillarIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#B59C7D]" />,
  Target: <Target className="w-5 h-5 text-[#B59C7D]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-[#B59C7D]" />,
  Compass: <Compass className="w-5 h-5 text-[#B59C7D]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#B59C7D]" />,
  Flame: <Flame className="w-5 h-5 text-[#B59C7D]" />,
  Shield: <Shield className="w-5 h-5 text-[#B59C7D]" />,
  Activity: <Activity className="w-5 h-5 text-[#B59C7D]" />,
  Layers: <Layers className="w-5 h-5 text-[#B59C7D]" />,
  RotateCcw: <RotateCcw className="w-5 h-5 text-[#B59C7D]" />,
  Heart: <Heart className="w-5 h-5 text-[#B59C7D]" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#B59C7D]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#B59C7D]" />
};

const serviceTaglines: Record<string, string> = {
  "reformer-pilates": "PRECISION RESISTANCE & POSTURAL SCULPTING",
  "ems-training": "20-MINUTE BIO-ELECTRIC WORKOUT",
  "physiotherapy": "CLINICAL DIAGNOSIS & RECOVERY"
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
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B59C7D]/20 text-[#E2C79A] text-xs font-semibold uppercase tracking-widest border border-[#B59C7D]/30 backdrop-blur-sm">
              Clinical Movement &amp; Wellness
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Specialized Movement &amp; <span className="font-serif italic font-normal text-[#E2C79A]">Clinical Programs</span>
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
          <React.Fragment key={service.slug}>
            {/* Main Service Presentation Card */}
            <section
              id={service.slug}
              className={`py-16 sm:py-20 ${isEven ? "bg-[#FAF8F5]" : "bg-[#EEEDE8]"} scroll-mt-[120px]`}
            >
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image Side */}
                  <div className={`${!isEven ? "lg:col-start-8 lg:col-span-5" : "lg:col-span-5"} order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className={`relative ${service.slug === "ems-training" ? "aspect-[4/5] sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[460px] bg-[#FFFFFF]" : "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[460px] bg-[#141312]"} w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-md`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={service.slug === "ems-training" ? "object-contain object-center" : "object-cover"}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`${!isEven ? "lg:col-start-1 lg:col-span-7 lg:row-start-1" : "lg:col-span-7"} order-2 ${!isEven ? "lg:order-1" : "lg:order-2"} space-y-4 sm:space-y-5 flex flex-col justify-center`}>
                    {service.slug === "reformer-pilates" ? (
                      <>
                        <div>
                          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest text-[#B59C7D] uppercase block mb-1.5">
                            01 / CLINICAL REFORMER
                          </span>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111111] leading-tight">
                            Merrithew Reformer Systems
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                          Our signature program utilizes high-performance apparatus to provide resistance and support, focusing on structural alignment, core activation, and spinal decompression.
                        </p>

                        {/* 4 Feature Points Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1">
                          {/* Point 1: Posture Restoration */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Shield className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Posture Restoration
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Corrects spinal chains and imbalances through segmental centric loading and joint de-compression.
                              </p>
                            </div>
                          </div>

                          {/* Point 2: Core Optimization */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Layers className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Core Optimization
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Activating deep stabilizing musculature (transversus abdominis, multifidus) beyond superficial layers.
                              </p>
                            </div>
                          </div>

                          {/* Point 3: Muscular Longevity */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Activity className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Muscular Longevity
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Developing lean, powerful muscle fibers while maintaining joint integrity and globally restoring flexibility.
                              </p>
                            </div>
                          </div>

                          {/* Point 4: Neuromuscular Logic */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <RotateCcw className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Neuromuscular Logic
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Refining the brain-body connection for improved spatial awareness and organic, fluid movement patterns.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button
                            href="/appointment"
                            variant="gold"
                            size="sm"
                            icon={<Calendar className="w-3.5 h-3.5" />}
                          >
                            Book Reformer Pilates Session
                          </Button>
                        </div>
                      </>
                    ) : service.slug === "ems-training" ? (
                      <>
                        <div>
                          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest text-[#B59C7D] uppercase block mb-1.5">
                            02 / BIO-ELECTRONIC STIMULATION
                          </span>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111111] leading-tight">
                            Electro Muscle Stimulation (EMS)
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                          Maximize physiological efficiency. A 20-minute session that delivers the impact of 90 minutes of traditional weight training through targeted impulse technology, activating 90% of muscle fibers.
                        </p>

                        {/* 3 Feature Points Stack */}
                        <div className="space-y-3.5 sm:space-y-4 pt-1">
                          {/* Point 1: +90% Muscle Activation */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Zap className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                +90% Muscle Activation
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Stimulating deep agonists and antagonists muscle groups simultaneously with medical-grade electric impulses.
                              </p>
                            </div>
                          </div>

                          {/* Point 2: Accelerated Metabolic Rate */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Heart className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Accelerated Metabolic Rate
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Optimizes fat burning and EPOC (excess post-exercise oxygen consumption) response for up to 48 hours post conditioning.
                              </p>
                            </div>
                          </div>

                          {/* Point 3: Joint-Safe Hypertrophy */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Target className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Joint-Safe Hypertrophy
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Achieves muscle contraction and growth without the mechanical stress and compression of heavy weights on joints.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button
                            href="/appointment"
                            variant="gold"
                            size="sm"
                            icon={<Calendar className="w-3.5 h-3.5" />}
                          >
                            Book EMS Training Session
                          </Button>
                        </div>
                      </>
                    ) : service.slug === "physiotherapy" ? (
                      <>
                        <div>
                          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest text-[#B59C7D] uppercase block mb-1.5">
                            03 / CLINICAL THERAPEUTICS
                          </span>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111111] leading-tight">
                            Advanced <span className="font-serif italic font-normal text-[#B59C7D]">Therapeutics</span>
                          </h2>
                        </div>

                        <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                          Evidence-based clinical intervention for restorative physical health, chronic pain relief, and athletic rehabilitation.
                        </p>

                        {/* 3 Feature Points Stack */}
                        <div className="space-y-3.5 sm:space-y-4 pt-1">
                          {/* Point 1: Structural Spinal Care */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Activity className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Structural Spinal Care
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Specialized decompression and mobilization protocols for chronic lower back pain, neck strain, herniated discs, and scoliosis posture correction.
                              </p>
                            </div>
                          </div>

                          {/* Point 2: Sports Traumatology */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <ShieldCheck className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Sports Traumatology
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Clinical recovery protocols for joint sprains, ligament tears (ACL, meniscus), tendonitis, and shoulder impingement, assuring safe return to sport.
                              </p>
                            </div>
                          </div>

                          {/* Point 3: Kinetic Re-education */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <Sparkles className="w-4 h-4 text-[#B59C7D]" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-[15px] font-bold font-display text-[#111111] leading-snug">
                                Kinetic Re-education
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#55504A] leading-relaxed mt-1">
                                Manual therapy (dry needling, myofascial release) combined with movement re-patterning to resolve long-standing postural compensation.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button
                            href="/appointment"
                            variant="gold"
                            size="sm"
                            icon={<Calendar className="w-3.5 h-3.5" />}
                          >
                            Book Physiotherapy Session
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center shadow-xs shrink-0">
                            {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#B59C7D]" />}
                          </div>
                          <div>
                            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] leading-tight">
                              {service.title}
                            </h2>
                            {service.badge && (
                              <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#111111] text-[#E2C79A] border border-[#B59C7D]/40 mt-1 inline-block">
                                {service.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                          {service.fullDescription}
                        </p>

                        {/* Session Structure Specs */}
                        <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                            <Clock className="w-3.5 h-3.5 text-[#B59C7D]" />
                            <span>{service.sessionStructure.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                            <Flame className="w-3.5 h-3.5 text-[#B59C7D]" />
                            <span>{service.sessionStructure.intensity}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-semibold text-[#111111] shadow-xs">
                            <Users className="w-3.5 h-3.5 text-[#B59C7D]" />
                            <span>{service.sessionStructure.format}</span>
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
                      </>
                    )}
                  </div>
                </div>
              </Container>
            </section>

            {/* Dark Pillar Breakdown Section for Service */}
            {service.slug !== "reformer-pilates" && service.slug !== "ems-training" && service.slug !== "physiotherapy" && service.pillars && service.pillars.length > 0 && (
              <section className="py-16 sm:py-20 bg-[#141312] text-[#FAF8F5] relative overflow-hidden border-y border-[#262422]">
                <Container>
                  {/* Section Heading */}
                  <div className="max-w-3xl mb-10 sm:mb-12">
                    {service.sectionNumber && (
                      <span className="text-[11px] font-bold tracking-widest text-[#B59C7D] uppercase block mb-2 font-mono">
                        {service.sectionNumber}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-snug">
                      {service.pillarsHeading}
                    </h3>
                    {service.pillarsSubheading && (
                      <p className="text-sm sm:text-base text-[#D4CECA] mt-2.5 leading-relaxed max-w-2xl font-normal">
                        {service.pillarsSubheading}
                      </p>
                    )}
                  </div>

                  {/* Pillars Grid */}
                  <div
                    className={`grid gap-5 sm:gap-6 ${
                      service.pillars.length === 4
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        : "grid-cols-1 md:grid-cols-3"
                    }`}
                  >
                    {service.pillars.map((pillar, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-[#1C1A18] p-6 rounded-2xl sm:rounded-3xl border border-[#2E2A27] hover:border-[#B59C7D]/50 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-4">
                            {/* Icon box with champagne gold accent */}
                            <div className="w-10 h-10 rounded-xl bg-[#262320] border border-[#B59C7D]/30 flex items-center justify-center shrink-0 group-hover:bg-[#B59C7D]/20 transition-colors">
                              {pillarIconMap[pillar.iconName] || <Sparkles className="w-5 h-5 text-[#B59C7D]" />}
                            </div>
                            {pillar.tag && (
                              <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#262320] text-[#B59C7D] border border-[#B59C7D]/30">
                                {pillar.tag}
                              </span>
                            )}
                          </div>

                          <h4 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#E2C79A] transition-colors leading-snug">
                            {pillar.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-[#A8A29E] mt-2.5 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Container>
              </section>
            )}
          </React.Fragment>
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
