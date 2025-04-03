import React from "react";

const Navbar: React.FC = () => {
    return (
        <div
            className="justify-between items-center bg-[#4F1919] self-stretch flex min-h-[70px] w-full max-w-[1300px] gap-[40px_100px] font-normal flex-wrap px-[22px] py-[15px] rounded-[35px] max-md:max-w-full max-md:px-5">
            <div
                className="self-stretch flex items-stretch gap-2 text-xl text-white whitespace-nowrap text-center leading-[1.1] w-[119px] my-auto">
                <img
                    src="/auth/icons/Logo.png"
                    alt="Kazidesk Logo"
                    className="aspect-[1] object-contain w-[25px] shrink-0"
                />
                <div>Kazidesk</div>
            </div>
            <div
                className="self-stretch flex min-w-60 gap-[40px_74px] text-base leading-[1.2] flex-wrap my-auto max-md:max-w-full">
                <div className="flex min-w-60 items-center gap-6 text-white flex-wrap max-md:max-w-full">
                    <button className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5">
                        Home
                    </button>
                    <button className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5">
                        Features
                    </button>
                    <button className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5">
                        Pricing
                    </button>
                    <button className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5">
                        Newsroom
                    </button>
                    <button className="self-stretch gap-2.5 font-semibold my-auto p-2.5">
                        Contact us
                    </button>
                </div>
                <div className="flex min-w-60 items-center gap-[30px]">
                    <button
                        className="self-stretch border border-[color:var(--Primary-White,#FFF)] min-h-10 gap-2.5 text-white whitespace-nowrap w-[182px] my-auto px-2.5 py-[11px] rounded-[50px] border-solid">
                        Login
                    </button>
                    <button
                        className="self-stretch bg-white min-h-10 gap-2.5 text-[#B3443D] w-[182px] my-auto px-2.5 py-[11px] rounded-[50px]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
