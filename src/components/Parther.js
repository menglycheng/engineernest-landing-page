import React from "react";
import cp1 from "../../public/company/cp1.svg";
import cp2 from "../../public/company/cp2.svg";
import cp3 from "../../public/company/cp3.svg";
import cp4 from "../../public/company/cp4.svg";
import cp5 from "../../public/company/cp5.svg";
import cp6 from "../../public/company/cp6.svg";
import cp7 from "../../public/company/cp7.svg";
import cp8 from "../../public/company/cp8.svg";
import cp9 from "../../public/company/cp9.svg";
import cp10 from "../../public/company/cp10.svg";
import Image from "next/image";
const partherLogos = [
  {
    name: "unknown",
    logo: cp1,
  },
  {
    name: "unknown",
    logo: cp2,
  },
  {
    name: "unknown",
    logo: cp3,
  },
  {
    name: "unknown",
    logo: cp4,
  },
  {
    name: "unknown",
    logo: cp5,
  },
  {
    name: "unknown",
    logo: cp6,
  },
  {
    name: "unknown",
    logo: cp7,
  },
  {
    name: "unknown",
    logo: cp8,
  },
  {
    name: "unknown",
    logo: cp9,
  },
  {
    name: "unknown",
    logo: cp1,
  },
];

export const Parther = () => {
  return (
    <div className="w-screen flex items-center justify-center bg-gray">
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center text-center py-16">
        <h1 className=" text-3xl font-semibold pb-16">Company Matched</h1>
        <div className="w-fit md:full  flex flex-wrap gap-10 items-center justify-center">
          {partherLogos.map((logo, index) => (
            <Image key={index} src={logo.logo} height={40} width={120} />
          ))}
        </div>
      </div>
    </div>
  );
};
