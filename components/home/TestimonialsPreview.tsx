"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

export const TestimonialsPreview: React.FC = () => {
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
        const nextIndex = prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1;
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
    setActiveIndex(Math.min(Math.max(newIndex, 0), TESTIMONIALS.length - 1));
  };

  return (
    <section className="py-10 sm:py-20 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionTitle
          subtitle="Google Reviews & Feedback"
          title="Loved by Clients Across Bengaluru"
          description="Read real experiences from desk professionals, physicians, and fitness enthusiasts who train at Dr Pilates."
          theme="dark"
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* Rating Banner */}
        <div className="mb-8 max-w-xl mx-auto p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1A1D20] border border-[#C5A059]/30 text-center flex flex-col sm:flex-row items-center justify-around gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-base sm:text-lg">
              4.9
            </div>
            <div className="text-left">
              <div className="flex text-[#C5A059] text-xs sm:text-sm">
                {"★".repeat(5)}
              </div>
              <span className="text-[10px] sm:text-xs text-[#8C929D] font-medium">Google Rating</span>
            </div>
          </div>

          <div className="h-6 w-px bg-[#282C32] hidden sm:block" />

          <div className="text-left">
            <span className="text-lg sm:text-2xl font-bold text-[#FAF8F5] block">
              129+ Reviews
            </span>
            <span className="text-[10px] sm:text-xs text-[#8C929D]">Verified Client Ratings</span>
          </div>
        </div>

        {/* Mobile: Horizontal Auto-Slider | Desktop: Static 3-Column Grid */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 pt-2 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[82vw] md:w-auto bg-[#1A1D20] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#282C32] hover:border-[#C5A059]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C5A059] text-xs sm:text-sm">
                    {"★".repeat(item.rating)}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded-full border border-[#C5A059]/20">
                    {item.source}
                  </span>
                </div>

                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]/40 mb-2" />

                <p className="text-xs sm:text-sm text-[#FAF8F5]/90 leading-relaxed italic mb-4">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#282C32] flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#FAF8F5]">
                    {item.author}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-[#8C929D]">{item.role}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#C5A059] font-medium">
                  {item.branch}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-7 bg-[#C5A059]"
                  : "w-2 bg-white/20 hover:bg-[#C5A059]/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/testimonials"
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Read All Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
};
