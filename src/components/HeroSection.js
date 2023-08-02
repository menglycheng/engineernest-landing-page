import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-normal items-center w-full md:w-1/2 h-full mt-36 mb-48">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center">
        Finding the perfect match for innovations.
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
  );
};
