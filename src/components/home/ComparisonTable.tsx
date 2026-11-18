import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ComparisonTable() {
  // Competitor facts last checked November 2026 against vendor docs/pricing.
  // Only list things that can be verified; re-check before changing.
  const rows = [
    {
      feature: "How text gets into your app",
      macvoice: "Typed as keyboard input. Clipboard never used",
      apple: "Built into macOS",
      wispr: "Pasted via clipboard, then clipboard restored",
      superwhisper: "Pasted via clipboard",
      highlight: true,
    },
    {
      feature: "Where your voice is processed",
      macvoice: "On your Mac (Apple's on-device engine)",
      apple: "On your Mac",
      wispr: "Cloud servers",
      superwhisper: "On your Mac or cloud, depending on model",
      highlight: false,
    },
    {
      feature: "Text appears while you talk",
      macvoice: "Yes (word by word, or per sentence)",
      apple: "Yes",
      wispr: "After you finish speaking",
      superwhisper: "After you finish speaking",
      highlight: true,
    },
    {
      feature: "Removes 'um' & 'uh'",
      macvoice: "Yes, instantly, no AI model",
      apple: "No",
      wispr: "Yes (cloud AI)",
      superwhisper: "Yes (AI modes)",
      highlight: false,
    },
    {
      feature: "Works without internet",
      macvoice: "Yes (after macOS downloads its speech model once)",
      apple: "Yes",
      wispr: "No",
      superwhisper: "Yes, with local models",
      highlight: false,
    },
    {
      feature: "App size",
      macvoice: "Under 1 MB",
      apple: "Built in",
      wispr: "Standard desktop app",
      superwhisper: "App + AI models you download",
      highlight: false,
    },
    {
      feature: "Price",
      macvoice: "$9 once",
      apple: "Free",
      wispr: "Free up to 2,000 words/week; Pro $144/year",
      superwhisper: "Free tier; Pro ~$85/year or $249.99 lifetime",
      highlight: true,
    },
    {
      feature: "Requires",
      macvoice: "macOS 26+",
      apple: "Any recent Mac",
      wispr: "Account + internet",
      superwhisper: "A Mac (plus model downloads)",
      highlight: false,
    },
  ];

  return (
    <section id="compare" className="py-24 bg-[#F5F5F7] border-y border-[#E8E8ED]">
      <Container>
        <SectionHeader
          eyebrow="Honest Comparison"
          title="How MacVoice compares"
          description="MacVoice is the small, private, pay-once option. Here's how it stacks up against the tools you may already know."
        />

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E8E8ED] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <thead>
              <tr className="border-b border-[#E8E8ED] bg-[#F5F5F7]">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Feature / Capability
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#0071E3] bg-[#EAF3FF] border-x border-[#0071E3]/20">
                  MacVoice (macOS)
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Apple Dictation
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Wispr Flow
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Superwhisper
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8ED] text-xs sm:text-sm">
              {rows.map((r, idx) => (
                <tr
                  key={idx}
                  className={r.highlight ? "bg-[#F5F5F7]/40" : "hover:bg-[#F5F5F7]/60"}
                >
                  <td className="py-4 px-6 font-medium text-[#1D1D1F]">
                    {r.feature}
                  </td>
                  <td className="py-4 px-6 font-bold text-[#0071E3] bg-[#EAF3FF] border-x border-[#0071E3]/20">
                    {r.macvoice}
                  </td>
                  <td className="py-4 px-6 text-[#6E6E73]">
                    {r.apple}
                  </td>
                  <td className="py-4 px-6 text-[#6E6E73]">
                    {r.wispr}
                  </td>
                  <td className="py-4 px-6 text-[#6E6E73]">
                    {r.superwhisper}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center text-xs text-[#6E6E73]">
          Competitor details from each vendor&apos;s public website and docs, last checked November 2026. Prices change; check their sites for the latest.
        </div>
      </Container>
    </section>
  );
}
