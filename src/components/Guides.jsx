import React from "react";
import Longbutton from "./Longbutton";

const Guides = () => {
  return (
    <>
      <div className="w-[1280px] m-auto flex items-center justify-between mb-[250px]">
        <div className="relative">
          <h1 className="w-[470px]  text-[36px]  font-serif font-semibold mb-[20px]">
            Guides by Thousand Sunny
          </h1>
          <p className="w-[400px] text-[17px] font-light mb-[33px] text-[#7D7987] leading-[30px]">
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </p>
          <Longbutton text="Download " />
          <img
            src="../../public/element2.png"
            alt="img"
            className="absolute top-[-60px] left-[50px]"
          />
        </div>
        <div className="relative">
          <img
            src="../../public/Thousand03.png"
            alt="big_image"
            className="w-[700px] h-[592px]"
          />
          <img
            src="../../public/element.png"
            alt="img"
            className="absolute bottom-[120px] left-[-200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Guides;
