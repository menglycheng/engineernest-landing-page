"use client";
import React, { useEffect, useRef, useState } from "react";
import { TeamCard } from "./ourteam/TeamCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const OurTeam = () => {
  const teamCardRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (teamCardRef.current) {
        const currentPosition = teamCardRef.current.scrollLeft;
        const maxScrollWidth =
          teamCardRef.current.scrollWidth - teamCardRef.current.clientWidth;

        // Check if the left button should be visible
        setShowLeftButton(currentPosition > 0);
        // Check if the right button should be visible
        setShowRightButton(currentPosition < maxScrollWidth);
        // Update the scroll position
        setScrollPosition(currentPosition);
      }
    };

    // Attach the scroll event listener
    teamCardRef.current?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      teamCardRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (teamCardRef.current) {
      teamCardRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (teamCardRef.current) {
      teamCardRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen bg-gray flex  justify-center items-center py-14">
      <div className="w-3/4 flex flex-col gap-4">
        <div className="flex justify-end items-end order-last md:order-none gap-3 ">
          <div
            className={`rounded-full  p-3 cursor-pointer ${
              showLeftButton ? "bg-blue text-white" : "bg-white  text-blue"
            }`}
            onClick={handleScrollLeft}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <div
            className={`bg-blue rounded-full  p-3 cursor-pointer ${
              showRightButton ? "bg-blue text-white" : "bg-white  text-blue"
            }`}
            onClick={handleScrollRight}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-2/6">
            <h3 className="text-3xl font-bold">Consult With Our Team</h3>
            <p className="mt-5 opacity-60">
              Ready to find your perfect startup or skilled software engineer?
              Discover the amazing projects that await, and Dare to collaborate!
            </p>
            <div className="w-full flex justify-end md:justify-start">
              <button className="text-sm md:text-base md:mt-14 mt-5 px-5 md:px-10 text-white  font-normal bg-blue rounded-3xl py-2 md:py-3">
                Consult Now For Free
              </button>
            </div>
          </div>
          <div
            className="overflow-hidden overflow-x-scroll flex flex-row scrollbar-hide"
            ref={teamCardRef}
          >
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};
