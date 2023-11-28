import React, { FC } from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  label: string;
}

const links: LinkProps[] = [
  { href: "/", label: "Home" },
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

const Header: FC = () => (
  <>
    {links.map(({ href, label }, index) => (
      <Link key={`${href} + ${label}`} href={href}>
        <span title={label}> {label} </span>
      </Link>
    ))}
  </>
);

export default Header;
