import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Use & Contributions",
  description:
    "MacVoice's license terms: free to use on any number of your Macs, plus how optional one-time contributions and refunds work.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/terms",
  },
  openGraph: {
    title: "Terms of Use & Contributions — MacVoice",
    description:
      "MacVoice is free to use, including at work, on any number of your Macs. Optional contributions come with a 14-day refund.",
    url: "https://macvoice.akshatt.in/terms",
  },
};

const termsBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", item: "https://macvoice.akshatt.in" },
  { name: "Terms", item: "https://macvoice.akshatt.in/terms" },
]);

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={termsBreadcrumb} />
      <Container size="narrow">
        <SectionHeader
          as="h1"
          eyebrow="Terms"
          title="Terms of Use & Contributions"
          description="Short and plain: MacVoice is free to use, and contributions are optional."
        />

        <div className="space-y-8 text-[#1D1D1F] text-sm leading-relaxed">
          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">1. Free License</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              MacVoice is free. Downloading it grants you a perpetual, non-exclusive, non-transferable license to use the software at no cost. You may not resell or redistribute modified copies of the app.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">2. Any Number of Macs, Including at Work</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              You may install and run MacVoice on as many Macs as you use, personal or work. Commercial use is permitted.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">3. Zero DRM & Offline Freedom</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              MacVoice contains no digital rights management (DRM), licensing daemons, or phone-home activation servers. Once you download your release package, the software will continue to operate entirely offline without requiring internet check-ins.
            </p>
          </section>

          <section className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">4. Updates & What Stays Free</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Every feature MacVoice offers today stays free, including future updates and fixes to those features. If paid Pro features are ever added, they will be new features, and anyone who made a contribution before then gets them free.
            </p>
          </section>

          <section id="refund" className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3">
            <h2 className="text-base font-bold text-[#1D1D1F]">5. Contributions & 14-Day Refunds</h2>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Contributions are optional, one-time payments processed by Polar, which acts as the merchant of record. They don&apos;t unlock or change any part of the app. You can request a full refund within 14 days of a contribution by emailing akshatthakur22@gmail.com with your receipt or Polar order ID.
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
