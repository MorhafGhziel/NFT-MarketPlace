import React from "react";
import NavLogo from "@/public/NavLogo.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <header>
      <div className="px-[50px] py-[20px] bg-[#2B2B2B]">
        <div>
          <Image src={NavLogo} alt="Nav Logo" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
