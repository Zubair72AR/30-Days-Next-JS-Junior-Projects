"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

let navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 1, name: "About Next JS", path: "/about" },
  { id: 1, name: "Career", path: "/career" },
  { id: 1, name: "Login", path: "/login" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center mx-8 md:mx-36 ">
      <h1>Next JS</h1>
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
