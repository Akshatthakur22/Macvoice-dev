/**
 * MacVoice is free. People who love it can back it with a one-time
 * contribution. Single source of truth for amounts and perks, used by the
 * site UI and validated again by /api/checkout.
 *
 * Keep the paid floor at $3: below that, payment fees take most of it.
 */
export const SUPPORT_MIN_USD = 3;
export const SUPPORT_MAX_USD = 500;
export const SUPPORT_SUGGESTED_USD = 9;
export const SUPPORT_TIERS: { usd: number; label: string }[] = [
  { usd: 5, label: "Thanks" },
  { usd: 9, label: "Early supporter" },
  { usd: 19, label: "Patron" },
];

/** What supporters get. Every line here must stay true. */
export const SUPPORTER_PERKS = [
  "Any future MacVoice Pro features, free",
  "Early builds before public release",
  "A direct line to the developer",
];

export function isValidSupportAmount(usd: unknown): usd is number {
  return (
    typeof usd === "number" &&
    Number.isInteger(usd) &&
    usd >= SUPPORT_MIN_USD &&
    usd <= SUPPORT_MAX_USD
  );
}
