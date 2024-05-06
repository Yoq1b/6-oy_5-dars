import React from "react";
import logo from "../../public/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-[1310px] m-auto  ">
        <div className="flex items-start justify-between">
          <div>
            <img src={logo} alt="" className="w-[44px] h-[44px] mb-[26px]" />
            <p className="text-[18px] text-[#848484] mb-[65px]">
              Plan and book your perfect trip with <br /> expert advice, travel
              tips destination <br /> information from us
            </p>
            <p className="text-[17px] text-[#848484]">
              ©2020 Thousand Sunny. All rights reserved
            </p>
          </div>
          <div className="flex items-start gap-[150px] ">
            <div className="flex items-start justify-center">
              <ul>
                <li className="text-[19px] font-bold mb-[8px] hover:cursor-pointer">
                  Destinations
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Africa
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Antarctica
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Asia
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Europe
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  America
                </li>
              </ul>
            </div>
            <div className="flex items-start justify-center">
              <ul>
                <li className="text-[19px] font-bold mb-[8px] hover:cursor-pointer">
                  Shop
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Destination Guides
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Pictorial & Gifts
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Special Offers
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Delivery Times
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  FAQs
                </li>
              </ul>
            </div>
            <div className="flex items-start justify-center">
              <ul>
                <li className="text-[19px] font-bold mb-[8px] hover:cursor-pointer">
                  Interests
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Adventure Travel
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Art And Culture
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Wildlife And Nature
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Family Holidays
                </li>
                <li className="text-[19px] text-[#848484] mb-[8px] hover:cursor-pointer">
                  Food And Drink
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-[1220px] m-auto mt-[77px] mb-[30px] text-[#C4C4C4]" />
        <div className="w-[250px] m-auto mb-[32px] flex items-center gap-[25px] ">
          <FaTwitter className="w-[25px]"/>
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </>
  );
};

export default Footer;
