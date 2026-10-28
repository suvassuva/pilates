"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] pt-20 pb-12 sm:pt-28 sm:pb-16 flex items-center bg-[#F7F3ED] text-[#282622]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            {/* Main Headline (Responsive 36px mobile, 48-64px desktop with DM Serif Display) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-normal font-display tracking-tight text-[#282622] leading-[1.12]">
              Pilates with a <span className="font-serif italic text-[#282622]">Purpose.</span>
            </h1>

            {/* Supporting Text (16–18px, ~1.6 line-height) */}
            <div className="space-y-3.5 text-base sm:text-[17px] text-[#6E685E] max-w-2xl leading-[1.65] font-normal font-body">
              <p>
                Every Pilates session is an opportunity to move better, feel stronger, and build a healthier body. Lasting results come from more than simply completing the exercises—they come from precise technique, proper alignment, and consciously engaging the right muscles.
              </p>
              <p>
                At <strong className="font-medium text-[#282622]">Dr. Pilates</strong>, we take a science-informed approach to teaching Pilates. Our expert guidance helps you activate your muscles effectively, improve movement patterns, and perform each exercise with greater precision. Through personalized instruction and mindful movement, our sessions are designed to support strength, flexibility, posture, mobility, and overall well-being.
              </p>
              <p className="font-medium text-[#282622] italic pt-1 text-base sm:text-[17px]">
                Move with intention. Feel the difference. Transform your body with Dr. Pilates.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3">
              <Button
                href="/appointment?branch=kalyan-nagar"
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Start Your Journey with Us
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-[#282622]" />}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Visual Hero Feature */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Feature: Clean rectangular card with 12px restrained radius & photography focus */}
              <div className="relative h-60 sm:h-[520px] w-full rounded-xl overflow-hidden border border-[#DDD3C8] group bg-[#E8DED1]">
                <Image
                  src="/videos/pilates_reformer_machine.jpeg"
                  alt="Dr Pilates Studio & Reformer Machine"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Branch Quick Card (Clean 12px radius, white surface, subtle 1px border) */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFFFFF] p-3 sm:p-4 rounded-xl border border-[#DDD3C8] min-w-[240px] hidden sm:block">
                <div className="flex flex-col">
                  {/* Kalyan Nagar */}
                  <Link
                    href="/branches?branch=kalyan-nagar"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F7F3ED] transition-colors group cursor-pointer"
                    title="View Kalyan Nagar Studio Details"
                  >
                    <div className="w-7 h-7 rounded-[6px] bg-[#E8DED1] group-hover:bg-[#FFFFFF] border border-[#DDD3C8] flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#282622]" />
                    </div>
                    <span className="text-[13px] sm:text-sm font-medium text-[#282622] transition-colors leading-tight font-body">
                      Kalyan Nagar
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A990] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto" />
                  </Link>

                  <div className="h-px bg-[#DDD3C8] my-1.5" />

                  {/* Kothanur, Hennur Road */}
                  <Link
                    href="/branches?branch=kothanur"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F7F3ED] transition-colors group cursor-pointer"
                    title="View Kothanur, Hennur Road Studio Details"
                  >
                    <div className="w-7 h-7 rounded-[6px] bg-[#E8DED1] group-hover:bg-[#FFFFFF] border border-[#DDD3C8] flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#282622]" />
                    </div>
                    <span className="text-[13px] sm:text-sm font-medium text-[#282622] transition-colors leading-tight font-body">
                      Kothanur, Hennur Road
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A990] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto" />
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
