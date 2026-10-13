import { NextResponse } from "next/server";
import { isValidPhone, parseJsonBody } from "@/lib/form-api";
import { SHEET_TABS } from "@/lib/sheet-tabs";
import { appendToGoogleSheet } from "@/lib/submit-to-sheet";

type ContactBody = {
  name: string;
  phone: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const record = json && typeof json === "object" ? (json as Record<string, unknown>) : {};

    const { data, error } = parseJsonBody<ContactBody>(json, ["name", "phone", "message"]);
    if (!data || error) {
      return NextResponse.json({ ok: false, error: error ?? "Invalid data" }, { status: 400 });
    }

    if (!isValidPhone(data.phone)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    const emailRaw = record.email;
    const email =
      typeof emailRaw === "string" && emailRaw.trim() ? emailRaw.trim() : "";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await appendToGoogleSheet(SHEET_TABS.CONTACTS, {
      name: data.name,
      phone: data.phone,
      email,
      message: data.message,
      source: "Website Contact Form",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submission failed";
    const status = message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
