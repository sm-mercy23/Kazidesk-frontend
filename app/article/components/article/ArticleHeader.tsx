import React from "react";
import { Button } from "@/components/ui/button";


interface ArticleHeaderProps {
  title: string;
  date: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  date,
}) => {
  return (
    <header className="w-[863px] max-w-full mt-[57px] max-md:mt-10">
      <Button
        variant="outline"
        className="self-stretch border border-[color:var(--Stiletto-Love,#B3443D)] bg-white min-h-12 w-[198px] max-w-full gap-2.5 text-base text-[#B3443D] font-normal text-center px-2.5 py-[15px] rounded-[35px] border-solid max-md:mt-10"
      >
        Back to Newsroom
      </Button>

      <div className="w-[774px] max-w-full pb-[5px] mt-[57px] max-md:mt-10">
        <h1 className="text-[#4F1919] text-[40px] font-semibold leading-[48px] max-md:max-w-full">
          {title}
        </h1>
        <time className="text-[rgba(67,67,67,1)] text-xl font-medium leading-[1.2] mt-5 block">
          {date}
        </time>
      </div>
    </header>
  );
};

export default ArticleHeader;
