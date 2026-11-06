"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { Container } from "../ui/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 bg-[#F7F3ED]">
      <Container className="relative z-10">
        {/* Luxury Rounded Hero Card with Warm Earthy Taupe Gradient */}
        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-gradient-to-r from-[#68645C] via-[#786D62] via-40% to-[#8E8172] border border-white/20 shadow-2xl text-white min-h-[420px] md:min-h-[440px] lg:min-h-[460px] xl:min-h-[475px] flex flex-col lg:flex-row items-stretch">
          
          {/* Visual Image: TOP on Mobile (order-1), FULL-BLEED on Desktop (lg:absolute lg:inset-0) */}
          <div className="order-1 lg:order-2 relative w-full lg:absolute lg:inset-0 h-76 sm:h-84 lg:h-full overflow-hidden">
            {/* Image Container with Responsive Alpha Mask (Full Card Width on Desktop for 100% Zero-Line Dissolve) */}
            <div className="relative w-full h-full hero-image-mask">
              <Image
                src="/images/Taupe Gradient Pilates Studio Workout.png"
                alt="Dr. Pilates - Premier Reformer Pilates Studio in Bangalore (Kalyan Nagar & Hennur, Kothanur)"
                fill
                priority
                quality={95}
                className="object-cover object-[80%_center] sm:object-[82%_center] lg:object-right hero-image-target"
                sizes="(max-width: 1024px) 100vw, 100vw"
              />
            </div>

            {/* Studio Locations Tag: Directly on/near Image on Mobile */}
            <div className="lg:hidden absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DDD3C8] shadow-md text-[#282622]">
              <Link
                href="/branches?branch=kalyan-nagar"
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-[#F7F3ED] text-[11px] sm:text-xs font-medium text-[#282622] transition-colors"
                title="Kalyan Nagar Studio"
              >
                <MapPin className="w-3 h-3 text-[#5C604E] shrink-0" />
                <span>Kalyan Nagar</span>
              </Link>
              <div className="w-px h-3.5 bg-[#DDD3C8]" />
              <Link
                href="/branches?branch=kothanur"
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-[#F7F3ED] text-[11px] sm:text-xs font-medium text-[#282622] transition-colors"
                title="Kothanur, Hennur Road Studio"
              >
                <MapPin className="w-3 h-3 text-[#5C604E] shrink-0" />
                <span>Kothanur, Hennur Rd</span>
              </Link>
            </div>
          </div>

          {/* Editorial Text & Action Buttons: BELOW Image on Mobile (order-2), OVERLAY on Desktop (order-1, relative z-10) */}
          <div className="order-2 lg:order-1 relative z-10 w-full lg:w-[54%] xl:w-[50%] p-6 sm:p-7 lg:p-9 xl:p-11 flex flex-col justify-between lg:justify-center space-y-5 lg:space-y-6 bg-gradient-to-r from-[#68645C] via-[#786D62] via-40% to-[#8E8172] lg:bg-none lg:bg-transparent">
            <div className="space-y-3 sm:space-y-3.5">
              {/* Brand Logo: White Script & Signature Red Heart (Hidden on mobile where navbar already displays the logo) */}
              <div className="hidden lg:inline-block pb-0.5 sm:pb-1">
                <Image
                  src="/logo-white.png"
                  alt="Dr. Pilates"
                  width={220}
                  height={70}
                  priority
                  className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
                />
              </div>

              {/* Main Headline (DM Serif Display) */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[37px] font-normal font-display tracking-tight text-white leading-[1.15]">
                Pilates with a{" "}
                <span className="font-serif italic text-[#F7F3ED]">
                  Purpose.
                </span>
              </h1>

              {/* Supporting Body Paragraphs */}
              <div className="space-y-2.5 text-[13px] sm:text-[14px] lg:text-[14.5px] text-white/95 leading-[1.6] font-normal font-body max-w-xl">
                <p>
                  Every Pilates session is an opportunity to move better, feel stronger, and build a healthier body. Lasting results come from more than simply completing the exercises—they come from precise technique, proper alignment, and consciously engaging the right muscles.
                </p>
                <p>
                  At <strong className="font-medium text-white">Dr. Pilates</strong>, we specialize in <strong className="font-medium text-white">physiotherapist guided Pilates</strong> and <strong className="font-medium text-white">private Pilates sessions in Bangalore</strong>. Whether you are joining our signature <strong className="font-medium text-white">Reformer Pilates classes</strong> or visiting our dedicated <strong className="font-medium text-white">Pilates studio</strong> in <strong className="font-medium text-white">Kalyan Nagar</strong> or <strong className="font-medium text-white">Kothanur, Hennur Road</strong>, our science-informed guidance helps you activate muscles effectively, align your posture, and build lasting functional strength.
                </p>
                <p className="font-medium text-white italic pt-1 text-[13px] sm:text-[14px] lg:text-[14.5px]">
                  Move with intention. Feel the difference. Transform your body with Dr. Pilates.
                </p>
              </div>
            </div>

            {/* Dual Action Buttons (Reference Design Styling) */}
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              {/* Button 1: Solid White Button with Dark Charcoal Text */}
              <Link
                href="/appointment?branch=kalyan-nagar"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-white hover:bg-[#F7F3ED] text-[#282622] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm font-body cursor-pointer border border-white"
              >
                <span>Start Your Journey with Us</span>
                <Calendar className="w-4 h-4 text-[#282622]" />
              </Link>

              {/* Button 2: Minimalist White Outline */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 font-body cursor-pointer backdrop-blur-xs"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Floating Studio Location Badge (Desktop Only) */}
          <div className="hidden lg:block absolute lg:bottom-5 lg:right-5 xl:bottom-6 xl:right-6 bg-[#FFFFFF] p-2.5 sm:p-3 rounded-xl border border-[#DDD3C8] shadow-2xl min-w-[200px] z-20 text-[#282622]">
            <div className="flex flex-col">
              {/* Kalyan Nagar */}
              <Link
                href="/branches?branch=kalyan-nagar"
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-[#F7F3ED] transition-colors group cursor-pointer"
                title="View Kalyan Nagar Studio Details"
              >
                <div className="w-6 h-6 rounded-[5px] bg-[#E8DED1] group-hover:bg-[#FFFFFF] border border-[#DDD3C8] flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-3 h-3 text-[#282622]" />
                </div>
                <span className="text-xs sm:text-[13px] font-medium text-[#282622] leading-tight font-body">
                  Kalyan Nagar
                </span>
              </Link>

              <div className="h-px bg-[#DDD3C8] my-1" />

              {/* Kothanur, Hennur Road */}
              <Link
                href="/branches?branch=kothanur"
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-[#F7F3ED] transition-colors group cursor-pointer"
                title="View Kothanur, Hennur Road Studio Details"
              >
                <div className="w-6 h-6 rounded-[5px] bg-[#E8DED1] group-hover:bg-[#FFFFFF] border border-[#DDD3C8] flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-3 h-3 text-[#282622]" />
                </div>
                <span className="text-xs sm:text-[13px] font-medium text-[#282622] leading-tight font-body">
                  Kothanur, Hennur Road
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* Scoped CSS for responsive mask and image positioning: full clarity on mobile, smooth dissolve on desktop */}
        <style jsx>{`
          .hero-image-target {
            object-fit: cover;
            object-position: 80% center !important;
          }
          .hero-image-mask {
            mask-image: none;
            -webkit-mask-image: none;
          }
          @media (min-width: 1024px) {
            .hero-image-target {
              object-position: right center !important;
            }
            .hero-image-mask {
              mask-image: linear-gradient(
                to right,
                transparent 0%,
                transparent 30%,
                rgba(0, 0, 0, 0.04) 40%,
                rgba(0, 0, 0, 0.3) 52%,
                rgba(0, 0, 0, 0.75) 66%,
                black 80%
              );
              -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                transparent 30%,
                rgba(0, 0, 0, 0.04) 40%,
                rgba(0, 0, 0, 0.3) 52%,
                rgba(0, 0, 0, 0.75) 66%,
                black 80%
              );
            }
          }
        `}</style>

      </Container>
    </section>
  );
};
