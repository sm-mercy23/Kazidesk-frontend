import React from "react";
import Navbar from "../components/layout/Navbar";
import ContactActions from "../components/contact/ContactActions";
import InterestOptions from "../components/contact/InterestOptions";
import ContactForm from "../components/contact/ContactForm";
import Header from "@/components/shared/AppHeader";

const Index: React.FC = () => {
  return (
    <main className="bg-white flex flex-col overflow-hidden pt-9 pb-[77px] px-[70px] max-md:px-5">
      {/* <Navbar /> */}
      <Header/>
      <section aria-labelledby="contact-heading">
        <h1
          id="contact-heading"
          className="self-stretch title-font gap-2.5 text-[64px] text-[#B3443D] font-normal leading-[1.2] mt-[30px] p-2.5 max-md:text-[40px]"
        >
          Let's talk
        </h1>

        <ContactActions />

        <div className="self-stretch flex w-full flex-col items-stretch font-medium leading-[1.2] mt-[30px] max-md:max-w-full">
          <h2 className="gap-2.5 text-[22pt] text-black p-2.5 max-md:max-w-full">
            or contact us via form below
          </h2>

          <InterestOptions />

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Index;
