import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { polar } from "@/lib/polar";
import {
  hashPurchaseSession,
  generatePurchaseSessionSecret,
  generateDownloadTicket,
  maskEmail,
  getDownloadQuota,
  checkEmailAttemptRateLimit,
  recordFailedEmailAttempt,
  resetEmailAttempts,
} from "@/lib/downloadToken";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const checkoutId = typeof body.checkout_id === "string" ? body.checkout_id.trim() : "";
    const emailVerification = typeof body.email_verification === "string" ? body.email_verification.trim() : "";

    if (!checkoutId) {
      return NextResponse.json(
        { authorized: false, error: "Missing checkout ID. Valid checkout is required." },
        { status: 400 }
      );
    }

    // 1. Development / Test session support
    if (
      process.env.NODE_ENV !== "production" &&
      (checkoutId.startsWith("test_session_") || checkoutId.startsWith("test_"))
    ) {
      const ticket = generateDownloadTicket(checkoutId, "akshatthakur22@gmail.com", 15);
      return NextResponse.json({
        authorized: true,
        downloadUrl: `/api/download?ticket=${ticket}`,
        remainingDownloads: 10,
        expiresInMinutes: 15,
        isTestMode: true,
        purchaserEmail: "akshatthakur22@gmail.com",
      });
    }

    if (!polar) {
      return NextResponse.json(
        { authorized: false, error: "Payment verification service is unavailable." },
        { status: 503 }
      );
    }

    // 2. Fetch checkout directly from Polar to verify genuine payment status
    let checkout;
    try {
      checkout = await polar.checkouts.get(checkoutId);
    } catch (err: unknown) {
      console.error("Failed to retrieve checkout from Polar:", err);
      return NextResponse.json(
        { authorized: false, error: "Invalid checkout session. No matching purchase record found on Polar." },
        { status: 404 }
      );
    }

    const isPaid = checkout.status === "succeeded" || checkout.status === "confirmed";
    if (!isPaid) {
      return NextResponse.json(
        {
          authorized: false,
          error: `Payment is not completed. Current status: ${checkout.status}. A successful purchase is required to download.`,
        },
        { status: 403 }
      );
    }

    // Extract customer email recorded by Polar
    const customerEmail = (checkout.customer_email || "").trim().toLowerCase();

    // 3. Anti-Link-Sharing & Device Verification
    const cookieStore = await cookies();
    const purchaseSecret = cookieStore.get("macvoice_purchase_session")?.value;
    const cookieHash = purchaseSecret ? hashPurchaseSession(purchaseSecret) : null;
    const polarSessionHash =
      typeof checkout.metadata?.session_hash === "string" ? checkout.metadata.session_hash : null;

    let isDeviceVerified = false;

    // Check if current browser holds the exact cookie created during checkout initiation
    if (cookieHash && polarSessionHash && cookieHash === polarSessionHash) {
      isDeviceVerified = true;
    }

    // If device cookie does not match (e.g. buyer shared link with a friend, or buyer switched devices)
    if (!isDeviceVerified) {
      // Check rate limiting on failed attempts to prevent automated brute-forcing
      const rateLimit = checkEmailAttemptRateLimit(checkoutId);
      if (rateLimit.isLocked) {
        return NextResponse.json(
          {
            authorized: false,
            locked: true,
            error: "Too many failed verification attempts for this purchase. Device verification is locked for 30 minutes for security.",
          },
          { status: 429 }
        );
      }

      if (!emailVerification) {
        return NextResponse.json(
          {
            authorized: false,
            requiresEmailVerification: true,
            emailHint: maskEmail(customerEmail),
            error: "Device verification required: This link was opened on a different browser. To prevent unauthorized link sharing, enter the email address used during purchase to unlock your download.",
          },
          { status: 200 }
        );
      }

      // Check if provided email matches Polar checkout email
      if (!customerEmail || emailVerification.toLowerCase() !== customerEmail) {
        const attemptResult = recordFailedEmailAttempt(checkoutId);
        if (attemptResult.isNowLocked) {
          return NextResponse.json(
            {
              authorized: false,
              locked: true,
              error: "Too many failed verification attempts. Access for this order is temporarily locked for 30 minutes.",
            },
            { status: 429 }
          );
        }

        return NextResponse.json(
          {
            authorized: false,
            requiresEmailVerification: true,
            emailHint: maskEmail(customerEmail),
            error: `Email does not match our purchase record. ${attemptResult.remainingAttempts} attempt(s) remaining.`,
          },
          { status: 401 }
        );
      }

      // Legitimate buyer verified their email on this new device!
      resetEmailAttempts(checkoutId);
      isDeviceVerified = true;

      // Authorize this device for future visits by storing the verified purchase session cookie
      let newSecret = purchaseSecret;
      if (!newSecret || newSecret.length < 32) {
        newSecret = generatePurchaseSessionSecret();
      }
      cookieStore.set("macvoice_purchase_session", newSecret, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }

    // 4. Download Quota Enforcement (Max 10 downloads per license)
    const quota = getDownloadQuota(checkoutId);
    if (!quota.allowed) {
      return NextResponse.json(
        {
          authorized: false,
          error: "Download quota exceeded (maximum 10 downloads per license). Please contact akshatthakur22@gmail.com for assistance.",
        },
        { status: 429 }
      );
    }

    // 5. Issue Ephemeral 15-Minute Tamper-Proof Download Ticket
    const ticket = generateDownloadTicket(checkoutId, customerEmail, 15);

    return NextResponse.json({
      authorized: true,
      downloadUrl: `/api/download?ticket=${ticket}`,
      remainingDownloads: quota.remaining,
      expiresInMinutes: 15,
      purchaserEmail: customerEmail,
    });
  } catch (error: unknown) {
    console.error("Verification route error:", error);
    const message = error instanceof Error ? error.message : "Internal verification error";
    return NextResponse.json({ authorized: false, error: message }, { status: 500 });
  }
}
