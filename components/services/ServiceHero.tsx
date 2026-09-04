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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Dr Pilates Services</Badge>
              <span className="text-xs text-[#7A756D] font-medium">
                Bengaluru Locations
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#111111]">
              {service.heroHeadline}
            </h1>

            <p className="text-lg sm:text-2xl text-[#8E7557] font-serif italic font-normal leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#4A4641] leading-relaxed max-w-2xl">
              {service.fullDescription}
            </p>

            {/* Quick Session Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E0D8] max-w-lg">
              <div>
                <span className="block text-[10px] sm:text-xs text-[#7A756D] uppercase tracking-wider">Duration</span>
                <span className="text-sm sm:text-base font-bold text-[#111111]">
                  {service.sessionStructure.duration}
                </span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs text-[#7A756D] uppercase tracking-wider">Intensity</span>
                <span className="text-sm sm:text-base font-bold text-[#111111]">
                  {service.sessionStructure.intensity}
                </span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs text-[#7A756D] uppercase tracking-wider">Format</span>
                <span className="text-sm sm:text-base font-bold text-[#111111]">
                  {service.sessionStructure.format}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Button
                href={`/appointment?branch=kalyan-nagar`}
                variant="gold"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Book Session
              </Button>

              <Button
                href="https://wa.me/918892236442?text=Hi%20Dr%20Pilates%2C%20I%20would%20like%20to%20enquire%20about%20a%20session."
                external
                variant="whatsapp"
                size="lg"
                icon={<MessageSquare className="w-5 h-5 text-white fill-white/20" />}
              >
                WhatsApp Enquiry
              </Button>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <div className="bg-[#FFFFFF]/90 backdrop-blur-md p-4 rounded-2xl border border-[#E5E0D8] w-full shadow-sm">
                  <div className="flex items-center gap-2 text-xs text-[#8E7557] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#B59C7D]" />
                    <span>Clinical Movement Excellence</span>
                  </div>
                  <p className="text-xs text-[#111111] leading-snug">
                    Guided 1-on-1 by certified instructors at our Kalyan Nagar & Branch 02 studios.
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
