import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    // <header className="bg-[rgba(179,68,61,1)] self-stretch flex w-full items-center gap-[40px_100px] font-normal justify-between flex-wrap px-[22px] py-[15px] rounded-[35px] max-md:max-w-full max-md:px-5">
    <header className="bg-[rgba(179,68,61,1)] main-navbar">
      <div className="self-stretch flex items-stretch gap-2 text-xl text-white whitespace-nowrap text-center leading-[1.1] w-[119px] my-auto">
        <img
          src="/auth/icons/logo.PNG"
          alt="KaziDesk Logo"
          className="aspect-[1] object-contain w-[25px] shrink-0"
        />
        <span>Kazidesk</span>
      </div>
      {/* <nav className="self-stretch flex min-w-60 gap-[40px_74px] text-base leading-[1.2] flex-wrap my-auto max-md:max-w-full"> */}
      <nav className="">
        <div className="flex min-w-60 items-center gap-6 text-white flex-wrap max-md:max-w-full">
          <Link
            href="/"
            className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="self-stretch gap-2.5 font-semibold whitespace-nowrap my-auto p-2.5"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5"
          >
            Pricing
          </Link>
          <Link
            href="/newsroom"
            className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5"
          >
            Newsroom
          </Link>
          <Link
            href="/contact"
            className="self-stretch gap-2.5 text-white my-auto p-2.5"
          >
            Contact us
          </Link>
        </div>
        <div className="flex min-w-60 items-center gap-[30px]">
          <button className="self-stretch border min-h-10 gap-2.5 text-white whitespace-nowrap w-[182px] my-auto px-2.5 py-[11px] rounded-[50px] border-white border-solid">
            Login
          </button>
          <button className="self-stretch bg-white min-h-10 gap-2.5 text-[rgba(179,68,61,1)] w-[182px] my-auto px-2.5 py-[11px] rounded-[50px]">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
