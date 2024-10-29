"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Page() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <h1
        className="text-3xl sm:text-4xl font-medium"
        style={{
          fontSize: state.fontSize,
        }}
      >
        useContext Example
      </h1>
      <div className="max-w-sm mx-auto space-y-8">
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
          className={
            state.theme === "dark"
              ? "bg-white text-gray-900 rounded-md w-full p-2.5 hover:bg-white/90 duration-300"
              : "bg-black text-white rounded-md w-full p-2.5 hover:bg-black/90 duration-300"
          }
        >
          Change Theme
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "CHANGE_FONT_SIZE",
              payload: state.fontSize === 16 ? 36 : 16,
            })
          }
          className="bg-indigo-400 text-white rounded-md w-full p-2.5 hover:bg-indigo-400/90 duration-300"
        >
          Change Font Size
        </button>
      </div>
    </div>
  );
}
