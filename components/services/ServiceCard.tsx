import React from "react";
import Image from "next/image";
import { Activity, Zap, HeartPulse, Dumbbell, Check, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { Button } from "../ui/Button";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-[#B59C7D]" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#FFFFFF] text-[#111111] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E0D8] hover:border-[#B59C7D]/60 shadow-sm hover:shadow-xl hover-lift flex flex-col justify-between group transition-all duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/20 to-transparent flex items-end p-4 sm:p-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E5E0D8] flex items-center justify-center shadow-xs">
                {iconMap[service.iconName] || <Activity className="w-5 h-5 text-[#B59C7D]" />}
              </div>
              <h3 className="text-base sm:text-xl font-bold font-display text-[#111111]">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-[#4A4641] mb-4 sm:mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Benefits snippet */}
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8E7557]">
              Key Benefits
            </h4>
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#111111] font-medium">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#EEEDE8] text-[#B59C7D] border border-[#B59C7D]/30 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#111111]">{benefit}</span>
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
          className="border-[#111111]/20 text-[#111111] hover:bg-[#111111] hover:text-[#FAF8F5]"
          icon={<ArrowRight className="w-3.5 h-3.5 text-[#B59C7D]" />}
        >
          Explore Service
        </Button>
      </div>
    </div>
  );
};
