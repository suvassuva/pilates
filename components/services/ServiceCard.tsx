import React from "react";
import { Activity, Zap, HeartPulse, Check, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { Button } from "../ui/Button";
import { ServiceMediaSlider } from "./ServiceMediaSlider";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#962D2D]" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#962D2D]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#962D2D]" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#FFFFFF] text-[#1E1B18] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EAE4DC] hover:border-[#962D2D]/40 shadow-xs hover:shadow-xl hover-lift flex flex-col justify-between group transition-all duration-300">
      <div>
        {/* Service Card Image & Video Slider */}
        <ServiceMediaSlider
          media={service.media}
          fallbackImage={service.image}
          title={service.title}
          badge={service.badge}
          imagePosition={service.imagePosition}
        />

        {/* Card Body */}
        <div className="p-4 sm:p-6">
          {/* Service Title & Icon Header */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF0EE] border border-[#962D2D]/15 flex items-center justify-center shrink-0 shadow-xs">
              {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#962D2D]" />}
            </div>
            <h3 className="text-base sm:text-xl font-bold font-display text-[#1E1B18] leading-snug">
              {service.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#524C46] mb-4 sm:mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Benefits snippet */}
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#962D2D]">
              Key Benefits
            </h4>
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#1E1B18] font-medium">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FAF0EE] text-[#962D2D] border border-[#962D2D]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#1E1B18]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-4 sm:p-6 pt-0">
        <Button
          href={`/services#${service.slug}`}
          variant="primary"
          size="sm"
          fullWidth
          className="bg-[#962D2D] text-white hover:bg-[#7D1F1F] font-semibold shadow-xs"
          icon={<ArrowRight className="w-3.5 h-3.5 text-white" />}
        >
          Explore Program
        </Button>
      </div>
    </div>
  );
};
