"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { CheckCircle2, ArrowDownToLine, ShieldCheck, ExternalLink } from "lucide-react";

export function SuccessContent() {
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_id") || searchParams.get("session_id");
  const token = searchParams.get("token");
  const isTestMode = searchParams.get("test_mode") === "true";

  const downloadUrl = `/api/download?${new URLSearchParams({
    ...(checkoutId ? { checkout_id: checkoutId } : {}),
    ...(token ? { token } : {}),
  }).toString()}`;

  return (
    <>
      {/* Success Banner */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2 block font-mono">
          {isTestMode ? "Test Mode Verified Purchase" : "Payment Verified"}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
          Thank you for purchasing MacVoice!
        </h1>

        <p className="text-[#6E6E73] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Your lifetime license is now confirmed. Your copy of MacVoice has zero cloud tracking, zero accounts, and runs 100% locally on your Mac.
        </p>

        {/* Test Mode Notification Banner */}
        {isTestMode && (
          <div className="mt-4 inline-block px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
            ⚡ Development Mode Active: Payment simulation was verified locally.
          </div>
        )}
      </div>

      {/* Primary Download Card */}
      <div className="p-8 sm:p-11 rounded-3xl bg-[#FFFFFF] border-2 border-[#0071E3]/25 shadow-[0_20px_50px_rgba(0,113,227,0.08)] text-center mb-12">
        <h2 className="text-2xl font-bold text-[#1D1D1F] mb-2">
          Download Your Release Package
        </h2>
        <p className="text-xs text-[#6E6E73] mb-8">
          MacVoice.dmg · Version 1.0.0 · 784 KB package · macOS 26+ (Apple Silicon)
        </p>

        <div className="flex justify-center mb-8">
          <Button
            href={downloadUrl}
            variant="primary"
            size="lg"
            className="text-base px-9 py-4 font-semibold shadow-md"
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download MacVoice.dmg (784 KB)
          </Button>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] text-left font-mono text-[11px] text-[#1D1D1F] break-all select-all flex items-center justify-between gap-3">
          <span className="text-[#6E6E73]">SHA-256:</span>
          <span>b6010b5be2eaad89f279707f7e8f7f27a5d34f1063e3b592cce69b8ca96be1bf</span>
        </div>
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
              <strong className="block mb-0.5">Press Global Shortcut</strong>
              Click any text field in VS Code, Slack, or Safari. Press <ShortcutBadge display="⌃⌥Space" size="sm" /> and speak. Text streams live to your cursor!
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
