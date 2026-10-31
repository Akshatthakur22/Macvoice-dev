import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Sale & Software License — MacVoice",
  description:
    "Review our transparent, developer-friendly software license and refund terms for MacVoice.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Legal & Commercial Agreement"
          title="Terms of Sale & License Agreement"
          description="Clear, fair, developer-first terms. No hidden recurring fees, no arbitrary restrictions."
        />

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">1. One-Time Purchase & Ownership</h2>
            <p className="text-xs text-slate-400">
              MacVoice is sold as a single, one-time payment of $9.00 USD. Your purchase grants you a perpetual, non-exclusive license to use the software. You will never be charged recurring subscription or renewal fees for the purchased version.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">2. Multi-Mac Entitlement (Up to 5 Devices)</h2>
            <p className="text-xs text-slate-400">
              You are permitted to install and run MacVoice on up to 5 (five) Mac computers that you personally own or operate (including your personal MacBook, work Mac, and home desktop). Commercial use in professional work environments is explicitly permitted.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">3. Zero DRM & Offline Freedom</h2>
            <p className="text-xs text-slate-400">
              MacVoice contains no digital rights management (DRM), licensing daemons, or phone-home activation servers. Once you download your release package, the software will continue to operate entirely offline without requiring internet check-ins.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">4. Updates & Maintenance</h2>
            <p className="text-xs text-slate-400">
              Your license includes all minor updates, performance optimizations, bug fixes, and feature additions released under the MacVoice v1.x release cycle.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">5. 14-Day Money-Back Guarantee</h2>
            <p className="text-xs text-slate-400">
              If MacVoice is incompatible with your setup or does not meet your expectations, you may request a 100% full refund within 14 days of purchase. Simply email support@macvoice.app with your checkout receipt or Stripe session ID.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3">
            <h2 className="text-base font-bold text-white">6. Disclaimer of Warranties</h2>
            <p className="text-xs text-slate-400">
              MacVoice is provided "as is", without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the software.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
