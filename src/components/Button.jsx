
import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#FB8F1D] hover:bg-[#e49c4f] text-white font-medium  rounded-[8px] w-[130px] h-[44px] border-[#FB8F1D]">
      {text}
    </button>
  );
};

export default Button;
