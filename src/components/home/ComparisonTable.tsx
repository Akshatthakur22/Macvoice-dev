import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ComparisonTable() {
  const rows = [
    {
      feature: "Download Package Size",
      macvoice: "784 KB",
      apple: "Built-in",
      wispr: "~80 MB",
      superwhisper: "1.5 GB+",
      highlight: true,
    },
    {
      feature: "Active RAM Footprint",
      macvoice: "~60 MB",
      apple: "System daemon",
      wispr: "~180 MB",
      superwhisper: "500 MB – 1.8 GB",
      highlight: false,
    },
    {
      feature: "Typing Latency",
      macvoice: "< 150ms Live Streaming",
      apple: "~200ms Live",
      wispr: "~1.0s Cloud Loop",
      superwhisper: "2.5s Batch Wait",
      highlight: true,
    },
    {
      feature: "Vocal Filler Stripping ('um')",
      macvoice: "Instant (<0.1ms Swift)",
      apple: "None (types stutters)",
      wispr: "Cloud LLM",
      superwhisper: "Local LLM",
      highlight: false,
    },
    {
      feature: "Chat Safety (Shift+Enter)",
      macvoice: "Yes (Chat-Aware)",
      apple: "No (sends message)",
      wispr: "No (sends message)",
      superwhisper: "No (sends message)",
      highlight: true,
    },
    {
      feature: "Audio Privacy Architecture",
      macvoice: "100% On-Device RAM",
      apple: "Local / Apple Cloud",
      wispr: "Cloud Server Audio",
      superwhisper: "100% On-Device",
      highlight: false,
    },
    {
      feature: "Pricing Model",
      macvoice: "$9 USD One-Time",
      apple: "Free with macOS",
      wispr: "$144 / year recurring",
      superwhisper: "$250 Lifetime",
      highlight: true,
    },
  ];

  return (
    <section id="compare" className="py-24 bg-[#F5F5F7] border-y border-[#E8E8ED]">
      <Container>
        <SectionHeader
          eyebrow="Objective Comparison"
          title="Why Mac Power Users Choose MacVoice"
          description="A factual comparison against built-in dictation and heavy AI recorders. Dated October 2026."
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
          Source: Publicly verifiable technical specifications and reproducible local benchmarks on Apple Silicon.
        </div>
      </Container>
    </section>
  );
}
