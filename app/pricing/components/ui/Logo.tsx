import React from "react";

interface LogoProps {
  textColor?: string;
  size?: "small" | "medium" | "large";
}

export const Logo: React.FC<LogoProps> = ({
  textColor = "text-white",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-xl",
    large: "text-[40px]",
  };

  return (
    <div
      className={`flex items-center gap-2 ${sizeClasses[size]} font-normal ${textColor} whitespace-nowrap leading-[1.1]`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6b9bdd25501f4294a546ad1bc1b50c45/c681217fa09f30aa4f93d10d549cc7282aecfd7157b2dd3274d11cab043a4fa1?placeholderIfAbsent=true"
        className={`aspect-[1] object-contain ${size === "large" ? "w-10" : "w-[25px]"} shrink-0`}
        alt="Kazidesk Logo"
      />
      <div>Kazidesk</div>
    </div>
  );
};

export default Logo;
