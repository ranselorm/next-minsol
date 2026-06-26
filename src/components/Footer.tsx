import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Products", url: "/products" },
  ],
  socialMedia: [
    {
      label: "Instagram",
      icon: "iconoir:instagram",
      url: "https://instagram.com",
    },
    { label: "LinkedIn", icon: "circum:linkedin", url: "#" },
    { label: "Twitter", icon: "pajamas:twitter", url: "#" },
    { label: "Facebook", icon: "circum:facebook", url: "#" },
  ],
  contact: [
    { label: "operationsgh@minsolltd.com", icon: "mdi-light:email" },
    {
      label: "+233 30 254 3667",
      icon: "mdi-light:phone",
    },
    {
      label: "4 Apple Avenue",
      icon: "fluent:street-sign-24-regular",
    },
    {
      label: "East Legon, Accra",
      icon: "iconoir:city",
    },
  ],
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-8 px-4 md:px-28">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <Link href="/" className="md:w-full h-20">
        <img
          src="/images/sol.png"
          className="w-full h-full object-cover"
          alt="Logo"
        />
      </Link>

      <div>
        <h3 className="text-lg font-semibold mb-4">Popular Links</h3>
        <ul className="space-y-2">
          {footerLinks.company.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="hover:text-gray-300 flex items-center"
              >
                {link.label}{" "}
                <Icon icon="mdi:arrow-right" width="16" className="ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          {footerLinks.contact.map((link, index) => (
            <li key={index} className="flex">
              <Icon icon={link.icon} width="20" className="mr-2" />
              <p className="hover:text-gray-300 flex items-center">
                {link.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © 2026 Minsol. All rights reserved.
    </div>
  </footer>
);

export default Footer;
