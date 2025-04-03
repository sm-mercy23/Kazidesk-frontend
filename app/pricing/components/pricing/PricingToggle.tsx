
import React from "react";

interface PricingToggleProps {
  selected: "monthly" | "yearly";
  onToggle: (option: "monthly" | "yearly") => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  selected,
  onToggle,
}) => {
  return (
    <div className="bg-[rgba(241,181,158,0.45)] flex min-h-[52px] items-center gap-5 text-base font-normal whitespace-nowrap leading-[1.2] ml-[11px] w-max mt-10 px-0.5 rounded-[30px] max-md:ml-2.5">
      <button
        className={`self-stretch min-h-12 gap-2.5 w-[135px] my-auto px-5 py-[15px] rounded-[30px] ${
          selected === "monthly"
            ? "bg-[#B3443D] text-white"
            : "bg-[rgba(241,181,158,0)] text-[#B3443D]"
        }`}
        onClick={() => onToggle("monthly")}
      >
        Monthly
      </button>
      <button
        className={`self-stretch min-h-12 gap-2.5 w-[135px] my-auto px-5 py-[15px] rounded-[30px] ${
          selected === "yearly"
            ? "bg-[#B3443D] text-white"
            : "bg-[rgba(241,181,158,0)] text-[#B3443D]"
        }`}
        onClick={() => onToggle("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingToggle;
