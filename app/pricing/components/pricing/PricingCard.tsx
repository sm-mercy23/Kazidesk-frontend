import React from "react";

interface PricingCardProps {
  title: string;
  price: number;
  borderColor: string;
  priceColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  borderColor,
  priceColor,
}) => {
  
  const formattedPrice = price.toFixed(2);
  const [dollars, cents] = formattedPrice.split(".");

  return (
    <div
      className="shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] bg-white w-full mx-auto px-[35px] py-[50px] rounded-[0px_0px_10px_10px] border-t-8 border-solid max-md:mt-[22px] max-md:px-5"
      style={{ borderTopColor: borderColor }}
    >
      <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
        <div className="self-stretch w-[187px] my-auto">
          <div className="text-[#4F1919] text-[32px] font-semibold leading-none">
            {title}
          </div>
          <div className="w-full mt-[60px] max-md:mt-10">
            <div
              className={`flex w-max gap-[2px] h-max font-semibold whitespace-nowrap`}
              style={{ color: priceColor }}
            >
              <div className="text-[28px]  w-max leading-none ">$</div>
              <div className="flex items-center flex-1 gap-2.5 justify-center mt-1 p-2.5">
                <div className="text-[64px] leading-[0.5] self-stretch my-auto max-md:text-[40px]">
                  {dollars}
                </div>
                <div className="text-[28px] leading-none self-stretch my-auto">
                  .{cents}
                </div>
              </div>
            </div>
            <div className="text-black text-xl font-normal leading-[1.6] mt-[26px]">
              billed monthly
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch title-font bg-[#B3443D] w-full gap-2.5 text-xl text-white font-semibold uppercase leading-[1.4] mt-[45px] px-[30px] py-5 rounded-[5px] max-md:mt-10 max-md:px-5">
        What you Get
      </div>
    </div>
  );
};

export default PricingCard;
