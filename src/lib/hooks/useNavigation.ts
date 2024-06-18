import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useNavigation = () => {
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

  return {
    nav,
    setNav,
    shadow,
    navBg,
    linkColor,
    handleNav,
  };
};
