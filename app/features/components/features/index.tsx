import React from "react";
import HeroSection from "./HeroSection";
import BusinessControl from "./BusinessControl";
import SpendingControl from "./SpendingControl";
import ManagementSection from "./ManagementSection";
import PaymentSection from "./PaymentSection";
import DeviceSection from "./DeviceSection";
import Footer from "./Footer";
import Header from "@/components/shared/AppHeader";
import AppFooter from "@/components/shared/AppFooter";

const Features: React.FC = () => {
  return (
    <div className="features-page">
      <div className="bg-[#4F1919] flex w-full flex-col overflow-hidden items-center pt-[39px] pb-[92px] px-[70px] max-md:max-w-full max-md:px-5">
        <Header /> 

        <HeroSection />
      </div>
      <BusinessControl />
      <SpendingControl />
      <ManagementSection />
      <PaymentSection />
      <DeviceSection />
      <AppFooter />
    </div>
  );
};

export default Features;
