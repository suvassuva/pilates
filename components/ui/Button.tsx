import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "whatsapp" | "cream";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
  iconPosition = "right",
  fullWidth = false,
  external = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#962D2D] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover-lift active:scale-95 whitespace-nowrap";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-[11px] sm:text-xs tracking-wide",
    md: "px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide",
    lg: "px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold tracking-wide"
  };

  const variantClasses = {
    primary:
      "bg-[#962D2D] text-white hover:bg-[#7D1F1F] shadow-sm hover:shadow-md border border-[#962D2D]",
    secondary:
      "bg-[#18181B] text-white hover:bg-[#27272A] border border-[#18181B]",
    gold:
      "bg-[#962D2D] text-white hover:bg-[#7D1F1F] shadow-sm hover:shadow-md border border-[#962D2D]",
    cream:
      "bg-[#FAF0EE] text-[#962D2D] hover:bg-[#F5E6E3] hover:shadow-md border border-[#962D2D]/20 font-semibold shadow-xs",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-md border-none !text-white font-semibold",
    outline:
      "bg-transparent text-[#1E1B18] border border-[#1E1B18]/25 hover:border-[#962D2D] hover:bg-[#FAF0EE] hover:text-[#962D2D]",
    ghost:
      "bg-transparent text-[#1E1B18] hover:bg-[#FAF0EE] hover:text-[#962D2D]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-1.5 sm:mr-2 inline-flex shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === "right" && <span className="ml-1.5 sm:ml-2 inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
