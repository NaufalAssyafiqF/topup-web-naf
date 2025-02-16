import React from 'react'
import HeaderStepTopup from '../elements/HeaderStepTopup';

const UserId = () => {
  return (
    <div className="bg-[#2c2f31] p-4 w-full rounded-lg">
      <HeaderStepTopup stepNumber={"1."} title={"Masukan User ID"} />
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
  );
}

export default UserId