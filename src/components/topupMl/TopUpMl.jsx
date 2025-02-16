import React from "react";
import imageGame from "@/assets/images/ml.webp";

import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";

import SideSecTopup from "../elements/SideSecTopup";
import UserId from "./UserId";
import HeaderStepTopup from "../elements/HeaderStepTopup";
import NominalTopUp from "./NominalTopUp";
import MetodePembayaran from "./MetodePembayaran";
import NomorWhatsapp from "./NomorWhatsapp";

const TopUpMl = () => {
  return (
    <div className="w-full pt-10 px-10 pb-20 flex space-x-5">
      <SideSecTopup imageGame={imageGame} />
      {/* Proses Transaksi */}
      <div className="w-[70%]">
        <form action="">
          {/* Tahap 1 Transaksi */}
          <UserId />
          {/* tahap 2 Transaksi */}
          <NominalTopUp />
          {/* tahap 3 Transaksi */}
          <MetodePembayaran />
          {/* tahap 4 Transaksi */}
          <NomorWhatsapp />
        </form>
      </div>
    </div>
  );
};

export default TopUpMl;
