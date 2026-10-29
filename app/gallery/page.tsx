"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { X, ZoomIn, Play, Camera, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] ?? null : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1
    );
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="pb-12 bg-[#F7F3ED]">
      {/* Page Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero_gallery_luminous.jpg"
            alt="Dr Pilates Bright Sunlit Visual Gallery Studio"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Luminous airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282622]/75 via-[#282622]/40 to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-normal font-display tracking-tight text-white leading-tight sm:leading-[1.15]">
              Dr Pilates <span className="font-serif italic text-white">Live Gallery</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 bg-[#F7F3ED]">
        <Container>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-96 rounded-xl overflow-hidden border border-[#DDD3C8] cursor-pointer bg-[#E8DED1] transition-colors duration-200"
                >
                  {/* Media Content */}
                  {item.type === "video" && item.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={item.image}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className={`object-cover group-hover:scale-102 transition-transform duration-500 ${
                        item.image.includes("ems_bio_suit") ? "object-top" : "object-center"
                      }`}
                    />
                  )}

                  {/* Format Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-[#282622]/85 text-white text-[10px] font-medium font-body px-2.5 py-1 rounded-[6px] border border-white/20 flex items-center gap-1.5">
                    {item.type === "video" ? (
                      <>
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-2.5 h-2.5" />
                        <span>Photo</span>
                      </>
                    )}
                  </div>

                  {/* Hover Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="w-12 h-12 rounded-[6px] bg-[#282622]/90 border border-white/40 flex items-center justify-center text-white shadow-md">
                      {item.type === "video" ? (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      ) : (
                        <ZoomIn className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/90 via-[#18181B]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-medium font-body uppercase tracking-wider text-[#E8DED1] mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-normal font-display text-white leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-xs text-[#FFFFFF]/90 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === "video" ? (
                        <>
                          <Play className="w-3.5 h-3.5 text-[#E8DED1]" />
                          <span>Click to play video</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-3.5 h-3.5 text-[#E8DED1]" />
                          <span>Click to view full photo</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#121214]/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-[6px] bg-white/10 text-white hover:bg-[#282622] transition-colors focus:outline-none cursor-pointer z-30"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center">
            {/* Media Container (Clean 12px radius) */}
            <div className="relative w-full h-[62vh] sm:h-[74vh] rounded-xl overflow-hidden border border-white/20 bg-[#18181B] flex items-center justify-center">
              {currentItem.type === "video" && currentItem.video ? (
                <video
                  key={currentItem.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  poster={currentItem.image}
                >
                  <source src={currentItem.video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.alt}
                    fill
                    priority
                    sizes="(max-width: 1280px) 95vw, 1200px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Bottom Caption & Counter */}
            <div className="mt-4 text-center px-4 max-w-2xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8DED1]">
                  {currentItem.category}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/60">
                  {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 line-clamp-2">
                {currentItem.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
