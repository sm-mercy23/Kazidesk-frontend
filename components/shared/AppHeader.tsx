import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import AppDropdown from "./AppDropdown";

const AppHeader: React.FC = () => {
    const path = usePathname()
    const isBrown = path == "/" || path == "/article" || path == "/contact"
    const color = isBrown ? "bg-[#4F1919]" : "bg-[rgba(179,68,61,1)]"
    return (
        <header className={`${color} w-full flex justify-between py-[15px] rounded-full px-5`}>
            {/* <div className="self-stretch flex items-stretch gap-2 text-xl text-white whitespace-nowrap text-center leading-[1.1] w-max bg-black my-auto"> */}
            <div className="w-max h-max my-auto flex self-stretch gap-2 text-xl text-white">
                <img
                    src="/auth/icons/Logo.png"
                    alt="KaziDesk Logo"
                    className="aspect-[1] object-contain w-[25px] "
                />
                <span>Kazidesk</span>
            </div>
            <nav className="self-stretch hidden md:flex justify-end flex-1 gap-5 text-base leading-[1.2] flex-wrap my-auto max-md:max-w-full">
                <div className="hidden md:flex justify-end px-4 items-center gap-2 text-white flex-wrap max-md:max-w-full">
                    <Link
                        href="/"
                        className="self-stretch  whitespace-nowrap my-auto p-2.5"
                    >
                        Home
                    </Link>
                    <Link
                        href="/features"
                        className="self-stretch  font-semibold whitespace-nowrap my-auto p-2.5"
                    >
                        Features
                    </Link>
                    <Link
                        href="/pricing"
                        className="self-stretch  whitespace-nowrap my-auto p-2.5"
                    >
                        Pricing
                    </Link>

                    <Link
                        href="/pricing-fees"
                        className="self-stretch  whitespace-nowrap my-auto p-2.5"
                    >
                        Pricing-fees
                    </Link>

                    <Link
                        href="/newsroom"
                        className="self-stretch  whitespace-nowrap my-auto p-2.5"
                    >
                        Newsroom
                    </Link>

                    <Link
                        href="/article"
                        className="self-stretch  whitespace-nowrap my-auto p-2.5"
                    >
                        article
                    </Link>

                    <Link
                        href="/contact"
                        className="self-stretch  text-white my-auto p-2.5"
                    >
                        Contact us
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href={"/sign-in"}>
                        <button
                            className="self-stretch border min-h-10  text-white whitespace-nowrap w-max my-auto px-10 py-[11px] rounded-[50px] border-white border-solid">
                            Login
                        </button>
                    </Link>
                    <Link
                        href="/sign-up">


                        <button
                            className="self-stretch bg-white min-h-10 gap-2.5 text-[rgba(179,68,61,1)] w-max my-auto px-10 py-[11px] rounded-[50px]">
                            Get Started
                        </button>
                    </Link>
                </div>
            </nav>
            <AppDropdown/>
        </header>
    );
};

export default AppHeader;
