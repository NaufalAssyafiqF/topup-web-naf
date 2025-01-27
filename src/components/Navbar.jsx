import React from "react";
import { IoMenu } from "react-icons/io5";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiKnockedOutStars } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-[#2c2f31] h-[65px] drop-shadow-[0_5px_35px_rgba(255,255,255,0.5)]">
      <div className="h-full max-w-[1200px] mx-auto">
        <div className="mx-10 flex items-center h-full">
          <IoMenu className="text-white text-3xl mr-10 cursor-pointer" />
          <div className="font-bold flex items-center space-x-2">
            <h1 className="text-white text-2xl">HBACK</h1>
            <h1 className="text-white text-2xl">STORE</h1>
            <GiKnockedOutStars className="text-orange-500 text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
