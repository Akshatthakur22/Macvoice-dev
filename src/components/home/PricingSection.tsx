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
    "Pay once ($9 USD) — Keep and own forever",
    "No monthly subscriptions or hidden renewal fees",
    "Works in all apps: Word, Notes, Slack, Safari, Docs, and more",
    "Types into websites even where copy-paste is blocked",
    "Never overwrites or tampers with your copied text",
    "Automatically removes 'um' and 'uh' so drafts look polished",
    "Chat-safe: won't accidentally send unfinished Slack messages",
    "100% private: your voice never leaves your Mac",
    "Instant real-time typing at your cursor as you speak",
    "Install and use on up to 5 of your personal Macs",
    "14-day no-questions-asked money-back guarantee",
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FFFFFF] relative">
      <Container>
        <SectionHeader
          eyebrow="Simple, Honest Pricing"
          title="Own It Forever. Zero Subscriptions."
          description="Because MacVoice runs 100% on your Mac with $0 cloud server expenses, we refuse to charge you rent for software you run on your own hardware."
        />

        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0071E3]/25 p-8 sm:p-11 shadow-[0_20px_50px_rgba(0,113,227,0.08)] relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20 font-mono">
                Standard Lifetime License
              </span>
              <span className="text-xs text-[#6E6E73] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                14-Day Refund Guarantee
              </span>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl sm:text-6xl font-bold text-[#1D1D1F] tracking-tight font-mono">
                $9
              </span>
              <span className="text-[#6E6E73] text-sm font-medium">
                USD · one-time payment
              </span>
            </div>

            <p className="text-sm text-[#6E6E73] leading-relaxed mb-8">
              A single payment of $9 gives you lifetime access and all v1.x updates.
              Download the 784 KB DMG immediately after checkout.
            </p>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
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
              className="w-full justify-center text-base py-4 font-semibold shadow-md mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Get MacVoice for Mac — $9 USD
            </Button>

            <p className="text-[11px] text-center text-[#6E6E73] mb-8">
              Instant delivery of MacVoice.dmg via secure checkout. No account required.
            </p>

            {/* Features list */}
            <div className="pt-6 border-t border-[#E8E8ED] space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-3">
                Everything Included:
              </div>
              {features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1D1D1F]">
                  <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Fatigue Callout */}
          <div className="mt-8 text-center text-xs text-[#6E6E73] leading-relaxed max-w-md mx-auto">
            <span className="text-[#1D1D1F] font-semibold">Why not a monthly subscription?</span> Other AI dictation tools charge $144 to $180 per year to stream your voice to cloud GPUs. MacVoice runs locally on Apple Silicon, requiring zero recurring cloud infrastructure.
          </div>
        </div>
      </Container>
    </section>
  );
}
