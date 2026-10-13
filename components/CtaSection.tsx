"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { site } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt=""
            width={48}
            height={48}
            className="rounded-full border border-gold/50"
          />
          <span className="font-serif text-xl font-bold text-maroon">{site.name}</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-maroon sm:text-4xl">
          Don&apos;t Wait – Stay Now!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-stone-600">
          Take advantage of exclusive deals and packages designed to elevate your
          stay. Whether it&apos;s a pilgrimage visit, a family vacation, or a
          wedding celebration, we have something just for you.
        </p>
        <a
          href={`tel:${site.phone}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-maroon px-8 py-4 font-serif text-lg font-semibold text-cream shadow-lg shadow-maroon/25 transition hover:bg-maroon-dark"
        >
          {site.phoneDisplay}
          <FiPhone aria-hidden />
        </a>
      </motion.div>
    </section>
  );
}
