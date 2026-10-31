import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { polar } from "@/lib/polar";
import { verifyDownloadToken } from "@/lib/downloadToken";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");
  const checkoutId = searchParams.get("checkout_id") || searchParams.get("session_id");

  let isAuthorized = false;

  // 1. Verify cryptographic download token
  if (token) {
    const verified = verifyDownloadToken(token);
    if (verified) {
      isAuthorized = true;
    }
  }

  // 2. Verify via Polar API if checkout_id provided and Polar is configured
  if (!isAuthorized && checkoutId && polar) {
    try {
      const checkout = await polar.checkouts.get(checkoutId);
      if (checkout.status === "succeeded" || checkout.status === "confirmed") {
        isAuthorized = true;
      }
    } catch (e) {
      console.error("Failed to verify Polar checkout session:", e);
    }
  }

  // 3. In non-production environments, allow developer test sessions
  if (!isAuthorized && checkoutId && (checkoutId.startsWith("test_session_") || checkoutId.startsWith("test_"))) {
    if (process.env.NODE_ENV !== "production") {
      isAuthorized = true;
    }
  }

  if (!isAuthorized) {
    return NextResponse.json(
      {
        error: "Access denied. A valid $9 purchase token or confirmed Polar checkout is required to download MacVoice.dmg.",
      },
      { status: 403 }
    );
  }

  // Resolve DMG path statically
  const dmgPath = path.join(process.cwd(), "public", "releases", "MacVoice.dmg");

  if (!fs.existsSync(/*turbopackIgnore: true*/ dmgPath)) {
    console.error(`MacVoice.dmg binary not found at path: ${dmgPath}`);
    return NextResponse.json(
      { error: "MacVoice release package not found on server storage." },
      { status: 500 }
    );
  }

  const fileStat = fs.statSync(/*turbopackIgnore: true*/ dmgPath);
  const fileStream = fs.createReadStream(/*turbopackIgnore: true*/ dmgPath);

  // Convert Node readable stream to web standard ReadableStream
  const webStream = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => controller.enqueue(chunk));
      fileStream.on("end", () => controller.close());
      fileStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      fileStream.destroy();
    },
  });

  return new Response(webStream, {
    status: 200,
    headers: {
      "Content-Type": "application/x-apple-diskimage",
      "Content-Disposition": 'attachment; filename="MacVoice.dmg"',
      "Content-Length": fileStat.size.toString(),
      "Cache-Control": "private, no-cache, no-store, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
