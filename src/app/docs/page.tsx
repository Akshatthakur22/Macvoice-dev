import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { BookOpen, Settings, Sliders, ShieldAlert, Trash2, Keyboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation & User Guide — MacVoice",
  description:
    "Complete user manual for MacVoice: quickstart, permission setup, shortcut customization, modes reference, and troubleshooting.",
};

export default function DocsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <Container size="narrow">
        <SectionHeader
          eyebrow="User Manual"
          title="MacVoice Documentation"
          description="Everything you need to configure, operate, and troubleshoot MacVoice on your Mac."
        />

        <div className="space-y-12 text-[#1D1D1F] text-sm leading-relaxed">
          {/* Quickstart */}
          <section id="quickstart" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                1. Installation & Quickstart
              </h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-[#6E6E73]">
              <li>
                Download <code className="text-[#0071E3] font-mono bg-[#EAF3FF] px-1.5 py-0.5 rounded">MacVoice.dmg</code> from your purchase confirmation page.
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
          <section id="shortcuts" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <Settings className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                2. Customizing Your Keyboard Shortcut
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              The default global trigger is <ShortcutBadge display="⌃⌥Space" size="sm" /> (Control + Option + Space).
              You can change this to any combination with modifiers:
            </p>
            <div className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-2.5">
              <p className="text-xs text-[#1D1D1F]">
                1. Click the <strong>MacVoice icon</strong> in your macOS menu bar.
              </p>
              <p className="text-xs text-[#1D1D1F]">
                2. Select <strong>Settings…</strong> from the dropdown.
              </p>
              <p className="text-xs text-[#1D1D1F]">
                3. Click the <strong>Record Shortcut</strong> button and press your desired key combination (e.g., <ShortcutBadge display="⌥Space" size="sm" /> or <ShortcutBadge display="⌘⇧D" size="sm" />).
              </p>
            </div>
          </section>

          {/* Modes Reference */}
          <section id="modes" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <Sliders className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                3. Two Dictation Modes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                <h3 className="font-semibold text-[#1D1D1F] mb-2">Verbatim Mode</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Passes the exact raw recognizer output directly to your cursor with minimal processing. Best for coding, shell commands, variable names, and technical terms.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]">
                <h3 className="font-semibold text-[#1D1D1F] mb-2">Polished Mode</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Strips vocal fillers ("um", "uh"), normalizes contractions ("dont" → "don't"), and formats capitalization in &lt;0.1ms using native Swift logic. Best for Slack, emails, and documents.
                </p>
              </div>
            </div>
          </section>

          {/* Hardware Keystroke Insertion Architecture */}
          <section id="keystrokes" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <Keyboard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                4. Simulated Hardware Keystrokes (CGEvent vs. Clipboard Pasting)
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              Unlike common dictation software that dumps text onto your clipboard (<code className="text-[#1D1D1F] font-mono text-xs">NSPasteboard</code>) and simulates a <code className="text-[#1D1D1F] font-mono text-xs">Cmd+V</code> keystroke, MacVoice uses native macOS Quartz Event Taps (<code className="text-[#1D1D1F] font-mono text-xs">CGEvent</code>).
            </p>
            <div className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 text-xs text-[#1D1D1F]">
              <p>
                <strong>• Immune to Copy-Paste Blocks:</strong> Works effortlessly inside secure forms, banking fields, online examination portals, and remote desktops (Citrix, VMware Horizon, AWS WorkSpaces) where pasting is blocked by <code className="font-mono text-[11px] bg-[#FFFFFF] px-1.5 py-0.5 rounded border border-[#E8E8ED]">onpaste="return false;"</code>.
              </p>
              <p>
                <strong>• Preserves Your System Clipboard:</strong> Whatever you previously copied (links, passwords, code snippets) stays intact on your clipboard. MacVoice never touches or overwrites your system clipboard.
              </p>
              <p>
                <strong>• Progressive Human Cadence:</strong> Keystrokes are emitted character-by-character as you speak, providing natural real-time streaming without trigger-happy bot detection or jarring bulk paste delays.
              </p>
            </div>
          </section>

          {/* Troubleshooting Permissions */}
          <section id="permissions" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                5. Troubleshooting Permissions
              </h2>
            </div>
            <p className="text-xs text-[#6E6E73]">
              If MacVoice does not type text into your active window:
            </p>
            <div className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] space-y-3 text-xs text-[#1D1D1F]">
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
          <section id="uninstall" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                6. Clean Uninstallation
              </h2>
            </div>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Because MacVoice does not install background daemons, system extensions, or kernel plugins, uninstallation is effortless:
            </p>
            <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] text-xs text-[#1D1D1F] font-mono leading-relaxed">
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
