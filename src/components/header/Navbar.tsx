import Logo from "./Logo";
import NavHeader from "./NavHeader";
import LargeScreenNavList from "./LargeScreenNavList";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <NavHeader>
      <section className="flex justify-between container mx-auto items-center w-full h-full px-2 2xl:px-16">
        <Logo />

        {/* Large screen navbar */}
        <LargeScreenNavList />
      </section>

      {/* Mobile Navbar */}
      <MobileNavbar />
    </NavHeader>
  );
}
