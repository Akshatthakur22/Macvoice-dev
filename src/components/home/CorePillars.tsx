import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Zap, Sparkles, MessageSquareWarning, Check } from "lucide-react";

export function CorePillars() {
  const pillars = [
    {
      icon: Zap,
      eyebrow: "Streaming Engine",
      title: "Sub-150ms Live Cursor Streaming",
      headline: "Speak at 150 WPM. Watch text stream in real time.",
      description:
        "Most speech utilities trap you in an awkward batch loop: record audio, press stop, wait 4 seconds for an inference model to process, and copy-paste. MacVoice types words progressively into your active field the moment you utter them.",
      bullets: [
        "Keystroke-level insertion via macOS CGEvent",
        "No waiting for speech end to begin typing",
        "Keeps your cursor focused in the active app",
      ],
    },
    {
      icon: Sparkles,
      eyebrow: "Native Polisher",
      title: "In-Process Swift Polish (< 0.1ms Latency)",
      headline: "No more 'um', 'uh', or awkward stutters in your docs.",
      description:
        "Apple's built-in dictation transcribes every vocal hesitation and throat clearing. MacVoice's deterministic native Swift polisher strips filler words, fixes contractions ('dont' → 'don't'), and normalizes punctuation spacing in under 0.1ms.",
      bullets: [
        "0.1ms deterministic cleanup — zero LLM lag",
        "Strips vocal fillers without altering intent",
        "Deterministic fallback preserves original words if safety fails",
      ],
    },
    {
      icon: MessageSquareWarning,
      eyebrow: "Chat Protection",
      title: "Chat-Aware Shift+Enter Safety",
      headline: "Types everywhere. Never prematurely sends your Slack message.",
      description:
        "Saying 'new line' in Slack, Teams, WhatsApp, or Discord usually fires an accidental Enter key, sending an unfinished sentence to your colleagues. MacVoice automatically inspects active window context and issues Shift+Return in chat apps.",
      bullets: [
        "Automatic Slack, Discord, WhatsApp & Telegram detection",
        "Sends Shift+Return for intentional multi-line dictation",
        "Tested across code editors, terminals, and browsers",
      ],
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#090e17]">
      <Container>
        <SectionHeader
          eyebrow="Engineered for Power Users"
          title="The Three Pillars of Instant Dictation"
          description="Designed from the ground up for developers, writers, and Mac users who write all day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#111726] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block font-mono">
                    {p.eyebrow}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {p.headline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] space-y-2.5">
                  {p.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
