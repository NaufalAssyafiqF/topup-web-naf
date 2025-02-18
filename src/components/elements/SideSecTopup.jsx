import React from 'react'
import { PiHeadset } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbShieldDollar } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import Image from 'next/image';

const SideSecTopup = ({imageGame, title, text}) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-[30%] text-white p-4 bg-[#2c2f31] rounded-lg">
      <div className="flex items-center space-x-4">
        <Image
          src={imageGame}
          width={1000}
          height={1000}
          alt="img-game"
          className="w-[20%] md:w-[20%] lg:w-[30%] aspect-[4/6] rounded-lg"
        />
        <p className="w-[70%] md:text-2xl  lg:text-lg  font-medium">Mobile Legends</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 my-4 space-y-1">
        <div className="flex items-center space-x-2">
          <GoShieldCheck />
          <p className="text-xs md:text-sm">Jaminan Layanan</p>
        </div>
        <div className="flex items-center space-x-2">
          <PiHeadset />
          <p className="text-xs md:text-sm">Layanan Pelanggan</p>
        </div>
        <div className="flex items-center space-x-2">
          <TbShieldDollar />
          <p className="text-xs md:text-sm">Pembayaran Aman</p>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineThunderbolt />
          <p className="text-xs md:text-sm">Pengiriman Instant</p>
        </div>
      </div>
      <hr />
      <p className="mt-4 text-xs md:text-sm lg:text-base">
        Top up Diamond ML hanya dalam hitungan detik! Cukup masukan User ID &
        Server MLBB Anda, Pilih jumlah Diamond yang Anda inginkan, Selesaikan
        pembayaran Dan Diamond akan langsung masuk ke akun Mobile Legends Anda.
        Khusus Server Original, Tidak Bisa Isi Advance Server!
      </p>
    </div>
  );
}

export default SideSecTopup