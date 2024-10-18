"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
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

  return (
    <nav className="flex justify-between items-center px-7 h-[80px] bg-[#044E83] text-white">
      <Link href="/">
        <Image
          src={logo}
          alt="Governor Sindh Logo"
          className=" bottom-0 translate-y-[37%] w-[90px]"
        />
      </Link>
      <h1 className="text-[22px] font-bold text-blue-200">
        Tuition Free Education Program on Latest Technologies
      </h1>
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={
                isActive(item.path)
                  ? "font-medium text-blue-200"
                  : "font-medium "
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button>Courses</button>
    </nav>
  );
}
