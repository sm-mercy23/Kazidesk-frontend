import React from "react";
import StatItem from "./statitem";

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center px-10  w-full font-medium text-center bg-[#F1B59E] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <StatItem value="1000+" description="Businesses Empowered" />
      <StatItem value="10M+" description="Transactions Processed" />
      <StatItem value="99%" description="Client Satisfaction Rate" />
    </section>
  );
};

export default StatsSection;
