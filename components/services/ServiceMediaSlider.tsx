"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Camera } from "lucide-react";
import { ServiceMediaItem } from "@/data/services";

interface ServiceMediaSliderProps {
  media?: ServiceMediaItem[];
  fallbackImage: string;
  title: string;
  badge?: string;
  imagePosition?: string;
  containerClassName?: string;
  sizes?: string;
}

export const ServiceMediaSlider: React.FC<ServiceMediaSliderProps> = ({
  media,
  fallbackImage,
  title,
  badge,
  imagePosition = "object-center",
  containerClassName,
  sizes
}) => {
  // Normalize items to ensure there is always at least one slide
  const items: ServiceMediaItem[] =
    media && media.length > 0
      ? media
      : [{ type: "image", src: fallbackImage, alt: title }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalSlides = items.length;

  const goToNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    },
    [totalSlides]
  );

  const goToPrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    },
    [totalSlides]
  );

  const goToSlide = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex(index);
  };

  // Play active video & pause inactive ones
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === currentIndex) {
        vid.currentTime = 0;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy prevented playback, video remains silent
          });
        }
      } else {
        vid.pause();
      }
    });
  }, [currentIndex]);

  // Autoplay timer (advances every 4.5 seconds unless paused)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides, goToNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 45;
      if (diff > minSwipeDistance) {
        goToNext();
      } else if (diff < -minSwipeDistance) {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    setIsPaused(false);
  };

  const currentItem = items[currentIndex];

  return (
    <div
      className={`relative w-full overflow-hidden select-none group/slider ${
        containerClassName || "aspect-[16/9] bg-[#FAF8F5]"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      {items.map((item, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-1 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={item.src}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt || title}
                fill
                priority={idx === 0}
                className={`object-cover ${item.src.includes("ems_bio_suit") ? "object-top" : imagePosition}`}
                sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              />
            )}
          </div>
        );
      })}

      {/* Subtle top overlay for text & badges readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none z-2" />

      {/* Media Type & Counter Indicator (Top Left) */}
      {totalSlides > 1 && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20 shadow-xs pointer-events-none">
          {currentItem.type === "video" ? (
            <>
              <Play className="w-2.5 h-2.5 fill-white text-white" />
              <span>Video</span>
            </>
          ) : (
            <>
              <Camera className="w-2.5 h-2.5 text-white" />
              <span>Photo</span>
            </>
          )}
          <span className="opacity-70 ml-0.5 font-normal">
            {currentIndex + 1}/{totalSlides}
          </span>
        </div>
      )}

      {/* Program Badge (Top Right) */}
      {badge && (
        <span className="absolute top-3 right-3 z-10 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#B59C7D] text-white border border-white/40 shadow-md pointer-events-none">
          {badge}
        </span>
      )}

      {/* Prev / Next Navigation Arrows (Fade in on hover / visible) */}
      {totalSlides > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/25 shadow-md opacity-70 group-hover/slider:opacity-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/25 shadow-md opacity-70 group-hover/slider:opacity-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom Progress Bars / Dots */}
      {totalSlides > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 z-10 flex items-center justify-center gap-1.5 px-4 pointer-events-auto">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => goToSlide(idx, e)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-white shadow-xs"
                  : "w-2 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
