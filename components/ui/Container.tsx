import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default" | "large" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  ...props
}) => {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-[1400px]",
    full: "max-w-full"
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
