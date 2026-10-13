import type { SheetTabName } from "@/lib/sheet-tabs";

export type SheetRow = Record<string, string>;

type WebhookResponse = { ok: true } | { ok: false; error?: string };

export async function appendToGoogleSheet(tab: SheetTabName, row: SheetRow) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) {
    throw new Error(
      "Google Sheets webhook is not configured. Set GOOGLE_SHEETS_WEBHOOK_URL on the server.",
    );
  }

  const secret = process.env.SHEETS_WEBHOOK_SECRET ?? "";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, tab, row }),
    cache: "no-store",
  });

  let body: WebhookResponse | null = null;
  try {
    body = (await response.json()) as WebhookResponse;
  } catch {
    body = null;
  }

  if (!response.ok || !body?.ok) {
    const message =
      body && "error" in body && body.error
        ? body.error
        : `Sheet webhook failed (${response.status})`;
    throw new Error(message);
  }
}
