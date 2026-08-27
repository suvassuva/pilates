import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const AboutPreview: React.FC = () => {
  const highlights = [
    "Professional guidance by licensed physiotherapists & master trainers",
    "Personalized movement programs tailored to individual joint limits",
    "State-of-the-art Reformer & German EMS bio-suit technology",
    "Serene, high-hygiene studio environment designed for wellness",
    "1-on-1 dedicated attention without crowded gym distractions",
    "Results-focused strength, posture, and recovery tracking"
  ];

  return (
    <section className="py-10 sm:py-20 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-64 sm:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/30">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
                alt="Dr Pilates Studio Interior and Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/90 via-transparent to-transparent flex items-end p-4 sm:p-8">
                <div className="text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                    Bengaluru Wellness Benchmark
                  </span>
                  <h3 className="text-base sm:text-2xl font-bold font-display text-white">
                    Dr Pilates Studio Atmosphere
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#949BA6] mt-0.5 sm:mt-1">
                    Located at Y4 Heights, 6th Main Rd, Kalyan Nagar (Above Starbucks)
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Badge (Made Compact) */}
            <div className="absolute -bottom-3 right-2 sm:right-6 bg-[#0D0F12] text-[#FAF8F5] p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-[#C5A059]/40 max-w-[170px] sm:max-w-[220px]">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#C5A059] mb-0.5 sm:mb-1">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
                <span>Clinical Precision</span>
              </div>
              <p className="text-[9px] sm:text-xs text-[#949BA6] leading-tight sm:leading-snug">
                Where clinical physiotherapy meets luxury Reformer conditioning.
              </p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 mt-4 lg:mt-0">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#1A1D20] px-3 py-1 rounded-full border border-[#C5A059]/30 inline-block">
              Why Dr Pilates?
            </span>

            <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold font-display text-[#FAF8F5] leading-tight">
              A Refined Approach to Physical Strength & Recovery
            </h2>

            <p className="text-xs sm:text-base text-[#949BA6] leading-relaxed">
              At Dr Pilates, we believe true physical transformation requires more than generic workouts. Our Bengaluru studios fuse evidence-based physiotherapy diagnostics with specialized Reformer Pilates and EMS technology to deliver individualized care for your body.
            </p>

            <div className="space-y-2 sm:space-y-3 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#FAF8F5] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Button
                href="/about"
                variant="gold"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                About Dr Pilates
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
