import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full bg-black ">
      <div className="max-w-[1240px] mx-auto py-24 px-4 grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-bold uppercase  text-lg md:text-xl">
            Want tips and tricks to optimize your flow?
          </h1>
          <p className="text-md font-semibold ">
            Sign up to our newsletter to stay updated.
          </p>
        </div>
        <div className="md:flex md:flex-row ">
          <input
            type="email"
            placeholder="Enter your email"
            className=" w-full sm:w-3/4 px-4 py-2  my-4 sm:m-0 rounded-md text-gray-600"
          />
          <button className=" px-4 py-2 md:w-2/5  font-semibold  text-sm rounded-md bg-emerald-600 sm:px-2 sm:ml-2 hover:bg-emerald-800">
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
