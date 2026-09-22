import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    label: "Home",
    path: "/",
  },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Newsroom", path: "/newsroom" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { pathname } = useRouter();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleButtonClick = () => {
    openModal();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-slate-900/10 bg-body/95 text-blu backdrop-blur">
        <div className="container mx-auto px-5 md:px-20">
          <div className="flex h-20 items-center justify-between md:h-24">
            <Link href="/" className="w-32 shrink-0 md:w-36" aria-label="Minsol home">
              <img
                src="/images/logo.png"
                className="h-auto w-full object-contain"
                alt="Logo"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {links.map((link, index) => (
                <div key={index} className="relative">
                  <Link
                    href={link.path}
                    aria-current={pathname === link.path ? "page" : undefined}
                    className={`relative py-3 text-sm font-medium tracking-[0.01em] transition-colors after:absolute after:bottom-1 after:left-0 after:h-px after:bg-main after:transition-all ${
                      pathname === link.path
                        ? "text-blu after:w-full"
                        : "text-slate-600 after:w-0 hover:text-blu hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="hidden items-center rounded-sm bg-main px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#51362a] focus-visible:outline-offset-4 md:flex"
            >
              Contact Us
            </button>

            <button
              className="rounded-sm p-2 text-blu transition-colors hover:bg-black/5 lg:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width="24" />
            </button>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-blu p-7 text-white shadow-2xl"
            >
              <button
                className="mb-12 rounded-sm p-2 text-3xl transition-colors hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <Icon icon="mdi:close" />
              </button>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      aria-current={pathname === link.path ? "page" : undefined}
                      className={`block border-b border-white/10 py-4 text-lg transition-colors ${
                        pathname === link.path ? "text-secondary" : "hover:text-secondary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleButtonClick}
                    className="mt-8 rounded-sm bg-secondary px-5 py-3 text-sm font-semibold text-blu"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
