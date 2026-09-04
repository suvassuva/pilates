"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] pt-20 pb-12 sm:pt-32 sm:pb-20 flex items-center bg-[#FAF8F5] text-[#111111] overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#B59C7D]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#EEEDE8] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEDE8] text-[#111111] text-[10px] sm:text-xs font-semibold tracking-wide border border-[#E5E0D8] shadow-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B59C7D]" />
              <span className="uppercase tracking-widest text-[10px]">Bengaluru's Premier Wellness & Pilates Studio</span>
            </div>

            {/* Main Headline with Amanda-inspired editorial serif accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-[#111111] leading-[1.08]">
              Move Better. <br />
              <span className="font-serif italic font-normal text-[#8E7557]">Feel Stronger.</span> <br />
              Live Better.
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-lg text-[#4A4641] max-w-2xl leading-relaxed font-normal">
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
                icon={<ArrowRight className="w-4 h-4 text-[#B59C7D]" />}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-4 sm:pt-8 border-t border-[#E5E0D8] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#8E7557] font-bold text-sm sm:text-lg">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#B59C7D] text-[#B59C7D]" />
                  <span>4.9 ★</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#7A756D] font-medium">Google Rating</span>
              </div>

              {/* Reviews */}
              <div className="flex flex-col">
                <span className="text-sm sm:text-lg font-bold text-[#111111]">129+</span>
                <span className="text-[10px] sm:text-xs text-[#7A756D] font-medium">Google Reviews</span>
              </div>

              {/* Locations */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#111111] font-bold text-sm sm:text-lg">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D]" />
                  <span>2</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#7A756D] font-medium">Bengaluru Studios</span>
              </div>

              {/* Training */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#111111] font-bold text-sm sm:text-lg">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D]" />
                  <span>Clinical</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#7A756D] font-medium">Expert Physio Team</span>
              </div>
            </div>
          </div>

          {/* Right Visual Hero Feature */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Video Feature */}
              <div className="relative h-56 sm:h-[550px] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#B59C7D]/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/videos/woman_performing_reformer.jpeg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/woman_enters_studio.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card Badge 1: Kalyan Nagar Branch */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-[#E5E0D8] max-w-[200px] sm:max-w-[260px] hidden sm:block">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#EEEDE8] text-[#B59C7D] flex items-center justify-center shrink-0 border border-[#B59C7D]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8E7557]">
                      Flagship Branch
                    </span>
                    <h4 className="text-xs font-bold text-[#111111]">
                      Kalyan Nagar, HRBR Layout
                    </h4>
                    <p className="text-[10px] text-[#7A756D]">Above Starbucks • Open till 8 PM</p>
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
