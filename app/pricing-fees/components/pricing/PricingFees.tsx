import React from "react";

import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import AppHeader from "@/components/shared/AppHeader";

const PricingFees: React.FC = () => {
  return (
    <div className="bg-[rgba(79,25,25,1)]   items-center pt-[42px]">
    <div className="w-[90%] m-auto">
    <AppHeader/>
      <HeroSection />
      </div>
      <PricingSection />
    </div>
  );
};

export default PricingFees;
