import React from "react";
import PurpleRocket from "@/public/PurpleRocket.svg";
import Image from "next/image";

const TopCreators = () => {
  return (
    <section className="py-[90px] bg-[#2B2B2B]">
      <div className="mx-[100px]">
        <div className="flex justify-evenly">
          <div className="text-white">
            <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
              Trending Collection
            </h2>
            <h2 className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider mt-2">
              Checkout our weekly updated trending collection.
            </h2>
          </div>

          <div className="flex items-center text-white">
            <button className="flex items-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[50px] py-[14px]">
              <Image src={PurpleRocket} alt="purple rocket" />
              <p className="font-semibold">View Rankings</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
