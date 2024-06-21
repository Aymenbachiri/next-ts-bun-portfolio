"use client";

import CloseIcon from "@/lib/svg/CloseIcon";

export default function CloseBtn({ handleNav }: { handleNav: () => void }) {
  return (
    <button
      onClick={handleNav}
      className="rounded-full dark:text-[#e6e6e6] shadow-lg shadow-gray-400 p-3 cursor-pointer"
    >
      <CloseIcon />
    </button>
  );
}
