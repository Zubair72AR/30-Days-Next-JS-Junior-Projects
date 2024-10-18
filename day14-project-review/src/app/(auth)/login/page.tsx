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

interface LoginSubmission {
  userName: string;
  password: string;
}

export default function LogIn() {
  let [userName, setUserName] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [lengthPassword, setLengthPassword] = useState<boolean>(true);
  let [LengthUserName, setLengthUserName] = useState<boolean>(true);

  let [submission, setSubmission] = useState<LoginSubmission | null>(null);
  let submitHandling = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let NewSubmission: LoginSubmission = {
      userName,
      password,
    };

    if (NewSubmission.userName.length < 4) {
      alert("Username must be at least 4 characters long.");
      return;
    } else if (NewSubmission.password.length < 5) {
      alert("Password must be at least 5 characters long.");
      return;
    } else {
      setSubmission(NewSubmission);
    }
  };
  let UserNameHandler = (e: ChangeEvent<HTMLFormElement>) => {
    let userValue = e.target.value;
    setUserName(userValue);

    if (userValue.length < 4) {
      setLengthUserName(false);
    } else {
      setLengthUserName(true);
    }
  };
  let PasswordHandler = (e: ChangeEvent<HTMLFormElement>) => {
    let passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 5) {
      setLengthPassword(false);
    } else {
      setLengthPassword(true);
    }
  };
  return (
    <div>
      <div className="bg-image justify-center items-center m-auto my-8 rounded-2xl  overflow-hidden shadow-md w-2/3 lg:flex">
        <div className="w-full bg-white px-10 py-12 lg:w-1/2">
          <h1 className="text-center font-bold text-3xl text-gray-900 mb-6">
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
            <label htmlFor="email" className="text-gray-900 mt-4 font-medium">
              Username
            </label>
            <input
              type="text"
              placeholder="Email or Phone"
              required
              className="outline-none border-gray-200 bg-gray-100 border-[1px] px-3 py-2 mt-1 rounded-md"
              onChange={UserNameHandler}
            />
            {!LengthUserName && (
              <p className="text-red-700 text-xs">
                Username should be at least 5 characters long.
              </p>
            )}
            <label
              htmlFor="password"
              className="text-gray-900 mt-4 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="outline-none border-gray-200 bg-gray-100 border-[1px] px-3 py-2 mt-1 rounded-md"
              onChange={PasswordHandler}
            />
            {!lengthPassword && (
              <p className="text-red-700 text-xs">
                Password should be at least 5 characters long.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-red-500 py-2 text-white mt-4 font-medium uppercase rounded-md shadow-sm hover:bg-red-600 transition-all"
            >
              Sign in
            </button>
          </form>
          <Link href="#" className="text-blue-600 text-sm">
            Forgot your password?
          </Link>
        </div>
        <div className="w-full p-6 lg:w-1/2 text-white text-center">
          <h1 className="text-2xl my-6">
            Welcome to
            <br />
            <span className="font-bold text-4xl">The Zubair AR</span>
          </h1>
          <p className="mt-20">New Here?</p>
          <button
            type="button"
            className="bg-white px-8 py-2 text-red-600 mt-4 mb-6 font-medium rounded-md uppercase shadow-sm hover:bg-gray-900 hover:text-white transition-all"
          >
            <Link href="/signup">Sign Up</Link>
          </button>
          <p className="text-red-300 text-xs text-center mt-6">
            &copy; 2001-2024 All Rights Reserved
            <br />
            <Link href="#" className="text-red-200 underline font-medium">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-red-200 underline font-medium">
              Terms
            </Link>
          </p>
        </div>
      </div>
      {submission && (
        <div className="flex flex-col justify-center items-center m-auto w-1/2 mb-12 p-6 bg-gray-900 text-white rounded-2xl">
          <h2 className="uppercase font-bold">UserName and Password OutPut</h2>
          <pre>{JSON.stringify(submission, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
