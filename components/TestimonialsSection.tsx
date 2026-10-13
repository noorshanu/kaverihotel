"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Guest Reviews & Testimonials"
          subtitle="Trusted by families and event hosts across Bokaro and Jharkhand."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-gold/25 bg-cream p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-gold-dark" aria-label={`${item.rating} stars`}>
                {Array.from({ length: item.rating }).map((_, s) => (
                  <FaStar key={s} aria-hidden />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-stone-700">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-5 border-t border-gold/20 pt-4">
                <p className="font-serif font-bold text-maroon">{item.name}</p>
                <p className="text-xs text-stone-500">{item.event}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
