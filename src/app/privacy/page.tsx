import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, WifiOff, HardDrive, FileLock, KeyRound, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Air-Gap Architecture — MacVoice",
  description:
    "MacVoice is built with zero cloud dependencies. Audio is processed strictly in local RAM and discarded immediately. Read our architectural privacy audit.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Architectural Integrity"
          title="Privacy by Architecture, Not Policy."
          description="Most software asks you to trust their legal privacy policy while routing your voice through cloud servers. MacVoice eliminates the cloud server entirely."
        />

        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* Executive Architecture Summary */}
          <section className="p-8 rounded-3xl bg-[#111726] border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-bold text-white">
                Executive Privacy Summary
              </h2>
            </div>
            <p className="mb-4">
              MacVoice is a native macOS utility engineered with a strict <strong>local-first, air-gap architecture</strong>.
              When you dictate using MacVoice:
            </p>
            <ul className="space-y-2 list-disc list-inside text-slate-300 pl-2">
              <li>Your voice audio is captured into temporary memory (RAM) and processed locally on Apple Silicon.</li>
              <li>Audio data is <strong>never written to disk</strong>, temporary directories, or swap files.</li>
              <li>Zero network sockets are created during voice typing. Your voice never leaves your Mac.</li>
              <li>MacVoice contains <strong>zero tracking SDKs, zero telemetry, and zero user accounts</strong>.</li>
            </ul>
          </section>

          {/* 1. In-Memory Audio Processing */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <HardDrive className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                1. In-Memory Audio Buffering
              </h2>
            </div>
            <p>
              MacVoice captures microphone input via macOS's <code className="text-blue-300 font-mono">AVAudioEngine</code>.
              Audio frames are streamed directly as raw PCM buffers into the active <code className="text-blue-300 font-mono">SpeechAnalyzer</code> session.
            </p>
            <p>
              The moment transcription completes or the session is cancelled, the in-memory buffer is deallocated and cleared.
              At no point in the process is an audio file (e.g., .wav, .m4a, .pcm) saved to your filesystem, cache folder, or <code className="text-slate-400 font-mono">/tmp</code> directory.
            </p>
          </section>

          {/* 2. Zero Outbound Network Connections */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <WifiOff className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                2. Zero Outbound Network Sockets
              </h2>
            </div>
            <p>
              The MacVoice binary is compiled in pure Swift and links only against Apple native frameworks (<code className="text-slate-300 font-mono">AppKit</code>, <code className="text-slate-300 font-mono">Speech</code>, <code className="text-slate-300 font-mono">CoreGraphics</code>, <code className="text-slate-300 font-mono">Carbon</code>).
              It contains zero networking libraries, analytics trackers, or cloud speech APIs.
            </p>
            <p className="text-slate-400">
              You can independently verify this at any time by monitoring MacVoice's network activity using macOS Activity Monitor, Little Snitch, or Wireshark. During voice typing, outbound traffic is <strong>0 bytes</strong>.
            </p>
          </section>

          {/* 3. Zero History Retention */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <FileLock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                3. Zero History Retention
              </h2>
            </div>
            <p>
              MacVoice functions as a voice keyboard, not a note-taking application or meeting recorder.
              Once text is delivered to your active cursor via synthetic keyboard events, MacVoice maintains no local log or database of what you said.
            </p>
            <p>
              There is no "history" tab, no search archive, and no indexing of past dictations. What you say belongs solely in the destination document you chose to type into.
            </p>
          </section>

          {/* 4. macOS Permissions Audit */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <KeyRound className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                4. macOS System Permissions
              </h2>
            </div>
            <p>
              MacVoice requests exactly two system permissions, explicitly mandated by macOS security architecture:
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08]">
                <h3 className="text-base font-semibold text-white mb-1">
                  Microphone Access (<code className="text-blue-400 font-mono text-xs">NSMicrophoneUsageDescription</code>)
                </h3>
                <p className="text-xs text-slate-400">
                  Allows MacVoice to stream live audio to Apple's local SpeechAnalyzer framework. macOS displays the standard orange microphone indicator in the menu bar whenever input is active.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#111726] border border-white/[0.08]">
                <h3 className="text-base font-semibold text-white mb-1">
                  Accessibility Permission
                </h3>
                <p className="text-xs text-slate-400">
                  Required by macOS for <code className="text-slate-300 font-mono">CGEvent.post()</code> so MacVoice can synthesize keystrokes into whichever app holds current focus (e.g. VS Code, Slack, Safari). MacVoice never inspects, captures, or logs your existing keyboard activity.
                </p>
              </div>
            </div>
          </section>

          {/* Verification Command for Developers */}
          <section className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              <Terminal className="w-4 h-4 text-blue-400" />
              Developer Verification
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Inspect linked dynamic libraries on the official binary to confirm zero network dependencies:
            </p>
            <div className="p-3 rounded-lg bg-black font-mono text-xs text-slate-300 overflow-x-auto select-all">
              otool -L /Applications/MacVoice.app/Contents/MacOS/VoiceTypingApp
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
