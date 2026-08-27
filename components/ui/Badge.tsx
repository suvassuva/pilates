import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className = ""
}) => {
  const variantClasses = {
    gold: "bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30",
    dark: "bg-[#121417] text-[#FAF8F5]",
    light: "bg-[#F3EEE7] text-[#121417]",
    outline: "bg-transparent text-[#5C626D] border border-[#121417]/15"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
