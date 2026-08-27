import React from "react";
import Image from "next/image";
import Metadata from "next";
import { TRAINERS } from "@/data/trainers";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { Award, Calendar, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Instructors & Physiotherapists | Dr Pilates Bengaluru",
  description:
    "Meet Dr Pilates team of certified Reformer instructors, licensed physiotherapists, and EMS specialists in Bengaluru."
};

export default function TrainersPage() {
  return (
    <div className="pt-28 pb-12">
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Our Expert Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Master Instructors & Licensed Clinicians
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Dedicated to clinical precision, joint alignment, and personal transformation across our Bengaluru studios.
            </p>
          </div>
        </Container>
      </section>

      {/* Trainers Directory */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#121417]/10 shadow-md hover-lift flex flex-col md:flex-row justify-between"
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
                  <div className="absolute top-4 left-4 bg-[#121417]/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#C5A059]/40">
                    {trainer.experience}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#121417]">
                      {trainer.name}
                    </h3>
                    <span className="text-xs font-bold text-[#C5A059] block mt-0.5 mb-2">
                      {trainer.role}
                    </span>

                    <p className="text-xs text-[#8C929D] font-medium mb-3">
                      🎓 {trainer.certification}
                    </p>

                    <p className="text-sm text-[#5C626D] leading-relaxed mb-4">
                      {trainer.bio}
                    </p>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#121417]">
                        Specializations:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {trainer.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#F3EEE7] text-[#121417] px-2.5 py-1 rounded-lg font-medium border border-[#121417]/5"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#121417]/10">
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
