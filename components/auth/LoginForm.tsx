import { useState } from "react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { useRouter } from "next/navigation";
import ForgotPasswordForm from "./ForgotPasswordForm";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle login logic here
      console.log("Login successful with:", { email, password });
      
      // Reset form after successful submission
      setEmail("");
      setPassword("");
      setErrors({});
      
      
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ password: "Invalid email or password" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };
  const [show,setShow]=useState(false)
  const handleForgotPassword = () => {
    // router.push("/forgot-password");
    setShow(true)
  };
  
  return (
    <>
    {show &&<ForgotPasswordForm onClose={()=>setShow(false)}/>}
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-stretch text-left max-md:max-w-full"
    >
      <h1 className="gap-2.5 text-5xl text-[#B3443D] font-bold text-center leading-[1.2] p-2.5 max-md:text-[40px]">
        Sign In
      </h1>

      <div className="flex w-full flex-col items-stretch mt-32 pl-2.5 max-md:max-w-full max-md:mt-10">
        <EmailInput 
          value={email} 
          onChange={setEmail} 
          error={errors.email}
        />

        <div className="mt-[25px]">
          <PasswordInput 
            value={password} 
            onChange={setPassword} 
            error={errors.password}
          />
        </div>

        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-base text-[#B3443D] font-medium text-center mt-2.5 p-2.5 hover:text-[#8a332d] transition-colors duration-200"
        >
          Forgot Password?
        </button>

        <div className="self-center text-base text-center mt-[58px] p-2.5 max-md:mt-10">
          <span className="font-medium text-[#4f1919]">
            Don't have an account?{" "}
          </span>
          <button
            type="button"
            onClick={handleSignUp}
            className="font-semibold text-[#B3443D] hover:text-[#8a332d] transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[#4F1919] min-h-[51px] text-base text-[#F1B59E] font-semibold text-center leading-[1.2] ml-2.5 mt-[68px] px-2.5 py-4 rounded-[25px] transition-colors duration-200 max-md:mt-10 ${
          isSubmitting 
            ? "opacity-70 cursor-not-allowed" 
            : "hover:bg-[#3a1313]"
        }`}
      >
        {isSubmitting ? "Signing In..." : "Log In"}
      </button>
    </form>
    </>
  );
};
