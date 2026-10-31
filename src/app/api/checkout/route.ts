import { NextResponse } from "next/server";
import { stripe, MACVOICE_PRICE_USD, MACVOICE_CURRENCY, MACVOICE_PRODUCT_NAME, MACVOICE_PRODUCT_DESCRIPTION } from "@/lib/stripe";
import { generateDownloadToken } from "@/lib/downloadToken";

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin") || request.headers.get("referer") || "http://localhost:3000";
    const baseUrl = new URL(origin).origin;

    // Check if Stripe is configured
    if (!stripe) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            error: "Payment provider integration is pending configuration. Please set STRIPE_SECRET_KEY.",
          },
          { status: 503 }
        );
      }

      // Development / Test mode only: allows validating full end-to-end UI and download delivery
      const testSessionId = `test_session_${Date.now()}`;
      const testToken = generateDownloadToken(testSessionId, "dev@macvoice.app", 2);
      
      return NextResponse.json({
        url: `${baseUrl}/success?session_id=${testSessionId}&token=${testToken}&test_mode=true`,
        testMode: true,
      });
    }

    // Create live or test Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: MACVOICE_CURRENCY,
            product_data: {
              name: MACVOICE_PRODUCT_NAME,
              description: MACVOICE_PRODUCT_DESCRIPTION,
              images: [`${baseUrl}/brand/macvoice-icon-dark-1024.png`],
            },
            unit_amount: MACVOICE_PRICE_USD,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: {
        product: "macvoice",
        version: "1.0",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to generate checkout session URL" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Stripe Checkout Error:", error);
    const message = error instanceof Error ? error.message : "Internal server error occurred while creating checkout session";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
