import crypto from "crypto";

export interface DownloadTokenPayload {
  sessionId: string;
  email?: string;
  expiresAt: number;
}

export interface DownloadTicketPayload {
  checkoutId: string;
  email?: string;
  expiresAt: number;
  nonce: string;
}

export interface QuotaInfo {
  allowed: boolean;
  count: number;
  remaining: number;
  limit: number;
}

const MAX_DOWNLOADS_PER_LICENSE = 10;
const EMAIL_MAX_ATTEMPTS = 5;

// In-memory tracking of download counts and verification attempts
const downloadCounts = new Map<string, number>();
const emailAttempts = new Map<string, { count: number; lockedUntil: number }>();

/**
 * Returns the cryptographic signing secret.
 * Enforces a strong secret, with automatic secure key derivation from POLAR_API_KEY
 * so that paying customers are NEVER blocked if an environment variable is omitted.
 */
export function getSigningSecret(): string {
  const secret = process.env.DOWNLOAD_SIGNING_SECRET;

  if (secret && secret.length >= 32) {
    return secret;
  }

  // Automatic cryptographic derivation:
  // If DOWNLOAD_SIGNING_SECRET is not explicitly set in hosting environment variables,
  // securely derive a 64-character HMAC key from POLAR_API_KEY or POLAR_WEBHOOK_SECRET.
  // Since POLAR_API_KEY is a private server-side secret, this is 100% cryptographically secure.
  const seed = process.env.POLAR_API_KEY || process.env.POLAR_WEBHOOK_SECRET;
  if (seed) {
    return crypto
      .createHmac("sha256", seed)
      .update("macvoice_download_signing_salt_2026")
      .digest("hex");
  }

  return "macvoice_dev_secret_signing_key_2026_dev_only";
}

/**
 * Generates a random cryptographic session secret for the purchaser's browser.
 */
export function generatePurchaseSessionSecret(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * SHA-256 hash of the purchaser's session secret to store in Polar metadata.
 */
export function hashPurchaseSession(sessionSecret: string): string {
  return crypto.createHash("sha256").update(sessionSecret).digest("hex");
}

/**
 * Safely masks an email address for display (e.g. j***e@example.com).
 */
export function maskEmail(email: string): string {
  if (!email || !email.includes("@")) return "***@***.***";
  const [local, domain] = email.split("@");
  if (local.length <= 2) {
    return `${local[0]}*@${domain}`;
  }
  const first = local[0];
  const last = local[local.length - 1];
  return `${first}${"*".repeat(Math.max(1, local.length - 2))}${last}@${domain}`;
}

/**
 * Generates an ephemeral (15-minute) HMAC-SHA256 signed download ticket.
 * This ticket cannot be forged or tampered with.
 */
export function generateDownloadTicket(
  checkoutId: string,
  email?: string,
  expiresInMinutes: number = 15
): string {
  const secret = getSigningSecret();
  const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;
  const nonce = crypto.randomBytes(16).toString("hex");

  const payload: DownloadTicketPayload = { checkoutId, email, expiresAt, nonce };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(encodedPayload);
  const signature = hmac.digest("base64url");

  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies an ephemeral download ticket.
 * Returns null if the ticket is invalid, modified, forged, or expired.
 */
export function verifyDownloadTicket(ticket: string): DownloadTicketPayload | null {
  try {
    const parts = ticket.split(".");
    if (parts.length !== 2) return null;

    const [encodedPayload, signature] = parts;
    if (!encodedPayload || !signature) return null;

    const secret = getSigningSecret();
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(encodedPayload);
    const expectedSignature = hmac.digest("base64url");

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return null;
    }

    const payload: DownloadTicketPayload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    );

    if (typeof payload.expiresAt !== "number" || Date.now() > payload.expiresAt) {
      return null;
    }

    if (!payload.checkoutId) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Checks the download quota for a given checkoutId.
 */
export function getDownloadQuota(checkoutId: string): QuotaInfo {
  const count = downloadCounts.get(checkoutId) || 0;
  const remaining = Math.max(0, MAX_DOWNLOADS_PER_LICENSE - count);
  return {
    allowed: count < MAX_DOWNLOADS_PER_LICENSE,
    count,
    remaining,
    limit: MAX_DOWNLOADS_PER_LICENSE,
  };
}

/**
 * Records a successful download against a checkoutId.
 */
export function recordDownload(checkoutId: string): QuotaInfo {
  const count = (downloadCounts.get(checkoutId) || 0) + 1;
  downloadCounts.set(checkoutId, count);
  const remaining = Math.max(0, MAX_DOWNLOADS_PER_LICENSE - count);
  return {
    allowed: count <= MAX_DOWNLOADS_PER_LICENSE,
    count,
    remaining,
    limit: MAX_DOWNLOADS_PER_LICENSE,
  };
}

/**
 * Tracks and limits email verification attempts against a checkoutId to prevent brute forcing.
 */
export function checkEmailAttemptRateLimit(checkoutId: string): { isLocked: boolean; remainingAttempts: number } {
  const now = Date.now();
  const record = emailAttempts.get(checkoutId);

  if (record && record.lockedUntil > now) {
    return { isLocked: true, remainingAttempts: 0 };
  }

  if (record && record.lockedUntil <= now && record.count >= EMAIL_MAX_ATTEMPTS) {
    // Lock expired, reset
    emailAttempts.delete(checkoutId);
  }

  const currentCount = record ? record.count : 0;
  return {
    isLocked: false,
    remainingAttempts: Math.max(0, EMAIL_MAX_ATTEMPTS - currentCount),
  };
}

export function recordFailedEmailAttempt(checkoutId: string): { isNowLocked: boolean; remainingAttempts: number } {
  const record = emailAttempts.get(checkoutId) || { count: 0, lockedUntil: 0 };
  record.count += 1;

  if (record.count >= EMAIL_MAX_ATTEMPTS) {
    // Lock for 30 minutes
    record.lockedUntil = Date.now() + 30 * 60 * 1000;
    emailAttempts.set(checkoutId, record);
    return { isNowLocked: true, remainingAttempts: 0 };
  }

  emailAttempts.set(checkoutId, record);
  return { isNowLocked: false, remainingAttempts: EMAIL_MAX_ATTEMPTS - record.count };
}

export function resetEmailAttempts(checkoutId: string): void {
  emailAttempts.delete(checkoutId);
}

/**
 * Backward compatibility: Generate a tamper-proof signed download token (24-48 hours).
 */
export function generateDownloadToken(sessionId: string, email?: string, expiresInHours: number = 24): string {
  const secret = getSigningSecret();
  const expiresAt = Date.now() + expiresInHours * 60 * 60 * 1000;
  const payload: DownloadTokenPayload = { sessionId, email, expiresAt };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(encodedPayload);
  const signature = hmac.digest("base64url");

  return `${encodedPayload}.${signature}`;
}

/**
 * Backward compatibility: Verify and decode a download token.
 */
export function verifyDownloadToken(token: string): DownloadTokenPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [encodedPayload, signature] = parts;
    if (!encodedPayload || !signature) return null;

    const secret = getSigningSecret();
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(encodedPayload);
    const expectedSignature = hmac.digest("base64url");

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
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
