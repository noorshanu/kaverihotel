"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site-data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <section id="contact" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Contact Us"
          subtitle="Share your dates, room preference, or event requirements—we'll respond quickly."
        />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="mt-10 space-y-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-stone-100 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-maroon">Name*</span>
              <input required name="name" className={inputClass} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-maroon">Phone*</span>
              <input required name="phone" type="tel" className={inputClass} placeholder="Phone" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-maroon">Email</span>
            <input name="email" type="email" className={inputClass} placeholder="Email (optional)" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-maroon">Message*</span>
            <textarea
              required
              name="message"
              rows={4}
              className={inputClass}
              placeholder="Tell us about your stay or event..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-maroon py-3 font-serif font-bold uppercase tracking-wide text-cream transition hover:bg-maroon-dark sm:w-auto sm:px-10"
          >
            Send Message
          </button>
          {sent ? (
            <p className="text-sm font-medium text-emerald-700" role="status">
              Message received. Call {site.phoneDisplay} or WhatsApp {site.phoneAltDisplay}{" "}
              for urgent bookings.
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
