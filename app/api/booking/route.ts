import { NextResponse } from "next/server";
import { isValidDateString, isValidPhone, parseJsonBody } from "@/lib/form-api";
import { SHEET_TABS } from "@/lib/sheet-tabs";
import { appendToGoogleSheet } from "@/lib/submit-to-sheet";

type BookingBody = {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
};

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const { data, error } = parseJsonBody<BookingBody>(json, [
      "name",
      "phone",
      "checkIn",
      "checkOut",
    ]);
    if (!data || error) {
      return NextResponse.json({ ok: false, error: error ?? "Invalid data" }, { status: 400 });
    }

    if (!isValidPhone(data.phone)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    if (!isValidDateString(data.checkIn) || !isValidDateString(data.checkOut)) {
      return NextResponse.json(
        { ok: false, error: "Please select valid check-in and check-out dates." },
        { status: 400 },
      );
    }

    if (data.checkOut <= data.checkIn) {
      return NextResponse.json(
        { ok: false, error: "Check-out must be after check-in." },
        { status: 400 },
      );
    }

    await appendToGoogleSheet(SHEET_TABS.BOOKING, {
      name: data.name,
      phone: data.phone,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      source: "Website Hero Form",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submission failed";
    const status = message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
