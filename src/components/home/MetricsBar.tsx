import React from "react";
import { Container } from "@/components/ui/Container";

export function MetricsBar() {
  const metrics = [
    {
      value: "784 KB",
      label: "DMG Package Size",
      detail: "Smaller than a single screenshot. No Python, Electron, or gigabyte model downloads.",
    },
    {
      value: "~60 MB",
      label: "Resident RAM",
      detail: "Native SpeechAnalyzer framework. Zero battery drain or system throttling.",
    },
    {
      value: "< 150 ms",
      label: "Cursor Latency",
      detail: "Words stream progressively to your cursor while speaking, without batch delay.",
    },
    {
      value: "0 Bytes",
      label: "Cloud Exfiltration",
      detail: "Audio is processed purely in RAM and immediately released. Zero internet required.",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E8E8ED]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight font-mono">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] pt-0.5">
                {m.label}
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed pt-1">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
