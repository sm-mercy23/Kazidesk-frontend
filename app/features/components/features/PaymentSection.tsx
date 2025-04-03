import React from "react";

const PaymentSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch pt-[137px] pb-[84px] max-md:max-w-full max-md:pt-[100px]">
      <div className="flex w-[604px] max-w-full flex-col items-stretch ml-[97px] max-md:ml-5">
        <h2 className="text-[#b3443d] text-[64px] title-font font-normal leading-[1.2] max-md:text-[40px]">
          Pay <span className="text-[rgba(79,25,25,1)]">on-the-go</span>
        </h2>
        <p className="text-[#4F1919] text-xl font-medium leading-7 mt-[41px] max-md:max-w-full max-md:mt-10">
          Make contactless payments in stores with Jeton Card. Easily link your
          card with your digital wallet. Tap, pay and speed through checkouts!
        </p>
      </div>
      <img
      src="/auth/features/payonthego.jpg"  
        alt="Mobile Payment"
        className="aspect-[2.27] object-contain w-full mt-[102px] max-md:max-w-full max-md:mt-10"
      />
      <div className="self-center flex items-center gap-[40px_64px] flex-wrap mt-[100px] max-md:max-w-full max-md:mt-10">
        <div className="text-[#B3443D] title-font text-5xl font-normal leading-[58px] self-stretch w-[453px] my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          <span className="  text-[rgba(79,25,25,1)]">
            Faster, smoother Business Intergrations:
          </span>{" "}
          Kazidesk integrates Apple Pay and Google Pay
        </div>
        <div className="self-stretch min-w-60 text-base w-[624px] my-auto max-md:max-w-full">
          <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 text-[#4F1919] font-medium leading-7 p-2.5 max-md:max-w-full">
            By integrating with Apple Pay and Google Pay, Jeton users can now
            enjoy a quicker and more straightforward payment process. With just
            a few taps on their smartphones, users can make payments at a wide
            range of online and offline merchants, eliminating the need for cash
            or card transactions.
            <br />
            Experience a seamless checkout process with a single tap. Save time
            and effort as your Jeton card details are conveniently filled in for
            you during checkout.
          </div>
          <button className="self-stretch shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.25)_inset,2px_2px_15px_0px_rgba(0,0,0,0.25)] bg-[#B3443D] min-h-12 w-[198px] max-w-full gap-2.5 text-[#F1B59E] font-normal text-center mt-[18px] px-2.5 py-[15px] rounded-[35px]">
            Start your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
