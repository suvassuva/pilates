"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, Phone, MessageSquare, Navigation, Sparkles, ChevronDown } from "lucide-react";
import { BRANCHES, generateWhatsAppUrl } from "@/data/branches";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const CTASection: React.FC = () => {
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const directionsRef = useRef<HTMLDivElement>(null);
  const mainBranch = BRANCHES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (directionsRef.current && !directionsRef.current.contains(event.target as Node)) {
        setIsDirectionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-14 sm:py-24 bg-[#EEEDE8] text-[#111111] relative overflow-hidden border-t border-[#E5E0D8]">
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#B59C7D]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF8F5] text-[#8E7557] text-[9px] sm:text-xs font-bold uppercase tracking-widest border border-[#E5E0D8] shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B59C7D]" />
            <span>Begin Your Movement Transformation</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#111111]">
            Ready to Build Strength & <span className="font-serif italic font-normal text-[#8E7557]">Live Better?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-[#4A4641] leading-relaxed max-w-xl mx-auto">
            Book your personalized 1-on-1 Reformer, EMS, or Physiotherapy session today at Dr Pilates Kalyan Nagar or Kothanur.
          </p>

          {/* Symmetrical 2x2 Grid on Mobile / Flex Row on Desktop */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto">
            <Button
              href="/appointment?branch=kalyan-nagar"
              variant="gold"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Book Appointment
            </Button>

            <Button
              href={generateWhatsAppUrl("kalyan-nagar", "Hi Dr Pilates, I would like to enquire about an appointment at Kalyan Nagar or Kothanur branch.")}
              external
              variant="whatsapp"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              WhatsApp
            </Button>

            <Button
              href="tel:+918892236442"
              variant="outline"
              size="sm"
              className="border-[#111111]/30 text-[#111111] hover:bg-[#111111] hover:text-[#FAF8F5]"
              icon={<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D]" />}
            >
              Call Kalyan Nagar
            </Button>

            <Button
              href="tel:+919481003827"
              variant="outline"
              size="sm"
              className="border-[#111111]/30 text-[#111111] hover:bg-[#111111] hover:text-[#FAF8F5]"
              icon={<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D]" />}
            >
              Call Kothanur
            </Button>

            {/* 2-Branch Directions Dropdown */}
            <div className="relative group/directions inline-block" ref={directionsRef}>
              <button
                type="button"
                onClick={() => setIsDirectionsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-[#111111]/30 text-[#111111] hover:bg-[#111111] hover:text-[#FAF8F5] bg-[#FAF8F5] text-xs font-semibold shadow-2xs transition-all cursor-pointer group"
                aria-expanded={isDirectionsOpen}
                aria-haspopup="true"
              >
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D] group-hover:text-white transition-colors" />
                <span>Directions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#7A756D] group-hover:text-white transition-transform duration-200 ${
                    isDirectionsOpen ? "rotate-180" : "group-hover/directions:rotate-180"
                  }`}
                />
              </button>

              {/* Directions Dropdown Menu */}
              <div
                className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 w-72 bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5E0D8] p-2.5 z-50 text-left transition-all duration-200 ${
                  isDirectionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-1 group-hover/directions:opacity-100 group-hover/directions:visible group-hover/directions:translate-y-0"
                }`}
              >
                <div className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#8E7557] border-b border-[#E5E0D8]/60 flex items-center justify-between">
                  <span>Google Maps Directions</span>
                  <span className="text-[9px] font-normal text-[#7A756D]">2 Studios</span>
                </div>

                <div className="space-y-1 mt-1.5">
                  {/* Kalyan Nagar */}
                  <a
                    href={BRANCHES[0].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDirectionsOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#E5E0D8] transition-all group/branch"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#111111] group-hover/branch:text-[#8E7557] transition-colors">
                          Kalyan Nagar
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                          Flagship
                        </span>
                      </div>
                      <span className="text-[10px] text-[#7A756D] block mt-0.5">
                        Above Starbucks, HRBR Layout
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#EEEDE8] group-hover/branch:bg-[#111111] flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                      <Navigation className="w-3.5 h-3.5 text-[#B59C7D] group-hover/branch:text-white transition-colors" />
                    </div>
                  </a>

                  {/* Kothanur */}
                  <a
                    href={BRANCHES[1].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDirectionsOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#E5E0D8] transition-all group/branch"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#111111] group-hover/branch:text-[#8E7557] transition-colors">
                          Kothanur
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#EEEDE8] text-[#8E7557] font-semibold">
                          Now Open
                        </span>
                      </div>
                      <span className="text-[10px] text-[#7A756D] block mt-0.5">
                        ANR Arcade, Doddagubbi Main Rd
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#EEEDE8] group-hover/branch:bg-[#111111] flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                      <Navigation className="w-3.5 h-3.5 text-[#B59C7D] group-hover/branch:text-white transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs text-[#7A756D] pt-2 sm:pt-4">
            Dr Pilates: Kalyan Nagar (088922 36442) • Kothanur (094810 03827)
          </p>
        </div>
      </Container>
    </section>
  );
};
