"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { X, ZoomIn, Sparkles } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-12">
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              Studio Atmosphere
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Dr Pilates Visual Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Take a visual tour of our Reformer equipment, EMS bio-suit bays, physiotherapy rehab rooms, and studio aesthetics in Bengaluru.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-[#121417] text-[#FAF8F5] shadow-md border border-[#C5A059]/40 scale-105"
                      : "bg-[#F3EEE7] text-[#121417] hover:bg-[#FAF8F5] hover:text-[#C5A059]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-72 rounded-3xl overflow-hidden border border-[#121417]/10 shadow-sm cursor-pointer hover-lift bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-xs text-[#FAF8F5] flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#121417]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                className="object-contain bg-black/40"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-0.5">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
