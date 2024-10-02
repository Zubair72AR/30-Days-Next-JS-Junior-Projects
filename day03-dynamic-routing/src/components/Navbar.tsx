"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  let navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact Us", path: "/contact-us" },
    { id: 4, name: "Countries", path: "/countries" },
  ];

  let isActive = (path: string) => path === usePathname();

  return (
    <nav>
      <ul className="flex justify-center text-center py-6 bg-slate-800 ">
        {navLinks.map((e) => {
          return (
            <li key={e.id} className=" md:px-6">
              <Link
                href={e.path}
                className={isActive(e.path) ? "active" : "navClass"}
              >
                {e.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
