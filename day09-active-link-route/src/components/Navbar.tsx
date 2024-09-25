"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
