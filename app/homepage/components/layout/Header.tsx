import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative justify-between items-center bg-[#4F1919] self-center flex w-full max-w-[1300px] gap-[40px_100px] font-normal flex-wrap px-[22px] py-[15px] rounded-[35px] max-md:max-w-full max-md:px-5">
      <Link
        href="/"
        className="self-stretch flex items-stretch gap-2 text-xl text-white whitespace-nowrap text-center leading-[1.1] w-[119px] my-auto"
      >
        <img
          src="/auth/icons/logo.png"
          alt="Kazidesk Logo"
          className="aspect-[1] object-contain w-[25px] shrink-0"
        />
        <span>Kazidesk</span>
      </Link>
      <nav className="self-stretch flex min-w-60 gap-[40px_74px] text-base leading-[1.2] flex-wrap my-auto max-md:max-w-full">
        <div className="flex min-w-60 items-center gap-6 text-white flex-wrap max-md:max-w-full">
          <Link
            href="/"
            className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5"
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
          <Link href="/contact" className="self-stretch gap-2.5 my-auto p-2.5">
            Contact us
          </Link>
        </div>
        <div className="flex min-w-60 items-center gap-[30px]">
          <Button
            variant="outline"
            className="self-stretch min-h-10 w-[182px] my-auto px-2.5 py-[11px] rounded-[50px]"
          >
            Login
          </Button>
          <Button
            variant="secondary"
            className="self-stretch bg-white min-h-10 w-[182px] my-auto px-2.5 py-[11px] rounded-[50px]"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
