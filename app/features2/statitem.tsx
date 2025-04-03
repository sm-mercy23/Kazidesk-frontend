import React from "react";

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-60 ">
      <p className="gap-2.5 self-center p-2.5 text-5xl leading-none text-rose-700 whitespace-nowrap max-md:text-4xl">
        {value}
      </p>
      <p className="gap-2.5 self-stretch p-2.5 mt-2.5 w-full text-xl leading-10 text-rose-950">
        {description}
      </p>
    </div>
  );
};

export default StatItem;
