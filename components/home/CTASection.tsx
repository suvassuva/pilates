import React from "react";
import { Calendar, Phone, MessageSquare, Navigation, Sparkles } from "lucide-react";
import { BRANCHES, generateWhatsAppUrl, generateCallUrl } from "@/data/branches";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const CTASection: React.FC = () => {
  const mainBranch = BRANCHES[0];

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
            Book your personalized 1-on-1 Reformer, EMS, or Physiotherapy session today at our Kalyan Nagar studio or inquire about Branch 02 slots.
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
              href={generateWhatsAppUrl("kalyan-nagar")}
              external
              variant="whatsapp"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              WhatsApp
            </Button>

            <Button
              href={generateCallUrl("kalyan-nagar")}
              variant="outline"
              size="sm"
              className="border-[#111111]/30 text-[#111111] hover:bg-[#111111] hover:text-[#FAF8F5]"
              icon={<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B59C7D]" />}
            >
              Call Now
            </Button>

            <Button
              href={mainBranch.mapUrl}
              external
              variant="ghost"
              size="sm"
              className="text-[#8E7557] hover:bg-[#FAF8F5]"
              icon={<Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Get Directions
            </Button>
          </div>

          <p className="text-[10px] sm:text-xs text-[#7A756D] pt-2 sm:pt-4">
            Kalyan Nagar Studio: 3rd Floor Y4 Heights (Above Starbucks) • 088922 36442
          </p>
        </div>
      </Container>
    </section>
  );
};
