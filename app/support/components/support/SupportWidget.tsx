import React, { useState } from "react";
import { SearchInput } from "./SearchInput";

interface SupportWidgetProps {
  className?: string;
}

export const SupportWidget: React.FC<SupportWidgetProps> = ({
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <section
      className={`max-w-[432px] text-base font-medium text-center leading-[1.2] ${className}`}
      aria-labelledby="support-title"
    >
      <header className="self-stretch bg-[#4F1919] min-h-[52px] w-full gap-2.5 text-white whitespace-nowrap px-2.5 py-[17px] rounded-[10px_10px_0px_0px]">
        <h2 id="support-title">Support</h2>
      </header>
      <main className="bg-white flex w-full flex-col items-stretch text-[rgba(136,136,136,1)] justify-center p-2.5 rounded-[0px_0px_10px_10px]">
        <SearchInput
         iconSrc="./auth/support.PNG"
          placeholder="How can we help?"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </main>
    </section>
  );
};
