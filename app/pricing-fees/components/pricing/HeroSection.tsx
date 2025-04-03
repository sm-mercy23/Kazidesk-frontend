import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex w-full max-w-[90vw] items-stretch gap-5 flex-wrap justify-between ml-[13px] mt-[110px] max-md:max-w-full max-md:mt-10">
      <h1 className="text-white title-font text-[64px] font-normal leading-[1.2] my-auto max-md:text-[40px]">
        What you Get
      </h1>
      <div className=" text-white font-medium leading-8 max-md:max-w-full">
        <img
         src="/auth/pricingfees/pricing-fees.jpg" 
          className="aspect-[0.98] object-contain w-full rounded-[10px] max-md:max-w-full"
          alt="Pricing illustration"
        />
        <p className="mr-[30px] mt-[31px] text-[14px] font-medium  max-md:mr-2.5">
          Master your workday with simple, stress-free pricing
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
