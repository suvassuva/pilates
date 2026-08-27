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
    <section className="relative pt-32 pb-20 bg-[#121417] text-[#FAF8F5] overflow-hidden">
      {/* Background Subtle Gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A059]/15 via-transparent to-transparent pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Dr Pilates Services</Badge>
              <span className="text-xs text-[#8C929D] font-medium">
                Bengaluru Locations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              {service.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-[#C5A059] font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-base text-[#8C929D] leading-relaxed max-w-2xl">
              {service.fullDescription}
            </p>

            {/* Quick Session Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#282C32] max-w-lg">
              <div>
                <span className="block text-xs text-[#8C929D] uppercase tracking-wider">Duration</span>
                <span className="text-sm sm:text-base font-bold text-[#FAF8F5]">
                  {service.sessionStructure.duration}
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#8C929D] uppercase tracking-wider">Intensity</span>
                <span className="text-sm sm:text-base font-bold text-[#FAF8F5]">
                  {service.sessionStructure.intensity}
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#8C929D] uppercase tracking-wider">Format</span>
                <span className="text-sm sm:text-base font-bold text-[#FAF8F5]">
                  {service.sessionStructure.format}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
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
                variant="secondary"
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                WhatsApp Enquiry
              </Button>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#121417]/80 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/30 w-full">
                  <div className="flex items-center gap-2 text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Clinical Movement Excellence</span>
                  </div>
                  <p className="text-xs text-[#FAF8F5] leading-snug">
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
