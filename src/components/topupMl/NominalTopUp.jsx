import React from 'react'
import HeaderStepTopup from '../elements/HeaderStepTopup';
import { topupMobilelegends } from "@/utils/topup-ml";
import imgDiamond from "@/assets/images/diamond_.png";
import Image from 'next/image';

const NominalTopUp = () => {
  return (
    <div className="bg-[#2c2f31] p-4 w-full rounded-lg mt-4">
      <HeaderStepTopup stepNumber={"2."} title={"Pilih Nominal Top Up"} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {topupMobilelegends.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full bg-[#44494c] rounded-lg p-2 text-white cursor-pointer hover:ring-2"
          >
            <div>
              <h1 className="font-medium">{item.jumlah}</h1>
              <p>{item.Harga}</p>
            </div>
            <div className="w-[30px]">
              <Image
                src={imgDiamond}
                width={1000}
                height={1000}
                alt="img-diamond"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NominalTopUp