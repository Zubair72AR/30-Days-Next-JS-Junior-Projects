import Link from "next/link";

export default function CoursesMenu() {
  return (
    <div className="absolute top-36">
      <Link href="#">Courses</Link>
      <Link href="#">Programming Fundamentals</Link>
      <Link href="#">Web2 Using NextJS</Link>
      <Link href="#">Earn as You Learn</Link>
      <Link href="#">Web 3 and Metaverse</Link>
      <Link href="#">Cloud-Native Computing</Link>
      <Link href="#">Artificial Intelligence (AI) and Deep Learning</Link>
      <Link href="#">Ambient Computing and IoT</Link>
      <Link href="#">Genomics and Bioinformatics</Link>
      <Link href="#">Network Programmability and Automation</Link>
    </div>
  );
}
