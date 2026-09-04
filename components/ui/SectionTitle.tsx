import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = "center",
  theme = "light",
  className = ""
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span
          className={`inline-flex items-center text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 ${
            isDark
              ? "bg-[#B59C7D]/20 text-[#B59C7D] border border-[#B59C7D]/30"
              : "bg-[#EEEDE8] text-[#8E7557] border border-[#E5E0D8]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
          isDark ? "text-[#FAF8F5]" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-2.5 text-xs sm:text-base leading-relaxed ${
            isDark ? "text-[#A39E96]" : "text-[#4A4641]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
