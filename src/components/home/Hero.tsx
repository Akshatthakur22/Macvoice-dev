import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { ArrowRight, ShieldCheck, Zap, HardDrive, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#FFFFFF]">
      {/* Apple-style subtle ambient soft blue highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#EAF3FF]/70 blur-[130px] pointer-events-none -z-10 rounded-full" />
      
      <Container className="text-center">
        {/* Pill Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="blue" className="py-1 px-3.5 text-xs font-medium">
            <span className="flex h-2 w-2 rounded-full bg-[#0071E3] animate-pulse" />
            Built for macOS 26+ · 100% Apple Silicon Native · 784 KB
          </Badge>
        </div>

        {/* Primary H1 Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1D1D1F] max-w-4xl mx-auto leading-[1.08] mb-6">
          Speak. Type. <span className="text-[#0071E3]">Done.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          The ultra-lightweight, on-device voice keyboard for Mac power users.
          Types live at your cursor across VS Code, Slack, Obsidian, and every native Mac app.
          Instant filler removal. Zero cloud servers.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button
            href="/pricing"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-3.5 font-medium group"
          >
            Buy MacVoice — $9 USD
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            href="#demo"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-base px-7 py-3.5"
          >
            See Live Demo
          </Button>
        </div>

        {/* Micro-copy beneath CTA */}
        <p className="text-xs sm:text-sm text-[#6E6E73] mb-10 flex items-center justify-center gap-2 flex-wrap">
          <span>Requires macOS 26+ on Apple Silicon.</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>One-time purchase ($9).</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>No subscription or account.</span>
        </p>

        {/* Shortcut Quick Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E8E8ED] text-xs text-[#1D1D1F]">
          <span className="text-[#6E6E73]">Global Shortcut:</span>
          <ShortcutBadge keys={["Control", "Option", "Space"]} size="sm" />
          <span className="text-[#6E6E73]">or customize</span>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-[#E8E8ED] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <div className="p-2 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1D1D1F]">100% On-Device</div>
              <div className="text-[11px] text-[#6E6E73]">Audio stays in RAM</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <div className="p-2 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1D1D1F]">&lt; 150ms Latency</div>
              <div className="text-[11px] text-[#6E6E73]">Live cursor streaming</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <div className="p-2 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1D1D1F]">784 KB Package</div>
              <div className="text-[11px] text-[#6E6E73]">Pure native Swift</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED]">
            <div className="p-2 rounded-xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1D1D1F]">~60 MB RAM</div>
              <div className="text-[11px] text-[#6E6E73]">Zero battery drain</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
