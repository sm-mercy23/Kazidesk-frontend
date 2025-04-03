import React from "react";


export function TestimonialSection() {
    return (
        // <section className=" testimonial flex flex-col relative min-h-[1024px] w-full  items-center text-lg pt-[69px] pb-[31px] px-20 max-md:max-w-full max-md:px-5">
        <section
            className=" testimonial grid place-items-center gap-10 relative w-full  items-center text-lg pt-[69px] pb-[31px] px-20 max-md:max-w-full max-md:px-5">
            {/* <img
      
        // src="/auth/homepage/Testimonials.jpg"  
        alt="Testimonial Background"
        className=" h-full w-full object-cover inset-0"
      /> */}
            {/*<div className="relative flex w-[715px] max-w-full flex-col items-stretch">*/}
            <div className="relative flex w-full max-w-full flex-col items-stretch">
                <h2 className="text-white m-auto text-center title-font text-[64px] font-normal leading-[1.2] mx-[58px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5">
                    Hear it <span style={{color: "rgba(179,68,61,1)"}}>from</span> our{" "}
                    <span style={{color: "rgba(179,68,61,1)"}}>clients</span>
                </h2>
            </div>
            {/* <TestimonialCard
          text="Recommended\nVery happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available."
          initials="FO"
          name="Felix O."
          bgColor="rgba(226,0,116,1)"
          className="mt-[65px] max-md:mt-10"
        />

        <TestimonialCard
          text="Awesome app very user friendly\nWould highly recommend Jeton to my friends."
          initials="LA"
          name="Leonie A."
          bgColor="rgba(110,224,250,1)"
          className="mt-[15px]"
        />

        <TestimonialCard
          text="The best payment solution for German customers\nI've been a Jeton user for a few years!The support was always great and I'm always able to make my payments to the websites I want with no problem."
          initials="DP"
          name="Dennis P."
          bgColor="rgba(255,133,34,1)"
          className="z-10 mt-[15px]"
        />

        <TestimonialCard
          text="Awesome app very user friendly\nWould highly recommend Jeton to my friends."
          initials="LA"
          name="Leonie A."
          bgColor="rgba(255,252,127,1)"
          className="z-10 mt-[-134px] mx-[25px] max-md:max-w-full max-md:mr-2.5"
        />

        <TestimonialCard
          text="Awesome app very user friendly\nWould highly recommend Jeton to my friends."
          initials="LA"
          name="Leonie A."
          bgColor="rgba(0,49,203,1)"
          className="self-center mt-[-141px] w-[617px] max-w-full" */}
            {/* /> */}
            <img
                className="m-auto w-[60%] min-w-[300px]  bottom-0 top-0"
                src="/auth/Group 306.png"/>
        </section>
    );
}