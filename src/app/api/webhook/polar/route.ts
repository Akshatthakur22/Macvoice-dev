import { NextResponse } from "next/server";
import { webhooks } from "@polar-sh/sdk/2026-10";
import { generateDownloadToken } from "@/lib/downloadToken";

export async function POST(request: Request) {
  const webhookSecret = process.env.POLAR_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("POLAR_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "Webhook secret missing" }, { status: 500 });
  }

  const webhookId = request.headers.get("webhook-id") || "";
  const webhookTimestamp = request.headers.get("webhook-timestamp") || "";
  const webhookSignature = request.headers.get("webhook-signature") || "";

  if (!webhookSignature) {
    return NextResponse.json({ error: "Missing webhook-signature header" }, { status: 400 });
  }

  try {
    const rawBody = await request.text();

    const event = await webhooks.validateEvent(
      rawBody,
      {
        "webhook-id": webhookId,
        "webhook-timestamp": webhookTimestamp,
        "webhook-signature": webhookSignature,
      },
      webhookSecret
    );

    console.info(`Polar Webhook received: ${event.type}`);

    // 1. Order paid or created
    if (event.type === "order.paid" || event.type === "order.created") {
      const order = event.data;
      const orderId = order.id;
      const customerEmail = order.customer?.email || undefined;

      // Issue tamper-proof 48-hour download token
      const downloadToken = generateDownloadToken(orderId, customerEmail, 48);

      console.info(`Polar payment verified for order ${orderId} (${customerEmail || "anonymous"}). Issued download token.`);
      return NextResponse.json({ received: true, downloadToken });
    }

    // 2. Checkout updated to confirmed/succeeded
    if (event.type === "checkout.updated") {
      const checkout = event.data;
      if (checkout.status === "succeeded" || checkout.status === "confirmed") {
        const checkoutId = checkout.id;
        const customerEmail = checkout.customer_email || undefined;
        const downloadToken = generateDownloadToken(checkoutId, customerEmail, 48);

        console.info(`Polar checkout ${checkoutId} succeeded. Issued download token.`);
        return NextResponse.json({ received: true, downloadToken });
      }
    }

    // 3. Order refunded
    if (event.type === "order.refunded") {
      const order = event.data;
      console.info(`Polar order refunded: ${order.id}`);
      return NextResponse.json({ received: true, refunded: true });
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    if (err instanceof webhooks.PolarWebhookVerificationError) {
      console.error("Polar webhook signature verification failed:", err.message);
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 403 });
    }
    if (err instanceof webhooks.PolarWebhookUnknownTypeError) {
      console.warn("Polar webhook unknown type received:", err.message);
      return NextResponse.json({ received: true, warning: "Unknown type acknowledged" }, { status: 202 });
    }

    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Polar webhook processing error:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }
}
