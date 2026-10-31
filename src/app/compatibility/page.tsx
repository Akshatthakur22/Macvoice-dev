import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, AlertCircle, Info, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "Compatibility Matrix — MacVoice",
  description:
    "Review tested application compatibility, macOS version requirements, and keyboard-event insertion behavior across Mac apps.",
};

export default function CompatibilityPage() {
  const testedApps = [
    {
      app: "Apple TextEdit",
      status: "Verified",
      notes: "Full support for live cursor streaming, paragraph breaks, and punctuation.",
      testedOn: "macOS 26.6.2 (Apple Silicon)",
    },
    {
      app: "VS Code / Cursor",
      status: "Verified",
      notes: "Progressive keystroke streaming into code files, comments, and integrated terminal.",
      testedOn: "VS Code 1.95+",
    },
    {
      app: "Slack / Discord / Teams",
      status: "Verified (Chat-Safe)",
      notes: "Smart Shift+Return integration automatically prevents premature message transmission on 'new line'.",
      testedOn: "Latest desktop builds",
    },
    {
      app: "Safari / Chrome / Arc",
      status: "Verified",
      notes: "Tested across standard text inputs, textareas, and rich-text contentEditable editors (Google Docs, Notion).",
      testedOn: "WebKit & Chromium engines",
    },
    {
      app: "Terminal / iTerm2",
      status: "Verified",
      notes: "Verbatim mode recommended to prevent natural-language rewrite of shell flags and identifiers.",
      testedOn: "macOS Terminal & zsh",
    },
    {
      app: "Obsidian / Notes",
      status: "Verified",
      notes: "Live streaming into Markdown notes with bullet lists and section headers.",
      testedOn: "macOS Notes & Obsidian 1.7+",
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Tested Destinations"
          title="Application Compatibility Matrix"
          description="MacVoice inserts text using native macOS keyboard events (CGEvent). Here is the documented status across major developer and writing destinations."
        />

        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* Hardware & OS Requirements Box */}
          <div className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                System Requirements
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                MacVoice requires <strong>macOS 26.0 or later</strong> running on <strong>Apple Silicon</strong> (M1, M2, M3, M4 series chips).
                Intel-based Macs and earlier macOS versions (14 Sonoma, 15 Sequoia) are not supported because MacVoice depends directly on Apple's modern on-device SpeechAnalyzer architecture.
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <span>Architecture: arm64 (Apple Silicon)</span>
                <span>•</span>
                <span>SDK: macOS 26+</span>
              </div>
            </div>
          </div>

          {/* Compatibility Table */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Tested Applications
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#111726]">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-[#161e31] text-slate-400 font-semibold text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-5">Application</th>
                    <th className="py-3.5 px-5">Status</th>
                    <th className="py-3.5 px-5">Insertion Behavior</th>
                    <th className="py-3.5 px-5">Verified On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {testedApps.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01]">
                      <td className="py-3.5 px-5 font-semibold text-white">
                        {row.app}
                      </td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Check className="w-3 h-3" />
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-slate-300">
                        {row.notes}
                      </td>
                      <td className="py-3.5 px-5 font-mono text-slate-500 text-xs">
                        {row.testedOn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Known Limitations */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Documented Limitations & Boundaries
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-0.5">Secure Input Fields</strong>
                  macOS intentionally blocks synthetic <code className="font-mono text-slate-200">CGEvent</code> typing in password dialogs and 1Password master entry fields to prevent keylogging malware. MacVoice strictly adheres to macOS security guidelines and will not type into secure fields.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-0.5">Remote Desktop & Virtual Machines</strong>
                  In virtualized environments (Citrix, VMware Horizon, Microsoft Remote Desktop), whether keystrokes pass through depends on your VM client's input grab settings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
