import React from "react";
import { Container } from "@/components/ui/Container";

export function MetricsBar() {
  const metrics = [
    {
      value: "784 KB",
      label: "DMG Package Size",
      detail: "Smaller than a single screenshot. No bundled Python, Electron, or multi-gigabyte models.",
    },
    {
      value: "~60 MB",
      label: "Resident RAM",
      detail: "Uses Apple's native SpeechAnalyzer framework. Zero battery or thermal impact.",
    },
    {
      value: "< 150 ms",
      label: "Streaming Latency",
      detail: "Words stream progressively to your cursor while speaking, rather than waiting for long batch loops.",
    },
    {
      value: "0 Bytes",
      label: "Cloud Exfiltration",
      detail: "Audio is processed purely in RAM and immediately released. Zero internet required.",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F7] border-y border-[#E8E8ED]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#D2D2D7] transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight font-mono mb-1.5">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] mb-2">
                {m.label}
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
