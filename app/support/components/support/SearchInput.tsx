import React from "react";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  iconSrc: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onChange,
  value = "",
  iconSrc,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={`items-center border bg-white flex w-full gap-2.5 p-2.5 rounded-[10px] border-solid border-black ${className}`}
      role="search"
    >
      <img
        src={iconSrc}
        alt="Search"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="self-stretch my-auto bg-transparent outline-none w-full text-[rgba(136,136,136,1)]"
        aria-label={placeholder}
      />
    </div>
  );
};
