"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ZoomIn, X, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";

interface PressArticle {
  id: string;
  image: string;
  title: string;
  publication: string;
  date: string;
  description: string;
}

const PRESS_ARTICLES: PressArticle[] = [
  {
    id: "workout-without-weights",
    image: "/images/dr_govind_sunday_chronicle_workout_without_weights.jpeg",
    title: "WORKOUT without weights",
    publication: "Sunday Chronicle",
    date: "Aug 4, 2019",
    description:
      "A clinical breakdown of zero-equipment bodyweight exercises designed to burn calories, elevate metabolic rate, and build functional stamina safely without heavy joint compression."
  },
  {
    id: "be-toned-party-hard",
    image: "/images/dr_govind_sunday_chronicle_be_toned_party_hard.jpeg",
    title: "Be toned to PARTY HARD!",
    publication: "Sunday Chronicle",
    date: "Dec 8, 2019",
    description:
      "Targeted routines focusing on deep core strength, neurotrophic factor (BDNF) activation, and posture alignment during high-demand festive seasons."
  }
];

export const PressRecognition: React.FC = () => {
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);

  const activeArticle =
    activeArticleIndex !== null ? PRESS_ARTICLES[activeArticleIndex] : null;

  const handleNext = useCallback(() => {
    if (activeArticleIndex === null) return;
    setActiveArticleIndex((prev) =>
      prev !== null && prev < PRESS_ARTICLES.length - 1 ? prev + 1 : 0
    );
  }, [activeArticleIndex]);

  const handlePrev = useCallback(() => {
    if (activeArticleIndex === null) return;
    setActiveArticleIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : PRESS_ARTICLES.length - 1
    );
  }, [activeArticleIndex]);

  // Handle ESC and Arrow keys for modal
  useEffect(() => {
    if (activeArticleIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveArticleIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticleIndex, handleNext, handlePrev]);

  return (
    <section className="py-12 sm:py-16 bg-[#E8DED1] text-[#282622] border-b border-[#DDD3C8]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-medium font-body tracking-widest uppercase bg-[#F7F3ED] text-[#282622] border border-[#DDD3C8]">
            <Newspaper className="w-3.5 h-3.5 text-[#C5A990]" />
            Media &amp; Press Recognition
          </span>
        </div>

        {/* Compact Cards Grid (Clean rectangular 12px cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto items-stretch">
          {PRESS_ARTICLES.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => setActiveArticleIndex(idx)}
              className="bg-[#FFFFFF] rounded-xl border border-[#DDD3C8] hover:border-[#C5A990] transition-colors duration-200 flex flex-col sm:flex-row overflow-hidden group cursor-pointer"
            >
              {/* Compact Thumbnail Container */}
              <div className="relative w-full sm:w-44 md:w-48 h-48 sm:h-auto shrink-0 bg-[#282622] overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.publication} - ${article.title} by Dr. Govinda Raju`}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-top sm:object-contain group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-9 h-9 rounded-[6px] bg-[#282622] text-white flex items-center justify-center shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <div className="mb-2.5">
                  <span className="text-[10px] font-medium font-body uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#F7F3ED] text-[#282622] border border-[#DDD3C8]">
                    {article.publication} • {article.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-normal font-display text-[#282622] leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E685E] leading-[1.6] font-body">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {activeArticle && activeArticleIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#121214]/94 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveArticleIndex(null);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveArticleIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation: Previous Article */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Previous newspaper article"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next Article */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Next newspaper article"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content - Big View */}
          <div className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center">
            {/* Big Newspaper Image Container (Clean 12px radius) */}
            <div className="relative w-full h-[68vh] sm:h-[78vh] rounded-xl overflow-hidden border border-white/20 bg-[#18181B] flex items-center justify-center">
              <Image
                src={activeArticle.image}
                alt={`${activeArticle.publication} - ${activeArticle.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 95vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-3 text-center px-4 max-w-2xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs font-medium font-body uppercase tracking-wider text-[#DDD3C8]">
                  {activeArticle.publication} • {activeArticle.date}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/70 font-body">
                  {activeArticleIndex + 1} of {PRESS_ARTICLES.length}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-normal font-display text-white">
                {activeArticle.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
