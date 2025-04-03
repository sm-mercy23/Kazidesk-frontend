import React from "react";

interface LogoProps {
  className?: string;
  textClassName?: string;
  size?: "small" | "medium" | "large";
  color?: "white" | "dark";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  textClassName = "",
  size = "medium",
  color = "white",
}) => {
  const sizeClasses = {
    small: "w-6",
    medium: "w-[25px]",
    large: "w-10",
  };

  const textSizeClasses = {
    small: "text-base",
    medium: "text-xl",
    large: "text-[40px]",
  };

  const textColorClass = color === "white" ? "text-white" : "text-[#4F1919]";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6b9bdd25501f4294a546ad1bc1b50c45/975a7a1bb70f6628dc30b1bcd4b6963faa8d17caec747cd1e9469d4c5b9e9e1d?placeholderIfAbsent=true"
        className={`aspect-[1] object-contain shrink-0 ${sizeClasses[size]}`}
        alt="Kazidesk Logo"
      />
      <div
        className={`${textColorClass} ${textSizeClasses[size]} leading-[1.1] ${textClassName}`}
      >
        Kazidesk
      </div>
    </div>
  );
};

export default Logo;
