import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { DiVim } from "react-icons/di";

export default function Navbar() {
  return (
    <div>
      <nav className=" flex justify-between items-center px-4 w-100% bg-blue-800 sm:px-10">
        <Link href="/" className="text-2xl py-6 font-semibold text-white">
          Zubair AR
        </Link>
        <div className="hidden md:block">
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
        <CgMenuRight className=" text-white text-2xl block md:hidden" />
      </nav>
    </div>
  );
}
