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
      label: "World-class equipment",
      subtext: "",
      icon: <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#962D2D]" />
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF8F5] text-[#1E1B18] relative overflow-hidden border-y border-[#EAE4DC]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, idx) => {
            const content = (
              <>
                <div
                  className={`mb-2 p-2 sm:p-3 rounded-full bg-[#FAF0EE] border border-[#962D2D]/20 ${
                    stat.href
                      ? "group-hover:border-[#962D2D] group-hover:bg-[#F5E6E3] transition-colors"
                      : ""
                  }`}
                >
                  {stat.icon}
                </div>
                <span
                  className={`font-extrabold font-display text-[#1E1B18] ${
                    stat.value.length > 5
                      ? "text-sm sm:text-2xl leading-tight"
                      : "text-xl sm:text-4xl"
                  } ${stat.href ? "group-hover:text-[#962D2D] transition-colors" : ""}`}
                >
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="text-xs sm:text-sm font-semibold text-[#962D2D] mt-0.5">
                    {stat.label}
                  </span>
                )}
                {stat.subtext && (
                  <span className="text-[10px] sm:text-xs text-[#78716C] mt-0.5 hidden sm:block">
                    {stat.subtext}
                  </span>
                )}
              </>
            );

            return stat.href ? (
              <a
                key={idx}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                title="View Google Reviews"
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-xs cursor-pointer hover:border-[#962D2D]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {content}
              </a>
            ) : (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DC] shadow-xs"
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
