import { createPolar } from "@polar-sh/sdk/2026-10";

const polarApiKey = process.env.POLAR_API_KEY?.trim();

export const polar = polarApiKey
  ? createPolar({
      accessToken: polarApiKey,
      environment: process.env.POLAR_ENVIRONMENT?.trim() === "sandbox" ? "sandbox" : "production",
    })
  : null;

export const POLAR_PRODUCT_ID = process.env.POLAR_PRODUCT_ID?.trim() || "";
export const POLAR_CHECKOUT_URL = process.env.POLAR_CHECKOUT_URL?.trim() || "";
