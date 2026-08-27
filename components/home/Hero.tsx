"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] pt-20 pb-12 sm:pt-32 sm:pb-20 flex items-center bg-[#0D0F12] text-[#FAF8F5] overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1D22] text-[#FAF8F5] text-[10px] sm:text-xs font-semibold tracking-wide border border-[#C5A059]/40 shadow-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059]" />
              <span>Bengaluru's Premier Wellness & Pilates Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-[#FAF8F5] leading-tight">
              Move Better. <br />
              <span className="gold-gradient-text">Feel Stronger.</span> <br />
              Live Better.
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-lg text-[#949BA6] max-w-2xl leading-relaxed font-normal">
              Premium Reformer Pilates, EMS Training and Physiotherapy designed to help you build strength, improve mobility and feel your best.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-2">
              <Button
                href="/appointment?branch=kalyan-nagar"
                variant="gold"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book an Appointment
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="md"
                className="border-[#FAF8F5] text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#121417]"
                icon={<ArrowRight className="w-4 h-4 text-[#C5A059]" />}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-4 sm:pt-8 border-t border-[#C5A059]/20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#C5A059] font-bold text-sm sm:text-lg">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C5A059] text-[#C5A059]" />
                  <span>4.9 ★</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#949BA6] font-medium">Google Rating</span>
              </div>

              {/* Reviews */}
              <div className="flex flex-col">
                <span className="text-sm sm:text-lg font-bold text-[#FAF8F5]">129+</span>
                <span className="text-[10px] sm:text-xs text-[#949BA6] font-medium">Google Reviews</span>
              </div>

              {/* Locations */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FAF8F5] font-bold text-sm sm:text-lg">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
                  <span>2</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#949BA6] font-medium">Bengaluru Studios</span>
              </div>

              {/* Training */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FAF8F5] font-bold text-sm sm:text-lg">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
                  <span>Clinical</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#949BA6] font-medium">Expert Physio Team</span>
              </div>
            </div>
          </div>

          {/* Right Visual Hero Feature */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative h-56 sm:h-[550px] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#C5A059]/30">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200"
                  alt="Dr Pilates Reformer Pilates Studio in Bengaluru"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Card Badge 1: Kalyan Nagar Branch */}
              <div className="absolute -bottom-4 -left-4 bg-[#14171C]/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-[#C5A059]/30 max-w-[200px] sm:max-w-[260px] hidden sm:block">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1A1D22] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Flagship Branch
                    </span>
                    <h4 className="text-xs font-bold text-[#FAF8F5]">
                      Kalyan Nagar, HRBR Layout
                    </h4>
                    <p className="text-[10px] text-[#949BA6]">Above Starbucks • Open till 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
