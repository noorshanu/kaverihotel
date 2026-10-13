"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site-data";

const mapQuery = encodeURIComponent(
  "Kaveri Palace Jaridih Bazar Bokaro Jharkhand 829114",
);

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Location"
          subtitle="Jaridih, Bokaro, Jharkhand — easy access near Jaradih Railway Station."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-2xl border border-gold/25 bg-cream p-6"
          >
            <p className="flex items-start gap-3 text-stone-700">
              <FiMapPin className="mt-1 shrink-0 text-gold-dark" aria-hidden />
              <span>
                <strong className="block text-maroon">{site.name}</strong>
                {site.addressLine}
                <br />
                {site.addressDetail}
              </span>
            </p>
            <p className="flex items-center gap-3 text-stone-700">
              <FiPhone className="shrink-0 text-gold-dark" aria-hidden />
              <span className="flex flex-col gap-1">
                <a href={`tel:${site.phone}`} className="hover:text-maroon">
                  {site.phoneDisplay}
                </a>
                <a href={`tel:${site.phoneAlt}`} className="hover:text-maroon">
                  {site.phoneAltDisplay}
                </a>
              </span>
            </p>
            <p className="flex items-center gap-3 text-stone-700">
              <FaWhatsapp className="shrink-0 text-emerald-700" aria-hidden />
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-maroon"
              >
                WhatsApp {site.phoneAltDisplay}
              </a>
            </p>
            <p className="flex items-center gap-3 text-stone-700">
              <FiMail className="shrink-0 text-gold-dark" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-maroon">
                {site.email}
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl ring-1 ring-stone-200"
          >
            <iframe
              title="Kaveri Palace location map"
              className="h-72 min-h-[288px] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
