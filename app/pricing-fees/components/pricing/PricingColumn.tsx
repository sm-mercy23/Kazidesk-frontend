
import React from "react";

interface PricingColumnProps {
  title: string;
  maxEmployees: string;
  storage: string;
  borderColor: string;
  isHighlighted?: boolean;
}

const PricingColumn: React.FC<PricingColumnProps> = ({
  title,
  maxEmployees,
  storage,
  borderColor,
  isHighlighted = false,
}) => {
  return (
    <div className="w-3/12 ml-5 h-full first:ml-0 max-md:w-full max-md:ml-0">
      <div
        className={`flex w-full flex-col items-center text-xl font-semibold leading-[1.2] mx-auto pt-[27px] pb-2 px-[62px] rounded-[45px] border-t-[10px] max-md:mt-2.5  max-md:px-5 ${
          isHighlighted
            ? "bg-[rgba(241,181,158,1)] text-black"
            : "bg-[rgba(20,20,20,1)] text-white"
        }`}
        style={{ borderColor }}
      >
        <div
          className={`self-stretch gap-2.5 text-[32px] whitespace-nowrap p-2.5 ${
            isHighlighted
              ? "text-[rgba(79,25,25,1)]"
              : "text-[rgba(179,68,61,1)]"
          }`}
        >
          {title}
        </div>
        {/* Empty div to align with "Max Active Employees" in FeaturesList */}
        <div className="self-stretch gap-2.5 whitespace-nowrap  h-[120px]"></div>
        {/* <div className="self-stretch gap-2.5 whitespace-nowrap "> */}
        <div className="self-stretch gap-2.5 whitespace-nowrap p-2.5">
          {maxEmployees}
        </div>
        {/* <div className="self-stretch gap-2.5 mt-0 ">{storage}</div> */}
        <div className="self-stretch gap-2.5 mt-5 p-2.5">{storage}</div>
        <img
           src="/auth/divider.PNG"
          // className="aspect-[0.03] object-contain w-[60px]  max-md:hidden"
          className="aspect-[0.03] object-contain w-[60px] mt-[-60px] max-md:hidden"
          alt="Divider"
        />
      </div>
    </div>
  );
};

export default PricingColumn;
