import React from "react";
import FeatureCard from "./FeatureCard";

const BusinessControl: React.FC = () => {
  return (
    <section className="items-center bg-white flex w-full flex-col overflow-hidden px-20 py-[162px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <FeatureCard
        imageSrc="/auth/features/man.jpg" 
        title="Total control of your Business"
        description="Freeze, unfreeze both your physical and virtual cards anytime. Your transactions are safe and under your control."
        className="w-[338px] max-w-full"
      />

      <div className="w-[962px] max-w-full -mb-8 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <FeatureCard
              imageSrc="/auth/features/managing.jpg" 
              title="Total control of your Business"
              description="Freeze, unfreeze both your physical and virtual cards anytime. Your transactions are safe and under your control."
              className="grow w-full mt-[123px] max-md:mt-10"
            />
          </div>
          <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch font-normal text-center justify-center max-md:max-w-full">
              <h2 className="text-[#4f1919] text-[64px] title-font leading-[1.2] max-md:max-w-full max-md:text-[40px]">
                Uniquely for{" "}
                <span className="text-[rgba(179,68,61,1)]">Your Business</span>
              </h2>
              <button className="self-center shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.25)_inset,2px_2px_15px_0px_rgba(0,0,0,0.25)] bg-[#B3443D] min-h-12 w-[198px] max-w-full gap-2.5 text-base text-[#F1B59E] mt-[46px] px-2.5 py-[15px] rounded-[35px] max-md:mt-10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessControl;
