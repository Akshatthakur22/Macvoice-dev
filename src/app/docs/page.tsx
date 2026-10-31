import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { BookOpen, Settings, Sliders, ShieldAlert, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation & User Guide — MacVoice",
  description:
    "Complete user manual for MacVoice: quickstart, permission setup, shortcut customization, modes reference, and troubleshooting.",
};

export default function DocsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeader
          eyebrow="User Manual"
          title="MacVoice Documentation"
          description="Everything you need to configure, operate, and troubleshoot MacVoice on your Mac."
        />

        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* Quickstart */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                1. Installation & Quickstart
              </h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-slate-300">
              <li>
                Download <code className="text-blue-300 font-mono">MacVoice.dmg</code> from your purchase confirmation page.
              </li>
              <li>
                Double-click the DMG to open it, and drag <strong>MacVoice.app</strong> into your <strong>/Applications</strong> folder.
              </li>
              <li>
                Launch MacVoice from Applications or Spotlight. You will see the MacVoice waveform icon appear in your top macOS menu bar.
              </li>
              <li>
                Click any text field (in VS Code, Slack, or Safari), press <ShortcutBadge display="⌃⌥Space" size="sm" />, and begin speaking!
              </li>
            </ol>
          </section>

          {/* Shortcut Customization */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Settings className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                2. Customizing Your Keyboard Shortcut
              </h2>
            </div>
            <p>
              The default global trigger is <ShortcutBadge display="⌃⌥Space" size="sm" /> (Control + Option + Space).
              You can change this to any combination with modifiers:
            </p>
            <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-2">
              <p className="text-xs text-slate-300">
                1. Click the <strong>MacVoice icon</strong> in your macOS menu bar.
              </p>
              <p className="text-xs text-slate-300">
                2. Select <strong>Settings…</strong> from the dropdown.
              </p>
              <p className="text-xs text-slate-300">
                3. Click the <strong>Record Shortcut</strong> button and press your desired key combination (e.g., <ShortcutBadge display="⌥Space" size="sm" /> or <ShortcutBadge display="⌘⇧D" size="sm" />).
              </p>
            </div>
          </section>

          {/* Modes Reference */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Sliders className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                3. Two Dictation Modes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08]">
                <h3 className="font-semibold text-white mb-2">Verbatim Mode</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passes the exact raw recognizer output directly to your cursor with minimal processing. Best for coding, shell commands, variable names, and technical terms.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08]">
                <h3 className="font-semibold text-white mb-2">Polished Mode</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strips vocal fillers ("um", "uh"), normalizes contractions ("dont" → "don't"), and formats capitalization in &lt;0.1ms using native Swift logic. Best for Slack, emails, and documents.
                </p>
              </div>
            </div>
          </section>

          {/* Troubleshooting Permissions */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                4. Troubleshooting Permissions
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              If MacVoice does not type text into your active window:
            </p>
            <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08] space-y-3 text-xs text-slate-300">
              <p>
                <strong>1. Verify Accessibility Permission:</strong> Open macOS <em>System Settings &gt; Privacy & Security &gt; Accessibility</em>. Ensure the toggle next to <strong>MacVoice</strong> is turned <strong>ON</strong>. If it was already on, toggle it off and back on to refresh the macOS permission cache.
              </p>
              <p>
                <strong>2. Verify Microphone Permission:</strong> Open <em>System Settings &gt; Privacy & Security &gt; Microphone</em> and ensure MacVoice is allowed.
              </p>
              <p>
                <strong>3. Initial Speech Asset Download:</strong> On first run, macOS may take 30–45 seconds to download Apple's speech recognition assets in the background. The MacVoice settings window will display <em>"Installing Apple speech assets…"</em> until complete.
              </p>
            </div>
          </section>

          {/* Uninstall */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                5. Clean Uninstallation
              </h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Because MacVoice does not install background daemons, system extensions, or kernel plugins, uninstallation is effortless:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
              1. Quit MacVoice from the menu bar.<br />
              2. Drag /Applications/MacVoice.app to Trash.<br />
              3. (Optional) Remove saved shortcuts: rm -rf ~/Library/Preferences/com.typer.voicetyping.plist
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
