import { SupportWidget } from "@/components/support/SupportWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Customer Support Portal
      </h1>

      <div className="w-full max-w-md">
        <SupportWidget />
      </div>

      <div className="mt-8 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Need assistance?</h2>
        <p className="text-gray-600 mb-4">
          Our support team is here to help you with any questions or issues you
          might have. Use the search box above to find quick answers to common
          questions.
        </p>
        <p className="text-gray-600">
          For more detailed assistance, you can also reach out to our support
          team directly through email or phone during business hours.
        </p>
      </div>
    </div>
  );
};

export default Index;
