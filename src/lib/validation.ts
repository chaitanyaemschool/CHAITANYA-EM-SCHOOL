/** Shared, framework-free validators for public forms. */

/** Strips spaces, dashes, brackets and a leading +91 / 0 from an Indian mobile number. */
export function normalizeMobile(raw: string): string {
  let v = String(raw ?? "").replace(/[\s()\-.]/g, "");
  if (v.startsWith("+91")) v = v.slice(3);
  else if (v.startsWith("0091")) v = v.slice(4);
  else if (v.startsWith("91") && v.length === 12) v = v.slice(2);
  if (v.startsWith("0") && v.length === 11) v = v.slice(1);
  return v;
}

/** Valid Indian mobile: exactly 10 digits starting 6-9. */
export function isValidMobile(raw: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizeMobile(raw));
}

export function isValidEmail(raw: string): boolean {
  const v = String(raw ?? "").trim();
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v) && v.length <= 254;
}

export function isValidName(raw: string): boolean {
  const v = String(raw ?? "").trim();
  return v.length >= 2 && v.length <= 80;
}
