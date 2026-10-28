import React from "react";
import { Activity, Zap, HeartPulse, Check, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { Button } from "../ui/Button";
import { ServiceMediaSlider } from "./ServiceMediaSlider";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-[#282622]" />,
  Zap: <Zap className="w-5 h-5 text-[#282622]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-[#282622]" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#FFFFFF] text-[#282622] rounded-xl overflow-hidden border border-[#DDD3C8] hover:border-[#C5A990] transition-colors duration-200 flex flex-col justify-between group h-full">
      <div className="flex-1 flex flex-col">
        {/* Service Card Image & Video Slider (Photography focused, restrained) */}
        <ServiceMediaSlider
          media={service.media}
          fallbackImage={service.image}
          title={service.title}
          badge={service.badge}
          imagePosition={service.imagePosition}
        />

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          {/* Service Title & Icon Header */}
          <div className="flex items-center gap-3 mb-3 min-h-[2.5rem]">
            <div className="w-9 h-9 rounded-[6px] bg-[#F7F3ED] border border-[#DDD3C8] flex items-center justify-center shrink-0">
              {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#282622]" />}
            </div>
            <h3 className="text-lg sm:text-xl font-normal font-display text-[#282622] leading-snug">
              {service.title}
            </h3>
          </div>

          <p className="text-sm sm:text-[15px] text-[#6E685E] mb-5 leading-[1.6] font-body">
            {service.shortDescription}
          </p>

          {/* Key Benefits snippet */}
          <div className="space-y-2 mb-5 mt-auto">
            <h4 className="text-[11px] font-medium font-body uppercase tracking-wider text-[#282622]">
              Key Benefits
            </h4>
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#282622] font-body">
                <div className="w-4 h-4 rounded-[4px] bg-[#E8DED1] text-[#282622] border border-[#DDD3C8] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <Button
          href={`/services#${service.slug}`}
          variant="primary"
          size="md"
          fullWidth
          icon={<ArrowRight className="w-4 h-4 text-white" />}
        >
          Explore Program
        </Button>
      </div>
    </div>
  );
};
