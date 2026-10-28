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
  // Editorial restrained corner rounding (6px, in 4–8px range), visible keyboard focus, smooth transitions
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-body transition-colors duration-200 rounded-[6px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5C604E] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99] whitespace-nowrap";

  // Minimum height 46px and padding 14px 24px (py-3.5 px-6) for default editorial buttons
  const sizeClasses = {
    sm: "min-h-[40px] px-4 py-2 text-xs sm:text-sm tracking-normal",
    md: "min-h-[46px] px-6 py-3.5 text-sm sm:text-[15px] tracking-normal",
    lg: "min-h-[48px] px-7 py-3.5 text-sm sm:text-base tracking-normal"
  };

  const variantClasses = {
    // Primary button: Earthy Olive Green #5C604E, Text #FFFFFF, Hover #4A4E3E, Border none
    primary:
      "bg-[#5C604E] text-[#FFFFFF] hover:bg-[#4A4E3E] border-0 shadow-xs",
    
    // Secondary button: Background transparent or #F7F3ED, Text #282622, Border 1px solid #282622, Hover #E8DED1
    secondary:
      "bg-transparent text-[#282622] border border-[#282622] hover:bg-[#E8DED1]",
    
    outline:
      "bg-transparent text-[#282622] border border-[#282622] hover:bg-[#E8DED1]",

    cream:
      "bg-[#F7F3ED] text-[#282622] border border-[#282622] hover:bg-[#E8DED1]",

    gold:
      "bg-[#5C604E] text-[#FFFFFF] hover:bg-[#4A4E3E] border-0 shadow-xs",

    ghost:
      "bg-transparent text-[#282622] hover:bg-[#E8DED1] border-0",

    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] border-0 font-medium"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2 inline-flex shrink-0 items-center">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 inline-flex shrink-0 items-center">{icon}</span>}
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
