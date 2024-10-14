"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LuLogIn } from "react-icons/lu";

let navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Next JS", path: "/about" },
  { id: 3, name: "Career", path: "/career" },
];

export default function NavBar() {
  let usePath = usePathname();
  let isActive = (path: string) => path === usePath;

  return (
    <nav className="flex justify-between items-center px-8 md:px-36 py-6  bg-slate-900 text-white">
      <Link href="/">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={160}
          height={38}
        />
      </Link>
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={isActive(item.path) ? "active" : "navClass"}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/login" className="flex justify-center items-center gap-2">
        <LuLogIn />
        Log In
      </Link>
    </nav>
  );
}
