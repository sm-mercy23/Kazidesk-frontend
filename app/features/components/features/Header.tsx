import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppHeader: React.FC = () => {
    const path=usePathname()
    const isBrown=path=="/"||path=="/article"||path=="/contact"
    const color=isBrown?"bg-[#4F1919]":"bg-[rgba(179,68,61,1)]"
  return (
    <header className={`${color} main-navbar`}>
      <div className="self-stretch flex items-stretch gap-2 text-xl text-white whitespace-nowrap text-center leading-[1.1] w-max my-auto">
        <img
           src="/auth/icons/logo.png"
          alt="KaziDesk Logo"
          className="aspect-[1] object-contain w-[25px] shrink-0"
        />
        <span>Kazidesk</span>
      </div>
      <nav className="">
        <div className="flex  items-center gap-2 text-white flex-wrap max-md:max-w-full">
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
        <div className="flex  items-center gap-4">
          <Link
          href={"/sign-in"}>
          <button className="self-stretch border min-h-10  text-white whitespace-nowrap w-max my-auto px-10 py-[11px] rounded-[50px] border-white border-solid">
            Login
          </button>
          </Link>
          <Link 
          href="/sign-up">

          
          <button className="self-stretch bg-white min-h-10 gap-2.5 text-[rgba(179,68,61,1)] w-max my-auto px-10 py-[11px] rounded-[50px]">
            Get Started
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
