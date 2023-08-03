"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import FeedBackCard from "./card/FeedBackCard";

const Feedback = () => {
  const FeedbackCardRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (FeedbackCardRef.current) {
        const currentPosition = FeedbackCardRef.current.scrollLeft;
        const maxScrollWidth =
          FeedbackCardRef.current.scrollWidth -
          FeedbackCardRef.current.clientWidth;

        // Check if the left button should be visible
        setShowLeftButton(currentPosition > 0);
        // Check if the right button should be visible
        setShowRightButton(currentPosition < maxScrollWidth);
        // Update the scroll position
        setScrollPosition(currentPosition);
      }
    };

    // Attach the scroll event listener
    FeedbackCardRef.current?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      FeedbackCardRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (FeedbackCardRef.current) {
      FeedbackCardRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (FeedbackCardRef.current) {
      FeedbackCardRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="my-20 w-3/4  ">
      <div className="mt-10 flex justify-between items-center ">
        <h2 className="text-2xl md:text-3xl font-bold">
          What Our Client Said About Us
        </h2>
        <div className="w-fit flex gap-4">
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
      </div>
      <div
        className="w-full flex justify-start items-center  overflow-hidden overflow-x-scroll  scrollbar-hide gap-5"
        ref={FeedbackCardRef}
      >
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
      </div>
    </div>
  );
};

export default Feedback;
