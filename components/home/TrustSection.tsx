import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "4.9 ★",
      label: "Google Rating",
      subtext: "Highest rated in Kalyan Nagar",
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#C5A059] fill-[#C5A059]" />
    },
    {
      value: "129+",
      label: "Google Reviews",
      subtext: "Verified client feedback",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#C5A059]" />
    },
    {
      value: "2",
      label: "Bengaluru Studios",
      subtext: "Kalyan Nagar & Branch 02",
      icon: <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#C5A059]" />
    },
    {
      value: "100%",
      label: "Clinical Care",
      subtext: "Certified physiotherapists",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#C5A059]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#121417] text-[#FAF8F5] relative overflow-hidden border-y border-[#C5A059]/20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#1A1D20]/60 border border-[#282C32]"
            >
              <div className="mb-2 p-2 sm:p-3 rounded-full bg-[#121417] border border-[#C5A059]/30">
                {stat.icon}
              </div>
              <span className="text-xl sm:text-4xl font-extrabold font-display text-[#FAF8F5]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#C5A059] mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8C929D] mt-0.5 hidden sm:block">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
