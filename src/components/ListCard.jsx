import Image from "next/image";
import React from "react";
import TopupCard from "./TopupCard";
import { listTopup } from "@/utils/data";

const ListCard = () => {
  return (
    <div className="mx-10 grid flex-1 grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:gap-5">
      {listTopup.map((data) => (
        <TopupCard data={data} />
      ))}
    </div>
  );
};

export default ListCard;
// mx-10 flex flex-wrap gap-7 justify-between
// 