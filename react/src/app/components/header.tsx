"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const dropdown = [
  {
    name: "Props Example",
    href: "/1-props-example",
  },
  {
    name: "Children Prop Example",
    href: "/2-children-prop-example",
  },
  {
    name: "Event Example",
    href: "/3-event-example",
  },
  {
    name: "useState Example",
    href: "/4-usestate-example",
  },
  {
    name: "useContext Example",
    href: "/5-usecontext-example",
  },
  {
    name: "useRef Example",
    href: "/6-useref-example",
  },
];
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="relative mx-auto max-w-7xl flex items-center justify-between p-4 text-sm text-gray-100">
      <Link href="/" className="flex-1">
        Logo
      </Link>
      {/* Destop Menu */}
      <ul className="flex-1 flex items-center justify-end gap-x-16 max-md:hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-x-2"
          >
            Examples
            {showDropdown ? (
              <FaChevronUp className="size-3" />
            ) : (
              <FaChevronDown className="size-3" />
            )}
          </button>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute flex flex-col right-56 -bottom-[300px] bg-zinc-50 px-6 py-3 rounded-xl space-y-3 ring-1 ring-gray-300 dropdown">
          {dropdown.map((menu, mIdx) => (
            <Link
              href={menu.href}
              key={mIdx}
              className="px-4 py-2 text-sm text-gray-900"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
