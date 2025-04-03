
import React from "react";

import Hero from "../components/pricing/Hero";
import PricingPlans from "../components/pricing/PricingPlans";
import Footer from "../components/layout/Footer";
import AppFooter from "@/components/shared/AppFooter";
import Header from "@/components/shared/AppHeader";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#4F1919] w-full">
      <div className="  w-[90%] m-auto   items-center pt-[42px] max-md:max-w-full">
        <Header />
        <Hero />
        </div>
      <PricingPlans />
      <AppFooter />
    </div>
  );
};

export default Index;
