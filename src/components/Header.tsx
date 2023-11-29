"use client";

import React, { FC, useState } from "react";
import Link from "next/link";

// Define the shape of the object for link properties.
interface LinkProps {
  href: string;
  label: string;
}

// Links array holding paths and labels for navigation.
const links: LinkProps[] = [
  { href: "/", label: "Home" },
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

// Function to generate links for navigation bar.
const renderLink = (title: string, href: string, className: string) => (
  <Link key={`${href} + ${title}`} href={href}>
    <span title={title} className={`${className} py-2 block`}>
      {title}
    </span>
  </Link>
);

// Header component containing navigation links.
const Header: FC = () => {
  // State to handle opening and closing of the mobile menu
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-950">
      <div className="text-2xl font-bold text-white">Logo</div>
      <div className="hidden md:flex space-x-8">
        {links.map(({ href, label }) => renderLink(label, href, "text-white"))}
      </div>
      <button
        className="md:hidden rounded-lg text-white focus:outline-none focus:shadow-outline"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-gray-900 to-blue-950 md:hidden">
          <div className="p-4 space-y-4 text-right text-white">
            {links.map(({ href, label }) => renderLink(label, href, ""))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Export the Header component
export default Header;
