"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import {
  CheckCircle2,
  ArrowDownToLine,
  ShieldCheck,
  ExternalLink,
  Lock,
  AlertCircle,
  KeyRound,
  RefreshCw,
  Mail,
  UserCheck,
} from "lucide-react";

export function SuccessContent() {
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_id") || searchParams.get("session_id");
  const isTestMode = searchParams.get("test_mode") === "true";

  const [status, setStatus] = useState<
    "verifying" | "authorized" | "requires_email" | "locked" | "error"
  >("verifying");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [remainingDownloads, setRemainingDownloads] = useState<number | null>(null);
  const [purchaserEmail, setPurchaserEmail] = useState<string | null>(null);
  const [emailHint, setEmailHint] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  // Automatic initial verification on mount
  useEffect(() => {
    let isMounted = true;

    async function checkAuthorization() {
      if (!checkoutId) {
        if (isMounted) {
          setStatus("error");
          setErrorMessage("No checkout session found. Please complete purchase on our pricing page.");
        }
        return;
      }

      try {
        const res = await fetch("/api/download/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkout_id: checkoutId }),
        });

        const data = await res.json();
        if (!isMounted) return;

        if (res.status === 429 && data.locked) {
          setStatus("locked");
          setErrorMessage(data.error);
          return;
        }

        if (data.requiresEmailVerification) {
          setStatus("requires_email");
          setEmailHint(data.emailHint || "");
          return;
        }

        if (data.authorized && data.downloadUrl) {
          setStatus("authorized");
          setDownloadUrl(data.downloadUrl);
          setRemainingDownloads(data.remainingDownloads ?? null);
          setPurchaserEmail(data.purchaserEmail ?? null);
          return;
        }

        setStatus("error");
        setErrorMessage(data.error || "Verification failed. A paid checkout is required.");
      } catch (err: unknown) {
        console.error("Verification connection error:", err);
        if (isMounted) {
          setStatus("error");
          setErrorMessage("Unable to connect to verification server. Please refresh the page.");
        }
      }
    }

    checkAuthorization();

    return () => {
      isMounted = false;
    };
  }, [checkoutId]);

  // Handle email verification submission when device is not recognized
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim() || !checkoutId) return;

    try {
      setIsSubmittingEmail(true);
      setErrorMessage(null);

      const res = await fetch("/api/download/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkout_id: checkoutId,
          email_verification: inputEmail.trim(),
        }),
      });

      const data = await res.json();

      if (res.status === 429 && data.locked) {
        setStatus("locked");
        setErrorMessage(data.error);
        return;
      }

      if (data.authorized && data.downloadUrl) {
        setStatus("authorized");
        setDownloadUrl(data.downloadUrl);
        setRemainingDownloads(data.remainingDownloads ?? null);
        setPurchaserEmail(data.purchaserEmail ?? null);
        return;
      }

      if (data.requiresEmailVerification) {
        setErrorMessage(data.error || "Email does not match purchase record.");
        return;
      }

      setStatus("error");
      setErrorMessage(data.error || "Verification failed.");
    } catch (err: unknown) {
      console.error("Email verification error:", err);
      setErrorMessage("Network error during verification. Please try again.");
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <>
      {/* Success Banner */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2 block font-mono">
          {isTestMode ? "Test Mode Verified Purchase" : "Order Authenticated"}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
          Thank you for purchasing MacVoice!
        </h1>

        <p className="text-[#6E6E73] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Your lifetime license is active. Your release package has zero telemetry, zero accounts, and runs 100% locally on Apple Silicon.
        </p>

        {isTestMode && (
          <div className="mt-4 inline-block px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
            ⚡ Development Mode Active: Payment simulation was verified locally.
          </div>
        )}
      </div>

      {/* Primary Verification & Download Card */}
      <div className="p-8 sm:p-11 rounded-3xl bg-[#FFFFFF] border-2 border-[#0071E3]/25 shadow-[0_20px_50px_rgba(0,113,227,0.08)] text-center mb-12">
        {/* State 1: Verifying */}
        {status === "verifying" && (
          <div className="py-12 space-y-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-3 border-solid border-[#0071E3] border-r-transparent" />
            <p className="text-sm font-medium text-[#1D1D1F]">
              Cryptographically verifying payment with Polar...
            </p>
            <p className="text-xs text-[#6E6E73]">
              Generating your secure, time-limited download ticket.
            </p>
          </div>
        )}

        {/* State 2: Authorized (Legitimate Buyer on Verified Device) */}
        {status === "authorized" && downloadUrl && (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Device & License Verified · Ready to Download</span>
            </div>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-2">
              Download Your Release Package
            </h2>
            <p className="text-xs text-[#6E6E73] mb-8">
              MacVoice.dmg · Version 1.0.0 · 784 KB package · macOS 26+ (Apple Silicon)
            </p>

            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <Button
                href={downloadUrl}
                variant="primary"
                size="lg"
                className="text-base px-9 py-4 font-semibold shadow-md"
              >
                <ArrowDownToLine className="w-5 h-5" />
                Download MacVoice.dmg (784 KB)
              </Button>
              <div className="text-[11px] text-[#6E6E73] flex flex-wrap items-center justify-center gap-2">
                <span>⏱️ Link valid for 15 minutes</span>
                {remainingDownloads !== null && (
                  <span>· {remainingDownloads} download(s) remaining for your 5 personal Macs</span>
                )}
                {purchaserEmail && (
                  <span className="flex items-center gap-1 font-mono text-emerald-700">
                    <UserCheck className="w-3 h-3" />
                    <span>Licensed to: {purchaserEmail}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] text-left font-mono text-[11px] text-[#1D1D1F] break-all select-all flex items-center justify-between gap-3">
              <span className="text-[#6E6E73]">SHA-256:</span>
              <span>b6010b5be2eaad89f279707f7e8f7f27a5d34f1063e3b592cce69b8ca96be1bf</span>
            </div>
          </>
        )}

        {/* State 3: Device Verification Required (Anti-Link-Sharing / New Device) */}
        {status === "requires_email" && (
          <div className="py-4 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF3FF] text-[#0071E3] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1D1D1F]">
                  Device Verification Required
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  To prevent unauthorized link sharing, confirm your purchase email.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] text-xs text-[#6E6E73] leading-relaxed mb-6">
              This confirmation link was opened on a browser different from where the checkout began. Enter the email address used during purchase to unlock the download on this Mac.
              {emailHint && (
                <div className="mt-2 font-mono text-[11px] text-[#1D1D1F] font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>Purchaser Hint: {emailHint}</span>
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="verify-email" className="block text-xs font-medium text-[#1D1D1F] mb-1.5">
                  Purchaser Email Address
                </label>
                <input
                  id="verify-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-[#E8E8ED] bg-[#FFFFFF] text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/20 focus:border-[#0071E3]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmittingEmail}
                className="w-full justify-center text-sm py-3 font-semibold"
              >
                {isSubmittingEmail ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Verify Device & Unlock Download</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        )}

        {/* State 4: Locked Due to Too Many Attempts */}
        {status === "locked" && (
          <div className="py-8 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1D1D1F]">
              Verification Temporarily Locked
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              {errorMessage || "Too many failed email verification attempts for this order. Verification is locked for 30 minutes to protect the purchaser's license."}
            </p>
            <p className="text-xs text-[#6E6E73]">
              If you are the legitimate purchaser, check the receipt sent to your email by Polar or contact{" "}
              <a href="mailto:akshatthakur22@gmail.com" className="text-[#0071E3] underline font-medium">
                akshatthakur22@gmail.com
              </a>.
            </p>
          </div>
        )}

        {/* State 5: Error or Unpaid */}
        {status === "error" && (
          <div className="py-8 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1D1D1F]">
              Payment Verification Failed
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              {errorMessage || "No verified purchase was found for this session. A $9 lifetime license is required to download MacVoice."}
            </p>
            <div className="pt-2">
              <Button href="/pricing" variant="primary" size="md">
                View Pricing & Buy ($9 USD)
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Step-by-Step Setup Guide */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-6 mb-12 shadow-sm">
        <h3 className="text-lg font-bold text-[#1D1D1F]">
          Three Quick Steps to Start Dictating
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
            <span className="w-6 h-6 rounded-full bg-[#EAF3FF] text-[#0071E3] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <div className="text-xs sm:text-sm text-[#1D1D1F]">
              <strong className="block mb-0.5">Drag to /Applications</strong>
              Double-click the downloaded <code className="font-mono text-[#0071E3] bg-[#EAF3FF] px-1.5 py-0.5 rounded">MacVoice.dmg</code> and drag MacVoice into your Applications folder.
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
            <span className="w-6 h-6 rounded-full bg-[#EAF3FF] text-[#0071E3] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <div className="text-xs sm:text-sm text-[#1D1D1F]">
              <strong className="block mb-0.5">Approve macOS Permissions</strong>
              Launch MacVoice and click Allow when macOS prompts for <strong>Microphone</strong> (for speech recognition) and <strong>Accessibility</strong> (to type keystrokes into other apps).
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
            <span className="w-6 h-6 rounded-full bg-[#EAF3FF] text-[#0071E3] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <div className="text-xs sm:text-sm text-[#1D1D1F]">
              <strong className="block mb-0.5">Trigger Dictation Anywhere</strong>
              Click into any text area (Slack, VS Code, Safari, WhatsApp), press the global hotkey:
              <div className="mt-2 flex items-center gap-1.5">
                <ShortcutBadge keys={["⌃", "⌥", "Space"]} size="md" />
              </div>
              <span className="block mt-2 text-xs text-[#6E6E73]">
                Start speaking naturally. Text appears instantly at your cursor.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Support & Receipt Microcopy */}
      <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E73]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Need help or an invoice? Email akshatthakur22@gmail.com</span>
        </div>
        <Link
          href="/docs"
          className="text-[#0071E3] hover:text-[#0077ED] font-medium inline-flex items-center gap-1"
        >
          Read User Guide
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </>
  );
}
