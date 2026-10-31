import React from "react";
import { Hero } from "@/components/home/Hero";
import { MetricsBar } from "@/components/home/MetricsBar";
import { LiveDemo } from "@/components/home/LiveDemo";
import { CorePillars } from "@/components/home/CorePillars";
import { TwoModes } from "@/components/home/TwoModes";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { PrivacyGuarantee } from "@/components/home/PrivacyGuarantee";
import { OnboardingSteps } from "@/components/home/OnboardingSteps";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <MetricsBar />
      <LiveDemo />
      <CorePillars />
      <TwoModes />
      <ComparisonTable />
      <PrivacyGuarantee />
      <OnboardingSteps />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
