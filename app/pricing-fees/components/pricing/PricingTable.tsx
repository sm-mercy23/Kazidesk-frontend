
import React from "react";
import FeaturesList from "./FeaturesList";
import PricingColumn from "./PricingColumn";

const PricingTable: React.FC = () => {
  return (
    <div className="self-stretch mb-[-21px] mt-[137px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
      <div className="gap-5  flex max-md:flex-col max-md:items-stretch">
        <div className="w-3/12 max-md:w-full  max-md:ml-0">
          <FeaturesList />
        </div>

        <PricingColumn
          title="Starter"
          maxEmployees="5"
          storage="5 GB"
          borderColor="rgba(0,49,203,1)"
          isHighlighted={true}
        />

        <PricingColumn
          title="Medium"
          maxEmployees="20"
          storage="10 GB"
          borderColor="rgba(226,0,116,1)"
        />

        <PricingColumn
          title="Large"
          maxEmployees="500"
          storage="100 GB"
          borderColor="rgba(255,133,34,1)"
        />
      </div>
    </div>
  );
};

export default PricingTable;
