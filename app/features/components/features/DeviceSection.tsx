import React, { useState } from "react";

const DeviceSection: React.FC = () => {
  const [isSmartphoneOpen, setIsSmartphoneOpen] = useState(true);
  const [isTabletOpen, setIsTabletOpen] = useState(false);

  return (
    <section className="bg-white w-full overflow-hidden pt-[21px] max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex w-[718px] max-w-full flex-col items-stretch mr-[83px] max-md:mr-2.5">
          <div className="flex w-full flex-col items-stretch justify-center p-2.5 max-md:max-w-full">
            <img
              src="/auth/features/managing.jpg" 
              alt="Device Management"
              className="aspect-[1.98] object-contain w-full rounded-[15px] max-md:max-w-full"
            />
          </div>
          <h2 className="w-[662px] max-w-full gap-2.5 title-font text-5xl text-[#B3443D] font-normal text-right leading-[58px] mt-1.5 p-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Managing made effortless with the devices you carry daily
          </h2>
        </div>
        <div className="w-full mt-[27px] max-md:max-w-full">
          <div className="bg-[rgba(179,68,61,0.05)] flex w-full flex-wrap px-[83px] py-[25px] max-md:max-w-full max-md:px-5">
            <div
              className="flex min-w-60 items-center gap-[40px_65px] justify-center p-2.5 cursor-pointer"
              onClick={() => setIsSmartphoneOpen(!isSmartphoneOpen)}
            >
              <div className="self-stretch flex flex-col items-stretch justify-center w-6 my-auto px-[5px] py-[11px]">
                <div className="bg-[rgba(79,25,25,1)] flex w-3.5 shrink-0 h-0.5" />
              </div>
              <div className="text-[#4F1919] text-2xl font-medium leading-[1.2] self-stretch my-auto">
                Smartphone
              </div>
            </div>
            {isSmartphoneOpen && (
              <div className="min-w-60 font-medium grow shrink w-[651px] max-md:max-w-full">
                <div className="w-[575px] max-w-full">
                  <div className="text-[#B3443D] text-xl leading-[1.2] max-md:max-w-full">
                    Iphone:
                  </div>
                  <div className="text-[#4F1919] text-base leading-7 mt-[22px] max-md:max-w-full">
                    Open Apple Store on your iPhone, then download the kazidesk
                    app sign in to get started.
                  </div>
                </div>
                <div className="w-full mt-[60px] max-md:max-w-full max-md:mt-10">
                  <div className="text-[#B3443D] text-xl leading-[1.2] max-md:max-w-full">
                    Android:
                  </div>
                  <div className="text-[#4F1919] text-base leading-7 mt-[22px] max-md:max-w-full">
                    Open the Play Store, search "KaziDesk" in the top bar, and
                    tap the app when it pops up. Hit "Install" to download it,
                    then tap "Open" once it's done—or find the icon on your home
                    screen. Sign in with your email and password (or sign up if
                    you're new), and you're set to start organizing tasks,
                    chatting with your team, and managing files right from your
                    phone
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="items-center border-t-[color:var(--Tobi-Brown,#4F1919)] bg-white flex w-full gap-[40px_65px] text-2xl text-[#4F1919] font-medium leading-[1.2] flex-wrap px-[83px] py-[45px] border-t border-solid max-md:max-w-full max-md:px-5 cursor-pointer"
            onClick={() => setIsTabletOpen(!isTabletOpen)}
          >
            <img
              src="/auth/features/tablet.jpg" 
              alt="Tablet/Computer Icon"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch my-auto">Tablet/ Computer</div>
          </div>
          {isTabletOpen && (
            <div className="min-w-60 font-medium grow shrink w-full px-[83px] py-[25px] max-md:max-w-full max-md:px-5">
              <div className="text-[#B3443D] text-xl leading-[1.2] max-md:max-w-full">
                Desktop & Tablet:
              </div>
              <div className="text-[#4F1919] text-base leading-7 mt-[22px] max-md:max-w-full">
                Visit our website at kazidesk.com and click "Sign In" in the top
                right corner. Enter your email and password to access your
                account. For tablets, you can also download our app from the App
                Store or Google Play Store for a more optimized experience.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
