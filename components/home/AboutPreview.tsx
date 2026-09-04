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
    <section className="py-12 sm:py-16 bg-[#EEEDE8] text-[#111111] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-56 sm:h-72 lg:h-[350px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5E0D8]">
              <Image
                src="/videos/pilates_studio_interior.jpeg"
                alt="Dr Pilates Studio Interior and Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <div className="text-white">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#B59C7D]">
                    Bengaluru Wellness Benchmark
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold font-display text-white">
                    Dr Pilates Studio Atmosphere
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-[#A39E96] mt-0.5">
                    Located at Y4 Heights, Kalyan Nagar (Above Starbucks)
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-2 right-2 sm:right-4 bg-[#FFFFFF] text-[#111111] p-2.5 sm:p-3 rounded-xl shadow-xl border border-[#E5E0D8] max-w-[150px] sm:max-w-[180px]">
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#8E7557] mb-0.5">
                <Sparkles className="w-3 h-3 text-[#B59C7D] shrink-0" />
                <span>Clinical Precision</span>
              </div>
              <p className="text-[8px] sm:text-[10px] text-[#7A756D] leading-tight">
                Where clinical physiotherapy meets luxury Reformer conditioning.
              </p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 mt-2 lg:mt-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E7557] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E5E0D8] inline-block">
              Why Dr Pilates?
            </span>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-[#111111] leading-snug">
              A Refined Approach to <span className="font-serif italic font-normal text-[#8E7557]">Strength & Recovery</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
              At Dr Pilates, we believe true physical transformation requires more than generic workouts. Our Bengaluru studios fuse evidence-based physiotherapy diagnostics with specialized Reformer Pilates and EMS technology to deliver individualized care for your body.
            </p>

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
                About Dr Pilates
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
