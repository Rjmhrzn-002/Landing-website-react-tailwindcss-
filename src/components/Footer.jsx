import React from "react";

export default function Footer() {
  return (
    <div className="w-full py-16">
      <div className="max-w-[1240px] mx-auto  px-4 grid md:grid-cols-3 items-center">
        <div className="pt-12 ">
          <h1 className="text-emerald-600 font-bold mb-5 text-2xl md:text-3xl lg:text-4xl">
            LOGO.
          </h1>
          <p className="text-gray-500  p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            nobis fuga veniam hic accusantium, cum autem minima magni ad aperiam
            laudantium amet consectetur.
          </p>
        </div>
        <div className="md:col-span-2 text-center">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            <li>
              <p className="text-xl md:text-2xl text-white  md:pb-2 ">
                <span className="border-b-2">Brands</span>
              </p>
              <ul>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 1
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 2
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 3
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 4
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xl md:text-2xl text-white  md:pb-2">
                <span className="border-b-2">Companies</span>
              </p>
              <ul>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 1
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 2
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 3
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 4
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xl md:text-2xl text-white  md:pb-2">
                <span className="border-b-2">Solutions</span>
              </p>
              <ul>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 1
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 2
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 3
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 4
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xl md:text-2xl text-white  md:pb-2">
                <span className="border-b-2">Queries</span>
              </p>
              <ul>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 1
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 2
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 3
                </li>
                <li className="text-gray-500 text-md md:text-lg pb-1">
                  item 4
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
