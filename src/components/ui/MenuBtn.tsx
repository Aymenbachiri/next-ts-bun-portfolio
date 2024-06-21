"use client";

import MenuIcon from "@/lib/svg/MenuIcon";

export default function MenuBtn({ handleNav }: { handleNav: () => void }) {
  return (
    <button
      onClick={handleNav}
      className="md:hidden block cursor-pointer absolute right-3 top-5 dark:text-white"
    >
      <MenuIcon />
    </button>
  );
}
