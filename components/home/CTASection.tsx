import React from "react";
import { Calendar, Phone, MessageSquare, Navigation, Sparkles } from "lucide-react";
import { BRANCHES, generateWhatsAppUrl, generateCallUrl } from "@/data/branches";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const CTASection: React.FC = () => {
  const mainBranch = BRANCHES[0];

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-[#121417] via-[#1A1D20] to-[#121417] text-[#FAF8F5] relative overflow-hidden border-t border-[#C5A059]/30">
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-[9px] sm:text-xs font-bold uppercase tracking-wider border border-[#C5A059]/30">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059]" />
            <span>Begin Your Movement Transformation</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#FAF8F5]">
            Ready to Build Strength & Live Better?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-[#8C929D] leading-relaxed max-w-xl mx-auto">
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
              className="border-[#FAF8F5] text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#121417]"
              icon={<Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Call Now
            </Button>

            <Button
              href={mainBranch.mapUrl}
              external
              variant="ghost"
              size="sm"
              className="text-[#C5A059] hover:bg-[#1A1D20]"
              icon={<Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Get Directions
            </Button>
          </div>

          <p className="text-[10px] sm:text-xs text-[#8C929D] pt-2 sm:pt-4">
            Kalyan Nagar Studio: 3rd Floor Y4 Heights (Above Starbucks) • 088922 36442
          </p>
        </div>
      </Container>
    </section>
  );
};
