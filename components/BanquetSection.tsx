"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { banquetSlides, site } from "@/lib/site-data";

export function BanquetSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % banquetSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="banquet" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-gold-dark">
            Events & Celebrations
          </p>
          <h2 className="font-serif text-3xl font-bold text-maroon sm:text-4xl">
            Marriage Lawn & Banquet Hall
          </h2>
          <p className="text-lg text-stone-600">Make your special moments more memorable</p>
          <p className="leading-relaxed text-stone-700">
            Host weddings, receptions, engagements, and family gatherings in our
            elegantly designed banquet space and open lawn. From décor-friendly
            layouts to guest seating and parking, our event team supports you at
            every step.
          </p>
          <Link
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              "Hello, I would like to inquire about the Marriage Lawn & Banquet Hall at Kaveri Palace.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 font-semibold text-maroon-dark transition hover:bg-gold-light"
          >
            Inquiry Now
            <FaWhatsapp size={20} aria-hidden />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={banquetSlides[index].src}
            alt={banquetSlides[index].alt}
            fill
            className="object-cover transition duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <button
            type="button"
            aria-label="Previous banquet photo"
            onClick={() =>
              setIndex((i) => (i - 1 + banquetSlides.length) % banquetSlides.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next banquet photo"
            onClick={() => setIndex((i) => (i + 1) % banquetSlides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white"
          >
            <FiChevronRight />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {banquetSlides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-gold" : "bg-white/60"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
