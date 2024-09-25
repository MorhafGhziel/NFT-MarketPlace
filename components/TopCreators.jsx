import React from "react";
import PurpleRocket from "@/public/PurpleRocket.svg";
import Image from "next/image";
import RankingOne from "@/public/RankingOne.svg";
import RankingTwo from "@/public/RankingTwo.svg";
import RankingThree from "@/public/RankingThree.svg";
import RankingFour from "@/public/RankingFour.svg";
import AvatarOne from "@/public/AvatarOne.svg";
import AvatarTwo from "@/public/AvatarTwo.svg";
import AvatarThree from "@/public/AvatarThree.svg";
import AvatarFour from "@/public/AvatarFour.svg";
import TopCreatoursNumber from "@/public/TopCreatoursNumber.svg";

const TopCreators = () => {
  return (
    <section className="py-[90px] bg-[#2B2B2B] flex justify-center">
      <div className="mx-[30px] m-auto">
        <div className="flex gap-[180px]">
          <div className="text-white md:max-w-[400px] lg:max-w-full">
            <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
              Top creators
            </h2>
            <h2 className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider mt-2">
              Checkout Top Rated Creators on the NFT Marketplace
            </h2>
          </div>

          <div className=" items-center text-white hidden md:flex">
            <button className="flex items-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[50px] py-[14px]">
              <Image src={PurpleRocket} alt="purple rocket" />
              <p className="font-semibold">View Rankings</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 text-white font-sans">
          <div>
            <div className="bg-[#3B3B3B] rounded-2xl w-fit relative py-6">
              <div className=" px-14">
                <Image
                  src={RankingOne}
                  alt="Ranking One"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarOne} alt="Avatae One" className="" />
              </div>
              <div className="flex justify-center mt-6">
                <p className="text-[22px] font-sans">Keepitreal</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="text-base text-[#858584]">Total Sales:</p>
                <p className="font-normal">
                  <Image src={TopCreatoursNumber} alt="Top Creatours Number" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
