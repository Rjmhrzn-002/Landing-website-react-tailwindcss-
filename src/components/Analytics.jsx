import React from "react";
import Laptop from "./assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className=" w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto  grid lg:grid-cols-2  ">
        <img
          className="max-w-[400px] mx-auto py-4 md:py-6  "
          src={Laptop}
          alt="laptop"
        />
        <div className=" flex flex-col justify-center space-y-2 md:items-start">
          <p className="text-emerald-600 font-semibold text-lg md:text-xl">
            Data Analytics Dashboard
          </p>
          <h1 className="text-xl md:text-2xl text-black font-bold uppercase">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-black font-semibold lowercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            dolorum quam nulla perferendis non provident doloremque voluptas
            blanditiis, ab nesciunt tempore earum, aliquid illum quaerat nihil
            alias illo pariatur a?
          </p>
          <div className="py-3 mx-auto md:mx-0">
            <button className="px-4 py-2  bg-emerald-600 text-black text-lg font-semibold rounded-lg md:mr-auto hover:bg-emerald-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
