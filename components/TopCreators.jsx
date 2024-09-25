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

const TopCreators = () => {
  return (
    <section className="py-[90px] bg-[#2B2B2B] flex justify-center">
      <div className="mx-[30px] m-auto">
        <div className="flex gap-[180px]">
          <div className="text-white md:max-w-[400px] lg:max-w-full">
            <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
              Top creators
            </h2>
            <h2 className="text-[16px] lg:text-[22px] text-gray-200 font-sans tracking-wider mt-2">
              Checkout Top Rated Creators on the NFT Marketplace
            </h2>
          </div>

          <div className=" items-center text-white hidden md:flex">
            <button className="flex items-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[50px] py-[14px]">
              <Image src={PurpleRocket} alt="purple rocket" />
              <p className="font-semibold">View Rankings</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mt-14 text-white font-sans">
          <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4">
            <div className=" lg:px-14 px-4">
              <Image
                src={RankingOne}
                alt="Ranking One"
                className="top-4 left-4 absolute"
              />
              <Image src={AvatarOne} alt="Avatar One" />
            </div>
            <div>
              <div className="flex lg:justify-center justify-normal mt-6">
                <p className="text-[22px] font-sans">Keepitreal</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-base text-[#858584]">Total Sales:</p>
                <p className="font-normal">
                  <Image src={TopCreatoursNumber} alt="Top Creatours Number" />
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4">
            <div className=" lg:px-14 px-4">
              <Image
                src={RankingTwo}
                alt="Ranking Two"
                className="top-4 left-4 absolute"
              />
              <Image src={AvatarTwo} alt="Avatar Two" />
            </div>
            <div>
              <div className="flex justify-center mt-6">
                <p className="text-[22px] font-sans">DigiLab</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-base text-[#858584]">Total Sales:</p>
                <p className="font-normal">
                  <Image src={TopCreatoursNumber} alt="Top Creatours Number" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingThree}
                  alt="Ranking Three"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarThree} alt="Avatar Three" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">GravityOne</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingFour}
                  alt="Ranking Four"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarFour} alt="Avatar Four" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">Juanie</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingFive}
                  alt="Ranking Five"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarFive} alt="Avatar Five" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">BlueWhale</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#3B3B3B] px-10 lg:block rounded-2xl w-fit relative lg:py-6 py-4 md:flex hidden">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingSix}
                  alt="Ranking Six"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarSix} alt="Avatar Six" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">Mr fox</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingSeven}
                  alt="Ranking Five"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarSeven} alt="Avatar Seven" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">Shroomie</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingEight}
                  alt="Ranking Eight"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarEight} alt="Avatar Eight" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">robotica</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingNine}
                  alt="Ranking Nine"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarNine} alt="Avatar Nine" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">RustyRobot</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingTen}
                  alt="Ranking Ten"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarTen} alt="Avatar Ten" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">animakid</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingEleven}
                  alt="Ranking Eleven"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarEleven} alt="Avatar Eleven" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">Dotgu</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-[#3B3B3B] px-10 lg:block flex rounded-2xl w-fit relative lg:py-6 py-4 ">
              <div className=" lg:px-14 px-4">
                <Image
                  src={RankingTwelve}
                  alt="Ranking Twelve"
                  className="top-4 left-4 absolute"
                />
                <Image src={AvatarTwelve} alt="Avatar Twelve" />
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  <p className="text-[22px] font-sans">Ghiblier</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[40px] py-[20px] max-w-[415px] md:hidden lg:hidden">
            <Image src={PurpleRocket} alt="purple rocket" />
            <p className="font-semibold">View Rankings</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
