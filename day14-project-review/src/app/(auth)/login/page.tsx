"use client";
import Link from "next/link";
import FloatingLabelInput from "../../../components/InputField";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function LogIn() {
  return (
    <div className="justify-center items-center m-auto rounded-2xl  overflow-hidden shadow-lg w-2/3 lg:flex">
      <div className="w-full bg-white p-6 lg:w-1/2">
        <h1 className="text-center font-bold text-2xl text-gray-900 mb-6">
          Sign in
        </h1>
        <div className="flex justify-center items-center gap-2">
          <Link href="#" className="p-2 rounded-full bg-blue-700 text-white">
            <FaFacebookF />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-red-600 text-white">
            <FaYoutube />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-green-600 text-white">
            <FaWhatsapp />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white"
          >
            <FaInstagram />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-blue-500 text-white">
            <FaLinkedinIn />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-gray-900 text-white">
            <FaXTwitter />
          </Link>
        </div>
        <FloatingLabelInput />
      </div>

      <div className="w-full bg-red-500 p-6 lg:w-1/2">
        <h1>Sign in</h1>
      </div>
    </div>
  );
}
