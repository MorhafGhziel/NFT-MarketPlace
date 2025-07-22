"use client";

import React from "react";
import Image from "next/image";
import Prim1 from "@/public/Primary1.svg";
import Prim2 from "@/public/Primary2.svg";
import Prim3 from "@/public/Primary3.svg";
import sec1 from "@/public/Sec1.svg";
import sec11 from "@/public/Sec11.svg";
import sec2 from "@/public/Sec2.svg";
import sec22 from "@/public/Sec22.svg";
import sec3 from "@/public/Sec3.svg";
import sec33 from "@/public/Sec33.svg";
import Number from "@/public/Number.svg";
import Profile1 from "@/public/Profile1.svg";
import Profile2 from "@/public/Profile2.svg";
import Profile3 from "@/public/Profile3.svg";
import { motion } from "framer-motion";

const TrendingCollection = () => {
  const collections = [
    {
      images: [Prim1, sec1, sec11],
      title: "DSGN Animals",
      creator: "MrFox",
      profileImage: Profile1,
    },
    {
      images: [Prim2, sec2, sec22],
      title: "Magic Mushrooms",
      creator: "Shroomie",
      profileImage: Profile2,
    },
    {
      images: [Prim3, sec3, sec33],
      title: "Disco Machines",
      creator: "BeKind2Robots",
      profileImage: Profile3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B] flex justify-center">
      <div className="mx-[30px]">
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
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 text-white font-sans"
          >
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src={collection.images[0]}
                    alt={`Primary ${index + 1}`}
                  />
                </motion.div>
                <div className="flex gap-4 mt-4">
                  {collection.images.slice(1).map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image src={img} alt={`Secondary ${i + 1}`} />
                    </motion.div>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image src={Number} alt="Number" />
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 text-[22px]"
                >
                  {collection.title}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-x-3 mt-2"
                >
                  <Image
                    src={collection.profileImage}
                    alt={`Profile ${index + 1}`}
                  />
                  <p className="text-gray-200 text-base">
                    {collection.creator}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
