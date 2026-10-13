"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCreditCard, FaGem, FaHeart, FaPercent } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutInitiatives,
  aboutQuote,
  owner,
  site,
} from "@/lib/site-data";

const initiativeIcons = {
  discount: FaPercent,
  emi: FaCreditCard,
  celebration: FaGem,
  palace: FaHeart,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream px-4 pb-20 pt-10 sm:px-6 md:pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Kaveri Palace"
          subtitle="A trusted wedding venue and hotel in Jaridih, Bokaro, Jharkhand — where hospitality meets heart."
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-gold/40 bg-white px-6 py-5 text-center shadow-sm"
        >
          <p className="font-serif text-lg font-semibold leading-relaxed text-maroon sm:text-xl">
            &ldquo;{aboutQuote}&rdquo;
          </p>
        </motion.blockquote>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-maroon/10"
          >
            <Image
              src="/images/banner/Kaveri Palace Wedding Venue Banner.png"
              alt="Kaveri Palace wedding venue"
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
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-dark">
              A message from {owner.name}
            </p>
            <p className="text-lg leading-relaxed">
              Greetings! I am <strong className="text-maroon">{owner.name}</strong>,{" "}
              {owner.role}. I believe every daughter&apos;s wedding is a sacred and
              grand celebration — and financial constraints should never stand in the
              way of her dream.
            </p>
            <p className="leading-relaxed">
              With that commitment, Kaveri Palace introduces a unique initiative for
              families in Jharkhand and beyond: meaningful support on wedding bookings,
              flexible payment options, and a team that treats your celebration as our
              own. Our mission is not only to offer a venue, but to turn your
              daughter&apos;s special day into a timeless memory.
            </p>
            <p className="leading-relaxed">
              Let&apos;s make this historic celebration possible together — at{" "}
              <strong className="text-maroon">Kaveri Palace</strong>, where dreams come
              true.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {aboutInitiatives.map((item, i) => {
            const Icon = initiativeIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex h-full flex-col rounded-2xl border border-gold/25 bg-white p-6 shadow-sm transition hover:border-gold/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-maroon/10 p-3 text-maroon">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-serif text-lg font-bold text-maroon">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gold/20"
        >
          <div className="grid md:grid-cols-[minmax(0,280px)_1fr]">
            <div className="relative aspect-square min-h-[240px] md:aspect-auto md:min-h-full">
              <Image
                src={owner.image}
                alt={owner.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-gold-dark">
                We welcome you
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-maroon sm:text-3xl">
                {owner.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-stone-500">{owner.role}</p>
              <p className="mt-4 leading-relaxed text-stone-700">
                It is my honour to host you at Kaveri Palace. Whether you are planning
                a daughter&apos;s wedding, a family function, or a comfortable stay in
                Bokaro, our team is here to guide you with warmth and transparency.
                Visit us, call us, or message on WhatsApp — we look forward to serving
                you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phone}`}
                  className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-maroon-dark"
                >
                  Call {site.phoneDisplay}
                </a>
                <Link
                  href="#contact"
                  className="rounded-full border border-gold bg-cream px-5 py-2.5 text-sm font-semibold text-maroon transition hover:bg-gold/15"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
