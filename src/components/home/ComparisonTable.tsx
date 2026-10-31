import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ComparisonTable() {
  const rows = [
    {
      feature: "How Words Are Typed",
      macvoice: "Real Keyboard Keystrokes (Simulated typing)",
      apple: "System dictation bubble",
      wispr: "Clipboard paste (Cmd+V)",
      superwhisper: "Clipboard paste (Cmd+V)",
      highlight: true,
    },
    {
      feature: "Works Where Paste is Blocked",
      macvoice: "Yes (Immune to restrictions)",
      apple: "Partial",
      wispr: "No (Blocked by website)",
      superwhisper: "No (Blocked by website)",
      highlight: true,
    },
    {
      feature: "Overwrites What You Copied?",
      macvoice: "Never (Clipboard untouched)",
      apple: "Never",
      wispr: "Yes (Wipes your clipboard)",
      superwhisper: "Yes (Wipes your clipboard)",
      highlight: false,
    },
    {
      feature: "Removes 'Um' & 'Uh' Hesitations",
      macvoice: "Instant automatic cleanup",
      apple: "None (types every stutter)",
      wispr: "Cloud AI processing",
      superwhisper: "Local AI model",
      highlight: true,
    },
    {
      feature: "Typing Latency",
      macvoice: "< 150ms (Real-time as you speak)",
      apple: "~200ms",
      wispr: "~1.0s cloud delay",
      superwhisper: "2.5s batch wait",
      highlight: false,
    },
    {
      feature: "Safe in Chat Apps (Slack, Teams)",
      macvoice: "Yes (Won't accidentally send)",
      apple: "No (Sends message early)",
      wispr: "No (Sends message early)",
      superwhisper: "No (Sends message early)",
      highlight: true,
    },
    {
      feature: "Voice Privacy",
      macvoice: "100% on your Mac (Zero cloud audio)",
      apple: "Apple Cloud / Local",
      wispr: "Sent to cloud servers",
      superwhisper: "100% on your Mac",
      highlight: false,
    },
    {
      feature: "App Size & Memory Footprint",
      macvoice: "784 KB (~60 MB RAM)",
      apple: "Built into macOS",
      wispr: "~80 MB (~180 MB RAM)",
      superwhisper: "1.5 GB+ (500 MB – 1.8 GB RAM)",
      highlight: false,
    },
    {
      feature: "Pricing Model",
      macvoice: "$9 USD One-Time (Own forever)",
      apple: "Free with macOS",
      wispr: "$144 / year subscription",
      superwhisper: "$250 one-time",
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
