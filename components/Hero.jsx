import React from "react";
import HeroCard from "@/public/HeroCard.svg";
import Image from "next/image";
import RocketIcon from "@/public/RocketLaunch.svg";
import HeroInfo from "@/public/HeroCardInfo.svg";
import BigInfo from "@/public/BigInfo.svg";

const Hero = () => {
  return (
    <section className="py-[30px] bg-[#2B2B2B]">
      <div className="md:flex gap-x-10 items-center justify-center mx-[30px]">
        <div className="max-w-[340px] md:max-w-[320px] lg:max-w-[480px] lg:leading-none m-auto md:m-0">
          <div className="m-auto">
            <h4 className="text-[28px] md:text-[38px] lg:leading-[75px] text-white lg:text-[67px] font-semibold">
              Discover Digital Art & Collect Nfts
            </h4>
            <h2 className="mt-2 lg:mt-6 lg:text-[22px] font-sans lg:leading-9 md:leading-6 text-gray-200">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h2>
          </div>
          <div className="bg-[#A259FF] px-[50px] py-5 rounded-2xl md:block hidden mt-5 lg:mt-8 max-w-fit">
            <button className="text-white font-semibold font-sans gap-4 flex items-center">
              <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
              Get Started
            </button>
          </div>
          <div className="mt-8 md:block hidden m-0">
            <Image src={BigInfo} alt="Hero Info" />
          </div>
        </div>
        <div className="my-10">
          <Image
            src={HeroCard}
            alt="Hero Card"
            className="w-[340px] md:w-[330px] lg:w-[540px] m-auto"
          />
        </div>
        <div className="bg-[#A259FF] px-[50px] py-5 rounded-2xl justify-center items-center text-center max-w-[340px] flex md:hidden m-auto">
          <button className="text-white font-semibold font-sans gap-4 flex">
            <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
            Get Started
          </button>
        </div>
        <div className="mt-10 flex md:hidden items-center justify-center">
          <Image src={HeroInfo} alt="Hero Info" className="w-[315px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
