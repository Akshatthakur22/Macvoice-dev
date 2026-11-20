import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingSection } from "@/components/home/PricingSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Pricing — Free, Every Feature",
  description:
    "MacVoice is free to download and use: every feature, no account, no trial, no subscription. Back it with a one-time contribution if it earns its place.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/pricing",
  },
  openGraph: {
    title: "MacVoice is free. Every feature.",
    description:
      "Private, on-device voice typing for Mac. Free to download and use. Optional one-time contributions fund development.",
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
  name: "MacVoice",
  image: "https://macvoice.akshatt.in/brand/macvoice-icon-dark-1024.png",
  description:
    "Free on-device voice typing for macOS. Every feature included, no account or subscription. Optional one-time contributions support development.",
  brand: { "@type": "Brand", name: "MacVoice" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://macvoice.akshatt.in/download",
    seller: { "@type": "Person", name: "Akshat Thakur", url: "https://akshatt.in" },
  },
};

const pricingFaqs = homeFaqs.filter((f) => f.group === "Pricing");

export default function PricingPage() {
  return (
    <div className="py-12 lg:py-20">
      <JsonLd schema={[pricingBreadcrumb, pricingProductSchema]} />
      <Container>
        <SectionHeader
          as="h1"
          eyebrow="Pricing"
          title="Free for everyone."
          muted="Funded by people who love it."
          description="Every feature, no account, no trial, no subscription. If MacVoice earns its place on your Mac, you can back it with a one-time contribution."
        />
      </Container>

      <PricingSection withHeader={false} />

      <Container className="max-w-[760px]">
        <h2 className="text-h3 text-ink">Questions about pricing</h2>
        <dl className="mt-4 divide-y divide-line rounded-card border border-line bg-surface px-6 shadow-e1">
          {pricingFaqs.map((f) => (
            <div key={f.question} className="py-5">
              <dt className="text-[16px] font-medium text-ink">{f.question}</dt>
              <dd className="text-body mt-2 space-y-2 text-ink-2">
                {f.answer.split("\n\n").map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <ComparisonTable />
    </div>
  );
}
