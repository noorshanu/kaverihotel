"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Gallery"
          subtitle="Photos of our rooms and banquet spaces at Kaveri Palace, Bokaro."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-maroon-dark/10 ring-1 ring-gold/25"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                  {item.category}
                </span>
                <p className="font-serif text-sm font-bold text-white">{item.label}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
