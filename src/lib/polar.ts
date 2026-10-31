import { createPolar } from "@polar-sh/sdk/2026-10";

const polarApiKey = process.env.POLAR_API_KEY;

export const polar = polarApiKey
  ? createPolar({
      accessToken: polarApiKey,
      environment: process.env.POLAR_ENVIRONMENT === "sandbox" ? "sandbox" : "production",
    })
  : null;

export const POLAR_PRODUCT_ID = process.env.POLAR_PRODUCT_ID || "";
export const POLAR_CHECKOUT_URL = process.env.POLAR_CHECKOUT_URL || "";
export const MACVOICE_PRICE_USD = 900; // $9.00 USD in cents
export const MACVOICE_CURRENCY = "usd";
export const MACVOICE_PRODUCT_NAME = "MacVoice for macOS — Lifetime License";
export const MACVOICE_PRODUCT_DESCRIPTION =
  "One-time purchase for macOS 26+. 100% on-device voice typing. All v1.x updates included. Up to 5 of your personal Macs.";

