import React from "react";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const OurVision = () => {
  return (
    <div className="flex flex-col md:flex-row my-20 w-3/4 ">
      {/* left box  */}
      <div className="w-full md:w-3/4 ">
        <h2 className="text-blue text-lg font-bold">Our Vision</h2>
        <p className="text-xl md:text-2xl font-light w-full md:w-3/4 mt-4">
          Bridge the gap between ambitious startups and talented software
          engineers.
        </p>
        <div className="w-full flex justify-end md:justify-start">
          <button className="text-sm md:text-base   mt-10 md:mt-16 px-5 md:px-10 text-white  font-normal bg-blue rounded-3xl py-2 md:py-3">
            Detail About Us
          </button>
        </div>
      </div>
      {/* right box  */}
      <div className="w-full flex justify-start md:justify-center my-8 md:my-0 items-center">
        <div className="flex flex-col justify-start items-start gap-12">
          {/* box 1 */}
          <div className="flex justify-center items-center gap-2">
            <div className="bg-blue w-fit p-2 md:p-3 rounded-xl">
              <BoltIcon className="w-8 md:w-10 h-8 md:h-10 text-white" />
            </div>
            <div>
              <h2 className="font-bold">Verified Engineers</h2>
              <p className="text-sm opacity-60">
                Top-notch skillsetTop-notch skillset
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex justify-center items-center gap-2">
            <div className="bg-blue w-fit p-2 md:p-3 rounded-xl">
              <CurrencyDollarIcon className="w-8 md:w-10 h-8 md:h-10 text-white" />
            </div>
            <div>
              <h2 className="font-bold">Innovative Startups</h2>
              <p className="text-sm opacity-60">Think big, dream big</p>
            </div>
          </div>
          {/* box 3 */}
          <div className="flex justify-center items-center gap-2">
            <div className="bg-blue w-fit p-2 md:p-3 rounded-xl">
              <ArrowTrendingUpIcon className="w-8 md:w-10 h-8 md:h-10 text-white" />
            </div>
            <div>
              <h2 className="font-bold">Successful Matches</h2>
              <p className="text-sm opacity-60">Creating powerful stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
