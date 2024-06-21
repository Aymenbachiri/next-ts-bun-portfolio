"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";

export default function NavHeader({ children }: { children: React.ReactNode }) {
  const { shadow } = useNavigation();
  return (
    <header
      className={`fixed w-full h-20  dark:shadow-[#151515] dark:ease-in-out dark:duration-300 z-[100] ${
        shadow
          ? "shadow-xl bg-[#ecf0f3] ease-in-out duration-300 dark:bg-[#151515]"
          : ""
      }`}
    >
      {children}
    </header>
  );
}
