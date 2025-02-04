import Image from "next/image";
import React from "react";
import TopupCard from "./TopupCard";
import { listTopup } from "@/utils/data";

const ListCard = () => {
  return (
    <div className="mx-10 flex flex-wrap gap-7 justify-between">
      {listTopup.map((data) => (<TopupCard data={data}/>)
        
      )}
    </div>
  );
};

export default ListCard;
