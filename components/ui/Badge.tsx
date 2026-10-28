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
    crimson: "bg-[#E8DED1] text-[#282622] border border-[#DDD3C8]",
    gold: "bg-[#E8DED1] text-[#282622] border border-[#DDD3C8]",
    dark: "bg-[#282622] text-[#FFFFFF] shadow-xs",
    light: "bg-[#FFFFFF] text-[#282622] border border-[#DDD3C8]",
    outline: "bg-transparent text-[#282622] border border-[#DDD3C8]"
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium font-body rounded-[6px] tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
