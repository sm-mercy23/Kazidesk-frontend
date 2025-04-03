import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const PasswordInput = ({ value, onChange, error }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col items-stretch">
      <Label
        htmlFor="password"
        className="gap-2.5 text-lg text-[#061448] font-semibold whitespace-nowrap text-left leading-[1.2] p-2.5"
      >
        Password
      </Label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`bg-[rgba(241,181,158,0.4)] pr-10 text-base font-medium rounded-[10px] border-none ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          placeholder="Password"
          aria-invalid={!!error}
          aria-describedby={error ? "password-error" : undefined}
        />
      </div>
      {error && (
        <p id="password-error" className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};
