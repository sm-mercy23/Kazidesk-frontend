import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building2, ChevronDown, Eye, Mail, User } from "lucide-react";
import { FormInput } from "./FormInput";
import { CountrySelect } from "./CountrySelect";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const signUpSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  companyName: z.string().min(2, "Company name is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="gap-2.5 text-5xl text-[#B3443D] font-bold text-center leading-[1.2] p-2.5 max-md:text-[40px]">
        Sign Up
      </div>

      <div className="flex w-full flex-col items-stretch mt-9 pl-2.5 space-y-6">
        <CountrySelect
          value={watch("country")}
          onChange={(value) => setValue("country", value)}
        />

        <FormInput
          label="Company Name"
          placeholder="Company name"
          icon={Building2}
          {...register("companyName")}
          error={errors.companyName?.message}
        />

        <FormInput
          label="Your Name"
          placeholder="Name"
          icon={User}
          {...register("name")}
          error={errors.name?.message}
        />

        <FormInput
          label="Your Email"
          placeholder="Email"
          icon={Mail}
          {...register("email")}
          error={errors.email?.message}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Password"
          icon={Eye}
          {...register("password")}
          error={errors.password?.message}
        />

        <div className="flex items-start space-x-2 p-2.5">
          <Checkbox
            id="terms"
            className="mt-1"
            onCheckedChange={(checked) => setValue("terms", checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-base text-[#4f1919] font-medium leading-[19px]"
          >
            I confirm that I have read and agree with{" "}
            <a href="#" className="text-[#B3443D] hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#B3443D] hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.terms && (
          <span className="text-sm text-red-500">{errors.terms.message}</span>
        )}

        <Button
          type="submit"
          className="w-full bg-[#4F1919] text-[#F1B59E] hover:bg-[#3D1414] rounded-[25px] py-4 font-semibold"
        >
          Sign Up
        </Button>

        <p className="text-center text-base text-[#4f1919]">
          You have an account?{" "}
          <a href="#" className="text-[#B3443D] font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
    </form>
  );
};
