import React from 'react'
import HeaderStepTopup from '../elements/HeaderStepTopup';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const NomorWhatsapp = () => {
  return (
    <div className="bg-[#2c2f31] p-4 w-full rounded-lg mt-4">
      <HeaderStepTopup stepNumber={"4."} title={"Masukan Nomor Whatsapp"} />
      <div className="mt-4">
        <input
          type="text"
          placeholder="08xxxxxx"
          className="block w-full px-3 py-2 rounded-full"
        />
        <p className="mt-4 text-white text-sm font-medium">
          Masukkan nomor anda untuk menyimpan riwayat pesanan in
        </p>
      </div>
      <button
        type="submit"
        className="w-fit px-4 py-2 bg-green-600 rounded-full text-white mt-4 text-lg font-medium flex items-center"
      >
        <p>Konfirmasi TopUp </p>
        <MdKeyboardDoubleArrowRight className="text-4xl" />
      </button>
    </div>
  );
}

export default NomorWhatsapp