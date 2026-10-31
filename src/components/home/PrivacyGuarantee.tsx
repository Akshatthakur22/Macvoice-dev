import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lock, WifiOff, FileText, EyeOff, KeyRound } from "lucide-react";

export function PrivacyGuarantee() {
  const guarantees = [
    {
      icon: WifiOff,
      title: "Never Uploaded to the Cloud",
      description:
        "Your voice is processed entirely on your Mac. Nothing is ever sent to cloud servers, big tech companies, or used to train third-party AI models.",
    },
    {
      icon: Lock,
      title: "No Audio Files Saved to Disk",
      description:
        "Once your words are typed out, the audio is instantly cleared from memory. No audio files or recordings ever sit on your computer's hard drive.",
    },
    {
      icon: FileText,
      title: "Zero Dictation History",
      description:
        "MacVoice is a keyboard, not a note recorder. We keep no logs, archives, or transcripts of what you say. Only the document you type in has your words.",
    },
    {
      icon: EyeOff,
      title: "No Tracking or Accounts",
      description:
        "No accounts, no email spam, no passwords to remember, and zero analytics trackers. Download it, use it, and stay completely anonymous.",
    },
  ];

  return (
    <section id="privacy" className="py-24 bg-[#FFFFFF]">
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
                className="p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] flex flex-col justify-between hover:border-[#D2D2D7] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF3FF] border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F] mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Permissions Card */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#EAF3FF] text-[#0071E3]">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1D1D1F]">
              Transparent macOS Permission Rationale
            </h3>
          </div>
          <p className="text-sm text-[#6E6E73] mb-6 leading-relaxed">
            macOS requires user authorization before any utility can capture audio or send synthetic keystrokes.
            MacVoice requests only the two strictly necessary permissions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1D1D1F]">1. Microphone Access</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Required</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Passed directly to Apple's native <code className="text-[#1D1D1F] font-mono">SpeechAnalyzer</code> framework to perform local speech-to-text. Never stored or streamed anywhere.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1D1D1F]">2. Accessibility Access</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Required</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Required for <code className="text-[#1D1D1F] font-mono">CGEvent.post()</code> so MacVoice can insert Unicode keystrokes directly into whatever app has focus without clobbering your clipboard.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8E8ED] flex items-center justify-between text-xs text-[#6E6E73]">
            <span>Audit our technical architecture:</span>
            <Link href="/privacy" className="text-[#0071E3] hover:text-[#0077ED] font-medium">
              Read the full Air-Gap Architecture Report →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
