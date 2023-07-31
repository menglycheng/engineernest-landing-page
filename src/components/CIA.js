import React from "react";
import Banner from "../../public/banner/banner.svg";
import Image from "next/image";
export const CIA = () => {
  return (
    <div className="relative w-screen">
      <Image src={Banner} className="w-screen "></Image>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
        “Simplicity is the ultimate sophistication.”
      </p>
    </div>
  );
};
