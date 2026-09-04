import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "4.9 ★",
      label: "Google Rating",
      subtext: "Highest rated in Kalyan Nagar",
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D] fill-[#B59C7D]" />
    },
    {
      value: "129+",
      label: "Google Reviews",
      subtext: "Verified client feedback",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />
    },
    {
      value: "2",
      label: "Bengaluru Studios",
      subtext: "Kalyan Nagar & Branch 02",
      icon: <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />
    },
    {
      value: "100%",
      label: "Clinical Care",
      subtext: "Certified physiotherapists",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF8F5] text-[#111111] relative overflow-hidden border-y border-[#E5E0D8]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] shadow-xs"
            >
              <div className="mb-2 p-2 sm:p-3 rounded-full bg-[#EEEDE8] border border-[#B59C7D]/30">
                {stat.icon}
              </div>
              <span className="text-xl sm:text-4xl font-extrabold font-display text-[#111111]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#8E7557] mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-xs text-[#7A756D] mt-0.5 hidden sm:block">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
