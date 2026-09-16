import React from "react";
import Image from "next/image";
import { Calendar, MessageSquare, Sparkles } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-[#FAF8F5] text-[#111111] overflow-hidden">
      {/* Background Subtle Gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B59C7D]/15 via-transparent to-transparent pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Text Left */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="gold">Dr Pilates Services</Badge>
                <span className="text-[11px] text-[#7A756D] font-medium">
                  Bengaluru Locations
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-[#111111]">
                {service.heroHeadline}
              </h1>

              <p className="text-sm sm:text-base text-[#8E7557] font-serif italic font-normal leading-relaxed">
                {service.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>
            </div>

            {/* Quick Session Stats */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E5E0D8] max-w-lg">
              <div>
                <span className="block text-[10px] text-[#7A756D] uppercase tracking-wider font-semibold">Duration</span>
                <span className="text-xs sm:text-sm font-bold text-[#111111]">
                  {service.sessionStructure.duration}
                </span>
              </div>
              <div>
                <span className="block text-[10px] text-[#7A756D] uppercase tracking-wider font-semibold">Intensity</span>
                <span className="text-xs sm:text-sm font-bold text-[#111111]">
                  {service.sessionStructure.intensity}
                </span>
              </div>
              <div>
                <span className="block text-[10px] text-[#7A756D] uppercase tracking-wider font-semibold">Format</span>
                <span className="text-xs sm:text-sm font-bold text-[#111111]">
                  {service.sessionStructure.format}
                </span>
              </div>
            </div>

            {/* Compact CTAs */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <Button
                href={`/appointment?branch=kalyan-nagar`}
                variant="gold"
                size="sm"
                icon={<Calendar className="w-3.5 h-3.5" />}
              >
                Book Session
              </Button>

              <Button
                href="https://wa.me/919481003827?text=Hi%20Dr%20Pilates%2C%20I%20would%20like%20to%20enquire%20about%20a%20session."
                external
                variant="whatsapp"
                size="sm"
                icon={<MessageSquare className="w-3.5 h-3.5 text-white fill-white/20" />}
              >
                WhatsApp Enquiry
              </Button>
            </div>
          </div>

          {/* Image Right (Equal Height) */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative h-full min-h-[320px] sm:min-h-[380px] w-full rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent flex items-end p-3.5 sm:p-5">
                <div className="bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E5E0D8] w-full shadow-sm">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#8E7557] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-[#B59C7D]" />
                    <span>Clinical Movement Excellence</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#111111] leading-snug">
                    Guided 1-on-1 by certified instructors at Dr Pilates Kalyan Nagar &amp; Kothanur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
