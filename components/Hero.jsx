import React from "react";
import HeroCard from "@/public/HeroCard.svg";
import Image from "next/image";
import RocketIcon from "@/public/RocketLaunch.svg";
import HeroInfo from "@/public/HeroCardInfo.svg";

const Hero = () => {
  return (
    <section className="py-[30px] bg-[#2B2B2B]">
      <div className="md:flex gap-x-10 items-center justify-center mx-[30px]">
        <div className="max-w-[340px] md:max-w-[330px] lg:max-w-[440px] lg:leading-none m-auto md:m-0">
          <div className="font-sans text-white m-auto">
            <h4 className="text-[28px] md:text-[38px] lg:text-[67px] font-semibold">
              Discover digital art & Collect NFTs
            </h4>
            <h2 className="text-base mt-2 lg:mt-6 lg:text-[22px] leading-8">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h2>
          </div>
          <div className="bg-[#A259FF] px-[50px] py-5 rounded-3xl md:block hidden mt-5 lg:mt-10 max-w-fit">
            <button className="text-white font-semibold font-sans gap-4 flex">
              <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
              Get Started
            </button>
          </div>
          <div className="mt-10 md:block hidden m-0">
            <Image
              src={HeroInfo}
              alt="Hero Info"
              className="w-[330px] lg:w-[520px]"
            />
          </div>
        </div>
        <div className="my-10">
          <Image
            src={HeroCard}
            alt="Hero Card"
            className="w-[315px] md:w-[330px] lg:w-[540px] m-auto"
          />
        </div>
        <div className="bg-[#A259FF] px-[50px] py-5 rounded-3xl justify-center items-center text-center flex md:hidden max-w-fit m-auto">
          <button className="text-white font-semibold font-sans gap-4 flex">
            <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
            Get Started
          </button>
        </div>
        <div className="mt-10 block md:hidden ">
          <Image src={HeroInfo} alt="Hero Info" className="w-[311px] m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
