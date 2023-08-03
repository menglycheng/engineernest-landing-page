"use client";
import React, { useEffect, useState } from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  const [typingText, setTypingText] = useState([]);
  const [text, count] = useTypewriter({
    words: ["Start-up", "Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute -top-40 left-10 md:left-40 w-64 h-64 md:w-96 md:h-96 rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 -right-24 w-64 h-64 md:w-96 md:h-96  rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-10 w-64 h-64   md:w-96 md:h-96 rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 flex flex-col  w-full md:w-1/2 h-full mt-36 mb-48"
      >
        <h1 className="text-2xl w-full sm:text-4xl md:text-6xl font-bold text-center ">
          <span className="w-3/4">Finding the perfect match for</span>
          &nbsp;
          <span className="w-72 md:text-left text-blue inline-block">
            {text} <Cursor cursorColor="blue" />
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg opacity-60 m-8 text-center">
          Get ready to bring together brilliant Software engineers and ambitious
          startups. We provide a platform to build the future, one collaboration
          at a time.
        </p>
        {/* lets talk */}
        <div className="flex w-full justify-center gap-4">
          <input
            className="bg-gray w-40 sm:w-72 rounded-3xl px-3 py-2 text-sm "
            placeholder="Enter your email"
            type="text"
          />
          <button className="bg-blue px-3 py-1 rounded-3xl text-white text-sm">
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};
