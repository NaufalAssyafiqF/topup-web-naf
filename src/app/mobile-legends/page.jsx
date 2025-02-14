import Image from "next/image";
import React from "react";
import bannerGame from "@/assets/images/hero1.webp";
import imageGame from "@/assets/images/ml.webp";
import { topupMobilelegends } from "@/utils/topup-ml";
import imgDiamond from "@/assets/images/diamond_.png"
import { GoShieldCheck } from "react-icons/go";
import { PiHeadset } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbShieldDollar } from "react-icons/tb";

const page = () => {
  return (
    <div className="bg-[#26292b] ">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full pt-10 px-10">
          <Image
            src={bannerGame}
            width={1000}
            height={1000}
            alt="banner-game"
            className="w-full bg-cover  rounded-lg"
          />
        </div>
        <div className="w-full pt-10 px-10 pb-20 flex space-x-5">
          <div className="w-[30%] text-white p-4 bg-[#2c2f31] rounded-lg">
            <div className="flex items-center space-x-4">
              <Image
                src={imageGame}
                width={1000}
                height={1000}
                alt="img-game"
                className="w-[30%] aspect-[4/6] rounded-lg"
              />
              <p className="w-[70%] text-lg font-medium">Mobile Legends</p>
            </div>
            <div className="grid grid-cols-2 my-4">
              <div className="flex items-center space-x-2">
                <GoShieldCheck />
                <p className="text-sm">Jaminan Layanan</p>
              </div>
              <div className="flex items-center space-x-2">
                <PiHeadset />
                <p className="text-sm">Layanan Pelanggan</p>
              </div>
              <div className="flex items-center space-x-2">
                <TbShieldDollar />
                <p className="text-sm">Pembayaran Aman</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineThunderbolt />
                <p className="text-sm">Pengiriman Instant</p>
              </div>
            </div>
            <hr />
            <p className="mt-4">
              Top up Diamond ML hanya dalam hitungan detik! Cukup masukan User
              ID & Server MLBB Anda, Pilih jumlah Diamond yang Anda inginkan,
              Selesaikan pembayaran Dan Diamond akan langsung masuk ke akun
              Mobile Legends Anda. Khusus Server Original, Tidak Bisa Isi
              Advance Server!
            </p>
          </div>
          <div className="w-[70%]">
            <form action="">
              {/* Tahap 1 */}
              <div className="bg-[#2c2f31] p-4 w-full rounded-lg">
                <div className="flex space-x-6 mb-4">
                  <h1 className="text-white text-2xl font-medium">1.</h1>
                  <p className="text-white text-2xl font-medium">
                    Masukkan User ID
                  </p>
                </div>
                <hr />
                <div className="mt-4 flex space-x-4 justify-between">
                  <input
                    type="text"
                    placeholder="User ID"
                    className="block w-1/2 px-3 py-2 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Server ID"
                    className="block w-1/2 px-2 py-1 rounded-full"
                  />
                </div>
                <p className="mt-4 text-white text-sm font-medium">
                  Silahkan masukkan User ID dan Server Anda
                </p>
              </div>
              {/* tahap 2 */}
              <div className="bg-[#2c2f31] p-4 w-full rounded-lg mt-4">
                <div className="flex space-x-6 mb-4">
                  <h1 className="text-white text-2xl font-medium">2.</h1>
                  <p className="text-white text-2xl font-medium">
                    Pilih Nominal Top Up
                  </p>
                </div>
                <hr />
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {topupMobilelegends.map((item) => (
                    <div className="flex items-center justify-between w-full bg-[#44494c] rounded-lg p-2 text-white cursor-pointer hover:ring-2">
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
              {/* tahap 3 */}
              <div>
                
              </div>
              <div></div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
