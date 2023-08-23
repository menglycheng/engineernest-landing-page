"use client";
import React, { useEffect, useState } from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: ["Start-up", "Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative h-screen md:h-screen w-screen">
      <div className="absolute -top-40 left-10 md:left-40 w-64 h-64 md:w-96 md:h-96 rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 -right-24 w-64 h-64 md:w-96 md:h-96  rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-10 w-64 h-64   md:w-96 md:h-96 rounded-full bg-lightblue filter blur-3xl opacity-40 animate-blob"></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 flex flex-col  w-full md:w-1/2 h-fit mb-48"
      >
        <motion.h1
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-2xl w-full sm:text-4xl md:text-6xl font-bold text-center capitalize"
        >
          <span className=" leading-relaxed ">
            Finding the perfect match for
          </span>
          &nbsp;
          <span className="w-96 md:text-left text-blue inline-block">
            {text} <Cursor cursorColor="blue" />
          </span>
        </motion.h1>
        <motion.p
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="text-sm sm:text-base md:text-lg opacity-60 m-8 text-center"
        >
          Get ready to bring together brilliant Software engineers and ambitious
          startups. We provide a platform to build the future, one collaboration
          at a time.
        </motion.p>
        {/* lets talk */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="flex w-full justify-center gap-4"
        >
          <input
            className="bg-gray  w-40 sm:w-72 rounded-3xl px-6 py-3 text-base border-gray2 border-2 "
            placeholder="Enter Your Email"
            type="text"
          />
          <button className="bg-blue px-4 py-2 rounded-3xl text-white text-base">
            Lets Talk
          </button>
        </motion.div>
      </div>
    </div>
  );
};
