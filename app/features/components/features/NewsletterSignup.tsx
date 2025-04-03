import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[rgba(179,68,61,0.11)] rounded-[20px] p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-[#B3443D] mb-4">
        Stay Updated
      </h3>
      <p className="text-[#4F1919] mb-6">
        Subscribe to our newsletter for the latest updates, tips, and special
        offers.
      </p>

      {isSuccess ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-md mb-4">
          Thank you for subscribing! You'll receive our next newsletter soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B3443D]"
              disabled={isSubmitting}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}

      <p className="text-sm text-[#4F1919] mt-4">
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default NewsletterSignup;
