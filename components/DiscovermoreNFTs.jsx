"use client";

import React from "react";
import NFTCard1 from "@/public/NFTCard1.svg";
import NFTCard2 from "@/public/NFTCard2.svg";
import NFTCard3 from "@/public/NFTCard3.svg";
import EyeIcon from "@/public/Eye.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const DiscovermoreNFTs = () => {
  return (
    <section className="py-[40px] md:py-[30px] lg:py-[80px] bg-[#2B2B2B] flex justify-center">
      <div className="lg:max-w-6xl md:max-w-2xl max-w-[350px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex md:ml-0 ml-4 md:justify-between"
        >
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold"
            >
              Discover More NFTs
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider mt-2"
            >
              Explore new trending NFTs{" "}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:flex justify-center items-center text-white font-sans hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#A259FF] border-1 w-fit rounded-xl px-10 py-3"
            >
              <button className="flex items-center justify-center gap-3">
                <Image src={EyeIcon} alt="Eye Icon" />
                <h4>See All</h4>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex md:flex-nowrap flex-wrap gap-6 lg:mt-[60px] justify-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={NFTCard1} alt="NFTCardsRow 1" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="lg:block md:hidden block"
          >
            <Image src={NFTCard2} alt="NFTCardsRow 2" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={NFTCard3} alt="NFTCardsRow 3" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center items-center text-white font-sans md:hidden mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center border border-[#A259FF] border-1 w-[310px] rounded-xl px-10 py-3"
          >
            <button className="flex items-center justify-center gap-3">
              <Image src={EyeIcon} alt="Eye Icon" />
              <h4>See All</h4>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscovermoreNFTs;
