"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem, GalleryCategory } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { X, ZoomIn, Play, Camera, Film, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [selectedType, setSelectedType] = useState<"all" | "image" | "video">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category and media type
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesType =
      selectedType === "all" || item.type === selectedType;
    return matchesCategory && matchesType;
  });

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [lightboxIndex, filteredItems.length]);

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
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/studio_interior_reformer_beds.webp"
            alt="Dr Pilates Visual Gallery Background"
            fill
            priority
            className="object-cover object-center opacity-40 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/60 to-black/40" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B59C7D]/20 text-[#E2C79A] text-xs font-semibold uppercase tracking-widest border border-[#B59C7D]/30 backdrop-blur-sm">
              Authentic Studio Media
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Dr Pilates <span className="font-serif italic font-normal text-[#E2C79A]">Live Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F5]/90 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Explore authentic movement, clinical training, and precision equipment inside our Bengaluru studio — featuring Reformer flows, Cadillac acrobatics, Stability Chair workouts, EMS training, and studio spaces.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5]">
        <Container>
          {/* Controls Bar: Category Pills & Media Filter */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#E5E0D8]">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#141312] text-[#E2C79A] shadow-md shadow-black/10 scale-105"
                        : "bg-white text-[#5C554E] hover:text-[#141312] hover:bg-[#F3EFEA] border border-[#E5E0D8]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Media Type Filter (All / Photos / Videos) */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#E5E0D8] shadow-sm shrink-0">
              <button
                onClick={() => {
                  setSelectedType("all");
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedType === "all"
                    ? "bg-[#141312] text-[#FAF8F5]"
                    : "text-[#7C756D] hover:text-[#141312]"
                }`}
              >
                All ({GALLERY_ITEMS.length})
              </button>
              <button
                onClick={() => {
                  setSelectedType("image");
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedType === "image"
                    ? "bg-[#141312] text-[#FAF8F5]"
                    : "text-[#7C756D] hover:text-[#141312]"
                }`}
              >
                <Camera className="w-3 h-3 text-[#B59C7D]" />
                Photos ({GALLERY_ITEMS.filter((i) => i.type === "image").length})
              </button>
              <button
                onClick={() => {
                  setSelectedType("video");
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedType === "video"
                    ? "bg-[#141312] text-[#FAF8F5]"
                    : "text-[#7C756D] hover:text-[#141312]"
                }`}
              >
                <Film className="w-3 h-3 text-[#B59C7D]" />
                Videos ({GALLERY_ITEMS.filter((i) => i.type === "video").length})
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#E5E0D8]">
              <p className="text-lg font-medium text-[#7C756D]">
                No moments found in this category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedType("all");
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-[#141312] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2825] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-96 rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-sm cursor-pointer hover-lift bg-[#141312]"
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Format Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-[#141312]/80 text-[#B59C7D] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-[#B59C7D]/30 flex items-center gap-1.5 shadow-sm">
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-[#B59C7D]/70 flex items-center justify-center text-[#B59C7D] shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.type === "video" ? (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      ) : (
                        <ZoomIn className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/95 via-[#141312]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B59C7D] mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-xs text-[#FAF8F5]/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === "video" ? (
                        <>
                          <Play className="w-3.5 h-3.5 text-[#B59C7D]" />
                          <span>Click to play video</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-3.5 h-3.5 text-[#B59C7D]" />
                          <span>Click to view full photo</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer z-30 shadow-lg"
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
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#B59C7D] hover:text-[#141312] transition-colors focus:outline-none cursor-pointer z-30 shadow-lg"
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
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#B59C7D] hover:text-[#141312] transition-colors focus:outline-none cursor-pointer z-30 shadow-lg"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center">
            {/* Media Container */}
            <div className="relative w-full h-[62vh] sm:h-[74vh] rounded-2xl overflow-hidden shadow-2xl border border-[#B59C7D]/30 bg-black flex items-center justify-center">
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
                <span className="text-xs font-bold uppercase tracking-widest text-[#B59C7D]">
                  {currentItem.category}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/60">
                  {lightboxIndex + 1} of {filteredItems.length}
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
