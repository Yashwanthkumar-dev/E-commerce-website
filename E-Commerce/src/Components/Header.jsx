import React from "react";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center border-white  p-6">
      <h1 className="font-poppins  text-3xl font-semibold text-white ml-[-100px]">
        Gadgets
      </h1>

      <ul className="flex gap-x-10">
        <li className="text-xl font-poppins  text-white">Home</li>
        <li className="text-xl font-poppins  text-white">products</li>
        <li className="text-xl font-poppins  text-white">About us</li>
        <li className="text-xl font-poppins  text-white">Blog</li>
        <li className="text-xl font-poppins  text-white">Contact us</li>
      </ul>
    </div>
  );
};

export default Header;
