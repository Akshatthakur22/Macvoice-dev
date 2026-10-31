"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Check, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

export function PricingSection() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to initiate checkout");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: unknown) {
      console.error("Checkout initiation error:", err);
      const message = err instanceof Error ? err.message : "Unable to proceed to checkout. Please try again.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    "One-time purchase — Pay once, keep forever",
    "No monthly or annual subscriptions",
    "No user accounts, email capture, or phone-home tracking",
    "Use on up to 5 of your personal Macs",
    "Sub-150ms live streaming to cursor",
    "Instant native Swift filler stripping ('um' / 'uh')",
    "Chat-safe Shift+Return in Slack, WhatsApp, and Discord",
    "Both Verbatim and Polished modes included",
    "100% on-device in-memory audio processing",
    "Includes all MacVoice v1.x feature and security updates",
    "14-day no-questions-asked refund policy",
  ];

  return (
    <section id="pricing" className="py-24 bg-[#070b12] border-t border-white/[0.06] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        <SectionHeader
          eyebrow="Simple, Honest Pricing"
          title="Own It Forever. Zero Subscriptions."
          description="Because MacVoice runs 100% on your Mac with $0 cloud server expenses, we refuse to charge you rent for software you run on your own hardware."
        />

        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl bg-[#111726] border border-blue-500/30 p-8 sm:p-10 shadow-[0_16px_50px_rgba(10,132,255,0.12)] relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                Standard Lifetime License
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                14-Day Refund Guarantee
              </span>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                $9
              </span>
              <span className="text-slate-400 text-sm">
                USD · one-time payment
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              A single payment of $9 gives you lifetime access and all v1.x updates.
              Download the 784 KB DMG immediately after checkout.
            </p>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Buy Button */}
            <Button
              onClick={handleCheckout}
              variant="primary"
              size="lg"
              isLoading={loading}
              className="w-full justify-center text-base py-4 font-bold rounded-xl shadow-lg mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Get MacVoice for Mac — $9 USD
            </Button>

            <p className="text-[11px] text-center text-slate-500 mb-8">
              Instant delivery of MacVoice.dmg via secure checkout. No account required.
            </p>

            {/* Features list */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                Everything Included:
              </div>
              {features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Fatigue Callout */}
          <div className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
            <span className="text-slate-300 font-medium">Why not a monthly subscription?</span> Other AI dictation tools charge $144 to $180 per year to stream your voice to cloud GPUs. MacVoice runs locally on Apple Silicon, requiring zero recurring cloud infrastructure.
          </div>
        </div>
      </Container>
    </section>
  );
}
