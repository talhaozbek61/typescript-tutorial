"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

export default function Page() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      sessionId: Math.random(),
      name: username,
    });
  };

  return (
    <div className="mx-auto max-w-7xl py-8 px-6">
      {user ? (
        `${username} logged in `
      ) : (
        <form className="py-8 flex flex-col items-center justify-center min-h-screen max-w-sm mx-auto space-y-4">
          <h1 className="text-3xl text-gray-100">useState Example</h1>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-slate-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 outline-none duration-300"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      )}
      {/* Be aware */}
      {user?.name}
    </div>
  );
}
