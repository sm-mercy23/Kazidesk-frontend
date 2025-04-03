import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="self-stretch flex flex-col items-center mt-[53px] max-md:mt-10">
      <h1 className="self-stretch w-[910px] title-font max-w-full gap-2.5 text-[64px] text-white font-normal text-center leading-[77px] p-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
        Manage your Business{" "}
        <span className="text-[rgba(179,68,61,1)]">anywhere, hassle-free</span>
      </h1>
      <div className="z-10 flex mt-[-66px] w-[882px] max-w-full flex-col items-stretch justify-center p-2.5">
        <img
           src="/auth/homepage/tablet.PNG"
          alt="Business Management Dashboard"
          className="aspect-[1.11] object-contain w-full max-md:max-w-full"
        />
      </div>
      <div className="flex w-[890px] max-w-full flex-col items-stretch font-normal text-center">
        <div className="flex w-full flex-col items-stretch text-white max-md:max-w-full">
          <h2 className="text-[64px] title-font leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Allocate Tasks
          </h2>
          <p className="text-xl leading-7 self-center w-[605px] mt-[22px] max-md:max-w-full">
            Simply allocate tasks to your team Card to Apple or Google Wallet
            for quick and convenient access whenever you need it.
          </p>
        </div>
        <div className="self-center flex w-[198px] max-w-full items-center gap-6 text-base text-[#4F1919] mt-[33px]">
          <div className="self-stretch flex w-[198px] my-auto">
            <button className="self-stretch flex-1 shrink basis-[0%] shadow-[2px_2px_15px_0px_rgba(0,0,0,0.25)] bg-[#FFFCF5] min-h-12 w-[198px] gap-2.5 px-2.5 py-[15px] rounded-[35px]">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
