// Importing necessary modules, components and hooks from respective packages
"use client";
import { Disclosure } from "@headlessui/react"; // Used for creating accessible components
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Icons from Heroicons
import React from "react";
import Link from "next/link"; // Navigation between pages in Next.js application
import { usePathname } from "next/navigation"; // Hook provided by Next.js for accessing current URL pathname

// Define the properties for links
interface LinkProps {
  href: string;
  label: string;
}

// Array of links for the application
const links: LinkProps[] = [
  { href: "/", label: "Home" },
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

// Header component definition
export default function Header() {
  // Use Next.js provided hook to get the current pathname
  const pathname = usePathname();

  // Return JSX for the component
  return (
    // A navigation bar with a gradient background
    <Disclosure as="nav" className="bg-gradient-to-r from-gray-900 to-gray-800">
      {({ open }) => (
        <>
          <div className="flex justify-between px-8 py-4">
            <div className="text-2xl font-bold text-white">Logo</div>
            <div className="hidden md:flex space-x-8">
              {/* Mapping through the links array to display the links */}
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  {/* Highlight the active link */}
                  <span
                    className={`py-2 text-white cursor-pointer ${
                      pathname === href ? "underline" : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
            {/* Toggling button for displaying the menu on smaller screens */}
            <Disclosure.Button className="md:hidden rounded-lg text-white focus:outline-none focus:shadow-outline">
              {/* Changing icon depending on whether the menu is open */}
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          {/* Panel for displaying the menu on smaller screens */}
          <Disclosure.Panel className="md:hidden">
            <div className="p-4 space-y-4 bg-gradient-to-r from-gray-900 to-gray-800">
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  {/* Highlight the active link */}
                  <span
                    className={`block text-white py-2 cursor-pointer ${
                      pathname === href ? "underline" : ""
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
