import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className=" text-emerald-600 max-w-[800px] mx-auto h-screen flex flex-col text-center py-40  space-y-2 md:space-y-4 ">
      <p className="text-xl sm:text-2xl md:text-4xl font-semibold ">
        Growing with Data Analytics
      </p>
      <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold uppercase text-shadow-50 drop-shadow-xl text-white">
        Grow with data.
      </h1>
      <div className="flex justify-center items-center text-white">
        <p className="text-2xl sm:text-2xl md:text-4xl font-semibold ">
          Fast, Finance for
        </p>

        <Typed
          className=" pl-2 text-2xl sm:text-2xl md:text-4xl font-semibold"
          strings={[" products", " categories", " brands"]}
          typeSpeed={120}
          backSpeed={80}
          loop
        ></Typed>
      </div>
    </div>
  );
}
