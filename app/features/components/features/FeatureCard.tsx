import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-[rgba(179,68,61,0.11)] p-2.5 rounded-[20px] ${className}`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="aspect-[1.36] object-contain w-full rounded-[15px]"
      />
      <div className="w-full max-w-[305px] mt-2.5 py-[21px]">
        <h3 className="self-stretch gap-2.5 text-xl text-[#B3443D] font-semibold p-2.5">
          {title}
        </h3>
        <p className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 text-base text-[#4F1919] font-normal leading-6 p-2.5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
