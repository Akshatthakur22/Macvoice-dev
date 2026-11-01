import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, WifiOff, HardDrive, FileLock, KeyRound, Terminal } from "lucide-react";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Air-Gap Privacy Architecture & Security Audit",
  description:
    "MacVoice is built with zero cloud dependencies. Audio is processed strictly in local RAM and discarded immediately. Read our architectural privacy audit.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/privacy",
  },
  openGraph: {
    title: "Privacy & Air-Gap Architecture — MacVoice",
    description:
      "Zero cloud dependencies. 100% on-device speech processing in resident memory. Verify with otool and lsof.",
    url: "https://macvoice.akshatt.in/privacy",
  },
};

const privacyBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", item: "https://macvoice.akshatt.in" },
  { name: "Privacy", item: "https://macvoice.akshatt.in/privacy" },
]);

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={privacyBreadcrumb} />
      <Container size="narrow">
        <SectionHeader
          eyebrow="Architectural Integrity"
          title="Privacy by Architecture, Not Policy."
          description="Most software asks you to trust their legal privacy policy while routing your voice through cloud servers. MacVoice eliminates the cloud server entirely."
        />

        <div className="space-y-12 text-[#1D1D1F] text-sm leading-relaxed">
          {/* Executive Architecture Summary */}
          <section id="architecture" className="p-8 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                Executive Privacy Summary
              </h2>
            </div>
            <p className="mb-4 text-[#1D1D1F]/90">
              MacVoice is a native macOS utility engineered with a strict <strong>local-first, air-gap architecture</strong>.
              When you dictate using MacVoice:
            </p>
            <ul className="space-y-2.5 list-disc list-inside text-[#6E6E73] pl-2">
              <li>Your voice audio is captured into temporary memory (RAM) and processed locally on Apple Silicon.</li>
              <li>Audio data is <strong>never written to disk</strong>, temporary directories, or swap files.</li>
              <li>Zero network sockets are created during voice typing. Your voice never leaves your Mac.</li>
              <li>MacVoice contains <strong>zero tracking SDKs, zero telemetry, and zero user accounts</strong>.</li>
            </ul>
          </section>

          {/* 1. In-Memory Audio Processing */}
          <section id="audio" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <HardDrive className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                1. In-Memory Audio Buffering
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              MacVoice captures microphone input via macOS's <code className="text-[#0071E3] font-mono bg-[#EAF3FF] px-1.5 py-0.5 rounded">AVAudioEngine</code>.
              Audio frames are streamed directly as raw PCM buffers into the active <code className="text-[#0071E3] font-mono bg-[#EAF3FF] px-1.5 py-0.5 rounded">SpeechAnalyzer</code> session.
            </p>
            <p className="text-[#6E6E73]">
              The moment transcription completes or the session is cancelled, the in-memory buffer is deallocated and cleared.
              At no point in the process is an audio file (e.g., .wav, .m4a, .pcm) saved to your filesystem, cache folder, or <code className="text-[#1D1D1F] font-mono">/tmp</code> directory.
            </p>
          </section>

          {/* 2. Zero Outbound Network Connections */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <WifiOff className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                2. Zero Outbound Network Sockets
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              The MacVoice binary is compiled in pure Swift and links only against Apple native frameworks (<code className="text-[#1D1D1F] font-mono">AppKit</code>, <code className="text-[#1D1D1F] font-mono">Speech</code>, <code className="text-[#1D1D1F] font-mono">CoreGraphics</code>, <code className="text-[#1D1D1F] font-mono">Carbon</code>).
              It contains zero networking libraries, analytics trackers, or cloud speech APIs.
            </p>
            <p className="text-[#6E6E73]">
              You can independently verify this at any time by monitoring MacVoice's network activity using macOS Activity Monitor, Little Snitch, or Wireshark. During voice typing, outbound traffic is <strong>0 bytes</strong>.
            </p>
          </section>

          {/* 3. Zero History Retention */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <FileLock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                3. Zero History Retention
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              MacVoice functions as a voice keyboard, not a note-taking application or meeting recorder.
              Once text is delivered to your active cursor via synthetic keyboard events, MacVoice maintains no local log or database of what you said.
            </p>
            <p className="text-[#6E6E73]">
              There is no "history" tab, no search archive, and no indexing of past dictations. What you say belongs solely in the destination document you chose to type into.
            </p>
          </section>

          {/* 4. macOS Permissions Audit */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
                <KeyRound className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                4. macOS System Permissions
              </h2>
            </div>
            <p className="text-[#6E6E73]">
              MacVoice requests exactly two system permissions, explicitly mandated by macOS security architecture:
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-1">
                  Microphone Access (<code className="text-[#0071E3] font-mono text-xs">NSMicrophoneUsageDescription</code>)
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  Allows MacVoice to stream live audio to Apple's local SpeechAnalyzer framework. macOS displays the standard orange microphone indicator in the menu bar whenever input is active.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
                <h3 className="text-base font-semibold text-[#1D1D1F] mb-1">
                  Accessibility Permission (Quartz HID Keystroke Synthesis)
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Required by macOS for <code className="text-[#1D1D1F] font-mono">CGEvent.post()</code> so MacVoice can synthesize authentic hardware keystrokes into whichever app holds current focus (e.g. VS Code, Slack, Safari, or remote terminals). Unlike conventional speech tools that monitor or overwrite your clipboard (<code className="text-[#1D1D1F] font-mono">NSPasteboard</code>), MacVoice never touches your clipboard and never inspects, captures, or logs your existing typing activity.
                </p>
              </div>
            </div>
          </section>

          {/* Verification Command for Developers */}
          <section className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-3">
              <Terminal className="w-4 h-4 text-[#0071E3]" />
              Developer Verification
            </div>
            <p className="text-xs text-[#6E6E73] mb-3">
              Inspect linked dynamic libraries on the official binary to confirm zero network dependencies:
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E8E8ED] font-mono text-xs text-[#1D1D1F] overflow-x-auto select-all">
              otool -L /Applications/MacVoice.app/Contents/MacOS/VoiceTypingApp
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
