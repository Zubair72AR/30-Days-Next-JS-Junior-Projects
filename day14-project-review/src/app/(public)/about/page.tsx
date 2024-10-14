"use client";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="font-medium text-4xl">C.S.R</h1>
        <p className="font-medium">
          <Typewriter
            options={{
              strings: ["Client Side Rendering"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
