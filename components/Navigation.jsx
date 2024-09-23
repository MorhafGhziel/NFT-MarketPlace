import React from "react";
import NavLogo from "@/public/NavLogo.svg";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/public/User.svg";

const Navigation = () => {
  return (
    <header>
      <div className="px-[50px] py-[20px] bg-[#2B2B2B]">
        <div className="flex justify-between">
          <Image src={NavLogo} alt="Nav Logo" />
          <div className="text-white font-sans font-semibold text-base flex items-center">
            <Link href="/" className="px-[20px]">
              Marketplace
            </Link>
            <Link href="/" className="px-[20px]">
              Rankings
            </Link>
            <Link href="/" className="px-[20px]">
              Connect a wallet
            </Link>
            <Link href="/" className="px-[20px]">
              <div className="flex gap-4 bg-[#A259FF] px-[30px] py-[20px] rounded-3xl">
                <Image src={UserIcon} alt="User Icon" />
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
