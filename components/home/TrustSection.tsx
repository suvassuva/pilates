import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "4.9 ★",
      label: "Top Rated Pilates",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#282622] fill-[#282622]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "141+",
      label: "Google Reviews",
      subtext: "Verified client feedback",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#282622]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "2",
      label: "Bengaluru Studios",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#282622]" />
    },
    {
      value: "CLINICAL GRADE",
      label: "World-Class Equipment",
      subtext: "Certified Merrithew setup",
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#282622]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#E8DED1] text-[#282622] relative overflow-hidden border-y border-[#DDD3C8]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {stats.map((stat, idx) => {
            const cardInner = (
              <div className="flex flex-col items-center justify-between h-full w-full">
                {/* Icon (Restrained 8px radius) */}
                <div
                  className={`mb-2.5 p-2 sm:p-2.5 rounded-lg bg-[#F7F3ED] border border-[#DDD3C8] transition-colors ${
                    stat.href
                      ? "group-hover:border-[#C5A990] group-hover:bg-[#FFFFFF]"
                      : ""
                  }`}
                >
                  {stat.icon}
                </div>

                {/* Stat Value Row */}
                <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center text-center">
                  <span
                    className={`font-normal font-display text-[#282622] leading-tight ${
                      stat.value.length > 5
                        ? "text-xs sm:text-sm tracking-wider uppercase font-medium font-body"
                        : "text-2xl sm:text-4xl"
                    } ${stat.href ? "group-hover:text-[#282622] transition-colors" : ""}`}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label Row */}
                <div className="min-h-[1.25rem] sm:min-h-[1.5rem] flex items-center justify-center text-center mt-1">
                  <span className="text-xs sm:text-sm font-medium font-body text-[#282622] leading-tight">
                    {stat.label}
                  </span>
                </div>

                {/* Subtext Row */}
                <div className="min-h-[1rem] sm:min-h-[1.25rem] flex items-center justify-center text-center mt-0.5">
                  <span className="text-[11px] sm:text-xs text-[#6E685E] font-body leading-tight">
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
                className="h-full flex flex-col p-4 sm:p-6 rounded-xl bg-[#FFFFFF] border border-[#DDD3C8] cursor-pointer hover:border-[#C5A990] transition-colors duration-200 group"
              >
                {cardInner}
              </a>
            ) : (
              <div
                key={idx}
                className="h-full flex flex-col p-4 sm:p-6 rounded-xl bg-[#FFFFFF] border border-[#DDD3C8]"
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
