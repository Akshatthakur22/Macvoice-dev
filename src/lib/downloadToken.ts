import crypto from "crypto";

const SECRET = process.env.DOWNLOAD_SIGNING_SECRET || "macvoice_dev_secret_signing_key_2026";

export interface DownloadTokenPayload {
  sessionId: string;
  email?: string;
  expiresAt: number;
}

/**
 * Generate a tamper-proof signed download token for a verified purchase.
 * Tokens expire in 24 hours by default.
 */
export function generateDownloadToken(sessionId: string, email?: string, expiresInHours: number = 24): string {
  const expiresAt = Date.now() + expiresInHours * 60 * 60 * 1000;
  const payload: DownloadTokenPayload = { sessionId, email, expiresAt };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  
  const hmac = crypto.createHmac("sha256", SECRET);
  hmac.update(encodedPayload);
  const signature = hmac.digest("base64url");

  return `${encodedPayload}.${signature}`;
}

/**
 * Verify and decode a download token.
 * Returns null if the token is invalid, tampered with, or expired.
 */
export function verifyDownloadToken(token: string): DownloadTokenPayload | null {
  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) {
      return null;
    }

    const hmac = crypto.createHmac("sha256", SECRET);
    hmac.update(encodedPayload);
    const expectedSignature = hmac.digest("base64url");

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }

    const payload: DownloadTokenPayload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    );

    if (Date.now() > payload.expiresAt) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

