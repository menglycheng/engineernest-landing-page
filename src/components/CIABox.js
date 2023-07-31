import Image from "next/image";
import React from "react";
import box_image1 from "../../public/banner/box_img1.png";
import box_image2 from "../../public/banner/box_img2.png";
export const CIABox = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="w-80 h-auto my-16">
        <Image src={box_image1} width={870} height={560} />
        <h3 className="font-bold text-lg mt-8">Matchmakers</h3>
        <p className="text-base opacity-60">
          Revolutionize the world of startups and skilled software engineers
          seeking side projects.
        </p>
      </div>
      <div className="w-80 h-auto my-16">
        <Image src={box_image2} width={870} height={560} />
        <h3 className="font-bold text-lg mt-8">Matchmakers</h3>
        <p className="text-base opacity-60">
          Revolutionize the world of startups and skilled software engineers
          seeking side projects.
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};
