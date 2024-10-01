"use client";
import React, { useState, useEffect } from "react";

export default function ToggleTextComponent() {
  let [isVisible, SetIsVisible] = useState(true);
  let changeText = () => {
    SetIsVisible((prev) => !prev);
  };
  useEffect(() => {
    alert("Fetching Data by UseEffect");
  }, [isVisible]);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <button onClick={changeText} className="w-32 h-12 bg-red-600 font-bold">
        {isVisible ? "Hide" : "Show"}
      </button>
      <p className="mt-4 w-80 text-center">
        {isVisible
          ? "Implement simple state management (e.g., a toggle button that shows/hides text)."
          : ""}
      </p>
    </div>
  );
}
