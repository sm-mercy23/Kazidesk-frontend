import React from "react";

export function CallToAction() {
    return (
        // <section className="bg-[#4F1919] w-full overflow-hidden text-[rgba(179,68,61,1)] font-normal pt-[85px] px-16 max-md:max-w-full max-md:px-5">
        <section
            className="bg-[#4F1919] w-full text-[rgba(179,68,61,1)] font-normal pt-[85px] px-16 max-md:max-w-full max-md:px-5">
            {/*<div className="bg-white flex flex-col items-center pt-[124px] pb-[69px] px-20 rounded-[462px_462px_0px_0px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">*/}
            <div
                className="bg-white flex flex-col items-center pt-[124px] pb-[69px] px-20 rounded-t-[462] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
                {/*<div className="flex w-[846px] max-w-full flex-col items-stretch ml-[21px]">*/}
                <div className="w-[100%] max-w-full ">
                    {/*<div className="self-center flex w-[486px] max-w-full flex-col items-stretch">*/}
                    <div className="self-center grid place-items-center w-[486px] m-auto max-w-full ">
                        {/*<h2 className="self-stretch w-full break-words justify-center gap-2.5 text-[64px] text-center leading-[77px] p-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">*/}
                        <h2 className="self-stretch w-full justify-center gap-2.5 text-[5vmax] text-center leading-[77px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
                            <span>2 thousand users,</span>
                            <br/>
                            <span style={{color: "rgba(79,25,25,1)"}}>plus you.</span>
                        </h2>
                        <p className="self-stretch w-full gap-2.5 text-2xl font-medium leading-[1.2] mt-6 p-2.5 max-md:max-w-full">
                            It only takes few seconds to get started.
                        </p>
                        <div
                            className="self-center flex flex-wrap justify-center items-center gap-6 text-base text-[rgba(241,181,158,1)] text-center mt-6">
                            <button className="w-max px-5 rounded-full py-3 bg-[#B3443D]">Get Started - For Free
                            </button>
                            <button className="w-max px-5 rounded-full py-3 bg-[#4F1919]">Request a Demo</button>
                        </div>
                    </div>
                    <img
                        src="/auth/homepage/coming-soon.png"
                        alt="Users Illustration"
                        className="aspect-[2.3] object-contain w-full mt-[59px] max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </div>
        </section>
    );
}
