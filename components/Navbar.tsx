"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { navLinks, site } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-maroon/20" : ""
      }`}
    >
      <div className="bg-maroon-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#home" className="shrink-0">
            <Image
              src="/logo.jpeg"
              alt={`${site.name} — ${site.tagline}`}
              width={80}
              height={80}
              className="h-16 w-16 rounded-full border-2 border-gold/80 object-cover sm:h-[4.5rem] sm:w-[4.5rem]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-cream/90 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2 text-sm font-semibold text-cream transition hover:border-gold hover:bg-gold/10"
            >
              <FiPhone className="text-gold" aria-hidden />
              Call
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-bold text-maroon-dark transition hover:bg-gold-light"
            >
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/20 bg-maroon-dark md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-cream hover:bg-gold/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-gold/20 pt-4">
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 py-3 font-semibold text-cream"
                >
                  <FiPhone className="text-gold" />
                  Call {site.phoneDisplay}
                </a>
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-gold py-3 font-bold text-maroon-dark"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
