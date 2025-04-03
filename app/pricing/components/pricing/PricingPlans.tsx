import React, { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";

const PricingPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleToggle = (option: "monthly" | "yearly") => {
    setBillingCycle(option);
  };

  // Define pricing plans
  const plans = [
    {
      title: "Starter",
      monthlyPrice: 50,
      yearlyPrice: 500,
      borderColor: "#E20074",
      priceColor: "rgba(226,0,116,1)",
    },
    {
      title: "Medium",
      monthlyPrice: 98,
      yearlyPrice: 980,
      borderColor: "#003653",
      priceColor: "rgba(0,54,83,1)",
    },
    {
      title: "Larger",
      monthlyPrice: 500,
      yearlyPrice: 5000,
      borderColor: "#0031CB",
      priceColor: "rgba(0,49,203,1)",
    },
  ];

  return (
    <div className="bg-white self-stretch flex w-full flex-col mt-[164px] pt-[79px] pb-[227px] px-20 rounded-[0px_35vw_0px_0px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <h2 className="text-[#4F1919] text-[40px] font-normal leading-[1.2] ml-[11px] max-md:ml-2.5">
        Affordable Pricing
      </h2>

      <PricingToggle selected={billingCycle} onToggle={handleToggle} />

      <div className="self-stretch mb-[-45px] mt-[156px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-[33%] max-md:w-full max-md:ml-0"
              // style={{ marginLeft: index > 0 ? "1.25rem" : "0" }}
            >
              <PricingCard
                title={plan.title}
                price={
                  billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice
                }
                borderColor={plan.borderColor}
                priceColor={plan.priceColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
