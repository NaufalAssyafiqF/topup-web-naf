import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GiKnockedOutStars } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="bg-[#2c2f31]">
      <div className="max-w-[1200px] mx-auto pb-4 pt-10 ">
        <div className="mx-5 md:mx-10 flex justify-center space-y-10 lg:space-y-0 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row space-x-0 lg:space-x-8">
          <div className="w-full lg:w-1/2">
            <div className="font-bold flex items-center space-x-2 mb-4">
              <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                HABEK
              </h1>
              <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                STORE
              </h1>
              <GiKnockedOutStars className="text-orange-500 text-6xl" />
            </div>
            <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg">
              Top-Up Game Favorit Kamu Di Empeshop Agar Main Game Semakin Seru.
              Pengiriman Cepat Dan Berbagai Methode Pembayaran Yang Lengkap.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-between">
            <div className="text-white">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4">PETA STATUS</h1>
              <ul className="space-y-2 text-sm sm:text-sm md:text-base lg:text-lg">
                <li>Beranda</li>
                <li>Semua game</li>
              </ul>
            </div>
            <div className="text-white">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4">TOP UP LAINNYA</h1>
              <ul className="space-y-2 text-sm sm:text-sm md:text-base lg:text-lg">
                <li>Mobile Legend</li>
                <li>Honor of Kings</li>
                <li>PUBG Mobile</li>
                <li>COD Mobile</li>
              </ul>
            </div>
            <div className="text-white">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4">Ikuta kami</h1>
              <div className="flex space-x-2 md:space-x-4 mt-1">
                <div className="bg-[#26292b] p-2 rounded-full">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="bg-[#26292b] p-2 rounded-full">
                  <FaWhatsapp className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-20 mx-5 md:mx-10" />
        <p className="mx-5 md:mx-10 text-white mt-4 text-base md:text-lg">
          &copy; 2025 HABEK STORE. Semua Hak Cipta
        </p>
      </div>
    </div>
  );
};

export default Footer;
