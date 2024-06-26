"use client";

import { Dispatch, SetStateAction } from "react";
import ReusableLink from "../ui/ReusableLink";

export default function MobileNavList({
  setNav,
}: {
  setNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="uppercase text-black dark:text-[#e6e6e6]">
      <ReusableLink href="#home">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Home
        </li>
      </ReusableLink>
      <ReusableLink href="#about">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          About
        </li>
      </ReusableLink>
      <ReusableLink href="#skills">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Skills
        </li>
      </ReusableLink>
      <ReusableLink href="#projects">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Projects
        </li>
      </ReusableLink>
      <ReusableLink href="#contact">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Contact
        </li>
      </ReusableLink>
    </ul>
  );
}
