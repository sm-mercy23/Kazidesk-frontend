import React from "react";
import {Button} from "../ui/button";
import Link from "next/link";

interface FeatureSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    buttonText1: string;
    buttonText2: string;
    variant?: "default" | "alternate";
}

export function FeatureSection({
                                   title,
                                   description,
                                   buttonText1,
                                   buttonText2,
                                   variant = "default",
                               }: FeatureSectionProps) {
    return (
        <section
            // className={`bg-[#4F1919] flex w-full flex-col overflow-hidden font-normal ${variant === "alternate" ? "pt-[101px]" : "pb-[101px]"} px-20 max-md:max-w-full max-md:pl-5 max-md:${variant === "alternate" ? "pt-[100px]" : "pb-[100px]"}`}
            className={`bg-[#4F1919] w-full grid font-normal ${variant === "alternate" ? "" : ""} max-md:max-w-full ${variant === "alternate" ? "pt-[50px]" : "pb-[50px]"}`}
        >
            <div
                // className="bg-white flex w-[1264px] max-w-full flex-col items-center justify-center px-20 py-[294px] rounded-[0px_0px_0px_35vw] max-md:mb-2.5 max-md:px-5 max-md:py-[100px]">
                className={`bg-white flex w-[90%] ${variant === "alternate" ? "mr-auto rounded-tr-[35vw]" : 'ml-auto rounded-bl-[35vw]'} max-w-full flex-col items-center justify-center py-[40vh] max-md:px-5 max-md:py-[100px]`}>
                {/*<div className="flex mb-[-63px] w-[749px] max-w-full flex-col items-stretch ml-[23px] max-md:mb-2.5">*/}
                <div className="w-full md:w-3/4 grid max-w-full items-stretch ml-auto ">
                    <h2 className="text-[#b3443d] title-font text-[40px] leading-[1.2] max-md:max-w-full">
                        {title}
                    </h2>
                    <div
                        className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 text-lg text-[#4F1919] font-medium leading-8 mt-[30px] p-2.5 max-md:max-w-full">
                        {description}
                    </div>
                    <div className="flex items-center gap-6 text-base text-center pt-[30px]">
                        {/* <Link href="/sign-up"> */}
                        {/* <button className="bg-black w-max py-2 px-5 shadow-lg" >{buttonText1}</button> */}
                        {/* </Link> */}
                        <Button variant="red">{buttonText1}</Button>
                        <Button variant="secondary">{buttonText2}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
