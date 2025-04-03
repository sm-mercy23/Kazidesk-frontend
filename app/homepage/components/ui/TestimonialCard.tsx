import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  initials: string;
  name: string;
  bgColor: string;
  className?: string;
}

export function TestimonialCard({
  text,
  initials,
  name,
  bgColor,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch px-[25px] py-[22px] rounded-[25px]",
        className,
      )}
    >
      <div className="text-white font-medium leading-7 max-md:max-w-full">
        {text}
      </div>
      <div className="flex items-center gap-3.5 leading-8 mt-[31px]">
        <div
          className={cn(
            "self-stretch text-black font-semibold w-[52px] h-[52px] flex items-center justify-center my-auto rounded-[30px]",
          )}
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="text-white font-medium self-stretch my-auto">
          {name}
        </div>
      </div>
    </div>
  );
}
