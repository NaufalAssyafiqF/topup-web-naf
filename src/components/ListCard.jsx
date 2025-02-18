import Image from "next/image";
import React from "react";
import TopupCard from "./TopupCard";
import { listTopup } from "@/utils/data";

const ListCard = () => {
  return (
    <div className="mx-4 md:mx-10 grid flex-1 grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:gap-5">
      {listTopup.map((data, index) => (
        <TopupCard data={data} key={index} />
      ))}
    </div>
  );
};

export default ListCard;
// mx-10 flex flex-wrap gap-7 justify-between
// 