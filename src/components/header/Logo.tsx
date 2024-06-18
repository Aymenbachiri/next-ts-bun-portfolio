import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/images/logo.webp";

export default function Logo() {
  return (
    <Link className="rounded-full" href="/#home">
      <Image
        className="rounded-full"
        src={logo}
        alt="/"
        width={50}
        height={50}
      />
    </Link>
  );
}
