import React from "react";
import Image from "next/image";
import { TRAINERS } from "@/data/trainers";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Instructors & Physiotherapists | Dr Pilates Bengaluru",
  description:
    "Meet Dr Pilates team of certified Reformer instructors, licensed physiotherapists, and EMS specialists in Bengaluru."
};

export default function TrainersPage() {
  return (
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Instructor Studio Background */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/instructor_welcoming_woman.jpeg"
            alt="Dr Pilates Instructors and Studio Atmosphere"
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
              Our Expert Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Master Instructors & <span className="font-serif italic font-normal text-[#E2C79A]">Licensed Clinicians</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Dedicated to clinical precision, joint alignment, and personal transformation across our Bengaluru studios.
            </p>
          </div>
        </Container>
      </section>

      {/* Trainers Directory */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-sm hover-lift flex flex-col md:flex-row justify-between"
              >
                {/* Image */}
                <div className="relative h-72 md:h-auto md:w-2/5 shrink-0">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#141312]/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#B59C7D]/40">
                    {trainer.experience}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#111111]">
                      {trainer.name}
                    </h3>
                    <span className="text-xs font-bold text-[#8E7557] block mt-0.5 mb-2">
                      {trainer.role}
                    </span>

                    <p className="text-xs text-[#7A756D] font-medium mb-3">
                      🎓 {trainer.certification}
                    </p>

                    <p className="text-sm text-[#4A4641] leading-relaxed mb-4">
                      {trainer.bio}
                    </p>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">
                        Specializations:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {trainer.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#EEEDE8] text-[#111111] px-2.5 py-1 rounded-lg font-medium border border-[#E5E0D8]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E0D8]">
                    <Button
                      href="/appointment?branch=kalyan-nagar"
                      variant="gold"
                      size="sm"
                      fullWidth
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      Book Session with {trainer.name.split(" ")[0]}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
