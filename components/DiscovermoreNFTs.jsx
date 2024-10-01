import React from "react";
import NFTCardsRow1 from "@/public/NFTCardsRow1.png";
import NFTCardsRow2 from "@/public/NFTCardsRow2.png";
import NFTCardsRow3 from "@/public/NFTCardsRow3.png";
import Image from "next/image";

const DiscovermoreNFTs = () => {
  return (
    <section className="py-[40px] md:py-[30px] lg:py-[90px] bg-[#2B2B2B]">
      <div className="text-white">
        <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
          Top creators
        </h2>
        <h2 className="text-[16px] lg:text-[22px] text-gray-200 max-w-[350px] md:max-w-[400px] lg:max-w-full font-sans tracking-wider mt-2">
          Checkout Top Rated Creators on the NFT Marketplace
        </h2>
      </div>
      <div></div>
    </section>
  );
};

export default DiscovermoreNFTs;
