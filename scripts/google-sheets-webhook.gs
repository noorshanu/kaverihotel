/**
 * Kaveri Palace — Google Sheets webhook
 * Sheet: https://docs.google.com/spreadsheets/d/1bOYeMdgoe7JIrMMmXWMH_TejkJIXmDvn_G2w198S1X8/
 *
 * 1. Extensions → Apps Script → paste this file
 * 2. Set SHEETS_WEBHOOK_SECRET (same as Vercel env SHEETS_WEBHOOK_SECRET)
 * 3. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
 * 4. Vercel: GOOGLE_SHEETS_WEBHOOK_URL = deployment /exec URL
 */

const SHEETS_WEBHOOK_SECRET = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";

/** Kaveri Palace Leads spreadsheet */
const SPREADSHEET_ID = "1bOYeMdgoe7JIrMMmXWMH_TejkJIXmDvn_G2w198S1X8";

const TAB_BOOKING = "Booking Inquiry";
const TAB_CONTACTS = "Contacts";

const HEADERS = {
  [TAB_BOOKING]: ["Timestamp (IST)", "Name", "Phone", "Check-in", "Check-out", "Source"],
  [TAB_CONTACTS]: ["Timestamp (IST)", "Name", "Phone", "Email", "Message", "Source"],
};

function doGet() {
  return jsonOut({
    ok: true,
    message: "Kaveri Palace webhook is live. Submit forms via POST from the website.",
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({ ok: false, error: "Missing POST body" });
    }

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

function getSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getOrCreateSheet(name) {
  const ss = getSpreadsheet();
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
