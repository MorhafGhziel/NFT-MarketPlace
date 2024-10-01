import React from "react";
import NFTCard1 from "@/public/NFTCard1.svg";
import NFTCard2 from "@/public/NFTCard2.svg";
import NFTCard3 from "@/public/NFTCard3.svg";
import EyeIcon from "@/public/eye.svg";
import Image from "next/image";

const DiscovermoreNFTs = () => {
  return (
    <section className="py-[40px] md:py-[30px] lg:py-[80px] bg-[#2B2B2B] flex justify-center">
      <div className="lg:max-w-6xl md:max-w-2xl max-w-[350px] mx-auto">
        <div className="flex md:ml-0  ml-4 md:justify-between">
          <div className="text-white">
            <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
              Discover More NFTs
            </h2>
            <h2 className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider mt-2">
              Explore new trending NFTs{" "}
            </h2>
          </div>
          <div className="md:flex justify-center items-center text-white font-sans hidden">
            <div className="border border-[#A259FF] border-1 w-fit rounded-xl px-10 py-3">
              <button className="flex items-center justify-center gap-3">
                <Image src={EyeIcon} alt="Eye Icon" />
                <h4>See All</h4>
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-6 lg:mt-[60px] justify-center mt-10">
          <Image src={NFTCard1} alt="NFTCardsRow 1" />
          <div className="lg:block md:hidden block">
            <Image src={NFTCard2} alt="NFTCardsRow 2" />
          </div>
          <Image src={NFTCard3} alt="NFTCardsRow 3" />
        </div>
        <div className="flex justify-center items-center text-white font-sans md:hidden mt-10">
          <div className="flex justify-center border border-[#A259FF] border-1 w-[310px] rounded-xl px-10 py-3">
            <button className="flex items-center justify-center gap-3">
              <Image src={EyeIcon} alt="Eye Icon" />
              <h4>See All</h4>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscovermoreNFTs;
