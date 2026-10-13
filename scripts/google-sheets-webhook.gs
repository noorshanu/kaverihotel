/**
 * Kaveri Palace — Google Sheets webhook
 *
 * 1. Create a Google Sheet with tabs: "Booking Inquiry" and "Contacts" (or let script create them)
 * 2. Extensions → Apps Script → paste this file
 * 3. Set SHEETS_WEBHOOK_SECRET below (same value as server env SHEETS_WEBHOOK_SECRET)
 * 4. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
 * 5. Copy deployment URL → GOOGLE_SHEETS_WEBHOOK_URL on Vercel / server
 */

const SHEETS_WEBHOOK_SECRET = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";

const TAB_BOOKING = "Booking Inquiry";
const TAB_CONTACTS = "Contacts";

const HEADERS = {
  [TAB_BOOKING]: ["Timestamp (IST)", "Name", "Phone", "Check-in", "Check-out", "Source"],
  [TAB_CONTACTS]: ["Timestamp (IST)", "Name", "Phone", "Email", "Message", "Source"],
};

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (!body.secret || body.secret !== SHEETS_WEBHOOK_SECRET) {
      return jsonOut({ ok: false, error: "Unauthorized" });
    }

    const tab = body.tab;
    const row = body.row || {};
    if (!tab || !HEADERS[tab]) {
      return jsonOut({ ok: false, error: "Unknown tab: " + tab });
    }

    const sheet = getOrCreateSheet(tab);
    ensureHeaderRow(sheet, tab);

    const timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "yyyy-MM-dd HH:mm:ss",
    );

    if (tab === TAB_BOOKING) {
      sheet.appendRow([
        timestamp,
        row.name || "",
        row.phone || "",
        row.checkIn || "",
        row.checkOut || "",
        row.source || "Website",
      ]);
    } else if (tab === TAB_CONTACTS) {
      sheet.appendRow([
        timestamp,
        row.name || "",
        row.phone || "",
        row.email || "",
        row.message || "",
        row.source || "Website",
      ]);
    }

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function getOrCreateSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function ensureHeaderRow(sheet, tab) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS[tab]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS[tab].length).setFontWeight("bold");
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
