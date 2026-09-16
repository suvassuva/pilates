import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const AboutPreview: React.FC = () => {
  const highlights = [
    "Professional guidance by licensed physiotherapists & master trainers",
    "Personalized movement programs tailored to individual joint limits",
    "State-of-the-art Reformer & German EMS bio-suit technology",
    "Serene, high-hygiene environment designed for wellness",
    "1-on-1 dedicated attention without crowded gym distractions",
    "Results-focused strength, posture, and recovery tracking"
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EEEDE8] text-[#111111] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Image Collage - full matching height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[560px] w-full flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5E0D8] group">
              <Image
                src="/videos/pilates_studio_interior.jpeg"
                alt="Dr Pilates Interior and Atmosphere"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/90 via-black/20 to-transparent flex items-end p-5 sm:p-7">
                <div className="text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#B59C7D]/40 inline-block mb-2">
                    Bengaluru Wellness Benchmark
                  </span>
                  <h3 className="text-base sm:text-xl font-bold font-display text-white">
                    Dr Pilates Atmosphere
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#E5E0D8] mt-1 font-medium">
                    Kalyan Nagar (Above Starbucks) &amp; Kothanur (ANR Arcade)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-4 mt-2 lg:mt-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E7557] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E5E0D8] inline-block">
              Why Dr Pilates?
            </span>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111111] leading-snug">
              A Refined Approach to <span className="font-serif italic font-normal text-[#8E7557]">Strength &amp; Recovery</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
              Founded by clinical physiotherapist <strong>Dr. Govinda Raju S.</strong> and managing director <strong>Vivek</strong>, Dr Pilates bridges medical rehabilitation with athletic refinement. Across our Kalyan Nagar and Kothanur studios, we combine clinical movement science with specialized Reformer Pilates and EMS technology to deliver individualized care for your body.
            </p>

            {/* Founder Spotlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] shadow-2xs hover:border-[#B59C7D]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-full bg-[#B59C7D]/20 text-[#8E7557] font-bold text-[10px] flex items-center justify-center shrink-0">
                    GR
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                      Dr. Govinda Raju S.
                    </h4>
                    <span className="text-[10px] text-[#8E7557] font-semibold">Founder &amp; Clinical Director</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#5A554E] leading-snug">
                  10+ years combining clinical physiotherapy, dry needling, and Reformer Pilates for sustainable pain relief and injury rehab.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] shadow-2xs hover:border-[#B59C7D]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-full bg-[#B59C7D]/20 text-[#8E7557] font-bold text-[10px] flex items-center justify-center shrink-0">
                    V
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                      Vivek
                    </h4>
                    <span className="text-[10px] text-[#8E7557] font-semibold">Co-Founder &amp; Managing Director</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#5A554E] leading-snug">
                  Spearheading operational excellence, apparatus calibration, and bespoke 1-on-1 client experiences across our Bengaluru locations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C7D] shrink-0" />
                  <span className="text-xs font-medium text-[#111111] leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="gold"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Meet Founders &amp; Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
