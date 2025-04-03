import React from "react";

const SpendingControl: React.FC = () => {
  return (
    <section className="bg-white w-full overflow-hidden text-[#4F1919] pt-32 max-md:max-w-full max-md:pt-[100px]">
      <div className="flex w-[624px] max-w-full flex-col items-stretch ml-16 max-md:ml-5">
        <h2 className="w-[562px] title-font gap-2.5 text-[64px] font-normal leading-[77px] p-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
          <span className="text-[rgba(179,68,61,1)]">Kazidesk</span>, all your
          spendings under control.
        </h2>
        <p className="self-stretch w-[604px] gap-2.5 text-xl font-medium leading-7 mt-5 p-2.5 max-md:max-w-full">
          Conveniently shop online, buy in stores, or tap into the power of
          virtual cards with Jeton. Freeze and unfreeze your card anytime within
          the Jeton app, and enjoy better payments today.
        </p>
      </div>
      <img
        src="/auth/features/peoplestanding.jpg"
        alt="Spending Control Dashboard"
        className="aspect-[2.27] object-contain w-full mt-[92px] max-md:max-w-full max-md:mt-10"
      />
    </section>
  );
};

export default SpendingControl;
