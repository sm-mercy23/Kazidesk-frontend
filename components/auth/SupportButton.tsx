import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export const SupportButton = () => {
  return (
    <Button
      variant="default"
      className="relative justify-center items-center bg-[#4F1919] flex gap-2 px-[35px] py-[15px] rounded-[30px] border-[3px] border-solid border-[#B3443D] text-xl font-semibold text-[#F1B59E] hover:bg-[#3D1414]"
    >
      <HelpCircle className="h-6 w-6" />
      <span>Support</span>
    </Button>
  );
};
