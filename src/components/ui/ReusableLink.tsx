"use client";

import Lenis from "lenis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useCallback } from "react";

interface ReusableLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const ReusableLink: React.FC<ReusableLinkProps> = ({
  href,
  children,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      if (onClick) {
        onClick(event);
      }

      if (typeof href === "string" && href.startsWith("#")) {
        event.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      } else if (typeof href === "string") {
        event.preventDefault();
        router.push(href);

        // Wait for the next frame to ensure the navigation has occurred
        requestAnimationFrame(() => {
          const lenis = new Lenis();
          lenis.scrollTo(0, { immediate: true });
        });
      }
    },
    [href, onClick, router]
  );

  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
};

export default ReusableLink;
