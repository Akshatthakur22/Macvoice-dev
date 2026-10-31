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
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Legal & Commercial Agreement"
          title="Terms of Sale & License Agreement"
          description="Clear, fair, developer-first terms. No hidden recurring fees, no arbitrary restrictions."
        />

        <div className="space-y-8 text-[#1D1D1F] text-sm leading-relaxed">
          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">1. One-Time Purchase & Ownership</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              MacVoice is sold as a single, one-time payment of $9.00 USD. Your purchase grants you a perpetual, non-exclusive license to use the software. You will never be charged recurring subscription or renewal fees for the purchased version.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">2. Multi-Mac Entitlement (Up to 5 Devices)</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              You are permitted to install and run MacVoice on up to 5 (five) Mac computers that you personally own or operate (including your personal MacBook, work Mac, and home desktop). Commercial use in professional work environments is explicitly permitted.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">3. Zero DRM & Offline Freedom</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              MacVoice contains no digital rights management (DRM), licensing daemons, or phone-home activation servers. Once you download your release package, the software will continue to operate entirely offline without requiring internet check-ins.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">4. Updates & Maintenance</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Your license includes all minor updates, performance optimizations, bug fixes, and feature additions released under the MacVoice v1.x release cycle.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">5. 14-Day Money-Back Guarantee</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              If MacVoice is incompatible with your setup or does not meet your expectations, you may request a 100% full refund within 14 days of purchase. Simply email support@macvoice.app with your checkout receipt or Stripe session ID.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">6. Disclaimer of Warranties</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              MacVoice is provided "as is", without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the software.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
