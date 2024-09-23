"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-gray-800",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuClasses = ["hidden", "md:flex", "md:gap-10"];
    }
    return menuClasses.join(" ");
  }
  return (
    <div>
      <nav className=" flex justify-between items-center px-4 w-100% bg-blue-800 sm:px-10">
        <Link href="/" className="text-2xl py-6 font-semibold text-white">
          Zubair AR
        </Link>
        <div className={getMenuClasses()}>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            Home
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            About
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            Career
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            Skills
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:border-b-2"
          >
            COntact US
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <CgMenuRight className=" text-white text-2xl block md:hidden cursor-pointer" />
          </button>
        </div>
      </nav>
    </div>
  );
}
