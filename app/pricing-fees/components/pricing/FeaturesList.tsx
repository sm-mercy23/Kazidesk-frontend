
import React from "react";

const features = [
  "Max Active Employees",
  "File Storage",
  "Clients",
  "Employees",
  "Projects",
  "Attendance",
  "Tasks",
  "Estimates",
  "Invoices",
  "Payments",
  "Time Logs",
  "Tickets",
  "Events",
  "Notices",
  "Leaves",
  "Leads",
  "Holidays",
  "Products",
  "Expenses",
  "Contracts",
  "Reports",
  "Orders",
  "Knowledge Base",
  "Bank Account",
  "Messages",
  "Zoom",
  "Payroll",
  "Letter",
  "Recruit",
  "Purchase",
  "Assets",
];

const FeaturesList: React.FC = () => {
  return (
    <div className="bg-[rgba(20,20,20,1)] flex grow flex-col h-full flex-1 items-stretch text-xl text-white font-semibold leading-[1.2] justify-center w-full px-[37px] py-2 rounded-[45px] max-md:mt-2.5 max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full flex-col justify-center">
        {}
        <div className="self-stretch  h-[83px]"></div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`self-stretch gap-2.5 ${index > 0 ? "mt-5" : ""} p-2.5 ${
              feature.length > 15 ? "" : "whitespace-nowrap"
            }`}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
