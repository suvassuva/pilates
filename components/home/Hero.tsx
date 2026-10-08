"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] pt-20 pb-12 sm:pt-32 sm:pb-20 flex items-center bg-[#FAF8F5] text-[#1E1B18] overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#962D2D]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#EFECE6] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-8">
            {/* Main Headline with editorial serif accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#1E1B18] leading-tight sm:leading-[1.12]">
              Pilates with a <span className="font-serif italic font-normal text-[#962D2D]">Purpose.</span>
            </h1>

            {/* Supporting Text */}
            <div className="space-y-4 text-base sm:text-lg lg:text-[18px] text-[#524C46] max-w-2xl leading-relaxed sm:leading-[1.75] font-normal">
              <p>
                Every Pilates session is an opportunity to move better, feel stronger, and build a healthier body. Lasting results come from more than simply completing the exercises—they come from precise technique, proper alignment, and consciously engaging the right muscles.
              </p>
              <p>
                At <strong className="font-semibold text-[#1E1B18]">Dr. Pilates</strong>, we take a science-informed approach to teaching Pilates. Our expert guidance helps you activate your muscles effectively, improve movement patterns, and perform each exercise with greater precision. Through personalized instruction and mindful movement, our sessions are designed to support strength, flexibility, posture, mobility, and overall well-being.
              </p>
              <p className="font-semibold text-[#962D2D] italic pt-1 text-base sm:text-lg lg:text-[18px]">
                Move with intention. Feel the difference. Transform your body with Dr. Pilates.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
              <Button
                href="/appointment?branch=kalyan-nagar"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4" />}
              >
                Start Your Journey with Us
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-[#962D2D]" />}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Visual Hero Feature */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Feature: Pilates Reformer Machine */}
              <div className="relative h-56 sm:h-[550px] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#962D2D]/15 group bg-[#F3EFE9]">
                <Image
                  src="/videos/pilates_reformer_machine.jpeg"
                  alt="Dr Pilates Studio & Reformer Machine"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card Badge: Both Bengaluru Branches */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#EAE4DC] min-w-[240px] hidden sm:block">
                <div className="flex flex-col">
                  {/* Kalyan Nagar */}
                  <Link
                    href="/branches?branch=kalyan-nagar"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF0EE]/50 transition-colors group cursor-pointer"
                    title="View Kalyan Nagar Studio Details"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FAF0EE] group-hover:bg-[#FFFFFF] border border-[#962D2D]/20 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-4 h-4 text-[#962D2D]" />
                    </div>
                    <span className="text-[13px] sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#962D2D] transition-colors leading-tight">
                      Kalyan Nagar
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#962D2D] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto" />
                  </Link>

                  <div className="h-px bg-[#EAE4DC] my-1.5" />

                  {/* Kothanur, Hennur Road */}
                  <Link
                    href="/branches?branch=kothanur"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF0EE]/50 transition-colors group cursor-pointer"
                    title="View Kothanur, Hennur Road Studio Details"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FAF0EE] group-hover:bg-[#FFFFFF] border border-[#962D2D]/20 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-4 h-4 text-[#962D2D]" />
                    </div>
                    <span className="text-[13px] sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#962D2D] transition-colors leading-tight">
                      Kothanur, Hennur Road
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#962D2D] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
