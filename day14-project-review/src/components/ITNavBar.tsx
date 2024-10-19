"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import logo from "../../image/logo.png";

let navLinks = [
  { id: 1, name: "Home", path: "/gsindh" },
  { id: 2, name: "Apply", path: "/apply" },
  { id: 3, name: "Jobs", path: "/jobs" },
  { id: 4, name: "Result", path: "/result" },
];

export default function ITNavBar() {
  let usePath = usePathname();
  let isActive = (path: string) => path === usePath;
  let [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="flex justify-between items-center px-7 h-[80px] bg-[#044E83] text-white">
      <Link href="/">
        <Image
          src={logo}
          alt="Governor Sindh Logo"
          className=" bottom-0 translate-y-[37%] w-[90px]"
        />
      </Link>
      <h1 className="text-[23px] font-bold text-blue-200">
        Tuition Free Education Program on Latest Technologies
      </h1>
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={
                isActive(item.path)
                  ? "font-normal text-blue-200"
                  : "font-normal "
              }
            >
              {item.name}
            </Link>
          </li>
        ))}

        <button
          className="flex justify-center items-center gap-1"
          onClick={handleDropdownToggle}
        >
          Courses
          <FaAngleDown />
        </button>
        {dropdownVisible && (
          <div className="absolute top-[60px] bg-white text-gray-500 shadow-lg px-6 p-4">
            <h2 className="block py-2 font-bold text-lg text-gray-900">
              Core Courses
            </h2>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Programming Fundamentals
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Web2 Using NextJS
            </Link>
            <Link href="#" className="block pt-1 pb-4 hover:text-blue-700">
              Earn as You Learn
            </Link>
            <hr />
            <h2 className="block pb-2 pt-6 font-bold text-lg text-gray-900">
              Advanced Courses
            </h2>

            <Link href="#" className="block py-1 hover:text-blue-700">
              Web 3 and Metaverse
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Cloud-Native Computing
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Artificial Intelligence (AI) and Deep Learning
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Ambient Computing and IoT
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Genomics and Bioinformatics
            </Link>
            <Link href="#" className="block py-1 hover:text-blue-700">
              Network Programmability and Automation
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
