import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, AlertCircle, Info, Laptop } from "lucide-react";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Compatibility Matrix & Tested Apps",
  description:
    "Review tested application compatibility, macOS version requirements, and keyboard-event insertion behavior across Mac apps.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/compatibility",
  },
  openGraph: {
    title: "Compatibility Matrix — MacVoice",
    description:
      "Tested across VS Code, Slack, Cursor, Safari, Chrome, Obsidian, Terminal, and more.",
    url: "https://macvoice.akshatt.in/compatibility",
  },
};

const compatibilityBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", item: "https://macvoice.akshatt.in" },
  { name: "Compatibility", item: "https://macvoice.akshatt.in/compatibility" },
]);

export default function CompatibilityPage() {
  // Status labels must reflect real testing. "Supported" = designed for and
  // expected to work; move a row to "Tested" only after a recorded check.
  const testedApps = [
    {
      app: "TextEdit, Notes, Pages, Word",
      status: "Supported",
      notes: "Text typed at the cursor; voice commands for new lines, paragraphs and bullet points.",
      testedOn: "Desktop writing apps",
    },
    {
      app: "Safari, Chrome, Arc, Firefox, Edge",
      status: "Supported",
      notes: "Normal text boxes and rich editors like Google Docs, Notion and Gmail. Works in most fields that block paste, because MacVoice doesn't paste.",
      testedOn: "Websites & web apps",
    },
    {
      app: "Slack, WhatsApp, Teams, Discord, Telegram, Messages, Signal",
      status: "Supported (chat-safe)",
      notes: "\"New line\" sends Shift+Return so messages aren't sent early. Also applies to Slack and WhatsApp in a browser.",
      testedOn: "Desktop & web chat",
    },
    {
      app: "VS Code, Cursor, Xcode, JetBrains IDEs",
      status: "Supported",
      notes: "Great for comments, commit messages, docs and AI-assistant prompts. Use custom words for project names and jargon.",
      testedOn: "Code editors",
    },
    {
      app: "Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm",
      status: "Supported (terminal-safe)",
      notes: "Polished mode only removes fillers here: no capitals, no trailing period, \"new line\" never presses Enter.",
      testedOn: "Terminals",
    },
    {
      app: "Remote desktops & VDI (Citrix, Microsoft Remote Desktop)",
      status: "Depends on client",
      notes: "Depends on how your remote-desktop client forwards keyboard input. It’s free, so try it on your setup.",
      testedOn: "Remote sessions",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={compatibilityBreadcrumb} />
      <Container size="narrow">
        <SectionHeader
          as="h1"
          eyebrow="Where It Works"
          title="Works in the apps you already use"
          description="MacVoice types your words as keyboard input into whatever text box is focused, so it works in almost any Mac app. Here's what to expect in each kind of app."
        />

        <div className="space-y-12 text-[#1D1D1F] text-sm leading-relaxed">
          {/* Hardware & OS Requirements Box */}
          <div id="requirements" className="p-7 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] flex items-start gap-4 shadow-sm">
            <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20 shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1D1D1F] mb-1">
                System Requirements
              </h2>
              <p className="text-xs text-[#6E6E73] leading-relaxed mb-3">
                MacVoice requires <strong>macOS 26.0 or later</strong> running on <strong>Apple Silicon</strong> (M1, M2, M3, M4 series chips).
                Intel-based Macs and earlier macOS versions (14 Sonoma, 15 Sequoia) are not supported because MacVoice depends directly on Apple's modern on-device SpeechAnalyzer architecture.
              </p>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E8E8ED] text-[#1D1D1F]">
                <span>Architecture: arm64 (Apple Silicon)</span>
                <span>•</span>
                <span>SDK: macOS 26+</span>
              </div>
            </div>
          </div>

          {/* Compatibility Table */}
          <div id="matrix">
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-4">
              App compatibility
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#E8E8ED] bg-[#FFFFFF] shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E8ED] bg-[#F5F5F7] text-[#6E6E73] font-semibold text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-5">Application</th>
                    <th className="py-3.5 px-5">Status</th>
                    <th className="py-3.5 px-5">Insertion Behavior</th>
                    <th className="py-3.5 px-5">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8ED]">
                  {testedApps.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F5F7]/50">
                      <td className="py-3.5 px-5 font-semibold text-[#1D1D1F]">
                        {row.app}
                      </td>
                      <td className="py-3.5 px-5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${row.status === "Depends on client" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`}>
                          {row.status === "Depends on client" ? <Info className="w-3 h-3" /> : <Check className="w-3 h-3" />}
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#6E6E73]">
                        {row.notes}
                      </td>
                      <td className="py-3.5 px-5 font-mono text-[#6E6E73] text-xs">
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
            <h2 className="text-xl font-bold text-[#1D1D1F]">
              Documented Limitations & Boundaries
            </h2>
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-[#6E6E73] leading-relaxed">
                  <strong className="text-[#1D1D1F] block mb-0.5">Secure Input Fields</strong>
                  macOS intentionally blocks synthetic <code className="font-mono text-[#1D1D1F] bg-[#FFFFFF] px-1 py-0.5 rounded border border-[#E8E8ED]">CGEvent</code> typing in password dialogs and 1Password master entry fields to prevent keylogging malware. MacVoice strictly adheres to macOS security guidelines and will not type into secure fields.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                <div className="text-xs text-[#6E6E73] leading-relaxed">
                  <strong className="text-[#1D1D1F] block mb-0.5">Remote Desktop & Virtual Machines</strong>
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
