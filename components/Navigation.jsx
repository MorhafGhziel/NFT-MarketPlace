"use client";

import React from "react";
import NavLogo from "@/public/NavLogo.svg";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/public/User.svg";
import ListIcon from "@/public/List.svg";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:px-[50px] md:py-[20px] px-[30px] py-[15px]">
        <div className="flex justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image src={NavLogo} alt="Nav Logo" />
          </motion.div>
          <div className="text-white font-sans font-semibold text-base flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="px-[20px] hidden md:hidden lg:block hover:text-[#A259FF] transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/"
                className="px-[20px] hidden md:hidden lg:block hover:text-[#A259FF] transition-colors"
              >
                Rankings
              </Link>
              <Link
                href="/"
                className="px-[20px] hidden md:hidden lg:block hover:text-[#A259FF] transition-colors"
              >
                Connect a wallet
              </Link>
              <Link href="/" className="px-[20px] hidden md:hidden lg:block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="lg:flex gap-4 bg-[#A259FF] px-[30px] py-[20px] md:hidden hidden rounded-3xl"
                >
                  <Image src={UserIcon} alt="User Icon" />
                  Sign Up
                </motion.div>
              </Link>
              <Link href="/" className="lg:hidden md:block block">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image src={ListIcon} alt="ListIcon" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
