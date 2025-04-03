import React, {useState} from "react";

const options = [
    "Requesting Demo",
    "Get more info",
    "Customized Experience",
    "Company Intergration",
];

const InterestOptions: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <div className="flex w-full flex-col mt-9 max-md:max-w-full">
            <div className="self-stretch gap-2.5 text-2xl text-black p-2.5 font-medium">
                I'm Interested in...
            </div>
            <div
                className="flex w-[1076px] max-w-full items-stretch gap-5 text-xl text-[#4F1919] flex-wrap justify-between mt-[17px] rounded-[10px]">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`bg-[rgba(241,181,158,0.3)] px-[25px] py-5 rounded-[10px] max-md:px-5 ${
                            selectedOption === option ? "ring-2 ring-[#B3443D]" : ""
                        }`}
                        onClick={() => handleOptionClick(option)}
                        aria-pressed={selectedOption === option}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default InterestOptions;
