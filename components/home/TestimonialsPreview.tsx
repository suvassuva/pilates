"use client";

import React, { useState, useEffect } from "react";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { TESTIMONIALS, BRANCH_REVIEWS } from "@/data/testimonials";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

export const TestimonialsPreview: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const kalyanNagarReviews = TESTIMONIALS.filter(
    (t) => t.branch === "Kalyan Nagar"
  );
  const kothanurReviews = TESTIMONIALS.filter(
    (t) => t.branch.includes("Kothanur")
  );

  const slides = [
    {
      id: "kalyan-nagar",
      title: "Kalyan Nagar Studio",
      reviews: kalyanNagarReviews,
      stats: BRANCH_REVIEWS["kalyan-nagar"]
    },
    {
      id: "kothanur",
      title: "Kothanur, Hennur Road Studio",
      reviews: kothanurReviews,
      stats: BRANCH_REVIEWS["kothanur"]
    }
  ];

  // Auto-slide between the 2 branch slides every 6 seconds (pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

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

        {/* Dual Branch Interactive Cards (Clicking switches branch slide) */}
        <div className="mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {/* Kalyan Nagar Branch Toggle */}
            <div
              onClick={() => setActiveSlideIndex(0)}
              className={`px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl border shadow-xs flex items-center justify-between gap-2.5 transition-all cursor-pointer ${
                activeSlideIndex === 0
                  ? "bg-[#FFFFFF] border-[#962D2D] ring-2 ring-[#962D2D]/20 shadow-sm scale-[1.01]"
                  : "bg-[#FFFFFF]/75 border-[#EAE4DC] opacity-80 hover:opacity-100 hover:border-[#962D2D]/50"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#962D2D] text-white flex flex-col items-center justify-center font-bold shadow-xs shrink-0">
                  <span className="text-xs sm:text-[13px] font-bold leading-none">4.9</span>
                  <div className="flex text-[6px] sm:text-[7px] text-[#FAF8F5] mt-0.5 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#1E1B18] leading-tight truncate">
                    Kalyan Nagar
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#78716C] mt-0.5 leading-tight">
                    <strong className="text-[#1E1B18] font-semibold">129 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kalyan-nagar"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#FAF8F5] text-[#1E1B18] border border-[#EAE4DC] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] transition-all shadow-xs shrink-0"
              >
                <Star className="w-2.5 h-2.5 text-[#962D2D] fill-[#962D2D]" />
                <span>Review</span>
                <ExternalLink className="w-2 h-2 text-[#78716C]" />
              </a>
            </div>

            {/* Kothanur Branch Toggle */}
            <div
              onClick={() => setActiveSlideIndex(1)}
              className={`px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl border shadow-xs flex items-center justify-between gap-2.5 transition-all cursor-pointer ${
                activeSlideIndex === 1
                  ? "bg-[#FFFFFF] border-[#962D2D] ring-2 ring-[#962D2D]/20 shadow-sm scale-[1.01]"
                  : "bg-[#FFFFFF]/75 border-[#EAE4DC] opacity-80 hover:opacity-100 hover:border-[#962D2D]/50"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#962D2D] text-white flex flex-col items-center justify-center font-bold shadow-xs shrink-0">
                  <span className="text-xs sm:text-[13px] font-bold leading-none">4.8</span>
                  <div className="flex text-[6px] sm:text-[7px] text-[#FAF8F5] mt-0.5 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#1E1B18] leading-tight truncate">
                    Kothanur, Hennur Road
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-[#78716C] mt-0.5 leading-tight">
                    <strong className="text-[#1E1B18] font-semibold">12 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kothanur"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#FAF8F5] text-[#1E1B18] border border-[#EAE4DC] hover:bg-[#962D2D] hover:text-white hover:border-[#962D2D] transition-all shadow-xs shrink-0"
              >
                <Star className="w-2.5 h-2.5 text-[#962D2D] fill-[#962D2D]" />
                <span>Review</span>
                <ExternalLink className="w-2 h-2 text-[#78716C]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2-Slide Main Carousel (Slide 1: Kalyan Nagar | Slide 2: Kothanur) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="overflow-hidden w-full relative"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full shrink-0">
                <div
                  className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth px-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {slide.reviews.map((item) => (
                    <div
                      key={item.id}
                      className="shrink-0 w-[90vw] sm:w-[520px] lg:w-[580px] self-stretch min-h-[250px] sm:min-h-[265px] bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#EAE4DC] hover:border-[#962D2D]/50 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between select-none"
                    >
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3 shrink-0">
                          <div className="flex text-[#962D2D] text-sm gap-0.5">
                            {"★".repeat(item.rating)}
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#962D2D] bg-[#FAF0EE] px-2.5 py-0.5 rounded-full border border-[#962D2D]/20">
                            {item.source}
                          </span>
                        </div>

                        <p className="text-[13.5px] sm:text-[14.5px] text-[#1E1B18] font-normal leading-relaxed">
                          &ldquo;{item.content}&rdquo;
                        </p>
                      </div>

                      <div className="pt-3 mt-auto border-t border-[#EAE4DC] flex items-center justify-between gap-2.5 shrink-0">
                        <h4 className="text-sm sm:text-base font-bold text-[#1E1B18] leading-none whitespace-nowrap">
                          {item.author}
                        </h4>
                        <span className="text-xs sm:text-[13px] text-[#962D2D] font-medium leading-none shrink-0 whitespace-nowrap">
                          {item.branch}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* End Spacer */}
                  <div className="shrink-0 w-2 sm:w-4" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-8 sm:mt-10 text-center">
          <Button
            href={`/appointment?branch=${slides[activeSlideIndex].id}`}
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
