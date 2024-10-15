"use client";
import renData from "@/components/RenderingMethod";
import Link from "next/link";

export default function About() {
  return (
    <div className="mt-12 bg-white w-[500px] m-auto rounded-xl shadow-lg overflow-hidden">
      <h1 className="text-lg font-bold text-white text-center py-6 bg-red-500">
        Methods of Rendering Web Applications
      </h1>
      {renData.map((item) => {
        return (
          <p
            key={item.id}
            className="text-3xl font-bold text-gray-900 pl-8 my-6"
          >
            <Link href={item.headings.toLowerCase()}>
              {item.headings}{" "}
              <span className="text-lg font-normal">{item.fullForm}</span>
            </Link>
          </p>
        );
      })}
    </div>
  );
}
