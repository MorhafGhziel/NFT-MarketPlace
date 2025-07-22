"use client";

import React from "react";
import HeroCard from "@/public/HeroCard.svg";
import Image from "next/image";
import RocketIcon from "@/public/RocketLaunch.svg";
import HeroInfo from "@/public/HeroCardInfo.svg";
import BigInfo from "@/public/BigInfo.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B]">
      <div className="md:flex gap-x-10 items-center justify-center mx-[30px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[340px] md:max-w-[320px] lg:max-w-[480px] lg:leading-none m-auto md:m-0"
        >
          <div className="m-auto">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[28px] md:text-[38px] lg:leading-[75px] text-white lg:text-[67px] font-semibold"
            >
              Discover Digital Art & Collect Nfts
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 lg:mt-6 lg:text-[22px] font-sans lg:leading-9 md:leading-6 text-gray-200"
            >
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#A259FF] px-[50px] py-5 rounded-2xl md:block hidden mt-5 lg:mt-8 max-w-fit"
          >
            <button className="text-white font-semibold font-sans gap-4 flex items-center">
              <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
              Get Started
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 md:block hidden m-0"
          >
            <Image src={BigInfo} alt="Hero Info" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.02 }}
          className="my-10"
        >
          <Image
            src={HeroCard}
            alt="Hero Card"
            className="w-[340px] md:w-[330px] lg:w-[540px] m-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#A259FF] px-[50px] py-5 rounded-2xl justify-center items-center text-center max-w-[340px] flex md:hidden m-auto"
        >
          <button className="text-white font-semibold font-sans gap-4 flex">
            <Image src={RocketIcon} alt="RocketLaunch Icon" className="w-5" />
            Get Started
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex md:hidden items-center justify-center"
        >
          <Image src={HeroInfo} alt="Hero Info" className="w-[315px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
