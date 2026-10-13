"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-cream" : "text-maroon"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/85" : "text-stone-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden
      />
    </motion.div>
  );
}
