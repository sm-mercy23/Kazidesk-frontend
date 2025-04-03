import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

export function AuthLayout({
  children,
  backgroundImage="/auth/Forgot Password.PNG"
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="flex w-full flex-col items-stretch justify-center py-2.5 max-md:max-w-full">
        <div className="bg-[rgba(30,30,30,0.75)] flex w-full flex-col items-stretch justify-center px-[62px] py-[63px] max-md:max-w-full max-md:px-5">
          <div className="aspect-[1.44] object-contain w-full min-h-[852px] rounded-[35px] max-md:max-w-full relative overflow-hidden">
            {}
            {/* <img
              src={backgroundImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}

            {}
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/40">
              <div className="w-full max-w-md">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
