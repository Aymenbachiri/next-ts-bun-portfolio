"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";
import Link from "next/link";

export default function MobileNavList() {
  const { setNav } = useNavigation();
  return (
    <ul className="uppercase">
      <Link href="/#home">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Home
        </li>
      </Link>
      <Link href="/#about">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          About
        </li>
      </Link>
      <Link href="/#skills">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Skills
        </li>
      </Link>
      <Link href="/#projects">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Projects
        </li>
      </Link>
      <Link href="/#contact">
        <li onClick={() => setNav(false)} className="py-4 text-sm">
          Contact
        </li>
      </Link>
    </ul>
  );
}
