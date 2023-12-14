import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white py-16 ">
      <div className=" max-w-[1240px] mx-auto px-2 grid gap-4 sm:grid-cols-3 text-black ">
        <div className=" shadow-xl w-11/12 mx-auto rounded-lg py-4 px-0  flex flex-col items-center  space-y-4 md:space-y-0 hover:scale-105 duration-300">
          <img src="" alt="" />
          <h1>Titile</h1>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200 ">
            Description: this is dummy
          </p>
          <div>
            <button className="bg-emerald-600 text-white px-4 py-2 mt-2 rounded-lg">
              Start Now
            </button>
          </div>
        </div>
        <div className=" shadow-xl w-11/12 mx-auto rounded-lg py-4 px-0 bg-gray-200  flex flex-col items-center  space-y-4 md:space-y-0 hover:scale-105 duration-300">
          <img src="" alt="" />
          <h1>Titile</h1>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200 ">
            Description: this is dummy
          </p>
          <div>
            <button className="bg-emerald-600 text-white px-4 py-2 mt-2 rounded-lg">
              Start Now
            </button>
          </div>
        </div>
        <div className=" shadow-xl w-11/12 mx-auto rounded-lg py-4 px-0  flex flex-col items-center  space-y-4 md:space-y-0 hover:scale-105 duration-300">
          <img src="" alt="" />
          <h1>Titile</h1>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200">
            Description: this is dummy
          </p>
          <p className="py-2 border-b-2 border-gray-200 ">
            Description: this is dummy
          </p>
          <div>
            <button className="bg-emerald-600 text-white px-4 py-2 mt-2 rounded-lg">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
