import { NextResponse } from "next/server";
import { polar, POLAR_PRODUCT_ID, POLAR_CHECKOUT_URL } from "@/lib/polar";
import { isValidSupportAmount, SUPPORT_MAX_USD, SUPPORT_MIN_USD } from "@/lib/support";

/**
 * Starts a one-time contribution checkout on Polar.
 * Body: { amount: number } in whole USD (3–500).
 *
 * The amount is applied when the Polar product uses a "pay what you want"
 * (custom) price. If the product still has a fixed price, Polar charges that
 * price and the chosen amount is ignored, so checkout never breaks.
 */

let priceTypeCache: { type: "custom" | "fixed" | "unknown"; at: number } | null = null;

async function productPriceType(): Promise<"custom" | "fixed" | "unknown"> {
  if (!polar || !POLAR_PRODUCT_ID) return "unknown";
  if (priceTypeCache && Date.now() - priceTypeCache.at < 5 * 60 * 1000) return priceTypeCache.type;
  try {
    const product = await polar.products.get(POLAR_PRODUCT_ID);
    const active = product.prices.find((p) => !p.is_archived);
    const type = active?.amount_type === "custom" ? "custom" : active ? "fixed" : "unknown";
    priceTypeCache = { type, at: Date.now() };
    return type;
  } catch (err) {
    console.error("Could not read Polar product price type:", err);
    return "unknown";
  }
}

function baseUrlFor(request: Request) {
  let base = process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://macvoice.akshatt.in";
  try {
    const origin = request.headers.get("origin") || request.headers.get("referer");
    if (origin) base = new URL(origin).origin;
  } catch {
    // keep configured base
  }
  return base;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const amount = body?.amount;
    if (!isValidSupportAmount(amount)) {
      return NextResponse.json(
        { error: `Please choose a whole amount between $${SUPPORT_MIN_USD} and $${SUPPORT_MAX_USD}.` },
        { status: 400 }
      );
    }

    const baseUrl = baseUrlFor(request);
    const successUrl = `${baseUrl}/success?checkout_id={CHECKOUT_ID}`;

    // No payment provider configured
    if (!polar && !POLAR_CHECKOUT_URL) {
      if (process.env.NODE_ENV !== "production") {
        // Local development: walk through the thank-you page without paying.
        return NextResponse.json({ url: `${baseUrl}/success?test_mode=1`, testMode: true });
      }
      return NextResponse.json({ error: "Contributions are temporarily unavailable." }, { status: 503 });
    }

    // A fixed Polar checkout link (can't carry a custom amount)
    if (POLAR_CHECKOUT_URL) {
      const link = new URL(POLAR_CHECKOUT_URL);
      link.searchParams.set("success_url", successUrl);
      return NextResponse.json({ url: link.toString() });
    }

    if (!POLAR_PRODUCT_ID) {
      return NextResponse.json({ error: "Contributions are temporarily unavailable." }, { status: 503 });
    }

    const priceType = await productPriceType();
    const checkout = await polar!.checkouts.create({
      products: [POLAR_PRODUCT_ID],
      ...(priceType === "custom" ? { amount: amount * 100 } : {}),
      success_url: successUrl,
      return_url: baseUrl,
      metadata: { product: "macvoice", kind: "contribution", chosen_usd: amount },
    });

    if (!checkout.url) {
      return NextResponse.json({ error: "Couldn't start checkout. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ url: checkout.url, amountApplied: priceType === "custom" });
  } catch (error: unknown) {
    console.error("Polar checkout error:", error);
    return NextResponse.json({ error: "Couldn't start checkout. Please try again." }, { status: 500 });
  }
}
