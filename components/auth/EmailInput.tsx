import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const EmailInput = ({ value, onChange, error }: EmailInputProps) => {
  return (
    <div className="flex w-full flex-col items-stretch text-left leading-[1.2]">
      <Label
        htmlFor="email"
        className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5"
      >
        Your Email
      </Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Input
          id="email"
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`bg-[rgba(241,181,158,0.4)] pl-10 text-base font-medium rounded-[10px] border-none ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          placeholder="Email"
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
        />
      </div>
      {error && (
        <p id="email-error" className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};
