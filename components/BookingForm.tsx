"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiPhone, FiUser } from "react-icons/fi";

type SubmitState = "idle" | "loading" | "success" | "error";

export function BookingForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          checkIn: fd.get("checkIn"),
          checkOut: fd.get("checkOut"),
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Could not submit booking. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-gold focus:ring-2 focus:ring-gold/25 disabled:opacity-60";

  const labelClass =
    "mb-1 flex items-center gap-1.5 font-serif text-xs font-semibold text-maroon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="mx-auto w-full rounded-2xl bg-white p-4 shadow-2xl shadow-maroon/30 sm:p-5 md:p-6"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:flex-row md:items-end md:gap-3"
      >
        <div className="grid grid-cols-2 gap-3 md:contents">
          <label className="block md:flex-1">
            <span className={labelClass}>
              <FiUser className="text-gold" aria-hidden />
              Name*
            </span>
            <input
              required
              name="name"
              type="text"
              placeholder="Your full name"
              className={fieldClass}
              disabled={state === "loading"}
            />
          </label>
          <label className="block md:flex-1">
            <span className={labelClass}>
              <FiPhone className="text-gold" aria-hidden />
              Phone*
            </span>
            <input
              required
              name="phone"
              type="tel"
              placeholder="Mobile number"
              className={fieldClass}
              disabled={state === "loading"}
            />
          </label>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:contents md:flex-[2] md:grid md:grid-cols-3 md:gap-3">
          <label className="block">
            <span className={`${labelClass} text-[10px] sm:text-xs`}>
              <FiCalendar className="text-gold" aria-hidden />
              Check-in*
            </span>
            <input
              required
              name="checkIn"
              type="date"
              className={fieldClass}
              disabled={state === "loading"}
            />
          </label>
          <label className="block">
            <span className={`${labelClass} text-[10px] sm:text-xs`}>
              <FiCalendar className="text-gold" aria-hidden />
              Check-out*
            </span>
            <input
              required
              name="checkOut"
              type="date"
              className={fieldClass}
              disabled={state === "loading"}
            />
          </label>
          <div className="flex items-end md:col-span-1">
            <button
              type="submit"
              disabled={state === "loading"}
              className="h-[42px] w-full rounded-xl bg-maroon px-3 font-serif text-xs font-bold uppercase tracking-wide text-cream transition hover:bg-maroon-dark disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm md:px-4"
            >
              {state === "loading" ? "Sending…" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {state === "success" ? (
        <p className="mt-3 text-center text-sm font-medium text-emerald-700" role="status">
          Thank you! Our team will confirm your booking shortly.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="mt-3 text-center text-sm font-medium text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </motion.div>
  );
}
