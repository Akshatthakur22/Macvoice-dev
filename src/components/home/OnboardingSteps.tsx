import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { ArrowDownToLine, ShieldCheck, Keyboard } from "lucide-react";

export function OnboardingSteps() {
  const steps = [
    {
      num: "01",
      icon: ArrowDownToLine,
      title: "Download & Drag to Applications",
      detail:
        "Open the compact 784 KB MacVoice.dmg and drag the MacVoice app into your macOS /Applications folder. No terminal setup or dependencies required.",
      badge: "Takes 3 seconds",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Grant Standard macOS Permissions",
      detail:
        "On first launch, approve standard macOS prompts for Microphone (to transcribe audio locally) and Accessibility (to synthesize typing into other apps).",
      badge: "Takes 10 seconds",
    },
    {
      num: "03",
      icon: Keyboard,
      title: "Press ⌃⌥Space and Start Speaking",
      detail:
        "Focus any text field in VS Code, Slack, Obsidian, or Safari. Press Control + Option + Space and speak naturally. Text streams live at your cursor.",
      badge: "Instant workflow",
    },
  ];

  return (
    <section className="py-24 bg-[#090e17] border-t border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Frictionless Onboarding"
          title="Up and Running in Less Than 30 Seconds"
          description="No accounts to create, no verification emails to wait for, and no cloud server provisioning."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#111726] border border-white/[0.08] flex flex-col justify-between hover:border-blue-500/30 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-blue-400/40">
                      {s.num}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {s.detail}
                  </p>
                </div>

                {idx === 2 && (
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-400">Default hotkey:</span>
                    <ShortcutBadge display="⌃⌥Space" size="sm" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
