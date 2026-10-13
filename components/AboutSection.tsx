"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Kaveri Palace"
          subtitle="A trusted name for comfortable stays and memorable celebrations in the holy city of Ayodhya."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-maroon/10"
          >
            <Image
              src="/images/banner/Kaveri Palace Wedding Venue Banner.png"
              alt="Kaveri Palace venue"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-stone-700"
          >
            <p className="text-lg leading-relaxed">
              Kaveri Palace blends royal Indian hospitality with modern comfort.
              Whether you are visiting for darshan, hosting a wedding, or planning
              a family function, our team ensures a seamless experience from
              check-in to celebration.
            </p>
            <p className="leading-relaxed">
              With well-appointed rooms, attentive guest services, and a spacious
              marriage lawn & banquet hall, we are designed to serve pilgrims,
              tourists, and event hosts with equal care.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Near major Ayodhya landmarks",
                "Banquet & lawn for 500+ guests",
                "AC & non-AC room options",
                "Dedicated event coordination",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-gold/30 bg-white px-4 py-3 text-sm font-medium text-maroon"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
