"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TRAINERS } from "@/data/trainers";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

export const TrainersPreview: React.FC = () => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const scrollToIndex = (index: number) => {
    if (!scrollTrackRef.current) return;
    const track = scrollTrackRef.current;
    const cardWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth + 16 : 300;
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
        const nextIndex = prevIndex === TRAINERS.length - 1 ? 0 : prevIndex + 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const track = scrollTrackRef.current;
    const scrollPosition = track.scrollLeft;
    const cardWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth + 16 : 300;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), TRAINERS.length - 1));
  };

  return (
    <section className="py-10 sm:py-20 bg-[#F3EEE7]/50 relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Our Expert Instructors"
          title="Guided by Certified Specialists"
          description="Meet our team of licensed physiotherapists, certified master Reformer instructors, and EMS coaches dedicated to your personal growth."
          align="center"
          className="mb-6 sm:mb-12"
        />

        {/* Mobile: Horizontal Auto-Slider | Desktop: Static 4-Column Grid */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 pt-2 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="snap-start shrink-0 w-[82vw] md:w-auto bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#121417]/10 shadow-xs hover-lift flex flex-col justify-between"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs font-semibold text-white bg-[#121417]/90 px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-bold font-display text-[#121417]">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C5A059] mt-0.5 mb-2 sm:mb-3">
                    {trainer.role}
                  </p>

                  <p className="text-xs text-[#5C626D] mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-[#121417]/5">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5C626D]">
                      Specializations
                    </span>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {trainer.specializations.slice(0, 2).map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] bg-[#F3EEE7] text-[#121417] px-2 py-0.5 rounded-md font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 sm:p-6 pt-0">
                <Button
                  href="/trainers"
                  variant="ghost"
                  size="sm"
                  fullWidth
                  className="text-xs border border-[#121417]/10"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          {TRAINERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-7 bg-[#C5A059]"
                  : "w-2 bg-[#121417]/20 hover:bg-[#C5A059]/50"
              }`}
              aria-label={`Go to trainer ${idx + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/trainers"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-[#C5A059]" />}
          >
            Meet All Instructors
          </Button>
        </div>
      </Container>
    </section>
  );
};
