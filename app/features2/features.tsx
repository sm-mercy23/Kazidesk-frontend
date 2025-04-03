import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <section className="mt-10 max-w-full rounded-none w-full">
      <div className="px-20 py-5 bg-rose-950 rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="/auth/features/product.jpg"
          alt="KaziDesk Platform Screenshot"
          className="object-contain w-full aspect-[2.7] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
