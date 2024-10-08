import React from "react";
import EyeIcon from "@/public/Eye.svg";
import Image from "next/image";
import Avatar from "@/public/Avatar.svg";

const NFTHighlight = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Large Background */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/LargBg.svg')` }}
      ></div>

      {/* Medium Background */}
      <div
        className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/MidBg.svg')` }}
      ></div>

      {/* Small Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/SmallBg.svg')` }}
      ></div>

      {/* Add your content here */}
      <div className="relative z-10 flex items-end justify-center h-full">
        <div className="lg:max-w-6xl md:max-w-2xl max-w-[350px] mx-auto mb-10">
          <div className="flex flex-col gap-4">
            <div>
              <button className="bg-[#3B3B3B] px-[20px] py-[6px] rounded-2xl text-[#fffff] text-base flex gap-3">
                <Image src={Avatar} alt="Avatar Img" />
                <h2 className="text-white font-sans font-light">Shroomie</h2>
              </button>
            </div>

            <div>
              <h2 className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider">
                Magic Mushrooms
              </h2>
            </div>

            <div className="flex justify-center text-[#2B2B2B] font-sans">
              <div className="bg-white w-fit rounded-xl px-10 py-3">
                <button className="flex items- justify-center gap-3">
                  <Image src={EyeIcon} alt="Eye Icon" />
                  <h4>See NFT</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
