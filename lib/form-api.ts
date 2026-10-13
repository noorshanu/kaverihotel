const PHONE_MIN = 10;
const PHONE_MAX = 15;

export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= PHONE_MIN && digits.length <= PHONE_MAX;
}

export function isValidDateString(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00`);
  return !Number.isNaN(d.getTime());
}

export function parseJsonBody<T extends Record<string, unknown>>(
  body: unknown,
  keys: (keyof T)[],
): { data: T | null; error: string | null } {
  if (!body || typeof body !== "object") {
    return { data: null, error: "Invalid request body" };
  }
  const record = body as Record<string, unknown>;
  const data = {} as T;
  for (const key of keys) {
    const val = record[key as string];
    if (typeof val !== "string" || !val.trim()) {
      return { data: null, error: `Missing or invalid field: ${String(key)}` };
    }
    (data as Record<string, string>)[key as string] = val.trim();
  }
  return { data, error: null };
}
