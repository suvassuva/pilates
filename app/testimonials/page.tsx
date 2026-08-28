import React from "react";
import Image from "next/image";
import Metadata from "next";
import { Star, Quote, CheckCircle2, ExternalLink } from "lucide-react";
import { TESTIMONIALS, RATING_STATS } from "@/data/testimonials";
import { BRANCHES } from "@/data/branches";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Client Reviews & Google Rating | Dr Pilates Bengaluru",
  description:
    "Read 4.9★ rated Google reviews and client transformation feedback for Dr Pilates Kalyan Nagar and Branch 02 studios in Bengaluru."
};

export default function TestimonialsPage() {
  const mainBranch = BRANCHES[0];

  return (
    <div className="pt-28 pb-12">
      {/* Page Hero with Background Image */}
      <section className="py-20 sm:py-28 bg-[#0D0F12] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/woman_holding_water_bottle.jpeg"
            alt="Dr Pilates Client Testimonials Background"
            fill
            priority
            className="object-cover object-center opacity-45 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/40 to-[#0D0F12]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/90 via-transparent to-[#0D0F12]/90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#14171C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C5A059]/50 shadow-xl inline-block">
              Client Feedback & Ratings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#FAF8F5] drop-shadow-md">
              Verified <span className="gold-gradient-text">Google Reviews</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
              Dr Pilates is proud to maintain a 4.9 ★ Google Rating with over 129+ reviews across our Bengaluru studios.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          {/* Trust Banner */}
          <div className="mb-16 p-8 rounded-3xl bg-white border border-[#121417]/10 shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#121417] text-[#C5A059] flex items-center justify-center font-extrabold text-2xl font-display">
                4.9
              </div>
              <div>
                <div className="flex text-[#C5A059] text-lg">
                  {"★".repeat(5)}
                </div>
                <h3 className="text-lg font-bold text-[#121417]">
                  Google Business Profile Score
                </h3>
                <p className="text-xs text-[#5C626D]">
                  Based on 129+ verified reviews at Kalyan Nagar studio
                </p>
              </div>
            </div>

            <Button
              href={mainBranch.mapUrl}
              external
              variant="gold"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              View on Google Maps
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl border border-[#121417]/10 shadow-sm flex flex-col justify-between hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#C5A059] text-base">
                      {"★".repeat(item.rating)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] bg-[#F3EEE7] px-3 py-1 rounded-full border border-[#C5A059]/20">
                      {item.source}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#C5A059]/30 mb-3" />

                  <p className="text-base text-[#121417] leading-relaxed italic mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#121417]/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#121417]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-[#5C626D]">{item.role}</span>
                  </div>
                  <span className="text-xs text-[#C5A059] font-medium">
                    {item.branch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
