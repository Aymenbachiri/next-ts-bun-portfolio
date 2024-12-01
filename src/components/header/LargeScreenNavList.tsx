"use client";

import { usePathname } from "next/navigation";
import ReusableLink from "../ui/ReusableLink";
import ThemeSwitcher from "./ThemeSwitcher";

export default function LargeScreenNavList() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden md:flex text-black dark:text-[#e6e6e6]">
        <ReusableLink href={pathname === "/" ? "#home" : "/#home"}>
          <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
        </ReusableLink>
        <ReusableLink href={pathname === "/" ? "#about" : "/#about"}>
          <li className="ml-10 text-sm uppercase hover:border-b">About</li>
        </ReusableLink>
        <ReusableLink href={pathname === "/" ? "#skills" : "/#skills"}>
          <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
        </ReusableLink>
        <ReusableLink href={pathname === "/" ? "#projects" : "/#projects"}>
          <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
        </ReusableLink>
        <ReusableLink href={pathname === "/" ? "#contact" : "/#contact"}>
          <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
        </ReusableLink>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
}
