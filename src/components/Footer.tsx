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
  <footer className="bg-blu pt-16 text-white">
    <div className="site-shell grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.35fr_0.7fr_1fr]">
      <div>
        <Link href="/" className="block w-44" aria-label="Minsol home">
        <img
          src="/images/sol.png"
          className="h-auto w-full object-contain"
          alt="Logo"
        />
        </Link>
        <p className="mt-6 max-w-sm text-sm leading-6 text-white/65">
          Technical, operational, and logistics support for the mineral resources industry.
        </p>
        <a
          href="mailto:operationsgh@minsolltd.com"
          className="mt-6 inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm font-semibold text-secondary transition-colors hover:text-white"
        >
          Start a conversation <span aria-hidden="true">→</span>
        </a>
      </div>

      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          Explore
        </h3>
        <ul className="space-y-3 text-sm text-white/75">
          {footerLinks.company.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          Contact
        </h3>
        <ul className="space-y-4 text-sm text-white/75">
          {footerLinks.contact.map((link, index) => (
            <li key={index} className="flex items-start gap-3">
              <Icon icon={link.icon} width="18" className="mt-0.5 shrink-0 text-secondary" />
              {index === 0 ? (
                <a className="transition-colors hover:text-white" href={`mailto:${link.label}`}>
                  {link.label}
                </a>
              ) : index === 1 ? (
                <a className="transition-colors hover:text-white" href="tel:+233302543667">
                  {link.label}
                </a>
              ) : (
                <span>{link.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="site-shell flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Minsol Limited. All rights reserved.</p>
      <p>Accra, Ghana</p>
    </div>
  </footer>
);

export default Footer;
