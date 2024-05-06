import React from "react";

const Feature = () => {
  return (
    <>
      <div className="w-[1310px] m-auto  mb-[240px]">
        <div className="flex items-center justify-between mb-[60px] relative">
          <p className="text-[36px] font-serif font-semibold">
            Featured destinations
          </p>
          <img
            src="../../public/viewall.png"
            alt="img"
            className="hover:cursor-pointer"
          />
          <img
            src="../../public/element2.png"
            alt="img"
            className="absolute top-[-30px] right-[250px]"
          />
        </div>
        <div className="flex items-center justify-between relative">
          <div className="w-[291px] h-[367px]  relative">
            <img
              src="../../public/MaskGroup.png"
              alt="rasm"
              className="w-[100%] h-[100%]"
            />
            <div className="absolute bottom-0 left-0">
              <p className="text-[17px] font-semibold">Raja Ampat </p>
              <p className="text-[15px] font-medium text-[#80918E]">
                Indonesia
              </p>
            </div>
          </div>
          <div className="w-[291px] h-[367px]  relative">
            <img
              src="../../public/Fanjingshan.png"
              alt="rasm"
              className="w-[100%] h-[100%]"
            />
            <div className="absolute bottom-0 left-0">
              <p className="text-[17px] font-semibold">Fanjingshan </p>
              <p className="text-[15px] font-medium text-[#80918E]">China</p>
            </div>
          </div>
          <div className="w-[291px] h-[367px]  relative">
            <img
              src="../../public/Vevey.png"
              alt="rasm"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[291px] h-[367px]  relative">
            <img
              src="../../public/Skadar.png"
              alt="rasm"
              className="w-[100%] h-[100%]"
            />
            <div className="absolute bottom-0 left-0"></div>
          </div>
          <img
            src="../../public/element2.png"
            alt="img"
            className="absolute bottom-[-50px] w-[20px] h-5 left-[560px]"
          />
        </div>
      </div>
    </>
  );
};

export default Feature;
