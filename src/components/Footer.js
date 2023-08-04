import React from "react";
import LOGO from "../../public/Logo.svg";
const Footer = () => {
  return (
    <div className="h-96 bg-blue w-screen flex flex-col justify-center items-center ">
      <div className="w-3/4 md:w-1/3 flex flex-col justify-center items-center">
        <div>
          <p className="font-bold text-white text-xl">ENGINEERNEST</p>
        </div>
        <p className="mt-5 text-white text-sm md:text-base text-center">
          Yearning for outstanding software engineers? Seeking a thrilling
          opportunity with a rising startup? Join now.
        </p>
        <div className="bg-white text-sm md:text-base w-fit px-6 py-2 rounded-2xl cursor-pointer mt-5 font-bold text-blue">
          Connect
        </div>
      </div>
    </div>
  );
};

export default Footer;
