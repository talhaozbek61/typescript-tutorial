"use client";
import { useState } from "react";
import FirstChildren from "../components/first-children";
import Parent from "../components/parent";
import SecondChildren from "../components/second-children";

export default function Page() {
  const [children, setChildren] = useState(true);
  return (
    <div>
      <Parent>
        <button
          onClick={() => setChildren(!children)}
          className="text-white px-4 py-2 bg-blue-400 rounded-md outline-none flex my-4"
        >
          Change Children
        </button>
        {children ? <FirstChildren /> : <SecondChildren />}
      </Parent>
    </div>
  );
}
