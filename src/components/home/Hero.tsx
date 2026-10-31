import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-[#FFFFFF]">
      <Container className="text-center">
        {/* Friendly, human eyebrow pill */}
        <div className="flex justify-center mb-6">
          <Badge variant="blue" className="py-1 px-4 text-xs font-medium tracking-tight flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
            Instant voice typing for Mac · No subscription · $9 once
          </Badge>
        </div>

        {/* Primary H1 Headline: Punchy, human, confident */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] max-w-4xl mx-auto leading-[1.08] mb-6">
          Type at the speed of thought.
        </h1>

        {/* Sub-headline: Relatable human benefit */}
        <p className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
          Speak naturally and watch clean, punctuated text appear at your cursor in real time.
          Works in any app, removes your "ums" and "ahs" automatically, and types even where copy-paste is blocked.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
          <Button
            href="/pricing"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-[15px] px-8 py-3.5 font-medium group"
          >
            Get MacVoice for Mac — $9 USD
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>

          <Button
            href="#demo"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-[15px] px-7 py-3.5"
          >
            See How It Works
          </Button>
        </div>

        {/* Micro-copy beneath CTA: Reassuring, zero-friction */}
        <p className="text-xs text-[#6E6E73] mb-12 flex items-center justify-center gap-2 flex-wrap">
          <span>One-time purchase ($9).</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>No monthly subscription.</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>100% private on your Mac.</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>14-day money-back guarantee.</span>
        </p>

        {/* Shortcut Quick Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E8E8ED] text-xs text-[#1D1D1F]">
          <span className="text-[#6E6E73]">Press shortcut and talk:</span>
          <ShortcutBadge keys={["Control", "Option", "Space"]} size="sm" />
          <span className="text-[#6E6E73]">or choose your own keys</span>
        </div>
      </Container>
    </section>
  );
}
