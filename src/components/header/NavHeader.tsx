"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";

export default function NavHeader({ children }: { children: React.ReactNode }) {
  const { navBg, shadow } = useNavigation();
  return (
    <header
      style={{ backgroundColor: navBg }}
      className={`fixed w-full h-20 z-[100] ${
        shadow ? "shadow-xl ease-in-out duration-300" : ""
      }`}
    >
      {children}
    </header>
  );
}
