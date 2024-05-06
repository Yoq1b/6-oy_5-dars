import React from "react";
import Button from "./Button";
import Longbutton from "./Longbutton";

const Hero = () => {
  return (
    <>
      <div>
        <div className="w-[1310px] m-auto flex justify-between mb-[280px]">
          <div className="relative">
            <h1 className="w-[410px] text-[64px]  font-serif font-semibold mb-[74px]">
              Explore and Travel
            </h1>
            <p className="text-[22px] font-semibold mb-[24px]">
              Holiday finder
            </p>
            <hr className="w-[32px] h-[2px] mb-[48px] bg-black rounded-black" />
            <div className="w-[470px] flex flex-wrap justify-between mb-[50px]">
              <div className="w-[220px] h-[52px] flex items-center justify-between border border-gray-400 rounded-[6px] px-[30px]">
                <p className="text-[15px] font-normal text-[#4A4C53]">
                  Location
                </p>
                <img src="../../public/Frame.png" alt="rasm" />
              </div>
              <div className="w-[220px] h-[52px] flex items-center justify-between border border-gray-400 rounded-[6px] px-[30px]">
                <p className="text-[15px] font-normal text-[#4A4C53]">
                  Activity
                </p>
                <img src="../../public/Frame.png" alt="rasm" />
              </div>
              <div className="w-[220px] h-[52px] mt-[35px] flex items-center justify-between border border-gray-400 rounded-[6px] px-[30px]">
                <p className="text-[15px] font-normal text-[#4A4C53]">Grade</p>
                <img src="../../public/Frame.png" alt="rasm" />
              </div>
              <div className="w-[220px] h-[52px] flex mt-[35px] items-center justify-between border border-gray-400 rounded-[6px] px-[30px]">
                <p className="text-[15px] font-normal text-[#4A4C53]">Date</p>
                <img src="../../public/Frame.png" alt="rasm" />
              </div>
            </div>
            <Longbutton text="Explore" />
            <img
              src="../../public/element2.png"
              alt="img"
              className="absolute bottom-[290px] left-[-80px]"
            />
          </div>
          <div className="relative">
            <img
              src="../../public/thousand-011.png"
              alt="big_image"
              className="w-[687px] h-[657px]"
            />
            <img
              src="../../public/element.png"
              alt="img"
              className="absolute top-[30px] left-[-100px]"
            />
            <img
              src="../../public/element2.png"
              alt="img"
              className="absolute bottom-[20px] left-[-80px]"
            />
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="w-[1310px] m-auto flex items-center justify-between mb-[280px]">
          <div className="relative">
            <img
              src="../../public/Thousand-021.png"
              alt="big_image"
              className="w-[659px] h-[534px]"
            />
            <img
              src="../../public/element.png"
              alt="img"
              className="absolute top-[-10px] right-[-60px]"
            />
          </div>
          <div className="relative">
            <h1 className="w-[470px]  text-[36px]  font-serif font-semibold mb-[20px]">
              A new way to explore the world
            </h1>
            <p className="w-[400px] text-[17px] font-light mb-[33px] text-[#7D7987]">
              For decades travellers have reached for Lonely Planet books when
              looking to plan and execute their perfect trip, but now, they can
              also let Lonely Planet Experiences lead the way
            </p>
            <Longbutton text="Learn more" />
            <img
              src="../../public/element2.png"
              alt="img"
              className="absolute bottom-[30px] right-[150px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
