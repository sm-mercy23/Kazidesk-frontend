import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    // <article className="flex flex-col justify-center self-stretch px-8 py-12 my-auto rounded-3xl bg-rose-950 min-w-60 w-[421px] max-md:px-5 max-md:max-w-full">
    <article className="bg-rose-950 p-4 rounded-3xl">
      
      {/** <div className="flex flex-col w-full max-w-[359px]"> */}
      <div className="flex flex-col">
        <h3 className="gap-2.5 self-start p-2.5 text-2xl font-medium leading-tight text-white">
          {title}
        </h3>
        <p className="gap-2.5 self-stretch p-2.5 mt-3 w-full text-base leading-7 text-red-300">
          {description}
        </p>
      </div>
    </article>
  );
};












export default FeatureCard;
