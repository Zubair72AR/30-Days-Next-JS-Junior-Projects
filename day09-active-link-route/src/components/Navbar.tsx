import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  let router = useRouter();
  console.log(router);
  return (
    <nav>
      <Image
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={100}
        height={38}
        priority
      />
      <ul>
        <li>
          <Link href=""></Link>
        </li>
      </ul>
    </nav>
  );
}
