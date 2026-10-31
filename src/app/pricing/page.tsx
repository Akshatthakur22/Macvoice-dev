import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingSection } from "@/components/home/PricingSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";

export const metadata: Metadata = {
  title: "Pricing — MacVoice ($9 One-Time)",
  description:
    "MacVoice costs $9 USD one-time. No subscriptions, no user accounts, and no cloud server fees. Run it forever on up to 5 of your personal Macs.",
};

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="One-Time Purchase"
          title="Buy Once, Own Forever."
          description="We believe desktop software should be an asset you own, not a never-ending rent payment."
        />

        {/* Embedded Pricing Card */}
        <PricingSection />

        {/* Value Comparison vs Subscriptions */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-[#111726] border border-white/[0.08]">
          <h3 className="text-xl font-bold text-white mb-4">
            The Economics of Zero Cloud Cost
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Cloud dictation services charge <span className="text-white font-semibold">$12 to $15 per month ($144–$180/year)</span> because they must maintain expensive GPU server clusters to process your audio.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            MacVoice performs 100% of its speech recognition and native text polishing locally on your Mac's Apple Silicon hardware. Because our marginal cost to serve you is <span className="text-blue-400 font-mono font-semibold">$0.00</span>, we pass those savings directly to you with a fair, one-time <span className="text-white font-semibold">$9 price tag</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-semibold text-white mb-1">MacVoice</div>
              <div className="text-emerald-400 font-mono text-base font-bold mb-1">$9 total</div>
              <div className="text-slate-400">1 year: $9 · 3 years: $9</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-semibold text-slate-300 mb-1">Wispr Flow</div>
              <div className="text-red-400 font-mono text-base font-bold mb-1">$144 / year</div>
              <div className="text-slate-400">1 year: $144 · 3 years: $432</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-semibold text-slate-300 mb-1">Superwhisper</div>
              <div className="text-amber-400 font-mono text-base font-bold mb-1">$250 once</div>
              <div className="text-slate-400">Requires 1.5 GB+ local models</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <ComparisonTable />
        </div>
      </Container>
    </div>
  );
}
