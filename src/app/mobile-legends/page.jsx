import Image from "next/image";
import React from "react";
import bannerGame from "@/assets/images/hero1.webp";
import TopUpMl from "@/components/topupMl/TopUpMl";

const page = () => {
  return (
    <div className="bg-[#26292b] ">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full pt-10 px-4 md:px-10">
          <Image
            src={bannerGame}
            width={1000}
            height={1000}
            alt="banner-game"
            className="w-full bg-cover  rounded-lg"
          />
        </div>
        <TopUpMl />
      </div>
    </div>
  );
};

export default page;
