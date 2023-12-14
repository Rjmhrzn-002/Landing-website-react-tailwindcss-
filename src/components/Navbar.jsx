import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const [nav, setNav] = useState(false);

  function handleNavIcon() {
    setNav(!nav);
    console.log(nav);
  }

  return (
    <div className="  max-w-[1240px] mx-auto flex justify-between items-center px-12 h-16 box-border">
      <h1 className=" p-3 font-bold text-xl md:text-3xl text-emerald-600 ">
        Logos.
      </h1>
      <ul className=" items-center hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Support</li>
      </ul>

      <div className="md:hidden cursor-pointer " onClick={handleNavIcon}>
        {!nav ? <LuMenu color="white" size={30} /> : <GrFormClose size={35} />}
      </div>

      <div
        className={
          !nav
            ? " fixed -left-[100%]"
            : "fixed top-0 left-0 w-3/5 h-full z-20 bg-[#000300] border-r border-gray-700 md:hidden ease-in-out duration-500"
        }
      >
        <h1 className="text-emerald-600 py-4 px-8 font-bold text-2xl ">
          Logos.
        </h1>
        <ul>
          <li className="p-4 border-b border-gray-700 mx-2">Home</li>
          <li className="p-4 border-b border-gray-700 mx-2">About</li>
          <li className="p-4 border-b border-gray-700 mx-2">Contact</li>
          <li className="p-4 border-b border-gray-700 mx-2">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
