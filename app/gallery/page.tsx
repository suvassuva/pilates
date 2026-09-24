"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { X, ZoomIn, Play } from "lucide-react";

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Visual Gallery Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Light translucent overlay keeping image bright, vivid and clearly visible */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B59C7D]/50 shadow-sm inline-block">
              Dr Pilates Atmosphere
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Dr Pilates <span className="font-serif italic font-normal text-[#E2C79A]">Live Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Experience authentic movement and training captured inside our Kalyan Nagar studio — featuring Reformer flows, Cadillac acrobatics, Stability Chair workouts, and personal coaching.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 sm:py-20 bg-[#FAF8F5]">
        <Container>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-96 rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-sm cursor-pointer hover-lift bg-[#141312]"
              >
                {/* Looping preview video */}
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

                {/* Video Badge */}
                <div className="absolute top-4 right-4 bg-[#141312]/80 text-[#B59C7D] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-[#B59C7D]/30 flex items-center gap-1.5 shadow-sm">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Video</span>
                </div>

                {/* Center Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-[#B59C7D]/70 flex items-center justify-center text-[#B59C7D] shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay with Category & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/95 via-[#141312]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B59C7D] mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-xs text-[#FAF8F5]/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-3.5 h-3.5 text-[#B59C7D]" />
                    <span>Click to play in full screen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-[#B59C7D]/40 bg-black flex items-center justify-center">
              <video
                key={selectedItem.video}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster={selectedItem.image}
              >
                <source src={selectedItem.video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="mt-4 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B59C7D]">
                {selectedItem.category}
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-0.5">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
