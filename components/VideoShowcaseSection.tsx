"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMapPin, FiPhone, FiVolume2, FiVolumeX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { showcaseVideos, site } from "@/lib/site-data";

const SLIDE_MS = 12000;

export function VideoShowcaseSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = showcaseVideos[index];

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + showcaseVideos.length) % showcaseVideos.length),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % showcaseVideos.length),
    [],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.load();
    void video.play().catch(() => {});
  }, [index, muted]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, next, index]);

  return (
    <section id="highlights" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="See Kaveri Palace"
          subtitle="Recent footage from our hotel and wedding venue in Jarangdih, Bokaro."
        />

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="order-2 flex flex-col justify-center gap-6 lg:order-1"
          >
            <div className="rounded-2xl border border-gold/30 bg-white p-5 shadow-sm">
              <p className="font-serif text-lg font-bold text-maroon">{site.name}</p>
              <p className="mt-1 text-sm text-stone-600">{site.tagline}</p>
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-stone-600">
                <FiMapPin className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
                <span>
                  {site.addressLine}
                  <br />
                  {site.addressDetail}
                </span>
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-gold/20 bg-white p-5 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold text-maroon sm:text-2xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {active.description}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {active.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-snug text-stone-700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              {[
                { label: "Room types", value: "4 categories" },
                { label: "Events", value: "Banquet + lawn" },
                { label: "City", value: "Bokaro" },
                { label: "State", value: "Jharkhand" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gold/25 bg-white px-3 py-3 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-dark">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-maroon">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-maroon-dark"
              >
                <FiPhone aria-hidden />
                {site.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-white px-5 py-2.5 text-sm font-semibold text-maroon transition hover:bg-gold/10"
              >
                WhatsApp
                <FaWhatsapp aria-hidden />
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-gold/40"
              >
                Enquiry form
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 flex flex-col items-center justify-center lg:order-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative w-full max-w-[min(100%,340px)]">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-stone-900 shadow-xl shadow-stone-400/30 ring-2 ring-gold/35">
                <div className="relative aspect-[9/16] max-h-[min(72svh,580px)] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0"
                    >
                      <video
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted={muted}
                        playsInline
                        preload="auto"
                        src={active.src}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="absolute right-3 top-3 z-10 rounded-full bg-black/45 p-2.5 text-cream backdrop-blur transition hover:bg-black/60"
                  >
                    {muted ? (
                      <FiVolumeX size={20} aria-hidden />
                    ) : (
                      <FiVolume2 size={20} aria-hidden />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={prev}
                aria-label="Previous video"
                className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-white p-2.5 text-maroon shadow-md transition hover:bg-cream sm:-left-5"
              >
                <FiChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next video"
                className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-white p-2.5 text-maroon shadow-md transition hover:bg-cream sm:-right-5"
              >
                <FiChevronRight size={22} />
              </button>
            </div>

            <div className="mt-6 flex gap-2">
              {showcaseVideos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Video ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-stone-400/80 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
