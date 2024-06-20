"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";
import Logo from "./Logo";
import CloseBtn from "../ui/CloseBtn";
import MobileNavList from "./MobileNavList";
import LinkedInIcon from "@/lib/svg/LinkedInIcon";
import GithubIcon from "@/lib/svg/GithubIcon";
import MenuBtn from "../ui/MenuBtn";
import ThemeSwitcher from "./ThemeSwitcher";

export default function MobileNavbar() {
  const { nav, handleNav, setNav } = useNavigation();
  return (
    <>
      <MenuBtn handleNav={handleNav} />
      <div className="absolute top-8 right-16 md:hidden">
        <ThemeSwitcher />
      </div>
      <section>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Logo />
                {/* CLose icon */}
                <CloseBtn handleNav={handleNav} />
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <nav className="py-4 flex flex-col">
              <MobileNavList setNav={setNav} />
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&#39;s Connect
                </p>
                <div className="flex justify-center gap-10 items-center my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <LinkedInIcon />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GithubIcon />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
