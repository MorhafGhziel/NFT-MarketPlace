"use client";

import React from "react";
import EyeIcon from "@/public/Eye.svg";
import Image from "next/image";
import Avatar from "@/public/Avatar.svg";
import { motion } from "framer-motion";

const NFTHighlight = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Large Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/LargBg.svg')` }}
      ></motion.div>

      {/* Medium Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/MidBg.svg')` }}
      ></motion.div>

      {/* Small Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="block md:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/SmallBg.svg')` }}
      ></motion.div>

      {/* Add your content here */}
      <div className="relative z-10 flex items-end justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="lg:max-w-6xl md:max-w-2xl max-w-[350px] mx-auto mb-10"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3B3B3B] px-[20px] py-[6px] rounded-2xl text-[#fffff] text-base flex gap-3"
              >
                <Image src={Avatar} alt="Avatar Img" />
                <h2 className="text-white font-sans font-light">Shroomie</h2>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <h2 className="text-[16px] lg:text-[51px] text-white font-bold font-sans tracking-wider">
                Magic Mushroomss
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex justify-left text-[#2B2B2B] font-sans"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white w-fit rounded-xl px-10 py-3"
              >
                <button className="flex items-center justify-center gap-3">
                  <Image src={EyeIcon} alt="Eye Icon" />
                  <h4>See NFT</h4>
                </button>
              </motion.div>
            </motion.div>
            <div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTHighlight;
