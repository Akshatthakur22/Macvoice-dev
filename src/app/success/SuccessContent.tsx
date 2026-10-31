"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { CheckCircle2, ArrowDownToLine, ShieldCheck, ExternalLink } from "lucide-react";

export function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const token = searchParams.get("token");
  const isTestMode = searchParams.get("test_mode") === "true";

  const downloadUrl = `/api/download?${new URLSearchParams({
    ...(sessionId ? { session_id: sessionId } : {}),
    ...(token ? { token } : {}),
  }).toString()}`;

  return (
    <>
      {/* Success Banner */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block font-mono">
          {isTestMode ? "Test Mode Verified Purchase" : "Payment Verified"}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Thank you for purchasing MacVoice!
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Your lifetime license is now confirmed. Your copy of MacVoice has zero cloud tracking, zero accounts, and runs 100% locally on your Mac.
        </p>

        {/* Test Mode Notification Banner */}
        {isTestMode && (
          <div className="mt-4 inline-block px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
            ⚡ Development Mode Active: Payment simulation was verified locally.
          </div>
        )}
      </div>

      {/* Primary Download Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#111726] border border-blue-500/30 shadow-[0_20px_50px_rgba(10,132,255,0.15)] text-center mb-12">
        <h2 className="text-xl font-bold text-white mb-2">
          Download Your Release Package
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          MacVoice.dmg · Version 1.0.0 · 784 KB package · macOS 26+ (Apple Silicon)
        </p>

        <div className="flex justify-center mb-6">
          <Button
            href={downloadUrl}
            variant="primary"
            size="lg"
            className="text-base px-8 py-4 font-bold shadow-xl"
          >
            <ArrowDownToLine className="w-5 h-5" />
            Download MacVoice.dmg (784 KB)
          </Button>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left font-mono text-[11px] text-slate-400 break-all select-all flex items-center justify-between gap-3">
          <span className="text-slate-500">SHA-256:</span>
          <span>c65640421934f518328b17a75a518e2ba36b7bb3dedd15ffeff4c30d8d1c7515</span>
        </div>
      </div>

      {/* Step-by-Step Setup Guide */}
      <div className="p-8 rounded-3xl bg-[#0f1422] border border-white/[0.08] space-y-6 mb-12">
        <h3 className="text-lg font-bold text-white">
          Three Quick Steps to Start Dictating
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
              1
            </span>
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Drag to /Applications</strong>
              Double-click the downloaded <code className="font-mono text-blue-300">MacVoice.dmg</code> and drag MacVoice into your Applications folder.
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
              2
            </span>
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Approve macOS Permissions</strong>
              Launch MacVoice and click Allow when macOS prompts for <strong>Microphone</strong> (for speech recognition) and <strong>Accessibility</strong> (to type keystrokes into other apps).
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
              3
            </span>
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Press Global Shortcut</strong>
              Click any text field in VS Code, Slack, or Safari. Press <ShortcutBadge display="⌃⌥Space" size="sm" /> and speak. Text streams live to your cursor!
            </div>
          </div>
        </div>
      </div>

      {/* Support & Receipt Microcopy */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Need help or an invoice? Email support@macvoice.app</span>
        </div>
        <Link
          href="/docs"
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
        >
          Read User Guide
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </>
  );
}
