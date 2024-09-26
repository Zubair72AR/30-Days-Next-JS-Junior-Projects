"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-20",
        "bg-blue-800",
        "w-full",
        "p-8",
        "left-0",
        "gap-2",
        "flex-col",
        "md:block",
        "md:relative",
        "md:top-0",
        "md:w-auto",
      ];
    } else {
      menuClasses = ["hidden", "md:block"];
    }
    return menuClasses.join(" ");
  }
  return (
    <div>
      <nav className=" flex justify-between items-center px-10 w-100% bg-blue-800">
        <Link href="/" className="text-2xl py-6 font-semibold text-white">
          Zubair AR
        </Link>
        <div className={getMenuClasses()}>
          <Link
            href="/"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            About
          </Link>
          <Link
            href="/career"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            Career
          </Link>
          <Link
            href="/skills"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            Portfolio
          </Link>
          <Link
            href="/contact-us"
            className="uppercase text-white text-xs tracking-wide mx-1.5 hover:text-blue-200"
          >
            Contact US
          </Link>
        </div>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" text-white text-2xl md:hidden cursor-pointer"
        >
          {isOpen ? <RxCross2 /> : <CgMenuRight />}
        </button>
      </nav>
    </div>
  );
}
