import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";

const links = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Newsroom", path: "/newsroom" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { pathname } = useRouter();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const openContact = () => {
    setIsMenuOpen(false);
    window.setTimeout(openModal, 120);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-body/95 text-blu backdrop-blur-md">
        <div className="site-shell grid h-[76px] grid-cols-[1fr_auto] items-center lg:h-[88px] lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex items-center" aria-label="Minsol home">
            <img src="/images/logo.png" className="h-auto w-28 object-contain lg:w-32" alt="Minsol Limited" />
          </Link>

          <nav className="hidden h-full items-stretch lg:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center px-5 text-[0.9375rem] font-medium transition-colors ${
                    isActive ? "text-blu" : "text-slate-500 hover:text-blu"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-[23px] h-px bg-main transition-all ${isActive ? "w-5" : "w-0 group-hover:w-3"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center">
            <button onClick={openModal} className="hidden border border-main bg-main px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-main lg:inline-flex" aria-label="Contact Minsol">
              Contact us
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-blu lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span>Menu</span>
              <Icon icon="mdi:menu" width="22" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.24 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-body text-blu lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-shell flex min-h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="w-28" aria-label="Minsol home">
                  <img src="/images/logo.png" className="h-auto w-full" alt="Minsol Limited" />
                </Link>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center border border-slate-900/15 text-blu"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <Icon icon="mdi:close" width="24" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-16">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-main">Explore</p>
                <nav aria-label="Mobile primary navigation">
                  <ul>
                    {links.map((link, index) => {
                      const isActive = pathname === link.path;
                      return (
                        <motion.li key={link.path} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.05 + index * 0.045, duration: 0.3 }}>
                          <Link
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-baseline justify-between border-t border-slate-900/15 py-5 text-3xl font-medium tracking-[-0.04em] ${isActive ? "text-main" : "text-blu"}`}
                          >
                            <span>{link.label}</span>
                            <Icon icon="mdi:arrow-up-right" width="20" className="text-main" aria-hidden="true" />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="mt-auto pt-12">
                <div className="border-t border-slate-900/15 pt-6">
                <p className="max-w-[18rem] text-sm leading-6 text-slate-600">Technical, operational, and logistics support for the mineral resources industry.</p>
                <button onClick={openContact} className="mt-5 inline-flex bg-main px-5 py-3 text-sm font-medium text-white">
                  Contact us
                </button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
