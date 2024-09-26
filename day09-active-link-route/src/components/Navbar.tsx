"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

let NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 1, name: "About", path: "/about" },
  { id: 1, name: "Career", path: "/career" },
  { id: 1, name: "Contact", path: "/contact" },
];

export default function Navbar() {
  let usePath = usePathname();
  let isActive = (path: string) => path === usePath;
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-20 py-4">
      <Link href="/">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={160}
          height={38}
          priority
        />
      </Link>
      <ul className="flex gap-4">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.path}
                className={isActive(link.path) ? "active" : "navtext"}
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
