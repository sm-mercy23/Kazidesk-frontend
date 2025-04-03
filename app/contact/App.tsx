"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";


const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {}
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
