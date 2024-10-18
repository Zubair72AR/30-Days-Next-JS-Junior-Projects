"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

let navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Next JS", path: "/about" },
  { id: 3, name: "Career", path: "/career" },
  { id: 4, name: "IT Website", path: "/gsindh" },
];

export default function NavBar() {
  let usePath = usePathname();
  let isActive = (path: string) => path === usePath;

  return (
    <nav className="flex justify-between items-center px-8 md:px-24 py-6  bg-gray-900 text-white">
      <Link href="/">
        <h1 className="font-semibold text-4xl">
          Zubair <span className="text-red-500">AR</span>
        </h1>
      </Link>
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={
                isActive(item.path)
                  ? "font-medium uppercase text-red-500 border-b-[1px] py-[3px]"
                  : "font-medium uppercase"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-2">
        <button className="bg-red-500 py-[6px] px-4 font-normal hover:bg-white hover:text-red-500">
          <Link
            href="/login"
            className="flex justify-center items-center gap-[5px]"
          >
            <MdOutlineLogin className="text-lg" />
            Log In
          </Link>
        </button>
        <button className="bg-red-500 py-[6px] px-4 font-normal hover:bg-white hover:text-red-500">
          <Link
            href="/signup"
            className="flex justify-center items-center gap-[5px]"
          >
            <CgProfile className="text-lg" />
            Sign Up
          </Link>
        </button>
      </div>
    </nav>
  );
}
