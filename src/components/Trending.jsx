import React from "react";

const Trending = () => {
  return (
    <>
      <div className="w-[1250px] m-auto ml-[150px]  mb-[240px] ">
        <div className="flex items-center justify-between mb-[60px] relative">
          <p className="text-[36px] font-serif font-semibold">
            Trending stories
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
          <div className="w-[266px] h-[446px] ">
            <img
              src="../../public/womannn.png"
              alt="rasm"
              className="w-[100%] h-[350px] "
            />
            <p className=" text-[19px] font-bold absolute bottom-[130px]">
              The many benefits of <br />
              taking a healing holiday
            </p>
            <p className="text-[15px] font-medium text-[#7D7987] absolute bottom-[47px]">
              ‘Helaing holidays’ are on the rise <br />
              tohelp maximise your health and <br />
              happines...
            </p>
            <p className="text-[15px] text-[#FB8F1D] font-semibold hover:cursor-pointer absolute bottom-0">
              Read more
            </p>
          </div>
          <div className="w-[266px] h-[446px] ">
            <img
              src="../../public/image13.png"
              alt="rasm"
              className="w-[100%] h-[250px]  rounded-tl-[10px]  rounded-tr-[10px]"
            />
            <p className=" text-[19px] font-bold absolute bottom-[130px]">
              The best Kyoto restaurant <br /> to try Japanese food
            </p>
            <p className="text-[15px] font-medium text-[#7D7987] absolute bottom-[47px]">
              From tofu to teahouses, here’s our <br /> guide to Kyoto’s best
              restaurants <br /> to visit...
            </p>
            <p className="text-[15px] text-[#FB8F1D] font-semibold hover:cursor-pointer absolute bottom-0">
              Read more
            </p>
          </div>
          <div className="w-[266px] h-[446px] ">
            <img
              src="../../public/misr.png"
              alt="rasm"
              className="w-[100%] h-[350px] "
            />
            <p className=" text-[19px] font-bold absolute bottom-[130px]">
              Skip Chichen Itza and head <br /> to this remote Yucatan
            </p>
            <p className="text-[15px] font-medium text-[#7D7987] absolute bottom-[47px]">
              It’s remote and challenging to get, <br /> but braving the jungle
              and exploring <br /> these ruins without the...
            </p>
            <p className="text-[15px] text-[#FB8F1D] font-semibold hover:cursor-pointer absolute bottom-0">
              Read more
            </p>
          </div>
          <div className="w-[266px] h-[446px] ">
            <img
              src="../../public/swim.png"
              alt="rasm"
              className="w-[100%] h-[244px] rounded-tl-[10px]  rounded-tr-[10px]"
            />
            <p className=" text-[19px] font-bold absolute bottom-[130px]">
              Surf’s up at these beginner <br /> spots around the world
            </p>
            <p className="text-[15px] font-medium text-[#7D7987] absolute bottom-[47px]">
              If learning to surf has in on your to- <br /> do list for a while,
              the good news <br /> is: it’s never too late...
            </p>
            <p className="text-[15px] text-[#FB8F1D] font-semibold hover:cursor-pointer absolute bottom-0">
              Read more
            </p>
          </div>

          <img
            src="../../public/element2.png"
            alt="img"
            className="absolute bottom-[40px] w-[20px] h-5 left-[-100px]"
          />
        </div>
      </div>
    </>
  );
};

export default Trending;
