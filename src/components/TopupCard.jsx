import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const TopupCard = ({data}) => {
  return (
    <div className="aspect-[4/6] w-full rounded-xl overflow-hidden relative group cursor-pointer transition duration-300 hover:scale-105 hover:ring-2 ring-orange-500">
      <Link href={data.link} className=" object-cover bg-center ">
        <Image
          src={data.image}
          quality={100}
          className="w-full h-full"
          alt="game-image"
        />
        <div className="absolute group-hover:inset-0 transition duration-300 ease-in-out bg-gradient-to-t from-[#26292b] w-full h-full rounded-lg"></div>
        <div className="absolute bottom-0 text-white p-2 transition duration-300 transform translate-y-20 group-hover:translate-y-0">
          <p className="text-lg lg:text-xl font-medium">{data.name}</p>
          <p className="text-base lg:text-lg">{data.publisher}</p>
        </div>
      </Link>
    </div>
  );
}

export default TopupCard
