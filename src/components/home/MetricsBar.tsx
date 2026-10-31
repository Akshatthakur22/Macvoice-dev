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
    <section className="py-14 bg-[#090e17] border-b border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111726]/80 border border-white/[0.08] hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                {m.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
