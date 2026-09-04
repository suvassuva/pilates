"use client";

import React, { useRef, useState, useEffect } from "react";
import { SERVICES } from "@/data/services";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../services/ServiceCard";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const ServicesPreview: React.FC = () => {
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
        const nextIndex = prevIndex === SERVICES.length - 1 ? 0 : prevIndex + 1;
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
    setActiveIndex(Math.min(Math.max(newIndex, 0), SERVICES.length - 1));
  };

  return (
    <section className="py-10 sm:py-20 bg-[#FAF8F5] relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Tailored Movement & Wellness Offerings"
          description="Explore our specialized clinical and conditioning programs designed to optimize core strength, accelerate fat loss, relieve pain, and restore vital mobility."
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
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="snap-start shrink-0 w-[82vw] md:w-auto"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-7 bg-[#B59C7D]"
                  : "w-2 bg-[#111111]/20 hover:bg-[#B59C7D]/50"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/services"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-[#C5A059]" />}
          >
            View All Services Details
          </Button>
        </div>
      </Container>
    </section>
  );
};
