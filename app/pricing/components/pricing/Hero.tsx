import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex w-full title-font max-w-[1266px] items-stretch gap-5 text-white flex-wrap  justify-between  mt-[110px] max-md:max-w-full max-md:mt-10">
      {/* <div className="text-[64px] font-normal leading-[77px] my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]"> */}
      <div className="text-[64px] font-normal leading-[77px] my-auto  max-md:text-[40px] max-md:leading-[53px]">
        <span className="text-[rgba(179,68,61,1)]">Bold pricing, </span><br/>
        chaos-proof wins
      </div>
      <div className="text-2xl font-medium leading-8 max-md:max-w-full">
        <img
        src="/auth/pricing/pricing.jpg" 
          className="aspect-[0.98] object-contain w-full rounded-[10px] max-md:max-w-full"
          alt="Pricing illustration"
        />
        <div className="mr-[30px] mt-[31px] max-md:mr-2.5">
          Master your workday with simple, stress-free pricing
        </div>
      </div>
    </div>
  );
};

export default Hero;
