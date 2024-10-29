"use client";
import { useEffect, useRef } from "react";

export default function Page() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("username is " + usernameInputRef.current?.value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl sm:text-4xl font-medium">useRef Example</h1>
      <div className="max-w-sm mx-auto space-y-8">
        <input
          type="text"
          name="first-input"
          className="rounded-lg w-full focus-within:ring-2 focus-within:ring-blue-600"
          placeholder="First focus here"
          ref={firstInputRef}
        />
        <input
          type="text"
          name="second-input"
          className="rounded-lg w-full focus-within:ring-2 focus-within:ring-indigo-600"
          placeholder="Enter Username"
          ref={usernameInputRef}
        />
        <button
          className="bg-indigo-400 text-white rounded-md w-full p-2.5 hover:bg-indigo-400/90 duration-300"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
}
