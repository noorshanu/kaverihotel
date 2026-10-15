# Connect forms to Google Sheets (CTO / technical setup)

Website forms write to one Google Spreadsheet with **two tabs**:

| Form on site | API route | Sheet tab |
|--------------|-----------|-----------|
| Hero booking (name, phone, dates) | `POST /api/booking` | **Booking Inquiry** |
| Contact Us section | `POST /api/contact` | **Contacts** |

---

## Architecture

```
Browser → Next.js API (/api/booking or /api/contact)
       → Google Apps Script Web App (secret check)
       → Google Sheet (append row to correct tab)
```

The Google Script URL and secret **never** go in the browser — only server environment variables.

---

## Step 1 — Google Sheet

**Production sheet:** [Kaveri Palace Leads](https://docs.google.com/spreadsheets/d/1bOYeMdgoe7JIrMMmXWMH_TejkJIXmDvn_G2w198S1X8/edit)  
Spreadsheet ID: `1bOYeMdgoe7JIrMMmXWMH_TejkJIXmDvn_G2w198S1X8` (already set in `scripts/google-sheets-webhook.gs`).

1. Open the sheet above (or create a new one and update `SPREADSHEET_ID` in the script).
2. Name it e.g. `Kaveri Palace Leads`.
3. (Optional) Rename or create tabs exactly:
   - `Booking Inquiry`
   - `Contacts`  
   If tabs are missing, the Apps Script creates them on first submission.

---

## Step 2 — Apps Script

1. In the spreadsheet: **Extensions → Apps Script**.
2. Delete default code and paste contents of  
   `scripts/google-sheets-webhook.gs` from this repo.
3. Set `SHEETS_WEBHOOK_SECRET` at the top to a long random string (e.g. 32+ chars).  
   **Save** the project.

---

## Step 3 — Deploy web app

1. **Deploy → New deployment**.
2. Type: **Web app**.
3. **Execute as:** Me (your Google account).
4. **Who has access:** Anyone (anonymous callers can POST; protected by secret in JSON body).
5. **Deploy** → authorize when prompted.
6. Copy the **Web app URL** (must end with `/exec`).

**Current deployment URL (production):**

`https://script.google.com/macros/s/AKfycbz6CnvE21Kr1r74SHypcHUODERFanC3_ShW23qADLmqB_sEB9V00TS8bXjFrUfkBSqa/exec`

Opening that link in a browser should show `{"ok":true,...}` after you add `doGet` and redeploy.  
`Script function not found: doGet` means you need to paste the latest script from the repo and **Deploy → New deployment**.

---

## Step 4 — Environment variables (Vercel / server)

Add to **Vercel → Project → Settings → Environment Variables** (and `.env.local` for local dev):

| Variable | Value |
|----------|--------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | Web app URL from Step 3 |
| `SHEETS_WEBHOOK_SECRET` | Same string as in Apps Script |

Redeploy the site after saving env vars.

Local dev:

```bash
cp env.example .env.local
# fill in values, then:
npm run dev
```

---

## Step 5 — Test

**Booking**

```bash
curl -s -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","phone":"9876543210","checkIn":"2026-11-01","checkOut":"2026-11-03"}'
```

**Contact**

```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"9876543210","email":"test@example.com","message":"Hello"}'
```

Expect `{"ok":true}` and a new row in the correct tab (timestamp in IST).

If you see `503` and “not configured”, env vars are missing on that environment.

---

## Step 6 — Access for team

- Share the Google Sheet with staff (Viewer or Editor).
- Optional: email notifications via Apps Script `MailApp` on append (custom addition).
- Optional: connect Sheet to Looker Studio for dashboards.

---

## Security notes

- Rotate `SHEETS_WEBHOOK_SECRET` if leaked; update Script + Vercel together.
- Do not commit `.env.local` (already gitignored).
- Apps Script “Anyone” access is normal for webhooks; security relies on the shared secret.

---

## Repo reference

| File | Purpose |
|------|---------|
| `app/api/booking/route.ts` | Validates booking, writes **Booking Inquiry** |
| `app/api/contact/route.ts` | Validates contact, writes **Contacts** |
| `lib/submit-to-sheet.ts` | Server → Google webhook |
| `lib/sheet-tabs.ts` | Tab name constants |
| `scripts/google-sheets-webhook.gs` | Paste into Google Apps Script |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 401 / Unauthorized from script | Secret mismatch between Script and `SHEETS_WEBHOOK_SECRET` |
| Unknown tab | Tab names must be exactly `Booking Inquiry` and `Contacts` |
| Rows not appearing | Redeploy Apps Script after code changes; use new deployment version |
| Works locally, not production | Set env vars on Vercel and redeploy |

For help, contact whoever manages hosting (Vercel) and the Google Workspace account that owns the Sheet.
