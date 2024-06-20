"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";
import ReusableLink from "../ui/ReusableLink";
import ThemeSwitcher from "./ThemeSwitcher";

export default function LargeScreenNavList() {
  const { linkColor } = useNavigation();
  return (
    <nav>
      <ul
        style={{ color: `${linkColor}` }}
        className="hidden md:flex text-black"
      >
        <ReusableLink href="#home">
          <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
        </ReusableLink>
        <ReusableLink href="#about">
          <li className="ml-10 text-sm uppercase hover:border-b">About</li>
        </ReusableLink>
        <ReusableLink href="#skills">
          <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
        </ReusableLink>
        <ReusableLink href="#projects">
          <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
        </ReusableLink>
        <ReusableLink href="#contact">
          <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
        </ReusableLink>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
}
