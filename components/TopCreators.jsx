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
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B] flex justify-center">
      <div className="md:mx-[20px] mx-[30px]">
        <div className="flex justify-between">
          <div className="text-white">
            <h2 className="lg:text-[38px] text-[28px] md:text-[28px] font-semibold">
              Top creators
            </h2>
            <h2 className="text-[16px] lg:text-[22px] text-gray-200 max-w-[350px] md:max-w-[400px] lg:max-w-full font-sans tracking-wider mt-2">
              Checkout Top Rated Creators on the NFT Marketplace
            </h2>
          </div>

          <div className=" items-center text-white hidden md:flex">
            <button className="flex items-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[50px] py-[14px] w-[250px]">
              <Image src={PurpleRocket} alt="purple rocket" />
              <p className="font-semibold">View Rankings</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-white font-sans justify-center items-center mx-0">
          <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-5 lg:block flex rounded-2xl relative lg:py-6 py-4">
            <div className=" lg:px-14 md:px-4 px-0">
              <Image
                src={RankingOne}
                alt="Ranking One"
                className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
              />
              <Image
                src={AvatarOne}
                alt="Avatar One"
                className="lg:w-[110px] w-[60px]"
              />
            </div>
            <div className=" md:ml-0 ml-6">
              <div className="flex lg:justify-center justify-normal lg:mt-6 mt-0">
                <p className="text-[22px] font-sans">Keepitreal</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-base text-[#858584]">Total Sales:</p>
                <p className="font-normal lg:ml-0 md:ml-4 ml-8">
                  <Image src={TopCreatoursNumber} alt="Top Creatours Number" />
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4">
            <div className=" lg:px-14 md:px-4 px-0">
              <Image
                src={RankingTwo}
                alt="Ranking Two"
                className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
              />
              <Image
                src={AvatarTwo}
                alt="Avatar Two"
                className="lg:w-[110px] w-[60px]"
              />
            </div>
            <div className=" md:ml-0 ml-6">
              <div className="flex justify-normal lg:justify-center  lg:mt-6 mt-0">
                <p className="text-[22px] font-sans">DigiLab</p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-base text-[#858584]">Total Sales:</p>
                <p className="font-normal lg:ml-0 md:ml-4 ml-8">
                  <Image src={TopCreatoursNumber} alt="Top Creatours Number" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingThree}
                  alt="Ranking Three"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarThree}
                  alt="Avatar Three"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div className=" md:ml-0 ml-6">
                <div className="flex justify-normal lg:justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">GravityOne</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingFour}
                  alt="Ranking Four"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarFour}
                  alt="Avatar Four"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div className=" md:ml-0 ml-6">
                <div className="flex justify-normal lg:justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">Juanie</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingFive}
                  alt="Ranking Five"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarFive}
                  alt="Avatar Five"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div className=" md:ml-0 ml-6">
                <div className="flex justify-normal lg:justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">BlueWhale</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block rounded-2xl relative lg:py-6 py-4 md:flex hidden">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingSix}
                  alt="Ranking Six"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarSix}
                  alt="Avatar Six"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div className=" md:ml-0 ml-6">
                <div className="flex justify-normal lg:justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">Mr fox</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingSeven}
                  alt="Ranking Five"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarSeven}
                  alt="Avatar Seven"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">Shroomie</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingEight}
                  alt="Ranking Eight"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarEight}
                  alt="Avatar Eight"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">robotica</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingNine}
                  alt="Ranking Nine"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarNine}
                  alt="Avatar Nine"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">RustyRobot</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingTen}
                  alt="Ranking Ten"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarTen}
                  alt="Avatar Ten"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">animakid</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingEleven}
                  alt="Ranking Eleven"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarEleven}
                  alt="Avatar Eleven"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">Dotgu</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
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
            <div className="bg-[#3B3B3B] lg:px-[10px] px-4 md:px-4 lg:block flex rounded-2xl relative lg:py-6 py-4 ">
              <div className=" lg:px-14 md:px-4 px-0">
                <Image
                  src={RankingTwelve}
                  alt="Ranking Twelve"
                  className="lg:top-4 lg:left-4 md:top-3 md:left-6 top-3 left-4 absolute"
                />
                <Image
                  src={AvatarTwelve}
                  alt="Avatar Twelve"
                  className="lg:w-[110px] w-[60px]"
                />
              </div>
              <div>
                <div className="flex justify-center lg:mt-6 mt-0">
                  <p className="text-[22px] font-sans">Ghiblier</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <p className="text-base text-[#858584]">Total Sales:</p>
                  <p className="font-normal lg:ml-0 md:ml-4 ml-8">
                    <Image
                      src={TopCreatoursNumber}
                      alt="Top Creatours Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-x-2 border-2 border-[#A259FF] rounded-2xl px-[40px] py-[20px] max-w-[500px] md:hidden lg:hidden">
            <Image src={PurpleRocket} alt="purple rocket" />
            <p className="font-semibold">View Rankings</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
