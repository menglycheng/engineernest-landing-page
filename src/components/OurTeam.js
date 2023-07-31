import React from "react";
import { TeamCard } from "./ourteam/TeamCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const OurTeam = () => {
  return (
    <div className="w-screen bg-gray flex justify-center items-center py-14">
      <div className="w-3/4 flex flex-col gap-4">
        <div className="flex justify-end items-end mr-2 ">
          <div className="rounded-full text-blue p-3 cursor-pointer">
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <div className=" bg-blue rounded-full text-white p-3 cursor-pointer">
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-2/6">
            <h3 className="text-3xl font-bold">Consult With Our Team</h3>
            <p className="mt-5 opacity-60">
              Ready to find your perfect startup or skilled software engineer?
              Discover the amazing projects that await, and Dare to collaborate!
            </p>
            <button className="text-base mt-14 px-10 text-white   font-normal bg-blue rounded-3xl py-3">
              Consult Now For Free
            </button>
          </div>
          <div className="overflow-hidden overflow-x-scroll flex flex-row">
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};
