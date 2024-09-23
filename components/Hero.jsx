import React from "react";
import HeroCard from "@/public/HeroCard.svg";
import Image from "next/image";
import RocketIcon from "@/public/RocketLaunch.svg";
import HeroInfo from "@/public/HeroCardInfo.svg";

const Hero = () => {
  return (
    <section className="py-[30px] bg-[#2B2B2B]">
      <div className="md:flex flex-wrap mx-[30px]">
        <div className="font-sans text-white">
          <h4 className="text-[28px] font-semibold">
            Discover digital art & Collect NFTs
          </h4>
          <h2 className="text-base mt-2">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </h2>
        </div>
        <div className="my-10">
          <Image src={HeroCard} alt="Hero Card" />
        </div>
        <div className="bg-[#A259FF] px-[50px] py-5 rounded-3xl justify-center items-center text-center flex">
          <button className="text-white font-semibold font-sans gap-4 flex">
            <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
            Get Started
          </button>
        </div>
        <div className="mt-10">
          <Image src={HeroInfo} alt="Hero Info" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
