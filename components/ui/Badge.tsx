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
    gold: "bg-[#B59C7D]/15 text-[#8E7557] border border-[#B59C7D]/35",
    dark: "bg-[#B59C7D] text-white shadow-xs",
    light: "bg-[#EEEDE8] text-[#2A2520] border border-[#E5E0D8]",
    outline: "bg-transparent text-[#5A534B] border border-[#B59C7D]/35"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
