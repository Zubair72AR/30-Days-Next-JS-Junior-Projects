"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
let navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Get Static Props", path: "/getStaticProps" },
  { id: 3, name: "Get Server Side Props", path: "/getServerSideProps" },
];

export default function Navbar() {
  let usePath = usePathname();
  let isActive = (path: string) => path === usePath;

  return (
    <nav className=" bg-slate-800">
      <ul className="flex justify-center items-center">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="py-6 px-10 text-white uppercase font-medium hover:text-blue-600"
            >
              <Link
                href={link.path}
                className={isActive(link.path) ? "active navClass" : "navClass"}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
