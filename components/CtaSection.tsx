"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { site } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gold/25"
      >
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
            <div className="mb-5 inline-flex items-center gap-3">
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
            <p className="mt-4 leading-relaxed text-stone-600">
              Call us to check room availability, banquet dates, or to schedule a visit to
              Jarangdih — we respond quickly on phone and WhatsApp.
            </p>
            <div className="mt-8">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-maroon px-8 py-4 font-serif text-lg font-semibold text-cream shadow-lg shadow-maroon/25 transition hover:bg-maroon-dark"
              >
                {site.phoneDisplay}
                <FiPhone aria-hidden />
              </a>
            </div>
          </div>
          <div className="relative min-h-[220px] border-t border-gold/20 bg-cream p-8 sm:p-10 md:min-h-full md:border-l md:border-t-0">
            <div className="flex h-full flex-col justify-center">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-gold-dark">
                Visiting us
              </p>
              <p className="mt-3 font-serif text-2xl font-bold leading-snug text-maroon">
                Near Jarangdih Railway Station
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {site.addressLine}. Landmark: Amar Art. PIN 829114 — Bokaro, Jharkhand.
              </p>
              <Link
                href="#location"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-maroon underline-offset-4 hover:underline"
              >
                Open map &amp; directions
                <FiArrowUpRight aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
