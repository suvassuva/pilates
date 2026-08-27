import React from "react";
import Image from "next/image";
import { Activity, Zap, HeartPulse, Dumbbell, Check, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { Button } from "../ui/Button";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#1A1D20] text-[#FAF8F5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#282C32] hover:border-[#C5A059]/40 shadow-md hover-lift flex flex-col justify-between group">
      <div>
        {/* Service Card Image */}
        <div className="relative h-44 sm:h-60 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20] via-transparent to-transparent flex items-end p-4 sm:p-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0D0F12]/90 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center shadow-xs">
                {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#C5A059]" />}
              </div>
              <h3 className="text-base sm:text-xl font-bold font-display text-white">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-[#949BA6] mb-4 sm:mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Benefits snippet */}
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Key Benefits
            </h4>
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#FAF8F5] font-medium">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#0D0F12] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#FAF8F5]/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-4 sm:p-6 pt-0">
        <Button
          href={`/services/${service.slug}`}
          variant="outline"
          size="sm"
          fullWidth
          className="border-[#282C32] text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#121417]"
          icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />}
        >
          Explore Service
        </Button>
      </div>
    </div>
  );
};
