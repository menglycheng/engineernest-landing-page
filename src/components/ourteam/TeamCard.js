import Image from "next/image";
import React from "react";
import member1 from "../../../public/ourteam/member1.png";
import member2 from "../../../public/ourteam/member2.png";
import member3 from "../../../public/ourteam/member3.png";
import member4 from "../../../public/ourteam/member4.png";
import { StarIcon } from "@heroicons/react/24/solid";

export const TeamCard = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="relative w-44">
        <Image src={member1} width={190} height={338} />
        <div className="absolute w-44 bottom-2">
          <div className="flex justify-between mx-2 items-center">
            <p className="text-xs text-white">Jenny Wilson</p>
            <div className="bg-blue flex w-fit px-1 py-0 gap-2 justify-center items-center text-white rounded-xl">
              <StarIcon className="w-3 h-3" />
              <p className="text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-44">
        <Image src={member2} width={190} height={338} />
        <div className="absolute w-44 bottom-2">
          <div className="flex justify-between mx-2 items-center">
            <p className="text-xs text-white">Jenny Wilson</p>
            <div className="bg-blue flex w-fit px-1 py-0 gap-2 justify-center items-center text-white rounded-xl">
              <StarIcon className="w-3 h-3" />
              <p className="text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-44">
        <Image src={member3} width={190} height={338} />
        <div className="absolute w-44 bottom-2">
          <div className="flex justify-between mx-2 items-center">
            <p className="text-xs text-white">Jenny Wilson</p>
            <div className="bg-blue flex w-fit px-1 py-0 gap-2 justify-center items-center text-white rounded-xl">
              <StarIcon className="w-3 h-3" />
              <p className="text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-44">
        <Image src={member4} width={190} height={338} />
        <div className="absolute w-44 bottom-2">
          <div className="flex justify-between mx-2 items-center">
            <p className="text-xs text-white">Jenny Wilson</p>
            <div className="bg-blue flex w-fit px-1 py-0 gap-2 justify-center items-center text-white rounded-xl">
              <StarIcon className="w-3 h-3" />
              <p className="text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-44">
        <Image src={member4} width={190} height={338} />
        <div className="absolute w-44 bottom-2">
          <div className="flex justify-between mx-2 items-center">
            <p className="text-xs text-white">Jenny Wilson</p>
            <div className="bg-blue flex w-fit px-1 py-0 gap-2 justify-center items-center text-white rounded-xl">
              <StarIcon className="w-3 h-3" />
              <p className="text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
