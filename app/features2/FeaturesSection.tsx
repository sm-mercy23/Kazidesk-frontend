import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Project Management",
      description:
        "Easily track project milestones, monitor task completion, and allocate resources efficiently. Keep your team on schedule with structured task assignments and real-time progress updates.",
    },
    {
      title: "Financial Management",
      description:
        "Handle expenses, invoicing, and revenue forecasting all in one place. Automatically generate invoices, track payments, and gain insights into your financial performance.",
    },
    {
      title: "Client & Lead Management",
      description:
        "Capture and organize leads seamlessly while tracking every client interaction. Improve conversions with data-driven insights and better customer relationship management.",
    },
    {
      title: "HR & Payroll",
      description:
        "Simplify payroll with automated calculations and compliance-ready processing. Employees can access payslips, request leave, and update personal details through a self-service portal.",
    },
    {
      title: "Product Management",
      description:
        "Manage your product catalog with detailed listings, monitor inventory levels, and set automatic stock alerts. Track sales trends to optimize inventory and forecast demand effectively.",
    },
  ];

  return (
    <div className="flex flex-col mt-10 w-full max-w-[95vw]">
      <div className="w-full grid  md:grid-cols-3 gap-2">
        {features.map((feature, i) => (
          <FeatureCard {...feature} key={i} />
        ))}
      </div>
      {/* <div className="flex flex-wrap gap-6 items-center">
        <FeatureCard {...features[0]} />
        <FeatureCard {...features[1]} />
        <FeatureCard {...features[2]} />
      </div>

      <div className="flex flex-wrap gap-6 items-center self-start mt-12 max-md:mt-10">
        <FeatureCard {...features[3]} />
        <FeatureCard {...features[4]} />
      </div> */}
    </div>
  );
};

export default FeaturesSection;
