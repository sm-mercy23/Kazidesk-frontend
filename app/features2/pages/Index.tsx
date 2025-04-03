import React from "react";
import Features from "../features";
import HeroSection from "../HeroSection";
import StatsSection from "../StatsSection";
import FeaturesSection from "../FeaturesSection";
import AppHeader from "@/components/shared/AppHeader";
import AppFooter from "@/components/shared/AppFooter";


const Index: React.FC = () => {
  return (
    <div className="w-[90%] m-auto  pt-10 grid gap-2 auto-rows-max">
      <AppHeader />
      <HeroSection />
      <StatsSection/>
      <FeaturesSection />
      <Features />
      <AppFooter />
    </div>
  );
};

export default Index;
