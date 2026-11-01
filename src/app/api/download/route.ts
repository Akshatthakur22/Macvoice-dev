import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  verifyDownloadTicket,
  verifyDownloadToken,
  recordDownload,
} from "@/lib/downloadToken";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ticket = searchParams.get("ticket");
  const legacyToken = searchParams.get("token");
  const rawCheckoutId = searchParams.get("checkout_id") || searchParams.get("session_id");

  // 1. Explicitly reject raw checkout IDs
  // To prevent URL sharing and tampering, users CANNOT download directly using a checkout ID
  if (!ticket && !legacyToken && rawCheckoutId) {
    return NextResponse.json(
      {
        error:
          "Access denied: Direct downloads via checkout ID are disabled for security. Please use the verified one-time link generated on your purchase confirmation page.",
      },
      { status: 403 }
    );
  }

  // 2. Cryptographic Verification
  let verifiedCheckoutId: string | null = null;

  if (ticket) {
    const verifiedTicket = verifyDownloadTicket(ticket);
    if (verifiedTicket) {
      verifiedCheckoutId = verifiedTicket.checkoutId;
    }
  } else if (legacyToken) {
    const verifiedToken = verifyDownloadToken(legacyToken);
    if (verifiedToken) {
      verifiedCheckoutId = verifiedToken.sessionId;
    }
  }

  if (!verifiedCheckoutId) {
    return NextResponse.json(
      {
        error:
          "Access denied: Invalid, expired, or tampered download ticket. Download links expire after 15 minutes. Please refresh your confirmation page to generate a fresh link.",
      },
      { status: 403 }
    );
  }

  // 3. Enforce Quota / Abuse Limiting (Max 10 downloads per license)
  const quota = recordDownload(verifiedCheckoutId);
  if (!quota.allowed) {
    return NextResponse.json(
      {
        error:
          "Download limit reached: This purchase license has exceeded its allowed download quota (maximum 10 downloads). Please contact akshatthakur22@gmail.com for assistance.",
      },
      { status: 429 }
    );
  }

  // 4. Resolve Private File Path (Secure storage outside of public directory)
  const primaryPath = path.join(process.cwd(), "private", "releases", "MacVoice.dmg");
  const envPath = process.env.DMG_FILE_PATH;
  const fallbackPath = path.join(process.cwd(), "releases", "MacVoice.dmg");

  let resolvedPath = primaryPath;
  if (!fs.existsSync(/*turbopackIgnore: true*/ primaryPath)) {
    if (envPath && fs.existsSync(/*turbopackIgnore: true*/ envPath)) {
      resolvedPath = envPath;
    } else if (fs.existsSync(/*turbopackIgnore: true*/ fallbackPath)) {
      resolvedPath = fallbackPath;
    } else {
      console.error(`MacVoice.dmg binary not found on server storage: looked at ${primaryPath}`);
      return NextResponse.json(
        { error: "MacVoice release package not found on server storage." },
        { status: 500 }
      );
    }
  }

  const fileStat = fs.statSync(/*turbopackIgnore: true*/ resolvedPath);
  const fileStream = fs.createReadStream(/*turbopackIgnore: true*/ resolvedPath);

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
      "X-Download-Remaining": quota.remaining.toString(),
    },
  });
}
