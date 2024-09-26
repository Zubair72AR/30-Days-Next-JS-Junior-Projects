"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaHeart,
  FaRegCopyright,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-zinc-950 w-screen fixed bottom-0 flex flex-col justify-center items-center">
      <div className="flex text-lg space-x-4 my-10 md:space-x-10">
        <FaFacebookF className="w-9 h-9 p-2 rounded-full text-xs bg-white text-blue-800 transition ease delay-150 hover:text-white hover:bg-blue-800" />
        <FaLinkedinIn className="w-9 h-9 p-2 rounded-full text-xs bg-white text-blue-800 transition ease delay-150 hover:text-white hover:bg-blue-800" />
        <FaTwitter className="w-9 h-9 p-2 rounded-full text-xs bg-white text-blue-800 transition ease delay-150 hover:text-white hover:bg-blue-800" />
        <FaInstagram className="w-9 h-9 p-2 rounded-full text-xs bg-white text-blue-800 transition ease delay-150 hover:text-white hover:bg-blue-800" />
        <FaYoutube className="w-9 h-9 p-2 rounded-full text-xs bg-white text-blue-800 transition ease delay-150 hover:text-white hover:bg-blue-800" />
      </div>
      <div className="text-white">
        <p className="flex justify-center items-center my-6 text-xs">
          Made with <FaHeart className="mx-1 text-red-600" /> CopyRight
          <FaRegCopyright className="mx-1" /> Zubair Ahmed
        </p>
      </div>
    </div>
  );
}
