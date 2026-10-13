import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt={`${site.name} logo`}
              width={64}
              height={64}
              className="rounded-full border-2 border-gold/70"
            />
            <div>
              <p className="font-serif text-xl font-bold">{site.name}</p>
              <p className="text-sm text-gold-light">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/85">
            Premium hotel stays and banquet services in Ayodhya. Comfortable rooms,
            event spaces, and heartfelt hospitality for every guest.
          </p>
        </div>

        <div>
          <p className="font-serif text-lg font-bold text-gold-light">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#banquet" className="hover:text-gold">
                Banquet Hall
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-lg font-bold text-gold-light">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-gold/15 p-2.5 text-gold transition hover:bg-gold hover:text-maroon-dark"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-gold/15 p-2.5 text-gold transition hover:bg-gold hover:text-maroon-dark"
            >
              <FaInstagram />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              aria-label="WhatsApp"
              className="rounded-full bg-gold/15 p-2.5 text-gold transition hover:bg-gold hover:text-maroon-dark"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 py-4 text-center text-xs text-cream/70">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
