"use client";

import { SignUpForm } from "@/components/auth/SignUpForm";
import { SupportButton } from "@/components/auth/SupportButton";
import './index.css';

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-white overflow-hidden px-[71px] py-14 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <SignUpForm />
            </div>
          </div>

          <div className="w-6/12 ml-5 m-auto max-md:w-full max-md:ml-0">
            {/*<div className="relative min-h-[898px] w-full rounded-[30px] overflow-hidden max-md:max-w-full max-md:mt-10">*/}
            <div className="relative min-h-[90vmin] w-full rounded-[30px] overflow-hidden max-md:max-w-full max-md:mt-10">
              <img
                 src="/auth/sign-up.jpg"
                alt="Background"
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <SupportButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
