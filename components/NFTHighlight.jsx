import React from "react";

const NFTHighlight = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Large Background */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/LargBg.svg')` }}
      ></div>

      {/* Medium Background */}
      <div
        className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/MidBg.svg')` }}
      ></div>

      {/* Small Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/SmallBg.svg')` }}
      ></div>

      {/* Add your content here */}
      <div className="relative z-10">{/* Your content */}</div>
    </section>
  );
};

export default NFTHighlight;
