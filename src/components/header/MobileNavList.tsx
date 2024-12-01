"use client";

import { Dispatch, SetStateAction } from "react";
import ReusableLink from "../ui/ReusableLink";
import { usePathname } from "next/navigation";

export default function MobileNavList({
  setNav,
}: {
  setNav: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <ul className="uppercase text-black dark:text-[#e6e6e6]">
      <ReusableLink href={pathname === "/" ? "#home" : "/#home"}>
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Home
        </li>
      </ReusableLink>
      <ReusableLink href={pathname === "/" ? "#about" : "/#about"}>
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          About
        </li>
      </ReusableLink>
      <ReusableLink href={pathname === "/" ? "#skills" : "/#skills"}>
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Skills
        </li>
      </ReusableLink>
      <ReusableLink href={pathname === "/" ? "#projects" : "/#projects"}>
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Projects
        </li>
      </ReusableLink>
      <ReusableLink href={pathname === "/" ? "#contact" : "/#contact"}>
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Contact
        </li>
      </ReusableLink>
    </ul>
  );
}
