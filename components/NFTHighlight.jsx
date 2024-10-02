import React from "react";
import LargBg from "@/public/LargBg.svg";
import MidBg from "@/public/MidBg.svg";
import SmallBg from "@/public/SmallBg.svg";
import Image from "next/image";

const NFTHighlight = () => {
  return (
    <section>
      <Image
        src={LargBg}
        alt="Bg Mushrooms"
        className="w-full lg:block md:hidden hidden"
      />
      <Image src={MidBg} alt="Bg Mushrooms" />
      <Image src={SmallBg} alt="Bg Mushrooms" />
    </section>
  );
};

export default NFTHighlight;
