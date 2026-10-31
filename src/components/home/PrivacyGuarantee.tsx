import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lock, WifiOff, FileText, EyeOff, KeyRound } from "lucide-react";

export function PrivacyGuarantee() {
  const guarantees = [
    {
      icon: WifiOff,
      title: "Zero Cloud Sockets",
      description:
        "MacVoice contains no external networking libraries and initiates zero outbound sockets during transcription. Audio never leaves your physical device.",
    },
    {
      icon: Lock,
      title: "In-Memory Audio Processing",
      description:
        "Audio PCM buffers are processed live in resident RAM and wiped immediately. No recordings are ever written to disk, cache, or /tmp.",
    },
    {
      icon: FileText,
      title: "Zero History Retention",
      description:
        "MacVoice does not maintain a database of what you say. The moment a character is typed to your cursor, it is flushed from application memory.",
    },
    {
      icon: EyeOff,
      title: "Zero Telemetry & Tracking",
      description:
        "No Google Analytics, no Mixpanel, no crash-reporting trackers, and no user accounts. Your dictation remains strictly confidential.",
    },
  ];

  return (
    <section id="privacy" className="py-24 bg-[#070b12] border-t border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Air-Gap Security"
          title="What Happens on Your Mac, Stays on Your Mac."
          description="True privacy is an architectural guarantee, not marketing rhetoric. Here is exactly how MacVoice protects your confidential data."
        />

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {guarantees.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111726] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Permissions Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0f1422] border border-white/10 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <KeyRound className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">
              Transparent macOS Permission Rationale
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            macOS requires user authorization before any utility can capture audio or send synthetic keystrokes.
            MacVoice requests only the two strictly necessary permissions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">1. Microphone Access</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Required</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Passed directly to Apple's native <code className="text-slate-300 font-mono">SpeechAnalyzer</code> framework to perform local speech-to-text. Never stored or streamed anywhere.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">2. Accessibility Access</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Required</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Required for <code className="text-slate-300 font-mono">CGEvent.post()</code> so MacVoice can insert Unicode keystrokes directly into whatever app has focus without clobbering your clipboard.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Audit our technical architecture:</span>
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 font-medium">
              Read the full Air-Gap Architecture Report →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
