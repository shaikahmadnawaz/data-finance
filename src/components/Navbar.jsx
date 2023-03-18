import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex justify-center mx-auto px-4 h-24 max-w-[1240px]">
      <h1 className="w-full text-2xl font-bold text-[#00df9a]">
        Data Finance.
      </h1>
      <ul className="md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
