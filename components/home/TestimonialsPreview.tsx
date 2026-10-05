"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, Quote, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, BRANCH_REVIEWS } from "@/data/testimonials";
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
    const children = track.children;
    if (children.length > index && children[index]) {
      const targetElement = children[index] as HTMLElement;
      track.scrollTo({
        left: targetElement.offsetLeft - track.offsetLeft,
        behavior: "smooth"
      });
      setActiveIndex(index);
    }
  };

  // Auto-run slider on all screen sizes (loops continuously, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex >= TESTIMONIALS.length - 1 ? 0 : prevIndex + 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const track = scrollTrackRef.current;
    const scrollLeft = track.scrollLeft;
    const children = track.children;
    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < children.length; i++) {
      const el = children[i] as HTMLElement;
      const diff = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5] text-[#2A2520] relative overflow-hidden">
      {/* Subtle warm background accent */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#962D2D]/6 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionTitle
          subtitle="Client Reviews"
          title="Loved by Clients Across Bengaluru"
          description="Read real experiences from desk professionals, physicians, and fitness enthusiasts who train at Dr Pilates."
          theme="light"
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* Dual Branch Google Reviews Banner */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Kalyan Nagar Branch */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-sm flex items-center justify-between gap-3 hover:border-[#962D2D]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#962D2D] text-white flex flex-col items-center justify-center font-bold shadow-xs shrink-0">
                  <span className="text-sm sm:text-base font-bold leading-none">4.9</span>
                  <div className="flex text-[7px] sm:text-[8px] text-[#FAF8F5] mt-1 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1E1B18]">
                      Kalyan Nagar
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#78716C] mt-0.5">
                    <strong className="text-[#1E1B18] font-semibold">129 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kalyan-nagar"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#FAF8F5] text-[#1E1B18] border border-[#EAE4DC] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] transition-all shadow-xs shrink-0"
              >
                <Star className="w-3 h-3 text-[#962D2D] fill-[#962D2D]" />
                <span>Review</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#78716C]" />
              </a>
            </div>

            {/* Kothanur Branch */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-sm flex items-center justify-between gap-3 hover:border-[#962D2D]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#962D2D] text-white flex flex-col items-center justify-center font-bold shadow-xs shrink-0">
                  <span className="text-sm sm:text-base font-bold leading-none">4.8</span>
                  <div className="flex text-[7px] sm:text-[8px] text-[#FAF8F5] mt-1 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1E1B18]">
                      Kothanur, Hennur Road
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#78716C] mt-0.5">
                    <strong className="text-[#1E1B18] font-semibold">12 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kothanur"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#FAF8F5] text-[#1E1B18] border border-[#EAE4DC] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] transition-all shadow-xs shrink-0"
              >
                <Star className="w-3 h-3 text-[#962D2D] fill-[#962D2D]" />
                <span>Review</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#78716C]" />
              </a>
            </div>
          </div>
        </div>

        {/* Auto-Running Slider Track */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 no-scrollbar scroll-smooth px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[320px] lg:w-[350px] h-[220px] sm:h-[235px] bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#EAE4DC] hover:border-[#962D2D]/50 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between select-none"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-[#962D2D] text-xs">
                    {"★".repeat(item.rating)}
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#962D2D] bg-[#FAF0EE] px-2 py-0.5 rounded-full border border-[#962D2D]/20">
                    {item.source}
                  </span>
                </div>

                <Quote className="w-4 h-4 text-[#962D2D]/35 mb-1" />

                <p className="text-xs sm:text-[13px] text-[#1E1B18] font-serif italic leading-relaxed line-clamp-4">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#EAE4DC] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B18] leading-tight">
                    {item.author}
                  </h4>
                  <span className="text-[10px] text-[#78716C]">{item.role}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#962D2D] font-semibold">
                  {item.branch}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Universal Slider Controls (Prev, Dots, Next) with Pause indicator */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => {
              const prev = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
              scrollToIndex(prev);
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFFFF] border border-[#EAE4DC] text-[#1E1B18] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-6 sm:w-8 bg-[#962D2D]"
                    : "w-2 bg-[#962D2D]/25 hover:bg-[#962D2D]/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              const next = activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
              scrollToIndex(next);
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFFFF] border border-[#EAE4DC] text-[#1E1B18] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Button
            href="/appointment?branch=kalyan-nagar"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Journey with Us
          </Button>
        </div>
      </Container>
    </section>
  );
};
