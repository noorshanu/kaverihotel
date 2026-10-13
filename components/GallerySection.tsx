"use client";

import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryPlaceholders } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Gallery"
          subtitle="Glimpses of our rooms, celebrations, and hospitality. Replace placeholders with your photos anytime."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPlaceholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-maroon/25 via-gold/20 to-white ring-1 ring-gold/25"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-maroon/70 transition group-hover:scale-105">
                <FiImage size={36} aria-hidden />
                <span className="font-serif text-sm font-semibold">{item.label}</span>
                <span className="text-xs text-stone-500">Photo placeholder</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
