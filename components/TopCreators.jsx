"use client";

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
import AvatarFive from "@/public/AvatarFive.svg";
import AvatarSix from "@/public/AvatarSix.svg";
import AvatarSeven from "@/public/AvatarSeven.svg";
import AvatarEight from "@/public/AvatarEight.svg";
import RankingFive from "@/public/RankingFive.svg";
import RankingSix from "@/public/RankingSix.svg";
import RankingSeven from "@/public/RankingSeven.svg";
import RankingEight from "@/public/RankingEight.svg";
import AvatarNine from "@/public/AvatarNine.svg";
import AvatarTen from "@/public/AvatarTen.svg";
import AvatarEleven from "@/public/AvatarEleven.svg";
import AvatarTwelve from "@/public/AvatarTwelve.svg";
import RankingNine from "@/public/RankingNine.svg";
import RankingTen from "@/public/RankingTen.svg";
import RankingEleven from "@/public/RankingEleven.svg";
import RankingTwelve from "@/public/RankingTwelve.svg";
import TopCreatoursNumber from "@/public/TopCreatoursNumber.svg";
import { motion } from "framer-motion";

const TopCreators = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const CreatorCard = ({ ranking, avatar, name, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4"
    >
      <div className="lg:px-14 md:px-4 px-0">
        <Image
          src={ranking}
          alt={`Ranking ${index}`}
          className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
        />
        <Image
          src={avatar}
          alt={`Avatar ${index}`}
          className="lg:w-[110px] w-[60px]"
        />
      </div>
      <div className="md:ml-0 ml-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex lg:justify-center justify-normal lg:mt-6 mt-0"
        >
          <p className="text-[22px] font-sans">{name}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-2 mt-1"
        >
          <p className="text-base text-[#858584]">Total Sales:</p>
          <p className="font-normal lg:ml-0 md:ml-4 ml-6">
            <Image src={TopCreatoursNumber} alt="Top Creators Number" />
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  const creators = [
    { ranking: RankingOne, avatar: AvatarOne, name: "Keepitreal" },
    { ranking: RankingTwo, avatar: AvatarTwo, name: "DigiLab" },
    { ranking: RankingThree, avatar: AvatarThree, name: "GravityOne" },
    { ranking: RankingFour, avatar: AvatarFour, name: "Juanie" },
    { ranking: RankingFive, avatar: AvatarFive, name: "BlueWhale" },
    { ranking: RankingSix, avatar: AvatarSix, name: "Mr fox" },
    { ranking: RankingSeven, avatar: AvatarSeven, name: "Shroomie" },
    { ranking: RankingEight, avatar: AvatarEight, name: "robotica" },
    { ranking: RankingNine, avatar: AvatarNine, name: "RustyRobot" },
    { ranking: RankingTen, avatar: AvatarTen, name: "animakid" },
    { ranking: RankingEleven, avatar: AvatarEleven, name: "Dotgu" },
    { ranking: RankingTwelve, avatar: AvatarTwelve, name: "Ghiblier" },
  ];

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B] flex justify-center">
      <div className="md:mx-[20px] mx-[30px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between"
        >
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold"
            >
              Top creators
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[16px] lg:text-[22px] text-gray-200 max-w-[350px] md:max-w-[400px] lg:max-w-full font-sans tracking-wider mt-2"
            >
              Checkout Top Rated Creators on the NFT Marketplace
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="items-center text-white hidden md:flex"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[50px] py-[14px] w-[250px]"
            >
              <Image src={PurpleRocket} alt="purple rocket" />
              <p className="font-semibold">View Rankings</p>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-white font-sans justify-center items-center mx-0"
        >
          {creators.map((creator, index) => (
            <React.Fragment key={index}>
              {(index < 5 ||
                (index === 5 && window.innerWidth >= 768) ||
                window.innerWidth >= 1024) && (
                <CreatorCard {...creator} index={index + 1} />
              )}
            </React.Fragment>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[40px] py-[20px] max-w-[500px] md:hidden lg:hidden"
          >
            <Image src={PurpleRocket} alt="purple rocket" />
            <p className="font-semibold">View Rankings</p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCreators;
