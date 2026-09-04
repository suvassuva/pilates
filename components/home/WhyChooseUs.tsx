"use client";

import React, { useRef, useState, useEffect } from "react";
import { UserCheck, Sliders, Cpu, Sparkles, User, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export const WhyChooseUs: React.FC = () => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const features = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#B59C7D]" />,
      title: "1. Professional Expertise",
      description: "Led by certified master Pilates trainers & licensed physiotherapists prioritizing joint alignment."
    },
    {
      icon: <Sliders className="w-5 h-5 text-[#B59C7D]" />,
      title: "2. Personalized Programs",
      description: "No cookie-cutter routines. Every session is adjusted to your exact spinal posture & strength baseline."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#B59C7D]" />,
      title: "3. Modern Equipment",
      description: "State-of-the-art Reformer carriages & medical-grade bio-suit EMS technology for maximum efficacy."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#B59C7D]" />,
      title: "4. Premium Studio",
      description: "Immaculate, tranquil, low-density studio space offering a serene sanctuary away from noisy gyms."
    },
    {
      icon: <User className="w-5 h-5 text-[#B59C7D]" />,
      title: "5. Individual Attention",
      description: "Dedicated 1-on-1 coaching focus ensuring every breath and posture angle is executed with precision."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#B59C7D]" />,
      title: "6. Results-Focused Training",
      description: "Structured progressive programs delivering visible improvements in posture, core tone, & joint flexibility."
    }
  ];

  const scrollToIndex = (index: number) => {
    if (!scrollTrackRef.current) return;
    const track = scrollTrackRef.current;
    const cardWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth + 16 : 280;
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  // Auto-run slider on mobile screens only (< 768px)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) return;

      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex === features.length - 1 ? 0 : prevIndex + 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, features.length]);

  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const track = scrollTrackRef.current;
    const scrollPosition = track.scrollLeft;
    const cardWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth + 16 : 280;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), features.length - 1));
  };

  return (
    <section className="py-12 sm:py-20 bg-[#EEEDE8] text-[#111111] relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="The Dr Pilates Standards"
          title="Designed for Discerning Wellness Seekers"
          description="Discover why clients across Bengaluru choose Dr Pilates for physical fitness, posture realignment, and movement therapy."
          theme="light"
          align="center"
          className="mb-6 sm:mb-12"
        />

        {/* Mobile: Horizontal Auto-Slider | Desktop: Static Grid */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 pt-2 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[82vw] md:w-auto p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] hover:border-[#B59C7D]/50 shadow-xs hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#B59C7D]/25 flex items-center justify-center mb-3">
                  {feat.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold font-display text-[#111111] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-7 bg-[#B59C7D]"
                  : "w-2 bg-[#111111]/20 hover:bg-[#B59C7D]/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
