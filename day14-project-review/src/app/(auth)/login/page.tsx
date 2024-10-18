"use client";
import Link from "next/link";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function LogIn() {
  let [email, setEmail] = useState("");
  let submitHandling = () => {
    console.log("Submitted...");
  };
  return (
    <div className="justify-center items-center m-auto mt-12 bg-red-500 rounded-2xl  overflow-hidden shadow-lg w-2/3 lg:flex">
      <div className="w-full bg-white px-10 py-14 lg:w-1/2">
        <h1 className="text-center font-bold text-4xl text-gray-900 mb-6">
          Sign in
        </h1>
        <div className="flex justify-center items-center gap-2">
          <Link
            href="https://www.facebook.com/"
            className="p-2 rounded-full bg-blue-700 text-white transition-all duration-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-blue-800"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.youtube.com/"
            className="p-2 rounded-full bg-red-600 text-white transition-all duration-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-red-700"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.whatsapp.com/"
            className="p-2 rounded-full bg-green-600 text-white transition-all duration-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-green-700"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="p-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white transition-all duration-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:from-indigo-700 hover:to-pink-700"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="p-2 rounded-full bg-blue-500 text-white transition-all duration-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-blue-600"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.twitter.com/"
            className="p-2 rounded-full bg-gray-900 text-white transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800"
          >
            <FaXTwitter />
          </Link>
        </div>
        <form onSubmit={submitHandling} className="flex flex-col mt-6 mb-1">
          <label htmlFor="email" className="text-gray-900 mt-2 font-medium">
            Username
          </label>
          <input
            type="text"
            placeholder="Email or Phone"
            required
            className="outline-none border-gray-200 bg-gray-100 border-[1px] px-3 py-2 mt-1 mb-4 rounded-md"
          />
          <label htmlFor="password" className="text-gray-900 mt-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border-gray-200 bg-gray-100 border-[1px] px-3 py-2 mt-1 mb-4 rounded-md"
          />
          <button
            type="button"
            className="w-full bg-red-500 py-2 text-white mt-4 font-medium uppercase rounded-md shadow-sm hover:bg-red-600 transition-all"
          >
            Sign in
          </button>
        </form>
        <Link href="#" className="text-blue-600 text-sm">
          Forgot password?
        </Link>
        <p className="text-gray-500 text-xs text-center mt-6">
          &copy; 2001-2024 All Rights Reserved
          <br />
          <Link href="#" className="text-gray-700 underline font-medium">
            Privacy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-gray-700 underline font-medium">
            Terms
          </Link>
        </p>
      </div>
      <div className="w-full h-full p-6 lg:w-1/2 text-white text-center">
        <h1 className="text-2xl mb-6">
          Welcome to
          <br />
          <span className="font-bold text-4xl">The Zubair AR</span>
        </h1>
        <p className="mt-20">New Here?</p>
        <button
          type="button"
          className="bg-white px-8 py-2 text-red-600 mt-4 font-medium rounded-md uppercase shadow-sm hover:bg-red-600 hover:text-white transition-all"
        >
          <Link href="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
