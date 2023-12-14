import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="w-full bg-black -mt-4 border-t-2 border-gray-900 ">
      <div className="max-w-[1240px] mx-auto p-4 md:px-6 text-white flex justify-between items-center">
        <div>
          <h1 className="text-md md:text-lg uppercase">Tuts@2023</h1>
        </div>
        <div className="flex justify-between items-center gap-5">
          <a href="#">
            <FaFacebook size={20} />
          </a>
          <a href="#">
            <FaTwitter size={20}></FaTwitter>
          </a>
          <a href="#">
            <FaInstagram size={20}></FaInstagram>
          </a>
          <a href="#">
            <FaLinkedin size={20}></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
}
