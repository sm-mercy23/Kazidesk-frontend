"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

// Create a simple placeholder for the missing components
const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Main content */}
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
