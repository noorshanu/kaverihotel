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

  const slideDots = (
    <div className="flex gap-2">
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
  );

  return (
    <section id="home" className="scroll-mt-0 bg-cream pt-24 md:bg-transparent md:pb-0">
      {/* ——— Mobile: banner + form stack ——— */}
      <div className="md:hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-maroon-dark shadow-lg ring-1 ring-gold/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[index].src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[index].src}
                  alt={heroSlides[index].alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-dark/75 via-transparent to-maroon-dark/25" />

            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-cream backdrop-blur"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-cream backdrop-blur"
            >
              <FiChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">{slideDots}</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-center"
          >
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-gold-dark">
              Welcome to Ayodhya
            </p>
            <h1 className="mt-2 font-serif text-2xl font-bold leading-snug text-maroon sm:text-3xl">
              Discover the Timeless Charm of Kaveri Palace
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
              Premium stays, banquet celebrations, and warm hospitality for pilgrims,
              families, and events.
            </p>
          </motion.div>

          <div className="mt-5 pb-6">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* ——— Desktop: form anchored to bottom edge, half over next section ——— */}
      <div className="relative hidden md:block">
        <div className="relative min-h-[calc(100svh-6rem)] overflow-visible">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[index].src}
                initial={{ opacity: 0, scale: 1.03 }}
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
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/55 via-maroon/25 to-maroon-dark/90" />
          </div>

          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] flex-col items-center justify-center px-6 pb-28 text-center lg:px-8">
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
              className="max-w-4xl font-serif text-4xl font-bold leading-tight text-cream lg:text-5xl xl:text-6xl"
            >
              Discover the Timeless Charm of Kaveri Palace
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg text-cream/90"
            >
              Premium stays, banquet celebrations, and warm hospitality for pilgrims,
              families, and events.
            </motion.p>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 lg:px-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="pointer-events-auto rounded-full bg-black/35 p-2 text-cream backdrop-blur transition hover:bg-black/50"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="pointer-events-auto rounded-full bg-black/35 p-2 text-cream backdrop-blur transition hover:bg-black/50"
            >
              <FiChevronRight size={22} />
            </button>
          </div>

          <div className="absolute bottom-[5.5rem] left-1/2 z-20 -translate-x-1/2 lg:bottom-[6rem]">
            {slideDots}
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
