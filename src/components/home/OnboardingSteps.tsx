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
    <section className="py-24 bg-[#F5F5F7] border-b border-[#E8E8ED]">
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
                className="relative p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E8ED] flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#D2D2D7] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#D2D2D7]">
                      {s.num}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73] border border-[#E8E8ED]">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-[#EAF3FF] border border-[#0071E3]/20 text-[#0071E3] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                    {s.detail}
                  </p>
                </div>

                {idx === 2 && (
                  <div className="pt-4 border-t border-[#E8E8ED] flex items-center justify-between text-xs">
                    <span className="text-[#6E6E73]">Default hotkey:</span>
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
