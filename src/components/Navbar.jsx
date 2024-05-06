import React from "react";
import Logo from "../../public/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-[1180px] m-auto flex items-center justify-between mb-[110px] mt-[40px]">
        <img src={Logo} alt="logo" className="w-[41-px] h-[41px]" />
        <div className="flex items-center gap-[34px]">
          <ul className="flex items-center gap-[24px]">
            <li className=" text-[16px] font-medium hover:text-black hover:cursor-pointer">
              Home
            </li>
            <li className="text-[#B8BECD] text-[16px] font-medium hover:text-black  hover:cursor-pointer">
              Destinations
            </li>
            <li className="text-[#B8BECD] text-[16px] font-medium hover:text-black  hover:cursor-pointer">
              About
            </li>
            <li className="text-[#B8BECD] text-[16px] font-medium hover:text-black  hover:cursor-pointer">
              Partner
            </li>
          </ul>
          <div className="flex items-center gap-[18px]">
            <button className="bg-white  text-[#FB8F1D] font-medium  rounded-[8px] w-[130px] h-[44px] border border-[#FB8F1D]">
              Login
            </button>
            <Button text="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
