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
    <section className="py-12 sm:py-20 bg-[#E8DED1] text-[#282622] relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Client Reviews"
          title="Loved by Clients Across Bengaluru"
          description="Read real experiences from desk professionals, physicians, and fitness enthusiasts who train at Dr Pilates."
          theme="light"
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* Dual Branch Interactive Cards (Clean rectangular, 12px radius) */}
        <div className="mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {/* Kalyan Nagar Branch Toggle */}
            <div
              onClick={() => setActiveSlideIndex(0)}
              className={`px-3.5 py-3 rounded-xl border flex items-center justify-between gap-2.5 transition-colors cursor-pointer ${
                activeSlideIndex === 0
                  ? "bg-[#FFFFFF] border-[#282622]"
                  : "bg-[#FFFFFF]/80 border-[#DDD3C8] hover:border-[#282622]/50"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[6px] bg-[#282622] text-[#FFFFFF] flex flex-col items-center justify-center font-medium font-body shrink-0">
                  <span className="text-xs sm:text-[13px] font-medium leading-none">4.9</span>
                  <div className="flex text-[6px] sm:text-[7px] text-[#C5A990] mt-0.5 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="min-w-0 font-body">
                  <h4 className="text-xs sm:text-[13px] font-medium text-[#282622] leading-tight truncate">
                    Kalyan Nagar
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#6E685E] mt-0.5 leading-tight">
                    <strong className="text-[#282622] font-medium">129 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kalyan-nagar"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] text-[11px] font-medium font-body bg-[#F7F3ED] text-[#282622] border border-[#DDD3C8] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] transition-colors shrink-0"
              >
                <Star className="w-2.5 h-2.5 text-[#C5A990] fill-[#C5A990]" />
                <span>Review</span>
                <ExternalLink className="w-2 h-2 text-[#6E685E]" />
              </a>
            </div>

            {/* Kothanur Branch Toggle */}
            <div
              onClick={() => setActiveSlideIndex(1)}
              className={`px-3.5 py-3 rounded-xl border flex items-center justify-between gap-2.5 transition-colors cursor-pointer ${
                activeSlideIndex === 1
                  ? "bg-[#FFFFFF] border-[#282622]"
                  : "bg-[#FFFFFF]/80 border-[#DDD3C8] hover:border-[#282622]/50"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[6px] bg-[#282622] text-[#FFFFFF] flex flex-col items-center justify-center font-medium font-body shrink-0">
                  <span className="text-xs sm:text-[13px] font-medium leading-none">4.8</span>
                  <div className="flex text-[6px] sm:text-[7px] text-[#C5A990] mt-0.5 leading-none">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="min-w-0 font-body">
                  <h4 className="text-xs sm:text-[13px] font-medium text-[#282622] leading-tight truncate">
                    Kothanur, Hennur Road
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#6E685E] mt-0.5 leading-tight">
                    <strong className="text-[#282622] font-medium">12 Google reviews</strong>
                  </p>
                </div>
              </div>

              <a
                href={BRANCH_REVIEWS["kothanur"].googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] text-[11px] font-medium font-body bg-[#F7F3ED] text-[#282622] border border-[#DDD3C8] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] transition-colors shrink-0"
              >
                <Star className="w-2.5 h-2.5 text-[#C5A990] fill-[#C5A990]" />
                <span>Review</span>
                <ExternalLink className="w-2 h-2 text-[#6E685E]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2-Slide Main Carousel */}
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
                      className="shrink-0 w-[90vw] sm:w-[520px] lg:w-[580px] self-stretch min-h-[250px] sm:min-h-[265px] bg-[#FFFFFF] p-5 sm:p-7 rounded-xl border border-[#DDD3C8] hover:border-[#C5A990] transition-colors duration-200 flex flex-col justify-between select-none"
                    >
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3 shrink-0">
                          <div className="flex text-[#282622] text-sm gap-0.5">
                            {"★".repeat(item.rating)}
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-medium font-body uppercase tracking-wider text-[#282622] bg-[#F7F3ED] px-2.5 py-1 rounded-[6px] border border-[#DDD3C8]">
                            {item.source}
                          </span>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#282622] font-normal font-body leading-[1.65]">
                          &ldquo;{item.content}&rdquo;
                        </p>
                      </div>

                      <div className="pt-4 mt-auto border-t border-[#DDD3C8] flex items-center justify-between gap-2.5 shrink-0">
                        <h4 className="text-sm sm:text-base font-normal font-display text-[#282622] leading-none whitespace-nowrap">
                          {item.author}
                        </h4>
                        <span className="text-xs sm:text-[13px] text-[#6E685E] font-normal font-body leading-none shrink-0 whitespace-nowrap">
                          {item.branch}
                        </span>
                      </div>
                    </div>
                  ))}
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
