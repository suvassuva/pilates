import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "4.9 ★",
      label: "Top Rated Pilates",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#962D2D] fill-[#962D2D]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "141+",
      label: "Google Reviews",
      subtext: "Verified client feedback",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#962D2D]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "2",
      label: "Bengaluru Studios",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#962D2D]" />
    },
    {
      value: "CLINICAL GRADE",
      label: "World-Class Equipment",
      subtext: "Certified Merrithew setup",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#962D2D]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF8F5] text-[#1E1B18] relative overflow-hidden border-y border-[#EAE4DC]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {stats.map((stat, idx) => {
            const cardInner = (
              <div className="flex flex-col items-center justify-between h-full w-full">
                {/* Icon */}
                <div
                  className={`mb-2.5 p-2 sm:p-2.5 rounded-full bg-[#FAF0EE] border border-[#962D2D]/20 transition-colors ${
                    stat.href
                      ? "group-hover:border-[#962D2D] group-hover:bg-[#F5E6E3]"
                      : ""
                  }`}
                >
                  {stat.icon}
                </div>

                {/* Stat Value Row with fixed height to ensure baseline alignment */}
                <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center text-center">
                  <span
                    className={`font-extrabold font-display text-[#1E1B18] leading-tight ${
                      stat.value.length > 5
                        ? "text-xs sm:text-base tracking-wider uppercase font-bold"
                        : "text-2xl sm:text-4xl"
                    } ${stat.href ? "group-hover:text-[#962D2D] transition-colors" : ""}`}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label Row */}
                <div className="min-h-[1.25rem] sm:min-h-[1.5rem] flex items-center justify-center text-center mt-1">
                  <span className="text-xs sm:text-sm font-semibold text-[#962D2D] leading-tight">
                    {stat.label}
                  </span>
                </div>

                {/* Subtext Row */}
                <div className="min-h-[1rem] sm:min-h-[1.25rem] flex items-center justify-center text-center mt-0.5">
                  <span className="text-[10px] sm:text-xs text-[#78716C] leading-tight">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            );

            return stat.href ? (
              <a
                key={idx}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                title="View Google Reviews"
                className="h-full flex flex-col p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-xs cursor-pointer hover:border-[#962D2D]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {cardInner}
              </a>
            ) : (
              <div
                key={idx}
                className="h-full flex flex-col p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-xs"
              >
                {cardInner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
