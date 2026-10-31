import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeKey
  ? new Stripe(stripeKey, {
      apiVersion: "2025-02-24.acacia" as Stripe.LatestApiVersion,
      appInfo: {
        name: "MacVoice Website",
        version: "1.0.0",
      },
    })
  : null;

export const MACVOICE_PRICE_USD = 900; // $9.00 in cents
export const MACVOICE_CURRENCY = "usd";
export const MACVOICE_PRODUCT_NAME = "MacVoice for macOS — Lifetime License";
export const MACVOICE_PRODUCT_DESCRIPTION =
  "One-time purchase for macOS 26+. 100% on-device voice typing. All v1.x updates included. Up to 5 of your personal Macs.";
