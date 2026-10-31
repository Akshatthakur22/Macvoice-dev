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
    <section id="compare" className="py-24 bg-[#090e17]">
      <Container>
        <SectionHeader
          eyebrow="Objective Comparison"
          title="Why Mac Power Users Choose MacVoice"
          description="A factual comparison against built-in dictation and heavy AI recorders. Dated October 2026."
        />

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-[#111726] border border-white/[0.08] shadow-2xl">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#161e31]">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Feature / Capability
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border-x border-blue-500/20">
                  MacVoice (macOS)
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Apple Dictation
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Wispr Flow
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Superwhisper
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {rows.map((r, idx) => (
                <tr
                  key={idx}
                  className={r.highlight ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"}
                >
                  <td className="py-4 px-6 font-medium text-slate-200">
                    {r.feature}
                  </td>
                  <td className="py-4 px-6 font-semibold text-white bg-blue-500/10 border-x border-blue-500/20">
                    {r.macvoice}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {r.apple}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {r.wispr}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {r.superwhisper}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center text-xs text-slate-500">
          Source: Publicly verifiable technical specifications and reproducible local benchmarks on Apple Silicon.
        </div>
      </Container>
    </section>
  );
}
