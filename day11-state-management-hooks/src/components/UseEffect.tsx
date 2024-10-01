"use client";
import React, { useState, useEffect } from "react";

export default function ToggleTextComponent() {
  let [isVisible, SetIsVisible] = useState(false);
  let changeText = () => {
    SetIsVisible((prev) => !prev);
  };
  let changeColor = "Red";
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <button onClick={changeText} className="w-32 h-12 bg-red-600">
        {isVisible ? "Show" : "Hide"}
      </button>
      <p className="mt-4 w-80">
        {isVisible
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumquequae natus exercitationem reprehenderit, ipsa ut aperiam doloribus?facilis cupiditate est eos dicta commodi esse placeat, modi abnulla"
          : ""}
      </p>
    </div>
  );
}
