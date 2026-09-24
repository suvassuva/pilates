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
          {/* Left Image Collage - Dr. Govinda Raju S. */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-80 sm:h-96 lg:h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] w-full flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5E0D8] group bg-[#141312]">
              <Image
                src="/dr-govinda-raju.jpg"
                alt="Dr. Govinda Raju S. - Founder and Program Director"
                fill
                priority
                quality={95}
                className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Minimalist Dark Gradient Overlay with Clean Name & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5 sm:p-7">
                <div className="text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#B59C7D]/40 inline-block mb-1.5 shadow-sm">
                    Founder &amp; Program Director
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                    Dr. Govinda Raju S.
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#E5E0D8] mt-1 font-medium">
                    Clinical Physiotherapist (BPT) • ACE Certified
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#A8A29E] mt-1">
                    Kalyan Nagar &amp; Kothanur, Hennur Road
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
              Founded by clinical physiotherapist <strong>Dr. Govinda Raju S.</strong> and operations director <strong>Vivek Victor</strong>, Dr Pilates bridges medical rehabilitation with athletic refinement. Across our Kalyan Nagar and Kothanur, Hennur Road studios, we combine clinical movement science with specialized Reformer Pilates and EMS technology to deliver individualized care for your body.
            </p>

            {/* Founder Spotlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] shadow-2xs hover:border-[#B59C7D]/50 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B59C7D]/40 shrink-0 bg-[#E5E0D8]">
                    <Image
                      src="/dr-govinda-raju.jpg"
                      alt="Dr. Govinda Raju S."
                      fill
                      quality={95}
                      className="object-cover object-top"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                      Dr. Govinda Raju S.
                    </h4>
                    <span className="text-[10px] text-[#8E7557] font-semibold block">Founder and Program Director</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#5A554E] leading-snug">
                  10+ years combining clinical physiotherapy, dry needling, and Reformer Pilates for sustainable pain relief and athletic longevity.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] shadow-2xs hover:border-[#B59C7D]/50 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B59C7D]/40 shrink-0 bg-[#E5E0D8]">
                    <Image
                      src="/vivek.jpeg"
                      alt="Vivek Victor"
                      fill
                      quality={95}
                      className="object-cover object-top"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                      Vivek Victor
                    </h4>
                    <span className="text-[10px] text-[#8E7557] font-semibold block">Co-Founder and Operations Director</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#5A554E] leading-snug">
                  22+ years driving operational excellence, customer success, and premium studio hospitality across Dr Pilates.
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
