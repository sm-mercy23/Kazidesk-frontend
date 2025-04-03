import React from "react";

const ContactActions: React.FC = () => {
  return (
    <div className="flex items-center gap-[27px] mt-[30px]">
      <button
        className="justify-center items-center bg-[#B3443D] self-stretch flex gap-2.5 text-xl text-white font-medium leading-[1.2] my-auto px-[30px] py-5 rounded-[40px] max-md:px-5"
        aria-label="Make a call"
      >
        <img
          src="/auth/telephone.png"
          alt="Phone icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Make a call</div>
      </button>
      <button
        className="justify-center items-center bg-[#F1B59E] self-stretch flex min-h-16 gap-2.5 w-16 h-16 my-auto px-5 rounded-[39px]"
        aria-label="Contact via WhatsApp"
      >
        <img
          src="/auth/whatsapp-contact.png"
          alt="WhatsApp icon"
          className="aspect-[1] object-contain w-6 self-stretch my-auto"
        />
      </button>
    </div>
  );
};

export default ContactActions;
