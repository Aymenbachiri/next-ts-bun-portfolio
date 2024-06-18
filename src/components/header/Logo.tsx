import Image from "next/image";
import logo from "/public/assets/images/logo.webp";
import ReusableLink from "../ui/ReusableLink";

export default function Logo() {
  return (
    <ReusableLink className="rounded-full" href="/#home">
      <Image
        priority={true}
        className="rounded-full"
        src={logo}
        alt="/"
        width={50}
        height={50}
      />
    </ReusableLink>
  );
}
