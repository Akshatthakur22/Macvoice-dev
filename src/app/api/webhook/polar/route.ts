import { NextResponse } from "next/server";
import { webhooks } from "@polar-sh/sdk/2026-10";

/**
 * Polar webhook: verifies the signature and records contributions in the
 * server log. Downloads are free, so nothing is unlocked here.
 */
export async function POST(request: Request) {
  const webhookSecret = process.env.POLAR_WEBHOOK_SECRET?.trim();
  if (!webhookSecret) {
    console.error("POLAR_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "Webhook secret missing" }, { status: 500 });
  }

  const webhookSignature = request.headers.get("webhook-signature") || "";
  if (!webhookSignature) {
    return NextResponse.json({ error: "Missing webhook-signature header" }, { status: 400 });
  }

  try {
    const rawBody = await request.text();
    const event = await webhooks.validateEvent(
      rawBody,
      {
        "webhook-id": request.headers.get("webhook-id") || "",
        "webhook-timestamp": request.headers.get("webhook-timestamp") || "",
        "webhook-signature": webhookSignature,
      },
      webhookSecret
    );

    if (event.type === "order.paid") {
      const order = event.data;
      console.info(`MacVoice contribution received: order ${order.id}, ${order.total_amount / 100} ${order.currency}`);
    } else {
      console.info(`Polar webhook received: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    console.error("Polar webhook verification failed:", error);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 403 });
  }
}
