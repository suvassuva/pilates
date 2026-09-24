import React from "react";
import { Star, MapPin, Award, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "4.9 ★",
      label: "Top Rated Pilates",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D] fill-[#B59C7D]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "141+",
      label: "Google Reviews",
      subtext: "Verified client feedback",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />,
      href: "https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
    },
    {
      value: "2",
      label: "Bengaluru Studios",
      subtext: "Kalyan Nagar & Kothanur, Hennur Rd",
      icon: <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />
    },
    {
      value: "CLINICAL GRADE",
      label: "Merrithew Apparatus",
      subtext: "World-class equipment",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#B59C7D]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF8F5] text-[#111111] relative overflow-hidden border-y border-[#E5E0D8]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, idx) => {
            const content = (
              <>
                <div
                  className={`mb-2 p-2 sm:p-3 rounded-full bg-[#EEEDE8] border border-[#B59C7D]/30 ${
                    stat.href
                      ? "group-hover:border-[#B59C7D] group-hover:bg-[#E5E0D8]/70 transition-colors"
                      : ""
                  }`}
                >
                  {stat.icon}
                </div>
                <span
                  className={`font-extrabold font-display text-[#111111] ${
                    stat.value.length > 5
                      ? "text-sm sm:text-2xl leading-tight"
                      : "text-xl sm:text-4xl"
                  } ${stat.href ? "group-hover:text-[#8E7557] transition-colors" : ""}`}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#8E7557] mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-[#7A756D] mt-0.5 hidden sm:block">
                  {stat.subtext}
                </span>
              </>
            );

            return stat.href ? (
              <a
                key={idx}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                title="View Google Reviews"
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] shadow-xs cursor-pointer hover:border-[#B59C7D] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {content}
              </a>
            ) : (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] shadow-xs"
              >
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
