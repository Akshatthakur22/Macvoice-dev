import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { polar, POLAR_PRODUCT_ID, POLAR_CHECKOUT_URL } from "@/lib/polar";
import {
  generateDownloadToken,
  generatePurchaseSessionSecret,
  hashPurchaseSession,
} from "@/lib/downloadToken";

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin") || request.headers.get("referer") || "http://localhost:3000";
    const baseUrl = new URL(origin).origin;

    // Cryptographic Session Binding:
    // Generate or retrieve the buyer's private session secret.
    // This cookie stays strictly on the purchasing browser (HttpOnly, Secure)
    // and is hashed and recorded in Polar metadata to prevent link sharing.
    const cookieStore = await cookies();
    let purchaseSecret = cookieStore.get("macvoice_purchase_session")?.value;
    if (!purchaseSecret || purchaseSecret.length < 32) {
      purchaseSecret = generatePurchaseSessionSecret();
      cookieStore.set("macvoice_purchase_session", purchaseSecret, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
    }

    const sessionHash = hashPurchaseSession(purchaseSecret);

    // Check if Polar checkout URL or Polar API is configured
    if (!polar && !POLAR_CHECKOUT_URL) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            error: "Payment provider integration is pending configuration. Please set POLAR_API_KEY and POLAR_PRODUCT_ID.",
          },
          { status: 503 }
        );
      }

      // Development / Test mode only: allows validating full end-to-end UI and download delivery
      const testSessionId = `test_session_${Date.now()}`;
      const testToken = generateDownloadToken(testSessionId, "akshatthakur22@gmail.com", 2);

      return NextResponse.json({
        url: `${baseUrl}/success?checkout_id=${testSessionId}&token=${testToken}&test_mode=true`,
        testMode: true,
      });
    }

    // Direct Polar Checkout link (e.g. https://buy.polar.sh/polar_cl_...)
    if (POLAR_CHECKOUT_URL) {
      try {
        const checkoutUrl = new URL(POLAR_CHECKOUT_URL);
        checkoutUrl.searchParams.set("success_url", `${baseUrl}/success?checkout_id={CHECKOUT_ID}`);
        return NextResponse.json({ url: checkoutUrl.toString() });
      } catch {
        return NextResponse.json({ url: POLAR_CHECKOUT_URL });
      }
    }

    // Programmatically create Polar Checkout Session via Polar SDK with Session Binding
    if (polar && POLAR_PRODUCT_ID) {
      const checkout = await polar.checkouts.create({
        products: [POLAR_PRODUCT_ID],
        success_url: `${baseUrl}/success?checkout_id={CHECKOUT_ID}`,
        return_url: `${baseUrl}/pricing`,
        metadata: {
          product: "macvoice",
          version: "1.0",
          session_hash: sessionHash,
        },
      });

      if (!checkout.url) {
        return NextResponse.json({ error: "Failed to generate Polar checkout session URL" }, { status: 500 });
      }

      return NextResponse.json({ url: checkout.url });
    }

    // Polar configured but missing Product ID
    if (polar && !POLAR_PRODUCT_ID) {
      if (process.env.NODE_ENV !== "production") {
        const testSessionId = `test_session_${Date.now()}`;
        const testToken = generateDownloadToken(testSessionId, "akshatthakur22@gmail.com", 2);
        return NextResponse.json({
          url: `${baseUrl}/success?checkout_id=${testSessionId}&token=${testToken}&test_mode=true`,
          testMode: true,
        });
      }

      return NextResponse.json(
        { error: "POLAR_PRODUCT_ID is missing in environment variables. Please set the product ID from your Polar dashboard." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Payment provider configuration error" },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("Polar Checkout Error:", error);
    const message = error instanceof Error ? error.message : "Internal server error occurred while creating checkout session";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
