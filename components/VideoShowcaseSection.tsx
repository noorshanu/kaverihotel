"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiVolume2, FiVolumeX } from "react-icons/fi";
import { SectionHeading } from "@/components/SectionHeading";
import { showcaseVideos } from "@/lib/site-data";

const SLIDE_MS = 9000;

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
    <section id="highlights" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Glimpses in Motion"
          subtitle="Vertical clips from Kaveri Palace — use arrows or wait for the slider to move."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-serif text-2xl font-bold text-maroon sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">{active.description}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 flex flex-col items-center lg:order-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative w-full max-w-[min(100%,320px)]">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-stone-900 shadow-xl shadow-stone-300/80 ring-2 ring-gold/35">
                <div className="relative aspect-[9/16] max-h-[min(70svh,560px)] w-full">
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
                className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-cream p-2.5 text-maroon shadow-md transition hover:bg-gold/15 sm:-left-5"
              >
                <FiChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next video"
                className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/40 bg-cream p-2.5 text-maroon shadow-md transition hover:bg-gold/15 sm:-right-5"
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
                    i === index ? "w-8 bg-gold" : "w-2 bg-stone-300 hover:bg-gold/60"
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
