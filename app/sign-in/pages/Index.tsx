import { LoginForm } from "@/components/auth/LoginForm";
import { SupportSection } from "@/components/auth/SupportSection";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white overflow-hidden px-[71px] py-[63px] max-md:px-5 w-full max-w-[1400px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <LoginForm />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <SupportSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
