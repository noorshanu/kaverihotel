"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BookingForm } from "@/components/BookingForm";
import { heroSlides } from "@/lib/site-data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((i) => (i + 1) % heroSlides.length);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[index].src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[index].src}
              alt={heroSlides[index].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/55 via-maroon/35 to-maroon-dark/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-44 pt-8 text-center sm:px-6 lg:px-8 lg:pb-48">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-serif text-sm uppercase tracking-[0.25em] text-gold-light"
        >
          Welcome to Ayodhya
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="max-w-4xl font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Discover the Timeless Charm of Kaveri Palace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-cream/90 sm:text-lg"
        >
          Premium stays, banquet celebrations, and warm hospitality for pilgrims,
          families, and events.
        </motion.p>

        <div className="absolute bottom-36 left-4 right-4 flex justify-between sm:left-6 sm:right-6 lg:left-8 lg:right-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="rounded-full bg-black/35 p-2 text-cream backdrop-blur transition hover:bg-black/50"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="rounded-full bg-black/35 p-2 text-cream backdrop-blur transition hover:bg-black/50"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        <div className="absolute bottom-28 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-2 bg-cream/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl -translate-y-1/2 px-4 pb-8 sm:px-6 lg:px-8">
        <BookingForm />
      </div>
    </section>
  );
}
