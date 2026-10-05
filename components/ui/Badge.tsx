import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "crimson" | "dark" | "light" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "crimson",
  className = ""
}) => {
  const variantClasses = {
    crimson: "bg-[#FAF0EE] text-[#962D2D] border border-[#962D2D]/25",
    gold: "bg-[#FAF0EE] text-[#962D2D] border border-[#962D2D]/25",
    dark: "bg-[#18181B] text-white shadow-xs",
    light: "bg-[#F5F2EB] text-[#1E1B18] border border-[#EAE4DC]",
    outline: "bg-transparent text-[#962D2D] border border-[#962D2D]/35"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
