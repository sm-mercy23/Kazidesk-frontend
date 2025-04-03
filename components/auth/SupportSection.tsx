import { useState } from "react";
import { AppSupportWidget } from "../shared/AppSupport";

export const SupportSection = () => {
    const [show,setShow]=useState(false)
    return (
        <>
        
        <div
            onClick={()=>setShow(!show)}
            // className="flex flex-col relative min-h-[898px] w-full text-xl text-[#F1B59E] font-semibold whitespace-nowrap text-center leading-[1.2] pt-[819px] pb-[25px] px-[70px] rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
            className="flex flex-col relative h-[90vmin] w-full text-xl text-[#F1B59E] font-semibold whitespace-nowrap text-center leading-[1.2] px-[70px] rounded-[30px] max-md:max-w-full max-md:px-5">
            <img
                src="/auth/sign-in.jpg"
                alt="Background decoration"
                className="absolute h-full w-full object-cover inset-0 rounded-[30px]"
                
            />
            {show&&<AppSupportWidget className="bottom-30 w-3/4 left-0 right-0  absolute m-auto"/>}
            <button
                className="absolute w-3/4 bottom-5 justify-center items-center bg-[#4F1919] flex gap-2 px-[35px] py-[15px] rounded-[30px] border-[3px] border-solid border-[#B3443D] max-md:px-5 hover:bg-[#3a1313] transition-colors duration-200">
                <img
                    src="/auth/support-icon.png"
                    alt="Support icon"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
                <span className="self-stretch my-auto">Support</span>
            </button>
        </div>
        </>
    );
};
