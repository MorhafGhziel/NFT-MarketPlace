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

  return (
    <section className="py-[90px] bg-[#2B2B2B] flex justify-center">
      <div className="mx-[30px]">
        <div className="text-white">
          <h2 className="text-[38px] font-semibold">Trending Collection</h2>
          <h2 className="text-[22px] text-gray-200 font-sans tracking-wider mt-2">
            Checkout our weekly updated trending collection.
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-14 text-white font-sans">
            <div>
              <Image src={Prim1} alt="Prim One" />
              <div className="flex gap-4 mt-4">
                <Image src={sec1} alt="Sec One" />
                <Image src={sec11} alt="Sec Two" />
                <Image src={Number} alt="Number" />
              </div>
              <p className="mt-3 text-[22px]">DSGN Animals</p>
              <div className="flex gap-x-3 mt-2">
                <Image src={Profile1} alt="Profile One" />
                <p className="text-gray-200 text-base">MrFox</p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={Prim2} alt="Prim One" />
              <div className="flex gap-4 mt-4">
                <Image src={sec2} alt="Sec One" />
                <Image src={sec22} alt="Sec Two" />
                <Image src={Number} alt="Number" />
              </div>
              <p className="mt-3 text-[22px]">Magic Mushrooms</p>
              <div className="flex gap-x-3">
                <Image src={Profile2} alt="Profile One" />
                <p className="text-gray-200 text-base">Shroomie</p>
              </div>
            </div>
            <div className="lg:block hidden md:hidden">
              <Image src={Prim3} alt="Prim One" />
              <div className="flex gap-4 mt-4">
                <Image src={sec3} alt="Sec One" />
                <Image src={sec33} alt="Sec Two" />
                <Image src={Number} alt="Number" />
              </div>
              <p className="mt-3 text-[22px]">Disco Machines</p>
              <div className="flex gap-x-3">
                <Image src={Profile3} alt="Profile One" />
                <p className="text-gray-200 text-base">BeKind2Robots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
