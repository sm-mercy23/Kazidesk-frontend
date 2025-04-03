import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const countries = [
  {
    code: "KE",
    name: "Kenya",
    flag:"/auth/kenya.png"

  },
  {
    code: "US",
    name: "United States",
    flag:"/auth/USA.png"

  },
  {
    code: "GB",
    name: "United Kingdom",
    flag:"/auth/united-kingdom.png"

  },
];

interface CountrySelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
        Country
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-[rgba(241,181,158,0.4)] text-base text-[#4F1919] font-medium p-2.5 rounded-[10px] focus:ring-[#B3443D]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="h-4 w-4 object-contain"
                />
                <span>{country.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
