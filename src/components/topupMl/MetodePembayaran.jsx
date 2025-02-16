"use client";
import React, { useState } from "react";
import HeaderStepTopup from "../elements/HeaderStepTopup";
import Image from "next/image";
import pmbayaranQris from "@/assets/images/pembayaran/qris.webp";
import { IoIosArrowDown } from "react-icons/io";

const MetodePembayaran = () => {
  const [isAccordion, setIsAccordion] = useState(false);
  
  const hanlderAccordionToggle = ()=> {
    console.log(isAccordion)
    setIsAccordion((value)=> !value)
  }
  

  return (
    <div className="bg-[#2c2f31] p-4 w-full rounded-lg mt-4">
      <HeaderStepTopup stepNumber={"3."} title={"Pilih Metode Pembayaran"} />
      <div className="rounded-lg overflow-hidden mt-4">
        <div className="bg-[#44494c] px-2 pt-2">
          <p className="text-white text-base font-medium">QRIS</p>
        </div>
        <div
          className={`bg-[#44494c] ${
            isAccordion ? "max-h-[500px]" : "max-h-0"
          } py-1 px-2 transition-all duration-500 overflow-hidden `}
        >
          <div
            className={`bg-white p-2 flex-col  space-y-2 w-fit rounded-lg my-2`}
          >
            <Image
              src={pmbayaranQris}
              width={1000}
              height={1000}
              alt="pemabayaran-qris"
              className="w-[200px]"
            />
            <p className="text-slate-400 ">Rp.186.000,-</p>
            <hr />
            <p className="text-sm font-medium">QRIS Untuk Semua Pembayaran</p>
          </div>
        </div>
        <div
          className="bg-[#ffffff] flex justify-end items-center pe-2 cursor-pointer"
          onClick={hanlderAccordionToggle}
        >
          <Image
            src={pmbayaranQris}
            width={1000}
            height={1000}
            alt="pemabayaran-qris"
            className="w-[200px] me-4"
          />
          <IoIosArrowDown
            className={`text-2xl ${
              isAccordion ? "rotate-180" : "rotate-0"
            } transition duration-500`}
          />
        </div>
      </div>
    </div>
  );
};

export default MetodePembayaran;
