// src/components/Navbar.tsx
"use client"; // Ensure this component is treated as a client component

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter(); // This should work if Navbar is properly rendered

  const isActive = (href: string) => router.pathname === href;

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
