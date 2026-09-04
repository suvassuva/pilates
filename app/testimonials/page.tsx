import React from "react";
import Image from "next/image";
import { Star, Quote, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { BRANCHES } from "@/data/branches";
import { Container } from "@/components/ui/Container";
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
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Background Image */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/woman_holding_water_bottle.jpeg"
            alt="Dr Pilates Client Testimonials Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Light translucent overlay keeping image bright, vivid and clearly visible */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B59C7D]/50 shadow-sm inline-block">
              Client Feedback & Ratings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Verified <span className="font-serif italic font-normal text-[#E2C79A]">Google Reviews</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Dr Pilates is proud to maintain a 4.9 ★ Google Rating with over 129+ reviews across our Bengaluru studios.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          {/* Trust Banner */}
          <div className="mb-16 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E0D8] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#EEEDE8] text-[#8E7557] border border-[#B59C7D]/25 flex items-center justify-center font-bold text-2xl font-display">
                4.9
              </div>
              <div>
                <div className="flex text-[#B59C7D] text-lg">
                  {"★".repeat(5)}
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  Google Business Profile Score
                </h3>
                <p className="text-xs text-[#7A756D]">
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
                className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm flex flex-col justify-between hover-lift transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#B59C7D] text-base">
                      {"★".repeat(item.rating)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E7557] bg-[#EEEDE8] px-3 py-1 rounded-full border border-[#B59C7D]/20">
                      {item.source}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#B59C7D]/30 mb-3" />

                  <p className="text-base text-[#111111] font-serif italic leading-relaxed mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#111111]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-[#7A756D]">{item.role}</span>
                  </div>
                  <span className="text-xs text-[#8E7557] font-medium">
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
