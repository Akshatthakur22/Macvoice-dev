import React from "react";
import { Hero } from "@/components/home/Hero";
import { LiveDemo } from "@/components/home/LiveDemo";
import { Stage } from "@/components/home/Stage";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd, homePageSchema } from "@/components/seo/JsonLd";

/**
 * Landing page, per the UI/UX playbook: Nav · Hero stage (3D MacBook; on
 * desktop, scrolling dives into its screen for the demo) · Live demo fallback · How it works
 * · Features · Compare · (Social proof: add once there are real, attributable
 * quotes) · Pricing · FAQ · Closing + footer.
 */
export default function HomePage() {
  return (
    <main className="flex flex-col">
      <JsonLd schema={homePageSchema} />
      <Stage>
        <Hero />
      </Stage>
      <LiveDemo />
      <HowItWorks />
      <Features />
      <ComparisonTable />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
