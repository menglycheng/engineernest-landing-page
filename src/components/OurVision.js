import React from "react";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const OurVision = () => {
  return (
    <div className="flex my-20 w-3/5">
      {/* left box  */}
      <div className="w-3/4 ">
        <h2 className="text-blue text-lg font-bold">Our Vision</h2>
        <p className="text-2xl font-light w-3/4 mt-4">
          Bridge the gap between ambitious startups and talented software
          engineers.
        </p>
        <button className="text-base mt-16 px-10 text-white   font-normal bg-blue rounded-3xl py-3">
          Detail About Us
        </button>
      </div>
      {/* right box  */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col justify-start items-start gap-12">
          {/* box 1 */}
          <div className="flex justify-center items-center gap-2">
            <div className="bg-blue w-fit p-3 rounded-xl">
              <BoltIcon className="w-10 h-10 text-white" />
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
            <div className="bg-blue w-fit p-3 rounded-xl">
              <CurrencyDollarIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="font-bold">Innovative Startups</h2>
              <p className="text-sm opacity-60">Think big, dream big</p>
            </div>
          </div>
          {/* box 3 */}
          <div className="flex justify-center items-center gap-2">
            <div className="bg-blue w-fit p-3 rounded-xl">
              <ArrowTrendingUpIcon className="w-10 h-10 text-white" />
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
