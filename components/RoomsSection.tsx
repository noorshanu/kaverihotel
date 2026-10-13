"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { rooms } from "@/lib/site-data";

export function RoomsSection() {
  return (
    <section id="rooms" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Best Rooms"
          subtitle="Choose from our spacious and well-maintained rooms, designed for families, pilgrims, and groups."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl bg-cream shadow-md shadow-stone-200/80 ring-1 ring-stone-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-12">
                  <h3 className="font-serif text-lg font-bold text-white">{room.name}</h3>
                  <p className="text-xs font-semibold text-gold-light">
                    From ₹{room.price} / N
                  </p>
                </div>
              </div>
              <p className="px-4 py-3 text-sm text-stone-600">{room.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
