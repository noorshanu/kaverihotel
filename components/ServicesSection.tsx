"use client";

import { motion } from "framer-motion";
import {
  FaBed,
  FaBell,
  FaCar,
  FaCheck,
  FaShieldAlt,
  FaUsers,
  FaWifi,
} from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCategories } from "@/lib/site-data";

const iconMap = {
  bell: FaBell,
  bed: FaBed,
  wifi: FaWifi,
  shield: FaShieldAlt,
  users: FaUsers,
  car: FaCar,
} as const;

export function ServicesSection() {
  return (
    <section id="amenities" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Our Best Services" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-100 transition hover:ring-gold/40"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gold/15 p-3 text-maroon">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <FaCheck className="mt-0.5 shrink-0 text-emerald-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
