import React from "react";

const Hero = () => {
  return (
    <div>
      <h2 className="font-montserrat text-white font-medium text-xl opacity-60 ml-50 mt-50">
        From $999
      </h2>
      <h1 className="font-poppins text-6xl text-white font-semibold ml-50 mt-5">
        iPhone 12 Pro
      </h1>
      <div className="flex gap-x-10">
      <button className="px-7 py-3 ml-50 mt-10 text-white border border-white rounded-2xl active:bg-slate-700 active:text-white active:border-transparent hover:border-transparent duration-500 hover:bg-white hover:text-black hover:cursor-pointer">Buy Now</button>
      <button className="font-poppins  text-white hover:border-white hover:border hover:cursor-pointer duration-400 border-transparent px-7 py-3 rounded-2xl  mt-10">watch</button>
      </div>
    </div>
  );
};

export default Hero;
