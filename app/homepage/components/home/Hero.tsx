import React from "react";


import {Button} from "../ui/button";
import Header from "@/components/shared/AppHeader";
import Link from "next/link";

export function Hero() {
    return (
        <section
            className="place-items-center grid relative min-h-[100vh] w-full items-stretch px-[5vmin] pb-[10vmax] pt-[20px] max-md:max-w-full">
            <img
                src="/auth/homepage/hero-bg.png"
                alt="Hero Background"
                className="absolute h-full w-full object-cover inset-0"
            />
            {/*<div className="relative z-10">*/}
            <Header/>
            {/*</div>*/}
            <div className="relative mt-4 max-md:max-w-full">
                <div className="grid md:grid-cols-2 ">
                    {/* <div className="gap-5 flex max-md:flex-col max-md:items-stretch"> */}
                    <div className="w-full max-md:w-full max-md:ml-0 ">
                        <div
                            className="relative flex mr-[-86px] w-full flex-col self-stretch items-stretch font-normal my-auto max-md:max-w-full max-md:mt-10">
                            <div className="flex items-stretch gap-[19px] text-[15px] text-[#4F1919] leading-[1.2]">
                                <img
                                    src="/auth/homepage/decorative-line.png"

                                    alt="Decorative Line"
                                    className="aspect-[41.67] object-contain w-[82px] fill-[#B3443D] stroke-[2px] stroke-[#B3443D] shrink-0 my-auto"
                                />
                                <div>Achieve more</div>
                            </div>
                            <div
                                // className="flex w-full flex-col items-stretch mt-[23px] md:pl-[27px] max-md:max-w-full max-md:pl-5">
                                className="flex w-full flex-col items-stretch mt-[23px] ">
                                <h1 className="title-font !text-[5vmax] text-[#4F1919]  leading-[77px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
                                    <span style={{color: "rgba(179,68,61,1)"}}>HR</span><span>,</span><span
                                    style={{color: "rgba(179,68,61,1)"}}>{" "}CRM</span><span>, and{" "}</span><span
                                    style={{color: "rgba(179,68,61,1)",}}>Project Management</span><span>{" "}System</span>
                                </h1>
                                <p className="text-[#4F1919] text-lg leading-7 mr-[57px] mt-[47px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                                    The All-in-One Solution for Seamless Management and Unmatched
                                    Efficiency.
                                </p>
                                <div className="flex items-center gap-6 text-base text-center mt-[60px] max-md:mt-10">
                                    <Link href="/sign-up">
                                        <Button variant="secondary"
                                                className="bg-[#4F1919] px-10 py-5 rounded-full text-white shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.25)_inset,2px_2px_15px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="secondary"
                                        className="bg-[#F1B59E] px-10 py-5 rounded-full text-white shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.25)_inset,2px_2px_15px_0px_rgba(0,0,0,0.25)]"
                                    >
                                        Request Demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  h-max relative m-auto max-md:w-full ">
                        <img
                            src="/auth/homepage/tablet.png"
                            alt="Hero Image"
                            className="   object-contain grow md:w-[55vw]"
                        />
                    </div>
                </div>
            </div>
            <div
                className="relative text-[#B3443D] text-base font-normal leading-[1.2] ml-[66px] mt-[42px] max-md:ml-2.5 max-md:mt-10">
                ↓ Explore our Service
            </div>
        </section>
    );
}
