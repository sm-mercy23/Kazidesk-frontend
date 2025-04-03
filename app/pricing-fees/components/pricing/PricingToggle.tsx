import React from "react";

interface PricingToggleProps {
  activeOption: "monthly" | "yearly";
  onToggle: (option: "monthly" | "yearly") => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  activeOption,
  onToggle,
}) => {
  return (
    <div className="bg-[rgba(241,181,158,0.45)] flex min-h-[52px] w-max items-center gap-5 text-base font-normal whitespace-nowrap leading-[1.2] ml-[15px] mt-10 px-0.5 rounded-[30px] max-md:ml-2.5">
      <button
        className={`self-stretch min-h-12 gap-2.5 w-[135px] my-auto px-5 py-[15px] rounded-[30px] ${
          activeOption === "monthly"
            ? "bg-[rgba(179,68,61,1)] text-white"
            : "bg-[rgba(241,181,158,0)] text-[rgba(179,68,61,1)]"
        }`}
        onClick={() => onToggle("monthly")}
      >
        Monthly
      </button>
      <button
        className={`self-stretch min-h-12 gap-2.5 w-[135px] my-auto px-5 py-[15px] rounded-[30px] ${
          activeOption === "yearly"
            ? "bg-[rgba(179,68,61,1)] text-white"
            : "bg-[rgba(241,181,158,0)] text-[rgba(179,68,61,1)]"
        }`}
        onClick={() => onToggle("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingToggle;
