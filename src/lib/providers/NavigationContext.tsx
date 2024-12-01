"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { usePathname } from "next/navigation";

// Define the type for the context value
interface NavigationContextValue {
  nav: boolean;
  shadow: boolean;
  navBg: string;
  linkColor: string;
  handleNav: () => void;
}

// Explicitly type the context with NavigationContextValue or null for uninitialized state
const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const pathName = usePathname();

  useEffect(() => {
    if (["/property", "/crypto", "/netflix", "/twitch"].includes(pathName)) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [pathName]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{ nav, shadow, navBg, linkColor, handleNav }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// Hook to use the NavigationContext with type safety
export const useNavbar = (): NavigationContextValue => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavigationProvider");
  }
  return context;
};
