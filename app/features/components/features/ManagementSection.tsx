import React from "react";

const ManagementSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch text-[64px] text-white font-normal text-center leading-[77px] justify-center px-[170px] py-[53px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px] max-md:px-5">
      <div className="relative min-h-[919px] w-full px-[95px] py-[373px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px] max-md:px-5 max-md:py-[100px]">
        <img
          src="/auth/bsmanagement.JPG"
          alt="Business Management Background"
          className="aspect-[1.2] object-contain w-[1100px] absolute z-0 max-w-full -translate-x-2/4 -translate-y-2/4 h-[919px] left-2/4 top-2/4"
        />
        {/* <h2 className="self-stretch w-[910px] title-font z-10 relative max-w-full gap-2.5 p-2.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
          Manage your Business Whether
          <span className="text-[rgba(179,68,61,1)]"> Physical </span>or
          <span className="text-[rgba(179,68,61,1)]"> Absent, </span>hassle-free
        </h2> */}
      </div>
    </section>
  );
};

export default ManagementSection;
