import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
     
      <h2 className="text-xl sm:text-3xl text-center ">
        Finding the perfect match for Start-Up.
      </h2>
      <p className="text-lg opacity-60 text-center mt-10">
        Get ready to bring together brilliant Software engineers and ambitious
        startups. We provide a platform to build the future, one collaboration
        at a time.
      </p>
      {/* lets talk */}

      <div className="flex flex-col sm:flex-row md:text-blue gap-3 mt-10">
        <input
          className="border rounded-2xl px-2 py-2"
          type="text"
          placeholder="Enter your email"
        />
        <button className="bg-blue px-3 py-2 hover:animate-ping  rounded-2xl text-white ">
          Lets Talk
        </button>
      </div>
    </div>
  );
};

export default page;
