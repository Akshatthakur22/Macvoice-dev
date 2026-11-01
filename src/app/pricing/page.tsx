import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingSection } from "@/components/home/PricingSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pricing — $9 USD One-Time Lifetime License",
  description:
    "MacVoice costs $9 USD one-time. No subscriptions, no user accounts, and no cloud server fees. Run it forever on up to 5 of your personal Macs.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/pricing",
  },
  openGraph: {
    title: "Pricing — MacVoice ($9 One-Time Forever)",
    description:
      "Buy once for $9 and run on up to 5 personal Macs. 100% on-device speech processing, zero cloud server subscription fees.",
    url: "https://macvoice.akshatt.in/pricing",
  },
};

const pricingBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", item: "https://macvoice.akshatt.in" },
  { name: "Pricing", item: "https://macvoice.akshatt.in/pricing" },
]);

const pricingProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MacVoice Lifetime License",
  image: "https://macvoice.akshatt.in/brand/macvoice-icon-dark-1024.png",
  description:
    "Perpetual lifetime license for MacVoice native macOS speech-to-text keyboard utility. Entitles usage on up to 5 personal Mac devices.",
  brand: {
    "@type": "Brand",
    name: "MacVoice",
  },
  offers: {
    "@type": "Offer",
    price: "9.00",
    priceCurrency: "USD",
    priceValidUntil: "2028-12-31",
    availability: "https://schema.org/InStock",
    url: "https://macvoice.akshatt.in/pricing",
    seller: {
      "@type": "Person",
      name: "Akshat Thakur",
      url: "https://akshatt.in",
    },
  },
};

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={[pricingBreadcrumb, pricingProductSchema]} />
      <Container>
        <SectionHeader
          eyebrow="One-Time Purchase"
          title="Buy Once, Own Forever."
          description="We believe desktop software should be an asset you own, not a never-ending rent payment."
        />

        {/* Embedded Pricing Card */}
        <PricingSection />

        {/* Value Comparison vs Subscriptions */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
          <h3 className="text-xl font-bold text-[#1D1D1F] mb-4">
            The Economics of Zero Cloud Cost
          </h3>
          <p className="text-[#1D1D1F]/90 text-sm leading-relaxed mb-6">
            Cloud dictation services charge <span className="text-[#1D1D1F] font-semibold">$12 to $15 per month ($144–$180/year)</span> because they must maintain expensive GPU server clusters to process your audio.
          </p>
          <p className="text-[#1D1D1F]/90 text-sm leading-relaxed mb-6">
            MacVoice performs 100% of its speech recognition and native text polishing locally on your Mac's Apple Silicon hardware. Because our marginal cost to serve you is <span className="text-[#0071E3] font-mono font-semibold">$0.00</span>, we pass those savings directly to you with a fair, one-time <span className="text-[#1D1D1F] font-semibold">$9 price tag</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E8ED] text-xs">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] shadow-xs">
              <div className="font-semibold text-[#1D1D1F] mb-1">MacVoice</div>
              <div className="text-emerald-600 font-mono text-base font-bold mb-1">$9 total</div>
              <div className="text-[#6E6E73]">1 year: $9 · 3 years: $9</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] shadow-xs">
              <div className="font-semibold text-[#1D1D1F] mb-1">Wispr Flow</div>
              <div className="text-red-600 font-mono text-base font-bold mb-1">$144 / year</div>
              <div className="text-[#6E6E73]">1 year: $144 · 3 years: $432</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] shadow-xs">
              <div className="font-semibold text-[#1D1D1F] mb-1">Superwhisper</div>
              <div className="text-amber-600 font-mono text-base font-bold mb-1">$250 once</div>
              <div className="text-[#6E6E73]">Requires 1.5 GB+ local models</div>
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
