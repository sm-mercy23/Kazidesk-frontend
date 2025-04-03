import React, { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingTable from "./PricingTable";

const PricingSection: React.FC = () => {
  const [pricingOption, setPricingOption] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleToggle = (option: "monthly" | "yearly") => {
    setPricingOption(option);
  };

  return (
    <section className="bg-white self-stretch flex w-full flex-col mt-[164px] px-20 py-[93px] rounded-[0px_35vw_0px_0px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
    {/* <section className="bg-white self-stretch flex w-full flex-col mt-[164px] px-20 py-[93px] rounded-[0px_462px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5"> */}
      <h2 className="text-[rgba(79,25,25,1)]  title-font text-[40px] font-normal leading-[1.2] ml-[15px] max-md:ml-2.5">
        Affordable Pricing
      </h2>

      <PricingToggle activeOption={pricingOption} onToggle={handleToggle} />

      <PricingTable />
    </section>
  );
};

export default PricingSection;
