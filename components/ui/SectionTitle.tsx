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
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-14 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span
          className={`inline-flex items-center text-[11px] sm:text-xs font-medium font-body tracking-widest uppercase px-3 py-1 rounded-[6px] mb-3 ${
            isDark
              ? "bg-[#282622] text-[#F7F3ED] border border-[#DDD3C8]/30"
              : "bg-[#E8DED1] text-[#282622] border border-[#DDD3C8]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-[40px] font-normal font-display tracking-tight leading-[1.2] ${
          isDark ? "text-[#F7F3ED]" : "text-[#282622]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base sm:text-[17px] font-normal font-body leading-[1.6] ${
            isDark ? "text-[#DDD3C8]" : "text-[#6E685E]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
