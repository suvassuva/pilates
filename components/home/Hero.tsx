"use client";

import React from "react";
import { Calendar, ArrowRight, Sparkles, MapPin } from "lucide-react";
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
              <span className="uppercase tracking-widest text-[10px]">Dr Pilates • Bengaluru&apos;s Premier Wellness &amp; Movement Studio</span>
            </div>

            {/* Main Headline with editorial serif accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#111111] leading-tight sm:leading-[1.12]">
              Pilates with <span className="font-serif italic font-normal text-[#8E7557]">Purpose.</span>
            </h1>

            {/* Supporting Text */}
            <div className="space-y-3 text-xs sm:text-sm lg:text-[15px] text-[#4A4641] max-w-2xl leading-relaxed font-normal">
              <p>
                Every Pilates session is an opportunity to move better, feel stronger, and build a healthier body. Lasting results come from more than simply completing the exercises—they come from precise technique, proper alignment, and consciously engaging the right muscles.
              </p>
              <p>
                At <strong className="font-semibold text-[#111111]">Dr. Pilates</strong>, we take a science-informed approach to teaching Pilates. Our expert guidance helps you activate your muscles effectively, improve movement patterns, and perform each exercise with greater precision. Through personalized instruction and mindful movement, our sessions are designed to support strength, flexibility, posture, mobility, and overall well-being.
              </p>
              <p className="font-medium text-[#8E7557] italic">
                Move with intention. Feel the difference. Transform your body with Dr. Pilates.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-2">
              <Button
                href="/appointment?branch=kalyan-nagar"
                variant="gold"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Start Your Journey with Us
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

              {/* Floating Card Badge: Both Bengaluru Branches */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-[#E5E0D8] min-w-[220px] hidden sm:block">
                <div className="flex flex-col">
                  {/* Kalyan Nagar */}
                  <a
                    href="https://maps.google.com/?q=Dr+Pilates+Y4+Heights+Kalyan+Nagar+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-[#FAF8F5] transition-colors group cursor-pointer"
                    title="Open Kalyan Nagar Studio in Google Maps"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FAF8F5] group-hover:bg-[#FFFFFF] border border-[#B59C7D]/35 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#B59C7D]" />
                    </div>
                    <span className="text-xs font-bold text-[#111111] group-hover:text-[#8E7557] transition-colors leading-tight">
                      Kalyan Nagar
                    </span>
                  </a>

                  <div className="h-px bg-[#E5E0D8]/70 my-1" />

                  {/* Kothanur, Hennur Road */}
                  <a
                    href="https://maps.google.com/?q=ANR+Arcade+Doddagubbi+Main+Road+Bengaluru+560077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-[#FAF8F5] transition-colors group cursor-pointer"
                    title="Open Kothanur, Hennur Road Studio in Google Maps"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FAF8F5] group-hover:bg-[#FFFFFF] border border-[#B59C7D]/35 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#B59C7D]" />
                    </div>
                    <span className="text-xs font-bold text-[#111111] group-hover:text-[#8E7557] transition-colors leading-tight">
                      Kothanur, Hennur Road
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
