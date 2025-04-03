import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
  label: string;
}

export const FormInput = ({
  icon: Icon,
  error,
  label,
  className,
  ...props
}: FormInputProps) => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
        {label}
      </div>
      <div className="relative">
        <Input
          className={cn(
            "bg-[rgba(241,181,158,0.4)] text-base text-[#4F1919] font-medium p-2.5 rounded-[10px]",
            "placeholder:text-[#888] focus-visible:ring-[#B3443D]",
            error && "border-red-500",
            className,
          )}
          {...props}
        />
        {Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Icon className="h-5 w-5 text-[#4F1919]" />
          </div>
        )}
      </div>
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};
