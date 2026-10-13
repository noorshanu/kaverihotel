/** Google Sheet tab names — must match tabs in your spreadsheet & Apps Script */
export const SHEET_TABS = {
  BOOKING: "Booking Inquiry",
  CONTACTS: "Contacts",
} as const;

export type SheetTabName = (typeof SHEET_TABS)[keyof typeof SHEET_TABS];
